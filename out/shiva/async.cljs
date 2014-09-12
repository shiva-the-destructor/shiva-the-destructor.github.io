(ns shiva.async
	 (:require [cljs.core.async :as async
             :refer [<! >! chan put! timeout close!]]
             [shiva.dom :refer [by-id set-html! set-class! set-style! px]]
             )
  (:require-macros [cljs.core.async.macros :refer [go alt!]]))



(defn- rgb-val[color]
  (let [[_ r g b] (re-matches #"rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)" color)]
    [(js/parseInt r)
     (js/parseInt g)
     (js/parseInt b)]))

(defn- rgb->s[rgb]
  (let [[r g b] rgb]
    (str "rgb(" r " ," g " ," b ")")))


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


(defn init[]
  (.log js/console "hello")

  (set-style! (by-id "test")
            "background-color"
            (rgb->s (random-color)))


  (let [c (chan)
        test-div (by-id "test")]


    (.addEventListener js/window "mousemove"
                       (fn [e]
                         (go
                          (>! c [(.-x e) (.-y e)]))))

    (go
     (while true
       (let [loc (<! c)]

         ;(aset test-div "innerHTML" (str loc)))

         (set-style! test-div
            "background-color"
            (rgb->s (random-color))))

       ))))



;; david nolan's example

(comment

(def width 100)
(def height 100)

(defn gen-ui []
  (let [arr (array)]
    (loop [y 0]
      (when (< y height)
        (.push arr  "<tr>")
        (loop [x 0]
          (when (< x width)
            (.push arr (str "<td id='cell-") (+ x (* y width)) "'>0</td>")
            (recur (inc x))))
        (.push arr "</tr>")
        (recur (inc y))))
    (set-html! (by-id "big-table") (.join arr ""))))

(gen-ui)

(def group (atom 0))

(defn render! [queue]
  (let [g (str "group" @group)]
    (doseq [[idx v] queue]
      (let [cell (by-id (str "cell-" idx))]
        (set-html! cell v)
        (set-class! cell g)))
    (swap! group (fn [g] (mod (inc g) 5)))))

(defn render-loop [rate]
  (let [in (chan 1000)]
    (go (loop [refresh (timeout rate) queue []]
          (let [[v c] (alts! [refresh in])]
            (condp = c
              refresh (do (render! queue)
                        (<! (timeout 0))
                        (recur (timeout rate) []))
              in (recur refresh (conj queue v))))))
    in))

(let [render (render-loop 40)]
  (loop [i 0]
    (when (< i (* width height))
      (go (while true
            (<! (timeout (+ 1000 (rand-int 10000))))
            (>! render [(rand-int 10000) (rand-int 10)])))
      (recur (inc i)))))

)
