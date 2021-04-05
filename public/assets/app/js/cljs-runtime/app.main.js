goog.provide('app.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('goog.dom');
goog.require('goog.events');
var module$p5=shadow.js.require("module$p5", {});
var module$ml5=shadow.js.require("module$ml5", {});
app.main.BASE = ((2) / (55));
app.main.OCTAVE_RANGE = (3);
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.app_state !== 'undefined')){
} else {
app.main.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"app-on","app-on",-393674639),false,new cljs.core.Keyword(null,"mic-on","mic-on",-1857626166),false,new cljs.core.Keyword(null,"pitch-on","pitch-on",-179174075),false,new cljs.core.Keyword(null,"pitch","pitch",1495126700),(0),new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335),0.25,new cljs.core.Keyword(null,"mic-level","mic-level",1519554079),(0),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"redo","redo",501190664),cljs.core.PersistentVector.EMPTY], null));
}
app.main.drawing = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.main.undo = (function app$main$undo(){
if((!(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"redo","redo",501190664),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo","redo",501190664).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),cljs.core.last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.pop(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state))));
} else {
return null;
}
});
app.main.redo = (function app$main$redo(){
if((!(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"redo","redo",501190664).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),cljs.core.last(new cljs.core.Keyword(null,"redo","redo",501190664).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"redo","redo",501190664),cljs.core.pop(new cljs.core.Keyword(null,"redo","redo",501190664).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state))));
} else {
return null;
}
});
app.main.turn_on = (function app$main$turn_on(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"app-on","app-on",-393674639),true);
});
app.main.v_update_last = (function app$main$v_update_last(v,f){

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(v)),(function (){var G__36534 = cljs.core.last(v);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36534) : f.call(null,G__36534));
})());
});
app.main.geo_sequence = (function app$main$geo_sequence(a,r,n){
return (a * Math.pow(r,(n - (1))));
});
app.main.inverse_geo_prog = (function app$main$inverse_geo_prog(a,r,v){
return ((Math.log((v / a)) / Math.log(r)) + (1));
});
app.main.level_curve = (function app$main$level_curve(lmin,lmax,level){
return Math.log2(((1) + (((1) / (lmax - lmin)) * ((function (){var x__4273__auto__ = lmin;
var y__4274__auto__ = (function (){var x__4276__auto__ = lmax;
var y__4277__auto__ = level;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})() - lmin))));
});
app.main.level_curve_memo = cljs.core.memoize(app.main.level_curve);
app.main.get_mic_level = (function app$main$get_mic_level(mic){
return app.main.level_curve_memo((0),new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),mic.getLevel());
});
app.main.find_base_oct_freq = (function app$main$find_base_oct_freq(base,freq){

if((freq < base)){
return null;
} else {
var low = app.main.geo_sequence(base,(2),(1));
var high = app.main.geo_sequence(base,(2),(2));
if((freq < high)){
return base;
} else {
return (app.main.find_base_oct_freq.cljs$core$IFn$_invoke$arity$2 ? app.main.find_base_oct_freq.cljs$core$IFn$_invoke$arity$2(high,freq) : app.main.find_base_oct_freq.call(null,high,freq));
}
}
});
app.main.freq_to_hue = (function app$main$freq_to_hue(base_freq,color_max,freq){
var low = app.main.find_base_oct_freq(base_freq,freq);
var i = ((freq - low) * ((1) / low));
return ((app.main.geo_sequence((1),(2),((1) + i)) - (1)) * color_max);
});
app.main.freq_to_hue_memo = cljs.core.memoize(app.main.freq_to_hue);
app.main.freq_to_saturation = (function app$main$freq_to_saturation(base,octave_range,sat_range,freq){

var high = app.main.geo_sequence(base,(2),((1) + octave_range));
return (((function (){var x__4276__auto__ = (app.main.inverse_geo_prog(base,(2),freq) - (1));
var y__4277__auto__ = octave_range;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})() / octave_range) * sat_range);
});
app.main.freq_to_saturation_memo = cljs.core.memoize(app.main.freq_to_saturation);
app.main.start_pitch = (function app$main$start_pitch(audioContext,mic){
return (
app.main.pitch = module$ml5.pitchDetection("assets/app/model",audioContext,mic.stream,(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["model loaded"], 0));
})))
;
});
app.main.setup = (function app$main$setup(p){
app.main.cnv = p.createCanvas((800),(500));

app.main.cnv.mouseClicked(app.main.turn_on);

p.userStartAudio();

app.main.audioContext = p.getAudioContext();

app.main.mic = (new module$p5.AudioIn());

return app.main.mic.start(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.start_pitch,app.main.audioContext,app.main.mic));
});
app.main.update_pitch = (function app$main$update_pitch(){
return app.main.pitch.getPitch((function (err,freq){
if(cljs.core.truth_(freq)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"pitch","pitch",1495126700),freq);
} else {
return null;
}
}));
});
app.main.make_paint_map = (function app$main$make_paint_map(p){
var freq = new cljs.core.Keyword(null,"pitch","pitch",1495126700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),p.mouseX,new cljs.core.Keyword(null,"y","y",-1757859776),p.mouseY,new cljs.core.Keyword(null,"h","h",1109658740),app.main.freq_to_hue_memo(app.main.BASE,(100),freq),new cljs.core.Keyword(null,"s","s",1705939918),app.main.freq_to_saturation_memo(app.main.BASE,app.main.OCTAVE_RANGE,(100),freq),new cljs.core.Keyword(null,"b","b",1482224470),((10) + ((100) * app.main.get_mic_level(app.main.mic)))], null);
});
app.main.draw_paint_map = (function app$main$draw_paint_map(p,pm){
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(pm),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(pm),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(pm));

return p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pm),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pm),(40),(40));
});
app.main.draw = (function app$main$draw(p){
if(cljs.core.truth_(p.mouseIsPressed)){
if((!(((0) > p.mouseY)))){
if(cljs.core.not(new cljs.core.Keyword(null,"app-on","app-on",-393674639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)))){
cljs.core.reset_BANG_(app.main.drawing,true);
} else {
}

if(cljs.core.not(cljs.core.deref(app.main.drawing))){
cljs.core.reset_BANG_(app.main.drawing,true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.app_state,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.make_paint_map(p)], null)], 0));
} else {
}
} else {
}
} else {
if(cljs.core.truth_(cljs.core.deref(app.main.drawing))){
cljs.core.reset_BANG_(app.main.drawing,false);
} else {
}
}

if(cljs.core.not(new cljs.core.Keyword(null,"app-on","app-on",-393674639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)))){
p.textSize((52));

p.clear();

p.fill((50));

return p.text("tap to start",(50),(80));
} else {
p.textSize((12));

app.main.update_pitch();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mic-level","mic-level",1519554079),app.main.get_mic_level(app.main.mic));

p.background((255));

var seq__36535_36555 = cljs.core.seq(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)));
var chunk__36536_36556 = null;
var count__36537_36557 = (0);
var i__36538_36558 = (0);
while(true){
if((i__36538_36558 < count__36537_36557)){
var strokes_36559 = chunk__36536_36556.cljs$core$IIndexed$_nth$arity$2(null,i__36538_36558);
var seq__36547_36560 = cljs.core.seq(strokes_36559);
var chunk__36548_36561 = null;
var count__36549_36562 = (0);
var i__36550_36563 = (0);
while(true){
if((i__36550_36563 < count__36549_36562)){
var m_36564 = chunk__36548_36561.cljs$core$IIndexed$_nth$arity$2(null,i__36550_36563);
app.main.draw_paint_map(p,m_36564);


var G__36565 = seq__36547_36560;
var G__36566 = chunk__36548_36561;
var G__36567 = count__36549_36562;
var G__36568 = (i__36550_36563 + (1));
seq__36547_36560 = G__36565;
chunk__36548_36561 = G__36566;
count__36549_36562 = G__36567;
i__36550_36563 = G__36568;
continue;
} else {
var temp__5735__auto___36569 = cljs.core.seq(seq__36547_36560);
if(temp__5735__auto___36569){
var seq__36547_36570__$1 = temp__5735__auto___36569;
if(cljs.core.chunked_seq_QMARK_(seq__36547_36570__$1)){
var c__4609__auto___36571 = cljs.core.chunk_first(seq__36547_36570__$1);
var G__36572 = cljs.core.chunk_rest(seq__36547_36570__$1);
var G__36573 = c__4609__auto___36571;
var G__36574 = cljs.core.count(c__4609__auto___36571);
var G__36575 = (0);
seq__36547_36560 = G__36572;
chunk__36548_36561 = G__36573;
count__36549_36562 = G__36574;
i__36550_36563 = G__36575;
continue;
} else {
var m_36576 = cljs.core.first(seq__36547_36570__$1);
app.main.draw_paint_map(p,m_36576);


var G__36577 = cljs.core.next(seq__36547_36570__$1);
var G__36578 = null;
var G__36579 = (0);
var G__36580 = (0);
seq__36547_36560 = G__36577;
chunk__36548_36561 = G__36578;
count__36549_36562 = G__36579;
i__36550_36563 = G__36580;
continue;
}
} else {
}
}
break;
}


var G__36581 = seq__36535_36555;
var G__36582 = chunk__36536_36556;
var G__36583 = count__36537_36557;
var G__36584 = (i__36538_36558 + (1));
seq__36535_36555 = G__36581;
chunk__36536_36556 = G__36582;
count__36537_36557 = G__36583;
i__36538_36558 = G__36584;
continue;
} else {
var temp__5735__auto___36585 = cljs.core.seq(seq__36535_36555);
if(temp__5735__auto___36585){
var seq__36535_36586__$1 = temp__5735__auto___36585;
if(cljs.core.chunked_seq_QMARK_(seq__36535_36586__$1)){
var c__4609__auto___36587 = cljs.core.chunk_first(seq__36535_36586__$1);
var G__36588 = cljs.core.chunk_rest(seq__36535_36586__$1);
var G__36589 = c__4609__auto___36587;
var G__36590 = cljs.core.count(c__4609__auto___36587);
var G__36591 = (0);
seq__36535_36555 = G__36588;
chunk__36536_36556 = G__36589;
count__36537_36557 = G__36590;
i__36538_36558 = G__36591;
continue;
} else {
var strokes_36592 = cljs.core.first(seq__36535_36586__$1);
var seq__36551_36593 = cljs.core.seq(strokes_36592);
var chunk__36552_36594 = null;
var count__36553_36595 = (0);
var i__36554_36596 = (0);
while(true){
if((i__36554_36596 < count__36553_36595)){
var m_36597 = chunk__36552_36594.cljs$core$IIndexed$_nth$arity$2(null,i__36554_36596);
app.main.draw_paint_map(p,m_36597);


var G__36598 = seq__36551_36593;
var G__36599 = chunk__36552_36594;
var G__36600 = count__36553_36595;
var G__36601 = (i__36554_36596 + (1));
seq__36551_36593 = G__36598;
chunk__36552_36594 = G__36599;
count__36553_36595 = G__36600;
i__36554_36596 = G__36601;
continue;
} else {
var temp__5735__auto___36602__$1 = cljs.core.seq(seq__36551_36593);
if(temp__5735__auto___36602__$1){
var seq__36551_36603__$1 = temp__5735__auto___36602__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36551_36603__$1)){
var c__4609__auto___36604 = cljs.core.chunk_first(seq__36551_36603__$1);
var G__36605 = cljs.core.chunk_rest(seq__36551_36603__$1);
var G__36606 = c__4609__auto___36604;
var G__36607 = cljs.core.count(c__4609__auto___36604);
var G__36608 = (0);
seq__36551_36593 = G__36605;
chunk__36552_36594 = G__36606;
count__36553_36595 = G__36607;
i__36554_36596 = G__36608;
continue;
} else {
var m_36609 = cljs.core.first(seq__36551_36603__$1);
app.main.draw_paint_map(p,m_36609);


var G__36610 = cljs.core.next(seq__36551_36603__$1);
var G__36611 = null;
var G__36612 = (0);
var G__36613 = (0);
seq__36551_36593 = G__36610;
chunk__36552_36594 = G__36611;
count__36553_36595 = G__36612;
i__36554_36596 = G__36613;
continue;
}
} else {
}
}
break;
}


var G__36614 = cljs.core.next(seq__36535_36586__$1);
var G__36615 = null;
var G__36616 = (0);
var G__36617 = (0);
seq__36535_36555 = G__36614;
chunk__36536_36556 = G__36615;
count__36537_36557 = G__36616;
i__36538_36558 = G__36617;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(app.main.drawing))){
var nh_36618 = app.main.v_update_last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,app.main.make_paint_map(p));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),nh_36618);
} else {
}

p.colorMode("hsb",(100));

p.noStroke();

var m_36619 = app.main.make_paint_map(p);
app.main.draw_paint_map(p,m_36619);

p.rect((0),(10),((250) * app.main.get_mic_level(app.main.mic)),(10));

p.fill((0),(0),(50));

p.rect((0),(0),(250),(10));

p.fill((0),(0),(0));

p.text("min vol",(1),(8));

p.fill((0),(0),(100));

return p.text("max vol",(205),(8));
}
});
app.main.mic_slider = (function app$main$mic_slider(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83C\uDF99\uFE0F",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"name","name",1843675177),"volume",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),0.99,new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"value","value",305978217),((1) - new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335),((1) - event.target.value));
})], null)], null)], null);
});
app.main.toolbar_component = (function app$main$toolbar_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.mic_slider], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.main.undo], null),"\u27F2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.main.redo], null),"\u27F3"], null)], null);
});
app.main.render_toolbar = (function app$main$render_toolbar(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.toolbar_component], null),goog.dom.getElement("toolbar"));
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.canvas_div !== 'undefined')){
} else {
app.main.canvas_div = goog.dom.getElement("canvas-container");
}
app.main.paint_canvas = (new module$p5((function (p){
(p.setup = (function (){
return app.main.setup(p);
}));

return (p.draw = (function (){
return app.main.draw(p);
}));
}),app.main.canvas_div));
app.main.render_toolbar();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["app loaded"], 0));

//# sourceMappingURL=app.main.js.map
