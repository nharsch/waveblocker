goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___45577 = arguments.length;
var i__4790__auto___45578 = (0);
while(true){
if((i__4790__auto___45578 < len__4789__auto___45577)){
args__4795__auto__.push((arguments[i__4790__auto___45578]));

var G__45579 = (i__4790__auto___45578 + (1));
i__4790__auto___45578 = G__45579;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45166){
var G__45167 = cljs.core.first(seq45166);
var seq45166__$1 = cljs.core.next(seq45166);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45167,seq45166__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45187 = cljs.core.seq(sources);
var chunk__45188 = null;
var count__45189 = (0);
var i__45190 = (0);
while(true){
if((i__45190 < count__45189)){
var map__45216 = chunk__45188.cljs$core$IIndexed$_nth$arity$2(null,i__45190);
var map__45216__$1 = (((((!((map__45216 == null))))?(((((map__45216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45216):map__45216);
var src = map__45216__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45216__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e45221){var e_45593 = e45221;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45593);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45593.message)].join('')));
}

var G__45594 = seq__45187;
var G__45595 = chunk__45188;
var G__45596 = count__45189;
var G__45597 = (i__45190 + (1));
seq__45187 = G__45594;
chunk__45188 = G__45595;
count__45189 = G__45596;
i__45190 = G__45597;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45187);
if(temp__5735__auto__){
var seq__45187__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45187__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45187__$1);
var G__45598 = cljs.core.chunk_rest(seq__45187__$1);
var G__45599 = c__4609__auto__;
var G__45600 = cljs.core.count(c__4609__auto__);
var G__45601 = (0);
seq__45187 = G__45598;
chunk__45188 = G__45599;
count__45189 = G__45600;
i__45190 = G__45601;
continue;
} else {
var map__45226 = cljs.core.first(seq__45187__$1);
var map__45226__$1 = (((((!((map__45226 == null))))?(((((map__45226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45226):map__45226);
var src = map__45226__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45226__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45226__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45226__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45226__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e45236){var e_45602 = e45236;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45602);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45602.message)].join('')));
}

var G__45603 = cljs.core.next(seq__45187__$1);
var G__45604 = null;
var G__45605 = (0);
var G__45606 = (0);
seq__45187 = G__45603;
chunk__45188 = G__45604;
count__45189 = G__45605;
i__45190 = G__45606;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__45255 = cljs.core.seq(js_requires);
var chunk__45256 = null;
var count__45257 = (0);
var i__45258 = (0);
while(true){
if((i__45258 < count__45257)){
var js_ns = chunk__45256.cljs$core$IIndexed$_nth$arity$2(null,i__45258);
var require_str_45610 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45610);


var G__45611 = seq__45255;
var G__45612 = chunk__45256;
var G__45613 = count__45257;
var G__45614 = (i__45258 + (1));
seq__45255 = G__45611;
chunk__45256 = G__45612;
count__45257 = G__45613;
i__45258 = G__45614;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45255);
if(temp__5735__auto__){
var seq__45255__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45255__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45255__$1);
var G__45619 = cljs.core.chunk_rest(seq__45255__$1);
var G__45620 = c__4609__auto__;
var G__45621 = cljs.core.count(c__4609__auto__);
var G__45622 = (0);
seq__45255 = G__45619;
chunk__45256 = G__45620;
count__45257 = G__45621;
i__45258 = G__45622;
continue;
} else {
var js_ns = cljs.core.first(seq__45255__$1);
var require_str_45623 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45623);


var G__45624 = cljs.core.next(seq__45255__$1);
var G__45625 = null;
var G__45626 = (0);
var G__45627 = (0);
seq__45255 = G__45624;
chunk__45256 = G__45625;
count__45257 = G__45626;
i__45258 = G__45627;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__45296 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__45296) : callback.call(null,G__45296));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__45304){
var map__45305 = p__45304;
var map__45305__$1 = (((((!((map__45305 == null))))?(((((map__45305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45305):map__45305);
var msg = map__45305__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45305__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45305__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45310(s__45311){
return (new cljs.core.LazySeq(null,(function (){
var s__45311__$1 = s__45311;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45311__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__45328 = cljs.core.first(xs__6292__auto__);
var map__45328__$1 = (((((!((map__45328 == null))))?(((((map__45328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45328):map__45328);
var src = map__45328__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45328__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__45311__$1,map__45328,map__45328__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45305,map__45305__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45310_$_iter__45312(s__45313){
return (new cljs.core.LazySeq(null,((function (s__45311__$1,map__45328,map__45328__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45305,map__45305__$1,msg,info,reload_info){
return (function (){
var s__45313__$1 = s__45313;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45313__$1);
if(temp__5735__auto____$1){
var s__45313__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45313__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45313__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45315 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45314 = (0);
while(true){
if((i__45314 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__45314);
cljs.core.chunk_append(b__45315,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45635 = (i__45314 + (1));
i__45314 = G__45635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45315),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45310_$_iter__45312(cljs.core.chunk_rest(s__45313__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45315),null);
}
} else {
var warning = cljs.core.first(s__45313__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45310_$_iter__45312(cljs.core.rest(s__45313__$2)));
}
} else {
return null;
}
break;
}
});})(s__45311__$1,map__45328,map__45328__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45305,map__45305__$1,msg,info,reload_info))
,null,null));
});})(s__45311__$1,map__45328,map__45328__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45305,map__45305__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45310(cljs.core.rest(s__45311__$1)));
} else {
var G__45639 = cljs.core.rest(s__45311__$1);
s__45311__$1 = G__45639;
continue;
}
} else {
var G__45640 = cljs.core.rest(s__45311__$1);
s__45311__$1 = G__45640;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__45345_45641 = cljs.core.seq(warnings);
var chunk__45346_45642 = null;
var count__45347_45643 = (0);
var i__45348_45644 = (0);
while(true){
if((i__45348_45644 < count__45347_45643)){
var map__45369_45645 = chunk__45346_45642.cljs$core$IIndexed$_nth$arity$2(null,i__45348_45644);
var map__45369_45646__$1 = (((((!((map__45369_45645 == null))))?(((((map__45369_45645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45369_45645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45369_45645):map__45369_45645);
var w_45647 = map__45369_45646__$1;
var msg_45648__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45369_45646__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45369_45646__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45369_45646__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45369_45646__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45651)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45649),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45650),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45648__$1)].join(''));


var G__45655 = seq__45345_45641;
var G__45656 = chunk__45346_45642;
var G__45657 = count__45347_45643;
var G__45658 = (i__45348_45644 + (1));
seq__45345_45641 = G__45655;
chunk__45346_45642 = G__45656;
count__45347_45643 = G__45657;
i__45348_45644 = G__45658;
continue;
} else {
var temp__5735__auto___45660 = cljs.core.seq(seq__45345_45641);
if(temp__5735__auto___45660){
var seq__45345_45662__$1 = temp__5735__auto___45660;
if(cljs.core.chunked_seq_QMARK_(seq__45345_45662__$1)){
var c__4609__auto___45663 = cljs.core.chunk_first(seq__45345_45662__$1);
var G__45664 = cljs.core.chunk_rest(seq__45345_45662__$1);
var G__45665 = c__4609__auto___45663;
var G__45666 = cljs.core.count(c__4609__auto___45663);
var G__45667 = (0);
seq__45345_45641 = G__45664;
chunk__45346_45642 = G__45665;
count__45347_45643 = G__45666;
i__45348_45644 = G__45667;
continue;
} else {
var map__45379_45669 = cljs.core.first(seq__45345_45662__$1);
var map__45379_45670__$1 = (((((!((map__45379_45669 == null))))?(((((map__45379_45669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45379_45669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45379_45669):map__45379_45669);
var w_45671 = map__45379_45670__$1;
var msg_45672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45670__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45670__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45670__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45379_45670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45675)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45673),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45674),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45672__$1)].join(''));


var G__45680 = cljs.core.next(seq__45345_45662__$1);
var G__45681 = null;
var G__45682 = (0);
var G__45683 = (0);
seq__45345_45641 = G__45680;
chunk__45346_45642 = G__45681;
count__45347_45643 = G__45682;
i__45348_45644 = G__45683;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__45302_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45302_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__45394){
var map__45396 = p__45394;
var map__45396__$1 = (((((!((map__45396 == null))))?(((((map__45396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45396):map__45396);
var msg = map__45396__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45396__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__45398 = cljs.core.seq(updates);
var chunk__45400 = null;
var count__45401 = (0);
var i__45402 = (0);
while(true){
if((i__45402 < count__45401)){
var path = chunk__45400.cljs$core$IIndexed$_nth$arity$2(null,i__45402);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45459_45689 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45462_45690 = null;
var count__45463_45691 = (0);
var i__45464_45692 = (0);
while(true){
if((i__45464_45692 < count__45463_45691)){
var node_45696 = chunk__45462_45690.cljs$core$IIndexed$_nth$arity$2(null,i__45464_45692);
var path_match_45697 = shadow.cljs.devtools.client.browser.match_paths(node_45696.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45697)){
var new_link_45698 = (function (){var G__45475 = node_45696.cloneNode(true);
G__45475.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45697),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45475;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45697], 0));

goog.dom.insertSiblingAfter(new_link_45698,node_45696);

goog.dom.removeNode(node_45696);


var G__45699 = seq__45459_45689;
var G__45700 = chunk__45462_45690;
var G__45701 = count__45463_45691;
var G__45702 = (i__45464_45692 + (1));
seq__45459_45689 = G__45699;
chunk__45462_45690 = G__45700;
count__45463_45691 = G__45701;
i__45464_45692 = G__45702;
continue;
} else {
var G__45704 = seq__45459_45689;
var G__45705 = chunk__45462_45690;
var G__45706 = count__45463_45691;
var G__45707 = (i__45464_45692 + (1));
seq__45459_45689 = G__45704;
chunk__45462_45690 = G__45705;
count__45463_45691 = G__45706;
i__45464_45692 = G__45707;
continue;
}
} else {
var temp__5735__auto___45711 = cljs.core.seq(seq__45459_45689);
if(temp__5735__auto___45711){
var seq__45459_45712__$1 = temp__5735__auto___45711;
if(cljs.core.chunked_seq_QMARK_(seq__45459_45712__$1)){
var c__4609__auto___45713 = cljs.core.chunk_first(seq__45459_45712__$1);
var G__45714 = cljs.core.chunk_rest(seq__45459_45712__$1);
var G__45715 = c__4609__auto___45713;
var G__45716 = cljs.core.count(c__4609__auto___45713);
var G__45717 = (0);
seq__45459_45689 = G__45714;
chunk__45462_45690 = G__45715;
count__45463_45691 = G__45716;
i__45464_45692 = G__45717;
continue;
} else {
var node_45718 = cljs.core.first(seq__45459_45712__$1);
var path_match_45719 = shadow.cljs.devtools.client.browser.match_paths(node_45718.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45719)){
var new_link_45720 = (function (){var G__45478 = node_45718.cloneNode(true);
G__45478.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45719),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45478;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45719], 0));

goog.dom.insertSiblingAfter(new_link_45720,node_45718);

goog.dom.removeNode(node_45718);


var G__45721 = cljs.core.next(seq__45459_45712__$1);
var G__45722 = null;
var G__45723 = (0);
var G__45724 = (0);
seq__45459_45689 = G__45721;
chunk__45462_45690 = G__45722;
count__45463_45691 = G__45723;
i__45464_45692 = G__45724;
continue;
} else {
var G__45725 = cljs.core.next(seq__45459_45712__$1);
var G__45726 = null;
var G__45727 = (0);
var G__45728 = (0);
seq__45459_45689 = G__45725;
chunk__45462_45690 = G__45726;
count__45463_45691 = G__45727;
i__45464_45692 = G__45728;
continue;
}
}
} else {
}
}
break;
}


var G__45729 = seq__45398;
var G__45730 = chunk__45400;
var G__45731 = count__45401;
var G__45732 = (i__45402 + (1));
seq__45398 = G__45729;
chunk__45400 = G__45730;
count__45401 = G__45731;
i__45402 = G__45732;
continue;
} else {
var G__45733 = seq__45398;
var G__45734 = chunk__45400;
var G__45735 = count__45401;
var G__45736 = (i__45402 + (1));
seq__45398 = G__45733;
chunk__45400 = G__45734;
count__45401 = G__45735;
i__45402 = G__45736;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45398);
if(temp__5735__auto__){
var seq__45398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45398__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45398__$1);
var G__45737 = cljs.core.chunk_rest(seq__45398__$1);
var G__45738 = c__4609__auto__;
var G__45739 = cljs.core.count(c__4609__auto__);
var G__45740 = (0);
seq__45398 = G__45737;
chunk__45400 = G__45738;
count__45401 = G__45739;
i__45402 = G__45740;
continue;
} else {
var path = cljs.core.first(seq__45398__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45481_45741 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45484_45742 = null;
var count__45485_45743 = (0);
var i__45486_45744 = (0);
while(true){
if((i__45486_45744 < count__45485_45743)){
var node_45745 = chunk__45484_45742.cljs$core$IIndexed$_nth$arity$2(null,i__45486_45744);
var path_match_45746 = shadow.cljs.devtools.client.browser.match_paths(node_45745.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45746)){
var new_link_45747 = (function (){var G__45491 = node_45745.cloneNode(true);
G__45491.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45746),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45491;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45746], 0));

goog.dom.insertSiblingAfter(new_link_45747,node_45745);

goog.dom.removeNode(node_45745);


var G__45748 = seq__45481_45741;
var G__45749 = chunk__45484_45742;
var G__45750 = count__45485_45743;
var G__45751 = (i__45486_45744 + (1));
seq__45481_45741 = G__45748;
chunk__45484_45742 = G__45749;
count__45485_45743 = G__45750;
i__45486_45744 = G__45751;
continue;
} else {
var G__45752 = seq__45481_45741;
var G__45753 = chunk__45484_45742;
var G__45754 = count__45485_45743;
var G__45755 = (i__45486_45744 + (1));
seq__45481_45741 = G__45752;
chunk__45484_45742 = G__45753;
count__45485_45743 = G__45754;
i__45486_45744 = G__45755;
continue;
}
} else {
var temp__5735__auto___45756__$1 = cljs.core.seq(seq__45481_45741);
if(temp__5735__auto___45756__$1){
var seq__45481_45757__$1 = temp__5735__auto___45756__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45481_45757__$1)){
var c__4609__auto___45758 = cljs.core.chunk_first(seq__45481_45757__$1);
var G__45759 = cljs.core.chunk_rest(seq__45481_45757__$1);
var G__45760 = c__4609__auto___45758;
var G__45761 = cljs.core.count(c__4609__auto___45758);
var G__45762 = (0);
seq__45481_45741 = G__45759;
chunk__45484_45742 = G__45760;
count__45485_45743 = G__45761;
i__45486_45744 = G__45762;
continue;
} else {
var node_45763 = cljs.core.first(seq__45481_45757__$1);
var path_match_45764 = shadow.cljs.devtools.client.browser.match_paths(node_45763.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45764)){
var new_link_45765 = (function (){var G__45492 = node_45763.cloneNode(true);
G__45492.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45764),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45492;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45764], 0));

goog.dom.insertSiblingAfter(new_link_45765,node_45763);

goog.dom.removeNode(node_45763);


var G__45767 = cljs.core.next(seq__45481_45757__$1);
var G__45768 = null;
var G__45769 = (0);
var G__45770 = (0);
seq__45481_45741 = G__45767;
chunk__45484_45742 = G__45768;
count__45485_45743 = G__45769;
i__45486_45744 = G__45770;
continue;
} else {
var G__45772 = cljs.core.next(seq__45481_45757__$1);
var G__45773 = null;
var G__45774 = (0);
var G__45775 = (0);
seq__45481_45741 = G__45772;
chunk__45484_45742 = G__45773;
count__45485_45743 = G__45774;
i__45486_45744 = G__45775;
continue;
}
}
} else {
}
}
break;
}


var G__45776 = cljs.core.next(seq__45398__$1);
var G__45777 = null;
var G__45778 = (0);
var G__45779 = (0);
seq__45398 = G__45776;
chunk__45400 = G__45777;
count__45401 = G__45778;
i__45402 = G__45779;
continue;
} else {
var G__45780 = cljs.core.next(seq__45398__$1);
var G__45781 = null;
var G__45782 = (0);
var G__45783 = (0);
seq__45398 = G__45780;
chunk__45400 = G__45781;
count__45401 = G__45782;
i__45402 = G__45783;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__45495){
var map__45496 = p__45495;
var map__45496__$1 = (((((!((map__45496 == null))))?(((((map__45496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45496):map__45496);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45496__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45496__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__45500,done){
var map__45501 = p__45500;
var map__45501__$1 = (((((!((map__45501 == null))))?(((((map__45501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45501):map__45501);
var msg = map__45501__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45501__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45501__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45501__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45501__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45504){
var map__45506 = p__45504;
var map__45506__$1 = (((((!((map__45506 == null))))?(((((map__45506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45506):map__45506);
var src = map__45506__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45506__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e45508){var e = e45508;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__45509,done){
var map__45510 = p__45509;
var map__45510__$1 = (((((!((map__45510 == null))))?(((((map__45510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45510):map__45510);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45510__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45510__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__45514){
var map__45515 = p__45514;
var map__45515__$1 = (((((!((map__45515 == null))))?(((((map__45515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45515):map__45515);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45515__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45515__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__45521,done){
var map__45522 = p__45521;
var map__45522__$1 = (((((!((map__45522 == null))))?(((((map__45522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45522):map__45522);
var msg = map__45522__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45522__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__45525_45789 = type;
var G__45525_45790__$1 = (((G__45525_45789 instanceof cljs.core.Keyword))?G__45525_45789.fqn:null);
switch (G__45525_45790__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__45534 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__45534.cljs$core$IFn$_invoke$arity$1 ? fexpr__45534.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__45534.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e45554){var e = e45554;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___45794 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___45794)){
var s_45795 = temp__5735__auto___45794;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_45795.onclose = (function (e){
return null;
}));

s_45795.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
