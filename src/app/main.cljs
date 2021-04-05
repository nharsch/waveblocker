(ns app.main
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [goog.dom :as d]
   [goog.events :as gevents]
   ["p5" :as p5]
   ["ml5" :as ml5]
   ))


(def BASE (/ 2 55))
(def OCTAVE-RANGE 3)

(defonce app-state
  (r/atom {
         :app-on false
         :mic-on false
         :pitch-on false
         :pitch 0
         :mic-sensitivity 0.25
         :mic-level 0
         :history []
         :redo []
         }))
; drawing separate atom state for performance?
(def drawing (atom false))


(defn undo []
  (if-not (empty? (:history @app-state))
    (do
      (swap! app-state assoc :redo (conj (:redo @app-state) (last (:history @app-state))))
      (swap! app-state assoc :history (pop (:history @app-state))))))

(defn redo []
  (if-not (empty? (:redo @app-state))
    (do
      (swap! app-state assoc :history (conj (:history @app-state) (last (:redo @app-state))))
      (swap! app-state assoc :redo (pop (:redo @app-state))))))

(defn turn-on [] (swap! app-state assoc :app-on true))

; utils
(defn v-update-last [v f]
  "return vector with last element updated"
  (conj
   (into [] (butlast v))
   (f (last v))))
;; (v-update-last [[{:x 1}{:x 2}] [{:x 1}{:x 2}]] (fn [v] (conj v {:x 3})))

(defn geo-sequence [a r n]
  (* a (Math/pow r (- n 1))))
;; (= (geo-sequence 1 2 3) 4)

(defn inverse-geo-prog [a r v]
  (+ (/
        (Math/log (/ v a))
        (Math/log r))
     1))
;; (= (inverse-geo-prog 1 2 4) 3)
;; (= (inverse-geo-prog 110 2 880) 4)
;;
;;
(defn level-curve [lmin lmax level]
  (Math/log2
   (+ 1
  ;;     ; set max vol ~ 80% min vol ~10%
      (*
       (/ 1 (- lmax lmin))
       (-
        (max lmin (min lmax level))
        lmin)
       ))))


;; (map (partial level-curve 0 0.1) [0 0.5 1])

(def level-curve-memo (memoize level-curve))

(defn get-mic-level [mic] ; curve val ;; (level-curve-memo (.getLevel mic))
  (level-curve-memo 0 (:mic-sensitivity @app-state) (.getLevel mic)))



;; (map Math/log2 [1 1.5 2])

(defn find-base-oct-freq [base freq]
  "given a minimum base frequency, find the nearest octave belor freq"
  (if (< freq base)
    nil
    (let [low (geo-sequence base 2 1)
            high (geo-sequence base 2 2)]
        (if (< freq high)
        base
        (find-base-oct-freq high freq)))))

(defn freq-to-hue [base-freq color-max freq]
  (let [low (find-base-oct-freq base-freq freq)
        i (* (- freq low) (/ 1 low))]
    (* (- (geo-sequence 1 2 (+ 1 i)) 1)
       color-max)))
(def freq-to-hue-memo (memoize freq-to-hue))
;; (map (partial freq-to-hue 110 100) [110 120 160 200 220])
;; (map (partial freq-to-hue 110 100) [220 440 880])


(defn freq-to-saturation [base octave-range sat-range freq]
  "given a base frequency, range of octaves, and a color range (from 0), find saturation value for frequency"
  (let [high (geo-sequence base 2 (+ 1 octave-range))]
    (*
     ; find the freq as a value in freq space, up to octave-range
     (/ (min (- (inverse-geo-prog base 2 freq) 1) octave-range)
        octave-range)
     sat-range)))
(def freq-to-saturation-memo (memoize freq-to-saturation))

(defn start-pitch [audioContext mic]
  (def pitch
    (ml5/pitchDetection "assets/app/model"
                        audioContext
                        mic.stream
                        (fn [] (println "model loaded")))))


(defn setup [p]
  (def cnv (.createCanvas p 1200 1200))
  (.mouseClicked cnv turn-on)
  (.userStartAudio p)
  (def audioContext (.getAudioContext p))
  (def mic (p5/AudioIn.))
  (.start mic (partial start-pitch audioContext mic))
)


(defn update-pitch []
  (pitch.getPitch
    (fn [err, freq]
      (if freq
        (swap! app-state assoc :pitch freq)))))

(defn paint-map [p]
  (let [freq (:pitch @app-state)]
    {:x (.-mouseX p)
     :y (.-mouseY p)
     :h (freq-to-hue-memo BASE 100 freq)
     :s (freq-to-saturation-memo BASE OCTAVE-RANGE 100 freq)
     :b (+ 10 (* 100 (get-mic-level mic)))}))

(defn draw-paint-map [p pm]
  (do
    (.colorMode p "hsb" 100)
    (.noStroke p)
    (.fill p (:h pm) (:s pm) (:b pm))
    (.ellipse p (:x pm) (:y pm) 40 40)))

(defn draw [p]
  (if p.mouseIsPressed
    ; pressed
    (if-not (> 0 (.-mouseY p))
      (do
        (if-not (:app-on @app-state)
          (reset! drawing true))
        (if-not @drawing
          (do
            (reset! drawing true)
            ; add new stroke map
            (swap! app-state update :history conj [(paint-map p)])))))
    ; not pressed
    (do
        (if @drawing
            (reset! drawing false))))

  (if-not (:app-on @app-state)
    (do
        (.textSize p 52)
        (.clear p)
        (.fill p 50)
        (.text p "tap to start" 50 80)
    )
    (do
        ; TODO: call update pitch less often than draw
        (.textSize p 12)
        (update-pitch)
        (swap! app-state assoc :mic-level (get-mic-level mic))
        (.background p 255)
        (doseq [strokes (:history @app-state)]
          (doseq [m strokes]
            (do
              (draw-paint-map p m))))
        (if @drawing
          ; append to last stroke history
          (let [nh (v-update-last (:history @app-state) (fn [v] (conj v (paint-map p))))]
            (swap! app-state assoc :history nh)))
        (.colorMode p "hsb" 100)
        (.noStroke p)
        ; draw paint tip
        (let [m (paint-map p)]
          (draw-paint-map p m)
          ; level fader
          (.rect p 0 10 (* 250 (get-mic-level mic)) 10))
        (.fill p  0 0 50)
        ; level ref
        (.rect p 0 0 250 10)
        (.fill p 0 0 0)
        (.text p "min vol" 1 8)
        (.fill p 0 0 100)
        (.text p "max vol" 205 8)
        )))



;; toolbar
(defn mic-slider []
  [:span "mic sensitivity"
    [:input {:type "range"
            :name "volume"
            :min 0 :max 0.99 :step 0.05
            :value (- 1 (:mic-sensitivity @app-state))
            :on-change (fn [event]
                          (swap! app-state assoc :mic-sensitivity (- 1 (-> event .-target .-value)))
                         )}]])

(defn toolbar-component []
  [:div
   [mic-slider]
   [:button {:on-click undo} "undo"]
   [:button {:on-click redo} "redo"]
  ])

(defn render-toolbar []
  (rdom/render
    [toolbar-component]
    (d/getElement "toolbar")))


;; start app
(def parent-id "canvas-container")
(when-not (d/getElement parent-id)
  (d/append js/document.body (d/createDom "div" #js {:id parent-id})))
(def canvas-div (d/getElement parent-id))
(def paint-canvas
    (new p5
        (fn [p]
            (set! (.-setup p) (fn [] (setup p)))
            (set! (.-draw p) (fn [] (draw p))))
        canvas-div))
(render-toolbar)
(println "app loaded")

