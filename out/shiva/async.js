// Compiled by ClojureScript 0.0-2322
goog.provide('shiva.async');
goog.require('cljs.core');
goog.require('shiva.dom');
goog.require('cljs.core.async');
goog.require('shiva.dom');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
shiva.async.rgb_val = (function rgb_val(color){var vec__9500 = cljs.core.re_matches.call(null,/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,color);var _ = cljs.core.nth.call(null,vec__9500,(0),null);var r = cljs.core.nth.call(null,vec__9500,(1),null);var g = cljs.core.nth.call(null,vec__9500,(2),null);var b = cljs.core.nth.call(null,vec__9500,(3),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(r),parseInt(g),parseInt(b)], null);
});
shiva.async.rgb__GT_s = (function rgb__GT_s(rgb){var vec__9502 = rgb;var r = cljs.core.nth.call(null,vec__9502,(0),null);var g = cljs.core.nth.call(null,vec__9502,(1),null);var b = cljs.core.nth.call(null,vec__9502,(2),null);return ("rgb("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)+" ,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)+" ,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+")");
});
shiva.async.random_color = (function random_color(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.long$.call(null,(Math.random.call(null) * (255))),cljs.core.long$.call(null,(Math.random.call(null) * (255))),cljs.core.long$.call(null,(Math.random.call(null) * (255)))], null);
});
shiva.async.extract_color = (function extract_color(a,p){var color = p.style.fill;var rgb = shiva.async.rgb_val.call(null,color);var next_rgb = shiva.async.random_color.call(null);return cljs.core.assoc.call(null,a,rgb,next_rgb);
});
shiva.async.init = (function init(){console.log("hello");
shiva.dom.set_style_BANG_.call(null,shiva.dom.by_id.call(null,"test"),"background-color",shiva.async.rgb__GT_s.call(null,shiva.async.random_color.call(null)));
var c = cljs.core.async.chan.call(null);var test_div = shiva.dom.by_id.call(null,"test");window.addEventListener("mousemove",((function (c,test_div){
return (function (e){var c__5722__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto__,c,test_div){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto__,c,test_div){
return (function (state_9558){var state_val_9559 = (state_9558[(1)]);if((state_val_9559 === (2)))
{var inst_9556 = (state_9558[(2)]);var state_9558__$1 = state_9558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9558__$1,inst_9556);
} else
{if((state_val_9559 === (1)))
{var inst_9550 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9551 = e.x;var inst_9552 = e.y;var inst_9553 = [inst_9551,inst_9552];var inst_9554 = (new cljs.core.PersistentVector(null,2,(5),inst_9550,inst_9553,null));var state_9558__$1 = state_9558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9558__$1,(2),c,inst_9554);
} else
{return null;
}
}
});})(c__5722__auto__,c,test_div))
;return ((function (switch__5707__auto__,c__5722__auto__,c,test_div){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_9563 = [null,null,null,null,null,null,null];(statearr_9563[(0)] = state_machine__5708__auto__);
(statearr_9563[(1)] = (1));
return statearr_9563;
});
var state_machine__5708__auto____1 = (function (state_9558){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_9558);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e9564){if((e9564 instanceof Object))
{var ex__5711__auto__ = e9564;var statearr_9565_9597 = state_9558;(statearr_9565_9597[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9564;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9598 = state_9558;
state_9558 = G__9598;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_9558){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_9558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto__,c,test_div))
})();var state__5724__auto__ = (function (){var statearr_9566 = f__5723__auto__.call(null);(statearr_9566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto__);
return statearr_9566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto__,c,test_div))
);
return c__5722__auto__;
});})(c,test_div))
);
var c__5722__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto__,c,test_div){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto__,c,test_div){
return (function (state_9581){var state_val_9582 = (state_9581[(1)]);if((state_val_9582 === (7)))
{var inst_9570 = (state_9581[(2)]);var inst_9571 = shiva.async.random_color.call(null);var inst_9572 = shiva.async.rgb__GT_s.call(null,inst_9571);var inst_9573 = shiva.dom.set_style_BANG_.call(null,test_div,"background-color",inst_9572);var state_9581__$1 = (function (){var statearr_9583 = state_9581;(statearr_9583[(7)] = inst_9573);
(statearr_9583[(8)] = inst_9570);
return statearr_9583;
})();var statearr_9584_9599 = state_9581__$1;(statearr_9584_9599[(2)] = null);
(statearr_9584_9599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9582 === (6)))
{var inst_9577 = (state_9581[(2)]);var state_9581__$1 = state_9581;var statearr_9585_9600 = state_9581__$1;(statearr_9585_9600[(2)] = inst_9577);
(statearr_9585_9600[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9582 === (5)))
{var state_9581__$1 = state_9581;var statearr_9586_9601 = state_9581__$1;(statearr_9586_9601[(2)] = null);
(statearr_9586_9601[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9582 === (4)))
{var state_9581__$1 = state_9581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9581__$1,(7),c);
} else
{if((state_val_9582 === (3)))
{var inst_9579 = (state_9581[(2)]);var state_9581__$1 = state_9581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9581__$1,inst_9579);
} else
{if((state_val_9582 === (2)))
{var state_9581__$1 = state_9581;var statearr_9587_9602 = state_9581__$1;(statearr_9587_9602[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9582 === (1)))
{var state_9581__$1 = state_9581;var statearr_9589_9603 = state_9581__$1;(statearr_9589_9603[(2)] = null);
(statearr_9589_9603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__5722__auto__,c,test_div))
;return ((function (switch__5707__auto__,c__5722__auto__,c,test_div){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_9593 = [null,null,null,null,null,null,null,null,null];(statearr_9593[(0)] = state_machine__5708__auto__);
(statearr_9593[(1)] = (1));
return statearr_9593;
});
var state_machine__5708__auto____1 = (function (state_9581){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_9581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e9594){if((e9594 instanceof Object))
{var ex__5711__auto__ = e9594;var statearr_9595_9604 = state_9581;(statearr_9595_9604[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9581);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9594;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9605 = state_9581;
state_9581 = G__9605;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_9581){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_9581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto__,c,test_div))
})();var state__5724__auto__ = (function (){var statearr_9596 = f__5723__auto__.call(null);(statearr_9596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto__);
return statearr_9596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto__,c,test_div))
);
return c__5722__auto__;
});

//# sourceMappingURL=async.js.map