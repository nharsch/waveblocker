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

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(v)),(function (){var G__28467 = cljs.core.last(v);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28467) : f.call(null,G__28467));
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
app.main.cnv = p.createCanvas((1200),(1200));

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
app.main.paint_map = (function app$main$paint_map(p){
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

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.app_state,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.paint_map(p)], null)], 0));
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

var seq__28468_28488 = cljs.core.seq(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)));
var chunk__28469_28489 = null;
var count__28470_28490 = (0);
var i__28471_28491 = (0);
while(true){
if((i__28471_28491 < count__28470_28490)){
var strokes_28492 = chunk__28469_28489.cljs$core$IIndexed$_nth$arity$2(null,i__28471_28491);
var seq__28480_28493 = cljs.core.seq(strokes_28492);
var chunk__28481_28494 = null;
var count__28482_28495 = (0);
var i__28483_28496 = (0);
while(true){
if((i__28483_28496 < count__28482_28495)){
var m_28497 = chunk__28481_28494.cljs$core$IIndexed$_nth$arity$2(null,i__28483_28496);
app.main.draw_paint_map(p,m_28497);


var G__28498 = seq__28480_28493;
var G__28499 = chunk__28481_28494;
var G__28500 = count__28482_28495;
var G__28501 = (i__28483_28496 + (1));
seq__28480_28493 = G__28498;
chunk__28481_28494 = G__28499;
count__28482_28495 = G__28500;
i__28483_28496 = G__28501;
continue;
} else {
var temp__5735__auto___28502 = cljs.core.seq(seq__28480_28493);
if(temp__5735__auto___28502){
var seq__28480_28503__$1 = temp__5735__auto___28502;
if(cljs.core.chunked_seq_QMARK_(seq__28480_28503__$1)){
var c__4609__auto___28504 = cljs.core.chunk_first(seq__28480_28503__$1);
var G__28505 = cljs.core.chunk_rest(seq__28480_28503__$1);
var G__28506 = c__4609__auto___28504;
var G__28507 = cljs.core.count(c__4609__auto___28504);
var G__28508 = (0);
seq__28480_28493 = G__28505;
chunk__28481_28494 = G__28506;
count__28482_28495 = G__28507;
i__28483_28496 = G__28508;
continue;
} else {
var m_28509 = cljs.core.first(seq__28480_28503__$1);
app.main.draw_paint_map(p,m_28509);


var G__28510 = cljs.core.next(seq__28480_28503__$1);
var G__28511 = null;
var G__28512 = (0);
var G__28513 = (0);
seq__28480_28493 = G__28510;
chunk__28481_28494 = G__28511;
count__28482_28495 = G__28512;
i__28483_28496 = G__28513;
continue;
}
} else {
}
}
break;
}


var G__28514 = seq__28468_28488;
var G__28515 = chunk__28469_28489;
var G__28516 = count__28470_28490;
var G__28517 = (i__28471_28491 + (1));
seq__28468_28488 = G__28514;
chunk__28469_28489 = G__28515;
count__28470_28490 = G__28516;
i__28471_28491 = G__28517;
continue;
} else {
var temp__5735__auto___28518 = cljs.core.seq(seq__28468_28488);
if(temp__5735__auto___28518){
var seq__28468_28519__$1 = temp__5735__auto___28518;
if(cljs.core.chunked_seq_QMARK_(seq__28468_28519__$1)){
var c__4609__auto___28520 = cljs.core.chunk_first(seq__28468_28519__$1);
var G__28521 = cljs.core.chunk_rest(seq__28468_28519__$1);
var G__28522 = c__4609__auto___28520;
var G__28523 = cljs.core.count(c__4609__auto___28520);
var G__28524 = (0);
seq__28468_28488 = G__28521;
chunk__28469_28489 = G__28522;
count__28470_28490 = G__28523;
i__28471_28491 = G__28524;
continue;
} else {
var strokes_28525 = cljs.core.first(seq__28468_28519__$1);
var seq__28484_28526 = cljs.core.seq(strokes_28525);
var chunk__28485_28527 = null;
var count__28486_28528 = (0);
var i__28487_28529 = (0);
while(true){
if((i__28487_28529 < count__28486_28528)){
var m_28530 = chunk__28485_28527.cljs$core$IIndexed$_nth$arity$2(null,i__28487_28529);
app.main.draw_paint_map(p,m_28530);


var G__28531 = seq__28484_28526;
var G__28532 = chunk__28485_28527;
var G__28533 = count__28486_28528;
var G__28534 = (i__28487_28529 + (1));
seq__28484_28526 = G__28531;
chunk__28485_28527 = G__28532;
count__28486_28528 = G__28533;
i__28487_28529 = G__28534;
continue;
} else {
var temp__5735__auto___28535__$1 = cljs.core.seq(seq__28484_28526);
if(temp__5735__auto___28535__$1){
var seq__28484_28536__$1 = temp__5735__auto___28535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28484_28536__$1)){
var c__4609__auto___28537 = cljs.core.chunk_first(seq__28484_28536__$1);
var G__28538 = cljs.core.chunk_rest(seq__28484_28536__$1);
var G__28539 = c__4609__auto___28537;
var G__28540 = cljs.core.count(c__4609__auto___28537);
var G__28541 = (0);
seq__28484_28526 = G__28538;
chunk__28485_28527 = G__28539;
count__28486_28528 = G__28540;
i__28487_28529 = G__28541;
continue;
} else {
var m_28542 = cljs.core.first(seq__28484_28536__$1);
app.main.draw_paint_map(p,m_28542);


var G__28543 = cljs.core.next(seq__28484_28536__$1);
var G__28544 = null;
var G__28545 = (0);
var G__28546 = (0);
seq__28484_28526 = G__28543;
chunk__28485_28527 = G__28544;
count__28486_28528 = G__28545;
i__28487_28529 = G__28546;
continue;
}
} else {
}
}
break;
}


var G__28547 = cljs.core.next(seq__28468_28519__$1);
var G__28548 = null;
var G__28549 = (0);
var G__28550 = (0);
seq__28468_28488 = G__28547;
chunk__28469_28489 = G__28548;
count__28470_28490 = G__28549;
i__28471_28491 = G__28550;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(app.main.drawing))){
var nh_28551 = app.main.v_update_last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,app.main.paint_map(p));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),nh_28551);
} else {
}

p.colorMode("hsb",(100));

p.noStroke();

var m_28552 = app.main.paint_map(p);
app.main.draw_paint_map(p,m_28552);

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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"mic sensitivity",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"name","name",1843675177),"volume",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),0.99,new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"value","value",305978217),((1) - new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335),((1) - event.target.value));
})], null)], null)], null);
});
app.main.toolbar_component = (function app$main$toolbar_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.mic_slider], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.main.undo], null),"undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.main.redo], null),"redo"], null)], null);
});
app.main.render_toolbar = (function app$main$render_toolbar(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.toolbar_component], null),goog.dom.getElement("toolbar"));
});
app.main.parent_id = "canvas-container";
if(cljs.core.truth_(goog.dom.getElement(app.main.parent_id))){
} else {
goog.dom.append(document.body,goog.dom.createDom("div",({"id": app.main.parent_id})));
}
app.main.canvas_div = goog.dom.getElement(app.main.parent_id);
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
