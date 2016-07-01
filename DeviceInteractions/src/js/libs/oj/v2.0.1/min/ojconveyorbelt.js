/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,f){function a(a,b,e,f,h,k){this.qc=a;this.yia=b;this.Rs=e;this.JA=f;h&&(h.Kpa&&(this.Sia=h.Kpa),h.Apa&&(this.qia=h.Apa),h.W4&&(this.Tia=h.W4),h.J4&&(this.ria=h.J4),h.V4&&(this.Ria=h.V4),h.I4&&(this.pia=h.I4));k&&(k.l5&&(this.O_=k.l5),k.doa&&(this.QI=k.doa),k.ina&&(this.Sp=k.ina),k.Oh&&(this.CA=k.Oh),k.Pi&&(this.UC=k.Pi));this.HA=!0;this.gt=0;a=navigator.userAgent.toLowerCase();if(-1!==a.indexOf("gecko/"))this.T$=!0;else if(-1!==a.indexOf("opera"))this.U$=
!0;else if(-1!==a.indexOf("applewebkit")||-1!==a.indexOf("safari"))this.V$=!0}a.prototype.Rj=function(b){var c=this;if(b){this.oba();this.Fba(this.Sia,this.Tia,this.Ria);this.rba(this.qia,this.ria,this.pia);var e=this.uj,f=this.oD;f?(this.MA=f.offsetWidth,this.LA=e.offsetHeight):(f=this.JD,this.MA=e.offsetWidth,this.LA=f.offsetHeight);this.kC();this.jC();this.qx=function(a){c.Rfa(a)};a.vf(this.qc,"mousewheel",this.qx);a.vf(this.qc,"wheel",this.qx);this.qM=function(a){c.gK(a)};a.vf(this.ge,"touchstart",
this.qM);this.oM=function(a){c.fK(a)};a.vf(this.ge,"touchmove",this.oM);this.fy=function(a){c.dK(a)};a.vf(this.ge,"touchend",this.fy);a.vf(this.ge,"touchcancel",this.fy);this.WK=0}else this.i_();this.PH();this.cT(b);this.Ye(!0);b&&this.CA&&(this.fh=function(){c.Ye(!1)},this.CA.call(this.Sp,this.qc,this.fh),this.CA.call(this.Sp,this.In,this.fh))};a.prototype.destroy=function(){var b=this.qc;a.je(b,"mousewheel",this.qx);a.je(b,"wheel",this.qx);a.je(this.ge,"touchstart",this.qM);a.je(this.ge,"touchmove",
this.oM);a.je(this.ge,"touchend",this.fy);a.je(this.ge,"touchcancel",this.fy);this.fy=this.oM=this.qM=this.qx=null;this.UC&&this.fh&&(this.UC.call(this.Sp,b,this.fh),this.UC.call(this.Sp,this.In,this.fh));this.fh=null;a.lka(this.UH,b);this.lT=null;this.iM?b.removeChild(this.iM):(b.removeChild(this.ge),b.removeChild(this.JD),b.removeChild(this.VM));this.JD=this.VM=this.QK=this.eL=this.oD=this.hM=this.iM=this.UH=this.ge=this.In=this.Ek=this.uj=null;this.PH();this.Rs=this.Sp=this.UC=this.CA=this.QI=
this.O_=this.qc=null};a.mka=function(b,c,e){var f=null;e&&(f=a.dI(),c.appendChild(f));var h=null;for(b=b.childNodes;0<b.length;){h||(h=[]);var k=b[0];if(1===k.nodeType){e||(f=a.dI(),c.appendChild(f));var l=a.aB();l.appendChild(k);f.appendChild(l);h.push(k)}else e?f.appendChild(k):c.appendChild(k)}return h};a.lka=function(a,b){if(a)for(var e=a.childNodes;0<e.length;){var f=e[0];if(1===f.nodeType){for(var h=f.childNodes;0<h.length;){var k=h[0];1===k.nodeType?(b.appendChild(k.firstChild),f.removeChild(k)):
b.appendChild(k)}a.removeChild(f)}else b.appendChild(f)}};a.Dw=function(a){var b=a.ownerDocument.defaultView,e=null;return e=b?b.getComputedStyle(a,null):a.currentStyle};a.Gda=function(b){b=a.Dw(b);return a.og(b.width)};a.Fda=function(b){b=a.Dw(b);return a.og(b.height)};a.og=function(a){return 0<a.length&&"auto"!=a?(a=parseInt(a,10),isNaN(a)&&(a=0),a):0};a.vf=function(a,b,e){a.addEventListener?a.addEventListener(b,e,!1):a.attachEvent&&a.attachEvent("on"+b,e)};a.je=function(a,b,e){a.removeEventListener?
a.removeEventListener(b,e,!1):a.detachEvent&&a.detachEvent("on"+b,e)};a.Lea=function(a){var b=0;return b=null!=a.wheelDelta?a.wheelDelta:null!=a.deltaY?-a.deltaY:-a.detail};a.zU=function(){var a=document.createElement("div");a.style.display="table";return a};a.dI=function(){var a=document.createElement("div");a.style.display="table-row";return a};a.aB=function(){var a=document.createElement("div");a.style.display="table-cell";return a};a.C1=function(a,b,e,f){var h=document.createElement("div"),k=
h.style;k.display="inline-block";h.appendChild(a);b.appendChild(h);e&&(k.maxWidth=h.offsetWidth+"px");f&&(k.maxHeight=h.offsetHeight+"px");return h};a.prototype.Lb=function(){return"horizontal"===this.yia};a.prototype.fha=function(){return!this.WV().hasChildNodes()};a.prototype.i_=function(){this.WK=this.ah();this.YT();this.SL(0);this.kC();this.jC()};a.prototype.PH=function(){this.jD=this.le=null};a.prototype.Ye=function(a){a||this.i_();this.PH();this.le&&this.jD||(this.le=this.ZY());a||this.cT(!1);
a=this.le;this.A$(a.Wf,a.ph)};a.prototype.A$=function(a,b){var e=this.uj.style,f=this.Ek.style;if(this.Lb()){var h=.5*(b-this.LA);e.top=h+"px";f.top=h+"px"}else h=.5*(a-this.MA),this.JA?(e.left=-h+"px",f.left=-h+"px"):(e.left=h+"px",f.left=h+"px")};a.prototype.cT=function(b){var c=this.In,e=this.Lb(),f=e?a.Gda(this.qc):a.Fda(this.qc);(e?c.offsetWidth:c.offsetHeight)>f&&this.k0(f);this.ox=0;this.mx=e?c.offsetWidth-f+this.MA:c.offsetHeight-f+this.LA;0>this.mx&&(this.mx=0);this.kC();this.jC();this.au(b?
this.ox:this.WK,!0);this.WK=0};a.prototype.oba=function(){var b=this,c=this.Lb(),e=document.createElement("div");this.ge=e;var f=e.style;f.overflow="hidden";f.display=this.Ew();f.position="relative";c&&(f.verticalAlign="top");var h=this.qc,k=document.createElement("div");this.In=k;var l=k.style;l.position="relative";c&&(l.display="inline-block");e.appendChild(k);l=null;if(c){this.iM=l=a.zU();var m=a.dI(),n=a.aB();this.hM=n;var p=a.aB(),r=a.aB();this.oD=r;var s=r.style;n.style.verticalAlign="top";
s.verticalAlign="top";p.appendChild(e);m.appendChild(n);m.appendChild(p);m.appendChild(r);l.appendChild(m)}m=a.zU();n=a.mka(h,m,c);if(this.Rs)for(n=[],p=this.Rs.children,r=p.length,s=0;s<r;s++){var q=p[s];1===q.nodeType&&n.push(q)}(this.lT=n)&&0<n.length&&(this.UH=m,k.appendChild(m));l?h.appendChild(l):(this.VM=l=document.createElement("div"),this.JD=m=document.createElement("div"),h.appendChild(l),h.appendChild(e),h.appendChild(m));c&&(c=e.offsetHeight,k=k.offsetHeight,c>k&&(f.marginBottom=k-c+"px"));
a.vf(e,"scroll",function(){b.Zfa()})};a.prototype.Ew=function(){return this.Lb()?"inline-block":"block"};a.prototype.Fba=function(b,c,e){var f=this,h=document.createElement("div");this.Ek=h;b&&h.setAttribute("id",b);h.setAttribute("class",c);h.setAttribute("aria-hidden","true");b=h.style;b.display=this.Ew();b.position="relative";if(c=this.Lb())b.verticalAlign="top";a.vf(h,"click",function(){f.Q_()});this.hM?this.eL=a.C1(h,this.hM,c,!c):this.VM.appendChild(h);e&&h.appendChild(e)};a.prototype.rba=function(b,
c,e){var f=this,h=document.createElement("div");this.uj=h;b&&h.setAttribute("id",b);h.setAttribute("class",c);h.setAttribute("aria-hidden","true");b=h.style;b.display=this.Ew();b.position="relative";if(c=this.Lb())b.verticalAlign="top";a.vf(h,"click",function(){f.P_()});this.oD?this.QK=a.C1(h,this.oD,c,!c):this.JD.appendChild(h);e&&h.appendChild(e)};a.prototype.WV=function(){var a=this.Rs;a||(a=this.In);return a};a.prototype.ZY=function(){var a=this.UH,b=this.lT,e={Wf:0,ph:0},f=[];if(this.WV().hasChildNodes()&&
a&&b&&0<b.length)for(var a=this.Lb(),h=0,h=this.In.offsetWidth,k=0,l=null,m=0;m<b.length;m++){var n=b[m];if(1===n.nodeType){var p=n.offsetWidth,r=n.offsetHeight,s={Wf:p,ph:r,id:n.id};if(a){var q=n.offsetLeft;this.Rs||0!==q||(n=n.parentNode,q=n.offsetLeft);s.start=this.JA?h-(q+p):q;0===m&&(k=s.start);s.start-=k;e.Wf=s.start+p;e.ph=Math.max(e.ph,r);s.end=e.Wf-1}else q=n.offsetTop,this.Rs||0!==q||(n=n.parentNode,q=n.offsetTop),s.start=q,e.Wf=Math.max(e.Wf,p),e.ph=s.start+r,s.end=e.ph-1;l&&l.end>=s.start&&
(p=l.end-(s.start-1),l.end-=p,a?l.Wf-=p:l.ph-=p);f.push(s);l=s}}this.jD=f;return e};a.prototype.wt=function(){if(!this.jD){var a=this.ZY();this.le||(this.le=a)}return this.jD};a.prototype.qJ=function(){return this.QK?this.QK:this.uj};a.prototype.xJ=function(){return this.eL?this.eL:this.Ek};a.prototype.Fla=function(){this.qJ().style.display=this.Ew()};a.prototype.Gla=function(){this.xJ().style.display=this.Ew()};a.prototype.jC=function(){this.qJ().style.display="none"};a.prototype.kC=function(){this.xJ().style.display=
"none"};a.prototype.It=function(){return"none"!==this.qJ().style.display};a.prototype.ex=function(){return"none"!==this.xJ().style.display};a.prototype.SI=function(){return this.Lb()?this.MA:this.LA};a.prototype.vma=function(a){var b=this.SI(),e=this.ah(),f=this.lt(),h=this.GC();a<=this.ox?(this.ex()&&(f+=b,e-=b),this.kC()):h&&(this.ex()||(f-=b,e+=b),this.Gla());a>=this.mx?(this.It()&&(f+=b),this.jC()):h&&(this.It()||(f-=b),this.Fla());this.SL(e);h?this.k0(f):this.YT()};a.prototype.k0=function(a){var b=
this.ge.style;a+="px";this.Lb()?b.maxWidth=a:b.maxHeight=a};a.prototype.YT=function(){var a=this.ge.style;this.Lb()?a.maxWidth="":a.maxHeight=""};a.prototype.SL=function(a){var b=this.ge;this.Lb()?b.scrollLeft=this.XH(a):b.scrollTop=a};a.prototype.lt=function(){var a=this.ge;return this.Lb()?a.offsetWidth:a.offsetHeight};a.prototype.au=function(a,b){this.Bn||(this.HA=!1,this.b0(a,b))};a.prototype.b0=function(b,c){if(!this.fha()){this.Bn=!0;b=this.Vaa(b);this.vma(b);var e=this.O_;if(c||!e||b===this.ah())this.oZ(this.HA?
this.ah():b);else{var f=this;e.call(this.Sp,this.ge,this.XH(b),Math.abs(this.ah()-b)/a.r9,function(){f.oZ(b)})}}};a.prototype.ah=function(){var a=this.ge;return this.Lb()?this.aba(a.scrollLeft):a.scrollTop};a.prototype.GC=function(){var a=this.In,b=this.ge;return this.Lb()?a.offsetWidth>b.offsetWidth:a.offsetHeight>b.offsetHeight};a.prototype.Vaa=function(a){!this.GC()||a<this.ox?a=this.ox:a>this.mx&&(a=this.mx);return a};a.prototype.Rfa=function(b){var c=this.Bn;if(this.GC()&&!this.Bn){var e=a.Lea(b);
0>e&&this.It()?(c=!0,this.P_()):0<e&&this.ex()&&(c=!0,this.Q_())}c&&(b.preventDefault(),b.stopPropagation())};a.prototype.gK=function(a){a=a.touches;this.GC()&&!this.Bn&&1===a.length&&(this.pi=!0,a=a[0],this.uD=this.Lb()?a.pageX:a.pageY,this.rM=this.ah(),this.jma=this.DT(),this.kma=this.ET(),this.l1=this.It(),this.m1=this.ex())};a.prototype.fK=function(b){var c=this.Lb(),e=b.touches[0],e=(c?e.pageX:e.pageY)-this.uD,f=c&&this.JA?0<e:0>e,h=f&&this.l1||!f&&this.m1;if(this.pi&&h){h=this.ge;if(Math.abs(e)<
a.H9*(c?h.offsetWidth:h.offsetHeight)){if(this.au(this.rM-e,!0),this.l1&&!this.It()||this.m1&&!this.ex())this.pi=!1}else this.au(f?this.jma:this.kma,!1),this.pi=!1;this.Nq=!0}this.Nq&&(b.preventDefault(),b.stopPropagation())};a.prototype.dK=function(){this.pi&&this.au(this.rM,!1);this.Nq=this.pi=!1};a.prototype.Zfa=function(){this.HA&&!this.Bn&&this.b0(this.ah(),!0)};a.prototype.oZ=function(a){this.SL(a);this.Rka();this.Bn=!1;if(this.QI){this.gt=this.BT();a=this.CT();var b=this.wt(),e=b[this.gt];
this.gt!==a&&this.ah()>e.start&&this.gt<b.length-2&&(this.gt++,e=b[this.gt]);this.$ca=e.id;this.QI.call(this.Sp,this.$ca)}};a.prototype.Rka=function(){var a=this;window.setTimeout(function(){a&&(a.HA=!0)},0)};a.prototype.P_=function(){this.Bn||this.au(this.DT(),!1)};a.prototype.Q_=function(){this.Bn||this.au(this.ET(),!1)};a.prototype.DT=function(){var a=this.oaa(),b=0;return b=a===this.BT()?this.ah()+this.lt():this.qaa(a)};a.prototype.ET=function(){var a=this.paa(),b=0,b=a===this.CT()?this.ah()-
this.lt():this.naa(a);this.It()||(b+=this.SI());b<this.SI()&&(b=this.ox);return b};a.prototype.qaa=function(a){return this.wt()[a].start};a.prototype.naa=function(a){return this.wt()[a].end-this.lt()+1};a.prototype.BT=function(){var a=this.OA(this.ah());return 0>a?0:a};a.prototype.CT=function(){var a=this.OA(this.ah()+this.lt()-1),b=this.wt();return 0>a?b.length-1:a};a.prototype.paa=function(){var a=this.OA(this.ah()-1);return 0>a?0:a};a.prototype.oaa=function(){var a=this.OA(this.ah()+this.lt()),
b=this.wt();return 0>a?b.length-1:a};a.prototype.OA=function(a){for(var b=this.wt(),e=0;e<b.length;e++)if(a<=b[e].end)return e;return-1};a.prototype.XH=function(a){var b=a;if(this.JA&&this.Lb())if(this.T$)b=-a;else if(this.V$||this.U$)b=this.In.offsetWidth-this.ge.offsetWidth-a;return b};a.prototype.aba=function(a){return this.XH(a)};a.r9=1.1;a.H9=.33;(function(){b.ya("oj.ojConveyorBelt",f.oj.baseComponent,{defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{orientation:"horizontal",contentParent:null},
_ComponentCreate:function(){this._super();this.element.addClass("oj-conveyorbelt oj-component");this.options.disabled&&b.r.warn(d);this.Aa(!0)},refresh:function(){this._super();var a="rtl"===this.dc()!==this.yf;a&&this.nI();this.Aa(a)},vl:function(){this._super();this.Wc&&this.Aa(this.Wc[0])},rn:function(){this._super();this.Wc&&this.Aa(this.Wc[0])},Aa:function(c){if(this.fw()){this.Wc=null;this.yf="rtl"===this.dc();var d=this.element,g=this.options;if(c&&!this.PA){var h=g.orientation,k=null,l=null,
m=null,n=null,p=null;"vertical"!==h?(k="oj-enabled oj-conveyorbelt-overflow-indicator oj-start oj-default",l="oj-enabled oj-conveyorbelt-overflow-indicator oj-end oj-default",m=this.YA("oj-conveyorbelt-overflow-icon oj-start"),n=this.YA("oj-conveyorbelt-overflow-icon oj-end"),p=this.E$):(k="oj-enabled oj-conveyorbelt-overflow-indicator oj-top oj-default",l="oj-enabled oj-conveyorbelt-overflow-indicator oj-bottom oj-default",m=this.YA("oj-conveyorbelt-overflow-icon oj-top"),n=this.YA("oj-conveyorbelt-overflow-icon oj-bottom"),
p=this.F$);var r={};r.W4=k;r.J4=l;r.V4=m;r.I4=n;k={};k.Oh=b.v.Oh;k.Pi=b.v.Pi;"enabled"!==b.ba.FN()&&(k.l5=p);p=null;g.contentParent&&(p=f(g.contentParent)[0]);this.PA=new a(d[0],h,p,this.yf,r,k)}this.PA.Rj(c);c&&(c=d.find(".oj-conveyorbelt-overflow-indicator"),this.ula(c))}else d=!1,this.Wc&&(d=this.Wc[0]),this.Wc=[c||d]},_destroy:function(){this.nI();this.element.removeClass("oj-conveyorbelt oj-component");this._super()},_setOption:function(a,e,f){var h=!1;switch(a){case "containerParent":case "orientation":h=
!0;break;case "disabled":b.r.warn(d)}h&&this.nI();this._super(a,e,f);h&&this.Aa(!0)},nI:function(){var a=this.PA;a&&(this.element.find(".oj-conveyorbelt-overflow-indicator").off(this.eventNamespace),a.destroy());this.PA=null},fw:function(){var a=document.createElement("div"),b=a.style;b.width="10px";b.height="10px";b=this.element[0];b.appendChild(a);var d=!1;try{d=0<a.offsetWidth&&0<a.offsetHeight}catch(f){}b.removeChild(a);return d},ula:function(a){a.on("mousedown"+this.eventNamespace,function(a){f(a.currentTarget).addClass("oj-active")}).on("mouseup"+
this.eventNamespace,function(a){f(a.currentTarget).removeClass("oj-active")}).on("mouseenter"+this.eventNamespace,function(a){a=a.currentTarget;f(a).addClass("oj-hover");f(a).removeClass("oj-default")}).on("mouseleave"+this.eventNamespace,function(a){a=a.currentTarget;f(a).removeClass("oj-hover");f(a).removeClass("oj-active");f(a).addClass("oj-default")})},YA:function(a){var b=document.createElement("span");b.setAttribute("class","oj-component-icon "+a);return b},E$:function(a,b,d,h){var k={};k.scrollLeft=
b;f(a).animate(k,d,"swing",h)},F$:function(a,b,d,h){var k={};k.scrollTop=b;f(a).animate(k,d,"swing",h)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-conveyorbelt-start-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-start")[0]:"oj-conveyorbelt-end-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-end")[0]:"oj-conveyorbelt-top-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-top")[0]:
"oj-conveyorbelt-bottom-overflow-indicator"===a?this.widget().find(".oj-conveyorbelt-overflow-indicator.oj-bottom")[0]:null},getSubIdByNode:function(a){for(var b=this.getNodeBySubId({subId:"oj-conveyorbelt-start-overflow-indicator"}),d=this.getNodeBySubId({subId:"oj-conveyorbelt-end-overflow-indicator"}),f=this.getNodeBySubId({subId:"oj-conveyorbelt-top-overflow-indicator"}),k=this.getNodeBySubId({subId:"oj-conveyorbelt-bottom-overflow-indicator"}),l=this.element[0];a&&a!=l;){if(a===b)return{subId:"oj-conveyorbelt-start-overflow-indicator"};
if(a===d)return{subId:"oj-conveyorbelt-end-overflow-indicator"};if(a===f)return{subId:"oj-conveyorbelt-top-overflow-indicator"};if(a===k)return{subId:"oj-conveyorbelt-bottom-overflow-indicator"};a=a.parentElement}return null}});var d="JET ConveyorBelt: 'disabled' option not supported"})()});