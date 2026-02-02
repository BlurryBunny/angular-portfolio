import{$ as k,$a as Z1,Aa as G1,Ba as V1,Ca as $1,Da as q,Ea as X1,Gb as V2,Ia as l2,Ib as h2,Ja as Y1,Jb as N,Ka as K1,Lb as r4,M as R,Ma as J1,Nb as e2,O as b,Ob as s4,P as d2,Pb as i4,R as a2,S as h,Sa as G2,T as I,Ta as v2,Ua as Q1,Ub as n4,V as H1,Vb as o4,Wb as f4,a as c2,b as O2,da as _2,ea as W2,ia as I1,nb as c4,oa as U1,pa as q2,qa as O1,qb as a4,ra as M2,rb as l4,sa as j2,ta as L2,ua as X,va as Y,wa as _1,xa as W1,ya as q1,yb as e4,za as j1}from"./chunk-UWO57XFW.js";var r2=class{_doc;constructor(e){this._doc=e}manager},g2=(()=>{class c extends r2{constructor(a){super(a)}supports(a){return!0}addEventListener(a,l,r,s){return a.addEventListener(l,r,s),()=>this.removeEventListener(a,l,r,s)}removeEventListener(a,l,r,s){return a.removeEventListener(l,r,s)}static \u0275fac=function(l){return new(l||c)(h(k))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),S2=new a2(""),J2=(()=>{class c{_zone;_plugins;_eventNameToPlugin=new Map;constructor(a,l){this._zone=l,a.forEach(i=>{i.manager=this});let r=a.filter(i=>!(i instanceof g2));this._plugins=r.slice().reverse();let s=a.find(i=>i instanceof g2);s&&this._plugins.push(s)}addEventListener(a,l,r,s){return this._findPluginFor(l).addEventListener(a,l,r,s)}getZone(){return this._zone}_findPluginFor(a){let l=this._eventNameToPlugin.get(a);if(l)return l;if(l=this._plugins.find(s=>s.supports(a)),!l)throw new R(5101,!1);return this._eventNameToPlugin.set(a,l),l}static \u0275fac=function(l){return new(l||c)(h(S2),h(_2))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),$2="ng-app-id";function t4(c){for(let e of c)e.remove()}function m4(c,e){let a=e.createElement("style");return a.textContent=c,a}function r0(c,e,a,l){let r=c.head?.querySelectorAll(`style[${$2}="${e}"],link[${$2}="${e}"]`);if(r)for(let s of r)s.removeAttribute($2),s instanceof HTMLLinkElement?l.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&a.set(s.textContent,{usage:0,elements:[s]})}function Y2(c,e){let a=e.createElement("link");return a.setAttribute("rel","stylesheet"),a.setAttribute("href",c),a}var Q2=(()=>{class c{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(a,l,r,s={}){this.doc=a,this.appId=l,this.nonce=r,r0(a,l,this.inline,this.external),this.hosts.add(a.head)}addStyles(a,l){for(let r of a)this.addUsage(r,this.inline,m4);l?.forEach(r=>this.addUsage(r,this.external,Y2))}removeStyles(a,l){for(let r of a)this.removeUsage(r,this.inline);l?.forEach(r=>this.removeUsage(r,this.external))}addUsage(a,l,r){let s=l.get(a);s?s.usage++:l.set(a,{usage:1,elements:[...this.hosts].map(i=>this.addElement(i,r(a,this.doc)))})}removeUsage(a,l){let r=l.get(a);r&&(r.usage--,r.usage<=0&&(t4(r.elements),l.delete(a)))}ngOnDestroy(){for(let[,{elements:a}]of[...this.inline,...this.external])t4(a);this.hosts.clear()}addHost(a){this.hosts.add(a);for(let[l,{elements:r}]of this.inline)r.push(this.addElement(a,m4(l,this.doc)));for(let[l,{elements:r}]of this.external)r.push(this.addElement(a,Y2(l,this.doc)))}removeHost(a){this.hosts.delete(a)}addElement(a,l){return this.nonce&&l.setAttribute("nonce",this.nonce),a.appendChild(l)}static \u0275fac=function(l){return new(l||c)(h(k),h(q2),h(j2,8),h(M2))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),X2={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Z2=/%COMP%/g;var u4="%COMP%",s0=`_nghost-${u4}`,i0=`_ngcontent-${u4}`,n0=!0,o0=new a2("",{factory:()=>n0});function f0(c){return i0.replace(Z2,c)}function t0(c){return s0.replace(Z2,c)}function p4(c,e){return e.map(a=>a.replace(Z2,c))}var c1=(()=>{class c{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(a,l,r,s,i,n,o=null,f=null){this.eventManager=a,this.sharedStylesHost=l,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=i,this.ngZone=n,this.nonce=o,this.tracingService=f,this.defaultRenderer=new s2(a,i,n,this.tracingService)}createRenderer(a,l){if(!a||!l)return this.defaultRenderer;let r=this.getOrCreateRenderer(a,l);return r instanceof x2?r.applyToHost(a):r instanceof i2&&r.applyStyles(),r}getOrCreateRenderer(a,l){let r=this.rendererByCompId,s=r.get(l.id);if(!s){let i=this.doc,n=this.ngZone,o=this.eventManager,f=this.sharedStylesHost,z=this.removeStylesOnCompDestroy,m=this.tracingService;switch(l.encapsulation){case L2.Emulated:s=new x2(o,f,l,this.appId,z,i,n,m);break;case L2.ShadowDom:return new C2(o,a,l,i,n,this.nonce,m,f);case L2.ExperimentalIsolatedShadowDom:return new C2(o,a,l,i,n,this.nonce,m);default:s=new i2(o,f,l,z,i,n,m);break}r.set(l.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(a){this.rendererByCompId.delete(a)}static \u0275fac=function(l){return new(l||c)(h(J2),h(Q2),h(q2),h(o0),h(k),h(_2),h(j2),h(K1,8))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),s2=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,a,l,r){this.eventManager=e,this.doc=a,this.ngZone=l,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,a){return a?this.doc.createElementNS(X2[a]||a,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,a){(z4(e)?e.content:e).appendChild(a)}insertBefore(e,a,l){e&&(z4(e)?e.content:e).insertBefore(a,l)}removeChild(e,a){a.remove()}selectRootElement(e,a){let l=typeof e=="string"?this.doc.querySelector(e):e;if(!l)throw new R(-5104,!1);return a||(l.textContent=""),l}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,a,l,r){if(r){a=r+":"+a;let s=X2[r];s?e.setAttributeNS(s,a,l):e.setAttribute(a,l)}else e.setAttribute(a,l)}removeAttribute(e,a,l){if(l){let r=X2[l];r?e.removeAttributeNS(r,a):e.removeAttribute(`${l}:${a}`)}else e.removeAttribute(a)}addClass(e,a){e.classList.add(a)}removeClass(e,a){e.classList.remove(a)}setStyle(e,a,l,r){r&(l2.DashCase|l2.Important)?e.style.setProperty(a,l,r&l2.Important?"important":""):e.style[a]=l}removeStyle(e,a,l){l&l2.DashCase?e.style.removeProperty(a):e.style[a]=""}setProperty(e,a,l){e!=null&&(e[a]=l)}setValue(e,a){e.nodeValue=a}listen(e,a,l,r){if(typeof e=="string"&&(e=e2().getGlobalEventTarget(this.doc,e),!e))throw new R(5102,!1);let s=this.decoratePreventDefault(l);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,a,s)),this.eventManager.addEventListener(e,a,s,r)}decoratePreventDefault(e){return a=>{if(a==="__ngUnwrap__")return e;e(a)===!1&&a.preventDefault()}}};function z4(c){return c.tagName==="TEMPLATE"&&c.content!==void 0}var C2=class extends s2{hostEl;sharedStylesHost;shadowRoot;constructor(e,a,l,r,s,i,n,o){super(e,r,s,n),this.hostEl=a,this.sharedStylesHost=o,this.shadowRoot=a.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let f=l.styles;f=p4(l.id,f);for(let m of f){let d=document.createElement("style");i&&d.setAttribute("nonce",i),d.textContent=m,this.shadowRoot.appendChild(d)}let z=l.getExternalStyles?.();if(z)for(let m of z){let d=Y2(m,r);i&&d.setAttribute("nonce",i),this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,a){return super.appendChild(this.nodeOrShadowRoot(e),a)}insertBefore(e,a,l){return super.insertBefore(this.nodeOrShadowRoot(e),a,l)}removeChild(e,a){return super.removeChild(null,a)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},i2=class extends s2{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,a,l,r,s,i,n,o){super(e,s,i,n),this.sharedStylesHost=a,this.removeStylesOnCompDestroy=r;let f=l.styles;this.styles=o?p4(o,f):f,this.styleUrls=l.getExternalStyles?.(o)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Y1.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},x2=class extends i2{contentAttr;hostAttr;constructor(e,a,l,r,s,i,n,o){let f=r+"-"+l.id;super(e,a,l,s,i,n,o,f),this.contentAttr=f0(f),this.hostAttr=t0(f)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,a){let l=super.createElement(e,a);return super.setAttribute(l,this.contentAttr,""),l}};var b2=class c extends i4{supportsDOMEvents=!0;static makeCurrent(){s4(new c)}onAndCancel(e,a,l,r){return e.addEventListener(a,l,r),()=>{e.removeEventListener(a,l,r)}}dispatchEvent(e,a){e.dispatchEvent(a)}remove(e){e.remove()}createElement(e,a){return a=a||this.getDefaultDocument(),a.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,a){return a==="window"?window:a==="document"?e:a==="body"?e.body:null}getBaseHref(e){let a=z0();return a==null?null:u0(a)}resetBaseElement(){n2=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return n4(document.cookie,e)}},n2=null;function z0(){return n2=n2||document.head.querySelector("base"),n2?n2.getAttribute("href"):null}function u0(c){return new URL(c,document.baseURI).pathname}var p0=(()=>{class c{build(){return new XMLHttpRequest}static \u0275fac=function(l){return new(l||c)};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})(),d4=["alt","control","meta","shift"],d0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},M0={alt:c=>c.altKey,control:c=>c.ctrlKey,meta:c=>c.metaKey,shift:c=>c.shiftKey},M4=(()=>{class c extends r2{constructor(a){super(a)}supports(a){return c.parseEventName(a)!=null}addEventListener(a,l,r,s){let i=c.parseEventName(l),n=c.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>e2().onAndCancel(a,i.domEventName,n,s))}static parseEventName(a){let l=a.toLowerCase().split("."),r=l.shift();if(l.length===0||!(r==="keydown"||r==="keyup"))return null;let s=c._normalizeKey(l.pop()),i="",n=l.indexOf("code");if(n>-1&&(l.splice(n,1),i="code."),d4.forEach(f=>{let z=l.indexOf(f);z>-1&&(l.splice(z,1),i+=f+".")}),i+=s,l.length!=0||s.length===0)return null;let o={};return o.domEventName=r,o.fullKey=i,o}static matchEventFullKeyCode(a,l){let r=d0[a.key]||a.key,s="";return l.indexOf("code.")>-1&&(r=a.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),d4.forEach(i=>{if(i!==r){let n=M0[i];n(a)&&(s+=i+".")}}),s+=r,s===l)}static eventCallback(a,l,r){return s=>{c.matchEventFullKeyCode(s,a)&&r.runGuarded(()=>l(s))}}static _normalizeKey(a){return a==="esc"?"escape":a}static \u0275fac=function(l){return new(l||c)(h(k))};static \u0275prov=b({token:c,factory:c.\u0275fac})}return c})();async function L0(c,e,a){let l=c2({rootComponent:c},v0(e,a));return r4(l)}function v0(c,e){return{platformRef:e?.platformRef,appProviders:[...S0,...c?.providers??[]],platformProviders:x0}}function h0(){b2.makeCurrent()}function g0(){return new W2}function C0(){return U1(document),document}var x0=[{provide:M2,useValue:f4},{provide:O1,useValue:h0,multi:!0},{provide:k,useFactory:C0}];var S0=[{provide:H1,useValue:"root"},{provide:W2,useFactory:g0},{provide:S2,useClass:g2,multi:!0},{provide:S2,useClass:M4,multi:!0},c1,Q2,J2,{provide:J1,useExisting:c1},{provide:o4,useClass:p0},[]];var K7=(()=>{class c{_doc;constructor(a){this._doc=a}getTitle(){return this._doc.title}setTitle(a){this._doc.title=a||""}static \u0275fac=function(l){return new(l||c)(h(k))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var a1=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275prov=b({token:c,factory:function(l){let r=null;return l?r=new(l||c):r=h(N0),r},providedIn:"root"})}return c})(),N0=(()=>{class c extends a1{_doc;constructor(a){super(),this._doc=a}sanitize(a,l){if(l==null)return null;switch(a){case q.NONE:return l;case q.HTML:return Y(l,"HTML")?X(l):$1(this._doc,String(l)).toString();case q.STYLE:return Y(l,"Style")?X(l):l;case q.SCRIPT:if(Y(l,"Script"))return X(l);throw new R(5200,!1);case q.URL:return Y(l,"URL")?X(l):V1(String(l));case q.RESOURCE_URL:if(Y(l,"ResourceURL"))return X(l);throw new R(5201,!1);default:throw new R(5202,!1)}}bypassSecurityTrustHtml(a){return _1(a)}bypassSecurityTrustStyle(a){return W1(a)}bypassSecurityTrustScript(a){return q1(a)}bypassSecurityTrustUrl(a){return j1(a)}bypassSecurityTrustResourceUrl(a){return G1(a)}static \u0275fac=function(l){return new(l||c)(h(k))};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})();var Z7={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]};var c9={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]};var a9={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]};var l9={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]};var e9={prefix:"fas",iconName:"terminal",icon:[512,512,[],"f120","M9.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 256 9.4 118.6zM224 384l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]};var r9={prefix:"fas",iconName:"futbol",icon:[512,512,[9917,"futbol-ball","soccer-ball"],"f1e3","M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6l59.2 0c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"]};var y0={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},s9=y0;var i9={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]};var n9={prefix:"fas",iconName:"dumbbell",icon:[640,512,[],"f44b","M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 256 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 16 16 0c26.5 0 48 21.5 48 48l0 48c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48c0 26.5-21.5 48-48 48l-16 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112-256 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16-16 0c-26.5 0-48-21.5-48-48l0-48c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-48c0-26.5 21.5-48 48-48l16 0 0-16z"]};var w0={prefix:"fas",iconName:"person-swimming",icon:[640,512,[127946,"swimmer"],"f5c4","M552 152a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zM293.4 198.2l-88.6 73.9c1.1 0 2.2-.1 3.3-.1 33.1-.2 66.3 10.2 94.4 31.4 22.1 16.6 29.1 16.6 51.2 0 27.5-20.7 59.9-31.2 92.4-31.4 4.8 0 9.7 .2 14.5 .6-8.3-30-24.3-57.7-46.8-80.2-18.4-18.4-40.6-32.7-65-41.8l-68.6-25.7c-27.4-10.3-58-7.5-83.1 7.6l-53.5 32.1c-15.2 9.1-20.1 28.7-11 43.9s28.7 20.1 43.9 11L230 187.3c8.4-5 18.6-5.9 27.7-2.5l35.7 13.4zm110 181.9c21.3-16.1 49.9-16.1 71.2 0 19 14.4 41.9 28.2 67.2 33.3 26.5 5.4 54.3 .8 80.7-19.1 10.6-8 12.7-23 4.7-33.6s-23-12.7-33.6-4.7c-14.9 11.2-28.6 13.1-42.3 10.3-14.9-3-30.9-11.9-47.8-24.6-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-21.6 16.3-41.3 25.8-58.9 25.7-9.6-.1-19.9-3-31.2-11.5-10.6-8-25.6-5.9-33.6 4.7S7 386.3 17.6 394.3c19.1 14.4 39.4 21 59.8 21.1 33.9 .2 64.3-17.4 88.1-35.3 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9z"]},o9=w0;var f9={prefix:"fas",iconName:"graduation-cap",icon:[576,512,[127891,"mortar-board"],"f19d","M48 195.8l209.2 86.1c9.8 4 20.2 6.1 30.8 6.1s21-2.1 30.8-6.1l242.4-99.8c9-3.7 14.8-12.4 14.8-22.1s-5.8-18.4-14.8-22.1L318.8 38.1C309 34.1 298.6 32 288 32s-21 2.1-30.8 6.1L14.8 137.9C5.8 141.6 0 150.3 0 160L0 456c0 13.3 10.7 24 24 24s24-10.7 24-24l0-260.2zm48 71.7L96 384c0 53 86 96 192 96s192-43 192-96l0-116.6-142.9 58.9c-15.6 6.4-32.2 9.7-49.1 9.7s-33.5-3.3-49.1-9.7L96 267.4z"]};var t9={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var k0={prefix:"fas",iconName:"person-running",icon:[448,512,[127939,"running"],"f70c","M256.5-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM123.6 176c-3.3 0-6.2 2-7.4 5L94.2 235.9c-6.6 16.4-25.2 24.4-41.6 17.8s-24.4-25.2-17.8-41.6l21.9-54.9C67.7 129.9 94.1 112 123.6 112l97.3 0c28.5 0 54.8 15.1 69.1 39.7l32.8 56.3 61.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-61.6 0c-22.8 0-43.8-12.1-55.3-31.8l-10-17.1-20.7 70.4 75.4 22.6c27.7 8.3 41.8 39 30.1 65.5L285.7 509c-7.2 16.2-26.1 23.4-42.2 16.2s-23.4-26.1-16.2-42.2l49.2-110.8-95.9-28.8c-32.7-9.8-52-43.7-43.7-76.8l22.7-90.6-35.9 0zm-8 181c13.3 14.9 30.7 26.3 51.2 32.4l4.7 1.4-6.9 19.3c-5.8 16.3-16 30.8-29.3 41.8L52.9 519.8c-13.6 11.2-33.8 9.3-45-4.3s-9.3-33.8 4.3-45l82.4-67.9c4.5-3.7 7.8-8.5 9.8-13.9L115.6 357z"]},m9=k0;var z9={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M448 64c106 0 192 86 192 192S554 448 448 448l-256 0C86 448 0 362 0 256S86 64 192 64l256 0zM192 176c-13.3 0-24 10.7-24 24l0 32-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-32c0-13.3-10.7-24-24-24zm240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64z"]};function f1(c,e){(e==null||e>c.length)&&(e=c.length);for(var a=0,l=Array(e);a<e;a++)l[a]=c[a];return l}function A0(c){if(Array.isArray(c))return c}function T0(c){if(Array.isArray(c))return f1(c)}function P0(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function L4(c,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,Y4(l.key),l)}}function D0(c,e,a){return e&&L4(c.prototype,e),a&&L4(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function w2(c,e){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=b1(c))||e&&c&&typeof c.length=="number"){a&&(c=a);var l=0,r=function(){};return{s:r,n:function(){return l>=c.length?{done:!0}:{done:!1,value:c[l++]}},e:function(o){throw o},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var o=a.next();return i=o.done,o},e:function(o){n=!0,s=o},f:function(){try{i||a.return==null||a.return()}finally{if(n)throw s}}}}function p(c,e,a){return(e=Y4(e))in c?Object.defineProperty(c,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[e]=a,c}function F0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function R0(c,e){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var l,r,s,i,n=[],o=!0,f=!1;try{if(s=(a=a.call(c)).next,e===0){if(Object(a)!==a)return;o=!1}else for(;!(o=(l=s.call(a)).done)&&(n.push(l.value),n.length!==e);o=!0);}catch(z){f=!0,r=z}finally{try{if(!o&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(f)throw r}}return n}}function E0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v4(c,e){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(c);e&&(l=l.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,l)}return a}function t(c){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?v4(Object(a),!0).forEach(function(l){p(c,l,a[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):v4(Object(a)).forEach(function(l){Object.defineProperty(c,l,Object.getOwnPropertyDescriptor(a,l))})}return c}function F2(c,e){return A0(c)||R0(c,e)||b1(c,e)||E0()}function P(c){return T0(c)||F0(c)||b1(c)||B0()}function H0(c,e){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var l=a.call(c,e||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(c)}function Y4(c){var e=H0(c,"string");return typeof e=="symbol"?e:e+""}function T2(c){"@babel/helpers - typeof";return T2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T2(c)}function b1(c,e){if(c){if(typeof c=="string")return f1(c,e);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f1(c,e):void 0}}var h4=function(){},N1={},K4={},J4=null,Q4={mark:h4,measure:h4};try{typeof window<"u"&&(N1=window),typeof document<"u"&&(K4=document),typeof MutationObserver<"u"&&(J4=MutationObserver),typeof performance<"u"&&(Q4=performance)}catch{}var I0=N1.navigator||{},g4=I0.userAgent,C4=g4===void 0?"":g4,O=N1,L=K4,x4=J4,N2=Q4,p9=!!O.document,H=!!L.documentElement&&!!L.head&&typeof L.addEventListener=="function"&&typeof L.createElement=="function",Z4=~C4.indexOf("MSIE")||~C4.indexOf("Trident/"),l1,U0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,O0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,c3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},_0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},a3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],x="classic",z2="duotone",l3="sharp",e3="sharp-duotone",r3="chisel",s3="etch",i3="jelly",n3="jelly-duo",o3="jelly-fill",f3="notdog",t3="notdog-duo",m3="slab",z3="slab-press",u3="thumbprint",p3="utility",d3="utility-duo",M3="utility-fill",L3="whiteboard",W0="Classic",q0="Duotone",j0="Sharp",G0="Sharp Duotone",V0="Chisel",$0="Etch",X0="Jelly",Y0="Jelly Duo",K0="Jelly Fill",J0="Notdog",Q0="Notdog Duo",Z0="Slab",c6="Slab Press",a6="Thumbprint",l6="Utility",e6="Utility Duo",r6="Utility Fill",s6="Whiteboard",v3=[x,z2,l3,e3,r3,s3,i3,n3,o3,f3,t3,m3,z3,u3,p3,d3,M3,L3],d9=(l1={},p(p(p(p(p(p(p(p(p(p(l1,x,W0),z2,q0),l3,j0),e3,G0),r3,V0),s3,$0),i3,X0),n3,Y0),o3,K0),f3,J0),p(p(p(p(p(p(p(p(l1,t3,Q0),m3,Z0),z3,c6),u3,a6),p3,l6),d3,e6),M3,r6),L3,s6)),i6={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},n6={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},o6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),f6={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},h3=["fak","fa-kit","fakd","fa-kit-duotone"],S4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},t6=["kit"],m6="kit",z6="kit-duotone",u6="Kit",p6="Kit Duotone",M9=p(p({},m6,u6),z6,p6),d6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},M6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},L6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},b4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},e1,y2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},v6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],h6="classic",g6="duotone",C6="sharp",x6="sharp-duotone",S6="chisel",b6="etch",N6="jelly",y6="jelly-duo",w6="jelly-fill",k6="notdog",A6="notdog-duo",T6="slab",P6="slab-press",D6="thumbprint",F6="utility",R6="utility-duo",E6="utility-fill",B6="whiteboard",H6="Classic",I6="Duotone",U6="Sharp",O6="Sharp Duotone",_6="Chisel",W6="Etch",q6="Jelly",j6="Jelly Duo",G6="Jelly Fill",V6="Notdog",$6="Notdog Duo",X6="Slab",Y6="Slab Press",K6="Thumbprint",J6="Utility",Q6="Utility Duo",Z6="Utility Fill",c8="Whiteboard",L9=(e1={},p(p(p(p(p(p(p(p(p(p(e1,h6,H6),g6,I6),C6,U6),x6,O6),S6,_6),b6,W6),N6,q6),y6,j6),w6,G6),k6,V6),p(p(p(p(p(p(p(p(e1,A6,$6),T6,X6),P6,Y6),D6,K6),F6,J6),R6,Q6),E6,Z6),B6,c8)),a8="kit",l8="kit-duotone",e8="Kit",r8="Kit Duotone",v9=p(p({},a8,e8),l8,r8),s8={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},i8={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},t1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},n8=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],g3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(v6,n8),o8=["solid","regular","light","thin","duotone","brands","semibold"],C3=[1,2,3,4,5,6,7,8,9,10],f8=C3.concat([11,12,13,14,15,16,17,18,19,20]),t8=["aw","fw","pull-left","pull-right"],m8=[].concat(P(Object.keys(i8)),o8,t8,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",y2.GROUP,y2.SWAP_OPACITY,y2.PRIMARY,y2.SECONDARY]).concat(C3.map(function(c){return"".concat(c,"x")})).concat(f8.map(function(c){return"w-".concat(c)})),z8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},E="___FONT_AWESOME___",m1=16,x3="fa",S3="svg-inline--fa",G="data-fa-i2svg",z1="data-fa-pseudo-element",u8="data-fa-pseudo-element-pending",y1="data-prefix",w1="data-icon",N4="fontawesome-i2svg",p8="async",d8=["HTML","HEAD","STYLE","SCRIPT"],b3=["::before","::after",":before",":after"],N3=(function(){try{return!0}catch{return!1}})();function u2(c){return new Proxy(c,{get:function(a,l){return l in a?a[l]:a[x]}})}var y3=t({},c3);y3[x]=t(t(t(t({},{"fa-duotone":"duotone"}),c3[x]),S4.kit),S4["kit-duotone"]);var M8=u2(y3),u1=t({},f6);u1[x]=t(t(t(t({},{duotone:"fad"}),u1[x]),b4.kit),b4["kit-duotone"]);var y4=u2(u1),p1=t({},t1);p1[x]=t(t({},p1[x]),L6.kit);var k1=u2(p1),d1=t({},s8);d1[x]=t(t({},d1[x]),d6.kit);var h9=u2(d1),L8=U0,w3="fa-layers-text",v8=O0,h8=t({},i6),g9=u2(h8),g8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],r1=_0,C8=[].concat(P(t6),P(m8)),f2=O.FontAwesomeConfig||{};function x8(c){var e=L.querySelector("script["+c+"]");if(e)return e.getAttribute(c)}function S8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}L&&typeof L.querySelector=="function"&&(w4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],w4.forEach(function(c){var e=F2(c,2),a=e[0],l=e[1],r=S8(x8(a));r!=null&&(f2[l]=r)}));var w4,k3={styleDefault:"solid",familyDefault:x,cssPrefix:x3,replacementClass:S3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};f2.familyPrefix&&(f2.cssPrefix=f2.familyPrefix);var Q=t(t({},k3),f2);Q.autoReplaceSvg||(Q.observeMutations=!1);var u={};Object.keys(k3).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(a){Q[c]=a,t2.forEach(function(l){return l(u)})},get:function(){return Q[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(e){Q.cssPrefix=e,t2.forEach(function(a){return a(u)})},get:function(){return Q.cssPrefix}});O.FontAwesomeConfig=u;var t2=[];function b8(c){return t2.push(c),function(){t2.splice(t2.indexOf(c),1)}}var U=m1,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N8(c){if(!(!c||!H)){var e=L.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=c;for(var a=L.head.childNodes,l=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(l=s)}return L.head.insertBefore(e,l),c}}var y8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function k4(){for(var c=12,e="";c-- >0;)e+=y8[Math.random()*62|0];return e}function Z(c){for(var e=[],a=(c||[]).length>>>0;a--;)e[a]=c[a];return e}function A1(c){return c.classList?Z(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(e){return e})}function A3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function w8(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,'="').concat(A3(c[a]),'" ')},"").trim()}function R2(c){return Object.keys(c||{}).reduce(function(e,a){return e+"".concat(a,": ").concat(c[a].trim(),";")},"")}function T1(c){return c.size!==D.size||c.x!==D.x||c.y!==D.y||c.rotate!==D.rotate||c.flipX||c.flipY}function k8(c){var e=c.transform,a=c.containerWidth,l=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),n="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(s," ").concat(i," ").concat(n)},f={transform:"translate(".concat(l/2*-1," -256)")};return{outer:r,inner:o,path:f}}function A8(c){var e=c.transform,a=c.width,l=a===void 0?m1:a,r=c.height,s=r===void 0?m1:r,i=c.startCentered,n=i===void 0?!1:i,o="";return n&&Z4?o+="translate(".concat(e.x/U-l/2,"em, ").concat(e.y/U-s/2,"em) "):n?o+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):o+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),o+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var T8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function T3(){var c=x3,e=S3,a=u.cssPrefix,l=u.replacementClass,r=T8;if(a!==c||l!==e){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(n,".".concat(l))}return r}var A4=!1;function s1(){u.autoAddCss&&!A4&&(N8(T3()),A4=!0)}var P8={mixout:function(){return{dom:{css:T3,insertCss:s1}}},hooks:function(){return{beforeDOMElementCreation:function(){s1()},beforeI2svg:function(){s1()}}}},B=O||{};B[E]||(B[E]={});B[E].styles||(B[E].styles={});B[E].hooks||(B[E].hooks={});B[E].shims||(B[E].shims=[]);var T=B[E],P3=[],D3=function(){L.removeEventListener("DOMContentLoaded",D3),P2=1,P3.map(function(e){return e()})},P2=!1;H&&(P2=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),P2||L.addEventListener("DOMContentLoaded",D3));function D8(c){H&&(P2?setTimeout(c,0):P3.push(c))}function p2(c){var e=c.tag,a=c.attributes,l=a===void 0?{}:a,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?A3(c):"<".concat(e," ").concat(w8(l),">").concat(s.map(p2).join(""),"</").concat(e,">")}function T4(c,e,a){if(c&&c[e]&&c[e][a])return{prefix:e,iconName:a,icon:c[e][a]}}var F8=function(e,a){return function(l,r,s,i){return e.call(a,l,r,s,i)}},i1=function(e,a,l,r){var s=Object.keys(e),i=s.length,n=r!==void 0?F8(a,r):a,o,f,z;for(l===void 0?(o=1,z=e[s[0]]):(o=0,z=l);o<i;o++)f=s[o],z=n(z,e[f],f,e);return z};function F3(c){return P(c).length!==1?null:c.codePointAt(0).toString(16)}function P4(c){return Object.keys(c).reduce(function(e,a){var l=c[a],r=!!l.icon;return r?e[l.iconName]=l.icon:e[a]=l,e},{})}function M1(c,e){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=a.skipHooks,r=l===void 0?!1:l,s=P4(e);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(c,P4(e)):T.styles[c]=t(t({},T.styles[c]||{}),s),c==="fas"&&M1("fa",e)}var m2=T.styles,R8=T.shims,R3=Object.keys(k1),E8=R3.reduce(function(c,e){return c[e]=Object.keys(k1[e]),c},{}),P1=null,E3={},B3={},H3={},I3={},U3={};function B8(c){return~C8.indexOf(c)}function H8(c,e){var a=e.split("-"),l=a[0],r=a.slice(1).join("-");return l===c&&r!==""&&!B8(r)?r:null}var O3=function(){var e=function(s){return i1(m2,function(i,n,o){return i[o]=i1(n,s,{}),i},{})};E3=e(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var n=s[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=i})}return r}),B3=e(function(r,s,i){if(r[i]=i,s[2]){var n=s[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=i})}return r}),U3=e(function(r,s,i){var n=s[2];return r[i]=i,n.forEach(function(o){r[o]=i}),r});var a="far"in m2||u.autoFetchSvg,l=i1(R8,function(r,s){var i=s[0],n=s[1],o=s[2];return n==="far"&&!a&&(n="fas"),typeof i=="string"&&(r.names[i]={prefix:n,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});H3=l.names,I3=l.unicodes,P1=E2(u.styleDefault,{family:u.familyDefault})};b8(function(c){P1=E2(c.styleDefault,{family:u.familyDefault})});O3();function D1(c,e){return(E3[c]||{})[e]}function I8(c,e){return(B3[c]||{})[e]}function j(c,e){return(U3[c]||{})[e]}function _3(c){return H3[c]||{prefix:null,iconName:null}}function U8(c){var e=I3[c],a=D1("fas",c);return e||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function _(){return P1}var W3=function(){return{prefix:null,iconName:null,rest:[]}};function O8(c){var e=x,a=R3.reduce(function(l,r){return l[r]="".concat(u.cssPrefix,"-").concat(r),l},{});return v3.forEach(function(l){(c.includes(a[l])||c.some(function(r){return E8[l].includes(r)}))&&(e=l)}),e}function E2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.family,l=a===void 0?x:a,r=M8[l][c];if(l===z2&&!c)return"fad";var s=y4[l][c]||y4[l][r],i=c in T.styles?c:null,n=s||i||null;return n}function _8(c){var e=[],a=null;return c.forEach(function(l){var r=H8(u.cssPrefix,l);r?a=r:l&&e.push(l)}),{iconName:a,rest:e}}function D4(c){return c.sort().filter(function(e,a,l){return l.indexOf(e)===a})}var F4=g3.concat(h3);function B2(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,l=a===void 0?!1:a,r=null,s=D4(c.filter(function(M){return F4.includes(M)})),i=D4(c.filter(function(M){return!F4.includes(M)})),n=s.filter(function(M){return r=M,!a3.includes(M)}),o=F2(n,1),f=o[0],z=f===void 0?null:f,m=O8(s),d=t(t({},_8(i)),{},{prefix:E2(z,{family:m})});return t(t(t({},d),G8({values:c,family:m,styles:m2,config:u,canonical:d,givenPrefix:r})),W8(l,r,d))}function W8(c,e,a){var l=a.prefix,r=a.iconName;if(c||!l||!r)return{prefix:l,iconName:r};var s=e==="fa"?_3(r):{},i=j(l,r);return r=s.iconName||i||r,l=s.prefix||l,l==="far"&&!m2.far&&m2.fas&&!u.autoFetchSvg&&(l="fas"),{prefix:l,iconName:r}}var q8=v3.filter(function(c){return c!==x||c!==z2}),j8=Object.keys(t1).filter(function(c){return c!==x}).map(function(c){return Object.keys(t1[c])}).flat();function G8(c){var e=c.values,a=c.family,l=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,n=i===void 0?{}:i,o=c.config,f=o===void 0?{}:o,z=a===z2,m=e.includes("fa-duotone")||e.includes("fad"),d=f.familyDefault==="duotone",M=l.prefix==="fad"||l.prefix==="fa-duotone";if(!z&&(m||d||M)&&(l.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),!l.prefix&&q8.includes(a)){var g=Object.keys(n).find(function(S){return j8.includes(S)});if(g||f.autoFetchSvg){var v=o6.get(a).defaultShortPrefixId;l.prefix=v,l.iconName=j(l.prefix,l.iconName)||l.iconName}}return(l.prefix==="fa"||s==="fa")&&(l.prefix=_()||"fas"),l}var V8=(function(){function c(){P0(this,c),this.definitions={}}return D0(c,[{key:"add",value:function(){for(var a=this,l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(n){a.definitions[n]=t(t({},a.definitions[n]||{}),i[n]),M1(n,i[n]);var o=k1[x][n];o&&M1(o,i[n]),O3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,l){var r=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(r).map(function(s){var i=r[s],n=i.prefix,o=i.iconName,f=i.icon,z=f[2];a[n]||(a[n]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(a[n][m]=f)}),a[n][o]=f}),a}}])})(),R4=[],K={},J={},$8=Object.keys(J);function X8(c,e){var a=e.mixoutsTo;return R4=c,K={},Object.keys(J).forEach(function(l){$8.indexOf(l)===-1&&delete J[l]}),R4.forEach(function(l){var r=l.mixout?l.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),T2(r[i])==="object"&&Object.keys(r[i]).forEach(function(n){a[i]||(a[i]={}),a[i][n]=r[i][n]})}),l.hooks){var s=l.hooks();Object.keys(s).forEach(function(i){K[i]||(K[i]=[]),K[i].push(s[i])})}l.provides&&l.provides(J)}),a}function L1(c,e){for(var a=arguments.length,l=new Array(a>2?a-2:0),r=2;r<a;r++)l[r-2]=arguments[r];var s=K[c]||[];return s.forEach(function(i){e=i.apply(null,[e].concat(l))}),e}function V(c){for(var e=arguments.length,a=new Array(e>1?e-1:0),l=1;l<e;l++)a[l-1]=arguments[l];var r=K[c]||[];r.forEach(function(s){s.apply(null,a)})}function W(){var c=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[c]?J[c].apply(null,e):void 0}function v1(c){c.prefix==="fa"&&(c.prefix="fas");var e=c.iconName,a=c.prefix||_();if(e)return e=j(a,e)||e,T4(q3.definitions,a,e)||T4(T.styles,a,e)}var q3=new V8,Y8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,V("noAuto")},K8={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H?(V("beforeI2svg",e),W("pseudoElements2svg",e),W("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,D8(function(){Q8({autoReplaceSvgRoot:a}),V("watch",e)})}},J8={icon:function(e){if(e===null)return null;if(T2(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:j(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var a=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],l=E2(e[0]);return{prefix:l,iconName:j(l,a)||a}}if(typeof e=="string"&&(e.indexOf("".concat(u.cssPrefix,"-"))>-1||e.match(L8))){var r=B2(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||_(),iconName:j(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=_();return{prefix:s,iconName:j(s,e)||e}}}},w={noAuto:Y8,config:u,dom:K8,parse:J8,library:q3,findIconDefinition:v1,toHtml:p2},Q8=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=e.autoReplaceSvgRoot,l=a===void 0?L:a;(Object.keys(T.styles).length>0||u.autoFetchSvg)&&H&&u.autoReplaceSvg&&w.dom.i2svg({node:l})};function H2(c,e){return Object.defineProperty(c,"abstract",{get:e}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(l){return p2(l)})}}),Object.defineProperty(c,"node",{get:function(){if(H){var l=L.createElement("div");return l.innerHTML=c.html,l.children}}}),c}function Z8(c){var e=c.children,a=c.main,l=c.mask,r=c.attributes,s=c.styles,i=c.transform;if(T1(i)&&a.found&&!l.found){var n=a.width,o=a.height,f={x:n/o/2,y:.5};r.style=R2(t(t({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function c5(c){var e=c.prefix,a=c.iconName,l=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},r),{},{id:i}),children:l}]}]}function a5(c){var e=["aria-label","aria-labelledby","title","role"];return e.some(function(a){return a in c})}function F1(c){var e=c.icons,a=e.main,l=e.mask,r=c.prefix,s=c.iconName,i=c.transform,n=c.symbol,o=c.maskId,f=c.extra,z=c.watchable,m=z===void 0?!1:z,d=l.found?l:a,M=d.width,g=d.height,v=[u.replacementClass,s?"".concat(u.cssPrefix,"-").concat(s):""].filter(function(F){return f.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(f.classes).join(" "),S={children:[],attributes:t(t({},f.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:f.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(g)})};!a5(f.attributes)&&!f.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),m&&(S.attributes[G]="");var C=t(t({},S),{},{prefix:r,iconName:s,main:a,mask:l,maskId:o,transform:i,symbol:n,styles:t({},f.styles)}),y=l.found&&a.found?W("generateAbstractMask",C)||{children:[],attributes:{}}:W("generateAbstractIcon",C)||{children:[],attributes:{}},A=y.children,$=y.attributes;return C.children=A,C.attributes=$,n?c5(C):Z8(C)}function E4(c){var e=c.content,a=c.width,l=c.height,r=c.transform,s=c.extra,i=c.watchable,n=i===void 0?!1:i,o=t(t({},s.attributes),{},{class:s.classes.join(" ")});n&&(o[G]="");var f=t({},s.styles);T1(r)&&(f.transform=A8({transform:r,startCentered:!0,width:a,height:l}),f["-webkit-transform"]=f.transform);var z=R2(f);z.length>0&&(o.style=z);var m=[];return m.push({tag:"span",attributes:o,children:[e]}),m}function l5(c){var e=c.content,a=c.extra,l=t(t({},a.attributes),{},{class:a.classes.join(" ")}),r=R2(a.styles);r.length>0&&(l.style=r);var s=[];return s.push({tag:"span",attributes:l,children:[e]}),s}var n1=T.styles;function h1(c){var e=c[0],a=c[1],l=c.slice(4),r=F2(l,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(r1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(r1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(r1.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:a,icon:i}}var e5={found:!1,width:512,height:512};function r5(c,e){!N3&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(e,'" is missing.'))}function g1(c,e){var a=e;return e==="fa"&&u.styleDefault!==null&&(e=_()),new Promise(function(l,r){if(a==="fa"){var s=_3(c)||{};c=s.iconName||c,e=s.prefix||e}if(c&&e&&n1[e]&&n1[e][c]){var i=n1[e][c];return l(h1(i))}r5(c,e),l(t(t({},e5),{},{icon:u.showMissingIcons&&c?W("missingIconAbstract")||{}:{}}))})}var B4=function(){},C1=u.measurePerformance&&N2&&N2.mark&&N2.measure?N2:{mark:B4,measure:B4},o2='FA "7.1.0"',s5=function(e){return C1.mark("".concat(o2," ").concat(e," begins")),function(){return j3(e)}},j3=function(e){C1.mark("".concat(o2," ").concat(e," ends")),C1.measure("".concat(o2," ").concat(e),"".concat(o2," ").concat(e," begins"),"".concat(o2," ").concat(e," ends"))},R1={begin:s5,end:j3},k2=function(){};function H4(c){var e=c.getAttribute?c.getAttribute(G):null;return typeof e=="string"}function i5(c){var e=c.getAttribute?c.getAttribute(y1):null,a=c.getAttribute?c.getAttribute(w1):null;return e&&a}function n5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function o5(){if(u.autoReplaceSvg===!0)return A2.replace;var c=A2[u.autoReplaceSvg];return c||A2.replace}function f5(c){return L.createElementNS("http://www.w3.org/2000/svg",c)}function t5(c){return L.createElement(c)}function G3(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.ceFn,l=a===void 0?c.tag==="svg"?f5:t5:a;if(typeof c=="string")return L.createTextNode(c);var r=l(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(G3(i,{ceFn:l}))}),r}function m5(c){var e=" ".concat(c.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var A2={replace:function(e){var a=e[0];if(a.parentNode)if(e[1].forEach(function(r){a.parentNode.insertBefore(G3(r),a)}),a.getAttribute(G)===null&&u.keepOriginalSource){var l=L.createComment(m5(a));a.parentNode.replaceChild(l,a)}else a.remove()},nest:function(e){var a=e[0],l=e[1];if(~A1(a).indexOf(u.replacementClass))return A2.replace(e);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){var s=l[0].attributes.class.split(" ").reduce(function(n,o){return o===u.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});l[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=l.map(function(n){return p2(n)}).join(`
`);a.setAttribute(G,""),a.innerHTML=i}};function I4(c){c()}function V3(c,e){var a=typeof e=="function"?e:k2;if(c.length===0)a();else{var l=I4;u.mutateApproach===p8&&(l=O.requestAnimationFrame||I4),l(function(){var r=o5(),s=R1.begin("mutate");c.map(r),s(),a()})}}var E1=!1;function $3(){E1=!0}function x1(){E1=!1}var D2=null;function U4(c){if(x4&&u.observeMutations){var e=c.treeCallback,a=e===void 0?k2:e,l=c.nodeCallback,r=l===void 0?k2:l,s=c.pseudoElementsCallback,i=s===void 0?k2:s,n=c.observeMutationsRoot,o=n===void 0?L:n;D2=new x4(function(f){if(!E1){var z=_();Z(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!H4(m.addedNodes[0])&&(u.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&H4(m.target)&&~g8.indexOf(m.attributeName))if(m.attributeName==="class"&&i5(m.target)){var d=B2(A1(m.target)),M=d.prefix,g=d.iconName;m.target.setAttribute(y1,M||z),g&&m.target.setAttribute(w1,g)}else n5(m.target)&&r(m.target)})}}),H&&D2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function z5(){D2&&D2.disconnect()}function u5(c){var e=c.getAttribute("style"),a=[];return e&&(a=e.split(";").reduce(function(l,r){var s=r.split(":"),i=s[0],n=s.slice(1);return i&&n.length>0&&(l[i]=n.join(":").trim()),l},{})),a}function p5(c){var e=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),l=c.innerText!==void 0?c.innerText.trim():"",r=B2(A1(c));return r.prefix||(r.prefix=_()),e&&a&&(r.prefix=e,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&l.length>0&&(r.iconName=I8(r.prefix,c.innerText)||D1(r.prefix,F3(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function d5(c){var e=Z(c.attributes).reduce(function(a,l){return a.name!=="class"&&a.name!=="style"&&(a[l.name]=l.value),a},{});return e}function M5(){return{iconName:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function O4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=p5(c),l=a.iconName,r=a.prefix,s=a.rest,i=d5(c),n=L1("parseNodeAttributes",{},c),o=e.styleParser?u5(c):[];return t({iconName:l,prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:i}},n)}var L5=T.styles;function X3(c){var e=u.autoReplaceSvg==="nest"?O4(c,{styleParser:!1}):O4(c);return~e.extra.classes.indexOf(w3)?W("generateLayersText",c,e):W("generateSvgReplacementMutation",c,e)}function v5(){return[].concat(P(h3),P(g3))}function _4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H)return Promise.resolve();var a=L.documentElement.classList,l=function(m){return a.add("".concat(N4,"-").concat(m))},r=function(m){return a.remove("".concat(N4,"-").concat(m))},s=u.autoFetchSvg?v5():a3.concat(Object.keys(L5));s.includes("fa")||s.push("fa");var i=[".".concat(w3,":not([").concat(G,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(G,"])")})).join(", ");if(i.length===0)return Promise.resolve();var n=[];try{n=Z(c.querySelectorAll(i))}catch{}if(n.length>0)l("pending"),r("complete");else return Promise.resolve();var o=R1.begin("onTree"),f=n.reduce(function(z,m){try{var d=X3(m);d&&z.push(d)}catch(M){N3||M.name==="MissingIcon"&&console.error(M)}return z},[]);return new Promise(function(z,m){Promise.all(f).then(function(d){V3(d,function(){l("active"),l("complete"),r("pending"),typeof e=="function"&&e(),o(),z()})}).catch(function(d){o(),m(d)})})}function h5(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;X3(c).then(function(a){a&&V3([a],e)})}function g5(c){return function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=(e||{}).icon?e:v1(e||{}),r=a.mask;return r&&(r=(r||{}).icon?r:v1(r||{})),c(l,t(t({},a),{},{mask:r}))}}var C5=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.transform,r=l===void 0?D:l,s=a.symbol,i=s===void 0?!1:s,n=a.mask,o=n===void 0?null:n,f=a.maskId,z=f===void 0?null:f,m=a.classes,d=m===void 0?[]:m,M=a.attributes,g=M===void 0?{}:M,v=a.styles,S=v===void 0?{}:v;if(e){var C=e.prefix,y=e.iconName,A=e.icon;return H2(t({type:"icon"},e),function(){return V("beforeDOMElementCreation",{iconDefinition:e,params:a}),F1({icons:{main:h1(A),mask:o?h1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:y,transform:t(t({},D),r),symbol:i,maskId:z,extra:{attributes:g,styles:S,classes:d}})})}},x5={mixout:function(){return{icon:g5(C5)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=_4,a.nodeCallback=h5,a}}},provides:function(e){e.i2svg=function(a){var l=a.node,r=l===void 0?L:l,s=a.callback,i=s===void 0?function(){}:s;return _4(r,i)},e.generateSvgReplacementMutation=function(a,l){var r=l.iconName,s=l.prefix,i=l.transform,n=l.symbol,o=l.mask,f=l.maskId,z=l.extra;return new Promise(function(m,d){Promise.all([g1(r,s),o.iconName?g1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var g=F2(M,2),v=g[0],S=g[1];m([a,F1({icons:{main:v,mask:S},prefix:s,iconName:r,transform:i,symbol:n,maskId:f,extra:z,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(a){var l=a.children,r=a.attributes,s=a.main,i=a.transform,n=a.styles,o=R2(n);o.length>0&&(r.style=o);var f;return T1(i)&&(f=W("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),l.push(f||s.icon),{children:l,attributes:r}}}},S5={mixout:function(){return{layer:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.classes,s=r===void 0?[]:r;return H2({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:a,params:l});var i=[];return a(function(n){Array.isArray(n)?n.map(function(o){i=i.concat(o.abstract)}):i=i.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(P(s)).join(" ")},children:i}]})}}}},b5={mixout:function(){return{counter:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.title,s=r===void 0?null:r,i=l.classes,n=i===void 0?[]:i,o=l.attributes,f=o===void 0?{}:o,z=l.styles,m=z===void 0?{}:z;return H2({type:"counter",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:l}),l5({content:a.toString(),title:s,extra:{attributes:f,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(P(n))}})})}}}},N5={mixout:function(){return{text:function(a){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=l.transform,s=r===void 0?D:r,i=l.classes,n=i===void 0?[]:i,o=l.attributes,f=o===void 0?{}:o,z=l.styles,m=z===void 0?{}:z;return H2({type:"text",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:l}),E4({content:a,transform:t(t({},D),s),extra:{attributes:f,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(P(n))}})})}}},provides:function(e){e.generateLayersText=function(a,l){var r=l.transform,s=l.extra,i=null,n=null;if(Z4){var o=parseInt(getComputedStyle(a).fontSize,10),f=a.getBoundingClientRect();i=f.width/o,n=f.height/o}return Promise.resolve([a,E4({content:a.innerHTML,width:i,height:n,transform:r,extra:s,watchable:!0})])}}},Y3=new RegExp('"',"ug"),W4=[1105920,1112319],q4=t(t(t(t({},{FontAwesome:{normal:"fas",400:"fas"}}),n6),z8),M6),S1=Object.keys(q4).reduce(function(c,e){return c[e.toLowerCase()]=q4[e],c},{}),y5=Object.keys(S1).reduce(function(c,e){var a=S1[e];return c[e]=a[900]||P(Object.entries(a))[0][1],c},{});function w5(c){var e=c.replace(Y3,"");return F3(P(e)[0]||"")}function k5(c){var e=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),l=a.replace(Y3,""),r=l.codePointAt(0),s=r>=W4[0]&&r<=W4[1],i=l.length===2?l[0]===l[1]:!1;return s||i||e}function A5(c,e){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),l=parseInt(e),r=isNaN(l)?"normal":l;return(S1[a]||{})[r]||y5[a]}function j4(c,e){var a="".concat(u8).concat(e.replace(":","-"));return new Promise(function(l,r){if(c.getAttribute(a)!==null)return l();var s=Z(c.children),i=s.filter(function(I2){return I2.getAttribute(z1)===e})[0],n=O.getComputedStyle(c,e),o=n.getPropertyValue("font-family"),f=o.match(v8),z=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(i&&!f)return c.removeChild(i),l();if(f&&m!=="none"&&m!==""){var d=n.getPropertyValue("content"),M=A5(o,z),g=w5(d),v=f[0].startsWith("FontAwesome"),S=k5(n),C=D1(M,g),y=C;if(v){var A=U8(g);A.iconName&&A.prefix&&(C=A.iconName,M=A.prefix)}if(C&&!S&&(!i||i.getAttribute(y1)!==M||i.getAttribute(w1)!==y)){c.setAttribute(a,y),i&&c.removeChild(i);var $=M5(),F=$.extra;F.attributes[z1]=e,g1(C,M).then(function(I2){var l0=F1(t(t({},$),{},{icons:{main:I2,mask:W3()},prefix:M,iconName:y,extra:F,watchable:!0})),U2=L.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?c.insertBefore(U2,c.firstChild):c.appendChild(U2),U2.outerHTML=l0.map(function(e0){return p2(e0)}).join(`
`),c.removeAttribute(a),l()}).catch(r)}else l()}else l()})}function T5(c){return Promise.all([j4(c,"::before"),j4(c,"::after")])}function P5(c){return c.parentNode!==document.head&&!~d8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(z1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var D5=function(e){return!!e&&b3.some(function(a){return e.includes(a)})},F5=function(e){if(!e)return[];var a=new Set,l=e.split(/,(?![^()]*\))/).map(function(o){return o.trim()});l=l.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(f){return f.trim()})});var r=w2(l),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(D5(i)){var n=b3.reduce(function(o,f){return o.replace(f,"")},i);n!==""&&n!=="*"&&a.add(n)}}}catch(o){r.e(o)}finally{r.f()}return a};function G4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(H){var a;if(e)a=c;else if(u.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var l=new Set,r=w2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var n=w2(i.cssRules),o;try{for(n.s();!(o=n.n()).done;){var f=o.value,z=F5(f.selectorText),m=w2(z),d;try{for(m.s();!(d=m.n()).done;){var M=d.value;l.add(M)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){n.e(v)}finally{n.f()}}catch(v){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!l.size)return;var g=Array.from(l).join(", ");try{a=c.querySelectorAll(g)}catch{}}return new Promise(function(v,S){var C=Z(a).filter(P5).map(T5),y=R1.begin("searchPseudoElements");$3(),Promise.all(C).then(function(){y(),x1(),v()}).catch(function(){y(),x1(),S()})})}}var R5={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=G4,a}}},provides:function(e){e.pseudoElements2svg=function(a){var l=a.node,r=l===void 0?L:l;u.searchPseudoElements&&G4(r)}}},V4=!1,E5={mixout:function(){return{dom:{unwatch:function(){$3(),V4=!0}}}},hooks:function(){return{bootstrap:function(){U4(L1("mutationObserverCallbacks",{}))},noAuto:function(){z5()},watch:function(a){var l=a.observeMutationsRoot;V4?x1():U4(L1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},$4=function(e){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(l,r){var s=r.toLowerCase().split("-"),i=s[0],n=s.slice(1).join("-");if(i&&n==="h")return l.flipX=!0,l;if(i&&n==="v")return l.flipY=!0,l;if(n=parseFloat(n),isNaN(n))return l;switch(i){case"grow":l.size=l.size+n;break;case"shrink":l.size=l.size-n;break;case"left":l.x=l.x-n;break;case"right":l.x=l.x+n;break;case"up":l.y=l.y-n;break;case"down":l.y=l.y+n;break;case"rotate":l.rotate=l.rotate+n;break}return l},a)},B5={mixout:function(){return{parse:{transform:function(a){return $4(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-transform");return r&&(a.transform=$4(r)),a}}},provides:function(e){e.generateAbstractTransformGrouping=function(a){var l=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,n={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(o," ").concat(f," ").concat(z)},d={transform:"translate(".concat(i/2*-1," -256)")},M={outer:n,inner:m,path:d};return{tag:"g",attributes:t({},M.outer),children:[{tag:"g",attributes:t({},M.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:t(t({},l.icon.attributes),M.path)}]}]}}}},o1={x:0,y:0,width:"100%",height:"100%"};function X4(c){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||e)&&(c.attributes.fill="black"),c}function H5(c){return c.tag==="g"?c.children:[c]}var I5={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-mask"),s=r?B2(r.split(" ").map(function(i){return i.trim()})):W3();return s.prefix||(s.prefix=_()),a.mask=s,a.maskId=l.getAttribute("data-fa-mask-id"),a}}},provides:function(e){e.generateAbstractMask=function(a){var l=a.children,r=a.attributes,s=a.main,i=a.mask,n=a.maskId,o=a.transform,f=s.width,z=s.icon,m=i.width,d=i.icon,M=k8({transform:o,containerWidth:m,iconWidth:f}),g={tag:"rect",attributes:t(t({},o1),{},{fill:"white"})},v=z.children?{children:z.children.map(X4)}:{},S={tag:"g",attributes:t({},M.inner),children:[X4(t({tag:z.tag,attributes:t(t({},z.attributes),M.path)},v))]},C={tag:"g",attributes:t({},M.outer),children:[S]},y="mask-".concat(n||k4()),A="clip-".concat(n||k4()),$={tag:"mask",attributes:t(t({},o1),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,C]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:H5(d)},$]};return l.push(F,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(y,")")},o1)}),{children:l,attributes:r}}}},U5={provides:function(e){var a=!1;O.matchMedia&&(a=O.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var l=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:t(t({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=t(t({},s),{},{attributeName:"opacity"}),n={tag:"circle",attributes:t(t({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||n.children.push({tag:"animate",attributes:t(t({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},i),{},{values:"1;0;1;1;0;1;"})}),l.push(n),l.push({tag:"path",attributes:t(t({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:t(t({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||l.push({tag:"path",attributes:t(t({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},O5={hooks:function(){return{parseNodeAttributes:function(a,l){var r=l.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},_5=[P8,x5,S5,b5,N5,R5,E5,B5,I5,U5,O5];X8(_5,{mixoutsTo:w});var C9=w.noAuto,K3=w.config,x9=w.library,J3=w.dom,Q3=w.parse,S9=w.findIconDefinition,b9=w.toHtml,Z3=w.icon,N9=w.layer,W5=w.text,q5=w.counter;var j5=["*"],G5=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){K3.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(l){return new(l||c)};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),V5=(()=>{class c{definitions={};addIcons(...a){for(let l of a){l.prefix in this.definitions||(this.definitions[l.prefix]={}),this.definitions[l.prefix][l.iconName]=l;for(let r of l.icon[2])typeof r=="string"&&(this.definitions[l.prefix][r]=l)}}addIconPacks(...a){for(let l of a){let r=Object.keys(l).map(s=>l[s]);this.addIcons(...r)}}getIconDefinition(a,l){return a in this.definitions&&l in this.definitions[a]?this.definitions[a][l]:null}static \u0275fac=function(l){return new(l||c)};static \u0275prov=b({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),$5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},X5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},a0=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),Y5=c=>{let e=a0(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:e,"fa-rotate-by":c.rotate!=null&&!e,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(l=>a[l]?l:null).filter(l=>l!=null)},B1=new WeakSet,c0="fa-auto-css";function K5(c,e){if(!e.autoAddCss||B1.has(c))return;if(c.getElementById(c0)!=null){e.autoAddCss=!1,B1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",c0),a.innerHTML=J3.css();let l=c.head.childNodes,r=null;for(let s=l.length-1;s>-1;s--){let i=l[s],n=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}c.head.insertBefore(a,r),e.autoAddCss=!1,B1.add(c)}var J5=c=>c.prefix!==void 0&&c.iconName!==void 0,Q5=(c,e)=>J5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:e,iconName:c},Z5=(()=>{class c{stackItemSize=h2("1x");size=h2();_effect=I1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(l){return new(l||c)};static \u0275dir=Q1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),c7=(()=>{class c{size=h2();classes=V2(()=>{let a=this.size(),l=a?{[`fa-${a}`]:!0}:{};return O2(c2({},l),{"fa-stack":!0})});static \u0275fac=function(l){return new(l||c)};static \u0275cmp=G2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(l,r){l&2&&e4(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:j5,decls:1,vars:0,template:function(l,r){l&1&&(a4(),l4(0))},encapsulation:2,changeDetection:0})}return c})(),H9=(()=>{class c{icon=N();title=N();animation=N();mask=N();flip=N();size=N();pull=N();border=N();inverse=N();symbol=N();rotate=N();fixedWidth=N();transform=N();a11yRole=N();renderedIconHTML=V2(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return X5(),"";let l=this.findIconDefinition(a);if(!l)return"";let r=this.buildParams();K5(this.document,this.config);let s=Z3(l,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=I(k);sanitizer=I(a1);config=I(G5);iconLibrary=I(V5);stackItem=I(Z5,{optional:!0});stack=I(c7,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let l=Q5(a,this.config.defaultPrefix);if("icon"in l)return l;let r=this.iconLibrary.getIconDefinition(l.prefix,l.iconName);return r??($5(l),null)}buildParams(){let a=this.fixedWidth(),l={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?Q3.transform(r):r,i=this.mask(),n=i!=null?this.findIconDefinition(i):null,o={},f=this.a11yRole();f!=null&&(o.role=f);let z={};return l.rotate!=null&&!a0(l.rotate)&&(z["--fa-rotate-angle"]=`${l.rotate}`),{title:this.title(),transform:s,classes:Y5(l),mask:n??void 0,symbol:this.symbol(),attributes:o,styles:z}}static \u0275fac=function(l){return new(l||c)};static \u0275cmp=G2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(l,r){l&2&&(c4("innerHTML",r.renderedIconHTML(),X1),Z1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(l,r){},encapsulation:2,changeDetection:0})}return c})();var I9=(()=>{class c{static \u0275fac=function(l){return new(l||c)};static \u0275mod=v2({type:c});static \u0275inj=d2({})}return c})();export{L0 as a,K7 as b,Z7 as c,c9 as d,a9 as e,l9 as f,e9 as g,r9 as h,s9 as i,i9 as j,n9 as k,o9 as l,f9 as m,t9 as n,m9 as o,z9 as p,H9 as q,I9 as r};
