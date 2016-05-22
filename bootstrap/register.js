
'use strict';require('earlgrey-runtime/6');let $targ$0;let $targ$1;let $targ$6;let $targ$7;let fs$0;let path$0;let sm$0;let $1$0;let version$0;let getCache$0;let load$0;let extensions$0;let install$0;fs$0=require("fs");path$0=require("path");sm$0=require("source-map-support");$1$0=require("./version");version$0=getProperty($1$0,"version","./version");if((typeof(module)==="undefined")){$targ$0=undefined;(global["module"]=$targ$0);(void 0);}if((typeof(JSON)==="undefined")){$targ$1=undefined;(global["JSON"]=$targ$1);(void 0);}sm$0.install();getCache$0=(function getCache(){let rval$0;let rval$1;let bridge$$26554$0;let eg$0;let $3$0;let Source$0;let text$0;let g$1;let $targ$3;let code$0;let map$0;let t0$1;let t1$0;let cachedir$0;let cache$0;let cacheoptsFile$0;let sstat$0;let cstat$0;let cacheopts$0;let newcacheopts$0;let $targ$2;let g$0;let compiled$0;let srcfile$0;let file$0;let opts$0;let t0$0;let m$0$0;m$0$0=arguments;t0$0=m$0$0.length;if(((t0$0>=1)&&(t0$0<=2))){file$0=m$0$0[0];if((1>=t0$0)){opts$0=({});}else{opts$0=m$0$0[1];}cachedir$0=path$0.join(path$0.dirname(file$0),"egcache");cache$0=path$0.join(cachedir$0,path$0.basename(file$0).replace(RegExp(".eg$|$",""),".js"));cacheoptsFile$0=cache$0.replace(RegExp(".js$|$",""),".json");sstat$0=fs$0.statSync(file$0);rval$0=false;try{rval$0=fs$0.statSync(cache$0);rval$0;}catch(excv$0){let e$0;e$0=excv$0;rval$0=null;rval$0;}cstat$0=rval$0;rval$1=false;try{rval$1=JSON.parse(fs$0.readFileSync(cacheoptsFile$0,"utf8"));rval$1;}catch(excv$1){let e$1;e$1=excv$1;rval$1=null;rval$1;}cacheopts$0=rval$1;newcacheopts$0=({"versions":({"ecmascript":(opts$0["es5"]?5:6),"earlgrey":version$0}),"runtime":opts$0.runtime,"parameters":(opts$0.parameters||({}))});if((((((!opts$0.recompile)&&(!opts$0.interactive))&&equal(cacheopts$0,newcacheopts$0))&&cstat$0)&&(sstat$0.mtime.getTime()<cstat$0.mtime.getTime()))){if(opts$0.verbose){console.error(("Using cached file: "+cache$0));}$targ$2=[null,fs$0.readFileSync(cache$0,"utf8"),cache$0];}else{eg$0=require("./earl-grey");$3$0=require("./location");Source$0=getProperty($3$0,"Source","./location");if(opts$0.verbose){console.error(("Compiling: "+file$0));}text$0=fs$0.readFileSync(file$0,"utf8");g$1=eg$0.Generator(__amp__(({"sourceMap":true}),opts$0));$targ$3=g$1.generate(Source$0(text$0,file$0));bridge$$26554$0=$targ$3;if(((___hasprop(bridge$$26554$0,"code")&&((code$0=bridge$$26554$0.code),(___hasprop(bridge$$26554$0,"map")&&((map$0=bridge$$26554$0.map),true))))||((code$0=bridge$$26554$0),(map$0=null),true))){}else{___match_error($targ$3,"{=> code, => map} or code and map is null");}[code$0,map$0];try{try{fs$0.mkdirSync(cachedir$0);}catch(excv$2){let e$2;e$2=excv$2;"ignore error";}fs$0.writeFileSync(cache$0,code$0);fs$0.writeFileSync((cache$0+".map"),map$0);fs$0.writeFileSync(cacheoptsFile$0,JSON.stringify(newcacheopts$0));}catch(excv$3){let e$3;e$3=excv$3;console.error(("Failed to cache compiled version of: "+file$0));}$targ$2=[g$1,code$0,cache$0];}t0$1=$targ$2;if((Array.isArray(t0$1)&&((t1$0=t0$1.length),(t1$0===3)))){g$0=t0$1[0];compiled$0=t0$1[1];srcfile$0=t0$1[2];}else{___match_error($targ$2,"{g, compiled, srcfile}");}[g$0,compiled$0,srcfile$0];return [g$0,compiled$0,srcfile$0];}else{return ___match_error(m$0$0,"{file, opts = {=}}");}});load$0=(function load(opts$1){return (function(module$0,file$1){let t0$2;let t1$1;let $targ$4;let compiled$1;let srcfile$1;$targ$4=getCache$0(file$1,opts$1);t0$2=$targ$4;if((Array.isArray(t0$2)&&((t1$1=t0$2.length),(t1$1===3)))){t0$2[0];compiled$1=t0$2[1];srcfile$1=t0$2[2];}else{___match_error($targ$4,"{_, compiled, srcfile}");}[compiled$1,srcfile$1];return module$0._compile(compiled$1,srcfile$1);});});extensions$0=[".eg"];install$0=(function install(){let xreg$0;let m$2;let acc$0;let temp$0;let req$0;let opts$2;let t0$3;let m$1$0;m$1$0=arguments;t0$3=m$1$0.length;if(((t0$3>=0)&&(t0$3<=1))){if((0>=t0$3)){opts$2=({"recompile":false,"runtime":null});}else{opts$2=m$1$0[0];}req$0=require;if(((xreg$0=req$0.extensions),xreg$0)){acc$0=[];temp$0=null;m$2=null;$4:for(m$2 of extensions$0){let $targ$5;let ext$0;ext$0=m$2;if((!send(xreg$0,ext$0))){$targ$5=load$0(opts$2);(xreg$0[ext$0]=$targ$5);temp$0=(void 0);}acc$0.push(temp$0);}return acc$0;}}else{return ___match_error(m$1$0,"{opts = {recompile = false, runtime = null}}");}});$targ$6=getCache$0;(exports["getCache"]=$targ$6);$targ$7=install$0;(exports["install"]=$targ$7);(void 0);
//# sourceMappingURL=register.js.map

