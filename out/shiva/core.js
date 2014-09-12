// Compiled by ClojureScript 0.0-2322
goog.provide('shiva.core');
goog.require('cljs.core');
goog.require('shiva.dom');
goog.require('cljs.core.async');
goog.require('shiva.dom');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
shiva.core.log = (function log(s){return console.log(cljs.core.pr_str.call(null,s));
});
shiva.core.rgb_val = (function rgb_val(color){var vec__14671 = cljs.core.re_matches.call(null,/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,color);var _ = cljs.core.nth.call(null,vec__14671,(0),null);var r = cljs.core.nth.call(null,vec__14671,(1),null);var g = cljs.core.nth.call(null,vec__14671,(2),null);var b = cljs.core.nth.call(null,vec__14671,(3),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(r),parseInt(g),parseInt(b)], null);
});
shiva.core.random_color = (function random_color(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(Math.random.call(null) * (255))),cljs.core.long$.call(null,(Math.random.call(null) * (255))),cljs.core.long$.call(null,(Math.random.call(null) * (255)))], null);
});
shiva.core.extract_color = (function extract_color(a,p){var color = p.style.fill;var rgb = shiva.core.rgb_val.call(null,color);var next_rgb = shiva.core.random_color.call(null);return cljs.core.assoc.call(null,a,rgb,next_rgb);
});
shiva.core.start_animation = (function start_animation(){cljs.core.enable_console_print_BANG_.call(null);
var svg = shiva.dom.by_id.call(null,"center").getSVGDocument();var svg_left = shiva.dom.by_id.call(null,"left").getSVGDocument();var svg_right = shiva.dom.by_id.call(null,"right").getSVGDocument();var parts = cljs.core.concat.call(null,shiva.dom.nodelist__GT_coll.call(null,svg.querySelectorAll("[style*='fill']")),shiva.dom.nodelist__GT_coll.call(null,svg_left.querySelectorAll("[style*='fill']")),shiva.dom.nodelist__GT_coll.call(null,svg_right.querySelectorAll("[style*='fill']")));var palette = cljs.core.reduce.call(null,shiva.core.extract_color,cljs.core.PersistentArrayMap.EMPTY,parts);var seq__14678 = cljs.core.seq.call(null,parts);var chunk__14679 = null;var count__14680 = (0);var i__14681 = (0);while(true){
if((i__14681 < count__14680))
{var p = cljs.core._nth.call(null,chunk__14679,i__14681);var color_14684 = shiva.core.rgb_val.call(null,p.style.fill);var vec__14682_14685 = cljs.core.get.call(null,palette,color_14684);var r_14686 = cljs.core.nth.call(null,vec__14682_14685,(0),null);var g_14687 = cljs.core.nth.call(null,vec__14682_14685,(1),null);var b_14688 = cljs.core.nth.call(null,vec__14682_14685,(2),null);shiva.dom.set_style_BANG_.call(null,p,"fill",("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_14686)+" ,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_14687)+" ,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_14688)+")"));
{
var G__14689 = seq__14678;
var G__14690 = chunk__14679;
var G__14691 = count__14680;
var G__14692 = (i__14681 + (1));
seq__14678 = G__14689;
chunk__14679 = G__14690;
count__14680 = G__14691;
i__14681 = G__14692;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14678);if(temp__4126__auto__)
{var seq__14678__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14678__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__14678__$1);{
var G__14693 = cljs.core.chunk_rest.call(null,seq__14678__$1);
var G__14694 = c__4314__auto__;
var G__14695 = cljs.core.count.call(null,c__4314__auto__);
var G__14696 = (0);
seq__14678 = G__14693;
chunk__14679 = G__14694;
count__14680 = G__14695;
i__14681 = G__14696;
continue;
}
} else
{var p = cljs.core.first.call(null,seq__14678__$1);var color_14697 = shiva.core.rgb_val.call(null,p.style.fill);var vec__14683_14698 = cljs.core.get.call(null,palette,color_14697);var r_14699 = cljs.core.nth.call(null,vec__14683_14698,(0),null);var g_14700 = cljs.core.nth.call(null,vec__14683_14698,(1),null);var b_14701 = cljs.core.nth.call(null,vec__14683_14698,(2),null);shiva.dom.set_style_BANG_.call(null,p,"fill",("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r_14699)+" ,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g_14700)+" ,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b_14701)+")"));
{
var G__14702 = cljs.core.next.call(null,seq__14678__$1);
var G__14703 = null;
var G__14704 = (0);
var G__14705 = (0);
seq__14678 = G__14702;
chunk__14679 = G__14703;
count__14680 = G__14704;
i__14681 = G__14705;
continue;
}
}
} else
{return null;
}
}
break;
}
});
shiva.core.do_layout = (function do_layout(){var ratio = ((1125) / (875));var ww = window.innerWidth;var wh = window.innerHeight;var h = cljs.core.quot.call(null,wh,(1));var w = cljs.core.long$.call(null,(h * ratio));var m = cljs.core.long$.call(null,((ww - w) / (2)));var center = shiva.dom.by_id.call(null,"center");var left = shiva.dom.by_id.call(null,"left");var right = shiva.dom.by_id.call(null,"right");shiva.dom.set_style_BANG_.call(null,center,"width",shiva.dom.px.call(null,w));
shiva.dom.set_style_BANG_.call(null,center,"height",shiva.dom.px.call(null,h));
shiva.dom.set_style_BANG_.call(null,left,"width",shiva.dom.px.call(null,w));
shiva.dom.set_style_BANG_.call(null,left,"height",shiva.dom.px.call(null,h));
shiva.dom.set_style_BANG_.call(null,right,"width",shiva.dom.px.call(null,w));
shiva.dom.set_style_BANG_.call(null,right,"height",shiva.dom.px.call(null,h));
shiva.dom.set_style_BANG_.call(null,left,"left",shiva.dom.px.call(null,(m - w)));
shiva.dom.set_style_BANG_.call(null,center,"left",shiva.dom.px.call(null,m));
return shiva.dom.set_style_BANG_.call(null,right,"left",shiva.dom.px.call(null,(w + m)));
});
shiva.core.doc_ready_handler = (function doc_ready_handler(handler){return (function (){var ready_state = document.readyState;if(cljs.core._EQ_.call(null,"complete",ready_state))
{return handler.call(null);
} else
{return null;
}
});
});
shiva.core.run = (function run(handler){return (document["onreadystatechange"] = shiva.core.doc_ready_handler.call(null,handler));
});
shiva.core.shiva_animation = (function shiva_animation(){shiva.core.do_layout.call(null);
return (window["onresize"] = shiva.core.do_layout);
});

//# sourceMappingURL=core.js.map