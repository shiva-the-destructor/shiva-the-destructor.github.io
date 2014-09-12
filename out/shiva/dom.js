// Compiled by ClojureScript 0.0-2322
goog.provide('shiva.dom');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('goog.style');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom');
shiva.dom.nodelist__GT_coll = (function nodelist__GT_coll(nl){var iter__4283__auto__ = (function iter__14629(s__14630){return (new cljs.core.LazySeq(null,(function (){var s__14630__$1 = s__14630;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14630__$1);if(temp__4126__auto__)
{var s__14630__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14630__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__14630__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__14632 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__14631 = (0);while(true){
if((i__14631 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__14631);cljs.core.chunk_append.call(null,b__14632,(nl[x]));
{
var G__14633 = (i__14631 + (1));
i__14631 = G__14633;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14632),iter__14629.call(null,cljs.core.chunk_rest.call(null,s__14630__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14632),null);
}
} else
{var x = cljs.core.first.call(null,s__14630__$2);return cljs.core.cons.call(null,(nl[x]),iter__14629.call(null,cljs.core.rest.call(null,s__14630__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,cljs.core.range.call(null,(0),nl.length));
});
shiva.dom.px = (function px(p){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+"px");
});
shiva.dom.by_id = (function by_id(id){return document.getElementById(id);
});
shiva.dom.set_html_BANG_ = (function set_html_BANG_(el,s){return el.innerHTML = s;
});
shiva.dom.set_style_BANG_ = (function set_style_BANG_(el,st,value){return goog.style.setStyle(el,st,value);
});
shiva.dom.set_text_BANG_ = (function set_text_BANG_(el,s){return goog.dom.setTextContent(el,s);
});
shiva.dom.set_class_BANG_ = (function set_class_BANG_(el,name){return goog.dom.classes.set(el,name);
});
shiva.dom.add_class_BANG_ = (function add_class_BANG_(el,name){return goog.dom.classes.add(el,name);
});
shiva.dom.remove_class_BANG_ = (function remove_class_BANG_(el,name){return goog.dom.classes.remove(el,name);
});
shiva.dom.tag_match = (function tag_match(tag){return (function (el){var temp__4126__auto__ = el.tagName;if(cljs.core.truth_(temp__4126__auto__))
{var tag_name = temp__4126__auto__;return cljs.core._EQ_.call(null,tag,tag_name.toLowerCase());
} else
{return null;
}
});
});
shiva.dom.parent = (function parent(el,tag){var matcher = shiva.dom.tag_match.call(null,tag);if(cljs.core.truth_(matcher.call(null,el)))
{return el;
} else
{return goog.dom.getAncestor(el,shiva.dom.tag_match.call(null,tag));
}
});
shiva.dom.el_matcher = (function el_matcher(el){return (function (other){return (other === el);
});
});
shiva.dom.by_tag_name = (function by_tag_name(el,tag){return cljs.core.prim_seq.call(null,goog.dom.getElementsByTagNameAndClass(tag,null,el));
});
shiva.dom.offset = (function offset(el){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.style.getPageOffsetLeft(el),goog.style.getPageOffsetTop(el)], null);
});
shiva.dom.in_QMARK_ = (function in_QMARK_(e,el){var target = e.target;return ((target === el)) || (!((goog.dom.getAncestor(target,shiva.dom.el_matcher.call(null,el)) == null)));
});

//# sourceMappingURL=dom.js.map