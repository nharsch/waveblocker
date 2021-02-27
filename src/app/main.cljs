(ns app.main
  (:require
   [goog.dom :as d]
   ))


; TODO: mic input level atom
(def app-state
  (atom {
         :mic-level 0
         "sound-rgb" [0 0 0]}))



(defn setup [p]
  (def cnv (.createCanvas p 2100 1200))
  (p.userStartAudio)
  ;; (cnv.mousePressed (fn [] p.userStartAudio))
  (def mic (js/window.p5.AudioIn.))
  (def fft (js/window.p5.FFT. 0.8 32))
  (.start mic)
  (.setInput fft mic)
)

(defn draw [p]
  ; TOOD: but these together
  (.analyze fft)
  (swap! app-state assoc :sound-rgb
         [
          (.getEnergy fft "bass")
          (.getEnergy fft "mid")
          (.getEnergy fft "treble")
          ])
  (.fill p 50)
  (.text p "tap to start" 300 300)
  (.fill p
         (nth (@app-state :sound-rgb) 0)
         (nth (@app-state :sound-rgb) 1)
         (nth (@app-state :sound-rgb) 2))
  (.ellipse p (.-mouseX p) (.-mouseY p) 80 80))

(def parent-id  "example")
(when-not (d/getElement parent-id)
  (d/append js/document.body (d/createDom "div" #js {:id parent-id})))

(def example
  (new js/window.p5
    (fn [p]
      (set! (.-setup p) (fn [] (setup p)))
      (set! (.-draw p) (fn [] (draw p))))
       parent-id))

(.getLevel mic)
(.getEnergy fft)
