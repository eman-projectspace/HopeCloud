(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fc={exports:{}},nl={},Hc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),Lm=Symbol.for("react.portal"),_m=Symbol.for("react.fragment"),Mm=Symbol.for("react.strict_mode"),Dm=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),zm=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Om=Symbol.for("react.memo"),$m=Symbol.for("react.lazy"),hi=Symbol.iterator;function Fm(e){return e===null||typeof e!="object"?null:(e=hi&&e[hi]||e["@@iterator"],typeof e=="function"?e:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Vc={};function $n(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Uc}$n.prototype.isReactComponent={};$n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wc(){}Wc.prototype=$n.prototype;function lo(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Uc}var ao=lo.prototype=new Wc;ao.constructor=lo;Bc(ao,$n.prototype);ao.isPureReactComponent=!0;var pi=Array.isArray,Yc=Object.prototype.hasOwnProperty,oo={current:null},Qc={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,t,n){var s,l={},a=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Yc.call(t,s)&&!Qc.hasOwnProperty(s)&&(l[s]=t[s]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+2];l.children=c}if(e&&e.defaultProps)for(s in i=e.defaultProps,i)l[s]===void 0&&(l[s]=i[s]);return{$$typeof:Tr,type:e,key:a,ref:o,props:l,_owner:oo.current}}function Hm(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function io(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function Um(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xi=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Um(""+e.key):t.toString(36)}function hs(e,t,n,s,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Tr:case Lm:o=!0}}if(o)return o=e,l=l(o),e=s===""?"."+El(o,0):s,pi(l)?(n="",e!=null&&(n=e.replace(xi,"$&/")+"/"),hs(l,t,n,"",function(d){return d})):l!=null&&(io(l)&&(l=Hm(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(xi,"$&/")+"/")+e)),t.push(l)),1;if(o=0,s=s===""?".":s+":",pi(e))for(var i=0;i<e.length;i++){a=e[i];var c=s+El(a,i);o+=hs(a,t,n,c,l)}else if(c=Fm(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=s+El(a,i++),o+=hs(a,t,n,c,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Yr(e,t,n){if(e==null)return e;var s=[],l=0;return hs(e,s,"","",function(a){return t.call(n,a,l++)}),s}function Bm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ps={transition:null},Vm={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ps,ReactCurrentOwner:oo};function Kc(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!io(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=$n;T.Fragment=_m;T.Profiler=Dm;T.PureComponent=lo;T.StrictMode=Mm;T.Suspense=Am;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;T.act=Kc;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Bc({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=oo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)Yc.call(t,c)&&!Qc.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){i=Array(c);for(var d=0;d<c;d++)i[d]=arguments[d+2];s.children=i}return{$$typeof:Tr,type:e.type,key:l,ref:a,props:s,_owner:o}};T.createContext=function(e){return e={$$typeof:zm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Im,_context:e},e.Consumer=e};T.createElement=Gc;T.createFactory=function(e){var t=Gc.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Tm,render:e}};T.isValidElement=io;T.lazy=function(e){return{$$typeof:$m,_payload:{_status:-1,_result:e},_init:Bm}};T.memo=function(e,t){return{$$typeof:Om,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=ps.transition;ps.transition={};try{e()}finally{ps.transition=t}};T.unstable_act=Kc;T.useCallback=function(e,t){return ke.current.useCallback(e,t)};T.useContext=function(e){return ke.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};T.useEffect=function(e,t){return ke.current.useEffect(e,t)};T.useId=function(){return ke.current.useId()};T.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return ke.current.useMemo(e,t)};T.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};T.useRef=function(e){return ke.current.useRef(e)};T.useState=function(e){return ke.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return ke.current.useTransition()};T.version="18.3.1";Hc.exports=T;var x=Hc.exports;const Wm=Rm(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=x,Qm=Symbol.for("react.element"),Gm=Symbol.for("react.fragment"),Km=Object.prototype.hasOwnProperty,qm=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jm={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var s,l={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Km.call(t,s)&&!Jm.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)l[s]===void 0&&(l[s]=t[s]);return{$$typeof:Qm,type:e,key:a,ref:o,props:l,_owner:qm.current}}nl.Fragment=Gm;nl.jsx=qc;nl.jsxs=qc;Fc.exports=nl;var r=Fc.exports,sa={},Jc={exports:{}},Te={},Xc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,D){var z=R.length;R.push(D);e:for(;0<z;){var q=z-1>>>1,re=R[q];if(0<l(re,D))R[q]=D,R[z]=re,z=q;else break e}}function n(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var D=R[0],z=R.pop();if(z!==D){R[0]=z;e:for(var q=0,re=R.length,Vr=re>>>1;q<Vr;){var Bt=2*(q+1)-1,Cl=R[Bt],Vt=Bt+1,Wr=R[Vt];if(0>l(Cl,z))Vt<re&&0>l(Wr,Cl)?(R[q]=Wr,R[Vt]=z,q=Vt):(R[q]=Cl,R[Bt]=z,q=Bt);else if(Vt<re&&0>l(Wr,z))R[q]=Wr,R[Vt]=z,q=Vt;else break e}}return D}function l(R,D){var z=R.sortIndex-D.sortIndex;return z!==0?z:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var c=[],d=[],f=1,h=null,g=3,y=!1,v=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var D=n(d);D!==null;){if(D.callback===null)s(d);else if(D.startTime<=R)s(d),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(d)}}function k(R){if(w=!1,p(R),!v)if(n(c)!==null)v=!0,ae(N);else{var D=n(d);D!==null&&cn(k,D.startTime-R)}}function N(R,D){v=!1,w&&(w=!1,m(E),E=-1),y=!0;var z=g;try{for(p(D),h=n(c);h!==null&&(!(h.expirationTime>D)||R&&!ye());){var q=h.callback;if(typeof q=="function"){h.callback=null,g=h.priorityLevel;var re=q(h.expirationTime<=D);D=e.unstable_now(),typeof re=="function"?h.callback=re:h===n(c)&&s(c),p(D)}else s(c);h=n(c)}if(h!==null)var Vr=!0;else{var Bt=n(d);Bt!==null&&cn(k,Bt.startTime-D),Vr=!1}return Vr}finally{h=null,g=z,y=!1}}var b=!1,C=null,E=-1,_=5,M=-1;function ye(){return!(e.unstable_now()-M<_)}function ct(){if(C!==null){var R=e.unstable_now();M=R;var D=!0;try{D=C(!0,R)}finally{D?I():(b=!1,C=null)}}else b=!1}var I;if(typeof u=="function")I=function(){u(ct)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ne=X.port2;X.port1.onmessage=ct,I=function(){ne.postMessage(null)}}else I=function(){j(ct,0)};function ae(R){C=R,b||(b=!0,I())}function cn(R,D){E=j(function(){R(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ae(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var z=g;g=D;try{return R()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=g;g=R;try{return D()}finally{g=z}},e.unstable_scheduleCallback=function(R,D,z){var q=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?q+z:q):z=q,R){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=z+re,R={id:f++,callback:D,priorityLevel:R,startTime:z,expirationTime:re,sortIndex:-1},z>q?(R.sortIndex=z,t(d,R),n(c)===null&&R===n(d)&&(w?(m(E),E=-1):w=!0,cn(k,z-q))):(R.sortIndex=re,t(c,R),v||y||(v=!0,ae(N))),R},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(R){var D=g;return function(){var z=g;g=D;try{return R.apply(this,arguments)}finally{g=z}}}})(Zc);Xc.exports=Zc;var Xm=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=x,ze=Xm;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ed=new Set,xr={};function an(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(xr[e]=t,e=0;e<t.length;e++)ed.add(t[e])}var pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,ef=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gi={},yi={};function tf(e){return la.call(yi,e)?!0:la.call(gi,e)?!1:ef.test(e)?yi[e]=!0:(gi[e]=!0,!1)}function nf(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rf(e,t,n,s){if(t===null||typeof t>"u"||nf(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,s,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var co=/[\-:]([a-z])/g;function uo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(co,uo);ue[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(co,uo);ue[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(co,uo);ue[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function mo(e,t,n,s){var l=ue.hasOwnProperty(t)?ue[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rf(t,n,l,s)&&(n=null),s||l===null?tf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,s=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var wt=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),un=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),fo=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),td=Symbol.for("react.provider"),nd=Symbol.for("react.context"),ho=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),po=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),rd=Symbol.for("react.offscreen"),vi=Symbol.iterator;function Yn(e){return e===null||typeof e!="object"?null:(e=vi&&e[vi]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Pl;function nr(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Rl=!1;function Ll(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){s=d}e.call(t.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),a=s.stack.split(`
`),o=l.length-1,i=a.length-1;1<=o&&0<=i&&l[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(l[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||l[o]!==a[i]){var c=`
`+l[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=i);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?nr(e):""}function sf(e){switch(e.tag){case 5:return nr(e.type);case 16:return nr("Lazy");case 13:return nr("Suspense");case 19:return nr("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case un:return"Portal";case aa:return"Profiler";case fo:return"StrictMode";case oa:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nd:return(e.displayName||"Context")+".Consumer";case td:return(e._context.displayName||"Context")+".Provider";case ho:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case po:return t=e.displayName||null,t!==null?t:ca(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return ca(e(t))}catch{}}return null}function lf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ca(t);case 8:return t===fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function af(e){var t=sd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){s=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=af(e))}function ld(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=sd(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function da(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=At(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ad(e,t){t=t.checked,t!=null&&mo(e,"checked",t,!1)}function ua(e,t){ad(e,t);var n=At(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&ma(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ji(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ma(e,t,n){(t!=="number"||Ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var rr=Array.isArray;function Nn(e,t,n,s){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&s&&(e[n].defaultSelected=!0)}else{for(n=""+At(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ki(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(rr(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:At(n)}}function od(e,t){var n=At(t.value),s=At(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Ni(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?id(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,cd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},of=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){of.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function dd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function ud(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,l=dd(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,l):e[n]=l}}var cf=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function xa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,bn=null,Sn=null;function bi(e){if(e=$r(e)){if(typeof ya!="function")throw Error(S(280));var t=e.stateNode;t&&(t=ol(t),ya(e.stateNode,e.type,t))}}function md(e){bn?Sn?Sn.push(e):Sn=[e]:bn=e}function fd(){if(bn){var e=bn,t=Sn;if(Sn=bn=null,bi(e),t)for(e=0;e<t.length;e++)bi(t[e])}}function hd(e,t){return e(t)}function pd(){}var _l=!1;function xd(e,t,n){if(_l)return e(t,n);_l=!0;try{return hd(e,t,n)}finally{_l=!1,(bn!==null||Sn!==null)&&(pd(),fd())}}function yr(e,t){var n=e.stateNode;if(n===null)return null;var s=ol(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var va=!1;if(pt)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){va=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{va=!1}function df(e,t,n,s,l,a,o,i,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var or=!1,Rs=null,Ls=!1,wa=null,uf={onError:function(e){or=!0,Rs=e}};function mf(e,t,n,s,l,a,o,i,c){or=!1,Rs=null,df.apply(uf,arguments)}function ff(e,t,n,s,l,a,o,i,c){if(mf.apply(this,arguments),or){if(or){var d=Rs;or=!1,Rs=null}else throw Error(S(198));Ls||(Ls=!0,wa=d)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Si(e){if(on(e)!==e)throw Error(S(188))}function hf(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,s=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(s=l.return,s!==null){n=s;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Si(l),e;if(a===s)return Si(l),t;a=a.sibling}throw Error(S(188))}if(n.return!==s.return)n=l,s=a;else{for(var o=!1,i=l.child;i;){if(i===n){o=!0,n=l,s=a;break}if(i===s){o=!0,s=l,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,s=l;break}if(i===s){o=!0,s=a,n=l;break}i=i.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==s)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function yd(e){return e=hf(e),e!==null?vd(e):null}function vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vd(e);if(t!==null)return t;e=e.sibling}return null}var wd=ze.unstable_scheduleCallback,Ci=ze.unstable_cancelCallback,pf=ze.unstable_shouldYield,xf=ze.unstable_requestPaint,J=ze.unstable_now,gf=ze.unstable_getCurrentPriorityLevel,go=ze.unstable_ImmediatePriority,jd=ze.unstable_UserBlockingPriority,_s=ze.unstable_NormalPriority,yf=ze.unstable_LowPriority,kd=ze.unstable_IdlePriority,rl=null,ot=null;function vf(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(rl,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:kf,wf=Math.log,jf=Math.LN2;function kf(e){return e>>>=0,e===0?32:31-(wf(e)/jf|0)|0}var qr=64,Jr=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~l;i!==0?s=sr(i):(a&=o,a!==0&&(s=sr(a)))}else o=n&~l,o!==0?s=sr(o):a!==0&&(s=sr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&l)&&(l=s&-s,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-qe(t),l=1<<n,s|=e[n],t&=~l;return s}function Nf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-qe(a),i=1<<o,c=l[o];c===-1?(!(i&n)||i&s)&&(l[o]=Nf(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nd(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function Sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-qe(n),a=1<<l;t[l]=0,s[l]=-1,e[l]=-1,n&=~a}}function yo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-qe(n),l=1<<s;l&t|e[s]&t&&(e[s]|=t),n&=~l}}var F=0;function bd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sd,vo,Cd,Ed,Pd,ka=!1,Xr=[],Pt=null,Rt=null,Lt=null,vr=new Map,wr=new Map,bt=[],Cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ei(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wr.delete(t.pointerId)}}function Gn(e,t,n,s,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:a,targetContainers:[l]},t!==null&&(t=$r(t),t!==null&&vo(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ef(e,t,n,s,l){switch(t){case"focusin":return Pt=Gn(Pt,e,t,n,s,l),!0;case"dragenter":return Rt=Gn(Rt,e,t,n,s,l),!0;case"mouseover":return Lt=Gn(Lt,e,t,n,s,l),!0;case"pointerover":var a=l.pointerId;return vr.set(a,Gn(vr.get(a)||null,e,t,n,s,l)),!0;case"gotpointercapture":return a=l.pointerId,wr.set(a,Gn(wr.get(a)||null,e,t,n,s,l)),!0}return!1}function Rd(e){var t=Qt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=gd(n),t!==null){e.blockedOn=t,Pd(e.priority,function(){Cd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);ga=s,n.target.dispatchEvent(s),ga=null}else return t=$r(n),t!==null&&vo(t),e.blockedOn=n,!1;t.shift()}return!0}function Pi(e,t,n){xs(e)&&n.delete(t)}function Pf(){ka=!1,Pt!==null&&xs(Pt)&&(Pt=null),Rt!==null&&xs(Rt)&&(Rt=null),Lt!==null&&xs(Lt)&&(Lt=null),vr.forEach(Pi),wr.forEach(Pi)}function Kn(e,t){e.blockedOn===t&&(e.blockedOn=null,ka||(ka=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Pf)))}function jr(e){function t(l){return Kn(l,e)}if(0<Xr.length){Kn(Xr[0],e);for(var n=1;n<Xr.length;n++){var s=Xr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Pt!==null&&Kn(Pt,e),Rt!==null&&Kn(Rt,e),Lt!==null&&Kn(Lt,e),vr.forEach(t),wr.forEach(t),n=0;n<bt.length;n++)s=bt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Rd(n),n.blockedOn===null&&bt.shift()}var Cn=wt.ReactCurrentBatchConfig,Ds=!0;function Rf(e,t,n,s){var l=F,a=Cn.transition;Cn.transition=null;try{F=1,wo(e,t,n,s)}finally{F=l,Cn.transition=a}}function Lf(e,t,n,s){var l=F,a=Cn.transition;Cn.transition=null;try{F=4,wo(e,t,n,s)}finally{F=l,Cn.transition=a}}function wo(e,t,n,s){if(Ds){var l=Na(e,t,n,s);if(l===null)Ul(e,t,s,Is,n),Ei(e,s);else if(Ef(l,e,t,n,s))s.stopPropagation();else if(Ei(e,s),t&4&&-1<Cf.indexOf(e)){for(;l!==null;){var a=$r(l);if(a!==null&&Sd(a),a=Na(e,t,n,s),a===null&&Ul(e,t,s,Is,n),a===l)break;l=a}l!==null&&s.stopPropagation()}else Ul(e,t,s,null,n)}}var Is=null;function Na(e,t,n,s){if(Is=null,e=xo(s),e=Qt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Is=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gf()){case go:return 1;case jd:return 4;case _s:case yf:return 16;case kd:return 536870912;default:return 16}default:return 16}}var Ct=null,jo=null,gs=null;function _d(){if(gs)return gs;var e,t=jo,n=t.length,s,l="value"in Ct?Ct.value:Ct.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===l[a-s];s++);return gs=l.slice(e,1<s?1-s:void 0)}function ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Ri(){return!1}function Ae(e){function t(n,s,l,a,o){this._reactName=n,this._targetInst=l,this.type=s,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zr:Ri,this.isPropagationStopped=Ri,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Ae(Fn),Or=G({},Fn,{view:0,detail:0}),_f=Ae(Or),Dl,Il,qn,sl=G({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:No,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(Dl=e.screenX-qn.screenX,Il=e.screenY-qn.screenY):Il=Dl=0,qn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Li=Ae(sl),Mf=G({},sl,{dataTransfer:0}),Df=Ae(Mf),If=G({},Or,{relatedTarget:0}),zl=Ae(If),zf=G({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),Tf=Ae(zf),Af=G({},Fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Of=Ae(Af),$f=G({},Fn,{data:0}),_i=Ae($f),Ff={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uf[e])?!!t[e]:!1}function No(){return Bf}var Vf=G({},Or,{key:function(e){if(e.key){var t=Ff[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:No,charCode:function(e){return e.type==="keypress"?ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wf=Ae(Vf),Yf=G({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mi=Ae(Yf),Qf=G({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:No}),Gf=Ae(Qf),Kf=G({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qf=Ae(Kf),Jf=G({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xf=Ae(Jf),Zf=[9,13,27,32],bo=pt&&"CompositionEvent"in window,ir=null;pt&&"documentMode"in document&&(ir=document.documentMode);var eh=pt&&"TextEvent"in window&&!ir,Md=pt&&(!bo||ir&&8<ir&&11>=ir),Di=" ",Ii=!1;function Dd(e,t){switch(e){case"keyup":return Zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function th(e,t){switch(e){case"compositionend":return Id(t);case"keypress":return t.which!==32?null:(Ii=!0,Di);case"textInput":return e=t.data,e===Di&&Ii?null:e;default:return null}}function nh(e,t){if(fn)return e==="compositionend"||!bo&&Dd(e,t)?(e=_d(),gs=jo=Ct=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Md&&t.locale!=="ko"?null:t.data;default:return null}}var rh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rh[e.type]:t==="textarea"}function zd(e,t,n,s){md(s),t=zs(t,"onChange"),0<t.length&&(n=new ko("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var cr=null,kr=null;function sh(e){Yd(e,0)}function ll(e){var t=xn(e);if(ld(t))return e}function lh(e,t){if(e==="change")return t}var Td=!1;if(pt){var Tl;if(pt){var Al="oninput"in document;if(!Al){var Ti=document.createElement("div");Ti.setAttribute("oninput","return;"),Al=typeof Ti.oninput=="function"}Tl=Al}else Tl=!1;Td=Tl&&(!document.documentMode||9<document.documentMode)}function Ai(){cr&&(cr.detachEvent("onpropertychange",Ad),kr=cr=null)}function Ad(e){if(e.propertyName==="value"&&ll(kr)){var t=[];zd(t,kr,e,xo(e)),xd(sh,t)}}function ah(e,t,n){e==="focusin"?(Ai(),cr=t,kr=n,cr.attachEvent("onpropertychange",Ad)):e==="focusout"&&Ai()}function oh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(kr)}function ih(e,t){if(e==="click")return ll(t)}function ch(e,t){if(e==="input"||e==="change")return ll(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:dh;function Nr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var l=n[s];if(!la.call(t,l)||!et(e[l],t[l]))return!1}return!0}function Oi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $i(e,t){var n=Oi(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oi(n)}}function Od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $d(){for(var e=window,t=Ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ps(e.document)}return t}function So(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uh(e){var t=$d(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Od(n.ownerDocument.documentElement,n)){if(s!==null&&So(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(s.start,l);s=s.end===void 0?a:Math.min(s.end,l),!e.extend&&a>s&&(l=s,s=a,a=l),l=$i(n,a);var o=$i(n,s);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mh=pt&&"documentMode"in document&&11>=document.documentMode,hn=null,ba=null,dr=null,Sa=!1;function Fi(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||hn==null||hn!==Ps(s)||(s=hn,"selectionStart"in s&&So(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),dr&&Nr(dr,s)||(dr=s,s=zs(ba,"onSelect"),0<s.length&&(t=new ko("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=hn)))}function es(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:es("Animation","AnimationEnd"),animationiteration:es("Animation","AnimationIteration"),animationstart:es("Animation","AnimationStart"),transitionend:es("Transition","TransitionEnd")},Ol={},Fd={};pt&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function al(e){if(Ol[e])return Ol[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fd)return Ol[e]=t[n];return e}var Hd=al("animationend"),Ud=al("animationiteration"),Bd=al("animationstart"),Vd=al("transitionend"),Wd=new Map,Hi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Wd.set(e,t),an(t,[e])}for(var $l=0;$l<Hi.length;$l++){var Fl=Hi[$l],fh=Fl.toLowerCase(),hh=Fl[0].toUpperCase()+Fl.slice(1);Ft(fh,"on"+hh)}Ft(Hd,"onAnimationEnd");Ft(Ud,"onAnimationIteration");Ft(Bd,"onAnimationStart");Ft("dblclick","onDoubleClick");Ft("focusin","onFocus");Ft("focusout","onBlur");Ft(Vd,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ph=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function Ui(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,ff(s,t,void 0,e),e.currentTarget=null}function Yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],l=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var o=s.length-1;0<=o;o--){var i=s[o],c=i.instance,d=i.currentTarget;if(i=i.listener,c!==a&&l.isPropagationStopped())break e;Ui(l,i,d),a=c}else for(o=0;o<s.length;o++){if(i=s[o],c=i.instance,d=i.currentTarget,i=i.listener,c!==a&&l.isPropagationStopped())break e;Ui(l,i,d),a=c}}}if(Ls)throw e=wa,Ls=!1,wa=null,e}function U(e,t){var n=t[La];n===void 0&&(n=t[La]=new Set);var s=e+"__bubble";n.has(s)||(Qd(t,e,2,!1),n.add(s))}function Hl(e,t,n){var s=0;t&&(s|=4),Qd(n,e,s,t)}var ts="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[ts]){e[ts]=!0,ed.forEach(function(n){n!=="selectionchange"&&(ph.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ts]||(t[ts]=!0,Hl("selectionchange",!1,t))}}function Qd(e,t,n,s){switch(Ld(t)){case 1:var l=Rf;break;case 4:l=Lf;break;default:l=wo}n=l.bind(null,t,n,e),l=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ul(e,t,n,s,l){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var i=s.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;i!==null;){if(o=Qt(i),o===null)return;if(c=o.tag,c===5||c===6){s=a=o;continue e}i=i.parentNode}}s=s.return}xd(function(){var d=a,f=xo(n),h=[];e:{var g=Wd.get(e);if(g!==void 0){var y=ko,v=e;switch(e){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":y=Wf;break;case"focusin":v="focus",y=zl;break;case"focusout":v="blur",y=zl;break;case"beforeblur":case"afterblur":y=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Li;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gf;break;case Hd:case Ud:case Bd:y=Tf;break;case Vd:y=qf;break;case"scroll":y=_f;break;case"wheel":y=Xf;break;case"copy":case"cut":case"paste":y=Of;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Mi}var w=(t&4)!==0,j=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var u=d,p;u!==null;){p=u;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,m!==null&&(k=yr(u,m),k!=null&&w.push(Sr(u,k,p)))),j)break;u=u.return}0<w.length&&(g=new y(g,v,null,n,f),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==ga&&(v=n.relatedTarget||n.fromElement)&&(Qt(v)||v[xt]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=d,v=v?Qt(v):null,v!==null&&(j=on(v),v!==j||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=d),y!==v)){if(w=Li,k="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=Mi,k="onPointerLeave",m="onPointerEnter",u="pointer"),j=y==null?g:xn(y),p=v==null?g:xn(v),g=new w(k,u+"leave",y,n,f),g.target=j,g.relatedTarget=p,k=null,Qt(f)===d&&(w=new w(m,u+"enter",v,n,f),w.target=p,w.relatedTarget=j,k=w),j=k,y&&v)t:{for(w=y,m=v,u=0,p=w;p;p=dn(p))u++;for(p=0,k=m;k;k=dn(k))p++;for(;0<u-p;)w=dn(w),u--;for(;0<p-u;)m=dn(m),p--;for(;u--;){if(w===m||m!==null&&w===m.alternate)break t;w=dn(w),m=dn(m)}w=null}else w=null;y!==null&&Bi(h,g,y,w,!1),v!==null&&j!==null&&Bi(h,j,v,w,!0)}}e:{if(g=d?xn(d):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var N=lh;else if(zi(g))if(Td)N=ch;else{N=oh;var b=ah}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=ih);if(N&&(N=N(e,d))){zd(h,N,n,f);break e}b&&b(e,g,d),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&ma(g,"number",g.value)}switch(b=d?xn(d):window,e){case"focusin":(zi(b)||b.contentEditable==="true")&&(hn=b,ba=d,dr=null);break;case"focusout":dr=ba=hn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Fi(h,n,f);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":Fi(h,n,f)}var C;if(bo)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fn?Dd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Md&&n.locale!=="ko"&&(fn||E!=="onCompositionStart"?E==="onCompositionEnd"&&fn&&(C=_d()):(Ct=f,jo="value"in Ct?Ct.value:Ct.textContent,fn=!0)),b=zs(d,E),0<b.length&&(E=new _i(E,e,null,n,f),h.push({event:E,listeners:b}),C?E.data=C:(C=Id(n),C!==null&&(E.data=C)))),(C=eh?th(e,n):nh(e,n))&&(d=zs(d,"onBeforeInput"),0<d.length&&(f=new _i("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=C))}Yd(h,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zs(e,t){for(var n=t+"Capture",s=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=yr(e,n),a!=null&&s.unshift(Sr(e,a,l)),a=yr(e,t),a!=null&&s.push(Sr(e,a,l))),e=e.return}return s}function dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bi(e,t,n,s,l){for(var a=t._reactName,o=[];n!==null&&n!==s;){var i=n,c=i.alternate,d=i.stateNode;if(c!==null&&c===s)break;i.tag===5&&d!==null&&(i=d,l?(c=yr(n,a),c!=null&&o.unshift(Sr(n,c,i))):l||(c=yr(n,a),c!=null&&o.push(Sr(n,c,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var xh=/\r\n?/g,gh=/\u0000|\uFFFD/g;function Vi(e){return(typeof e=="string"?e:""+e).replace(xh,`
`).replace(gh,"")}function ns(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(S(425))}function Ts(){}var Ca=null,Ea=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,yh=typeof clearTimeout=="function"?clearTimeout:void 0,Wi=typeof Promise=="function"?Promise:void 0,vh=typeof queueMicrotask=="function"?queueMicrotask:typeof Wi<"u"?function(e){return Wi.resolve(null).then(e).catch(wh)}:Ra;function wh(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,s=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(s===0){e.removeChild(l),jr(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=l}while(n);jr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hn=Math.random().toString(36).slice(2),at="__reactFiber$"+Hn,Cr="__reactProps$"+Hn,xt="__reactContainer$"+Hn,La="__reactEvents$"+Hn,jh="__reactListeners$"+Hn,kh="__reactHandles$"+Hn;function Qt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yi(e);e!==null;){if(n=e[at])return n;e=Yi(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[at]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function ol(e){return e[Cr]||null}var _a=[],gn=-1;function Ht(e){return{current:e}}function B(e){0>gn||(e.current=_a[gn],_a[gn]=null,gn--)}function H(e,t){gn++,_a[gn]=e.current,e.current=t}var Ot={},ge=Ht(Ot),Ce=Ht(!1),Xt=Ot;function _n(e,t){var n=e.type.contextTypes;if(!n)return Ot;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ee(e){return e=e.childContextTypes,e!=null}function As(){B(Ce),B(ge)}function Qi(e,t,n){if(ge.current!==Ot)throw Error(S(168));H(ge,t),H(Ce,n)}function Gd(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(S(108,lf(e)||"Unknown",l));return G({},n,s)}function Os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Xt=ge.current,H(ge,e),H(Ce,Ce.current),!0}function Gi(e,t,n){var s=e.stateNode;if(!s)throw Error(S(169));n?(e=Gd(e,t,Xt),s.__reactInternalMemoizedMergedChildContext=e,B(Ce),B(ge),H(ge,e)):B(Ce),H(Ce,n)}var ut=null,il=!1,Vl=!1;function Kd(e){ut===null?ut=[e]:ut.push(e)}function Nh(e){il=!0,Kd(e)}function Ut(){if(!Vl&&ut!==null){Vl=!0;var e=0,t=F;try{var n=ut;for(F=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}ut=null,il=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),wd(go,Ut),l}finally{F=t,Vl=!1}}return null}var yn=[],vn=0,$s=null,Fs=0,$e=[],Fe=0,Zt=null,mt=1,ft="";function Wt(e,t){yn[vn++]=Fs,yn[vn++]=$s,$s=e,Fs=t}function qd(e,t,n){$e[Fe++]=mt,$e[Fe++]=ft,$e[Fe++]=Zt,Zt=e;var s=mt;e=ft;var l=32-qe(s)-1;s&=~(1<<l),n+=1;var a=32-qe(t)+l;if(30<a){var o=l-l%5;a=(s&(1<<o)-1).toString(32),s>>=o,l-=o,mt=1<<32-qe(t)+l|n<<l|s,ft=a+e}else mt=1<<a|n<<l|s,ft=e}function Co(e){e.return!==null&&(Wt(e,1),qd(e,1,0))}function Eo(e){for(;e===$s;)$s=yn[--vn],yn[vn]=null,Fs=yn[--vn],yn[vn]=null;for(;e===Zt;)Zt=$e[--Fe],$e[Fe]=null,ft=$e[--Fe],$e[Fe]=null,mt=$e[--Fe],$e[Fe]=null}var Ie=null,Me=null,V=!1,Ke=null;function Jd(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ki(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Me=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:mt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ie=e,Me=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(V){var t=Me;if(t){var n=t;if(!Ki(e,t)){if(Ma(e))throw Error(S(418));t=_t(n.nextSibling);var s=Ie;t&&Ki(e,t)?Jd(s,n):(e.flags=e.flags&-4097|2,V=!1,Ie=e)}}else{if(Ma(e))throw Error(S(418));e.flags=e.flags&-4097|2,V=!1,Ie=e}}}function qi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function rs(e){if(e!==Ie)return!1;if(!V)return qi(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Me)){if(Ma(e))throw Xd(),Error(S(418));for(;t;)Jd(e,t),t=_t(t.nextSibling)}if(qi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Ie?_t(e.stateNode.nextSibling):null;return!0}function Xd(){for(var e=Me;e;)e=_t(e.nextSibling)}function Mn(){Me=Ie=null,V=!1}function Po(e){Ke===null?Ke=[e]:Ke.push(e)}var bh=wt.ReactCurrentBatchConfig;function Jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var s=n.stateNode}if(!s)throw Error(S(147,e));var l=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var i=l.refs;o===null?delete i[a]:i[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ss(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ji(e){var t=e._init;return t(e._payload)}function Zd(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function s(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function l(m,u){return m=zt(m,u),m.index=0,m.sibling=null,m}function a(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function i(m,u,p,k){return u===null||u.tag!==6?(u=Jl(p,m.mode,k),u.return=m,u):(u=l(u,p),u.return=m,u)}function c(m,u,p,k){var N=p.type;return N===mn?f(m,u,p.props.children,k,p.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===kt&&Ji(N)===u.type)?(k=l(u,p.props),k.ref=Jn(m,u,p),k.return=m,k):(k=Ss(p.type,p.key,p.props,null,m.mode,k),k.ref=Jn(m,u,p),k.return=m,k)}function d(m,u,p,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Xl(p,m.mode,k),u.return=m,u):(u=l(u,p.children||[]),u.return=m,u)}function f(m,u,p,k,N){return u===null||u.tag!==7?(u=Jt(p,m.mode,k,N),u.return=m,u):(u=l(u,p),u.return=m,u)}function h(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Jl(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Qr:return p=Ss(u.type,u.key,u.props,null,m.mode,p),p.ref=Jn(m,null,u),p.return=m,p;case un:return u=Xl(u,m.mode,p),u.return=m,u;case kt:var k=u._init;return h(m,k(u._payload),p)}if(rr(u)||Yn(u))return u=Jt(u,m.mode,p,null),u.return=m,u;ss(m,u)}return null}function g(m,u,p,k){var N=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:i(m,u,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===N?c(m,u,p,k):null;case un:return p.key===N?d(m,u,p,k):null;case kt:return N=p._init,g(m,u,N(p._payload),k)}if(rr(p)||Yn(p))return N!==null?null:f(m,u,p,k,null);ss(m,p)}return null}function y(m,u,p,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(p)||null,i(u,m,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Qr:return m=m.get(k.key===null?p:k.key)||null,c(u,m,k,N);case un:return m=m.get(k.key===null?p:k.key)||null,d(u,m,k,N);case kt:var b=k._init;return y(m,u,p,b(k._payload),N)}if(rr(k)||Yn(k))return m=m.get(p)||null,f(u,m,k,N,null);ss(u,k)}return null}function v(m,u,p,k){for(var N=null,b=null,C=u,E=u=0,_=null;C!==null&&E<p.length;E++){C.index>E?(_=C,C=null):_=C.sibling;var M=g(m,C,p[E],k);if(M===null){C===null&&(C=_);break}e&&C&&M.alternate===null&&t(m,C),u=a(M,u,E),b===null?N=M:b.sibling=M,b=M,C=_}if(E===p.length)return n(m,C),V&&Wt(m,E),N;if(C===null){for(;E<p.length;E++)C=h(m,p[E],k),C!==null&&(u=a(C,u,E),b===null?N=C:b.sibling=C,b=C);return V&&Wt(m,E),N}for(C=s(m,C);E<p.length;E++)_=y(C,m,E,p[E],k),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?E:_.key),u=a(_,u,E),b===null?N=_:b.sibling=_,b=_);return e&&C.forEach(function(ye){return t(m,ye)}),V&&Wt(m,E),N}function w(m,u,p,k){var N=Yn(p);if(typeof N!="function")throw Error(S(150));if(p=N.call(p),p==null)throw Error(S(151));for(var b=N=null,C=u,E=u=0,_=null,M=p.next();C!==null&&!M.done;E++,M=p.next()){C.index>E?(_=C,C=null):_=C.sibling;var ye=g(m,C,M.value,k);if(ye===null){C===null&&(C=_);break}e&&C&&ye.alternate===null&&t(m,C),u=a(ye,u,E),b===null?N=ye:b.sibling=ye,b=ye,C=_}if(M.done)return n(m,C),V&&Wt(m,E),N;if(C===null){for(;!M.done;E++,M=p.next())M=h(m,M.value,k),M!==null&&(u=a(M,u,E),b===null?N=M:b.sibling=M,b=M);return V&&Wt(m,E),N}for(C=s(m,C);!M.done;E++,M=p.next())M=y(C,m,E,M.value,k),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),u=a(M,u,E),b===null?N=M:b.sibling=M,b=M);return e&&C.forEach(function(ct){return t(m,ct)}),V&&Wt(m,E),N}function j(m,u,p,k){if(typeof p=="object"&&p!==null&&p.type===mn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var N=p.key,b=u;b!==null;){if(b.key===N){if(N=p.type,N===mn){if(b.tag===7){n(m,b.sibling),u=l(b,p.props.children),u.return=m,m=u;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===kt&&Ji(N)===b.type){n(m,b.sibling),u=l(b,p.props),u.ref=Jn(m,b,p),u.return=m,m=u;break e}n(m,b);break}else t(m,b);b=b.sibling}p.type===mn?(u=Jt(p.props.children,m.mode,k,p.key),u.return=m,m=u):(k=Ss(p.type,p.key,p.props,null,m.mode,k),k.ref=Jn(m,u,p),k.return=m,m=k)}return o(m);case un:e:{for(b=p.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(m,u.sibling),u=l(u,p.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=Xl(p,m.mode,k),u.return=m,m=u}return o(m);case kt:return b=p._init,j(m,u,b(p._payload),k)}if(rr(p))return v(m,u,p,k);if(Yn(p))return w(m,u,p,k);ss(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(m,u.sibling),u=l(u,p),u.return=m,m=u):(n(m,u),u=Jl(p,m.mode,k),u.return=m,m=u),o(m)):n(m,u)}return j}var Dn=Zd(!0),eu=Zd(!1),Hs=Ht(null),Us=null,wn=null,Ro=null;function Lo(){Ro=wn=Us=null}function _o(e){var t=Hs.current;B(Hs),e._currentValue=t}function Ia(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function En(e,t){Us=e,Ro=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(Ro!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Us===null)throw Error(S(308));wn=e,Us.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Gt=null;function Mo(e){Gt===null?Gt=[e]:Gt.push(e)}function tu(e,t,n,s){var l=t.interleaved;return l===null?(n.next=n,Mo(t)):(n.next=l.next,l.next=n),t.interleaved=n,gt(e,s)}function gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Nt=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,A&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,gt(e,n)}return l=s.interleaved,l===null?(t.next=t,Mo(s)):(t.next=l.next,l.next=t),s.interleaved=t,gt(e,n)}function vs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,yo(e,n)}}function Xi(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bs(e,t,n,s){var l=e.updateQueue;Nt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var c=i,d=c.next;c.next=null,o===null?a=d:o.next=d,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,i=f.lastBaseUpdate,i!==o&&(i===null?f.firstBaseUpdate=d:i.next=d,f.lastBaseUpdate=c))}if(a!==null){var h=l.baseState;o=0,f=d=c=null,i=a;do{var g=i.lane,y=i.eventTime;if((s&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var v=e,w=i;switch(g=t,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(y,h,g);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,h,g):v,g==null)break e;h=G({},h,g);break e;case 2:Nt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[i]:g.push(i))}else y={eventTime:y,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},f===null?(d=f=y,c=h):f=f.next=y,o|=g;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;g=i,i=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(f===null&&(c=h),l.baseState=c,l.firstBaseUpdate=d,l.lastBaseUpdate=f,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=h}}function Zi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=n,typeof l!="function")throw Error(S(191,l));l.call(s)}}}var Fr={},it=Ht(Fr),Er=Ht(Fr),Pr=Ht(Fr);function Kt(e){if(e===Fr)throw Error(S(174));return e}function Io(e,t){switch(H(Pr,t),H(Er,e),H(it,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ha(t,e)}B(it),H(it,t)}function In(){B(it),B(Er),B(Pr)}function ru(e){Kt(Pr.current);var t=Kt(it.current),n=ha(t,e.type);t!==n&&(H(Er,e),H(it,n))}function zo(e){Er.current===e&&(B(it),B(Er))}var Y=Ht(0);function Vs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function To(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var ws=wt.ReactCurrentDispatcher,Yl=wt.ReactCurrentBatchConfig,en=0,Q=null,ee=null,se=null,Ws=!1,ur=!1,Rr=0,Sh=0;function me(){throw Error(S(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function Oo(e,t,n,s,l,a){if(en=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ws.current=e===null||e.memoizedState===null?Rh:Lh,e=n(s,l),ur){a=0;do{if(ur=!1,Rr=0,25<=a)throw Error(S(301));a+=1,se=ee=null,t.updateQueue=null,ws.current=_h,e=n(s,l)}while(ur)}if(ws.current=Ys,t=ee!==null&&ee.next!==null,en=0,se=ee=Q=null,Ws=!1,t)throw Error(S(300));return e}function $o(){var e=Rr!==0;return Rr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?Q.memoizedState=se=e:se=se.next=e,se}function Ve(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=se===null?Q.memoizedState:se.next;if(t!==null)se=t,ee=e;else{if(e===null)throw Error(S(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},se===null?Q.memoizedState=se=e:se=se.next=e}return se}function Lr(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var s=ee,l=s.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}s.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,s=s.baseState;var i=o=null,c=null,d=a;do{var f=d.lane;if((en&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(i=c=h,o=s):c=c.next=h,Q.lanes|=f,tn|=f}d=d.next}while(d!==null&&d!==a);c===null?o=s:c.next=i,et(s,t.memoizedState)||(Se=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,n.lastRenderedState=s}if(e=n.interleaved,e!==null){l=e;do a=l.lane,Q.lanes|=a,tn|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Ve(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var s=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);et(a,t.memoizedState)||(Se=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,s]}function su(){}function lu(e,t){var n=Q,s=Ve(),l=t(),a=!et(s.memoizedState,l);if(a&&(s.memoizedState=l,Se=!0),s=s.queue,Fo(iu.bind(null,n,s,e),[e]),s.getSnapshot!==t||a||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,_r(9,ou.bind(null,n,s,l,t),void 0,null),le===null)throw Error(S(349));en&30||au(n,t,l)}return l}function au(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ou(e,t,n,s){t.value=n,t.getSnapshot=s,cu(t)&&du(e)}function iu(e,t,n){return n(function(){cu(t)&&du(e)})}function cu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function du(e){var t=gt(e,1);t!==null&&Je(t,e,1,-1)}function ec(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ph.bind(null,Q,e),[t.memoizedState,e]}function _r(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function uu(){return Ve().memoizedState}function js(e,t,n,s){var l=lt();Q.flags|=e,l.memoizedState=_r(1|t,n,void 0,s===void 0?null:s)}function cl(e,t,n,s){var l=Ve();s=s===void 0?null:s;var a=void 0;if(ee!==null){var o=ee.memoizedState;if(a=o.destroy,s!==null&&Ao(s,o.deps)){l.memoizedState=_r(t,n,a,s);return}}Q.flags|=e,l.memoizedState=_r(1|t,n,a,s)}function tc(e,t){return js(8390656,8,e,t)}function Fo(e,t){return cl(2048,8,e,t)}function mu(e,t){return cl(4,2,e,t)}function fu(e,t){return cl(4,4,e,t)}function hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pu(e,t,n){return n=n!=null?n.concat([e]):null,cl(4,4,hu.bind(null,t,e),n)}function Ho(){}function xu(e,t){var n=Ve();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Ao(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function gu(e,t){var n=Ve();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Ao(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function yu(e,t,n){return en&21?(et(n,t)||(n=Nd(),Q.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Ch(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var s=Yl.transition;Yl.transition={};try{e(!1),t()}finally{F=n,Yl.transition=s}}function vu(){return Ve().memoizedState}function Eh(e,t,n){var s=It(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},wu(e))ju(t,n);else if(n=tu(e,t,n,s),n!==null){var l=je();Je(n,e,s,l),ku(n,t,s)}}function Ph(e,t,n){var s=It(e),l={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(e))ju(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,i=a(o,n);if(l.hasEagerState=!0,l.eagerState=i,et(i,o)){var c=t.interleaved;c===null?(l.next=l,Mo(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=tu(e,t,l,s),n!==null&&(l=je(),Je(n,e,s,l),ku(n,t,s))}}function wu(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function ju(e,t){ur=Ws=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ku(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,yo(e,n)}}var Ys={readContext:Be,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Rh={readContext:Be,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,js(4194308,4,hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return js(4194308,4,e,t)},useInsertionEffect:function(e,t){return js(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=lt();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Eh.bind(null,Q,e),[s.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:Ho,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=Ch.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=Q,l=lt();if(V){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));en&30||au(s,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,tc(iu.bind(null,s,a,e),[e]),s.flags|=2048,_r(9,ou.bind(null,s,a,n,t),void 0,null),n},useId:function(){var e=lt(),t=le.identifierPrefix;if(V){var n=ft,s=mt;n=(s&~(1<<32-qe(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Sh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Lh={readContext:Be,useCallback:xu,useContext:Be,useEffect:Fo,useImperativeHandle:pu,useInsertionEffect:mu,useLayoutEffect:fu,useMemo:gu,useReducer:Ql,useRef:uu,useState:function(){return Ql(Lr)},useDebugValue:Ho,useDeferredValue:function(e){var t=Ve();return yu(t,ee.memoizedState,e)},useTransition:function(){var e=Ql(Lr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:lu,useId:vu,unstable_isNewReconciler:!1},_h={readContext:Be,useCallback:xu,useContext:Be,useEffect:Fo,useImperativeHandle:pu,useInsertionEffect:mu,useLayoutEffect:fu,useMemo:gu,useReducer:Gl,useRef:uu,useState:function(){return Gl(Lr)},useDebugValue:Ho,useDeferredValue:function(e){var t=Ve();return ee===null?t.memoizedState=e:yu(t,ee.memoizedState,e)},useTransition:function(){var e=Gl(Lr)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:su,useSyncExternalStore:lu,useId:vu,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function za(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=je(),l=It(e),a=ht(s,l);a.payload=t,n!=null&&(a.callback=n),t=Mt(e,a,l),t!==null&&(Je(t,e,l,s),vs(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=je(),l=It(e),a=ht(s,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Mt(e,a,l),t!==null&&(Je(t,e,l,s),vs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),s=It(e),l=ht(n,s);l.tag=2,t!=null&&(l.callback=t),t=Mt(e,l,s),t!==null&&(Je(t,e,s,n),vs(t,e,s))}};function nc(e,t,n,s,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,s)||!Nr(l,a):!0}function Nu(e,t,n){var s=!1,l=Ot,a=t.contextType;return typeof a=="object"&&a!==null?a=Be(a):(l=Ee(t)?Xt:ge.current,s=t.contextTypes,a=(s=s!=null)?_n(e,l):Ot),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function rc(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,s){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Do(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Be(a):(a=Ee(t)?Xt:ge.current,l.context=_n(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(za(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Bs(e,n,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",s=t;do n+=sf(s),s=s.return;while(s);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mh=typeof WeakMap=="function"?WeakMap:Map;function bu(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){Gs||(Gs=!0,Qa=s),Aa(e,t)},n}function Su(e,t,n){n=ht(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;n.payload=function(){return s(l)},n.callback=function(){Aa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Aa(e,t),typeof s!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function sc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Mh;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(n)||(l.add(n),e=Yh.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,s,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Dh=wt.ReactCurrentOwner,Se=!1;function we(e,t,n,s){t.child=e===null?eu(t,null,n,s):Dn(t,e.child,n,s)}function oc(e,t,n,s,l){n=n.render;var a=t.ref;return En(t,l),s=Oo(e,t,n,s,a,l),n=$o(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,yt(e,t,l)):(V&&n&&Co(t),t.flags|=1,we(e,t,s,l),t.child)}function ic(e,t,n,s,l){if(e===null){var a=n.type;return typeof a=="function"&&!Ko(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Cu(e,t,a,s,l)):(e=Ss(n.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Nr,n(o,s)&&e.ref===t.ref)return yt(e,t,l)}return t.flags|=1,e=zt(a,s),e.ref=t.ref,e.return=t,t.child=e}function Cu(e,t,n,s,l){if(e!==null){var a=e.memoizedProps;if(Nr(a,s)&&e.ref===t.ref)if(Se=!1,t.pendingProps=s=a,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,yt(e,t,l)}return Oa(e,t,n,s,l)}function Eu(e,t,n){var s=t.pendingProps,l=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(kn,_e),_e|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(kn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:n,H(kn,_e),_e|=s}else a!==null?(s=a.baseLanes|n,t.memoizedState=null):s=n,H(kn,_e),_e|=s;return we(e,t,l,n),t.child}function Pu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oa(e,t,n,s,l){var a=Ee(n)?Xt:ge.current;return a=_n(t,a),En(t,l),n=Oo(e,t,n,s,a,l),s=$o(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,yt(e,t,l)):(V&&s&&Co(t),t.flags|=1,we(e,t,n,l),t.child)}function cc(e,t,n,s,l){if(Ee(n)){var a=!0;Os(t)}else a=!1;if(En(t,l),t.stateNode===null)ks(e,t),Nu(t,n,s),Ta(t,n,s,l),s=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Be(d):(d=Ee(n)?Xt:ge.current,d=_n(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==s||c!==d)&&rc(t,o,s,d),Nt=!1;var g=t.memoizedState;o.state=g,Bs(t,s,o,l),c=t.memoizedState,i!==s||g!==c||Ce.current||Nt?(typeof f=="function"&&(za(t,n,f,s),c=t.memoizedState),(i=Nt||nc(t,n,i,s,g,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=d,s=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,nu(e,t),i=t.memoizedProps,d=t.type===t.elementType?i:Qe(t.type,i),o.props=d,h=t.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=Ee(n)?Xt:ge.current,c=_n(t,c));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==h||g!==c)&&rc(t,o,s,c),Nt=!1,g=t.memoizedState,o.state=g,Bs(t,s,o,l);var v=t.memoizedState;i!==h||g!==v||Ce.current||Nt?(typeof y=="function"&&(za(t,n,y,s),v=t.memoizedState),(d=Nt||nc(t,n,d,s,g,v,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,v,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=v),o.props=s,o.state=v,o.context=c,s=d):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),s=!1)}return $a(e,t,n,s,a,l)}function $a(e,t,n,s,l,a){Pu(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return l&&Gi(t,n,!1),yt(e,t,a);s=t.stateNode,Dh.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Dn(t,e.child,null,a),t.child=Dn(t,null,i,a)):we(e,t,i,a),t.memoizedState=s.state,l&&Gi(t,n,!0),t.child}function Ru(e){var t=e.stateNode;t.pendingContext?Qi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qi(e,t.context,!1),Io(e,t.containerInfo)}function dc(e,t,n,s,l){return Mn(),Po(l),t.flags|=256,we(e,t,n,s),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var s=t.pendingProps,l=Y.current,a=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(Y,l&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,a?(s=t.mode,a=t.child,o={mode:"hidden",children:o},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=fl(o,s,0,null),e=Jt(e,s,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ha(n),t.memoizedState=Fa,e):Uo(t,o));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return Ih(e,t,o,s,i,l,n);if(a){a=s.fallback,o=t.mode,l=e.child,i=l.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=zt(l,c),s.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=zt(i,a):(a=Jt(a,o,n,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,o=e.child.memoizedState,o=o===null?Ha(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Fa,s}return a=e.child,e=a.sibling,s=zt(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Uo(e,t){return t=fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ls(e,t,n,s){return s!==null&&Po(s),Dn(t,e.child,null,n),e=Uo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ih(e,t,n,s,l,a,o){if(n)return t.flags&256?(t.flags&=-257,s=Kl(Error(S(422))),ls(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,l=t.mode,s=fl({mode:"visible",children:s.children},l,0,null),a=Jt(a,l,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&Dn(t,e.child,null,o),t.child.memoizedState=Ha(o),t.memoizedState=Fa,a);if(!(t.mode&1))return ls(e,t,o,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var i=s.dgst;return s=i,a=Error(S(419)),s=Kl(a,s,void 0),ls(e,t,o,s)}if(i=(o&e.childLanes)!==0,Se||i){if(s=le,s!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,gt(e,l),Je(s,e,l,-1))}return Go(),s=Kl(Error(S(421))),ls(e,t,o,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Qh.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Me=_t(l.nextSibling),Ie=t,V=!0,Ke=null,e!==null&&($e[Fe++]=mt,$e[Fe++]=ft,$e[Fe++]=Zt,mt=e.id,ft=e.overflow,Zt=t),t=Uo(t,s.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Ia(e.return,t,n)}function ql(e,t,n,s,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=n,a.tailMode=l)}function _u(e,t,n){var s=t.pendingProps,l=s.revealOrder,a=s.tail;if(we(e,t,s.children,n),s=Y.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(H(Y,s),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Vs(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Vs(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,a);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ks(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zh(e,t,n){switch(t.tag){case 3:Ru(t),Mn();break;case 5:ru(t);break;case 1:Ee(t.type)&&Os(t);break;case 4:Io(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;H(Hs,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Lu(e,t,n):(H(Y,Y.current&1),e=yt(e,t,n),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return _u(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Y,Y.current),s)break;return null;case 22:case 23:return t.lanes=0,Eu(e,t,n)}return yt(e,t,n)}var Mu,Ua,Du,Iu;Mu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ua=function(){};Du=function(e,t,n,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Kt(it.current);var a=null;switch(n){case"input":l=da(e,l),s=da(e,s),a=[];break;case"select":l=G({},l,{value:void 0}),s=G({},s,{value:void 0}),a=[];break;case"textarea":l=fa(e,l),s=fa(e,s),a=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ts)}pa(n,s);var o;n=null;for(d in l)if(!s.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var i=l[d];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xr.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in s){var c=s[d];if(i=l!=null?l[d]:void 0,s.hasOwnProperty(d)&&c!==i&&(c!=null||i!=null))if(d==="style")if(i){for(o in i)!i.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&i[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&U("scroll",e),a||i===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Iu=function(e,t,n,s){n!==s&&(t.flags|=4)};function Xn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Th(e,t,n){var s=t.pendingProps;switch(Eo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ee(t.type)&&As(),fe(t),null;case 3:return s=t.stateNode,In(),B(Ce),B(ge),To(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(qa(Ke),Ke=null))),Ua(e,t),fe(t),null;case 5:zo(t);var l=Kt(Pr.current);if(n=t.type,e!==null&&t.stateNode!=null)Du(e,t,n,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(S(166));return fe(t),null}if(e=Kt(it.current),rs(t)){s=t.stateNode,n=t.type;var a=t.memoizedProps;switch(s[at]=t,s[Cr]=a,e=(t.mode&1)!==0,n){case"dialog":U("cancel",s),U("close",s);break;case"iframe":case"object":case"embed":U("load",s);break;case"video":case"audio":for(l=0;l<lr.length;l++)U(lr[l],s);break;case"source":U("error",s);break;case"img":case"image":case"link":U("error",s),U("load",s);break;case"details":U("toggle",s);break;case"input":wi(s,a),U("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},U("invalid",s);break;case"textarea":ki(s,a),U("invalid",s)}pa(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?s.textContent!==i&&(a.suppressHydrationWarning!==!0&&ns(s.textContent,i,e),l=["children",i]):typeof i=="number"&&s.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&ns(s.textContent,i,e),l=["children",""+i]):xr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&U("scroll",s)}switch(n){case"input":Gr(s),ji(s,a,!0);break;case"textarea":Gr(s),Ni(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Ts)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=id(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(n,{is:s.is}):(e=o.createElement(n),n==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,n),e[at]=t,e[Cr]=s,Mu(e,t,!1,!1),t.stateNode=e;e:{switch(o=xa(n,s),n){case"dialog":U("cancel",e),U("close",e),l=s;break;case"iframe":case"object":case"embed":U("load",e),l=s;break;case"video":case"audio":for(l=0;l<lr.length;l++)U(lr[l],e);l=s;break;case"source":U("error",e),l=s;break;case"img":case"image":case"link":U("error",e),U("load",e),l=s;break;case"details":U("toggle",e),l=s;break;case"input":wi(e,s),l=da(e,s),U("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=G({},s,{value:void 0}),U("invalid",e);break;case"textarea":ki(e,s),l=fa(e,s),U("invalid",e);break;default:l=s}pa(n,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?ud(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&cd(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&gr(e,c):typeof c=="number"&&gr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(xr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&U("scroll",e):c!=null&&mo(e,a,c,o))}switch(n){case"input":Gr(e),ji(e,s,!1);break;case"textarea":Gr(e),Ni(e);break;case"option":s.value!=null&&e.setAttribute("value",""+At(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Nn(e,!!s.multiple,a,!1):s.defaultValue!=null&&Nn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Ts)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Iu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(S(166));if(n=Kt(Pr.current),Kt(it.current),rs(t)){if(s=t.stateNode,n=t.memoizedProps,s[at]=t,(a=s.nodeValue!==n)&&(e=Ie,e!==null))switch(e.tag){case 3:ns(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ns(s.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[at]=t,t.stateNode=s}return fe(t),null;case 13:if(B(Y),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Me!==null&&t.mode&1&&!(t.flags&128))Xd(),Mn(),t.flags|=98560,a=!1;else if(a=rs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(S(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));a[at]=t}else Mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),a=!1}else Ke!==null&&(qa(Ke),Ke=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?te===0&&(te=3):Go())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return In(),Ua(e,t),e===null&&br(t.stateNode.containerInfo),fe(t),null;case 10:return _o(t.type._context),fe(t),null;case 17:return Ee(t.type)&&As(),fe(t),null;case 19:if(B(Y),a=t.memoizedState,a===null)return fe(t),null;if(s=(t.flags&128)!==0,o=a.rendering,o===null)if(s)Xn(a,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Vs(e),o!==null){for(t.flags|=128,Xn(a,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)a=n,e=s,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&J()>Tn&&(t.flags|=128,s=!0,Xn(a,!1),t.lanes=4194304)}else{if(!s)if(e=Vs(o),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!V)return fe(t),null}else 2*J()-a.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,s=!0,Xn(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=J(),t.sibling=null,n=Y.current,H(Y,s?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Qo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?_e&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Ah(e,t){switch(Eo(t),t.tag){case 1:return Ee(t.type)&&As(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),B(Ce),B(ge),To(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return zo(t),null;case 13:if(B(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Y),null;case 4:return In(),null;case 10:return _o(t.type._context),null;case 22:case 23:return Qo(),null;case 24:return null;default:return null}}var as=!1,he=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,L=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){K(e,t,s)}else n.current=null}function Ba(e,t,n){try{n()}catch(s){K(e,t,s)}}var mc=!1;function $h(e,t){if(Ca=Ds,e=$d(),So(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var l=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,c=-1,d=0,f=0,h=e,g=null;t:for(;;){for(var y;h!==n||l!==0&&h.nodeType!==3||(i=o+l),h!==a||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++d===l&&(i=o),g===a&&++f===s&&(c=o),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Ds=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,j=v.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Qe(t.type,w),j);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(k){K(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=mc,mc=!1,v}function mr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Ba(t,n,a)}l=l.next}while(l!==s)}}function ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zu(e){var t=e.alternate;t!==null&&(e.alternate=null,zu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[at],delete t[Cr],delete t[La],delete t[jh],delete t[kh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tu(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ts));else if(s!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}function Ya(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}var oe=null,Ge=!1;function jt(e,t,n){for(n=n.child;n!==null;)Au(e,t,n),n=n.sibling}function Au(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:he||jn(n,t);case 6:var s=oe,l=Ge;oe=null,jt(e,t,n),oe=s,Ge=l,oe!==null&&(Ge?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&(Ge?(e=oe,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),jr(e)):Bl(oe,n.stateNode));break;case 4:s=oe,l=Ge,oe=n.stateNode.containerInfo,Ge=!0,jt(e,t,n),oe=s,Ge=l;break;case 0:case 11:case 14:case 15:if(!he&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ba(n,t,o),l=l.next}while(l!==s)}jt(e,t,n);break;case 1:if(!he&&(jn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(i){K(n,t,i)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(he=(s=he)||n.memoizedState!==null,jt(e,t,n),he=s):jt(e,t,n);break;default:jt(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oh),t.forEach(function(s){var l=Gh.bind(null,e,s);n.has(s)||(n.add(s),s.then(l,l))})}}function Ye(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];try{var a=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:oe=i.stateNode,Ge=!1;break e;case 3:oe=i.stateNode.containerInfo,Ge=!0;break e;case 4:oe=i.stateNode.containerInfo,Ge=!0;break e}i=i.return}if(oe===null)throw Error(S(160));Au(a,o,l),oe=null,Ge=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(d){K(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ou(t,e),t=t.sibling}function Ou(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ye(t,e),st(e),s&4){try{mr(3,e,e.return),ul(3,e)}catch(w){K(e,e.return,w)}try{mr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Ye(t,e),st(e),s&512&&n!==null&&jn(n,n.return);break;case 5:if(Ye(t,e),st(e),s&512&&n!==null&&jn(n,n.return),e.flags&32){var l=e.stateNode;try{gr(l,"")}catch(w){K(e,e.return,w)}}if(s&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&ad(l,a),xa(i,o);var d=xa(i,a);for(o=0;o<c.length;o+=2){var f=c[o],h=c[o+1];f==="style"?ud(l,h):f==="dangerouslySetInnerHTML"?cd(l,h):f==="children"?gr(l,h):mo(l,f,h,d)}switch(i){case"input":ua(l,a);break;case"textarea":od(l,a);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?Nn(l,!!a.multiple,y,!1):g!==!!a.multiple&&(a.defaultValue!=null?Nn(l,!!a.multiple,a.defaultValue,!0):Nn(l,!!a.multiple,a.multiple?[]:"",!1))}l[Cr]=a}catch(w){K(e,e.return,w)}}break;case 6:if(Ye(t,e),st(e),s&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(w){K(e,e.return,w)}}break;case 3:if(Ye(t,e),st(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{jr(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Ye(t,e),st(e);break;case 13:Ye(t,e),st(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Wo=J())),s&4&&hc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(he=(d=he)||f,Ye(t,e),he=d):Ye(t,e),st(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(L=e,f=e.child;f!==null;){for(h=L=f;L!==null;){switch(g=L,y=g.child,g.tag){case 0:case 11:case 14:case 15:mr(4,g,g.return);break;case 1:jn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){s=g,n=g.return;try{t=s,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){K(s,n,w)}}break;case 5:jn(g,g.return);break;case 22:if(g.memoizedState!==null){xc(h);continue}}y!==null?(y.return=g,L=y):xc(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{l=h.stateNode,d?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=dd("display",o))}catch(w){K(e,e.return,w)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){K(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ye(t,e),st(e),s&4&&hc(e);break;case 21:break;default:Ye(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tu(n)){var s=n;break e}n=n.return}throw Error(S(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(gr(l,""),s.flags&=-33);var a=fc(e);Ya(e,a,l);break;case 3:case 4:var o=s.stateNode.containerInfo,i=fc(e);Wa(e,i,o);break;default:throw Error(S(161))}}catch(c){K(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fh(e,t,n){L=e,$u(e)}function $u(e,t,n){for(var s=(e.mode&1)!==0;L!==null;){var l=L,a=l.child;if(l.tag===22&&s){var o=l.memoizedState!==null||as;if(!o){var i=l.alternate,c=i!==null&&i.memoizedState!==null||he;i=as;var d=he;if(as=o,(he=c)&&!d)for(L=l;L!==null;)o=L,c=o.child,o.tag===22&&o.memoizedState!==null?gc(l):c!==null?(c.return=o,L=c):gc(l);for(;a!==null;)L=a,$u(a),a=a.sibling;L=l,as=i,he=d}pc(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,L=a):pc(e)}}function pc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||ul(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!he)if(n===null)s.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);s.componentDidUpdate(l,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zi(t,a,s);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zi(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&jr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}he||t.flags&512&&Va(t)}catch(g){K(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function xc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function gc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(c){K(t,n,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(c){K(t,l,c)}}var a=t.return;try{Va(t)}catch(c){K(t,a,c)}break;case 5:var o=t.return;try{Va(t)}catch(c){K(t,o,c)}}}catch(c){K(t,t.return,c)}if(t===e){L=null;break}var i=t.sibling;if(i!==null){i.return=t.return,L=i;break}L=t.return}}var Hh=Math.ceil,Qs=wt.ReactCurrentDispatcher,Bo=wt.ReactCurrentOwner,Ue=wt.ReactCurrentBatchConfig,A=0,le=null,Z=null,de=0,_e=0,kn=Ht(0),te=0,Mr=null,tn=0,ml=0,Vo=0,fr=null,be=null,Wo=0,Tn=1/0,dt=null,Gs=!1,Qa=null,Dt=null,os=!1,Et=null,Ks=0,hr=0,Ga=null,Ns=-1,bs=0;function je(){return A&6?J():Ns!==-1?Ns:Ns=J()}function It(e){return e.mode&1?A&2&&de!==0?de&-de:bh.transition!==null?(bs===0&&(bs=Nd()),bs):(e=F,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function Je(e,t,n,s){if(50<hr)throw hr=0,Ga=null,Error(S(185));Ar(e,n,s),(!(A&2)||e!==le)&&(e===le&&(!(A&2)&&(ml|=n),te===4&&St(e,de)),Pe(e,s),n===1&&A===0&&!(t.mode&1)&&(Tn=J()+500,il&&Ut()))}function Pe(e,t){var n=e.callbackNode;bf(e,t);var s=Ms(e,e===le?de:0);if(s===0)n!==null&&Ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Ci(n),t===1)e.tag===0?Nh(yc.bind(null,e)):Kd(yc.bind(null,e)),vh(function(){!(A&6)&&Ut()}),n=null;else{switch(bd(s)){case 1:n=go;break;case 4:n=jd;break;case 16:n=_s;break;case 536870912:n=kd;break;default:n=_s}n=Qu(n,Fu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fu(e,t){if(Ns=-1,bs=0,A&6)throw Error(S(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var s=Ms(e,e===le?de:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=qs(e,s);else{t=s;var l=A;A|=2;var a=Uu();(le!==e||de!==t)&&(dt=null,Tn=J()+500,qt(e,t));do try{Vh();break}catch(i){Hu(e,i)}while(!0);Lo(),Qs.current=a,A=l,Z!==null?t=0:(le=null,de=0,t=te)}if(t!==0){if(t===2&&(l=ja(e),l!==0&&(s=l,t=Ka(e,l))),t===1)throw n=Mr,qt(e,0),St(e,s),Pe(e,J()),n;if(t===6)St(e,s);else{if(l=e.current.alternate,!(s&30)&&!Uh(l)&&(t=qs(e,s),t===2&&(a=ja(e),a!==0&&(s=a,t=Ka(e,a))),t===1))throw n=Mr,qt(e,0),St(e,s),Pe(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(S(345));case 2:Yt(e,be,dt);break;case 3:if(St(e,s),(s&130023424)===s&&(t=Wo+500-J(),10<t)){if(Ms(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){je(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ra(Yt.bind(null,e,be,dt),t);break}Yt(e,be,dt);break;case 4:if(St(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var o=31-qe(s);a=1<<o,o=t[o],o>l&&(l=o),s&=~a}if(s=l,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Hh(s/1960))-s,10<s){e.timeoutHandle=Ra(Yt.bind(null,e,be,dt),s);break}Yt(e,be,dt);break;case 5:Yt(e,be,dt);break;default:throw Error(S(329))}}}return Pe(e,J()),e.callbackNode===n?Fu.bind(null,e):null}function Ka(e,t){var n=fr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=qs(e,t),e!==2&&(t=be,be=n,t!==null&&qa(t)),e}function qa(e){be===null?be=e:be.push.apply(be,e)}function Uh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var l=n[s],a=l.getSnapshot;l=l.value;try{if(!et(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Vo,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),s=1<<n;e[n]=-1,t&=~s}}function yc(e){if(A&6)throw Error(S(327));Pn();var t=Ms(e,0);if(!(t&1))return Pe(e,J()),null;var n=qs(e,t);if(e.tag!==0&&n===2){var s=ja(e);s!==0&&(t=s,n=Ka(e,s))}if(n===1)throw n=Mr,qt(e,0),St(e,t),Pe(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,be,dt),Pe(e,J()),null}function Yo(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Tn=J()+500,il&&Ut())}}function nn(e){Et!==null&&Et.tag===0&&!(A&6)&&Pn();var t=A;A|=1;var n=Ue.transition,s=F;try{if(Ue.transition=null,F=1,e)return e()}finally{F=s,Ue.transition=n,A=t,!(A&6)&&Ut()}}function Qo(){_e=kn.current,B(kn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,yh(n)),Z!==null)for(n=Z.return;n!==null;){var s=n;switch(Eo(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&As();break;case 3:In(),B(Ce),B(ge),To();break;case 5:zo(s);break;case 4:In();break;case 13:B(Y);break;case 19:B(Y);break;case 10:_o(s.type._context);break;case 22:case 23:Qo()}n=n.return}if(le=e,Z=e=zt(e.current,null),de=_e=t,te=0,Mr=null,Vo=ml=tn=0,be=fr=null,Gt!==null){for(t=0;t<Gt.length;t++)if(n=Gt[t],s=n.interleaved,s!==null){n.interleaved=null;var l=s.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,s.next=o}n.pending=s}Gt=null}return e}function Hu(e,t){do{var n=Z;try{if(Lo(),ws.current=Ys,Ws){for(var s=Q.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}Ws=!1}if(en=0,se=ee=Q=null,ur=!1,Rr=0,Bo.current=null,n===null||n.return===null){te=1,Mr=t,Z=null;break}e:{var a=e,o=n.return,i=n,c=t;if(t=de,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=i,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=lc(o);if(y!==null){y.flags&=-257,ac(y,o,i,a,t),y.mode&1&&sc(a,d,t),t=y,c=d;var v=t.updateQueue;if(v===null){var w=new Set;w.add(c),t.updateQueue=w}else v.add(c);break e}else{if(!(t&1)){sc(a,d,t),Go();break e}c=Error(S(426))}}else if(V&&i.mode&1){var j=lc(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),ac(j,o,i,a,t),Po(zn(c,i));break e}}a=c=zn(c,i),te!==4&&(te=2),fr===null?fr=[a]:fr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=bu(a,c,t);Xi(a,m);break e;case 1:i=c;var u=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dt===null||!Dt.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Su(a,i,t);Xi(a,k);break e}}a=a.return}while(a!==null)}Vu(n)}catch(N){t=N,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Uu(){var e=Qs.current;return Qs.current=Ys,e===null?Ys:e}function Go(){(te===0||te===3||te===2)&&(te=4),le===null||!(tn&268435455)&&!(ml&268435455)||St(le,de)}function qs(e,t){var n=A;A|=2;var s=Uu();(le!==e||de!==t)&&(dt=null,qt(e,t));do try{Bh();break}catch(l){Hu(e,l)}while(!0);if(Lo(),A=n,Qs.current=s,Z!==null)throw Error(S(261));return le=null,de=0,te}function Bh(){for(;Z!==null;)Bu(Z)}function Vh(){for(;Z!==null&&!pf();)Bu(Z)}function Bu(e){var t=Yu(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Vu(e):Z=t,Bo.current=null}function Vu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ah(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=Th(n,t,_e),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Yt(e,t,n){var s=F,l=Ue.transition;try{Ue.transition=null,F=1,Wh(e,t,n,s)}finally{Ue.transition=l,F=s}return null}function Wh(e,t,n,s){do Pn();while(Et!==null);if(A&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Sf(e,a),e===le&&(Z=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,Qu(_s,function(){return Pn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ue.transition,Ue.transition=null;var o=F;F=1;var i=A;A|=4,Bo.current=null,$h(e,n),Ou(n,e),uh(Ea),Ds=!!Ca,Ea=Ca=null,e.current=n,Fh(n),xf(),A=i,F=o,Ue.transition=a}else e.current=n;if(os&&(os=!1,Et=e,Ks=l),a=e.pendingLanes,a===0&&(Dt=null),vf(n.stateNode),Pe(e,J()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],s(l.value,{componentStack:l.stack,digest:l.digest});if(Gs)throw Gs=!1,e=Qa,Qa=null,e;return Ks&1&&e.tag!==0&&Pn(),a=e.pendingLanes,a&1?e===Ga?hr++:(hr=0,Ga=e):hr=0,Ut(),null}function Pn(){if(Et!==null){var e=bd(Ks),t=Ue.transition,n=F;try{if(Ue.transition=null,F=16>e?16:e,Et===null)var s=!1;else{if(e=Et,Et=null,Ks=0,A&6)throw Error(S(331));var l=A;for(A|=4,L=e.current;L!==null;){var a=L,o=a.child;if(L.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var d=i[c];for(L=d;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:mr(8,f,a)}var h=f.child;if(h!==null)h.return=f,L=h;else for(;L!==null;){f=L;var g=f.sibling,y=f.return;if(zu(f),f===d){L=null;break}if(g!==null){g.return=y,L=g;break}L=y}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}L=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,L=o;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:mr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,L=m;break e}L=a.return}}var u=e.current;for(L=u;L!==null;){o=L;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,L=p;else e:for(o=u;L!==null;){if(i=L,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ul(9,i)}}catch(N){K(i,i.return,N)}if(i===o){L=null;break e}var k=i.sibling;if(k!==null){k.return=i.return,L=k;break e}L=i.return}}if(A=l,Ut(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(rl,e)}catch{}s=!0}return s}finally{F=n,Ue.transition=t}}return!1}function vc(e,t,n){t=zn(n,t),t=bu(e,t,1),e=Mt(e,t,1),t=je(),e!==null&&(Ar(e,1,t),Pe(e,t))}function K(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Dt===null||!Dt.has(s))){e=zn(n,e),e=Su(t,e,1),t=Mt(t,e,1),e=je(),t!==null&&(Ar(t,1,e),Pe(t,e));break}}t=t.return}}function Yh(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(te===4||te===3&&(de&130023424)===de&&500>J()-Wo?qt(e,0):Vo|=n),Pe(e,t)}function Wu(e,t){t===0&&(e.mode&1?(t=Jr,Jr<<=1,!(Jr&130023424)&&(Jr=4194304)):t=1);var n=je();e=gt(e,t),e!==null&&(Ar(e,t,n),Pe(e,n))}function Qh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wu(e,n)}function Gh(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(S(314))}s!==null&&s.delete(t),Wu(e,n)}var Yu;Yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,zh(e,t,n);Se=!!(e.flags&131072)}else Se=!1,V&&t.flags&1048576&&qd(t,Fs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ks(e,t),e=t.pendingProps;var l=_n(t,ge.current);En(t,n),l=Oo(null,t,s,e,l,n);var a=$o();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(s)?(a=!0,Os(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Do(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,Ta(t,s,e,n),t=$a(null,t,s,!0,a,n)):(t.tag=0,V&&a&&Co(t),we(null,t,l,n),t=t.child),t;case 16:s=t.elementType;e:{switch(ks(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=qh(s),e=Qe(s,e),l){case 0:t=Oa(null,t,s,e,n);break e;case 1:t=cc(null,t,s,e,n);break e;case 11:t=oc(null,t,s,e,n);break e;case 14:t=ic(null,t,s,Qe(s.type,e),n);break e}throw Error(S(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Qe(s,l),Oa(e,t,s,l,n);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Qe(s,l),cc(e,t,s,l,n);case 3:e:{if(Ru(t),e===null)throw Error(S(387));s=t.pendingProps,a=t.memoizedState,l=a.element,nu(e,t),Bs(t,s,null,n);var o=t.memoizedState;if(s=o.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=zn(Error(S(423)),t),t=dc(e,t,s,n,l);break e}else if(s!==l){l=zn(Error(S(424)),t),t=dc(e,t,s,n,l);break e}else for(Me=_t(t.stateNode.containerInfo.firstChild),Ie=t,V=!0,Ke=null,n=eu(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mn(),s===l){t=yt(e,t,n);break e}we(e,t,s,n)}t=t.child}return t;case 5:return ru(t),e===null&&Da(t),s=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,Pa(s,l)?o=null:a!==null&&Pa(s,a)&&(t.flags|=32),Pu(e,t),we(e,t,o,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Lu(e,t,n);case 4:return Io(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Dn(t,null,s,n):we(e,t,s,n),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Qe(s,l),oc(e,t,s,l,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,H(Hs,s._currentValue),s._currentValue=o,a!==null)if(et(a.value,o)){if(a.children===l.children&&!Ce.current){t=yt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var c=i.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=ht(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ia(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(S(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Ia(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}we(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,En(t,n),l=Be(l),s=s(l),t.flags|=1,we(e,t,s,n),t.child;case 14:return s=t.type,l=Qe(s,t.pendingProps),l=Qe(s.type,l),ic(e,t,s,l,n);case 15:return Cu(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Qe(s,l),ks(e,t),t.tag=1,Ee(s)?(e=!0,Os(t)):e=!1,En(t,n),Nu(t,s,l),Ta(t,s,l,n),$a(null,t,s,!0,e,n);case 19:return _u(e,t,n);case 22:return Eu(e,t,n)}throw Error(S(156,t.tag))};function Qu(e,t){return wd(e,t)}function Kh(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,s){return new Kh(e,t,n,s)}function Ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qh(e){if(typeof e=="function")return Ko(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ho)return 11;if(e===po)return 14}return 2}function zt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ss(e,t,n,s,l,a){var o=2;if(s=e,typeof e=="function")Ko(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mn:return Jt(n.children,l,a,t);case fo:o=8,l|=8;break;case aa:return e=He(12,n,t,l|2),e.elementType=aa,e.lanes=a,e;case oa:return e=He(13,n,t,l),e.elementType=oa,e.lanes=a,e;case ia:return e=He(19,n,t,l),e.elementType=ia,e.lanes=a,e;case rd:return fl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case td:o=10;break e;case nd:o=9;break e;case ho:o=11;break e;case po:o=14;break e;case kt:o=16,s=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=He(o,n,t,l),t.elementType=e,t.type=s,t.lanes=a,t}function Jt(e,t,n,s){return e=He(7,e,s,t),e.lanes=n,e}function fl(e,t,n,s){return e=He(22,e,s,t),e.elementType=rd,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jh(e,t,n,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function qo(e,t,n,s,l,a,o,i,c){return e=new Jh(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=He(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(a),e}function Xh(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Gu(e){if(!e)return Ot;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ee(n))return Gd(e,n,t)}return t}function Ku(e,t,n,s,l,a,o,i,c){return e=qo(n,s,!0,e,l,a,o,i,c),e.context=Gu(null),n=e.current,s=je(),l=It(n),a=ht(s,l),a.callback=t??null,Mt(n,a,l),e.current.lanes=l,Ar(e,l,s),Pe(e,s),e}function hl(e,t,n,s){var l=t.current,a=je(),o=It(l);return n=Gu(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(a,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Mt(l,t,o),e!==null&&(Je(e,l,o,a),vs(e,l,o)),o}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jo(e,t){wc(e,t),(e=e.alternate)&&wc(e,t)}function Zh(){return null}var qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xo(e){this._internalRoot=e}pl.prototype.render=Xo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));hl(e,t,null,null)};pl.prototype.unmount=Xo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){hl(null,e,null,null)}),t[xt]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Rd(e)}};function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function ep(e,t,n,s,l){if(l){if(typeof s=="function"){var a=s;s=function(){var d=Js(o);a.call(d)}}var o=Ku(t,s,e,0,null,!1,!1,"",jc);return e._reactRootContainer=o,e[xt]=o.current,br(e.nodeType===8?e.parentNode:e),nn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var i=s;s=function(){var d=Js(c);i.call(d)}}var c=qo(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=c,e[xt]=c.current,br(e.nodeType===8?e.parentNode:e),nn(function(){hl(t,c,n,s)}),c}function gl(e,t,n,s,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var i=l;l=function(){var c=Js(o);i.call(c)}}hl(t,o,e,l)}else o=ep(n,t,e,l,s);return Js(o)}Sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=sr(t.pendingLanes);n!==0&&(yo(t,n|1),Pe(t,J()),!(A&6)&&(Tn=J()+500,Ut()))}break;case 13:nn(function(){var s=gt(e,1);if(s!==null){var l=je();Je(s,e,1,l)}}),Jo(e,1)}};vo=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var n=je();Je(t,e,134217728,n)}Jo(e,134217728)}};Cd=function(e){if(e.tag===13){var t=It(e),n=gt(e,t);if(n!==null){var s=je();Je(n,e,t,s)}Jo(e,t)}};Ed=function(){return F};Pd=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};ya=function(e,t,n){switch(t){case"input":if(ua(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var l=ol(s);if(!l)throw Error(S(90));ld(s),ua(s,l)}}}break;case"textarea":od(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};hd=Yo;pd=nn;var tp={usingClientEntryPoint:!1,Events:[$r,xn,ol,md,fd,Yo]},Zn={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},np={bundleType:Zn.bundleType,version:Zn.version,rendererPackageName:Zn.rendererPackageName,rendererConfig:Zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yd(e),e===null?null:e.stateNode},findFiberByHostInstance:Zn.findFiberByHostInstance||Zh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{rl=is.inject(np),ot=is}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tp;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zo(t))throw Error(S(200));return Xh(e,t,null,n)};Te.createRoot=function(e,t){if(!Zo(e))throw Error(S(299));var n=!1,s="",l=qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=qo(e,1,!1,null,null,n,!1,s,l),e[xt]=t.current,br(e.nodeType===8?e.parentNode:e),new Xo(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=yd(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return nn(e)};Te.hydrate=function(e,t,n){if(!xl(t))throw Error(S(200));return gl(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Zo(e))throw Error(S(405));var s=n!=null&&n.hydratedSources||null,l=!1,a="",o=qu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ku(t,null,e,1,n??null,l,!1,a,o),e[xt]=t.current,br(e),s)for(e=0;e<s.length;e++)n=s[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new pl(t)};Te.render=function(e,t,n){if(!xl(t))throw Error(S(200));return gl(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!xl(e))throw Error(S(40));return e._reactRootContainer?(nn(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};Te.unstable_batchedUpdates=Yo;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!xl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return gl(e,t,n,!1,s)};Te.version="18.3.1-next-f1338f8080-20240426";function Ju(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ju)}catch(e){console.error(e)}}Ju(),Jc.exports=Te;var rp=Jc.exports,kc=rp;sa.createRoot=kc.createRoot,sa.hydrateRoot=kc.hydrateRoot;/**
 * react-router v7.18.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ei=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Xu=/^[\\/]{2}/;function sp(e,t){return t+e.replace(/\\/g,"/")}var Nc="popstate";function bc(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function lp(e={}){function t(s,l){var d;let a=(d=l.state)==null?void 0:d.masked,{pathname:o,search:i,hash:c}=a||s.location;return Ja("",{pathname:o,search:i,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default",a?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function n(s,l){return typeof l=="string"?l:rn(l)}return op(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ap(){return Math.random().toString(36).substring(2,10)}function Sc(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ja(e,t,n=null,s,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Un(t):t,state:n,key:t&&t.key||s||ap(),mask:l}}function rn({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Un(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function op(e,t,n,s={}){let{window:l=document.defaultView,v5Compat:a=!1}=s,o=l.history,i="POP",c=null,d=f();d==null&&(d=0,o.replaceState({...o.state,idx:d},""));function f(){return(o.state||{idx:null}).idx}function h(){i="POP";let j=f(),m=j==null?null:j-d;d=j,c&&c({action:i,location:w.location,delta:m})}function g(j,m){i="PUSH";let u=bc(j)?j:Ja(w.location,j,m);d=f()+1;let p=Sc(u,d),k=w.createHref(u.mask||u);try{o.pushState(p,"",k)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(k)}a&&c&&c({action:i,location:w.location,delta:1})}function y(j,m){i="REPLACE";let u=bc(j)?j:Ja(w.location,j,m);d=f();let p=Sc(u,d),k=w.createHref(u.mask||u);o.replaceState(p,"",k),a&&c&&c({action:i,location:w.location,delta:0})}function v(j){return ip(l,j)}let w={get action(){return i},get location(){return e(l,o)},listen(j){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Nc,h),c=j,()=>{l.removeEventListener(Nc,h),c=null}},createHref(j){return t(l,j)},createURL:v,encodeLocation(j){let m=v(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(j){return o.go(j)}};return w}function ip(e,t,n=!1){let s="http://localhost";e&&(s=e.location.origin!=="null"?e.location.origin:e.location.href),W(s,"No window.location.(origin|href) available to create URL");let l=typeof t=="string"?t:rn(t);return l=l.replace(/ $/,"%20"),!n&&Xu.test(l)&&(l=s+l),new URL(l,s)}function Zu(e,t,n="/"){return cp(e,t,n,!1)}function cp(e,t,n,s,l){let a=typeof t=="string"?Un(t):t,o=vt(a.pathname||"/",n);if(o==null)return null;let i=dp(e),c=null,d=jp(o);for(let f=0;c==null&&f<i.length;++f)c=wp(i[f],d,s);return c}function dp(e){let t=em(e);return up(t),t}function em(e,t=[],n=[],s="",l=!1){let a=(o,i,c=l,d)=>{let f={relativePath:d===void 0?o.path||"":d,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(s)&&c)return;W(f.relativePath.startsWith(s),`Absolute route path "${f.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(s.length)}let h=Xe([s,f.relativePath]),g=n.concat(f);o.children&&o.children.length>0&&(W(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),em(o.children,t,g,h,c)),!(o.path==null&&!o.index)&&t.push({path:h,score:yp(h,o.index),routesMeta:g.map((y,v)=>{let[w,j]=rm(y.relativePath,y.caseSensitive,v===g.length-1);return{...y,matcher:w,compiledParams:j}})})};return e.forEach((o,i)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,i);else for(let d of tm(o.path))a(o,i,!0,d)}),t}function tm(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let o=tm(s.join("/")),i=[];return i.push(...o.map(c=>c===""?a:[a,c].join("/"))),l&&i.push(...o),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function up(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vp(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var mp=/^:[\w-]+$/,fp=3,hp=2,pp=1,xp=10,gp=-2,Cc=e=>e==="*";function yp(e,t){let n=e.split("/"),s=n.length;return n.some(Cc)&&(s+=gp),t&&(s+=hp),n.filter(l=>!Cc(l)).reduce((l,a)=>l+(mp.test(a)?fp:a===""?pp:xp),s)}function vp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,l)=>s===t[l])?e[e.length-1]-t[t.length-1]:0}function wp(e,t,n=!1){let{routesMeta:s}=e,l={},a="/",o=[];for(let i=0;i<s.length;++i){let c=s[i],d=i===s.length-1,f=a==="/"?t:t.slice(a.length)||"/",h={path:c.relativePath,caseSensitive:c.caseSensitive,end:d},g=c.matcher&&c.compiledParams?nm(h,f,c.matcher,c.compiledParams):Xs(h,f),y=c.route;if(!g&&d&&n&&!s[s.length-1].route.index&&(g=Xs({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!g)return null;Object.assign(l,g.params),o.push({params:l,pathname:Xe([a,g.pathname]),pathnameBase:bp(Xe([a,g.pathnameBase])),route:y}),g.pathnameBase!=="/"&&(a=Xe([a,g.pathnameBase]))}return o}function Xs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=rm(e.path,e.caseSensitive,e.end);return nm(e,t,n,s)}function nm(e,t,n,s){let l=t.match(n);if(!l)return null;let a=l[0],o=An(a,1),i=l.slice(1);return{params:s.reduce((d,{paramName:f,isOptional:h},g)=>{if(f==="*"){let v=i[g]||"";o=An(a.slice(0,a.length-v.length),1)}const y=i[g];return h&&!y?d[f]=void 0:d[f]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:o,pattern:e}}function rm(e,t=!1,n=!0){tt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,c,d,f)=>{if(s.push({paramName:i,isOptional:c!=null}),c){let h=f.charAt(d+o.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(s.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function jp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return tt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function vt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function kp(e,t="/"){let{pathname:n,search:s="",hash:l=""}=typeof e=="string"?Un(e):e,a;return n?(n=sm(n),n.startsWith("/")||n.startsWith("\\")?a=Ec(n.substring(1),"/"):a=Ec(n,t)):a=t,{pathname:a,search:Sp(s),hash:Cp(l)}}function Ec(e,t){let n=An(t).split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Zl(e,t,n,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Np(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ti(e){let t=Np(e);return t.map((n,s)=>s===t.length-1?n.pathname:n.pathnameBase)}function yl(e,t,n,s=!1){let l;typeof e=="string"?l=Un(e):(l={...e},W(!l.pathname||!l.pathname.includes("?"),Zl("?","pathname","search",l)),W(!l.pathname||!l.pathname.includes("#"),Zl("#","pathname","hash",l)),W(!l.search||!l.search.includes("#"),Zl("#","search","hash",l)));let a=e===""||l.pathname==="",o=a?"/":l.pathname,i;if(o==null)i=n;else{let h=t.length-1;if(!s&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}i=h>=0?t[h]:"/"}let c=kp(l,i),d=o&&o!=="/"&&o.endsWith("/"),f=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}var sm=e=>e.replace(/[\\/]{2,}/g,"/"),Xe=e=>sm(e.join("/"));function An(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var bp=e=>An(e).replace(/^\/*/,"/"),Sp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Cp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ep=class{constructor(e,t,n,s=!1){this.status=e,this.statusText=t||"",this.internal=s,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Pp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Rp(e){let t=e.map(n=>n.route.path).filter(Boolean);return Xe(t)||"/"}var lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function am(e,t){let n=e;if(typeof n!="string"||!ei.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let s=n,l=!1;if(lm)try{let a=new URL(window.location.href),o=Xu.test(n)?new URL(sp(n,a.protocol)):new URL(n),i=vt(o.pathname,t);o.origin===a.origin&&i!=null?n=i+o.search+o.hash:l=!0}catch{tt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pc=new URL("http://localhost");function ni(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),Pc)}catch{return Pc}}function ea(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function Lp(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function ri(e,t,n,s){let l=null;try{l=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=l!=null&&!ea(l,n),i=!ea(a,n);if(s==="reject"){if(o||i)throw new Error("External navigation is not allowed")}else if(i&&(l==null||!Lp(e,l)||!ea(l,a)))throw new Error("External navigation is not allowed")}var om=["POST","PUT","PATCH","DELETE"];new Set(om);var _p=["GET",...om];new Set(_p);var Mp=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Dp(e){try{return Mp.includes(new URL(e).protocol)}catch{return!1}}var Bn=x.createContext(null);Bn.displayName="DataRouter";var vl=x.createContext(null);vl.displayName="DataRouterState";var im=x.createContext(!1);function Ip(){return x.useContext(im)}var cm=x.createContext({isTransitioning:!1});cm.displayName="ViewTransition";var zp=x.createContext(new Map);zp.displayName="Fetchers";var Tp=x.createContext(null);Tp.displayName="Await";var Oe=x.createContext(null);Oe.displayName="Navigation";var Hr=x.createContext(null);Hr.displayName="Location";var nt=x.createContext({outlet:null,matches:[],isDataRoute:!1});nt.displayName="Route";var si=x.createContext(null);si.displayName="RouteError";var dm="REACT_ROUTER_ERROR",Ap="REDIRECT",Op="ROUTE_ERROR_RESPONSE";function $p(e){if(e.startsWith(`${dm}:${Ap}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Fp(e){if(e.startsWith(`${dm}:${Op}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Ep(t.status,t.statusText,t.data)}catch{}}function Hp(e,{relative:t}={}){W(Vn(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=x.useContext(Oe),{hash:l,pathname:a,search:o}=Ur(e,{relative:t}),i=a;return n!=="/"&&(i=a==="/"?n:Xe([n,a])),s.createHref({pathname:i,search:o,hash:l})}function Vn(){return x.useContext(Hr)!=null}function We(){return W(Vn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Hr).location}var um="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mm(e){x.useContext(Oe).static||x.useLayoutEffect(e)}function rt(){let{isDataRoute:e}=x.useContext(nt);return e?nx():Up()}function Up(){W(Vn(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Bn),{basename:t,navigator:n}=x.useContext(Oe),{matches:s}=x.useContext(nt),{pathname:l}=We(),a=JSON.stringify(ti(s)),o=x.useRef(!1);return mm(()=>{o.current=!0}),x.useCallback((c,d={})=>{if(tt(o.current,um),!o.current)return;if(typeof c=="number"){n.go(c);return}let f=yl(c,JSON.parse(a),l,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Xe([t,f.pathname])),ri(typeof c=="string"?c:rn(c),n.createHref(f),ni(n),"reject"),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,a,l,e])}var Bp=x.createContext(null);function Vp(e){let t=x.useContext(nt).outlet;return x.useMemo(()=>t&&x.createElement(Bp.Provider,{value:e},t),[t,e])}function Ur(e,{relative:t}={}){let{matches:n}=x.useContext(nt),{pathname:s}=We(),l=JSON.stringify(ti(n));return x.useMemo(()=>yl(e,JSON.parse(l),s,t==="path"),[e,l,s,t])}function Wp(e,t){return fm(e,t)}function fm(e,t,n){var j;W(Vn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=x.useContext(Oe),{matches:l}=x.useContext(nt),a=l[l.length-1],o=a?a.params:{},i=a?a.pathname:"/",c=a?a.pathnameBase:"/",d=a&&a.route;{let m=d&&d.path||"";pm(i,!d||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${i}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let f=We(),h;if(t){let m=typeof t=="string"?Un(t):t;W(c==="/"||((j=m.pathname)==null?void 0:j.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${m.pathname}" was given in the \`location\` prop.`),h=m}else h=f;let g=h.pathname||"/",y=g;if(c!=="/"){let m=c.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=n&&n.state.matches.length?n.state.matches.map(m=>Object.assign(m,{route:n.manifest[m.route.id]||m.route})):Zu(e,{pathname:y});tt(d||v!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),tt(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=qp(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Xe([c,s.encodeLocation?s.encodeLocation(m.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?c:Xe([c,s.encodeLocation?s.encodeLocation(m.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),l,n);return t&&w?x.createElement(Hr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},w):w}function Yp(){let e=tx(),t=Pp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:a},"ErrorBoundary")," or"," ",x.createElement("code",{style:a},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,o)}var Qp=x.createElement(Yp,null),hm=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Fp(e.digest);n&&(e=n)}let t=e!==void 0?x.createElement(nt.Provider,{value:this.props.routeContext},x.createElement(si.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(Gp,{error:e},t):t}};hm.contextType=im;var ta=new WeakMap;function Gp({children:e,error:t}){let{basename:n,navigator:s}=x.useContext(Oe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let l=$p(t.digest);if(l){let a=ta.get(t);if(a)throw a;let o=am(l.location,n),i=o.absoluteURL||o.to;if(ri(l.location,i,ni(s),"allow-explicit"),Dp(i))throw new Error("Invalid redirect location");if(lm&&!ta.get(t))if(o.isExternal||l.reloadDocument)window.location.href=i;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:l.replace}));throw ta.set(t,c),c}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return e}function Kp({routeContext:e,match:t,children:n}){let s=x.useContext(Bn);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(nt.Provider,{value:e},n)}function qp(e,t=[],n){let s=n==null?void 0:n.state;if(e==null){if(!s)return null;if(s.errors)e=s.matches;else if(t.length===0&&!s.initialized&&s.matches.length>0)e=s.matches;else return null}let l=e,a=s==null?void 0:s.errors;if(a!=null){let f=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);W(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),l=l.slice(0,Math.min(l.length,f+1))}let o=!1,i=-1;if(n&&s){o=s.renderFallback;for(let f=0;f<l.length;f++){let h=l[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(i=f),h.route.id){let{loaderData:g,errors:y}=s,v=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!y||y[h.route.id]===void 0);if(h.route.lazy||v){n.isStatic&&(o=!0),i>=0?l=l.slice(0,i+1):l=[l[0]];break}}}}let c=n==null?void 0:n.onError,d=s&&c?(f,h)=>{var g,y;c(f,{location:s.location,params:((y=(g=s.matches)==null?void 0:g[0])==null?void 0:y.params)??{},pattern:Rp(s.matches),errorInfo:h})}:void 0;return l.reduceRight((f,h,g)=>{let y,v=!1,w=null,j=null;s&&(y=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||Qp,o&&(i<0&&g===0?(pm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,j=null):i===g&&(v=!0,j=h.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,g+1)),u=()=>{let p;return y?p=w:v?p=j:h.route.Component?p=x.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=f,x.createElement(Kp,{match:h,routeContext:{outlet:f,matches:m,isDataRoute:s!=null},children:p})};return s&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?x.createElement(hm,{location:s.location,revalidation:s.revalidation,component:w,error:y,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:d}):u()},null)}function li(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Jp(e){let t=x.useContext(Bn);return W(t,li(e)),t}function Xp(e){let t=x.useContext(vl);return W(t,li(e)),t}function Zp(e){let t=x.useContext(nt);return W(t,li(e)),t}function ai(e){let t=Zp(e),n=t.matches[t.matches.length-1];return W(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function ex(){return ai("useRouteId")}function tx(){var s;let e=x.useContext(si),t=Xp("useRouteError"),n=ai("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[n]}function nx(){let{router:e}=Jp("useNavigate"),t=ai("useNavigate"),n=x.useRef(!1);return mm(()=>{n.current=!0}),x.useCallback(async(l,a={})=>{tt(n.current,um),n.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:t,...a}))},[e,t])}var Rc={};function pm(e,t,n){!t&&!Rc[e]&&(Rc[e]=!0,tt(!1,n))}x.memo(rx);function rx({routes:e,manifest:t,future:n,state:s,isStatic:l,onError:a}){return fm(e,void 0,{manifest:t,state:s,isStatic:l,onError:a})}function sx({to:e,replace:t,state:n,relative:s}){W(Vn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l,navigator:a}=x.useContext(Oe);tt(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=x.useContext(nt),{pathname:i}=We(),c=rt(),d=yl(e,ti(o),i,s==="path");ri(typeof e=="string"?e:rn(e),a.createHref(d),ni(a),"reject");let f=JSON.stringify(d);return x.useEffect(()=>{c(JSON.parse(f),{replace:t,state:n,relative:s})},[c,f,s,t,n]),null}function lx(e){return Vp(e.context)}function ve(e){W(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ax({basename:e="/",children:t=null,location:n,navigationType:s="POP",navigator:l,static:a=!1,useTransitions:o}){W(!Vn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:i,navigator:l,static:a,useTransitions:o,future:{}}),[i,l,a,o]);typeof n=="string"&&(n=Un(n));let{pathname:d="/",search:f="",hash:h="",state:g=null,key:y="default",mask:v}=n,w=x.useMemo(()=>{let j=vt(d,i);return j==null?null:{location:{pathname:j,search:f,hash:h,state:g,key:y,mask:v},navigationType:s}},[i,d,f,h,g,y,s,v]);return tt(w!=null,`<Router basename="${i}"> is not able to match the URL "${d}${f}${h}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:x.createElement(Oe.Provider,{value:c},x.createElement(Hr.Provider,{children:t,value:w}))}function ox({children:e,location:t}){return Wp(Xa(e),t)}function Xa(e,t=[]){let n=[];return x.Children.forEach(e,(s,l)=>{if(!x.isValidElement(s))return;let a=[...t,l];if(s.type===x.Fragment){n.push.apply(n,Xa(s.props.children,a));return}W(s.type===ve,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),W(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=Xa(s.props.children,a)),n.push(o)}),n}var Cs="get",Es="application/x-www-form-urlencoded";function wl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ix(e){return wl(e)&&e.tagName.toLowerCase()==="button"}function cx(e){return wl(e)&&e.tagName.toLowerCase()==="form"}function dx(e){return wl(e)&&e.tagName.toLowerCase()==="input"}function ux(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mx(e,t){return e.button===0&&(!t||t==="_self")&&!ux(e)}var cs=null;function fx(){if(cs===null)try{new FormData(document.createElement("form"),0),cs=!1}catch{cs=!0}return cs}var hx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function na(e){return e!=null&&!hx.has(e)?(tt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Es}"`),null):e}function px(e,t){let n,s,l,a,o;if(cx(e)){let i=e.getAttribute("action");s=i?vt(i,t):null,n=e.getAttribute("method")||Cs,l=na(e.getAttribute("enctype"))||Es,a=new FormData(e)}else if(ix(e)||dx(e)&&(e.type==="submit"||e.type==="image")){let i=e.form;if(i==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||i.getAttribute("action");if(s=c?vt(c,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||Cs,l=na(e.getAttribute("formenctype"))||na(i.getAttribute("enctype"))||Es,a=new FormData(i,e),!fx()){let{name:d,type:f,value:h}=e;if(f==="image"){let g=d?`${d}.`:"";a.append(`${g}x`,"0"),a.append(`${g}y`,"0")}else d&&a.append(d,h)}}else{if(wl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Cs,s=null,l=Es,o=e}return a&&l==="text/plain"&&(o=a,a=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function oi(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xm(e,t,n,s){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:t&&vt(l.pathname,t)==="/"?l.pathname=`${An(t)}/_root.${s}`:l.pathname=`${An(l.pathname)}.${s}`,l}async function xx(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gx(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function yx(e,t,n){let s=await Promise.all(e.map(async l=>{let a=t.routes[l.route.id];if(a){let o=await xx(a,n);return o.links?o.links():[]}return[]}));return kx(s.flat(1).filter(gx).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Lc(e,t,n,s,l,a){let o=(c,d)=>n[d]?c.route.id!==n[d].route.id:!0,i=(c,d)=>{var f;return n[d].pathname!==c.pathname||((f=n[d].route.path)==null?void 0:f.endsWith("*"))&&n[d].params["*"]!==c.params["*"]};return a==="assets"?t.filter((c,d)=>o(c,d)||i(c,d)):a==="data"?t.filter((c,d)=>{var h;let f=s.routes[c.route.id];if(!f||!f.hasLoader)return!1;if(o(c,d)||i(c,d))return!0;if(c.route.shouldRevalidate){let g=c.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function vx(e,t,{includeHydrateFallback:n}={}){return wx(e.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let a=[l.module];return l.clientActionModule&&(a=a.concat(l.clientActionModule)),l.clientLoaderModule&&(a=a.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(a=a.concat(l.hydrateFallbackModule)),l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function wx(e){return[...new Set(e)]}function jx(e){let t={},n=Object.keys(e).sort();for(let s of n)t[s]=e[s];return t}function kx(e,t){let n=new Set;return new Set(t),e.reduce((s,l)=>{let a=JSON.stringify(jx(l));return n.has(a)||(n.add(a),s.push({key:a,link:l})),s},[])}function ii(){let e=x.useContext(Bn);return oi(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Nx(){let e=x.useContext(vl);return oi(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ci=x.createContext(void 0);ci.displayName="FrameworkContext";function jl(){let e=x.useContext(ci);return oi(e,"You must render this element inside a <HydratedRouter> element"),e}function bx(e,t){let n=x.useContext(ci),[s,l]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:i,onBlur:c,onMouseEnter:d,onMouseLeave:f,onTouchStart:h}=t,g=x.useRef(null);x.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let w=m=>{m.forEach(u=>{o(u.isIntersecting)})},j=new IntersectionObserver(w,{threshold:.5});return g.current&&j.observe(g.current),()=>{j.disconnect()}}},[e]),x.useEffect(()=>{if(s){let w=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(w)}}},[s]);let y=()=>{l(!0)},v=()=>{l(!1),o(!1)};return n?e!=="intent"?[a,g,{}]:[a,g,{onFocus:er(i,y),onBlur:er(c,v),onMouseEnter:er(d,y),onMouseLeave:er(f,v),onTouchStart:er(h,y)}]:[!1,g,{}]}function er(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Sx({page:e,...t}){let n=Ip(),{nonce:s}=jl(),{router:l}=ii(),a=x.useMemo(()=>Zu(l.routes,e,l.basename),[l.routes,e,l.basename]);return a?(t.nonce==null&&s&&(t={...t,nonce:s}),n?x.createElement(Ex,{page:e,matches:a,...t}):x.createElement(Px,{page:e,matches:a,...t})):null}function Cx(e){let{manifest:t,routeModules:n}=jl(),[s,l]=x.useState([]);return x.useEffect(()=>{let a=!1;return yx(e,t,n).then(o=>{a||l(o)}),()=>{a=!0}},[e,t,n]),s}function Ex({page:e,matches:t,...n}){let s=We(),{future:l}=jl(),{basename:a}=ii(),o=x.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let i=xm(e,a,l.v8_trailingSlashAwareDataRequests,"rsc"),c=!1,d=[];for(let f of t)typeof f.route.shouldRevalidate=="function"?c=!0:d.push(f.route.id);return c&&d.length>0&&i.searchParams.set("_routes",d.join(",")),[i.pathname+i.search]},[a,l.v8_trailingSlashAwareDataRequests,e,s,t]);return x.createElement(x.Fragment,null,o.map(i=>x.createElement("link",{key:i,rel:"prefetch",as:"fetch",href:i,...n})))}function Px({page:e,matches:t,...n}){let s=We(),{future:l,manifest:a,routeModules:o}=jl(),{basename:i}=ii(),{loaderData:c,matches:d}=Nx(),f=x.useMemo(()=>Lc(e,t,d,a,s,"data"),[e,t,d,a,s]),h=x.useMemo(()=>Lc(e,t,d,a,s,"assets"),[e,t,d,a,s]),g=x.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let w=new Set,j=!1;if(t.forEach(u=>{var k;let p=a.routes[u.route.id];!p||!p.hasLoader||(!f.some(N=>N.route.id===u.route.id)&&u.route.id in c&&((k=o[u.route.id])!=null&&k.shouldRevalidate)||p.hasClientLoader?j=!0:w.add(u.route.id))}),w.size===0)return[];let m=xm(e,i,l.v8_trailingSlashAwareDataRequests,"data");return j&&w.size>0&&m.searchParams.set("_routes",t.filter(u=>w.has(u.route.id)).map(u=>u.route.id).join(",")),[m.pathname+m.search]},[i,l.v8_trailingSlashAwareDataRequests,c,s,a,f,t,e,o]),y=x.useMemo(()=>vx(h,a),[h,a]),v=Cx(h);return x.createElement(x.Fragment,null,g.map(w=>x.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),y.map(w=>x.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),v.map(({key:w,link:j})=>x.createElement("link",{key:w,nonce:n.nonce,...j,crossOrigin:j.crossOrigin??n.crossOrigin})))}function Rx(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lx&&(window.__reactRouterVersion="7.18.3")}catch{}function _x({basename:e,children:t,useTransitions:n,window:s}){let l=x.useRef();l.current==null&&(l.current=lp({window:s,v5Compat:!0}));let a=l.current,[o,i]=x.useState({action:a.action,location:a.location}),c=x.useCallback(d=>{n===!1?i(d):x.startTransition(()=>i(d))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(ax,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var O=x.forwardRef(function({onClick:t,discover:n="render",prefetch:s="none",relative:l,reloadDocument:a,replace:o,mask:i,state:c,target:d,to:f,preventScrollReset:h,viewTransition:g,defaultShouldRevalidate:y,...v},w){let{basename:j,navigator:m,useTransitions:u}=x.useContext(Oe),p=typeof f=="string"&&ei.test(f),k=am(f,j);f=k.to;let N=Hp(f,{relative:l}),b=We(),C=null;if(i){let ne=yl(i,[],b.mask?b.mask.pathname:"/",!0);j!=="/"&&(ne.pathname=ne.pathname==="/"?j:Xe([j,ne.pathname])),C=m.createHref(ne)}let[E,_,M]=bx(s,v),ye=zx(f,{replace:o,mask:i,state:c,target:d,preventScrollReset:h,relative:l,viewTransition:g,defaultShouldRevalidate:y,useTransitions:u});function ct(ne){t&&t(ne),ne.defaultPrevented||ye(ne)}let I=!(k.isExternal||a),X=x.createElement("a",{...v,...M,href:(I?C:void 0)||k.absoluteURL||N,onClick:I?ct:t,ref:Rx(w,_),target:d,"data-discover":!p&&n==="render"?"true":void 0});return E&&!p?x.createElement(x.Fragment,null,X,x.createElement(Sx,{page:N})):X});O.displayName="Link";var Mx=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:s="",end:l=!1,style:a,to:o,viewTransition:i,children:c,...d},f){let h=Ur(o,{relative:d.relative}),g=We(),y=x.useContext(vl),{navigator:v,basename:w}=x.useContext(Oe),j=y!=null&&Fx(h)&&i===!0,m=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,u=g.pathname,p=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;n||(u=u.toLowerCase(),p=p?p.toLowerCase():null,m=m.toLowerCase()),p&&w&&(p=vt(p,w)||p);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let N=u===m||!l&&u.startsWith(m)&&u.charAt(k)==="/",b=p!=null&&(p===m||!l&&p.startsWith(m)&&p.charAt(m.length)==="/"),C={isActive:N,isPending:b,isTransitioning:j},E=N?t:void 0,_;typeof s=="function"?_=s(C):_=[s,N?"active":null,b?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let M=typeof a=="function"?a(C):a;return x.createElement(O,{...d,"aria-current":E,className:_,ref:f,style:M,to:o,viewTransition:i},typeof c=="function"?c(C):c)});Mx.displayName="NavLink";var Dx=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:s,replace:l,state:a,method:o=Cs,action:i,onSubmit:c,relative:d,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:g,...y},v)=>{let{useTransitions:w}=x.useContext(Oe),j=Ox(),m=$x(i,{relative:d}),u=o.toLowerCase()==="get"?"get":"post",p=typeof i=="string"&&ei.test(i),k=N=>{if(c&&c(N),N.defaultPrevented)return;N.preventDefault();let b=N.nativeEvent.submitter,C=(b==null?void 0:b.getAttribute("formmethod"))||o,E=()=>j(b||N.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:l,state:a,relative:d,preventScrollReset:f,viewTransition:h,defaultShouldRevalidate:g});w&&n!==!1?x.startTransition(()=>E()):E()};return x.createElement("form",{ref:v,method:u,action:m,onSubmit:s?c:k,...y,"data-discover":!p&&e==="render"?"true":void 0})});Dx.displayName="Form";function Ix(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gm(e){let t=x.useContext(Bn);return W(t,Ix(e)),t}function zx(e,{target:t,replace:n,mask:s,state:l,preventScrollReset:a,relative:o,viewTransition:i,defaultShouldRevalidate:c,useTransitions:d}={}){let f=rt(),h=We(),g=Ur(e,{relative:o});return x.useCallback(y=>{if(mx(y,t)){y.preventDefault();let v=n!==void 0?n:rn(h)===rn(g),w=()=>f(e,{replace:v,mask:s,state:l,preventScrollReset:a,relative:o,viewTransition:i,defaultShouldRevalidate:c});d?x.startTransition(()=>w()):w()}},[h,f,g,n,s,l,t,e,a,o,i,c,d])}var Tx=0,Ax=()=>`__${String(++Tx)}__`;function Ox(){let{router:e}=gm("useSubmit"),{basename:t}=x.useContext(Oe),n=ex(),s=e.fetch,l=e.navigate;return x.useCallback(async(a,o={})=>{let{action:i,method:c,encType:d,formData:f,body:h}=px(a,t);if(o.navigate===!1){let g=o.fetcherKey||Ax();await s(g,n,o.action||i,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await l(o.action||i,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:h,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,l,t,n])}function $x(e,{relative:t}={}){let{basename:n}=x.useContext(Oe),s=x.useContext(nt);W(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),a={...Ur(e||".",{relative:t})},o=We();if(e==null){a.search=o.search;let i=new URLSearchParams(a.search),c=i.getAll("index");if(c.some(f=>f==="")){i.delete("index"),c.filter(h=>h).forEach(h=>i.append("index",h));let f=i.toString();a.search=f?`?${f}`:""}}return(!e||e===".")&&l.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Xe([n,a.pathname])),rn(a)}function Fx(e,{relative:t}={}){let n=x.useContext(cm);W(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=gm("useViewTransitionState"),l=Ur(e,{relative:t});if(!n.isTransitioning)return!1;let a=vt(n.currentLocation.pathname,s)||n.currentLocation.pathname,o=vt(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Xs(l.pathname,o)!=null||Xs(l.pathname,a)!=null}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ym=(...e)=>e.filter((t,n,s)=>!!t&&s.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ux={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:a,iconNode:o,...i},c)=>x.createElement("svg",{ref:c,...Ux,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:ym("lucide",l),...i},[...o.map(([d,f])=>x.createElement(d,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,t)=>{const n=x.forwardRef(({className:s,...l},a)=>x.createElement(Bx,{ref:a,iconNode:t,className:ym(`lucide-${Hx(e)}`,s),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=P("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=P("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=P("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=P("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=P("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=P("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=P("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=P("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=P("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=P("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=P("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=P("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=P("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=P("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=P("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=P("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=P("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=P("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=P("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=P("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=P("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=P("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=P("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=P("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=P("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=P("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=P("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=P("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=P("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=P("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=P("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=P("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=P("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=P("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=P("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=P("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=P("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=P("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=P("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=P("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=P("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=P("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=P("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=P("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=P("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=P("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=P("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=P("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=P("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=P("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=P("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=P("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=P("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=P("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=P("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=P("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=P("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=P("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=P("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=P("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=P("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=P("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=P("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=P("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=P("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=P("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Sm=x.createContext(null);function v0({children:e}){const[t,n]=x.useState([]),s=x.useRef(0),l=x.useCallback(o=>{n(i=>i.filter(c=>c.id!==o))},[]),a=x.useCallback((o,i="success")=>{const c=++s.current;n(d=>[...d,{id:c,message:o,tone:i}]),setTimeout(()=>l(c),4200)},[l]);return r.jsxs(Sm.Provider,{value:a,children:[e,r.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-5 z-[100] flex flex-col items-center gap-2 px-4 sm:items-end sm:right-5 sm:left-auto",role:"status","aria-live":"polite",children:t.map(o=>r.jsxs("div",{className:"pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border border-cloudline bg-white/95 p-4 shadow-soft animate-fadeUp",children:[o.tone==="success"?r.jsx(ie,{className:"mt-0.5 h-5 w-5 shrink-0 text-meadow-600"}):r.jsx(r0,{className:"mt-0.5 h-5 w-5 shrink-0 text-sky-600"}),r.jsx("p",{className:"flex-1 text-sm text-ink",children:o.message}),r.jsx("button",{onClick:()=>l(o.id),"aria-label":"Dismiss notification",className:"text-slate-muted transition-colors hover:text-ink",children:r.jsx(Sl,{className:"h-4 w-4"})})]},o.id))})]})}function mi(){const e=x.useContext(Sm);if(!e)throw new Error("useToast must be used within a ToastProvider");return e}function w0(){return localStorage.getItem("token")?r.jsx(lx,{}):r.jsx(sx,{to:"/login",replace:!0})}const Cm="http://127.0.0.1:8000/api".replace(/\/$/,""),Le=e=>`${Cm}/${e.replace(/^\//,"")}`,j0=e=>{if(!e)return null;if(/^https?:\/\//.test(e))return e;const t=e.replace(/^\/?(?:storage\/)?/,"");return`${Cm.replace(/\/api$/,"")}/storage/${t}`},zc=[{label:"Home",href:"#home"},{label:"How It Works",href:"#how-it-works"},{label:"Categories",href:"#causes"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}];function k0(){const[e,t]=x.useState(!1),[n,s]=x.useState(!1),[l,a]=x.useState(null);x.useEffect(()=>{const d=localStorage.getItem("user");d&&a(JSON.parse(d))},[]);const o=async()=>{const d=localStorage.getItem("token");try{d&&await fetch(Le("/logout"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${d}`}})}catch(f){console.error("Logout error:",f)}localStorage.removeItem("token"),localStorage.removeItem("user"),a(null),s(!1)};x.useEffect(()=>{const d=()=>{t(window.scrollY>12)};return d(),window.addEventListener("scroll",d,{passive:!0}),()=>{window.removeEventListener("scroll",d)}},[]);const i=()=>{s(!1)},c=()=>{s(!1)};return r.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${e?"glass shadow-card":"bg-white/70 backdrop-blur-sm"}`,children:[r.jsxs("nav",{className:"container-max flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16",children:[r.jsxs(O,{to:"/",className:"group flex items-center gap-2 font-display text-lg font-extrabold text-deepsea","aria-label":"HopeCloud Home",children:[r.jsx("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl\r
            bg-deepsea text-white shadow-soft\r
            transition-all duration-300\r
            group-hover:scale-110\r
            group-hover:rotate-3\r
            group-hover:shadow-glow`,children:r.jsx(De,{className:"h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"})}),r.jsx("span",{className:"transition-colors duration-300 group-hover:text-sky-600",children:"HopeCloud"})]}),r.jsx("ul",{className:"hidden items-center gap-1 lg:flex",children:zc.map(d=>r.jsx("li",{children:r.jsxs("a",{href:d.href,className:`group relative rounded-full px-4 py-2.5\r
                font-display text-sm font-semibold text-deepsea\r
                transition-all duration-300\r
                hover:bg-sky-50\r
                hover:text-sky-600`,children:[d.label,r.jsx("span",{className:`absolute bottom-1.5 left-1/2 h-0.5 w-0\r
                  -translate-x-1/2 rounded-full bg-sky-500\r
                  transition-all duration-300\r
                  group-hover:w-5`})]})},d.href))}),r.jsx("div",{className:"hidden items-center gap-2 lg:flex",children:l?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"px-4 py-2.5 font-display text-sm font-semibold text-deepsea",children:["Welcome, ",l.name]}),r.jsxs("button",{type:"button",onClick:o,className:`inline-flex items-center gap-2\r
        rounded-full bg-deepsea\r
        px-5 py-2.5\r
        font-display text-sm font-semibold text-white\r
        shadow-soft\r
        transition-all duration-300\r
        hover:bg-red-500\r
        hover:shadow-glow\r
        hover:-translate-y-0.5`,children:[r.jsx(Nl,{className:"h-4 w-4"}),"Logout"]})]}):r.jsxs(r.Fragment,{children:[r.jsxs(O,{to:"/login",className:`inline-flex items-center gap-2\r
        rounded-full px-4 py-2.5\r
        font-display text-sm font-semibold text-deepsea\r
        transition-all duration-300\r
        hover:bg-sky-50\r
        hover:text-sky-600\r
        hover:-translate-y-0.5`,children:[r.jsx(Dc,{className:"h-4 w-4"}),"Sign In"]}),r.jsxs(O,{to:"/register",className:`group inline-flex items-center gap-2\r
        rounded-full bg-deepsea\r
        px-5 py-2.5\r
        font-display text-sm font-semibold text-white\r
        shadow-soft\r
        transition-all duration-300\r
        hover:bg-sky-600\r
        hover:shadow-glow\r
        hover:-translate-y-0.5\r
        active:scale-[0.98]`,children:[r.jsx(Ir,{className:`h-4 w-4 transition-transform duration-300\r
          group-hover:rotate-6`}),"Join HopeCloud"]})]})}),r.jsx("button",{type:"button",className:`rounded-xl p-2.5 text-deepsea\r
          transition-all duration-300\r
          hover:bg-sky-50\r
          hover:text-sky-600\r
          lg:hidden`,"aria-label":n?"Close navigation menu":"Open navigation menu","aria-expanded":n,onClick:()=>s(d=>!d),children:n?r.jsx(Sl,{className:"h-6 w-6"}):r.jsx(jm,{className:"h-6 w-6"})})]}),n&&r.jsxs("div",{className:`border-t border-cloudline bg-white/95\r
          px-6 pb-6 pt-4 shadow-card\r
          backdrop-blur-xl\r
          animate-fadeUp\r
          lg:hidden`,children:[r.jsx("ul",{className:"flex flex-col gap-1",children:zc.map(d=>r.jsx("li",{children:r.jsx("a",{href:d.href,onClick:c,className:`block rounded-xl px-4 py-3\r
                  font-display text-sm font-semibold text-deepsea\r
                  transition-all duration-300\r
                  hover:bg-sky-50\r
                  hover:text-sky-600\r
                  hover:translate-x-1`,children:d.label})},d.href))}),r.jsx("div",{className:"my-4 h-px bg-cloudline"}),r.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[r.jsxs(O,{to:"/login",onClick:i,className:`inline-flex items-center justify-center gap-2\r
              rounded-xl border border-deepsea/15\r
              bg-white px-4 py-3\r
              font-display text-sm font-semibold text-deepsea\r
              transition-all duration-300\r
              hover:border-sky-400\r
              hover:bg-sky-50\r
              hover:text-sky-600`,children:[r.jsx(Dc,{className:"h-4 w-4"}),"Sign In"]}),r.jsxs(O,{to:"/register",onClick:i,className:`inline-flex items-center justify-center gap-2\r
              rounded-xl bg-deepsea\r
              px-4 py-3\r
              font-display text-sm font-semibold text-white\r
              shadow-soft\r
              transition-all duration-300\r
              hover:bg-sky-600\r
              hover:shadow-glow\r
              active:scale-[0.98]`,children:[r.jsx(Ir,{className:"h-4 w-4"}),"Join Us"]})]})]})]})}const Tc=[{icon:kl,label:"Books",x:22,y:20,tone:"bg-sky-500"},{icon:Br,label:"Clothes",x:80,y:16,tone:"bg-meadow-500"},{icon:xe,label:"Kids Essentials",x:90,y:58,tone:"bg-deepsea"},{icon:Vx,label:"School Supplies",x:58,y:90,tone:"bg-sky-600"},{icon:$,label:"Other Donations",x:12,y:68,tone:"bg-amber-500"}];function N0({className:e=""}){return r.jsxs("div",{className:`relative aspect-square w-full max-w-md mx-auto ${e}`,"aria-hidden":"true",children:[r.jsx("div",{className:"absolute inset-[8%] rounded-full bg-gradient-to-br from-white via-sky-50 to-sky-100 blur-0 shadow-soft"}),r.jsx("div",{className:"absolute left-[2%] top-[22%] h-[46%] w-[46%] rounded-full bg-white/80 blur-xl"}),r.jsx("div",{className:"absolute right-[6%] top-[8%] h-[38%] w-[38%] rounded-full bg-sky-100/90 blur-xl"}),r.jsx("div",{className:"absolute bottom-[6%] left-[20%] h-[40%] w-[52%] rounded-full bg-meadow-400/20 blur-2xl"}),r.jsx("svg",{viewBox:"0 0 100 100",className:"absolute inset-0 h-full w-full",children:Tc.map((t,n)=>r.jsx("line",{x1:"50",y1:"50",x2:t.x,y2:t.y,stroke:"#0B3D91",strokeOpacity:"0.25",strokeWidth:"0.6",strokeDasharray:"2 3",className:"animate-dashMove"},n))}),r.jsx("div",{className:`\r
    absolute\r
    left-1/2\r
    top-1/2\r
    flex\r
    h-16\r
    w-16\r
    -translate-x-1/2\r
    -translate-y-1/2\r
    items-center\r
    justify-center\r
    rounded-full\r
    bg-deepsea\r
    shadow-glow\r
  `,children:r.jsx($,{className:"h-9 w-9 fill-red-500 text-red-500 animate-pulseNode"})}),Tc.map((t,n)=>{const s=t.icon;return r.jsxs("div",{className:`\r
              absolute\r
              flex\r
              flex-col\r
              items-center\r
              gap-1\r
              animate-drift\r
            `,style:{left:`${t.x}%`,top:`${t.y}%`,transform:"translate(-50%, -50%)",animationDelay:`${n*.6}s`},children:[r.jsx("span",{className:`
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                ${t.tone}
                text-white
                shadow-card
                animate-pulseNode
              `,style:{animationDelay:`${n*.4}s`},children:r.jsx(s,{className:"h-5 w-5"})}),r.jsx("span",{className:`\r
                rounded-full\r
                bg-white/90\r
                px-2\r
                py-0.5\r
                text-center\r
                font-mono\r
                text-[9px]\r
                uppercase\r
                tracking-wide\r
                text-deepsea\r
                shadow-sm\r
                backdrop-blur-sm\r
              `,children:t.label})]},t.label)})]})}function Em(e=.2){const t=x.useRef(null),[n,s]=x.useState(!1);return x.useEffect(()=>{const l=t.current;if(!l)return;if(typeof IntersectionObserver>"u"){s(!0);return}const a=new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&(s(!0),a.unobserve(i.target))})},{threshold:e});return a.observe(l),()=>a.disconnect()},[e]),[t,n]}function pe({as:e="div",delay:t=0,className:n="",children:s}){const[l,a]=Em();return r.jsx(e,{ref:l,className:`reveal ${a?"is-visible":""} ${n}`,style:{transitionDelay:a?`${t}ms`:"0ms"},children:s})}function b0(){const e=mi(),t=()=>{e("Please create an account or log in to start your donation.","info")};return r.jsxs("section",{id:"home",className:"relative overflow-hidden bg-mist pt-32 sm:pt-40",children:[r.jsx("div",{className:`\r
          pointer-events-none\r
          absolute\r
          -right-32\r
          -top-32\r
          h-96\r
          w-96\r
          rounded-full\r
          bg-sky-100\r
          blur-3xl\r
        `}),r.jsx("div",{className:`\r
          pointer-events-none\r
          absolute\r
          -left-32\r
          top-1/3\r
          h-80\r
          w-80\r
          rounded-full\r
          bg-meadow-400/10\r
          blur-3xl\r
        `}),r.jsx(De,{className:`\r
          pointer-events-none\r
          absolute\r
          left-[5%]\r
          top-[22%]\r
          h-14\r
          w-14\r
          text-sky-200/70\r
        `,strokeWidth:1.2}),r.jsx(De,{className:`\r
          pointer-events-none\r
          absolute\r
          right-[7%]\r
          top-[16%]\r
          h-20\r
          w-20\r
          text-white/90\r
        `,strokeWidth:1}),r.jsx(De,{className:`\r
          pointer-events-none\r
          absolute\r
          bottom-[12%]\r
          left-[7%]\r
          h-10\r
          w-10\r
          text-sky-200/50\r
        `,strokeWidth:1}),r.jsx(ce,{className:`\r
          pointer-events-none\r
          absolute\r
          left-[16%]\r
          top-[18%]\r
          h-5\r
          w-5\r
          text-sky-400/60\r
        `,strokeWidth:1.5}),r.jsx(ce,{className:`\r
          pointer-events-none\r
          absolute\r
          right-[20%]\r
          top-[27%]\r
          h-4\r
          w-4\r
          text-amber-500/60\r
        `,strokeWidth:1.5}),r.jsx(ce,{className:`\r
          pointer-events-none\r
          absolute\r
          bottom-[18%]\r
          right-[10%]\r
          h-5\r
          w-5\r
          text-meadow-500/50\r
        `,strokeWidth:1.5}),r.jsxs("div",{className:`\r
          container-max\r
          relative\r
          z-10\r
          grid\r
          gap-14\r
          px-6\r
          pb-20\r
          sm:px-10\r
          lg:grid-cols-[1.05fr_0.95fr]\r
          lg:items-center\r
          lg:gap-10\r
          lg:px-16\r
          lg:pb-28\r
        `,children:[r.jsxs(pe,{children:[r.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[r.jsx("span",{className:`\r
                flex\r
                h-8\r
                w-8\r
                items-center\r
                justify-center\r
                rounded-full\r
                bg-sky-100\r
              `,children:r.jsx($,{className:"h-4 w-4 fill-sky-500 text-sky-500"})}),r.jsx("span",{className:"eyebrow",children:"Give a little. Change a lot."})]}),r.jsx("h1",{className:`\r
    max-w-2xl\r
    font-display\r
    text-3xl\r
    font-extrabold\r
    leading-[1.08]\r
    tracking-[-0.025em]\r
    text-ink\r
    sm:text-4xl\r
    md:text-5xl\r
    lg:text-[3.4rem]\r
    xl:text-[3.8rem]\r
  `,children:"Turning Hope Into Action."}),r.jsx("p",{className:`\r
              mt-6\r
              max-w-xl\r
              text-base\r
              leading-7\r
              text-slate-muted\r
              sm:text-lg\r
              sm:leading-8\r
            `,children:"Donate clothes, books, toys, school supplies, and other useful items to people and children who need them. Whether new or gently used, your donation can make a meaningful difference."}),r.jsxs("div",{className:"mt-9 flex flex-wrap items-center gap-4",children:[r.jsxs("button",{onClick:t,className:"btn-primary group",children:[r.jsx(xe,{className:`\r
                  h-4\r
                  w-4\r
                  transition-transform\r
                  duration-300\r
                  group-hover:scale-110\r
                `}),"Donate Now",r.jsx($t,{className:`\r
                  h-4\r
                  w-4\r
                  transition-transform\r
                  duration-300\r
                  group-hover:translate-x-1\r
                `})]}),r.jsx("a",{href:"#how-it-works",className:"btn-secondary",children:"How It Works"})]}),r.jsxs("div",{className:`\r
              mt-9\r
              flex\r
              items-center\r
              gap-2\r
              text-sm\r
              text-slate-muted\r
            `,children:[r.jsx(ln,{className:"h-4 w-4 text-meadow-600"}),r.jsx("span",{children:"Every useful item can have a second life."})]})]}),r.jsx(pe,{delay:150,children:r.jsxs("div",{className:"relative",children:[r.jsx(ce,{className:`\r
                pointer-events-none\r
                absolute\r
                -right-2\r
                top-4\r
                z-20\r
                h-6\r
                w-6\r
                text-amber-500/70\r
              `,strokeWidth:1.5}),r.jsx(N0,{})]})})]}),r.jsxs("div",{className:`\r
          relative\r
          z-10\r
          mx-auto\r
          flex\r
          max-w-5xl\r
          flex-wrap\r
          justify-center\r
          gap-x-6\r
          gap-y-3\r
          px-6\r
          pb-10\r
          text-xs\r
          font-semibold\r
          text-slate-muted\r
          sm:px-10\r
        `,children:[r.jsx("span",{children:"👕 Clothes"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"📚 Books"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"🎁 Kids Essentials"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"🎒 School Supplies"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"✨ More"})]})]})}function S0(e,t,n=1600){const[s,l]=x.useState(0);return x.useEffect(()=>{if(!t)return;let a;const o=performance.now(),i=c=>{const d=Math.min((c-o)/n,1),f=1-Math.pow(1-d,3);l(Math.floor(f*e)),d<1&&(a=requestAnimationFrame(i))};return a=requestAnimationFrame(i),()=>cancelAnimationFrame(a)},[t,e,n]),s}const C0=[{id:"people",label:"People Helped",value:24,suffix:"+"},{id:"families",label:"Families Supported",value:12,suffix:"+"},{id:"meals",label:"Meals Provided",value:85,suffix:"+"},{id:"education",label:"Education Opportunities",value:18,suffix:"+"},{id:"communities",label:"Communities Reached",value:6,suffix:""}],E0=[{id:1,title:"A New Opportunity to Learn",quote:"With school supplies and a mobile classroom nearby, Amara started her first year of school at nine years old — and hasn’t missed a day since.",name:"Amara, 9",tag:"Education"},{id:2,title:"From Support to Self-Reliance",quote:"A small business grant and mentorship helped Farhan turn his repair skills into a shop of his own, now employing two neighbors.",name:"Farhan, 34",tag:"Skills & Employment"},{id:3,title:"A Community Coming Together",quote:"When the well ran dry, HopeCloud volunteers and local families rebuilt it together — now the whole village shares clean water again.",name:"Village of Rasheed Nagar",tag:"Clean Water"}],P0=[{id:"volunteer",icon:"HeartHandshake",title:"Volunteer",description:"Give your time on the ground or remotely."},{id:"donate",icon:"Gift",title:"Donate",description:"Fund a cause or campaign you believe in."},{id:"mentor",icon:"Lightbulb",title:"Mentor",description:"Share your skills and guide someone forward."},{id:"resources",icon:"PackagePlus",title:"Provide Resources",description:"Contribute goods, tools, or services."},{id:"drive",icon:"Megaphone",title:"Organize a Community Drive",description:"Rally your community around a cause."}],R0=[{label:"About",href:"#about"},{label:"Causes",href:"#causes"},{label:"Impact",href:"#impact"},{label:"How It Works",href:"#how-it-works"},{label:"Volunteer",href:"#volunteer"},{label:"Contact",href:"#contact"},{label:"Privacy Policy",href:"#privacy"},{label:"Terms",href:"#terms"}];function L0({stat:e,active:t,delay:n}){const s=S0(e.value,t,1800);return r.jsxs("div",{className:`rounded-2xl border border-cloudline bg-white/70 p-6 text-center shadow-card transition-all duration-700 ease-out ${t?"translate-y-0 opacity-100":"translate-y-4 opacity-0"}`,style:{transitionDelay:`${n}ms`},children:[r.jsxs("p",{className:"font-display text-3xl font-extrabold text-deepsea sm:text-4xl",children:[s.toLocaleString(),e.suffix]}),r.jsx("p",{className:"mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-muted",children:e.label})]})}function _0(){const[e,t]=Em(.3);return r.jsx("section",{id:"impact",ref:e,className:"section-pad bg-white/60",children:r.jsxs("div",{className:"container-max",children:[r.jsxs("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:[r.jsx("span",{className:"eyebrow justify-center",children:"Real-time impact"}),r.jsx("h2",{className:"mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Numbers that mean people"}),r.jsx("p",{className:"mt-3 text-slate-muted",children:"Every figure below represents a person, a family, or a community HopeCloud has helped reach."})]}),r.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",children:C0.map((n,s)=>r.jsx(L0,{stat:n,active:t,delay:s*90},n.id))})]})})}const Ac=[{id:"01",icon:km,title:"Find Something to Give",description:"Choose something you no longer need — such as books, clothes, food, or useful household items."},{id:"02",icon:xe,title:"Share Your Donation",description:"Tell us what you want to donate, add a photo and a few details, then submit your donation."},{id:"03",icon:ce,title:"We Find the Right Match",description:"HopeCloud helps connect your donation with a verified need where it can make the most difference."},{id:"04",icon:sn,title:"Your Gift Reaches Someone",description:"Your donated item is delivered to a person, family, or community that genuinely needs it."},{id:"05",icon:Wx,title:"See the Difference",description:"Track your donation, see its status, and discover the real impact your contribution has created."}];function M0(){return r.jsxs("section",{id:"how-it-works",className:"relative overflow-hidden bg-white section-pad",children:[r.jsx("div",{className:`\r
          pointer-events-none\r
          absolute\r
          -left-32\r
          top-20\r
          h-72\r
          w-72\r
          rounded-full\r
          bg-sky-100/50\r
          blur-3xl\r
        `}),r.jsx("div",{className:`\r
          pointer-events-none\r
          absolute\r
          -right-32\r
          bottom-10\r
          h-80\r
          w-80\r
          rounded-full\r
          bg-meadow-400/10\r
          blur-3xl\r
        `}),r.jsxs("div",{className:"container-max relative z-10",children:[r.jsx("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:r.jsxs(pe,{children:[r.jsx("span",{className:"eyebrow justify-center",children:"How it works"}),r.jsxs("h2",{className:`\r
                mt-4\r
                font-display\r
                text-3xl\r
                font-extrabold\r
                tracking-tight\r
                text-ink\r
                sm:text-4xl\r
                lg:text-5xl\r
              `,children:["From Your Hands",r.jsx("span",{className:"text-sky-500",children:" to Someone's Hope."})]}),r.jsx("p",{className:"mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-muted sm:text-base",children:"Donating through HopeCloud is simple. Give something useful, let us connect it with the right need, and see the difference your kindness creates."})]})}),r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:`\r
              pointer-events-none\r
              absolute\r
              left-[10%]\r
              right-[10%]\r
              top-10\r
              hidden\r
              h-px\r
              bg-gradient-to-r\r
              from-sky-100\r
              via-sky-300\r
              to-meadow-200\r
              lg:block\r
            `,"aria-hidden":"true"}),r.jsx("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5",children:Ac.map((e,t)=>{const n=e.icon;return r.jsx(pe,{delay:t*120,className:"relative",children:r.jsxs("div",{className:"group relative flex h-full flex-col",children:[r.jsxs("div",{className:"relative z-10 flex items-center justify-between lg:block",children:[r.jsx("div",{className:`\r
                          flex\r
                          h-20\r
                          w-20\r
                          items-center\r
                          justify-center\r
                          rounded-2xl\r
                          border\r
                          border-cloudline\r
                          bg-white\r
                          shadow-card\r
                          transition-all\r
                          duration-300\r
                          group-hover:-translate-y-1\r
                          group-hover:border-sky-200\r
                          group-hover:shadow-soft\r
                        `,children:r.jsx(n,{className:`\r
                            h-7\r
                            w-7\r
                            text-deepsea\r
                            transition-colors\r
                            duration-300\r
                            group-hover:text-sky-500\r
                          `})}),r.jsxs("span",{className:`\r
                          font-mono\r
                          text-xs\r
                          font-bold\r
                          tracking-[0.15em]\r
                          text-sky-500\r
                          lg:absolute\r
                          lg:left-24\r
                          lg:top-2\r
                        `,children:["STEP ",e.id]})]}),r.jsxs("div",{className:"mt-5",children:[r.jsx("h3",{className:`\r
                          font-display\r
                          text-lg\r
                          font-bold\r
                          leading-snug\r
                          text-ink\r
                        `,children:e.title}),r.jsx("p",{className:`\r
                          mt-2\r
                          text-sm\r
                          leading-relaxed\r
                          text-slate-muted\r
                        `,children:e.description})]}),t<Ac.length-1&&r.jsx("div",{className:`\r
                          absolute\r
                          bottom-[-32px]\r
                          left-10\r
                          hidden\r
                          h-8\r
                          w-px\r
                          bg-cloudline\r
                          sm:block\r
                          lg:hidden\r
                        `,"aria-hidden":"true"})]})},e.id)})})]}),r.jsx(pe,{delay:650,children:r.jsxs("div",{className:`\r
              mx-auto\r
              mt-14\r
              flex\r
              max-w-3xl\r
              flex-col\r
              items-center\r
              justify-between\r
              gap-4\r
              rounded-2xl\r
              border\r
              border-sky-100\r
              bg-sky-50/60\r
              px-6\r
              py-5\r
              text-center\r
              sm:flex-row\r
              sm:text-left\r
            `,children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`\r
                  flex\r
                  h-10\r
                  w-10\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  bg-white\r
                  text-sky-500\r
                  shadow-sm\r
                `,children:r.jsx(sn,{className:"h-5 w-5"})}),r.jsx("p",{className:"text-sm font-semibold text-ink",children:"One simple donation can become someone's new beginning."})]}),r.jsx("a",{href:"/donate",className:`\r
                inline-flex\r
                shrink-0\r
                items-center\r
                rounded-full\r
                bg-deepsea\r
                px-5\r
                py-2.5\r
                text-xs\r
                font-bold\r
                text-white\r
                transition-all\r
                duration-300\r
                hover:-translate-y-0.5\r
                hover:bg-sky-600\r
                hover:shadow-glow\r
              `,children:"Start Giving"})]})})]})]})}const D0={GraduationCap:Xx,Soup:h0,Home:e0,Stethoscope:p0,Droplets:qx,Briefcase:Yx},Oc={sky:{bg:"bg-sky-50",text:"text-sky-600",bar:"bg-sky-500"},meadow:{bg:"bg-meadow-400/10",text:"text-meadow-600",bar:"bg-meadow-500"},deepsea:{bg:"bg-deepsea/5",text:"text-deepsea",bar:"bg-deepsea"}};function I0({cause:e}){const t=D0[e.icon]||xe,n=Oc[e.accent]||Oc.sky,s=e.raised??0,l=e.goal??1e3,a=Math.min(100,Math.round(s/l*100)),o=mi();return r.jsxs("div",{className:"group flex flex-col rounded-2xl border border-cloudline bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft",children:[r.jsx("div",{className:`flex h-12 w-12 items-center justify-center rounded-xl ${n.bg} ${n.text}`,children:r.jsx(t,{className:"h-6 w-6"})}),r.jsx("h3",{className:"mt-5 font-display text-lg font-bold text-ink",children:e.title}),r.jsx("p",{className:"mt-2 flex-1 text-sm leading-relaxed text-slate-muted",children:e.description}),r.jsxs("div",{className:"mt-6",children:[r.jsx("div",{className:"h-2 w-full overflow-hidden rounded-full bg-cloudline",children:r.jsx("div",{className:`h-full rounded-full ${n.bar}`,style:{width:`${a}%`}})}),r.jsxs("div",{className:"mt-2 flex items-center justify-between font-mono text-[11px] text-slate-muted",children:[r.jsxs("span",{children:["$",s.toLocaleString()," raised"]}),r.jsxs("span",{children:[a,"% of $",l.toLocaleString()]})]})]}),r.jsxs("button",{onClick:()=>o("Please create an account first to support this cause."),className:`\r
    mt-5\r
    inline-flex\r
    items-center\r
    justify-center\r
    gap-1.5\r
    rounded-full\r
    border\r
    border-deepsea/15\r
    py-2.5\r
    font-display\r
    text-sm\r
    font-semibold\r
    text-deepsea\r
    transition-all\r
    duration-300\r
    hover:-translate-y-0.5\r
    hover:border-sky-400\r
    hover:bg-sky-50\r
    hover:shadow-soft\r
  `,children:["Support this cause",r.jsx(Rn,{className:"h-4 w-4"})]})]})}const z0=[{id:"books",icon:"BookOpen",title:"Books & Educational Materials",description:"Give storybooks, textbooks, learning materials, and other resources that can help someone learn and grow.",accent:"sky"},{id:"clothes",icon:"Shirt",title:"Clothes & Shoes",description:"Donate clean, gently used clothing and shoes that are still in good condition and ready to be used again.",accent:"meadow"},{id:"school-supplies",icon:"Pencil",title:"School Supplies",description:"Help students by donating notebooks, stationery, backpacks, art supplies, and other learning essentials.",accent:"deepsea"},{id:"toys",icon:"Gamepad2",title:"Toys & Children's Items",description:"Share toys, games, and useful children’s items that can bring joy and support to children in need.",accent:"sky"},{id:"household",icon:"House",title:"Household Essentials",description:"Donate useful household items that can make everyday life easier for individuals and families.",accent:"meadow"},{id:"other",icon:"Gift",title:"Other Useful Items",description:"Have something useful that does not fit a category? You can still share it and help it find a new purpose.",accent:"deepsea"}];function T0(){return r.jsxs("section",{id:"causes",className:"relative overflow-hidden bg-white/60 section-pad",children:[r.jsx("div",{className:`\r
          pointer-events-none\r
          absolute\r
          -left-32\r
          top-20\r
          h-72\r
          w-72\r
          rounded-full\r
          bg-sky-100/50\r
          blur-3xl\r
        `}),r.jsx("div",{className:`\r
          pointer-events-none\r
          -right-32\r
          bottom-10\r
          absolute\r
          h-80\r
          w-80\r
          rounded-full\r
          bg-meadow-400/10\r
          blur-3xl\r
        `}),r.jsxs("div",{className:"container-max relative z-10",children:[r.jsx("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:r.jsxs(pe,{children:[r.jsx("span",{className:"eyebrow justify-center",children:"What you can give"}),r.jsxs("h2",{className:`\r
                mt-4\r
                font-display\r
                text-3xl\r
                font-extrabold\r
                tracking-tight\r
                text-ink\r
                sm:text-4xl\r
                lg:text-5xl\r
              `,children:["Give What You Can.",r.jsx("span",{className:"block text-sky-500",children:"Make It Matter."})]}),r.jsx("p",{className:`\r
                mx-auto\r
                mt-4\r
                max-w-xl\r
                text-sm\r
                leading-relaxed\r
                text-slate-muted\r
                sm:text-base\r
              `,children:"Have something useful that you no longer need? Your everyday items can find a new home and become something meaningful for someone else."})]})}),r.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:z0.map((e,t)=>r.jsx(pe,{delay:t%3*120,children:r.jsx(I0,{cause:e})},e.id))}),r.jsx(pe,{delay:500,children:r.jsxs("div",{className:`\r
              mx-auto\r
              mt-12\r
              max-w-3xl\r
              rounded-2xl\r
              border\r
              border-sky-100\r
              bg-sky-50/60\r
              px-6\r
              py-5\r
              text-center\r
            `,children:[r.jsx("p",{className:"text-sm font-semibold text-ink",children:"Not sure if your item is suitable?"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Don't worry. Add a photo and a few details when you submit your donation, and HopeCloud can help determine where it can create the most value."})]})})]})]})}const $c=["Your Donation","AI Understands It","Finds a Matching Need","Reaches the Right Person"],A0=[{icon:Re,title:"Books",text:"Matches educational books with students or learning centers that need them."},{icon:sn,title:"Clothes",text:"Connects clean, usable clothing with verified families who need it."},{icon:ce,title:"Toys & Gifts",text:"Helps meaningful gifts and toys reach children who can benefit from them."},{icon:m0,title:"School Supplies",text:"Finds students and community programs looking for stationery and school essentials."},{icon:bl,title:"Verified Needs",text:"Prioritizes genuine, verified requests so your donation can create real impact."}];function O0(){return r.jsxs("section",{className:"relative overflow-hidden bg-deepsea py-20 sm:py-24",children:[r.jsx("div",{className:"pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-meadow-500/10 blur-3xl"}),r.jsxs("div",{className:"container-max relative z-10",children:[r.jsxs(pe,{className:"mx-auto max-w-3xl text-center",children:[r.jsxs("span",{className:`\r
              inline-flex\r
              items-center\r
              gap-1.5\r
              rounded-full\r
              border\r
              border-white/10\r
              bg-white/10\r
              px-3\r
              py-1\r
              font-mono\r
              text-[11px]\r
              font-semibold\r
              uppercase\r
              tracking-[0.14em]\r
              text-sky-100\r
            `,children:[r.jsx(ce,{className:"h-3 w-3"}),"Smart Matching"]}),r.jsxs("h2",{className:`\r
              mt-5\r
              font-display\r
              text-3xl\r
              font-extrabold\r
              leading-tight\r
              text-white\r
              sm:text-4xl\r
              lg:text-5xl\r
            `,children:["Your Donation.",r.jsx("span",{className:"block text-sky-300",children:"Matched With The Right Need."})]}),r.jsx("p",{className:"mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-sky-50/75 sm:text-base",children:"HopeCloud uses AI to understand what you donate and help match it with verified needs in the community — so useful things reach people who can genuinely benefit from them."})]}),r.jsx(pe,{delay:120,className:"mt-14",children:r.jsx("div",{className:"mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 md:flex-row md:gap-2",children:$c.map((e,t)=>r.jsxs("div",{className:"flex w-full items-center justify-center md:w-auto",children:[r.jsx("div",{className:`\r
                    flex\r
                    min-h-[76px]\r
                    w-full\r
                    items-center\r
                    justify-center\r
                    rounded-2xl\r
                    border\r
                    border-white/10\r
                    bg-white/[0.07]\r
                    px-5\r
                    text-center\r
                    backdrop-blur-sm\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-1\r
                    hover:bg-white/10\r
                    md:w-[190px]\r
                  `,children:r.jsxs("div",{children:[r.jsxs("span",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-sky-300",children:["Step ",t+1]}),r.jsx("p",{className:"mt-1 font-display text-sm font-bold text-white",children:e})]})}),t<$c.length-1&&r.jsx($t,{className:"mx-2 hidden h-4 w-4 shrink-0 text-sky-300 md:block"})]},e))})}),r.jsx("div",{className:"mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3",children:A0.map((e,t)=>{const n=e.icon;return r.jsx(pe,{delay:t*90,children:r.jsxs("div",{className:`\r
            group\r
            flex\r
            h-full\r
            items-start\r
            gap-4\r
            rounded-2xl\r
            border\r
            border-white/10\r
            bg-white/[0.06]\r
            p-4\r
            transition-all\r
            duration-300\r
            hover:-translate-y-1\r
            hover:border-white/20\r
            hover:bg-white/[0.09]\r
          `,children:[r.jsx("div",{className:`\r
              flex\r
              h-10\r
              w-10\r
              shrink-0\r
              items-center\r
              justify-center\r
              rounded-xl\r
              bg-white/10\r
              text-sky-300\r
              transition-transform\r
              duration-300\r
              group-hover:scale-110\r
            `,children:r.jsx(n,{className:"h-5 w-5"})}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("h3",{className:"font-display text-sm font-bold text-white",children:e.title}),r.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-sky-50/65",children:e.text})]})]})},e.title)})}),r.jsx(pe,{delay:250,children:r.jsxs("div",{className:`\r
              mx-auto\r
              mt-10\r
              flex\r
              max-w-3xl\r
              flex-col\r
              items-center\r
              gap-3\r
              rounded-2xl\r
              border\r
              border-white/10\r
              bg-white/[0.05]\r
              px-5\r
              py-4\r
              text-center\r
              sm:flex-row\r
              sm:text-left\r
            `,children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300",children:r.jsx(Tt,{className:"h-4 w-4"})}),r.jsxs("p",{className:"text-xs leading-relaxed text-sky-50/70",children:["Instead of wondering where your donation will go, HopeCloud helps create a clear connection between"," ",r.jsx("span",{className:"font-semibold text-white",children:"what you have"})," ","and"," ",r.jsx("span",{className:"font-semibold text-white",children:"who needs it."})]})]})})]})]})}function $0(){return r.jsx("section",{className:"section-pad bg-white/60",children:r.jsxs("div",{className:"container-max",children:[r.jsxs("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:[r.jsx("span",{className:"eyebrow justify-center",children:"Stories of hope"}),r.jsx("h2",{className:"mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Real change, told simply"})]}),r.jsx("div",{className:"grid gap-6 lg:grid-cols-3",children:E0.map((e,t)=>r.jsx(pe,{delay:t*120,children:r.jsxs("div",{className:"flex h-full flex-col rounded-2xl border border-cloudline bg-white p-7 shadow-card",children:[r.jsx(u0,{className:"h-6 w-6 text-sky-400"}),r.jsx("h3",{className:"mt-4 font-display text-lg font-bold text-ink",children:e.title}),r.jsxs("p",{className:"mt-3 flex-1 text-sm leading-relaxed text-slate-muted",children:["“",e.quote,"”"]}),r.jsxs("div",{className:"mt-6 flex items-center justify-between border-t border-cloudline pt-4",children:[r.jsx("span",{className:"text-sm font-semibold text-ink",children:e.name}),r.jsx("span",{className:"rounded-full bg-sky-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-sky-600",children:e.tag})]})]})},e.id))})]})})}const F0={HeartHandshake:sn,Gift:xe,Lightbulb:l0,PackagePlus:c0,Megaphone:o0};function H0(){const[e,t]=x.useState(""),[n,s]=x.useState(""),l=mi(),a=o=>{if(o.preventDefault(),!e.trim()){s("Enter your email to join the community.");return}if(!/^\S+@\S+\.\S+$/.test(e)){s("That email doesn’t look quite right.");return}s(""),l("Welcome to HopeCloud! Check your inbox for next steps."),t("")};return r.jsx("section",{id:"volunteer",className:"section-pad",children:r.jsxs("div",{className:"container-max",children:[r.jsxs("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:[r.jsx("span",{className:"eyebrow justify-center",children:"Get involved"}),r.jsx("h2",{className:"mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"You Don't Have to Donate Money to Make a Difference."})]}),r.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-5",children:P0.map((o,i)=>{const c=F0[o.icon];return r.jsx(pe,{delay:i*90,children:r.jsxs("div",{className:"flex h-full flex-col items-start gap-3 rounded-2xl border border-cloudline bg-white p-6 text-left shadow-card transition-transform hover:-translate-y-1",children:[r.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-meadow-400/15 text-meadow-600",children:r.jsx(c,{className:"h-5 w-5"})}),r.jsx("h3",{className:"font-display text-base font-bold text-ink",children:o.title}),r.jsx("p",{className:"text-sm text-slate-muted",children:o.description})]})},o.id)})}),r.jsxs(pe,{delay:200,className:"mx-auto mt-14 max-w-xl rounded-3xl border border-cloudline bg-white p-8 text-center shadow-card",children:[r.jsx("h3",{className:"font-display text-xl font-bold text-ink",children:"Join the HopeCloud Community"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Get updates on causes, volunteer openings, and impact reports."}),r.jsxs("form",{onSubmit:a,noValidate:!0,className:"mt-6 flex flex-col gap-3 sm:flex-row",children:[r.jsxs("div",{className:"flex-1 text-left",children:[r.jsx("label",{htmlFor:"volunteer-email",className:"sr-only",children:"Email address"}),r.jsx("input",{id:"volunteer-email",type:"email",value:e,onChange:o=>t(o.target.value),placeholder:"you@example.com","aria-invalid":!!n,"aria-describedby":n?"volunteer-email-error":void 0,className:`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-sky-400 ${n?"border-amber-500":"border-cloudline"}`}),n&&r.jsx("p",{id:"volunteer-email-error",className:"mt-2 text-xs text-amber-600",children:n})]}),r.jsxs("button",{type:"submit",className:"btn-primary shrink-0",children:["Join Now ",r.jsx(f0,{className:"h-4 w-4"})]})]})]})]})})}const U0=[{icon:x0,label:"Twitter"},{icon:s0,label:"Instagram"},{icon:Jx,label:"Facebook"},{icon:a0,label:"LinkedIn"}];function B0(){const e=rt(),t=()=>{e("/register",{state:{message:"Please create an account first to donate an item."}})};return r.jsx("footer",{id:"about",className:"bg-deepsea text-white",children:r.jsxs("div",{className:"container-max px-6 py-14 sm:px-10 lg:px-16",children:[r.jsxs("div",{className:"grid gap-12 lg:grid-cols-[1.4fr_2fr]",children:[r.jsxs("div",{className:"max-w-sm",children:[r.jsxs("a",{href:"#home",className:"inline-flex items-center gap-2 font-display text-xl font-extrabold",children:[r.jsx("span",{className:`\r
                  flex\r
                  h-10\r
                  w-10\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  bg-white/10\r
                  ring-1\r
                  ring-white/10\r
                `,children:r.jsx(De,{className:"h-5 w-5 text-sky-300"})}),r.jsx("span",{children:"HopeCloud"})]}),r.jsx("p",{className:"mt-4 max-w-xs text-sm leading-relaxed text-sky-50/65",children:"Technology for humanity. Hope for everyone. Making it easier for useful things to reach people who need them."}),r.jsx("div",{className:"mt-6 flex items-center gap-2",children:U0.map(({icon:n,label:s})=>r.jsx("a",{href:"#","aria-label":s,className:`\r
                    flex\r
                    h-9\r
                    w-9\r
                    items-center\r
                    justify-center\r
                    rounded-full\r
                    border\r
                    border-white/10\r
                    bg-white/5\r
                    text-sky-100\r
                    transition-all\r
                    duration-200\r
                    hover:-translate-y-0.5\r
                    hover:border-white/20\r
                    hover:bg-white/10\r
                    hover:text-white\r
                  `,children:r.jsx(n,{className:"h-4 w-4"})},s))})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-8 sm:grid-cols-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"font-display text-xs font-bold uppercase tracking-[0.14em] text-white",children:"Explore"}),r.jsx("div",{className:"mt-5 space-y-3",children:R0.slice(0,3).map(n=>r.jsxs("a",{href:n.href,className:`\r
                      group\r
                      flex\r
                      items-center\r
                      gap-1\r
                      text-sm\r
                      text-sky-50/65\r
                      transition-colors\r
                      hover:text-white\r
                    `,children:[n.label,r.jsx(Rn,{className:`\r
                        h-3 w-3\r
                        opacity-0\r
                        transition-opacity\r
                        group-hover:opacity-100\r
                      `})]},n.label))})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-display text-xs font-bold uppercase tracking-[0.14em] text-white",children:"Support"}),r.jsxs("div",{className:"mt-5 space-y-3",children:[r.jsx("a",{href:"#causes",className:"block text-sm text-sky-50/65 transition-colors hover:text-white",children:"Causes"}),r.jsx("a",{href:"#how-it-works",className:"block text-sm text-sky-50/65 transition-colors hover:text-white",children:"How It Works"}),r.jsx("a",{href:"#ai-matching",className:"block text-sm text-sky-50/65 transition-colors hover:text-white",children:"AI Matching"})]})]}),r.jsxs("div",{id:"contact",children:[r.jsx("h3",{className:"font-display text-xs font-bold uppercase tracking-[0.14em] text-white",children:"HopeCloud"}),r.jsxs("div",{className:"mt-5 space-y-3",children:[r.jsx("a",{href:"#about",className:"block text-sm text-sky-50/65 transition-colors hover:text-white",children:"About Us"}),r.jsx("a",{href:"#contact",className:"block text-sm text-sky-50/65 transition-colors hover:text-white",children:"Contact"}),r.jsx("a",{href:"#",className:"block text-sm text-sky-50/65 transition-colors hover:text-white",children:"Privacy"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-display text-xs font-bold uppercase tracking-[0.14em] text-white",children:"Make an Impact"}),r.jsx("p",{className:"mt-5 text-sm leading-relaxed text-sky-50/60",children:"Have something useful you no longer need?"}),r.jsxs("button",{onClick:t,className:`\r
    mt-6\r
    inline-flex\r
    items-center\r
    gap-2\r
    rounded-full\r
    bg-white\r
    px-5\r
    py-2.5\r
    text-sm\r
    font-bold\r
    text-deepsea\r
    transition-all\r
    duration-300\r
    hover:-translate-y-0.5\r
    hover:bg-sky-50\r
    hover:shadow-lg\r
  `,children:[r.jsx(xe,{className:"h-4 w-4"}),"Donate an Item"]})]})]})]}),r.jsx("div",{className:"mt-12 border-t border-white/10"}),r.jsxs("div",{className:"flex flex-col gap-3 pt-6 text-xs text-sky-50/45 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("p",{children:["© ",new Date().getFullYear()," HopeCloud. All rights reserved."]}),r.jsxs("p",{className:"inline-flex items-center gap-1",children:["Built with",r.jsx($,{className:"h-3 w-3 fill-current text-sky-300"}),"for a more giving world."]})]})]})})}const V0="/assets/about-bg-C0mx47-o.jpg";function W0(){return r.jsxs("section",{id:"about",className:`\r
        relative\r
        overflow-hidden\r
        py-20\r
        sm:py-24\r
      `,children:[r.jsx("div",{className:`\r
    absolute\r
    inset-0\r
    bg-cover\r
    bg-center\r
  `,style:{backgroundImage:`url(${V0})`}}),r.jsx("div",{className:"absolute inset-0 bg-deepsea/45"}),r.jsx("div",{className:"container-max relative z-10",children:r.jsxs(pe,{className:"mx-auto max-w-3xl text-center",children:[r.jsxs("span",{className:`\r
              inline-flex\r
              items-center\r
              gap-1.5\r
              rounded-full\r
              border\r
              border-white/15\r
              bg-white/10\r
              px-3\r
              py-1.5\r
              font-mono\r
              text-[10px]\r
              font-semibold\r
              uppercase\r
              tracking-[0.15em]\r
              text-sky-200\r
            `,children:[r.jsx(ce,{className:"h-3 w-3"}),"About HopeCloud"]}),r.jsxs("h2",{className:`\r
              mt-5\r
              font-display\r
              text-3xl\r
              font-extrabold\r
              leading-tight\r
              text-white\r
              sm:text-4xl\r
            `,children:["One Donation Can Make a",r.jsx("span",{className:"block text-sky-300",children:"Meaningful Difference."})]}),r.jsx("p",{className:`\r
              mx-auto\r
              mt-5\r
              max-w-2xl\r
              text-sm\r
              leading-relaxed\r
              text-sky-50/80\r
              sm:text-base\r
            `,children:"HopeCloud is a community donation platform that helps people give useful items they no longer need to people who genuinely need them. With smart AI matching and verified needs, we make donating simple, meaningful, and more impactful."}),r.jsx("div",{className:"mt-8 flex justify-center",children:r.jsxs("div",{className:`\r
                inline-flex\r
                items-center\r
                gap-2\r
                rounded-full\r
                border\r
                border-white/10\r
                bg-white/10\r
                px-5\r
                py-2.5\r
                text-sm\r
                font-semibold\r
                text-white\r
                backdrop-blur-sm\r
              `,children:[r.jsx($,{className:"h-4 w-4 fill-current text-sky-300"}),"Give what you can. Help where it matters."]})})]})})]})}function Y0(){const e=rt(),[t,n]=x.useState({email:"",password:""}),[s,l]=x.useState({}),[a,o]=x.useState(!1),[i,c]=x.useState(!1),[d,f]=x.useState(!1),[h,g]=x.useState(!1),y=j=>{const{name:m,value:u}=j.target;n(p=>({...p,[m]:u})),s[m]&&l(p=>({...p,[m]:""}))},v=()=>{const j={},m=t.email.trim(),u=t.password;return m?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)||(j.email="Please enter a valid email address."):j.email="Please enter your email address.",u?u.length<8&&(j.password="Password must be at least 8 characters."):j.password="Please enter your password.",j},w=async j=>{j.preventDefault();const m=v();if(Object.keys(m).length>0){l(m);return}l({}),f(!0);try{const u=await fetch(Le("/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:t.email.trim(),password:t.password})}),p=await u.json();if(!u.ok){if(p.errors){const k={};p.errors.email&&(k.email=p.errors.email[0]),p.errors.password&&(k.password=p.errors.password[0]),l(k)}else l({email:p.message||"Login failed. Please try again."});return}localStorage.setItem("token",p.token),localStorage.setItem("user",JSON.stringify(p.user)),g(!0),setTimeout(()=>{e("/")},1800)}catch(u){console.error("Login error:",u),l({email:"Unable to connect to the server. Please try again."})}finally{f(!1)}};return r.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-mist",children:[r.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:`absolute -left-32 -top-32 h-80 w-80\r
          rounded-full bg-sky-100/70 blur-3xl\r
          animate-driftSlow`}),r.jsx("div",{className:`absolute -bottom-40 -right-32 h-96 w-96\r
          rounded-full bg-sky-100/80 blur-3xl\r
          animate-drift`}),r.jsx("div",{className:`absolute left-1/3 top-1/4 h-40 w-40\r
          rounded-full bg-white/80 blur-3xl`}),r.jsx(De,{className:`absolute left-[7%] top-[18%]\r
          h-12 w-12 text-sky-200/70\r
          animate-drift`}),r.jsx(De,{className:`absolute right-[8%] top-[14%]\r
          h-16 w-16 text-sky-200/60\r
          animate-driftSlow`}),r.jsx(De,{className:`absolute bottom-[12%] left-[12%]\r
          h-10 w-10 text-sky-200/60\r
          animate-driftSlow`}),r.jsx("span",{className:`absolute left-[15%] top-[35%]\r
          h-3 w-3 rounded-full bg-sky-300/70\r
          animate-pulseNode`}),r.jsx("span",{className:`absolute right-[17%] top-[42%]\r
          h-2.5 w-2.5 rounded-full bg-sky-400/50\r
          animate-pulseNode`}),r.jsx("span",{className:`absolute bottom-[25%] right-[12%]\r
          h-3 w-3 rounded-full bg-meadow/50\r
          animate-pulseNode`})]}),r.jsx("div",{className:"relative z-20 px-6 py-5 sm:px-10 lg:px-16",children:r.jsx("div",{className:"container-max",children:r.jsxs(O,{to:"/",className:`group inline-flex items-center gap-2\r
            font-display text-sm font-semibold text-deepsea\r
            transition-all duration-300\r
            hover:-translate-x-1 hover:text-sky-600`,children:[r.jsx("span",{className:`flex h-9 w-9 items-center justify-center\r
              rounded-xl bg-white shadow-card\r
              transition-all duration-300\r
              group-hover:shadow-glow`,children:r.jsx(Ze,{className:"h-4 w-4"})}),"Back to Home"]})})}),r.jsx("main",{className:`relative z-10 flex min-h-[calc(100vh-80px)]\r
        items-center justify-center px-6 pb-12 pt-4\r
        sm:px-10 lg:px-16`,children:r.jsx("div",{className:"container-max w-full",children:r.jsxs("div",{className:"grid items-center gap-12 lg:grid-cols-2 lg:gap-20",children:[r.jsx("section",{className:"hidden lg:block",children:r.jsxs("div",{className:"max-w-xl",children:[r.jsxs("div",{className:"eyebrow",children:[r.jsx($,{className:"h-3.5 w-3.5 fill-sky-500 text-sky-500"}),"Welcome to HopeCloud"]}),r.jsxs("h1",{className:`mt-5 text-5xl font-bold leading-[1.08]\r
                  text-deepsea xl:text-6xl`,children:["Welcome back.",r.jsx("span",{className:"mt-2 block text-sky-500",children:"Let's spread hope."})]}),r.jsx("p",{className:"mt-6 max-w-lg text-lg leading-8 text-slate-muted",children:"Sign in to continue your journey of giving. Together, small acts of kindness can make a meaningful difference."}),r.jsxs("div",{className:"relative mt-12 h-44",children:[r.jsx("div",{className:`absolute left-12 top-2 flex h-32 w-32\r
                    items-center justify-center rounded-full\r
                    bg-white/80 shadow-soft backdrop-blur-xl\r
                    animate-drift`,children:r.jsx("div",{className:`flex h-20 w-20 items-center justify-center\r
                      rounded-full bg-sky-50`,children:r.jsx($,{className:"h-10 w-10 fill-sky-500 text-sky-500"})})}),r.jsx("div",{className:`absolute left-40 top-12 flex h-16 w-16\r
                    items-center justify-center rounded-2xl\r
                    bg-white shadow-card\r
                    animate-driftSlow`,children:"👕"}),r.jsx("div",{className:`absolute left-64 top-2 flex h-16 w-16\r
                    items-center justify-center rounded-2xl\r
                    bg-white shadow-card\r
                    animate-drift`,children:"📚"}),r.jsx("div",{className:`absolute left-72 top-24 flex h-16 w-16\r
                    items-center justify-center rounded-2xl\r
                    bg-white shadow-card\r
                    animate-driftSlow`,children:"🧸"})]}),r.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-6 gap-y-3",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-muted",children:[r.jsx(ln,{className:"h-4 w-4 text-meadow-500"}),"Secure experience"]}),r.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-muted",children:[r.jsx($,{className:"h-4 w-4 fill-sky-500 text-sky-500"}),"Give with purpose"]})]})]})}),r.jsx("section",{className:"w-full",children:r.jsxs("div",{className:`mx-auto w-full max-w-md\r
                rounded-[2rem]\r
                border border-white/80\r
                bg-white/85\r
                p-7 shadow-soft\r
                backdrop-blur-xl\r
                sm:p-9\r
                animate-fadeUp`,children:[r.jsx("div",{className:"mb-7 flex items-center justify-center lg:hidden",children:r.jsxs(O,{to:"/",className:`group flex items-center gap-2\r
                    font-display text-xl font-extrabold text-deepsea`,children:[r.jsx("span",{className:`flex h-10 w-10 items-center justify-center\r
                      rounded-xl bg-deepsea text-white shadow-soft\r
                      transition-all duration-300\r
                      group-hover:scale-105 group-hover:shadow-glow`,children:r.jsx(De,{className:"h-5 w-5"})}),"HopeCloud"]})}),r.jsxs("div",{className:"mb-7 text-center lg:text-left",children:[r.jsx("h2",{className:"font-display text-3xl font-bold text-deepsea",children:"Sign in"}),r.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-muted",children:"Welcome back! Enter your details to continue."})]}),h?r.jsxs("div",{className:`flex flex-col items-center py-10 text-center\r
                    animate-fadeUp`,children:[r.jsx("div",{className:`flex h-20 w-20 items-center justify-center\r
                      rounded-full bg-meadow/10`,children:r.jsx(ie,{className:"h-12 w-12 text-meadow-600"})}),r.jsx("h3",{className:"mt-6 text-2xl font-bold text-deepsea",children:"Welcome back!"}),r.jsx("p",{className:"mt-2 max-w-xs text-sm leading-6 text-slate-muted",children:"You have signed in successfully. Taking you to HopeCloud..."})]}):r.jsxs("form",{onSubmit:w,noValidate:!0,className:"space-y-5",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"login-email",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Email address"}),r.jsxs("div",{className:"relative",children:[r.jsx(Wn,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"login-email",name:"email",type:"email",value:t.email,onChange:y,placeholder:"you@example.com",autoComplete:"email","aria-invalid":!!s.email,"aria-describedby":s.email?"login-email-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.email?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`})]}),s.email&&r.jsx("p",{id:"login-email-error",className:"mt-2 text-xs font-medium text-red-500",children:s.email})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"login-password",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(no,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"login-password",name:"password",type:a?"text":"password",value:t.password,onChange:y,placeholder:"Enter your password",autoComplete:"current-password","aria-invalid":!!s.password,"aria-describedby":s.password?"login-password-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.password?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`}),r.jsx("button",{type:"button",onClick:()=>o(j=>!j),className:`absolute right-3 top-1/2\r
                          flex h-9 w-9 -translate-y-1/2\r
                          items-center justify-center rounded-xl\r
                          text-slate-400\r
                          transition-all duration-300\r
                          hover:bg-sky-50 hover:text-sky-600`,"aria-label":a?"Hide password":"Show password",children:a?r.jsx(eo,{className:"h-4.5 w-4.5"}):r.jsx(to,{className:"h-4.5 w-4.5"})})]}),s.password&&r.jsx("p",{id:"login-password-error",className:"mt-2 text-xs font-medium text-red-500",children:s.password})]}),r.jsxs("div",{className:"flex items-center justify-between gap-4",children:[r.jsxs("label",{htmlFor:"remember-me",className:`flex cursor-pointer items-center gap-2\r
                        text-xs font-medium text-slate-muted`,children:[r.jsx("input",{id:"remember-me",type:"checkbox",checked:i,onChange:j=>c(j.target.checked),className:"h-4 w-4 rounded accent-sky-500"}),"Remember me"]}),r.jsx("button",{type:"button",className:`text-xs font-semibold text-sky-600\r
                        transition-colors duration-300\r
                        hover:text-deepsea`,children:"Forgot password?"})]}),r.jsx("button",{type:"submit",disabled:d,className:`group flex w-full items-center\r
                      justify-center gap-2 rounded-2xl\r
                      bg-deepsea px-5 py-3.5\r
                      font-display text-sm font-bold text-white\r
                      shadow-soft\r
                      transition-all duration-300\r
                      hover:-translate-y-0.5\r
                      hover:bg-sky-600\r
                      hover:shadow-glow\r
                      active:scale-[0.98]\r
                      disabled:cursor-not-allowed\r
                      disabled:opacity-70\r
                      disabled:hover:translate-y-0`,children:d?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`h-4 w-4 animate-spin rounded-full\r
                            border-2 border-white/30 border-t-white`}),"Signing in..."]}):r.jsxs(r.Fragment,{children:["Sign in",r.jsx(Ze,{className:`h-4 w-4 rotate-180\r
                            transition-transform duration-300\r
                            group-hover:translate-x-1`})]})}),r.jsx("div",{className:"pt-2 text-center",children:r.jsxs("p",{className:"text-sm text-slate-muted",children:["Don't have an account?"," ",r.jsx(O,{to:"/register",className:`font-bold text-sky-600\r
                          transition-colors duration-300\r
                          hover:text-deepsea`,children:"Join HopeCloud"})]})})]})]})})]})})})]})}function Q0(){const e=rt(),[t,n]=x.useState({name:"",email:"",password:"",confirmPassword:""}),[s,l]=x.useState({}),[a,o]=x.useState(!1),[i,c]=x.useState(!1),[d,f]=x.useState(!1),[h,g]=x.useState(!1),[y,v]=x.useState(!1),w=b=>{const{name:C,value:E}=b.target;n(_=>({..._,[C]:E})),s[C]&&l(_=>({..._,[C]:""})),C==="password"&&s.confirmPassword&&E===t.confirmPassword&&l(_=>({..._,confirmPassword:""})),C==="confirmPassword"&&s.confirmPassword&&E===t.password&&l(_=>({..._,confirmPassword:""}))},j=x.useMemo(()=>({length:t.password.length>=8,uppercase:/[A-Z]/.test(t.password),number:/\d/.test(t.password),special:/[^A-Za-z0-9]/.test(t.password)}),[t.password]),m=Object.values(j).filter(Boolean).length,u=x.useMemo(()=>t.password?m<=1?{label:"Weak",width:"25%"}:m===2?{label:"Fair",width:"50%"}:m===3?{label:"Good",width:"75%"}:{label:"Strong",width:"100%"}:{label:"",width:"0%"},[t.password,m]),p=()=>{const b={},C=t.name.trim(),E=t.email.trim(),_=t.password,M=t.confirmPassword;return C?C.length<2&&(b.name="Name must be at least 2 characters."):b.name="Please enter your full name.",E?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E)||(b.email="Please enter a valid email address."):b.email="Please enter your email address.",_?m<3&&(b.password="Please choose a stronger password using the requirements below."):b.password="Please create a password.",M?_!==M&&(b.confirmPassword="Passwords do not match."):b.confirmPassword="Please confirm your password.",d||(b.terms="Please accept the Terms & Conditions to continue."),b},k=async b=>{b.preventDefault();const C=p();if(Object.keys(C).length>0){l(C);return}l({}),g(!0);try{const E=await fetch(Le("/register"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.name.trim(),email:t.email.trim(),password:t.password,password_confirmation:t.confirmPassword})}),_=await E.json();if(!E.ok){if(_.errors){const M={};_.errors.name&&(M.name=_.errors.name[0]),_.errors.email&&(M.email=_.errors.email[0]),_.errors.password&&(M.password=_.errors.password[0]),l(M)}else l({email:_.message||"Registration failed. Please try again."});return}localStorage.setItem("token",_.token),localStorage.setItem("user",JSON.stringify(_.user)),v(!0)}catch(E){console.error("Registration error:",E),l({email:"Unable to connect to the server. Please try again."})}finally{g(!1)}},N=()=>{e("/login")};return r.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-mist",children:[r.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:`absolute -right-40 -top-40 h-96 w-96\r
          rounded-full bg-sky-100/80 blur-3xl\r
          animate-drift`}),r.jsx("div",{className:`absolute -bottom-32 -left-32 h-96 w-96\r
          rounded-full bg-sky-100/70 blur-3xl\r
          animate-driftSlow`}),r.jsx("div",{className:`absolute left-1/4 top-1/3 h-48 w-48\r
          rounded-full bg-white/80 blur-3xl`}),r.jsx(De,{className:`absolute left-[6%] top-[15%]\r
          h-14 w-14 text-sky-200/70\r
          animate-driftSlow`}),r.jsx(De,{className:`absolute right-[9%] top-[20%]\r
          h-12 w-12 text-sky-200/70\r
          animate-drift`}),r.jsx(De,{className:`absolute bottom-[13%] right-[15%]\r
          h-16 w-16 text-sky-200/60\r
          animate-driftSlow`}),r.jsx("span",{className:`absolute left-[14%] top-[40%]\r
          h-3 w-3 rounded-full bg-sky-300/60\r
          animate-pulseNode`}),r.jsx("span",{className:`absolute right-[19%] top-[38%]\r
          h-2.5 w-2.5 rounded-full bg-meadow/50\r
          animate-pulseNode`}),r.jsx("span",{className:`absolute bottom-[22%] left-[20%]\r
          h-3 w-3 rounded-full bg-amber/50\r
          animate-pulseNode`})]}),r.jsx("div",{className:"relative z-20 px-6 py-5 sm:px-10 lg:px-16",children:r.jsx("div",{className:"container-max",children:r.jsxs(O,{to:"/",className:`group inline-flex items-center gap-2\r
            font-display text-sm font-semibold text-deepsea\r
            transition-all duration-300\r
            hover:-translate-x-1 hover:text-sky-600`,children:[r.jsx("span",{className:`flex h-9 w-9 items-center justify-center\r
              rounded-xl bg-white shadow-card\r
              transition-all duration-300\r
              group-hover:shadow-glow`,children:r.jsx(Ze,{className:"h-4 w-4"})}),"Back to Home"]})})}),r.jsx("main",{className:`relative z-10 flex min-h-[calc(100vh-80px)]\r
        items-center justify-center px-6 pb-12 pt-2\r
        sm:px-10 lg:px-16`,children:r.jsx("div",{className:"container-max w-full",children:r.jsxs("div",{className:"grid items-center gap-12 lg:grid-cols-2 lg:gap-20",children:[r.jsx("section",{className:"hidden lg:block",children:r.jsxs("div",{className:"max-w-xl",children:[r.jsxs("div",{className:"eyebrow",children:[r.jsx($,{className:"h-3.5 w-3.5 fill-sky-500 text-sky-500"}),"Join the HopeCloud community"]}),r.jsxs("h1",{className:`mt-5 text-5xl font-bold leading-[1.08]\r
                  text-deepsea xl:text-6xl`,children:["Start your journey",r.jsx("span",{className:"mt-2 block text-sky-500",children:"of giving."})]}),r.jsx("p",{className:"mt-6 max-w-lg text-lg leading-8 text-slate-muted",children:"Create your HopeCloud account and turn things you no longer need into something meaningful for someone else."}),r.jsxs("div",{className:"relative mt-12 h-40",children:[r.jsx("div",{className:`absolute left-8 top-5 flex h-20 w-20\r
                    items-center justify-center rounded-3xl\r
                    bg-white text-3xl shadow-card\r
                    animate-drift`,children:"👕"}),r.jsx("div",{className:`absolute left-32 top-0 flex h-20 w-20\r
                    items-center justify-center rounded-3xl\r
                    bg-white text-3xl shadow-card\r
                    animate-driftSlow`,children:"📚"}),r.jsx("div",{className:`absolute left-56 top-8 flex h-20 w-20\r
                    items-center justify-center rounded-3xl\r
                    bg-white text-3xl shadow-card\r
                    animate-drift`,children:"🧸"}),r.jsx("div",{className:`absolute left-80 top-0 flex h-16 w-16\r
                    items-center justify-center rounded-2xl\r
                    bg-white text-3xl shadow-card\r
                    animate-driftSlow`,children:"❤️"})]}),r.jsxs("div",{className:`mt-3 flex max-w-md items-start gap-3\r
                  rounded-2xl border border-white/80\r
                  bg-white/60 p-4 backdrop-blur-sm`,children:[r.jsx("div",{className:`flex h-9 w-9 shrink-0 items-center\r
                    justify-center rounded-xl bg-sky-50`,children:r.jsx($,{className:"h-4 w-4 fill-sky-500 text-sky-500"})}),r.jsxs("p",{className:"text-sm leading-6 text-slate-muted",children:[r.jsx("span",{className:"font-semibold text-deepsea",children:"Every item can create an impact."})," ","Give something a second life and help someone who needs it."]})]})]})}),r.jsx("section",{className:"w-full",children:r.jsxs("div",{className:`mx-auto w-full max-w-md\r
                rounded-[2rem]\r
                border border-white/80\r
                bg-white/85\r
                p-7 shadow-soft\r
                backdrop-blur-xl\r
                sm:p-9\r
                animate-fadeUp`,children:[r.jsx("div",{className:"mb-6 flex items-center justify-center lg:hidden",children:r.jsxs(O,{to:"/",className:`group flex items-center gap-2\r
                    font-display text-xl font-extrabold text-deepsea`,children:[r.jsx("span",{className:`flex h-10 w-10 items-center justify-center\r
                      rounded-xl bg-deepsea text-white shadow-soft\r
                      transition-all duration-300\r
                      group-hover:scale-105 group-hover:shadow-glow`,children:r.jsx(De,{className:"h-5 w-5"})}),"HopeCloud"]})}),r.jsxs("div",{className:"mb-6 text-center lg:text-left",children:[r.jsx("h2",{className:"font-display text-3xl font-bold text-deepsea",children:"Create account"}),r.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-muted",children:"Join HopeCloud and start spreading hope."})]}),y?r.jsxs("div",{className:`flex flex-col items-center py-10 text-center\r
                    animate-fadeUp`,children:[r.jsx("div",{className:`flex h-20 w-20 items-center justify-center\r
                      rounded-full bg-meadow/10`,children:r.jsx(ie,{className:"h-12 w-12 text-meadow-600"})}),r.jsx("h3",{className:"mt-6 text-2xl font-bold text-deepsea",children:"Welcome to HopeCloud!"}),r.jsx("p",{className:"mt-3 max-w-xs text-sm leading-6 text-slate-muted",children:"Your account has been created successfully. Your journey of giving starts today."}),r.jsxs("button",{type:"button",onClick:N,className:`mt-7 inline-flex items-center\r
                      justify-center gap-2 rounded-2xl\r
                      bg-deepsea px-6 py-3.5\r
                      font-display text-sm font-bold text-white\r
                      shadow-soft\r
                      transition-all duration-300\r
                      hover:-translate-y-0.5\r
                      hover:bg-sky-600\r
                      hover:shadow-glow\r
                      active:scale-[0.98]`,children:["Continue to Sign In",r.jsx(Ze,{className:"h-4 w-4 rotate-180"})]})]}):r.jsxs("form",{onSubmit:k,noValidate:!0,className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"register-name",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Full name"}),r.jsxs("div",{className:"relative",children:[r.jsx(g0,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"register-name",name:"name",type:"text",value:t.name,onChange:w,placeholder:"Enter your full name",autoComplete:"name","aria-invalid":!!s.name,"aria-describedby":s.name?"register-name-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.name?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`})]}),s.name&&r.jsx("p",{id:"register-name-error",className:"mt-2 text-xs font-medium text-red-500",children:s.name})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"register-email",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Email address"}),r.jsxs("div",{className:"relative",children:[r.jsx(Wn,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"register-email",name:"email",type:"email",value:t.email,onChange:w,placeholder:"you@example.com",autoComplete:"email","aria-invalid":!!s.email,"aria-describedby":s.email?"register-email-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.email?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`})]}),s.email&&r.jsx("p",{id:"register-email-error",className:"mt-2 text-xs font-medium text-red-500",children:s.email})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"register-password",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(no,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"register-password",name:"password",type:a?"text":"password",value:t.password,onChange:w,placeholder:"Create a strong password",autoComplete:"new-password","aria-invalid":!!s.password,"aria-describedby":"password-requirements",className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.password?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`}),r.jsx("button",{type:"button",onClick:()=>o(b=>!b),className:`absolute right-3 top-1/2\r
                          flex h-9 w-9 -translate-y-1/2\r
                          items-center justify-center rounded-xl\r
                          text-slate-400\r
                          transition-all duration-300\r
                          hover:bg-sky-50 hover:text-sky-600`,"aria-label":a?"Hide password":"Show password",children:a?r.jsx(eo,{className:"h-4.5 w-4.5"}):r.jsx(to,{className:"h-4.5 w-4.5"})})]}),t.password&&r.jsxs("div",{className:"mt-3",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs font-medium text-slate-muted",children:"Password strength"}),r.jsx("span",{className:`text-xs font-bold ${u.label==="Strong"?"text-meadow-600":u.label==="Good"?"text-sky-600":u.label==="Fair"?"text-amber-600":"text-red-500"}`,children:u.label})]}),r.jsx("div",{className:"mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100",children:r.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${u.label==="Strong"?"bg-meadow-500":u.label==="Good"?"bg-sky-500":u.label==="Fair"?"bg-amber-500":"bg-red-400"}`,style:{width:u.width}})})]}),r.jsxs("div",{id:"password-requirements",className:"mt-3 grid grid-cols-2 gap-x-3 gap-y-2",children:[r.jsx(ds,{valid:j.length,text:"8+ characters"}),r.jsx(ds,{valid:j.uppercase,text:"Uppercase letter"}),r.jsx(ds,{valid:j.number,text:"One number"}),r.jsx(ds,{valid:j.special,text:"Special character"})]}),s.password&&r.jsx("p",{className:"mt-2 text-xs font-medium text-red-500",children:s.password})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"register-confirm-password",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Confirm password"}),r.jsxs("div",{className:"relative",children:[r.jsx(no,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"register-confirm-password",name:"confirmPassword",type:i?"text":"password",value:t.confirmPassword,onChange:w,placeholder:"Confirm your password",autoComplete:"new-password","aria-invalid":!!s.confirmPassword,"aria-describedby":s.confirmPassword?"register-confirm-password-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.confirmPassword?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`}),r.jsx("button",{type:"button",onClick:()=>c(b=>!b),className:`absolute right-3 top-1/2\r
                          flex h-9 w-9 -translate-y-1/2\r
                          items-center justify-center rounded-xl\r
                          text-slate-400\r
                          transition-all duration-300\r
                          hover:bg-sky-50 hover:text-sky-600`,"aria-label":i?"Hide confirm password":"Show confirm password",children:i?r.jsx(eo,{className:"h-4.5 w-4.5"}):r.jsx(to,{className:"h-4.5 w-4.5"})})]}),t.confirmPassword&&t.password===t.confirmPassword&&r.jsxs("div",{className:"mt-2 flex items-center gap-1.5 text-xs font-medium text-meadow-600",children:[r.jsx(vm,{className:"h-3.5 w-3.5"}),"Passwords match"]}),s.confirmPassword&&r.jsx("p",{id:"register-confirm-password-error",className:"mt-2 text-xs font-medium text-red-500",children:s.confirmPassword})]}),r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"terms",className:"flex cursor-pointer items-start gap-2.5",children:[r.jsx("input",{id:"terms",type:"checkbox",checked:d,onChange:b=>{f(b.target.checked),b.target.checked&&l(C=>({...C,terms:""}))},className:`mt-0.5 h-4 w-4 shrink-0\r
                          rounded accent-sky-500`,"aria-invalid":!!s.terms}),r.jsxs("span",{className:"text-xs leading-5 text-slate-muted",children:["I agree to the"," ",r.jsx("button",{type:"button",className:`font-semibold text-sky-600\r
                            hover:text-deepsea`,children:"Terms & Conditions"})," ","and"," ",r.jsx("button",{type:"button",className:`font-semibold text-sky-600\r
                            hover:text-deepsea`,children:"Privacy Policy"})]})]}),s.terms&&r.jsx("p",{className:"mt-2 text-xs font-medium text-red-500",children:s.terms})]}),r.jsx("button",{type:"submit",disabled:h,className:`group flex w-full items-center\r
                      justify-center gap-2 rounded-2xl\r
                      bg-deepsea px-5 py-3.5\r
                      font-display text-sm font-bold text-white\r
                      shadow-soft\r
                      transition-all duration-300\r
                      hover:-translate-y-0.5\r
                      hover:bg-sky-600\r
                      hover:shadow-glow\r
                      active:scale-[0.98]\r
                      disabled:cursor-not-allowed\r
                      disabled:opacity-70\r
                      disabled:hover:translate-y-0`,children:h?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`h-4 w-4 animate-spin rounded-full\r
                            border-2 border-white/30 border-t-white`}),"Creating account..."]}):r.jsxs(r.Fragment,{children:["Create Account",r.jsx(Ze,{className:`h-4 w-4 rotate-180\r
                            transition-transform duration-300\r
                            group-hover:translate-x-1`})]})}),r.jsx("div",{className:"pt-2 text-center",children:r.jsxs("p",{className:"text-sm text-slate-muted",children:["Already have an account?"," ",r.jsx(O,{to:"/login",className:`font-bold text-sky-600\r
                          transition-colors duration-300\r
                          hover:text-deepsea`,children:"Sign in"})]})})]})]})})]})})})]})}function ds({valid:e,text:t}){return r.jsxs("div",{className:`flex items-center gap-1.5 text-[11px] transition-colors duration-300 ${e?"text-meadow-600":"text-slate-400"}`,children:[r.jsx("span",{className:`flex h-4 w-4 items-center justify-center
        rounded-full transition-all duration-300 ${e?"bg-meadow/15":"bg-slate-100"}`,children:r.jsx(vm,{className:"h-2.5 w-2.5"})}),t]})}const G0=[{name:"Books",icon:kl,description:"Books and educational material"},{name:"Clothes",icon:Br,description:"Clean and usable clothing"},{name:"Children's Items",icon:xe,description:"Toys, bags and essentials"},{name:"Food & Essentials",icon:y0,description:"Food and daily necessities"},{name:"Other",icon:Re,description:"Other useful items"}],K0=[{name:"Gulberg Donation Center",address:"Main Boulevard, Gulberg III, Lahore"},{name:"Johar Town Donation Center",address:"Block H, Johar Town, Lahore"},{name:"DHA Donation Center",address:"DHA Phase 5, Lahore"},{name:"Islamabad Donation Center",address:"Blue Area, Islamabad"},{name:"Karachi Donation Center",address:"Gulshan-e-Iqbal, Karachi"}];function q0(){const[e,t]=x.useState("Books"),[n,s]=x.useState(""),[l,a]=x.useState("1"),[o,i]=x.useState("Good"),[c,d]=x.useState(""),[f,h]=x.useState("Pickup"),[g,y]=x.useState(""),[v,w]=x.useState(""),[j,m]=x.useState(""),[u,p]=x.useState(""),[k,N]=x.useState(null),[b,C]=x.useState(null),[E,_]=x.useState(!1),M=I=>{var ae;const X=(ae=I.target.files)==null?void 0:ae[0];if(!X)return;N(X);const ne=URL.createObjectURL(X);C(ne)},ye=()=>{N(null),C(null)},ct=async I=>{I.preventDefault();try{const X=localStorage.getItem("token");if(!X){alert("Please login first.");return}const ne=f==="Pickup"?g:v,ae=new FormData;ae.append("title",n),ae.append("description",c),ae.append("category",e),ae.append("condition",o),ae.append("location",ne),ae.append("quantity",l),j&&ae.append("preferred_date",j),u&&ae.append("notes",u),k&&ae.append("image",k);const cn=await fetch(Le("/donations"),{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${X}`},body:ae}),R=await cn.json();if(!cn.ok){console.log("Donation error:",R),alert(R.message||"Failed to submit donation.");return}console.log("Donation created:",R),_(!0)}catch(X){console.error("Donation error:",X),alert("Something went wrong. Make sure Laravel is running.")}};return E?r.jsx("div",{className:"min-h-screen bg-mist px-5 py-10 sm:px-8 lg:px-10",children:r.jsx("div",{className:"mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center",children:r.jsxs("div",{className:"w-full rounded-3xl border border-cloudline bg-white p-8 text-center shadow-soft sm:p-12",children:[r.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-meadow-500/10 text-meadow-600",children:r.jsx(ie,{className:"h-10 w-10"})}),r.jsx("p",{className:"mt-6 text-xs font-bold uppercase tracking-[0.18em] text-meadow-600",children:"Donation Submitted"}),r.jsx("h1",{className:"mt-2 font-display text-3xl font-extrabold text-ink",children:"Thank you for giving hope."}),r.jsx("p",{className:"mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-muted",children:"Your donation has been submitted successfully. Our team will review the details and update you once your item begins its journey to someone in need."}),r.jsxs("div",{className:"mt-8 flex flex-col justify-center gap-3 sm:flex-row",children:[r.jsxs(O,{to:"/user-dashboard",className:`\r
                  inline-flex\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-full\r
                  bg-deepsea\r
                  px-6\r
                  py-3\r
                  text-sm\r
                  font-bold\r
                  text-white\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-0.5\r
                  hover:bg-sky-600\r
                  hover:shadow-glow\r
                `,children:["Back to Dashboard",r.jsx($t,{className:"h-4 w-4"})]}),r.jsx("button",{onClick:()=>{_(!1),s(""),a("1"),d(""),p(""),N(null),C(null)},className:`\r
                  inline-flex\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-full\r
                  border\r
                  border-cloudline\r
                  bg-white\r
                  px-6\r
                  py-3\r
                  text-sm\r
                  font-bold\r
                  text-deepsea\r
                  transition-all\r
                  hover:bg-sky-50\r
                `,children:"Donate Another Item"})]})]})})}):r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"border-b border-cloudline bg-white",children:r.jsx("div",{className:"mx-auto flex max-w-7xl items-center px-5 py-5 sm:px-8 lg:px-10",children:r.jsxs(O,{to:"/user-dashboard",className:`\r
              group\r
              flex\r
              items-center\r
              gap-3\r
              text-sm\r
              font-semibold\r
              text-slate-muted\r
              transition-colors\r
              hover:text-deepsea\r
            `,children:[r.jsx("span",{className:`\r
                flex\r
                h-10\r
                w-10\r
                items-center\r
                justify-center\r
                rounded-xl\r
                border\r
                border-cloudline\r
                bg-white\r
                transition-all\r
                duration-300\r
                group-hover:-translate-x-1\r
                group-hover:border-sky-200\r
                group-hover:bg-sky-50\r
              `,children:r.jsx(Ze,{className:"h-5 w-5"})}),"Back to Dashboard"]})})}),r.jsx("main",{className:"px-5 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600",children:[r.jsx($,{className:"h-4 w-4 fill-current"}),"Make a Difference"]}),r.jsx("h1",{className:"mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Donate an Item"}),r.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base",children:"Give something useful a second life. Share an item with someone who genuinely needs it."})]}),r.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_360px]",children:[r.jsxs("form",{onSubmit:ct,className:"rounded-3xl border border-cloudline bg-white p-6 shadow-card sm:p-8",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"01"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"What would you like to donate?"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Select the category that best matches your item."})]})]}),r.jsx("div",{className:"mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3",children:G0.map(I=>{const X=I.icon,ne=e===I.name;return r.jsxs("button",{type:"button",onClick:()=>t(I.name),className:`
                          group
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition-all
                          duration-300
                          ${ne?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/50"}
                        `,children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:`
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              ${ne?"bg-deepsea text-white":"bg-mist text-sky-600"}
                            `,children:r.jsx(X,{className:"h-5 w-5"})}),ne&&r.jsx(ie,{className:"h-4 w-4 text-deepsea"})]}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:I.name}),r.jsx("p",{className:"mt-1 text-[10px] leading-relaxed text-slate-muted",children:I.description})]},I.name)})})]}),r.jsx("div",{className:"my-8 border-t border-cloudline"}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"02"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Item Details"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Tell us a little more about your donation."})]})]}),r.jsxs("div",{className:"mt-5 grid gap-5 sm:grid-cols-2",children:[r.jsxs("div",{className:"sm:col-span-2",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Item Name"}),r.jsx("input",{required:!0,type:"text",value:n,onChange:I=>s(I.target.value),placeholder:"e.g. Children's story books",className:`\r
                        mt-2\r
                        w-full\r
                        rounded-xl\r
                        border\r
                        border-cloudline\r
                        bg-white\r
                        px-4\r
                        py-3\r
                        text-sm\r
                        text-ink\r
                        outline-none\r
                        transition-all\r
                        focus:border-sky-400\r
                        focus:ring-4\r
                        focus:ring-sky-100\r
                      `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Quantity"}),r.jsx("input",{required:!0,min:"1",type:"number",value:l,onChange:I=>a(I.target.value),className:`\r
                        mt-2\r
                        w-full\r
                        rounded-xl\r
                        border\r
                        border-cloudline\r
                        px-4\r
                        py-3\r
                        text-sm\r
                        outline-none\r
                        focus:border-sky-400\r
                        focus:ring-4\r
                        focus:ring-sky-100\r
                      `})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Condition"}),r.jsxs("select",{value:o,onChange:I=>i(I.target.value),className:`\r
                        mt-2\r
                        w-full\r
                        rounded-xl\r
                        border\r
                        border-cloudline\r
                        bg-white\r
                        px-4\r
                        py-3\r
                        text-sm\r
                        text-ink\r
                        outline-none\r
                        focus:border-sky-400\r
                        focus:ring-4\r
                        focus:ring-sky-100\r
                      `,children:[r.jsx("option",{children:"New"}),r.jsx("option",{children:"Like New"}),r.jsx("option",{children:"Good"}),r.jsx("option",{children:"Used"})]})]}),r.jsxs("div",{className:"sm:col-span-2",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Description"}),r.jsx("textarea",{rows:"4",value:c,onChange:I=>d(I.target.value),placeholder:"Describe the item, its condition and anything important the recipient should know...",className:`\r
                        mt-2\r
                        w-full\r
                        resize-none\r
                        rounded-xl\r
                        border\r
                        border-cloudline\r
                        px-4\r
                        py-3\r
                        text-sm\r
                        leading-relaxed\r
                        text-ink\r
                        outline-none\r
                        transition-all\r
                        placeholder:text-slate-muted\r
                        focus:border-sky-400\r
                        focus:ring-4\r
                        focus:ring-sky-100\r
                      `})]})]})]}),r.jsx("div",{className:"my-8 border-t border-cloudline"}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"03"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Add a Photo"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"A clear photo helps us understand your donation."})]})]}),r.jsx("div",{className:"mt-5",children:b?r.jsxs("div",{className:"relative overflow-hidden rounded-2xl border border-cloudline bg-mist",children:[r.jsx("img",{src:b,alt:"Donation preview",className:"h-64 w-full object-cover"}),r.jsx("button",{type:"button",onClick:ye,className:`\r
                          absolute\r
                          right-3\r
                          top-3\r
                          flex\r
                          h-9\r
                          w-9\r
                          items-center\r
                          justify-center\r
                          rounded-full\r
                          bg-white\r
                          text-red-500\r
                          shadow-card\r
                          transition-all\r
                          hover:bg-red-50\r
                        `,children:r.jsx(Sl,{className:"h-4 w-4"})}),r.jsxs("div",{className:"flex items-center justify-between bg-white px-4 py-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ie,{className:"h-4 w-4 text-meadow-600"}),r.jsx("span",{className:"text-xs font-semibold text-ink",children:"Photo added"})]}),r.jsx("span",{className:"text-[10px] text-slate-muted",children:k==null?void 0:k.name})]})]}):r.jsxs("label",{className:`\r
                        flex\r
                        cursor-pointer\r
                        flex-col\r
                        items-center\r
                        justify-center\r
                        rounded-2xl\r
                        border-2\r
                        border-dashed\r
                        border-sky-200\r
                        bg-sky-50/50\r
                        px-6\r
                        py-10\r
                        text-center\r
                        transition-all\r
                        duration-300\r
                        hover:border-sky-400\r
                        hover:bg-sky-50\r
                      `,children:[r.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm",children:r.jsx(t0,{className:"h-7 w-7"})}),r.jsx("p",{className:"mt-4 text-sm font-bold text-ink",children:"Upload donation photo"}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"PNG, JPG or JPEG · Max 5MB"}),r.jsxs("span",{className:"mt-4 inline-flex items-center gap-2 rounded-full bg-deepsea px-4 py-2 text-xs font-bold text-white",children:[r.jsx(bm,{className:"h-3.5 w-3.5"}),"Choose Image"]}),r.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg",onChange:M,className:"hidden"})]})})]}),r.jsx("div",{className:"my-8 border-t border-cloudline"}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"04"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Delivery Details"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Choose how your donation should reach us."})]})]}),r.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-2",children:[r.jsxs("button",{type:"button",onClick:()=>{h("Pickup"),w("")},className:`
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        ${f==="Pickup"?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50"}
      `,children:[r.jsx(Tt,{className:`
          h-5 w-5
          ${f==="Pickup"?"text-deepsea":"text-slate-muted"}
        `}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:"Request Pickup"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Our team collects the item from your location."})]}),r.jsxs("button",{type:"button",onClick:()=>{h("Drop-off"),y("")},className:`
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        ${f==="Drop-off"?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50"}
      `,children:[r.jsx(Re,{className:`
          h-5 w-5
          ${f==="Drop-off"?"text-deepsea":"text-slate-muted"}
        `}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:"Drop Off"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Choose a HopeCloud location to drop off your item."})]})]}),f==="Pickup"?r.jsxs("div",{className:"mt-5",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Pickup Location"}),r.jsxs("div",{className:"relative",children:[r.jsx(Tt,{className:"pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{required:!0,type:"text",value:g,onChange:I=>y(I.target.value),placeholder:"Enter your complete pickup location",className:`\r
            mt-2\r
            w-full\r
            rounded-xl\r
            border\r
            border-cloudline\r
            bg-white\r
            py-3\r
            pl-11\r
            pr-4\r
            text-sm\r
            text-ink\r
            outline-none\r
            transition-all\r
            focus:border-sky-400\r
            focus:ring-4\r
            focus:ring-sky-100\r
          `})]}),r.jsx("p",{className:"mt-1.5 text-[10px] text-slate-muted",children:"Please provide the location where our team can collect your donation."})]}):r.jsxs("div",{className:"mt-5",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Select Drop-off Location"}),r.jsx("p",{className:"mt-1 text-[10px] text-slate-muted",children:"Choose a convenient HopeCloud location to drop off your item."}),r.jsx("div",{className:"mt-3 grid gap-3 sm:grid-cols-2",children:K0.map(I=>{const X=v===I.name;return r.jsx("button",{type:"button",onClick:()=>w(I.name),className:`
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                ${X?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50"}
              `,children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:`
                    flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
                    ${X?"bg-deepsea text-white":"bg-sky-50 text-sky-600"}
                  `,children:r.jsx(Tt,{className:"h-4 w-4"})}),r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsxs("div",{className:"flex items-center justify-between gap-2",children:[r.jsx("p",{className:"text-xs font-bold text-ink",children:I.name}),X&&r.jsx(ie,{className:"h-4 w-4 shrink-0 text-deepsea"})]}),r.jsx("p",{className:"mt-1 text-[10px] leading-relaxed text-slate-muted",children:I.address}),r.jsx("span",{className:"mt-2 inline-flex text-[10px] font-semibold text-sky-600",children:"View on Map →"})]})]})},I.name)})})]}),r.jsxs("div",{className:"mt-5 grid gap-5 sm:grid-cols-2",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Preferred Date"}),r.jsxs("div",{className:"relative",children:[r.jsx(Za,{className:"pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"date",value:j,onChange:I=>m(I.target.value),className:`\r
            mt-2\r
            w-full\r
            rounded-xl\r
            border\r
            border-cloudline\r
            bg-white\r
            py-3\r
            pl-11\r
            pr-4\r
            text-sm\r
            outline-none\r
            focus:border-sky-400\r
            focus:ring-4\r
            focus:ring-sky-100\r
          `})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Additional Notes"}),r.jsx("input",{type:"text",value:u,onChange:I=>p(I.target.value),placeholder:"Anything we should know?",className:`\r
          mt-2\r
          w-full\r
          rounded-xl\r
          border\r
          border-cloudline\r
          px-4\r
          py-3\r
          text-sm\r
          outline-none\r
          focus:border-sky-400\r
          focus:ring-4\r
          focus:ring-sky-100\r
        `})]})]})]}),r.jsxs("div",{className:"mt-8 border-t border-cloudline pt-6",children:[r.jsxs("button",{type:"submit",className:`\r
                    inline-flex\r
                    w-full\r
                    items-center\r
                    justify-center\r
                    gap-2\r
                    rounded-full\r
                    bg-deepsea\r
                    px-6\r
                    py-3.5\r
                    text-sm\r
                    font-bold\r
                    text-white\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-0.5\r
                    hover:bg-sky-600\r
                    hover:shadow-glow\r
                    active:scale-[0.99]\r
                  `,children:[r.jsx($,{className:"h-4 w-4 fill-current"}),"Submit Donation",r.jsx($t,{className:"h-4 w-4"})]}),r.jsx("p",{className:"mt-3 text-center text-[10px] text-slate-muted",children:"Your donation details will be securely reviewed by our team."})]})]}),r.jsxs("aside",{className:"space-y-5",children:[r.jsxs("div",{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-3xl\r
                  bg-deepsea\r
                  p-6\r
                  text-white\r
                  shadow-soft\r
                `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl"}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-white/10",children:r.jsx(ce,{className:"h-5 w-5 text-sky-200"})}),r.jsx("p",{className:"mt-5 text-xs font-bold uppercase tracking-[0.15em] text-sky-200",children:"Your Impact"}),r.jsx("h2",{className:"mt-2 font-display text-xl font-extrabold",children:"Small acts can create big change."}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-blue-100",children:"Your donation could become exactly what someone has been waiting for."})]})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Donation Summary"}),r.jsxs("div",{className:"mt-5 space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Category"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:e})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Item"}),r.jsx("span",{className:"max-w-[170px] truncate text-right text-xs font-bold text-ink",children:n||"Not specified"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Quantity"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:l})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Condition"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:o})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Delivery"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:f})]})]})]}),r.jsx("div",{className:"rounded-3xl border border-sky-100 bg-sky-50/70 p-5",children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600",children:r.jsx($,{className:"h-4 w-4 fill-current"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold text-ink",children:"Before you donate"}),r.jsx("p",{className:"mt-1 text-[11px] leading-relaxed text-slate-muted",children:"Please make sure the item is clean, safe and in usable condition."})]})]})})]})]})]})})]})}const J0=[{label:"Dashboard",icon:di,path:"/user-dashboard"},{label:"My Donations",icon:Re,path:"/user-dashboard/donations"},{label:"My Impact",icon:$,path:"/user-dashboard/impact"},{label:"My Profile",icon:tl,path:"/user-dashboard/profile"},{label:"Achievements",icon:el,path:"/user-dashboard/achievements"}];function X0(){var c;const[e,t]=x.useState(!1),[n]=x.useState(()=>{try{return JSON.parse(localStorage.getItem("user"))||null}catch{return null}}),s=We(),l=rt(),a=async()=>{const d=localStorage.getItem("token");try{d&&await fetch(Le("/logout"),{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${d}`}})}catch(f){console.error("Logout request failed:",f)}finally{localStorage.removeItem("token"),localStorage.removeItem("user"),t(!1),l("/login")}},o=()=>{l("/donate"),t(!1)},i=((c=n==null?void 0:n.name)==null?void 0:c.split(" ").map(d=>d[0]).join("").toUpperCase())||"U";return r.jsxs(r.Fragment,{children:[e&&r.jsx("div",{className:"fixed inset-0 z-40 bg-deepsea/20 backdrop-blur-sm lg:hidden",onClick:()=>t(!1)}),r.jsx("button",{onClick:()=>t(!0),className:`\r
          fixed\r
          left-4\r
          top-4\r
          z-30\r
          flex\r
          h-10\r
          w-10\r
          items-center\r
          justify-center\r
          rounded-xl\r
          bg-white\r
          text-deepsea\r
          shadow-card\r
          lg:hidden\r
        `,"aria-label":"Open dashboard menu",children:r.jsx(di,{className:"h-5 w-5"})}),r.jsxs("aside",{className:`
          fixed
          inset-y-0
          left-0
          z-50
          flex
          w-64
          flex-col
          border-r
          border-cloudline
          bg-white
          transition-transform
          duration-300
          lg:translate-x-0
          ${e?"translate-x-0":"-translate-x-full"}
        `,children:[r.jsxs("div",{className:"flex items-center justify-between px-6 py-6",children:[r.jsxs(O,{to:"/",onClick:()=>t(!1),className:"flex items-center gap-2",children:[r.jsx("span",{className:`\r
                flex\r
                h-10\r
                w-10\r
                items-center\r
                justify-center\r
                rounded-xl\r
                bg-deepsea\r
                text-white\r
                shadow-soft\r
              `,children:r.jsx($,{className:"h-5 w-5 fill-white"})}),r.jsx("span",{className:"font-display text-xl font-extrabold text-deepsea",children:"HopeCloud"})]}),r.jsx("button",{onClick:()=>t(!1),className:"rounded-lg p-2 text-slate-muted lg:hidden","aria-label":"Close menu",children:r.jsx(Sl,{className:"h-5 w-5"})})]}),r.jsx("div",{className:"mx-4 rounded-2xl bg-mist p-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`\r
                flex\r
                h-11\r
                w-11\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-full\r
                bg-sky-100\r
                font-display\r
                font-bold\r
                text-deepsea\r
              `,children:i}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("p",{className:"truncate font-display text-sm font-bold text-ink",children:(n==null?void 0:n.name)||"User"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"HopeCloud Member"})]})]})}),r.jsxs("nav",{className:"mt-6 flex-1 overflow-y-auto px-4",children:[r.jsx("p",{className:"mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-muted",children:"Menu"}),r.jsx("div",{className:"space-y-1",children:J0.map(d=>{const f=d.icon,h=s.pathname===d.path;return r.jsxs(O,{to:d.path,onClick:()=>t(!1),className:`
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    px-3
                    py-3
                    text-left
                    text-sm
                    font-semibold
                    transition-all
                    duration-200

                    ${h?`
                          bg-deepsea
                          text-white
                          shadow-soft
                        `:`
                          text-slate-muted
                          hover:bg-sky-50
                          hover:text-deepsea
                        `}
                  `,children:[r.jsx(f,{className:`
                      h-[18px]
                      w-[18px]
                      transition-transform
                      duration-200
                      group-hover:scale-110

                      ${h?"text-white":"text-slate-muted group-hover:text-deepsea"}
                    `}),d.label]},d.label)})}),r.jsxs("div",{className:"mt-8 rounded-2xl bg-gradient-to-br from-sky-50 to-white p-4",children:[r.jsx("div",{className:"mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600",children:r.jsx(xe,{className:"h-5 w-5"})}),r.jsx("p",{className:"font-display text-sm font-bold text-ink",children:"Ready to help again?"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Your next donation could make another difference."}),r.jsxs("button",{onClick:o,className:`\r
                mt-4\r
                flex\r
                w-full\r
                items-center\r
                justify-center\r
                gap-2\r
                rounded-full\r
                bg-deepsea\r
                px-4\r
                py-2.5\r
                text-xs\r
                font-bold\r
                text-white\r
                transition-all\r
                hover:bg-sky-600\r
                hover:shadow-glow\r
                active:scale-[0.98]\r
              `,children:[r.jsx(xe,{className:"h-3.5 w-3.5"}),"Donate Now"]})]})]}),r.jsxs("div",{className:"border-t border-cloudline p-4",children:[r.jsxs("button",{onClick:()=>{t(!1),l("/user-dashboard/settings")},className:`\r
              flex\r
              w-full\r
              items-center\r
              gap-3\r
              rounded-xl\r
              px-3\r
              py-3\r
              text-sm\r
              font-semibold\r
              text-slate-muted\r
              transition-colors\r
              hover:bg-sky-50\r
              hover:text-deepsea\r
            `,children:[r.jsx(Nm,{className:"h-[18px] w-[18px]"}),"Settings"]}),r.jsxs("button",{onClick:a,className:`\r
              flex\r
              w-full\r
              items-center\r
              gap-3\r
              rounded-xl\r
              px-3\r
              py-3\r
              text-sm\r
              font-semibold\r
              text-slate-muted\r
              transition-colors\r
              hover:bg-red-50\r
              hover:text-red-500\r
            `,children:[r.jsx(Nl,{className:"h-[18px] w-[18px]"}),"Sign Out"]})]})]})]})}function Z0(){var g;const e=rt(),[t]=x.useState(()=>{try{return JSON.parse(localStorage.getItem("user"))||null}catch{return null}}),[n,s]=x.useState(!1),[l,a]=x.useState(!1),[o,i]=x.useState(!1),c=x.useRef(null),d=x.useRef(null);x.useEffect(()=>{const y=v=>{c.current&&!c.current.contains(v.target)&&s(!1),d.current&&!d.current.contains(v.target)&&a(!1)};return document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)}},[]);const f=async()=>{const y=localStorage.getItem("token");try{y&&await fetch(Le("/logout"),{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${y}`}})}catch(v){console.error("Logout request failed:",v)}finally{localStorage.removeItem("token"),localStorage.removeItem("user"),s(!1),e("/login")}},h=((g=t==null?void 0:t.name)==null?void 0:g.split(" ").map(y=>y[0]).join("").toUpperCase())||"U";return r.jsx("header",{className:"sticky top-0 z-30 border-b border-cloudline bg-white",children:r.jsxs("div",{className:"flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("button",{type:"button",onClick:()=>i(!o),className:"rounded-xl p-2 text-slate-muted hover:bg-mist hover:text-ink lg:hidden",children:r.jsx(jm,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-slate-muted",children:"HopeCloud"}),r.jsx("h1",{className:"font-display text-lg font-extrabold text-ink",children:"Donor Dashboard"})]})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsxs("div",{className:"hidden items-center rounded-xl border border-cloudline bg-mist px-3 py-2 md:flex",children:[r.jsx(km,{className:"h-4 w-4 text-slate-muted"}),r.jsx("input",{type:"text",placeholder:"Search...",className:"ml-2 w-32 bg-transparent text-sm outline-none placeholder:text-slate-muted"})]}),r.jsxs("div",{ref:d,className:"relative",children:[r.jsxs("button",{type:"button",onClick:()=>a(!l),className:"relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-muted transition hover:bg-mist hover:text-ink",children:[r.jsx(_c,{className:"h-5 w-5"}),r.jsx("span",{className:"absolute right-2 top-2 h-2 w-2 rounded-full bg-sky-500"})]}),l&&r.jsxs("div",{className:"absolute right-0 mt-3 w-80 overflow-hidden rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsxs("div",{className:"border-b border-cloudline px-5 py-4",children:[r.jsx("p",{className:"font-display text-sm font-bold text-ink",children:"Notifications"}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"Your latest HopeCloud activity"})]}),r.jsxs("div",{className:"px-5 py-6 text-center",children:[r.jsx(_c,{className:"mx-auto h-6 w-6 text-slate-muted"}),r.jsx("p",{className:"mt-3 text-sm font-semibold text-ink",children:"No new notifications"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"New donation updates will appear here when available."})]})]})]}),r.jsxs("div",{ref:c,className:"relative",children:[r.jsxs("button",{type:"button",onClick:()=>s(!n),className:"flex items-center gap-3 rounded-xl p-1.5 pr-2 transition hover:bg-mist",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700",children:h}),r.jsxs("div",{className:"hidden text-left sm:block",children:[r.jsx("p",{className:"text-sm font-bold text-ink",children:(t==null?void 0:t.name)||"User"}),r.jsx("p",{className:"text-[11px] text-slate-muted",children:"HopeCloud Donor"})]}),r.jsx(Gx,{className:"hidden h-4 w-4 text-slate-muted sm:block"})]}),n&&r.jsxs("div",{className:"absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsx("div",{className:"border-b border-cloudline px-4 py-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-700",children:h}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("p",{className:"truncate text-sm font-bold text-ink",children:(t==null?void 0:t.name)||"User"}),r.jsx("p",{className:"truncate text-xs text-slate-muted",children:(t==null?void 0:t.email)||"No email available"})]})]})}),r.jsxs("div",{className:"p-2",children:[r.jsxs("button",{type:"button",onClick:()=>{s(!1),e("/user-dashboard/profile")},className:"flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-ink transition hover:bg-mist",children:[r.jsx(tl,{className:"h-4 w-4"}),"My Profile"]}),r.jsxs("button",{type:"button",onClick:()=>{s(!1),e("/user-dashboard/profile")},className:"flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-ink transition hover:bg-mist",children:[r.jsx(Nm,{className:"h-4 w-4"}),"Settings"]})]}),r.jsx("div",{className:"border-t border-cloudline p-2",children:r.jsxs("button",{type:"button",onClick:f,className:"flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50",children:[r.jsx(Nl,{className:"h-4 w-4"}),"Sign Out"]})})]})]})]})]})})}function eg(){const e=rt(),[t]=x.useState(()=>{try{return JSON.parse(localStorage.getItem("user"))||null}catch{return null}}),n=()=>{e("/donate")};return r.jsxs("section",{className:`\r
        relative\r
        overflow-hidden\r
        rounded-3xl\r
        bg-deepsea\r
        p-6\r
        text-white\r
        shadow-soft\r
        sm:p-8\r
      `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-500/20 blur-2xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-meadow-500/10 blur-2xl"}),r.jsxs("div",{className:"relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"mb-3 flex items-center gap-2 text-sky-200",children:[r.jsx(ce,{className:"h-4 w-4"}),r.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.15em]",children:"Your Impact"})]}),r.jsxs("h1",{className:"font-display text-2xl font-extrabold sm:text-3xl",children:["Welcome back, ",(t==null?void 0:t.name)||"there","! 👋"]}),r.jsx("p",{className:"mt-2 max-w-xl text-sm leading-relaxed text-blue-100",children:"Every item you give creates an opportunity for someone else. Here's a look at the difference you're making."})]}),r.jsxs("button",{onClick:n,className:`\r
            inline-flex\r
            shrink-0\r
            items-center\r
            justify-center\r
            gap-2\r
            rounded-full\r
            bg-white\r
            px-5\r
            py-3\r
            text-sm\r
            font-bold\r
            text-deepsea\r
            transition-all\r
            duration-300\r
            hover:-translate-y-0.5\r
            hover:shadow-lg\r
            active:scale-[0.98]\r
          `,children:[r.jsx(xe,{className:"h-4 w-4"}),"Donate Now",r.jsx($t,{className:"h-4 w-4"})]})]})]})}function tg(){const[e,t]=x.useState(null);x.useEffect(()=>{(async()=>{try{const l=localStorage.getItem("token"),a=await fetch(Le("/my-impact"),{headers:{Accept:"application/json",Authorization:`Bearer ${l} `}});if(!a.ok)throw new Error("Failed to fetch impact data");const o=await a.json();t(o.impact)}catch(l){console.error("Failed to load dashboard impact:",l)}})()},[]);const n=[{label:"Items Donated",value:e?String(e.total_items).padStart(2,"0"):"—",description:"Through your donations",icon:Re},{label:"Total Donations",value:e?String(e.total_donations).padStart(2,"0"):"—",description:"Donations submitted",icon:$},{label:"Impact Score",value:e?e.impact_score:"—",description:"Out of 100",icon:Mc}];return r.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:[n.map(s=>{const l=s.icon;return r.jsxs("div",{className:`\r
              group\r
              rounded-2xl\r
              border\r
              border-cloudline\r
              bg-white\r
              p-5\r
              shadow-card\r
              transition-all\r
              duration-300\r
              hover:-translate-y-1\r
              hover:shadow-soft\r
            `,children:[r.jsx("div",{className:"flex items-start justify-between",children:r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110",children:r.jsx(l,{className:"h-5 w-5"})})}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:s.value}),r.jsx("p",{className:"mt-1 text-sm font-semibold text-ink",children:s.label}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:s.description})]},s.label)}),r.jsxs("div",{className:`\r
          group\r
          rounded-2xl\r
          border\r
          border-cloudline\r
          bg-white\r
          p-5\r
          shadow-card\r
          transition-all\r
          duration-300\r
          hover:-translate-y-1\r
          hover:shadow-soft\r
        `,children:[r.jsx("div",{className:"flex items-start justify-between",children:r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(Mc,{className:"h-5 w-5"})})}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:"Submitted"}),r.jsx("p",{className:"mt-1 text-sm font-semibold text-ink",children:"Donation Status"}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"Your donations are submitted"})]})]})}function ng(){const[e,t]=x.useState(0);return x.useEffect(()=>{(async()=>{var s;try{const l=localStorage.getItem("token");if(!l)return;const a=await fetch(Le("/my-impact"),{headers:{Accept:"application/json",Authorization:`Bearer ${l}`}});if(!a.ok)throw new Error("Failed to fetch impact score");const o=await a.json();t(((s=o.impact)==null?void 0:s.impact_score)??0)}catch(l){console.error("Failed to load impact score:",l)}})()},[]),r.jsx("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card sm:p-7",children:r.jsxs("div",{className:"flex flex-col gap-6 sm:flex-row sm:items-center",children:[r.jsxs("div",{className:"relative mx-auto flex h-40 w-40 shrink-0 items-center justify-center sm:mx-0",children:[r.jsx("div",{className:`\r
              absolute\r
              inset-0\r
              rounded-full\r
              border-[12px]\r
              border-sky-50\r
            `}),r.jsx("div",{className:`\r
              absolute\r
              inset-0\r
              rounded-full\r
              border-[12px]\r
              border-transparent\r
              border-t-sky-500\r
              border-r-sky-500\r
              border-b-sky-500\r
              -rotate-12\r
            `}),r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"font-display text-4xl font-extrabold text-deepsea",children:e}),r.jsx("p",{className:"text-xs font-semibold text-slate-muted",children:"/ 100"})]})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx($,{className:"h-5 w-5 fill-red-500 text-red-500"}),r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Personal Impact Score"})]}),r.jsx("h2",{className:"mt-2 font-display text-2xl font-extrabold text-ink",children:"You're making a difference."}),r.jsx("p",{className:"mt-2 max-w-lg text-sm leading-relaxed text-slate-muted",children:"Your impact score reflects the donation items you have submitted through HopeCloud. Keep contributing — every donation adds to your contribution history."}),r.jsxs("div",{className:"mt-5",children:[r.jsxs("div",{className:"mb-2 flex justify-between text-xs font-semibold",children:[r.jsx("span",{className:"text-slate-muted",children:"Impact progress"}),r.jsxs("span",{className:"text-deepsea",children:[e,"%"]})]}),r.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-sky-50",children:r.jsx("div",{className:"h-full rounded-full bg-sky-500 transition-all duration-700",style:{width:`${e}%`}})})]}),r.jsxs("div",{className:"mt-4 flex items-center gap-2 text-xs font-semibold text-meadow-600",children:[r.jsx(so,{className:"h-4 w-4"}),e>0?"Your contribution score is growing":"Submit a donation to start building your impact score",r.jsx(ce,{className:"h-3.5 w-3.5"})]})]})]})})}function rg(){const e=rt(),[t,n]=x.useState([]),[s,l]=x.useState(!0);x.useEffect(()=>{(async()=>{var i;try{const c=localStorage.getItem("token"),d=await fetch(Le("/my-impact"),{headers:{Accept:"application/json",Authorization:`Bearer ${c}`}});if(!d.ok)throw new Error("Failed to fetch donations");const f=await d.json();n(((i=f.impact)==null?void 0:i.recent_donations)||[])}catch(c){console.error("Failed to load recent donations:",c)}finally{l(!1)}})()},[]);const a=o=>o?new Date(o).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"—";return r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsxs("div",{className:"flex flex-col gap-3 border-b border-cloudline p-6 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Your Contributions"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Recent Donations"})]}),r.jsxs("button",{onClick:()=>e("/my-donations"),className:"inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-deepsea",children:["View All",r.jsx($t,{className:"h-3.5 w-3.5"})]})]}),r.jsx("div",{className:"hidden overflow-x-auto md:block",children:r.jsxs("table",{className:"w-full text-left",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-cloudline text-[10px] uppercase tracking-wider text-slate-muted",children:[r.jsx("th",{className:"px-6 py-4 font-bold",children:"Donation"}),r.jsx("th",{className:"px-6 py-4 font-bold",children:"Category"}),r.jsx("th",{className:"px-6 py-4 font-bold",children:"Date"}),r.jsx("th",{className:"px-6 py-4 font-bold",children:"Status"})]})}),r.jsx("tbody",{children:t.map(o=>r.jsxs("tr",{className:"border-b border-cloudline last:border-0 transition-colors hover:bg-mist/60",children:[r.jsx("td",{className:"px-6 py-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600",children:r.jsx(Re,{className:"h-4 w-4"})}),r.jsx("span",{className:"text-sm font-semibold text-ink",children:o.title})]})}),r.jsx("td",{className:"px-6 py-4 text-xs text-slate-muted",children:o.category}),r.jsx("td",{className:"px-6 py-4 text-xs text-slate-muted",children:a(o.created_at)}),r.jsx("td",{className:"px-6 py-4",children:r.jsx("span",{className:`\r
    inline-flex\r
    items-center\r
    gap-1.5\r
    rounded-full\r
    bg-sky-50\r
    px-3\r
    py-1.5\r
    text-[10px]\r
    font-bold\r
    text-sky-600\r
  `,children:"Submitted"})})]},o.id))})]})}),r.jsx("div",{className:"divide-y divide-cloudline md:hidden",children:t.map(o=>r.jsx("div",{className:"p-5",children:r.jsxs("div",{className:"flex items-start justify-between gap-3",children:[r.jsxs("div",{className:"flex gap-3",children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600",children:r.jsx(Re,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-ink",children:o.title}),r.jsxs("p",{className:"mt-1 text-xs text-slate-muted",children:[o.category," · ",a(o.created_at)]})]})]}),r.jsx("span",{className:`\r
    inline-flex\r
    items-center\r
    gap-1.5\r
    rounded-full\r
    bg-sky-50\r
    px-3\r
    py-1.5\r
    text-[10px]\r
    font-bold\r
    text-sky-600\r
  `,children:"Submitted"})]})},o.id))})]})}function sg(){return r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600",children:r.jsx(Dr,{className:"h-5 w-5"})}),r.jsx("span",{className:"rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-muted",children:"Not Rated"})]}),r.jsx("p",{className:"mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Your Contributor Rating"}),r.jsxs("div",{className:"mt-2",children:[r.jsx("span",{className:"font-display text-3xl font-extrabold text-ink",children:"Not rated yet"}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"Ratings will appear when contributor feedback is available."})]}),r.jsxs("div",{className:"mt-5 rounded-xl bg-mist p-4",children:[r.jsx(i0,{className:"h-4 w-4 text-sky-500"}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-slate-muted",children:"Contributor feedback is not available yet."})]})]})}function lg(){var f;const[e,t]=x.useState(null),[n,s]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const g=localStorage.getItem("token"),y=await fetch(Le("/my-impact"),{headers:{Accept:"application/json",Authorization:`Bearer ${g}`}});if(!y.ok)throw new Error("Failed to fetch achievements");const v=await y.json();t(v.impact||null)}catch(g){console.error("Failed to load achievements:",g)}finally{s(!1)}})()},[]);const l=(e==null?void 0:e.total_donations)??0,a=(e==null?void 0:e.total_items)??0,o=(e==null?void 0:e.impact_score)??0,c=((f=((e==null?void 0:e.impact_areas)||[]).find(h=>{var g,y;return((g=h.category)==null?void 0:g.toLowerCase())==="clothes"||((y=h.category)==null?void 0:y.toLowerCase())==="clothing"}))==null?void 0:f.items)??0,d=[{title:"First Donation",description:"Make your first donation to unlock this achievement.",icon:Zx,unlocked:l>=1,requirement:"1 donation"},{title:"Helping Hand",description:"Complete 5 donations and become a regular contributor.",icon:Dr,unlocked:l>=5,requirement:"5 donations"},{title:"Clothing Contributor",description:"Donate 10 clothing items to unlock this achievement.",icon:Br,unlocked:c>=10,requirement:"10 clothing items"},{title:"Hope Champion",description:"Reach an impact score of 90 or higher.",icon:ce,unlocked:o>=90,requirement:"90 impact score"}];return n?r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Your Achievements"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Making a Difference"})]}),r.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:d.map(h=>r.jsxs("div",{className:"animate-pulse rounded-2xl border border-cloudline bg-mist p-5",children:[r.jsx("div",{className:"h-10 w-10 rounded-xl bg-slate-200"}),r.jsx("div",{className:"mt-4 h-4 w-24 rounded bg-slate-200"}),r.jsx("div",{className:"mt-2 h-3 w-full rounded bg-slate-200"}),r.jsx("div",{className:"mt-2 h-3 w-3/4 rounded bg-slate-200"})]},h.title))})]}):r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsxs("div",{className:"flex items-start justify-between gap-4",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Your Achievements"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Making a Difference"}),r.jsx("p",{className:"mt-1 text-sm text-slate-muted",children:"Achievements are unlocked from your real donation activity."})]}),r.jsx("div",{className:"hidden rounded-xl bg-sky-50 px-3 py-2 sm:block",children:r.jsxs("p",{className:"text-xs font-bold text-sky-700",children:[d.filter(h=>h.unlocked).length," /"," ",d.length," unlocked"]})})]}),r.jsx("div",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:d.map(h=>{const g=h.icon;return r.jsxs("div",{className:`
                rounded-2xl
                border
                p-5
                transition-all
                ${h.unlocked?"border-sky-100 bg-sky-50/60":"border-cloudline bg-mist"}
              `,children:[r.jsx("div",{className:`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  ${h.unlocked?"bg-white text-sky-600 shadow-sm":"bg-slate-200 text-slate-muted"}
                `,children:h.unlocked?r.jsx(g,{className:"h-5 w-5"}):r.jsx(On,{className:"h-5 w-5"})}),r.jsxs("div",{className:"mt-4",children:[r.jsxs("div",{className:"flex items-center justify-between gap-2",children:[r.jsx("h3",{className:`
                      font-display
                      text-sm
                      font-extrabold
                      ${h.unlocked?"text-ink":"text-slate-muted"}
                    `,children:h.title}),h.unlocked&&r.jsx("span",{className:"text-[9px] font-bold uppercase tracking-wide text-sky-600",children:"Unlocked"})]}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-slate-muted",children:h.description})]}),r.jsx("div",{className:"mt-4 border-t border-cloudline pt-3",children:r.jsx("p",{className:`
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    ${h.unlocked?"text-sky-600":"text-slate-muted"}
                  `,children:h.unlocked?"Achievement unlocked":`Requirement: ${h.requirement}`})})]},h.title)})}),r.jsxs("div",{className:"mt-6 flex flex-wrap gap-3",children:[r.jsxs("div",{className:"rounded-xl bg-mist px-4 py-3",children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-slate-muted",children:"Donations"}),r.jsx("p",{className:"mt-1 font-display text-lg font-extrabold text-ink",children:l})]}),r.jsxs("div",{className:"rounded-xl bg-mist px-4 py-3",children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-slate-muted",children:"Items"}),r.jsx("p",{className:"mt-1 font-display text-lg font-extrabold text-ink",children:a})]}),r.jsxs("div",{className:"rounded-xl bg-mist px-4 py-3",children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wide text-slate-muted",children:"Impact Score"}),r.jsx("p",{className:"mt-1 font-display text-lg font-extrabold text-ink",children:o})]})]})]})}function ag(){return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(X0,{}),r.jsxs("div",{className:"lg:ml-64",children:[r.jsx(Z0,{}),r.jsx("main",{className:"px-5 py-6 sm:px-8 lg:px-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsx(eg,{}),r.jsx("div",{className:"mt-6",children:r.jsx(tg,{})}),r.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]",children:[r.jsx(ng,{}),r.jsx(sg,{})]}),r.jsx("div",{className:"mt-6",children:r.jsx(rg,{})}),r.jsx("div",{className:"mt-6",children:r.jsx(lg,{})})]})})]})]})}const zr={submitted:{label:"Submitted",icon:bm,classes:"bg-sky-50 text-sky-600"},delivered:{label:"Delivered",icon:ie,classes:"bg-meadow-500/10 text-meadow-600"},transit:{label:"In Transit",icon:ui,classes:"bg-sky-50 text-sky-600"},processing:{label:"Processing",icon:wm,classes:"bg-amber-100 text-amber-600"}},og={Books:kl,Clothes:Br,"Children's Items":xe};function ig(){const[e,t]=x.useState([]),[n,s]=x.useState("All"),[l,a]=x.useState(null),[o,i]=x.useState(!0),[c,d]=x.useState("");x.useEffect(()=>{(async()=>{const m=localStorage.getItem("token");if(!m){d("Please log in to view your donations."),i(!1);return}try{const u=await fetch(Le("/donations"),{headers:{Accept:"application/json",Authorization:`Bearer ${m}`}});if(!u.ok)throw new Error(u.status===401?"Your session has expired. Please log in again.":"Unable to load your donations.");const p=await u.json();t(Array.isArray(p.donations)?p.donations:[])}catch(u){console.error(u),d(u.message||"Unable to load your donations.")}finally{i(!1)}})()},[]);const f=x.useMemo(()=>e.map(j=>{const m=new Date(j.created_at),u=Number.isNaN(m.getTime())?"Date unavailable":m.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return{id:j.id,item:j.title||"Untitled donation",category:j.category||"Other",condition:j.condition||"Not specified",quantity:Number(j.quantity)||0,date:u,status:zr.submitted.label,statusType:"submitted",location:j.location||"Location not provided",recipient:"Waiting for recipient matching",description:j.description||j.notes||"No description provided.",image:j0(j.image)}}),[e]),h=x.useMemo(()=>["All",...new Set(f.map(j=>j.category))],[f]);x.useEffect(()=>{h.includes(n)||s("All")},[h,n]);const g=n==="All"?f:f.filter(j=>j.category===n),y=f.filter(j=>j.statusType==="delivered").length,v=f.filter(j=>j.statusType==="transit").length,w=f.reduce((j,m)=>j+m.quantity,0);return o?r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsx("p",{className:"text-sm font-semibold text-slate-muted",children:"Loading your donations..."})}):c?r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsx("p",{className:"text-sm font-semibold text-red-500",children:c})}):r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"sticky top-0 z-30 border-b border-cloudline bg-white/85 backdrop-blur-xl",children:r.jsxs("div",{className:"mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(O,{to:"/user-dashboard",className:`\r
                flex\r
                h-10\r
                w-10\r
                items-center\r
                justify-center\r
                rounded-xl\r
                text-slate-muted\r
                transition-all\r
                hover:bg-sky-50\r
                hover:text-deepsea\r
              `,children:r.jsx(Ze,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-slate-muted",children:"Contributions"}),r.jsx("h1",{className:"font-display text-xl font-extrabold text-ink sm:text-2xl",children:"My Donations"})]})]}),r.jsxs(O,{to:"/donate",className:"btn-primary",children:[r.jsx(xe,{className:"h-4 w-4"}),r.jsx("span",{className:"hidden sm:inline",children:"Donate an Item"}),r.jsx("span",{className:"sm:hidden",children:"Donate"})]})]})}),r.jsxs("main",{className:"mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10",children:[r.jsxs("section",{className:"relative overflow-hidden rounded-3xl bg-deepsea p-6 text-white shadow-soft sm:p-8",children:[r.jsx("div",{className:"pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-meadow-500/10 blur-3xl"}),r.jsxs("div",{className:"relative z-10 max-w-2xl",children:[r.jsxs("div",{className:"mb-3 flex items-center gap-2 text-sky-200",children:[r.jsx(ce,{className:"h-4 w-4"}),r.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.15em]",children:"Your Giving Journey"})]}),r.jsx("h2",{className:"font-display text-2xl font-extrabold sm:text-3xl",children:"Every donation tells a story."}),r.jsx("p",{className:"mt-3 text-sm leading-relaxed text-blue-100",children:"Track every item you've shared through HopeCloud and see how your contributions are making their way to people who need them."})]})]}),r.jsxs("section",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[r.jsx(us,{icon:Re,label:"Total Items",value:w,description:"Items contributed"}),r.jsx(us,{icon:xe,label:"Donations",value:f.length,description:"Total contributions"}),r.jsx(us,{icon:ie,label:"Delivered",value:y,description:"Reached recipients"}),r.jsx(us,{icon:ui,label:"In Transit",value:v,description:"Currently on the way"})]}),r.jsxs("section",{className:"mt-8",children:[r.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Donation History"}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold text-ink",children:"Your Contributions"})]}),r.jsx("div",{className:"flex gap-2 overflow-x-auto pb-1",children:h.map(j=>r.jsx("button",{onClick:()=>s(j),className:`
                    shrink-0
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    transition-all
                    duration-200
                    ${n===j?"bg-deepsea text-white shadow-soft":"border border-cloudline bg-white text-slate-muted hover:bg-sky-50 hover:text-deepsea"}
                  `,children:j},j))})]}),r.jsx("div",{className:"mt-5 grid gap-5 lg:grid-cols-2",children:g.map(j=>r.jsx(cg,{donation:j,onView:()=>a(j)},j.id))}),f.length===0?r.jsxs("div",{className:"mt-5 rounded-3xl border border-dashed border-cloudline bg-white p-12 text-center",children:[r.jsx(Re,{className:"mx-auto h-10 w-10 text-slate-muted"}),r.jsx("h3",{className:"mt-4 font-display text-lg font-bold text-ink",children:"No donations yet"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Share an item to start your giving journey."}),r.jsxs(O,{to:"/donate",className:"btn-primary mt-5",children:[r.jsx(xe,{className:"h-4 w-4"}),"Donate an Item"]})]}):g.length===0?r.jsxs("div",{className:"mt-5 rounded-3xl border border-dashed border-cloudline bg-white p-12 text-center",children:[r.jsx(Re,{className:"mx-auto h-10 w-10 text-slate-muted"}),r.jsx("h3",{className:"mt-4 font-display text-lg font-bold text-ink",children:"No donations found"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"You don't have any donations in this category yet."})]}):null]})]}),l&&r.jsx(dg,{donation:l,onClose:()=>a(null)})]})}function us({icon:e,label:t,value:n,description:s}){return r.jsxs("div",{className:`\r
        group\r
        rounded-2xl\r
        border\r
        border-cloudline\r
        bg-white\r
        p-5\r
        shadow-card\r
        transition-all\r
        duration-300\r
        hover:-translate-y-1\r
        hover:shadow-soft\r
      `,children:[r.jsx("div",{className:"flex items-center justify-between",children:r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110",children:r.jsx(e,{className:"h-5 w-5"})})}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:n}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:t}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:s})]})}function Pm({src:e,alt:t,className:n}){const[s,l]=x.useState(!1);return!e||s?r.jsx("div",{className:`${n} flex items-center justify-center bg-mist text-slate-muted`,children:r.jsx(n0,{className:"h-10 w-10"})}):r.jsx("img",{src:e,alt:t,className:n,onError:()=>l(!0)})}function cg({donation:e,onView:t}){const n=zr[e.statusType]??zr.submitted,s=n.icon,l=og[e.category]??Re;return r.jsx("article",{className:`\r
        group\r
        overflow-hidden\r
        rounded-3xl\r
        border\r
        border-cloudline\r
        bg-white\r
        shadow-card\r
        transition-all\r
        duration-300\r
        hover:-translate-y-1\r
        hover:shadow-soft\r
      `,children:r.jsxs("div",{className:"flex flex-col sm:flex-row",children:[r.jsxs("div",{className:"relative h-56 overflow-hidden sm:h-auto sm:w-52 sm:shrink-0",children:[r.jsx(Pm,{src:e.image,alt:e.item,className:`\r
              h-full\r
              w-full\r
              object-cover\r
              transition-transform\r
              duration-700\r
              group-hover:scale-105\r
            `}),r.jsx("div",{className:"absolute left-3 top-3",children:r.jsxs("span",{className:`
                inline-flex
                items-center
                gap-1.5
                rounded-full
                px-3
                py-1.5
                text-[10px]
                font-bold
                backdrop-blur-md
                ${n.classes}
              `,children:[r.jsx(s,{className:"h-3.5 w-3.5"}),e.status]})})]}),r.jsxs("div",{className:"flex min-w-0 flex-1 flex-col p-5",children:[r.jsx("div",{className:"flex items-start justify-between gap-3",children:r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(l,{className:"h-4 w-4 text-sky-600"}),r.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:e.category})]}),r.jsx("h3",{className:"mt-2 font-display text-lg font-extrabold text-ink",children:e.item})]})}),r.jsx("p",{className:"mt-2 line-clamp-2 text-xs leading-relaxed text-slate-muted",children:e.description}),r.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[r.jsx(pr,{label:"Quantity",value:`${e.quantity} items`}),r.jsx(pr,{label:"Condition",value:e.condition})]}),r.jsxs("div",{className:"mt-4 flex items-center gap-2 text-[10px] text-slate-muted",children:[r.jsx(Tt,{className:"h-3.5 w-3.5 text-sky-600"}),e.location,r.jsx("span",{children:"•"}),e.date]}),r.jsxs("div",{className:"mt-5 flex items-center justify-between border-t border-cloudline pt-4",children:[r.jsxs("button",{onClick:t,className:`\r
                inline-flex\r
                items-center\r
                gap-1.5\r
                text-xs\r
                font-bold\r
                text-sky-600\r
                transition-colors\r
                hover:text-deepsea\r
              `,children:["View Details",r.jsx($t,{className:"h-3.5 w-3.5"})]}),e.statusType==="delivered"&&r.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-semibold text-meadow-600",children:[r.jsx($,{className:"h-3.5 w-3.5 fill-current"}),"Impact made"]})]})]})]})})}function pr({label:e,value:t}){return r.jsxs("div",{className:"rounded-xl bg-mist px-3 py-2",children:[r.jsx("p",{className:"text-[9px] font-bold uppercase tracking-wider text-slate-muted",children:e}),r.jsx("p",{className:"mt-0.5 text-xs font-bold text-ink",children:t})]})}function dg({donation:e,onClose:t}){const n=e.statusType==="delivered",s=e.statusType==="transit",l=zr[e.statusType]??zr.submitted,a=l.icon;return r.jsx("div",{className:`\r
        fixed\r
        inset-0\r
        z-50\r
        flex\r
        items-center\r
        justify-center\r
        bg-deepsea/30\r
        p-4\r
        backdrop-blur-sm\r
      `,onClick:t,children:r.jsxs("div",{className:`\r
          max-h-[90vh]\r
          w-full\r
          max-w-2xl\r
          overflow-y-auto\r
          rounded-3xl\r
          bg-white\r
          shadow-2xl\r
        `,onClick:o=>o.stopPropagation(),children:[r.jsxs("div",{className:"relative",children:[r.jsx(Pm,{src:e.image,alt:e.item,className:"h-56 w-full object-cover sm:h-64"}),r.jsx("button",{onClick:t,className:`\r
              absolute\r
              right-4\r
              top-4\r
              flex\r
              h-10\r
              w-10\r
              items-center\r
              justify-center\r
              rounded-full\r
              bg-white/90\r
              text-slate-muted\r
              shadow-card\r
              transition-all\r
              hover:bg-white\r
              hover:text-ink\r
            `,children:r.jsx(Kx,{className:"h-5 w-5"})})]}),r.jsxs("div",{className:"p-6 sm:p-8",children:[r.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.15em] text-slate-muted",children:e.category}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold text-ink",children:e.item})]}),r.jsxs("span",{className:`
                inline-flex
                w-fit
                items-center
                gap-1.5
                rounded-full
                px-3
                py-1.5
                text-[10px]
                font-bold
                ${l.classes}
              `,children:[r.jsx(a,{className:"h-3.5 w-3.5"}),e.status]})]}),r.jsxs("div",{className:"mt-6 grid gap-3 sm:grid-cols-3",children:[r.jsx(pr,{label:"Quantity",value:`${e.quantity} items`}),r.jsx(pr,{label:"Condition",value:e.condition}),r.jsx(pr,{label:"Donated On",value:e.date})]}),r.jsxs("div",{className:"mt-8",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Delivery Journey"}),r.jsxs("div",{className:"mt-5 space-y-5",children:[r.jsx(ms,{icon:Re,title:"Donation Received",description:"HopeCloud received your donation.",complete:!0}),r.jsx(ms,{icon:ie,title:"Donation Verified",description:"The item was checked and approved.",complete:!0}),r.jsx(ms,{icon:ui,title:"On the Way",description:n?"The donation was delivered successfully.":s?"Your donation is currently on its way.":"Your donation will move here once processing is complete.",complete:n||s,current:s}),r.jsx(ms,{icon:$,title:"Reached Someone in Need",description:n?`Your donation reached ${e.recipient}.`:"This step will update once the item reaches its recipient.",complete:n})]})]}),r.jsx("div",{className:"mt-7 rounded-2xl bg-mist p-5",children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx($,{className:"h-5 w-5 fill-current"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:"Recipient / Impact"}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:e.recipient}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:n?"Your contribution has successfully created a positive impact.":"We will update this information when your donation reaches its recipient."})]})]})}),r.jsx("button",{onClick:t,className:"btn-secondary mt-6 w-full",children:"Close Details"})]})]})})}function ms({icon:e,title:t,description:n,complete:s,current:l}){return r.jsxs("div",{className:"flex gap-4",children:[r.jsx("div",{className:"relative",children:r.jsx("div",{className:`
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            ${s?"bg-meadow-500/10 text-meadow-600":"bg-mist text-slate-muted"}
            ${l?"ring-4 ring-sky-50":""}
          `,children:r.jsx(e,{className:"h-4 w-4"})})}),r.jsxs("div",{className:"pt-1",children:[r.jsx("p",{className:`
            text-xs
            font-bold
            ${s?"text-ink":"text-slate-muted"}
          `,children:t}),r.jsx("p",{className:"mt-1 text-[11px] leading-relaxed text-slate-muted",children:n})]})]})}function ug(){const[e,t]=x.useState(null),[n,s]=x.useState(!0),[l,a]=x.useState("");if(x.useEffect(()=>{(async()=>{try{const v=localStorage.getItem("token");if(!v)throw new Error("Authentication token not found");const w=await fetch(Le("/my-impact"),{headers:{Accept:"application/json",Authorization:`Bearer ${v}`}});if(!w.ok)throw new Error("Failed to fetch impact data");const j=await w.json();t(j.impact||null)}catch(v){console.error(v),a("Unable to load your impact data.")}finally{s(!1)}})()},[]),n)return r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsx("p",{className:"text-sm font-semibold text-slate-muted",children:"Loading your impact..."})});if(l||!e)return r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"text-sm font-semibold text-red-500",children:l||"No impact data found."}),r.jsx(O,{to:"/user-dashboard",className:"mt-4 inline-flex rounded-full bg-deepsea px-5 py-3 text-xs font-bold text-white",children:"Back to Dashboard"})]})});const o=e.impact_score??0,i=e.total_donations??0,c=e.total_items??0,d=e.impact_growth??0,f=[{label:"Donations Submitted",value:i,description:"donations submitted",icon:$,iconBg:"bg-red-50",iconColor:"text-red-500"},{label:"Items Donated",value:String(c).padStart(2,"0"),description:"items contributed",icon:tr,iconBg:"bg-meadow-500/10",iconColor:"text-meadow-600"},{label:"Impact Score",value:o,description:"out of 100",icon:$,iconBg:"bg-sky-50",iconColor:"text-sky-600"},{label:"Impact Growth",value:`+${d}%`,description:"tracked growth",icon:so,iconBg:"bg-amber-50",iconColor:"text-amber-600"}],h=(e.impact_areas||[]).map(y=>{const v=y.category||"Other",w=y.items??0;return{title:v,description:`${w} ${w===1?"item":"items"} submitted in this donation category.`,value:String(w).padStart(2,"0"),label:"Items contributed",icon:v.toLowerCase().includes("book")||v.toLowerCase().includes("education")?Dr:v.toLowerCase().includes("cloth")?$:tr}}),g=(e.recent_donations||[]).map(y=>({id:y.id,title:y.title||"Donation",location:y.location||"Location not provided",status:"Submitted",date:y.created_at?new Date(y.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Date not available"}));return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"border-b border-cloudline bg-white",children:r.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(O,{to:"/user-dashboard",className:`\r
                flex\r
                h-10\r
                w-10\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-xl\r
                text-slate-muted\r
                transition-all\r
                duration-200\r
                hover:bg-mist\r
                hover:text-deepsea\r
              `,"aria-label":"Back to Dashboard",children:r.jsx(Ze,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-slate-muted sm:text-xs",children:"Your Impact"}),r.jsx("h1",{className:"mt-0.5 font-display text-2xl font-extrabold text-ink sm:text-3xl",children:"My Impact"})]})]}),r.jsxs("div",{className:"hidden items-center gap-3 rounded-2xl bg-mist px-4 py-2.5 sm:flex",children:[r.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx(ce,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:"Impact Score"}),r.jsxs("p",{className:"font-display text-lg font-extrabold text-deepsea",children:[o,"/100"]})]})]})]})}),r.jsx("main",{className:"px-6 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsx("div",{className:"mb-8",children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:"mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600",children:r.jsx(ce,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-xl font-extrabold text-ink sm:text-2xl",children:"See your contribution activity."}),r.jsx("p",{className:"mt-1 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base",children:"Track the donations and items you have submitted through HopeCloud."})]})]})}),r.jsxs("section",{className:`\r
              relative\r
              overflow-hidden\r
              rounded-[28px]\r
              bg-deepsea\r
              p-7\r
              text-white\r
              shadow-soft\r
              sm:p-9\r
              lg:p-10\r
            `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-meadow-400/10 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10"}),r.jsx("div",{className:"pointer-events-none absolute right-24 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-white/10"}),r.jsxs("div",{className:"relative z-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 text-sky-200",children:[r.jsx($,{className:"h-4 w-4 fill-current text-red-400"}),r.jsx("span",{className:"text-xs font-bold uppercase tracking-[0.18em]",children:"Personal Impact"})]}),r.jsx("h2",{className:"mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl",children:"Your contribution activity, in one place."}),r.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base",children:"Your impact score is calculated from the donation items you have submitted through your HopeCloud account."}),r.jsxs("div",{className:"mt-7 max-w-2xl",children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between text-xs font-semibold",children:[r.jsx("span",{className:"text-blue-100",children:"Impact score"}),r.jsxs("span",{className:"text-white",children:[o,"%"]})]}),r.jsx("div",{className:"h-2.5 overflow-hidden rounded-full bg-white/10",children:r.jsx("div",{className:"h-full rounded-full bg-sky-400 transition-all duration-700",style:{width:`${o}%`}})})]}),r.jsxs("div",{className:"mt-4 flex items-center gap-2 text-xs font-medium text-blue-100",children:[r.jsx(so,{className:"h-4 w-4 text-sky-300"}),r.jsx("span",{children:o>=90?"You have reached the current Hope Champion threshold.":`${90-o} points away from the current Hope Champion threshold.`})]})]}),r.jsxs("div",{className:"relative mx-auto flex h-48 w-48 items-center justify-center",children:[r.jsx("div",{className:"absolute inset-0 rounded-full border-[12px] border-white/10"}),r.jsx("div",{className:`\r
                    absolute\r
                    inset-0\r
                    rounded-full\r
                    border-[12px]\r
                    border-transparent\r
                    border-t-sky-400\r
                    border-r-sky-400\r
                    border-b-sky-400\r
                    -rotate-12\r
                  `}),r.jsxs("div",{className:"relative text-center",children:[r.jsx("p",{className:"font-display text-5xl font-extrabold",children:o}),r.jsx("p",{className:"mt-1 text-xs font-bold uppercase tracking-wider text-blue-100",children:"Impact Score"})]})]})]})]}),r.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:f.map(y=>{const v=y.icon;return r.jsxs("div",{className:`\r
                    group\r
                    rounded-2xl\r
                    border\r
                    border-cloudline\r
                    bg-white\r
                    p-5\r
                    shadow-card\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-1\r
                    hover:shadow-soft\r
                  `,children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:`flex h-11 w-11 items-center justify-center rounded-xl ${y.iconBg} ${y.iconColor} transition-transform duration-300 group-hover:scale-110`,children:r.jsx(v,{className:"h-5 w-5"})}),r.jsx(Rn,{className:"h-4 w-4 text-slate-muted"})]}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:y.value}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:y.label}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:y.description})]},y.label)})}),r.jsxs("section",{className:"mt-10",children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.16em] text-slate-muted",children:"Donation Categories"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink sm:text-2xl",children:"Your Contribution Categories"})]}),h.length===0?r.jsxs("div",{className:"rounded-2xl border border-cloudline bg-white p-8 text-center shadow-card",children:[r.jsx(tr,{className:"mx-auto h-8 w-8 text-slate-muted"}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:"No donation categories yet."}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"Your categories will appear here after you submit donations."})]}):r.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:h.map(y=>{const v=y.icon;return r.jsxs("div",{className:`\r
                        rounded-2xl\r
                        border\r
                        border-cloudline\r
                        bg-white\r
                        p-6\r
                        shadow-card\r
                        transition-all\r
                        duration-300\r
                        hover:-translate-y-1\r
                        hover:shadow-soft\r
                      `,children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(v,{className:"h-5 w-5"})}),r.jsx(Rn,{className:"h-4 w-4 text-slate-muted"})]}),r.jsx("h3",{className:"mt-5 font-display text-lg font-extrabold text-ink",children:y.title}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-slate-muted",children:y.description}),r.jsxs("div",{className:"mt-5",children:[r.jsx("p",{className:"font-display text-2xl font-extrabold text-deepsea",children:y.value}),r.jsx("p",{className:"text-[10px] text-slate-muted",children:y.label})]})]},y.title)})})]}),r.jsxs("section",{className:"mt-10 rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsxs("div",{className:"flex flex-col gap-2 border-b border-cloudline p-6 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Recent Activity"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Your Recent Donations"})]}),r.jsxs(O,{to:"/user-dashboard/donations",className:"inline-flex items-center gap-1 text-xs font-bold text-sky-600 transition-colors hover:text-deepsea",children:["View Donations",r.jsx(Rn,{className:"h-3.5 w-3.5"})]})]}),r.jsx("div",{className:"divide-y divide-cloudline",children:g.length===0?r.jsxs("div",{className:"p-8 text-center",children:[r.jsx(tr,{className:"mx-auto h-8 w-8 text-slate-muted"}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:"No donations submitted yet."}),r.jsx(O,{to:"/user-dashboard/donate",className:"mt-4 inline-flex rounded-full bg-deepsea px-5 py-3 text-xs font-bold text-white",children:"Donate an Item"})]}):g.map(y=>r.jsxs("div",{className:`\r
                      flex\r
                      flex-col\r
                      gap-4\r
                      p-5\r
                      transition-colors\r
                      hover:bg-mist/60\r
                      sm:flex-row\r
                      sm:items-center\r
                      sm:justify-between\r
                      sm:px-6\r
                    `,children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(tr,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-ink",children:y.title}),r.jsxs("div",{className:"mt-1 flex items-center gap-1 text-xs text-slate-muted",children:[r.jsx(Tt,{className:"h-3 w-3"}),y.location]})]})]}),r.jsx("div",{className:"flex items-center gap-4 pl-[52px] sm:pl-0",children:r.jsxs("div",{className:"text-left sm:text-right",children:[r.jsx("p",{className:"text-[10px] text-slate-muted",children:y.date}),r.jsxs("span",{className:`\r
                            mt-1\r
                            inline-flex\r
                            items-center\r
                            gap-1.5\r
                            rounded-full\r
                            bg-sky-50\r
                            px-3\r
                            py-1.5\r
                            text-[10px]\r
                            font-bold\r
                            text-sky-600\r
                          `,children:[r.jsx(ie,{className:"h-3 w-3"}),y.status]})]})})]},y.id))})]}),r.jsx("section",{className:"mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6 sm:p-7",children:r.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx(Dr,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"font-display text-base font-extrabold text-ink",children:"Keep building your contribution history."}),r.jsx("p",{className:"mt-1 max-w-xl text-xs leading-relaxed text-slate-muted",children:"Every submitted donation increases your contribution activity and can increase your impact score."})]})]}),r.jsxs(O,{to:"/user-dashboard/donate",className:`\r
                  inline-flex\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-full\r
                  bg-deepsea\r
                  px-5\r
                  py-3\r
                  text-xs\r
                  font-bold\r
                  text-white\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-0.5\r
                  hover:bg-sky-600\r
                  hover:shadow-glow\r
                `,children:[r.jsx($,{className:"h-4 w-4 fill-current"}),"Make a Donation"]})]})})]})})]})}function mg(){const[e,t]=x.useState(null),[n,s]=x.useState(null),[l,a]=x.useState(!0),[o,i]=x.useState(!1);x.useEffect(()=>{(async()=>{const k=localStorage.getItem("token");if(!k){a(!1);return}try{try{const C=JSON.parse(localStorage.getItem("user"));C&&t(C)}catch{}const N=await fetch(Le("/user"),{headers:{Accept:"application/json",Authorization:`Bearer ${k}`}});if(N.ok){const C=await N.json(),E=C.user||C;t(E),localStorage.setItem("user",JSON.stringify(E))}const b=await fetch(Le("/my-impact"),{headers:{Accept:"application/json",Authorization:`Bearer ${k}`}});if(b.ok){const C=await b.json();s(C.impact||null)}}catch(N){console.error("Failed to load profile:",N)}finally{a(!1)}})()},[]);const c=(e==null?void 0:e.name)||"User",d=(e==null?void 0:e.email)||"No email available",f=(c==null?void 0:c.split(" ").filter(Boolean).map(p=>p[0]).join("").toUpperCase())||"U",h=(n==null?void 0:n.total_donations)??0,g=(n==null?void 0:n.total_items)??0,y=(n==null?void 0:n.impact_score)??0,v=e!=null&&e.created_at?new Date(e.created_at).toLocaleDateString("en-US",{month:"long",year:"numeric"}):"Not available",w=(e==null?void 0:e.phone)||"Not provided",j=(e==null?void 0:e.location)||"Not provided",m=[{label:"Items Donated",value:g,icon:Re,iconBg:"bg-sky-50",iconColor:"text-sky-600"},{label:"Total Donations",value:h,icon:$,iconBg:"bg-red-50",iconColor:"text-red-500"},{label:"Impact Score",value:y,icon:Dr,iconBg:"bg-amber-50",iconColor:"text-amber-600"},{label:"Contributor Rating",value:"Not rated",icon:ro,iconBg:"bg-yellow-50",iconColor:"text-yellow-500"}],u=[{label:"Full Name",value:c,icon:tl},{label:"Email Address",value:d,icon:Wn},{label:"Phone Number",value:w,icon:d0},{label:"Location",value:j,icon:Tt},{label:"Member Since",value:v,icon:Za}];return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"border-b border-cloudline bg-white",children:r.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(O,{to:"/user-dashboard",className:`\r
                flex\r
                h-10\r
                w-10\r
                shrink-0\r
                items-center\r
                justify-center\r
                rounded-xl\r
                text-slate-muted\r
                transition-all\r
                duration-200\r
                hover:bg-mist\r
                hover:text-deepsea\r
              `,"aria-label":"Back to Dashboard",children:r.jsx(Ze,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-slate-muted sm:text-xs",children:"Account"}),r.jsx("h1",{className:"mt-0.5 font-display text-2xl font-extrabold text-ink sm:text-3xl",children:"My Profile"})]})]}),r.jsxs("button",{onClick:()=>i(!0),className:`\r
              hidden\r
              items-center\r
              gap-2\r
              rounded-full\r
              bg-deepsea\r
              px-5\r
              py-3\r
              text-xs\r
              font-bold\r
              text-white\r
              shadow-soft\r
              transition-all\r
              duration-300\r
              hover:-translate-y-0.5\r
              hover:bg-sky-600\r
              hover:shadow-glow\r
              sm:inline-flex\r
            `,children:[r.jsx(Ic,{className:"h-4 w-4"}),"Edit Profile"]})]})}),r.jsx("main",{className:"px-6 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsxs("section",{className:`\r
              relative\r
              overflow-hidden\r
              rounded-[28px]\r
              bg-deepsea\r
              p-7\r
              text-white\r
              shadow-soft\r
              sm:p-9\r
            `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-meadow-400/10 blur-3xl"}),r.jsxs("div",{className:"relative z-10 flex flex-col gap-7 md:flex-row md:items-center md:justify-between",children:[r.jsxs("div",{className:"flex flex-col items-start gap-5 sm:flex-row sm:items-center",children:[r.jsxs("div",{className:"relative",children:[r.jsx("div",{className:`\r
                      flex\r
                      h-24\r
                      w-24\r
                      items-center\r
                      justify-center\r
                      rounded-full\r
                      bg-white\r
                      font-display\r
                      text-2xl\r
                      font-extrabold\r
                      text-deepsea\r
                      shadow-lg\r
                      ring-4\r
                      ring-white/10\r
                    `,children:l?"...":f}),r.jsx("span",{className:`\r
                      absolute\r
                      bottom-1\r
                      right-1\r
                      h-5\r
                      w-5\r
                      rounded-full\r
                      border-4\r
                      border-deepsea\r
                      bg-meadow-500\r
                    `})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx("h2",{className:"font-display text-2xl font-extrabold sm:text-3xl",children:l?"Loading...":c}),r.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-sky-100",children:[r.jsx(ie,{className:"h-3 w-3"}),"Active"]})]}),r.jsx("p",{className:"mt-1 text-sm text-blue-100",children:"HopeCloud Member"}),r.jsxs("div",{className:"mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-blue-100",children:[r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Tt,{className:"h-3.5 w-3.5"}),j]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Za,{className:"h-3.5 w-3.5"}),"Member since ",v]})]})]})]}),r.jsxs("div",{className:"rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm",children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.15em] text-blue-100",children:"Contributor Rating"}),r.jsxs("div",{className:"mt-1 flex items-center gap-2",children:[r.jsx(ro,{className:"h-5 w-5 text-amber-300"}),r.jsx("span",{className:"font-display text-xl font-extrabold",children:"Not rated"})]}),r.jsx("p",{className:"mt-1 text-xs text-blue-100",children:"Feedback is not available yet."})]})]})]}),r.jsxs("button",{onClick:()=>i(!0),className:`\r
              mt-4\r
              flex\r
              w-full\r
              items-center\r
              justify-center\r
              gap-2\r
              rounded-xl\r
              border\r
              border-cloudline\r
              bg-white\r
              px-4\r
              py-3\r
              text-sm\r
              font-bold\r
              text-deepsea\r
              shadow-card\r
              sm:hidden\r
            `,children:[r.jsx(Ic,{className:"h-4 w-4"}),"Edit Profile"]}),r.jsxs("section",{className:"mt-8",children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.16em] text-slate-muted",children:"Your Contributions"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink sm:text-2xl",children:"Contribution Overview"})]}),r.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:m.map(p=>{const k=p.icon;return r.jsxs("div",{className:`\r
                      group\r
                      rounded-2xl\r
                      border\r
                      border-cloudline\r
                      bg-white\r
                      p-5\r
                      shadow-card\r
                      transition-all\r
                      duration-300\r
                      hover:-translate-y-1\r
                      hover:shadow-soft\r
                    `,children:[r.jsx("div",{className:"flex items-start justify-between",children:r.jsx("div",{className:`flex h-11 w-11 items-center justify-center rounded-xl ${p.iconBg} ${p.iconColor} transition-transform duration-300 group-hover:scale-110`,children:r.jsx(k,{className:"h-5 w-5"})})}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:p.value}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:p.label})]},p.label)})})]}),r.jsxs("div",{className:"mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]",children:[r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-cloudline p-6",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Personal Information"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Your Profile Details"})]}),r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(tl,{className:"h-5 w-5"})})]}),r.jsx("div",{className:"grid gap-0 sm:grid-cols-2",children:u.map((p,k)=>{const N=p.icon;return r.jsxs("div",{className:`
                        flex
                        items-center
                        gap-4
                        p-5
                        ${k<u.length-1?"border-b border-cloudline":""}
                      `,children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-slate-muted",children:r.jsx(N,{className:"h-4 w-4"})}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:p.label}),r.jsx("p",{className:"mt-1 truncate text-sm font-semibold text-ink",children:p.value})]})]},p.label)})})]}),r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-meadow-500/10 text-meadow-600",children:r.jsx(ln,{className:"h-5 w-5"})}),r.jsx("span",{className:"rounded-full bg-meadow-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-meadow-600",children:"Active"})]}),r.jsx("p",{className:"mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Account Status"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Your account is active."}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-slate-muted",children:"Your HopeCloud account is active and ready for donations and contributions."}),r.jsxs("div",{className:"mt-5 space-y-3",children:[r.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-mist p-3",children:[r.jsx(ie,{className:"h-4 w-4 text-meadow-600"}),r.jsx("span",{className:"text-xs font-semibold text-ink",children:"Account active"})]}),r.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-mist p-3",children:[r.jsx(ln,{className:"h-4 w-4 text-sky-600"}),r.jsx("span",{className:"text-xs font-semibold text-ink",children:"Authentication protected"})]})]})]})]}),r.jsx("section",{className:"mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6 sm:p-7",children:r.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx($,{className:"h-5 w-5 fill-current"})}),r.jsxs("div",{children:[r.jsx("p",{className:"font-display text-base font-extrabold text-ink",children:"Keep making a difference."}),r.jsx("p",{className:"mt-1 max-w-xl text-xs leading-relaxed text-slate-muted",children:"Your profile keeps track of your real HopeCloud contribution activity."})]})]}),r.jsxs(O,{to:"/user-dashboard",className:`\r
                  inline-flex\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-full\r
                  bg-deepsea\r
                  px-5\r
                  py-3\r
                  text-xs\r
                  font-bold\r
                  text-white\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-0.5\r
                  hover:bg-sky-600\r
                  hover:shadow-glow\r
                `,children:["Back to Dashboard",r.jsx(Ze,{className:"h-4 w-4 rotate-180"})]})]})})]})}),o&&r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-deepsea/30 px-5 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-3xl border border-cloudline bg-white p-7 shadow-soft",children:[r.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600",children:r.jsx(Qx,{className:"h-6 w-6"})}),r.jsx("h3",{className:"mt-5 text-center font-display text-xl font-extrabold text-ink",children:"Profile Editing"}),r.jsx("p",{className:"mt-2 text-center text-sm leading-relaxed text-slate-muted",children:"Profile editing is not connected yet. Your current account information is loaded from the authenticated HopeCloud account."}),r.jsx("button",{onClick:()=>i(!1),className:`\r
                mt-6\r
                w-full\r
                rounded-full\r
                bg-deepsea\r
                px-5\r
                py-3\r
                text-sm\r
                font-bold\r
                text-white\r
                transition-all\r
                hover:bg-sky-600\r
                hover:shadow-glow\r
              `,children:"Got it"})]})})]})}const fg=[{title:"First Donation",description:"Made your first contribution to HopeCloud.",progress:1,target:1,icon:xe,unlocked:!0,category:"Milestone"},{title:"Book Giver",description:"Donate educational books to someone in need.",progress:8,target:5,icon:kl,unlocked:!0,category:"Contribution"},{title:"Helping Hand",description:"Help at least 10 people through your donations.",progress:24,target:10,icon:$,unlocked:!0,category:"Impact"},{title:"Clothing Contributor",description:"Donate 10 clothing items to people who need them.",progress:6,target:10,icon:Br,unlocked:!1,category:"Contribution"},{title:"Community Hero",description:"Help 50 people through your contributions.",progress:24,target:50,icon:bl,unlocked:!1,category:"Impact"},{title:"Hope Champion",description:"Reach a personal impact score of 90.",progress:82,target:90,icon:ro,unlocked:!1,category:"Special"}],hg=[{label:"Unlocked",value:"03",icon:el,description:"Achievements earned"},{label:"In Progress",value:"03",icon:ce,description:"Keep going"},{label:"Total",value:"06",icon:Re,description:"Available achievements"}];function pg(){return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"border-b border-cloudline bg-white",children:r.jsx("div",{className:"mx-auto flex max-w-7xl items-center px-5 py-6 sm:px-8 lg:px-10",children:r.jsxs(O,{to:"/user-dashboard",className:`\r
              group\r
              flex\r
              items-center\r
              gap-3\r
              text-sm\r
              font-semibold\r
              text-slate-muted\r
              transition-colors\r
              hover:text-deepsea\r
            `,children:[r.jsx("span",{className:`\r
                flex\r
                h-10\r
                w-10\r
                items-center\r
                justify-center\r
                rounded-xl\r
                border\r
                border-cloudline\r
                bg-white\r
                transition-all\r
                duration-300\r
                group-hover:-translate-x-1\r
                group-hover:border-sky-200\r
                group-hover:bg-sky-50\r
              `,children:r.jsx(Ze,{className:"h-5 w-5"})}),"Back to Dashboard"]})})}),r.jsx("main",{className:"px-5 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsxs("div",{className:"flex flex-col gap-5 md:flex-row md:items-end md:justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600",children:[r.jsx(el,{className:"h-4 w-4"}),"Your Milestones"]}),r.jsx("h1",{className:"mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Achievements"}),r.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base",children:"Celebrate the milestones you've reached and discover new ways to increase your impact through HopeCloud."})]}),r.jsx("div",{className:"rounded-2xl border border-cloudline bg-white px-5 py-4 shadow-card",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600",children:r.jsx(el,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs text-slate-muted",children:"Overall Progress"}),r.jsx("p",{className:"font-display text-lg font-extrabold text-ink",children:"50%"})]})]})})]}),r.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-3",children:hg.map(e=>{const t=e.icon;return r.jsxs("div",{className:`\r
                    group\r
                    rounded-2xl\r
                    border\r
                    border-cloudline\r
                    bg-white\r
                    p-5\r
                    shadow-card\r
                    transition-all\r
                    duration-300\r
                    hover:-translate-y-1\r
                    hover:shadow-soft\r
                  `,children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110",children:r.jsx(t,{className:"h-5 w-5"})}),r.jsx(Rn,{className:"h-4 w-4 text-slate-muted"})]}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:e.value}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:e.label}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:e.description})]},e.label)})}),r.jsxs("section",{className:`\r
              relative\r
              mt-8\r
              overflow-hidden\r
              rounded-3xl\r
              bg-deepsea\r
              p-6\r
              text-white\r
              shadow-soft\r
              sm:p-8\r
            `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-meadow-500/10 blur-3xl"}),r.jsxs("div",{className:"relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between",children:[r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10",children:r.jsx(ce,{className:"h-7 w-7 text-sky-200"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-sky-200",children:"Next Milestone"}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold",children:"Hope Champion"}),r.jsx("p",{className:"mt-2 max-w-xl text-sm leading-relaxed text-blue-100",children:"You're only 8 impact points away from becoming a Hope Champion."})]})]}),r.jsx("div",{className:"shrink-0",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"h-2 w-32 overflow-hidden rounded-full bg-white/15",children:r.jsx("div",{className:"h-full rounded-full bg-sky-300",style:{width:"91%"}})}),r.jsx("span",{className:"text-xs font-bold text-white",children:"82 / 90"})]})})]})]}),r.jsxs("section",{className:"mt-10",children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.16em] text-slate-muted",children:"Your Collection"}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold text-ink",children:"All Achievements"})]}),r.jsx("div",{className:"grid gap-5 md:grid-cols-2 xl:grid-cols-3",children:fg.map(e=>{const t=e.icon,n=Math.min(e.progress/e.target*100,100);return r.jsxs("div",{className:`
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      bg-white
                      p-6
                      shadow-card
                      transition-all
                      duration-300
                      ${e.unlocked?"border-sky-100 hover:-translate-y-1 hover:shadow-soft":"border-cloudline"}
                    `,children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:`
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          ${e.unlocked?"bg-sky-50 text-sky-600":"bg-mist text-slate-muted"}
                        `,children:r.jsx(t,{className:"h-7 w-7"})}),e.unlocked?r.jsxs("span",{className:"flex items-center gap-1 rounded-full bg-meadow-500/10 px-3 py-1.5 text-[10px] font-bold text-meadow-600",children:[r.jsx(ie,{className:"h-3.5 w-3.5"}),"Unlocked"]}):r.jsxs("span",{className:"flex items-center gap-1 rounded-full bg-mist px-3 py-1.5 text-[10px] font-bold text-slate-muted",children:[r.jsx(On,{className:"h-3.5 w-3.5"}),"Locked"]})]}),r.jsx("p",{className:"mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600",children:e.category}),r.jsx("h3",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:e.title}),r.jsx("p",{className:"mt-2 min-h-[42px] text-sm leading-relaxed text-slate-muted",children:e.description}),!e.unlocked&&r.jsxs("div",{className:"mt-5",children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[r.jsx("span",{className:"text-[11px] font-semibold text-slate-muted",children:"Progress"}),r.jsxs("span",{className:"text-[11px] font-bold text-deepsea",children:[e.progress," / ",e.target]})]}),r.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-sky-50",children:r.jsx("div",{className:"h-full rounded-full bg-sky-500 transition-all duration-700",style:{width:`${n}%`}})})]}),e.unlocked&&r.jsxs("div",{className:"mt-5 flex items-center gap-2 rounded-xl bg-meadow-500/5 px-3 py-2.5 text-xs font-semibold text-meadow-600",children:[r.jsx(ie,{className:"h-4 w-4"}),"Achievement earned"]})]},e.title)})})]}),r.jsx("section",{className:"mt-8 rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8",children:r.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center",children:[r.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm",children:r.jsx($,{className:"h-6 w-6 fill-current"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-display text-lg font-extrabold text-ink",children:"Every contribution moves you forward."}),r.jsx("p",{className:"mt-1 text-sm leading-relaxed text-slate-muted",children:"Keep donating books, clothes and essential items to unlock more milestones and increase your impact."})]}),r.jsxs(O,{to:"/donate",className:`\r
                  inline-flex\r
                  shrink-0\r
                  items-center\r
                  justify-center\r
                  gap-2\r
                  rounded-full\r
                  bg-deepsea\r
                  px-5\r
                  py-3\r
                  text-xs\r
                  font-bold\r
                  text-white\r
                  transition-all\r
                  duration-300\r
                  hover:-translate-y-0.5\r
                  hover:bg-sky-600\r
                  hover:shadow-glow\r
                `,children:[r.jsx(xe,{className:"h-4 w-4"}),"Donate Now"]})]})})]})})]})}function ra(){rt();const[e,t]=x.useState(""),[n,s]=x.useState(""),[l,a]=x.useState(""),o=i=>{if(i.preventDefault(),a(""),e.trim().toLowerCase()==="admin@hopecloud.com"&&n==="admin123"){localStorage.setItem("hopecloud_admin_logged_in","true"),window.location.href="/admindashboard";return}a("Invalid admin email or password.")};return r.jsx("div",{className:"min-h-screen bg-mist px-4 py-10",children:r.jsx("div",{className:"flex min-h-[90vh] items-center justify-center",children:r.jsxs("div",{className:"w-full max-w-md",children:[r.jsxs("div",{className:"mb-8 text-center",children:[r.jsx("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-deepsea text-white shadow-glow",children:r.jsx(ln,{size:30})}),r.jsx("h1",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:"Admin Login"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Sign in to manage HopeCloud"})]}),r.jsx("div",{className:"rounded-3xl border border-cloudline bg-white p-7 shadow-card",children:r.jsxs("form",{onSubmit:o,className:"space-y-5",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Admin Email"}),r.jsxs("div",{className:"relative",children:[r.jsx(Wn,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"email",value:e,onChange:i=>t(i.target.value),placeholder:"admin@hopecloud.com",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(On,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"password",value:n,onChange:i=>s(i.target.value),placeholder:"Enter admin password",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),l&&r.jsx("div",{className:"rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600",children:l}),r.jsxs("button",{type:"submit",className:"flex w-full items-center justify-center gap-2 rounded-xl bg-deepsea px-5 py-3.5 text-sm font-bold text-white transition hover:bg-deepsea/90",children:["Login to Admin Panel",r.jsx($t,{size:17})]})]})}),r.jsx("p",{className:"mt-6 text-center text-xs text-slate-muted",children:"HopeCloud Administration Panel"})]})})})}function fi(){const e=We();rt();const t=[{label:"Dashboard",path:"/admindashboard",icon:di},{label:"Donations",path:"/admin/donations",icon:sn},{label:"Users",path:"/admin/users",icon:bl}],n=()=>{localStorage.removeItem("hopecloud_admin_logged_in"),window.location.href="/admindashboard"};return r.jsxs("aside",{className:"fixed left-0 top-0 hidden h-screen w-64 border-r border-cloudline bg-white lg:flex lg:flex-col",children:[r.jsxs("div",{className:"flex items-center gap-3 border-b border-cloudline px-6 py-5",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-deepsea text-white",children:r.jsx(ln,{size:21})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display font-extrabold text-ink",children:"HopeCloud"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Admin Panel"})]})]}),r.jsxs("nav",{className:"flex-1 space-y-2 px-4 py-6",children:[r.jsx("p",{className:"mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-muted",children:"Main Menu"}),t.map(s=>{const l=s.icon,a=e.pathname===s.path;return r.jsxs(O,{to:s.path,className:`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${a?"bg-deepsea text-white shadow-soft":"text-slate-muted hover:bg-mist hover:text-ink"}`,children:[r.jsx(l,{size:19}),s.label]},s.path)}),r.jsx("p",{className:"mb-3 mt-8 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-muted",children:"Account"}),r.jsxs(O,{to:"/admin/profile",className:`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${e.pathname==="/admin/profile"?"bg-deepsea text-white shadow-soft":"text-slate-muted hover:bg-mist hover:text-ink"}`,children:[r.jsx(Zs,{size:19}),"Admin Profile"]}),r.jsxs(O,{to:"/admin/add-admin",className:`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${e.pathname==="/admin/add-admin"?"bg-deepsea text-white shadow-soft":"text-slate-muted hover:bg-mist hover:text-ink"}`,children:[r.jsx(Ir,{size:19}),"Add Another Admin"]})]}),r.jsx("div",{className:"border-t border-cloudline p-4",children:r.jsxs("button",{type:"button",onClick:n,className:"flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50",children:[r.jsx(Nl,{size:19}),"Logout"]})})]})}function fs({title:e,value:t,description:n,icon:s,iconBg:l="bg-sky-50",iconColor:a="text-sky-600"}){return r.jsx("div",{className:"rounded-2xl border border-cloudline bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card",children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-slate-muted",children:e}),r.jsx("h3",{className:"mt-2 font-display text-3xl font-extrabold text-ink",children:t}),n&&r.jsx("p",{className:"mt-2 text-xs text-slate-muted",children:n})]}),r.jsx("div",{className:`flex h-11 w-11 items-center justify-center rounded-xl ${l} ${a}`,children:s})]})})}function xg(){const e=[{donor:"Ayesha Khan",item:"Winter Clothes",category:"Clothes",status:"Pending",date:"Aug 30, 2026"},{donor:"Ali Raza",item:"School Books",category:"Books",status:"Approved",date:"Aug 29, 2026"},{donor:"Sara Ahmed",item:"Children Toys",category:"Children",status:"Pending",date:"Aug 28, 2026"},{donor:"Hassan Malik",item:"Food Packages",category:"Food",status:"Approved",date:"Aug 27, 2026"}];return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(fi,{}),r.jsx("main",{className:"lg:ml-64",children:r.jsxs("div",{className:"mx-auto max-w-7xl px-5 py-8 sm:px-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-600",children:"Administration"}),r.jsx("h1",{className:"mt-1 font-display text-3xl font-extrabold text-ink",children:"Dashboard Overview"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Monitor donations and HopeCloud activity."})]}),r.jsxs("div",{className:"grid gap-5 sm:grid-cols-2 xl:grid-cols-4",children:[r.jsx(fs,{title:"Total Donations",value:"248",description:"All submitted donations",icon:r.jsx(sn,{size:21})}),r.jsx(fs,{title:"Pending Donations",value:"32",description:"Waiting for review",icon:r.jsx(wm,{size:21}),iconBg:"bg-amber-50",iconColor:"text-amber-600"}),r.jsx(fs,{title:"Approved Donations",value:"216",description:"Successfully approved",icon:r.jsx(ie,{size:21}),iconBg:"bg-green-50",iconColor:"text-green-600"}),r.jsx(fs,{title:"Total Users",value:"1,284",description:"Registered HopeCloud users",icon:r.jsx(bl,{size:21}),iconBg:"bg-purple-50",iconColor:"text-purple-600"})]}),r.jsxs("div",{className:"mt-8 rounded-3xl border border-cloudline bg-white shadow-soft",children:[r.jsxs("div",{className:"flex flex-col gap-2 border-b border-cloudline px-6 py-5 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Recent Donations"}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"Latest donation submissions"})]}),r.jsx("button",{className:"text-sm font-bold text-sky-600 hover:text-sky-700",children:"View All"})]}),r.jsx("div",{className:"divide-y divide-cloudline",children:e.map((t,n)=>r.jsxs("div",{className:"flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(sn,{size:20})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-bold text-ink",children:t.item}),r.jsxs("p",{className:"mt-1 text-xs text-slate-muted",children:["Donated by ",t.donor]})]})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-4 md:justify-end",children:[r.jsx("span",{className:"rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-muted",children:t.category}),r.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-bold ${t.status==="Approved"?"bg-green-50 text-green-600":"bg-amber-50 text-amber-600"}`,children:t.status}),r.jsx("span",{className:"text-xs text-slate-muted",children:t.date})]})]},n))})]}),r.jsxs("div",{className:"mt-8 grid gap-5 md:grid-cols-2",children:[r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-soft",children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Donation Status"}),r.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-muted",children:"You currently have 32 donations waiting for review. Review them to keep the donation process moving smoothly."}),r.jsx("div",{className:"mt-5 h-3 overflow-hidden rounded-full bg-mist",children:r.jsx("div",{className:"h-full rounded-full bg-sky",style:{width:"87%"}})}),r.jsx("p",{className:"mt-2 text-xs font-semibold text-slate-muted",children:"87% of donations approved"})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-deepsea p-6 text-white shadow-soft",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-200",children:"HopeCloud Impact"}),r.jsx("h2",{className:"mt-2 font-display text-2xl font-extrabold",children:"Every approved donation creates an opportunity."}),r.jsx("p",{className:"mt-3 text-sm leading-relaxed text-white/70",children:"Keep the platform organized and help connect useful resources with people who need them."})]})]})]})})]})}function gg(){const e={name:"HopeCloud Admin",email:"admin@hopecloud.com",role:"Administrator"};return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(fi,{}),r.jsx("main",{className:"lg:ml-64",children:r.jsxs("div",{className:"mx-auto max-w-5xl px-5 py-8 sm:px-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-600",children:"Account"}),r.jsx("h1",{className:"mt-1 font-display text-3xl font-extrabold text-ink",children:"Admin Profile"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Manage your administrator account information."})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-soft sm:p-8",children:[r.jsxs("div",{className:"flex flex-col gap-6 sm:flex-row sm:items-center",children:[r.jsx("div",{className:"flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-deepsea text-white",children:r.jsx(Zs,{size:42})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-2xl font-extrabold text-ink",children:e.name}),r.jsx("p",{className:"mt-1 text-sm text-slate-muted",children:e.email}),r.jsxs("span",{className:"mt-3 inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600",children:[r.jsx(ln,{size:14}),e.role]})]})]}),r.jsxs("div",{className:"mt-8 grid gap-5 md:grid-cols-2",children:[r.jsx("div",{className:"rounded-2xl border border-cloudline bg-mist p-5",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600",children:r.jsx(Zs,{size:19})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs text-slate-muted",children:"Full Name"}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:e.name})]})]})}),r.jsx("div",{className:"rounded-2xl border border-cloudline bg-mist p-5",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600",children:r.jsx(Wn,{size:19})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs text-slate-muted",children:"Email Address"}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:e.email})]})]})})]}),r.jsx("div",{className:"mt-6 rounded-2xl border border-cloudline p-5",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(On,{size:19})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-bold text-ink",children:"Account Security"}),r.jsx("p",{className:"mt-1 text-sm text-slate-muted",children:"Your administrator account is protected with a password."}),r.jsx("button",{type:"button",className:"mt-4 rounded-xl border border-cloudline px-4 py-2 text-sm font-bold text-ink transition hover:bg-mist",children:"Change Password"})]})]})})]})]})})]})}function yg(){const[e,t]=x.useState({name:"",email:"",password:"",confirmPassword:""}),[n,s]=x.useState(!1),[l,a]=x.useState(""),o=c=>{t({...e,[c.target.name]:c.target.value}),a(""),s(!1)},i=c=>{if(c.preventDefault(),a(""),s(!1),e.password!==e.confirmPassword){a("Passwords do not match.");return}if(e.password.length<6){a("Password must be at least 6 characters.");return}const d=JSON.parse(localStorage.getItem("hopecloud_admins"))||[];d.push({id:Date.now(),name:e.name,email:e.email,role:"Administrator"}),localStorage.setItem("hopecloud_admins",JSON.stringify(d)),s(!0),t({name:"",email:"",password:"",confirmPassword:""})};return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(fi,{}),r.jsx("main",{className:"lg:ml-64",children:r.jsxs("div",{className:"mx-auto max-w-3xl px-5 py-8 sm:px-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-600",children:"Account Management"}),r.jsx("h1",{className:"mt-1 font-display text-3xl font-extrabold text-ink",children:"Add Another Admin"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Create a new administrator account for HopeCloud."})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-soft sm:p-8",children:[r.jsxs("div",{className:"mb-7 flex items-center gap-4",children:[r.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(Ir,{size:22})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Administrator Registration"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Enter the details for the new admin."})]})]}),r.jsxs("form",{onSubmit:i,className:"space-y-5",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Full Name"}),r.jsxs("div",{className:"relative",children:[r.jsx(Zs,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"text",name:"name",value:e.name,onChange:o,placeholder:"Enter admin name",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Email Address"}),r.jsxs("div",{className:"relative",children:[r.jsx(Wn,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"email",name:"email",value:e.email,onChange:o,placeholder:"admin@example.com",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(On,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"password",name:"password",value:e.password,onChange:o,placeholder:"Minimum 6 characters",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Confirm Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(On,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:o,placeholder:"Confirm password",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),l&&r.jsx("div",{className:"rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600",children:l}),n&&r.jsxs("div",{className:"flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-600",children:[r.jsx(ie,{size:18}),"Admin account created successfully."]}),r.jsxs("button",{type:"submit",className:"flex w-full items-center justify-center gap-2 rounded-xl bg-deepsea px-5 py-3.5 text-sm font-bold text-white transition hover:bg-deepsea/90",children:[r.jsx(Ir,{size:18}),"Create Admin Account"]})]})]})]})})]})}function vg(){return r.jsxs(r.Fragment,{children:[r.jsx(k0,{}),r.jsxs("main",{children:[r.jsx(b0,{}),r.jsx(_0,{}),r.jsx(M0,{}),r.jsx(W0,{}),r.jsx(T0,{}),r.jsx(O0,{}),r.jsx($0,{}),r.jsx(H0,{})]}),r.jsx(B0,{})]})}function wg({title:e,description:t}){return r.jsx("div",{className:"min-h-screen bg-mist",children:r.jsx("div",{className:"flex min-h-screen items-center justify-center px-6",children:r.jsxs("div",{className:"w-full max-w-lg rounded-3xl border border-cloudline bg-white p-8 text-center shadow-card",children:[r.jsx("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600",children:r.jsx("span",{className:"text-2xl",children:"✨"})}),r.jsx("h1",{className:"mt-5 font-display text-2xl font-extrabold text-ink",children:e}),r.jsx("p",{className:"mt-3 text-sm leading-relaxed text-slate-muted",children:t}),r.jsx(O,{to:"/user-dashboard",className:"btn-primary mt-6",children:"Back to Dashboard"})]})})})}function jg(){return r.jsx(v0,{children:r.jsxs(ox,{children:[r.jsx(ve,{path:"/",element:r.jsx(vg,{})}),r.jsx(ve,{path:"/login",element:r.jsx(Y0,{})}),r.jsx(ve,{path:"/register",element:r.jsx(Q0,{})}),r.jsxs(ve,{element:r.jsx(w0,{}),children:[r.jsx(ve,{path:"/user-dashboard",element:r.jsx(ag,{})}),r.jsx(ve,{path:"/user-dashboard/donations",element:r.jsx(ig,{})}),r.jsx(ve,{path:"/user-dashboard/impact",element:r.jsx(ug,{})}),r.jsx(ve,{path:"/user-dashboard/profile",element:r.jsx(mg,{})}),r.jsx(ve,{path:"/user-dashboard/achievements",element:r.jsx(pg,{})}),r.jsx(ve,{path:"/user-dashboard/settings",element:r.jsx(wg,{title:"Settings",description:"Account preferences and dashboard settings will be available here."})}),r.jsx(ve,{path:"/donate",element:r.jsx(q0,{})})]}),r.jsx(ve,{path:"/admindashboard",element:localStorage.getItem("hopecloud_admin_logged_in")==="true"?r.jsx(xg,{}):r.jsx(ra,{})}),r.jsx(ve,{path:"/admin/profile",element:localStorage.getItem("hopecloud_admin_logged_in")==="true"?r.jsx(gg,{}):r.jsx(ra,{})}),r.jsx(ve,{path:"/admin/add-admin",element:localStorage.getItem("hopecloud_admin_logged_in")==="true"?r.jsx(yg,{}):r.jsx(ra,{})})]})})}sa.createRoot(document.getElementById("root")).render(r.jsx(Wm.StrictMode,{children:r.jsx(_x,{children:r.jsx(jg,{})})}));
