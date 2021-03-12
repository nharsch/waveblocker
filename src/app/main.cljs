(ns app.main
  (:require
   [goog.dom :as d]
   [goog.events :as gevents]
   ))


(def BASE (/ 2 55))
(def OCTAVE-RANGE 3)

(def app-state
  (atom {
         :app-on false
         :mic-on false
         :pitch-on false
         :pitch 0
         :history []
         :redo []
         }))
; drawing separate atom state for performance?
(def drawing (atom false))
(defn undo []
  (swap! app-state assoc :redo (conj (:redo @app-state) (last (:history @app-state))))
  (swap! app-state assoc :history (pop (:history @app-state)))
  (println "undo")
  (println @app-state)
  )

(defn redo []
  (swap! app-state assoc :history (conj (:history @app-state) (last (:redo @app-state))))
  (swap! app-state assoc :redo (pop (:redo @app-state)))
  (println "redo")
  (println @app-state))

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


(map (partial level-curve 0 0.1) [0 0.5 1])

(def level-curve-memo (memoize level-curve))

(defn get-mic-level [mic]
  ; curve val
  ;; (level-curve-memo (.getLevel mic))
  (level-curve 0 0.2 (.getLevel mic)))



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

; TODO memoize
(defn freq-to-hue [base-freq color-max freq]
  (let [low (find-base-oct-freq base-freq freq)
        i (* (- freq low) (/ 1 low))]
    (* (- (geo-sequence 1 2 (+ 1 i)) 1)
       color-max)))
;; (map (partial freq-to-hue 110 100) [110 120 160 200 220])
;; (map (partial freq-to-hue 110 100) [220 440 880])


; TODO: memoize
(defn freq-to-saturation [base octave-range sat-range freq]
  "given a base frequency, range of octaves, and a color range (from 0), find saturation value for frequency"
  (let [high (geo-sequence base 2 (+ 1 octave-range))]
    (*
     ; find the freq as a value in freq space, up to octave-range
     (/ (min (- (inverse-geo-prog base 2 freq) 1) octave-range)
        octave-range)
     sat-range)))


(defn start-pitch [audioContext mic]
  (def pitch
    (js/window.ml5.pitchDetection "./model"
                        audioContext
                        mic.stream
                        (fn [] (println "model loaded")))))

(defn setup [p]

  (def cnv (.createCanvas p 2100 1200))
  (.mouseClicked cnv turn-on)
  (p.userStartAudio)
  (def audioContext (p.getAudioContext))
  (def mic (js/window.p5.AudioIn.))
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
     :h (freq-to-hue BASE 100 freq)
     :s (freq-to-saturation BASE OCTAVE-RANGE 100 freq)
     :b (+ 10 (* 100 (get-mic-level mic)))}))


(defn draw [p]
  ;; (println @app-state)
  ;; (println @drawing)

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
        (.clear p)
        (.fill p 50)
        (.text p "tap to start" 300 300)
    )
    (do
        ; TODO: call update pitch less often than draw
        (update-pitch)
        (.background p 255)
        (doseq [strokes (:history @app-state)]
          (doseq [m strokes]
            (do
                (.colorMode p "hsb" 100)
                (.noStroke p)
                ; draw paint tip
                (.fill p (:h m) (:s m) (:b m))
                (.ellipse p (:x m) (:y m) 60 60))))
        (if @drawing
          ; append to last stroke history
          (let [nh (v-update-last (:history @app-state) (fn [v] (conj v (paint-map p))))]
            (swap! app-state assoc :history nh)))
        (.colorMode p "hsb" 100)
        (.noStroke p)
        ; draw paint tip
        (let [m (paint-map p)]
          (.fill p (:h m) (:s m) (:b m))
          (.ellipse p (:x m) (:y m) 60 60)
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

(gevents/listen (d/getElement "undo") (.-CLICK gevents/EventType) (fn [e] (undo)))
(gevents/listen (d/getElement "redo") (.-CLICK gevents/EventType) (fn [e] (redo)))

(def parent-id  "example")
(when-not (d/getElement parent-id)
  (d/append js/document.body (d/createDom "div" #js {:id parent-id})))

(def example
  (new js/window.p5
    (fn [p]
      (set! (.-setup p) (fn [] (setup p)))
      (set! (.-draw p) (fn [] (draw p))))
       parent-id))
