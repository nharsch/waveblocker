goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__45342__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__45342 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45343__i = 0, G__45343__a = new Array(arguments.length -  0);
while (G__45343__i < G__45343__a.length) {G__45343__a[G__45343__i] = arguments[G__45343__i + 0]; ++G__45343__i;}
  args = new cljs.core.IndexedSeq(G__45343__a,0,null);
} 
return G__45342__delegate.call(this,args);};
G__45342.cljs$lang$maxFixedArity = 0;
G__45342.cljs$lang$applyTo = (function (arglist__45344){
var args = cljs.core.seq(arglist__45344);
return G__45342__delegate(args);
});
G__45342.cljs$core$IFn$_invoke$arity$variadic = G__45342__delegate;
return G__45342;
})()
);

(o.error = (function() { 
var G__45349__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__45349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45358__i = 0, G__45358__a = new Array(arguments.length -  0);
while (G__45358__i < G__45358__a.length) {G__45358__a[G__45358__i] = arguments[G__45358__i + 0]; ++G__45358__i;}
  args = new cljs.core.IndexedSeq(G__45358__a,0,null);
} 
return G__45349__delegate.call(this,args);};
G__45349.cljs$lang$maxFixedArity = 0;
G__45349.cljs$lang$applyTo = (function (arglist__45359){
var args = cljs.core.seq(arglist__45359);
return G__45349__delegate(args);
});
G__45349.cljs$core$IFn$_invoke$arity$variadic = G__45349__delegate;
return G__45349;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
