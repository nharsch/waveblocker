goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39673 = arguments.length;
switch (G__39673) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39676 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39676 = (function (f,blockable,meta39677){
this.f = f;
this.blockable = blockable;
this.meta39677 = meta39677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39678,meta39677__$1){
var self__ = this;
var _39678__$1 = this;
return (new cljs.core.async.t_cljs$core$async39676(self__.f,self__.blockable,meta39677__$1));
}));

(cljs.core.async.t_cljs$core$async39676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39678){
var self__ = this;
var _39678__$1 = this;
return self__.meta39677;
}));

(cljs.core.async.t_cljs$core$async39676.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async39676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async39676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39677","meta39677",-1844269539,null)], null);
}));

(cljs.core.async.t_cljs$core$async39676.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39676");

(cljs.core.async.t_cljs$core$async39676.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39676");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39676.
 */
cljs.core.async.__GT_t_cljs$core$async39676 = (function cljs$core$async$__GT_t_cljs$core$async39676(f__$1,blockable__$1,meta39677){
return (new cljs.core.async.t_cljs$core$async39676(f__$1,blockable__$1,meta39677));
});

}

return (new cljs.core.async.t_cljs$core$async39676(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39727 = arguments.length;
switch (G__39727) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39743 = arguments.length;
switch (G__39743) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39750 = arguments.length;
switch (G__39750) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42219 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42219) : fn1.call(null,val_42219));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42219) : fn1.call(null,val_42219));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39771 = arguments.length;
switch (G__39771) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___42227 = n;
var x_42228 = (0);
while(true){
if((x_42228 < n__4666__auto___42227)){
(a[x_42228] = x_42228);

var G__42229 = (x_42228 + (1));
x_42228 = G__42229;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39775 = (function (flag,meta39776){
this.flag = flag;
this.meta39776 = meta39776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39777,meta39776__$1){
var self__ = this;
var _39777__$1 = this;
return (new cljs.core.async.t_cljs$core$async39775(self__.flag,meta39776__$1));
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39777){
var self__ = this;
var _39777__$1 = this;
return self__.meta39776;
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39775.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async39775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39776","meta39776",2131301839,null)], null);
}));

(cljs.core.async.t_cljs$core$async39775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39775");

(cljs.core.async.t_cljs$core$async39775.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39775.
 */
cljs.core.async.__GT_t_cljs$core$async39775 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39775(flag__$1,meta39776){
return (new cljs.core.async.t_cljs$core$async39775(flag__$1,meta39776));
});

}

return (new cljs.core.async.t_cljs$core$async39775(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39799 = (function (flag,cb,meta39800){
this.flag = flag;
this.cb = cb;
this.meta39800 = meta39800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39801,meta39800__$1){
var self__ = this;
var _39801__$1 = this;
return (new cljs.core.async.t_cljs$core$async39799(self__.flag,self__.cb,meta39800__$1));
}));

(cljs.core.async.t_cljs$core$async39799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39801){
var self__ = this;
var _39801__$1 = this;
return self__.meta39800;
}));

(cljs.core.async.t_cljs$core$async39799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async39799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async39799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39800","meta39800",-1678628845,null)], null);
}));

(cljs.core.async.t_cljs$core$async39799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39799");

(cljs.core.async.t_cljs$core$async39799.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39799.
 */
cljs.core.async.__GT_t_cljs$core$async39799 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39799(flag__$1,cb__$1,meta39800){
return (new cljs.core.async.t_cljs$core$async39799(flag__$1,cb__$1,meta39800));
});

}

return (new cljs.core.async.t_cljs$core$async39799(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39844_SHARP_){
var G__39849 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39844_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39849) : fret.call(null,G__39849));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39845_SHARP_){
var G__39850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39845_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39850) : fret.call(null,G__39850));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42248 = (i + (1));
i = G__42248;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42249 = arguments.length;
var i__4790__auto___42250 = (0);
while(true){
if((i__4790__auto___42250 < len__4789__auto___42249)){
args__4795__auto__.push((arguments[i__4790__auto___42250]));

var G__42251 = (i__4790__auto___42250 + (1));
i__4790__auto___42250 = G__42251;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39863){
var map__39864 = p__39863;
var map__39864__$1 = (((((!((map__39864 == null))))?(((((map__39864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39864):map__39864);
var opts = map__39864__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39854){
var G__39855 = cljs.core.first(seq39854);
var seq39854__$1 = cljs.core.next(seq39854);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39855,seq39854__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39884 = arguments.length;
switch (G__39884) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29847__auto___42272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_39917){
var state_val_39918 = (state_39917[(1)]);
if((state_val_39918 === (7))){
var inst_39913 = (state_39917[(2)]);
var state_39917__$1 = state_39917;
var statearr_39923_42273 = state_39917__$1;
(statearr_39923_42273[(2)] = inst_39913);

(statearr_39923_42273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (1))){
var state_39917__$1 = state_39917;
var statearr_39925_42274 = state_39917__$1;
(statearr_39925_42274[(2)] = null);

(statearr_39925_42274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (4))){
var inst_39896 = (state_39917[(7)]);
var inst_39896__$1 = (state_39917[(2)]);
var inst_39897 = (inst_39896__$1 == null);
var state_39917__$1 = (function (){var statearr_39927 = state_39917;
(statearr_39927[(7)] = inst_39896__$1);

return statearr_39927;
})();
if(cljs.core.truth_(inst_39897)){
var statearr_39928_42279 = state_39917__$1;
(statearr_39928_42279[(1)] = (5));

} else {
var statearr_39935_42280 = state_39917__$1;
(statearr_39935_42280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (13))){
var state_39917__$1 = state_39917;
var statearr_39936_42282 = state_39917__$1;
(statearr_39936_42282[(2)] = null);

(statearr_39936_42282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (6))){
var inst_39896 = (state_39917[(7)]);
var state_39917__$1 = state_39917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39917__$1,(11),to,inst_39896);
} else {
if((state_val_39918 === (3))){
var inst_39915 = (state_39917[(2)]);
var state_39917__$1 = state_39917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39917__$1,inst_39915);
} else {
if((state_val_39918 === (12))){
var state_39917__$1 = state_39917;
var statearr_39942_42283 = state_39917__$1;
(statearr_39942_42283[(2)] = null);

(statearr_39942_42283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (2))){
var state_39917__$1 = state_39917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39917__$1,(4),from);
} else {
if((state_val_39918 === (11))){
var inst_39906 = (state_39917[(2)]);
var state_39917__$1 = state_39917;
if(cljs.core.truth_(inst_39906)){
var statearr_39944_42287 = state_39917__$1;
(statearr_39944_42287[(1)] = (12));

} else {
var statearr_39945_42289 = state_39917__$1;
(statearr_39945_42289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (9))){
var state_39917__$1 = state_39917;
var statearr_39946_42290 = state_39917__$1;
(statearr_39946_42290[(2)] = null);

(statearr_39946_42290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (5))){
var state_39917__$1 = state_39917;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39947_42291 = state_39917__$1;
(statearr_39947_42291[(1)] = (8));

} else {
var statearr_39948_42293 = state_39917__$1;
(statearr_39948_42293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (14))){
var inst_39911 = (state_39917[(2)]);
var state_39917__$1 = state_39917;
var statearr_39953_42295 = state_39917__$1;
(statearr_39953_42295[(2)] = inst_39911);

(statearr_39953_42295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (10))){
var inst_39903 = (state_39917[(2)]);
var state_39917__$1 = state_39917;
var statearr_39955_42296 = state_39917__$1;
(statearr_39955_42296[(2)] = inst_39903);

(statearr_39955_42296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39918 === (8))){
var inst_39900 = cljs.core.async.close_BANG_(to);
var state_39917__$1 = state_39917;
var statearr_39956_42297 = state_39917__$1;
(statearr_39956_42297[(2)] = inst_39900);

(statearr_39956_42297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_39959 = [null,null,null,null,null,null,null,null];
(statearr_39959[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_39959[(1)] = (1));

return statearr_39959;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_39917){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_39917);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e39960){if((e39960 instanceof Object)){
var ex__29521__auto__ = e39960;
var statearr_39964_42300 = state_39917;
(statearr_39964_42300[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42301 = state_39917;
state_39917 = G__42301;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_39917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_39917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_39966 = f__29848__auto__();
(statearr_39966[(6)] = c__29847__auto___42272);

return statearr_39966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__39971){
var vec__39972 = p__39971;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39972,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39972,(1),null);
var job = vec__39972;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__29847__auto___42305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_39980){
var state_val_39981 = (state_39980[(1)]);
if((state_val_39981 === (1))){
var state_39980__$1 = state_39980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39980__$1,(2),res,v);
} else {
if((state_val_39981 === (2))){
var inst_39977 = (state_39980[(2)]);
var inst_39978 = cljs.core.async.close_BANG_(res);
var state_39980__$1 = (function (){var statearr_39983 = state_39980;
(statearr_39983[(7)] = inst_39977);

return statearr_39983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39980__$1,inst_39978);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0 = (function (){
var statearr_39984 = [null,null,null,null,null,null,null,null];
(statearr_39984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__);

(statearr_39984[(1)] = (1));

return statearr_39984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1 = (function (state_39980){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_39980);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e39985){if((e39985 instanceof Object)){
var ex__29521__auto__ = e39985;
var statearr_39987_42318 = state_39980;
(statearr_39987_42318[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42323 = state_39980;
state_39980 = G__42323;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = function(state_39980){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1.call(this,state_39980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_39991 = f__29848__auto__();
(statearr_39991[(6)] = c__29847__auto___42305);

return statearr_39991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39995){
var vec__39996 = p__39995;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39996,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39996,(1),null);
var job = vec__39996;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___42328 = n;
var __42329 = (0);
while(true){
if((__42329 < n__4666__auto___42328)){
var G__39999_42330 = type;
var G__39999_42331__$1 = (((G__39999_42330 instanceof cljs.core.Keyword))?G__39999_42330.fqn:null);
switch (G__39999_42331__$1) {
case "compute":
var c__29847__auto___42338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42329,c__29847__auto___42338,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async){
return (function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = ((function (__42329,c__29847__auto___42338,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async){
return (function (state_40015){
var state_val_40016 = (state_40015[(1)]);
if((state_val_40016 === (1))){
var state_40015__$1 = state_40015;
var statearr_40020_42341 = state_40015__$1;
(statearr_40020_42341[(2)] = null);

(statearr_40020_42341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (2))){
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40015__$1,(4),jobs);
} else {
if((state_val_40016 === (3))){
var inst_40013 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40015__$1,inst_40013);
} else {
if((state_val_40016 === (4))){
var inst_40005 = (state_40015[(2)]);
var inst_40006 = process(inst_40005);
var state_40015__$1 = state_40015;
if(cljs.core.truth_(inst_40006)){
var statearr_40021_42344 = state_40015__$1;
(statearr_40021_42344[(1)] = (5));

} else {
var statearr_40025_42346 = state_40015__$1;
(statearr_40025_42346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (5))){
var state_40015__$1 = state_40015;
var statearr_40027_42347 = state_40015__$1;
(statearr_40027_42347[(2)] = null);

(statearr_40027_42347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (6))){
var state_40015__$1 = state_40015;
var statearr_40029_42348 = state_40015__$1;
(statearr_40029_42348[(2)] = null);

(statearr_40029_42348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (7))){
var inst_40011 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40032_42350 = state_40015__$1;
(statearr_40032_42350[(2)] = inst_40011);

(statearr_40032_42350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42329,c__29847__auto___42338,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async))
;
return ((function (__42329,switch__29514__auto__,c__29847__auto___42338,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0 = (function (){
var statearr_40033 = [null,null,null,null,null,null,null];
(statearr_40033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__);

(statearr_40033[(1)] = (1));

return statearr_40033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1 = (function (state_40015){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40015);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40034){if((e40034 instanceof Object)){
var ex__29521__auto__ = e40034;
var statearr_40035_42351 = state_40015;
(statearr_40035_42351[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42353 = state_40015;
state_40015 = G__42353;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = function(state_40015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1.call(this,state_40015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__;
})()
;})(__42329,switch__29514__auto__,c__29847__auto___42338,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async))
})();
var state__29849__auto__ = (function (){var statearr_40042 = f__29848__auto__();
(statearr_40042[(6)] = c__29847__auto___42338);

return statearr_40042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
});})(__42329,c__29847__auto___42338,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async))
);


break;
case "async":
var c__29847__auto___42354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__42329,c__29847__auto___42354,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async){
return (function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = ((function (__42329,c__29847__auto___42354,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async){
return (function (state_40057){
var state_val_40058 = (state_40057[(1)]);
if((state_val_40058 === (1))){
var state_40057__$1 = state_40057;
var statearr_40068_42355 = state_40057__$1;
(statearr_40068_42355[(2)] = null);

(statearr_40068_42355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (2))){
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40057__$1,(4),jobs);
} else {
if((state_val_40058 === (3))){
var inst_40055 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40057__$1,inst_40055);
} else {
if((state_val_40058 === (4))){
var inst_40047 = (state_40057[(2)]);
var inst_40048 = async(inst_40047);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40048)){
var statearr_40070_42356 = state_40057__$1;
(statearr_40070_42356[(1)] = (5));

} else {
var statearr_40071_42358 = state_40057__$1;
(statearr_40071_42358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (5))){
var state_40057__$1 = state_40057;
var statearr_40076_42360 = state_40057__$1;
(statearr_40076_42360[(2)] = null);

(statearr_40076_42360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (6))){
var state_40057__$1 = state_40057;
var statearr_40077_42364 = state_40057__$1;
(statearr_40077_42364[(2)] = null);

(statearr_40077_42364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (7))){
var inst_40053 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40078_42366 = state_40057__$1;
(statearr_40078_42366[(2)] = inst_40053);

(statearr_40078_42366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__42329,c__29847__auto___42354,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async))
;
return ((function (__42329,switch__29514__auto__,c__29847__auto___42354,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0 = (function (){
var statearr_40079 = [null,null,null,null,null,null,null];
(statearr_40079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__);

(statearr_40079[(1)] = (1));

return statearr_40079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1 = (function (state_40057){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40057);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40093){if((e40093 instanceof Object)){
var ex__29521__auto__ = e40093;
var statearr_40094_42368 = state_40057;
(statearr_40094_42368[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42369 = state_40057;
state_40057 = G__42369;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = function(state_40057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1.call(this,state_40057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__;
})()
;})(__42329,switch__29514__auto__,c__29847__auto___42354,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async))
})();
var state__29849__auto__ = (function (){var statearr_40098 = f__29848__auto__();
(statearr_40098[(6)] = c__29847__auto___42354);

return statearr_40098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
});})(__42329,c__29847__auto___42354,G__39999_42330,G__39999_42331__$1,n__4666__auto___42328,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39999_42331__$1)].join('')));

}

var G__42370 = (__42329 + (1));
__42329 = G__42370;
continue;
} else {
}
break;
}

var c__29847__auto___42371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_40123){
var state_val_40124 = (state_40123[(1)]);
if((state_val_40124 === (7))){
var inst_40119 = (state_40123[(2)]);
var state_40123__$1 = state_40123;
var statearr_40129_42372 = state_40123__$1;
(statearr_40129_42372[(2)] = inst_40119);

(statearr_40129_42372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40124 === (1))){
var state_40123__$1 = state_40123;
var statearr_40130_42374 = state_40123__$1;
(statearr_40130_42374[(2)] = null);

(statearr_40130_42374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40124 === (4))){
var inst_40101 = (state_40123[(7)]);
var inst_40101__$1 = (state_40123[(2)]);
var inst_40102 = (inst_40101__$1 == null);
var state_40123__$1 = (function (){var statearr_40134 = state_40123;
(statearr_40134[(7)] = inst_40101__$1);

return statearr_40134;
})();
if(cljs.core.truth_(inst_40102)){
var statearr_40135_42375 = state_40123__$1;
(statearr_40135_42375[(1)] = (5));

} else {
var statearr_40136_42376 = state_40123__$1;
(statearr_40136_42376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40124 === (6))){
var inst_40109 = (state_40123[(8)]);
var inst_40101 = (state_40123[(7)]);
var inst_40109__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40110 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40111 = [inst_40101,inst_40109__$1];
var inst_40112 = (new cljs.core.PersistentVector(null,2,(5),inst_40110,inst_40111,null));
var state_40123__$1 = (function (){var statearr_40137 = state_40123;
(statearr_40137[(8)] = inst_40109__$1);

return statearr_40137;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40123__$1,(8),jobs,inst_40112);
} else {
if((state_val_40124 === (3))){
var inst_40121 = (state_40123[(2)]);
var state_40123__$1 = state_40123;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40123__$1,inst_40121);
} else {
if((state_val_40124 === (2))){
var state_40123__$1 = state_40123;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40123__$1,(4),from);
} else {
if((state_val_40124 === (9))){
var inst_40116 = (state_40123[(2)]);
var state_40123__$1 = (function (){var statearr_40138 = state_40123;
(statearr_40138[(9)] = inst_40116);

return statearr_40138;
})();
var statearr_40139_42381 = state_40123__$1;
(statearr_40139_42381[(2)] = null);

(statearr_40139_42381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40124 === (5))){
var inst_40107 = cljs.core.async.close_BANG_(jobs);
var state_40123__$1 = state_40123;
var statearr_40140_42382 = state_40123__$1;
(statearr_40140_42382[(2)] = inst_40107);

(statearr_40140_42382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40124 === (8))){
var inst_40109 = (state_40123[(8)]);
var inst_40114 = (state_40123[(2)]);
var state_40123__$1 = (function (){var statearr_40141 = state_40123;
(statearr_40141[(10)] = inst_40114);

return statearr_40141;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40123__$1,(9),results,inst_40109);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0 = (function (){
var statearr_40142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__);

(statearr_40142[(1)] = (1));

return statearr_40142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1 = (function (state_40123){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40123);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40143){if((e40143 instanceof Object)){
var ex__29521__auto__ = e40143;
var statearr_40144_42385 = state_40123;
(statearr_40144_42385[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42386 = state_40123;
state_40123 = G__42386;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = function(state_40123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1.call(this,state_40123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_40146 = f__29848__auto__();
(statearr_40146[(6)] = c__29847__auto___42371);

return statearr_40146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


var c__29847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_40190){
var state_val_40191 = (state_40190[(1)]);
if((state_val_40191 === (7))){
var inst_40183 = (state_40190[(2)]);
var state_40190__$1 = state_40190;
var statearr_40192_42392 = state_40190__$1;
(statearr_40192_42392[(2)] = inst_40183);

(statearr_40192_42392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (20))){
var state_40190__$1 = state_40190;
var statearr_40193_42393 = state_40190__$1;
(statearr_40193_42393[(2)] = null);

(statearr_40193_42393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (1))){
var state_40190__$1 = state_40190;
var statearr_40194_42394 = state_40190__$1;
(statearr_40194_42394[(2)] = null);

(statearr_40194_42394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (4))){
var inst_40152 = (state_40190[(7)]);
var inst_40152__$1 = (state_40190[(2)]);
var inst_40153 = (inst_40152__$1 == null);
var state_40190__$1 = (function (){var statearr_40198 = state_40190;
(statearr_40198[(7)] = inst_40152__$1);

return statearr_40198;
})();
if(cljs.core.truth_(inst_40153)){
var statearr_40199_42404 = state_40190__$1;
(statearr_40199_42404[(1)] = (5));

} else {
var statearr_40200_42406 = state_40190__$1;
(statearr_40200_42406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (15))){
var inst_40165 = (state_40190[(8)]);
var state_40190__$1 = state_40190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40190__$1,(18),to,inst_40165);
} else {
if((state_val_40191 === (21))){
var inst_40178 = (state_40190[(2)]);
var state_40190__$1 = state_40190;
var statearr_40201_42415 = state_40190__$1;
(statearr_40201_42415[(2)] = inst_40178);

(statearr_40201_42415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (13))){
var inst_40180 = (state_40190[(2)]);
var state_40190__$1 = (function (){var statearr_40202 = state_40190;
(statearr_40202[(9)] = inst_40180);

return statearr_40202;
})();
var statearr_40203_42417 = state_40190__$1;
(statearr_40203_42417[(2)] = null);

(statearr_40203_42417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (6))){
var inst_40152 = (state_40190[(7)]);
var state_40190__$1 = state_40190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40190__$1,(11),inst_40152);
} else {
if((state_val_40191 === (17))){
var inst_40173 = (state_40190[(2)]);
var state_40190__$1 = state_40190;
if(cljs.core.truth_(inst_40173)){
var statearr_40207_42425 = state_40190__$1;
(statearr_40207_42425[(1)] = (19));

} else {
var statearr_40208_42426 = state_40190__$1;
(statearr_40208_42426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (3))){
var inst_40188 = (state_40190[(2)]);
var state_40190__$1 = state_40190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40190__$1,inst_40188);
} else {
if((state_val_40191 === (12))){
var inst_40162 = (state_40190[(10)]);
var state_40190__$1 = state_40190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40190__$1,(14),inst_40162);
} else {
if((state_val_40191 === (2))){
var state_40190__$1 = state_40190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40190__$1,(4),results);
} else {
if((state_val_40191 === (19))){
var state_40190__$1 = state_40190;
var statearr_40209_42430 = state_40190__$1;
(statearr_40209_42430[(2)] = null);

(statearr_40209_42430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (11))){
var inst_40162 = (state_40190[(2)]);
var state_40190__$1 = (function (){var statearr_40210 = state_40190;
(statearr_40210[(10)] = inst_40162);

return statearr_40210;
})();
var statearr_40211_42431 = state_40190__$1;
(statearr_40211_42431[(2)] = null);

(statearr_40211_42431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (9))){
var state_40190__$1 = state_40190;
var statearr_40212_42432 = state_40190__$1;
(statearr_40212_42432[(2)] = null);

(statearr_40212_42432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (5))){
var state_40190__$1 = state_40190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40213_42433 = state_40190__$1;
(statearr_40213_42433[(1)] = (8));

} else {
var statearr_40214_42434 = state_40190__$1;
(statearr_40214_42434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (14))){
var inst_40165 = (state_40190[(8)]);
var inst_40165__$1 = (state_40190[(2)]);
var inst_40166 = (inst_40165__$1 == null);
var inst_40167 = cljs.core.not(inst_40166);
var state_40190__$1 = (function (){var statearr_40215 = state_40190;
(statearr_40215[(8)] = inst_40165__$1);

return statearr_40215;
})();
if(inst_40167){
var statearr_40216_42438 = state_40190__$1;
(statearr_40216_42438[(1)] = (15));

} else {
var statearr_40217_42439 = state_40190__$1;
(statearr_40217_42439[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (16))){
var state_40190__$1 = state_40190;
var statearr_40218_42440 = state_40190__$1;
(statearr_40218_42440[(2)] = false);

(statearr_40218_42440[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (10))){
var inst_40159 = (state_40190[(2)]);
var state_40190__$1 = state_40190;
var statearr_40219_42445 = state_40190__$1;
(statearr_40219_42445[(2)] = inst_40159);

(statearr_40219_42445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (18))){
var inst_40170 = (state_40190[(2)]);
var state_40190__$1 = state_40190;
var statearr_40220_42446 = state_40190__$1;
(statearr_40220_42446[(2)] = inst_40170);

(statearr_40220_42446[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40191 === (8))){
var inst_40156 = cljs.core.async.close_BANG_(to);
var state_40190__$1 = state_40190;
var statearr_40221_42450 = state_40190__$1;
(statearr_40221_42450[(2)] = inst_40156);

(statearr_40221_42450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0 = (function (){
var statearr_40222 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__);

(statearr_40222[(1)] = (1));

return statearr_40222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1 = (function (state_40190){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40190);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40223){if((e40223 instanceof Object)){
var ex__29521__auto__ = e40223;
var statearr_40224_42451 = state_40190;
(statearr_40224_42451[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42452 = state_40190;
state_40190 = G__42452;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__ = function(state_40190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1.call(this,state_40190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29515__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_40229 = f__29848__auto__();
(statearr_40229[(6)] = c__29847__auto__);

return statearr_40229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));

return c__29847__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40231 = arguments.length;
switch (G__40231) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40236 = arguments.length;
switch (G__40236) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40241 = arguments.length;
switch (G__40241) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__29847__auto___42477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_40270){
var state_val_40271 = (state_40270[(1)]);
if((state_val_40271 === (7))){
var inst_40266 = (state_40270[(2)]);
var state_40270__$1 = state_40270;
var statearr_40272_42478 = state_40270__$1;
(statearr_40272_42478[(2)] = inst_40266);

(statearr_40272_42478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (1))){
var state_40270__$1 = state_40270;
var statearr_40273_42479 = state_40270__$1;
(statearr_40273_42479[(2)] = null);

(statearr_40273_42479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (4))){
var inst_40247 = (state_40270[(7)]);
var inst_40247__$1 = (state_40270[(2)]);
var inst_40248 = (inst_40247__$1 == null);
var state_40270__$1 = (function (){var statearr_40274 = state_40270;
(statearr_40274[(7)] = inst_40247__$1);

return statearr_40274;
})();
if(cljs.core.truth_(inst_40248)){
var statearr_40275_42481 = state_40270__$1;
(statearr_40275_42481[(1)] = (5));

} else {
var statearr_40276_42483 = state_40270__$1;
(statearr_40276_42483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (13))){
var state_40270__$1 = state_40270;
var statearr_40277_42486 = state_40270__$1;
(statearr_40277_42486[(2)] = null);

(statearr_40277_42486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (6))){
var inst_40247 = (state_40270[(7)]);
var inst_40253 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40247) : p.call(null,inst_40247));
var state_40270__$1 = state_40270;
if(cljs.core.truth_(inst_40253)){
var statearr_40278_42488 = state_40270__$1;
(statearr_40278_42488[(1)] = (9));

} else {
var statearr_40279_42489 = state_40270__$1;
(statearr_40279_42489[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (3))){
var inst_40268 = (state_40270[(2)]);
var state_40270__$1 = state_40270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40270__$1,inst_40268);
} else {
if((state_val_40271 === (12))){
var state_40270__$1 = state_40270;
var statearr_40282_42490 = state_40270__$1;
(statearr_40282_42490[(2)] = null);

(statearr_40282_42490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (2))){
var state_40270__$1 = state_40270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40270__$1,(4),ch);
} else {
if((state_val_40271 === (11))){
var inst_40247 = (state_40270[(7)]);
var inst_40257 = (state_40270[(2)]);
var state_40270__$1 = state_40270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40270__$1,(8),inst_40257,inst_40247);
} else {
if((state_val_40271 === (9))){
var state_40270__$1 = state_40270;
var statearr_40283_42491 = state_40270__$1;
(statearr_40283_42491[(2)] = tc);

(statearr_40283_42491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (5))){
var inst_40250 = cljs.core.async.close_BANG_(tc);
var inst_40251 = cljs.core.async.close_BANG_(fc);
var state_40270__$1 = (function (){var statearr_40285 = state_40270;
(statearr_40285[(8)] = inst_40250);

return statearr_40285;
})();
var statearr_40287_42492 = state_40270__$1;
(statearr_40287_42492[(2)] = inst_40251);

(statearr_40287_42492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (14))){
var inst_40264 = (state_40270[(2)]);
var state_40270__$1 = state_40270;
var statearr_40289_42493 = state_40270__$1;
(statearr_40289_42493[(2)] = inst_40264);

(statearr_40289_42493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (10))){
var state_40270__$1 = state_40270;
var statearr_40291_42496 = state_40270__$1;
(statearr_40291_42496[(2)] = fc);

(statearr_40291_42496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40271 === (8))){
var inst_40259 = (state_40270[(2)]);
var state_40270__$1 = state_40270;
if(cljs.core.truth_(inst_40259)){
var statearr_40294_42500 = state_40270__$1;
(statearr_40294_42500[(1)] = (12));

} else {
var statearr_40296_42501 = state_40270__$1;
(statearr_40296_42501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_40297 = [null,null,null,null,null,null,null,null,null];
(statearr_40297[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_40297[(1)] = (1));

return statearr_40297;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_40270){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40270);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40298){if((e40298 instanceof Object)){
var ex__29521__auto__ = e40298;
var statearr_40299_42502 = state_40270;
(statearr_40299_42502[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40298;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42503 = state_40270;
state_40270 = G__42503;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_40270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_40270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_40300 = f__29848__auto__();
(statearr_40300[(6)] = c__29847__auto___42477);

return statearr_40300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_40321){
var state_val_40322 = (state_40321[(1)]);
if((state_val_40322 === (7))){
var inst_40317 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
var statearr_40326_42506 = state_40321__$1;
(statearr_40326_42506[(2)] = inst_40317);

(statearr_40326_42506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (1))){
var inst_40301 = init;
var state_40321__$1 = (function (){var statearr_40327 = state_40321;
(statearr_40327[(7)] = inst_40301);

return statearr_40327;
})();
var statearr_40328_42509 = state_40321__$1;
(statearr_40328_42509[(2)] = null);

(statearr_40328_42509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (4))){
var inst_40304 = (state_40321[(8)]);
var inst_40304__$1 = (state_40321[(2)]);
var inst_40305 = (inst_40304__$1 == null);
var state_40321__$1 = (function (){var statearr_40334 = state_40321;
(statearr_40334[(8)] = inst_40304__$1);

return statearr_40334;
})();
if(cljs.core.truth_(inst_40305)){
var statearr_40335_42510 = state_40321__$1;
(statearr_40335_42510[(1)] = (5));

} else {
var statearr_40336_42511 = state_40321__$1;
(statearr_40336_42511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (6))){
var inst_40308 = (state_40321[(9)]);
var inst_40304 = (state_40321[(8)]);
var inst_40301 = (state_40321[(7)]);
var inst_40308__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40301,inst_40304) : f.call(null,inst_40301,inst_40304));
var inst_40309 = cljs.core.reduced_QMARK_(inst_40308__$1);
var state_40321__$1 = (function (){var statearr_40338 = state_40321;
(statearr_40338[(9)] = inst_40308__$1);

return statearr_40338;
})();
if(inst_40309){
var statearr_40340_42512 = state_40321__$1;
(statearr_40340_42512[(1)] = (8));

} else {
var statearr_40342_42513 = state_40321__$1;
(statearr_40342_42513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (3))){
var inst_40319 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40321__$1,inst_40319);
} else {
if((state_val_40322 === (2))){
var state_40321__$1 = state_40321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40321__$1,(4),ch);
} else {
if((state_val_40322 === (9))){
var inst_40308 = (state_40321[(9)]);
var inst_40301 = inst_40308;
var state_40321__$1 = (function (){var statearr_40343 = state_40321;
(statearr_40343[(7)] = inst_40301);

return statearr_40343;
})();
var statearr_40344_42514 = state_40321__$1;
(statearr_40344_42514[(2)] = null);

(statearr_40344_42514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (5))){
var inst_40301 = (state_40321[(7)]);
var state_40321__$1 = state_40321;
var statearr_40345_42515 = state_40321__$1;
(statearr_40345_42515[(2)] = inst_40301);

(statearr_40345_42515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (10))){
var inst_40315 = (state_40321[(2)]);
var state_40321__$1 = state_40321;
var statearr_40346_42516 = state_40321__$1;
(statearr_40346_42516[(2)] = inst_40315);

(statearr_40346_42516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40322 === (8))){
var inst_40308 = (state_40321[(9)]);
var inst_40311 = cljs.core.deref(inst_40308);
var state_40321__$1 = state_40321;
var statearr_40359_42517 = state_40321__$1;
(statearr_40359_42517[(2)] = inst_40311);

(statearr_40359_42517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__29515__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29515__auto____0 = (function (){
var statearr_40381 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40381[(0)] = cljs$core$async$reduce_$_state_machine__29515__auto__);

(statearr_40381[(1)] = (1));

return statearr_40381;
});
var cljs$core$async$reduce_$_state_machine__29515__auto____1 = (function (state_40321){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40321);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40382){if((e40382 instanceof Object)){
var ex__29521__auto__ = e40382;
var statearr_40389_42526 = state_40321;
(statearr_40389_42526[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42527 = state_40321;
state_40321 = G__42527;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29515__auto__ = function(state_40321){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29515__auto____1.call(this,state_40321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29515__auto____0;
cljs$core$async$reduce_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29515__auto____1;
return cljs$core$async$reduce_$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_40393 = f__29848__auto__();
(statearr_40393[(6)] = c__29847__auto__);

return statearr_40393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));

return c__29847__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__29847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_40403){
var state_val_40404 = (state_40403[(1)]);
if((state_val_40404 === (1))){
var inst_40398 = cljs.core.async.reduce(f__$1,init,ch);
var state_40403__$1 = state_40403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40403__$1,(2),inst_40398);
} else {
if((state_val_40404 === (2))){
var inst_40400 = (state_40403[(2)]);
var inst_40401 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40400) : f__$1.call(null,inst_40400));
var state_40403__$1 = state_40403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40403__$1,inst_40401);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29515__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29515__auto____0 = (function (){
var statearr_40405 = [null,null,null,null,null,null,null];
(statearr_40405[(0)] = cljs$core$async$transduce_$_state_machine__29515__auto__);

(statearr_40405[(1)] = (1));

return statearr_40405;
});
var cljs$core$async$transduce_$_state_machine__29515__auto____1 = (function (state_40403){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40403);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40406){if((e40406 instanceof Object)){
var ex__29521__auto__ = e40406;
var statearr_40407_42533 = state_40403;
(statearr_40407_42533[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40406;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42535 = state_40403;
state_40403 = G__42535;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29515__auto__ = function(state_40403){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29515__auto____1.call(this,state_40403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29515__auto____0;
cljs$core$async$transduce_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29515__auto____1;
return cljs$core$async$transduce_$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_40408 = f__29848__auto__();
(statearr_40408[(6)] = c__29847__auto__);

return statearr_40408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));

return c__29847__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40410 = arguments.length;
switch (G__40410) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_40438){
var state_val_40439 = (state_40438[(1)]);
if((state_val_40439 === (7))){
var inst_40420 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40440_42548 = state_40438__$1;
(statearr_40440_42548[(2)] = inst_40420);

(statearr_40440_42548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (1))){
var inst_40411 = cljs.core.seq(coll);
var inst_40412 = inst_40411;
var state_40438__$1 = (function (){var statearr_40441 = state_40438;
(statearr_40441[(7)] = inst_40412);

return statearr_40441;
})();
var statearr_40442_42551 = state_40438__$1;
(statearr_40442_42551[(2)] = null);

(statearr_40442_42551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (4))){
var inst_40412 = (state_40438[(7)]);
var inst_40418 = cljs.core.first(inst_40412);
var state_40438__$1 = state_40438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40438__$1,(7),ch,inst_40418);
} else {
if((state_val_40439 === (13))){
var inst_40432 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40443_42558 = state_40438__$1;
(statearr_40443_42558[(2)] = inst_40432);

(statearr_40443_42558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (6))){
var inst_40423 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
if(cljs.core.truth_(inst_40423)){
var statearr_40444_42559 = state_40438__$1;
(statearr_40444_42559[(1)] = (8));

} else {
var statearr_40445_42561 = state_40438__$1;
(statearr_40445_42561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (3))){
var inst_40436 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40438__$1,inst_40436);
} else {
if((state_val_40439 === (12))){
var state_40438__$1 = state_40438;
var statearr_40446_42565 = state_40438__$1;
(statearr_40446_42565[(2)] = null);

(statearr_40446_42565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (2))){
var inst_40412 = (state_40438[(7)]);
var state_40438__$1 = state_40438;
if(cljs.core.truth_(inst_40412)){
var statearr_40447_42570 = state_40438__$1;
(statearr_40447_42570[(1)] = (4));

} else {
var statearr_40448_42572 = state_40438__$1;
(statearr_40448_42572[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (11))){
var inst_40429 = cljs.core.async.close_BANG_(ch);
var state_40438__$1 = state_40438;
var statearr_40449_42576 = state_40438__$1;
(statearr_40449_42576[(2)] = inst_40429);

(statearr_40449_42576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (9))){
var state_40438__$1 = state_40438;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40450_42577 = state_40438__$1;
(statearr_40450_42577[(1)] = (11));

} else {
var statearr_40451_42578 = state_40438__$1;
(statearr_40451_42578[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (5))){
var inst_40412 = (state_40438[(7)]);
var state_40438__$1 = state_40438;
var statearr_40452_42579 = state_40438__$1;
(statearr_40452_42579[(2)] = inst_40412);

(statearr_40452_42579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (10))){
var inst_40434 = (state_40438[(2)]);
var state_40438__$1 = state_40438;
var statearr_40453_42580 = state_40438__$1;
(statearr_40453_42580[(2)] = inst_40434);

(statearr_40453_42580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40439 === (8))){
var inst_40412 = (state_40438[(7)]);
var inst_40425 = cljs.core.next(inst_40412);
var inst_40412__$1 = inst_40425;
var state_40438__$1 = (function (){var statearr_40454 = state_40438;
(statearr_40454[(7)] = inst_40412__$1);

return statearr_40454;
})();
var statearr_40455_42583 = state_40438__$1;
(statearr_40455_42583[(2)] = null);

(statearr_40455_42583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_40456 = [null,null,null,null,null,null,null,null];
(statearr_40456[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_40456[(1)] = (1));

return statearr_40456;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_40438){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40438);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40457){if((e40457 instanceof Object)){
var ex__29521__auto__ = e40457;
var statearr_40458_42586 = state_40438;
(statearr_40458_42586[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42589 = state_40438;
state_40438 = G__42589;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_40438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_40438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_40462 = f__29848__auto__();
(statearr_40462[(6)] = c__29847__auto__);

return statearr_40462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));

return c__29847__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40479 = (function (ch,cs,meta40480){
this.ch = ch;
this.cs = cs;
this.meta40480 = meta40480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40481,meta40480__$1){
var self__ = this;
var _40481__$1 = this;
return (new cljs.core.async.t_cljs$core$async40479(self__.ch,self__.cs,meta40480__$1));
}));

(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40481){
var self__ = this;
var _40481__$1 = this;
return self__.meta40480;
}));

(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async40479.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async40479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40480","meta40480",1236183121,null)], null);
}));

(cljs.core.async.t_cljs$core$async40479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40479");

(cljs.core.async.t_cljs$core$async40479.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40479.
 */
cljs.core.async.__GT_t_cljs$core$async40479 = (function cljs$core$async$mult_$___GT_t_cljs$core$async40479(ch__$1,cs__$1,meta40480){
return (new cljs.core.async.t_cljs$core$async40479(ch__$1,cs__$1,meta40480));
});

}

return (new cljs.core.async.t_cljs$core$async40479(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__29847__auto___42615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_40653){
var state_val_40654 = (state_40653[(1)]);
if((state_val_40654 === (7))){
var inst_40645 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40659_42618 = state_40653__$1;
(statearr_40659_42618[(2)] = inst_40645);

(statearr_40659_42618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (20))){
var inst_40543 = (state_40653[(7)]);
var inst_40555 = cljs.core.first(inst_40543);
var inst_40556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40555,(0),null);
var inst_40557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40555,(1),null);
var state_40653__$1 = (function (){var statearr_40663 = state_40653;
(statearr_40663[(8)] = inst_40556);

return statearr_40663;
})();
if(cljs.core.truth_(inst_40557)){
var statearr_40664_42619 = state_40653__$1;
(statearr_40664_42619[(1)] = (22));

} else {
var statearr_40666_42620 = state_40653__$1;
(statearr_40666_42620[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (27))){
var inst_40507 = (state_40653[(9)]);
var inst_40595 = (state_40653[(10)]);
var inst_40590 = (state_40653[(11)]);
var inst_40588 = (state_40653[(12)]);
var inst_40595__$1 = cljs.core._nth(inst_40588,inst_40590);
var inst_40598 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40595__$1,inst_40507,done);
var state_40653__$1 = (function (){var statearr_40672 = state_40653;
(statearr_40672[(10)] = inst_40595__$1);

return statearr_40672;
})();
if(cljs.core.truth_(inst_40598)){
var statearr_40673_42621 = state_40653__$1;
(statearr_40673_42621[(1)] = (30));

} else {
var statearr_40675_42622 = state_40653__$1;
(statearr_40675_42622[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (1))){
var state_40653__$1 = state_40653;
var statearr_40676_42623 = state_40653__$1;
(statearr_40676_42623[(2)] = null);

(statearr_40676_42623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (24))){
var inst_40543 = (state_40653[(7)]);
var inst_40563 = (state_40653[(2)]);
var inst_40564 = cljs.core.next(inst_40543);
var inst_40516 = inst_40564;
var inst_40517 = null;
var inst_40518 = (0);
var inst_40519 = (0);
var state_40653__$1 = (function (){var statearr_40680 = state_40653;
(statearr_40680[(13)] = inst_40516);

(statearr_40680[(14)] = inst_40517);

(statearr_40680[(15)] = inst_40563);

(statearr_40680[(16)] = inst_40518);

(statearr_40680[(17)] = inst_40519);

return statearr_40680;
})();
var statearr_40681_42625 = state_40653__$1;
(statearr_40681_42625[(2)] = null);

(statearr_40681_42625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (39))){
var state_40653__$1 = state_40653;
var statearr_40686_42626 = state_40653__$1;
(statearr_40686_42626[(2)] = null);

(statearr_40686_42626[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (4))){
var inst_40507 = (state_40653[(9)]);
var inst_40507__$1 = (state_40653[(2)]);
var inst_40508 = (inst_40507__$1 == null);
var state_40653__$1 = (function (){var statearr_40687 = state_40653;
(statearr_40687[(9)] = inst_40507__$1);

return statearr_40687;
})();
if(cljs.core.truth_(inst_40508)){
var statearr_40689_42627 = state_40653__$1;
(statearr_40689_42627[(1)] = (5));

} else {
var statearr_40690_42628 = state_40653__$1;
(statearr_40690_42628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (15))){
var inst_40516 = (state_40653[(13)]);
var inst_40517 = (state_40653[(14)]);
var inst_40518 = (state_40653[(16)]);
var inst_40519 = (state_40653[(17)]);
var inst_40535 = (state_40653[(2)]);
var inst_40537 = (inst_40519 + (1));
var tmp40683 = inst_40516;
var tmp40684 = inst_40517;
var tmp40685 = inst_40518;
var inst_40516__$1 = tmp40683;
var inst_40517__$1 = tmp40684;
var inst_40518__$1 = tmp40685;
var inst_40519__$1 = inst_40537;
var state_40653__$1 = (function (){var statearr_40695 = state_40653;
(statearr_40695[(13)] = inst_40516__$1);

(statearr_40695[(14)] = inst_40517__$1);

(statearr_40695[(18)] = inst_40535);

(statearr_40695[(16)] = inst_40518__$1);

(statearr_40695[(17)] = inst_40519__$1);

return statearr_40695;
})();
var statearr_40696_42635 = state_40653__$1;
(statearr_40696_42635[(2)] = null);

(statearr_40696_42635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (21))){
var inst_40567 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40703_42636 = state_40653__$1;
(statearr_40703_42636[(2)] = inst_40567);

(statearr_40703_42636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (31))){
var inst_40595 = (state_40653[(10)]);
var inst_40601 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40595);
var state_40653__$1 = state_40653;
var statearr_40707_42638 = state_40653__$1;
(statearr_40707_42638[(2)] = inst_40601);

(statearr_40707_42638[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (32))){
var inst_40587 = (state_40653[(19)]);
var inst_40590 = (state_40653[(11)]);
var inst_40589 = (state_40653[(20)]);
var inst_40588 = (state_40653[(12)]);
var inst_40603 = (state_40653[(2)]);
var inst_40604 = (inst_40590 + (1));
var tmp40698 = inst_40587;
var tmp40699 = inst_40589;
var tmp40700 = inst_40588;
var inst_40587__$1 = tmp40698;
var inst_40588__$1 = tmp40700;
var inst_40589__$1 = tmp40699;
var inst_40590__$1 = inst_40604;
var state_40653__$1 = (function (){var statearr_40711 = state_40653;
(statearr_40711[(19)] = inst_40587__$1);

(statearr_40711[(11)] = inst_40590__$1);

(statearr_40711[(20)] = inst_40589__$1);

(statearr_40711[(12)] = inst_40588__$1);

(statearr_40711[(21)] = inst_40603);

return statearr_40711;
})();
var statearr_40714_42640 = state_40653__$1;
(statearr_40714_42640[(2)] = null);

(statearr_40714_42640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (40))){
var inst_40617 = (state_40653[(22)]);
var inst_40621 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40617);
var state_40653__$1 = state_40653;
var statearr_40716_42641 = state_40653__$1;
(statearr_40716_42641[(2)] = inst_40621);

(statearr_40716_42641[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (33))){
var inst_40608 = (state_40653[(23)]);
var inst_40610 = cljs.core.chunked_seq_QMARK_(inst_40608);
var state_40653__$1 = state_40653;
if(inst_40610){
var statearr_40717_42642 = state_40653__$1;
(statearr_40717_42642[(1)] = (36));

} else {
var statearr_40718_42643 = state_40653__$1;
(statearr_40718_42643[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (13))){
var inst_40529 = (state_40653[(24)]);
var inst_40532 = cljs.core.async.close_BANG_(inst_40529);
var state_40653__$1 = state_40653;
var statearr_40726_42644 = state_40653__$1;
(statearr_40726_42644[(2)] = inst_40532);

(statearr_40726_42644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (22))){
var inst_40556 = (state_40653[(8)]);
var inst_40560 = cljs.core.async.close_BANG_(inst_40556);
var state_40653__$1 = state_40653;
var statearr_40729_42645 = state_40653__$1;
(statearr_40729_42645[(2)] = inst_40560);

(statearr_40729_42645[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (36))){
var inst_40608 = (state_40653[(23)]);
var inst_40612 = cljs.core.chunk_first(inst_40608);
var inst_40613 = cljs.core.chunk_rest(inst_40608);
var inst_40614 = cljs.core.count(inst_40612);
var inst_40587 = inst_40613;
var inst_40588 = inst_40612;
var inst_40589 = inst_40614;
var inst_40590 = (0);
var state_40653__$1 = (function (){var statearr_40739 = state_40653;
(statearr_40739[(19)] = inst_40587);

(statearr_40739[(11)] = inst_40590);

(statearr_40739[(20)] = inst_40589);

(statearr_40739[(12)] = inst_40588);

return statearr_40739;
})();
var statearr_40740_42648 = state_40653__$1;
(statearr_40740_42648[(2)] = null);

(statearr_40740_42648[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (41))){
var inst_40608 = (state_40653[(23)]);
var inst_40623 = (state_40653[(2)]);
var inst_40624 = cljs.core.next(inst_40608);
var inst_40587 = inst_40624;
var inst_40588 = null;
var inst_40589 = (0);
var inst_40590 = (0);
var state_40653__$1 = (function (){var statearr_40747 = state_40653;
(statearr_40747[(19)] = inst_40587);

(statearr_40747[(11)] = inst_40590);

(statearr_40747[(20)] = inst_40589);

(statearr_40747[(25)] = inst_40623);

(statearr_40747[(12)] = inst_40588);

return statearr_40747;
})();
var statearr_40749_42655 = state_40653__$1;
(statearr_40749_42655[(2)] = null);

(statearr_40749_42655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (43))){
var state_40653__$1 = state_40653;
var statearr_40750_42656 = state_40653__$1;
(statearr_40750_42656[(2)] = null);

(statearr_40750_42656[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (29))){
var inst_40632 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40752_42657 = state_40653__$1;
(statearr_40752_42657[(2)] = inst_40632);

(statearr_40752_42657[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (44))){
var inst_40641 = (state_40653[(2)]);
var state_40653__$1 = (function (){var statearr_40753 = state_40653;
(statearr_40753[(26)] = inst_40641);

return statearr_40753;
})();
var statearr_40754_42658 = state_40653__$1;
(statearr_40754_42658[(2)] = null);

(statearr_40754_42658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (6))){
var inst_40578 = (state_40653[(27)]);
var inst_40577 = cljs.core.deref(cs);
var inst_40578__$1 = cljs.core.keys(inst_40577);
var inst_40579 = cljs.core.count(inst_40578__$1);
var inst_40580 = cljs.core.reset_BANG_(dctr,inst_40579);
var inst_40586 = cljs.core.seq(inst_40578__$1);
var inst_40587 = inst_40586;
var inst_40588 = null;
var inst_40589 = (0);
var inst_40590 = (0);
var state_40653__$1 = (function (){var statearr_40769 = state_40653;
(statearr_40769[(19)] = inst_40587);

(statearr_40769[(11)] = inst_40590);

(statearr_40769[(20)] = inst_40589);

(statearr_40769[(12)] = inst_40588);

(statearr_40769[(28)] = inst_40580);

(statearr_40769[(27)] = inst_40578__$1);

return statearr_40769;
})();
var statearr_40771_42659 = state_40653__$1;
(statearr_40771_42659[(2)] = null);

(statearr_40771_42659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (28))){
var inst_40587 = (state_40653[(19)]);
var inst_40608 = (state_40653[(23)]);
var inst_40608__$1 = cljs.core.seq(inst_40587);
var state_40653__$1 = (function (){var statearr_40775 = state_40653;
(statearr_40775[(23)] = inst_40608__$1);

return statearr_40775;
})();
if(inst_40608__$1){
var statearr_40776_42660 = state_40653__$1;
(statearr_40776_42660[(1)] = (33));

} else {
var statearr_40777_42661 = state_40653__$1;
(statearr_40777_42661[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (25))){
var inst_40590 = (state_40653[(11)]);
var inst_40589 = (state_40653[(20)]);
var inst_40592 = (inst_40590 < inst_40589);
var inst_40593 = inst_40592;
var state_40653__$1 = state_40653;
if(cljs.core.truth_(inst_40593)){
var statearr_40779_42662 = state_40653__$1;
(statearr_40779_42662[(1)] = (27));

} else {
var statearr_40780_42663 = state_40653__$1;
(statearr_40780_42663[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (34))){
var state_40653__$1 = state_40653;
var statearr_40782_42664 = state_40653__$1;
(statearr_40782_42664[(2)] = null);

(statearr_40782_42664[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (17))){
var state_40653__$1 = state_40653;
var statearr_40784_42665 = state_40653__$1;
(statearr_40784_42665[(2)] = null);

(statearr_40784_42665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (3))){
var inst_40647 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40653__$1,inst_40647);
} else {
if((state_val_40654 === (12))){
var inst_40572 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40788_42666 = state_40653__$1;
(statearr_40788_42666[(2)] = inst_40572);

(statearr_40788_42666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (2))){
var state_40653__$1 = state_40653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40653__$1,(4),ch);
} else {
if((state_val_40654 === (23))){
var state_40653__$1 = state_40653;
var statearr_40790_42667 = state_40653__$1;
(statearr_40790_42667[(2)] = null);

(statearr_40790_42667[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (35))){
var inst_40630 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40791_42668 = state_40653__$1;
(statearr_40791_42668[(2)] = inst_40630);

(statearr_40791_42668[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (19))){
var inst_40543 = (state_40653[(7)]);
var inst_40547 = cljs.core.chunk_first(inst_40543);
var inst_40548 = cljs.core.chunk_rest(inst_40543);
var inst_40549 = cljs.core.count(inst_40547);
var inst_40516 = inst_40548;
var inst_40517 = inst_40547;
var inst_40518 = inst_40549;
var inst_40519 = (0);
var state_40653__$1 = (function (){var statearr_40793 = state_40653;
(statearr_40793[(13)] = inst_40516);

(statearr_40793[(14)] = inst_40517);

(statearr_40793[(16)] = inst_40518);

(statearr_40793[(17)] = inst_40519);

return statearr_40793;
})();
var statearr_40794_42669 = state_40653__$1;
(statearr_40794_42669[(2)] = null);

(statearr_40794_42669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (11))){
var inst_40516 = (state_40653[(13)]);
var inst_40543 = (state_40653[(7)]);
var inst_40543__$1 = cljs.core.seq(inst_40516);
var state_40653__$1 = (function (){var statearr_40797 = state_40653;
(statearr_40797[(7)] = inst_40543__$1);

return statearr_40797;
})();
if(inst_40543__$1){
var statearr_40798_42670 = state_40653__$1;
(statearr_40798_42670[(1)] = (16));

} else {
var statearr_40799_42671 = state_40653__$1;
(statearr_40799_42671[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (9))){
var inst_40574 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40802_42672 = state_40653__$1;
(statearr_40802_42672[(2)] = inst_40574);

(statearr_40802_42672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (5))){
var inst_40514 = cljs.core.deref(cs);
var inst_40515 = cljs.core.seq(inst_40514);
var inst_40516 = inst_40515;
var inst_40517 = null;
var inst_40518 = (0);
var inst_40519 = (0);
var state_40653__$1 = (function (){var statearr_40807 = state_40653;
(statearr_40807[(13)] = inst_40516);

(statearr_40807[(14)] = inst_40517);

(statearr_40807[(16)] = inst_40518);

(statearr_40807[(17)] = inst_40519);

return statearr_40807;
})();
var statearr_40809_42673 = state_40653__$1;
(statearr_40809_42673[(2)] = null);

(statearr_40809_42673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (14))){
var state_40653__$1 = state_40653;
var statearr_40810_42674 = state_40653__$1;
(statearr_40810_42674[(2)] = null);

(statearr_40810_42674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (45))){
var inst_40638 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40811_42675 = state_40653__$1;
(statearr_40811_42675[(2)] = inst_40638);

(statearr_40811_42675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (26))){
var inst_40578 = (state_40653[(27)]);
var inst_40634 = (state_40653[(2)]);
var inst_40635 = cljs.core.seq(inst_40578);
var state_40653__$1 = (function (){var statearr_40812 = state_40653;
(statearr_40812[(29)] = inst_40634);

return statearr_40812;
})();
if(inst_40635){
var statearr_40813_42677 = state_40653__$1;
(statearr_40813_42677[(1)] = (42));

} else {
var statearr_40815_42678 = state_40653__$1;
(statearr_40815_42678[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (16))){
var inst_40543 = (state_40653[(7)]);
var inst_40545 = cljs.core.chunked_seq_QMARK_(inst_40543);
var state_40653__$1 = state_40653;
if(inst_40545){
var statearr_40817_42683 = state_40653__$1;
(statearr_40817_42683[(1)] = (19));

} else {
var statearr_40818_42684 = state_40653__$1;
(statearr_40818_42684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (38))){
var inst_40627 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40820_42685 = state_40653__$1;
(statearr_40820_42685[(2)] = inst_40627);

(statearr_40820_42685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (30))){
var state_40653__$1 = state_40653;
var statearr_40821_42686 = state_40653__$1;
(statearr_40821_42686[(2)] = null);

(statearr_40821_42686[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (10))){
var inst_40517 = (state_40653[(14)]);
var inst_40519 = (state_40653[(17)]);
var inst_40528 = cljs.core._nth(inst_40517,inst_40519);
var inst_40529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40528,(0),null);
var inst_40530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40528,(1),null);
var state_40653__$1 = (function (){var statearr_40826 = state_40653;
(statearr_40826[(24)] = inst_40529);

return statearr_40826;
})();
if(cljs.core.truth_(inst_40530)){
var statearr_40827_42691 = state_40653__$1;
(statearr_40827_42691[(1)] = (13));

} else {
var statearr_40829_42692 = state_40653__$1;
(statearr_40829_42692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (18))){
var inst_40570 = (state_40653[(2)]);
var state_40653__$1 = state_40653;
var statearr_40836_42695 = state_40653__$1;
(statearr_40836_42695[(2)] = inst_40570);

(statearr_40836_42695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (42))){
var state_40653__$1 = state_40653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40653__$1,(45),dchan);
} else {
if((state_val_40654 === (37))){
var inst_40507 = (state_40653[(9)]);
var inst_40617 = (state_40653[(22)]);
var inst_40608 = (state_40653[(23)]);
var inst_40617__$1 = cljs.core.first(inst_40608);
var inst_40618 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40617__$1,inst_40507,done);
var state_40653__$1 = (function (){var statearr_40838 = state_40653;
(statearr_40838[(22)] = inst_40617__$1);

return statearr_40838;
})();
if(cljs.core.truth_(inst_40618)){
var statearr_40839_42696 = state_40653__$1;
(statearr_40839_42696[(1)] = (39));

} else {
var statearr_40840_42697 = state_40653__$1;
(statearr_40840_42697[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40654 === (8))){
var inst_40518 = (state_40653[(16)]);
var inst_40519 = (state_40653[(17)]);
var inst_40521 = (inst_40519 < inst_40518);
var inst_40522 = inst_40521;
var state_40653__$1 = state_40653;
if(cljs.core.truth_(inst_40522)){
var statearr_40842_42699 = state_40653__$1;
(statearr_40842_42699[(1)] = (10));

} else {
var statearr_40844_42700 = state_40653__$1;
(statearr_40844_42700[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mult_$_state_machine__29515__auto__ = null;
var cljs$core$async$mult_$_state_machine__29515__auto____0 = (function (){
var statearr_40847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40847[(0)] = cljs$core$async$mult_$_state_machine__29515__auto__);

(statearr_40847[(1)] = (1));

return statearr_40847;
});
var cljs$core$async$mult_$_state_machine__29515__auto____1 = (function (state_40653){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_40653);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e40848){if((e40848 instanceof Object)){
var ex__29521__auto__ = e40848;
var statearr_40849_42702 = state_40653;
(statearr_40849_42702[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42703 = state_40653;
state_40653 = G__42703;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29515__auto__ = function(state_40653){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29515__auto____1.call(this,state_40653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29515__auto____0;
cljs$core$async$mult_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29515__auto____1;
return cljs$core$async$mult_$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_40850 = f__29848__auto__();
(statearr_40850[(6)] = c__29847__auto___42615);

return statearr_40850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40858 = arguments.length;
switch (G__40858) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42721 = arguments.length;
var i__4790__auto___42722 = (0);
while(true){
if((i__4790__auto___42722 < len__4789__auto___42721)){
args__4795__auto__.push((arguments[i__4790__auto___42722]));

var G__42723 = (i__4790__auto___42722 + (1));
i__4790__auto___42722 = G__42723;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40902){
var map__40903 = p__40902;
var map__40903__$1 = (((((!((map__40903 == null))))?(((((map__40903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40903):map__40903);
var opts = map__40903__$1;
var statearr_40906_42728 = state;
(statearr_40906_42728[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_40907_42729 = state;
(statearr_40907_42729[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_40908_42730 = state;
(statearr_40908_42730[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40891){
var G__40892 = cljs.core.first(seq40891);
var seq40891__$1 = cljs.core.next(seq40891);
var G__40893 = cljs.core.first(seq40891__$1);
var seq40891__$2 = cljs.core.next(seq40891__$1);
var G__40894 = cljs.core.first(seq40891__$2);
var seq40891__$3 = cljs.core.next(seq40891__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40892,G__40893,G__40894,seq40891__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40919 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40919 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40920){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta40920 = meta40920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40921,meta40920__$1){
var self__ = this;
var _40921__$1 = this;
return (new cljs.core.async.t_cljs$core$async40919(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40920__$1));
}));

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40921){
var self__ = this;
var _40921__$1 = this;
return self__.meta40920;
}));

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40919.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async40919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40920","meta40920",-1634770821,null)], null);
}));

(cljs.core.async.t_cljs$core$async40919.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40919");

(cljs.core.async.t_cljs$core$async40919.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async40919");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40919.
 */
cljs.core.async.__GT_t_cljs$core$async40919 = (function cljs$core$async$mix_$___GT_t_cljs$core$async40919(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40920){
return (new cljs.core.async.t_cljs$core$async40919(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40920));
});

}

return (new cljs.core.async.t_cljs$core$async40919(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29847__auto___42766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41054){
var state_val_41055 = (state_41054[(1)]);
if((state_val_41055 === (7))){
var inst_40961 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
var statearr_41059_42767 = state_41054__$1;
(statearr_41059_42767[(2)] = inst_40961);

(statearr_41059_42767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (20))){
var inst_40973 = (state_41054[(7)]);
var state_41054__$1 = state_41054;
var statearr_41060_42768 = state_41054__$1;
(statearr_41060_42768[(2)] = inst_40973);

(statearr_41060_42768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (27))){
var state_41054__$1 = state_41054;
var statearr_41062_42769 = state_41054__$1;
(statearr_41062_42769[(2)] = null);

(statearr_41062_42769[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (1))){
var inst_40948 = (state_41054[(8)]);
var inst_40948__$1 = calc_state();
var inst_40950 = (inst_40948__$1 == null);
var inst_40951 = cljs.core.not(inst_40950);
var state_41054__$1 = (function (){var statearr_41063 = state_41054;
(statearr_41063[(8)] = inst_40948__$1);

return statearr_41063;
})();
if(inst_40951){
var statearr_41064_42772 = state_41054__$1;
(statearr_41064_42772[(1)] = (2));

} else {
var statearr_41065_42777 = state_41054__$1;
(statearr_41065_42777[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (24))){
var inst_40997 = (state_41054[(9)]);
var inst_41006 = (state_41054[(10)]);
var inst_41024 = (state_41054[(11)]);
var inst_41024__$1 = (inst_40997.cljs$core$IFn$_invoke$arity$1 ? inst_40997.cljs$core$IFn$_invoke$arity$1(inst_41006) : inst_40997.call(null,inst_41006));
var state_41054__$1 = (function (){var statearr_41066 = state_41054;
(statearr_41066[(11)] = inst_41024__$1);

return statearr_41066;
})();
if(cljs.core.truth_(inst_41024__$1)){
var statearr_41067_42781 = state_41054__$1;
(statearr_41067_42781[(1)] = (29));

} else {
var statearr_41068_42782 = state_41054__$1;
(statearr_41068_42782[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (4))){
var inst_40964 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
if(cljs.core.truth_(inst_40964)){
var statearr_41069_42783 = state_41054__$1;
(statearr_41069_42783[(1)] = (8));

} else {
var statearr_41070_42784 = state_41054__$1;
(statearr_41070_42784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (15))){
var inst_40991 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
if(cljs.core.truth_(inst_40991)){
var statearr_41073_42785 = state_41054__$1;
(statearr_41073_42785[(1)] = (19));

} else {
var statearr_41074_42786 = state_41054__$1;
(statearr_41074_42786[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (21))){
var inst_40996 = (state_41054[(12)]);
var inst_40996__$1 = (state_41054[(2)]);
var inst_40997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40996__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40996__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40996__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41054__$1 = (function (){var statearr_41076 = state_41054;
(statearr_41076[(9)] = inst_40997);

(statearr_41076[(12)] = inst_40996__$1);

(statearr_41076[(13)] = inst_40998);

return statearr_41076;
})();
return cljs.core.async.ioc_alts_BANG_(state_41054__$1,(22),inst_40999);
} else {
if((state_val_41055 === (31))){
var inst_41033 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
if(cljs.core.truth_(inst_41033)){
var statearr_41080_42790 = state_41054__$1;
(statearr_41080_42790[(1)] = (32));

} else {
var statearr_41081_42791 = state_41054__$1;
(statearr_41081_42791[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (32))){
var inst_41005 = (state_41054[(14)]);
var state_41054__$1 = state_41054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41054__$1,(35),out,inst_41005);
} else {
if((state_val_41055 === (33))){
var inst_40996 = (state_41054[(12)]);
var inst_40973 = inst_40996;
var state_41054__$1 = (function (){var statearr_41083 = state_41054;
(statearr_41083[(7)] = inst_40973);

return statearr_41083;
})();
var statearr_41084_42795 = state_41054__$1;
(statearr_41084_42795[(2)] = null);

(statearr_41084_42795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (13))){
var inst_40973 = (state_41054[(7)]);
var inst_40980 = inst_40973.cljs$lang$protocol_mask$partition0$;
var inst_40981 = (inst_40980 & (64));
var inst_40982 = inst_40973.cljs$core$ISeq$;
var inst_40983 = (cljs.core.PROTOCOL_SENTINEL === inst_40982);
var inst_40984 = ((inst_40981) || (inst_40983));
var state_41054__$1 = state_41054;
if(cljs.core.truth_(inst_40984)){
var statearr_41086_42796 = state_41054__$1;
(statearr_41086_42796[(1)] = (16));

} else {
var statearr_41087_42797 = state_41054__$1;
(statearr_41087_42797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (22))){
var inst_41005 = (state_41054[(14)]);
var inst_41006 = (state_41054[(10)]);
var inst_41004 = (state_41054[(2)]);
var inst_41005__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41004,(0),null);
var inst_41006__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41004,(1),null);
var inst_41007 = (inst_41005__$1 == null);
var inst_41008 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41006__$1,change);
var inst_41009 = ((inst_41007) || (inst_41008));
var state_41054__$1 = (function (){var statearr_41090 = state_41054;
(statearr_41090[(14)] = inst_41005__$1);

(statearr_41090[(10)] = inst_41006__$1);

return statearr_41090;
})();
if(cljs.core.truth_(inst_41009)){
var statearr_41091_42802 = state_41054__$1;
(statearr_41091_42802[(1)] = (23));

} else {
var statearr_41092_42803 = state_41054__$1;
(statearr_41092_42803[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (36))){
var inst_40996 = (state_41054[(12)]);
var inst_40973 = inst_40996;
var state_41054__$1 = (function (){var statearr_41095 = state_41054;
(statearr_41095[(7)] = inst_40973);

return statearr_41095;
})();
var statearr_41096_42807 = state_41054__$1;
(statearr_41096_42807[(2)] = null);

(statearr_41096_42807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (29))){
var inst_41024 = (state_41054[(11)]);
var state_41054__$1 = state_41054;
var statearr_41097_42809 = state_41054__$1;
(statearr_41097_42809[(2)] = inst_41024);

(statearr_41097_42809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (6))){
var state_41054__$1 = state_41054;
var statearr_41105_42810 = state_41054__$1;
(statearr_41105_42810[(2)] = false);

(statearr_41105_42810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (28))){
var inst_41016 = (state_41054[(2)]);
var inst_41017 = calc_state();
var inst_40973 = inst_41017;
var state_41054__$1 = (function (){var statearr_41110 = state_41054;
(statearr_41110[(7)] = inst_40973);

(statearr_41110[(15)] = inst_41016);

return statearr_41110;
})();
var statearr_41113_42812 = state_41054__$1;
(statearr_41113_42812[(2)] = null);

(statearr_41113_42812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (25))){
var inst_41047 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
var statearr_41115_42813 = state_41054__$1;
(statearr_41115_42813[(2)] = inst_41047);

(statearr_41115_42813[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (34))){
var inst_41045 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
var statearr_41116_42814 = state_41054__$1;
(statearr_41116_42814[(2)] = inst_41045);

(statearr_41116_42814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (17))){
var state_41054__$1 = state_41054;
var statearr_41117_42815 = state_41054__$1;
(statearr_41117_42815[(2)] = false);

(statearr_41117_42815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (3))){
var state_41054__$1 = state_41054;
var statearr_41118_42816 = state_41054__$1;
(statearr_41118_42816[(2)] = false);

(statearr_41118_42816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (12))){
var inst_41049 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41054__$1,inst_41049);
} else {
if((state_val_41055 === (2))){
var inst_40948 = (state_41054[(8)]);
var inst_40953 = inst_40948.cljs$lang$protocol_mask$partition0$;
var inst_40954 = (inst_40953 & (64));
var inst_40955 = inst_40948.cljs$core$ISeq$;
var inst_40956 = (cljs.core.PROTOCOL_SENTINEL === inst_40955);
var inst_40957 = ((inst_40954) || (inst_40956));
var state_41054__$1 = state_41054;
if(cljs.core.truth_(inst_40957)){
var statearr_41128_42819 = state_41054__$1;
(statearr_41128_42819[(1)] = (5));

} else {
var statearr_41130_42820 = state_41054__$1;
(statearr_41130_42820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (23))){
var inst_41005 = (state_41054[(14)]);
var inst_41011 = (inst_41005 == null);
var state_41054__$1 = state_41054;
if(cljs.core.truth_(inst_41011)){
var statearr_41131_42821 = state_41054__$1;
(statearr_41131_42821[(1)] = (26));

} else {
var statearr_41132_42822 = state_41054__$1;
(statearr_41132_42822[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (35))){
var inst_41036 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
if(cljs.core.truth_(inst_41036)){
var statearr_41138_42823 = state_41054__$1;
(statearr_41138_42823[(1)] = (36));

} else {
var statearr_41139_42824 = state_41054__$1;
(statearr_41139_42824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (19))){
var inst_40973 = (state_41054[(7)]);
var inst_40993 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40973);
var state_41054__$1 = state_41054;
var statearr_41140_42825 = state_41054__$1;
(statearr_41140_42825[(2)] = inst_40993);

(statearr_41140_42825[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (11))){
var inst_40973 = (state_41054[(7)]);
var inst_40977 = (inst_40973 == null);
var inst_40978 = cljs.core.not(inst_40977);
var state_41054__$1 = state_41054;
if(inst_40978){
var statearr_41141_42826 = state_41054__$1;
(statearr_41141_42826[(1)] = (13));

} else {
var statearr_41142_42827 = state_41054__$1;
(statearr_41142_42827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (9))){
var inst_40948 = (state_41054[(8)]);
var state_41054__$1 = state_41054;
var statearr_41143_42828 = state_41054__$1;
(statearr_41143_42828[(2)] = inst_40948);

(statearr_41143_42828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (5))){
var state_41054__$1 = state_41054;
var statearr_41144_42829 = state_41054__$1;
(statearr_41144_42829[(2)] = true);

(statearr_41144_42829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (14))){
var state_41054__$1 = state_41054;
var statearr_41145_42830 = state_41054__$1;
(statearr_41145_42830[(2)] = false);

(statearr_41145_42830[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (26))){
var inst_41006 = (state_41054[(10)]);
var inst_41013 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41006);
var state_41054__$1 = state_41054;
var statearr_41147_42831 = state_41054__$1;
(statearr_41147_42831[(2)] = inst_41013);

(statearr_41147_42831[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (16))){
var state_41054__$1 = state_41054;
var statearr_41150_42832 = state_41054__$1;
(statearr_41150_42832[(2)] = true);

(statearr_41150_42832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (38))){
var inst_41041 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
var statearr_41153_42833 = state_41054__$1;
(statearr_41153_42833[(2)] = inst_41041);

(statearr_41153_42833[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (30))){
var inst_40997 = (state_41054[(9)]);
var inst_41006 = (state_41054[(10)]);
var inst_40998 = (state_41054[(13)]);
var inst_41028 = cljs.core.empty_QMARK_(inst_40997);
var inst_41029 = (inst_40998.cljs$core$IFn$_invoke$arity$1 ? inst_40998.cljs$core$IFn$_invoke$arity$1(inst_41006) : inst_40998.call(null,inst_41006));
var inst_41030 = cljs.core.not(inst_41029);
var inst_41031 = ((inst_41028) && (inst_41030));
var state_41054__$1 = state_41054;
var statearr_41154_42839 = state_41054__$1;
(statearr_41154_42839[(2)] = inst_41031);

(statearr_41154_42839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (10))){
var inst_40948 = (state_41054[(8)]);
var inst_40969 = (state_41054[(2)]);
var inst_40970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40969,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40969,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40969,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40973 = inst_40948;
var state_41054__$1 = (function (){var statearr_41164 = state_41054;
(statearr_41164[(16)] = inst_40970);

(statearr_41164[(17)] = inst_40971);

(statearr_41164[(18)] = inst_40972);

(statearr_41164[(7)] = inst_40973);

return statearr_41164;
})();
var statearr_41165_42840 = state_41054__$1;
(statearr_41165_42840[(2)] = null);

(statearr_41165_42840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (18))){
var inst_40988 = (state_41054[(2)]);
var state_41054__$1 = state_41054;
var statearr_41170_42849 = state_41054__$1;
(statearr_41170_42849[(2)] = inst_40988);

(statearr_41170_42849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (37))){
var state_41054__$1 = state_41054;
var statearr_41171_42854 = state_41054__$1;
(statearr_41171_42854[(2)] = null);

(statearr_41171_42854[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41055 === (8))){
var inst_40948 = (state_41054[(8)]);
var inst_40966 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_40948);
var state_41054__$1 = state_41054;
var statearr_41172_42875 = state_41054__$1;
(statearr_41172_42875[(2)] = inst_40966);

(statearr_41172_42875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__29515__auto__ = null;
var cljs$core$async$mix_$_state_machine__29515__auto____0 = (function (){
var statearr_41174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41174[(0)] = cljs$core$async$mix_$_state_machine__29515__auto__);

(statearr_41174[(1)] = (1));

return statearr_41174;
});
var cljs$core$async$mix_$_state_machine__29515__auto____1 = (function (state_41054){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41054);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e41176){if((e41176 instanceof Object)){
var ex__29521__auto__ = e41176;
var statearr_41178_42877 = state_41054;
(statearr_41178_42877[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41176;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42878 = state_41054;
state_41054 = G__42878;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29515__auto__ = function(state_41054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29515__auto____1.call(this,state_41054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29515__auto____0;
cljs$core$async$mix_$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29515__auto____1;
return cljs$core$async$mix_$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_41181 = f__29848__auto__();
(statearr_41181[(6)] = c__29847__auto___42766);

return statearr_41181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41198 = arguments.length;
switch (G__41198) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41217 = arguments.length;
switch (G__41217) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41215_SHARP_){
if(cljs.core.truth_((p1__41215_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41215_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41215_SHARP_.call(null,topic)))){
return p1__41215_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41215_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41229 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41230){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41230 = meta41230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41231,meta41230__$1){
var self__ = this;
var _41231__$1 = this;
return (new cljs.core.async.t_cljs$core$async41229(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41230__$1));
}));

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41231){
var self__ = this;
var _41231__$1 = this;
return self__.meta41230;
}));

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41229.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41230","meta41230",-824009059,null)], null);
}));

(cljs.core.async.t_cljs$core$async41229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41229");

(cljs.core.async.t_cljs$core$async41229.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async41229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41229.
 */
cljs.core.async.__GT_t_cljs$core$async41229 = (function cljs$core$async$__GT_t_cljs$core$async41229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41230){
return (new cljs.core.async.t_cljs$core$async41229(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41230));
});

}

return (new cljs.core.async.t_cljs$core$async41229(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29847__auto___42907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41319){
var state_val_41320 = (state_41319[(1)]);
if((state_val_41320 === (7))){
var inst_41315 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
var statearr_41327_42908 = state_41319__$1;
(statearr_41327_42908[(2)] = inst_41315);

(statearr_41327_42908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (20))){
var state_41319__$1 = state_41319;
var statearr_41328_42909 = state_41319__$1;
(statearr_41328_42909[(2)] = null);

(statearr_41328_42909[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (1))){
var state_41319__$1 = state_41319;
var statearr_41329_42910 = state_41319__$1;
(statearr_41329_42910[(2)] = null);

(statearr_41329_42910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (24))){
var inst_41294 = (state_41319[(7)]);
var inst_41307 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41294);
var state_41319__$1 = state_41319;
var statearr_41330_42914 = state_41319__$1;
(statearr_41330_42914[(2)] = inst_41307);

(statearr_41330_42914[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (4))){
var inst_41243 = (state_41319[(8)]);
var inst_41243__$1 = (state_41319[(2)]);
var inst_41244 = (inst_41243__$1 == null);
var state_41319__$1 = (function (){var statearr_41333 = state_41319;
(statearr_41333[(8)] = inst_41243__$1);

return statearr_41333;
})();
if(cljs.core.truth_(inst_41244)){
var statearr_41334_42915 = state_41319__$1;
(statearr_41334_42915[(1)] = (5));

} else {
var statearr_41335_42916 = state_41319__$1;
(statearr_41335_42916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (15))){
var inst_41287 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
var statearr_41337_42917 = state_41319__$1;
(statearr_41337_42917[(2)] = inst_41287);

(statearr_41337_42917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (21))){
var inst_41312 = (state_41319[(2)]);
var state_41319__$1 = (function (){var statearr_41343 = state_41319;
(statearr_41343[(9)] = inst_41312);

return statearr_41343;
})();
var statearr_41344_42918 = state_41319__$1;
(statearr_41344_42918[(2)] = null);

(statearr_41344_42918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (13))){
var inst_41267 = (state_41319[(10)]);
var inst_41271 = cljs.core.chunked_seq_QMARK_(inst_41267);
var state_41319__$1 = state_41319;
if(inst_41271){
var statearr_41345_42922 = state_41319__$1;
(statearr_41345_42922[(1)] = (16));

} else {
var statearr_41346_42923 = state_41319__$1;
(statearr_41346_42923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (22))){
var inst_41304 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
if(cljs.core.truth_(inst_41304)){
var statearr_41347_42925 = state_41319__$1;
(statearr_41347_42925[(1)] = (23));

} else {
var statearr_41348_42926 = state_41319__$1;
(statearr_41348_42926[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (6))){
var inst_41300 = (state_41319[(11)]);
var inst_41243 = (state_41319[(8)]);
var inst_41294 = (state_41319[(7)]);
var inst_41294__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41243) : topic_fn.call(null,inst_41243));
var inst_41297 = cljs.core.deref(mults);
var inst_41300__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41297,inst_41294__$1);
var state_41319__$1 = (function (){var statearr_41354 = state_41319;
(statearr_41354[(11)] = inst_41300__$1);

(statearr_41354[(7)] = inst_41294__$1);

return statearr_41354;
})();
if(cljs.core.truth_(inst_41300__$1)){
var statearr_41357_42930 = state_41319__$1;
(statearr_41357_42930[(1)] = (19));

} else {
var statearr_41358_42931 = state_41319__$1;
(statearr_41358_42931[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (25))){
var inst_41309 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
var statearr_41359_42934 = state_41319__$1;
(statearr_41359_42934[(2)] = inst_41309);

(statearr_41359_42934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (17))){
var inst_41267 = (state_41319[(10)]);
var inst_41278 = cljs.core.first(inst_41267);
var inst_41279 = cljs.core.async.muxch_STAR_(inst_41278);
var inst_41280 = cljs.core.async.close_BANG_(inst_41279);
var inst_41281 = cljs.core.next(inst_41267);
var inst_41253 = inst_41281;
var inst_41254 = null;
var inst_41255 = (0);
var inst_41256 = (0);
var state_41319__$1 = (function (){var statearr_41362 = state_41319;
(statearr_41362[(12)] = inst_41256);

(statearr_41362[(13)] = inst_41280);

(statearr_41362[(14)] = inst_41254);

(statearr_41362[(15)] = inst_41253);

(statearr_41362[(16)] = inst_41255);

return statearr_41362;
})();
var statearr_41363_42941 = state_41319__$1;
(statearr_41363_42941[(2)] = null);

(statearr_41363_42941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (3))){
var inst_41317 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41319__$1,inst_41317);
} else {
if((state_val_41320 === (12))){
var inst_41289 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
var statearr_41366_42946 = state_41319__$1;
(statearr_41366_42946[(2)] = inst_41289);

(statearr_41366_42946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (2))){
var state_41319__$1 = state_41319;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41319__$1,(4),ch);
} else {
if((state_val_41320 === (23))){
var state_41319__$1 = state_41319;
var statearr_41367_42947 = state_41319__$1;
(statearr_41367_42947[(2)] = null);

(statearr_41367_42947[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (19))){
var inst_41300 = (state_41319[(11)]);
var inst_41243 = (state_41319[(8)]);
var inst_41302 = cljs.core.async.muxch_STAR_(inst_41300);
var state_41319__$1 = state_41319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41319__$1,(22),inst_41302,inst_41243);
} else {
if((state_val_41320 === (11))){
var inst_41267 = (state_41319[(10)]);
var inst_41253 = (state_41319[(15)]);
var inst_41267__$1 = cljs.core.seq(inst_41253);
var state_41319__$1 = (function (){var statearr_41370 = state_41319;
(statearr_41370[(10)] = inst_41267__$1);

return statearr_41370;
})();
if(inst_41267__$1){
var statearr_41371_42948 = state_41319__$1;
(statearr_41371_42948[(1)] = (13));

} else {
var statearr_41372_42949 = state_41319__$1;
(statearr_41372_42949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (9))){
var inst_41291 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
var statearr_41373_42951 = state_41319__$1;
(statearr_41373_42951[(2)] = inst_41291);

(statearr_41373_42951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (5))){
var inst_41250 = cljs.core.deref(mults);
var inst_41251 = cljs.core.vals(inst_41250);
var inst_41252 = cljs.core.seq(inst_41251);
var inst_41253 = inst_41252;
var inst_41254 = null;
var inst_41255 = (0);
var inst_41256 = (0);
var state_41319__$1 = (function (){var statearr_41374 = state_41319;
(statearr_41374[(12)] = inst_41256);

(statearr_41374[(14)] = inst_41254);

(statearr_41374[(15)] = inst_41253);

(statearr_41374[(16)] = inst_41255);

return statearr_41374;
})();
var statearr_41375_42952 = state_41319__$1;
(statearr_41375_42952[(2)] = null);

(statearr_41375_42952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (14))){
var state_41319__$1 = state_41319;
var statearr_41379_42953 = state_41319__$1;
(statearr_41379_42953[(2)] = null);

(statearr_41379_42953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (16))){
var inst_41267 = (state_41319[(10)]);
var inst_41273 = cljs.core.chunk_first(inst_41267);
var inst_41274 = cljs.core.chunk_rest(inst_41267);
var inst_41275 = cljs.core.count(inst_41273);
var inst_41253 = inst_41274;
var inst_41254 = inst_41273;
var inst_41255 = inst_41275;
var inst_41256 = (0);
var state_41319__$1 = (function (){var statearr_41385 = state_41319;
(statearr_41385[(12)] = inst_41256);

(statearr_41385[(14)] = inst_41254);

(statearr_41385[(15)] = inst_41253);

(statearr_41385[(16)] = inst_41255);

return statearr_41385;
})();
var statearr_41386_42962 = state_41319__$1;
(statearr_41386_42962[(2)] = null);

(statearr_41386_42962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (10))){
var inst_41256 = (state_41319[(12)]);
var inst_41254 = (state_41319[(14)]);
var inst_41253 = (state_41319[(15)]);
var inst_41255 = (state_41319[(16)]);
var inst_41261 = cljs.core._nth(inst_41254,inst_41256);
var inst_41262 = cljs.core.async.muxch_STAR_(inst_41261);
var inst_41263 = cljs.core.async.close_BANG_(inst_41262);
var inst_41264 = (inst_41256 + (1));
var tmp41376 = inst_41254;
var tmp41377 = inst_41253;
var tmp41378 = inst_41255;
var inst_41253__$1 = tmp41377;
var inst_41254__$1 = tmp41376;
var inst_41255__$1 = tmp41378;
var inst_41256__$1 = inst_41264;
var state_41319__$1 = (function (){var statearr_41388 = state_41319;
(statearr_41388[(12)] = inst_41256__$1);

(statearr_41388[(17)] = inst_41263);

(statearr_41388[(14)] = inst_41254__$1);

(statearr_41388[(15)] = inst_41253__$1);

(statearr_41388[(16)] = inst_41255__$1);

return statearr_41388;
})();
var statearr_41394_42975 = state_41319__$1;
(statearr_41394_42975[(2)] = null);

(statearr_41394_42975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (18))){
var inst_41284 = (state_41319[(2)]);
var state_41319__$1 = state_41319;
var statearr_41395_42976 = state_41319__$1;
(statearr_41395_42976[(2)] = inst_41284);

(statearr_41395_42976[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41320 === (8))){
var inst_41256 = (state_41319[(12)]);
var inst_41255 = (state_41319[(16)]);
var inst_41258 = (inst_41256 < inst_41255);
var inst_41259 = inst_41258;
var state_41319__$1 = state_41319;
if(cljs.core.truth_(inst_41259)){
var statearr_41396_42977 = state_41319__$1;
(statearr_41396_42977[(1)] = (10));

} else {
var statearr_41397_42982 = state_41319__$1;
(statearr_41397_42982[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_41398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41398[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_41398[(1)] = (1));

return statearr_41398;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_41319){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41319);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e41399){if((e41399 instanceof Object)){
var ex__29521__auto__ = e41399;
var statearr_41402_42983 = state_41319;
(statearr_41402_42983[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41399;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42984 = state_41319;
state_41319 = G__42984;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_41319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_41319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_41405 = f__29848__auto__();
(statearr_41405[(6)] = c__29847__auto___42907);

return statearr_41405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41413 = arguments.length;
switch (G__41413) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41416 = arguments.length;
switch (G__41416) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41420 = arguments.length;
switch (G__41420) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__29847__auto___42988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41468){
var state_val_41469 = (state_41468[(1)]);
if((state_val_41469 === (7))){
var state_41468__$1 = state_41468;
var statearr_41470_42989 = state_41468__$1;
(statearr_41470_42989[(2)] = null);

(statearr_41470_42989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (1))){
var state_41468__$1 = state_41468;
var statearr_41471_42990 = state_41468__$1;
(statearr_41471_42990[(2)] = null);

(statearr_41471_42990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (4))){
var inst_41431 = (state_41468[(7)]);
var inst_41433 = (inst_41431 < cnt);
var state_41468__$1 = state_41468;
if(cljs.core.truth_(inst_41433)){
var statearr_41472_42991 = state_41468__$1;
(statearr_41472_42991[(1)] = (6));

} else {
var statearr_41477_42992 = state_41468__$1;
(statearr_41477_42992[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (15))){
var inst_41464 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
var statearr_41478_42993 = state_41468__$1;
(statearr_41478_42993[(2)] = inst_41464);

(statearr_41478_42993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (13))){
var inst_41457 = cljs.core.async.close_BANG_(out);
var state_41468__$1 = state_41468;
var statearr_41481_42994 = state_41468__$1;
(statearr_41481_42994[(2)] = inst_41457);

(statearr_41481_42994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (6))){
var state_41468__$1 = state_41468;
var statearr_41484_42995 = state_41468__$1;
(statearr_41484_42995[(2)] = null);

(statearr_41484_42995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (3))){
var inst_41466 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41468__$1,inst_41466);
} else {
if((state_val_41469 === (12))){
var inst_41454 = (state_41468[(8)]);
var inst_41454__$1 = (state_41468[(2)]);
var inst_41455 = cljs.core.some(cljs.core.nil_QMARK_,inst_41454__$1);
var state_41468__$1 = (function (){var statearr_41488 = state_41468;
(statearr_41488[(8)] = inst_41454__$1);

return statearr_41488;
})();
if(cljs.core.truth_(inst_41455)){
var statearr_41492_42996 = state_41468__$1;
(statearr_41492_42996[(1)] = (13));

} else {
var statearr_41493_42997 = state_41468__$1;
(statearr_41493_42997[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (2))){
var inst_41429 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41431 = (0);
var state_41468__$1 = (function (){var statearr_41494 = state_41468;
(statearr_41494[(9)] = inst_41429);

(statearr_41494[(7)] = inst_41431);

return statearr_41494;
})();
var statearr_41495_42998 = state_41468__$1;
(statearr_41495_42998[(2)] = null);

(statearr_41495_42998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (11))){
var inst_41431 = (state_41468[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_41468,(10),Object,null,(9));
var inst_41440 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41431) : chs__$1.call(null,inst_41431));
var inst_41442 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41431) : done.call(null,inst_41431));
var inst_41443 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41440,inst_41442);
var state_41468__$1 = state_41468;
var statearr_41500_43002 = state_41468__$1;
(statearr_41500_43002[(2)] = inst_41443);


cljs.core.async.impl.ioc_helpers.process_exception(state_41468__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (9))){
var inst_41431 = (state_41468[(7)]);
var inst_41445 = (state_41468[(2)]);
var inst_41446 = (inst_41431 + (1));
var inst_41431__$1 = inst_41446;
var state_41468__$1 = (function (){var statearr_41502 = state_41468;
(statearr_41502[(10)] = inst_41445);

(statearr_41502[(7)] = inst_41431__$1);

return statearr_41502;
})();
var statearr_41507_43003 = state_41468__$1;
(statearr_41507_43003[(2)] = null);

(statearr_41507_43003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (5))){
var inst_41452 = (state_41468[(2)]);
var state_41468__$1 = (function (){var statearr_41508 = state_41468;
(statearr_41508[(11)] = inst_41452);

return statearr_41508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41468__$1,(12),dchan);
} else {
if((state_val_41469 === (14))){
var inst_41454 = (state_41468[(8)]);
var inst_41459 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_41454);
var state_41468__$1 = state_41468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41468__$1,(16),out,inst_41459);
} else {
if((state_val_41469 === (16))){
var inst_41461 = (state_41468[(2)]);
var state_41468__$1 = (function (){var statearr_41512 = state_41468;
(statearr_41512[(12)] = inst_41461);

return statearr_41512;
})();
var statearr_41513_43006 = state_41468__$1;
(statearr_41513_43006[(2)] = null);

(statearr_41513_43006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (10))){
var inst_41435 = (state_41468[(2)]);
var inst_41436 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_41468__$1 = (function (){var statearr_41514 = state_41468;
(statearr_41514[(13)] = inst_41435);

return statearr_41514;
})();
var statearr_41515_43008 = state_41468__$1;
(statearr_41515_43008[(2)] = inst_41436);


cljs.core.async.impl.ioc_helpers.process_exception(state_41468__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41469 === (8))){
var inst_41450 = (state_41468[(2)]);
var state_41468__$1 = state_41468;
var statearr_41520_43009 = state_41468__$1;
(statearr_41520_43009[(2)] = inst_41450);

(statearr_41520_43009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_41522 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41522[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_41522[(1)] = (1));

return statearr_41522;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_41468){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41468);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e41525){if((e41525 instanceof Object)){
var ex__29521__auto__ = e41525;
var statearr_41527_43010 = state_41468;
(statearr_41527_43010[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41525;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43012 = state_41468;
state_41468 = G__43012;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_41468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_41468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_41528 = f__29848__auto__();
(statearr_41528[(6)] = c__29847__auto___42988);

return statearr_41528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41533 = arguments.length;
switch (G__41533) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29847__auto___43018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41568){
var state_val_41569 = (state_41568[(1)]);
if((state_val_41569 === (7))){
var inst_41547 = (state_41568[(7)]);
var inst_41548 = (state_41568[(8)]);
var inst_41547__$1 = (state_41568[(2)]);
var inst_41548__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41547__$1,(0),null);
var inst_41549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41547__$1,(1),null);
var inst_41550 = (inst_41548__$1 == null);
var state_41568__$1 = (function (){var statearr_41571 = state_41568;
(statearr_41571[(7)] = inst_41547__$1);

(statearr_41571[(9)] = inst_41549);

(statearr_41571[(8)] = inst_41548__$1);

return statearr_41571;
})();
if(cljs.core.truth_(inst_41550)){
var statearr_41572_43021 = state_41568__$1;
(statearr_41572_43021[(1)] = (8));

} else {
var statearr_41573_43022 = state_41568__$1;
(statearr_41573_43022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (1))){
var inst_41536 = cljs.core.vec(chs);
var inst_41537 = inst_41536;
var state_41568__$1 = (function (){var statearr_41574 = state_41568;
(statearr_41574[(10)] = inst_41537);

return statearr_41574;
})();
var statearr_41575_43023 = state_41568__$1;
(statearr_41575_43023[(2)] = null);

(statearr_41575_43023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (4))){
var inst_41537 = (state_41568[(10)]);
var state_41568__$1 = state_41568;
return cljs.core.async.ioc_alts_BANG_(state_41568__$1,(7),inst_41537);
} else {
if((state_val_41569 === (6))){
var inst_41564 = (state_41568[(2)]);
var state_41568__$1 = state_41568;
var statearr_41577_43024 = state_41568__$1;
(statearr_41577_43024[(2)] = inst_41564);

(statearr_41577_43024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (3))){
var inst_41566 = (state_41568[(2)]);
var state_41568__$1 = state_41568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41568__$1,inst_41566);
} else {
if((state_val_41569 === (2))){
var inst_41537 = (state_41568[(10)]);
var inst_41539 = cljs.core.count(inst_41537);
var inst_41541 = (inst_41539 > (0));
var state_41568__$1 = state_41568;
if(cljs.core.truth_(inst_41541)){
var statearr_41579_43027 = state_41568__$1;
(statearr_41579_43027[(1)] = (4));

} else {
var statearr_41580_43028 = state_41568__$1;
(statearr_41580_43028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (11))){
var inst_41537 = (state_41568[(10)]);
var inst_41557 = (state_41568[(2)]);
var tmp41578 = inst_41537;
var inst_41537__$1 = tmp41578;
var state_41568__$1 = (function (){var statearr_41581 = state_41568;
(statearr_41581[(10)] = inst_41537__$1);

(statearr_41581[(11)] = inst_41557);

return statearr_41581;
})();
var statearr_41582_43029 = state_41568__$1;
(statearr_41582_43029[(2)] = null);

(statearr_41582_43029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (9))){
var inst_41548 = (state_41568[(8)]);
var state_41568__$1 = state_41568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41568__$1,(11),out,inst_41548);
} else {
if((state_val_41569 === (5))){
var inst_41562 = cljs.core.async.close_BANG_(out);
var state_41568__$1 = state_41568;
var statearr_41585_43030 = state_41568__$1;
(statearr_41585_43030[(2)] = inst_41562);

(statearr_41585_43030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (10))){
var inst_41560 = (state_41568[(2)]);
var state_41568__$1 = state_41568;
var statearr_41588_43031 = state_41568__$1;
(statearr_41588_43031[(2)] = inst_41560);

(statearr_41588_43031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41569 === (8))){
var inst_41537 = (state_41568[(10)]);
var inst_41547 = (state_41568[(7)]);
var inst_41549 = (state_41568[(9)]);
var inst_41548 = (state_41568[(8)]);
var inst_41552 = (function (){var cs = inst_41537;
var vec__41543 = inst_41547;
var v = inst_41548;
var c = inst_41549;
return (function (p1__41530_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__41530_SHARP_);
});
})();
var inst_41553 = cljs.core.filterv(inst_41552,inst_41537);
var inst_41537__$1 = inst_41553;
var state_41568__$1 = (function (){var statearr_41589 = state_41568;
(statearr_41589[(10)] = inst_41537__$1);

return statearr_41589;
})();
var statearr_41590_43036 = state_41568__$1;
(statearr_41590_43036[(2)] = null);

(statearr_41590_43036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_41591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41591[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_41591[(1)] = (1));

return statearr_41591;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_41568){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41568);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e41592){if((e41592 instanceof Object)){
var ex__29521__auto__ = e41592;
var statearr_41593_43041 = state_41568;
(statearr_41593_43041[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43042 = state_41568;
state_41568 = G__43042;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_41568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_41568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_41594 = f__29848__auto__();
(statearr_41594[(6)] = c__29847__auto___43018);

return statearr_41594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41599 = arguments.length;
switch (G__41599) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29847__auto___43051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41628){
var state_val_41629 = (state_41628[(1)]);
if((state_val_41629 === (7))){
var inst_41609 = (state_41628[(7)]);
var inst_41609__$1 = (state_41628[(2)]);
var inst_41611 = (inst_41609__$1 == null);
var inst_41612 = cljs.core.not(inst_41611);
var state_41628__$1 = (function (){var statearr_41633 = state_41628;
(statearr_41633[(7)] = inst_41609__$1);

return statearr_41633;
})();
if(inst_41612){
var statearr_41634_43052 = state_41628__$1;
(statearr_41634_43052[(1)] = (8));

} else {
var statearr_41635_43053 = state_41628__$1;
(statearr_41635_43053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (1))){
var inst_41602 = (0);
var state_41628__$1 = (function (){var statearr_41637 = state_41628;
(statearr_41637[(8)] = inst_41602);

return statearr_41637;
})();
var statearr_41638_43061 = state_41628__$1;
(statearr_41638_43061[(2)] = null);

(statearr_41638_43061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (4))){
var state_41628__$1 = state_41628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41628__$1,(7),ch);
} else {
if((state_val_41629 === (6))){
var inst_41623 = (state_41628[(2)]);
var state_41628__$1 = state_41628;
var statearr_41640_43062 = state_41628__$1;
(statearr_41640_43062[(2)] = inst_41623);

(statearr_41640_43062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (3))){
var inst_41625 = (state_41628[(2)]);
var inst_41626 = cljs.core.async.close_BANG_(out);
var state_41628__$1 = (function (){var statearr_41643 = state_41628;
(statearr_41643[(9)] = inst_41625);

return statearr_41643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41628__$1,inst_41626);
} else {
if((state_val_41629 === (2))){
var inst_41602 = (state_41628[(8)]);
var inst_41605 = (inst_41602 < n);
var state_41628__$1 = state_41628;
if(cljs.core.truth_(inst_41605)){
var statearr_41647_43064 = state_41628__$1;
(statearr_41647_43064[(1)] = (4));

} else {
var statearr_41648_43066 = state_41628__$1;
(statearr_41648_43066[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (11))){
var inst_41602 = (state_41628[(8)]);
var inst_41615 = (state_41628[(2)]);
var inst_41616 = (inst_41602 + (1));
var inst_41602__$1 = inst_41616;
var state_41628__$1 = (function (){var statearr_41649 = state_41628;
(statearr_41649[(10)] = inst_41615);

(statearr_41649[(8)] = inst_41602__$1);

return statearr_41649;
})();
var statearr_41650_43067 = state_41628__$1;
(statearr_41650_43067[(2)] = null);

(statearr_41650_43067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (9))){
var state_41628__$1 = state_41628;
var statearr_41651_43068 = state_41628__$1;
(statearr_41651_43068[(2)] = null);

(statearr_41651_43068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (5))){
var state_41628__$1 = state_41628;
var statearr_41654_43073 = state_41628__$1;
(statearr_41654_43073[(2)] = null);

(statearr_41654_43073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (10))){
var inst_41620 = (state_41628[(2)]);
var state_41628__$1 = state_41628;
var statearr_41656_43074 = state_41628__$1;
(statearr_41656_43074[(2)] = inst_41620);

(statearr_41656_43074[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41629 === (8))){
var inst_41609 = (state_41628[(7)]);
var state_41628__$1 = state_41628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41628__$1,(11),out,inst_41609);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_41657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41657[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_41657[(1)] = (1));

return statearr_41657;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_41628){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41628);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e41658){if((e41658 instanceof Object)){
var ex__29521__auto__ = e41658;
var statearr_41659_43075 = state_41628;
(statearr_41659_43075[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41658;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43076 = state_41628;
state_41628 = G__43076;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_41628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_41628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_41664 = f__29848__auto__();
(statearr_41664[(6)] = c__29847__auto___43051);

return statearr_41664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41666 = (function (f,ch,meta41667){
this.f = f;
this.ch = ch;
this.meta41667 = meta41667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41668,meta41667__$1){
var self__ = this;
var _41668__$1 = this;
return (new cljs.core.async.t_cljs$core$async41666(self__.f,self__.ch,meta41667__$1));
}));

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41668){
var self__ = this;
var _41668__$1 = this;
return self__.meta41667;
}));

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41679 = (function (f,ch,meta41667,_,fn1,meta41680){
this.f = f;
this.ch = ch;
this.meta41667 = meta41667;
this._ = _;
this.fn1 = fn1;
this.meta41680 = meta41680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41681,meta41680__$1){
var self__ = this;
var _41681__$1 = this;
return (new cljs.core.async.t_cljs$core$async41679(self__.f,self__.ch,self__.meta41667,self__._,self__.fn1,meta41680__$1));
}));

(cljs.core.async.t_cljs$core$async41679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41681){
var self__ = this;
var _41681__$1 = this;
return self__.meta41680;
}));

(cljs.core.async.t_cljs$core$async41679.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async41679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__41665_SHARP_){
var G__41687 = (((p1__41665_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__41665_SHARP_) : self__.f.call(null,p1__41665_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__41687) : f1.call(null,G__41687));
});
}));

(cljs.core.async.t_cljs$core$async41679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41667","meta41667",1390059238,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41666","cljs.core.async/t_cljs$core$async41666",1989243553,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41680","meta41680",1445947837,null)], null);
}));

(cljs.core.async.t_cljs$core$async41679.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41679");

(cljs.core.async.t_cljs$core$async41679.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async41679");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41679.
 */
cljs.core.async.__GT_t_cljs$core$async41679 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41679(f__$1,ch__$1,meta41667__$1,___$2,fn1__$1,meta41680){
return (new cljs.core.async.t_cljs$core$async41679(f__$1,ch__$1,meta41667__$1,___$2,fn1__$1,meta41680));
});

}

return (new cljs.core.async.t_cljs$core$async41679(self__.f,self__.ch,self__.meta41667,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__41691 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__41691) : self__.f.call(null,G__41691));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async41666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41667","meta41667",1390059238,null)], null);
}));

(cljs.core.async.t_cljs$core$async41666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41666");

(cljs.core.async.t_cljs$core$async41666.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async41666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41666.
 */
cljs.core.async.__GT_t_cljs$core$async41666 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41666(f__$1,ch__$1,meta41667){
return (new cljs.core.async.t_cljs$core$async41666(f__$1,ch__$1,meta41667));
});

}

return (new cljs.core.async.t_cljs$core$async41666(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41692 = (function (f,ch,meta41693){
this.f = f;
this.ch = ch;
this.meta41693 = meta41693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41694,meta41693__$1){
var self__ = this;
var _41694__$1 = this;
return (new cljs.core.async.t_cljs$core$async41692(self__.f,self__.ch,meta41693__$1));
}));

(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41694){
var self__ = this;
var _41694__$1 = this;
return self__.meta41693;
}));

(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async41692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41693","meta41693",2028255071,null)], null);
}));

(cljs.core.async.t_cljs$core$async41692.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41692");

(cljs.core.async.t_cljs$core$async41692.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async41692");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41692.
 */
cljs.core.async.__GT_t_cljs$core$async41692 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41692(f__$1,ch__$1,meta41693){
return (new cljs.core.async.t_cljs$core$async41692(f__$1,ch__$1,meta41693));
});

}

return (new cljs.core.async.t_cljs$core$async41692(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41713 = (function (p,ch,meta41714){
this.p = p;
this.ch = ch;
this.meta41714 = meta41714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41715,meta41714__$1){
var self__ = this;
var _41715__$1 = this;
return (new cljs.core.async.t_cljs$core$async41713(self__.p,self__.ch,meta41714__$1));
}));

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41715){
var self__ = this;
var _41715__$1 = this;
return self__.meta41714;
}));

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41713.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async41713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41714","meta41714",103162830,null)], null);
}));

(cljs.core.async.t_cljs$core$async41713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41713");

(cljs.core.async.t_cljs$core$async41713.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async41713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41713.
 */
cljs.core.async.__GT_t_cljs$core$async41713 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41713(p__$1,ch__$1,meta41714){
return (new cljs.core.async.t_cljs$core$async41713(p__$1,ch__$1,meta41714));
});

}

return (new cljs.core.async.t_cljs$core$async41713(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41732 = arguments.length;
switch (G__41732) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29847__auto___43101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41756){
var state_val_41757 = (state_41756[(1)]);
if((state_val_41757 === (7))){
var inst_41752 = (state_41756[(2)]);
var state_41756__$1 = state_41756;
var statearr_41759_43102 = state_41756__$1;
(statearr_41759_43102[(2)] = inst_41752);

(statearr_41759_43102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (1))){
var state_41756__$1 = state_41756;
var statearr_41760_43106 = state_41756__$1;
(statearr_41760_43106[(2)] = null);

(statearr_41760_43106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (4))){
var inst_41737 = (state_41756[(7)]);
var inst_41737__$1 = (state_41756[(2)]);
var inst_41738 = (inst_41737__$1 == null);
var state_41756__$1 = (function (){var statearr_41763 = state_41756;
(statearr_41763[(7)] = inst_41737__$1);

return statearr_41763;
})();
if(cljs.core.truth_(inst_41738)){
var statearr_41765_43113 = state_41756__$1;
(statearr_41765_43113[(1)] = (5));

} else {
var statearr_41766_43114 = state_41756__$1;
(statearr_41766_43114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (6))){
var inst_41737 = (state_41756[(7)]);
var inst_41742 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41737) : p.call(null,inst_41737));
var state_41756__$1 = state_41756;
if(cljs.core.truth_(inst_41742)){
var statearr_41767_43121 = state_41756__$1;
(statearr_41767_43121[(1)] = (8));

} else {
var statearr_41768_43122 = state_41756__$1;
(statearr_41768_43122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (3))){
var inst_41754 = (state_41756[(2)]);
var state_41756__$1 = state_41756;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41756__$1,inst_41754);
} else {
if((state_val_41757 === (2))){
var state_41756__$1 = state_41756;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41756__$1,(4),ch);
} else {
if((state_val_41757 === (11))){
var inst_41746 = (state_41756[(2)]);
var state_41756__$1 = state_41756;
var statearr_41773_43123 = state_41756__$1;
(statearr_41773_43123[(2)] = inst_41746);

(statearr_41773_43123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (9))){
var state_41756__$1 = state_41756;
var statearr_41774_43124 = state_41756__$1;
(statearr_41774_43124[(2)] = null);

(statearr_41774_43124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (5))){
var inst_41740 = cljs.core.async.close_BANG_(out);
var state_41756__$1 = state_41756;
var statearr_41775_43125 = state_41756__$1;
(statearr_41775_43125[(2)] = inst_41740);

(statearr_41775_43125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (10))){
var inst_41749 = (state_41756[(2)]);
var state_41756__$1 = (function (){var statearr_41777 = state_41756;
(statearr_41777[(8)] = inst_41749);

return statearr_41777;
})();
var statearr_41778_43128 = state_41756__$1;
(statearr_41778_43128[(2)] = null);

(statearr_41778_43128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41757 === (8))){
var inst_41737 = (state_41756[(7)]);
var state_41756__$1 = state_41756;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41756__$1,(11),out,inst_41737);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_41782 = [null,null,null,null,null,null,null,null,null];
(statearr_41782[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_41782[(1)] = (1));

return statearr_41782;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_41756){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41756);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e41783){if((e41783 instanceof Object)){
var ex__29521__auto__ = e41783;
var statearr_41784_43135 = state_41756;
(statearr_41784_43135[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43136 = state_41756;
state_41756 = G__43136;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_41756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_41756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_41789 = f__29848__auto__();
(statearr_41789[(6)] = c__29847__auto___43101);

return statearr_41789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41791 = arguments.length;
switch (G__41791) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29847__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41864){
var state_val_41865 = (state_41864[(1)]);
if((state_val_41865 === (7))){
var inst_41857 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41867_43150 = state_41864__$1;
(statearr_41867_43150[(2)] = inst_41857);

(statearr_41867_43150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (20))){
var inst_41819 = (state_41864[(7)]);
var inst_41832 = (state_41864[(2)]);
var inst_41837 = cljs.core.next(inst_41819);
var inst_41805 = inst_41837;
var inst_41806 = null;
var inst_41807 = (0);
var inst_41808 = (0);
var state_41864__$1 = (function (){var statearr_41872 = state_41864;
(statearr_41872[(8)] = inst_41808);

(statearr_41872[(9)] = inst_41805);

(statearr_41872[(10)] = inst_41832);

(statearr_41872[(11)] = inst_41806);

(statearr_41872[(12)] = inst_41807);

return statearr_41872;
})();
var statearr_41873_43151 = state_41864__$1;
(statearr_41873_43151[(2)] = null);

(statearr_41873_43151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (1))){
var state_41864__$1 = state_41864;
var statearr_41876_43158 = state_41864__$1;
(statearr_41876_43158[(2)] = null);

(statearr_41876_43158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (4))){
var inst_41794 = (state_41864[(13)]);
var inst_41794__$1 = (state_41864[(2)]);
var inst_41795 = (inst_41794__$1 == null);
var state_41864__$1 = (function (){var statearr_41882 = state_41864;
(statearr_41882[(13)] = inst_41794__$1);

return statearr_41882;
})();
if(cljs.core.truth_(inst_41795)){
var statearr_41883_43159 = state_41864__$1;
(statearr_41883_43159[(1)] = (5));

} else {
var statearr_41884_43160 = state_41864__$1;
(statearr_41884_43160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (15))){
var state_41864__$1 = state_41864;
var statearr_41888_43161 = state_41864__$1;
(statearr_41888_43161[(2)] = null);

(statearr_41888_43161[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (21))){
var state_41864__$1 = state_41864;
var statearr_41889_43162 = state_41864__$1;
(statearr_41889_43162[(2)] = null);

(statearr_41889_43162[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (13))){
var inst_41808 = (state_41864[(8)]);
var inst_41805 = (state_41864[(9)]);
var inst_41806 = (state_41864[(11)]);
var inst_41807 = (state_41864[(12)]);
var inst_41815 = (state_41864[(2)]);
var inst_41816 = (inst_41808 + (1));
var tmp41885 = inst_41805;
var tmp41886 = inst_41806;
var tmp41887 = inst_41807;
var inst_41805__$1 = tmp41885;
var inst_41806__$1 = tmp41886;
var inst_41807__$1 = tmp41887;
var inst_41808__$1 = inst_41816;
var state_41864__$1 = (function (){var statearr_41895 = state_41864;
(statearr_41895[(8)] = inst_41808__$1);

(statearr_41895[(9)] = inst_41805__$1);

(statearr_41895[(11)] = inst_41806__$1);

(statearr_41895[(14)] = inst_41815);

(statearr_41895[(12)] = inst_41807__$1);

return statearr_41895;
})();
var statearr_41896_43163 = state_41864__$1;
(statearr_41896_43163[(2)] = null);

(statearr_41896_43163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (22))){
var state_41864__$1 = state_41864;
var statearr_41897_43164 = state_41864__$1;
(statearr_41897_43164[(2)] = null);

(statearr_41897_43164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (6))){
var inst_41794 = (state_41864[(13)]);
var inst_41803 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_41794) : f.call(null,inst_41794));
var inst_41804 = cljs.core.seq(inst_41803);
var inst_41805 = inst_41804;
var inst_41806 = null;
var inst_41807 = (0);
var inst_41808 = (0);
var state_41864__$1 = (function (){var statearr_41898 = state_41864;
(statearr_41898[(8)] = inst_41808);

(statearr_41898[(9)] = inst_41805);

(statearr_41898[(11)] = inst_41806);

(statearr_41898[(12)] = inst_41807);

return statearr_41898;
})();
var statearr_41899_43165 = state_41864__$1;
(statearr_41899_43165[(2)] = null);

(statearr_41899_43165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (17))){
var inst_41819 = (state_41864[(7)]);
var inst_41823 = cljs.core.chunk_first(inst_41819);
var inst_41824 = cljs.core.chunk_rest(inst_41819);
var inst_41825 = cljs.core.count(inst_41823);
var inst_41805 = inst_41824;
var inst_41806 = inst_41823;
var inst_41807 = inst_41825;
var inst_41808 = (0);
var state_41864__$1 = (function (){var statearr_41902 = state_41864;
(statearr_41902[(8)] = inst_41808);

(statearr_41902[(9)] = inst_41805);

(statearr_41902[(11)] = inst_41806);

(statearr_41902[(12)] = inst_41807);

return statearr_41902;
})();
var statearr_41904_43172 = state_41864__$1;
(statearr_41904_43172[(2)] = null);

(statearr_41904_43172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (3))){
var inst_41859 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41864__$1,inst_41859);
} else {
if((state_val_41865 === (12))){
var inst_41845 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41905_43174 = state_41864__$1;
(statearr_41905_43174[(2)] = inst_41845);

(statearr_41905_43174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (2))){
var state_41864__$1 = state_41864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41864__$1,(4),in$);
} else {
if((state_val_41865 === (23))){
var inst_41855 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41908_43175 = state_41864__$1;
(statearr_41908_43175[(2)] = inst_41855);

(statearr_41908_43175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (19))){
var inst_41840 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41909_43176 = state_41864__$1;
(statearr_41909_43176[(2)] = inst_41840);

(statearr_41909_43176[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (11))){
var inst_41805 = (state_41864[(9)]);
var inst_41819 = (state_41864[(7)]);
var inst_41819__$1 = cljs.core.seq(inst_41805);
var state_41864__$1 = (function (){var statearr_41910 = state_41864;
(statearr_41910[(7)] = inst_41819__$1);

return statearr_41910;
})();
if(inst_41819__$1){
var statearr_41912_43177 = state_41864__$1;
(statearr_41912_43177[(1)] = (14));

} else {
var statearr_41916_43178 = state_41864__$1;
(statearr_41916_43178[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (9))){
var inst_41847 = (state_41864[(2)]);
var inst_41850 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_41864__$1 = (function (){var statearr_41919 = state_41864;
(statearr_41919[(15)] = inst_41847);

return statearr_41919;
})();
if(cljs.core.truth_(inst_41850)){
var statearr_41920_43179 = state_41864__$1;
(statearr_41920_43179[(1)] = (21));

} else {
var statearr_41921_43180 = state_41864__$1;
(statearr_41921_43180[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (5))){
var inst_41797 = cljs.core.async.close_BANG_(out);
var state_41864__$1 = state_41864;
var statearr_41925_43181 = state_41864__$1;
(statearr_41925_43181[(2)] = inst_41797);

(statearr_41925_43181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (14))){
var inst_41819 = (state_41864[(7)]);
var inst_41821 = cljs.core.chunked_seq_QMARK_(inst_41819);
var state_41864__$1 = state_41864;
if(inst_41821){
var statearr_41926_43182 = state_41864__$1;
(statearr_41926_43182[(1)] = (17));

} else {
var statearr_41927_43183 = state_41864__$1;
(statearr_41927_43183[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (16))){
var inst_41843 = (state_41864[(2)]);
var state_41864__$1 = state_41864;
var statearr_41929_43184 = state_41864__$1;
(statearr_41929_43184[(2)] = inst_41843);

(statearr_41929_43184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41865 === (10))){
var inst_41808 = (state_41864[(8)]);
var inst_41806 = (state_41864[(11)]);
var inst_41813 = cljs.core._nth(inst_41806,inst_41808);
var state_41864__$1 = state_41864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41864__$1,(13),out,inst_41813);
} else {
if((state_val_41865 === (18))){
var inst_41819 = (state_41864[(7)]);
var inst_41830 = cljs.core.first(inst_41819);
var state_41864__$1 = state_41864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41864__$1,(20),out,inst_41830);
} else {
if((state_val_41865 === (8))){
var inst_41808 = (state_41864[(8)]);
var inst_41807 = (state_41864[(12)]);
var inst_41810 = (inst_41808 < inst_41807);
var inst_41811 = inst_41810;
var state_41864__$1 = state_41864;
if(cljs.core.truth_(inst_41811)){
var statearr_41934_43187 = state_41864__$1;
(statearr_41934_43187[(1)] = (10));

} else {
var statearr_41935_43188 = state_41864__$1;
(statearr_41935_43188[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29515__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29515__auto____0 = (function (){
var statearr_41936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41936[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29515__auto__);

(statearr_41936[(1)] = (1));

return statearr_41936;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29515__auto____1 = (function (state_41864){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41864);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e41938){if((e41938 instanceof Object)){
var ex__29521__auto__ = e41938;
var statearr_41940_43189 = state_41864;
(statearr_41940_43189[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43190 = state_41864;
state_41864 = G__43190;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29515__auto__ = function(state_41864){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29515__auto____1.call(this,state_41864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29515__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29515__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_41942 = f__29848__auto__();
(statearr_41942[(6)] = c__29847__auto__);

return statearr_41942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));

return c__29847__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41944 = arguments.length;
switch (G__41944) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41950 = arguments.length;
switch (G__41950) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41965 = arguments.length;
switch (G__41965) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29847__auto___43204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_41990){
var state_val_41991 = (state_41990[(1)]);
if((state_val_41991 === (7))){
var inst_41985 = (state_41990[(2)]);
var state_41990__$1 = state_41990;
var statearr_41992_43205 = state_41990__$1;
(statearr_41992_43205[(2)] = inst_41985);

(statearr_41992_43205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41991 === (1))){
var inst_41967 = null;
var state_41990__$1 = (function (){var statearr_41993 = state_41990;
(statearr_41993[(7)] = inst_41967);

return statearr_41993;
})();
var statearr_41994_43214 = state_41990__$1;
(statearr_41994_43214[(2)] = null);

(statearr_41994_43214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41991 === (4))){
var inst_41970 = (state_41990[(8)]);
var inst_41970__$1 = (state_41990[(2)]);
var inst_41971 = (inst_41970__$1 == null);
var inst_41972 = cljs.core.not(inst_41971);
var state_41990__$1 = (function (){var statearr_41995 = state_41990;
(statearr_41995[(8)] = inst_41970__$1);

return statearr_41995;
})();
if(inst_41972){
var statearr_41996_43217 = state_41990__$1;
(statearr_41996_43217[(1)] = (5));

} else {
var statearr_41997_43218 = state_41990__$1;
(statearr_41997_43218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41991 === (6))){
var state_41990__$1 = state_41990;
var statearr_41998_43221 = state_41990__$1;
(statearr_41998_43221[(2)] = null);

(statearr_41998_43221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41991 === (3))){
var inst_41987 = (state_41990[(2)]);
var inst_41988 = cljs.core.async.close_BANG_(out);
var state_41990__$1 = (function (){var statearr_41999 = state_41990;
(statearr_41999[(9)] = inst_41987);

return statearr_41999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41990__$1,inst_41988);
} else {
if((state_val_41991 === (2))){
var state_41990__$1 = state_41990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41990__$1,(4),ch);
} else {
if((state_val_41991 === (11))){
var inst_41970 = (state_41990[(8)]);
var inst_41979 = (state_41990[(2)]);
var inst_41967 = inst_41970;
var state_41990__$1 = (function (){var statearr_42001 = state_41990;
(statearr_42001[(10)] = inst_41979);

(statearr_42001[(7)] = inst_41967);

return statearr_42001;
})();
var statearr_42002_43226 = state_41990__$1;
(statearr_42002_43226[(2)] = null);

(statearr_42002_43226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41991 === (9))){
var inst_41970 = (state_41990[(8)]);
var state_41990__$1 = state_41990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41990__$1,(11),out,inst_41970);
} else {
if((state_val_41991 === (5))){
var inst_41970 = (state_41990[(8)]);
var inst_41967 = (state_41990[(7)]);
var inst_41974 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41970,inst_41967);
var state_41990__$1 = state_41990;
if(inst_41974){
var statearr_42008_43228 = state_41990__$1;
(statearr_42008_43228[(1)] = (8));

} else {
var statearr_42009_43229 = state_41990__$1;
(statearr_42009_43229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41991 === (10))){
var inst_41982 = (state_41990[(2)]);
var state_41990__$1 = state_41990;
var statearr_42011_43230 = state_41990__$1;
(statearr_42011_43230[(2)] = inst_41982);

(statearr_42011_43230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41991 === (8))){
var inst_41967 = (state_41990[(7)]);
var tmp42004 = inst_41967;
var inst_41967__$1 = tmp42004;
var state_41990__$1 = (function (){var statearr_42013 = state_41990;
(statearr_42013[(7)] = inst_41967__$1);

return statearr_42013;
})();
var statearr_42014_43231 = state_41990__$1;
(statearr_42014_43231[(2)] = null);

(statearr_42014_43231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_42018 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42018[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_42018[(1)] = (1));

return statearr_42018;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_41990){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_41990);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e42019){if((e42019 instanceof Object)){
var ex__29521__auto__ = e42019;
var statearr_42020_43232 = state_41990;
(statearr_42020_43232[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42019;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43235 = state_41990;
state_41990 = G__43235;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_41990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_41990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_42021 = f__29848__auto__();
(statearr_42021[(6)] = c__29847__auto___43204);

return statearr_42021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42023 = arguments.length;
switch (G__42023) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29847__auto___43239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_42061){
var state_val_42062 = (state_42061[(1)]);
if((state_val_42062 === (7))){
var inst_42057 = (state_42061[(2)]);
var state_42061__$1 = state_42061;
var statearr_42063_43240 = state_42061__$1;
(statearr_42063_43240[(2)] = inst_42057);

(statearr_42063_43240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (1))){
var inst_42024 = (new Array(n));
var inst_42025 = inst_42024;
var inst_42026 = (0);
var state_42061__$1 = (function (){var statearr_42064 = state_42061;
(statearr_42064[(7)] = inst_42026);

(statearr_42064[(8)] = inst_42025);

return statearr_42064;
})();
var statearr_42065_43245 = state_42061__$1;
(statearr_42065_43245[(2)] = null);

(statearr_42065_43245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (4))){
var inst_42029 = (state_42061[(9)]);
var inst_42029__$1 = (state_42061[(2)]);
var inst_42030 = (inst_42029__$1 == null);
var inst_42031 = cljs.core.not(inst_42030);
var state_42061__$1 = (function (){var statearr_42067 = state_42061;
(statearr_42067[(9)] = inst_42029__$1);

return statearr_42067;
})();
if(inst_42031){
var statearr_42068_43250 = state_42061__$1;
(statearr_42068_43250[(1)] = (5));

} else {
var statearr_42069_43251 = state_42061__$1;
(statearr_42069_43251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (15))){
var inst_42051 = (state_42061[(2)]);
var state_42061__$1 = state_42061;
var statearr_42070_43252 = state_42061__$1;
(statearr_42070_43252[(2)] = inst_42051);

(statearr_42070_43252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (13))){
var state_42061__$1 = state_42061;
var statearr_42071_43253 = state_42061__$1;
(statearr_42071_43253[(2)] = null);

(statearr_42071_43253[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (6))){
var inst_42026 = (state_42061[(7)]);
var inst_42047 = (inst_42026 > (0));
var state_42061__$1 = state_42061;
if(cljs.core.truth_(inst_42047)){
var statearr_42072_43254 = state_42061__$1;
(statearr_42072_43254[(1)] = (12));

} else {
var statearr_42073_43257 = state_42061__$1;
(statearr_42073_43257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (3))){
var inst_42059 = (state_42061[(2)]);
var state_42061__$1 = state_42061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42061__$1,inst_42059);
} else {
if((state_val_42062 === (12))){
var inst_42025 = (state_42061[(8)]);
var inst_42049 = cljs.core.vec(inst_42025);
var state_42061__$1 = state_42061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42061__$1,(15),out,inst_42049);
} else {
if((state_val_42062 === (2))){
var state_42061__$1 = state_42061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42061__$1,(4),ch);
} else {
if((state_val_42062 === (11))){
var inst_42041 = (state_42061[(2)]);
var inst_42042 = (new Array(n));
var inst_42025 = inst_42042;
var inst_42026 = (0);
var state_42061__$1 = (function (){var statearr_42075 = state_42061;
(statearr_42075[(7)] = inst_42026);

(statearr_42075[(10)] = inst_42041);

(statearr_42075[(8)] = inst_42025);

return statearr_42075;
})();
var statearr_42076_43264 = state_42061__$1;
(statearr_42076_43264[(2)] = null);

(statearr_42076_43264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (9))){
var inst_42025 = (state_42061[(8)]);
var inst_42039 = cljs.core.vec(inst_42025);
var state_42061__$1 = state_42061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42061__$1,(11),out,inst_42039);
} else {
if((state_val_42062 === (5))){
var inst_42034 = (state_42061[(11)]);
var inst_42029 = (state_42061[(9)]);
var inst_42026 = (state_42061[(7)]);
var inst_42025 = (state_42061[(8)]);
var inst_42033 = (inst_42025[inst_42026] = inst_42029);
var inst_42034__$1 = (inst_42026 + (1));
var inst_42035 = (inst_42034__$1 < n);
var state_42061__$1 = (function (){var statearr_42077 = state_42061;
(statearr_42077[(11)] = inst_42034__$1);

(statearr_42077[(12)] = inst_42033);

return statearr_42077;
})();
if(cljs.core.truth_(inst_42035)){
var statearr_42083_43269 = state_42061__$1;
(statearr_42083_43269[(1)] = (8));

} else {
var statearr_42084_43272 = state_42061__$1;
(statearr_42084_43272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (14))){
var inst_42054 = (state_42061[(2)]);
var inst_42055 = cljs.core.async.close_BANG_(out);
var state_42061__$1 = (function (){var statearr_42086 = state_42061;
(statearr_42086[(13)] = inst_42054);

return statearr_42086;
})();
var statearr_42087_43275 = state_42061__$1;
(statearr_42087_43275[(2)] = inst_42055);

(statearr_42087_43275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (10))){
var inst_42045 = (state_42061[(2)]);
var state_42061__$1 = state_42061;
var statearr_42089_43278 = state_42061__$1;
(statearr_42089_43278[(2)] = inst_42045);

(statearr_42089_43278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42062 === (8))){
var inst_42034 = (state_42061[(11)]);
var inst_42025 = (state_42061[(8)]);
var tmp42085 = inst_42025;
var inst_42025__$1 = tmp42085;
var inst_42026 = inst_42034;
var state_42061__$1 = (function (){var statearr_42090 = state_42061;
(statearr_42090[(7)] = inst_42026);

(statearr_42090[(8)] = inst_42025__$1);

return statearr_42090;
})();
var statearr_42091_43282 = state_42061__$1;
(statearr_42091_43282[(2)] = null);

(statearr_42091_43282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_42092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42092[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_42092[(1)] = (1));

return statearr_42092;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_42061){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_42061);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e42097){if((e42097 instanceof Object)){
var ex__29521__auto__ = e42097;
var statearr_42098_43286 = state_42061;
(statearr_42098_43286[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42097;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43288 = state_42061;
state_42061 = G__43288;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_42061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_42061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_42099 = f__29848__auto__();
(statearr_42099[(6)] = c__29847__auto___43239);

return statearr_42099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42101 = arguments.length;
switch (G__42101) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__29847__auto___43294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_42146){
var state_val_42147 = (state_42146[(1)]);
if((state_val_42147 === (7))){
var inst_42142 = (state_42146[(2)]);
var state_42146__$1 = state_42146;
var statearr_42151_43296 = state_42146__$1;
(statearr_42151_43296[(2)] = inst_42142);

(statearr_42151_43296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (1))){
var inst_42104 = [];
var inst_42105 = inst_42104;
var inst_42106 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42146__$1 = (function (){var statearr_42152 = state_42146;
(statearr_42152[(7)] = inst_42106);

(statearr_42152[(8)] = inst_42105);

return statearr_42152;
})();
var statearr_42154_43297 = state_42146__$1;
(statearr_42154_43297[(2)] = null);

(statearr_42154_43297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (4))){
var inst_42109 = (state_42146[(9)]);
var inst_42109__$1 = (state_42146[(2)]);
var inst_42110 = (inst_42109__$1 == null);
var inst_42111 = cljs.core.not(inst_42110);
var state_42146__$1 = (function (){var statearr_42156 = state_42146;
(statearr_42156[(9)] = inst_42109__$1);

return statearr_42156;
})();
if(inst_42111){
var statearr_42157_43298 = state_42146__$1;
(statearr_42157_43298[(1)] = (5));

} else {
var statearr_42158_43299 = state_42146__$1;
(statearr_42158_43299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (15))){
var inst_42136 = (state_42146[(2)]);
var state_42146__$1 = state_42146;
var statearr_42159_43300 = state_42146__$1;
(statearr_42159_43300[(2)] = inst_42136);

(statearr_42159_43300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (13))){
var state_42146__$1 = state_42146;
var statearr_42160_43302 = state_42146__$1;
(statearr_42160_43302[(2)] = null);

(statearr_42160_43302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (6))){
var inst_42105 = (state_42146[(8)]);
var inst_42131 = inst_42105.length;
var inst_42132 = (inst_42131 > (0));
var state_42146__$1 = state_42146;
if(cljs.core.truth_(inst_42132)){
var statearr_42161_43307 = state_42146__$1;
(statearr_42161_43307[(1)] = (12));

} else {
var statearr_42162_43308 = state_42146__$1;
(statearr_42162_43308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (3))){
var inst_42144 = (state_42146[(2)]);
var state_42146__$1 = state_42146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42146__$1,inst_42144);
} else {
if((state_val_42147 === (12))){
var inst_42105 = (state_42146[(8)]);
var inst_42134 = cljs.core.vec(inst_42105);
var state_42146__$1 = state_42146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42146__$1,(15),out,inst_42134);
} else {
if((state_val_42147 === (2))){
var state_42146__$1 = state_42146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42146__$1,(4),ch);
} else {
if((state_val_42147 === (11))){
var inst_42109 = (state_42146[(9)]);
var inst_42113 = (state_42146[(10)]);
var inst_42123 = (state_42146[(2)]);
var inst_42124 = [];
var inst_42125 = inst_42124.push(inst_42109);
var inst_42105 = inst_42124;
var inst_42106 = inst_42113;
var state_42146__$1 = (function (){var statearr_42165 = state_42146;
(statearr_42165[(7)] = inst_42106);

(statearr_42165[(11)] = inst_42123);

(statearr_42165[(8)] = inst_42105);

(statearr_42165[(12)] = inst_42125);

return statearr_42165;
})();
var statearr_42166_43321 = state_42146__$1;
(statearr_42166_43321[(2)] = null);

(statearr_42166_43321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (9))){
var inst_42105 = (state_42146[(8)]);
var inst_42121 = cljs.core.vec(inst_42105);
var state_42146__$1 = state_42146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42146__$1,(11),out,inst_42121);
} else {
if((state_val_42147 === (5))){
var inst_42109 = (state_42146[(9)]);
var inst_42106 = (state_42146[(7)]);
var inst_42113 = (state_42146[(10)]);
var inst_42113__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42109) : f.call(null,inst_42109));
var inst_42114 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42113__$1,inst_42106);
var inst_42115 = cljs.core.keyword_identical_QMARK_(inst_42106,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42116 = ((inst_42114) || (inst_42115));
var state_42146__$1 = (function (){var statearr_42167 = state_42146;
(statearr_42167[(10)] = inst_42113__$1);

return statearr_42167;
})();
if(cljs.core.truth_(inst_42116)){
var statearr_42168_43323 = state_42146__$1;
(statearr_42168_43323[(1)] = (8));

} else {
var statearr_42169_43324 = state_42146__$1;
(statearr_42169_43324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (14))){
var inst_42139 = (state_42146[(2)]);
var inst_42140 = cljs.core.async.close_BANG_(out);
var state_42146__$1 = (function (){var statearr_42171 = state_42146;
(statearr_42171[(13)] = inst_42139);

return statearr_42171;
})();
var statearr_42172_43326 = state_42146__$1;
(statearr_42172_43326[(2)] = inst_42140);

(statearr_42172_43326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (10))){
var inst_42128 = (state_42146[(2)]);
var state_42146__$1 = state_42146;
var statearr_42174_43331 = state_42146__$1;
(statearr_42174_43331[(2)] = inst_42128);

(statearr_42174_43331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42147 === (8))){
var inst_42109 = (state_42146[(9)]);
var inst_42113 = (state_42146[(10)]);
var inst_42105 = (state_42146[(8)]);
var inst_42118 = inst_42105.push(inst_42109);
var tmp42170 = inst_42105;
var inst_42105__$1 = tmp42170;
var inst_42106 = inst_42113;
var state_42146__$1 = (function (){var statearr_42175 = state_42146;
(statearr_42175[(7)] = inst_42106);

(statearr_42175[(14)] = inst_42118);

(statearr_42175[(8)] = inst_42105__$1);

return statearr_42175;
})();
var statearr_42176_43340 = state_42146__$1;
(statearr_42176_43340[(2)] = null);

(statearr_42176_43340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});
return (function() {
var cljs$core$async$state_machine__29515__auto__ = null;
var cljs$core$async$state_machine__29515__auto____0 = (function (){
var statearr_42177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42177[(0)] = cljs$core$async$state_machine__29515__auto__);

(statearr_42177[(1)] = (1));

return statearr_42177;
});
var cljs$core$async$state_machine__29515__auto____1 = (function (state_42146){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_42146);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e42178){if((e42178 instanceof Object)){
var ex__29521__auto__ = e42178;
var statearr_42180_43349 = state_42146;
(statearr_42180_43349[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42178;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43356 = state_42146;
state_42146 = G__43356;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
cljs$core$async$state_machine__29515__auto__ = function(state_42146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29515__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29515__auto____1.call(this,state_42146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29515__auto____0;
cljs$core$async$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29515__auto____1;
return cljs$core$async$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_42181 = f__29848__auto__();
(statearr_42181[(6)] = c__29847__auto___43294);

return statearr_42181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
