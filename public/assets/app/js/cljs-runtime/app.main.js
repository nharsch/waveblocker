goog.provide('app.main');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('reagent.dom');
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

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(v)),(function (){var G__46828 = cljs.core.last(v);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__46828) : f.call(null,G__46828));
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
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.pitch !== 'undefined')){
return null;
} else {
return (
app.main.pitch = ml5.pitchDetection("assets/app/model",audioContext,mic.stream,(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["model loaded"], 0));
})))
;
}
});
app.main.setup = (function app$main$setup(p){
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.cnv !== 'undefined')){
} else {
app.main.cnv = p.createCanvas((1200),(1200));
}

app.main.cnv.mouseClicked(app.main.turn_on);

(p.userStartAudio.cljs$core$IFn$_invoke$arity$0 ? p.userStartAudio.cljs$core$IFn$_invoke$arity$0() : p.userStartAudio.call(null));

if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.audioContext !== 'undefined')){
} else {
app.main.audioContext = (p.getAudioContext.cljs$core$IFn$_invoke$arity$0 ? p.getAudioContext.cljs$core$IFn$_invoke$arity$0() : p.getAudioContext.call(null));
}

if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.mic !== 'undefined')){
} else {
app.main.mic = (new p5.AudioIn());
}

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

var seq__46850_46892 = cljs.core.seq(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)));
var chunk__46851_46893 = null;
var count__46852_46894 = (0);
var i__46853_46895 = (0);
while(true){
if((i__46853_46895 < count__46852_46894)){
var strokes_46896 = chunk__46851_46893.cljs$core$IIndexed$_nth$arity$2(null,i__46853_46895);
var seq__46879_46897 = cljs.core.seq(strokes_46896);
var chunk__46880_46898 = null;
var count__46881_46899 = (0);
var i__46882_46900 = (0);
while(true){
if((i__46882_46900 < count__46881_46899)){
var m_46901 = chunk__46880_46898.cljs$core$IIndexed$_nth$arity$2(null,i__46882_46900);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_46901),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_46901),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_46901));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_46901),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_46901),(60),(60));


var G__46902 = seq__46879_46897;
var G__46903 = chunk__46880_46898;
var G__46904 = count__46881_46899;
var G__46905 = (i__46882_46900 + (1));
seq__46879_46897 = G__46902;
chunk__46880_46898 = G__46903;
count__46881_46899 = G__46904;
i__46882_46900 = G__46905;
continue;
} else {
var temp__5735__auto___46906 = cljs.core.seq(seq__46879_46897);
if(temp__5735__auto___46906){
var seq__46879_46907__$1 = temp__5735__auto___46906;
if(cljs.core.chunked_seq_QMARK_(seq__46879_46907__$1)){
var c__4609__auto___46908 = cljs.core.chunk_first(seq__46879_46907__$1);
var G__46909 = cljs.core.chunk_rest(seq__46879_46907__$1);
var G__46910 = c__4609__auto___46908;
var G__46911 = cljs.core.count(c__4609__auto___46908);
var G__46912 = (0);
seq__46879_46897 = G__46909;
chunk__46880_46898 = G__46910;
count__46881_46899 = G__46911;
i__46882_46900 = G__46912;
continue;
} else {
var m_46913 = cljs.core.first(seq__46879_46907__$1);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_46913),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_46913),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_46913));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_46913),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_46913),(60),(60));


var G__46914 = cljs.core.next(seq__46879_46907__$1);
var G__46915 = null;
var G__46916 = (0);
var G__46917 = (0);
seq__46879_46897 = G__46914;
chunk__46880_46898 = G__46915;
count__46881_46899 = G__46916;
i__46882_46900 = G__46917;
continue;
}
} else {
}
}
break;
}


var G__46918 = seq__46850_46892;
var G__46919 = chunk__46851_46893;
var G__46920 = count__46852_46894;
var G__46921 = (i__46853_46895 + (1));
seq__46850_46892 = G__46918;
chunk__46851_46893 = G__46919;
count__46852_46894 = G__46920;
i__46853_46895 = G__46921;
continue;
} else {
var temp__5735__auto___46922 = cljs.core.seq(seq__46850_46892);
if(temp__5735__auto___46922){
var seq__46850_46923__$1 = temp__5735__auto___46922;
if(cljs.core.chunked_seq_QMARK_(seq__46850_46923__$1)){
var c__4609__auto___46924 = cljs.core.chunk_first(seq__46850_46923__$1);
var G__46925 = cljs.core.chunk_rest(seq__46850_46923__$1);
var G__46926 = c__4609__auto___46924;
var G__46927 = cljs.core.count(c__4609__auto___46924);
var G__46928 = (0);
seq__46850_46892 = G__46925;
chunk__46851_46893 = G__46926;
count__46852_46894 = G__46927;
i__46853_46895 = G__46928;
continue;
} else {
var strokes_46929 = cljs.core.first(seq__46850_46923__$1);
var seq__46883_46930 = cljs.core.seq(strokes_46929);
var chunk__46884_46931 = null;
var count__46885_46932 = (0);
var i__46886_46933 = (0);
while(true){
if((i__46886_46933 < count__46885_46932)){
var m_46934 = chunk__46884_46931.cljs$core$IIndexed$_nth$arity$2(null,i__46886_46933);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_46934),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_46934),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_46934));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_46934),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_46934),(60),(60));


var G__46935 = seq__46883_46930;
var G__46936 = chunk__46884_46931;
var G__46937 = count__46885_46932;
var G__46938 = (i__46886_46933 + (1));
seq__46883_46930 = G__46935;
chunk__46884_46931 = G__46936;
count__46885_46932 = G__46937;
i__46886_46933 = G__46938;
continue;
} else {
var temp__5735__auto___46939__$1 = cljs.core.seq(seq__46883_46930);
if(temp__5735__auto___46939__$1){
var seq__46883_46940__$1 = temp__5735__auto___46939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46883_46940__$1)){
var c__4609__auto___46941 = cljs.core.chunk_first(seq__46883_46940__$1);
var G__46942 = cljs.core.chunk_rest(seq__46883_46940__$1);
var G__46943 = c__4609__auto___46941;
var G__46944 = cljs.core.count(c__4609__auto___46941);
var G__46945 = (0);
seq__46883_46930 = G__46942;
chunk__46884_46931 = G__46943;
count__46885_46932 = G__46944;
i__46886_46933 = G__46945;
continue;
} else {
var m_46946 = cljs.core.first(seq__46883_46940__$1);
p.colorMode("hsb",(100));

p.noStroke();

p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_46946),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_46946),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_46946));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_46946),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_46946),(60),(60));


var G__46947 = cljs.core.next(seq__46883_46940__$1);
var G__46948 = null;
var G__46949 = (0);
var G__46950 = (0);
seq__46883_46930 = G__46947;
chunk__46884_46931 = G__46948;
count__46885_46932 = G__46949;
i__46886_46933 = G__46950;
continue;
}
} else {
}
}
break;
}


var G__46951 = cljs.core.next(seq__46850_46923__$1);
var G__46952 = null;
var G__46953 = (0);
var G__46954 = (0);
seq__46850_46892 = G__46951;
chunk__46851_46893 = G__46952;
count__46852_46894 = G__46953;
i__46853_46895 = G__46954;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(app.main.drawing))){
var nh_46955 = app.main.v_update_last(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state)),(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,app.main.paint_map(p));
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),nh_46955);
} else {
}

p.colorMode("hsb",(100));

p.noStroke();

var m_46956 = app.main.paint_map(p);
p.fill(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m_46956),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(m_46956),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(m_46956));

p.ellipse(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m_46956),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m_46956),(60),(60));

p.rect((0),(10),((250) * app.main.get_mic_level(app.main.mic)),(10));

p.fill((0),(0),(50));

p.rect((0),(0),(250),(10));

p.fill((0),(0),(0));

p.text("min vol",(1),(8));

p.fill((0),(0),(100));

return p.text("max vol",(205),(8));
}
});
app.main.parent_id = "canvas-container";
if(cljs.core.truth_(goog.dom.getElement(app.main.parent_id))){
} else {
goog.dom.append(goog.dom.body,goog.dom.createDom("div",({"id": app.main.parent_id})));
}
(new module$p5((function (p){
(p.setup = (function (){
return app.main.setup(p);
}));

return (p.draw = (function (){
return app.main.draw(p);
}));
})));
app.main.mic_slider = (function app$main$mic_slider(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83C\uDF99",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"name","name",1843675177),"volume",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),0.99,new cljs.core.Keyword(null,"step","step",1288888124),0.05,new cljs.core.Keyword(null,"value","value",305978217),((1) - new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.app_state))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.main.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"mic-sensitivity","mic-sensitivity",-1539944335),((1) - event.target.value));
})], null)], null)], null);
});
app.main.toolbar_component = (function app$main$toolbar_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.mic_slider], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.main.undo], null),"\u21BA"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.main.redo], null),"\u21BB"], null)], null);
});
app.main.render_simple = (function app$main$render_simple(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.toolbar_component], null),goog.dom.getElement("toolbar"));
});
app.main.render_simple();

//# sourceMappingURL=app.main.js.map
