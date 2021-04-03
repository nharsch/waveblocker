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

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(v)),(function (){var G__27917 = cljs.core.last(v);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27917) : f.call(null,G__27917));
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
p.clear();

p.fill((50));

return p.text("tap to start",(300),(300));
} else {
app.main.update_pitch();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mic-level","mic-level",1519554079),app.main.get_mic_level(app.main.mic));

p.background((255));

var seq__27918_27938 = cljs.core.seq(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)));
var chunk__27919_27939 = null;
var count__27920_27940 = (0);
var i__27921_27941 = (0);
while(true){
if((i__27921_27941 < count__27920_27940)){
var strokes_27942 = chunk__27919_27939.cljs$core$IIndexed$_nth$arity$2(null,i__27921_27941);
var seq__27930_27943 = cljs.core.seq(strokes_27942);
var chunk__27931_27944 = null;
var count__27932_27945 = (0);
var i__27933_27946 = (0);
while(true){
if((i__27933_27946 < count__27932_27945)){
var m_27947 = chunk__27931_27944.cljs$core$IIndexed$_nth$arity$2(null,i__27933_27946);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_27947),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_27947),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_27947));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_27947),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_27947),(60),(60));


var G__27948 = seq__27930_27943;
var G__27949 = chunk__27931_27944;
var G__27950 = count__27932_27945;
var G__27951 = (i__27933_27946 + (1));
seq__27930_27943 = G__27948;
chunk__27931_27944 = G__27949;
count__27932_27945 = G__27950;
i__27933_27946 = G__27951;
continue;
} else {
var temp__5735__auto___27952 = cljs.core.seq(seq__27930_27943);
if(temp__5735__auto___27952){
var seq__27930_27953__$1 = temp__5735__auto___27952;
if(cljs.core.chunked_seq_QMARK_(seq__27930_27953__$1)){
var c__4609__auto___27954 = cljs.core.chunk_first(seq__27930_27953__$1);
var G__27955 = cljs.core.chunk_rest(seq__27930_27953__$1);
var G__27956 = c__4609__auto___27954;
var G__27957 = cljs.core.count(c__4609__auto___27954);
var G__27958 = (0);
seq__27930_27943 = G__27955;
chunk__27931_27944 = G__27956;
count__27932_27945 = G__27957;
i__27933_27946 = G__27958;
continue;
} else {
var m_27959 = cljs.core.first(seq__27930_27953__$1);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_27959),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_27959),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_27959));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_27959),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_27959),(60),(60));


var G__27960 = cljs.core.next(seq__27930_27953__$1);
var G__27961 = null;
var G__27962 = (0);
var G__27963 = (0);
seq__27930_27943 = G__27960;
chunk__27931_27944 = G__27961;
count__27932_27945 = G__27962;
i__27933_27946 = G__27963;
continue;
}
} else {
}
}
break;
}


var G__27964 = seq__27918_27938;
var G__27965 = chunk__27919_27939;
var G__27966 = count__27920_27940;
var G__27967 = (i__27921_27941 + (1));
seq__27918_27938 = G__27964;
chunk__27919_27939 = G__27965;
count__27920_27940 = G__27966;
i__27921_27941 = G__27967;
continue;
} else {
var temp__5735__auto___27968 = cljs.core.seq(seq__27918_27938);
if(temp__5735__auto___27968){
var seq__27918_27969__$1 = temp__5735__auto___27968;
if(cljs.core.chunked_seq_QMARK_(seq__27918_27969__$1)){
var c__4609__auto___27970 = cljs.core.chunk_first(seq__27918_27969__$1);
var G__27971 = cljs.core.chunk_rest(seq__27918_27969__$1);
var G__27972 = c__4609__auto___27970;
var G__27973 = cljs.core.count(c__4609__auto___27970);
var G__27974 = (0);
seq__27918_27938 = G__27971;
chunk__27919_27939 = G__27972;
count__27920_27940 = G__27973;
i__27921_27941 = G__27974;
continue;
} else {
var strokes_27975 = cljs.core.first(seq__27918_27969__$1);
var seq__27934_27976 = cljs.core.seq(strokes_27975);
var chunk__27935_27977 = null;
var count__27936_27978 = (0);
var i__27937_27979 = (0);
while(true){
if((i__27937_27979 < count__27936_27978)){
var m_27980 = chunk__27935_27977.cljs$core$IIndexed$_nth$arity$2(null,i__27937_27979);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_27980),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_27980),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_27980));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_27980),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_27980),(60),(60));


var G__27981 = seq__27934_27976;
var G__27982 = chunk__27935_27977;
var G__27983 = count__27936_27978;
var G__27984 = (i__27937_27979 + (1));
seq__27934_27976 = G__27981;
chunk__27935_27977 = G__27982;
count__27936_27978 = G__27983;
i__27937_27979 = G__27984;
continue;
} else {
var temp__5735__auto___27985__$1 = cljs.core.seq(seq__27934_27976);
if(temp__5735__auto___27985__$1){
var seq__27934_27986__$1 = temp__5735__auto___27985__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27934_27986__$1)){
var c__4609__auto___27987 = cljs.core.chunk_first(seq__27934_27986__$1);
var G__27988 = cljs.core.chunk_rest(seq__27934_27986__$1);
var G__27989 = c__4609__auto___27987;
var G__27990 = cljs.core.count(c__4609__auto___27987);
var G__27991 = (0);
seq__27934_27976 = G__27988;
chunk__27935_27977 = G__27989;
count__27936_27978 = G__27990;
i__27937_27979 = G__27991;
continue;
} else {
var m_27992 = cljs.core.first(seq__27934_27986__$1);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_27992),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_27992),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_27992));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_27992),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_27992),(60),(60));


var G__27993 = cljs.core.next(seq__27934_27986__$1);
var G__27994 = null;
var G__27995 = (0);
var G__27996 = (0);
seq__27934_27976 = G__27993;
chunk__27935_27977 = G__27994;
count__27936_27978 = G__27995;
i__27937_27979 = G__27996;
continue;
}
} else {
}
}
break;
}


var G__27997 = cljs.core.next(seq__27918_27969__$1);
var G__27998 = null;
var G__27999 = (0);
var G__28000 = (0);
seq__27918_27938 = G__27997;
chunk__27919_27939 = G__27998;
count__27920_27940 = G__27999;
i__27921_27941 = G__28000;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(app.main.drawing))){
var nh_28001 = app.main.v_update_last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,app.main.paint_map(p));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),nh_28001);
} else {
}

p.colorMode("hsb",(100));

p.noStroke();

var m_28002 = app.main.paint_map(p);
p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_28002),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_28002),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_28002));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_28002),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_28002),(60),(60));

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
