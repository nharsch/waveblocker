goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26814 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26815 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26815);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__26817 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26818 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26818);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26817);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26814);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__26828 = arguments.length;
switch (G__26828) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__26830 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26830,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26830,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__26837_26870 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__26838_26871 = null;
var count__26839_26872 = (0);
var i__26840_26873 = (0);
while(true){
if((i__26840_26873 < count__26839_26872)){
var vec__26852_26874 = chunk__26838_26871.cljs$core$IIndexed$_nth$arity$2(null,i__26840_26873);
var container_26875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26852_26874,(0),null);
var comp_26876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26852_26874,(1),null);
reagent.dom.re_render_component(comp_26876,container_26875);


var G__26877 = seq__26837_26870;
var G__26878 = chunk__26838_26871;
var G__26879 = count__26839_26872;
var G__26880 = (i__26840_26873 + (1));
seq__26837_26870 = G__26877;
chunk__26838_26871 = G__26878;
count__26839_26872 = G__26879;
i__26840_26873 = G__26880;
continue;
} else {
var temp__5735__auto___26881 = cljs.core.seq(seq__26837_26870);
if(temp__5735__auto___26881){
var seq__26837_26882__$1 = temp__5735__auto___26881;
if(cljs.core.chunked_seq_QMARK_(seq__26837_26882__$1)){
var c__4609__auto___26883 = cljs.core.chunk_first(seq__26837_26882__$1);
var G__26884 = cljs.core.chunk_rest(seq__26837_26882__$1);
var G__26885 = c__4609__auto___26883;
var G__26886 = cljs.core.count(c__4609__auto___26883);
var G__26887 = (0);
seq__26837_26870 = G__26884;
chunk__26838_26871 = G__26885;
count__26839_26872 = G__26886;
i__26840_26873 = G__26887;
continue;
} else {
var vec__26858_26888 = cljs.core.first(seq__26837_26882__$1);
var container_26889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_26888,(0),null);
var comp_26890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_26888,(1),null);
reagent.dom.re_render_component(comp_26890,container_26889);


var G__26891 = cljs.core.next(seq__26837_26882__$1);
var G__26892 = null;
var G__26893 = (0);
var G__26894 = (0);
seq__26837_26870 = G__26891;
chunk__26838_26871 = G__26892;
count__26839_26872 = G__26893;
i__26840_26873 = G__26894;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
