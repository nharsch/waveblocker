(ns app.main
  (:require
   [goog.dom :as d]
   ;; [goog.events :as gevents]
   ))


; TODO: mic input level atom
(def app-state
  (atom {
         :app-on false
         :mic-on false
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

(defn geo-progression [a r n]
  (* (* a 1) (Math/pow r (- n 1))))

(defn find-base-oct-freq [base freq]
  "given a minimum base frequency, find the nearest octave belor freq"
  (if (< freq base)
    nil
    (let [low (geo-progression base 2 1)
            high (geo-progression base 2 2)]
        (if (< freq high)
        base
        (find-base-oct-freq high freq)))))

;; (+ 1 (* (- 124 110) (/ 1 (* 2 110))))

(defn freq-to-hue [base-freq color-max freq]
  (let [low (find-base-oct-freq base-freq freq)
        i (* (- freq low) (/ 1 low))]
    (*
     (- (geo-progression 1 2 (+ 1 i)) 1)
     color-max)))
(map (partial freq-to-hue 110 100) [110 120 160 200 220])
(map (partial freq-to-hue 110 100) [220 440 880])

(defn freq-to-saturation [base octave-range sat-range freq]
  "given a base frequency, range of octaves, and a color range (from 0), find saturation value for frequency"
  (let [high (geo-progression base 2 octave-range)]
    ;; TODO
    ;; (* (- f base) (/)
    ))


(defn setup [p]
  (def cnv (.createCanvas p 2100 1200))
  cnv.mouseClicked
  (.mouseClicked cnv turn-on)
  (p.userStartAudio)
  (def mic (js/window.p5.AudioIn.))
  (def fft (js/window.p5.FFT. 0.8 32))
  (.start mic)
  (.setInput fft mic)
)


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
        (.analyze fft)
        ; get color info from mic
        (let [hue (fft-to-hue mic)]
            (.colorMode p "hsb" 100)
            (.fill p
                (* 100 (.getLevel mic))
                (* 100 (.getLevel mic))
                (* 100 (.getLevel mic))
                ;; (nth hue 0)
                ;; (nth hue 1)
                ;; (nth hue 2)))
                ))
        (.ellipse p (.-mouseX p) (.-mouseY p) 80 80))))

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
(Math/log10 1)
(Math/log10 1000000000)

(defn fit-freq [freq floor]
  (+ floor (Math/log1p freq))
)

(Math/log1p 220)
(fit-freq 110 110)
(fit-freq 220 110)
(fit-freq 440 220)

(defn reset-app-state []
  (swap! app-state (fn [] {:app-on false :mic-on false}))
)
(reset-app-state)

