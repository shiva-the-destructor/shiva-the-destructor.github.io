// Compiled by ClojureScript 0.0-2322
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10399 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10399 = (function (f,fn_handler,meta10400){
this.f = f;
this.fn_handler = fn_handler;
this.meta10400 = meta10400;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10399.cljs$lang$type = true;
cljs.core.async.t10399.cljs$lang$ctorStr = "cljs.core.async/t10399";
cljs.core.async.t10399.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t10399");
});
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10401){var self__ = this;
var _10401__$1 = this;return self__.meta10400;
});
cljs.core.async.t10399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10401,meta10400__$1){var self__ = this;
var _10401__$1 = this;return (new cljs.core.async.t10399(self__.f,self__.fn_handler,meta10400__$1));
});
cljs.core.async.__GT_t10399 = (function __GT_t10399(f__$1,fn_handler__$1,meta10400){return (new cljs.core.async.t10399(f__$1,fn_handler__$1,meta10400));
});
}
return (new cljs.core.async.t10399(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10403 = buff;if(G__10403)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__10403.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10403.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10403);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10403);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10404 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10404);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_10404,ret){
return (function (){return fn1.call(null,val_10404);
});})(val_10404,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___10405 = n;var x_10406 = (0);while(true){
if((x_10406 < n__4414__auto___10405))
{(a[x_10406] = (0));
{
var G__10407 = (x_10406 + (1));
x_10406 = G__10407;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10408 = (i + (1));
i = G__10408;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10412 = (function (flag,alt_flag,meta10413){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10413 = meta10413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10412.cljs$lang$type = true;
cljs.core.async.t10412.cljs$lang$ctorStr = "cljs.core.async/t10412";
cljs.core.async.t10412.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t10412");
});})(flag))
;
cljs.core.async.t10412.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t10412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t10412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_10414){var self__ = this;
var _10414__$1 = this;return self__.meta10413;
});})(flag))
;
cljs.core.async.t10412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_10414,meta10413__$1){var self__ = this;
var _10414__$1 = this;return (new cljs.core.async.t10412(self__.flag,self__.alt_flag,meta10413__$1));
});})(flag))
;
cljs.core.async.__GT_t10412 = ((function (flag){
return (function __GT_t10412(flag__$1,alt_flag__$1,meta10413){return (new cljs.core.async.t10412(flag__$1,alt_flag__$1,meta10413));
});})(flag))
;
}
return (new cljs.core.async.t10412(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10418 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10418 = (function (cb,flag,alt_handler,meta10419){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10419 = meta10419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10418.cljs$lang$type = true;
cljs.core.async.t10418.cljs$lang$ctorStr = "cljs.core.async/t10418";
cljs.core.async.t10418.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t10418");
});
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10418.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10420){var self__ = this;
var _10420__$1 = this;return self__.meta10419;
});
cljs.core.async.t10418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10420,meta10419__$1){var self__ = this;
var _10420__$1 = this;return (new cljs.core.async.t10418(self__.cb,self__.flag,self__.alt_handler,meta10419__$1));
});
cljs.core.async.__GT_t10418 = (function __GT_t10418(cb__$1,flag__$1,alt_handler__$1,meta10419){return (new cljs.core.async.t10418(cb__$1,flag__$1,alt_handler__$1,meta10419));
});
}
return (new cljs.core.async.t10418(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10421_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10421_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10422_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10422_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10423 = (i + (1));
i = G__10423;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3558__auto__ = ret;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10424){var map__10426 = p__10424;var map__10426__$1 = ((cljs.core.seq_QMARK_.call(null,map__10426))?cljs.core.apply.call(null,cljs.core.hash_map,map__10426):map__10426);var opts = map__10426__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__10424 = null;if (arguments.length > 1) {
  p__10424 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10424);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10427){
var ports = cljs.core.first(arglist__10427);
var p__10424 = cljs.core.rest(arglist__10427);
return alts_BANG___delegate(ports,p__10424);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5722__auto___10522 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___10522){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___10522){
return (function (state_10498){var state_val_10499 = (state_10498[(1)]);if((state_val_10499 === (7)))
{var inst_10494 = (state_10498[(2)]);var state_10498__$1 = state_10498;var statearr_10500_10523 = state_10498__$1;(statearr_10500_10523[(2)] = inst_10494);
(statearr_10500_10523[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (1)))
{var state_10498__$1 = state_10498;var statearr_10501_10524 = state_10498__$1;(statearr_10501_10524[(2)] = null);
(statearr_10501_10524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (4)))
{var inst_10477 = (state_10498[(7)]);var inst_10477__$1 = (state_10498[(2)]);var inst_10478 = (inst_10477__$1 == null);var state_10498__$1 = (function (){var statearr_10502 = state_10498;(statearr_10502[(7)] = inst_10477__$1);
return statearr_10502;
})();if(cljs.core.truth_(inst_10478))
{var statearr_10503_10525 = state_10498__$1;(statearr_10503_10525[(1)] = (5));
} else
{var statearr_10504_10526 = state_10498__$1;(statearr_10504_10526[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (13)))
{var state_10498__$1 = state_10498;var statearr_10505_10527 = state_10498__$1;(statearr_10505_10527[(2)] = null);
(statearr_10505_10527[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (6)))
{var inst_10477 = (state_10498[(7)]);var state_10498__$1 = state_10498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10498__$1,(11),to,inst_10477);
} else
{if((state_val_10499 === (3)))
{var inst_10496 = (state_10498[(2)]);var state_10498__$1 = state_10498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10498__$1,inst_10496);
} else
{if((state_val_10499 === (12)))
{var state_10498__$1 = state_10498;var statearr_10506_10528 = state_10498__$1;(statearr_10506_10528[(2)] = null);
(statearr_10506_10528[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (2)))
{var state_10498__$1 = state_10498;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10498__$1,(4),from);
} else
{if((state_val_10499 === (11)))
{var inst_10487 = (state_10498[(2)]);var state_10498__$1 = state_10498;if(cljs.core.truth_(inst_10487))
{var statearr_10507_10529 = state_10498__$1;(statearr_10507_10529[(1)] = (12));
} else
{var statearr_10508_10530 = state_10498__$1;(statearr_10508_10530[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (9)))
{var state_10498__$1 = state_10498;var statearr_10509_10531 = state_10498__$1;(statearr_10509_10531[(2)] = null);
(statearr_10509_10531[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (5)))
{var state_10498__$1 = state_10498;if(cljs.core.truth_(close_QMARK_))
{var statearr_10510_10532 = state_10498__$1;(statearr_10510_10532[(1)] = (8));
} else
{var statearr_10511_10533 = state_10498__$1;(statearr_10511_10533[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (14)))
{var inst_10492 = (state_10498[(2)]);var state_10498__$1 = state_10498;var statearr_10512_10534 = state_10498__$1;(statearr_10512_10534[(2)] = inst_10492);
(statearr_10512_10534[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (10)))
{var inst_10484 = (state_10498[(2)]);var state_10498__$1 = state_10498;var statearr_10513_10535 = state_10498__$1;(statearr_10513_10535[(2)] = inst_10484);
(statearr_10513_10535[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10499 === (8)))
{var inst_10481 = cljs.core.async.close_BANG_.call(null,to);var state_10498__$1 = state_10498;var statearr_10514_10536 = state_10498__$1;(statearr_10514_10536[(2)] = inst_10481);
(statearr_10514_10536[(1)] = (10));
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
}
}
}
}
}
}
}
});})(c__5722__auto___10522))
;return ((function (switch__5707__auto__,c__5722__auto___10522){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_10518 = [null,null,null,null,null,null,null,null];(statearr_10518[(0)] = state_machine__5708__auto__);
(statearr_10518[(1)] = (1));
return statearr_10518;
});
var state_machine__5708__auto____1 = (function (state_10498){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_10498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e10519){if((e10519 instanceof Object))
{var ex__5711__auto__ = e10519;var statearr_10520_10537 = state_10498;(statearr_10520_10537[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10498);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10519;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10538 = state_10498;
state_10498 = G__10538;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_10498){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_10498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___10522))
})();var state__5724__auto__ = (function (){var statearr_10521 = f__5723__auto__.call(null);(statearr_10521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___10522);
return statearr_10521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___10522))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__10722){var vec__10723 = p__10722;var v = cljs.core.nth.call(null,vec__10723,(0),null);var p = cljs.core.nth.call(null,vec__10723,(1),null);var job = vec__10723;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__5722__auto___10905 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___10905,res,vec__10723,v,p,job,jobs,results){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___10905,res,vec__10723,v,p,job,jobs,results){
return (function (state_10728){var state_val_10729 = (state_10728[(1)]);if((state_val_10729 === (2)))
{var inst_10725 = (state_10728[(2)]);var inst_10726 = cljs.core.async.close_BANG_.call(null,res);var state_10728__$1 = (function (){var statearr_10730 = state_10728;(statearr_10730[(7)] = inst_10725);
return statearr_10730;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10728__$1,inst_10726);
} else
{if((state_val_10729 === (1)))
{var state_10728__$1 = state_10728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10728__$1,(2),res,v);
} else
{return null;
}
}
});})(c__5722__auto___10905,res,vec__10723,v,p,job,jobs,results))
;return ((function (switch__5707__auto__,c__5722__auto___10905,res,vec__10723,v,p,job,jobs,results){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_10734 = [null,null,null,null,null,null,null,null];(statearr_10734[(0)] = state_machine__5708__auto__);
(statearr_10734[(1)] = (1));
return statearr_10734;
});
var state_machine__5708__auto____1 = (function (state_10728){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_10728);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e10735){if((e10735 instanceof Object))
{var ex__5711__auto__ = e10735;var statearr_10736_10906 = state_10728;(statearr_10736_10906[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10728);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10735;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10907 = state_10728;
state_10728 = G__10907;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_10728){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_10728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___10905,res,vec__10723,v,p,job,jobs,results))
})();var state__5724__auto__ = (function (){var statearr_10737 = f__5723__auto__.call(null);(statearr_10737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___10905);
return statearr_10737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___10905,res,vec__10723,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__10738){var vec__10739 = p__10738;var v = cljs.core.nth.call(null,vec__10739,(0),null);var p = cljs.core.nth.call(null,vec__10739,(1),null);var job = vec__10739;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4414__auto___10908 = n;var __10909 = (0);while(true){
if((__10909 < n__4414__auto___10908))
{var G__10740_10910 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__10740_10910) {
case "async":
var c__5722__auto___10912 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__10909,c__5722__auto___10912,G__10740_10910,n__4414__auto___10908,jobs,results,process,async){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (__10909,c__5722__auto___10912,G__10740_10910,n__4414__auto___10908,jobs,results,process,async){
return (function (state_10753){var state_val_10754 = (state_10753[(1)]);if((state_val_10754 === (7)))
{var inst_10749 = (state_10753[(2)]);var state_10753__$1 = state_10753;var statearr_10755_10913 = state_10753__$1;(statearr_10755_10913[(2)] = inst_10749);
(statearr_10755_10913[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (6)))
{var state_10753__$1 = state_10753;var statearr_10756_10914 = state_10753__$1;(statearr_10756_10914[(2)] = null);
(statearr_10756_10914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (5)))
{var state_10753__$1 = state_10753;var statearr_10757_10915 = state_10753__$1;(statearr_10757_10915[(2)] = null);
(statearr_10757_10915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (4)))
{var inst_10743 = (state_10753[(2)]);var inst_10744 = async.call(null,inst_10743);var state_10753__$1 = state_10753;if(cljs.core.truth_(inst_10744))
{var statearr_10758_10916 = state_10753__$1;(statearr_10758_10916[(1)] = (5));
} else
{var statearr_10759_10917 = state_10753__$1;(statearr_10759_10917[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10754 === (3)))
{var inst_10751 = (state_10753[(2)]);var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10753__$1,inst_10751);
} else
{if((state_val_10754 === (2)))
{var state_10753__$1 = state_10753;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10753__$1,(4),jobs);
} else
{if((state_val_10754 === (1)))
{var state_10753__$1 = state_10753;var statearr_10760_10918 = state_10753__$1;(statearr_10760_10918[(2)] = null);
(statearr_10760_10918[(1)] = (2));
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
});})(__10909,c__5722__auto___10912,G__10740_10910,n__4414__auto___10908,jobs,results,process,async))
;return ((function (__10909,switch__5707__auto__,c__5722__auto___10912,G__10740_10910,n__4414__auto___10908,jobs,results,process,async){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_10764 = [null,null,null,null,null,null,null];(statearr_10764[(0)] = state_machine__5708__auto__);
(statearr_10764[(1)] = (1));
return statearr_10764;
});
var state_machine__5708__auto____1 = (function (state_10753){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_10753);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e10765){if((e10765 instanceof Object))
{var ex__5711__auto__ = e10765;var statearr_10766_10919 = state_10753;(statearr_10766_10919[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10753);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10765;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10920 = state_10753;
state_10753 = G__10920;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_10753){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_10753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(__10909,switch__5707__auto__,c__5722__auto___10912,G__10740_10910,n__4414__auto___10908,jobs,results,process,async))
})();var state__5724__auto__ = (function (){var statearr_10767 = f__5723__auto__.call(null);(statearr_10767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___10912);
return statearr_10767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(__10909,c__5722__auto___10912,G__10740_10910,n__4414__auto___10908,jobs,results,process,async))
);

break;
case "compute":
var c__5722__auto___10921 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__10909,c__5722__auto___10921,G__10740_10910,n__4414__auto___10908,jobs,results,process,async){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (__10909,c__5722__auto___10921,G__10740_10910,n__4414__auto___10908,jobs,results,process,async){
return (function (state_10780){var state_val_10781 = (state_10780[(1)]);if((state_val_10781 === (7)))
{var inst_10776 = (state_10780[(2)]);var state_10780__$1 = state_10780;var statearr_10782_10922 = state_10780__$1;(statearr_10782_10922[(2)] = inst_10776);
(statearr_10782_10922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10781 === (6)))
{var state_10780__$1 = state_10780;var statearr_10783_10923 = state_10780__$1;(statearr_10783_10923[(2)] = null);
(statearr_10783_10923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10781 === (5)))
{var state_10780__$1 = state_10780;var statearr_10784_10924 = state_10780__$1;(statearr_10784_10924[(2)] = null);
(statearr_10784_10924[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10781 === (4)))
{var inst_10770 = (state_10780[(2)]);var inst_10771 = process.call(null,inst_10770);var state_10780__$1 = state_10780;if(cljs.core.truth_(inst_10771))
{var statearr_10785_10925 = state_10780__$1;(statearr_10785_10925[(1)] = (5));
} else
{var statearr_10786_10926 = state_10780__$1;(statearr_10786_10926[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10781 === (3)))
{var inst_10778 = (state_10780[(2)]);var state_10780__$1 = state_10780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10780__$1,inst_10778);
} else
{if((state_val_10781 === (2)))
{var state_10780__$1 = state_10780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10780__$1,(4),jobs);
} else
{if((state_val_10781 === (1)))
{var state_10780__$1 = state_10780;var statearr_10787_10927 = state_10780__$1;(statearr_10787_10927[(2)] = null);
(statearr_10787_10927[(1)] = (2));
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
});})(__10909,c__5722__auto___10921,G__10740_10910,n__4414__auto___10908,jobs,results,process,async))
;return ((function (__10909,switch__5707__auto__,c__5722__auto___10921,G__10740_10910,n__4414__auto___10908,jobs,results,process,async){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_10791 = [null,null,null,null,null,null,null];(statearr_10791[(0)] = state_machine__5708__auto__);
(statearr_10791[(1)] = (1));
return statearr_10791;
});
var state_machine__5708__auto____1 = (function (state_10780){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_10780);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e10792){if((e10792 instanceof Object))
{var ex__5711__auto__ = e10792;var statearr_10793_10928 = state_10780;(statearr_10793_10928[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10780);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10792;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10929 = state_10780;
state_10780 = G__10929;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_10780){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_10780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(__10909,switch__5707__auto__,c__5722__auto___10921,G__10740_10910,n__4414__auto___10908,jobs,results,process,async))
})();var state__5724__auto__ = (function (){var statearr_10794 = f__5723__auto__.call(null);(statearr_10794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___10921);
return statearr_10794;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(__10909,c__5722__auto___10921,G__10740_10910,n__4414__auto___10908,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__10930 = (__10909 + (1));
__10909 = G__10930;
continue;
}
} else
{}
break;
}
var c__5722__auto___10931 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___10931,jobs,results,process,async){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___10931,jobs,results,process,async){
return (function (state_10816){var state_val_10817 = (state_10816[(1)]);if((state_val_10817 === (9)))
{var inst_10809 = (state_10816[(2)]);var state_10816__$1 = (function (){var statearr_10818 = state_10816;(statearr_10818[(7)] = inst_10809);
return statearr_10818;
})();var statearr_10819_10932 = state_10816__$1;(statearr_10819_10932[(2)] = null);
(statearr_10819_10932[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10817 === (8)))
{var inst_10802 = (state_10816[(8)]);var inst_10807 = (state_10816[(2)]);var state_10816__$1 = (function (){var statearr_10820 = state_10816;(statearr_10820[(9)] = inst_10807);
return statearr_10820;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10816__$1,(9),results,inst_10802);
} else
{if((state_val_10817 === (7)))
{var inst_10812 = (state_10816[(2)]);var state_10816__$1 = state_10816;var statearr_10821_10933 = state_10816__$1;(statearr_10821_10933[(2)] = inst_10812);
(statearr_10821_10933[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10817 === (6)))
{var inst_10797 = (state_10816[(10)]);var inst_10802 = (state_10816[(8)]);var inst_10802__$1 = cljs.core.async.chan.call(null,(1));var inst_10803 = cljs.core.PersistentVector.EMPTY_NODE;var inst_10804 = [inst_10797,inst_10802__$1];var inst_10805 = (new cljs.core.PersistentVector(null,2,(5),inst_10803,inst_10804,null));var state_10816__$1 = (function (){var statearr_10822 = state_10816;(statearr_10822[(8)] = inst_10802__$1);
return statearr_10822;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10816__$1,(8),jobs,inst_10805);
} else
{if((state_val_10817 === (5)))
{var inst_10800 = cljs.core.async.close_BANG_.call(null,jobs);var state_10816__$1 = state_10816;var statearr_10823_10934 = state_10816__$1;(statearr_10823_10934[(2)] = inst_10800);
(statearr_10823_10934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10817 === (4)))
{var inst_10797 = (state_10816[(10)]);var inst_10797__$1 = (state_10816[(2)]);var inst_10798 = (inst_10797__$1 == null);var state_10816__$1 = (function (){var statearr_10824 = state_10816;(statearr_10824[(10)] = inst_10797__$1);
return statearr_10824;
})();if(cljs.core.truth_(inst_10798))
{var statearr_10825_10935 = state_10816__$1;(statearr_10825_10935[(1)] = (5));
} else
{var statearr_10826_10936 = state_10816__$1;(statearr_10826_10936[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10817 === (3)))
{var inst_10814 = (state_10816[(2)]);var state_10816__$1 = state_10816;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10816__$1,inst_10814);
} else
{if((state_val_10817 === (2)))
{var state_10816__$1 = state_10816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10816__$1,(4),from);
} else
{if((state_val_10817 === (1)))
{var state_10816__$1 = state_10816;var statearr_10827_10937 = state_10816__$1;(statearr_10827_10937[(2)] = null);
(statearr_10827_10937[(1)] = (2));
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
}
}
});})(c__5722__auto___10931,jobs,results,process,async))
;return ((function (switch__5707__auto__,c__5722__auto___10931,jobs,results,process,async){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_10831 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_10831[(0)] = state_machine__5708__auto__);
(statearr_10831[(1)] = (1));
return statearr_10831;
});
var state_machine__5708__auto____1 = (function (state_10816){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_10816);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e10832){if((e10832 instanceof Object))
{var ex__5711__auto__ = e10832;var statearr_10833_10938 = state_10816;(statearr_10833_10938[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10816);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10832;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10939 = state_10816;
state_10816 = G__10939;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_10816){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_10816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___10931,jobs,results,process,async))
})();var state__5724__auto__ = (function (){var statearr_10834 = f__5723__auto__.call(null);(statearr_10834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___10931);
return statearr_10834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___10931,jobs,results,process,async))
);
var c__5722__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto__,jobs,results,process,async){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto__,jobs,results,process,async){
return (function (state_10872){var state_val_10873 = (state_10872[(1)]);if((state_val_10873 === (7)))
{var inst_10868 = (state_10872[(2)]);var state_10872__$1 = state_10872;var statearr_10874_10940 = state_10872__$1;(statearr_10874_10940[(2)] = inst_10868);
(statearr_10874_10940[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (20)))
{var state_10872__$1 = state_10872;var statearr_10875_10941 = state_10872__$1;(statearr_10875_10941[(2)] = null);
(statearr_10875_10941[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (1)))
{var state_10872__$1 = state_10872;var statearr_10876_10942 = state_10872__$1;(statearr_10876_10942[(2)] = null);
(statearr_10876_10942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (4)))
{var inst_10837 = (state_10872[(7)]);var inst_10837__$1 = (state_10872[(2)]);var inst_10838 = (inst_10837__$1 == null);var state_10872__$1 = (function (){var statearr_10877 = state_10872;(statearr_10877[(7)] = inst_10837__$1);
return statearr_10877;
})();if(cljs.core.truth_(inst_10838))
{var statearr_10878_10943 = state_10872__$1;(statearr_10878_10943[(1)] = (5));
} else
{var statearr_10879_10944 = state_10872__$1;(statearr_10879_10944[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (15)))
{var inst_10850 = (state_10872[(8)]);var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10872__$1,(18),to,inst_10850);
} else
{if((state_val_10873 === (21)))
{var inst_10863 = (state_10872[(2)]);var state_10872__$1 = state_10872;var statearr_10880_10945 = state_10872__$1;(statearr_10880_10945[(2)] = inst_10863);
(statearr_10880_10945[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (13)))
{var inst_10865 = (state_10872[(2)]);var state_10872__$1 = (function (){var statearr_10881 = state_10872;(statearr_10881[(9)] = inst_10865);
return statearr_10881;
})();var statearr_10882_10946 = state_10872__$1;(statearr_10882_10946[(2)] = null);
(statearr_10882_10946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (6)))
{var inst_10837 = (state_10872[(7)]);var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10872__$1,(11),inst_10837);
} else
{if((state_val_10873 === (17)))
{var inst_10858 = (state_10872[(2)]);var state_10872__$1 = state_10872;if(cljs.core.truth_(inst_10858))
{var statearr_10883_10947 = state_10872__$1;(statearr_10883_10947[(1)] = (19));
} else
{var statearr_10884_10948 = state_10872__$1;(statearr_10884_10948[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (3)))
{var inst_10870 = (state_10872[(2)]);var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10872__$1,inst_10870);
} else
{if((state_val_10873 === (12)))
{var inst_10847 = (state_10872[(10)]);var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10872__$1,(14),inst_10847);
} else
{if((state_val_10873 === (2)))
{var state_10872__$1 = state_10872;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10872__$1,(4),results);
} else
{if((state_val_10873 === (19)))
{var state_10872__$1 = state_10872;var statearr_10885_10949 = state_10872__$1;(statearr_10885_10949[(2)] = null);
(statearr_10885_10949[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (11)))
{var inst_10847 = (state_10872[(2)]);var state_10872__$1 = (function (){var statearr_10886 = state_10872;(statearr_10886[(10)] = inst_10847);
return statearr_10886;
})();var statearr_10887_10950 = state_10872__$1;(statearr_10887_10950[(2)] = null);
(statearr_10887_10950[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (9)))
{var state_10872__$1 = state_10872;var statearr_10888_10951 = state_10872__$1;(statearr_10888_10951[(2)] = null);
(statearr_10888_10951[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (5)))
{var state_10872__$1 = state_10872;if(cljs.core.truth_(close_QMARK_))
{var statearr_10889_10952 = state_10872__$1;(statearr_10889_10952[(1)] = (8));
} else
{var statearr_10890_10953 = state_10872__$1;(statearr_10890_10953[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (14)))
{var inst_10850 = (state_10872[(8)]);var inst_10852 = (state_10872[(11)]);var inst_10850__$1 = (state_10872[(2)]);var inst_10851 = (inst_10850__$1 == null);var inst_10852__$1 = cljs.core.not.call(null,inst_10851);var state_10872__$1 = (function (){var statearr_10891 = state_10872;(statearr_10891[(8)] = inst_10850__$1);
(statearr_10891[(11)] = inst_10852__$1);
return statearr_10891;
})();if(inst_10852__$1)
{var statearr_10892_10954 = state_10872__$1;(statearr_10892_10954[(1)] = (15));
} else
{var statearr_10893_10955 = state_10872__$1;(statearr_10893_10955[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (16)))
{var inst_10852 = (state_10872[(11)]);var state_10872__$1 = state_10872;var statearr_10894_10956 = state_10872__$1;(statearr_10894_10956[(2)] = inst_10852);
(statearr_10894_10956[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (10)))
{var inst_10844 = (state_10872[(2)]);var state_10872__$1 = state_10872;var statearr_10895_10957 = state_10872__$1;(statearr_10895_10957[(2)] = inst_10844);
(statearr_10895_10957[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (18)))
{var inst_10855 = (state_10872[(2)]);var state_10872__$1 = state_10872;var statearr_10896_10958 = state_10872__$1;(statearr_10896_10958[(2)] = inst_10855);
(statearr_10896_10958[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10873 === (8)))
{var inst_10841 = cljs.core.async.close_BANG_.call(null,to);var state_10872__$1 = state_10872;var statearr_10897_10959 = state_10872__$1;(statearr_10897_10959[(2)] = inst_10841);
(statearr_10897_10959[(1)] = (10));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5722__auto__,jobs,results,process,async))
;return ((function (switch__5707__auto__,c__5722__auto__,jobs,results,process,async){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_10901 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10901[(0)] = state_machine__5708__auto__);
(statearr_10901[(1)] = (1));
return statearr_10901;
});
var state_machine__5708__auto____1 = (function (state_10872){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_10872);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e10902){if((e10902 instanceof Object))
{var ex__5711__auto__ = e10902;var statearr_10903_10960 = state_10872;(statearr_10903_10960[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10902;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10961 = state_10872;
state_10872 = G__10961;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_10872){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_10872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto__,jobs,results,process,async))
})();var state__5724__auto__ = (function (){var statearr_10904 = f__5723__auto__.call(null);(statearr_10904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto__);
return statearr_10904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto__,jobs,results,process,async))
);
return c__5722__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5722__auto___11062 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___11062,tc,fc){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___11062,tc,fc){
return (function (state_11037){var state_val_11038 = (state_11037[(1)]);if((state_val_11038 === (7)))
{var inst_11033 = (state_11037[(2)]);var state_11037__$1 = state_11037;var statearr_11039_11063 = state_11037__$1;(statearr_11039_11063[(2)] = inst_11033);
(statearr_11039_11063[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (1)))
{var state_11037__$1 = state_11037;var statearr_11040_11064 = state_11037__$1;(statearr_11040_11064[(2)] = null);
(statearr_11040_11064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (4)))
{var inst_11014 = (state_11037[(7)]);var inst_11014__$1 = (state_11037[(2)]);var inst_11015 = (inst_11014__$1 == null);var state_11037__$1 = (function (){var statearr_11041 = state_11037;(statearr_11041[(7)] = inst_11014__$1);
return statearr_11041;
})();if(cljs.core.truth_(inst_11015))
{var statearr_11042_11065 = state_11037__$1;(statearr_11042_11065[(1)] = (5));
} else
{var statearr_11043_11066 = state_11037__$1;(statearr_11043_11066[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (13)))
{var state_11037__$1 = state_11037;var statearr_11044_11067 = state_11037__$1;(statearr_11044_11067[(2)] = null);
(statearr_11044_11067[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (6)))
{var inst_11014 = (state_11037[(7)]);var inst_11020 = p.call(null,inst_11014);var state_11037__$1 = state_11037;if(cljs.core.truth_(inst_11020))
{var statearr_11045_11068 = state_11037__$1;(statearr_11045_11068[(1)] = (9));
} else
{var statearr_11046_11069 = state_11037__$1;(statearr_11046_11069[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (3)))
{var inst_11035 = (state_11037[(2)]);var state_11037__$1 = state_11037;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11037__$1,inst_11035);
} else
{if((state_val_11038 === (12)))
{var state_11037__$1 = state_11037;var statearr_11047_11070 = state_11037__$1;(statearr_11047_11070[(2)] = null);
(statearr_11047_11070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (2)))
{var state_11037__$1 = state_11037;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11037__$1,(4),ch);
} else
{if((state_val_11038 === (11)))
{var inst_11014 = (state_11037[(7)]);var inst_11024 = (state_11037[(2)]);var state_11037__$1 = state_11037;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11037__$1,(8),inst_11024,inst_11014);
} else
{if((state_val_11038 === (9)))
{var state_11037__$1 = state_11037;var statearr_11048_11071 = state_11037__$1;(statearr_11048_11071[(2)] = tc);
(statearr_11048_11071[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (5)))
{var inst_11017 = cljs.core.async.close_BANG_.call(null,tc);var inst_11018 = cljs.core.async.close_BANG_.call(null,fc);var state_11037__$1 = (function (){var statearr_11049 = state_11037;(statearr_11049[(8)] = inst_11017);
return statearr_11049;
})();var statearr_11050_11072 = state_11037__$1;(statearr_11050_11072[(2)] = inst_11018);
(statearr_11050_11072[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (14)))
{var inst_11031 = (state_11037[(2)]);var state_11037__$1 = state_11037;var statearr_11051_11073 = state_11037__$1;(statearr_11051_11073[(2)] = inst_11031);
(statearr_11051_11073[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (10)))
{var state_11037__$1 = state_11037;var statearr_11052_11074 = state_11037__$1;(statearr_11052_11074[(2)] = fc);
(statearr_11052_11074[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11038 === (8)))
{var inst_11026 = (state_11037[(2)]);var state_11037__$1 = state_11037;if(cljs.core.truth_(inst_11026))
{var statearr_11053_11075 = state_11037__$1;(statearr_11053_11075[(1)] = (12));
} else
{var statearr_11054_11076 = state_11037__$1;(statearr_11054_11076[(1)] = (13));
}
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
}
}
}
}
}
}
}
});})(c__5722__auto___11062,tc,fc))
;return ((function (switch__5707__auto__,c__5722__auto___11062,tc,fc){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_11058 = [null,null,null,null,null,null,null,null,null];(statearr_11058[(0)] = state_machine__5708__auto__);
(statearr_11058[(1)] = (1));
return statearr_11058;
});
var state_machine__5708__auto____1 = (function (state_11037){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_11037);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e11059){if((e11059 instanceof Object))
{var ex__5711__auto__ = e11059;var statearr_11060_11077 = state_11037;(statearr_11060_11077[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11037);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11059;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11078 = state_11037;
state_11037 = G__11078;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_11037){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_11037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___11062,tc,fc))
})();var state__5724__auto__ = (function (){var statearr_11061 = f__5723__auto__.call(null);(statearr_11061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___11062);
return statearr_11061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___11062,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5722__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto__){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto__){
return (function (state_11125){var state_val_11126 = (state_11125[(1)]);if((state_val_11126 === (7)))
{var inst_11121 = (state_11125[(2)]);var state_11125__$1 = state_11125;var statearr_11127_11143 = state_11125__$1;(statearr_11127_11143[(2)] = inst_11121);
(statearr_11127_11143[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (6)))
{var inst_11111 = (state_11125[(7)]);var inst_11114 = (state_11125[(8)]);var inst_11118 = f.call(null,inst_11111,inst_11114);var inst_11111__$1 = inst_11118;var state_11125__$1 = (function (){var statearr_11128 = state_11125;(statearr_11128[(7)] = inst_11111__$1);
return statearr_11128;
})();var statearr_11129_11144 = state_11125__$1;(statearr_11129_11144[(2)] = null);
(statearr_11129_11144[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (5)))
{var inst_11111 = (state_11125[(7)]);var state_11125__$1 = state_11125;var statearr_11130_11145 = state_11125__$1;(statearr_11130_11145[(2)] = inst_11111);
(statearr_11130_11145[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (4)))
{var inst_11114 = (state_11125[(8)]);var inst_11114__$1 = (state_11125[(2)]);var inst_11115 = (inst_11114__$1 == null);var state_11125__$1 = (function (){var statearr_11131 = state_11125;(statearr_11131[(8)] = inst_11114__$1);
return statearr_11131;
})();if(cljs.core.truth_(inst_11115))
{var statearr_11132_11146 = state_11125__$1;(statearr_11132_11146[(1)] = (5));
} else
{var statearr_11133_11147 = state_11125__$1;(statearr_11133_11147[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11126 === (3)))
{var inst_11123 = (state_11125[(2)]);var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11125__$1,inst_11123);
} else
{if((state_val_11126 === (2)))
{var state_11125__$1 = state_11125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11125__$1,(4),ch);
} else
{if((state_val_11126 === (1)))
{var inst_11111 = init;var state_11125__$1 = (function (){var statearr_11134 = state_11125;(statearr_11134[(7)] = inst_11111);
return statearr_11134;
})();var statearr_11135_11148 = state_11125__$1;(statearr_11135_11148[(2)] = null);
(statearr_11135_11148[(1)] = (2));
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
});})(c__5722__auto__))
;return ((function (switch__5707__auto__,c__5722__auto__){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_11139 = [null,null,null,null,null,null,null,null,null];(statearr_11139[(0)] = state_machine__5708__auto__);
(statearr_11139[(1)] = (1));
return statearr_11139;
});
var state_machine__5708__auto____1 = (function (state_11125){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_11125);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e11140){if((e11140 instanceof Object))
{var ex__5711__auto__ = e11140;var statearr_11141_11149 = state_11125;(statearr_11141_11149[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11125);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11140;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11150 = state_11125;
state_11125 = G__11150;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_11125){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_11125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto__))
})();var state__5724__auto__ = (function (){var statearr_11142 = f__5723__auto__.call(null);(statearr_11142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto__);
return statearr_11142;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto__))
);
return c__5722__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5722__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto__){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto__){
return (function (state_11224){var state_val_11225 = (state_11224[(1)]);if((state_val_11225 === (7)))
{var inst_11206 = (state_11224[(2)]);var state_11224__$1 = state_11224;var statearr_11226_11249 = state_11224__$1;(statearr_11226_11249[(2)] = inst_11206);
(statearr_11226_11249[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (1)))
{var inst_11200 = cljs.core.seq.call(null,coll);var inst_11201 = inst_11200;var state_11224__$1 = (function (){var statearr_11227 = state_11224;(statearr_11227[(7)] = inst_11201);
return statearr_11227;
})();var statearr_11228_11250 = state_11224__$1;(statearr_11228_11250[(2)] = null);
(statearr_11228_11250[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (4)))
{var inst_11201 = (state_11224[(7)]);var inst_11204 = cljs.core.first.call(null,inst_11201);var state_11224__$1 = state_11224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11224__$1,(7),ch,inst_11204);
} else
{if((state_val_11225 === (13)))
{var inst_11218 = (state_11224[(2)]);var state_11224__$1 = state_11224;var statearr_11229_11251 = state_11224__$1;(statearr_11229_11251[(2)] = inst_11218);
(statearr_11229_11251[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (6)))
{var inst_11209 = (state_11224[(2)]);var state_11224__$1 = state_11224;if(cljs.core.truth_(inst_11209))
{var statearr_11230_11252 = state_11224__$1;(statearr_11230_11252[(1)] = (8));
} else
{var statearr_11231_11253 = state_11224__$1;(statearr_11231_11253[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (3)))
{var inst_11222 = (state_11224[(2)]);var state_11224__$1 = state_11224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11224__$1,inst_11222);
} else
{if((state_val_11225 === (12)))
{var state_11224__$1 = state_11224;var statearr_11232_11254 = state_11224__$1;(statearr_11232_11254[(2)] = null);
(statearr_11232_11254[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (2)))
{var inst_11201 = (state_11224[(7)]);var state_11224__$1 = state_11224;if(cljs.core.truth_(inst_11201))
{var statearr_11233_11255 = state_11224__$1;(statearr_11233_11255[(1)] = (4));
} else
{var statearr_11234_11256 = state_11224__$1;(statearr_11234_11256[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (11)))
{var inst_11215 = cljs.core.async.close_BANG_.call(null,ch);var state_11224__$1 = state_11224;var statearr_11235_11257 = state_11224__$1;(statearr_11235_11257[(2)] = inst_11215);
(statearr_11235_11257[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (9)))
{var state_11224__$1 = state_11224;if(cljs.core.truth_(close_QMARK_))
{var statearr_11236_11258 = state_11224__$1;(statearr_11236_11258[(1)] = (11));
} else
{var statearr_11237_11259 = state_11224__$1;(statearr_11237_11259[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (5)))
{var inst_11201 = (state_11224[(7)]);var state_11224__$1 = state_11224;var statearr_11238_11260 = state_11224__$1;(statearr_11238_11260[(2)] = inst_11201);
(statearr_11238_11260[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (10)))
{var inst_11220 = (state_11224[(2)]);var state_11224__$1 = state_11224;var statearr_11239_11261 = state_11224__$1;(statearr_11239_11261[(2)] = inst_11220);
(statearr_11239_11261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11225 === (8)))
{var inst_11201 = (state_11224[(7)]);var inst_11211 = cljs.core.next.call(null,inst_11201);var inst_11201__$1 = inst_11211;var state_11224__$1 = (function (){var statearr_11240 = state_11224;(statearr_11240[(7)] = inst_11201__$1);
return statearr_11240;
})();var statearr_11241_11262 = state_11224__$1;(statearr_11241_11262[(2)] = null);
(statearr_11241_11262[(1)] = (2));
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
}
}
}
}
}
}
});})(c__5722__auto__))
;return ((function (switch__5707__auto__,c__5722__auto__){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_11245 = [null,null,null,null,null,null,null,null];(statearr_11245[(0)] = state_machine__5708__auto__);
(statearr_11245[(1)] = (1));
return statearr_11245;
});
var state_machine__5708__auto____1 = (function (state_11224){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_11224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e11246){if((e11246 instanceof Object))
{var ex__5711__auto__ = e11246;var statearr_11247_11263 = state_11224;(statearr_11247_11263[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11246;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11264 = state_11224;
state_11224 = G__11264;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_11224){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_11224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto__))
})();var state__5724__auto__ = (function (){var statearr_11248 = f__5723__auto__.call(null);(statearr_11248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto__);
return statearr_11248;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto__))
);
return c__5722__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11266 = {};return obj11266;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3546__auto__ = _;if(and__3546__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4185__auto__ = (((_ == null))?null:_);return (function (){var or__3558__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11268 = {};return obj11268;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11490 = (function (cs,ch,mult,meta11491){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11491 = meta11491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11490.cljs$lang$type = true;
cljs.core.async.t11490.cljs$lang$ctorStr = "cljs.core.async/t11490";
cljs.core.async.t11490.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t11490");
});})(cs))
;
cljs.core.async.t11490.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11490.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11490.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11490.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11490.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11492){var self__ = this;
var _11492__$1 = this;return self__.meta11491;
});})(cs))
;
cljs.core.async.t11490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11492,meta11491__$1){var self__ = this;
var _11492__$1 = this;return (new cljs.core.async.t11490(self__.cs,self__.ch,self__.mult,meta11491__$1));
});})(cs))
;
cljs.core.async.__GT_t11490 = ((function (cs){
return (function __GT_t11490(cs__$1,ch__$1,mult__$1,meta11491){return (new cljs.core.async.t11490(cs__$1,ch__$1,mult__$1,meta11491));
});})(cs))
;
}
return (new cljs.core.async.t11490(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5722__auto___11711 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___11711,cs,m,dchan,dctr,done){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___11711,cs,m,dchan,dctr,done){
return (function (state_11623){var state_val_11624 = (state_11623[(1)]);if((state_val_11624 === (7)))
{var inst_11619 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11625_11712 = state_11623__$1;(statearr_11625_11712[(2)] = inst_11619);
(statearr_11625_11712[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (20)))
{var inst_11524 = (state_11623[(7)]);var inst_11534 = cljs.core.first.call(null,inst_11524);var inst_11535 = cljs.core.nth.call(null,inst_11534,(0),null);var inst_11536 = cljs.core.nth.call(null,inst_11534,(1),null);var state_11623__$1 = (function (){var statearr_11626 = state_11623;(statearr_11626[(8)] = inst_11535);
return statearr_11626;
})();if(cljs.core.truth_(inst_11536))
{var statearr_11627_11713 = state_11623__$1;(statearr_11627_11713[(1)] = (22));
} else
{var statearr_11628_11714 = state_11623__$1;(statearr_11628_11714[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (27)))
{var inst_11571 = (state_11623[(9)]);var inst_11564 = (state_11623[(10)]);var inst_11495 = (state_11623[(11)]);var inst_11566 = (state_11623[(12)]);var inst_11571__$1 = cljs.core._nth.call(null,inst_11564,inst_11566);var inst_11572 = cljs.core.async.put_BANG_.call(null,inst_11571__$1,inst_11495,done);var state_11623__$1 = (function (){var statearr_11629 = state_11623;(statearr_11629[(9)] = inst_11571__$1);
return statearr_11629;
})();if(cljs.core.truth_(inst_11572))
{var statearr_11630_11715 = state_11623__$1;(statearr_11630_11715[(1)] = (30));
} else
{var statearr_11631_11716 = state_11623__$1;(statearr_11631_11716[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (1)))
{var state_11623__$1 = state_11623;var statearr_11632_11717 = state_11623__$1;(statearr_11632_11717[(2)] = null);
(statearr_11632_11717[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (24)))
{var inst_11524 = (state_11623[(7)]);var inst_11541 = (state_11623[(2)]);var inst_11542 = cljs.core.next.call(null,inst_11524);var inst_11504 = inst_11542;var inst_11505 = null;var inst_11506 = (0);var inst_11507 = (0);var state_11623__$1 = (function (){var statearr_11633 = state_11623;(statearr_11633[(13)] = inst_11507);
(statearr_11633[(14)] = inst_11505);
(statearr_11633[(15)] = inst_11541);
(statearr_11633[(16)] = inst_11504);
(statearr_11633[(17)] = inst_11506);
return statearr_11633;
})();var statearr_11634_11718 = state_11623__$1;(statearr_11634_11718[(2)] = null);
(statearr_11634_11718[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (39)))
{var state_11623__$1 = state_11623;var statearr_11638_11719 = state_11623__$1;(statearr_11638_11719[(2)] = null);
(statearr_11638_11719[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (4)))
{var inst_11495 = (state_11623[(11)]);var inst_11495__$1 = (state_11623[(2)]);var inst_11496 = (inst_11495__$1 == null);var state_11623__$1 = (function (){var statearr_11639 = state_11623;(statearr_11639[(11)] = inst_11495__$1);
return statearr_11639;
})();if(cljs.core.truth_(inst_11496))
{var statearr_11640_11720 = state_11623__$1;(statearr_11640_11720[(1)] = (5));
} else
{var statearr_11641_11721 = state_11623__$1;(statearr_11641_11721[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (15)))
{var inst_11507 = (state_11623[(13)]);var inst_11505 = (state_11623[(14)]);var inst_11504 = (state_11623[(16)]);var inst_11506 = (state_11623[(17)]);var inst_11520 = (state_11623[(2)]);var inst_11521 = (inst_11507 + (1));var tmp11635 = inst_11505;var tmp11636 = inst_11504;var tmp11637 = inst_11506;var inst_11504__$1 = tmp11636;var inst_11505__$1 = tmp11635;var inst_11506__$1 = tmp11637;var inst_11507__$1 = inst_11521;var state_11623__$1 = (function (){var statearr_11642 = state_11623;(statearr_11642[(13)] = inst_11507__$1);
(statearr_11642[(14)] = inst_11505__$1);
(statearr_11642[(18)] = inst_11520);
(statearr_11642[(16)] = inst_11504__$1);
(statearr_11642[(17)] = inst_11506__$1);
return statearr_11642;
})();var statearr_11643_11722 = state_11623__$1;(statearr_11643_11722[(2)] = null);
(statearr_11643_11722[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (21)))
{var inst_11545 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11647_11723 = state_11623__$1;(statearr_11647_11723[(2)] = inst_11545);
(statearr_11647_11723[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (31)))
{var inst_11571 = (state_11623[(9)]);var inst_11575 = done.call(null,null);var inst_11576 = cljs.core.async.untap_STAR_.call(null,m,inst_11571);var state_11623__$1 = (function (){var statearr_11648 = state_11623;(statearr_11648[(19)] = inst_11575);
return statearr_11648;
})();var statearr_11649_11724 = state_11623__$1;(statearr_11649_11724[(2)] = inst_11576);
(statearr_11649_11724[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (32)))
{var inst_11563 = (state_11623[(20)]);var inst_11564 = (state_11623[(10)]);var inst_11566 = (state_11623[(12)]);var inst_11565 = (state_11623[(21)]);var inst_11578 = (state_11623[(2)]);var inst_11579 = (inst_11566 + (1));var tmp11644 = inst_11563;var tmp11645 = inst_11564;var tmp11646 = inst_11565;var inst_11563__$1 = tmp11644;var inst_11564__$1 = tmp11645;var inst_11565__$1 = tmp11646;var inst_11566__$1 = inst_11579;var state_11623__$1 = (function (){var statearr_11650 = state_11623;(statearr_11650[(22)] = inst_11578);
(statearr_11650[(20)] = inst_11563__$1);
(statearr_11650[(10)] = inst_11564__$1);
(statearr_11650[(12)] = inst_11566__$1);
(statearr_11650[(21)] = inst_11565__$1);
return statearr_11650;
})();var statearr_11651_11725 = state_11623__$1;(statearr_11651_11725[(2)] = null);
(statearr_11651_11725[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (40)))
{var inst_11591 = (state_11623[(23)]);var inst_11595 = done.call(null,null);var inst_11596 = cljs.core.async.untap_STAR_.call(null,m,inst_11591);var state_11623__$1 = (function (){var statearr_11652 = state_11623;(statearr_11652[(24)] = inst_11595);
return statearr_11652;
})();var statearr_11653_11726 = state_11623__$1;(statearr_11653_11726[(2)] = inst_11596);
(statearr_11653_11726[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (33)))
{var inst_11582 = (state_11623[(25)]);var inst_11584 = cljs.core.chunked_seq_QMARK_.call(null,inst_11582);var state_11623__$1 = state_11623;if(inst_11584)
{var statearr_11654_11727 = state_11623__$1;(statearr_11654_11727[(1)] = (36));
} else
{var statearr_11655_11728 = state_11623__$1;(statearr_11655_11728[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (13)))
{var inst_11514 = (state_11623[(26)]);var inst_11517 = cljs.core.async.close_BANG_.call(null,inst_11514);var state_11623__$1 = state_11623;var statearr_11656_11729 = state_11623__$1;(statearr_11656_11729[(2)] = inst_11517);
(statearr_11656_11729[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (22)))
{var inst_11535 = (state_11623[(8)]);var inst_11538 = cljs.core.async.close_BANG_.call(null,inst_11535);var state_11623__$1 = state_11623;var statearr_11657_11730 = state_11623__$1;(statearr_11657_11730[(2)] = inst_11538);
(statearr_11657_11730[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (36)))
{var inst_11582 = (state_11623[(25)]);var inst_11586 = cljs.core.chunk_first.call(null,inst_11582);var inst_11587 = cljs.core.chunk_rest.call(null,inst_11582);var inst_11588 = cljs.core.count.call(null,inst_11586);var inst_11563 = inst_11587;var inst_11564 = inst_11586;var inst_11565 = inst_11588;var inst_11566 = (0);var state_11623__$1 = (function (){var statearr_11658 = state_11623;(statearr_11658[(20)] = inst_11563);
(statearr_11658[(10)] = inst_11564);
(statearr_11658[(12)] = inst_11566);
(statearr_11658[(21)] = inst_11565);
return statearr_11658;
})();var statearr_11659_11731 = state_11623__$1;(statearr_11659_11731[(2)] = null);
(statearr_11659_11731[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (41)))
{var inst_11582 = (state_11623[(25)]);var inst_11598 = (state_11623[(2)]);var inst_11599 = cljs.core.next.call(null,inst_11582);var inst_11563 = inst_11599;var inst_11564 = null;var inst_11565 = (0);var inst_11566 = (0);var state_11623__$1 = (function (){var statearr_11660 = state_11623;(statearr_11660[(27)] = inst_11598);
(statearr_11660[(20)] = inst_11563);
(statearr_11660[(10)] = inst_11564);
(statearr_11660[(12)] = inst_11566);
(statearr_11660[(21)] = inst_11565);
return statearr_11660;
})();var statearr_11661_11732 = state_11623__$1;(statearr_11661_11732[(2)] = null);
(statearr_11661_11732[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (43)))
{var state_11623__$1 = state_11623;var statearr_11662_11733 = state_11623__$1;(statearr_11662_11733[(2)] = null);
(statearr_11662_11733[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (29)))
{var inst_11607 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11663_11734 = state_11623__$1;(statearr_11663_11734[(2)] = inst_11607);
(statearr_11663_11734[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (44)))
{var inst_11616 = (state_11623[(2)]);var state_11623__$1 = (function (){var statearr_11664 = state_11623;(statearr_11664[(28)] = inst_11616);
return statearr_11664;
})();var statearr_11665_11735 = state_11623__$1;(statearr_11665_11735[(2)] = null);
(statearr_11665_11735[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (6)))
{var inst_11555 = (state_11623[(29)]);var inst_11554 = cljs.core.deref.call(null,cs);var inst_11555__$1 = cljs.core.keys.call(null,inst_11554);var inst_11556 = cljs.core.count.call(null,inst_11555__$1);var inst_11557 = cljs.core.reset_BANG_.call(null,dctr,inst_11556);var inst_11562 = cljs.core.seq.call(null,inst_11555__$1);var inst_11563 = inst_11562;var inst_11564 = null;var inst_11565 = (0);var inst_11566 = (0);var state_11623__$1 = (function (){var statearr_11666 = state_11623;(statearr_11666[(30)] = inst_11557);
(statearr_11666[(29)] = inst_11555__$1);
(statearr_11666[(20)] = inst_11563);
(statearr_11666[(10)] = inst_11564);
(statearr_11666[(12)] = inst_11566);
(statearr_11666[(21)] = inst_11565);
return statearr_11666;
})();var statearr_11667_11736 = state_11623__$1;(statearr_11667_11736[(2)] = null);
(statearr_11667_11736[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (28)))
{var inst_11563 = (state_11623[(20)]);var inst_11582 = (state_11623[(25)]);var inst_11582__$1 = cljs.core.seq.call(null,inst_11563);var state_11623__$1 = (function (){var statearr_11668 = state_11623;(statearr_11668[(25)] = inst_11582__$1);
return statearr_11668;
})();if(inst_11582__$1)
{var statearr_11669_11737 = state_11623__$1;(statearr_11669_11737[(1)] = (33));
} else
{var statearr_11670_11738 = state_11623__$1;(statearr_11670_11738[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (25)))
{var inst_11566 = (state_11623[(12)]);var inst_11565 = (state_11623[(21)]);var inst_11568 = (inst_11566 < inst_11565);var inst_11569 = inst_11568;var state_11623__$1 = state_11623;if(cljs.core.truth_(inst_11569))
{var statearr_11671_11739 = state_11623__$1;(statearr_11671_11739[(1)] = (27));
} else
{var statearr_11672_11740 = state_11623__$1;(statearr_11672_11740[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (34)))
{var state_11623__$1 = state_11623;var statearr_11673_11741 = state_11623__$1;(statearr_11673_11741[(2)] = null);
(statearr_11673_11741[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (17)))
{var state_11623__$1 = state_11623;var statearr_11674_11742 = state_11623__$1;(statearr_11674_11742[(2)] = null);
(statearr_11674_11742[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (3)))
{var inst_11621 = (state_11623[(2)]);var state_11623__$1 = state_11623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11623__$1,inst_11621);
} else
{if((state_val_11624 === (12)))
{var inst_11550 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11675_11743 = state_11623__$1;(statearr_11675_11743[(2)] = inst_11550);
(statearr_11675_11743[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (2)))
{var state_11623__$1 = state_11623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11623__$1,(4),ch);
} else
{if((state_val_11624 === (23)))
{var state_11623__$1 = state_11623;var statearr_11676_11744 = state_11623__$1;(statearr_11676_11744[(2)] = null);
(statearr_11676_11744[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (35)))
{var inst_11605 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11677_11745 = state_11623__$1;(statearr_11677_11745[(2)] = inst_11605);
(statearr_11677_11745[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (19)))
{var inst_11524 = (state_11623[(7)]);var inst_11528 = cljs.core.chunk_first.call(null,inst_11524);var inst_11529 = cljs.core.chunk_rest.call(null,inst_11524);var inst_11530 = cljs.core.count.call(null,inst_11528);var inst_11504 = inst_11529;var inst_11505 = inst_11528;var inst_11506 = inst_11530;var inst_11507 = (0);var state_11623__$1 = (function (){var statearr_11678 = state_11623;(statearr_11678[(13)] = inst_11507);
(statearr_11678[(14)] = inst_11505);
(statearr_11678[(16)] = inst_11504);
(statearr_11678[(17)] = inst_11506);
return statearr_11678;
})();var statearr_11679_11746 = state_11623__$1;(statearr_11679_11746[(2)] = null);
(statearr_11679_11746[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (11)))
{var inst_11504 = (state_11623[(16)]);var inst_11524 = (state_11623[(7)]);var inst_11524__$1 = cljs.core.seq.call(null,inst_11504);var state_11623__$1 = (function (){var statearr_11680 = state_11623;(statearr_11680[(7)] = inst_11524__$1);
return statearr_11680;
})();if(inst_11524__$1)
{var statearr_11681_11747 = state_11623__$1;(statearr_11681_11747[(1)] = (16));
} else
{var statearr_11682_11748 = state_11623__$1;(statearr_11682_11748[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (9)))
{var inst_11552 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11683_11749 = state_11623__$1;(statearr_11683_11749[(2)] = inst_11552);
(statearr_11683_11749[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (5)))
{var inst_11502 = cljs.core.deref.call(null,cs);var inst_11503 = cljs.core.seq.call(null,inst_11502);var inst_11504 = inst_11503;var inst_11505 = null;var inst_11506 = (0);var inst_11507 = (0);var state_11623__$1 = (function (){var statearr_11684 = state_11623;(statearr_11684[(13)] = inst_11507);
(statearr_11684[(14)] = inst_11505);
(statearr_11684[(16)] = inst_11504);
(statearr_11684[(17)] = inst_11506);
return statearr_11684;
})();var statearr_11685_11750 = state_11623__$1;(statearr_11685_11750[(2)] = null);
(statearr_11685_11750[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (14)))
{var state_11623__$1 = state_11623;var statearr_11686_11751 = state_11623__$1;(statearr_11686_11751[(2)] = null);
(statearr_11686_11751[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (45)))
{var inst_11613 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11687_11752 = state_11623__$1;(statearr_11687_11752[(2)] = inst_11613);
(statearr_11687_11752[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (26)))
{var inst_11555 = (state_11623[(29)]);var inst_11609 = (state_11623[(2)]);var inst_11610 = cljs.core.seq.call(null,inst_11555);var state_11623__$1 = (function (){var statearr_11688 = state_11623;(statearr_11688[(31)] = inst_11609);
return statearr_11688;
})();if(inst_11610)
{var statearr_11689_11753 = state_11623__$1;(statearr_11689_11753[(1)] = (42));
} else
{var statearr_11690_11754 = state_11623__$1;(statearr_11690_11754[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (16)))
{var inst_11524 = (state_11623[(7)]);var inst_11526 = cljs.core.chunked_seq_QMARK_.call(null,inst_11524);var state_11623__$1 = state_11623;if(inst_11526)
{var statearr_11691_11755 = state_11623__$1;(statearr_11691_11755[(1)] = (19));
} else
{var statearr_11692_11756 = state_11623__$1;(statearr_11692_11756[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (38)))
{var inst_11602 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11693_11757 = state_11623__$1;(statearr_11693_11757[(2)] = inst_11602);
(statearr_11693_11757[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (30)))
{var state_11623__$1 = state_11623;var statearr_11694_11758 = state_11623__$1;(statearr_11694_11758[(2)] = null);
(statearr_11694_11758[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (10)))
{var inst_11507 = (state_11623[(13)]);var inst_11505 = (state_11623[(14)]);var inst_11513 = cljs.core._nth.call(null,inst_11505,inst_11507);var inst_11514 = cljs.core.nth.call(null,inst_11513,(0),null);var inst_11515 = cljs.core.nth.call(null,inst_11513,(1),null);var state_11623__$1 = (function (){var statearr_11695 = state_11623;(statearr_11695[(26)] = inst_11514);
return statearr_11695;
})();if(cljs.core.truth_(inst_11515))
{var statearr_11696_11759 = state_11623__$1;(statearr_11696_11759[(1)] = (13));
} else
{var statearr_11697_11760 = state_11623__$1;(statearr_11697_11760[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (18)))
{var inst_11548 = (state_11623[(2)]);var state_11623__$1 = state_11623;var statearr_11698_11761 = state_11623__$1;(statearr_11698_11761[(2)] = inst_11548);
(statearr_11698_11761[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (42)))
{var state_11623__$1 = state_11623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11623__$1,(45),dchan);
} else
{if((state_val_11624 === (37)))
{var inst_11591 = (state_11623[(23)]);var inst_11495 = (state_11623[(11)]);var inst_11582 = (state_11623[(25)]);var inst_11591__$1 = cljs.core.first.call(null,inst_11582);var inst_11592 = cljs.core.async.put_BANG_.call(null,inst_11591__$1,inst_11495,done);var state_11623__$1 = (function (){var statearr_11699 = state_11623;(statearr_11699[(23)] = inst_11591__$1);
return statearr_11699;
})();if(cljs.core.truth_(inst_11592))
{var statearr_11700_11762 = state_11623__$1;(statearr_11700_11762[(1)] = (39));
} else
{var statearr_11701_11763 = state_11623__$1;(statearr_11701_11763[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11624 === (8)))
{var inst_11507 = (state_11623[(13)]);var inst_11506 = (state_11623[(17)]);var inst_11509 = (inst_11507 < inst_11506);var inst_11510 = inst_11509;var state_11623__$1 = state_11623;if(cljs.core.truth_(inst_11510))
{var statearr_11702_11764 = state_11623__$1;(statearr_11702_11764[(1)] = (10));
} else
{var statearr_11703_11765 = state_11623__$1;(statearr_11703_11765[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5722__auto___11711,cs,m,dchan,dctr,done))
;return ((function (switch__5707__auto__,c__5722__auto___11711,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_11707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11707[(0)] = state_machine__5708__auto__);
(statearr_11707[(1)] = (1));
return statearr_11707;
});
var state_machine__5708__auto____1 = (function (state_11623){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_11623);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e11708){if((e11708 instanceof Object))
{var ex__5711__auto__ = e11708;var statearr_11709_11766 = state_11623;(statearr_11709_11766[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11623);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11708;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11767 = state_11623;
state_11623 = G__11767;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_11623){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_11623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___11711,cs,m,dchan,dctr,done))
})();var state__5724__auto__ = (function (){var statearr_11710 = f__5723__auto__.call(null);(statearr_11710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___11711);
return statearr_11710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___11711,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj11769 = {};return obj11769;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3546__auto__ = m;if(and__3546__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4185__auto__ = (((m == null))?null:m);return (function (){var or__3558__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11889 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11890){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11890 = meta11890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11889.cljs$lang$type = true;
cljs.core.async.t11889.cljs$lang$ctorStr = "cljs.core.async/t11889";
cljs.core.async.t11889.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t11889");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11889.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11891){var self__ = this;
var _11891__$1 = this;return self__.meta11890;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11891,meta11890__$1){var self__ = this;
var _11891__$1 = this;return (new cljs.core.async.t11889(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11890__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11889 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11890){return (new cljs.core.async.t11889(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11890));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11889(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5722__auto___12008 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___12008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___12008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11961){var state_val_11962 = (state_11961[(1)]);if((state_val_11962 === (7)))
{var inst_11905 = (state_11961[(7)]);var inst_11910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11905);var state_11961__$1 = state_11961;var statearr_11963_12009 = state_11961__$1;(statearr_11963_12009[(2)] = inst_11910);
(statearr_11963_12009[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (20)))
{var inst_11920 = (state_11961[(8)]);var state_11961__$1 = state_11961;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11961__$1,(23),out,inst_11920);
} else
{if((state_val_11962 === (1)))
{var inst_11895 = (state_11961[(9)]);var inst_11895__$1 = calc_state.call(null);var inst_11896 = cljs.core.seq_QMARK_.call(null,inst_11895__$1);var state_11961__$1 = (function (){var statearr_11964 = state_11961;(statearr_11964[(9)] = inst_11895__$1);
return statearr_11964;
})();if(inst_11896)
{var statearr_11965_12010 = state_11961__$1;(statearr_11965_12010[(1)] = (2));
} else
{var statearr_11966_12011 = state_11961__$1;(statearr_11966_12011[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (24)))
{var inst_11913 = (state_11961[(10)]);var inst_11905 = inst_11913;var state_11961__$1 = (function (){var statearr_11967 = state_11961;(statearr_11967[(7)] = inst_11905);
return statearr_11967;
})();var statearr_11968_12012 = state_11961__$1;(statearr_11968_12012[(2)] = null);
(statearr_11968_12012[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (4)))
{var inst_11895 = (state_11961[(9)]);var inst_11901 = (state_11961[(2)]);var inst_11902 = cljs.core.get.call(null,inst_11901,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11903 = cljs.core.get.call(null,inst_11901,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11904 = cljs.core.get.call(null,inst_11901,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_11905 = inst_11895;var state_11961__$1 = (function (){var statearr_11969 = state_11961;(statearr_11969[(11)] = inst_11903);
(statearr_11969[(12)] = inst_11902);
(statearr_11969[(13)] = inst_11904);
(statearr_11969[(7)] = inst_11905);
return statearr_11969;
})();var statearr_11970_12013 = state_11961__$1;(statearr_11970_12013[(2)] = null);
(statearr_11970_12013[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (15)))
{var state_11961__$1 = state_11961;var statearr_11971_12014 = state_11961__$1;(statearr_11971_12014[(2)] = null);
(statearr_11971_12014[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (21)))
{var inst_11913 = (state_11961[(10)]);var inst_11905 = inst_11913;var state_11961__$1 = (function (){var statearr_11972 = state_11961;(statearr_11972[(7)] = inst_11905);
return statearr_11972;
})();var statearr_11973_12015 = state_11961__$1;(statearr_11973_12015[(2)] = null);
(statearr_11973_12015[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (13)))
{var inst_11957 = (state_11961[(2)]);var state_11961__$1 = state_11961;var statearr_11974_12016 = state_11961__$1;(statearr_11974_12016[(2)] = inst_11957);
(statearr_11974_12016[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (22)))
{var inst_11955 = (state_11961[(2)]);var state_11961__$1 = state_11961;var statearr_11975_12017 = state_11961__$1;(statearr_11975_12017[(2)] = inst_11955);
(statearr_11975_12017[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (6)))
{var inst_11959 = (state_11961[(2)]);var state_11961__$1 = state_11961;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11961__$1,inst_11959);
} else
{if((state_val_11962 === (25)))
{var state_11961__$1 = state_11961;var statearr_11976_12018 = state_11961__$1;(statearr_11976_12018[(2)] = null);
(statearr_11976_12018[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (17)))
{var inst_11935 = (state_11961[(14)]);var state_11961__$1 = state_11961;var statearr_11977_12019 = state_11961__$1;(statearr_11977_12019[(2)] = inst_11935);
(statearr_11977_12019[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (3)))
{var inst_11895 = (state_11961[(9)]);var state_11961__$1 = state_11961;var statearr_11978_12020 = state_11961__$1;(statearr_11978_12020[(2)] = inst_11895);
(statearr_11978_12020[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (12)))
{var inst_11916 = (state_11961[(15)]);var inst_11935 = (state_11961[(14)]);var inst_11921 = (state_11961[(16)]);var inst_11935__$1 = inst_11916.call(null,inst_11921);var state_11961__$1 = (function (){var statearr_11979 = state_11961;(statearr_11979[(14)] = inst_11935__$1);
return statearr_11979;
})();if(cljs.core.truth_(inst_11935__$1))
{var statearr_11980_12021 = state_11961__$1;(statearr_11980_12021[(1)] = (17));
} else
{var statearr_11981_12022 = state_11961__$1;(statearr_11981_12022[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (2)))
{var inst_11895 = (state_11961[(9)]);var inst_11898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11895);var state_11961__$1 = state_11961;var statearr_11982_12023 = state_11961__$1;(statearr_11982_12023[(2)] = inst_11898);
(statearr_11982_12023[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (23)))
{var inst_11946 = (state_11961[(2)]);var state_11961__$1 = state_11961;if(cljs.core.truth_(inst_11946))
{var statearr_11983_12024 = state_11961__$1;(statearr_11983_12024[(1)] = (24));
} else
{var statearr_11984_12025 = state_11961__$1;(statearr_11984_12025[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (19)))
{var inst_11943 = (state_11961[(2)]);var state_11961__$1 = state_11961;if(cljs.core.truth_(inst_11943))
{var statearr_11985_12026 = state_11961__$1;(statearr_11985_12026[(1)] = (20));
} else
{var statearr_11986_12027 = state_11961__$1;(statearr_11986_12027[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (11)))
{var inst_11920 = (state_11961[(8)]);var inst_11926 = (inst_11920 == null);var state_11961__$1 = state_11961;if(cljs.core.truth_(inst_11926))
{var statearr_11987_12028 = state_11961__$1;(statearr_11987_12028[(1)] = (14));
} else
{var statearr_11988_12029 = state_11961__$1;(statearr_11988_12029[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (9)))
{var inst_11913 = (state_11961[(10)]);var inst_11913__$1 = (state_11961[(2)]);var inst_11914 = cljs.core.get.call(null,inst_11913__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11915 = cljs.core.get.call(null,inst_11913__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11916 = cljs.core.get.call(null,inst_11913__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_11961__$1 = (function (){var statearr_11989 = state_11961;(statearr_11989[(15)] = inst_11916);
(statearr_11989[(17)] = inst_11915);
(statearr_11989[(10)] = inst_11913__$1);
return statearr_11989;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11961__$1,(10),inst_11914);
} else
{if((state_val_11962 === (5)))
{var inst_11905 = (state_11961[(7)]);var inst_11908 = cljs.core.seq_QMARK_.call(null,inst_11905);var state_11961__$1 = state_11961;if(inst_11908)
{var statearr_11990_12030 = state_11961__$1;(statearr_11990_12030[(1)] = (7));
} else
{var statearr_11991_12031 = state_11961__$1;(statearr_11991_12031[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (14)))
{var inst_11921 = (state_11961[(16)]);var inst_11928 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11921);var state_11961__$1 = state_11961;var statearr_11992_12032 = state_11961__$1;(statearr_11992_12032[(2)] = inst_11928);
(statearr_11992_12032[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (26)))
{var inst_11951 = (state_11961[(2)]);var state_11961__$1 = state_11961;var statearr_11993_12033 = state_11961__$1;(statearr_11993_12033[(2)] = inst_11951);
(statearr_11993_12033[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (16)))
{var inst_11931 = (state_11961[(2)]);var inst_11932 = calc_state.call(null);var inst_11905 = inst_11932;var state_11961__$1 = (function (){var statearr_11994 = state_11961;(statearr_11994[(18)] = inst_11931);
(statearr_11994[(7)] = inst_11905);
return statearr_11994;
})();var statearr_11995_12034 = state_11961__$1;(statearr_11995_12034[(2)] = null);
(statearr_11995_12034[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (10)))
{var inst_11920 = (state_11961[(8)]);var inst_11921 = (state_11961[(16)]);var inst_11919 = (state_11961[(2)]);var inst_11920__$1 = cljs.core.nth.call(null,inst_11919,(0),null);var inst_11921__$1 = cljs.core.nth.call(null,inst_11919,(1),null);var inst_11922 = (inst_11920__$1 == null);var inst_11923 = cljs.core._EQ_.call(null,inst_11921__$1,change);var inst_11924 = (inst_11922) || (inst_11923);var state_11961__$1 = (function (){var statearr_11996 = state_11961;(statearr_11996[(8)] = inst_11920__$1);
(statearr_11996[(16)] = inst_11921__$1);
return statearr_11996;
})();if(cljs.core.truth_(inst_11924))
{var statearr_11997_12035 = state_11961__$1;(statearr_11997_12035[(1)] = (11));
} else
{var statearr_11998_12036 = state_11961__$1;(statearr_11998_12036[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (18)))
{var inst_11916 = (state_11961[(15)]);var inst_11915 = (state_11961[(17)]);var inst_11921 = (state_11961[(16)]);var inst_11938 = cljs.core.empty_QMARK_.call(null,inst_11916);var inst_11939 = inst_11915.call(null,inst_11921);var inst_11940 = cljs.core.not.call(null,inst_11939);var inst_11941 = (inst_11938) && (inst_11940);var state_11961__$1 = state_11961;var statearr_11999_12037 = state_11961__$1;(statearr_11999_12037[(2)] = inst_11941);
(statearr_11999_12037[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11962 === (8)))
{var inst_11905 = (state_11961[(7)]);var state_11961__$1 = state_11961;var statearr_12000_12038 = state_11961__$1;(statearr_12000_12038[(2)] = inst_11905);
(statearr_12000_12038[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5722__auto___12008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5707__auto__,c__5722__auto___12008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_12004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12004[(0)] = state_machine__5708__auto__);
(statearr_12004[(1)] = (1));
return statearr_12004;
});
var state_machine__5708__auto____1 = (function (state_11961){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_11961);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e12005){if((e12005 instanceof Object))
{var ex__5711__auto__ = e12005;var statearr_12006_12039 = state_11961;(statearr_12006_12039[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11961);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12005;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12040 = state_11961;
state_11961 = G__12040;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_11961){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_11961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___12008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5724__auto__ = (function (){var statearr_12007 = f__5723__auto__.call(null);(statearr_12007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___12008);
return statearr_12007;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___12008,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12042 = {};return obj12042;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3546__auto__ = p;if(and__3546__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3546__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4185__auto__ = (((p == null))?null:p);return (function (){var or__3558__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__12043_SHARP_){if(cljs.core.truth_(p1__12043_SHARP_.call(null,topic)))
{return p1__12043_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12043_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12166 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12166 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12167){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12167 = meta12167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12166.cljs$lang$type = true;
cljs.core.async.t12166.cljs$lang$ctorStr = "cljs.core.async/t12166";
cljs.core.async.t12166.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t12166");
});})(mults,ensure_mult))
;
cljs.core.async.t12166.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12166.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12166.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12166.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12166.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12166.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12166.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12168){var self__ = this;
var _12168__$1 = this;return self__.meta12167;
});})(mults,ensure_mult))
;
cljs.core.async.t12166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12168,meta12167__$1){var self__ = this;
var _12168__$1 = this;return (new cljs.core.async.t12166(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12167__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12166 = ((function (mults,ensure_mult){
return (function __GT_t12166(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12167){return (new cljs.core.async.t12166(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12167));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12166(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5722__auto___12288 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___12288,mults,ensure_mult,p){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___12288,mults,ensure_mult,p){
return (function (state_12240){var state_val_12241 = (state_12240[(1)]);if((state_val_12241 === (7)))
{var inst_12236 = (state_12240[(2)]);var state_12240__$1 = state_12240;var statearr_12242_12289 = state_12240__$1;(statearr_12242_12289[(2)] = inst_12236);
(statearr_12242_12289[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (20)))
{var state_12240__$1 = state_12240;var statearr_12243_12290 = state_12240__$1;(statearr_12243_12290[(2)] = null);
(statearr_12243_12290[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (1)))
{var state_12240__$1 = state_12240;var statearr_12244_12291 = state_12240__$1;(statearr_12244_12291[(2)] = null);
(statearr_12244_12291[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (24)))
{var inst_12219 = (state_12240[(7)]);var inst_12228 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12219);var state_12240__$1 = state_12240;var statearr_12245_12292 = state_12240__$1;(statearr_12245_12292[(2)] = inst_12228);
(statearr_12245_12292[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (4)))
{var inst_12171 = (state_12240[(8)]);var inst_12171__$1 = (state_12240[(2)]);var inst_12172 = (inst_12171__$1 == null);var state_12240__$1 = (function (){var statearr_12246 = state_12240;(statearr_12246[(8)] = inst_12171__$1);
return statearr_12246;
})();if(cljs.core.truth_(inst_12172))
{var statearr_12247_12293 = state_12240__$1;(statearr_12247_12293[(1)] = (5));
} else
{var statearr_12248_12294 = state_12240__$1;(statearr_12248_12294[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (15)))
{var inst_12213 = (state_12240[(2)]);var state_12240__$1 = state_12240;var statearr_12249_12295 = state_12240__$1;(statearr_12249_12295[(2)] = inst_12213);
(statearr_12249_12295[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (21)))
{var inst_12233 = (state_12240[(2)]);var state_12240__$1 = (function (){var statearr_12250 = state_12240;(statearr_12250[(9)] = inst_12233);
return statearr_12250;
})();var statearr_12251_12296 = state_12240__$1;(statearr_12251_12296[(2)] = null);
(statearr_12251_12296[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (13)))
{var inst_12195 = (state_12240[(10)]);var inst_12197 = cljs.core.chunked_seq_QMARK_.call(null,inst_12195);var state_12240__$1 = state_12240;if(inst_12197)
{var statearr_12252_12297 = state_12240__$1;(statearr_12252_12297[(1)] = (16));
} else
{var statearr_12253_12298 = state_12240__$1;(statearr_12253_12298[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (22)))
{var inst_12225 = (state_12240[(2)]);var state_12240__$1 = state_12240;if(cljs.core.truth_(inst_12225))
{var statearr_12254_12299 = state_12240__$1;(statearr_12254_12299[(1)] = (23));
} else
{var statearr_12255_12300 = state_12240__$1;(statearr_12255_12300[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (6)))
{var inst_12221 = (state_12240[(11)]);var inst_12171 = (state_12240[(8)]);var inst_12219 = (state_12240[(7)]);var inst_12219__$1 = topic_fn.call(null,inst_12171);var inst_12220 = cljs.core.deref.call(null,mults);var inst_12221__$1 = cljs.core.get.call(null,inst_12220,inst_12219__$1);var state_12240__$1 = (function (){var statearr_12256 = state_12240;(statearr_12256[(11)] = inst_12221__$1);
(statearr_12256[(7)] = inst_12219__$1);
return statearr_12256;
})();if(cljs.core.truth_(inst_12221__$1))
{var statearr_12257_12301 = state_12240__$1;(statearr_12257_12301[(1)] = (19));
} else
{var statearr_12258_12302 = state_12240__$1;(statearr_12258_12302[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (25)))
{var inst_12230 = (state_12240[(2)]);var state_12240__$1 = state_12240;var statearr_12259_12303 = state_12240__$1;(statearr_12259_12303[(2)] = inst_12230);
(statearr_12259_12303[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (17)))
{var inst_12195 = (state_12240[(10)]);var inst_12204 = cljs.core.first.call(null,inst_12195);var inst_12205 = cljs.core.async.muxch_STAR_.call(null,inst_12204);var inst_12206 = cljs.core.async.close_BANG_.call(null,inst_12205);var inst_12207 = cljs.core.next.call(null,inst_12195);var inst_12181 = inst_12207;var inst_12182 = null;var inst_12183 = (0);var inst_12184 = (0);var state_12240__$1 = (function (){var statearr_12260 = state_12240;(statearr_12260[(12)] = inst_12182);
(statearr_12260[(13)] = inst_12181);
(statearr_12260[(14)] = inst_12183);
(statearr_12260[(15)] = inst_12206);
(statearr_12260[(16)] = inst_12184);
return statearr_12260;
})();var statearr_12261_12304 = state_12240__$1;(statearr_12261_12304[(2)] = null);
(statearr_12261_12304[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (3)))
{var inst_12238 = (state_12240[(2)]);var state_12240__$1 = state_12240;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12240__$1,inst_12238);
} else
{if((state_val_12241 === (12)))
{var inst_12215 = (state_12240[(2)]);var state_12240__$1 = state_12240;var statearr_12262_12305 = state_12240__$1;(statearr_12262_12305[(2)] = inst_12215);
(statearr_12262_12305[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (2)))
{var state_12240__$1 = state_12240;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12240__$1,(4),ch);
} else
{if((state_val_12241 === (23)))
{var state_12240__$1 = state_12240;var statearr_12263_12306 = state_12240__$1;(statearr_12263_12306[(2)] = null);
(statearr_12263_12306[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (19)))
{var inst_12221 = (state_12240[(11)]);var inst_12171 = (state_12240[(8)]);var inst_12223 = cljs.core.async.muxch_STAR_.call(null,inst_12221);var state_12240__$1 = state_12240;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12240__$1,(22),inst_12223,inst_12171);
} else
{if((state_val_12241 === (11)))
{var inst_12181 = (state_12240[(13)]);var inst_12195 = (state_12240[(10)]);var inst_12195__$1 = cljs.core.seq.call(null,inst_12181);var state_12240__$1 = (function (){var statearr_12264 = state_12240;(statearr_12264[(10)] = inst_12195__$1);
return statearr_12264;
})();if(inst_12195__$1)
{var statearr_12265_12307 = state_12240__$1;(statearr_12265_12307[(1)] = (13));
} else
{var statearr_12266_12308 = state_12240__$1;(statearr_12266_12308[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (9)))
{var inst_12217 = (state_12240[(2)]);var state_12240__$1 = state_12240;var statearr_12267_12309 = state_12240__$1;(statearr_12267_12309[(2)] = inst_12217);
(statearr_12267_12309[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (5)))
{var inst_12178 = cljs.core.deref.call(null,mults);var inst_12179 = cljs.core.vals.call(null,inst_12178);var inst_12180 = cljs.core.seq.call(null,inst_12179);var inst_12181 = inst_12180;var inst_12182 = null;var inst_12183 = (0);var inst_12184 = (0);var state_12240__$1 = (function (){var statearr_12268 = state_12240;(statearr_12268[(12)] = inst_12182);
(statearr_12268[(13)] = inst_12181);
(statearr_12268[(14)] = inst_12183);
(statearr_12268[(16)] = inst_12184);
return statearr_12268;
})();var statearr_12269_12310 = state_12240__$1;(statearr_12269_12310[(2)] = null);
(statearr_12269_12310[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (14)))
{var state_12240__$1 = state_12240;var statearr_12273_12311 = state_12240__$1;(statearr_12273_12311[(2)] = null);
(statearr_12273_12311[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (16)))
{var inst_12195 = (state_12240[(10)]);var inst_12199 = cljs.core.chunk_first.call(null,inst_12195);var inst_12200 = cljs.core.chunk_rest.call(null,inst_12195);var inst_12201 = cljs.core.count.call(null,inst_12199);var inst_12181 = inst_12200;var inst_12182 = inst_12199;var inst_12183 = inst_12201;var inst_12184 = (0);var state_12240__$1 = (function (){var statearr_12274 = state_12240;(statearr_12274[(12)] = inst_12182);
(statearr_12274[(13)] = inst_12181);
(statearr_12274[(14)] = inst_12183);
(statearr_12274[(16)] = inst_12184);
return statearr_12274;
})();var statearr_12275_12312 = state_12240__$1;(statearr_12275_12312[(2)] = null);
(statearr_12275_12312[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (10)))
{var inst_12182 = (state_12240[(12)]);var inst_12181 = (state_12240[(13)]);var inst_12183 = (state_12240[(14)]);var inst_12184 = (state_12240[(16)]);var inst_12189 = cljs.core._nth.call(null,inst_12182,inst_12184);var inst_12190 = cljs.core.async.muxch_STAR_.call(null,inst_12189);var inst_12191 = cljs.core.async.close_BANG_.call(null,inst_12190);var inst_12192 = (inst_12184 + (1));var tmp12270 = inst_12182;var tmp12271 = inst_12181;var tmp12272 = inst_12183;var inst_12181__$1 = tmp12271;var inst_12182__$1 = tmp12270;var inst_12183__$1 = tmp12272;var inst_12184__$1 = inst_12192;var state_12240__$1 = (function (){var statearr_12276 = state_12240;(statearr_12276[(12)] = inst_12182__$1);
(statearr_12276[(13)] = inst_12181__$1);
(statearr_12276[(17)] = inst_12191);
(statearr_12276[(14)] = inst_12183__$1);
(statearr_12276[(16)] = inst_12184__$1);
return statearr_12276;
})();var statearr_12277_12313 = state_12240__$1;(statearr_12277_12313[(2)] = null);
(statearr_12277_12313[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (18)))
{var inst_12210 = (state_12240[(2)]);var state_12240__$1 = state_12240;var statearr_12278_12314 = state_12240__$1;(statearr_12278_12314[(2)] = inst_12210);
(statearr_12278_12314[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12241 === (8)))
{var inst_12183 = (state_12240[(14)]);var inst_12184 = (state_12240[(16)]);var inst_12186 = (inst_12184 < inst_12183);var inst_12187 = inst_12186;var state_12240__$1 = state_12240;if(cljs.core.truth_(inst_12187))
{var statearr_12279_12315 = state_12240__$1;(statearr_12279_12315[(1)] = (10));
} else
{var statearr_12280_12316 = state_12240__$1;(statearr_12280_12316[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5722__auto___12288,mults,ensure_mult,p))
;return ((function (switch__5707__auto__,c__5722__auto___12288,mults,ensure_mult,p){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_12284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12284[(0)] = state_machine__5708__auto__);
(statearr_12284[(1)] = (1));
return statearr_12284;
});
var state_machine__5708__auto____1 = (function (state_12240){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_12240);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e12285){if((e12285 instanceof Object))
{var ex__5711__auto__ = e12285;var statearr_12286_12317 = state_12240;(statearr_12286_12317[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12240);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12285;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12318 = state_12240;
state_12240 = G__12318;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_12240){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_12240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___12288,mults,ensure_mult,p))
})();var state__5724__auto__ = (function (){var statearr_12287 = f__5723__auto__.call(null);(statearr_12287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___12288);
return statearr_12287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___12288,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5722__auto___12455 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___12455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___12455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_12425){var state_val_12426 = (state_12425[(1)]);if((state_val_12426 === (7)))
{var state_12425__$1 = state_12425;var statearr_12427_12456 = state_12425__$1;(statearr_12427_12456[(2)] = null);
(statearr_12427_12456[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (1)))
{var state_12425__$1 = state_12425;var statearr_12428_12457 = state_12425__$1;(statearr_12428_12457[(2)] = null);
(statearr_12428_12457[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (4)))
{var inst_12389 = (state_12425[(7)]);var inst_12391 = (inst_12389 < cnt);var state_12425__$1 = state_12425;if(cljs.core.truth_(inst_12391))
{var statearr_12429_12458 = state_12425__$1;(statearr_12429_12458[(1)] = (6));
} else
{var statearr_12430_12459 = state_12425__$1;(statearr_12430_12459[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (15)))
{var inst_12421 = (state_12425[(2)]);var state_12425__$1 = state_12425;var statearr_12431_12460 = state_12425__$1;(statearr_12431_12460[(2)] = inst_12421);
(statearr_12431_12460[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (13)))
{var inst_12414 = cljs.core.async.close_BANG_.call(null,out);var state_12425__$1 = state_12425;var statearr_12432_12461 = state_12425__$1;(statearr_12432_12461[(2)] = inst_12414);
(statearr_12432_12461[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (6)))
{var state_12425__$1 = state_12425;var statearr_12433_12462 = state_12425__$1;(statearr_12433_12462[(2)] = null);
(statearr_12433_12462[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (3)))
{var inst_12423 = (state_12425[(2)]);var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12425__$1,inst_12423);
} else
{if((state_val_12426 === (12)))
{var inst_12411 = (state_12425[(8)]);var inst_12411__$1 = (state_12425[(2)]);var inst_12412 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12411__$1);var state_12425__$1 = (function (){var statearr_12434 = state_12425;(statearr_12434[(8)] = inst_12411__$1);
return statearr_12434;
})();if(cljs.core.truth_(inst_12412))
{var statearr_12435_12463 = state_12425__$1;(statearr_12435_12463[(1)] = (13));
} else
{var statearr_12436_12464 = state_12425__$1;(statearr_12436_12464[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (2)))
{var inst_12388 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12389 = (0);var state_12425__$1 = (function (){var statearr_12437 = state_12425;(statearr_12437[(9)] = inst_12388);
(statearr_12437[(7)] = inst_12389);
return statearr_12437;
})();var statearr_12438_12465 = state_12425__$1;(statearr_12438_12465[(2)] = null);
(statearr_12438_12465[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (11)))
{var inst_12389 = (state_12425[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12425,(10),Object,null,(9));var inst_12398 = chs__$1.call(null,inst_12389);var inst_12399 = done.call(null,inst_12389);var inst_12400 = cljs.core.async.take_BANG_.call(null,inst_12398,inst_12399);var state_12425__$1 = state_12425;var statearr_12439_12466 = state_12425__$1;(statearr_12439_12466[(2)] = inst_12400);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (9)))
{var inst_12389 = (state_12425[(7)]);var inst_12402 = (state_12425[(2)]);var inst_12403 = (inst_12389 + (1));var inst_12389__$1 = inst_12403;var state_12425__$1 = (function (){var statearr_12440 = state_12425;(statearr_12440[(7)] = inst_12389__$1);
(statearr_12440[(10)] = inst_12402);
return statearr_12440;
})();var statearr_12441_12467 = state_12425__$1;(statearr_12441_12467[(2)] = null);
(statearr_12441_12467[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (5)))
{var inst_12409 = (state_12425[(2)]);var state_12425__$1 = (function (){var statearr_12442 = state_12425;(statearr_12442[(11)] = inst_12409);
return statearr_12442;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12425__$1,(12),dchan);
} else
{if((state_val_12426 === (14)))
{var inst_12411 = (state_12425[(8)]);var inst_12416 = cljs.core.apply.call(null,f,inst_12411);var state_12425__$1 = state_12425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12425__$1,(16),out,inst_12416);
} else
{if((state_val_12426 === (16)))
{var inst_12418 = (state_12425[(2)]);var state_12425__$1 = (function (){var statearr_12443 = state_12425;(statearr_12443[(12)] = inst_12418);
return statearr_12443;
})();var statearr_12444_12468 = state_12425__$1;(statearr_12444_12468[(2)] = null);
(statearr_12444_12468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (10)))
{var inst_12393 = (state_12425[(2)]);var inst_12394 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12425__$1 = (function (){var statearr_12445 = state_12425;(statearr_12445[(13)] = inst_12393);
return statearr_12445;
})();var statearr_12446_12469 = state_12425__$1;(statearr_12446_12469[(2)] = inst_12394);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12426 === (8)))
{var inst_12407 = (state_12425[(2)]);var state_12425__$1 = state_12425;var statearr_12447_12470 = state_12425__$1;(statearr_12447_12470[(2)] = inst_12407);
(statearr_12447_12470[(1)] = (5));
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
}
}
}
}
}
}
}
}
}
});})(c__5722__auto___12455,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5707__auto__,c__5722__auto___12455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_12451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12451[(0)] = state_machine__5708__auto__);
(statearr_12451[(1)] = (1));
return statearr_12451;
});
var state_machine__5708__auto____1 = (function (state_12425){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_12425);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e12452){if((e12452 instanceof Object))
{var ex__5711__auto__ = e12452;var statearr_12453_12471 = state_12425;(statearr_12453_12471[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12425);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12452;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12472 = state_12425;
state_12425 = G__12472;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_12425){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_12425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___12455,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5724__auto__ = (function (){var statearr_12454 = f__5723__auto__.call(null);(statearr_12454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___12455);
return statearr_12454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___12455,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5722__auto___12580 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___12580,out){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___12580,out){
return (function (state_12556){var state_val_12557 = (state_12556[(1)]);if((state_val_12557 === (7)))
{var inst_12535 = (state_12556[(7)]);var inst_12536 = (state_12556[(8)]);var inst_12535__$1 = (state_12556[(2)]);var inst_12536__$1 = cljs.core.nth.call(null,inst_12535__$1,(0),null);var inst_12537 = cljs.core.nth.call(null,inst_12535__$1,(1),null);var inst_12538 = (inst_12536__$1 == null);var state_12556__$1 = (function (){var statearr_12558 = state_12556;(statearr_12558[(7)] = inst_12535__$1);
(statearr_12558[(8)] = inst_12536__$1);
(statearr_12558[(9)] = inst_12537);
return statearr_12558;
})();if(cljs.core.truth_(inst_12538))
{var statearr_12559_12581 = state_12556__$1;(statearr_12559_12581[(1)] = (8));
} else
{var statearr_12560_12582 = state_12556__$1;(statearr_12560_12582[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12557 === (1)))
{var inst_12527 = cljs.core.vec.call(null,chs);var inst_12528 = inst_12527;var state_12556__$1 = (function (){var statearr_12561 = state_12556;(statearr_12561[(10)] = inst_12528);
return statearr_12561;
})();var statearr_12562_12583 = state_12556__$1;(statearr_12562_12583[(2)] = null);
(statearr_12562_12583[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12557 === (4)))
{var inst_12528 = (state_12556[(10)]);var state_12556__$1 = state_12556;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12556__$1,(7),inst_12528);
} else
{if((state_val_12557 === (6)))
{var inst_12552 = (state_12556[(2)]);var state_12556__$1 = state_12556;var statearr_12563_12584 = state_12556__$1;(statearr_12563_12584[(2)] = inst_12552);
(statearr_12563_12584[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12557 === (3)))
{var inst_12554 = (state_12556[(2)]);var state_12556__$1 = state_12556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12556__$1,inst_12554);
} else
{if((state_val_12557 === (2)))
{var inst_12528 = (state_12556[(10)]);var inst_12530 = cljs.core.count.call(null,inst_12528);var inst_12531 = (inst_12530 > (0));var state_12556__$1 = state_12556;if(cljs.core.truth_(inst_12531))
{var statearr_12565_12585 = state_12556__$1;(statearr_12565_12585[(1)] = (4));
} else
{var statearr_12566_12586 = state_12556__$1;(statearr_12566_12586[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12557 === (11)))
{var inst_12528 = (state_12556[(10)]);var inst_12545 = (state_12556[(2)]);var tmp12564 = inst_12528;var inst_12528__$1 = tmp12564;var state_12556__$1 = (function (){var statearr_12567 = state_12556;(statearr_12567[(11)] = inst_12545);
(statearr_12567[(10)] = inst_12528__$1);
return statearr_12567;
})();var statearr_12568_12587 = state_12556__$1;(statearr_12568_12587[(2)] = null);
(statearr_12568_12587[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12557 === (9)))
{var inst_12536 = (state_12556[(8)]);var state_12556__$1 = state_12556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12556__$1,(11),out,inst_12536);
} else
{if((state_val_12557 === (5)))
{var inst_12550 = cljs.core.async.close_BANG_.call(null,out);var state_12556__$1 = state_12556;var statearr_12569_12588 = state_12556__$1;(statearr_12569_12588[(2)] = inst_12550);
(statearr_12569_12588[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12557 === (10)))
{var inst_12548 = (state_12556[(2)]);var state_12556__$1 = state_12556;var statearr_12570_12589 = state_12556__$1;(statearr_12570_12589[(2)] = inst_12548);
(statearr_12570_12589[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12557 === (8)))
{var inst_12535 = (state_12556[(7)]);var inst_12536 = (state_12556[(8)]);var inst_12537 = (state_12556[(9)]);var inst_12528 = (state_12556[(10)]);var inst_12540 = (function (){var c = inst_12537;var v = inst_12536;var vec__12533 = inst_12535;var cs = inst_12528;return ((function (c,v,vec__12533,cs,inst_12535,inst_12536,inst_12537,inst_12528,state_val_12557,c__5722__auto___12580,out){
return (function (p1__12473_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12473_SHARP_);
});
;})(c,v,vec__12533,cs,inst_12535,inst_12536,inst_12537,inst_12528,state_val_12557,c__5722__auto___12580,out))
})();var inst_12541 = cljs.core.filterv.call(null,inst_12540,inst_12528);var inst_12528__$1 = inst_12541;var state_12556__$1 = (function (){var statearr_12571 = state_12556;(statearr_12571[(10)] = inst_12528__$1);
return statearr_12571;
})();var statearr_12572_12590 = state_12556__$1;(statearr_12572_12590[(2)] = null);
(statearr_12572_12590[(1)] = (2));
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
}
}
}
}
});})(c__5722__auto___12580,out))
;return ((function (switch__5707__auto__,c__5722__auto___12580,out){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_12576 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12576[(0)] = state_machine__5708__auto__);
(statearr_12576[(1)] = (1));
return statearr_12576;
});
var state_machine__5708__auto____1 = (function (state_12556){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_12556);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e12577){if((e12577 instanceof Object))
{var ex__5711__auto__ = e12577;var statearr_12578_12591 = state_12556;(statearr_12578_12591[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12556);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12577;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12592 = state_12556;
state_12556 = G__12592;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_12556){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_12556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___12580,out))
})();var state__5724__auto__ = (function (){var statearr_12579 = f__5723__auto__.call(null);(statearr_12579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___12580);
return statearr_12579;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___12580,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5722__auto___12685 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___12685,out){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___12685,out){
return (function (state_12662){var state_val_12663 = (state_12662[(1)]);if((state_val_12663 === (7)))
{var inst_12644 = (state_12662[(7)]);var inst_12644__$1 = (state_12662[(2)]);var inst_12645 = (inst_12644__$1 == null);var inst_12646 = cljs.core.not.call(null,inst_12645);var state_12662__$1 = (function (){var statearr_12664 = state_12662;(statearr_12664[(7)] = inst_12644__$1);
return statearr_12664;
})();if(inst_12646)
{var statearr_12665_12686 = state_12662__$1;(statearr_12665_12686[(1)] = (8));
} else
{var statearr_12666_12687 = state_12662__$1;(statearr_12666_12687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (1)))
{var inst_12639 = (0);var state_12662__$1 = (function (){var statearr_12667 = state_12662;(statearr_12667[(8)] = inst_12639);
return statearr_12667;
})();var statearr_12668_12688 = state_12662__$1;(statearr_12668_12688[(2)] = null);
(statearr_12668_12688[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (4)))
{var state_12662__$1 = state_12662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12662__$1,(7),ch);
} else
{if((state_val_12663 === (6)))
{var inst_12657 = (state_12662[(2)]);var state_12662__$1 = state_12662;var statearr_12669_12689 = state_12662__$1;(statearr_12669_12689[(2)] = inst_12657);
(statearr_12669_12689[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (3)))
{var inst_12659 = (state_12662[(2)]);var inst_12660 = cljs.core.async.close_BANG_.call(null,out);var state_12662__$1 = (function (){var statearr_12670 = state_12662;(statearr_12670[(9)] = inst_12659);
return statearr_12670;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12662__$1,inst_12660);
} else
{if((state_val_12663 === (2)))
{var inst_12639 = (state_12662[(8)]);var inst_12641 = (inst_12639 < n);var state_12662__$1 = state_12662;if(cljs.core.truth_(inst_12641))
{var statearr_12671_12690 = state_12662__$1;(statearr_12671_12690[(1)] = (4));
} else
{var statearr_12672_12691 = state_12662__$1;(statearr_12672_12691[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (11)))
{var inst_12639 = (state_12662[(8)]);var inst_12649 = (state_12662[(2)]);var inst_12650 = (inst_12639 + (1));var inst_12639__$1 = inst_12650;var state_12662__$1 = (function (){var statearr_12673 = state_12662;(statearr_12673[(10)] = inst_12649);
(statearr_12673[(8)] = inst_12639__$1);
return statearr_12673;
})();var statearr_12674_12692 = state_12662__$1;(statearr_12674_12692[(2)] = null);
(statearr_12674_12692[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (9)))
{var state_12662__$1 = state_12662;var statearr_12675_12693 = state_12662__$1;(statearr_12675_12693[(2)] = null);
(statearr_12675_12693[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (5)))
{var state_12662__$1 = state_12662;var statearr_12676_12694 = state_12662__$1;(statearr_12676_12694[(2)] = null);
(statearr_12676_12694[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (10)))
{var inst_12654 = (state_12662[(2)]);var state_12662__$1 = state_12662;var statearr_12677_12695 = state_12662__$1;(statearr_12677_12695[(2)] = inst_12654);
(statearr_12677_12695[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12663 === (8)))
{var inst_12644 = (state_12662[(7)]);var state_12662__$1 = state_12662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12662__$1,(11),out,inst_12644);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5722__auto___12685,out))
;return ((function (switch__5707__auto__,c__5722__auto___12685,out){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_12681 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12681[(0)] = state_machine__5708__auto__);
(statearr_12681[(1)] = (1));
return statearr_12681;
});
var state_machine__5708__auto____1 = (function (state_12662){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_12662);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e12682){if((e12682 instanceof Object))
{var ex__5711__auto__ = e12682;var statearr_12683_12696 = state_12662;(statearr_12683_12696[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12662);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12682;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12697 = state_12662;
state_12662 = G__12697;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_12662){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_12662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___12685,out))
})();var state__5724__auto__ = (function (){var statearr_12684 = f__5723__auto__.call(null);(statearr_12684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___12685);
return statearr_12684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___12685,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12705 = (function (ch,f,map_LT_,meta12706){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12706 = meta12706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12705.cljs$lang$type = true;
cljs.core.async.t12705.cljs$lang$ctorStr = "cljs.core.async/t12705";
cljs.core.async.t12705.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t12705");
});
cljs.core.async.t12705.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t12705.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12708 = (function (fn1,_,meta12706,ch,f,map_LT_,meta12709){
this.fn1 = fn1;
this._ = _;
this.meta12706 = meta12706;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12709 = meta12709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12708.cljs$lang$type = true;
cljs.core.async.t12708.cljs$lang$ctorStr = "cljs.core.async/t12708";
cljs.core.async.t12708.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t12708");
});})(___$1))
;
cljs.core.async.t12708.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12708.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t12708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__12698_SHARP_){return f1.call(null,(((p1__12698_SHARP_ == null))?null:self__.f.call(null,p1__12698_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t12708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_12710){var self__ = this;
var _12710__$1 = this;return self__.meta12709;
});})(___$1))
;
cljs.core.async.t12708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_12710,meta12709__$1){var self__ = this;
var _12710__$1 = this;return (new cljs.core.async.t12708(self__.fn1,self__._,self__.meta12706,self__.ch,self__.f,self__.map_LT_,meta12709__$1));
});})(___$1))
;
cljs.core.async.__GT_t12708 = ((function (___$1){
return (function __GT_t12708(fn1__$1,___$2,meta12706__$1,ch__$2,f__$2,map_LT___$2,meta12709){return (new cljs.core.async.t12708(fn1__$1,___$2,meta12706__$1,ch__$2,f__$2,map_LT___$2,meta12709));
});})(___$1))
;
}
return (new cljs.core.async.t12708(fn1,___$1,self__.meta12706,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12705.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12707){var self__ = this;
var _12707__$1 = this;return self__.meta12706;
});
cljs.core.async.t12705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12707,meta12706__$1){var self__ = this;
var _12707__$1 = this;return (new cljs.core.async.t12705(self__.ch,self__.f,self__.map_LT_,meta12706__$1));
});
cljs.core.async.__GT_t12705 = (function __GT_t12705(ch__$1,f__$1,map_LT___$1,meta12706){return (new cljs.core.async.t12705(ch__$1,f__$1,map_LT___$1,meta12706));
});
}
return (new cljs.core.async.t12705(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12714 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12714 = (function (ch,f,map_GT_,meta12715){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12715 = meta12715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12714.cljs$lang$type = true;
cljs.core.async.t12714.cljs$lang$ctorStr = "cljs.core.async/t12714";
cljs.core.async.t12714.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t12714");
});
cljs.core.async.t12714.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12714.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t12714.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12714.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12714.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12714.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12716){var self__ = this;
var _12716__$1 = this;return self__.meta12715;
});
cljs.core.async.t12714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12716,meta12715__$1){var self__ = this;
var _12716__$1 = this;return (new cljs.core.async.t12714(self__.ch,self__.f,self__.map_GT_,meta12715__$1));
});
cljs.core.async.__GT_t12714 = (function __GT_t12714(ch__$1,f__$1,map_GT___$1,meta12715){return (new cljs.core.async.t12714(ch__$1,f__$1,map_GT___$1,meta12715));
});
}
return (new cljs.core.async.t12714(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12720 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12720 = (function (ch,p,filter_GT_,meta12721){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12721 = meta12721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12720.cljs$lang$type = true;
cljs.core.async.t12720.cljs$lang$ctorStr = "cljs.core.async/t12720";
cljs.core.async.t12720.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t12720");
});
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12720.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t12720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12722){var self__ = this;
var _12722__$1 = this;return self__.meta12721;
});
cljs.core.async.t12720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12722,meta12721__$1){var self__ = this;
var _12722__$1 = this;return (new cljs.core.async.t12720(self__.ch,self__.p,self__.filter_GT_,meta12721__$1));
});
cljs.core.async.__GT_t12720 = (function __GT_t12720(ch__$1,p__$1,filter_GT___$1,meta12721){return (new cljs.core.async.t12720(ch__$1,p__$1,filter_GT___$1,meta12721));
});
}
return (new cljs.core.async.t12720(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5722__auto___12805 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___12805,out){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___12805,out){
return (function (state_12784){var state_val_12785 = (state_12784[(1)]);if((state_val_12785 === (7)))
{var inst_12780 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12786_12806 = state_12784__$1;(statearr_12786_12806[(2)] = inst_12780);
(statearr_12786_12806[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (1)))
{var state_12784__$1 = state_12784;var statearr_12787_12807 = state_12784__$1;(statearr_12787_12807[(2)] = null);
(statearr_12787_12807[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (4)))
{var inst_12766 = (state_12784[(7)]);var inst_12766__$1 = (state_12784[(2)]);var inst_12767 = (inst_12766__$1 == null);var state_12784__$1 = (function (){var statearr_12788 = state_12784;(statearr_12788[(7)] = inst_12766__$1);
return statearr_12788;
})();if(cljs.core.truth_(inst_12767))
{var statearr_12789_12808 = state_12784__$1;(statearr_12789_12808[(1)] = (5));
} else
{var statearr_12790_12809 = state_12784__$1;(statearr_12790_12809[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (6)))
{var inst_12766 = (state_12784[(7)]);var inst_12771 = p.call(null,inst_12766);var state_12784__$1 = state_12784;if(cljs.core.truth_(inst_12771))
{var statearr_12791_12810 = state_12784__$1;(statearr_12791_12810[(1)] = (8));
} else
{var statearr_12792_12811 = state_12784__$1;(statearr_12792_12811[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (3)))
{var inst_12782 = (state_12784[(2)]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12784__$1,inst_12782);
} else
{if((state_val_12785 === (2)))
{var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12784__$1,(4),ch);
} else
{if((state_val_12785 === (11)))
{var inst_12774 = (state_12784[(2)]);var state_12784__$1 = state_12784;var statearr_12793_12812 = state_12784__$1;(statearr_12793_12812[(2)] = inst_12774);
(statearr_12793_12812[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (9)))
{var state_12784__$1 = state_12784;var statearr_12794_12813 = state_12784__$1;(statearr_12794_12813[(2)] = null);
(statearr_12794_12813[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (5)))
{var inst_12769 = cljs.core.async.close_BANG_.call(null,out);var state_12784__$1 = state_12784;var statearr_12795_12814 = state_12784__$1;(statearr_12795_12814[(2)] = inst_12769);
(statearr_12795_12814[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (10)))
{var inst_12777 = (state_12784[(2)]);var state_12784__$1 = (function (){var statearr_12796 = state_12784;(statearr_12796[(8)] = inst_12777);
return statearr_12796;
})();var statearr_12797_12815 = state_12784__$1;(statearr_12797_12815[(2)] = null);
(statearr_12797_12815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12785 === (8)))
{var inst_12766 = (state_12784[(7)]);var state_12784__$1 = state_12784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12784__$1,(11),out,inst_12766);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5722__auto___12805,out))
;return ((function (switch__5707__auto__,c__5722__auto___12805,out){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_12801 = [null,null,null,null,null,null,null,null,null];(statearr_12801[(0)] = state_machine__5708__auto__);
(statearr_12801[(1)] = (1));
return statearr_12801;
});
var state_machine__5708__auto____1 = (function (state_12784){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_12784);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e12802){if((e12802 instanceof Object))
{var ex__5711__auto__ = e12802;var statearr_12803_12816 = state_12784;(statearr_12803_12816[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12784);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12802;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12817 = state_12784;
state_12784 = G__12817;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_12784){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_12784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___12805,out))
})();var state__5724__auto__ = (function (){var statearr_12804 = f__5723__auto__.call(null);(statearr_12804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___12805);
return statearr_12804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___12805,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5722__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto__){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto__){
return (function (state_12983){var state_val_12984 = (state_12983[(1)]);if((state_val_12984 === (7)))
{var inst_12979 = (state_12983[(2)]);var state_12983__$1 = state_12983;var statearr_12985_13026 = state_12983__$1;(statearr_12985_13026[(2)] = inst_12979);
(statearr_12985_13026[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (20)))
{var inst_12949 = (state_12983[(7)]);var inst_12960 = (state_12983[(2)]);var inst_12961 = cljs.core.next.call(null,inst_12949);var inst_12935 = inst_12961;var inst_12936 = null;var inst_12937 = (0);var inst_12938 = (0);var state_12983__$1 = (function (){var statearr_12986 = state_12983;(statearr_12986[(8)] = inst_12960);
(statearr_12986[(9)] = inst_12938);
(statearr_12986[(10)] = inst_12937);
(statearr_12986[(11)] = inst_12936);
(statearr_12986[(12)] = inst_12935);
return statearr_12986;
})();var statearr_12987_13027 = state_12983__$1;(statearr_12987_13027[(2)] = null);
(statearr_12987_13027[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (1)))
{var state_12983__$1 = state_12983;var statearr_12988_13028 = state_12983__$1;(statearr_12988_13028[(2)] = null);
(statearr_12988_13028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (4)))
{var inst_12924 = (state_12983[(13)]);var inst_12924__$1 = (state_12983[(2)]);var inst_12925 = (inst_12924__$1 == null);var state_12983__$1 = (function (){var statearr_12989 = state_12983;(statearr_12989[(13)] = inst_12924__$1);
return statearr_12989;
})();if(cljs.core.truth_(inst_12925))
{var statearr_12990_13029 = state_12983__$1;(statearr_12990_13029[(1)] = (5));
} else
{var statearr_12991_13030 = state_12983__$1;(statearr_12991_13030[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (15)))
{var state_12983__$1 = state_12983;var statearr_12995_13031 = state_12983__$1;(statearr_12995_13031[(2)] = null);
(statearr_12995_13031[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (21)))
{var state_12983__$1 = state_12983;var statearr_12996_13032 = state_12983__$1;(statearr_12996_13032[(2)] = null);
(statearr_12996_13032[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (13)))
{var inst_12938 = (state_12983[(9)]);var inst_12937 = (state_12983[(10)]);var inst_12936 = (state_12983[(11)]);var inst_12935 = (state_12983[(12)]);var inst_12945 = (state_12983[(2)]);var inst_12946 = (inst_12938 + (1));var tmp12992 = inst_12937;var tmp12993 = inst_12936;var tmp12994 = inst_12935;var inst_12935__$1 = tmp12994;var inst_12936__$1 = tmp12993;var inst_12937__$1 = tmp12992;var inst_12938__$1 = inst_12946;var state_12983__$1 = (function (){var statearr_12997 = state_12983;(statearr_12997[(9)] = inst_12938__$1);
(statearr_12997[(14)] = inst_12945);
(statearr_12997[(10)] = inst_12937__$1);
(statearr_12997[(11)] = inst_12936__$1);
(statearr_12997[(12)] = inst_12935__$1);
return statearr_12997;
})();var statearr_12998_13033 = state_12983__$1;(statearr_12998_13033[(2)] = null);
(statearr_12998_13033[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (22)))
{var state_12983__$1 = state_12983;var statearr_12999_13034 = state_12983__$1;(statearr_12999_13034[(2)] = null);
(statearr_12999_13034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (6)))
{var inst_12924 = (state_12983[(13)]);var inst_12933 = f.call(null,inst_12924);var inst_12934 = cljs.core.seq.call(null,inst_12933);var inst_12935 = inst_12934;var inst_12936 = null;var inst_12937 = (0);var inst_12938 = (0);var state_12983__$1 = (function (){var statearr_13000 = state_12983;(statearr_13000[(9)] = inst_12938);
(statearr_13000[(10)] = inst_12937);
(statearr_13000[(11)] = inst_12936);
(statearr_13000[(12)] = inst_12935);
return statearr_13000;
})();var statearr_13001_13035 = state_12983__$1;(statearr_13001_13035[(2)] = null);
(statearr_13001_13035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (17)))
{var inst_12949 = (state_12983[(7)]);var inst_12953 = cljs.core.chunk_first.call(null,inst_12949);var inst_12954 = cljs.core.chunk_rest.call(null,inst_12949);var inst_12955 = cljs.core.count.call(null,inst_12953);var inst_12935 = inst_12954;var inst_12936 = inst_12953;var inst_12937 = inst_12955;var inst_12938 = (0);var state_12983__$1 = (function (){var statearr_13002 = state_12983;(statearr_13002[(9)] = inst_12938);
(statearr_13002[(10)] = inst_12937);
(statearr_13002[(11)] = inst_12936);
(statearr_13002[(12)] = inst_12935);
return statearr_13002;
})();var statearr_13003_13036 = state_12983__$1;(statearr_13003_13036[(2)] = null);
(statearr_13003_13036[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (3)))
{var inst_12981 = (state_12983[(2)]);var state_12983__$1 = state_12983;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12983__$1,inst_12981);
} else
{if((state_val_12984 === (12)))
{var inst_12969 = (state_12983[(2)]);var state_12983__$1 = state_12983;var statearr_13004_13037 = state_12983__$1;(statearr_13004_13037[(2)] = inst_12969);
(statearr_13004_13037[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (2)))
{var state_12983__$1 = state_12983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12983__$1,(4),in$);
} else
{if((state_val_12984 === (23)))
{var inst_12977 = (state_12983[(2)]);var state_12983__$1 = state_12983;var statearr_13005_13038 = state_12983__$1;(statearr_13005_13038[(2)] = inst_12977);
(statearr_13005_13038[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (19)))
{var inst_12964 = (state_12983[(2)]);var state_12983__$1 = state_12983;var statearr_13006_13039 = state_12983__$1;(statearr_13006_13039[(2)] = inst_12964);
(statearr_13006_13039[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (11)))
{var inst_12935 = (state_12983[(12)]);var inst_12949 = (state_12983[(7)]);var inst_12949__$1 = cljs.core.seq.call(null,inst_12935);var state_12983__$1 = (function (){var statearr_13007 = state_12983;(statearr_13007[(7)] = inst_12949__$1);
return statearr_13007;
})();if(inst_12949__$1)
{var statearr_13008_13040 = state_12983__$1;(statearr_13008_13040[(1)] = (14));
} else
{var statearr_13009_13041 = state_12983__$1;(statearr_13009_13041[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (9)))
{var inst_12971 = (state_12983[(2)]);var inst_12972 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_12983__$1 = (function (){var statearr_13010 = state_12983;(statearr_13010[(15)] = inst_12971);
return statearr_13010;
})();if(cljs.core.truth_(inst_12972))
{var statearr_13011_13042 = state_12983__$1;(statearr_13011_13042[(1)] = (21));
} else
{var statearr_13012_13043 = state_12983__$1;(statearr_13012_13043[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (5)))
{var inst_12927 = cljs.core.async.close_BANG_.call(null,out);var state_12983__$1 = state_12983;var statearr_13013_13044 = state_12983__$1;(statearr_13013_13044[(2)] = inst_12927);
(statearr_13013_13044[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (14)))
{var inst_12949 = (state_12983[(7)]);var inst_12951 = cljs.core.chunked_seq_QMARK_.call(null,inst_12949);var state_12983__$1 = state_12983;if(inst_12951)
{var statearr_13014_13045 = state_12983__$1;(statearr_13014_13045[(1)] = (17));
} else
{var statearr_13015_13046 = state_12983__$1;(statearr_13015_13046[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (16)))
{var inst_12967 = (state_12983[(2)]);var state_12983__$1 = state_12983;var statearr_13016_13047 = state_12983__$1;(statearr_13016_13047[(2)] = inst_12967);
(statearr_13016_13047[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12984 === (10)))
{var inst_12938 = (state_12983[(9)]);var inst_12936 = (state_12983[(11)]);var inst_12943 = cljs.core._nth.call(null,inst_12936,inst_12938);var state_12983__$1 = state_12983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12983__$1,(13),out,inst_12943);
} else
{if((state_val_12984 === (18)))
{var inst_12949 = (state_12983[(7)]);var inst_12958 = cljs.core.first.call(null,inst_12949);var state_12983__$1 = state_12983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12983__$1,(20),out,inst_12958);
} else
{if((state_val_12984 === (8)))
{var inst_12938 = (state_12983[(9)]);var inst_12937 = (state_12983[(10)]);var inst_12940 = (inst_12938 < inst_12937);var inst_12941 = inst_12940;var state_12983__$1 = state_12983;if(cljs.core.truth_(inst_12941))
{var statearr_13017_13048 = state_12983__$1;(statearr_13017_13048[(1)] = (10));
} else
{var statearr_13018_13049 = state_12983__$1;(statearr_13018_13049[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5722__auto__))
;return ((function (switch__5707__auto__,c__5722__auto__){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_13022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13022[(0)] = state_machine__5708__auto__);
(statearr_13022[(1)] = (1));
return statearr_13022;
});
var state_machine__5708__auto____1 = (function (state_12983){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_12983);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e13023){if((e13023 instanceof Object))
{var ex__5711__auto__ = e13023;var statearr_13024_13050 = state_12983;(statearr_13024_13050[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12983);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13023;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13051 = state_12983;
state_12983 = G__13051;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_12983){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_12983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto__))
})();var state__5724__auto__ = (function (){var statearr_13025 = f__5723__auto__.call(null);(statearr_13025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto__);
return statearr_13025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto__))
);
return c__5722__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5722__auto___13148 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___13148,out){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___13148,out){
return (function (state_13123){var state_val_13124 = (state_13123[(1)]);if((state_val_13124 === (7)))
{var inst_13118 = (state_13123[(2)]);var state_13123__$1 = state_13123;var statearr_13125_13149 = state_13123__$1;(statearr_13125_13149[(2)] = inst_13118);
(statearr_13125_13149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13124 === (1)))
{var inst_13100 = null;var state_13123__$1 = (function (){var statearr_13126 = state_13123;(statearr_13126[(7)] = inst_13100);
return statearr_13126;
})();var statearr_13127_13150 = state_13123__$1;(statearr_13127_13150[(2)] = null);
(statearr_13127_13150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13124 === (4)))
{var inst_13103 = (state_13123[(8)]);var inst_13103__$1 = (state_13123[(2)]);var inst_13104 = (inst_13103__$1 == null);var inst_13105 = cljs.core.not.call(null,inst_13104);var state_13123__$1 = (function (){var statearr_13128 = state_13123;(statearr_13128[(8)] = inst_13103__$1);
return statearr_13128;
})();if(inst_13105)
{var statearr_13129_13151 = state_13123__$1;(statearr_13129_13151[(1)] = (5));
} else
{var statearr_13130_13152 = state_13123__$1;(statearr_13130_13152[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13124 === (6)))
{var state_13123__$1 = state_13123;var statearr_13131_13153 = state_13123__$1;(statearr_13131_13153[(2)] = null);
(statearr_13131_13153[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13124 === (3)))
{var inst_13120 = (state_13123[(2)]);var inst_13121 = cljs.core.async.close_BANG_.call(null,out);var state_13123__$1 = (function (){var statearr_13132 = state_13123;(statearr_13132[(9)] = inst_13120);
return statearr_13132;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13123__$1,inst_13121);
} else
{if((state_val_13124 === (2)))
{var state_13123__$1 = state_13123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13123__$1,(4),ch);
} else
{if((state_val_13124 === (11)))
{var inst_13103 = (state_13123[(8)]);var inst_13112 = (state_13123[(2)]);var inst_13100 = inst_13103;var state_13123__$1 = (function (){var statearr_13133 = state_13123;(statearr_13133[(10)] = inst_13112);
(statearr_13133[(7)] = inst_13100);
return statearr_13133;
})();var statearr_13134_13154 = state_13123__$1;(statearr_13134_13154[(2)] = null);
(statearr_13134_13154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13124 === (9)))
{var inst_13103 = (state_13123[(8)]);var state_13123__$1 = state_13123;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13123__$1,(11),out,inst_13103);
} else
{if((state_val_13124 === (5)))
{var inst_13103 = (state_13123[(8)]);var inst_13100 = (state_13123[(7)]);var inst_13107 = cljs.core._EQ_.call(null,inst_13103,inst_13100);var state_13123__$1 = state_13123;if(inst_13107)
{var statearr_13136_13155 = state_13123__$1;(statearr_13136_13155[(1)] = (8));
} else
{var statearr_13137_13156 = state_13123__$1;(statearr_13137_13156[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13124 === (10)))
{var inst_13115 = (state_13123[(2)]);var state_13123__$1 = state_13123;var statearr_13138_13157 = state_13123__$1;(statearr_13138_13157[(2)] = inst_13115);
(statearr_13138_13157[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13124 === (8)))
{var inst_13100 = (state_13123[(7)]);var tmp13135 = inst_13100;var inst_13100__$1 = tmp13135;var state_13123__$1 = (function (){var statearr_13139 = state_13123;(statearr_13139[(7)] = inst_13100__$1);
return statearr_13139;
})();var statearr_13140_13158 = state_13123__$1;(statearr_13140_13158[(2)] = null);
(statearr_13140_13158[(1)] = (2));
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
}
}
}
}
});})(c__5722__auto___13148,out))
;return ((function (switch__5707__auto__,c__5722__auto___13148,out){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_13144 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13144[(0)] = state_machine__5708__auto__);
(statearr_13144[(1)] = (1));
return statearr_13144;
});
var state_machine__5708__auto____1 = (function (state_13123){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_13123);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e13145){if((e13145 instanceof Object))
{var ex__5711__auto__ = e13145;var statearr_13146_13159 = state_13123;(statearr_13146_13159[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13145;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13160 = state_13123;
state_13123 = G__13160;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_13123){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_13123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___13148,out))
})();var state__5724__auto__ = (function (){var statearr_13147 = f__5723__auto__.call(null);(statearr_13147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___13148);
return statearr_13147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___13148,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5722__auto___13295 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___13295,out){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___13295,out){
return (function (state_13265){var state_val_13266 = (state_13265[(1)]);if((state_val_13266 === (7)))
{var inst_13261 = (state_13265[(2)]);var state_13265__$1 = state_13265;var statearr_13267_13296 = state_13265__$1;(statearr_13267_13296[(2)] = inst_13261);
(statearr_13267_13296[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (1)))
{var inst_13228 = (new Array(n));var inst_13229 = inst_13228;var inst_13230 = (0);var state_13265__$1 = (function (){var statearr_13268 = state_13265;(statearr_13268[(7)] = inst_13229);
(statearr_13268[(8)] = inst_13230);
return statearr_13268;
})();var statearr_13269_13297 = state_13265__$1;(statearr_13269_13297[(2)] = null);
(statearr_13269_13297[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (4)))
{var inst_13233 = (state_13265[(9)]);var inst_13233__$1 = (state_13265[(2)]);var inst_13234 = (inst_13233__$1 == null);var inst_13235 = cljs.core.not.call(null,inst_13234);var state_13265__$1 = (function (){var statearr_13270 = state_13265;(statearr_13270[(9)] = inst_13233__$1);
return statearr_13270;
})();if(inst_13235)
{var statearr_13271_13298 = state_13265__$1;(statearr_13271_13298[(1)] = (5));
} else
{var statearr_13272_13299 = state_13265__$1;(statearr_13272_13299[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (15)))
{var inst_13255 = (state_13265[(2)]);var state_13265__$1 = state_13265;var statearr_13273_13300 = state_13265__$1;(statearr_13273_13300[(2)] = inst_13255);
(statearr_13273_13300[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (13)))
{var state_13265__$1 = state_13265;var statearr_13274_13301 = state_13265__$1;(statearr_13274_13301[(2)] = null);
(statearr_13274_13301[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (6)))
{var inst_13230 = (state_13265[(8)]);var inst_13251 = (inst_13230 > (0));var state_13265__$1 = state_13265;if(cljs.core.truth_(inst_13251))
{var statearr_13275_13302 = state_13265__$1;(statearr_13275_13302[(1)] = (12));
} else
{var statearr_13276_13303 = state_13265__$1;(statearr_13276_13303[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (3)))
{var inst_13263 = (state_13265[(2)]);var state_13265__$1 = state_13265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13265__$1,inst_13263);
} else
{if((state_val_13266 === (12)))
{var inst_13229 = (state_13265[(7)]);var inst_13253 = cljs.core.vec.call(null,inst_13229);var state_13265__$1 = state_13265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13265__$1,(15),out,inst_13253);
} else
{if((state_val_13266 === (2)))
{var state_13265__$1 = state_13265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13265__$1,(4),ch);
} else
{if((state_val_13266 === (11)))
{var inst_13245 = (state_13265[(2)]);var inst_13246 = (new Array(n));var inst_13229 = inst_13246;var inst_13230 = (0);var state_13265__$1 = (function (){var statearr_13277 = state_13265;(statearr_13277[(7)] = inst_13229);
(statearr_13277[(8)] = inst_13230);
(statearr_13277[(10)] = inst_13245);
return statearr_13277;
})();var statearr_13278_13304 = state_13265__$1;(statearr_13278_13304[(2)] = null);
(statearr_13278_13304[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (9)))
{var inst_13229 = (state_13265[(7)]);var inst_13243 = cljs.core.vec.call(null,inst_13229);var state_13265__$1 = state_13265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13265__$1,(11),out,inst_13243);
} else
{if((state_val_13266 === (5)))
{var inst_13233 = (state_13265[(9)]);var inst_13229 = (state_13265[(7)]);var inst_13238 = (state_13265[(11)]);var inst_13230 = (state_13265[(8)]);var inst_13237 = (inst_13229[inst_13230] = inst_13233);var inst_13238__$1 = (inst_13230 + (1));var inst_13239 = (inst_13238__$1 < n);var state_13265__$1 = (function (){var statearr_13279 = state_13265;(statearr_13279[(12)] = inst_13237);
(statearr_13279[(11)] = inst_13238__$1);
return statearr_13279;
})();if(cljs.core.truth_(inst_13239))
{var statearr_13280_13305 = state_13265__$1;(statearr_13280_13305[(1)] = (8));
} else
{var statearr_13281_13306 = state_13265__$1;(statearr_13281_13306[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (14)))
{var inst_13258 = (state_13265[(2)]);var inst_13259 = cljs.core.async.close_BANG_.call(null,out);var state_13265__$1 = (function (){var statearr_13283 = state_13265;(statearr_13283[(13)] = inst_13258);
return statearr_13283;
})();var statearr_13284_13307 = state_13265__$1;(statearr_13284_13307[(2)] = inst_13259);
(statearr_13284_13307[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (10)))
{var inst_13249 = (state_13265[(2)]);var state_13265__$1 = state_13265;var statearr_13285_13308 = state_13265__$1;(statearr_13285_13308[(2)] = inst_13249);
(statearr_13285_13308[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13266 === (8)))
{var inst_13229 = (state_13265[(7)]);var inst_13238 = (state_13265[(11)]);var tmp13282 = inst_13229;var inst_13229__$1 = tmp13282;var inst_13230 = inst_13238;var state_13265__$1 = (function (){var statearr_13286 = state_13265;(statearr_13286[(7)] = inst_13229__$1);
(statearr_13286[(8)] = inst_13230);
return statearr_13286;
})();var statearr_13287_13309 = state_13265__$1;(statearr_13287_13309[(2)] = null);
(statearr_13287_13309[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__5722__auto___13295,out))
;return ((function (switch__5707__auto__,c__5722__auto___13295,out){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_13291 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13291[(0)] = state_machine__5708__auto__);
(statearr_13291[(1)] = (1));
return statearr_13291;
});
var state_machine__5708__auto____1 = (function (state_13265){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_13265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e13292){if((e13292 instanceof Object))
{var ex__5711__auto__ = e13292;var statearr_13293_13310 = state_13265;(statearr_13293_13310[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13265);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13292;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13311 = state_13265;
state_13265 = G__13311;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_13265){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_13265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___13295,out))
})();var state__5724__auto__ = (function (){var statearr_13294 = f__5723__auto__.call(null);(statearr_13294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___13295);
return statearr_13294;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___13295,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5722__auto___13454 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5722__auto___13454,out){
return (function (){var f__5723__auto__ = (function (){var switch__5707__auto__ = ((function (c__5722__auto___13454,out){
return (function (state_13424){var state_val_13425 = (state_13424[(1)]);if((state_val_13425 === (7)))
{var inst_13420 = (state_13424[(2)]);var state_13424__$1 = state_13424;var statearr_13426_13455 = state_13424__$1;(statearr_13426_13455[(2)] = inst_13420);
(statearr_13426_13455[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (1)))
{var inst_13383 = [];var inst_13384 = inst_13383;var inst_13385 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_13424__$1 = (function (){var statearr_13427 = state_13424;(statearr_13427[(7)] = inst_13384);
(statearr_13427[(8)] = inst_13385);
return statearr_13427;
})();var statearr_13428_13456 = state_13424__$1;(statearr_13428_13456[(2)] = null);
(statearr_13428_13456[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (4)))
{var inst_13388 = (state_13424[(9)]);var inst_13388__$1 = (state_13424[(2)]);var inst_13389 = (inst_13388__$1 == null);var inst_13390 = cljs.core.not.call(null,inst_13389);var state_13424__$1 = (function (){var statearr_13429 = state_13424;(statearr_13429[(9)] = inst_13388__$1);
return statearr_13429;
})();if(inst_13390)
{var statearr_13430_13457 = state_13424__$1;(statearr_13430_13457[(1)] = (5));
} else
{var statearr_13431_13458 = state_13424__$1;(statearr_13431_13458[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (15)))
{var inst_13414 = (state_13424[(2)]);var state_13424__$1 = state_13424;var statearr_13432_13459 = state_13424__$1;(statearr_13432_13459[(2)] = inst_13414);
(statearr_13432_13459[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (13)))
{var state_13424__$1 = state_13424;var statearr_13433_13460 = state_13424__$1;(statearr_13433_13460[(2)] = null);
(statearr_13433_13460[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (6)))
{var inst_13384 = (state_13424[(7)]);var inst_13409 = inst_13384.length;var inst_13410 = (inst_13409 > (0));var state_13424__$1 = state_13424;if(cljs.core.truth_(inst_13410))
{var statearr_13434_13461 = state_13424__$1;(statearr_13434_13461[(1)] = (12));
} else
{var statearr_13435_13462 = state_13424__$1;(statearr_13435_13462[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (3)))
{var inst_13422 = (state_13424[(2)]);var state_13424__$1 = state_13424;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13424__$1,inst_13422);
} else
{if((state_val_13425 === (12)))
{var inst_13384 = (state_13424[(7)]);var inst_13412 = cljs.core.vec.call(null,inst_13384);var state_13424__$1 = state_13424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13424__$1,(15),out,inst_13412);
} else
{if((state_val_13425 === (2)))
{var state_13424__$1 = state_13424;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13424__$1,(4),ch);
} else
{if((state_val_13425 === (11)))
{var inst_13388 = (state_13424[(9)]);var inst_13392 = (state_13424[(10)]);var inst_13402 = (state_13424[(2)]);var inst_13403 = [];var inst_13404 = inst_13403.push(inst_13388);var inst_13384 = inst_13403;var inst_13385 = inst_13392;var state_13424__$1 = (function (){var statearr_13436 = state_13424;(statearr_13436[(7)] = inst_13384);
(statearr_13436[(11)] = inst_13402);
(statearr_13436[(8)] = inst_13385);
(statearr_13436[(12)] = inst_13404);
return statearr_13436;
})();var statearr_13437_13463 = state_13424__$1;(statearr_13437_13463[(2)] = null);
(statearr_13437_13463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (9)))
{var inst_13384 = (state_13424[(7)]);var inst_13400 = cljs.core.vec.call(null,inst_13384);var state_13424__$1 = state_13424;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13424__$1,(11),out,inst_13400);
} else
{if((state_val_13425 === (5)))
{var inst_13388 = (state_13424[(9)]);var inst_13385 = (state_13424[(8)]);var inst_13392 = (state_13424[(10)]);var inst_13392__$1 = f.call(null,inst_13388);var inst_13393 = cljs.core._EQ_.call(null,inst_13392__$1,inst_13385);var inst_13394 = cljs.core.keyword_identical_QMARK_.call(null,inst_13385,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_13395 = (inst_13393) || (inst_13394);var state_13424__$1 = (function (){var statearr_13438 = state_13424;(statearr_13438[(10)] = inst_13392__$1);
return statearr_13438;
})();if(cljs.core.truth_(inst_13395))
{var statearr_13439_13464 = state_13424__$1;(statearr_13439_13464[(1)] = (8));
} else
{var statearr_13440_13465 = state_13424__$1;(statearr_13440_13465[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (14)))
{var inst_13417 = (state_13424[(2)]);var inst_13418 = cljs.core.async.close_BANG_.call(null,out);var state_13424__$1 = (function (){var statearr_13442 = state_13424;(statearr_13442[(13)] = inst_13417);
return statearr_13442;
})();var statearr_13443_13466 = state_13424__$1;(statearr_13443_13466[(2)] = inst_13418);
(statearr_13443_13466[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (10)))
{var inst_13407 = (state_13424[(2)]);var state_13424__$1 = state_13424;var statearr_13444_13467 = state_13424__$1;(statearr_13444_13467[(2)] = inst_13407);
(statearr_13444_13467[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13425 === (8)))
{var inst_13384 = (state_13424[(7)]);var inst_13388 = (state_13424[(9)]);var inst_13392 = (state_13424[(10)]);var inst_13397 = inst_13384.push(inst_13388);var tmp13441 = inst_13384;var inst_13384__$1 = tmp13441;var inst_13385 = inst_13392;var state_13424__$1 = (function (){var statearr_13445 = state_13424;(statearr_13445[(7)] = inst_13384__$1);
(statearr_13445[(8)] = inst_13385);
(statearr_13445[(14)] = inst_13397);
return statearr_13445;
})();var statearr_13446_13468 = state_13424__$1;(statearr_13446_13468[(2)] = null);
(statearr_13446_13468[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__5722__auto___13454,out))
;return ((function (switch__5707__auto__,c__5722__auto___13454,out){
return (function() {
var state_machine__5708__auto__ = null;
var state_machine__5708__auto____0 = (function (){var statearr_13450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13450[(0)] = state_machine__5708__auto__);
(statearr_13450[(1)] = (1));
return statearr_13450;
});
var state_machine__5708__auto____1 = (function (state_13424){while(true){
var ret_value__5709__auto__ = (function (){try{while(true){
var result__5710__auto__ = switch__5707__auto__.call(null,state_13424);if(cljs.core.keyword_identical_QMARK_.call(null,result__5710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5710__auto__;
}
break;
}
}catch (e13451){if((e13451 instanceof Object))
{var ex__5711__auto__ = e13451;var statearr_13452_13469 = state_13424;(statearr_13452_13469[(5)] = ex__5711__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13424);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13451;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5709__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13470 = state_13424;
state_13424 = G__13470;
continue;
}
} else
{return ret_value__5709__auto__;
}
break;
}
});
state_machine__5708__auto__ = function(state_13424){
switch(arguments.length){
case 0:
return state_machine__5708__auto____0.call(this);
case 1:
return state_machine__5708__auto____1.call(this,state_13424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5708__auto____0;
state_machine__5708__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5708__auto____1;
return state_machine__5708__auto__;
})()
;})(switch__5707__auto__,c__5722__auto___13454,out))
})();var state__5724__auto__ = (function (){var statearr_13453 = f__5723__auto__.call(null);(statearr_13453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5722__auto___13454);
return statearr_13453;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5724__auto__);
});})(c__5722__auto___13454,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map