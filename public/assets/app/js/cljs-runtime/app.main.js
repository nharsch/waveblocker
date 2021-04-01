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

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(v)),(function (){var G__26833 = cljs.core.last(v);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26833) : f.call(null,G__26833));
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

var seq__26834_26854 = cljs.core.seq(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)));
var chunk__26835_26855 = null;
var count__26836_26856 = (0);
var i__26837_26857 = (0);
while(true){
if((i__26837_26857 < count__26836_26856)){
var strokes_26858 = chunk__26835_26855.cljs$core$IIndexed$_nth$arity$2(null,i__26837_26857);
var seq__26846_26859 = cljs.core.seq(strokes_26858);
var chunk__26847_26860 = null;
var count__26848_26861 = (0);
var i__26849_26862 = (0);
while(true){
if((i__26849_26862 < count__26848_26861)){
var m_26863 = chunk__26847_26860.cljs$core$IIndexed$_nth$arity$2(null,i__26849_26862);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_26863),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_26863),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_26863));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_26863),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_26863),(60),(60));


var G__26864 = seq__26846_26859;
var G__26865 = chunk__26847_26860;
var G__26866 = count__26848_26861;
var G__26867 = (i__26849_26862 + (1));
seq__26846_26859 = G__26864;
chunk__26847_26860 = G__26865;
count__26848_26861 = G__26866;
i__26849_26862 = G__26867;
continue;
} else {
var temp__5735__auto___26868 = cljs.core.seq(seq__26846_26859);
if(temp__5735__auto___26868){
var seq__26846_26869__$1 = temp__5735__auto___26868;
if(cljs.core.chunked_seq_QMARK_(seq__26846_26869__$1)){
var c__4609__auto___26870 = cljs.core.chunk_first(seq__26846_26869__$1);
var G__26871 = cljs.core.chunk_rest(seq__26846_26869__$1);
var G__26872 = c__4609__auto___26870;
var G__26873 = cljs.core.count(c__4609__auto___26870);
var G__26874 = (0);
seq__26846_26859 = G__26871;
chunk__26847_26860 = G__26872;
count__26848_26861 = G__26873;
i__26849_26862 = G__26874;
continue;
} else {
var m_26875 = cljs.core.first(seq__26846_26869__$1);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_26875),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_26875),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_26875));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_26875),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_26875),(60),(60));


var G__26876 = cljs.core.next(seq__26846_26869__$1);
var G__26877 = null;
var G__26878 = (0);
var G__26879 = (0);
seq__26846_26859 = G__26876;
chunk__26847_26860 = G__26877;
count__26848_26861 = G__26878;
i__26849_26862 = G__26879;
continue;
}
} else {
}
}
break;
}


var G__26880 = seq__26834_26854;
var G__26881 = chunk__26835_26855;
var G__26882 = count__26836_26856;
var G__26883 = (i__26837_26857 + (1));
seq__26834_26854 = G__26880;
chunk__26835_26855 = G__26881;
count__26836_26856 = G__26882;
i__26837_26857 = G__26883;
continue;
} else {
var temp__5735__auto___26884 = cljs.core.seq(seq__26834_26854);
if(temp__5735__auto___26884){
var seq__26834_26885__$1 = temp__5735__auto___26884;
if(cljs.core.chunked_seq_QMARK_(seq__26834_26885__$1)){
var c__4609__auto___26886 = cljs.core.chunk_first(seq__26834_26885__$1);
var G__26887 = cljs.core.chunk_rest(seq__26834_26885__$1);
var G__26888 = c__4609__auto___26886;
var G__26889 = cljs.core.count(c__4609__auto___26886);
var G__26890 = (0);
seq__26834_26854 = G__26887;
chunk__26835_26855 = G__26888;
count__26836_26856 = G__26889;
i__26837_26857 = G__26890;
continue;
} else {
var strokes_26891 = cljs.core.first(seq__26834_26885__$1);
var seq__26850_26892 = cljs.core.seq(strokes_26891);
var chunk__26851_26893 = null;
var count__26852_26894 = (0);
var i__26853_26895 = (0);
while(true){
if((i__26853_26895 < count__26852_26894)){
var m_26896 = chunk__26851_26893.cljs$core$IIndexed$_nth$arity$2(null,i__26853_26895);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_26896),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_26896),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_26896));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_26896),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_26896),(60),(60));


var G__26897 = seq__26850_26892;
var G__26898 = chunk__26851_26893;
var G__26899 = count__26852_26894;
var G__26900 = (i__26853_26895 + (1));
seq__26850_26892 = G__26897;
chunk__26851_26893 = G__26898;
count__26852_26894 = G__26899;
i__26853_26895 = G__26900;
continue;
} else {
var temp__5735__auto___26901__$1 = cljs.core.seq(seq__26850_26892);
if(temp__5735__auto___26901__$1){
var seq__26850_26902__$1 = temp__5735__auto___26901__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26850_26902__$1)){
var c__4609__auto___26903 = cljs.core.chunk_first(seq__26850_26902__$1);
var G__26904 = cljs.core.chunk_rest(seq__26850_26902__$1);
var G__26905 = c__4609__auto___26903;
var G__26906 = cljs.core.count(c__4609__auto___26903);
var G__26907 = (0);
seq__26850_26892 = G__26904;
chunk__26851_26893 = G__26905;
count__26852_26894 = G__26906;
i__26853_26895 = G__26907;
continue;
} else {
var m_26908 = cljs.core.first(seq__26850_26902__$1);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_26908),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_26908),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_26908));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_26908),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_26908),(60),(60));


var G__26909 = cljs.core.next(seq__26850_26902__$1);
var G__26910 = null;
var G__26911 = (0);
var G__26912 = (0);
seq__26850_26892 = G__26909;
chunk__26851_26893 = G__26910;
count__26852_26894 = G__26911;
i__26853_26895 = G__26912;
continue;
}
} else {
}
}
break;
}


var G__26913 = cljs.core.next(seq__26834_26885__$1);
var G__26914 = null;
var G__26915 = (0);
var G__26916 = (0);
seq__26834_26854 = G__26913;
chunk__26835_26855 = G__26914;
count__26836_26856 = G__26915;
i__26837_26857 = G__26916;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(app.main.drawing))){
var nh_26917 = app.main.v_update_last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,app.main.paint_map(p));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),nh_26917);
} else {
}

p.colorMode("hsb",(100));

p.noStroke();

var m_26918 = app.main.paint_map(p);
p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_26918),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_26918),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_26918));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_26918),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_26918),(60),(60));

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
app.main.render_toolbar();
app.main.parent_id = "canvas-container";
(new module$p5((function (p){
(p.setup = (function (){
return app.main.setup(p);
}));

return (p.draw = (function (){
return app.main.draw(p);
}));
}),app.main.parent_id));

//# sourceMappingURL=app.main.js.map
