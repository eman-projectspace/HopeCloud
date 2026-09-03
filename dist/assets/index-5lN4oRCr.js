(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function Em(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fc={exports:{}},rl={},Hc={exports:{}},T={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),Pm=Symbol.for("react.portal"),Rm=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),zm=Symbol.for("react.suspense"),Tm=Symbol.for("react.memo"),Am=Symbol.for("react.lazy"),hi=Symbol.iterator;function Om(e){return e===null||typeof e!="object"?null:(e=hi&&e[hi]||e["@@iterator"],typeof e=="function"?e:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Vc={};function Fn(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Uc}Fn.prototype.isReactComponent={};Fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wc(){}Wc.prototype=Fn.prototype;function so(e,t,n){this.props=e,this.context=t,this.refs=Vc,this.updater=n||Uc}var lo=so.prototype=new Wc;lo.constructor=so;Bc(lo,Fn.prototype);lo.isPureReactComponent=!0;var pi=Array.isArray,Yc=Object.prototype.hasOwnProperty,ao={current:null},Qc={key:!0,ref:!0,__self:!0,__source:!0};function Gc(e,t,n){var s,l={},a=null,o=null;if(t!=null)for(s in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Yc.call(t,s)&&!Qc.hasOwnProperty(s)&&(l[s]=t[s]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(s in i=e.defaultProps,i)l[s]===void 0&&(l[s]=i[s]);return{$$typeof:Tr,type:e,key:a,ref:o,props:l,_owner:ao.current}}function $m(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function oo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function Fm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xi=/\/+/g;function El(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fm(""+e.key):t.toString(36)}function ps(e,t,n,s,l){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Tr:case Pm:o=!0}}if(o)return o=e,l=l(o),e=s===""?"."+El(o,0):s,pi(l)?(n="",e!=null&&(n=e.replace(xi,"$&/")+"/"),ps(l,t,n,"",function(u){return u})):l!=null&&(oo(l)&&(l=$m(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(xi,"$&/")+"/")+e)),t.push(l)),1;if(o=0,s=s===""?".":s+":",pi(e))for(var i=0;i<e.length;i++){a=e[i];var c=s+El(a,i);o+=ps(a,t,n,c,l)}else if(c=Om(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=s+El(a,i++),o+=ps(a,t,n,c,l);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Qr(e,t,n){if(e==null)return e;var s=[],l=0;return ps(e,s,"","",function(a){return t.call(n,a,l++)}),s}function Hm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},xs={transition:null},Um={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:xs,ReactCurrentOwner:ao};function Kc(){throw Error("act(...) is not supported in production builds of React.")}T.Children={map:Qr,forEach:function(e,t,n){Qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Qr(e,function(){t++}),t},toArray:function(e){return Qr(e,function(t){return t})||[]},only:function(e){if(!oo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=Fn;T.Fragment=Rm;T.Profiler=Mm;T.PureComponent=so;T.StrictMode=Lm;T.Suspense=zm;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;T.act=Kc;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Bc({},e.props),l=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=ao.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)Yc.call(t,c)&&!Qc.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];s.children=i}return{$$typeof:Tr,type:e.type,key:l,ref:a,props:s,_owner:o}};T.createContext=function(e){return e={$$typeof:Dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_m,_context:e},e.Consumer=e};T.createElement=Gc;T.createFactory=function(e){var t=Gc.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:Im,render:e}};T.isValidElement=oo;T.lazy=function(e){return{$$typeof:Am,_payload:{_status:-1,_result:e},_init:Hm}};T.memo=function(e,t){return{$$typeof:Tm,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=xs.transition;xs.transition={};try{e()}finally{xs.transition=t}};T.unstable_act=Kc;T.useCallback=function(e,t){return Ne.current.useCallback(e,t)};T.useContext=function(e){return Ne.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};T.useEffect=function(e,t){return Ne.current.useEffect(e,t)};T.useId=function(){return Ne.current.useId()};T.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return Ne.current.useMemo(e,t)};T.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};T.useRef=function(e){return Ne.current.useRef(e)};T.useState=function(e){return Ne.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return Ne.current.useTransition()};T.version="18.3.1";Hc.exports=T;var x=Hc.exports;const Bm=Em(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=x,Wm=Symbol.for("react.element"),Ym=Symbol.for("react.fragment"),Qm=Object.prototype.hasOwnProperty,Gm=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Km={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var s,l={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)Qm.call(t,s)&&!Km.hasOwnProperty(s)&&(l[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)l[s]===void 0&&(l[s]=t[s]);return{$$typeof:Wm,type:e,key:a,ref:o,props:l,_owner:Gm.current}}rl.Fragment=Ym;rl.jsx=qc;rl.jsxs=qc;Fc.exports=rl;var r=Fc.exports,sa={},Jc={exports:{}},ze={},Xc={exports:{}},Zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,D){var z=R.length;R.push(D);e:for(;0<z;){var q=z-1>>>1,se=R[q];if(0<l(se,D))R[q]=D,R[z]=se,z=q;else break e}}function n(R){return R.length===0?null:R[0]}function s(R){if(R.length===0)return null;var D=R[0],z=R.pop();if(z!==D){R[0]=z;e:for(var q=0,se=R.length,Wr=se>>>1;q<Wr;){var Ut=2*(q+1)-1,Cl=R[Ut],Bt=Ut+1,Yr=R[Bt];if(0>l(Cl,z))Bt<se&&0>l(Yr,Cl)?(R[q]=Yr,R[Bt]=z,q=Bt):(R[q]=Cl,R[Ut]=z,q=Ut);else if(Bt<se&&0>l(Yr,z))R[q]=Yr,R[Bt]=z,q=Bt;else break e}}return D}function l(R,D){var z=R.sortIndex-D.sortIndex;return z!==0?z:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,i=o.now();e.unstable_now=function(){return o.now()-i}}var c=[],u=[],m=1,h=null,g=3,v=!1,j=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var D=n(u);D!==null;){if(D.callback===null)s(u);else if(D.startTime<=R)s(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function k(R){if(w=!1,p(R),!j)if(n(c)!==null)j=!0,oe(S);else{var D=n(u);D!==null&&cn(k,D.startTime-R)}}function S(R,D){j=!1,w&&(w=!1,f(E),E=-1),v=!0;var z=g;try{for(p(D),h=n(c);h!==null&&(!(h.expirationTime>D)||R&&!ye());){var q=h.callback;if(typeof q=="function"){h.callback=null,g=h.priorityLevel;var se=q(h.expirationTime<=D);D=e.unstable_now(),typeof se=="function"?h.callback=se:h===n(c)&&s(c),p(D)}else s(c);h=n(c)}if(h!==null)var Wr=!0;else{var Ut=n(u);Ut!==null&&cn(k,Ut.startTime-D),Wr=!1}return Wr}finally{h=null,g=z,v=!1}}var N=!1,C=null,E=-1,M=5,_=-1;function ye(){return!(e.unstable_now()-_<M)}function it(){if(C!==null){var R=e.unstable_now();_=R;var D=!0;try{D=C(!0,R)}finally{D?I():(N=!1,C=null)}}else N=!1}var I;if(typeof d=="function")I=function(){d(it)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,re=X.port2;X.port1.onmessage=it,I=function(){re.postMessage(null)}}else I=function(){y(it,0)};function oe(R){C=R,N||(N=!0,I())}function cn(R,D){E=y(function(){R(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){j||v||(j=!0,oe(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var z=g;g=D;try{return R()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=g;g=R;try{return D()}finally{g=z}},e.unstable_scheduleCallback=function(R,D,z){var q=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?q+z:q):z=q,R){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=z+se,R={id:m++,callback:D,priorityLevel:R,startTime:z,expirationTime:se,sortIndex:-1},z>q?(R.sortIndex=z,t(u,R),n(c)===null&&R===n(u)&&(w?(f(E),E=-1):w=!0,cn(k,z-q))):(R.sortIndex=se,t(c,R),j||v||(j=!0,oe(S))),R},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(R){var D=g;return function(){var z=g;g=D;try{return R.apply(this,arguments)}finally{g=z}}}})(Zc);Xc.exports=Zc;var qm=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=x,Ie=qm;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eu=new Set,gr={};function an(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(gr[e]=t,e=0;e<t.length;e++)eu.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,Xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gi={},yi={};function Zm(e){return la.call(yi,e)?!0:la.call(gi,e)?!1:Xm.test(e)?yi[e]=!0:(gi[e]=!0,!1)}function ef(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tf(e,t,n,s){if(t===null||typeof t>"u"||ef(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,s,l,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var io=/[\-:]([a-z])/g;function co(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(io,co);de[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(io,co);de[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(io,co);de[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function uo(e,t,n,s){var l=de.hasOwnProperty(t)?de[t]:null;(l!==null?l.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tf(t,n,l,s)&&(n=null),s||l===null?Zm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,s=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var vt=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),dn=Symbol.for("react.portal"),mn=Symbol.for("react.fragment"),mo=Symbol.for("react.strict_mode"),aa=Symbol.for("react.profiler"),tu=Symbol.for("react.provider"),nu=Symbol.for("react.context"),fo=Symbol.for("react.forward_ref"),oa=Symbol.for("react.suspense"),ia=Symbol.for("react.suspense_list"),ho=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),ru=Symbol.for("react.offscreen"),vi=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=vi&&e[vi]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,Pl;function rr(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Rl=!1;function Ll(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),a=s.stack.split(`
`),o=l.length-1,i=a.length-1;1<=o&&0<=i&&l[o]!==a[i];)i--;for(;1<=o&&0<=i;o--,i--)if(l[o]!==a[i]){if(o!==1||i!==1)do if(o--,i--,0>i||l[o]!==a[i]){var c=`
`+l[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=i);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function nf(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=Ll(e.type,!1),e;case 11:return e=Ll(e.type.render,!1),e;case 1:return e=Ll(e.type,!0),e;default:return""}}function ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mn:return"Fragment";case dn:return"Portal";case aa:return"Profiler";case mo:return"StrictMode";case oa:return"Suspense";case ia:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nu:return(e.displayName||"Context")+".Consumer";case tu:return(e._context.displayName||"Context")+".Provider";case fo:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ho:return t=e.displayName||null,t!==null?t:ca(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return ca(e(t))}catch{}}return null}function rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ca(t);case 8:return t===mo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function su(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sf(e){var t=su(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){s=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=sf(e))}function lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=su(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ua(e,t){var n=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wi(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function au(e,t){t=t.checked,t!=null&&uo(e,"checked",t,!1)}function da(e,t){au(e,t);var n=Tt(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&ma(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ji(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ma(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var sr=Array.isArray;function Nn(e,t,n,s){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,s&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function fa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ki(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(sr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function ou(e,t){var n=Tt(t.value),s=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Ni(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ha(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?iu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,cu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lf=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(e){lf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),or[t]=or[e]})});function uu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||or.hasOwnProperty(e)&&or[e]?(""+t).trim():t+"px"}function du(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,l=uu(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,l):e[n]=l}}var af=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pa(e,t){if(t){if(af[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function xa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ga=null;function po(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,bn=null,Sn=null;function bi(e){if(e=$r(e)){if(typeof ya!="function")throw Error(b(280));var t=e.stateNode;t&&(t=il(t),ya(e.stateNode,e.type,t))}}function mu(e){bn?Sn?Sn.push(e):Sn=[e]:bn=e}function fu(){if(bn){var e=bn,t=Sn;if(Sn=bn=null,bi(e),t)for(e=0;e<t.length;e++)bi(t[e])}}function hu(e,t){return e(t)}function pu(){}var Ml=!1;function xu(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return hu(e,t,n)}finally{Ml=!1,(bn!==null||Sn!==null)&&(pu(),fu())}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var s=il(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var va=!1;if(ht)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){va=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{va=!1}function of(e,t,n,s,l,a,o,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(m){this.onError(m)}}var ir=!1,Ls=null,Ms=!1,wa=null,cf={onError:function(e){ir=!0,Ls=e}};function uf(e,t,n,s,l,a,o,i,c){ir=!1,Ls=null,of.apply(cf,arguments)}function df(e,t,n,s,l,a,o,i,c){if(uf.apply(this,arguments),ir){if(ir){var u=Ls;ir=!1,Ls=null}else throw Error(b(198));Ms||(Ms=!0,wa=u)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function gu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Si(e){if(on(e)!==e)throw Error(b(188))}function mf(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,s=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(s=l.return,s!==null){n=s;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Si(l),e;if(a===s)return Si(l),t;a=a.sibling}throw Error(b(188))}if(n.return!==s.return)n=l,s=a;else{for(var o=!1,i=l.child;i;){if(i===n){o=!0,n=l,s=a;break}if(i===s){o=!0,s=l,n=a;break}i=i.sibling}if(!o){for(i=a.child;i;){if(i===n){o=!0,n=a,s=l;break}if(i===s){o=!0,s=a,n=l;break}i=i.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==s)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function yu(e){return e=mf(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vu(e);if(t!==null)return t;e=e.sibling}return null}var wu=Ie.unstable_scheduleCallback,Ci=Ie.unstable_cancelCallback,ff=Ie.unstable_shouldYield,hf=Ie.unstable_requestPaint,J=Ie.unstable_now,pf=Ie.unstable_getCurrentPriorityLevel,xo=Ie.unstable_ImmediatePriority,ju=Ie.unstable_UserBlockingPriority,_s=Ie.unstable_NormalPriority,xf=Ie.unstable_LowPriority,ku=Ie.unstable_IdlePriority,sl=null,lt=null;function gf(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:wf,yf=Math.log,vf=Math.LN2;function wf(e){return e>>>=0,e===0?32:31-(yf(e)/vf|0)|0}var Jr=64,Xr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,l=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var i=o&~l;i!==0?s=lr(i):(a&=o,a!==0&&(s=lr(a)))}else o=n&~l,o!==0?s=lr(o):a!==0&&(s=lr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&l)&&(l=s&-s,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Ke(t),l=1<<n,s|=e[n],t&=~l;return s}function jf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kf(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Ke(a),i=1<<o,c=l[o];c===-1?(!(i&n)||i&s)&&(l[o]=jf(i,t)):c<=t&&(e.expiredLanes|=i),a&=~i}}function ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nu(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function Nf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ke(n),a=1<<l;t[l]=0,s[l]=-1,e[l]=-1,n&=~a}}function go(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Ke(n),l=1<<s;l&t|e[s]&t&&(e[s]|=t),n&=~l}}var $=0;function bu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Su,yo,Cu,Eu,Pu,ka=!1,Zr=[],Et=null,Pt=null,Rt=null,wr=new Map,jr=new Map,Nt=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ei(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function qn(e,t,n,s,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:a,targetContainers:[l]},t!==null&&(t=$r(t),t!==null&&yo(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Sf(e,t,n,s,l){switch(t){case"focusin":return Et=qn(Et,e,t,n,s,l),!0;case"dragenter":return Pt=qn(Pt,e,t,n,s,l),!0;case"mouseover":return Rt=qn(Rt,e,t,n,s,l),!0;case"pointerover":var a=l.pointerId;return wr.set(a,qn(wr.get(a)||null,e,t,n,s,l)),!0;case"gotpointercapture":return a=l.pointerId,jr.set(a,qn(jr.get(a)||null,e,t,n,s,l)),!0}return!1}function Ru(e){var t=Yt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=gu(n),t!==null){e.blockedOn=t,Pu(e.priority,function(){Cu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);ga=s,n.target.dispatchEvent(s),ga=null}else return t=$r(n),t!==null&&yo(t),e.blockedOn=n,!1;t.shift()}return!0}function Pi(e,t,n){gs(e)&&n.delete(t)}function Cf(){ka=!1,Et!==null&&gs(Et)&&(Et=null),Pt!==null&&gs(Pt)&&(Pt=null),Rt!==null&&gs(Rt)&&(Rt=null),wr.forEach(Pi),jr.forEach(Pi)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,ka||(ka=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Cf)))}function kr(e){function t(l){return Jn(l,e)}if(0<Zr.length){Jn(Zr[0],e);for(var n=1;n<Zr.length;n++){var s=Zr[n];s.blockedOn===e&&(s.blockedOn=null)}}for(Et!==null&&Jn(Et,e),Pt!==null&&Jn(Pt,e),Rt!==null&&Jn(Rt,e),wr.forEach(t),jr.forEach(t),n=0;n<Nt.length;n++)s=Nt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Nt.length&&(n=Nt[0],n.blockedOn===null);)Ru(n),n.blockedOn===null&&Nt.shift()}var Cn=vt.ReactCurrentBatchConfig,Is=!0;function Ef(e,t,n,s){var l=$,a=Cn.transition;Cn.transition=null;try{$=1,vo(e,t,n,s)}finally{$=l,Cn.transition=a}}function Pf(e,t,n,s){var l=$,a=Cn.transition;Cn.transition=null;try{$=4,vo(e,t,n,s)}finally{$=l,Cn.transition=a}}function vo(e,t,n,s){if(Is){var l=Na(e,t,n,s);if(l===null)Ul(e,t,s,zs,n),Ei(e,s);else if(Sf(l,e,t,n,s))s.stopPropagation();else if(Ei(e,s),t&4&&-1<bf.indexOf(e)){for(;l!==null;){var a=$r(l);if(a!==null&&Su(a),a=Na(e,t,n,s),a===null&&Ul(e,t,s,zs,n),a===l)break;l=a}l!==null&&s.stopPropagation()}else Ul(e,t,s,null,n)}}var zs=null;function Na(e,t,n,s){if(zs=null,e=po(s),e=Yt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=gu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zs=e,null}function Lu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pf()){case xo:return 1;case ju:return 4;case _s:case xf:return 16;case ku:return 536870912;default:return 16}default:return 16}}var St=null,wo=null,ys=null;function Mu(){if(ys)return ys;var e,t=wo,n=t.length,s,l="value"in St?St.value:St.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(s=1;s<=o&&t[n-s]===l[a-s];s++);return ys=l.slice(e,1<s?1-s:void 0)}function vs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function es(){return!0}function Ri(){return!1}function Te(e){function t(n,s,l,a,o){this._reactName=n,this._targetInst=l,this.type=s,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?es:Ri,this.isPropagationStopped=Ri,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=es)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=es)},persist:function(){},isPersistent:es}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Te(Hn),Or=G({},Hn,{view:0,detail:0}),Rf=Te(Or),Dl,Il,Xn,ll=G({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Dl=e.screenX-Xn.screenX,Il=e.screenY-Xn.screenY):Il=Dl=0,Xn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Li=Te(ll),Lf=G({},ll,{dataTransfer:0}),Mf=Te(Lf),_f=G({},Or,{relatedTarget:0}),zl=Te(_f),Df=G({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),If=Te(Df),zf=G({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tf=Te(zf),Af=G({},Hn,{data:0}),Mi=Te(Af),Of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ff={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ff[e])?!!t[e]:!1}function ko(){return Hf}var Uf=G({},Or,{key:function(e){if(e.key){var t=Of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bf=Te(Uf),Vf=G({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_i=Te(Vf),Wf=G({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),Yf=Te(Wf),Qf=G({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gf=Te(Qf),Kf=G({},ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qf=Te(Kf),Jf=[9,13,27,32],No=ht&&"CompositionEvent"in window,cr=null;ht&&"documentMode"in document&&(cr=document.documentMode);var Xf=ht&&"TextEvent"in window&&!cr,_u=ht&&(!No||cr&&8<cr&&11>=cr),Di=" ",Ii=!1;function Du(e,t){switch(e){case"keyup":return Jf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fn=!1;function Zf(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(Ii=!0,Di);case"textInput":return e=t.data,e===Di&&Ii?null:e;default:return null}}function eh(e,t){if(fn)return e==="compositionend"||!No&&Du(e,t)?(e=Mu(),ys=wo=St=null,fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _u&&t.locale!=="ko"?null:t.data;default:return null}}var th={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!th[e.type]:t==="textarea"}function zu(e,t,n,s){mu(s),t=Ts(t,"onChange"),0<t.length&&(n=new jo("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var ur=null,Nr=null;function nh(e){Yu(e,0)}function al(e){var t=xn(e);if(lu(t))return e}function rh(e,t){if(e==="change")return t}var Tu=!1;if(ht){var Tl;if(ht){var Al="oninput"in document;if(!Al){var Ti=document.createElement("div");Ti.setAttribute("oninput","return;"),Al=typeof Ti.oninput=="function"}Tl=Al}else Tl=!1;Tu=Tl&&(!document.documentMode||9<document.documentMode)}function Ai(){ur&&(ur.detachEvent("onpropertychange",Au),Nr=ur=null)}function Au(e){if(e.propertyName==="value"&&al(Nr)){var t=[];zu(t,Nr,e,po(e)),xu(nh,t)}}function sh(e,t,n){e==="focusin"?(Ai(),ur=t,Nr=n,ur.attachEvent("onpropertychange",Au)):e==="focusout"&&Ai()}function lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Nr)}function ah(e,t){if(e==="click")return al(t)}function oh(e,t){if(e==="input"||e==="change")return al(t)}function ih(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:ih;function br(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var l=n[s];if(!la.call(t,l)||!Ze(e[l],t[l]))return!1}return!0}function Oi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $i(e,t){var n=Oi(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oi(n)}}function Ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $u(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function bo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ch(e){var t=$u(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ou(n.ownerDocument.documentElement,n)){if(s!==null&&bo(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(s.start,l);s=s.end===void 0?a:Math.min(s.end,l),!e.extend&&a>s&&(l=s,s=a,a=l),l=$i(n,a);var o=$i(n,s);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uh=ht&&"documentMode"in document&&11>=document.documentMode,hn=null,ba=null,dr=null,Sa=!1;function Fi(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sa||hn==null||hn!==Rs(s)||(s=hn,"selectionStart"in s&&bo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),dr&&br(dr,s)||(dr=s,s=Ts(ba,"onSelect"),0<s.length&&(t=new jo("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=hn)))}function ts(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionend:ts("Transition","TransitionEnd")},Ol={},Fu={};ht&&(Fu=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function ol(e){if(Ol[e])return Ol[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fu)return Ol[e]=t[n];return e}var Hu=ol("animationend"),Uu=ol("animationiteration"),Bu=ol("animationstart"),Vu=ol("transitionend"),Wu=new Map,Hi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){Wu.set(e,t),an(t,[e])}for(var $l=0;$l<Hi.length;$l++){var Fl=Hi[$l],dh=Fl.toLowerCase(),mh=Fl[0].toUpperCase()+Fl.slice(1);$t(dh,"on"+mh)}$t(Hu,"onAnimationEnd");$t(Uu,"onAnimationIteration");$t(Bu,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(Vu,"onTransitionEnd");Ln("onMouseEnter",["mouseout","mouseover"]);Ln("onMouseLeave",["mouseout","mouseover"]);Ln("onPointerEnter",["pointerout","pointerover"]);Ln("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function Ui(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,df(s,t,void 0,e),e.currentTarget=null}function Yu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],l=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var o=s.length-1;0<=o;o--){var i=s[o],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==a&&l.isPropagationStopped())break e;Ui(l,i,u),a=c}else for(o=0;o<s.length;o++){if(i=s[o],c=i.instance,u=i.currentTarget,i=i.listener,c!==a&&l.isPropagationStopped())break e;Ui(l,i,u),a=c}}}if(Ms)throw e=wa,Ms=!1,wa=null,e}function U(e,t){var n=t[La];n===void 0&&(n=t[La]=new Set);var s=e+"__bubble";n.has(s)||(Qu(t,e,2,!1),n.add(s))}function Hl(e,t,n){var s=0;t&&(s|=4),Qu(n,e,s,t)}var ns="_reactListening"+Math.random().toString(36).slice(2);function Sr(e){if(!e[ns]){e[ns]=!0,eu.forEach(function(n){n!=="selectionchange"&&(fh.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ns]||(t[ns]=!0,Hl("selectionchange",!1,t))}}function Qu(e,t,n,s){switch(Lu(t)){case 1:var l=Ef;break;case 4:l=Pf;break;default:l=vo}n=l.bind(null,t,n,e),l=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),s?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ul(e,t,n,s,l){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var i=s.stateNode.containerInfo;if(i===l||i.nodeType===8&&i.parentNode===l)break;if(o===4)for(o=s.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===l||c.nodeType===8&&c.parentNode===l))return;o=o.return}for(;i!==null;){if(o=Yt(i),o===null)return;if(c=o.tag,c===5||c===6){s=a=o;continue e}i=i.parentNode}}s=s.return}xu(function(){var u=a,m=po(n),h=[];e:{var g=Wu.get(e);if(g!==void 0){var v=jo,j=e;switch(e){case"keypress":if(vs(n)===0)break e;case"keydown":case"keyup":v=Bf;break;case"focusin":j="focus",v=zl;break;case"focusout":j="blur",v=zl;break;case"beforeblur":case"afterblur":v=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Li;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Yf;break;case Hu:case Uu:case Bu:v=If;break;case Vu:v=Gf;break;case"scroll":v=Rf;break;case"wheel":v=qf;break;case"copy":case"cut":case"paste":v=Tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=_i}var w=(t&4)!==0,y=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=u,p;d!==null;){p=d;var k=p.stateNode;if(p.tag===5&&k!==null&&(p=k,f!==null&&(k=vr(d,f),k!=null&&w.push(Cr(d,k,p)))),y)break;d=d.return}0<w.length&&(g=new v(g,j,null,n,m),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==ga&&(j=n.relatedTarget||n.fromElement)&&(Yt(j)||j[pt]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(j=n.relatedTarget||n.toElement,v=u,j=j?Yt(j):null,j!==null&&(y=on(j),j!==y||j.tag!==5&&j.tag!==6)&&(j=null)):(v=null,j=u),v!==j)){if(w=Li,k="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=_i,k="onPointerLeave",f="onPointerEnter",d="pointer"),y=v==null?g:xn(v),p=j==null?g:xn(j),g=new w(k,d+"leave",v,n,m),g.target=y,g.relatedTarget=p,k=null,Yt(m)===u&&(w=new w(f,d+"enter",j,n,m),w.target=p,w.relatedTarget=y,k=w),y=k,v&&j)t:{for(w=v,f=j,d=0,p=w;p;p=un(p))d++;for(p=0,k=f;k;k=un(k))p++;for(;0<d-p;)w=un(w),d--;for(;0<p-d;)f=un(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=un(w),f=un(f)}w=null}else w=null;v!==null&&Bi(h,g,v,w,!1),j!==null&&y!==null&&Bi(h,y,j,w,!0)}}e:{if(g=u?xn(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=rh;else if(zi(g))if(Tu)S=oh;else{S=lh;var N=sh}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=ah);if(S&&(S=S(e,u))){zu(h,S,n,m);break e}N&&N(e,g,u),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&ma(g,"number",g.value)}switch(N=u?xn(u):window,e){case"focusin":(zi(N)||N.contentEditable==="true")&&(hn=N,ba=u,dr=null);break;case"focusout":dr=ba=hn=null;break;case"mousedown":Sa=!0;break;case"contextmenu":case"mouseup":case"dragend":Sa=!1,Fi(h,n,m);break;case"selectionchange":if(uh)break;case"keydown":case"keyup":Fi(h,n,m)}var C;if(No)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else fn?Du(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(_u&&n.locale!=="ko"&&(fn||E!=="onCompositionStart"?E==="onCompositionEnd"&&fn&&(C=Mu()):(St=m,wo="value"in St?St.value:St.textContent,fn=!0)),N=Ts(u,E),0<N.length&&(E=new Mi(E,e,null,n,m),h.push({event:E,listeners:N}),C?E.data=C:(C=Iu(n),C!==null&&(E.data=C)))),(C=Xf?Zf(e,n):eh(e,n))&&(u=Ts(u,"onBeforeInput"),0<u.length&&(m=new Mi("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:u}),m.data=C))}Yu(h,t)})}function Cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ts(e,t){for(var n=t+"Capture",s=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=vr(e,n),a!=null&&s.unshift(Cr(e,a,l)),a=vr(e,t),a!=null&&s.push(Cr(e,a,l))),e=e.return}return s}function un(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bi(e,t,n,s,l){for(var a=t._reactName,o=[];n!==null&&n!==s;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===s)break;i.tag===5&&u!==null&&(i=u,l?(c=vr(n,a),c!=null&&o.unshift(Cr(n,c,i))):l||(c=vr(n,a),c!=null&&o.push(Cr(n,c,i)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var hh=/\r\n?/g,ph=/\u0000|\uFFFD/g;function Vi(e){return(typeof e=="string"?e:""+e).replace(hh,`
`).replace(ph,"")}function rs(e,t,n){if(t=Vi(t),Vi(e)!==t&&n)throw Error(b(425))}function As(){}var Ca=null,Ea=null;function Pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,xh=typeof clearTimeout=="function"?clearTimeout:void 0,Wi=typeof Promise=="function"?Promise:void 0,gh=typeof queueMicrotask=="function"?queueMicrotask:typeof Wi<"u"?function(e){return Wi.resolve(null).then(e).catch(yh)}:Ra;function yh(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,s=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(s===0){e.removeChild(l),kr(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=l}while(n);kr(t)}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Un=Math.random().toString(36).slice(2),st="__reactFiber$"+Un,Er="__reactProps$"+Un,pt="__reactContainer$"+Un,La="__reactEvents$"+Un,vh="__reactListeners$"+Un,wh="__reactHandles$"+Un;function Yt(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Yi(e);e!==null;){if(n=e[st])return n;e=Yi(e)}return t}e=n,n=e.parentNode}return null}function $r(e){return e=e[st]||e[pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function il(e){return e[Er]||null}var Ma=[],gn=-1;function Ft(e){return{current:e}}function B(e){0>gn||(e.current=Ma[gn],Ma[gn]=null,gn--)}function H(e,t){gn++,Ma[gn]=e.current,e.current=t}var At={},ge=Ft(At),Ee=Ft(!1),Jt=At;function Mn(e,t){var n=e.type.contextTypes;if(!n)return At;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pe(e){return e=e.childContextTypes,e!=null}function Os(){B(Ee),B(ge)}function Qi(e,t,n){if(ge.current!==At)throw Error(b(168));H(ge,t),H(Ee,n)}function Gu(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var l in s)if(!(l in t))throw Error(b(108,rf(e)||"Unknown",l));return G({},n,s)}function $s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Jt=ge.current,H(ge,e),H(Ee,Ee.current),!0}function Gi(e,t,n){var s=e.stateNode;if(!s)throw Error(b(169));n?(e=Gu(e,t,Jt),s.__reactInternalMemoizedMergedChildContext=e,B(Ee),B(ge),H(ge,e)):B(Ee),H(Ee,n)}var ut=null,cl=!1,Vl=!1;function Ku(e){ut===null?ut=[e]:ut.push(e)}function jh(e){cl=!0,Ku(e)}function Ht(){if(!Vl&&ut!==null){Vl=!0;var e=0,t=$;try{var n=ut;for($=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}ut=null,cl=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),wu(xo,Ht),l}finally{$=t,Vl=!1}}return null}var yn=[],vn=0,Fs=null,Hs=0,Oe=[],$e=0,Xt=null,dt=1,mt="";function Vt(e,t){yn[vn++]=Hs,yn[vn++]=Fs,Fs=e,Hs=t}function qu(e,t,n){Oe[$e++]=dt,Oe[$e++]=mt,Oe[$e++]=Xt,Xt=e;var s=dt;e=mt;var l=32-Ke(s)-1;s&=~(1<<l),n+=1;var a=32-Ke(t)+l;if(30<a){var o=l-l%5;a=(s&(1<<o)-1).toString(32),s>>=o,l-=o,dt=1<<32-Ke(t)+l|n<<l|s,mt=a+e}else dt=1<<a|n<<l|s,mt=e}function So(e){e.return!==null&&(Vt(e,1),qu(e,1,0))}function Co(e){for(;e===Fs;)Fs=yn[--vn],yn[vn]=null,Hs=yn[--vn],yn[vn]=null;for(;e===Xt;)Xt=Oe[--$e],Oe[$e]=null,mt=Oe[--$e],Oe[$e]=null,dt=Oe[--$e],Oe[$e]=null}var De=null,Me=null,V=!1,Ge=null;function Ju(e,t){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ki(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Me=Lt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:dt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Me=null,!0):!1;default:return!1}}function _a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(V){var t=Me;if(t){var n=t;if(!Ki(e,t)){if(_a(e))throw Error(b(418));t=Lt(n.nextSibling);var s=De;t&&Ki(e,t)?Ju(s,n):(e.flags=e.flags&-4097|2,V=!1,De=e)}}else{if(_a(e))throw Error(b(418));e.flags=e.flags&-4097|2,V=!1,De=e}}}function qi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function ss(e){if(e!==De)return!1;if(!V)return qi(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pa(e.type,e.memoizedProps)),t&&(t=Me)){if(_a(e))throw Xu(),Error(b(418));for(;t;)Ju(e,t),t=Lt(t.nextSibling)}if(qi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Lt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=De?Lt(e.stateNode.nextSibling):null;return!0}function Xu(){for(var e=Me;e;)e=Lt(e.nextSibling)}function _n(){Me=De=null,V=!1}function Eo(e){Ge===null?Ge=[e]:Ge.push(e)}var kh=vt.ReactCurrentBatchConfig;function Zn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var s=n.stateNode}if(!s)throw Error(b(147,e));var l=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var i=l.refs;o===null?delete i[a]:i[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function ls(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ji(e){var t=e._init;return t(e._payload)}function Zu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function s(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=It(f,d),f.index=0,f.sibling=null,f}function a(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,d,p,k){return d===null||d.tag!==6?(d=Jl(p,f.mode,k),d.return=f,d):(d=l(d,p),d.return=f,d)}function c(f,d,p,k){var S=p.type;return S===mn?m(f,d,p.props.children,k,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===jt&&Ji(S)===d.type)?(k=l(d,p.props),k.ref=Zn(f,d,p),k.return=f,k):(k=Cs(p.type,p.key,p.props,null,f.mode,k),k.ref=Zn(f,d,p),k.return=f,k)}function u(f,d,p,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Xl(p,f.mode,k),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function m(f,d,p,k,S){return d===null||d.tag!==7?(d=qt(p,f.mode,k,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Jl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Gr:return p=Cs(d.type,d.key,d.props,null,f.mode,p),p.ref=Zn(f,null,d),p.return=f,p;case dn:return d=Xl(d,f.mode,p),d.return=f,d;case jt:var k=d._init;return h(f,k(d._payload),p)}if(sr(d)||Gn(d))return d=qt(d,f.mode,p,null),d.return=f,d;ls(f,d)}return null}function g(f,d,p,k){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:i(f,d,""+p,k);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:return p.key===S?c(f,d,p,k):null;case dn:return p.key===S?u(f,d,p,k):null;case jt:return S=p._init,g(f,d,S(p._payload),k)}if(sr(p)||Gn(p))return S!==null?null:m(f,d,p,k,null);ls(f,p)}return null}function v(f,d,p,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return f=f.get(p)||null,i(d,f,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Gr:return f=f.get(k.key===null?p:k.key)||null,c(d,f,k,S);case dn:return f=f.get(k.key===null?p:k.key)||null,u(d,f,k,S);case jt:var N=k._init;return v(f,d,p,N(k._payload),S)}if(sr(k)||Gn(k))return f=f.get(p)||null,m(d,f,k,S,null);ls(d,k)}return null}function j(f,d,p,k){for(var S=null,N=null,C=d,E=d=0,M=null;C!==null&&E<p.length;E++){C.index>E?(M=C,C=null):M=C.sibling;var _=g(f,C,p[E],k);if(_===null){C===null&&(C=M);break}e&&C&&_.alternate===null&&t(f,C),d=a(_,d,E),N===null?S=_:N.sibling=_,N=_,C=M}if(E===p.length)return n(f,C),V&&Vt(f,E),S;if(C===null){for(;E<p.length;E++)C=h(f,p[E],k),C!==null&&(d=a(C,d,E),N===null?S=C:N.sibling=C,N=C);return V&&Vt(f,E),S}for(C=s(f,C);E<p.length;E++)M=v(C,f,E,p[E],k),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?E:M.key),d=a(M,d,E),N===null?S=M:N.sibling=M,N=M);return e&&C.forEach(function(ye){return t(f,ye)}),V&&Vt(f,E),S}function w(f,d,p,k){var S=Gn(p);if(typeof S!="function")throw Error(b(150));if(p=S.call(p),p==null)throw Error(b(151));for(var N=S=null,C=d,E=d=0,M=null,_=p.next();C!==null&&!_.done;E++,_=p.next()){C.index>E?(M=C,C=null):M=C.sibling;var ye=g(f,C,_.value,k);if(ye===null){C===null&&(C=M);break}e&&C&&ye.alternate===null&&t(f,C),d=a(ye,d,E),N===null?S=ye:N.sibling=ye,N=ye,C=M}if(_.done)return n(f,C),V&&Vt(f,E),S;if(C===null){for(;!_.done;E++,_=p.next())_=h(f,_.value,k),_!==null&&(d=a(_,d,E),N===null?S=_:N.sibling=_,N=_);return V&&Vt(f,E),S}for(C=s(f,C);!_.done;E++,_=p.next())_=v(C,f,E,_.value,k),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?E:_.key),d=a(_,d,E),N===null?S=_:N.sibling=_,N=_);return e&&C.forEach(function(it){return t(f,it)}),V&&Vt(f,E),S}function y(f,d,p,k){if(typeof p=="object"&&p!==null&&p.type===mn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Gr:e:{for(var S=p.key,N=d;N!==null;){if(N.key===S){if(S=p.type,S===mn){if(N.tag===7){n(f,N.sibling),d=l(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===jt&&Ji(S)===N.type){n(f,N.sibling),d=l(N,p.props),d.ref=Zn(f,N,p),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===mn?(d=qt(p.props.children,f.mode,k,p.key),d.return=f,f=d):(k=Cs(p.type,p.key,p.props,null,f.mode,k),k.ref=Zn(f,d,p),k.return=f,f=k)}return o(f);case dn:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Xl(p,f.mode,k),d.return=f,f=d}return o(f);case jt:return N=p._init,y(f,d,N(p._payload),k)}if(sr(p))return j(f,d,p,k);if(Gn(p))return w(f,d,p,k);ls(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=Jl(p,f.mode,k),d.return=f,f=d),o(f)):n(f,d)}return y}var Dn=Zu(!0),ed=Zu(!1),Us=Ft(null),Bs=null,wn=null,Po=null;function Ro(){Po=wn=Bs=null}function Lo(e){var t=Us.current;B(Us),e._currentValue=t}function Ia(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function En(e,t){Bs=e,Po=wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},wn===null){if(Bs===null)throw Error(b(308));wn=e,Bs.dependencies={lanes:0,firstContext:e}}else wn=wn.next=e;return t}var Qt=null;function Mo(e){Qt===null?Qt=[e]:Qt.push(e)}function td(e,t,n,s){var l=t.interleaved;return l===null?(n.next=n,Mo(t)):(n.next=l.next,l.next=n),t.interleaved=n,xt(e,s)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kt=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,A&2){var l=s.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t,xt(e,n)}return l=s.interleaved,l===null?(t.next=t,Mo(s)):(t.next=l.next,l.next=t),s.interleaved=t,xt(e,n)}function ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,go(e,n)}}function Xi(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:s.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vs(e,t,n,s){var l=e.updateQueue;kt=!1;var a=l.firstBaseUpdate,o=l.lastBaseUpdate,i=l.shared.pending;if(i!==null){l.shared.pending=null;var c=i,u=c.next;c.next=null,o===null?a=u:o.next=u,o=c;var m=e.alternate;m!==null&&(m=m.updateQueue,i=m.lastBaseUpdate,i!==o&&(i===null?m.firstBaseUpdate=u:i.next=u,m.lastBaseUpdate=c))}if(a!==null){var h=l.baseState;o=0,m=u=c=null,i=a;do{var g=i.lane,v=i.eventTime;if((s&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var j=e,w=i;switch(g=t,v=n,w.tag){case 1:if(j=w.payload,typeof j=="function"){h=j.call(v,h,g);break e}h=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=w.payload,g=typeof j=="function"?j.call(v,h,g):j,g==null)break e;h=G({},h,g);break e;case 2:kt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[i]:g.push(i))}else v={eventTime:v,lane:g,tag:i.tag,payload:i.payload,callback:i.callback,next:null},m===null?(u=m=v,c=h):m=m.next=v,o|=g;if(i=i.next,i===null){if(i=l.shared.pending,i===null)break;g=i,i=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(c=h),l.baseState=c,l.firstBaseUpdate=u,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);en|=o,e.lanes=o,e.memoizedState=h}}function Zi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],l=s.callback;if(l!==null){if(s.callback=null,s=n,typeof l!="function")throw Error(b(191,l));l.call(s)}}}var Fr={},at=Ft(Fr),Pr=Ft(Fr),Rr=Ft(Fr);function Gt(e){if(e===Fr)throw Error(b(174));return e}function Do(e,t){switch(H(Rr,t),H(Pr,e),H(at,Fr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ha(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ha(t,e)}B(at),H(at,t)}function In(){B(at),B(Pr),B(Rr)}function rd(e){Gt(Rr.current);var t=Gt(at.current),n=ha(t,e.type);t!==n&&(H(Pr,e),H(at,n))}function Io(e){Pr.current===e&&(B(at),B(Pr))}var Y=Ft(0);function Ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function zo(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var js=vt.ReactCurrentDispatcher,Yl=vt.ReactCurrentBatchConfig,Zt=0,Q=null,te=null,le=null,Ys=!1,mr=!1,Lr=0,Nh=0;function me(){throw Error(b(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Ao(e,t,n,s,l,a){if(Zt=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,js.current=e===null||e.memoizedState===null?Eh:Ph,e=n(s,l),mr){a=0;do{if(mr=!1,Lr=0,25<=a)throw Error(b(301));a+=1,le=te=null,t.updateQueue=null,js.current=Rh,e=n(s,l)}while(mr)}if(js.current=Qs,t=te!==null&&te.next!==null,Zt=0,le=te=Q=null,Ys=!1,t)throw Error(b(300));return e}function Oo(){var e=Lr!==0;return Lr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Q.memoizedState=le=e:le=le.next=e,le}function Be(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=le===null?Q.memoizedState:le.next;if(t!==null)le=t,te=e;else{if(e===null)throw Error(b(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},le===null?Q.memoizedState=le=e:le=le.next=e}return le}function Mr(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Be(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var s=te,l=s.baseQueue,a=n.pending;if(a!==null){if(l!==null){var o=l.next;l.next=a.next,a.next=o}s.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,s=s.baseState;var i=o=null,c=null,u=a;do{var m=u.lane;if((Zt&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=h,o=s):c=c.next=h,Q.lanes|=m,en|=m}u=u.next}while(u!==null&&u!==a);c===null?o=s:c.next=i,Ze(s,t.memoizedState)||(Ce=!0),t.memoizedState=s,t.baseState=o,t.baseQueue=c,n.lastRenderedState=s}if(e=n.interleaved,e!==null){l=e;do a=l.lane,Q.lanes|=a,en|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Be(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var s=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do a=e(a,o.action),o=o.next;while(o!==l);Ze(a,t.memoizedState)||(Ce=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,s]}function sd(){}function ld(e,t){var n=Q,s=Be(),l=t(),a=!Ze(s.memoizedState,l);if(a&&(s.memoizedState=l,Ce=!0),s=s.queue,$o(id.bind(null,n,s,e),[e]),s.getSnapshot!==t||a||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,_r(9,od.bind(null,n,s,l,t),void 0,null),ae===null)throw Error(b(349));Zt&30||ad(n,t,l)}return l}function ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function od(e,t,n,s){t.value=n,t.getSnapshot=s,cd(t)&&ud(e)}function id(e,t,n){return n(function(){cd(t)&&ud(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function ud(e){var t=xt(e,1);t!==null&&qe(t,e,1,-1)}function ec(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ch.bind(null,Q,e),[t.memoizedState,e]}function _r(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function dd(){return Be().memoizedState}function ks(e,t,n,s){var l=rt();Q.flags|=e,l.memoizedState=_r(1|t,n,void 0,s===void 0?null:s)}function ul(e,t,n,s){var l=Be();s=s===void 0?null:s;var a=void 0;if(te!==null){var o=te.memoizedState;if(a=o.destroy,s!==null&&To(s,o.deps)){l.memoizedState=_r(t,n,a,s);return}}Q.flags|=e,l.memoizedState=_r(1|t,n,a,s)}function tc(e,t){return ks(8390656,8,e,t)}function $o(e,t){return ul(2048,8,e,t)}function md(e,t){return ul(4,2,e,t)}function fd(e,t){return ul(4,4,e,t)}function hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pd(e,t,n){return n=n!=null?n.concat([e]):null,ul(4,4,hd.bind(null,t,e),n)}function Fo(){}function xd(e,t){var n=Be();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&To(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function gd(e,t){var n=Be();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&To(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function yd(e,t,n){return Zt&21?(Ze(n,t)||(n=Nu(),Q.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function bh(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var s=Yl.transition;Yl.transition={};try{e(!1),t()}finally{$=n,Yl.transition=s}}function vd(){return Be().memoizedState}function Sh(e,t,n){var s=Dt(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},wd(e))jd(t,n);else if(n=td(e,t,n,s),n!==null){var l=je();qe(n,e,s,l),kd(n,t,s)}}function Ch(e,t,n){var s=Dt(e),l={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(wd(e))jd(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,i=a(o,n);if(l.hasEagerState=!0,l.eagerState=i,Ze(i,o)){var c=t.interleaved;c===null?(l.next=l,Mo(t)):(l.next=c.next,c.next=l),t.interleaved=l;return}}catch{}finally{}n=td(e,t,l,s),n!==null&&(l=je(),qe(n,e,s,l),kd(n,t,s))}}function wd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function jd(e,t){mr=Ys=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kd(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,go(e,n)}}var Qs={readContext:Ue,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Eh={readContext:Ue,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ks(4194308,4,hd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){return ks(4,2,e,t)},useMemo:function(e,t){var n=rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=rt();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=Sh.bind(null,Q,e),[s.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:Fo,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=bh.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=Q,l=rt();if(V){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ae===null)throw Error(b(349));Zt&30||ad(s,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,tc(id.bind(null,s,a,e),[e]),s.flags|=2048,_r(9,od.bind(null,s,a,n,t),void 0,null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(V){var n=mt,s=dt;n=(s&~(1<<32-Ke(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Nh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ph={readContext:Ue,useCallback:xd,useContext:Ue,useEffect:$o,useImperativeHandle:pd,useInsertionEffect:md,useLayoutEffect:fd,useMemo:gd,useReducer:Ql,useRef:dd,useState:function(){return Ql(Mr)},useDebugValue:Fo,useDeferredValue:function(e){var t=Be();return yd(t,te.memoizedState,e)},useTransition:function(){var e=Ql(Mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:sd,useSyncExternalStore:ld,useId:vd,unstable_isNewReconciler:!1},Rh={readContext:Ue,useCallback:xd,useContext:Ue,useEffect:$o,useImperativeHandle:pd,useInsertionEffect:md,useLayoutEffect:fd,useMemo:gd,useReducer:Gl,useRef:dd,useState:function(){return Gl(Mr)},useDebugValue:Fo,useDeferredValue:function(e){var t=Be();return te===null?t.memoizedState=e:yd(t,te.memoizedState,e)},useTransition:function(){var e=Gl(Mr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:sd,useSyncExternalStore:ld,useId:vd,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function za(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:G({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=je(),l=Dt(e),a=ft(s,l);a.payload=t,n!=null&&(a.callback=n),t=Mt(e,a,l),t!==null&&(qe(t,e,l,s),ws(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=je(),l=Dt(e),a=ft(s,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Mt(e,a,l),t!==null&&(qe(t,e,l,s),ws(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),s=Dt(e),l=ft(n,s);l.tag=2,t!=null&&(l.callback=t),t=Mt(e,l,s),t!==null&&(qe(t,e,s,n),ws(t,e,s))}};function nc(e,t,n,s,l,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,o):t.prototype&&t.prototype.isPureReactComponent?!br(n,s)||!br(l,a):!0}function Nd(e,t,n){var s=!1,l=At,a=t.contextType;return typeof a=="object"&&a!==null?a=Ue(a):(l=Pe(t)?Jt:ge.current,s=t.contextTypes,a=(s=s!=null)?Mn(e,l):At),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function rc(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,s){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_o(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=Ue(a):(a=Pe(t)?Jt:ge.current,l.context=Mn(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(za(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Vs(e,n,l,s),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",s=t;do n+=nf(s),s=s.return;while(s);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Aa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lh=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,n){n=ft(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){Ks||(Ks=!0,Qa=s),Aa(e,t)},n}function Sd(e,t,n){n=ft(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var l=t.value;n.payload=function(){return s(l)},n.callback=function(){Aa(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Aa(e,t),typeof s!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function sc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Lh;var l=new Set;s.set(t,l)}else l=s.get(t),l===void 0&&(l=new Set,s.set(t,l));l.has(n)||(l.add(n),e=Vh.bind(null,e,t,n),t.then(e,e))}function lc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ac(e,t,n,s,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ft(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var Mh=vt.ReactCurrentOwner,Ce=!1;function we(e,t,n,s){t.child=e===null?ed(t,null,n,s):Dn(t,e.child,n,s)}function oc(e,t,n,s,l){n=n.render;var a=t.ref;return En(t,l),s=Ao(e,t,n,s,a,l),n=Oo(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gt(e,t,l)):(V&&n&&So(t),t.flags|=1,we(e,t,s,l),t.child)}function ic(e,t,n,s,l){if(e===null){var a=n.type;return typeof a=="function"&&!Go(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Cd(e,t,a,s,l)):(e=Cs(n.type,null,s,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&l)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:br,n(o,s)&&e.ref===t.ref)return gt(e,t,l)}return t.flags|=1,e=It(a,s),e.ref=t.ref,e.return=t,t.child=e}function Cd(e,t,n,s,l){if(e!==null){var a=e.memoizedProps;if(br(a,s)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=s=a,(e.lanes&l)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,gt(e,t,l)}return Oa(e,t,n,s,l)}function Ed(e,t,n){var s=t.pendingProps,l=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(kn,Le),Le|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(kn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:n,H(kn,Le),Le|=s}else a!==null?(s=a.baseLanes|n,t.memoizedState=null):s=n,H(kn,Le),Le|=s;return we(e,t,l,n),t.child}function Pd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oa(e,t,n,s,l){var a=Pe(n)?Jt:ge.current;return a=Mn(t,a),En(t,l),n=Ao(e,t,n,s,a,l),s=Oo(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,gt(e,t,l)):(V&&s&&So(t),t.flags|=1,we(e,t,n,l),t.child)}function cc(e,t,n,s,l){if(Pe(n)){var a=!0;$s(t)}else a=!1;if(En(t,l),t.stateNode===null)Ns(e,t),Nd(t,n,s),Ta(t,n,s,l),s=!0;else if(e===null){var o=t.stateNode,i=t.memoizedProps;o.props=i;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=Pe(n)?Jt:ge.current,u=Mn(t,u));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==s||c!==u)&&rc(t,o,s,u),kt=!1;var g=t.memoizedState;o.state=g,Vs(t,s,o,l),c=t.memoizedState,i!==s||g!==c||Ee.current||kt?(typeof m=="function"&&(za(t,n,m,s),c=t.memoizedState),(i=kt||nc(t,n,i,s,g,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),o.props=s,o.state=c,o.context=u,s=i):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{o=t.stateNode,nd(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Ye(t.type,i),o.props=u,h=t.pendingProps,g=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ue(c):(c=Pe(n)?Jt:ge.current,c=Mn(t,c));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(i!==h||g!==c)&&rc(t,o,s,c),kt=!1,g=t.memoizedState,o.state=g,Vs(t,s,o,l);var j=t.memoizedState;i!==h||g!==j||Ee.current||kt?(typeof v=="function"&&(za(t,n,v,s),j=t.memoizedState),(u=kt||nc(t,n,u,s,g,j,c)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,j,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,j,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=j),o.props=s,o.state=j,o.context=c,s=u):(typeof o.componentDidUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),s=!1)}return $a(e,t,n,s,a,l)}function $a(e,t,n,s,l,a){Pd(e,t);var o=(t.flags&128)!==0;if(!s&&!o)return l&&Gi(t,n,!1),gt(e,t,a);s=t.stateNode,Mh.current=t;var i=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&o?(t.child=Dn(t,e.child,null,a),t.child=Dn(t,null,i,a)):we(e,t,i,a),t.memoizedState=s.state,l&&Gi(t,n,!0),t.child}function Rd(e){var t=e.stateNode;t.pendingContext?Qi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qi(e,t.context,!1),Do(e,t.containerInfo)}function uc(e,t,n,s,l){return _n(),Eo(l),t.flags|=256,we(e,t,n,s),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ld(e,t,n){var s=t.pendingProps,l=Y.current,a=!1,o=(t.flags&128)!==0,i;if((i=o)||(i=e!==null&&e.memoizedState===null?!1:(l&2)!==0),i?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),H(Y,l&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=s.children,e=s.fallback,a?(s=t.mode,a=t.child,o={mode:"hidden",children:o},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=hl(o,s,0,null),e=qt(e,s,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ha(n),t.memoizedState=Fa,e):Ho(t,o));if(l=e.memoizedState,l!==null&&(i=l.dehydrated,i!==null))return _h(e,t,o,s,i,l,n);if(a){a=s.fallback,o=t.mode,l=e.child,i=l.sibling;var c={mode:"hidden",children:s.children};return!(o&1)&&t.child!==l?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=It(l,c),s.subtreeFlags=l.subtreeFlags&14680064),i!==null?a=It(i,a):(a=qt(a,o,n,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,o=e.child.memoizedState,o=o===null?Ha(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Fa,s}return a=e.child,e=a.sibling,s=It(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Ho(e,t){return t=hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function as(e,t,n,s){return s!==null&&Eo(s),Dn(t,e.child,null,n),e=Ho(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _h(e,t,n,s,l,a,o){if(n)return t.flags&256?(t.flags&=-257,s=Kl(Error(b(422))),as(e,t,o,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,l=t.mode,s=hl({mode:"visible",children:s.children},l,0,null),a=qt(a,l,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&Dn(t,e.child,null,o),t.child.memoizedState=Ha(o),t.memoizedState=Fa,a);if(!(t.mode&1))return as(e,t,o,null);if(l.data==="$!"){if(s=l.nextSibling&&l.nextSibling.dataset,s)var i=s.dgst;return s=i,a=Error(b(419)),s=Kl(a,s,void 0),as(e,t,o,s)}if(i=(o&e.childLanes)!==0,Ce||i){if(s=ae,s!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(s.suspendedLanes|o)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,xt(e,l),qe(s,e,l,-1))}return Qo(),s=Kl(Error(b(421))),as(e,t,o,s)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Wh.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,Me=Lt(l.nextSibling),De=t,V=!0,Ge=null,e!==null&&(Oe[$e++]=dt,Oe[$e++]=mt,Oe[$e++]=Xt,dt=e.id,mt=e.overflow,Xt=t),t=Ho(t,s.children),t.flags|=4096,t)}function dc(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Ia(e.return,t,n)}function ql(e,t,n,s,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=n,a.tailMode=l)}function Md(e,t,n){var s=t.pendingProps,l=s.revealOrder,a=s.tail;if(we(e,t,s.children,n),s=Y.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dc(e,n,t);else if(e.tag===19)dc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(H(Y,s),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ws(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ql(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ws(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ql(t,!0,n,null,a);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dh(e,t,n){switch(t.tag){case 3:Rd(t),_n();break;case 5:rd(t);break;case 1:Pe(t.type)&&$s(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,l=t.memoizedProps.value;H(Us,s._currentValue),s._currentValue=l;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(H(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Ld(e,t,n):(H(Y,Y.current&1),e=gt(e,t,n),e!==null?e.sibling:null);H(Y,Y.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return Md(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),H(Y,Y.current),s)break;return null;case 22:case 23:return t.lanes=0,Ed(e,t,n)}return gt(e,t,n)}var _d,Ua,Dd,Id;_d=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ua=function(){};Dd=function(e,t,n,s){var l=e.memoizedProps;if(l!==s){e=t.stateNode,Gt(at.current);var a=null;switch(n){case"input":l=ua(e,l),s=ua(e,s),a=[];break;case"select":l=G({},l,{value:void 0}),s=G({},s,{value:void 0}),a=[];break;case"textarea":l=fa(e,l),s=fa(e,s),a=[];break;default:typeof l.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=As)}pa(n,s);var o;n=null;for(u in l)if(!s.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var i=l[u];for(o in i)i.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(gr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in s){var c=s[u];if(i=l!=null?l[u]:void 0,s.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(o in i)!i.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&i[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(a||(a=[]),a.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(a=a||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(gr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&U("scroll",e),a||i===c||(a=[])):(a=a||[]).push(u,c))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Id=function(e,t,n,s){n!==s&&(t.flags|=4)};function er(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags&14680064,s|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,s|=l.subtreeFlags,s|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function Ih(e,t,n){var s=t.pendingProps;switch(Co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Pe(t.type)&&Os(),fe(t),null;case 3:return s=t.stateNode,In(),B(Ee),B(ge),zo(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ss(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ge!==null&&(qa(Ge),Ge=null))),Ua(e,t),fe(t),null;case 5:Io(t);var l=Gt(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Dd(e,t,n,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(b(166));return fe(t),null}if(e=Gt(at.current),ss(t)){s=t.stateNode,n=t.type;var a=t.memoizedProps;switch(s[st]=t,s[Er]=a,e=(t.mode&1)!==0,n){case"dialog":U("cancel",s),U("close",s);break;case"iframe":case"object":case"embed":U("load",s);break;case"video":case"audio":for(l=0;l<ar.length;l++)U(ar[l],s);break;case"source":U("error",s);break;case"img":case"image":case"link":U("error",s),U("load",s);break;case"details":U("toggle",s);break;case"input":wi(s,a),U("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},U("invalid",s);break;case"textarea":ki(s,a),U("invalid",s)}pa(n,a),l=null;for(var o in a)if(a.hasOwnProperty(o)){var i=a[o];o==="children"?typeof i=="string"?s.textContent!==i&&(a.suppressHydrationWarning!==!0&&rs(s.textContent,i,e),l=["children",i]):typeof i=="number"&&s.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&rs(s.textContent,i,e),l=["children",""+i]):gr.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&U("scroll",s)}switch(n){case"input":Kr(s),ji(s,a,!0);break;case"textarea":Kr(s),Ni(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=As)}s=l,t.updateQueue=s,s!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=iu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=o.createElement(n,{is:s.is}):(e=o.createElement(n),n==="select"&&(o=e,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):e=o.createElementNS(e,n),e[st]=t,e[Er]=s,_d(e,t,!1,!1),t.stateNode=e;e:{switch(o=xa(n,s),n){case"dialog":U("cancel",e),U("close",e),l=s;break;case"iframe":case"object":case"embed":U("load",e),l=s;break;case"video":case"audio":for(l=0;l<ar.length;l++)U(ar[l],e);l=s;break;case"source":U("error",e),l=s;break;case"img":case"image":case"link":U("error",e),U("load",e),l=s;break;case"details":U("toggle",e),l=s;break;case"input":wi(e,s),l=ua(e,s),U("invalid",e);break;case"option":l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=G({},s,{value:void 0}),U("invalid",e);break;case"textarea":ki(e,s),l=fa(e,s),U("invalid",e);break;default:l=s}pa(n,l),i=l;for(a in i)if(i.hasOwnProperty(a)){var c=i[a];a==="style"?du(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&cu(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&yr(e,c):typeof c=="number"&&yr(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(gr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&U("scroll",e):c!=null&&uo(e,a,c,o))}switch(n){case"input":Kr(e),ji(e,s,!1);break;case"textarea":Kr(e),Ni(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Tt(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Nn(e,!!s.multiple,a,!1):s.defaultValue!=null&&Nn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=As)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Id(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(b(166));if(n=Gt(Rr.current),Gt(at.current),ss(t)){if(s=t.stateNode,n=t.memoizedProps,s[st]=t,(a=s.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:rs(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rs(s.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[st]=t,t.stateNode=s}return fe(t),null;case 13:if(B(Y),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Me!==null&&t.mode&1&&!(t.flags&128))Xu(),_n(),t.flags|=98560,a=!1;else if(a=ss(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[st]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),a=!1}else Ge!==null&&(qa(Ge),Ge=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ne===0&&(ne=3):Qo())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return In(),Ua(e,t),e===null&&Sr(t.stateNode.containerInfo),fe(t),null;case 10:return Lo(t.type._context),fe(t),null;case 17:return Pe(t.type)&&Os(),fe(t),null;case 19:if(B(Y),a=t.memoizedState,a===null)return fe(t),null;if(s=(t.flags&128)!==0,o=a.rendering,o===null)if(s)er(a,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ws(e),o!==null){for(t.flags|=128,er(a,!1),s=o.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)a=n,e=s,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&J()>Tn&&(t.flags|=128,s=!0,er(a,!1),t.lanes=4194304)}else{if(!s)if(e=Ws(o),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!V)return fe(t),null}else 2*J()-a.renderingStartTime>Tn&&n!==1073741824&&(t.flags|=128,s=!0,er(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=J(),t.sibling=null,n=Y.current,H(Y,s?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return Yo(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Le&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function zh(e,t){switch(Co(t),t.tag){case 1:return Pe(t.type)&&Os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(),B(Ee),B(ge),zo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Io(t),null;case 13:if(B(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Y),null;case 4:return In(),null;case 10:return Lo(t.type._context),null;case 22:case 23:return Yo(),null;case 24:return null;default:return null}}var os=!1,he=!1,Th=typeof WeakSet=="function"?WeakSet:Set,L=null;function jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){K(e,t,s)}else n.current=null}function Ba(e,t,n){try{n()}catch(s){K(e,t,s)}}var mc=!1;function Ah(e,t){if(Ca=Is,e=$u(),bo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var l=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,i=-1,c=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var v;h!==n||l!==0&&h.nodeType!==3||(i=o+l),h!==a||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break t;if(g===n&&++u===l&&(i=o),g===a&&++m===s&&(c=o),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ea={focusedElem:e,selectionRange:n},Is=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var w=j.memoizedProps,y=j.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),y);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(k){K(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return j=mc,mc=!1,j}function fr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Ba(t,n,a)}l=l.next}while(l!==s)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Va(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Er],delete t[La],delete t[vh],delete t[wh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wa(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=As));else if(s!==4&&(e=e.child,e!==null))for(Wa(e,t,n),e=e.sibling;e!==null;)Wa(e,t,n),e=e.sibling}function Ya(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}var ie=null,Qe=!1;function wt(e,t,n){for(n=n.child;n!==null;)Ad(e,t,n),n=n.sibling}function Ad(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:he||jn(n,t);case 6:var s=ie,l=Qe;ie=null,wt(e,t,n),ie=s,Qe=l,ie!==null&&(Qe?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Qe?(e=ie,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),kr(e)):Bl(ie,n.stateNode));break;case 4:s=ie,l=Qe,ie=n.stateNode.containerInfo,Qe=!0,wt(e,t,n),ie=s,Qe=l;break;case 0:case 11:case 14:case 15:if(!he&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){l=s=s.next;do{var a=l,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Ba(n,t,o),l=l.next}while(l!==s)}wt(e,t,n);break;case 1:if(!he&&(jn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(i){K(n,t,i)}wt(e,t,n);break;case 21:wt(e,t,n);break;case 22:n.mode&1?(he=(s=he)||n.memoizedState!==null,wt(e,t,n),he=s):wt(e,t,n);break;default:wt(e,t,n)}}function hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Th),t.forEach(function(s){var l=Yh.bind(null,e,s);n.has(s)||(n.add(s),s.then(l,l))})}}function We(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var l=n[s];try{var a=e,o=t,i=o;e:for(;i!==null;){switch(i.tag){case 5:ie=i.stateNode,Qe=!1;break e;case 3:ie=i.stateNode.containerInfo,Qe=!0;break e;case 4:ie=i.stateNode.containerInfo,Qe=!0;break e}i=i.return}if(ie===null)throw Error(b(160));Ad(a,o,l),ie=null,Qe=!1;var c=l.alternate;c!==null&&(c.return=null),l.return=null}catch(u){K(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Od(t,e),t=t.sibling}function Od(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),nt(e),s&4){try{fr(3,e,e.return),ml(3,e)}catch(w){K(e,e.return,w)}try{fr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:We(t,e),nt(e),s&512&&n!==null&&jn(n,n.return);break;case 5:if(We(t,e),nt(e),s&512&&n!==null&&jn(n,n.return),e.flags&32){var l=e.stateNode;try{yr(l,"")}catch(w){K(e,e.return,w)}}if(s&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&au(l,a),xa(i,o);var u=xa(i,a);for(o=0;o<c.length;o+=2){var m=c[o],h=c[o+1];m==="style"?du(l,h):m==="dangerouslySetInnerHTML"?cu(l,h):m==="children"?yr(l,h):uo(l,m,h,u)}switch(i){case"input":da(l,a);break;case"textarea":ou(l,a);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?Nn(l,!!a.multiple,v,!1):g!==!!a.multiple&&(a.defaultValue!=null?Nn(l,!!a.multiple,a.defaultValue,!0):Nn(l,!!a.multiple,a.multiple?[]:"",!1))}l[Er]=a}catch(w){K(e,e.return,w)}}break;case 6:if(We(t,e),nt(e),s&4){if(e.stateNode===null)throw Error(b(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(w){K(e,e.return,w)}}break;case 3:if(We(t,e),nt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{kr(t.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:We(t,e),nt(e);break;case 13:We(t,e),nt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Vo=J())),s&4&&hc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||m,We(t,e),he=u):We(t,e),nt(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(L=e,m=e.child;m!==null;){for(h=L=m;L!==null;){switch(g=L,v=g.child,g.tag){case 0:case 11:case 14:case 15:fr(4,g,g.return);break;case 1:jn(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){s=g,n=g.return;try{t=s,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(w){K(s,n,w)}}break;case 5:jn(g,g.return);break;case 22:if(g.memoizedState!==null){xc(h);continue}}v!==null?(v.return=g,L=v):xc(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,u?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=uu("display",o))}catch(w){K(e,e.return,w)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){K(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:We(t,e),nt(e),s&4&&hc(e);break;case 21:break;default:We(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Td(n)){var s=n;break e}n=n.return}throw Error(b(160))}switch(s.tag){case 5:var l=s.stateNode;s.flags&32&&(yr(l,""),s.flags&=-33);var a=fc(e);Ya(e,a,l);break;case 3:case 4:var o=s.stateNode.containerInfo,i=fc(e);Wa(e,i,o);break;default:throw Error(b(161))}}catch(c){K(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Oh(e,t,n){L=e,$d(e)}function $d(e,t,n){for(var s=(e.mode&1)!==0;L!==null;){var l=L,a=l.child;if(l.tag===22&&s){var o=l.memoizedState!==null||os;if(!o){var i=l.alternate,c=i!==null&&i.memoizedState!==null||he;i=os;var u=he;if(os=o,(he=c)&&!u)for(L=l;L!==null;)o=L,c=o.child,o.tag===22&&o.memoizedState!==null?gc(l):c!==null?(c.return=o,L=c):gc(l);for(;a!==null;)L=a,$d(a),a=a.sibling;L=l,os=i,he=u}pc(e)}else l.subtreeFlags&8772&&a!==null?(a.return=l,L=a):pc(e)}}function pc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||ml(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!he)if(n===null)s.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);s.componentDidUpdate(l,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Zi(t,a,s);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zi(t,o,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&kr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}he||t.flags&512&&Va(t)}catch(g){K(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function xc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function gc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(c){K(t,n,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var l=t.return;try{s.componentDidMount()}catch(c){K(t,l,c)}}var a=t.return;try{Va(t)}catch(c){K(t,a,c)}break;case 5:var o=t.return;try{Va(t)}catch(c){K(t,o,c)}}}catch(c){K(t,t.return,c)}if(t===e){L=null;break}var i=t.sibling;if(i!==null){i.return=t.return,L=i;break}L=t.return}}var $h=Math.ceil,Gs=vt.ReactCurrentDispatcher,Uo=vt.ReactCurrentOwner,He=vt.ReactCurrentBatchConfig,A=0,ae=null,Z=null,ce=0,Le=0,kn=Ft(0),ne=0,Dr=null,en=0,fl=0,Bo=0,hr=null,Se=null,Vo=0,Tn=1/0,ct=null,Ks=!1,Qa=null,_t=null,is=!1,Ct=null,qs=0,pr=0,Ga=null,bs=-1,Ss=0;function je(){return A&6?J():bs!==-1?bs:bs=J()}function Dt(e){return e.mode&1?A&2&&ce!==0?ce&-ce:kh.transition!==null?(Ss===0&&(Ss=Nu()),Ss):(e=$,e!==0||(e=window.event,e=e===void 0?16:Lu(e.type)),e):1}function qe(e,t,n,s){if(50<pr)throw pr=0,Ga=null,Error(b(185));Ar(e,n,s),(!(A&2)||e!==ae)&&(e===ae&&(!(A&2)&&(fl|=n),ne===4&&bt(e,ce)),Re(e,s),n===1&&A===0&&!(t.mode&1)&&(Tn=J()+500,cl&&Ht()))}function Re(e,t){var n=e.callbackNode;kf(e,t);var s=Ds(e,e===ae?ce:0);if(s===0)n!==null&&Ci(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Ci(n),t===1)e.tag===0?jh(yc.bind(null,e)):Ku(yc.bind(null,e)),gh(function(){!(A&6)&&Ht()}),n=null;else{switch(bu(s)){case 1:n=xo;break;case 4:n=ju;break;case 16:n=_s;break;case 536870912:n=ku;break;default:n=_s}n=Qd(n,Fd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fd(e,t){if(bs=-1,Ss=0,A&6)throw Error(b(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var s=Ds(e,e===ae?ce:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Js(e,s);else{t=s;var l=A;A|=2;var a=Ud();(ae!==e||ce!==t)&&(ct=null,Tn=J()+500,Kt(e,t));do try{Uh();break}catch(i){Hd(e,i)}while(!0);Ro(),Gs.current=a,A=l,Z!==null?t=0:(ae=null,ce=0,t=ne)}if(t!==0){if(t===2&&(l=ja(e),l!==0&&(s=l,t=Ka(e,l))),t===1)throw n=Dr,Kt(e,0),bt(e,s),Re(e,J()),n;if(t===6)bt(e,s);else{if(l=e.current.alternate,!(s&30)&&!Fh(l)&&(t=Js(e,s),t===2&&(a=ja(e),a!==0&&(s=a,t=Ka(e,a))),t===1))throw n=Dr,Kt(e,0),bt(e,s),Re(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=s,t){case 0:case 1:throw Error(b(345));case 2:Wt(e,Se,ct);break;case 3:if(bt(e,s),(s&130023424)===s&&(t=Vo+500-J(),10<t)){if(Ds(e,0)!==0)break;if(l=e.suspendedLanes,(l&s)!==s){je(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ra(Wt.bind(null,e,Se,ct),t);break}Wt(e,Se,ct);break;case 4:if(bt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,l=-1;0<s;){var o=31-Ke(s);a=1<<o,o=t[o],o>l&&(l=o),s&=~a}if(s=l,s=J()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*$h(s/1960))-s,10<s){e.timeoutHandle=Ra(Wt.bind(null,e,Se,ct),s);break}Wt(e,Se,ct);break;case 5:Wt(e,Se,ct);break;default:throw Error(b(329))}}}return Re(e,J()),e.callbackNode===n?Fd.bind(null,e):null}function Ka(e,t){var n=hr;return e.current.memoizedState.isDehydrated&&(Kt(e,t).flags|=256),e=Js(e,t),e!==2&&(t=Se,Se=n,t!==null&&qa(t)),e}function qa(e){Se===null?Se=e:Se.push.apply(Se,e)}function Fh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var l=n[s],a=l.getSnapshot;l=l.value;try{if(!Ze(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~Bo,t&=~fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),s=1<<n;e[n]=-1,t&=~s}}function yc(e){if(A&6)throw Error(b(327));Pn();var t=Ds(e,0);if(!(t&1))return Re(e,J()),null;var n=Js(e,t);if(e.tag!==0&&n===2){var s=ja(e);s!==0&&(t=s,n=Ka(e,s))}if(n===1)throw n=Dr,Kt(e,0),bt(e,t),Re(e,J()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Se,ct),Re(e,J()),null}function Wo(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Tn=J()+500,cl&&Ht())}}function tn(e){Ct!==null&&Ct.tag===0&&!(A&6)&&Pn();var t=A;A|=1;var n=He.transition,s=$;try{if(He.transition=null,$=1,e)return e()}finally{$=s,He.transition=n,A=t,!(A&6)&&Ht()}}function Yo(){Le=kn.current,B(kn)}function Kt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xh(n)),Z!==null)for(n=Z.return;n!==null;){var s=n;switch(Co(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Os();break;case 3:In(),B(Ee),B(ge),zo();break;case 5:Io(s);break;case 4:In();break;case 13:B(Y);break;case 19:B(Y);break;case 10:Lo(s.type._context);break;case 22:case 23:Yo()}n=n.return}if(ae=e,Z=e=It(e.current,null),ce=Le=t,ne=0,Dr=null,Bo=fl=en=0,Se=hr=null,Qt!==null){for(t=0;t<Qt.length;t++)if(n=Qt[t],s=n.interleaved,s!==null){n.interleaved=null;var l=s.next,a=n.pending;if(a!==null){var o=a.next;a.next=l,s.next=o}n.pending=s}Qt=null}return e}function Hd(e,t){do{var n=Z;try{if(Ro(),js.current=Qs,Ys){for(var s=Q.memoizedState;s!==null;){var l=s.queue;l!==null&&(l.pending=null),s=s.next}Ys=!1}if(Zt=0,le=te=Q=null,mr=!1,Lr=0,Uo.current=null,n===null||n.return===null){ne=1,Dr=t,Z=null;break}e:{var a=e,o=n.return,i=n,c=t;if(t=ce,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=i,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=lc(o);if(v!==null){v.flags&=-257,ac(v,o,i,a,t),v.mode&1&&sc(a,u,t),t=v,c=u;var j=t.updateQueue;if(j===null){var w=new Set;w.add(c),t.updateQueue=w}else j.add(c);break e}else{if(!(t&1)){sc(a,u,t),Qo();break e}c=Error(b(426))}}else if(V&&i.mode&1){var y=lc(o);if(y!==null){!(y.flags&65536)&&(y.flags|=256),ac(y,o,i,a,t),Eo(zn(c,i));break e}}a=c=zn(c,i),ne!==4&&(ne=2),hr===null?hr=[a]:hr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=bd(a,c,t);Xi(a,f);break e;case 1:i=c;var d=a.type,p=a.stateNode;if(!(a.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_t===null||!_t.has(p)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Sd(a,i,t);Xi(a,k);break e}}a=a.return}while(a!==null)}Vd(n)}catch(S){t=S,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Ud(){var e=Gs.current;return Gs.current=Qs,e===null?Qs:e}function Qo(){(ne===0||ne===3||ne===2)&&(ne=4),ae===null||!(en&268435455)&&!(fl&268435455)||bt(ae,ce)}function Js(e,t){var n=A;A|=2;var s=Ud();(ae!==e||ce!==t)&&(ct=null,Kt(e,t));do try{Hh();break}catch(l){Hd(e,l)}while(!0);if(Ro(),A=n,Gs.current=s,Z!==null)throw Error(b(261));return ae=null,ce=0,ne}function Hh(){for(;Z!==null;)Bd(Z)}function Uh(){for(;Z!==null&&!ff();)Bd(Z)}function Bd(e){var t=Yd(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Vd(e):Z=t,Uo.current=null}function Vd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zh(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,Z=null;return}}else if(n=Ih(n,t,Le),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ne===0&&(ne=5)}function Wt(e,t,n){var s=$,l=He.transition;try{He.transition=null,$=1,Bh(e,t,n,s)}finally{He.transition=l,$=s}return null}function Bh(e,t,n,s){do Pn();while(Ct!==null);if(A&6)throw Error(b(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Nf(e,a),e===ae&&(Z=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||is||(is=!0,Qd(_s,function(){return Pn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=He.transition,He.transition=null;var o=$;$=1;var i=A;A|=4,Uo.current=null,Ah(e,n),Od(n,e),ch(Ea),Is=!!Ca,Ea=Ca=null,e.current=n,Oh(n),hf(),A=i,$=o,He.transition=a}else e.current=n;if(is&&(is=!1,Ct=e,qs=l),a=e.pendingLanes,a===0&&(_t=null),gf(n.stateNode),Re(e,J()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],s(l.value,{componentStack:l.stack,digest:l.digest});if(Ks)throw Ks=!1,e=Qa,Qa=null,e;return qs&1&&e.tag!==0&&Pn(),a=e.pendingLanes,a&1?e===Ga?pr++:(pr=0,Ga=e):pr=0,Ht(),null}function Pn(){if(Ct!==null){var e=bu(qs),t=He.transition,n=$;try{if(He.transition=null,$=16>e?16:e,Ct===null)var s=!1;else{if(e=Ct,Ct=null,qs=0,A&6)throw Error(b(331));var l=A;for(A|=4,L=e.current;L!==null;){var a=L,o=a.child;if(L.flags&16){var i=a.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(L=u;L!==null;){var m=L;switch(m.tag){case 0:case 11:case 15:fr(8,m,a)}var h=m.child;if(h!==null)h.return=m,L=h;else for(;L!==null;){m=L;var g=m.sibling,v=m.return;if(zd(m),m===u){L=null;break}if(g!==null){g.return=v,L=g;break}L=v}}}var j=a.alternate;if(j!==null){var w=j.child;if(w!==null){j.child=null;do{var y=w.sibling;w.sibling=null,w=y}while(w!==null)}}L=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,L=o;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:fr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,L=f;break e}L=a.return}}var d=e.current;for(L=d;L!==null;){o=L;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,L=p;else e:for(o=d;L!==null;){if(i=L,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ml(9,i)}}catch(S){K(i,i.return,S)}if(i===o){L=null;break e}var k=i.sibling;if(k!==null){k.return=i.return,L=k;break e}L=i.return}}if(A=l,Ht(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(sl,e)}catch{}s=!0}return s}finally{$=n,He.transition=t}}return!1}function vc(e,t,n){t=zn(n,t),t=bd(e,t,1),e=Mt(e,t,1),t=je(),e!==null&&(Ar(e,1,t),Re(e,t))}function K(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(_t===null||!_t.has(s))){e=zn(n,e),e=Sd(t,e,1),t=Mt(t,e,1),e=je(),t!==null&&(Ar(t,1,e),Re(t,e));break}}t=t.return}}function Vh(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(ne===4||ne===3&&(ce&130023424)===ce&&500>J()-Vo?Kt(e,0):Bo|=n),Re(e,t)}function Wd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=je();e=xt(e,t),e!==null&&(Ar(e,t,n),Re(e,n))}function Wh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Wd(e,n)}function Yh(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(b(314))}s!==null&&s.delete(t),Wd(e,n)}var Yd;Yd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,Dh(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,V&&t.flags&1048576&&qu(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ns(e,t),e=t.pendingProps;var l=Mn(t,ge.current);En(t,n),l=Ao(null,t,s,e,l,n);var a=Oo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(s)?(a=!0,$s(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_o(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,Ta(t,s,e,n),t=$a(null,t,s,!0,a,n)):(t.tag=0,V&&a&&So(t),we(null,t,l,n),t=t.child),t;case 16:s=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,l=s._init,s=l(s._payload),t.type=s,l=t.tag=Gh(s),e=Ye(s,e),l){case 0:t=Oa(null,t,s,e,n);break e;case 1:t=cc(null,t,s,e,n);break e;case 11:t=oc(null,t,s,e,n);break e;case 14:t=ic(null,t,s,Ye(s.type,e),n);break e}throw Error(b(306,s,""))}return t;case 0:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ye(s,l),Oa(e,t,s,l,n);case 1:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ye(s,l),cc(e,t,s,l,n);case 3:e:{if(Rd(t),e===null)throw Error(b(387));s=t.pendingProps,a=t.memoizedState,l=a.element,nd(e,t),Vs(t,s,null,n);var o=t.memoizedState;if(s=o.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=zn(Error(b(423)),t),t=uc(e,t,s,n,l);break e}else if(s!==l){l=zn(Error(b(424)),t),t=uc(e,t,s,n,l);break e}else for(Me=Lt(t.stateNode.containerInfo.firstChild),De=t,V=!0,Ge=null,n=ed(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),s===l){t=gt(e,t,n);break e}we(e,t,s,n)}t=t.child}return t;case 5:return rd(t),e===null&&Da(t),s=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,o=l.children,Pa(s,l)?o=null:a!==null&&Pa(s,a)&&(t.flags|=32),Pd(e,t),we(e,t,o,n),t.child;case 6:return e===null&&Da(t),null;case 13:return Ld(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Dn(t,null,s,n):we(e,t,s,n),t.child;case 11:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ye(s,l),oc(e,t,s,l,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,l=t.pendingProps,a=t.memoizedProps,o=l.value,H(Us,s._currentValue),s._currentValue=o,a!==null)if(Ze(a.value,o)){if(a.children===l.children&&!Ee.current){t=gt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){o=a.child;for(var c=i.firstContext;c!==null;){if(c.context===s){if(a.tag===1){c=ft(-1,n&-n),c.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Ia(a.return,n,t),i.lanes|=n;break}c=c.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(b(341));o.lanes|=n,i=o.alternate,i!==null&&(i.lanes|=n),Ia(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}we(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,s=t.pendingProps.children,En(t,n),l=Ue(l),s=s(l),t.flags|=1,we(e,t,s,n),t.child;case 14:return s=t.type,l=Ye(s,t.pendingProps),l=Ye(s.type,l),ic(e,t,s,l,n);case 15:return Cd(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,l=t.pendingProps,l=t.elementType===s?l:Ye(s,l),Ns(e,t),t.tag=1,Pe(s)?(e=!0,$s(t)):e=!1,En(t,n),Nd(t,s,l),Ta(t,s,l,n),$a(null,t,s,!0,e,n);case 19:return Md(e,t,n);case 22:return Ed(e,t,n)}throw Error(b(156,t.tag))};function Qd(e,t){return wu(e,t)}function Qh(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,n,s){return new Qh(e,t,n,s)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gh(e){if(typeof e=="function")return Go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fo)return 11;if(e===ho)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=Fe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cs(e,t,n,s,l,a){var o=2;if(s=e,typeof e=="function")Go(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mn:return qt(n.children,l,a,t);case mo:o=8,l|=8;break;case aa:return e=Fe(12,n,t,l|2),e.elementType=aa,e.lanes=a,e;case oa:return e=Fe(13,n,t,l),e.elementType=oa,e.lanes=a,e;case ia:return e=Fe(19,n,t,l),e.elementType=ia,e.lanes=a,e;case ru:return hl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tu:o=10;break e;case nu:o=9;break e;case fo:o=11;break e;case ho:o=14;break e;case jt:o=16,s=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Fe(o,n,t,l),t.elementType=e,t.type=s,t.lanes=a,t}function qt(e,t,n,s){return e=Fe(7,e,s,t),e.lanes=n,e}function hl(e,t,n,s){return e=Fe(22,e,s,t),e.elementType=ru,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=Fe(6,e,null,t),e.lanes=n,e}function Xl(e,t,n){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Kh(e,t,n,s,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=s,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ko(e,t,n,s,l,a,o,i,c){return e=new Kh(e,t,n,i,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Fe(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_o(a),e}function qh(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dn,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Gd(e){if(!e)return At;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Gu(e,n,t)}return t}function Kd(e,t,n,s,l,a,o,i,c){return e=Ko(n,s,!0,e,l,a,o,i,c),e.context=Gd(null),n=e.current,s=je(),l=Dt(n),a=ft(s,l),a.callback=t??null,Mt(n,a,l),e.current.lanes=l,Ar(e,l,s),Re(e,s),e}function pl(e,t,n,s){var l=t.current,a=je(),o=Dt(l);return n=Gd(n),t.context===null?t.context=n:t.pendingContext=n,t=ft(a,o),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Mt(l,t,o),e!==null&&(qe(e,l,o,a),ws(e,l,o)),o}function Xs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qo(e,t){wc(e,t),(e=e.alternate)&&wc(e,t)}function Jh(){return null}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jo(e){this._internalRoot=e}xl.prototype.render=Jo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));pl(e,t,null,null)};xl.prototype.unmount=Jo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){pl(null,e,null,null)}),t[pt]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&t!==0&&t<Nt[n].priority;n++);Nt.splice(n,0,e),n===0&&Ru(e)}};function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function Xh(e,t,n,s,l){if(l){if(typeof s=="function"){var a=s;s=function(){var u=Xs(o);a.call(u)}}var o=Kd(t,s,e,0,null,!1,!1,"",jc);return e._reactRootContainer=o,e[pt]=o.current,Sr(e.nodeType===8?e.parentNode:e),tn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof s=="function"){var i=s;s=function(){var u=Xs(c);i.call(u)}}var c=Ko(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=c,e[pt]=c.current,Sr(e.nodeType===8?e.parentNode:e),tn(function(){pl(t,c,n,s)}),c}function yl(e,t,n,s,l){var a=n._reactRootContainer;if(a){var o=a;if(typeof l=="function"){var i=l;l=function(){var c=Xs(o);i.call(c)}}pl(t,o,e,l)}else o=Xh(n,t,e,l,s);return Xs(o)}Su=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(go(t,n|1),Re(t,J()),!(A&6)&&(Tn=J()+500,Ht()))}break;case 13:tn(function(){var s=xt(e,1);if(s!==null){var l=je();qe(s,e,1,l)}}),qo(e,1)}};yo=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=je();qe(t,e,134217728,n)}qo(e,134217728)}};Cu=function(e){if(e.tag===13){var t=Dt(e),n=xt(e,t);if(n!==null){var s=je();qe(n,e,t,s)}qo(e,t)}};Eu=function(){return $};Pu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};ya=function(e,t,n){switch(t){case"input":if(da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var l=il(s);if(!l)throw Error(b(90));lu(s),da(s,l)}}}break;case"textarea":ou(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};hu=Wo;pu=tn;var Zh={usingClientEntryPoint:!1,Events:[$r,xn,il,mu,fu,Wo]},tr={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ep={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yu(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||Jh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cs.isDisabled&&cs.supportsFiber)try{sl=cs.inject(ep),lt=cs}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zh;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xo(t))throw Error(b(200));return qh(e,t,null,n)};ze.createRoot=function(e,t){if(!Xo(e))throw Error(b(299));var n=!1,s="",l=qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ko(e,1,!1,null,null,n,!1,s,l),e[pt]=t.current,Sr(e.nodeType===8?e.parentNode:e),new Jo(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=yu(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return tn(e)};ze.hydrate=function(e,t,n){if(!gl(t))throw Error(b(200));return yl(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Xo(e))throw Error(b(405));var s=n!=null&&n.hydratedSources||null,l=!1,a="",o=qd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Kd(t,null,e,1,n??null,l,!1,a,o),e[pt]=t.current,Sr(e),s)for(e=0;e<s.length;e++)n=s[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};ze.render=function(e,t,n){if(!gl(t))throw Error(b(200));return yl(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!gl(e))throw Error(b(40));return e._reactRootContainer?(tn(function(){yl(null,null,e,!1,function(){e._reactRootContainer=null,e[pt]=null})}),!0):!1};ze.unstable_batchedUpdates=Wo;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!gl(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return yl(e,t,n,!1,s)};ze.version="18.3.1-next-f1338f8080-20240426";function Jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jd)}catch(e){console.error(e)}}Jd(),Jc.exports=ze;var tp=Jc.exports,kc=tp;sa.createRoot=kc.createRoot,sa.hydrateRoot=kc.hydrateRoot;/**
 * react-router v7.18.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Zo=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Xd=/^[\\/]{2}/;function np(e,t){return t+e.replace(/\\/g,"/")}var Nc="popstate";function bc(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function rp(e={}){function t(s,l){var u;let a=(u=l.state)==null?void 0:u.masked,{pathname:o,search:i,hash:c}=a||s.location;return Ja("",{pathname:o,search:i,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default",a?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function n(s,l){return typeof l=="string"?l:nn(l)}return lp(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function et(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sp(){return Math.random().toString(36).substring(2,10)}function Sc(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ja(e,t,n=null,s,l){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Bn(t):t,state:n,key:t&&t.key||s||sp(),mask:l}}function nn({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Bn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function lp(e,t,n,s={}){let{window:l=document.defaultView,v5Compat:a=!1}=s,o=l.history,i="POP",c=null,u=m();u==null&&(u=0,o.replaceState({...o.state,idx:u},""));function m(){return(o.state||{idx:null}).idx}function h(){i="POP";let y=m(),f=y==null?null:y-u;u=y,c&&c({action:i,location:w.location,delta:f})}function g(y,f){i="PUSH";let d=bc(y)?y:Ja(w.location,y,f);u=m()+1;let p=Sc(d,u),k=w.createHref(d.mask||d);try{o.pushState(p,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(k)}a&&c&&c({action:i,location:w.location,delta:1})}function v(y,f){i="REPLACE";let d=bc(y)?y:Ja(w.location,y,f);u=m();let p=Sc(d,u),k=w.createHref(d.mask||d);o.replaceState(p,"",k),a&&c&&c({action:i,location:w.location,delta:0})}function j(y){return ap(l,y)}let w={get action(){return i},get location(){return e(l,o)},listen(y){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Nc,h),c=y,()=>{l.removeEventListener(Nc,h),c=null}},createHref(y){return t(l,y)},createURL:j,encodeLocation(y){let f=j(y);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(y){return o.go(y)}};return w}function ap(e,t,n=!1){let s="http://localhost";e&&(s=e.location.origin!=="null"?e.location.origin:e.location.href),W(s,"No window.location.(origin|href) available to create URL");let l=typeof t=="string"?t:nn(t);return l=l.replace(/ $/,"%20"),!n&&Xd.test(l)&&(l=s+l),new URL(l,s)}function Zd(e,t,n="/"){return op(e,t,n,!1)}function op(e,t,n,s,l){let a=typeof t=="string"?Bn(t):t,o=yt(a.pathname||"/",n);if(o==null)return null;let i=ip(e),c=null,u=vp(o);for(let m=0;c==null&&m<i.length;++m)c=yp(i[m],u,s);return c}function ip(e){let t=em(e);return cp(t),t}function em(e,t=[],n=[],s="",l=!1){let a=(o,i,c=l,u)=>{let m={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(s)&&c)return;W(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length)}let h=Je([s,m.relativePath]),g=n.concat(m);o.children&&o.children.length>0&&(W(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),em(o.children,t,g,h,c)),!(o.path==null&&!o.index)&&t.push({path:h,score:xp(h,o.index),routesMeta:g.map((v,j)=>{let[w,y]=rm(v.relativePath,v.caseSensitive,j===g.length-1);return{...v,matcher:w,compiledParams:y}})})};return e.forEach((o,i)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))a(o,i);else for(let u of tm(o.path))a(o,i,!0,u)}),t}function tm(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let o=tm(s.join("/")),i=[];return i.push(...o.map(c=>c===""?a:[a,c].join("/"))),l&&i.push(...o),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function cp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gp(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var up=/^:[\w-]+$/,dp=3,mp=2,fp=1,hp=10,pp=-2,Cc=e=>e==="*";function xp(e,t){let n=e.split("/"),s=n.length;return n.some(Cc)&&(s+=pp),t&&(s+=mp),n.filter(l=>!Cc(l)).reduce((l,a)=>l+(up.test(a)?dp:a===""?fp:hp),s)}function gp(e,t){return e.length===t.length&&e.slice(0,-1).every((s,l)=>s===t[l])?e[e.length-1]-t[t.length-1]:0}function yp(e,t,n=!1){let{routesMeta:s}=e,l={},a="/",o=[];for(let i=0;i<s.length;++i){let c=s[i],u=i===s.length-1,m=a==="/"?t:t.slice(a.length)||"/",h={path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g=c.matcher&&c.compiledParams?nm(h,m,c.matcher,c.compiledParams):Zs(h,m),v=c.route;if(!g&&u&&n&&!s[s.length-1].route.index&&(g=Zs({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!g)return null;Object.assign(l,g.params),o.push({params:l,pathname:Je([a,g.pathname]),pathnameBase:kp(Je([a,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(a=Je([a,g.pathnameBase]))}return o}function Zs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=rm(e.path,e.caseSensitive,e.end);return nm(e,t,n,s)}function nm(e,t,n,s){let l=t.match(n);if(!l)return null;let a=l[0],o=An(a,1),i=l.slice(1);return{params:s.reduce((u,{paramName:m,isOptional:h},g)=>{if(m==="*"){let j=i[g]||"";o=An(a.slice(0,a.length-j.length),1)}const v=i[g];return h&&!v?u[m]=void 0:u[m]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function rm(e,t=!1,n=!0){et(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,i,c,u,m)=>{if(s.push({paramName:i,isOptional:c!=null}),c){let h=m.charAt(u+o.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(s.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function vp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return et(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function yt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function wp(e,t="/"){let{pathname:n,search:s="",hash:l=""}=typeof e=="string"?Bn(e):e,a;return n?(n=sm(n),n.startsWith("/")||n.startsWith("\\")?a=Ec(n.substring(1),"/"):a=Ec(n,t)):a=t,{pathname:a,search:Np(s),hash:bp(l)}}function Ec(e,t){let n=An(t).split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Zl(e,t,n,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ei(e){let t=jp(e);return t.map((n,s)=>s===t.length-1?n.pathname:n.pathnameBase)}function vl(e,t,n,s=!1){let l;typeof e=="string"?l=Bn(e):(l={...e},W(!l.pathname||!l.pathname.includes("?"),Zl("?","pathname","search",l)),W(!l.pathname||!l.pathname.includes("#"),Zl("#","pathname","hash",l)),W(!l.search||!l.search.includes("#"),Zl("#","search","hash",l)));let a=e===""||l.pathname==="",o=a?"/":l.pathname,i;if(o==null)i=n;else{let h=t.length-1;if(!s&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}i=h>=0?t[h]:"/"}let c=wp(l,i),u=o&&o!=="/"&&o.endsWith("/"),m=(a||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var sm=e=>e.replace(/[\\/]{2,}/g,"/"),Je=e=>sm(e.join("/"));function An(e,t=0){let n=e.length;for(;n>t&&e.charCodeAt(n-1)===47;)n--;return n===e.length?e:e.slice(0,n)}var kp=e=>An(e).replace(/^\/*/,"/"),Np=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Sp=class{constructor(e,t,n,s=!1){this.status=e,this.statusText=t||"",this.internal=s,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Cp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Ep(e){let t=e.map(n=>n.route.path).filter(Boolean);return Je(t)||"/"}var lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function am(e,t){let n=e;if(typeof n!="string"||!Zo.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let s=n,l=!1;if(lm)try{let a=new URL(window.location.href),o=Xd.test(n)?new URL(np(n,a.protocol)):new URL(n),i=yt(o.pathname,t);o.origin===a.origin&&i!=null?n=i+o.search+o.hash:l=!0}catch{et(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pc=new URL("http://localhost");function ti(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),Pc)}catch{return Pc}}function ea(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function Pp(e,t){if(e.startsWith("//"))return!0;let n=t.protocol.toLowerCase();return e.toLowerCase().startsWith(n)?t.host===""||e.slice(n.length).startsWith("//"):!1}function ni(e,t,n,s){let l=null;try{l=e==null?null:new URL(e,n)}catch{}let a=new URL(t,n),o=l!=null&&!ea(l,n),i=!ea(a,n);if(s==="reject"){if(o||i)throw new Error("External navigation is not allowed")}else if(i&&(l==null||!Pp(e,l)||!ea(l,a)))throw new Error("External navigation is not allowed")}var om=["POST","PUT","PATCH","DELETE"];new Set(om);var Rp=["GET",...om];new Set(Rp);var Lp=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Mp(e){try{return Lp.includes(new URL(e).protocol)}catch{return!1}}var Vn=x.createContext(null);Vn.displayName="DataRouter";var wl=x.createContext(null);wl.displayName="DataRouterState";var im=x.createContext(!1);function _p(){return x.useContext(im)}var cm=x.createContext({isTransitioning:!1});cm.displayName="ViewTransition";var Dp=x.createContext(new Map);Dp.displayName="Fetchers";var Ip=x.createContext(null);Ip.displayName="Await";var Ae=x.createContext(null);Ae.displayName="Navigation";var Hr=x.createContext(null);Hr.displayName="Location";var tt=x.createContext({outlet:null,matches:[],isDataRoute:!1});tt.displayName="Route";var ri=x.createContext(null);ri.displayName="RouteError";var um="REACT_ROUTER_ERROR",zp="REDIRECT",Tp="ROUTE_ERROR_RESPONSE";function Ap(e){if(e.startsWith(`${um}:${zp}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Op(e){if(e.startsWith(`${um}:${Tp}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Sp(t.status,t.statusText,t.data)}catch{}}function $p(e,{relative:t}={}){W(Wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=x.useContext(Ae),{hash:l,pathname:a,search:o}=Ur(e,{relative:t}),i=a;return n!=="/"&&(i=a==="/"?n:Je([n,a])),s.createHref({pathname:i,search:o,hash:l})}function Wn(){return x.useContext(Hr)!=null}function Ve(){return W(Wn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Hr).location}var dm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function mm(e){x.useContext(Ae).static||x.useLayoutEffect(e)}function ot(){let{isDataRoute:e}=x.useContext(tt);return e?ex():Fp()}function Fp(){W(Wn(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Vn),{basename:t,navigator:n}=x.useContext(Ae),{matches:s}=x.useContext(tt),{pathname:l}=Ve(),a=JSON.stringify(ei(s)),o=x.useRef(!1);return mm(()=>{o.current=!0}),x.useCallback((c,u={})=>{if(et(o.current,dm),!o.current)return;if(typeof c=="number"){n.go(c);return}let m=vl(c,JSON.parse(a),l,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Je([t,m.pathname])),ni(typeof c=="string"?c:nn(c),n.createHref(m),ti(n),"reject"),(u.replace?n.replace:n.push)(m,u.state,u)},[t,n,a,l,e])}var Hp=x.createContext(null);function Up(e){let t=x.useContext(tt).outlet;return x.useMemo(()=>t&&x.createElement(Hp.Provider,{value:e},t),[t,e])}function Ur(e,{relative:t}={}){let{matches:n}=x.useContext(tt),{pathname:s}=Ve(),l=JSON.stringify(ei(n));return x.useMemo(()=>vl(e,JSON.parse(l),s,t==="path"),[e,l,s,t])}function Bp(e,t){return fm(e,t)}function fm(e,t,n){var y;W(Wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=x.useContext(Ae),{matches:l}=x.useContext(tt),a=l[l.length-1],o=a?a.params:{},i=a?a.pathname:"/",c=a?a.pathnameBase:"/",u=a&&a.route;{let f=u&&u.path||"";pm(i,!u||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${i}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let m=Ve(),h;if(t){let f=typeof t=="string"?Bn(t):t;W(c==="/"||((y=f.pathname)==null?void 0:y.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${f.pathname}" was given in the \`location\` prop.`),h=f}else h=m;let g=h.pathname||"/",v=g;if(c!=="/"){let f=c.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(f.length).join("/")}let j=n&&n.state.matches.length?n.state.matches.map(f=>Object.assign(f,{route:n.manifest[f.route.id]||f.route})):Zd(e,{pathname:v});et(u||j!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),et(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=Gp(j&&j.map(f=>Object.assign({},f,{params:Object.assign({},o,f.params),pathname:Je([c,s.encodeLocation?s.encodeLocation(f.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?c:Je([c,s.encodeLocation?s.encodeLocation(f.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),l,n);return t&&w?x.createElement(Hr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},w):w}function Vp(){let e=Zp(),t=Cp(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},a={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:a},"ErrorBoundary")," or"," ",x.createElement("code",{style:a},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,o)}var Wp=x.createElement(Vp,null),hm=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=Op(e.digest);n&&(e=n)}let t=e!==void 0?x.createElement(tt.Provider,{value:this.props.routeContext},x.createElement(ri.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(Yp,{error:e},t):t}};hm.contextType=im;var ta=new WeakMap;function Yp({children:e,error:t}){let{basename:n,navigator:s}=x.useContext(Ae);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let l=Ap(t.digest);if(l){let a=ta.get(t);if(a)throw a;let o=am(l.location,n),i=o.absoluteURL||o.to;if(ni(l.location,i,ti(s),"allow-explicit"),Mp(i))throw new Error("Invalid redirect location");if(lm&&!ta.get(t))if(o.isExternal||l.reloadDocument)window.location.href=i;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:l.replace}));throw ta.set(t,c),c}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i}`})}}return e}function Qp({routeContext:e,match:t,children:n}){let s=x.useContext(Vn);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(tt.Provider,{value:e},n)}function Gp(e,t=[],n){let s=n==null?void 0:n.state;if(e==null){if(!s)return null;if(s.errors)e=s.matches;else if(t.length===0&&!s.initialized&&s.matches.length>0)e=s.matches;else return null}let l=e,a=s==null?void 0:s.errors;if(a!=null){let m=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);W(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let o=!1,i=-1;if(n&&s){o=s.renderFallback;for(let m=0;m<l.length;m++){let h=l[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(i=m),h.route.id){let{loaderData:g,errors:v}=s,j=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!v||v[h.route.id]===void 0);if(h.route.lazy||j){n.isStatic&&(o=!0),i>=0?l=l.slice(0,i+1):l=[l[0]];break}}}}let c=n==null?void 0:n.onError,u=s&&c?(m,h)=>{var g,v;c(m,{location:s.location,params:((v=(g=s.matches)==null?void 0:g[0])==null?void 0:v.params)??{},pattern:Ep(s.matches),errorInfo:h})}:void 0;return l.reduceRight((m,h,g)=>{let v,j=!1,w=null,y=null;s&&(v=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||Wp,o&&(i<0&&g===0?(pm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,y=null):i===g&&(j=!0,y=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,g+1)),d=()=>{let p;return v?p=w:j?p=y:h.route.Component?p=x.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,x.createElement(Qp,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:s!=null},children:p})};return s&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?x.createElement(hm,{location:s.location,revalidation:s.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0},onError:u}):d()},null)}function si(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kp(e){let t=x.useContext(Vn);return W(t,si(e)),t}function qp(e){let t=x.useContext(wl);return W(t,si(e)),t}function Jp(e){let t=x.useContext(tt);return W(t,si(e)),t}function li(e){let t=Jp(e),n=t.matches[t.matches.length-1];return W(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Xp(){return li("useRouteId")}function Zp(){var s;let e=x.useContext(ri),t=qp("useRouteError"),n=li("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[n]}function ex(){let{router:e}=Kp("useNavigate"),t=li("useNavigate"),n=x.useRef(!1);return mm(()=>{n.current=!0}),x.useCallback(async(l,a={})=>{et(n.current,dm),n.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:t,...a}))},[e,t])}var Rc={};function pm(e,t,n){!t&&!Rc[e]&&(Rc[e]=!0,et(!1,n))}x.memo(tx);function tx({routes:e,manifest:t,future:n,state:s,isStatic:l,onError:a}){return fm(e,void 0,{manifest:t,state:s,isStatic:l,onError:a})}function nx({to:e,replace:t,state:n,relative:s}){W(Wn(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l,navigator:a}=x.useContext(Ae);et(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:o}=x.useContext(tt),{pathname:i}=Ve(),c=ot(),u=vl(e,ei(o),i,s==="path");ni(typeof e=="string"?e:nn(e),a.createHref(u),ti(a),"reject");let m=JSON.stringify(u);return x.useEffect(()=>{c(JSON.parse(m),{replace:t,state:n,relative:s})},[c,m,s,t,n]),null}function rx(e){return Up(e.context)}function ve(e){W(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sx({basename:e="/",children:t=null,location:n,navigationType:s="POP",navigator:l,static:a=!1,useTransitions:o}){W(!Wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:i,navigator:l,static:a,useTransitions:o,future:{}}),[i,l,a,o]);typeof n=="string"&&(n=Bn(n));let{pathname:u="/",search:m="",hash:h="",state:g=null,key:v="default",mask:j}=n,w=x.useMemo(()=>{let y=yt(u,i);return y==null?null:{location:{pathname:y,search:m,hash:h,state:g,key:v,mask:j},navigationType:s}},[i,u,m,h,g,v,s,j]);return et(w!=null,`<Router basename="${i}"> is not able to match the URL "${u}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:x.createElement(Ae.Provider,{value:c},x.createElement(Hr.Provider,{children:t,value:w}))}function lx({children:e,location:t}){return Bp(Xa(e),t)}function Xa(e,t=[]){let n=[];return x.Children.forEach(e,(s,l)=>{if(!x.isValidElement(s))return;let a=[...t,l];if(s.type===x.Fragment){n.push.apply(n,Xa(s.props.children,a));return}W(s.type===ve,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),W(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=Xa(s.props.children,a)),n.push(o)}),n}var Es="get",Ps="application/x-www-form-urlencoded";function jl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ax(e){return jl(e)&&e.tagName.toLowerCase()==="button"}function ox(e){return jl(e)&&e.tagName.toLowerCase()==="form"}function ix(e){return jl(e)&&e.tagName.toLowerCase()==="input"}function cx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ux(e,t){return e.button===0&&(!t||t==="_self")&&!cx(e)}var us=null;function dx(){if(us===null)try{new FormData(document.createElement("form"),0),us=!1}catch{us=!0}return us}var mx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function na(e){return e!=null&&!mx.has(e)?(et(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ps}"`),null):e}function fx(e,t){let n,s,l,a,o;if(ox(e)){let i=e.getAttribute("action");s=i?yt(i,t):null,n=e.getAttribute("method")||Es,l=na(e.getAttribute("enctype"))||Ps,a=new FormData(e)}else if(ax(e)||ix(e)&&(e.type==="submit"||e.type==="image")){let i=e.form;if(i==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||i.getAttribute("action");if(s=c?yt(c,t):null,n=e.getAttribute("formmethod")||i.getAttribute("method")||Es,l=na(e.getAttribute("formenctype"))||na(i.getAttribute("enctype"))||Ps,a=new FormData(i,e),!dx()){let{name:u,type:m,value:h}=e;if(m==="image"){let g=u?`${u}.`:"";a.append(`${g}x`,"0"),a.append(`${g}y`,"0")}else u&&a.append(u,h)}}else{if(jl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Es,s=null,l=Ps,o=e}return a&&l==="text/plain"&&(o=a,a=void 0),{action:s,method:n.toLowerCase(),encType:l,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ai(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xm(e,t,n,s){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:t&&yt(l.pathname,t)==="/"?l.pathname=`${An(t)}/_root.${s}`:l.pathname=`${An(l.pathname)}.${s}`,l}async function hx(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function px(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function xx(e,t,n){let s=await Promise.all(e.map(async l=>{let a=t.routes[l.route.id];if(a){let o=await hx(a,n);return o.links?o.links():[]}return[]}));return wx(s.flat(1).filter(px).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Lc(e,t,n,s,l,a){let o=(c,u)=>n[u]?c.route.id!==n[u].route.id:!0,i=(c,u)=>{var m;return n[u].pathname!==c.pathname||((m=n[u].route.path)==null?void 0:m.endsWith("*"))&&n[u].params["*"]!==c.params["*"]};return a==="assets"?t.filter((c,u)=>o(c,u)||i(c,u)):a==="data"?t.filter((c,u)=>{var h;let m=s.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(o(c,u)||i(c,u))return!0;if(c.route.shouldRevalidate){let g=c.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((h=n[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function gx(e,t,{includeHydrateFallback:n}={}){return yx(e.map(s=>{let l=t.routes[s.route.id];if(!l)return[];let a=[l.module];return l.clientActionModule&&(a=a.concat(l.clientActionModule)),l.clientLoaderModule&&(a=a.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(a=a.concat(l.hydrateFallbackModule)),l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function yx(e){return[...new Set(e)]}function vx(e){let t={},n=Object.keys(e).sort();for(let s of n)t[s]=e[s];return t}function wx(e,t){let n=new Set;return new Set(t),e.reduce((s,l)=>{let a=JSON.stringify(vx(l));return n.has(a)||(n.add(a),s.push({key:a,link:l})),s},[])}function oi(){let e=x.useContext(Vn);return ai(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function jx(){let e=x.useContext(wl);return ai(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ii=x.createContext(void 0);ii.displayName="FrameworkContext";function kl(){let e=x.useContext(ii);return ai(e,"You must render this element inside a <HydratedRouter> element"),e}function kx(e,t){let n=x.useContext(ii),[s,l]=x.useState(!1),[a,o]=x.useState(!1),{onFocus:i,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:h}=t,g=x.useRef(null);x.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let w=f=>{f.forEach(d=>{o(d.isIntersecting)})},y=new IntersectionObserver(w,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[e]),x.useEffect(()=>{if(s){let w=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(w)}}},[s]);let v=()=>{l(!0)},j=()=>{l(!1),o(!1)};return n?e!=="intent"?[a,g,{}]:[a,g,{onFocus:nr(i,v),onBlur:nr(c,j),onMouseEnter:nr(u,v),onMouseLeave:nr(m,j),onTouchStart:nr(h,v)}]:[!1,g,{}]}function nr(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Nx({page:e,...t}){let n=_p(),{nonce:s}=kl(),{router:l}=oi(),a=x.useMemo(()=>Zd(l.routes,e,l.basename),[l.routes,e,l.basename]);return a?(t.nonce==null&&s&&(t={...t,nonce:s}),n?x.createElement(Sx,{page:e,matches:a,...t}):x.createElement(Cx,{page:e,matches:a,...t})):null}function bx(e){let{manifest:t,routeModules:n}=kl(),[s,l]=x.useState([]);return x.useEffect(()=>{let a=!1;return xx(e,t,n).then(o=>{a||l(o)}),()=>{a=!0}},[e,t,n]),s}function Sx({page:e,matches:t,...n}){let s=Ve(),{future:l}=kl(),{basename:a}=oi(),o=x.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let i=xm(e,a,l.v8_trailingSlashAwareDataRequests,"rsc"),c=!1,u=[];for(let m of t)typeof m.route.shouldRevalidate=="function"?c=!0:u.push(m.route.id);return c&&u.length>0&&i.searchParams.set("_routes",u.join(",")),[i.pathname+i.search]},[a,l.v8_trailingSlashAwareDataRequests,e,s,t]);return x.createElement(x.Fragment,null,o.map(i=>x.createElement("link",{key:i,rel:"prefetch",as:"fetch",href:i,...n})))}function Cx({page:e,matches:t,...n}){let s=Ve(),{future:l,manifest:a,routeModules:o}=kl(),{basename:i}=oi(),{loaderData:c,matches:u}=jx(),m=x.useMemo(()=>Lc(e,t,u,a,s,"data"),[e,t,u,a,s]),h=x.useMemo(()=>Lc(e,t,u,a,s,"assets"),[e,t,u,a,s]),g=x.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let w=new Set,y=!1;if(t.forEach(d=>{var k;let p=a.routes[d.route.id];!p||!p.hasLoader||(!m.some(S=>S.route.id===d.route.id)&&d.route.id in c&&((k=o[d.route.id])!=null&&k.shouldRevalidate)||p.hasClientLoader?y=!0:w.add(d.route.id))}),w.size===0)return[];let f=xm(e,i,l.v8_trailingSlashAwareDataRequests,"data");return y&&w.size>0&&f.searchParams.set("_routes",t.filter(d=>w.has(d.route.id)).map(d=>d.route.id).join(",")),[f.pathname+f.search]},[i,l.v8_trailingSlashAwareDataRequests,c,s,a,m,t,e,o]),v=x.useMemo(()=>gx(h,a),[h,a]),j=bx(h);return x.createElement(x.Fragment,null,g.map(w=>x.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),v.map(w=>x.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),j.map(({key:w,link:y})=>x.createElement("link",{key:w,nonce:n.nonce,...y,crossOrigin:y.crossOrigin??n.crossOrigin})))}function Ex(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Px&&(window.__reactRouterVersion="7.18.3")}catch{}function Rx({basename:e,children:t,useTransitions:n,window:s}){let l=x.useRef();l.current==null&&(l.current=rp({window:s,v5Compat:!0}));let a=l.current,[o,i]=x.useState({action:a.action,location:a.location}),c=x.useCallback(u=>{n===!1?i(u):x.startTransition(()=>i(u))},[n]);return x.useLayoutEffect(()=>a.listen(c),[a,c]),x.createElement(sx,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}var O=x.forwardRef(function({onClick:t,discover:n="render",prefetch:s="none",relative:l,reloadDocument:a,replace:o,mask:i,state:c,target:u,to:m,preventScrollReset:h,viewTransition:g,defaultShouldRevalidate:v,...j},w){let{basename:y,navigator:f,useTransitions:d}=x.useContext(Ae),p=typeof m=="string"&&Zo.test(m),k=am(m,y);m=k.to;let S=$p(m,{relative:l}),N=Ve(),C=null;if(i){let re=vl(i,[],N.mask?N.mask.pathname:"/",!0);y!=="/"&&(re.pathname=re.pathname==="/"?y:Je([y,re.pathname])),C=f.createHref(re)}let[E,M,_]=kx(s,j),ye=Dx(m,{replace:o,mask:i,state:c,target:u,preventScrollReset:h,relative:l,viewTransition:g,defaultShouldRevalidate:v,useTransitions:d});function it(re){t&&t(re),re.defaultPrevented||ye(re)}let I=!(k.isExternal||a),X=x.createElement("a",{...j,..._,href:(I?C:void 0)||k.absoluteURL||S,onClick:I?it:t,ref:Ex(w,M),target:u,"data-discover":!p&&n==="render"?"true":void 0});return E&&!p?x.createElement(x.Fragment,null,X,x.createElement(Nx,{page:S})):X});O.displayName="Link";var Lx=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:s="",end:l=!1,style:a,to:o,viewTransition:i,children:c,...u},m){let h=Ur(o,{relative:u.relative}),g=Ve(),v=x.useContext(wl),{navigator:j,basename:w}=x.useContext(Ae),y=v!=null&&Ox(h)&&i===!0,f=j.encodeLocation?j.encodeLocation(h).pathname:h.pathname,d=g.pathname,p=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;n||(d=d.toLowerCase(),p=p?p.toLowerCase():null,f=f.toLowerCase()),p&&w&&(p=yt(p,w)||p);const k=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let S=d===f||!l&&d.startsWith(f)&&d.charAt(k)==="/",N=p!=null&&(p===f||!l&&p.startsWith(f)&&p.charAt(f.length)==="/"),C={isActive:S,isPending:N,isTransitioning:y},E=S?t:void 0,M;typeof s=="function"?M=s(C):M=[s,S?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let _=typeof a=="function"?a(C):a;return x.createElement(O,{...u,"aria-current":E,className:M,ref:m,style:_,to:o,viewTransition:i},typeof c=="function"?c(C):c)});Lx.displayName="NavLink";var Mx=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:s,replace:l,state:a,method:o=Es,action:i,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:h,defaultShouldRevalidate:g,...v},j)=>{let{useTransitions:w}=x.useContext(Ae),y=Tx(),f=Ax(i,{relative:u}),d=o.toLowerCase()==="get"?"get":"post",p=typeof i=="string"&&Zo.test(i),k=S=>{if(c&&c(S),S.defaultPrevented)return;S.preventDefault();let N=S.nativeEvent.submitter,C=(N==null?void 0:N.getAttribute("formmethod"))||o,E=()=>y(N||S.currentTarget,{fetcherKey:t,method:C,navigate:n,replace:l,state:a,relative:u,preventScrollReset:m,viewTransition:h,defaultShouldRevalidate:g});w&&n!==!1?x.startTransition(()=>E()):E()};return x.createElement("form",{ref:j,method:d,action:f,onSubmit:s?c:k,...v,"data-discover":!p&&e==="render"?"true":void 0})});Mx.displayName="Form";function _x(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gm(e){let t=x.useContext(Vn);return W(t,_x(e)),t}function Dx(e,{target:t,replace:n,mask:s,state:l,preventScrollReset:a,relative:o,viewTransition:i,defaultShouldRevalidate:c,useTransitions:u}={}){let m=ot(),h=Ve(),g=Ur(e,{relative:o});return x.useCallback(v=>{if(ux(v,t)){v.preventDefault();let j=n!==void 0?n:nn(h)===nn(g),w=()=>m(e,{replace:j,mask:s,state:l,preventScrollReset:a,relative:o,viewTransition:i,defaultShouldRevalidate:c});u?x.startTransition(()=>w()):w()}},[h,m,g,n,s,l,t,e,a,o,i,c,u])}var Ix=0,zx=()=>`__${String(++Ix)}__`;function Tx(){let{router:e}=gm("useSubmit"),{basename:t}=x.useContext(Ae),n=Xp(),s=e.fetch,l=e.navigate;return x.useCallback(async(a,o={})=>{let{action:i,method:c,encType:u,formData:m,body:h}=fx(a,t);if(o.navigate===!1){let g=o.fetcherKey||zx();await s(g,n,o.action||i,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:m,body:h,formMethod:o.method||c,formEncType:o.encType||u,flushSync:o.flushSync})}else await l(o.action||i,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:m,body:h,formMethod:o.method||c,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,l,t,n])}function Ax(e,{relative:t}={}){let{basename:n}=x.useContext(Ae),s=x.useContext(tt);W(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),a={...Ur(e||".",{relative:t})},o=Ve();if(e==null){a.search=o.search;let i=new URLSearchParams(a.search),c=i.getAll("index");if(c.some(m=>m==="")){i.delete("index"),c.filter(h=>h).forEach(h=>i.append("index",h));let m=i.toString();a.search=m?`?${m}`:""}}return(!e||e===".")&&l.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Je([n,a.pathname])),nn(a)}function Ox(e,{relative:t}={}){let n=x.useContext(cm);W(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=gm("useViewTransitionState"),l=Ur(e,{relative:t});if(!n.isTransitioning)return!1;let a=yt(n.currentLocation.pathname,s)||n.currentLocation.pathname,o=yt(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Zs(l.pathname,o)!=null||Zs(l.pathname,a)!=null}/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ym=(...e)=>e.filter((t,n,s)=>!!t&&s.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:a,iconNode:o,...i},c)=>x.createElement("svg",{ref:c,...Fx,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:ym("lucide",l),...i},[...o.map(([u,m])=>x.createElement(u,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,t)=>{const n=x.forwardRef(({className:s,...l},a)=>x.createElement(Hx,{ref:a,iconNode:t,className:ym(`lucide-${$x(e)}`,s),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=P("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=P("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=P("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=P("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=P("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=P("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=P("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=P("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=P("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=P("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=P("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=P("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=P("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=P("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=P("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=P("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=P("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
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
 */const qx=P("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=P("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=P("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=P("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=P("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=P("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=P("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=P("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=P("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=P("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=P("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=P("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=P("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
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
 */const Mc=P("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=P("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=P("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=P("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=P("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=P("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=P("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=P("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=P("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=P("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=P("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=P("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=P("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=P("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=P("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=P("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=P("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=P("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=P("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=P("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=P("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=P("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=P("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=P("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=P("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=P("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=P("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=P("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=P("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=P("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=P("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=P("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Nm=x.createContext(null);function v0({children:e}){const[t,n]=x.useState([]),s=x.useRef(0),l=x.useCallback(o=>{n(i=>i.filter(c=>c.id!==o))},[]),a=x.useCallback((o,i="success")=>{const c=++s.current;n(u=>[...u,{id:c,message:o,tone:i}]),setTimeout(()=>l(c),4200)},[l]);return r.jsxs(Nm.Provider,{value:a,children:[e,r.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-5 z-[100] flex flex-col items-center gap-2 px-4 sm:items-end sm:right-5 sm:left-auto",role:"status","aria-live":"polite",children:t.map(o=>r.jsxs("div",{className:"pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border border-cloudline bg-white/95 p-4 shadow-soft animate-fadeUp",children:[o.tone==="success"?r.jsx(ee,{className:"mt-0.5 h-5 w-5 shrink-0 text-meadow-600"}):r.jsx(t0,{className:"mt-0.5 h-5 w-5 shrink-0 text-sky-600"}),r.jsx("p",{className:"flex-1 text-sm text-ink",children:o.message}),r.jsx("button",{onClick:()=>l(o.id),"aria-label":"Dismiss notification",className:"text-slate-muted transition-colors hover:text-ink",children:r.jsx(Sl,{className:"h-4 w-4"})})]},o.id))})]})}function mi(){const e=x.useContext(Nm);if(!e)throw new Error("useToast must be used within a ToastProvider");return e}function w0(){return localStorage.getItem("token")?r.jsx(rx,{}):r.jsx(nx,{to:"/login",replace:!0})}const bm="http://127.0.0.1:8000/api".replace(/\/$/,""),Qn=e=>`${bm}/${e.replace(/^\//,"")}`,j0=e=>{if(!e)return null;if(/^https?:\/\//.test(e))return e;const t=e.replace(/^\/?(?:storage\/)?/,"");return`${bm.replace(/\/api$/,"")}/storage/${t}`},Ic=[{label:"Home",href:"#home"},{label:"How It Works",href:"#how-it-works"},{label:"Categories",href:"#causes"},{label:"About",href:"#about"},{label:"Contact",href:"#contact"}];function k0(){const[e,t]=x.useState(!1),[n,s]=x.useState(!1),[l,a]=x.useState(null);x.useEffect(()=>{const u=localStorage.getItem("user");u&&a(JSON.parse(u))},[]);const o=async()=>{const u=localStorage.getItem("token");try{u&&await fetch(Qn("/logout"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${u}`}})}catch(m){console.error("Logout error:",m)}localStorage.removeItem("token"),localStorage.removeItem("user"),a(null),s(!1)};x.useEffect(()=>{const u=()=>{t(window.scrollY>12)};return u(),window.addEventListener("scroll",u,{passive:!0}),()=>{window.removeEventListener("scroll",u)}},[]);const i=()=>{s(!1)},c=()=>{s(!1)};return r.jsxs("header",{className:`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${e?"glass shadow-card":"bg-white/70 backdrop-blur-sm"}`,children:[r.jsxs("nav",{className:"container-max flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16",children:[r.jsxs(O,{to:"/",className:"group flex items-center gap-2 font-display text-lg font-extrabold text-deepsea","aria-label":"HopeCloud Home",children:[r.jsx("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl\r
            bg-deepsea text-white shadow-soft\r
            transition-all duration-300\r
            group-hover:scale-110\r
            group-hover:rotate-3\r
            group-hover:shadow-glow`,children:r.jsx(_e,{className:"h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5"})}),r.jsx("span",{className:"transition-colors duration-300 group-hover:text-sky-600",children:"HopeCloud"})]}),r.jsx("ul",{className:"hidden items-center gap-1 lg:flex",children:Ic.map(u=>r.jsx("li",{children:r.jsxs("a",{href:u.href,className:`group relative rounded-full px-4 py-2.5\r
                font-display text-sm font-semibold text-deepsea\r
                transition-all duration-300\r
                hover:bg-sky-50\r
                hover:text-sky-600`,children:[u.label,r.jsx("span",{className:`absolute bottom-1.5 left-1/2 h-0.5 w-0\r
                  -translate-x-1/2 rounded-full bg-sky-500\r
                  transition-all duration-300\r
                  group-hover:w-5`})]})},u.href))}),r.jsx("div",{className:"hidden items-center gap-2 lg:flex",children:l?r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:"px-4 py-2.5 font-display text-sm font-semibold text-deepsea",children:["Welcome, ",l.name]}),r.jsxs("button",{type:"button",onClick:o,className:`inline-flex items-center gap-2\r
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
        hover:-translate-y-0.5`,children:[r.jsx(Mc,{className:"h-4 w-4"}),"Sign In"]}),r.jsxs(O,{to:"/register",className:`group inline-flex items-center gap-2\r
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
          lg:hidden`,"aria-label":n?"Close navigation menu":"Open navigation menu","aria-expanded":n,onClick:()=>s(u=>!u),children:n?r.jsx(Sl,{className:"h-6 w-6"}):r.jsx(a0,{className:"h-6 w-6"})})]}),n&&r.jsxs("div",{className:`border-t border-cloudline bg-white/95\r
          px-6 pb-6 pt-4 shadow-card\r
          backdrop-blur-xl\r
          animate-fadeUp\r
          lg:hidden`,children:[r.jsx("ul",{className:"flex flex-col gap-1",children:Ic.map(u=>r.jsx("li",{children:r.jsx("a",{href:u.href,onClick:c,className:`block rounded-xl px-4 py-3\r
                  font-display text-sm font-semibold text-deepsea\r
                  transition-all duration-300\r
                  hover:bg-sky-50\r
                  hover:text-sky-600\r
                  hover:translate-x-1`,children:u.label})},u.href))}),r.jsx("div",{className:"my-4 h-px bg-cloudline"}),r.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[r.jsxs(O,{to:"/login",onClick:i,className:`inline-flex items-center justify-center gap-2\r
              rounded-xl border border-deepsea/15\r
              bg-white px-4 py-3\r
              font-display text-sm font-semibold text-deepsea\r
              transition-all duration-300\r
              hover:border-sky-400\r
              hover:bg-sky-50\r
              hover:text-sky-600`,children:[r.jsx(Mc,{className:"h-4 w-4"}),"Sign In"]}),r.jsxs(O,{to:"/register",onClick:i,className:`inline-flex items-center justify-center gap-2\r
              rounded-xl bg-deepsea\r
              px-4 py-3\r
              font-display text-sm font-semibold text-white\r
              shadow-soft\r
              transition-all duration-300\r
              hover:bg-sky-600\r
              hover:shadow-glow\r
              active:scale-[0.98]`,children:[r.jsx(Ir,{className:"h-4 w-4"}),"Join Us"]})]})]})]})}const zc=[{icon:Br,label:"Books",x:22,y:20,tone:"bg-sky-500"},{icon:Vr,label:"Clothes",x:80,y:16,tone:"bg-meadow-500"},{icon:ue,label:"Kids Essentials",x:90,y:58,tone:"bg-deepsea"},{icon:Ux,label:"School Supplies",x:58,y:90,tone:"bg-sky-600"},{icon:F,label:"Other Donations",x:12,y:68,tone:"bg-amber-500"}];function N0({className:e=""}){return r.jsxs("div",{className:`relative aspect-square w-full max-w-md mx-auto ${e}`,"aria-hidden":"true",children:[r.jsx("div",{className:"absolute inset-[8%] rounded-full bg-gradient-to-br from-white via-sky-50 to-sky-100 blur-0 shadow-soft"}),r.jsx("div",{className:"absolute left-[2%] top-[22%] h-[46%] w-[46%] rounded-full bg-white/80 blur-xl"}),r.jsx("div",{className:"absolute right-[6%] top-[8%] h-[38%] w-[38%] rounded-full bg-sky-100/90 blur-xl"}),r.jsx("div",{className:"absolute bottom-[6%] left-[20%] h-[40%] w-[52%] rounded-full bg-meadow-400/20 blur-2xl"}),r.jsx("svg",{viewBox:"0 0 100 100",className:"absolute inset-0 h-full w-full",children:zc.map((t,n)=>r.jsx("line",{x1:"50",y1:"50",x2:t.x,y2:t.y,stroke:"#0B3D91",strokeOpacity:"0.25",strokeWidth:"0.6",strokeDasharray:"2 3",className:"animate-dashMove"},n))}),r.jsx("div",{className:`\r
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
  `,children:r.jsx(F,{className:"h-9 w-9 fill-red-500 text-red-500 animate-pulseNode"})}),zc.map((t,n)=>{const s=t.icon;return r.jsxs("div",{className:`\r
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
              `,children:t.label})]},t.label)})]})}function Sm(e=.2){const t=x.useRef(null),[n,s]=x.useState(!1);return x.useEffect(()=>{const l=t.current;if(!l)return;if(typeof IntersectionObserver>"u"){s(!0);return}const a=new IntersectionObserver(o=>{o.forEach(i=>{i.isIntersecting&&(s(!0),a.unobserve(i.target))})},{threshold:e});return a.observe(l),()=>a.disconnect()},[e]),[t,n]}function xe({as:e="div",delay:t=0,className:n="",children:s}){const[l,a]=Sm();return r.jsx(e,{ref:l,className:`reveal ${a?"is-visible":""} ${n}`,style:{transitionDelay:a?`${t}ms`:"0ms"},children:s})}function b0(){const e=mi(),t=()=>{e("Please create an account or log in to start your donation.","info")};return r.jsxs("section",{id:"home",className:"relative overflow-hidden bg-mist pt-32 sm:pt-40",children:[r.jsx("div",{className:`\r
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
        `}),r.jsx(_e,{className:`\r
          pointer-events-none\r
          absolute\r
          left-[5%]\r
          top-[22%]\r
          h-14\r
          w-14\r
          text-sky-200/70\r
        `,strokeWidth:1.2}),r.jsx(_e,{className:`\r
          pointer-events-none\r
          absolute\r
          right-[7%]\r
          top-[16%]\r
          h-20\r
          w-20\r
          text-white/90\r
        `,strokeWidth:1}),r.jsx(_e,{className:`\r
          pointer-events-none\r
          absolute\r
          bottom-[12%]\r
          left-[7%]\r
          h-10\r
          w-10\r
          text-sky-200/50\r
        `,strokeWidth:1}),r.jsx(pe,{className:`\r
          pointer-events-none\r
          absolute\r
          left-[16%]\r
          top-[18%]\r
          h-5\r
          w-5\r
          text-sky-400/60\r
        `,strokeWidth:1.5}),r.jsx(pe,{className:`\r
          pointer-events-none\r
          absolute\r
          right-[20%]\r
          top-[27%]\r
          h-4\r
          w-4\r
          text-amber-500/60\r
        `,strokeWidth:1.5}),r.jsx(pe,{className:`\r
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
        `,children:[r.jsxs(xe,{children:[r.jsxs("div",{className:"mb-6 flex items-center gap-2",children:[r.jsx("span",{className:`\r
                flex\r
                h-8\r
                w-8\r
                items-center\r
                justify-center\r
                rounded-full\r
                bg-sky-100\r
              `,children:r.jsx(F,{className:"h-4 w-4 fill-sky-500 text-sky-500"})}),r.jsx("span",{className:"eyebrow",children:"Give a little. Change a lot."})]}),r.jsx("h1",{className:`\r
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
            `,children:"Donate clothes, books, toys, school supplies, and other useful items to people and children who need them. Whether new or gently used, your donation can make a meaningful difference."}),r.jsxs("div",{className:"mt-9 flex flex-wrap items-center gap-4",children:[r.jsxs("button",{onClick:t,className:"btn-primary group",children:[r.jsx(ue,{className:`\r
                  h-4\r
                  w-4\r
                  transition-transform\r
                  duration-300\r
                  group-hover:scale-110\r
                `}),"Donate Now",r.jsx(Ot,{className:`\r
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
            `,children:[r.jsx(sn,{className:"h-4 w-4 text-meadow-600"}),r.jsx("span",{children:"Every useful item can have a second life."})]})]}),r.jsx(xe,{delay:150,children:r.jsxs("div",{className:"relative",children:[r.jsx(pe,{className:`\r
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
        `,children:[r.jsx("span",{children:"👕 Clothes"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"📚 Books"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"🎁 Kids Essentials"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"🎒 School Supplies"}),r.jsx("span",{className:"text-cloudline",children:"•"}),r.jsx("span",{children:"✨ More"})]})]})}function S0(e,t,n=1600){const[s,l]=x.useState(0);return x.useEffect(()=>{if(!t)return;let a;const o=performance.now(),i=c=>{const u=Math.min((c-o)/n,1),m=1-Math.pow(1-u,3);l(Math.floor(m*e)),u<1&&(a=requestAnimationFrame(i))};return a=requestAnimationFrame(i),()=>cancelAnimationFrame(a)},[t,e,n]),s}const C0=[{id:"people",label:"People Helped",value:24,suffix:"+"},{id:"families",label:"Families Supported",value:12,suffix:"+"},{id:"meals",label:"Meals Provided",value:85,suffix:"+"},{id:"education",label:"Education Opportunities",value:18,suffix:"+"},{id:"communities",label:"Communities Reached",value:6,suffix:""}],E0=[{id:1,title:"A New Opportunity to Learn",quote:"With school supplies and a mobile classroom nearby, Amara started her first year of school at nine years old — and hasn’t missed a day since.",name:"Amara, 9",tag:"Education"},{id:2,title:"From Support to Self-Reliance",quote:"A small business grant and mentorship helped Farhan turn his repair skills into a shop of his own, now employing two neighbors.",name:"Farhan, 34",tag:"Skills & Employment"},{id:3,title:"A Community Coming Together",quote:"When the well ran dry, HopeCloud volunteers and local families rebuilt it together — now the whole village shares clean water again.",name:"Village of Rasheed Nagar",tag:"Clean Water"}],P0=[{id:"volunteer",icon:"HeartHandshake",title:"Volunteer",description:"Give your time on the ground or remotely."},{id:"donate",icon:"Gift",title:"Donate",description:"Fund a cause or campaign you believe in."},{id:"mentor",icon:"Lightbulb",title:"Mentor",description:"Share your skills and guide someone forward."},{id:"resources",icon:"PackagePlus",title:"Provide Resources",description:"Contribute goods, tools, or services."},{id:"drive",icon:"Megaphone",title:"Organize a Community Drive",description:"Rally your community around a cause."}],R0=[{label:"About",href:"#about"},{label:"Causes",href:"#causes"},{label:"Impact",href:"#impact"},{label:"How It Works",href:"#how-it-works"},{label:"Volunteer",href:"#volunteer"},{label:"Contact",href:"#contact"},{label:"Privacy Policy",href:"#privacy"},{label:"Terms",href:"#terms"}];function L0({stat:e,active:t,delay:n}){const s=S0(e.value,t,1800);return r.jsxs("div",{className:`rounded-2xl border border-cloudline bg-white/70 p-6 text-center shadow-card transition-all duration-700 ease-out ${t?"translate-y-0 opacity-100":"translate-y-4 opacity-0"}`,style:{transitionDelay:`${n}ms`},children:[r.jsxs("p",{className:"font-display text-3xl font-extrabold text-deepsea sm:text-4xl",children:[s.toLocaleString(),e.suffix]}),r.jsx("p",{className:"mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-muted",children:e.label})]})}function M0(){const[e,t]=Sm(.3);return r.jsx("section",{id:"impact",ref:e,className:"section-pad bg-white/60",children:r.jsxs("div",{className:"container-max",children:[r.jsxs("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:[r.jsx("span",{className:"eyebrow justify-center",children:"Real-time impact"}),r.jsx("h2",{className:"mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Numbers that mean people"}),r.jsx("p",{className:"mt-3 text-slate-muted",children:"Every figure below represents a person, a family, or a community HopeCloud has helped reach."})]}),r.jsx("div",{className:"grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5",children:C0.map((n,s)=>r.jsx(L0,{stat:n,active:t,delay:s*90},n.id))})]})})}const Tc=[{id:"01",icon:wm,title:"Find Something to Give",description:"Choose something you no longer need — such as books, clothes, food, or useful household items."},{id:"02",icon:ue,title:"Share Your Donation",description:"Tell us what you want to donate, add a photo and a few details, then submit your donation."},{id:"03",icon:pe,title:"We Find the Right Match",description:"HopeCloud helps connect your donation with a verified need where it can make the most difference."},{id:"04",icon:rn,title:"Your Gift Reaches Someone",description:"Your donated item is delivered to a person, family, or community that genuinely needs it."},{id:"05",icon:Bx,title:"See the Difference",description:"Track your donation, see its status, and discover the real impact your contribution has created."}];function _0(){return r.jsxs("section",{id:"how-it-works",className:"relative overflow-hidden bg-white section-pad",children:[r.jsx("div",{className:`\r
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
        `}),r.jsxs("div",{className:"container-max relative z-10",children:[r.jsx("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:r.jsxs(xe,{children:[r.jsx("span",{className:"eyebrow justify-center",children:"How it works"}),r.jsxs("h2",{className:`\r
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
            `,"aria-hidden":"true"}),r.jsx("div",{className:"grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5",children:Tc.map((e,t)=>{const n=e.icon;return r.jsx(xe,{delay:t*120,className:"relative",children:r.jsxs("div",{className:"group relative flex h-full flex-col",children:[r.jsxs("div",{className:"relative z-10 flex items-center justify-between lg:block",children:[r.jsx("div",{className:`\r
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
                        `,children:e.description})]}),t<Tc.length-1&&r.jsx("div",{className:`\r
                          absolute\r
                          bottom-[-32px]\r
                          left-10\r
                          hidden\r
                          h-8\r
                          w-px\r
                          bg-cloudline\r
                          sm:block\r
                          lg:hidden\r
                        `,"aria-hidden":"true"})]})},e.id)})})]}),r.jsx(xe,{delay:650,children:r.jsxs("div",{className:`\r
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
                `,children:r.jsx(rn,{className:"h-5 w-5"})}),r.jsx("p",{className:"text-sm font-semibold text-ink",children:"One simple donation can become someone's new beginning."})]}),r.jsx("a",{href:"/donate",className:`\r
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
              `,children:"Start Giving"})]})})]})]})}const D0={GraduationCap:Jx,Soup:f0,Home:Xx,Stethoscope:h0,Droplets:Kx,Briefcase:Wx},Ac={sky:{bg:"bg-sky-50",text:"text-sky-600",bar:"bg-sky-500"},meadow:{bg:"bg-meadow-400/10",text:"text-meadow-600",bar:"bg-meadow-500"},deepsea:{bg:"bg-deepsea/5",text:"text-deepsea",bar:"bg-deepsea"}};function I0({cause:e}){const t=D0[e.icon]||ue,n=Ac[e.accent]||Ac.sky,s=e.raised??0,l=e.goal??1e3,a=Math.min(100,Math.round(s/l*100)),o=mi();return r.jsxs("div",{className:"group flex flex-col rounded-2xl border border-cloudline bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-soft",children:[r.jsx("div",{className:`flex h-12 w-12 items-center justify-center rounded-xl ${n.bg} ${n.text}`,children:r.jsx(t,{className:"h-6 w-6"})}),r.jsx("h3",{className:"mt-5 font-display text-lg font-bold text-ink",children:e.title}),r.jsx("p",{className:"mt-2 flex-1 text-sm leading-relaxed text-slate-muted",children:e.description}),r.jsxs("div",{className:"mt-6",children:[r.jsx("div",{className:"h-2 w-full overflow-hidden rounded-full bg-cloudline",children:r.jsx("div",{className:`h-full rounded-full ${n.bar}`,style:{width:`${a}%`}})}),r.jsxs("div",{className:"mt-2 flex items-center justify-between font-mono text-[11px] text-slate-muted",children:[r.jsxs("span",{children:["$",s.toLocaleString()," raised"]}),r.jsxs("span",{children:[a,"% of $",l.toLocaleString()]})]})]}),r.jsxs("button",{onClick:()=>o("Please create an account first to support this cause."),className:`\r
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
        `}),r.jsxs("div",{className:"container-max relative z-10",children:[r.jsx("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:r.jsxs(xe,{children:[r.jsx("span",{className:"eyebrow justify-center",children:"What you can give"}),r.jsxs("h2",{className:`\r
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
              `,children:"Have something useful that you no longer need? Your everyday items can find a new home and become something meaningful for someone else."})]})}),r.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:z0.map((e,t)=>r.jsx(xe,{delay:t%3*120,children:r.jsx(I0,{cause:e})},e.id))}),r.jsx(xe,{delay:500,children:r.jsxs("div",{className:`\r
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
            `,children:[r.jsx("p",{className:"text-sm font-semibold text-ink",children:"Not sure if your item is suitable?"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Don't worry. Add a photo and a few details when you submit your donation, and HopeCloud can help determine where it can create the most value."})]})})]})]})}const Oc=["Your Donation","AI Understands It","Finds a Matching Need","Reaches the Right Person"],A0=[{icon:ke,title:"Books",text:"Matches educational books with students or learning centers that need them."},{icon:rn,title:"Clothes",text:"Connects clean, usable clothing with verified families who need it."},{icon:pe,title:"Toys & Gifts",text:"Helps meaningful gifts and toys reach children who can benefit from them."},{icon:d0,title:"School Supplies",text:"Finds students and community programs looking for stationery and school essentials."},{icon:ln,title:"Verified Needs",text:"Prioritizes genuine, verified requests so your donation can create real impact."}];function O0(){return r.jsxs("section",{className:"relative overflow-hidden bg-deepsea py-20 sm:py-24",children:[r.jsx("div",{className:"pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-meadow-500/10 blur-3xl"}),r.jsxs("div",{className:"container-max relative z-10",children:[r.jsxs(xe,{className:"mx-auto max-w-3xl text-center",children:[r.jsxs("span",{className:`\r
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
            `,children:[r.jsx(pe,{className:"h-3 w-3"}),"Smart Matching"]}),r.jsxs("h2",{className:`\r
              mt-5\r
              font-display\r
              text-3xl\r
              font-extrabold\r
              leading-tight\r
              text-white\r
              sm:text-4xl\r
              lg:text-5xl\r
            `,children:["Your Donation.",r.jsx("span",{className:"block text-sky-300",children:"Matched With The Right Need."})]}),r.jsx("p",{className:"mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-sky-50/75 sm:text-base",children:"HopeCloud uses AI to understand what you donate and help match it with verified needs in the community — so useful things reach people who can genuinely benefit from them."})]}),r.jsx(xe,{delay:120,className:"mt-14",children:r.jsx("div",{className:"mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 md:flex-row md:gap-2",children:Oc.map((e,t)=>r.jsxs("div",{className:"flex w-full items-center justify-center md:w-auto",children:[r.jsx("div",{className:`\r
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
                  `,children:r.jsxs("div",{children:[r.jsxs("span",{className:"font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-sky-300",children:["Step ",t+1]}),r.jsx("p",{className:"mt-1 font-display text-sm font-bold text-white",children:e})]})}),t<Oc.length-1&&r.jsx(Ot,{className:"mx-2 hidden h-4 w-4 shrink-0 text-sky-300 md:block"})]},e))})}),r.jsx("div",{className:"mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3",children:A0.map((e,t)=>{const n=e.icon;return r.jsx(xe,{delay:t*90,children:r.jsxs("div",{className:`\r
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
            `,children:r.jsx(n,{className:"h-5 w-5"})}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("h3",{className:"font-display text-sm font-bold text-white",children:e.title}),r.jsx("p",{className:"mt-1.5 text-xs leading-relaxed text-sky-50/65",children:e.text})]})]})},e.title)})}),r.jsx(xe,{delay:250,children:r.jsxs("div",{className:`\r
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
            `,children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300",children:r.jsx(zt,{className:"h-4 w-4"})}),r.jsxs("p",{className:"text-xs leading-relaxed text-sky-50/70",children:["Instead of wondering where your donation will go, HopeCloud helps create a clear connection between"," ",r.jsx("span",{className:"font-semibold text-white",children:"what you have"})," ","and"," ",r.jsx("span",{className:"font-semibold text-white",children:"who needs it."})]})]})})]})]})}function $0(){return r.jsx("section",{className:"section-pad bg-white/60",children:r.jsxs("div",{className:"container-max",children:[r.jsxs("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:[r.jsx("span",{className:"eyebrow justify-center",children:"Stories of hope"}),r.jsx("h2",{className:"mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Real change, told simply"})]}),r.jsx("div",{className:"grid gap-6 lg:grid-cols-3",children:E0.map((e,t)=>r.jsx(xe,{delay:t*120,children:r.jsxs("div",{className:"flex h-full flex-col rounded-2xl border border-cloudline bg-white p-7 shadow-card",children:[r.jsx(u0,{className:"h-6 w-6 text-sky-400"}),r.jsx("h3",{className:"mt-4 font-display text-lg font-bold text-ink",children:e.title}),r.jsxs("p",{className:"mt-3 flex-1 text-sm leading-relaxed text-slate-muted",children:["“",e.quote,"”"]}),r.jsxs("div",{className:"mt-6 flex items-center justify-between border-t border-cloudline pt-4",children:[r.jsx("span",{className:"text-sm font-semibold text-ink",children:e.name}),r.jsx("span",{className:"rounded-full bg-sky-50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-sky-600",children:e.tag})]})]})},e.id))})]})})}const F0={HeartHandshake:rn,Gift:ue,Lightbulb:r0,PackagePlus:i0,Megaphone:l0};function H0(){const[e,t]=x.useState(""),[n,s]=x.useState(""),l=mi(),a=o=>{if(o.preventDefault(),!e.trim()){s("Enter your email to join the community.");return}if(!/^\S+@\S+\.\S+$/.test(e)){s("That email doesn’t look quite right.");return}s(""),l("Welcome to HopeCloud! Check your inbox for next steps."),t("")};return r.jsx("section",{id:"volunteer",className:"section-pad",children:r.jsxs("div",{className:"container-max",children:[r.jsxs("div",{className:"mx-auto mb-14 max-w-2xl text-center",children:[r.jsx("span",{className:"eyebrow justify-center",children:"Get involved"}),r.jsx("h2",{className:"mt-4 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"You Don't Have to Donate Money to Make a Difference."})]}),r.jsx("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-5",children:P0.map((o,i)=>{const c=F0[o.icon];return r.jsx(xe,{delay:i*90,children:r.jsxs("div",{className:"flex h-full flex-col items-start gap-3 rounded-2xl border border-cloudline bg-white p-6 text-left shadow-card transition-transform hover:-translate-y-1",children:[r.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-meadow-400/15 text-meadow-600",children:r.jsx(c,{className:"h-5 w-5"})}),r.jsx("h3",{className:"font-display text-base font-bold text-ink",children:o.title}),r.jsx("p",{className:"text-sm text-slate-muted",children:o.description})]})},o.id)})}),r.jsxs(xe,{delay:200,className:"mx-auto mt-14 max-w-xl rounded-3xl border border-cloudline bg-white p-8 text-center shadow-card",children:[r.jsx("h3",{className:"font-display text-xl font-bold text-ink",children:"Join the HopeCloud Community"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Get updates on causes, volunteer openings, and impact reports."}),r.jsxs("form",{onSubmit:a,noValidate:!0,className:"mt-6 flex flex-col gap-3 sm:flex-row",children:[r.jsxs("div",{className:"flex-1 text-left",children:[r.jsx("label",{htmlFor:"volunteer-email",className:"sr-only",children:"Email address"}),r.jsx("input",{id:"volunteer-email",type:"email",value:e,onChange:o=>t(o.target.value),placeholder:"you@example.com","aria-invalid":!!n,"aria-describedby":n?"volunteer-email-error":void 0,className:`w-full rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-sky-400 ${n?"border-amber-500":"border-cloudline"}`}),n&&r.jsx("p",{id:"volunteer-email-error",className:"mt-2 text-xs text-amber-600",children:n})]}),r.jsxs("button",{type:"submit",className:"btn-primary shrink-0",children:["Join Now ",r.jsx(m0,{className:"h-4 w-4"})]})]})]})]})})}const U0=[{icon:x0,label:"Twitter"},{icon:n0,label:"Instagram"},{icon:qx,label:"Facebook"},{icon:s0,label:"LinkedIn"}];function B0(){const e=ot(),t=()=>{e("/register",{state:{message:"Please create an account first to donate an item."}})};return r.jsx("footer",{id:"about",className:"bg-deepsea text-white",children:r.jsxs("div",{className:"container-max px-6 py-14 sm:px-10 lg:px-16",children:[r.jsxs("div",{className:"grid gap-12 lg:grid-cols-[1.4fr_2fr]",children:[r.jsxs("div",{className:"max-w-sm",children:[r.jsxs("a",{href:"#home",className:"inline-flex items-center gap-2 font-display text-xl font-extrabold",children:[r.jsx("span",{className:`\r
                  flex\r
                  h-10\r
                  w-10\r
                  items-center\r
                  justify-center\r
                  rounded-xl\r
                  bg-white/10\r
                  ring-1\r
                  ring-white/10\r
                `,children:r.jsx(_e,{className:"h-5 w-5 text-sky-300"})}),r.jsx("span",{children:"HopeCloud"})]}),r.jsx("p",{className:"mt-4 max-w-xs text-sm leading-relaxed text-sky-50/65",children:"Technology for humanity. Hope for everyone. Making it easier for useful things to reach people who need them."}),r.jsx("div",{className:"mt-6 flex items-center gap-2",children:U0.map(({icon:n,label:s})=>r.jsx("a",{href:"#","aria-label":s,className:`\r
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
  `,children:[r.jsx(ue,{className:"h-4 w-4"}),"Donate an Item"]})]})]})]}),r.jsx("div",{className:"mt-12 border-t border-white/10"}),r.jsxs("div",{className:"flex flex-col gap-3 pt-6 text-xs text-sky-50/45 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("p",{children:["© ",new Date().getFullYear()," HopeCloud. All rights reserved."]}),r.jsxs("p",{className:"inline-flex items-center gap-1",children:["Built with",r.jsx(F,{className:"h-3 w-3 fill-current text-sky-300"}),"for a more giving world."]})]})]})})}const V0="/assets/about-bg-C0mx47-o.jpg";function W0(){return r.jsxs("section",{id:"about",className:`\r
        relative\r
        overflow-hidden\r
        py-20\r
        sm:py-24\r
      `,children:[r.jsx("div",{className:`\r
    absolute\r
    inset-0\r
    bg-cover\r
    bg-center\r
  `,style:{backgroundImage:`url(${V0})`}}),r.jsx("div",{className:"absolute inset-0 bg-deepsea/45"}),r.jsx("div",{className:"container-max relative z-10",children:r.jsxs(xe,{className:"mx-auto max-w-3xl text-center",children:[r.jsxs("span",{className:`\r
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
            `,children:[r.jsx(pe,{className:"h-3 w-3"}),"About HopeCloud"]}),r.jsxs("h2",{className:`\r
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
              `,children:[r.jsx(F,{className:"h-4 w-4 fill-current text-sky-300"}),"Give what you can. Help where it matters."]})})]})})]})}function Y0(){const e=ot(),[t,n]=x.useState({email:"",password:""}),[s,l]=x.useState({}),[a,o]=x.useState(!1),[i,c]=x.useState(!1),[u,m]=x.useState(!1),[h,g]=x.useState(!1),v=y=>{const{name:f,value:d}=y.target;n(p=>({...p,[f]:d})),s[f]&&l(p=>({...p,[f]:""}))},j=()=>{const y={},f=t.email.trim(),d=t.password;return f?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f)||(y.email="Please enter a valid email address."):y.email="Please enter your email address.",d?d.length<8&&(y.password="Password must be at least 8 characters."):y.password="Please enter your password.",y},w=async y=>{y.preventDefault();const f=j();if(Object.keys(f).length>0){l(f);return}l({}),m(!0);try{const d=await fetch(Qn("/login"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({email:t.email.trim(),password:t.password})}),p=await d.json();if(!d.ok){if(p.errors){const k={};p.errors.email&&(k.email=p.errors.email[0]),p.errors.password&&(k.password=p.errors.password[0]),l(k)}else l({email:p.message||"Login failed. Please try again."});return}localStorage.setItem("token",p.token),localStorage.setItem("user",JSON.stringify(p.user)),g(!0),setTimeout(()=>{e("/")},1800)}catch(d){console.error("Login error:",d),l({email:"Unable to connect to the server. Please try again."})}finally{m(!1)}};return r.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-mist",children:[r.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:`absolute -left-32 -top-32 h-80 w-80\r
          rounded-full bg-sky-100/70 blur-3xl\r
          animate-driftSlow`}),r.jsx("div",{className:`absolute -bottom-40 -right-32 h-96 w-96\r
          rounded-full bg-sky-100/80 blur-3xl\r
          animate-drift`}),r.jsx("div",{className:`absolute left-1/3 top-1/4 h-40 w-40\r
          rounded-full bg-white/80 blur-3xl`}),r.jsx(_e,{className:`absolute left-[7%] top-[18%]\r
          h-12 w-12 text-sky-200/70\r
          animate-drift`}),r.jsx(_e,{className:`absolute right-[8%] top-[14%]\r
          h-16 w-16 text-sky-200/60\r
          animate-driftSlow`}),r.jsx(_e,{className:`absolute bottom-[12%] left-[12%]\r
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
              group-hover:shadow-glow`,children:r.jsx(Xe,{className:"h-4 w-4"})}),"Back to Home"]})})}),r.jsx("main",{className:`relative z-10 flex min-h-[calc(100vh-80px)]\r
        items-center justify-center px-6 pb-12 pt-4\r
        sm:px-10 lg:px-16`,children:r.jsx("div",{className:"container-max w-full",children:r.jsxs("div",{className:"grid items-center gap-12 lg:grid-cols-2 lg:gap-20",children:[r.jsx("section",{className:"hidden lg:block",children:r.jsxs("div",{className:"max-w-xl",children:[r.jsxs("div",{className:"eyebrow",children:[r.jsx(F,{className:"h-3.5 w-3.5 fill-sky-500 text-sky-500"}),"Welcome to HopeCloud"]}),r.jsxs("h1",{className:`mt-5 text-5xl font-bold leading-[1.08]\r
                  text-deepsea xl:text-6xl`,children:["Welcome back.",r.jsx("span",{className:"mt-2 block text-sky-500",children:"Let's spread hope."})]}),r.jsx("p",{className:"mt-6 max-w-lg text-lg leading-8 text-slate-muted",children:"Sign in to continue your journey of giving. Together, small acts of kindness can make a meaningful difference."}),r.jsxs("div",{className:"relative mt-12 h-44",children:[r.jsx("div",{className:`absolute left-12 top-2 flex h-32 w-32\r
                    items-center justify-center rounded-full\r
                    bg-white/80 shadow-soft backdrop-blur-xl\r
                    animate-drift`,children:r.jsx("div",{className:`flex h-20 w-20 items-center justify-center\r
                      rounded-full bg-sky-50`,children:r.jsx(F,{className:"h-10 w-10 fill-sky-500 text-sky-500"})})}),r.jsx("div",{className:`absolute left-40 top-12 flex h-16 w-16\r
                    items-center justify-center rounded-2xl\r
                    bg-white shadow-card\r
                    animate-driftSlow`,children:"👕"}),r.jsx("div",{className:`absolute left-64 top-2 flex h-16 w-16\r
                    items-center justify-center rounded-2xl\r
                    bg-white shadow-card\r
                    animate-drift`,children:"📚"}),r.jsx("div",{className:`absolute left-72 top-24 flex h-16 w-16\r
                    items-center justify-center rounded-2xl\r
                    bg-white shadow-card\r
                    animate-driftSlow`,children:"🧸"})]}),r.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-6 gap-y-3",children:[r.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-muted",children:[r.jsx(sn,{className:"h-4 w-4 text-meadow-500"}),"Secure experience"]}),r.jsxs("div",{className:"flex items-center gap-2 text-sm text-slate-muted",children:[r.jsx(F,{className:"h-4 w-4 fill-sky-500 text-sky-500"}),"Give with purpose"]})]})]})}),r.jsx("section",{className:"w-full",children:r.jsxs("div",{className:`mx-auto w-full max-w-md\r
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
                      group-hover:scale-105 group-hover:shadow-glow`,children:r.jsx(_e,{className:"h-5 w-5"})}),"HopeCloud"]})}),r.jsxs("div",{className:"mb-7 text-center lg:text-left",children:[r.jsx("h2",{className:"font-display text-3xl font-bold text-deepsea",children:"Sign in"}),r.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-muted",children:"Welcome back! Enter your details to continue."})]}),h?r.jsxs("div",{className:`flex flex-col items-center py-10 text-center\r
                    animate-fadeUp`,children:[r.jsx("div",{className:`flex h-20 w-20 items-center justify-center\r
                      rounded-full bg-meadow/10`,children:r.jsx(ee,{className:"h-12 w-12 text-meadow-600"})}),r.jsx("h3",{className:"mt-6 text-2xl font-bold text-deepsea",children:"Welcome back!"}),r.jsx("p",{className:"mt-2 max-w-xs text-sm leading-6 text-slate-muted",children:"You have signed in successfully. Taking you to HopeCloud..."})]}):r.jsxs("form",{onSubmit:w,noValidate:!0,className:"space-y-5",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"login-email",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Email address"}),r.jsxs("div",{className:"relative",children:[r.jsx(Yn,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"login-email",name:"email",type:"email",value:t.email,onChange:v,placeholder:"you@example.com",autoComplete:"email","aria-invalid":!!s.email,"aria-describedby":s.email?"login-email-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.email?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`})]}),s.email&&r.jsx("p",{id:"login-email-error",className:"mt-2 text-xs font-medium text-red-500",children:s.email})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"login-password",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(no,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"login-password",name:"password",type:a?"text":"password",value:t.password,onChange:v,placeholder:"Enter your password",autoComplete:"current-password","aria-invalid":!!s.password,"aria-describedby":s.password?"login-password-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.password?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`}),r.jsx("button",{type:"button",onClick:()=>o(y=>!y),className:`absolute right-3 top-1/2\r
                          flex h-9 w-9 -translate-y-1/2\r
                          items-center justify-center rounded-xl\r
                          text-slate-400\r
                          transition-all duration-300\r
                          hover:bg-sky-50 hover:text-sky-600`,"aria-label":a?"Hide password":"Show password",children:a?r.jsx(eo,{className:"h-4.5 w-4.5"}):r.jsx(to,{className:"h-4.5 w-4.5"})})]}),s.password&&r.jsx("p",{id:"login-password-error",className:"mt-2 text-xs font-medium text-red-500",children:s.password})]}),r.jsxs("div",{className:"flex items-center justify-between gap-4",children:[r.jsxs("label",{htmlFor:"remember-me",className:`flex cursor-pointer items-center gap-2\r
                        text-xs font-medium text-slate-muted`,children:[r.jsx("input",{id:"remember-me",type:"checkbox",checked:i,onChange:y=>c(y.target.checked),className:"h-4 w-4 rounded accent-sky-500"}),"Remember me"]}),r.jsx("button",{type:"button",className:`text-xs font-semibold text-sky-600\r
                        transition-colors duration-300\r
                        hover:text-deepsea`,children:"Forgot password?"})]}),r.jsx("button",{type:"submit",disabled:u,className:`group flex w-full items-center\r
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
                      disabled:hover:translate-y-0`,children:u?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`h-4 w-4 animate-spin rounded-full\r
                            border-2 border-white/30 border-t-white`}),"Signing in..."]}):r.jsxs(r.Fragment,{children:["Sign in",r.jsx(Xe,{className:`h-4 w-4 rotate-180\r
                            transition-transform duration-300\r
                            group-hover:translate-x-1`})]})}),r.jsx("div",{className:"pt-2 text-center",children:r.jsxs("p",{className:"text-sm text-slate-muted",children:["Don't have an account?"," ",r.jsx(O,{to:"/register",className:`font-bold text-sky-600\r
                          transition-colors duration-300\r
                          hover:text-deepsea`,children:"Join HopeCloud"})]})})]})]})})]})})})]})}function Q0(){const e=ot(),[t,n]=x.useState({name:"",email:"",password:"",confirmPassword:""}),[s,l]=x.useState({}),[a,o]=x.useState(!1),[i,c]=x.useState(!1),[u,m]=x.useState(!1),[h,g]=x.useState(!1),[v,j]=x.useState(!1),w=N=>{const{name:C,value:E}=N.target;n(M=>({...M,[C]:E})),s[C]&&l(M=>({...M,[C]:""})),C==="password"&&s.confirmPassword&&E===t.confirmPassword&&l(M=>({...M,confirmPassword:""})),C==="confirmPassword"&&s.confirmPassword&&E===t.password&&l(M=>({...M,confirmPassword:""}))},y=x.useMemo(()=>({length:t.password.length>=8,uppercase:/[A-Z]/.test(t.password),number:/\d/.test(t.password),special:/[^A-Za-z0-9]/.test(t.password)}),[t.password]),f=Object.values(y).filter(Boolean).length,d=x.useMemo(()=>t.password?f<=1?{label:"Weak",width:"25%"}:f===2?{label:"Fair",width:"50%"}:f===3?{label:"Good",width:"75%"}:{label:"Strong",width:"100%"}:{label:"",width:"0%"},[t.password,f]),p=()=>{const N={},C=t.name.trim(),E=t.email.trim(),M=t.password,_=t.confirmPassword;return C?C.length<2&&(N.name="Name must be at least 2 characters."):N.name="Please enter your full name.",E?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E)||(N.email="Please enter a valid email address."):N.email="Please enter your email address.",M?f<3&&(N.password="Please choose a stronger password using the requirements below."):N.password="Please create a password.",_?M!==_&&(N.confirmPassword="Passwords do not match."):N.confirmPassword="Please confirm your password.",u||(N.terms="Please accept the Terms & Conditions to continue."),N},k=async N=>{N.preventDefault();const C=p();if(Object.keys(C).length>0){l(C);return}l({}),g(!0);try{const E=await fetch(Qn("/register"),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.name.trim(),email:t.email.trim(),password:t.password,password_confirmation:t.confirmPassword})}),M=await E.json();if(!E.ok){if(M.errors){const _={};M.errors.name&&(_.name=M.errors.name[0]),M.errors.email&&(_.email=M.errors.email[0]),M.errors.password&&(_.password=M.errors.password[0]),l(_)}else l({email:M.message||"Registration failed. Please try again."});return}localStorage.setItem("token",M.token),localStorage.setItem("user",JSON.stringify(M.user)),j(!0)}catch(E){console.error("Registration error:",E),l({email:"Unable to connect to the server. Please try again."})}finally{g(!1)}},S=()=>{e("/login")};return r.jsxs("div",{className:"relative min-h-screen overflow-hidden bg-mist",children:[r.jsxs("div",{className:"pointer-events-none absolute inset-0 overflow-hidden",children:[r.jsx("div",{className:`absolute -right-40 -top-40 h-96 w-96\r
          rounded-full bg-sky-100/80 blur-3xl\r
          animate-drift`}),r.jsx("div",{className:`absolute -bottom-32 -left-32 h-96 w-96\r
          rounded-full bg-sky-100/70 blur-3xl\r
          animate-driftSlow`}),r.jsx("div",{className:`absolute left-1/4 top-1/3 h-48 w-48\r
          rounded-full bg-white/80 blur-3xl`}),r.jsx(_e,{className:`absolute left-[6%] top-[15%]\r
          h-14 w-14 text-sky-200/70\r
          animate-driftSlow`}),r.jsx(_e,{className:`absolute right-[9%] top-[20%]\r
          h-12 w-12 text-sky-200/70\r
          animate-drift`}),r.jsx(_e,{className:`absolute bottom-[13%] right-[15%]\r
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
              group-hover:shadow-glow`,children:r.jsx(Xe,{className:"h-4 w-4"})}),"Back to Home"]})})}),r.jsx("main",{className:`relative z-10 flex min-h-[calc(100vh-80px)]\r
        items-center justify-center px-6 pb-12 pt-2\r
        sm:px-10 lg:px-16`,children:r.jsx("div",{className:"container-max w-full",children:r.jsxs("div",{className:"grid items-center gap-12 lg:grid-cols-2 lg:gap-20",children:[r.jsx("section",{className:"hidden lg:block",children:r.jsxs("div",{className:"max-w-xl",children:[r.jsxs("div",{className:"eyebrow",children:[r.jsx(F,{className:"h-3.5 w-3.5 fill-sky-500 text-sky-500"}),"Join the HopeCloud community"]}),r.jsxs("h1",{className:`mt-5 text-5xl font-bold leading-[1.08]\r
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
                    justify-center rounded-xl bg-sky-50`,children:r.jsx(F,{className:"h-4 w-4 fill-sky-500 text-sky-500"})}),r.jsxs("p",{className:"text-sm leading-6 text-slate-muted",children:[r.jsx("span",{className:"font-semibold text-deepsea",children:"Every item can create an impact."})," ","Give something a second life and help someone who needs it."]})]})]})}),r.jsx("section",{className:"w-full",children:r.jsxs("div",{className:`mx-auto w-full max-w-md\r
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
                      group-hover:scale-105 group-hover:shadow-glow`,children:r.jsx(_e,{className:"h-5 w-5"})}),"HopeCloud"]})}),r.jsxs("div",{className:"mb-6 text-center lg:text-left",children:[r.jsx("h2",{className:"font-display text-3xl font-bold text-deepsea",children:"Create account"}),r.jsx("p",{className:"mt-2 text-sm leading-6 text-slate-muted",children:"Join HopeCloud and start spreading hope."})]}),v?r.jsxs("div",{className:`flex flex-col items-center py-10 text-center\r
                    animate-fadeUp`,children:[r.jsx("div",{className:`flex h-20 w-20 items-center justify-center\r
                      rounded-full bg-meadow/10`,children:r.jsx(ee,{className:"h-12 w-12 text-meadow-600"})}),r.jsx("h3",{className:"mt-6 text-2xl font-bold text-deepsea",children:"Welcome to HopeCloud!"}),r.jsx("p",{className:"mt-3 max-w-xs text-sm leading-6 text-slate-muted",children:"Your account has been created successfully. Your journey of giving starts today."}),r.jsxs("button",{type:"button",onClick:S,className:`mt-7 inline-flex items-center\r
                      justify-center gap-2 rounded-2xl\r
                      bg-deepsea px-6 py-3.5\r
                      font-display text-sm font-bold text-white\r
                      shadow-soft\r
                      transition-all duration-300\r
                      hover:-translate-y-0.5\r
                      hover:bg-sky-600\r
                      hover:shadow-glow\r
                      active:scale-[0.98]`,children:["Continue to Sign In",r.jsx(Xe,{className:"h-4 w-4 rotate-180"})]})]}):r.jsxs("form",{onSubmit:k,noValidate:!0,className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("label",{htmlFor:"register-name",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Full name"}),r.jsxs("div",{className:"relative",children:[r.jsx(g0,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"register-name",name:"name",type:"text",value:t.name,onChange:w,placeholder:"Enter your full name",autoComplete:"name","aria-invalid":!!s.name,"aria-describedby":s.name?"register-name-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-4
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.name?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`})]}),s.name&&r.jsx("p",{id:"register-name-error",className:"mt-2 text-xs font-medium text-red-500",children:s.name})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"register-email",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Email address"}),r.jsxs("div",{className:"relative",children:[r.jsx(Yn,{className:`pointer-events-none absolute left-4\r
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
                          focus:ring-4 ${s.password?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`}),r.jsx("button",{type:"button",onClick:()=>o(N=>!N),className:`absolute right-3 top-1/2\r
                          flex h-9 w-9 -translate-y-1/2\r
                          items-center justify-center rounded-xl\r
                          text-slate-400\r
                          transition-all duration-300\r
                          hover:bg-sky-50 hover:text-sky-600`,"aria-label":a?"Hide password":"Show password",children:a?r.jsx(eo,{className:"h-4.5 w-4.5"}):r.jsx(to,{className:"h-4.5 w-4.5"})})]}),t.password&&r.jsxs("div",{className:"mt-3",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs font-medium text-slate-muted",children:"Password strength"}),r.jsx("span",{className:`text-xs font-bold ${d.label==="Strong"?"text-meadow-600":d.label==="Good"?"text-sky-600":d.label==="Fair"?"text-amber-600":"text-red-500"}`,children:d.label})]}),r.jsx("div",{className:"mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100",children:r.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${d.label==="Strong"?"bg-meadow-500":d.label==="Good"?"bg-sky-500":d.label==="Fair"?"bg-amber-500":"bg-red-400"}`,style:{width:d.width}})})]}),r.jsxs("div",{id:"password-requirements",className:"mt-3 grid grid-cols-2 gap-x-3 gap-y-2",children:[r.jsx(ds,{valid:y.length,text:"8+ characters"}),r.jsx(ds,{valid:y.uppercase,text:"Uppercase letter"}),r.jsx(ds,{valid:y.number,text:"One number"}),r.jsx(ds,{valid:y.special,text:"Special character"})]}),s.password&&r.jsx("p",{className:"mt-2 text-xs font-medium text-red-500",children:s.password})]}),r.jsxs("div",{children:[r.jsx("label",{htmlFor:"register-confirm-password",className:"mb-2 block text-sm font-semibold text-deepsea",children:"Confirm password"}),r.jsxs("div",{className:"relative",children:[r.jsx(no,{className:`pointer-events-none absolute left-4\r
                          top-1/2 h-4 w-4 -translate-y-1/2\r
                          text-slate-400`}),r.jsx("input",{id:"register-confirm-password",name:"confirmPassword",type:i?"text":"password",value:t.confirmPassword,onChange:w,placeholder:"Confirm your password",autoComplete:"new-password","aria-invalid":!!s.confirmPassword,"aria-describedby":s.confirmPassword?"register-confirm-password-error":void 0,className:`w-full rounded-2xl border
                          bg-white/80 py-3.5 pl-11 pr-12
                          text-sm text-ink outline-none
                          transition-all duration-300
                          placeholder:text-slate-400
                          focus:ring-4 ${s.confirmPassword?"border-red-300 focus:border-red-400 focus:ring-red-50":"border-slate-200 focus:border-sky-400 focus:ring-sky-100 hover:border-sky-300"}`}),r.jsx("button",{type:"button",onClick:()=>c(N=>!N),className:`absolute right-3 top-1/2\r
                          flex h-9 w-9 -translate-y-1/2\r
                          items-center justify-center rounded-xl\r
                          text-slate-400\r
                          transition-all duration-300\r
                          hover:bg-sky-50 hover:text-sky-600`,"aria-label":i?"Hide confirm password":"Show confirm password",children:i?r.jsx(eo,{className:"h-4.5 w-4.5"}):r.jsx(to,{className:"h-4.5 w-4.5"})})]}),t.confirmPassword&&t.password===t.confirmPassword&&r.jsxs("div",{className:"mt-2 flex items-center gap-1.5 text-xs font-medium text-meadow-600",children:[r.jsx(vm,{className:"h-3.5 w-3.5"}),"Passwords match"]}),s.confirmPassword&&r.jsx("p",{id:"register-confirm-password-error",className:"mt-2 text-xs font-medium text-red-500",children:s.confirmPassword})]}),r.jsxs("div",{children:[r.jsxs("label",{htmlFor:"terms",className:"flex cursor-pointer items-start gap-2.5",children:[r.jsx("input",{id:"terms",type:"checkbox",checked:u,onChange:N=>{m(N.target.checked),N.target.checked&&l(C=>({...C,terms:""}))},className:`mt-0.5 h-4 w-4 shrink-0\r
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
                            border-2 border-white/30 border-t-white`}),"Creating account..."]}):r.jsxs(r.Fragment,{children:["Create Account",r.jsx(Xe,{className:`h-4 w-4 rotate-180\r
                            transition-transform duration-300\r
                            group-hover:translate-x-1`})]})}),r.jsx("div",{className:"pt-2 text-center",children:r.jsxs("p",{className:"text-sm text-slate-muted",children:["Already have an account?"," ",r.jsx(O,{to:"/login",className:`font-bold text-sky-600\r
                          transition-colors duration-300\r
                          hover:text-deepsea`,children:"Sign in"})]})})]})]})})]})})})]})}function ds({valid:e,text:t}){return r.jsxs("div",{className:`flex items-center gap-1.5 text-[11px] transition-colors duration-300 ${e?"text-meadow-600":"text-slate-400"}`,children:[r.jsx("span",{className:`flex h-4 w-4 items-center justify-center
        rounded-full transition-all duration-300 ${e?"bg-meadow/15":"bg-slate-100"}`,children:r.jsx(vm,{className:"h-2.5 w-2.5"})}),t]})}const G0=[{name:"Books",icon:Br,description:"Books and educational material"},{name:"Clothes",icon:Vr,description:"Clean and usable clothing"},{name:"Children's Items",icon:ue,description:"Toys, bags and essentials"},{name:"Food & Essentials",icon:y0,description:"Food and daily necessities"},{name:"Other",icon:ke,description:"Other useful items"}],K0=[{name:"Gulberg Donation Center",address:"Main Boulevard, Gulberg III, Lahore"},{name:"Johar Town Donation Center",address:"Block H, Johar Town, Lahore"},{name:"DHA Donation Center",address:"DHA Phase 5, Lahore"},{name:"Islamabad Donation Center",address:"Blue Area, Islamabad"},{name:"Karachi Donation Center",address:"Gulshan-e-Iqbal, Karachi"}];function q0(){const[e,t]=x.useState("Books"),[n,s]=x.useState(""),[l,a]=x.useState("1"),[o,i]=x.useState("Good"),[c,u]=x.useState(""),[m,h]=x.useState("Pickup"),[g,v]=x.useState(""),[j,w]=x.useState(""),[y,f]=x.useState(""),[d,p]=x.useState(""),[k,S]=x.useState(null),[N,C]=x.useState(null),[E,M]=x.useState(!1),_=I=>{var oe;const X=(oe=I.target.files)==null?void 0:oe[0];if(!X)return;S(X);const re=URL.createObjectURL(X);C(re)},ye=()=>{S(null),C(null)},it=async I=>{I.preventDefault();try{const X=localStorage.getItem("token");if(!X){alert("Please login first.");return}const re=m==="Pickup"?g:j,oe=new FormData;oe.append("title",n),oe.append("description",c),oe.append("category",e),oe.append("condition",o),oe.append("location",re),oe.append("quantity",l),y&&oe.append("preferred_date",y),d&&oe.append("notes",d),k&&oe.append("image",k);const cn=await fetch(Qn("/donations"),{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${X}`},body:oe}),R=await cn.json();if(!cn.ok){console.log("Donation error:",R),alert(R.message||"Failed to submit donation.");return}console.log("Donation created:",R),M(!0)}catch(X){console.error("Donation error:",X),alert("Something went wrong. Make sure Laravel is running.")}};return E?r.jsx("div",{className:"min-h-screen bg-mist px-5 py-10 sm:px-8 lg:px-10",children:r.jsx("div",{className:"mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center",children:r.jsxs("div",{className:"w-full rounded-3xl border border-cloudline bg-white p-8 text-center shadow-soft sm:p-12",children:[r.jsx("div",{className:"mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-meadow-500/10 text-meadow-600",children:r.jsx(ee,{className:"h-10 w-10"})}),r.jsx("p",{className:"mt-6 text-xs font-bold uppercase tracking-[0.18em] text-meadow-600",children:"Donation Submitted"}),r.jsx("h1",{className:"mt-2 font-display text-3xl font-extrabold text-ink",children:"Thank you for giving hope."}),r.jsx("p",{className:"mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-muted",children:"Your donation has been submitted successfully. Our team will review the details and update you once your item begins its journey to someone in need."}),r.jsxs("div",{className:"mt-8 flex flex-col justify-center gap-3 sm:flex-row",children:[r.jsxs(O,{to:"/user-dashboard",className:`\r
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
                `,children:["Back to Dashboard",r.jsx(Ot,{className:"h-4 w-4"})]}),r.jsx("button",{onClick:()=>{M(!1),s(""),a("1"),u(""),p(""),S(null),C(null)},className:`\r
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
              `,children:r.jsx(Xe,{className:"h-5 w-5"})}),"Back to Dashboard"]})})}),r.jsx("main",{className:"px-5 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600",children:[r.jsx(F,{className:"h-4 w-4 fill-current"}),"Make a Difference"]}),r.jsx("h1",{className:"mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Donate an Item"}),r.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base",children:"Give something useful a second life. Share an item with someone who genuinely needs it."})]}),r.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1fr_360px]",children:[r.jsxs("form",{onSubmit:it,className:"rounded-3xl border border-cloudline bg-white p-6 shadow-card sm:p-8",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"01"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"What would you like to donate?"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Select the category that best matches your item."})]})]}),r.jsx("div",{className:"mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3",children:G0.map(I=>{const X=I.icon,re=e===I.name;return r.jsxs("button",{type:"button",onClick:()=>t(I.name),className:`
                          group
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition-all
                          duration-300
                          ${re?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50/50"}
                        `,children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:`
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-xl
                              ${re?"bg-deepsea text-white":"bg-mist text-sky-600"}
                            `,children:r.jsx(X,{className:"h-5 w-5"})}),re&&r.jsx(ee,{className:"h-4 w-4 text-deepsea"})]}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:I.name}),r.jsx("p",{className:"mt-1 text-[10px] leading-relaxed text-slate-muted",children:I.description})]},I.name)})})]}),r.jsx("div",{className:"my-8 border-t border-cloudline"}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"02"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Item Details"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Tell us a little more about your donation."})]})]}),r.jsxs("div",{className:"mt-5 grid gap-5 sm:grid-cols-2",children:[r.jsxs("div",{className:"sm:col-span-2",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Item Name"}),r.jsx("input",{required:!0,type:"text",value:n,onChange:I=>s(I.target.value),placeholder:"e.g. Children's story books",className:`\r
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
                      `,children:[r.jsx("option",{children:"New"}),r.jsx("option",{children:"Like New"}),r.jsx("option",{children:"Good"}),r.jsx("option",{children:"Used"})]})]}),r.jsxs("div",{className:"sm:col-span-2",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Description"}),r.jsx("textarea",{rows:"4",value:c,onChange:I=>u(I.target.value),placeholder:"Describe the item, its condition and anything important the recipient should know...",className:`\r
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
                      `})]})]})]}),r.jsx("div",{className:"my-8 border-t border-cloudline"}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"03"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Add a Photo"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"A clear photo helps us understand your donation."})]})]}),r.jsx("div",{className:"mt-5",children:N?r.jsxs("div",{className:"relative overflow-hidden rounded-2xl border border-cloudline bg-mist",children:[r.jsx("img",{src:N,alt:"Donation preview",className:"h-64 w-full object-cover"}),r.jsx("button",{type:"button",onClick:ye,className:`\r
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
                        `,children:r.jsx(Sl,{className:"h-4 w-4"})}),r.jsxs("div",{className:"flex items-center justify-between bg-white px-4 py-3",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ee,{className:"h-4 w-4 text-meadow-600"}),r.jsx("span",{className:"text-xs font-semibold text-ink",children:"Photo added"})]}),r.jsx("span",{className:"text-[10px] text-slate-muted",children:k==null?void 0:k.name})]})]}):r.jsxs("label",{className:`\r
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
                      `,children:[r.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm",children:r.jsx(Zx,{className:"h-7 w-7"})}),r.jsx("p",{className:"mt-4 text-sm font-bold text-ink",children:"Upload donation photo"}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"PNG, JPG or JPEG · Max 5MB"}),r.jsxs("span",{className:"mt-4 inline-flex items-center gap-2 rounded-full bg-deepsea px-4 py-2 text-xs font-bold text-white",children:[r.jsx(km,{className:"h-3.5 w-3.5"}),"Choose Image"]}),r.jsx("input",{type:"file",accept:"image/png,image/jpeg,image/jpg",onChange:_,className:"hidden"})]})})]}),r.jsx("div",{className:"my-8 border-t border-cloudline"}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"flex h-8 w-8 items-center justify-center rounded-full bg-deepsea text-xs font-bold text-white",children:"04"}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Delivery Details"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Choose how your donation should reach us."})]})]}),r.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-2",children:[r.jsxs("button",{type:"button",onClick:()=>{h("Pickup"),w("")},className:`
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        ${m==="Pickup"?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50"}
      `,children:[r.jsx(zt,{className:`
          h-5 w-5
          ${m==="Pickup"?"text-deepsea":"text-slate-muted"}
        `}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:"Request Pickup"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Our team collects the item from your location."})]}),r.jsxs("button",{type:"button",onClick:()=>{h("Drop-off"),v("")},className:`
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        ${m==="Drop-off"?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50"}
      `,children:[r.jsx(ke,{className:`
          h-5 w-5
          ${m==="Drop-off"?"text-deepsea":"text-slate-muted"}
        `}),r.jsx("p",{className:"mt-3 text-sm font-bold text-ink",children:"Drop Off"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Choose a HopeCloud location to drop off your item."})]})]}),m==="Pickup"?r.jsxs("div",{className:"mt-5",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Pickup Location"}),r.jsxs("div",{className:"relative",children:[r.jsx(zt,{className:"pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{required:!0,type:"text",value:g,onChange:I=>v(I.target.value),placeholder:"Enter your complete pickup location",className:`\r
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
          `})]}),r.jsx("p",{className:"mt-1.5 text-[10px] text-slate-muted",children:"Please provide the location where our team can collect your donation."})]}):r.jsxs("div",{className:"mt-5",children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Select Drop-off Location"}),r.jsx("p",{className:"mt-1 text-[10px] text-slate-muted",children:"Choose a convenient HopeCloud location to drop off your item."}),r.jsx("div",{className:"mt-3 grid gap-3 sm:grid-cols-2",children:K0.map(I=>{const X=j===I.name;return r.jsx("button",{type:"button",onClick:()=>w(I.name),className:`
                rounded-2xl
                border
                p-4
                text-left
                transition-all
                ${X?"border-deepsea bg-sky-50 shadow-sm":"border-cloudline bg-white hover:border-sky-200 hover:bg-sky-50/50"}
              `,children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:`
                    flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
                    ${X?"bg-deepsea text-white":"bg-sky-50 text-sky-600"}
                  `,children:r.jsx(zt,{className:"h-4 w-4"})}),r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsxs("div",{className:"flex items-center justify-between gap-2",children:[r.jsx("p",{className:"text-xs font-bold text-ink",children:I.name}),X&&r.jsx(ee,{className:"h-4 w-4 shrink-0 text-deepsea"})]}),r.jsx("p",{className:"mt-1 text-[10px] leading-relaxed text-slate-muted",children:I.address}),r.jsx("span",{className:"mt-2 inline-flex text-[10px] font-semibold text-sky-600",children:"View on Map →"})]})]})},I.name)})})]}),r.jsxs("div",{className:"mt-5 grid gap-5 sm:grid-cols-2",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Preferred Date"}),r.jsxs("div",{className:"relative",children:[r.jsx(Za,{className:"pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"date",value:y,onChange:I=>f(I.target.value),className:`\r
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
          `})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-xs font-bold text-ink",children:"Additional Notes"}),r.jsx("input",{type:"text",value:d,onChange:I=>p(I.target.value),placeholder:"Anything we should know?",className:`\r
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
                  `,children:[r.jsx(F,{className:"h-4 w-4 fill-current"}),"Submit Donation",r.jsx(Ot,{className:"h-4 w-4"})]}),r.jsx("p",{className:"mt-3 text-center text-[10px] text-slate-muted",children:"Your donation details will be securely reviewed by our team."})]})]}),r.jsxs("aside",{className:"space-y-5",children:[r.jsxs("div",{className:`\r
                  relative\r
                  overflow-hidden\r
                  rounded-3xl\r
                  bg-deepsea\r
                  p-6\r
                  text-white\r
                  shadow-soft\r
                `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl"}),r.jsxs("div",{className:"relative z-10",children:[r.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-white/10",children:r.jsx(pe,{className:"h-5 w-5 text-sky-200"})}),r.jsx("p",{className:"mt-5 text-xs font-bold uppercase tracking-[0.15em] text-sky-200",children:"Your Impact"}),r.jsx("h2",{className:"mt-2 font-display text-xl font-extrabold",children:"Small acts can create big change."}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-blue-100",children:"Your donation could become exactly what someone has been waiting for."})]})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Donation Summary"}),r.jsxs("div",{className:"mt-5 space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Category"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:e})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Item"}),r.jsx("span",{className:"max-w-[170px] truncate text-right text-xs font-bold text-ink",children:n||"Not specified"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Quantity"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:l})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Condition"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:o})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("span",{className:"text-xs text-slate-muted",children:"Delivery"}),r.jsx("span",{className:"text-xs font-bold text-ink",children:m})]})]})]}),r.jsx("div",{className:"rounded-3xl border border-sky-100 bg-sky-50/70 p-5",children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600",children:r.jsx(F,{className:"h-4 w-4 fill-current"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold text-ink",children:"Before you donate"}),r.jsx("p",{className:"mt-1 text-[11px] leading-relaxed text-slate-muted",children:"Please make sure the item is clean, safe and in usable condition."})]})]})})]})]})]})})]})}const J0=[{label:"Dashboard",icon:di,path:"/user-dashboard"},{label:"My Donations",icon:ke,path:"/user-dashboard/donations"},{label:"My Impact",icon:F,path:"/user-dashboard/impact"},{label:"My Profile",icon:nl,path:"/user-dashboard/profile"},{label:"Achievements",icon:tl,path:"/user-dashboard/achievements"}];function X0(){const[e,t]=x.useState(!1),n=Ve(),s=ot(),l=()=>{s("/"),t(!1)},a=()=>{s("/donate"),t(!1)};return r.jsxs(r.Fragment,{children:[e&&r.jsx("div",{className:"fixed inset-0 z-40 bg-deepsea/20 backdrop-blur-sm lg:hidden",onClick:()=>t(!1)}),r.jsx("button",{onClick:()=>t(!0),className:`\r
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
              `,children:r.jsx(F,{className:"h-5 w-5 fill-white"})}),r.jsx("span",{className:"font-display text-xl font-extrabold text-deepsea",children:"HopeCloud"})]}),r.jsx("button",{onClick:()=>t(!1),className:"rounded-lg p-2 text-slate-muted lg:hidden","aria-label":"Close menu",children:r.jsx(Sl,{className:"h-5 w-5"})})]}),r.jsx("div",{className:"mx-4 rounded-2xl bg-mist p-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:`\r
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
              `,children:"FF"}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("p",{className:"truncate font-display text-sm font-bold text-ink",children:"Faryal Fatima"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"HopeCloud Member"})]})]})}),r.jsxs("nav",{className:"mt-6 flex-1 overflow-y-auto px-4",children:[r.jsx("p",{className:"mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-muted",children:"Menu"}),r.jsx("div",{className:"space-y-1",children:J0.map(o=>{const i=o.icon,c=n.pathname===o.path;return r.jsxs(O,{to:o.path,onClick:()=>t(!1),className:`
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

                    ${c?`
                          bg-deepsea
                          text-white
                          shadow-soft
                        `:`
                          text-slate-muted
                          hover:bg-sky-50
                          hover:text-deepsea
                        `}
                  `,children:[r.jsx(i,{className:`
                      h-[18px]
                      w-[18px]
                      transition-transform
                      duration-200
                      group-hover:scale-110

                      ${c?"text-white":"text-slate-muted group-hover:text-deepsea"}
                    `}),o.label]},o.label)})}),r.jsxs("div",{className:"mt-8 rounded-2xl bg-gradient-to-br from-sky-50 to-white p-4",children:[r.jsx("div",{className:"mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-600",children:r.jsx(ue,{className:"h-5 w-5"})}),r.jsx("p",{className:"font-display text-sm font-bold text-ink",children:"Ready to help again?"}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:"Your next donation could make another difference."}),r.jsxs("button",{onClick:a,className:`\r
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
              `,children:[r.jsx(ue,{className:"h-3.5 w-3.5"}),"Donate Now"]})]})]}),r.jsxs("div",{className:"border-t border-cloudline p-4",children:[r.jsxs("button",{onClick:()=>s("/user-dashboard/settings"),className:`\r
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
            `,children:[r.jsx(jm,{className:"h-[18px] w-[18px]"}),"Settings"]}),r.jsxs("button",{onClick:l,className:`\r
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
            `,children:[r.jsx(Nl,{className:"h-[18px] w-[18px]"}),"Sign Out"]})]})]})]})}function Z0(){const[e,t]=x.useState(!1),[n,s]=x.useState(!1),l=x.useRef(null),a=x.useRef(null),o=ot();x.useEffect(()=>{const u=m=>{l.current&&!l.current.contains(m.target)&&t(!1),a.current&&!a.current.contains(m.target)&&s(!1)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]);const i=u=>{o(u),s(!1),t(!1)},c=()=>{o("/"),s(!1)};return r.jsx("header",{className:"sticky top-0 z-20 border-b border-cloudline bg-white/80 backdrop-blur-xl",children:r.jsxs("div",{className:"flex h-20 items-center justify-between px-5 sm:px-8 lg:px-10",children:[r.jsx("div",{className:"hidden w-full max-w-sm md:block",children:r.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-mist px-4 py-2.5",children:[r.jsx(wm,{className:"h-4 w-4 text-slate-muted"}),r.jsx("input",{type:"text",placeholder:"Search your donations...",className:`\r
                w-full\r
                bg-transparent\r
                text-sm\r
                text-ink\r
                outline-none\r
                placeholder:text-slate-muted\r
              `})]})}),r.jsxs("div",{className:"ml-auto flex items-center gap-3",children:[r.jsxs("div",{className:"relative",ref:l,children:[r.jsxs("button",{onClick:()=>{t(u=>!u),s(!1)},className:`\r
                relative\r
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
              `,"aria-label":"Notifications",children:[r.jsx(Vx,{className:"h-5 w-5"}),r.jsx("span",{className:"absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"})]}),e&&r.jsxs("div",{className:`\r
                  absolute\r
                  right-0\r
                  top-14\r
                  w-80\r
                  overflow-hidden\r
                  rounded-2xl\r
                  border\r
                  border-cloudline\r
                  bg-white\r
                  shadow-soft\r
                `,children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-cloudline p-4",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"font-display text-sm font-bold text-ink",children:"Notifications"}),r.jsx("p",{className:"mt-0.5 text-[10px] text-slate-muted",children:"Recent updates"})]}),r.jsx("span",{className:"rounded-full bg-red-50 px-2 py-1 text-[9px] font-bold text-red-500",children:"2 New"})]}),r.jsxs("div",{className:"divide-y divide-cloudline",children:[r.jsxs("button",{onClick:()=>i("/user-dashboard/donations"),className:`\r
                      flex\r
                      w-full\r
                      gap-3\r
                      p-4\r
                      text-left\r
                      transition-colors\r
                      hover:bg-mist\r
                    `,children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(ke,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold text-ink",children:"Your winter clothes are in transit"}),r.jsx("p",{className:"mt-1 text-[10px] leading-relaxed text-slate-muted",children:"Your donation is on its way to the recipient."}),r.jsx("p",{className:"mt-1 text-[9px] text-slate-muted",children:"2 hours ago"})]})]}),r.jsxs("button",{onClick:()=>i("/user-dashboard/donations"),className:`\r
                      flex\r
                      w-full\r
                      gap-3\r
                      p-4\r
                      text-left\r
                      transition-colors\r
                      hover:bg-mist\r
                    `,children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-meadow-500/10 text-meadow-600",children:r.jsx(ee,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold text-ink",children:"Donation successfully delivered"}),r.jsx("p",{className:"mt-1 text-[10px] leading-relaxed text-slate-muted",children:"Your story books reached a child in need."}),r.jsx("p",{className:"mt-1 text-[9px] text-slate-muted",children:"Yesterday"})]})]})]}),r.jsx("button",{onClick:()=>t(!1),className:`\r
                    w-full\r
                    border-t\r
                    border-cloudline\r
                    px-4\r
                    py-3\r
                    text-xs\r
                    font-bold\r
                    text-sky-600\r
                    transition-colors\r
                    hover:bg-sky-50\r
                  `,children:"Mark all as read"})]})]}),r.jsxs("div",{className:"relative",ref:a,children:[r.jsxs("button",{onClick:()=>{s(u=>!u),t(!1)},className:`\r
                flex\r
                items-center\r
                gap-2\r
                rounded-xl\r
                px-2\r
                py-1.5\r
                transition-colors\r
                hover:bg-mist\r
              `,"aria-expanded":n,children:[r.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-deepsea",children:"FF"}),r.jsxs("div",{className:"hidden text-left sm:block",children:[r.jsx("p",{className:"text-xs font-bold text-ink",children:"Faryal Fatima"}),r.jsx("p",{className:"text-[10px] text-slate-muted",children:"Donor"})]}),r.jsx(Qx,{className:`
                  hidden
                  h-4
                  w-4
                  text-slate-muted
                  transition-transform
                  sm:block
                  ${n?"rotate-180":""}
                `})]}),n&&r.jsxs("div",{className:`\r
                  absolute\r
                  right-0\r
                  top-14\r
                  w-64\r
                  overflow-hidden\r
                  rounded-2xl\r
                  border\r
                  border-cloudline\r
                  bg-white\r
                  shadow-soft\r
                `,children:[r.jsx("div",{className:"border-b border-cloudline p-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 font-bold text-deepsea",children:"FF"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-ink",children:"Faryal Fatima"}),r.jsx("p",{className:"text-[10px] text-slate-muted",children:"HopeCloud Donor"})]})]})}),r.jsxs("div",{className:"p-2",children:[r.jsxs("button",{onClick:()=>i("/user-dashboard/profile"),className:`\r
                      flex\r
                      w-full\r
                      items-center\r
                      gap-3\r
                      rounded-xl\r
                      px-3\r
                      py-2.5\r
                      text-left\r
                      text-xs\r
                      font-semibold\r
                      text-slate-muted\r
                      transition-colors\r
                      hover:bg-sky-50\r
                      hover:text-deepsea\r
                    `,children:[r.jsx(nl,{className:"h-4 w-4"}),"My Profile"]}),r.jsxs("button",{onClick:()=>i("/user-dashboard/settings"),className:`\r
                      flex\r
                      w-full\r
                      items-center\r
                      gap-3\r
                      rounded-xl\r
                      px-3\r
                      py-2.5\r
                      text-left\r
                      text-xs\r
                      font-semibold\r
                      text-slate-muted\r
                      transition-colors\r
                      hover:bg-sky-50\r
                      hover:text-deepsea\r
                    `,children:[r.jsx(jm,{className:"h-4 w-4"}),"Settings"]})]}),r.jsx("div",{className:"border-t border-cloudline p-2",children:r.jsxs("button",{onClick:c,className:`\r
                      flex\r
                      w-full\r
                      items-center\r
                      gap-3\r
                      rounded-xl\r
                      px-3\r
                      py-2.5\r
                      text-left\r
                      text-xs\r
                      font-semibold\r
                      text-red-500\r
                      transition-colors\r
                      hover:bg-red-50\r
                    `,children:[r.jsx(Nl,{className:"h-4 w-4"}),"Sign Out"]})})]})]})]})]})})}function eg(){const e=ot(),t=()=>{e("/donate")};return r.jsxs("section",{className:`\r
        relative\r
        overflow-hidden\r
        rounded-3xl\r
        bg-deepsea\r
        p-6\r
        text-white\r
        shadow-soft\r
        sm:p-8\r
      `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-500/20 blur-2xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-meadow-500/10 blur-2xl"}),r.jsxs("div",{className:"relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"mb-3 flex items-center gap-2 text-sky-200",children:[r.jsx(pe,{className:"h-4 w-4"}),r.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.15em]",children:"Your Impact"})]}),r.jsx("h1",{className:"font-display text-2xl font-extrabold sm:text-3xl",children:"Welcome back, Faryal! 👋"}),r.jsx("p",{className:"mt-2 max-w-xl text-sm leading-relaxed text-blue-100",children:"Every item you give creates an opportunity for someone else. Here's a look at the difference you're making."})]}),r.jsxs("button",{onClick:t,className:`\r
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
          `,children:[r.jsx(ue,{className:"h-4 w-4"}),"Donate Now",r.jsx(Ot,{className:"h-4 w-4"})]})]})]})}const tg=[{label:"Items Donated",value:"08",description:"This year",icon:ke},{label:"People Helped",value:"24",description:"Through your donations",icon:ln},{label:"Successfully Delivered",value:"06",description:"Items reached recipients",icon:ee},{label:"Your Rating",value:"4.8",description:"Excellent contributor",icon:$n}];function ng(){return r.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:tg.map(e=>{const t=e.icon;return r.jsxs("div",{className:`\r
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
            `,children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110",children:r.jsx(t,{className:"h-5 w-5"})}),e.label==="Your Rating"&&r.jsx("span",{className:"text-amber-500",children:"★"})]}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:e.value}),r.jsx("p",{className:"mt-1 text-sm font-semibold text-ink",children:e.label}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:e.description})]},e.label)})})}function rg(){return r.jsx("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card sm:p-7",children:r.jsxs("div",{className:"flex flex-col gap-6 sm:flex-row sm:items-center",children:[r.jsxs("div",{className:"relative mx-auto flex h-40 w-40 shrink-0 items-center justify-center sm:mx-0",children:[r.jsx("div",{className:`\r
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
            `}),r.jsxs("div",{className:"text-center",children:[r.jsx("p",{className:"font-display text-4xl font-extrabold text-deepsea",children:82}),r.jsx("p",{className:"text-xs font-semibold text-slate-muted",children:"/ 100"})]})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(F,{className:"h-5 w-5 fill-red-500 text-red-500"}),r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Personal Impact Score"})]}),r.jsx("h2",{className:"mt-2 font-display text-2xl font-extrabold text-ink",children:"You're making a difference."}),r.jsx("p",{className:"mt-2 max-w-lg text-sm leading-relaxed text-slate-muted",children:"Your donations have helped people receive things they genuinely needed. Keep going — every contribution counts."}),r.jsxs("div",{className:"mt-5",children:[r.jsxs("div",{className:"mb-2 flex justify-between text-xs font-semibold",children:[r.jsx("span",{className:"text-slate-muted",children:"Impact progress"}),r.jsxs("span",{className:"text-deepsea",children:[82,"%"]})]}),r.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-sky-50",children:r.jsx("div",{className:"h-full rounded-full bg-sky-500",style:{width:"82%"}})})]}),r.jsxs("div",{className:"mt-4 flex items-center gap-2 text-xs font-semibold text-meadow-600",children:[r.jsx(ro,{className:"h-4 w-4"}),"Your impact is growing",r.jsx(pe,{className:"h-3.5 w-3.5"})]})]})]})})}const $c=[{item:"Children Story Books",category:"Books",date:"Aug 24, 2026",status:"Delivered",icon:ee,statusClass:"text-meadow-600 bg-meadow-500/10"},{item:"Winter Clothes",category:"Clothes",date:"Aug 19, 2026",status:"In Transit",icon:bl,statusClass:"text-sky-600 bg-sky-50"},{item:"School Supplies",category:"Kids Essentials",date:"Aug 12, 2026",status:"Processing",icon:ui,statusClass:"text-amber-600 bg-amber-100"}];function sg(){return r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsxs("div",{className:"flex flex-col gap-3 border-b border-cloudline p-6 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Your Contributions"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Recent Donations"})]}),r.jsxs("button",{className:"inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-deepsea",children:["View All",r.jsx(Ot,{className:"h-3.5 w-3.5"})]})]}),r.jsx("div",{className:"hidden overflow-x-auto md:block",children:r.jsxs("table",{className:"w-full text-left",children:[r.jsx("thead",{children:r.jsxs("tr",{className:"border-b border-cloudline text-[10px] uppercase tracking-wider text-slate-muted",children:[r.jsx("th",{className:"px-6 py-4 font-bold",children:"Donation"}),r.jsx("th",{className:"px-6 py-4 font-bold",children:"Category"}),r.jsx("th",{className:"px-6 py-4 font-bold",children:"Date"}),r.jsx("th",{className:"px-6 py-4 font-bold",children:"Status"})]})}),r.jsx("tbody",{children:$c.map(e=>{const t=e.icon;return r.jsxs("tr",{className:"border-b border-cloudline last:border-0 transition-colors hover:bg-mist/60",children:[r.jsx("td",{className:"px-6 py-4",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600",children:r.jsx(ke,{className:"h-4 w-4"})}),r.jsx("span",{className:"text-sm font-semibold text-ink",children:e.item})]})}),r.jsx("td",{className:"px-6 py-4 text-xs text-slate-muted",children:e.category}),r.jsx("td",{className:"px-6 py-4 text-xs text-slate-muted",children:e.date}),r.jsx("td",{className:"px-6 py-4",children:r.jsxs("span",{className:`
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        ${e.statusClass}
                      `,children:[r.jsx(t,{className:"h-3.5 w-3.5"}),e.status]})})]},e.item)})})]})}),r.jsx("div",{className:"divide-y divide-cloudline md:hidden",children:$c.map(e=>{const t=e.icon;return r.jsx("div",{className:"p-5",children:r.jsxs("div",{className:"flex items-start justify-between gap-3",children:[r.jsxs("div",{className:"flex gap-3",children:[r.jsx("div",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600",children:r.jsx(ke,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-ink",children:e.item}),r.jsxs("p",{className:"mt-1 text-xs text-slate-muted",children:[e.category," · ",e.date]})]})]}),r.jsxs("span",{className:`
                    inline-flex
                    shrink-0
                    items-center
                    gap-1
                    rounded-full
                    px-2
                    py-1
                    text-[9px]
                    font-bold
                    ${e.statusClass}
                  `,children:[r.jsx(t,{className:"h-3 w-3"}),e.status]})]})},e.item)})})]})}function lg(){return r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600",children:r.jsx(ci,{className:"h-5 w-5"})}),r.jsx("span",{className:"rounded-full bg-meadow-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-meadow-600",children:"Excellent"})]}),r.jsx("p",{className:"mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Your Contributor Rating"}),r.jsxs("div",{className:"mt-2 flex items-center gap-3",children:[r.jsx("span",{className:"font-display text-4xl font-extrabold text-ink",children:"4.8"}),r.jsxs("div",{children:[r.jsx("div",{className:"flex gap-0.5 text-amber-500",children:[1,2,3,4,5].map(e=>r.jsx($n,{className:"h-4 w-4 fill-current"},e))}),r.jsx("p",{className:"mt-1 text-[10px] text-slate-muted",children:"Based on your contributions"})]})]}),r.jsxs("div",{className:"mt-5 rounded-xl bg-mist p-4",children:[r.jsx(o0,{className:"h-4 w-4 text-sky-500"}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-slate-muted",children:'"Your consistent contributions are helping create meaningful change."'})]})]})}const ag=[{title:"First Donation",description:"Made your first contribution",icon:ue,unlocked:!0},{title:"Book Giver",description:"Donated educational books",icon:Br,unlocked:!0},{title:"Helping Hand",description:"Helped 10+ people",icon:F,unlocked:!0},{title:"Clothing Contributor",description:"Donate 10 clothing items",icon:Vr,unlocked:!1},{title:"Hope Champion",description:"Reach an impact score of 90",icon:$n,unlocked:!1}];function og(){return r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsxs("div",{className:"mb-6",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Milestones"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Your Achievements"})]}),r.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-5",children:ag.map(e=>{const t=e.icon;return r.jsxs("div",{className:`
                rounded-2xl
                border
                p-4
                transition-all
                duration-300
                ${e.unlocked?"border-sky-100 bg-sky-50/50 hover:-translate-y-1 hover:shadow-card":"border-cloudline bg-white opacity-60"}
              `,children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    ${e.unlocked?"bg-white text-sky-600":"bg-mist text-slate-muted"}
                  `,children:r.jsx(t,{className:"h-5 w-5"})}),!e.unlocked&&r.jsx(On,{className:"h-3.5 w-3.5 text-slate-muted"})]}),r.jsx("p",{className:"mt-4 text-xs font-bold text-ink",children:e.title}),r.jsx("p",{className:"mt-1 text-[10px] leading-relaxed text-slate-muted",children:e.description})]},e.title)})})]})}function ig(){return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(X0,{}),r.jsxs("div",{className:"lg:ml-64",children:[r.jsx(Z0,{}),r.jsx("main",{className:"px-5 py-6 sm:px-8 lg:px-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsx(eg,{}),r.jsx("div",{className:"mt-6",children:r.jsx(ng,{})}),r.jsxs("div",{className:"mt-6 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]",children:[r.jsx(rg,{}),r.jsx(lg,{})]}),r.jsx("div",{className:"mt-6",children:r.jsx(sg,{})}),r.jsx("div",{className:"mt-6",children:r.jsx(og,{})})]})})]})]})}const zr={submitted:{label:"Submitted",icon:km,classes:"bg-sky-50 text-sky-600"},delivered:{label:"Delivered",icon:ee,classes:"bg-meadow-500/10 text-meadow-600"},transit:{label:"In Transit",icon:bl,classes:"bg-sky-50 text-sky-600"},processing:{label:"Processing",icon:ui,classes:"bg-amber-100 text-amber-600"}},cg={Books:Br,Clothes:Vr,"Children's Items":ue};function ug(){const[e,t]=x.useState([]),[n,s]=x.useState("All"),[l,a]=x.useState(null),[o,i]=x.useState(!0),[c,u]=x.useState("");x.useEffect(()=>{(async()=>{const f=localStorage.getItem("token");if(!f){u("Please log in to view your donations."),i(!1);return}try{const d=await fetch(Qn("/donations"),{headers:{Accept:"application/json",Authorization:`Bearer ${f}`}});if(!d.ok)throw new Error(d.status===401?"Your session has expired. Please log in again.":"Unable to load your donations.");const p=await d.json();t(Array.isArray(p.donations)?p.donations:[])}catch(d){console.error(d),u(d.message||"Unable to load your donations.")}finally{i(!1)}})()},[]);const m=x.useMemo(()=>e.map(y=>{const f=new Date(y.created_at),d=Number.isNaN(f.getTime())?"Date unavailable":f.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return{id:y.id,item:y.title||"Untitled donation",category:y.category||"Other",condition:y.condition||"Not specified",quantity:Number(y.quantity)||0,date:d,status:zr.submitted.label,statusType:"submitted",location:y.location||"Location not provided",recipient:"Waiting for recipient matching",description:y.description||y.notes||"No description provided.",image:j0(y.image)}}),[e]),h=x.useMemo(()=>["All",...new Set(m.map(y=>y.category))],[m]);x.useEffect(()=>{h.includes(n)||s("All")},[h,n]);const g=n==="All"?m:m.filter(y=>y.category===n),v=m.filter(y=>y.statusType==="delivered").length,j=m.filter(y=>y.statusType==="transit").length,w=m.reduce((y,f)=>y+f.quantity,0);return o?r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsx("p",{className:"text-sm font-semibold text-slate-muted",children:"Loading your donations..."})}):c?r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsx("p",{className:"text-sm font-semibold text-red-500",children:c})}):r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"sticky top-0 z-30 border-b border-cloudline bg-white/85 backdrop-blur-xl",children:r.jsxs("div",{className:"mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(O,{to:"/user-dashboard",className:`\r
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
              `,children:r.jsx(Xe,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-slate-muted",children:"Contributions"}),r.jsx("h1",{className:"font-display text-xl font-extrabold text-ink sm:text-2xl",children:"My Donations"})]})]}),r.jsxs(O,{to:"/donate",className:"btn-primary",children:[r.jsx(ue,{className:"h-4 w-4"}),r.jsx("span",{className:"hidden sm:inline",children:"Donate an Item"}),r.jsx("span",{className:"sm:hidden",children:"Donate"})]})]})}),r.jsxs("main",{className:"mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10",children:[r.jsxs("section",{className:"relative overflow-hidden rounded-3xl bg-deepsea p-6 text-white shadow-soft sm:p-8",children:[r.jsx("div",{className:"pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-meadow-500/10 blur-3xl"}),r.jsxs("div",{className:"relative z-10 max-w-2xl",children:[r.jsxs("div",{className:"mb-3 flex items-center gap-2 text-sky-200",children:[r.jsx(pe,{className:"h-4 w-4"}),r.jsx("span",{className:"text-xs font-semibold uppercase tracking-[0.15em]",children:"Your Giving Journey"})]}),r.jsx("h2",{className:"font-display text-2xl font-extrabold sm:text-3xl",children:"Every donation tells a story."}),r.jsx("p",{className:"mt-3 text-sm leading-relaxed text-blue-100",children:"Track every item you've shared through HopeCloud and see how your contributions are making their way to people who need them."})]})]}),r.jsxs("section",{className:"mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[r.jsx(ms,{icon:ke,label:"Total Items",value:w,description:"Items contributed"}),r.jsx(ms,{icon:ue,label:"Donations",value:m.length,description:"Total contributions"}),r.jsx(ms,{icon:ee,label:"Delivered",value:v,description:"Reached recipients"}),r.jsx(ms,{icon:bl,label:"In Transit",value:j,description:"Currently on the way"})]}),r.jsxs("section",{className:"mt-8",children:[r.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Donation History"}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold text-ink",children:"Your Contributions"})]}),r.jsx("div",{className:"flex gap-2 overflow-x-auto pb-1",children:h.map(y=>r.jsx("button",{onClick:()=>s(y),className:`
                    shrink-0
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    transition-all
                    duration-200
                    ${n===y?"bg-deepsea text-white shadow-soft":"border border-cloudline bg-white text-slate-muted hover:bg-sky-50 hover:text-deepsea"}
                  `,children:y},y))})]}),r.jsx("div",{className:"mt-5 grid gap-5 lg:grid-cols-2",children:g.map(y=>r.jsx(dg,{donation:y,onView:()=>a(y)},y.id))}),m.length===0?r.jsxs("div",{className:"mt-5 rounded-3xl border border-dashed border-cloudline bg-white p-12 text-center",children:[r.jsx(ke,{className:"mx-auto h-10 w-10 text-slate-muted"}),r.jsx("h3",{className:"mt-4 font-display text-lg font-bold text-ink",children:"No donations yet"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Share an item to start your giving journey."}),r.jsxs(O,{to:"/donate",className:"btn-primary mt-5",children:[r.jsx(ue,{className:"h-4 w-4"}),"Donate an Item"]})]}):g.length===0?r.jsxs("div",{className:"mt-5 rounded-3xl border border-dashed border-cloudline bg-white p-12 text-center",children:[r.jsx(ke,{className:"mx-auto h-10 w-10 text-slate-muted"}),r.jsx("h3",{className:"mt-4 font-display text-lg font-bold text-ink",children:"No donations found"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"You don't have any donations in this category yet."})]}):null]})]}),l&&r.jsx(mg,{donation:l,onClose:()=>a(null)})]})}function ms({icon:e,label:t,value:n,description:s}){return r.jsxs("div",{className:`\r
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
      `,children:[r.jsx("div",{className:"flex items-center justify-between",children:r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600 transition-transform duration-300 group-hover:scale-110",children:r.jsx(e,{className:"h-5 w-5"})})}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:n}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:t}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:s})]})}function Cm({src:e,alt:t,className:n}){const[s,l]=x.useState(!1);return!e||s?r.jsx("div",{className:`${n} flex items-center justify-center bg-mist text-slate-muted`,children:r.jsx(e0,{className:"h-10 w-10"})}):r.jsx("img",{src:e,alt:t,className:n,onError:()=>l(!0)})}function dg({donation:e,onView:t}){const n=zr[e.statusType]??zr.submitted,s=n.icon,l=cg[e.category]??ke;return r.jsx("article",{className:`\r
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
      `,children:r.jsxs("div",{className:"flex flex-col sm:flex-row",children:[r.jsxs("div",{className:"relative h-56 overflow-hidden sm:h-auto sm:w-52 sm:shrink-0",children:[r.jsx(Cm,{src:e.image,alt:e.item,className:`\r
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
              `,children:[r.jsx(s,{className:"h-3.5 w-3.5"}),e.status]})})]}),r.jsxs("div",{className:"flex min-w-0 flex-1 flex-col p-5",children:[r.jsx("div",{className:"flex items-start justify-between gap-3",children:r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(l,{className:"h-4 w-4 text-sky-600"}),r.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:e.category})]}),r.jsx("h3",{className:"mt-2 font-display text-lg font-extrabold text-ink",children:e.item})]})}),r.jsx("p",{className:"mt-2 line-clamp-2 text-xs leading-relaxed text-slate-muted",children:e.description}),r.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-3",children:[r.jsx(xr,{label:"Quantity",value:`${e.quantity} items`}),r.jsx(xr,{label:"Condition",value:e.condition})]}),r.jsxs("div",{className:"mt-4 flex items-center gap-2 text-[10px] text-slate-muted",children:[r.jsx(zt,{className:"h-3.5 w-3.5 text-sky-600"}),e.location,r.jsx("span",{children:"•"}),e.date]}),r.jsxs("div",{className:"mt-5 flex items-center justify-between border-t border-cloudline pt-4",children:[r.jsxs("button",{onClick:t,className:`\r
                inline-flex\r
                items-center\r
                gap-1.5\r
                text-xs\r
                font-bold\r
                text-sky-600\r
                transition-colors\r
                hover:text-deepsea\r
              `,children:["View Details",r.jsx(Ot,{className:"h-3.5 w-3.5"})]}),e.statusType==="delivered"&&r.jsxs("span",{className:"flex items-center gap-1 text-[10px] font-semibold text-meadow-600",children:[r.jsx(F,{className:"h-3.5 w-3.5 fill-current"}),"Impact made"]})]})]})]})})}function xr({label:e,value:t}){return r.jsxs("div",{className:"rounded-xl bg-mist px-3 py-2",children:[r.jsx("p",{className:"text-[9px] font-bold uppercase tracking-wider text-slate-muted",children:e}),r.jsx("p",{className:"mt-0.5 text-xs font-bold text-ink",children:t})]})}function mg({donation:e,onClose:t}){const n=e.statusType==="delivered",s=e.statusType==="transit",l=zr[e.statusType]??zr.submitted,a=l.icon;return r.jsx("div",{className:`\r
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
        `,onClick:o=>o.stopPropagation(),children:[r.jsxs("div",{className:"relative",children:[r.jsx(Cm,{src:e.image,alt:e.item,className:"h-56 w-full object-cover sm:h-64"}),r.jsx("button",{onClick:t,className:`\r
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
            `,children:r.jsx(Gx,{className:"h-5 w-5"})})]}),r.jsxs("div",{className:"p-6 sm:p-8",children:[r.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.15em] text-slate-muted",children:e.category}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold text-ink",children:e.item})]}),r.jsxs("span",{className:`
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
              `,children:[r.jsx(a,{className:"h-3.5 w-3.5"}),e.status]})]}),r.jsxs("div",{className:"mt-6 grid gap-3 sm:grid-cols-3",children:[r.jsx(xr,{label:"Quantity",value:`${e.quantity} items`}),r.jsx(xr,{label:"Condition",value:e.condition}),r.jsx(xr,{label:"Donated On",value:e.date})]}),r.jsxs("div",{className:"mt-8",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Delivery Journey"}),r.jsxs("div",{className:"mt-5 space-y-5",children:[r.jsx(fs,{icon:ke,title:"Donation Received",description:"HopeCloud received your donation.",complete:!0}),r.jsx(fs,{icon:ee,title:"Donation Verified",description:"The item was checked and approved.",complete:!0}),r.jsx(fs,{icon:bl,title:"On the Way",description:n?"The donation was delivered successfully.":s?"Your donation is currently on its way.":"Your donation will move here once processing is complete.",complete:n||s,current:s}),r.jsx(fs,{icon:F,title:"Reached Someone in Need",description:n?`Your donation reached ${e.recipient}.`:"This step will update once the item reaches its recipient.",complete:n})]})]}),r.jsx("div",{className:"mt-7 rounded-2xl bg-mist p-5",children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx(F,{className:"h-5 w-5 fill-current"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:"Recipient / Impact"}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:e.recipient}),r.jsx("p",{className:"mt-1 text-xs leading-relaxed text-slate-muted",children:n?"Your contribution has successfully created a positive impact.":"We will update this information when your donation reaches its recipient."})]})]})}),r.jsx("button",{onClick:t,className:"btn-secondary mt-6 w-full",children:"Close Details"})]})]})})}function fs({icon:e,title:t,description:n,complete:s,current:l}){return r.jsxs("div",{className:"flex gap-4",children:[r.jsx("div",{className:"relative",children:r.jsx("div",{className:`
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
          `,children:t}),r.jsx("p",{className:"mt-1 text-[11px] leading-relaxed text-slate-muted",children:n})]})]})}function fg(){const[e,t]=x.useState(null),[n,s]=x.useState(!0),[l,a]=x.useState("");if(x.useEffect(()=>{(async()=>{try{const h=localStorage.getItem("token"),g=await fetch(Qn("/my-impact"),{headers:{Accept:"application/json",Authorization:`Bearer ${h}`}});if(!g.ok)throw new Error("Failed to fetch impact data");const v=await g.json();t(v.impact)}catch(h){console.error(h),a("Unable to load your impact data.")}finally{s(!1)}})()},[]),n)return r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsx("p",{className:"text-sm font-semibold text-slate-muted",children:"Loading your impact..."})});if(l||!e)return r.jsx("div",{className:"flex min-h-screen items-center justify-center bg-mist",children:r.jsx("p",{className:"text-sm font-semibold text-red-500",children:l||"No impact data found."})});const o=e.impact_score,i=[{label:"People Helped",value:e.total_donations,description:"through your donations",icon:ln,iconBg:"bg-sky-50",iconColor:"text-sky-600"},{label:"Items Donated",value:String(e.total_items).padStart(2,"0"),description:"items contributed",icon:_c,iconBg:"bg-meadow-500/10",iconColor:"text-meadow-600"},{label:"Impact Score",value:e.impact_score,description:"out of 100",icon:F,iconBg:"bg-red-50",iconColor:"text-red-500"},{label:"Impact Growth",value:`+${e.impact_growth}%`,description:"since last month",icon:ro,iconBg:"bg-amber-50",iconColor:"text-amber-600"}],c=[{title:"Education",description:"Your donated books and school supplies are supporting children in their learning journey.",value:"08",label:"Items contributed",icon:p0,progress:78},{title:"Community Support",description:"Your contributions are helping families and communities access essential resources.",value:"12",label:"People supported",icon:ln,progress:64},{title:"Essential Needs",description:"Clothes, food and everyday essentials from your donations are reaching people in need.",value:"16",label:"Items contributed",icon:F,progress:86}],u=e.recent_donations.map(m=>({title:m.title,location:m.location||"Location not provided",status:"Submitted",date:new Date(m.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),icon:ee,statusClass:"bg-sky-50 text-sky-600"}));return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"border-b border-cloudline bg-white",children:r.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(O,{to:"/user-dashboard",className:`\r
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
              `,"aria-label":"Back to Dashboard",children:r.jsx(Xe,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-slate-muted sm:text-xs",children:"Your Impact"}),r.jsx("h1",{className:"mt-0.5 font-display text-2xl font-extrabold text-ink sm:text-3xl",children:"My Impact"})]})]}),r.jsxs("div",{className:"hidden items-center gap-3 rounded-2xl bg-mist px-4 py-2.5 sm:flex",children:[r.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx(pe,{className:"h-4 w-4"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:"Impact Score"}),r.jsxs("p",{className:"font-display text-lg font-extrabold text-deepsea",children:[o,"/100"]})]})]})]})}),r.jsx("main",{className:"px-6 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsx("div",{className:"mb-8",children:r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx("div",{className:"mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600",children:r.jsx(pe,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-xl font-extrabold text-ink sm:text-2xl",children:"See the difference you're making."}),r.jsx("p",{className:"mt-1 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base",children:"See how your generosity is reaching people, supporting communities, and creating meaningful change."})]})]})}),r.jsxs("section",{className:`\r
              relative\r
              overflow-hidden\r
              rounded-[28px]\r
              bg-deepsea\r
              p-7\r
              text-white\r
              shadow-soft\r
              sm:p-9\r
              lg:p-10\r
            `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-meadow-400/10 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10"}),r.jsx("div",{className:"pointer-events-none absolute right-24 top-1/2 h-28 w-28 -translate-y-1/2 rounded-full border border-white/10"}),r.jsxs("div",{className:"relative z-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-center",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 text-sky-200",children:[r.jsx(F,{className:"h-4 w-4 fill-current text-red-400"}),r.jsx("span",{className:"text-xs font-bold uppercase tracking-[0.18em]",children:"Personal Impact"})]}),r.jsx("h2",{className:"mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-4xl",children:"Your kindness is creating real-world impact."}),r.jsx("p",{className:"mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base",children:"Every book, piece of clothing, and essential item you donate has the potential to make someone's day a little better."}),r.jsxs("div",{className:"mt-7 max-w-2xl",children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between text-xs font-semibold",children:[r.jsx("span",{className:"text-blue-100",children:"Impact progress"}),r.jsxs("span",{className:"text-white",children:[o,"%"]})]}),r.jsx("div",{className:"h-2.5 overflow-hidden rounded-full bg-white/10",children:r.jsx("div",{className:"h-full rounded-full bg-sky-400 transition-all duration-700",style:{width:`${o}%`}})})]}),r.jsxs("div",{className:"mt-4 flex items-center gap-2 text-xs font-medium text-blue-100",children:[r.jsx(ro,{className:"h-4 w-4 text-sky-300"}),r.jsx("span",{children:r.jsx("span",{children:o>=90?"You've reached Hope Champion status!":`You're ${90-o} points away from becoming a Hope Champion.`})})]})]}),r.jsxs("div",{className:"relative mx-auto flex h-48 w-48 items-center justify-center",children:[r.jsx("div",{className:"absolute inset-0 rounded-full border-[12px] border-white/10"}),r.jsx("div",{className:`\r
                    absolute\r
                    inset-0\r
                    rounded-full\r
                    border-[12px]\r
                    border-transparent\r
                    border-t-sky-400\r
                    border-r-sky-400\r
                    border-b-sky-400\r
                    -rotate-12\r
                  `}),r.jsxs("div",{className:"relative text-center",children:[r.jsx("p",{className:"font-display text-5xl font-extrabold",children:o}),r.jsx("p",{className:"mt-1 text-xs font-bold uppercase tracking-wider text-blue-100",children:"Impact Score"})]})]})]})]}),r.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:i.map(m=>{const h=m.icon;return r.jsxs("div",{className:`\r
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
                  `,children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:`flex h-11 w-11 items-center justify-center rounded-xl ${m.iconBg} ${m.iconColor} transition-transform duration-300 group-hover:scale-110`,children:r.jsx(h,{className:"h-5 w-5"})}),r.jsx(Rn,{className:"h-4 w-4 text-slate-muted"})]}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:m.value}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:m.label}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:m.description})]},m.label)})}),r.jsxs("section",{className:"mt-10",children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.16em] text-slate-muted",children:"Where your help matters"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink sm:text-2xl",children:"Your Impact Areas"})]}),r.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:c.map(m=>{const h=m.icon;return r.jsxs("div",{className:`\r
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
                    `,children:[r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsx("div",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(h,{className:"h-5 w-5"})}),r.jsx(Rn,{className:"h-4 w-4 text-slate-muted"})]}),r.jsx("h3",{className:"mt-5 font-display text-lg font-extrabold text-ink",children:m.title}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-slate-muted",children:m.description}),r.jsxs("div",{className:"mt-5 flex items-end justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"font-display text-2xl font-extrabold text-deepsea",children:m.value}),r.jsx("p",{className:"text-[10px] text-slate-muted",children:m.label})]}),r.jsxs("span",{className:"text-xs font-bold text-sky-600",children:[m.progress,"%"]})]}),r.jsx("div",{className:"mt-2 h-2 overflow-hidden rounded-full bg-sky-50",children:r.jsx("div",{className:"h-full rounded-full bg-sky-500 transition-all duration-700",style:{width:`${m.progress}%`}})})]},m.title)})})]}),r.jsxs("section",{className:"mt-10 rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsxs("div",{className:"flex flex-col gap-2 border-b border-cloudline p-6 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Recent Activity"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Your Contributions in Action"})]}),r.jsxs(O,{to:"/user-dashboard/donations",className:"inline-flex items-center gap-1 text-xs font-bold text-sky-600 transition-colors hover:text-deepsea",children:["View Donations",r.jsx(Rn,{className:"h-3.5 w-3.5"})]})]}),r.jsx("div",{className:"divide-y divide-cloudline",children:u.map(m=>{const h=m.icon;return r.jsxs("div",{className:`\r
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
                    `,children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(_c,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-bold text-ink",children:m.title}),r.jsxs("div",{className:"mt-1 flex items-center gap-1 text-xs text-slate-muted",children:[r.jsx(zt,{className:"h-3 w-3"}),m.location]})]})]}),r.jsx("div",{className:"flex items-center gap-4 pl-[52px] sm:pl-0",children:r.jsxs("div",{className:"text-left sm:text-right",children:[r.jsx("p",{className:"text-[10px] text-slate-muted",children:m.date}),r.jsxs("span",{className:`
                            mt-1
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            ${m.statusClass}
                          `,children:[r.jsx(h,{className:"h-3 w-3"}),m.status]})]})})]},m.title)})})]}),r.jsx("section",{className:"mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6 sm:p-7",children:r.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx(ci,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"font-display text-base font-extrabold text-ink",children:"You're making a difference."}),r.jsx("p",{className:"mt-1 max-w-xl text-xs leading-relaxed text-slate-muted",children:"Keep contributing to unlock new achievements and increase your personal impact score."})]})]}),r.jsxs(O,{to:"/user-dashboard/donations",className:`\r
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
                `,children:[r.jsx(F,{className:"h-4 w-4 fill-current"}),"Make an Impact"]})]})})]})})]})}function hg(){const[e,t]=x.useState(!1),n={name:"Faryal Fatima",email:"faryal@example.com",phone:"+92 300 1234567",location:"Lahore, Pakistan",memberSince:"June 2026",role:"HopeCloud Member",initials:"FF"},s=[{label:"Items Donated",value:"08",icon:ke,iconBg:"bg-sky-50",iconColor:"text-sky-600"},{label:"People Helped",value:"24",icon:F,iconBg:"bg-red-50",iconColor:"text-red-500"},{label:"Impact Score",value:"82",icon:ci,iconBg:"bg-amber-50",iconColor:"text-amber-600"},{label:"Rating",value:"4.8",icon:$n,iconBg:"bg-yellow-50",iconColor:"text-yellow-500"}],l=[{label:"Full Name",value:n.name,icon:nl},{label:"Email Address",value:n.email,icon:Yn},{label:"Phone Number",value:n.phone,icon:c0},{label:"Location",value:n.location,icon:zt},{label:"Member Since",value:n.memberSince,icon:Za}];return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"border-b border-cloudline bg-white",children:r.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(O,{to:"/user-dashboard",className:`\r
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
              `,"aria-label":"Back to Dashboard",children:r.jsx(Xe,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.2em] text-slate-muted sm:text-xs",children:"Account"}),r.jsx("h1",{className:"mt-0.5 font-display text-2xl font-extrabold text-ink sm:text-3xl",children:"My Profile"})]})]}),r.jsxs("button",{onClick:()=>t(!0),className:`\r
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
            `,children:[r.jsx(Dc,{className:"h-4 w-4"}),"Edit Profile"]})]})}),r.jsx("main",{className:"px-6 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsxs("section",{className:`\r
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
                    `,children:n.initials}),r.jsx("span",{className:`\r
                      absolute\r
                      bottom-1\r
                      right-1\r
                      h-5\r
                      w-5\r
                      rounded-full\r
                      border-4\r
                      border-deepsea\r
                      bg-meadow-500\r
                    `})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[r.jsx("h2",{className:"font-display text-2xl font-extrabold sm:text-3xl",children:n.name}),r.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-sky-100",children:[r.jsx(ee,{className:"h-3 w-3"}),"Verified"]})]}),r.jsx("p",{className:"mt-1 text-sm text-blue-100",children:n.role}),r.jsxs("div",{className:"mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-blue-100",children:[r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(zt,{className:"h-3.5 w-3.5"}),n.location]}),r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx(Za,{className:"h-3.5 w-3.5"}),"Member since ",n.memberSince]})]})]})]}),r.jsxs("div",{className:"rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm",children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-[0.15em] text-blue-100",children:"Contributor Rating"}),r.jsxs("div",{className:"mt-1 flex items-center gap-2",children:[r.jsx($n,{className:"h-5 w-5 fill-amber-300 text-amber-300"}),r.jsx("span",{className:"font-display text-2xl font-extrabold",children:"4.8"}),r.jsx("span",{className:"text-xs text-blue-100",children:"/ 5.0"})]})]})]})]}),r.jsxs("button",{onClick:()=>t(!0),className:`\r
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
            `,children:[r.jsx(Dc,{className:"h-4 w-4"}),"Edit Profile"]}),r.jsxs("section",{className:"mt-8",children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.16em] text-slate-muted",children:"Your Contributions"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink sm:text-2xl",children:"Contribution Overview"})]}),r.jsx("div",{className:"grid gap-4 sm:grid-cols-2 xl:grid-cols-4",children:s.map(a=>{const o=a.icon;return r.jsxs("div",{className:`\r
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
                    `,children:[r.jsx("div",{className:"flex items-start justify-between",children:r.jsx("div",{className:`flex h-11 w-11 items-center justify-center rounded-xl ${a.iconBg} ${a.iconColor} transition-transform duration-300 group-hover:scale-110`,children:r.jsx(o,{className:"h-5 w-5"})})}),r.jsx("p",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:a.value}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:a.label})]},a.label)})})]}),r.jsxs("div",{className:"mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]",children:[r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white shadow-card",children:[r.jsxs("div",{className:"flex items-center justify-between border-b border-cloudline p-6",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Personal Information"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Your Profile Details"})]}),r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(nl,{className:"h-5 w-5"})})]}),r.jsx("div",{className:"grid gap-0 sm:grid-cols-2",children:l.map((a,o)=>{const i=a.icon;return r.jsxs("div",{className:`
                        flex
                        items-center
                        gap-4
                        p-5
                        ${o<l.length-1?"border-b border-cloudline":""}
                        ${o===1?"sm:border-b":""}
                      `,children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-slate-muted",children:r.jsx(i,{className:"h-4 w-4"})}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-slate-muted",children:a.label}),r.jsx("p",{className:"mt-1 truncate text-sm font-semibold text-ink",children:a.value})]})]},a.label)})})]}),r.jsxs("section",{className:"rounded-2xl border border-cloudline bg-white p-6 shadow-card",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-meadow-500/10 text-meadow-600",children:r.jsx(sn,{className:"h-5 w-5"})}),r.jsx("span",{className:"rounded-full bg-meadow-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-meadow-600",children:"Active"})]}),r.jsx("p",{className:"mt-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-muted",children:"Account Status"}),r.jsx("h2",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:"Your account is secure."}),r.jsx("p",{className:"mt-2 text-xs leading-relaxed text-slate-muted",children:"Your HopeCloud account is active and ready for donations, contributions, and community activities."}),r.jsxs("div",{className:"mt-5 space-y-3",children:[r.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-mist p-3",children:[r.jsx(ee,{className:"h-4 w-4 text-meadow-600"}),r.jsx("span",{className:"text-xs font-semibold text-ink",children:"Email verified"})]}),r.jsxs("div",{className:"flex items-center gap-3 rounded-xl bg-mist p-3",children:[r.jsx(sn,{className:"h-4 w-4 text-sky-600"}),r.jsx("span",{className:"text-xs font-semibold text-ink",children:"Account protected"})]})]})]})]}),r.jsx("section",{className:"mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-6 sm:p-7",children:r.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm",children:r.jsx(F,{className:"h-5 w-5 fill-current"})}),r.jsxs("div",{children:[r.jsx("p",{className:"font-display text-base font-extrabold text-ink",children:"Keep making a difference."}),r.jsx("p",{className:"mt-1 max-w-xl text-xs leading-relaxed text-slate-muted",children:"Your profile is more than an account — it's a record of the positive change you're helping create."})]})]}),r.jsxs(O,{to:"/user-dashboard",className:`\r
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
                `,children:["Back to Dashboard",r.jsx(Xe,{className:"h-4 w-4 rotate-180"})]})]})})]})}),e&&r.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-deepsea/30 px-5 backdrop-blur-sm",children:r.jsxs("div",{className:"w-full max-w-md rounded-3xl border border-cloudline bg-white p-7 shadow-soft",children:[r.jsx("div",{className:"mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600",children:r.jsx(Yx,{className:"h-6 w-6"})}),r.jsx("h3",{className:"mt-5 text-center font-display text-xl font-extrabold text-ink",children:"Profile Editing"}),r.jsx("p",{className:"mt-2 text-center text-sm leading-relaxed text-slate-muted",children:"Profile editing will be connected with the backend API once the authentication and user profile APIs are ready."}),r.jsx("button",{onClick:()=>t(!1),className:`\r
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
              `,children:"Got it"})]})})]})}const pg=[{title:"First Donation",description:"Made your first contribution to HopeCloud.",progress:1,target:1,icon:ue,unlocked:!0,category:"Milestone"},{title:"Book Giver",description:"Donate educational books to someone in need.",progress:8,target:5,icon:Br,unlocked:!0,category:"Contribution"},{title:"Helping Hand",description:"Help at least 10 people through your donations.",progress:24,target:10,icon:F,unlocked:!0,category:"Impact"},{title:"Clothing Contributor",description:"Donate 10 clothing items to people who need them.",progress:6,target:10,icon:Vr,unlocked:!1,category:"Contribution"},{title:"Community Hero",description:"Help 50 people through your contributions.",progress:24,target:50,icon:ln,unlocked:!1,category:"Impact"},{title:"Hope Champion",description:"Reach a personal impact score of 90.",progress:82,target:90,icon:$n,unlocked:!1,category:"Special"}],xg=[{label:"Unlocked",value:"03",icon:tl,description:"Achievements earned"},{label:"In Progress",value:"03",icon:pe,description:"Keep going"},{label:"Total",value:"06",icon:ke,description:"Available achievements"}];function gg(){return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx("header",{className:"border-b border-cloudline bg-white",children:r.jsx("div",{className:"mx-auto flex max-w-7xl items-center px-5 py-6 sm:px-8 lg:px-10",children:r.jsxs(O,{to:"/user-dashboard",className:`\r
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
              `,children:r.jsx(Xe,{className:"h-5 w-5"})}),"Back to Dashboard"]})})}),r.jsx("main",{className:"px-5 py-8 sm:px-8 lg:px-10 lg:py-10",children:r.jsxs("div",{className:"mx-auto max-w-7xl",children:[r.jsxs("div",{className:"flex flex-col gap-5 md:flex-row md:items-end md:justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-600",children:[r.jsx(tl,{className:"h-4 w-4"}),"Your Milestones"]}),r.jsx("h1",{className:"mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl",children:"Achievements"}),r.jsx("p",{className:"mt-3 max-w-2xl text-sm leading-relaxed text-slate-muted sm:text-base",children:"Celebrate the milestones you've reached and discover new ways to increase your impact through HopeCloud."})]}),r.jsx("div",{className:"rounded-2xl border border-cloudline bg-white px-5 py-4 shadow-card",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600",children:r.jsx(tl,{className:"h-5 w-5"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs text-slate-muted",children:"Overall Progress"}),r.jsx("p",{className:"font-display text-lg font-extrabold text-ink",children:"50%"})]})]})})]}),r.jsx("div",{className:"mt-8 grid gap-4 sm:grid-cols-3",children:xg.map(e=>{const t=e.icon;return r.jsxs("div",{className:`\r
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
            `,children:[r.jsx("div",{className:"pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl"}),r.jsx("div",{className:"pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-meadow-500/10 blur-3xl"}),r.jsxs("div",{className:"relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between",children:[r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10",children:r.jsx(pe,{className:"h-7 w-7 text-sky-200"})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-sky-200",children:"Next Milestone"}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold",children:"Hope Champion"}),r.jsx("p",{className:"mt-2 max-w-xl text-sm leading-relaxed text-blue-100",children:"You're only 8 impact points away from becoming a Hope Champion."})]})]}),r.jsx("div",{className:"shrink-0",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"h-2 w-32 overflow-hidden rounded-full bg-white/15",children:r.jsx("div",{className:"h-full rounded-full bg-sky-300",style:{width:"91%"}})}),r.jsx("span",{className:"text-xs font-bold text-white",children:"82 / 90"})]})})]})]}),r.jsxs("section",{className:"mt-10",children:[r.jsxs("div",{className:"mb-5",children:[r.jsx("p",{className:"text-xs font-bold uppercase tracking-[0.16em] text-slate-muted",children:"Your Collection"}),r.jsx("h2",{className:"mt-1 font-display text-2xl font-extrabold text-ink",children:"All Achievements"})]}),r.jsx("div",{className:"grid gap-5 md:grid-cols-2 xl:grid-cols-3",children:pg.map(e=>{const t=e.icon,n=Math.min(e.progress/e.target*100,100);return r.jsxs("div",{className:`
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
                        `,children:r.jsx(t,{className:"h-7 w-7"})}),e.unlocked?r.jsxs("span",{className:"flex items-center gap-1 rounded-full bg-meadow-500/10 px-3 py-1.5 text-[10px] font-bold text-meadow-600",children:[r.jsx(ee,{className:"h-3.5 w-3.5"}),"Unlocked"]}):r.jsxs("span",{className:"flex items-center gap-1 rounded-full bg-mist px-3 py-1.5 text-[10px] font-bold text-slate-muted",children:[r.jsx(On,{className:"h-3.5 w-3.5"}),"Locked"]})]}),r.jsx("p",{className:"mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-sky-600",children:e.category}),r.jsx("h3",{className:"mt-1 font-display text-xl font-extrabold text-ink",children:e.title}),r.jsx("p",{className:"mt-2 min-h-[42px] text-sm leading-relaxed text-slate-muted",children:e.description}),!e.unlocked&&r.jsxs("div",{className:"mt-5",children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[r.jsx("span",{className:"text-[11px] font-semibold text-slate-muted",children:"Progress"}),r.jsxs("span",{className:"text-[11px] font-bold text-deepsea",children:[e.progress," / ",e.target]})]}),r.jsx("div",{className:"h-2 overflow-hidden rounded-full bg-sky-50",children:r.jsx("div",{className:"h-full rounded-full bg-sky-500 transition-all duration-700",style:{width:`${n}%`}})})]}),e.unlocked&&r.jsxs("div",{className:"mt-5 flex items-center gap-2 rounded-xl bg-meadow-500/5 px-3 py-2.5 text-xs font-semibold text-meadow-600",children:[r.jsx(ee,{className:"h-4 w-4"}),"Achievement earned"]})]},e.title)})})]}),r.jsx("section",{className:"mt-8 rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8",children:r.jsxs("div",{className:"flex flex-col gap-5 sm:flex-row sm:items-center",children:[r.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-sm",children:r.jsx(F,{className:"h-6 w-6 fill-current"})}),r.jsxs("div",{children:[r.jsx("h3",{className:"font-display text-lg font-extrabold text-ink",children:"Every contribution moves you forward."}),r.jsx("p",{className:"mt-1 text-sm leading-relaxed text-slate-muted",children:"Keep donating books, clothes and essential items to unlock more milestones and increase your impact."})]}),r.jsxs(O,{to:"/donate",className:`\r
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
                `,children:[r.jsx(ue,{className:"h-4 w-4"}),"Donate Now"]})]})})]})})]})}function ra(){ot();const[e,t]=x.useState(""),[n,s]=x.useState(""),[l,a]=x.useState(""),o=i=>{if(i.preventDefault(),a(""),e.trim().toLowerCase()==="admin@hopecloud.com"&&n==="admin123"){localStorage.setItem("hopecloud_admin_logged_in","true"),window.location.href="/admindashboard";return}a("Invalid admin email or password.")};return r.jsx("div",{className:"min-h-screen bg-mist px-4 py-10",children:r.jsx("div",{className:"flex min-h-[90vh] items-center justify-center",children:r.jsxs("div",{className:"w-full max-w-md",children:[r.jsxs("div",{className:"mb-8 text-center",children:[r.jsx("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-deepsea text-white shadow-glow",children:r.jsx(sn,{size:30})}),r.jsx("h1",{className:"mt-5 font-display text-3xl font-extrabold text-ink",children:"Admin Login"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Sign in to manage HopeCloud"})]}),r.jsx("div",{className:"rounded-3xl border border-cloudline bg-white p-7 shadow-card",children:r.jsxs("form",{onSubmit:o,className:"space-y-5",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Admin Email"}),r.jsxs("div",{className:"relative",children:[r.jsx(Yn,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"email",value:e,onChange:i=>t(i.target.value),placeholder:"admin@hopecloud.com",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(On,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"password",value:n,onChange:i=>s(i.target.value),placeholder:"Enter admin password",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),l&&r.jsx("div",{className:"rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600",children:l}),r.jsxs("button",{type:"submit",className:"flex w-full items-center justify-center gap-2 rounded-xl bg-deepsea px-5 py-3.5 text-sm font-bold text-white transition hover:bg-deepsea/90",children:["Login to Admin Panel",r.jsx(Ot,{size:17})]})]})}),r.jsx("p",{className:"mt-6 text-center text-xs text-slate-muted",children:"HopeCloud Administration Panel"})]})})})}function fi(){const e=Ve();ot();const t=[{label:"Dashboard",path:"/admindashboard",icon:di},{label:"Donations",path:"/admin/donations",icon:rn},{label:"Users",path:"/admin/users",icon:ln}],n=()=>{localStorage.removeItem("hopecloud_admin_logged_in"),window.location.href="/admindashboard"};return r.jsxs("aside",{className:"fixed left-0 top-0 hidden h-screen w-64 border-r border-cloudline bg-white lg:flex lg:flex-col",children:[r.jsxs("div",{className:"flex items-center gap-3 border-b border-cloudline px-6 py-5",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-deepsea text-white",children:r.jsx(sn,{size:21})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display font-extrabold text-ink",children:"HopeCloud"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Admin Panel"})]})]}),r.jsxs("nav",{className:"flex-1 space-y-2 px-4 py-6",children:[r.jsx("p",{className:"mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-muted",children:"Main Menu"}),t.map(s=>{const l=s.icon,a=e.pathname===s.path;return r.jsxs(O,{to:s.path,className:`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${a?"bg-deepsea text-white shadow-soft":"text-slate-muted hover:bg-mist hover:text-ink"}`,children:[r.jsx(l,{size:19}),s.label]},s.path)}),r.jsx("p",{className:"mb-3 mt-8 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-muted",children:"Account"}),r.jsxs(O,{to:"/admin/profile",className:`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${e.pathname==="/admin/profile"?"bg-deepsea text-white shadow-soft":"text-slate-muted hover:bg-mist hover:text-ink"}`,children:[r.jsx(el,{size:19}),"Admin Profile"]}),r.jsxs(O,{to:"/admin/add-admin",className:`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${e.pathname==="/admin/add-admin"?"bg-deepsea text-white shadow-soft":"text-slate-muted hover:bg-mist hover:text-ink"}`,children:[r.jsx(Ir,{size:19}),"Add Another Admin"]})]}),r.jsx("div",{className:"border-t border-cloudline p-4",children:r.jsxs("button",{type:"button",onClick:n,className:"flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-50",children:[r.jsx(Nl,{size:19}),"Logout"]})})]})}function hs({title:e,value:t,description:n,icon:s,iconBg:l="bg-sky-50",iconColor:a="text-sky-600"}){return r.jsx("div",{className:"rounded-2xl border border-cloudline bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card",children:r.jsxs("div",{className:"flex items-start justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-slate-muted",children:e}),r.jsx("h3",{className:"mt-2 font-display text-3xl font-extrabold text-ink",children:t}),n&&r.jsx("p",{className:"mt-2 text-xs text-slate-muted",children:n})]}),r.jsx("div",{className:`flex h-11 w-11 items-center justify-center rounded-xl ${l} ${a}`,children:s})]})})}function yg(){const e=[{donor:"Ayesha Khan",item:"Winter Clothes",category:"Clothes",status:"Pending",date:"Aug 30, 2026"},{donor:"Ali Raza",item:"School Books",category:"Books",status:"Approved",date:"Aug 29, 2026"},{donor:"Sara Ahmed",item:"Children Toys",category:"Children",status:"Pending",date:"Aug 28, 2026"},{donor:"Hassan Malik",item:"Food Packages",category:"Food",status:"Approved",date:"Aug 27, 2026"}];return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(fi,{}),r.jsx("main",{className:"lg:ml-64",children:r.jsxs("div",{className:"mx-auto max-w-7xl px-5 py-8 sm:px-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-600",children:"Administration"}),r.jsx("h1",{className:"mt-1 font-display text-3xl font-extrabold text-ink",children:"Dashboard Overview"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Monitor donations and HopeCloud activity."})]}),r.jsxs("div",{className:"grid gap-5 sm:grid-cols-2 xl:grid-cols-4",children:[r.jsx(hs,{title:"Total Donations",value:"248",description:"All submitted donations",icon:r.jsx(rn,{size:21})}),r.jsx(hs,{title:"Pending Donations",value:"32",description:"Waiting for review",icon:r.jsx(ui,{size:21}),iconBg:"bg-amber-50",iconColor:"text-amber-600"}),r.jsx(hs,{title:"Approved Donations",value:"216",description:"Successfully approved",icon:r.jsx(ee,{size:21}),iconBg:"bg-green-50",iconColor:"text-green-600"}),r.jsx(hs,{title:"Total Users",value:"1,284",description:"Registered HopeCloud users",icon:r.jsx(ln,{size:21}),iconBg:"bg-purple-50",iconColor:"text-purple-600"})]}),r.jsxs("div",{className:"mt-8 rounded-3xl border border-cloudline bg-white shadow-soft",children:[r.jsxs("div",{className:"flex flex-col gap-2 border-b border-cloudline px-6 py-5 sm:flex-row sm:items-center sm:justify-between",children:[r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Recent Donations"}),r.jsx("p",{className:"mt-1 text-xs text-slate-muted",children:"Latest donation submissions"})]}),r.jsx("button",{className:"text-sm font-bold text-sky-600 hover:text-sky-700",children:"View All"})]}),r.jsx("div",{className:"divide-y divide-cloudline",children:e.map((t,n)=>r.jsxs("div",{className:"flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx("div",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(rn,{size:20})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-bold text-ink",children:t.item}),r.jsxs("p",{className:"mt-1 text-xs text-slate-muted",children:["Donated by ",t.donor]})]})]}),r.jsxs("div",{className:"flex flex-wrap items-center gap-4 md:justify-end",children:[r.jsx("span",{className:"rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-muted",children:t.category}),r.jsx("span",{className:`rounded-full px-3 py-1 text-xs font-bold ${t.status==="Approved"?"bg-green-50 text-green-600":"bg-amber-50 text-amber-600"}`,children:t.status}),r.jsx("span",{className:"text-xs text-slate-muted",children:t.date})]})]},n))})]}),r.jsxs("div",{className:"mt-8 grid gap-5 md:grid-cols-2",children:[r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-soft",children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Donation Status"}),r.jsx("p",{className:"mt-2 text-sm leading-relaxed text-slate-muted",children:"You currently have 32 donations waiting for review. Review them to keep the donation process moving smoothly."}),r.jsx("div",{className:"mt-5 h-3 overflow-hidden rounded-full bg-mist",children:r.jsx("div",{className:"h-full rounded-full bg-sky",style:{width:"87%"}})}),r.jsx("p",{className:"mt-2 text-xs font-semibold text-slate-muted",children:"87% of donations approved"})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-deepsea p-6 text-white shadow-soft",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-200",children:"HopeCloud Impact"}),r.jsx("h2",{className:"mt-2 font-display text-2xl font-extrabold",children:"Every approved donation creates an opportunity."}),r.jsx("p",{className:"mt-3 text-sm leading-relaxed text-white/70",children:"Keep the platform organized and help connect useful resources with people who need them."})]})]})]})})]})}function vg(){const e={name:"HopeCloud Admin",email:"admin@hopecloud.com",role:"Administrator"};return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(fi,{}),r.jsx("main",{className:"lg:ml-64",children:r.jsxs("div",{className:"mx-auto max-w-5xl px-5 py-8 sm:px-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-600",children:"Account"}),r.jsx("h1",{className:"mt-1 font-display text-3xl font-extrabold text-ink",children:"Admin Profile"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Manage your administrator account information."})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-soft sm:p-8",children:[r.jsxs("div",{className:"flex flex-col gap-6 sm:flex-row sm:items-center",children:[r.jsx("div",{className:"flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-deepsea text-white",children:r.jsx(el,{size:42})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-2xl font-extrabold text-ink",children:e.name}),r.jsx("p",{className:"mt-1 text-sm text-slate-muted",children:e.email}),r.jsxs("span",{className:"mt-3 inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-600",children:[r.jsx(sn,{size:14}),e.role]})]})]}),r.jsxs("div",{className:"mt-8 grid gap-5 md:grid-cols-2",children:[r.jsx("div",{className:"rounded-2xl border border-cloudline bg-mist p-5",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600",children:r.jsx(el,{size:19})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs text-slate-muted",children:"Full Name"}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:e.name})]})]})}),r.jsx("div",{className:"rounded-2xl border border-cloudline bg-mist p-5",children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sky-600",children:r.jsx(Yn,{size:19})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-xs text-slate-muted",children:"Email Address"}),r.jsx("p",{className:"mt-1 text-sm font-bold text-ink",children:e.email})]})]})})]}),r.jsx("div",{className:"mt-6 rounded-2xl border border-cloudline p-5",children:r.jsxs("div",{className:"flex items-start gap-4",children:[r.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(On,{size:19})}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-sm font-bold text-ink",children:"Account Security"}),r.jsx("p",{className:"mt-1 text-sm text-slate-muted",children:"Your administrator account is protected with a password."}),r.jsx("button",{type:"button",className:"mt-4 rounded-xl border border-cloudline px-4 py-2 text-sm font-bold text-ink transition hover:bg-mist",children:"Change Password"})]})]})})]})]})})]})}function wg(){const[e,t]=x.useState({name:"",email:"",password:"",confirmPassword:""}),[n,s]=x.useState(!1),[l,a]=x.useState(""),o=c=>{t({...e,[c.target.name]:c.target.value}),a(""),s(!1)},i=c=>{if(c.preventDefault(),a(""),s(!1),e.password!==e.confirmPassword){a("Passwords do not match.");return}if(e.password.length<6){a("Password must be at least 6 characters.");return}const u=JSON.parse(localStorage.getItem("hopecloud_admins"))||[];u.push({id:Date.now(),name:e.name,email:e.email,role:"Administrator"}),localStorage.setItem("hopecloud_admins",JSON.stringify(u)),s(!0),t({name:"",email:"",password:"",confirmPassword:""})};return r.jsxs("div",{className:"min-h-screen bg-mist",children:[r.jsx(fi,{}),r.jsx("main",{className:"lg:ml-64",children:r.jsxs("div",{className:"mx-auto max-w-3xl px-5 py-8 sm:px-8",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("p",{className:"text-sm font-semibold text-sky-600",children:"Account Management"}),r.jsx("h1",{className:"mt-1 font-display text-3xl font-extrabold text-ink",children:"Add Another Admin"}),r.jsx("p",{className:"mt-2 text-sm text-slate-muted",children:"Create a new administrator account for HopeCloud."})]}),r.jsxs("div",{className:"rounded-3xl border border-cloudline bg-white p-6 shadow-soft sm:p-8",children:[r.jsxs("div",{className:"mb-7 flex items-center gap-4",children:[r.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600",children:r.jsx(Ir,{size:22})}),r.jsxs("div",{children:[r.jsx("h2",{className:"font-display text-lg font-extrabold text-ink",children:"Administrator Registration"}),r.jsx("p",{className:"text-xs text-slate-muted",children:"Enter the details for the new admin."})]})]}),r.jsxs("form",{onSubmit:i,className:"space-y-5",children:[r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Full Name"}),r.jsxs("div",{className:"relative",children:[r.jsx(el,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"text",name:"name",value:e.name,onChange:o,placeholder:"Enter admin name",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Email Address"}),r.jsxs("div",{className:"relative",children:[r.jsx(Yn,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"email",name:"email",value:e.email,onChange:o,placeholder:"admin@example.com",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(On,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"password",name:"password",value:e.password,onChange:o,placeholder:"Minimum 6 characters",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"mb-2 block text-sm font-semibold text-ink",children:"Confirm Password"}),r.jsxs("div",{className:"relative",children:[r.jsx(On,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-muted"}),r.jsx("input",{type:"password",name:"confirmPassword",value:e.confirmPassword,onChange:o,placeholder:"Confirm password",className:"w-full rounded-xl border border-cloudline bg-mist py-3 pl-11 pr-4 text-sm text-ink outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20",required:!0})]})]}),l&&r.jsx("div",{className:"rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600",children:l}),n&&r.jsxs("div",{className:"flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-600",children:[r.jsx(ee,{size:18}),"Admin account created successfully."]}),r.jsxs("button",{type:"submit",className:"flex w-full items-center justify-center gap-2 rounded-xl bg-deepsea px-5 py-3.5 text-sm font-bold text-white transition hover:bg-deepsea/90",children:[r.jsx(Ir,{size:18}),"Create Admin Account"]})]})]})]})})]})}function jg(){return r.jsxs(r.Fragment,{children:[r.jsx(k0,{}),r.jsxs("main",{children:[r.jsx(b0,{}),r.jsx(M0,{}),r.jsx(_0,{}),r.jsx(W0,{}),r.jsx(T0,{}),r.jsx(O0,{}),r.jsx($0,{}),r.jsx(H0,{})]}),r.jsx(B0,{})]})}function kg({title:e,description:t}){return r.jsx("div",{className:"min-h-screen bg-mist",children:r.jsx("div",{className:"flex min-h-screen items-center justify-center px-6",children:r.jsxs("div",{className:"w-full max-w-lg rounded-3xl border border-cloudline bg-white p-8 text-center shadow-card",children:[r.jsx("div",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600",children:r.jsx("span",{className:"text-2xl",children:"✨"})}),r.jsx("h1",{className:"mt-5 font-display text-2xl font-extrabold text-ink",children:e}),r.jsx("p",{className:"mt-3 text-sm leading-relaxed text-slate-muted",children:t}),r.jsx(O,{to:"/user-dashboard",className:"btn-primary mt-6",children:"Back to Dashboard"})]})})})}function Ng(){return r.jsx(v0,{children:r.jsxs(lx,{children:[r.jsx(ve,{path:"/",element:r.jsx(jg,{})}),r.jsx(ve,{path:"/login",element:r.jsx(Y0,{})}),r.jsx(ve,{path:"/register",element:r.jsx(Q0,{})}),r.jsxs(ve,{element:r.jsx(w0,{}),children:[r.jsx(ve,{path:"/user-dashboard",element:r.jsx(ig,{})}),r.jsx(ve,{path:"/user-dashboard/donations",element:r.jsx(ug,{})}),r.jsx(ve,{path:"/user-dashboard/impact",element:r.jsx(fg,{})}),r.jsx(ve,{path:"/user-dashboard/profile",element:r.jsx(hg,{})}),r.jsx(ve,{path:"/user-dashboard/achievements",element:r.jsx(gg,{})}),r.jsx(ve,{path:"/user-dashboard/settings",element:r.jsx(kg,{title:"Settings",description:"Account preferences and dashboard settings will be available here."})}),r.jsx(ve,{path:"/donate",element:r.jsx(q0,{})})]}),r.jsx(ve,{path:"/admindashboard",element:localStorage.getItem("hopecloud_admin_logged_in")==="true"?r.jsx(yg,{}):r.jsx(ra,{})}),r.jsx(ve,{path:"/admin/profile",element:localStorage.getItem("hopecloud_admin_logged_in")==="true"?r.jsx(vg,{}):r.jsx(ra,{})}),r.jsx(ve,{path:"/admin/add-admin",element:localStorage.getItem("hopecloud_admin_logged_in")==="true"?r.jsx(wg,{}):r.jsx(ra,{})})]})})}sa.createRoot(document.getElementById("root")).render(r.jsx(Bm.StrictMode,{children:r.jsx(Rx,{children:r.jsx(Ng,{})})}));
