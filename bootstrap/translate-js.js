
'use strict';require('earlgrey-runtime/6');let $targ$7;let accum$0;let $targ$8;let accum$1;let $targ$9;let $0$0;let gensym$0;let Body$0;let $1$0;let __lt____gt__$0;let $2$0;let jsKeywords$0;let join$0;let js_op_table2$0;let js_op_table$0;let Translator$0;$0$0=require("./util");gensym$0=getProperty($0$0,"gensym","./util");Body$0=getProperty($0$0,"Body","./util");$1$0=require("./pp");__lt____gt__$0=getProperty($1$0,"<>","./pp");$2$0=require("./expand");jsKeywords$0=getProperty($2$0,"jsKeywords","./expand");join$0=(function join(things$0,sep$0){let m$0;let acc$0;let temp$0;acc$0=[];temp$0=null;m$0=null;$3:for(m$0 of enumerate(things$0)){let ph$0$0;let x$0;let t0$0;let t1$0;t0$0=m$0;if((Array.isArray(t0$0)&&((t1$0=t0$0.length),(t1$0===2)))){ph$0$0=t0$0[0];x$0=t0$0[1];if((ph$0$0===0)){temp$0=x$0;}else{temp$0=[",",x$0];}acc$0.push(temp$0);}else{___match_error(m$0);}}return acc$0;});js_op_table2$0=({"+":"+","-":"-","*":"*","/":"/","mod":"%","&+":"&","|+":"|","^+":"^","~":"~","and":"&&","or":"||","not":"!","==":"===","!=":"!==","===":"===","!==":"!==","<":"<",">":">","<=":"<=",">=":">=","<<":"<<",">>":">>",">>>":">>>","instanceof":" instanceof ","++":"++","--":"--"});js_op_table$0=({"___plus":"+","___minus":"-","___times":"*","___div":"/","___mod":"%","___binxor":"^","___binand":"&","___binor":"|","___binnot":"~","___and":"&&","___or":"||","___not":"!","___is":"===","___isnt":"!==","___eq":"===","___neq":"!==","___lt":"<","___gt":">","___lte":"<=","___gte":">=","___shl":"<<","___shr":">>","___shr2":">>>","___in":" in ","___instanceof":" instanceof ","___plusplus":"++","___minusminus":"--"});Translator$0=(function Translator(){let m$2$0;let $targ$0;let $targ$1;let prelude$0;let t0$1;let m$1$0;let __at___$0;if((!getChecker(Translator$0)(this))){__at___$0=Object.create(Translator$0.prototype);}else{__at___$0=this;}m$1$0=arguments;t0$1=m$1$0.length;if(((t0$1>=0)&&(t0$1<=2))){if((0>=t0$1)){prelude$0=null;}else{prelude$0=m$1$0[0];}(__at___$0["globvar"]=((1>=t0$1)?null:m$1$0[1]));$targ$0=({});(__at___$0["cache"]=$targ$0);$targ$1=[];(__at___$0["prepend"]=$targ$1);m$2$0=prelude$0;if((m$2$0===null)){undefined;}else{if((typeof(m$2$0)==="string")){__at___$0.prepend.push(prelude$0);}else{__at___$0.prepend.push(__at___$0.translate(___serialize_ast(prelude$0),"stmt"));}}}else{___match_error(m$1$0,"{prelude = null, @globvar = null}");}return __at___$0;});(Translator$0.prototype["register_value"]=(function register_value(v$0,id$0){let x$1;let temp$1;let $targ$2;let name$0;let m$3$0;let __at___$1;let self$0;__at___$1=this;self$0=this;m$3$0=send(send(__at___$1,"cache", true),id$0);if((m$3$0===(void 0))){temp$1=["symbol",gensym$0()];$targ$2=temp$1;(__at___$1.cache[id$0]=$targ$2);x$1=["declare",temp$1,___serialize_ast(v$0)];__at___$1.prepend.push(__at___$1.translate(x$1,"stmt"));return temp$1;}else{name$0=m$3$0;return name$0;}}));(Translator$0.prototype["register_raw"]=(function register_raw(raw$0,id$1){let x$2;let temp$2;let $targ$3;let name$1;let m$4$0;let __at___$2;let self$1;__at___$2=this;self$1=this;m$4$0=send(send(__at___$2,"cache", true),id$1);if((m$4$0===(void 0))){temp$2=["symbol",gensym$0()];$targ$3=temp$2;(__at___$2.cache[id$1]=$targ$3);x$2=["declare",temp$2,["raw",raw$0]];__at___$2.prepend.push(__at___$2.translate(x$2,"stmt"));return temp$2;}else{name$1=m$4$0;return name$1;}}));(Translator$0.prototype["dump_store"]=(function dump_store(){let rval$0;let $targ$4;let __at___$3;let self$2;__at___$3=this;self$2=this;rval$0=__at___$3.prepend.join("\n");$targ$4=[];(__at___$3["prepend"]=$targ$4);return rval$0;}));(Translator$0.prototype["mangle"]=(function mangle(name$2){let i$0;let tr$0;let r$0;let __at___$4;let self$3;__at___$4=this;self$3=this;tr$0=({"+":"__plus__","-":"__minus__","*":"__asterisk__","/":"__slash__","%":"__percent__","^":"__caret__","#":"__hash__","&":"__amp__","|":"__pipe__","@":"__at__","!":"__bang__","?":"__qmark__","=":"__equal__","<":"__lt__",">":"__gt__","~":"__tilde__",".":"__dot__",":":"__colon__","'":"__quote__"});r$0=[];i$0=0;$4:for(null;(i$0<name$2.length);(++i$0)){let c$0;c$0=send(name$2,i$0);r$0.push((send(tr$0,c$0)||c$0));}return r$0.join("");}));(Translator$0.prototype["body"]=(function body(orig$0,mode$0){let t0$2;let t1$1;let t2$0;let x$3;let stmts$0;let ret$0;let m$6;let acc$1;let temp$3;let stmts$1;let ret$1;let other$0;let variable$0;let t0$3;let m$5$0;let $targ$5;let b$0;let trst$0;let __at___$5;let self$4;__at___$5=this;self$4=this;$targ$5=orig$0;t0$2=getProjector(Body$0)($targ$5);if((t0$2[0]&&((t1$1=t0$2[1]),(t2$0=t1$1.length),(t2$0>=0)))){b$0=Array.prototype.slice.call(t1$1,0);}else{___match_error($targ$5,"Body! {*b}");}trst$0=(function trst(stmt$0){return __at___$5.translate(stmt$0,"stmt");});m$5$0=mode$0;if((m$5$0==="expr")){x$3=["send",["lambda",[],orig$0],["array"]];return __at___$5.translate(x$3,mode$0);}else{if((m$5$0==="return")){stmts$0=b$0.slice(0,-1);ret$0=send(b$0,(b$0.length-1));return ENode(["splice"],({}),[stmts$0.map(trst$0),__at___$5.translate(ret$0,"return")]);}else{if((m$5$0==="stmt")){return ENode(["splice"],({}),((acc$1=[]),(temp$3=null),(m$6=null),(function(){$5:for(m$6 of b$0){let x$4;x$4=m$6;temp$3=trst$0(x$4);acc$1.push(temp$3);}})(),acc$1));}else{if((Array.isArray(m$5$0)&&((t0$3=m$5$0.length),((t0$3===2)&&(m$5$0[0]==="return"))))){variable$0=m$5$0[1];stmts$1=b$0.slice(0,-1);ret$1=send(b$0,(b$0.length-1));return ENode(["splice"],({}),[stmts$1.map(trst$0),__at___$5.translate(ret$1,mode$0)]);}else{other$0=m$5$0;throw ErrorFactory(["syntax","mode"]).create("Unknown translate mode",({"mode":mode$0}));}}}}}));(Translator$0.prototype["expr"]=(function expr(x$5,temp$4$0){let t0$4;let other$1;let variable$1;let t0$5;let t1$2;let mode$1;let ph$1$0;let __at___$6;let self$5;__at___$6=this;self$5=this;t0$4=temp$4$0;mode$1=t0$4;ph$1$0=t0$4;if((ph$1$0==="expr")){return x$5;}else{if((ph$1$0==="stmt")){return ENode(["splice"],({}),[x$5,";"]);}else{if((ph$1$0==="return")){return ENode(["splice"],({}),["return ",x$5,";"]);}else{t0$5=ph$1$0;t1$2=t0$5.length;if(((t1$2===2)&&(t0$5[0]==="return"))){variable$1=t0$5[1];return ENode(["splice"],({}),[variable$1,"=",x$5,";"]);}else{other$1=ph$1$0;throw ErrorFactory(["syntax","mode"]).create("Unknown translate mode",({"mode":mode$1}));}}}}}));(Translator$0.prototype["op"]=(function op(op$0,a$0,b$1){let $$29192$0;let $$29193$0;let $$29194$0;let t0$6;let t1$3;let t2$1;let m$7$0;let e$0;let __at___$7;let self$6;__at___$7=this;self$6=this;m$7$0=[a$0,b$1];if((($$29192$0=Array.isArray(m$7$0))&&((t0$6=m$7$0.length),(($$29194$0=(t0$6===2))&&((t1$3=m$7$0[0]),(Array.isArray(t1$3)&&((t2$1=t1$3.length),((t2$1===1)&&(t1$3[0]==="void"))))))))){m$7$0[1];e$0=ENode(["splice"],({}),[op$0,__at___$7.translate(b$1,"expr")]);}else{if(($$29194$0&&(m$7$0[0],(t1$3=m$7$0[1]),(Array.isArray(t1$3)&&((t2$1=t1$3.length),((t2$1===1)&&(t1$3[0]==="void"))))))){e$0=ENode(["splice"],({}),[__at___$7.translate(a$0,"expr"),op$0]);}else{e$0=ENode(["splice"],({}),[__at___$7.translate(a$0,"expr"),op$0,__at___$7.translate(b$1,"expr")]);}}return ENode(["splice"],({}),["(",e$0,")"]);}));(Translator$0.prototype["translate"]=(function translate(){let repl$0;let __at___$12;let __at___$11;let __at___$10;let __at___$9;let bridge$$29373$0;let bridge$$29372$0;let other$2;let id$2;let bridge$$29371$0;let m$11$0;let r$1;let t0$9;let t0$10;let x$6;let x$9;let x$8;let m$14$0;let x$7;let x$10;let otherwise$0;let m$13$0;let x$12;let x$11;let $$29586$0;let $$29587$0;let $$29588$0;let t0$11;let m$15$0;let m$16;let acc$2;let temp$5;let x$13;let op$1;let x$15;let codevar$0;let m$17;let acc$3;let temp$6;let r$2;let f$5;let m$18;let acc$4;let temp$9;let v$3;let all_strings$0;let r$3;let m$19$0;let m$20;let acc$5;let temp$10;let r$4;let name$3;let x$20;let other$4;let x$21;let other$5;let bridge$$29295$0;let x$22;let other$6;let bridge$$29294$0;let bridge$$29300$0;let x$23;let other$7;let bridge$$29299$0;let x$24;let x$25;let core$0;let m$21$0;let flatten$0;let m$24;let acc$6;let temp$11;let m$25;let acc$7;let temp$12;let m$26;let acc$8;let temp$13;let xs$0;let m$22$0;let all_args$0;let args$3;let isdecl$0;let x$32;let m$27;let acc$9;let temp$14;let decls$0;let x$33;let x$34;let x$35;let y$3;let t0$20;let t1$10;let m$28$0;let other$10;let other$11;let other$12;let other$13;let other$14;let t0$21;let t0$22;let other$15;let m$30$0;let other$16;let t0$23;let m$29$0;let r$5;let other$17;let x$39;let attempt$0;let v$5;let body$7;let finally$1;let x$38;let y$6;let body$6;let ph$11$0;let x$37;let y$5;let body$5;let ph$10$0;let x$36;let y$4;let z$0;let body$4;let ph$9$0;let test$2;let body$3;let ph$8$0;let label$2;let body$2;let ph$7$0;let value$5;let ph$6$0;let value$4;let all$0;let value$3;let label$1;let label$0;let value$2;let vars$0;let body$1;let s$2;let args$5;let _args$0;let lhs$0;let rhs$1;let obj$0;let msg$3;let rhs$0;let binding$1;let value$0;let ph$5$0;let binding$0;let ph$4$0;let test$1;let pos$1;let neg$0;let ph$3$0;let test$0;let pos$0;let ph$2$0;let bindings$0;let body$0;let generator$0;let args$2;let args$1;let f$4;let msg$2;let f$3;let args$0;let f$2;let msg$1;let s$1;let f$1;let msg$0;let f$0;let v$1;let s$0;let $$29337$0;let $$29338$0;let $$29339$0;let $$29340$0;let $$29341$0;let t0$8;let t1$4;let t2$2;let t3$0;let t4$0;let bridge$$29279$0;let bridge$$29334$0;let m$10$0;let $targ$6;let n$0;let m$9$0;let rval$1;let expr$0;let mode$2;let called$0;let t0$7;let m$8$0;let __at___$8;let self$7;__at___$8=this;self$7=this;m$8$0=arguments;t0$7=m$8$0.length;if(((t0$7>=2)&&(t0$7<=3))){expr$0=m$8$0[0];mode$2=m$8$0[1];if((2>=t0$7)){if(expr$0.called){called$0="send";}else{called$0=false;}}else{called$0=m$8$0[2];}m$10$0=expr$0;if((($$29337$0=Array.isArray(m$10$0))&&((t0$8=m$10$0.length),((t0$8===2)&&(m$10$0[0]==="symbol"))))){s$0=m$10$0[1];rval$1=__at___$8.expr(__at___$8.mangle(s$0),mode$2);}else{if(($$29337$0&&((t0$8===1)&&(m$10$0[0]==="void")))){rval$1=__at___$8.expr("null",mode$2);}else{if(($$29337$0&&((t0$8===2)&&(m$10$0[0]==="value")))){v$1=m$10$0[1];m$11$0=v$1;if((typeof(m$11$0)==="string")){repl$0=({"\"":"\\\"","\n":"\\n","\r":"\\r","\b":"\\b","\\":"\\\\"});v$1=v$1.replace(RegExp("((?:(?:(?:(?:\"|\\\\)|\n)|\r)|\b))","g"),(function(m$12){return send(repl$0,m$12);}));r$1=(("\""+v$1)+"\"");}else{if((m$11$0===(void 0))){r$1="(void 0)";}else{if(getChecker(RegExp)(m$11$0)){__at___$9=String(v$1);__at___$10=__at___$9.slice(1,-1);__at___$11=__at___$10.replace(RegExp("/","g"),"\\/");__at___$12=__at___$11.replace(RegExp("\\n","g"),"\\n");r$1="/".concat(__at___$12).concat("/");}else{bridge$$29371$0=m$11$0;if((((bridge$$29372$0=bridge$$29371$0),(((bridge$$29373$0=bridge$$29372$0),((typeof(bridge$$29373$0)==="number")||(bridge$$29373$0===true)))||(bridge$$29372$0===false)))||(bridge$$29371$0===null))){r$1=String(v$1);}else{if((___hasprop(m$11$0,"::id")&&((id$2=m$11$0["::id"]),id$2))){r$1=__at___$8.translate(__at___$8.register_value(v$1,id$2),mode$2);}else{other$2=m$11$0;throw ErrorFactory(["cannot_serialize"]).create("Cannot serialize value",({"value":v$1}));}}}}}rval$1=__at___$8.expr(r$1,mode$2);}else{if(($$29337$0&&(($$29339$0=(t0$8===3))&&(($$29340$0=(m$10$0[0]==="send"))&&((t1$4=m$10$0[1]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&((t1$4[0]==="variable")&&((t1$4[1]==="___node")&&((t3$0=m$10$0[2]),(Array.isArray(t3$0)&&((t4$0=t3$0.length),((t4$0===2)&&(t3$0[0]==="value"))))))))))))))){f$0=t3$0[1];rval$1=f$0;}else{if(($$29340$0&&((bridge$$29279$0=m$10$0[1]),(((Array.isArray(bridge$$29279$0)&&((t0$9=bridge$$29279$0.length),((t0$9===2)&&((bridge$$29279$0[0]==="symbol")&&(bridge$$29279$0[1]==="___js_fetch")))))||(Array.isArray(bridge$$29279$0)&&((t0$10=bridge$$29279$0.length),((t0$10===2)&&((bridge$$29279$0[0]==="variable")&&(bridge$$29279$0[1]==="___js_fetch"))))))&&((t1$4=m$10$0[2]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===3)&&(t1$4[0]==="array"))))))))){f$1=t1$4[1];msg$0=t1$4[2];x$6=ENode(["splice"],({}),[__at___$8.translate(f$1,"expr"),"[",__at___$8.translate(msg$0,"expr"),"]"]);rval$1=__at___$8.expr(x$6,mode$2);}else{if(($$29340$0&&((f$2=m$10$0[1]),(t1$4=m$10$0[2]),(msg$1=t1$4),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&((t1$4[0]==="value")&&((s$1=t1$4[1]),nequal(called$0,"send"))))))))){m$13$0=null;if(((typeof(s$1)==="string")&&s$1.match(RegExp("(?:^(?:[a-zA-Z_$]+)$)","")))){x$7=ENode(["splice"],({}),[((m$14$0=__at___$8.translate(f$2,"expr")),(getChecker(RegExp("^\\d+$",""))(m$14$0)?((x$8=m$14$0),(("("+x$8)+")")):((x$9=m$14$0),x$9))),".",__at___$8.translate(["symbol",s$1],"expr")]);rval$1=__at___$8.expr(x$7,mode$2);}else{otherwise$0=m$13$0;x$10=ENode(["splice"],({}),[__at___$8.translate(f$2,"expr"),"[",__at___$8.translate(msg$1,"expr"),"]"]);rval$1=__at___$8.expr(x$10,mode$2);}}else{if(($$29340$0&&((f$3=m$10$0[1]),(t1$4=m$10$0[2]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2>=1)&&(t1$4[0]==="array"))))))){args$0=Array.prototype.slice.call(t1$4,1);m$15$0=f$3;if((($$29586$0=Array.isArray(m$15$0))&&((t0$11=m$15$0.length),(($$29588$0=(t0$11===2))&&(m$15$0[0]==="symbol"))))){x$11=m$15$0[1];op$1=send(js_op_table$0,x$11);}else{if(($$29588$0&&(m$15$0[0]==="variable"))){x$12=m$15$0[1];op$1=send(js_op_table2$0,x$12);}else{op$1=null;}}if(op$1){rval$1=__at___$8.expr(__at___$8.op(op$1,args$0[0],args$0[1]),mode$2);}else{x$13=ENode(["splice"],({}),[__at___$8.translate(f$3,"expr",true),"(",join$0(((acc$2=[]),(temp$5=null),(m$16=null),(function(){$6:for(m$16 of args$0){let x$14;x$14=m$16;temp$5=__at___$8.translate(x$14,"expr");acc$2.push(temp$5);}})(),acc$2),","),")"]);rval$1=__at___$8.expr(x$13,mode$2);}}else{if($$29340$0){f$4=m$10$0[1];msg$2=m$10$0[2];codevar$0="send";x$15=ENode(["splice"],({}),[codevar$0,"(",__at___$8.translate(f$4,"expr","send"),",",__at___$8.translate(msg$2,"expr"),(called$0?", true":""),")"]);rval$1=__at___$8.expr(x$15,mode$2);}else{if(($$29337$0&&(($$29339$0=(t0$8>=1))&&(m$10$0[0]==="array")))){args$1=Array.prototype.slice.call(m$10$0,1);r$2=ENode(["splice"],({}),["[",join$0(((acc$3=[]),(temp$6=null),(m$17=null),(function(){$7:for(m$17 of args$1){let x$16;x$16=m$17;temp$6=__at___$8.translate(x$16,"expr");acc$3.push(temp$6);}})(),acc$3),","),"]"]);rval$1=__at___$8.expr(r$2,mode$2);}else{if(($$29339$0&&(m$10$0[0]==="object"))){args$2=Array.prototype.slice.call(m$10$0,1);all_strings$0=args$2.every((function(temp$7$0){let t0$12;let t1$5;let other$3;let v$2;let t0$13;let t1$6;let ph$12$0;let y$0;t0$12=temp$7$0;if((Array.isArray(t0$12)&&((t1$5=t0$12.length),((t1$5===3)&&(t0$12[0]==="array"))))){ph$12$0=t0$12[1];y$0=t0$12[2];}else{___match_error(temp$7$0);}t0$13=ph$12$0;t1$6=t0$13.length;if(((t1$6===2)&&(t0$13[0]==="value"))){v$2=t0$13[1];return true;}else{other$3=ph$12$0;return false;}}));if(all_strings$0){r$3=ENode(["splice"],({}),["({",((f$5=(function f(temp$8$0){let t0$14;let t1$7;let a$1;let b$2;let x$17;let y$1;t0$14=temp$8$0;if((Array.isArray(t0$14)&&((t1$7=t0$14.length),((t1$7===3)&&(t0$14[0]==="array"))))){x$17=t0$14[1];y$1=t0$14[2];}else{___match_error(temp$8$0);}a$1=__at___$8.translate(x$17,"expr");b$2=__at___$8.translate(y$1,"expr");return ENode(["splice"],({}),[a$1,":",b$2]);})),join$0(args$2.map(f$5),",")),"})"]);}else{v$3=gensym$0();r$3=ENode(["splice"],({}),["(function(){let ",v$3,"={};",((acc$4=[]),(temp$9=null),(m$18=null),(function(){$8:for(m$18 of args$2){let x$18;let y$2;let t0$15;let t1$8;t0$15=m$18;if((Array.isArray(t0$15)&&((t1$8=t0$15.length),((t1$8===3)&&(t0$15[0]==="array"))))){x$18=t0$15[1];y$2=t0$15[2];temp$9=ENode(["splice"],({}),[v$3,"[",__at___$8.translate(x$18,"expr"),"]=",__at___$8.translate(y$2,"expr"),";"]);acc$4.push(temp$9);}else{___match_error(m$18);}}})(),acc$4),"return ",v$3,"})()"]);}rval$1=__at___$8.expr(r$3,mode$2);}else{if(($$29337$0&&(((t0$8>=3)&&(t0$8<=4))&&((m$10$0[0]==="lambda")&&((bindings$0=m$10$0[1]),(body$0=m$10$0[2]),(t1$4=((3>=t0$8)?["value",false]:m$10$0[3])),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&(t1$4[0]==="value"))))))))){generator$0=t1$4[1];m$19$0=expr$0.name;if(__in__(m$19$0,jsKeywords$0)){name$3="";}else{if(getChecker(RegExp("^[$_a-zA-Z0-9]*$",""))(m$19$0)){name$3=(" "+expr$0.name);}else{name$3="";}}r$4=ENode(["splice"],({}),["(function",(generator$0?"*":""),name$3,"(",join$0(((acc$5=[]),(temp$10=null),(m$20=null),(function(){$9:for(m$20 of bindings$0){let x$19;x$19=m$20;temp$10=__at___$8.translate(x$19,"expr");acc$5.push(temp$10);}})(),acc$5),","),"){",__at___$8.body(body$0,"return"),"})"]);rval$1=__at___$8.expr(r$4,mode$2);}else{if(($$29337$0&&(($$29339$0=(t0$8===4))&&(($$29340$0=(m$10$0[0]==="if"))&&((test$0=m$10$0[1]),(pos$0=m$10$0[2]),(t1$4=m$10$0[3]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&((t1$4[0]==="value")&&(t1$4[1]===(void 0))))))))))){ph$2$0=mode$2;if((ph$2$0==="expr")){x$20=ENode(["splice"],({}),["(",__at___$8.translate(test$0,"expr"),"?",__at___$8.translate(pos$0,"expr"),":undefined)"]);rval$1=__at___$8.expr(x$20,"expr");}else{other$4=ph$2$0;rval$1=ENode(["splice"],({}),["if(",__at___$8.translate(test$0,"expr"),"){",__at___$8.translate(pos$0,mode$2),"}"]);}}else{if($$29340$0){test$1=m$10$0[1];pos$1=m$10$0[2];neg$0=m$10$0[3];ph$3$0=mode$2;if((ph$3$0==="expr")){x$21=ENode(["splice"],({}),["(",__at___$8.translate(test$1,"expr"),"?",__at___$8.translate(pos$1,"expr"),":",__at___$8.translate(neg$0,"expr"),")"]);rval$1=__at___$8.expr(x$21,"expr");}else{other$5=ph$3$0;rval$1=ENode(["splice"],({}),["if(",__at___$8.translate(test$1,"expr"),"){",__at___$8.translate(pos$1,mode$2),"}else{",__at___$8.translate(neg$0,mode$2),"}"]);}}else{if(($$29337$0&&(($$29339$0=(t0$8===3))&&(($$29340$0=(m$10$0[0]==="declare"))&&((binding$0=m$10$0[1]),(t1$4=m$10$0[2]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&((t1$4[0]==="value")&&(t1$4[1]===(void 0))))))))))){ph$4$0=mode$2;bridge$$29294$0=ph$4$0;if((((bridge$$29295$0=bridge$$29294$0),((bridge$$29295$0==="expr")||(bridge$$29295$0==="return")))||((x$22=bridge$$29294$0),((x$22 instanceof Array)&&(x$22[0]==="return"))))){throw "Invalid in expr ctx";}else{other$6=ph$4$0;if((__at___$8.globvar&&binding$0.top)){rval$1="";}else{rval$1=ENode(["splice"],({}),["let ",__at___$8.translate(binding$0,"expr"),";"]);}}}else{if($$29340$0){binding$1=m$10$0[1];value$0=m$10$0[2];ph$5$0=mode$2;bridge$$29299$0=ph$5$0;if((((bridge$$29300$0=bridge$$29299$0),((bridge$$29300$0==="expr")||(bridge$$29300$0==="return")))||((x$23=bridge$$29299$0),((x$23 instanceof Array)&&(x$23[0]==="return"))))){throw "Invalid in expr ctx";}else{other$7=ph$5$0;rval$1=ENode(["splice"],({}),["let ",__at___$8.translate(binding$1,"expr"),"=",__at___$8.translate(value$0,"expr"),";"]);}}else{if(($$29339$0&&(($$29340$0=(m$10$0[0]==="assign"))&&((t1$4=m$10$0[1]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===3)&&(t1$4[0]==="send")))))))){obj$0=t1$4[1];msg$3=t1$4[2];rhs$0=m$10$0[2];x$24=ENode(["splice"],({}),["(",__at___$8.translate(obj$0,"expr"),"[",__at___$8.translate(msg$3,"expr"),"]=",__at___$8.translate(rhs$0,"expr"),")"]);rval$1=__at___$8.expr(x$24,mode$2);}else{if(($$29340$0&&((lhs$0=t1$4),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&(t1$4[0]==="variable"))))))){t1$4[1];rhs$1=m$10$0[2];m$21$0=mode$2;if((m$21$0==="stmt")){rval$1=__at___$8.translate(rhs$1,["return",__at___$8.translate(lhs$0,"expr")]);}else{core$0=ENode(["splice"],({}),[__at___$8.translate(lhs$0,"expr"),"=",__at___$8.translate(rhs$1,"expr")]);x$25=ENode(["splice"],({}),["(",core$0,")"]);rval$1=__at___$8.expr(x$25,mode$2);}}else{if(($$29337$0&&((t0$8===1)&&(m$10$0[0]==="multi")))){if((mode$2==="stmt")){rval$1="";}else{rval$1="null";}}else{if(($$29337$0&&(($$29339$0=(t0$8>=1))&&(m$10$0[0]==="multi")))){_args$0=Array.prototype.slice.call(m$10$0,1);flatten$0=(function flatten(args$4){let m$23;let res$0;res$0=[];m$23=null;$10:for(m$23 of args$4){let t0$16;let t0$17;let other$8;let more$0;let bridge$$30069$0;bridge$$30069$0=m$23;if(((Array.isArray(bridge$$30069$0)&&((t0$16=bridge$$30069$0.length),((t0$16>=1)&&((bridge$$30069$0[0]==="multi")&&((more$0=Array.prototype.slice.call(bridge$$30069$0,1)),true)))))||(Array.isArray(bridge$$30069$0)&&((t0$17=bridge$$30069$0.length),((t0$17>=1)&&((bridge$$30069$0[0]==="splice")&&((more$0=Array.prototype.slice.call(bridge$$30069$0,1)),true))))))){res$0=res$0.concat(flatten$0(more$0));}else{other$8=m$23;res$0.push(other$8);}}return res$0;});all_args$0=flatten$0(_args$0);acc$6=[];temp$11=null;m$24=null;$11:for(m$24 of all_args$0.slice(0,-1)){let x$26;let x$27;let bridge$$30111$0;let x$28;let x$29;let bridge$$30110$0;let elem$0;let ph$13$0;let t0$18;t0$18=m$24;elem$0=t0$18;ph$13$0=t0$18;bridge$$30110$0=ph$13$0;if((((bridge$$30111$0=bridge$$30110$0),(((x$26=bridge$$30111$0),((x$26 instanceof Array)&&(x$26[0]==="value")))||((x$27=bridge$$30111$0),((x$27 instanceof Array)&&(x$27[0]==="symbol")))))||((x$28=bridge$$30110$0),((x$28 instanceof Array)&&(x$28[0]==="variable"))))){continue $11;}else{x$29=ph$13$0;temp$11=x$29;}acc$6.push(temp$11);}args$3=acc$6;if((all_args$0.length>0)){args$3.push(send(all_args$0,(all_args$0.length-1)));}isdecl$0=(function isdecl(ph$14$0){let other$9;let variable$2;let value$1;let t0$19;let t1$9;t0$19=ph$14$0;t1$9=t0$19.length;if(((t1$9===3)&&(t0$19[0]==="declare"))){variable$2=t0$19[1];value$1=t0$19[2];return true;}else{other$9=ph$14$0;return false;}});m$22$0=mode$2;if((args$3.length===1)){rval$1=__at___$8.translate(args$3[0],mode$2);}else{if(((m$22$0==="expr")&&(!args$3.some(isdecl$0)))){acc$7=[];temp$12=null;m$25=null;$12:for(m$25 of args$3.slice(0,-1)){let x$30;x$30=m$25;temp$12=__at___$8.translate(x$30,"expr");acc$7.push(temp$12);}xs$0=acc$7;xs$0.push(__at___$8.translate(send(args$3,(args$3.length-1)),mode$2));acc$8=[];temp$13=null;m$26=null;$13:for(m$26 of xs$0){let x$31;x$31=m$26;if((x$31!=="")){temp$13=x$31;acc$8.push(temp$13);}else{false;}}xs$0=acc$8;rval$1=ENode(["splice"],({}),["(",join$0(xs$0,","),")"]);}else{rval$1=__at___$8.body(["multi"].concat(args$3),mode$2);}}}else{if(($$29339$0&&(m$10$0[0]==="splice"))){args$5=Array.prototype.slice.call(m$10$0,1);rval$1=__at___$8.translate(["multi"].concat(args$5),mode$2);}else{if(($$29337$0&&((t0$8===2)&&(m$10$0[0]==="variable")))){s$2=m$10$0[1];if(((__at___$8.globvar&&expr$0.top)&&(!__in__(s$2,["this","arguments","typeof"])))){x$32=((__at___$8.globvar+".")+__at___$8.mangle(s$2));}else{x$32=__at___$8.mangle(s$2);}rval$1=__at___$8.expr(x$32,mode$2);}else{if(($$29337$0&&((t0$8===3)&&(m$10$0[0]==="scope")))){vars$0=m$10$0[1];body$1=m$10$0[2];acc$9=[];temp$14=null;m$27=null;$14:for(m$27 of vars$0){let v$4;v$4=m$27;temp$14=["declare",v$4,["value",undefined]];acc$9.push(temp$14);}decls$0=acc$9;rval$1=__at___$8.translate(["multi"].concat(decls$0).concat([body$1]),mode$2);}else{if(($$29337$0&&((t0$8===2)&&(m$10$0[0]==="js_new")))){value$2=m$10$0[1];x$33=ENode(["splice"],({}),["(new ",__at___$8.translate(value$2,"expr"),")"]);rval$1=__at___$8.expr(x$33,mode$2);}else{if(($$29337$0&&(($$29339$0=((t0$8>=1)&&(t0$8<=2)))&&((m$10$0[0]==="js_break")&&((t1$4=((1>=t0$8)?["value",null]:m$10$0[1])),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&(t1$4[0]==="value"))))))))){label$0=t1$4[1];rval$1=ENode(["splice"],({}),["break",(label$0?(" "+label$0):""),";"]);}else{if(($$29339$0&&((m$10$0[0]==="js_continue")&&((t1$4=((1>=t0$8)?["value",null]:m$10$0[1])),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&(t1$4[0]==="value")))))))){label$1=t1$4[1];rval$1=ENode(["splice"],({}),["continue",(label$1?(" "+label$1):""),";"]);}else{if(($$29337$0&&((t0$8===2)&&(m$10$0[0]==="js_return")))){value$3=m$10$0[1];rval$1=ENode(["splice"],({}),["return ",__at___$8.translate(value$3,"expr"),";"]);}else{if(($$29337$0&&((t0$8===3)&&((m$10$0[0]==="js_yield")&&((value$4=m$10$0[1]),(t1$4=m$10$0[2]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&(t1$4[0]==="value"))))))))){all$0=t1$4[1];x$34=ENode(["splice"],({}),["(yield",(all$0?"*":"")," ",__at___$8.translate(value$4,"expr"),")"]);rval$1=__at___$8.expr(x$34,mode$2);}else{if(($$29337$0&&(($$29339$0=(t0$8===2))&&(m$10$0[0]==="js_delete")))){ph$6$0=m$10$0[1];t0$20=ph$6$0;if((Array.isArray(t0$20)&&((t1$10=t0$20.length),((t1$10===3)&&(t0$20[0]==="send"))))){x$35=t0$20[1];y$3=t0$20[2];rval$1=ENode(["splice"],({}),["delete ",__at___$8.translate(x$35,"expr"),"[",__at___$8.translate(y$3,"expr"),"];"]);}else{throw ErrorFactory(["translate","delete"]).create("Invalid argument for delete");}}else{if(($$29339$0&&(m$10$0[0]==="js_throw"))){value$5=m$10$0[1];m$28$0=mode$2;if((m$28$0==="expr")){rval$1=ENode(["splice"],({}),["(function(){throw ",__at___$8.translate(value$5,"expr"),";})()"]);}else{rval$1=ENode(["splice"],({}),["throw ",__at___$8.translate(value$5,"expr"),";"]);}}else{if(($$29337$0&&(($$29339$0=(t0$8===3))&&((m$10$0[0]==="js_label")&&((t1$4=m$10$0[1]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===2)&&(t1$4[0]==="value"))))))))){label$2=t1$4[1];body$2=m$10$0[2];ph$7$0=mode$2;if((ph$7$0==="expr")){rval$1=__at___$8.body(expr$0,"expr");}else{other$10=ph$7$0;rval$1=ENode(["splice"],({}),[label$2,":",__at___$8.translate(body$2,other$10)]);}}else{if(($$29339$0&&(m$10$0[0]==="js_while"))){test$2=m$10$0[1];body$3=m$10$0[2];ph$8$0=mode$2;if((ph$8$0==="expr")){rval$1=__at___$8.body(expr$0,"expr");}else{other$11=ph$8$0;rval$1=ENode(["splice"],({}),["while(",__at___$8.translate(test$2,"expr"),"){",__at___$8.translate(body$3,"stmt"),"}"]);}}else{if(($$29337$0&&((t0$8===5)&&(m$10$0[0]==="js_for")))){x$36=m$10$0[1];y$4=m$10$0[2];z$0=m$10$0[3];body$4=m$10$0[4];ph$9$0=mode$2;if((ph$9$0==="expr")){rval$1=__at___$8.body(expr$0,"expr");}else{other$12=ph$9$0;rval$1=ENode(["splice"],({}),["for(",__at___$8.translate(x$36,"expr"),";",__at___$8.translate(y$4,"expr"),";",__at___$8.translate(z$0,"expr"),"){",__at___$8.translate(body$4,"stmt"),"}"]);}}else{if(($$29337$0&&(($$29339$0=(t0$8===4))&&(m$10$0[0]==="js_for_in")))){x$37=m$10$0[1];y$5=m$10$0[2];body$5=m$10$0[3];ph$10$0=mode$2;if((ph$10$0==="expr")){rval$1=__at___$8.body(expr$0,"expr");}else{other$13=ph$10$0;rval$1=ENode(["splice"],({}),["for(",__at___$8.translate(x$37,"expr")," in ",__at___$8.translate(y$5,"expr"),"){",__at___$8.translate(body$5,"stmt"),"}"]);}}else{if(($$29339$0&&(m$10$0[0]==="js_for_of"))){x$38=m$10$0[1];y$6=m$10$0[2];body$6=m$10$0[3];ph$11$0=mode$2;if((ph$11$0==="expr")){rval$1=__at___$8.body(expr$0,"expr");}else{other$14=ph$11$0;rval$1=ENode(["splice"],({}),["for(",__at___$8.translate(x$38,"expr")," of ",__at___$8.translate(y$6,"expr"),"){",__at___$8.translate(body$6,"stmt"),"}"]);}}else{if(($$29339$0&&((m$10$0[0]==="js_try")&&((attempt$0=m$10$0[1]),(t1$4=m$10$0[2]),(Array.isArray(t1$4)&&((t2$2=t1$4.length),((t2$2===4)&&((t1$4[0]==="lambda")&&((t3$0=t1$4[1]),(Array.isArray(t3$0)&&((t4$0=t3$0.length),((t4$0===1)&&((bridge$$29334$0=t3$0[0]),((Array.isArray(bridge$$29334$0)&&((t0$21=bridge$$29334$0.length),((t0$21===2)&&((bridge$$29334$0[0]==="symbol")&&((v$5=bridge$$29334$0[1]),true)))))||(Array.isArray(bridge$$29334$0)&&((t0$22=bridge$$29334$0.length),((t0$22===2)&&((bridge$$29334$0[0]==="variable")&&((v$5=bridge$$29334$0[1]),true))))))))))))))))))){body$7=t1$4[2];t1$4[3];finally$1=m$10$0[3];m$30$0=mode$2;if((m$30$0==="expr")){r$5=__at___$8.body(expr$0,"expr");}else{other$15=m$30$0;r$5=ENode(["splice"],({}),["try{",__at___$8.translate(attempt$0,"stmt"),"}catch(",v$5,"){",__at___$8.translate(body$7,"stmt"),"}"]);}m$29$0=finally$1;if((Array.isArray(m$29$0)&&((t0$23=m$29$0.length),((t0$23===1)&&(m$29$0[0]==="void"))))){rval$1=r$5;}else{other$16=m$29$0;rval$1=ENode(["splice"],({}),[r$5,"finally{",__at___$8.translate(other$16,"stmt"),"}"]);}}else{if(($$29337$0&&((t0$8===2)&&(m$10$0[0]==="raw")))){x$39=m$10$0[1];rval$1=x$39;}else{other$17=m$10$0;throw other$17;}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}m$9$0=rval$1;if(getChecker(ENode)(m$9$0)){n$0=m$9$0;if((!n$0.props.origin)){$targ$6=expr$0;(n$0.props["origin"]=$targ$6);(void 0);}return n$0;}else{if((typeof(m$9$0)==="string")){return ENode(["splice"],({"origin":expr$0}),rval$1);}else{return ___match_error(m$9$0,"String? ");}}}else{return ___match_error(m$8$0,"{expr, mode, called = if{expr.called, .send, false}}");}}));__amp____colon__(Translator$0,__amp____colon__((($targ$7="Translator"),(accum$0=({})),(accum$0["::name"]=$targ$7),accum$0),(($targ$8=true),(accum$1=({})),(accum$1["::egclass"]=$targ$8),accum$1)));$targ$9=Translator$0;(exports["Translator"]=$targ$9);(void 0);
//# sourceMappingURL=translate-js.js.map

