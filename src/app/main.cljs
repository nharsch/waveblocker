(ns app.main
  (:require
   [goog.dom :as d]
   ))

;; (defn setup [p]
;;   ; bind start button
;;     (.createCanvas p 640 480)
;;     ;; (canv.mousePressed p.userStartAudio)
;;     (def mic (js/window.p5.AudioIn.))
;;     (.start mic)
;; )

;; (defn draw [p]
;;     (.background p 0)
;;     ;; (p.text "tap to start" (/ 2 p.width) 20)
;;     ;; (let [dark-level (- 255 (* 255 (.getLevel mic)))]
;;     ;;     (.fill p dark-level)
;;         ;; (.ellipse p (.-mouseX p) (.-mouseY p) 80 80))
;; )


(defn setup [p]
  (def cnv (.createCanvas p 640 480))
  (p.userStartAudio)
  ;; (cnv.mousePressed (fn [] p.userStartAudio))
  (def mic (js/window.p5.AudioIn.))
  (.start mic)
  )

(defn draw [p]
  (.fill p 50)
  (.text p "tap to start" 300 300)
  (let [dark-level (* 255 (.getLevel mic))]
    (.fill p dark-level)
    (.ellipse p (.-mouseX p) (.-mouseY p) 80 80)))

(def parent-id  "example")
(when-not (d/getElement parent-id)
  (d/append js/document.body (d/createDom "div" #js {:id parent-id})))

(def example
  (new js/window.p5
    (fn [p]
      (set! (.-setup p) (fn [] (setup p)))
      (set! (.-draw p) (fn [] (draw p))))
       parent-id))


