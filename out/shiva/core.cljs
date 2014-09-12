(ns shiva.core
  (:require [cljs.core.async :as async
             :refer [<! >! chan put! timeout]]
            [shiva.dom  :refer [by-id set-html! set-class! set-style! nodelist->coll px]])
  (:require-macros [cljs.core.async.macros :refer [go]]))


;; helpers

(defn log[s]
  (.log js/console (pr-str s)))


;

(defn- rgb-val[color]
  (let [[_ r g b] (re-matches #"rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)" color)]
    [(js/parseInt r)
     (js/parseInt g)
     (js/parseInt b)]))


(defn- random-color[]
  [(long (* (Math/random) 255))
   (long (* (Math/random) 255))
   (long (* (Math/random) 255))])


(defn- extract-color[a p]
  (let [color (.-fill (.-style p))
        rgb (rgb-val color)

        ; generate several mappings
        next-rgb (random-color)]
    (assoc a rgb next-rgb)))


;; app

(defn start-animation[]
  "does the magic"
  (enable-console-print!)


  (let [svg (.getSVGDocument (by-id "center"))
        svg-left (.getSVGDocument (by-id "left"))
        svg-right (.getSVGDocument (by-id "right"))
        parts (concat
               (nodelist->coll (.querySelectorAll svg "[style*='fill']"))
               (nodelist->coll (.querySelectorAll svg-left "[style*='fill']"))
               (nodelist->coll (.querySelectorAll svg-right "[style*='fill']")))
        palette (reduce extract-color {} parts)]

    (doseq [p parts]
      (let [color (rgb-val (.-fill (.-style p)))
            [r g b] (get palette color) ; (random-color)
            ]
        (set-style! p "fill" (str "rgb(" r " ," g " ," b ")"))))))




(defn do-layout[]
  (let [ratio (/ 1125 875)
        ww (.-innerWidth js/window)
        wh (.-innerHeight js/window)
        h (quot wh 1 )
        w (long (* h ratio))
        m (long (divide (- ww w) 2))

        center (by-id "center")
        left (by-id "left")
        right (by-id "right")]

    (set-style! center "width" (px w))
    (set-style! center "height" (px h))

    (set-style! left "width" (px w))
    (set-style! left "height" (px h))

    (set-style! right "width" (px w))
    (set-style! right "height" (px h))


    (set-style! left "left" (px (- m w)))
    (set-style! center "left" (px m ))
    (set-style! right "left" (px (+ w m)))))


(defn doc-ready-handler [handler]
  (fn[]
    (let[ ready-state (. js/document -readyState)]
      (when (= "complete" ready-state)
        (handler)))))


(defn run [handler]
    (aset js/document "onreadystatechange" (doc-ready-handler handler)))


(defn shiva-animation[]
  (do-layout)
  (aset js/window "onresize" do-layout)
  ;(start-animation)
  )

