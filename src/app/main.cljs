(ns app.main
  (:require
   [goog.dom :as d]
   ))


; TODO: mic input level atom
(def app-state (atom { :mic-level 0 }))
; TODO: FFT input atom
;
;
(defn get-brush-rgb []
  [
   (* 255 ((comp Math/log2 inc) (:mic-level @app-state)))
   0
   0
   ]
)

;; (map (comp Math/log2 inc) [0 0.25 0.5 0.75 1])




;; @app-state

;; (.getLevel mic)
;; (get-brush-rgb)

(defn setup [p]
  (def cnv (.createCanvas p 640 480))
  (p.userStartAudio)
  ;; (cnv.mousePressed (fn [] p.userStartAudio))
  (def mic (js/window.p5.AudioIn.))
  (.start mic)
)

(defn draw [p]
  (swap! app-state assoc :mic-level (.getLevel mic))
  (.fill p 50)
  (.text p "tap to start" 300 300)
  (.fill p (first (get-brush-rgb)))
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
