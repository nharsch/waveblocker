goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46313){
var map__46314 = p__46313;
var map__46314__$1 = (((((!((map__46314 == null))))?(((((map__46314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46314):map__46314);
var m = map__46314__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46314__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46325_46555 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46326_46556 = null;
var count__46327_46557 = (0);
var i__46328_46558 = (0);
while(true){
if((i__46328_46558 < count__46327_46557)){
var f_46560 = chunk__46326_46556.cljs$core$IIndexed$_nth$arity$2(null,i__46328_46558);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46560], 0));


var G__46561 = seq__46325_46555;
var G__46562 = chunk__46326_46556;
var G__46563 = count__46327_46557;
var G__46564 = (i__46328_46558 + (1));
seq__46325_46555 = G__46561;
chunk__46326_46556 = G__46562;
count__46327_46557 = G__46563;
i__46328_46558 = G__46564;
continue;
} else {
var temp__5735__auto___46565 = cljs.core.seq(seq__46325_46555);
if(temp__5735__auto___46565){
var seq__46325_46566__$1 = temp__5735__auto___46565;
if(cljs.core.chunked_seq_QMARK_(seq__46325_46566__$1)){
var c__4609__auto___46567 = cljs.core.chunk_first(seq__46325_46566__$1);
var G__46568 = cljs.core.chunk_rest(seq__46325_46566__$1);
var G__46569 = c__4609__auto___46567;
var G__46570 = cljs.core.count(c__4609__auto___46567);
var G__46571 = (0);
seq__46325_46555 = G__46568;
chunk__46326_46556 = G__46569;
count__46327_46557 = G__46570;
i__46328_46558 = G__46571;
continue;
} else {
var f_46572 = cljs.core.first(seq__46325_46566__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46572], 0));


var G__46573 = cljs.core.next(seq__46325_46566__$1);
var G__46574 = null;
var G__46575 = (0);
var G__46576 = (0);
seq__46325_46555 = G__46573;
chunk__46326_46556 = G__46574;
count__46327_46557 = G__46575;
i__46328_46558 = G__46576;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46578 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46578], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46578)))?cljs.core.second(arglists_46578):arglists_46578)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46334_46579 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46335_46580 = null;
var count__46336_46581 = (0);
var i__46337_46582 = (0);
while(true){
if((i__46337_46582 < count__46336_46581)){
var vec__46350_46583 = chunk__46335_46580.cljs$core$IIndexed$_nth$arity$2(null,i__46337_46582);
var name_46584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46350_46583,(0),null);
var map__46353_46585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46350_46583,(1),null);
var map__46353_46586__$1 = (((((!((map__46353_46585 == null))))?(((((map__46353_46585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46353_46585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46353_46585):map__46353_46585);
var doc_46587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353_46586__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46353_46586__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46584], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46588], 0));

if(cljs.core.truth_(doc_46587)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46587], 0));
} else {
}


var G__46590 = seq__46334_46579;
var G__46591 = chunk__46335_46580;
var G__46592 = count__46336_46581;
var G__46593 = (i__46337_46582 + (1));
seq__46334_46579 = G__46590;
chunk__46335_46580 = G__46591;
count__46336_46581 = G__46592;
i__46337_46582 = G__46593;
continue;
} else {
var temp__5735__auto___46594 = cljs.core.seq(seq__46334_46579);
if(temp__5735__auto___46594){
var seq__46334_46595__$1 = temp__5735__auto___46594;
if(cljs.core.chunked_seq_QMARK_(seq__46334_46595__$1)){
var c__4609__auto___46596 = cljs.core.chunk_first(seq__46334_46595__$1);
var G__46597 = cljs.core.chunk_rest(seq__46334_46595__$1);
var G__46598 = c__4609__auto___46596;
var G__46599 = cljs.core.count(c__4609__auto___46596);
var G__46600 = (0);
seq__46334_46579 = G__46597;
chunk__46335_46580 = G__46598;
count__46336_46581 = G__46599;
i__46337_46582 = G__46600;
continue;
} else {
var vec__46356_46601 = cljs.core.first(seq__46334_46595__$1);
var name_46602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46356_46601,(0),null);
var map__46359_46603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46356_46601,(1),null);
var map__46359_46604__$1 = (((((!((map__46359_46603 == null))))?(((((map__46359_46603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46359_46603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46359_46603):map__46359_46603);
var doc_46605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46359_46604__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46359_46604__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46602], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46606], 0));

if(cljs.core.truth_(doc_46605)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46605], 0));
} else {
}


var G__46607 = cljs.core.next(seq__46334_46595__$1);
var G__46608 = null;
var G__46609 = (0);
var G__46610 = (0);
seq__46334_46579 = G__46607;
chunk__46335_46580 = G__46608;
count__46336_46581 = G__46609;
i__46337_46582 = G__46610;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46361 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46362 = null;
var count__46363 = (0);
var i__46364 = (0);
while(true){
if((i__46364 < count__46363)){
var role = chunk__46362.cljs$core$IIndexed$_nth$arity$2(null,i__46364);
var temp__5735__auto___46612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46612__$1)){
var spec_46613 = temp__5735__auto___46612__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46613)], 0));
} else {
}


var G__46614 = seq__46361;
var G__46615 = chunk__46362;
var G__46616 = count__46363;
var G__46617 = (i__46364 + (1));
seq__46361 = G__46614;
chunk__46362 = G__46615;
count__46363 = G__46616;
i__46364 = G__46617;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46361);
if(temp__5735__auto____$1){
var seq__46361__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46361__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46361__$1);
var G__46618 = cljs.core.chunk_rest(seq__46361__$1);
var G__46619 = c__4609__auto__;
var G__46620 = cljs.core.count(c__4609__auto__);
var G__46621 = (0);
seq__46361 = G__46618;
chunk__46362 = G__46619;
count__46363 = G__46620;
i__46364 = G__46621;
continue;
} else {
var role = cljs.core.first(seq__46361__$1);
var temp__5735__auto___46622__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46622__$2)){
var spec_46623 = temp__5735__auto___46622__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46623)], 0));
} else {
}


var G__46624 = cljs.core.next(seq__46361__$1);
var G__46625 = null;
var G__46626 = (0);
var G__46627 = (0);
seq__46361 = G__46624;
chunk__46362 = G__46625;
count__46363 = G__46626;
i__46364 = G__46627;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46628 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46629 = cljs.core.ex_cause(t);
via = G__46628;
t = G__46629;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46396 = datafied_throwable;
var map__46396__$1 = (((((!((map__46396 == null))))?(((((map__46396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46396):map__46396);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46396__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46396__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46396__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46397 = cljs.core.last(via);
var map__46397__$1 = (((((!((map__46397 == null))))?(((((map__46397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46397):map__46397);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46397__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46397__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46397__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46398 = data;
var map__46398__$1 = (((((!((map__46398 == null))))?(((((map__46398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46398):map__46398);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46398__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46398__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46398__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46399 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46399__$1 = (((((!((map__46399 == null))))?(((((map__46399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46399):map__46399);
var top_data = map__46399__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46399__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46412 = phase;
var G__46412__$1 = (((G__46412 instanceof cljs.core.Keyword))?G__46412.fqn:null);
switch (G__46412__$1) {
case "read-source":
var map__46413 = data;
var map__46413__$1 = (((((!((map__46413 == null))))?(((((map__46413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46413):map__46413);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46413__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46413__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46415 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46415__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46415,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46415);
var G__46415__$2 = (cljs.core.truth_((function (){var fexpr__46420 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46420.cljs$core$IFn$_invoke$arity$1 ? fexpr__46420.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46420.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46415__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46415__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46415__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46425 = top_data;
var G__46425__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46425);
var G__46425__$2 = (cljs.core.truth_((function (){var fexpr__46433 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46433.cljs$core$IFn$_invoke$arity$1 ? fexpr__46433.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46433.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46425__$1);
var G__46425__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46425__$2);
var G__46425__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46425__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46425__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46438 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46438,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46438,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46438,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46438,(3),null);
var G__46447 = top_data;
var G__46447__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46447,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46447);
var G__46447__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46447__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46447__$1);
var G__46447__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46447__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46447__$2);
var G__46447__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46447__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46447__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46447__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46447__$4;
}

break;
case "execution":
var vec__46464 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46464,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46386_SHARP_){
var or__4185__auto__ = (p1__46386_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__46469 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46469.cljs$core$IFn$_invoke$arity$1 ? fexpr__46469.cljs$core$IFn$_invoke$arity$1(p1__46386_SHARP_) : fexpr__46469.call(null,p1__46386_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__46474 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46474__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46474,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46474);
var G__46474__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46474__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46474__$1);
var G__46474__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46474__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46474__$2);
var G__46474__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46474__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46474__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46474__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46474__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46412__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46494){
var map__46495 = p__46494;
var map__46495__$1 = (((((!((map__46495 == null))))?(((((map__46495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46495):map__46495);
var triage_data = map__46495__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46495__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46509 = phase;
var G__46509__$1 = (((G__46509 instanceof cljs.core.Keyword))?G__46509.fqn:null);
switch (G__46509__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46510 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46511 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46512 = loc;
var G__46513 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46514_46649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46515_46650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46516_46651 = true;
var _STAR_print_fn_STAR__temp_val__46517_46652 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46516_46651);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46517_46652);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46482_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46482_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46515_46650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46514_46649);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46510,G__46511,G__46512,G__46513) : format.call(null,G__46510,G__46511,G__46512,G__46513));

break;
case "macroexpansion":
var G__46519 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46520 = cause_type;
var G__46521 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46522 = loc;
var G__46523 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46519,G__46520,G__46521,G__46522,G__46523) : format.call(null,G__46519,G__46520,G__46521,G__46522,G__46523));

break;
case "compile-syntax-check":
var G__46524 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46525 = cause_type;
var G__46526 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46527 = loc;
var G__46528 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46524,G__46525,G__46526,G__46527,G__46528) : format.call(null,G__46524,G__46525,G__46526,G__46527,G__46528));

break;
case "compilation":
var G__46529 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46530 = cause_type;
var G__46531 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46532 = loc;
var G__46533 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46529,G__46530,G__46531,G__46532,G__46533) : format.call(null,G__46529,G__46530,G__46531,G__46532,G__46533));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46535 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46536 = symbol;
var G__46537 = loc;
var G__46538 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46539_46653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46540_46654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46541_46655 = true;
var _STAR_print_fn_STAR__temp_val__46542_46656 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46541_46655);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46542_46656);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46485_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46485_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46540_46654);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46539_46653);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46535,G__46536,G__46537,G__46538) : format.call(null,G__46535,G__46536,G__46537,G__46538));
} else {
var G__46544 = "Execution error%s at %s(%s).\n%s\n";
var G__46545 = cause_type;
var G__46546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46547 = loc;
var G__46548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46544,G__46545,G__46546,G__46547,G__46548) : format.call(null,G__46544,G__46545,G__46546,G__46547,G__46548));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46509__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
