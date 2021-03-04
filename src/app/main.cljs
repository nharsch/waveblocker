(ns app.main
  (:require
   [goog.dom :as d]
   ;; [goog.events :as gevents]
   ))


; TODO: mic input level atom
;
(def BASE (/ 2 55))
(def OCTAVE-RANGE 3)

(def app-state
  (atom {
         :app-on false
         :mic-on false
         :pitch 0
         :mic-level 0
         }
  )
)

(defn turn-on []
  (swap! app-state assoc :app-on true)
)

(defn fft-to-hue [fft]
  [
   (* 100 (:getLevel fft))
   50
   50
  ]
)

(defn geo-sequence [a r n]
  (* a (Math/pow r (- n 1))))
(= (geo-sequence 1 2 3) 4)

(defn inverse-geo-prog [a r v]
  (+ (/
        (Math/log (/ v a))
        (Math/log r))
     1))
(= (inverse-geo-prog 1 2 4) 3)
(= (inverse-geo-prog 110 2 880) 4)

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


(defn start-pitch [audioContext mic]
  (def pitch
    (js/window.ml5.pitchDetection "./model"
                        audioContext
                        mic.stream
                        (fn [] (println "model loaded")))))

(defn setup [p]
  (def cnv (.createCanvas p 2100 1200))
  cnv.mouseClicked
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

(defn draw [p]
  ; TOOD: but these together
  (if-not (:app-on @app-state)
    (do
        (.clear p)
        (.fill p 50)
        (.text p "tap to start" 300 300)
    )
    (do
        ; TODO: only call once
        ;; (.analyze fft)
        (update-pitch)
        ; get color info from mic

        (let [freq (:pitch @app-state)]
            (.colorMode p "hsb" 100)
            (.noStroke p)
            (.fill p
                (freq-to-hue BASE 100 freq)
                (freq-to-saturation BASE OCTAVE-RANGE 100 freq)
                (+ 10 (* 100 (.getLevel mic))))
            )
        (.ellipse p (.-mouseX p) (.-mouseY p) 60 60))))

(def parent-id  "example")
(when-not (d/getElement parent-id)
  (d/append js/document.body (d/createDom "div" #js {:id parent-id})))

(def example
  (new js/window.p5
    (fn [p]
      (set! (.-setup p) (fn [] (setup p)))
      (set! (.-draw p) (fn [] (draw p))))
       parent-id))


;; (.getLogAverages fft
 ;; (.getOctaveBands fft 1  55))
 ;;
;; (.logAverages fft (.getOctaveBands fft 1 55))

;; (.getCentroid fft)
;; (.getEnergy fft)
;; (.logAverages fft 5)

;; (defn fft-to-hue [fft]
;;   (let [octaves (.logAverages fft)]
;;    octaves
;;     )
;; )

;; @app-state
;;


(defn reset-app-state []
  (swap! app-state (fn [] {:app-on false :mic-on false}))
)
;; (reset-app-state)
