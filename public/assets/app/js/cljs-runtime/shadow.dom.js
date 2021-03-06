goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42242 = coll;
var G__42243 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42242,G__42243) : shadow.dom.lazy_native_coll_seq.call(null,G__42242,G__42243));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__42263 = arguments.length;
switch (G__42263) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__42270 = arguments.length;
switch (G__42270) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42281 = arguments.length;
switch (G__42281) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__42299 = arguments.length;
switch (G__42299) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__42310 = arguments.length;
switch (G__42310) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__42342 = arguments.length;
switch (G__42342) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e42352){if((e42352 instanceof Object)){
var e = e42352;
return console.log("didnt support attachEvent",el,e);
} else {
throw e42352;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__42359 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__42361 = null;
var count__42362 = (0);
var i__42363 = (0);
while(true){
if((i__42363 < count__42362)){
var el = chunk__42361.cljs$core$IIndexed$_nth$arity$2(null,i__42363);
var handler_43301__$1 = ((function (seq__42359,chunk__42361,count__42362,i__42363,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42359,chunk__42361,count__42362,i__42363,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43301__$1);


var G__43303 = seq__42359;
var G__43304 = chunk__42361;
var G__43305 = count__42362;
var G__43306 = (i__42363 + (1));
seq__42359 = G__43303;
chunk__42361 = G__43304;
count__42362 = G__43305;
i__42363 = G__43306;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42359);
if(temp__5735__auto__){
var seq__42359__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42359__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42359__$1);
var G__43309 = cljs.core.chunk_rest(seq__42359__$1);
var G__43310 = c__4609__auto__;
var G__43311 = cljs.core.count(c__4609__auto__);
var G__43312 = (0);
seq__42359 = G__43309;
chunk__42361 = G__43310;
count__42362 = G__43311;
i__42363 = G__43312;
continue;
} else {
var el = cljs.core.first(seq__42359__$1);
var handler_43313__$1 = ((function (seq__42359,chunk__42361,count__42362,i__42363,el,seq__42359__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__42359,chunk__42361,count__42362,i__42363,el,seq__42359__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_43313__$1);


var G__43316 = cljs.core.next(seq__42359__$1);
var G__43317 = null;
var G__43318 = (0);
var G__43319 = (0);
seq__42359 = G__43316;
chunk__42361 = G__43317;
count__42362 = G__43318;
i__42363 = G__43319;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__42379 = arguments.length;
switch (G__42379) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__42399 = cljs.core.seq(events);
var chunk__42400 = null;
var count__42401 = (0);
var i__42402 = (0);
while(true){
if((i__42402 < count__42401)){
var vec__42427 = chunk__42400.cljs$core$IIndexed$_nth$arity$2(null,i__42402);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42427,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42427,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43327 = seq__42399;
var G__43328 = chunk__42400;
var G__43329 = count__42401;
var G__43330 = (i__42402 + (1));
seq__42399 = G__43327;
chunk__42400 = G__43328;
count__42401 = G__43329;
i__42402 = G__43330;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42399);
if(temp__5735__auto__){
var seq__42399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42399__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42399__$1);
var G__43332 = cljs.core.chunk_rest(seq__42399__$1);
var G__43333 = c__4609__auto__;
var G__43334 = cljs.core.count(c__4609__auto__);
var G__43335 = (0);
seq__42399 = G__43332;
chunk__42400 = G__43333;
count__42401 = G__43334;
i__42402 = G__43335;
continue;
} else {
var vec__42435 = cljs.core.first(seq__42399__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42435,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__43336 = cljs.core.next(seq__42399__$1);
var G__43337 = null;
var G__43338 = (0);
var G__43339 = (0);
seq__42399 = G__43336;
chunk__42400 = G__43337;
count__42401 = G__43338;
i__42402 = G__43339;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__42441 = cljs.core.seq(styles);
var chunk__42442 = null;
var count__42443 = (0);
var i__42444 = (0);
while(true){
if((i__42444 < count__42443)){
var vec__42457 = chunk__42442.cljs$core$IIndexed$_nth$arity$2(null,i__42444);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42457,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43345 = seq__42441;
var G__43346 = chunk__42442;
var G__43347 = count__42443;
var G__43348 = (i__42444 + (1));
seq__42441 = G__43345;
chunk__42442 = G__43346;
count__42443 = G__43347;
i__42444 = G__43348;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42441);
if(temp__5735__auto__){
var seq__42441__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42441__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42441__$1);
var G__43352 = cljs.core.chunk_rest(seq__42441__$1);
var G__43353 = c__4609__auto__;
var G__43354 = cljs.core.count(c__4609__auto__);
var G__43355 = (0);
seq__42441 = G__43352;
chunk__42442 = G__43353;
count__42443 = G__43354;
i__42444 = G__43355;
continue;
} else {
var vec__42469 = cljs.core.first(seq__42441__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42469,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42469,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__43359 = cljs.core.next(seq__42441__$1);
var G__43360 = null;
var G__43361 = (0);
var G__43362 = (0);
seq__42441 = G__43359;
chunk__42442 = G__43360;
count__42443 = G__43361;
i__42444 = G__43362;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__42480_43363 = key;
var G__42480_43364__$1 = (((G__42480_43363 instanceof cljs.core.Keyword))?G__42480_43363.fqn:null);
switch (G__42480_43364__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_43379 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_43379,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_43379,"aria-");
}
})())){
el.setAttribute(ks_43379,value);
} else {
(el[ks_43379] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__42518){
var map__42519 = p__42518;
var map__42519__$1 = (((((!((map__42519 == null))))?(((((map__42519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42519):map__42519);
var props = map__42519__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42519__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__42529 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42529,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42529,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42529,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__42532 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__42532,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__42532;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__42536 = arguments.length;
switch (G__42536) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__42569){
var vec__42573 = p__42569;
var seq__42574 = cljs.core.seq(vec__42573);
var first__42575 = cljs.core.first(seq__42574);
var seq__42574__$1 = cljs.core.next(seq__42574);
var nn = first__42575;
var first__42575__$1 = cljs.core.first(seq__42574__$1);
var seq__42574__$2 = cljs.core.next(seq__42574__$1);
var np = first__42575__$1;
var nc = seq__42574__$2;
var node = vec__42573;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42581 = nn;
var G__42582 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42581,G__42582) : create_fn.call(null,G__42581,G__42582));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42584 = nn;
var G__42585 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__42584,G__42585) : create_fn.call(null,G__42584,G__42585));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__42591 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42591,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42591,(1),null);
var seq__42594_43418 = cljs.core.seq(node_children);
var chunk__42595_43419 = null;
var count__42596_43420 = (0);
var i__42597_43421 = (0);
while(true){
if((i__42597_43421 < count__42596_43420)){
var child_struct_43426 = chunk__42595_43419.cljs$core$IIndexed$_nth$arity$2(null,i__42597_43421);
var children_43429 = shadow.dom.dom_node(child_struct_43426);
if(cljs.core.seq_QMARK_(children_43429)){
var seq__42629_43430 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43429));
var chunk__42631_43431 = null;
var count__42632_43432 = (0);
var i__42633_43433 = (0);
while(true){
if((i__42633_43433 < count__42632_43432)){
var child_43436 = chunk__42631_43431.cljs$core$IIndexed$_nth$arity$2(null,i__42633_43433);
if(cljs.core.truth_(child_43436)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43436);


var G__43437 = seq__42629_43430;
var G__43438 = chunk__42631_43431;
var G__43439 = count__42632_43432;
var G__43440 = (i__42633_43433 + (1));
seq__42629_43430 = G__43437;
chunk__42631_43431 = G__43438;
count__42632_43432 = G__43439;
i__42633_43433 = G__43440;
continue;
} else {
var G__43442 = seq__42629_43430;
var G__43443 = chunk__42631_43431;
var G__43444 = count__42632_43432;
var G__43445 = (i__42633_43433 + (1));
seq__42629_43430 = G__43442;
chunk__42631_43431 = G__43443;
count__42632_43432 = G__43444;
i__42633_43433 = G__43445;
continue;
}
} else {
var temp__5735__auto___43446 = cljs.core.seq(seq__42629_43430);
if(temp__5735__auto___43446){
var seq__42629_43447__$1 = temp__5735__auto___43446;
if(cljs.core.chunked_seq_QMARK_(seq__42629_43447__$1)){
var c__4609__auto___43448 = cljs.core.chunk_first(seq__42629_43447__$1);
var G__43449 = cljs.core.chunk_rest(seq__42629_43447__$1);
var G__43450 = c__4609__auto___43448;
var G__43451 = cljs.core.count(c__4609__auto___43448);
var G__43452 = (0);
seq__42629_43430 = G__43449;
chunk__42631_43431 = G__43450;
count__42632_43432 = G__43451;
i__42633_43433 = G__43452;
continue;
} else {
var child_43453 = cljs.core.first(seq__42629_43447__$1);
if(cljs.core.truth_(child_43453)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43453);


var G__43454 = cljs.core.next(seq__42629_43447__$1);
var G__43455 = null;
var G__43456 = (0);
var G__43457 = (0);
seq__42629_43430 = G__43454;
chunk__42631_43431 = G__43455;
count__42632_43432 = G__43456;
i__42633_43433 = G__43457;
continue;
} else {
var G__43458 = cljs.core.next(seq__42629_43447__$1);
var G__43459 = null;
var G__43460 = (0);
var G__43461 = (0);
seq__42629_43430 = G__43458;
chunk__42631_43431 = G__43459;
count__42632_43432 = G__43460;
i__42633_43433 = G__43461;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43429);
}


var G__43462 = seq__42594_43418;
var G__43463 = chunk__42595_43419;
var G__43464 = count__42596_43420;
var G__43465 = (i__42597_43421 + (1));
seq__42594_43418 = G__43462;
chunk__42595_43419 = G__43463;
count__42596_43420 = G__43464;
i__42597_43421 = G__43465;
continue;
} else {
var temp__5735__auto___43466 = cljs.core.seq(seq__42594_43418);
if(temp__5735__auto___43466){
var seq__42594_43467__$1 = temp__5735__auto___43466;
if(cljs.core.chunked_seq_QMARK_(seq__42594_43467__$1)){
var c__4609__auto___43468 = cljs.core.chunk_first(seq__42594_43467__$1);
var G__43469 = cljs.core.chunk_rest(seq__42594_43467__$1);
var G__43470 = c__4609__auto___43468;
var G__43471 = cljs.core.count(c__4609__auto___43468);
var G__43472 = (0);
seq__42594_43418 = G__43469;
chunk__42595_43419 = G__43470;
count__42596_43420 = G__43471;
i__42597_43421 = G__43472;
continue;
} else {
var child_struct_43473 = cljs.core.first(seq__42594_43467__$1);
var children_43474 = shadow.dom.dom_node(child_struct_43473);
if(cljs.core.seq_QMARK_(children_43474)){
var seq__42649_43475 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_43474));
var chunk__42651_43476 = null;
var count__42652_43477 = (0);
var i__42653_43478 = (0);
while(true){
if((i__42653_43478 < count__42652_43477)){
var child_43479 = chunk__42651_43476.cljs$core$IIndexed$_nth$arity$2(null,i__42653_43478);
if(cljs.core.truth_(child_43479)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43479);


var G__43480 = seq__42649_43475;
var G__43481 = chunk__42651_43476;
var G__43482 = count__42652_43477;
var G__43483 = (i__42653_43478 + (1));
seq__42649_43475 = G__43480;
chunk__42651_43476 = G__43481;
count__42652_43477 = G__43482;
i__42653_43478 = G__43483;
continue;
} else {
var G__43484 = seq__42649_43475;
var G__43485 = chunk__42651_43476;
var G__43486 = count__42652_43477;
var G__43487 = (i__42653_43478 + (1));
seq__42649_43475 = G__43484;
chunk__42651_43476 = G__43485;
count__42652_43477 = G__43486;
i__42653_43478 = G__43487;
continue;
}
} else {
var temp__5735__auto___43493__$1 = cljs.core.seq(seq__42649_43475);
if(temp__5735__auto___43493__$1){
var seq__42649_43494__$1 = temp__5735__auto___43493__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42649_43494__$1)){
var c__4609__auto___43496 = cljs.core.chunk_first(seq__42649_43494__$1);
var G__43497 = cljs.core.chunk_rest(seq__42649_43494__$1);
var G__43498 = c__4609__auto___43496;
var G__43499 = cljs.core.count(c__4609__auto___43496);
var G__43500 = (0);
seq__42649_43475 = G__43497;
chunk__42651_43476 = G__43498;
count__42652_43477 = G__43499;
i__42653_43478 = G__43500;
continue;
} else {
var child_43501 = cljs.core.first(seq__42649_43494__$1);
if(cljs.core.truth_(child_43501)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_43501);


var G__43503 = cljs.core.next(seq__42649_43494__$1);
var G__43504 = null;
var G__43505 = (0);
var G__43506 = (0);
seq__42649_43475 = G__43503;
chunk__42651_43476 = G__43504;
count__42652_43477 = G__43505;
i__42653_43478 = G__43506;
continue;
} else {
var G__43508 = cljs.core.next(seq__42649_43494__$1);
var G__43509 = null;
var G__43510 = (0);
var G__43511 = (0);
seq__42649_43475 = G__43508;
chunk__42651_43476 = G__43509;
count__42652_43477 = G__43510;
i__42653_43478 = G__43511;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_43474);
}


var G__43514 = cljs.core.next(seq__42594_43467__$1);
var G__43515 = null;
var G__43516 = (0);
var G__43517 = (0);
seq__42594_43418 = G__43514;
chunk__42595_43419 = G__43515;
count__42596_43420 = G__43516;
i__42597_43421 = G__43517;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__42679 = cljs.core.seq(node);
var chunk__42680 = null;
var count__42681 = (0);
var i__42682 = (0);
while(true){
if((i__42682 < count__42681)){
var n = chunk__42680.cljs$core$IIndexed$_nth$arity$2(null,i__42682);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43543 = seq__42679;
var G__43544 = chunk__42680;
var G__43545 = count__42681;
var G__43546 = (i__42682 + (1));
seq__42679 = G__43543;
chunk__42680 = G__43544;
count__42681 = G__43545;
i__42682 = G__43546;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42679);
if(temp__5735__auto__){
var seq__42679__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42679__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42679__$1);
var G__43551 = cljs.core.chunk_rest(seq__42679__$1);
var G__43552 = c__4609__auto__;
var G__43553 = cljs.core.count(c__4609__auto__);
var G__43554 = (0);
seq__42679 = G__43551;
chunk__42680 = G__43552;
count__42681 = G__43553;
i__42682 = G__43554;
continue;
} else {
var n = cljs.core.first(seq__42679__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__43557 = cljs.core.next(seq__42679__$1);
var G__43558 = null;
var G__43559 = (0);
var G__43560 = (0);
seq__42679 = G__43557;
chunk__42680 = G__43558;
count__42681 = G__43559;
i__42682 = G__43560;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__42701 = arguments.length;
switch (G__42701) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__42711 = arguments.length;
switch (G__42711) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__42720 = arguments.length;
switch (G__42720) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43588 = arguments.length;
var i__4790__auto___43589 = (0);
while(true){
if((i__4790__auto___43589 < len__4789__auto___43588)){
args__4795__auto__.push((arguments[i__4790__auto___43589]));

var G__43590 = (i__4790__auto___43589 + (1));
i__4790__auto___43589 = G__43590;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__42750_43595 = cljs.core.seq(nodes);
var chunk__42751_43596 = null;
var count__42752_43597 = (0);
var i__42753_43598 = (0);
while(true){
if((i__42753_43598 < count__42752_43597)){
var node_43606 = chunk__42751_43596.cljs$core$IIndexed$_nth$arity$2(null,i__42753_43598);
fragment.appendChild(shadow.dom._to_dom(node_43606));


var G__43607 = seq__42750_43595;
var G__43608 = chunk__42751_43596;
var G__43609 = count__42752_43597;
var G__43610 = (i__42753_43598 + (1));
seq__42750_43595 = G__43607;
chunk__42751_43596 = G__43608;
count__42752_43597 = G__43609;
i__42753_43598 = G__43610;
continue;
} else {
var temp__5735__auto___43611 = cljs.core.seq(seq__42750_43595);
if(temp__5735__auto___43611){
var seq__42750_43612__$1 = temp__5735__auto___43611;
if(cljs.core.chunked_seq_QMARK_(seq__42750_43612__$1)){
var c__4609__auto___43613 = cljs.core.chunk_first(seq__42750_43612__$1);
var G__43614 = cljs.core.chunk_rest(seq__42750_43612__$1);
var G__43615 = c__4609__auto___43613;
var G__43616 = cljs.core.count(c__4609__auto___43613);
var G__43617 = (0);
seq__42750_43595 = G__43614;
chunk__42751_43596 = G__43615;
count__42752_43597 = G__43616;
i__42753_43598 = G__43617;
continue;
} else {
var node_43622 = cljs.core.first(seq__42750_43612__$1);
fragment.appendChild(shadow.dom._to_dom(node_43622));


var G__43623 = cljs.core.next(seq__42750_43612__$1);
var G__43624 = null;
var G__43625 = (0);
var G__43626 = (0);
seq__42750_43595 = G__43623;
chunk__42751_43596 = G__43624;
count__42752_43597 = G__43625;
i__42753_43598 = G__43626;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq42746){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42746));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__42773_43634 = cljs.core.seq(scripts);
var chunk__42774_43635 = null;
var count__42775_43636 = (0);
var i__42776_43637 = (0);
while(true){
if((i__42776_43637 < count__42775_43636)){
var vec__42792_43638 = chunk__42774_43635.cljs$core$IIndexed$_nth$arity$2(null,i__42776_43637);
var script_tag_43639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42792_43638,(0),null);
var script_body_43640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42792_43638,(1),null);
eval(script_body_43640);


var G__43642 = seq__42773_43634;
var G__43643 = chunk__42774_43635;
var G__43644 = count__42775_43636;
var G__43645 = (i__42776_43637 + (1));
seq__42773_43634 = G__43642;
chunk__42774_43635 = G__43643;
count__42775_43636 = G__43644;
i__42776_43637 = G__43645;
continue;
} else {
var temp__5735__auto___43648 = cljs.core.seq(seq__42773_43634);
if(temp__5735__auto___43648){
var seq__42773_43649__$1 = temp__5735__auto___43648;
if(cljs.core.chunked_seq_QMARK_(seq__42773_43649__$1)){
var c__4609__auto___43650 = cljs.core.chunk_first(seq__42773_43649__$1);
var G__43651 = cljs.core.chunk_rest(seq__42773_43649__$1);
var G__43652 = c__4609__auto___43650;
var G__43653 = cljs.core.count(c__4609__auto___43650);
var G__43654 = (0);
seq__42773_43634 = G__43651;
chunk__42774_43635 = G__43652;
count__42775_43636 = G__43653;
i__42776_43637 = G__43654;
continue;
} else {
var vec__42798_43655 = cljs.core.first(seq__42773_43649__$1);
var script_tag_43656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42798_43655,(0),null);
var script_body_43657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42798_43655,(1),null);
eval(script_body_43657);


var G__43661 = cljs.core.next(seq__42773_43649__$1);
var G__43662 = null;
var G__43663 = (0);
var G__43664 = (0);
seq__42773_43634 = G__43661;
chunk__42774_43635 = G__43662;
count__42775_43636 = G__43663;
i__42776_43637 = G__43664;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__42801){
var vec__42804 = p__42801;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42804,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42804,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__42818 = arguments.length;
switch (G__42818) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__42841 = cljs.core.seq(style_keys);
var chunk__42842 = null;
var count__42843 = (0);
var i__42844 = (0);
while(true){
if((i__42844 < count__42843)){
var it = chunk__42842.cljs$core$IIndexed$_nth$arity$2(null,i__42844);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43689 = seq__42841;
var G__43690 = chunk__42842;
var G__43691 = count__42843;
var G__43692 = (i__42844 + (1));
seq__42841 = G__43689;
chunk__42842 = G__43690;
count__42843 = G__43691;
i__42844 = G__43692;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42841);
if(temp__5735__auto__){
var seq__42841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42841__$1);
var G__43696 = cljs.core.chunk_rest(seq__42841__$1);
var G__43697 = c__4609__auto__;
var G__43698 = cljs.core.count(c__4609__auto__);
var G__43699 = (0);
seq__42841 = G__43696;
chunk__42842 = G__43697;
count__42843 = G__43698;
i__42844 = G__43699;
continue;
} else {
var it = cljs.core.first(seq__42841__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__43702 = cljs.core.next(seq__42841__$1);
var G__43703 = null;
var G__43704 = (0);
var G__43705 = (0);
seq__42841 = G__43702;
chunk__42842 = G__43703;
count__42843 = G__43704;
i__42844 = G__43705;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k42880,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__42891 = k42880;
var G__42891__$1 = (((G__42891 instanceof cljs.core.Keyword))?G__42891.fqn:null);
switch (G__42891__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42880,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__42893){
var vec__42894 = p__42893;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42894,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42894,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42879){
var self__ = this;
var G__42879__$1 = this;
return (new cljs.core.RecordIter((0),G__42879__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42881,other42882){
var self__ = this;
var this42881__$1 = this;
return (((!((other42882 == null)))) && ((this42881__$1.constructor === other42882.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42881__$1.x,other42882.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42881__$1.y,other42882.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42881__$1.__extmap,other42882.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__42879){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__42903 = cljs.core.keyword_identical_QMARK_;
var expr__42904 = k__4447__auto__;
if(cljs.core.truth_((pred__42903.cljs$core$IFn$_invoke$arity$2 ? pred__42903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__42904) : pred__42903.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__42904)))){
return (new shadow.dom.Coordinate(G__42879,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42903.cljs$core$IFn$_invoke$arity$2 ? pred__42903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__42904) : pred__42903.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__42904)))){
return (new shadow.dom.Coordinate(self__.x,G__42879,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__42879),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__42879){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__42879,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__42883){
var extmap__4478__auto__ = (function (){var G__42921 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42883,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__42883)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__42921);
} else {
return G__42921;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__42883),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__42883),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k42938,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__42950 = k42938;
var G__42950__$1 = (((G__42950 instanceof cljs.core.Keyword))?G__42950.fqn:null);
switch (G__42950__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42938,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__42954){
var vec__42955 = p__42954;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42955,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42955,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42937){
var self__ = this;
var G__42937__$1 = this;
return (new cljs.core.RecordIter((0),G__42937__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this42939,other42940){
var self__ = this;
var this42939__$1 = this;
return (((!((other42940 == null)))) && ((this42939__$1.constructor === other42940.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42939__$1.w,other42940.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42939__$1.h,other42940.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this42939__$1.__extmap,other42940.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__42937){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__42999 = cljs.core.keyword_identical_QMARK_;
var expr__43000 = k__4447__auto__;
if(cljs.core.truth_((pred__42999.cljs$core$IFn$_invoke$arity$2 ? pred__42999.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__43000) : pred__42999.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__43000)))){
return (new shadow.dom.Size(G__42937,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__42999.cljs$core$IFn$_invoke$arity$2 ? pred__42999.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__43000) : pred__42999.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__43000)))){
return (new shadow.dom.Size(self__.w,G__42937,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__42937),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__42937){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__42937,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__42942){
var extmap__4478__auto__ = (function (){var G__43011 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42942,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__42942)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43011);
} else {
return G__43011;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__42942),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__42942),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__43827 = (i + (1));
var G__43828 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__43827;
ret = G__43828;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43037){
var vec__43038 = p__43037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43038,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43038,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43045 = arguments.length;
switch (G__43045) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__43842 = ps;
var G__43843 = (i + (1));
el__$1 = G__43842;
i = G__43843;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43077 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43077,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43077,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43077,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43080_43847 = cljs.core.seq(props);
var chunk__43081_43848 = null;
var count__43082_43849 = (0);
var i__43083_43850 = (0);
while(true){
if((i__43083_43850 < count__43082_43849)){
var vec__43092_43851 = chunk__43081_43848.cljs$core$IIndexed$_nth$arity$2(null,i__43083_43850);
var k_43852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43092_43851,(0),null);
var v_43853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43092_43851,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_43852);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43852),v_43853);


var G__43855 = seq__43080_43847;
var G__43856 = chunk__43081_43848;
var G__43857 = count__43082_43849;
var G__43858 = (i__43083_43850 + (1));
seq__43080_43847 = G__43855;
chunk__43081_43848 = G__43856;
count__43082_43849 = G__43857;
i__43083_43850 = G__43858;
continue;
} else {
var temp__5735__auto___43859 = cljs.core.seq(seq__43080_43847);
if(temp__5735__auto___43859){
var seq__43080_43860__$1 = temp__5735__auto___43859;
if(cljs.core.chunked_seq_QMARK_(seq__43080_43860__$1)){
var c__4609__auto___43861 = cljs.core.chunk_first(seq__43080_43860__$1);
var G__43862 = cljs.core.chunk_rest(seq__43080_43860__$1);
var G__43863 = c__4609__auto___43861;
var G__43864 = cljs.core.count(c__4609__auto___43861);
var G__43865 = (0);
seq__43080_43847 = G__43862;
chunk__43081_43848 = G__43863;
count__43082_43849 = G__43864;
i__43083_43850 = G__43865;
continue;
} else {
var vec__43096_43867 = cljs.core.first(seq__43080_43860__$1);
var k_43868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43096_43867,(0),null);
var v_43869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43096_43867,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_43868);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_43868),v_43869);


var G__43874 = cljs.core.next(seq__43080_43860__$1);
var G__43875 = null;
var G__43876 = (0);
var G__43877 = (0);
seq__43080_43847 = G__43874;
chunk__43081_43848 = G__43875;
count__43082_43849 = G__43876;
i__43083_43850 = G__43877;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43103 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43103,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43103,(1),null);
var seq__43107_43879 = cljs.core.seq(node_children);
var chunk__43109_43880 = null;
var count__43110_43881 = (0);
var i__43111_43882 = (0);
while(true){
if((i__43111_43882 < count__43110_43881)){
var child_struct_43883 = chunk__43109_43880.cljs$core$IIndexed$_nth$arity$2(null,i__43111_43882);
if((!((child_struct_43883 == null)))){
if(typeof child_struct_43883 === 'string'){
var text_43884 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43884),child_struct_43883].join(''));
} else {
var children_43885 = shadow.dom.svg_node(child_struct_43883);
if(cljs.core.seq_QMARK_(children_43885)){
var seq__43152_43886 = cljs.core.seq(children_43885);
var chunk__43154_43887 = null;
var count__43155_43888 = (0);
var i__43156_43889 = (0);
while(true){
if((i__43156_43889 < count__43155_43888)){
var child_43890 = chunk__43154_43887.cljs$core$IIndexed$_nth$arity$2(null,i__43156_43889);
if(cljs.core.truth_(child_43890)){
node.appendChild(child_43890);


var G__43891 = seq__43152_43886;
var G__43892 = chunk__43154_43887;
var G__43893 = count__43155_43888;
var G__43894 = (i__43156_43889 + (1));
seq__43152_43886 = G__43891;
chunk__43154_43887 = G__43892;
count__43155_43888 = G__43893;
i__43156_43889 = G__43894;
continue;
} else {
var G__43895 = seq__43152_43886;
var G__43896 = chunk__43154_43887;
var G__43897 = count__43155_43888;
var G__43898 = (i__43156_43889 + (1));
seq__43152_43886 = G__43895;
chunk__43154_43887 = G__43896;
count__43155_43888 = G__43897;
i__43156_43889 = G__43898;
continue;
}
} else {
var temp__5735__auto___43900 = cljs.core.seq(seq__43152_43886);
if(temp__5735__auto___43900){
var seq__43152_43901__$1 = temp__5735__auto___43900;
if(cljs.core.chunked_seq_QMARK_(seq__43152_43901__$1)){
var c__4609__auto___43902 = cljs.core.chunk_first(seq__43152_43901__$1);
var G__43903 = cljs.core.chunk_rest(seq__43152_43901__$1);
var G__43904 = c__4609__auto___43902;
var G__43905 = cljs.core.count(c__4609__auto___43902);
var G__43906 = (0);
seq__43152_43886 = G__43903;
chunk__43154_43887 = G__43904;
count__43155_43888 = G__43905;
i__43156_43889 = G__43906;
continue;
} else {
var child_43908 = cljs.core.first(seq__43152_43901__$1);
if(cljs.core.truth_(child_43908)){
node.appendChild(child_43908);


var G__43909 = cljs.core.next(seq__43152_43901__$1);
var G__43910 = null;
var G__43911 = (0);
var G__43912 = (0);
seq__43152_43886 = G__43909;
chunk__43154_43887 = G__43910;
count__43155_43888 = G__43911;
i__43156_43889 = G__43912;
continue;
} else {
var G__43913 = cljs.core.next(seq__43152_43901__$1);
var G__43914 = null;
var G__43915 = (0);
var G__43916 = (0);
seq__43152_43886 = G__43913;
chunk__43154_43887 = G__43914;
count__43155_43888 = G__43915;
i__43156_43889 = G__43916;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43885);
}
}


var G__43917 = seq__43107_43879;
var G__43918 = chunk__43109_43880;
var G__43919 = count__43110_43881;
var G__43920 = (i__43111_43882 + (1));
seq__43107_43879 = G__43917;
chunk__43109_43880 = G__43918;
count__43110_43881 = G__43919;
i__43111_43882 = G__43920;
continue;
} else {
var G__43921 = seq__43107_43879;
var G__43922 = chunk__43109_43880;
var G__43923 = count__43110_43881;
var G__43924 = (i__43111_43882 + (1));
seq__43107_43879 = G__43921;
chunk__43109_43880 = G__43922;
count__43110_43881 = G__43923;
i__43111_43882 = G__43924;
continue;
}
} else {
var temp__5735__auto___43926 = cljs.core.seq(seq__43107_43879);
if(temp__5735__auto___43926){
var seq__43107_43927__$1 = temp__5735__auto___43926;
if(cljs.core.chunked_seq_QMARK_(seq__43107_43927__$1)){
var c__4609__auto___43928 = cljs.core.chunk_first(seq__43107_43927__$1);
var G__43929 = cljs.core.chunk_rest(seq__43107_43927__$1);
var G__43930 = c__4609__auto___43928;
var G__43931 = cljs.core.count(c__4609__auto___43928);
var G__43932 = (0);
seq__43107_43879 = G__43929;
chunk__43109_43880 = G__43930;
count__43110_43881 = G__43931;
i__43111_43882 = G__43932;
continue;
} else {
var child_struct_43933 = cljs.core.first(seq__43107_43927__$1);
if((!((child_struct_43933 == null)))){
if(typeof child_struct_43933 === 'string'){
var text_43934 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_43934),child_struct_43933].join(''));
} else {
var children_43939 = shadow.dom.svg_node(child_struct_43933);
if(cljs.core.seq_QMARK_(children_43939)){
var seq__43166_43940 = cljs.core.seq(children_43939);
var chunk__43168_43941 = null;
var count__43169_43942 = (0);
var i__43170_43943 = (0);
while(true){
if((i__43170_43943 < count__43169_43942)){
var child_43944 = chunk__43168_43941.cljs$core$IIndexed$_nth$arity$2(null,i__43170_43943);
if(cljs.core.truth_(child_43944)){
node.appendChild(child_43944);


var G__43949 = seq__43166_43940;
var G__43950 = chunk__43168_43941;
var G__43951 = count__43169_43942;
var G__43952 = (i__43170_43943 + (1));
seq__43166_43940 = G__43949;
chunk__43168_43941 = G__43950;
count__43169_43942 = G__43951;
i__43170_43943 = G__43952;
continue;
} else {
var G__43953 = seq__43166_43940;
var G__43954 = chunk__43168_43941;
var G__43955 = count__43169_43942;
var G__43956 = (i__43170_43943 + (1));
seq__43166_43940 = G__43953;
chunk__43168_43941 = G__43954;
count__43169_43942 = G__43955;
i__43170_43943 = G__43956;
continue;
}
} else {
var temp__5735__auto___43961__$1 = cljs.core.seq(seq__43166_43940);
if(temp__5735__auto___43961__$1){
var seq__43166_43964__$1 = temp__5735__auto___43961__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43166_43964__$1)){
var c__4609__auto___43965 = cljs.core.chunk_first(seq__43166_43964__$1);
var G__43966 = cljs.core.chunk_rest(seq__43166_43964__$1);
var G__43967 = c__4609__auto___43965;
var G__43968 = cljs.core.count(c__4609__auto___43965);
var G__43969 = (0);
seq__43166_43940 = G__43966;
chunk__43168_43941 = G__43967;
count__43169_43942 = G__43968;
i__43170_43943 = G__43969;
continue;
} else {
var child_43970 = cljs.core.first(seq__43166_43964__$1);
if(cljs.core.truth_(child_43970)){
node.appendChild(child_43970);


var G__43971 = cljs.core.next(seq__43166_43964__$1);
var G__43972 = null;
var G__43973 = (0);
var G__43974 = (0);
seq__43166_43940 = G__43971;
chunk__43168_43941 = G__43972;
count__43169_43942 = G__43973;
i__43170_43943 = G__43974;
continue;
} else {
var G__43975 = cljs.core.next(seq__43166_43964__$1);
var G__43976 = null;
var G__43977 = (0);
var G__43978 = (0);
seq__43166_43940 = G__43975;
chunk__43168_43941 = G__43976;
count__43169_43942 = G__43977;
i__43170_43943 = G__43978;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_43939);
}
}


var G__43979 = cljs.core.next(seq__43107_43927__$1);
var G__43980 = null;
var G__43981 = (0);
var G__43982 = (0);
seq__43107_43879 = G__43979;
chunk__43109_43880 = G__43980;
count__43110_43881 = G__43981;
i__43111_43882 = G__43982;
continue;
} else {
var G__43983 = cljs.core.next(seq__43107_43927__$1);
var G__43984 = null;
var G__43985 = (0);
var G__43986 = (0);
seq__43107_43879 = G__43983;
chunk__43109_43880 = G__43984;
count__43110_43881 = G__43985;
i__43111_43882 = G__43986;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43989 = arguments.length;
var i__4790__auto___43990 = (0);
while(true){
if((i__4790__auto___43990 < len__4789__auto___43989)){
args__4795__auto__.push((arguments[i__4790__auto___43990]));

var G__43991 = (i__4790__auto___43990 + (1));
i__4790__auto___43990 = G__43991;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq43185){
var G__43186 = cljs.core.first(seq43185);
var seq43185__$1 = cljs.core.next(seq43185);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43186,seq43185__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43193 = arguments.length;
switch (G__43193) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__29847__auto___43995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__29848__auto__ = (function (){var switch__29514__auto__ = (function (state_43215){
var state_val_43216 = (state_43215[(1)]);
if((state_val_43216 === (1))){
var state_43215__$1 = state_43215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43215__$1,(2),once_or_cleanup);
} else {
if((state_val_43216 === (2))){
var inst_43211 = (state_43215[(2)]);
var inst_43212 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43215__$1 = (function (){var statearr_43222 = state_43215;
(statearr_43222[(7)] = inst_43211);

return statearr_43222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43215__$1,inst_43212);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29515__auto__ = null;
var shadow$dom$state_machine__29515__auto____0 = (function (){
var statearr_43223 = [null,null,null,null,null,null,null,null];
(statearr_43223[(0)] = shadow$dom$state_machine__29515__auto__);

(statearr_43223[(1)] = (1));

return statearr_43223;
});
var shadow$dom$state_machine__29515__auto____1 = (function (state_43215){
while(true){
var ret_value__29517__auto__ = (function (){try{while(true){
var result__29520__auto__ = switch__29514__auto__(state_43215);
if(cljs.core.keyword_identical_QMARK_(result__29520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29520__auto__;
}
break;
}
}catch (e43224){if((e43224 instanceof Object)){
var ex__29521__auto__ = e43224;
var statearr_43225_43997 = state_43215;
(statearr_43225_43997[(5)] = ex__29521__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43224;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43999 = state_43215;
state_43215 = G__43999;
continue;
} else {
return ret_value__29517__auto__;
}
break;
}
});
shadow$dom$state_machine__29515__auto__ = function(state_43215){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29515__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29515__auto____1.call(this,state_43215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29515__auto____0;
shadow$dom$state_machine__29515__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29515__auto____1;
return shadow$dom$state_machine__29515__auto__;
})()
})();
var state__29849__auto__ = (function (){var statearr_43227 = f__29848__auto__();
(statearr_43227[(6)] = c__29847__auto___43995);

return statearr_43227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__29849__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
