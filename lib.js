var ___lib=require("./lib");(exports["StructFactory"]=function(name){var make=function(){var r=Array.prototype.slice.call(arguments,0);(r["#"]=name);return r;};(make["___project"]=function(value){if(((value instanceof Array)&&(value["#"]===name))){return [true,value];}else{if(true){return [true,make(value)];}else{return false;}}});(make["___check"]=function(value){if(((value instanceof Array)&&(value["#"]===name))){return true;}else{if(true){return false;}else{return false;}}});(make["___deconstruct"]=function(value){if(((value instanceof Array)&&(value["#"]===name))){return [true,value.slice(0)];}else{if(true){return [false,false];}else{return false;}}});return make;});(exports["Struct"]=function(name){var r=Array.prototype.slice.call(arguments,1);(r["#"]=name);return r;});(exports.Struct["___check"]=function(value){if((value instanceof Array)){return (value["#"]!==undefined);}else{if(true){return false;}else{return false;}}});(exports.Struct["___deconstruct"]=function(value){if(((value instanceof Array)&&(value["#"]!==undefined))){return [value["#"]].concat(value.slice(0));}else{if(true){throw "cannot deconstruct";}else{return false;}}});var pr=function(x){var r=repr(x);var pre=(String.fromCharCode(27)+"[?0;7y+h <div class=\"ug\">");var post=("</div>"+String.fromCharCode(7));return console.log(((pre+r)+post));};(exports["pr"]=pr);var __slash____slash____slash__=function(cls,contents){var _tmp0=contents;var other;var _tmp1;if((((_tmp1=_tmp0),(typeof(_tmp1)==="string"))&&(_tmp1,true))){return (((("<span class=\""+cls)+"\">")+contents)+"</span>");}else{if(((other=_tmp0),true)){return (((("<span class=\""+cls)+"\">")+contents.join(""))+"</span>");}else{throw ["Could not find a match",_tmp0];}}};var repr=function(x){var _tmp2=x;var entries;var _tmp3;var _tmp4;var _tmp5;var _tmp6;var _tmp7;var _tmp8;if((((_tmp8=_tmp2),(_tmp8===true))&&(_tmp8,true))){return __slash____slash____slash__("special",__slash____slash____slash__("true","true"));}else{if((((_tmp7=_tmp2),(_tmp7===false))&&(_tmp7,true))){return __slash____slash____slash__("special",__slash____slash____slash__("false","false"));}else{if((((_tmp6=_tmp2),(_tmp6===null))&&(_tmp6,true))){return __slash____slash____slash__("special",__slash____slash____slash__("nil","null"));}else{if((((_tmp5=_tmp2),(_tmp5===undefined))&&(_tmp5,true))){return __slash____slash____slash__("special",__slash____slash____slash__("nil","undefined"));}else{if((((_tmp4=_tmp2),(typeof(_tmp4)==="number"))&&(_tmp4,true))){return __slash____slash____slash__("num",String(x));}else{if((((_tmp3=_tmp2),(typeof(_tmp3)==="string"))&&(_tmp3,true))){return __slash____slash____slash__("str",x);}else{if(((entries=_tmp2),true)){var tag=entries["#"];var _tmp9=tag;var other;var _tmp10;if((((_tmp10=_tmp9),(_tmp10===undefined))&&(_tmp10,true))){return __slash____slash____slash__("sequence",entries.map(function(x){return repr(x);}));}else{if(((other=_tmp9),true)){return __slash____slash____slash__("struct",[__slash____slash____slash__("sym",tag),__slash____slash____slash__("sequence",entries.map(function(x){return repr(x);}))]);}else{throw ["Could not find a match",_tmp9];}}}else{throw ["Could not find a match",_tmp2];}}}}}}}};(exports["repr"]=repr);(exports["send"]=function(obj,msg){var _tmp11=msg;var other;var _tmp12;var _tmp14;var _tmp13;if(((_tmp12=_tmp11),((((_tmp13=_tmp12),(typeof(_tmp13)==="string"))&&(_tmp13,true))||(((_tmp14=_tmp12),(typeof(_tmp14)==="number"))&&(_tmp14,true))))){return obj[msg];}else{if(((other=_tmp11),true)){return obj.___send(msg);}else{throw ["Could not find a match",_tmp11];}}});(Function.prototype["___send"]=function(args){return this.apply(this,args);});(exports["checker"]=function(type){var _tmp15=type.___check;var f;var _tmp16;if((((_tmp16=_tmp15),(_tmp16===undefined))&&(_tmp16,true))){return function(value){return (value instanceof type);};}else{if(((f=_tmp15),true)){return function(value){return f(value);};}else{throw ["Could not find a match",_tmp15];}}});(exports["projector"]=function(type){return function(value){var _tmp17=type.___project;var f;var _tmp18;if((((_tmp18=_tmp17),(_tmp18===undefined))&&(_tmp18,true))){if((value instanceof type)){return [true,value];}else{if(true){return [false,null];}else{return false;}}}else{if(((f=_tmp17),true)){return f(value);}else{throw ["Could not find a match",_tmp17];}}};});(Array["___project"]=function(value){var _tmp19=value;var _tmp20;if((((_tmp20=_tmp19),___lib.checker(Array)(_tmp20))&&(_tmp20,true))){return [true,value];}else{if((_tmp19,true)){return [true,[value]];}else{throw ["Could not find a match",_tmp19];}}});(exports["deconstructor"]=function(type){return function(value){var _tmp21=type.___deconstruct;var f;var _tmp22;if((((_tmp22=_tmp21),(_tmp22===undefined))&&(_tmp22,true))){if((value instanceof Array)){return [true,value];}else{if(true){return [false,null];}else{return false;}}}else{if(((f=_tmp21),true)){return f(value);}else{throw ["Could not find a match",_tmp21];}}};});
