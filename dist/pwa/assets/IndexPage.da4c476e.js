import{i as Qe,r as T,o as le,w as U,a as k,B as Ue,g as Y,f as ye,d as fe,C as je,D as Ze,E as Te,F as be,e as G,G as Oe,H as Ne,h as M,I as oe,T as Je,J as Ye,K as Ge,c as ve,L as qe,p as We,j as te,k as Xe,m as et,u as W,M as de,y as ae,x as xe,N as V,z as re,O as ne,P as tt,Q as ot,v as ge,R as Se,S as Me,U as at}from"./index.67f63d9b.js";import{Q as Re,a as nt,v as lt,b as Ae}from"./QBtn.be715d43.js";import{h as X}from"./dom.4741de82.js";import{_ as rt}from"./plugin-vue_export-helper.21dcd24c.js";let he,ie=0;const K=new Array(256);for(let e=0;e<256;e++)K[e]=(e+256).toString(16).substring(1);const it=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),Fe=4096;function _e(){(he===void 0||ie+16>Fe)&&(ie=0,he=it(Fe));const e=Array.prototype.slice.call(he,ie,ie+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,K[e[0]]+K[e[1]]+K[e[2]]+K[e[3]]+"-"+K[e[4]]+K[e[5]]+"-"+K[e[6]]+K[e[7]]+"-"+K[e[8]]+K[e[9]]+"-"+K[e[10]]+K[e[11]]+K[e[12]]+K[e[13]]+K[e[14]]+K[e[15]]}function ut(e){return e==null?null:e}function Ve(e,t){return e==null?t===!0?`f_${_e()}`:null:e}function st({getValue:e,required:t=!0}={}){if(Qe.value===!0){const o=e!==void 0?T(ut(e())):T(null);return t===!0&&o.value===null&&le(()=>{o.value=`f_${_e()}`}),e!==void 0&&U(e,n=>{o.value=Ve(n,t)}),o}return e!==void 0?k(()=>Ve(e(),t)):T(`f_${_e()}`)}const Ee=/^on[A-Z]/;function dt(){const{attrs:e,vnode:t}=Y(),o={listeners:T({}),attributes:T({})};function n(){const d={},s={};for(const v in e)v!=="class"&&v!=="style"&&Ee.test(v)===!1&&(d[v]=e[v]);for(const v in t.props)Ee.test(v)===!0&&(s[v]=t.props[v]);o.attributes.value=d,o.listeners.value=s}return Ue(n),n(),o}const Le={dark:{type:Boolean,default:null}};function Ke(e,t){return k(()=>e.dark===null?t.dark.isActive:e.dark)}function ct({validate:e,resetValidation:t,requiresQForm:o}){const n=ye(je,!1);if(n!==!1){const{props:d,proxy:s}=Y();Object.assign(s,{validate:e,resetValidation:t}),U(()=>d.disable,v=>{v===!0?(typeof t=="function"&&t(),n.unbindComponent(s)):n.bindComponent(s)}),le(()=>{d.disable!==!0&&n.bindComponent(s)}),fe(()=>{d.disable!==!0&&n.unbindComponent(s)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const Be=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Pe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,$e=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ue=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,se=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,pe={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Be.test(e),hexaColor:e=>Pe.test(e),hexOrHexaColor:e=>$e.test(e),rgbColor:e=>ue.test(e),rgbaColor:e=>se.test(e),rgbOrRgbaColor:e=>ue.test(e)||se.test(e),hexOrRgbColor:e=>Be.test(e)||ue.test(e),hexaOrRgbaColor:e=>Pe.test(e)||se.test(e),anyColor:e=>$e.test(e)||ue.test(e)||se.test(e)},ft=[!0,!1,"ondemand"],vt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>ft.includes(e)}};function mt(e,t){const{props:o,proxy:n}=Y(),d=T(!1),s=T(null),v=T(!1);ct({validate:F,resetValidation:_});let p=0,w;const h=k(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length!==0),f=k(()=>o.disable!==!0&&h.value===!0&&t.value===!1),g=k(()=>o.error===!0||d.value===!0),L=k(()=>typeof o.errorMessage=="string"&&o.errorMessage.length!==0?o.errorMessage:s.value);U(()=>o.modelValue,()=>{v.value=!0,f.value===!0&&o.lazyRules===!1&&O()});function m(){o.lazyRules!=="ondemand"&&f.value===!0&&v.value===!0&&O()}U(()=>o.reactiveRules,H=>{H===!0?w===void 0&&(w=U(()=>o.rules,m,{immediate:!0,deep:!0})):w!==void 0&&(w(),w=void 0)},{immediate:!0}),U(()=>o.lazyRules,m),U(e,H=>{H===!0?v.value=!0:f.value===!0&&o.lazyRules!=="ondemand"&&O()});function _(){p++,t.value=!1,v.value=!1,d.value=!1,s.value=null,O.cancel()}function F(H=o.modelValue){if(o.disable===!0||h.value===!1)return!0;const z=++p,E=t.value!==!0?()=>{v.value=!0}:()=>{},B=(R,S)=>{R===!0&&E(),d.value=R,s.value=S||null,t.value=!1},P=[];for(let R=0;R<o.rules.length;R++){const S=o.rules[R];let N;if(typeof S=="function"?N=S(H,pe):typeof S=="string"&&pe[S]!==void 0&&(N=pe[S](H)),N===!1||typeof N=="string")return B(!0,N),!1;N!==!0&&N!==void 0&&P.push(N)}return P.length===0?(B(!1),!0):(t.value=!0,Promise.all(P).then(R=>{if(R===void 0||Array.isArray(R)===!1||R.length===0)return z===p&&B(!1),!0;const S=R.find(N=>N===!1||typeof N=="string");return z===p&&B(S!==void 0,S),S===void 0},R=>(z===p&&(console.error(R),B(!0)),!1)))}const O=Ze(F,0);return fe(()=>{w!==void 0&&w(),O.cancel()}),Object.assign(n,{resetValidation:_,validate:F}),Te(n,"hasError",()=>g.value),{isDirtyModel:v,hasRules:h,hasError:g,errorMessage:L,validate:F,resetValidation:_}}let Ce=[],gt=[];function we(e){gt.length===0?e():Ce.push(e)}function ht(e){Ce=Ce.filter(t=>t!==e)}function ke(e){return e!=null&&(""+e).length!==0}const pt={...Le,...vt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},yt={...pt,maxlength:[Number,String]},bt=["update:modelValue","clear","focus","blur"];function xt({requiredForAttr:e=!0,tagProp:t,changeEvent:o=!1}={}){const{props:n,proxy:d}=Y(),s=Ke(n,d.$q),v=st({required:e,getValue:()=>n.for});return{requiredForAttr:e,changeEvent:o,tag:t===!0?k(()=>n.tag):{value:"label"},isDark:s,editable:k(()=>n.disable!==!0&&n.readonly!==!0),innerLoading:T(!1),focused:T(!1),hasPopupOpen:!1,splitAttrs:dt(),targetUid:v,rootRef:T(null),targetRef:T(null),controlRef:T(null)}}function _t(e){const{props:t,emit:o,slots:n,attrs:d,proxy:s}=Y(),{$q:v}=s;let p=null;e.hasValue===void 0&&(e.hasValue=k(()=>ke(t.modelValue))),e.emitValue===void 0&&(e.emitValue=u=>{o("update:modelValue",u)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:l}),Object.assign(e,{clearValue:c,onControlFocusin:r,onControlFocusout:l,focus:S}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const u=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,y=t.maxlength!==void 0?t.maxlength:t.maxValues;return u+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:w,hasRules:h,hasError:f,errorMessage:g,resetValidation:L}=mt(e.focused,e.innerLoading),m=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=k(()=>t.bottomSlots===!0||t.hint!==void 0||h.value===!0||t.counter===!0||t.error!==null),F=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=k(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(m.value===!0?" q-field--float":"")+(z.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(f.value===!0?" q-field--error":"")+(f.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),H=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(f.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),z=k(()=>t.labelSlot===!0||t.label!==void 0),E=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&f.value!==!0?` text-${t.labelColor}`:"")),B=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:m.value,modelValue:t.modelValue,emitValue:e.emitValue})),P=k(()=>{const u={};return e.targetUid.value&&(u.for=e.targetUid.value),t.disable===!0&&(u["aria-disabled"]="true"),u});function R(){const u=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(u===null||u.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==u&&y.focus({preventScroll:!0}))}function S(){we(R)}function N(){ht(R);const u=document.activeElement;u!==null&&e.rootRef.value.contains(u)&&u.blur()}function r(u){p!==null&&(clearTimeout(p),p=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",u))}function l(u,y){p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,o("blur",u)),y!==void 0&&y())})}function c(u){be(u),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),e.changeEvent===!0&&o("change",null),o("clear",t.modelValue),G(()=>{const y=w.value;L(),w.value=y})}function i(u){[13,32].includes(u.keyCode)&&c(u)}function C(){const u=[];return n.prepend!==void 0&&u.push(M("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:oe},n.prepend())),u.push(M("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),f.value===!0&&t.noErrorIcon===!1&&u.push(x("error",[M(Re,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?u.push(x("inner-loading-append",n.loading!==void 0?n.loading():[M(nt,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&u.push(x("inner-clearable-append",[M(Re,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-label":v.lang.label.clear,onKeyup:i,onClick:c})])),n.append!==void 0&&u.push(M("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:oe},n.append())),e.getInnerAppend!==void 0&&u.push(x("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&u.push(e.getControlChild()),u}function b(){const u=[];return t.prefix!==void 0&&t.prefix!==null&&u.push(M("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&u.push(e.getShadowControl()),e.getControl!==void 0?u.push(e.getControl()):n.rawControl!==void 0?u.push(n.rawControl()):n.control!==void 0&&u.push(M("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(B.value))),z.value===!0&&u.push(M("div",{class:E.value},X(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&u.push(M("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),u.concat(X(n.default))}function $(){let u,y;f.value===!0?g.value!==null?(u=[M("div",{role:"alert"},g.value)],y=`q--slot-error-${g.value}`):(u=X(n.error),y="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(u=[M("div",t.hint)],y=`q--slot-hint-${t.hint}`):(u=X(n.hint),y="q--slot-hint"));const A=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&A===!1&&u===void 0)return;const I=M("div",{key:y,class:"q-field__messages col"},u);return M("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:oe},[t.hideBottomSpace===!0?I:M(Je,{name:"q-transition--field-message"},()=>I),A===!0?M("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function x(u,y){return y===null?null:M("div",{key:u,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}let q=!1;return Oe(()=>{q=!0}),Ne(()=>{q===!0&&t.autofocus===!0&&s.focus()}),t.autofocus===!0&&le(()=>{s.focus()}),fe(()=>{p!==null&&clearTimeout(p)}),Object.assign(s,{focus:S,blur:N}),function(){const y=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...P.value}:P.value;return M(e.tag.value,{ref:e.rootRef,class:[O.value,d.class],style:d.style,...y},[n.before!==void 0?M("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:oe},n.before()):null,M("div",{class:"q-field__inner relative-position col self-stretch"},[M("div",{ref:e.controlRef,class:H.value,tabindex:-1,...e.controlEvents},C()),_.value===!0?$():null]),n.after!==void 0?M("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:oe},n.after()):null])}}const Ie={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ce={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},He=Object.keys(ce);He.forEach(e=>{ce[e].regex=new RegExp(ce[e].pattern)});const Ct=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+He.join("")+"])|(.)","g"),De=/[.*+?^${}()|[\]\\]/g,j=String.fromCharCode(1),kt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function wt(e,t,o,n){let d,s,v,p,w,h;const f=T(null),g=T(m());function L(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}U(()=>e.type+e.autogrow,F),U(()=>e.mask,r=>{if(r!==void 0)O(g.value,!0);else{const l=S(g.value);F(),e.modelValue!==l&&t("update:modelValue",l)}}),U(()=>e.fillMask+e.reverseFillMask,()=>{f.value===!0&&O(g.value,!0)}),U(()=>e.unmaskedValue,()=>{f.value===!0&&O(g.value)});function m(){if(F(),f.value===!0){const r=P(S(e.modelValue));return e.fillMask!==!1?N(r):r}return e.modelValue}function _(r){if(r<d.length)return d.slice(-r);let l="",c=d;const i=c.indexOf(j);if(i!==-1){for(let C=r-c.length;C>0;C--)l+=j;c=c.slice(0,i)+l+c.slice(i)}return c}function F(){if(f.value=e.mask!==void 0&&e.mask.length!==0&&L(),f.value===!1){p=void 0,d="",s="";return}const r=Ie[e.mask]===void 0?e.mask:Ie[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",c=l.replace(De,"\\$&"),i=[],C=[],b=[];let $=e.reverseFillMask===!0,x="",q="";r.replace(Ct,(I,a,D,J,Z)=>{if(J!==void 0){const Q=ce[J];b.push(Q),q=Q.negate,$===!0&&(C.push("(?:"+q+"+)?("+Q.pattern+"+)?(?:"+q+"+)?("+Q.pattern+"+)?"),$=!1),C.push("(?:"+q+"+)?("+Q.pattern+")?")}else if(D!==void 0)x="\\"+(D==="\\"?"":D),b.push(D),i.push("([^"+x+"]+)?"+x+"?");else{const Q=a!==void 0?a:Z;x=Q==="\\"?"\\\\\\\\":Q.replace(De,"\\\\$&"),b.push(Q),i.push("([^"+x+"]+)?"+x+"?")}});const u=new RegExp("^"+i.join("")+"("+(x===""?".":"[^"+x+"]")+"+)?"+(x===""?"":"["+x+"]*")+"$"),y=C.length-1,A=C.map((I,a)=>a===0&&e.reverseFillMask===!0?new RegExp("^"+c+"*"+I):a===y?new RegExp("^"+I+"("+(q===""?".":q)+"+)?"+(e.reverseFillMask===!0?"$":c+"*")):new RegExp("^"+I));v=b,p=I=>{const a=u.exec(e.reverseFillMask===!0?I:I.slice(0,b.length+1));a!==null&&(I=a.slice(1).join(""));const D=[],J=A.length;for(let Z=0,Q=I;Z<J;Z++){const ee=A[Z].exec(Q);if(ee===null)break;Q=Q.slice(ee.shift().length),D.push(...ee)}return D.length!==0?D.join(""):I},d=b.map(I=>typeof I=="string"?I:j).join(""),s=d.split(j).join(l)}function O(r,l,c){const i=n.value,C=i.selectionEnd,b=i.value.length-C,$=S(r);l===!0&&F();const x=P($),q=e.fillMask!==!1?N(x):x,u=g.value!==q;i.value!==q&&(i.value=q),u===!0&&(g.value=q),document.activeElement===i&&G(()=>{if(q===s){const A=e.reverseFillMask===!0?s.length:0;i.setSelectionRange(A,A,"forward");return}if(c==="insertFromPaste"&&e.reverseFillMask!==!0){const A=i.selectionEnd;let I=C-1;for(let a=w;a<=I&&a<A;a++)d[a]!==j&&I++;z.right(i,I);return}if(["deleteContentBackward","deleteContentForward"].indexOf(c)!==-1){const A=e.reverseFillMask===!0?C===0?q.length>x.length?1:0:Math.max(0,q.length-(q===s?0:Math.min(x.length,b)+1))+1:C;i.setSelectionRange(A,A,"forward");return}if(e.reverseFillMask===!0)if(u===!0){const A=Math.max(0,q.length-(q===s?0:Math.min(x.length,b+1)));A===1&&C===1?i.setSelectionRange(A,A,"forward"):z.rightReverse(i,A)}else{const A=q.length-b;i.setSelectionRange(A,A,"backward")}else if(u===!0){const A=Math.max(0,d.indexOf(j),Math.min(x.length,C)-1);z.right(i,A)}else{const A=C-1;z.right(i,A)}});const y=e.unmaskedValue===!0?S(q):q;String(e.modelValue)!==y&&(e.modelValue!==null||y!=="")&&o(y,!0)}function H(r,l,c){const i=P(S(r.value));l=Math.max(0,d.indexOf(j),Math.min(i.length,l)),w=l,r.setSelectionRange(l,c,"forward")}const z={left(r,l){const c=d.slice(l-1).indexOf(j)===-1;let i=Math.max(0,l-1);for(;i>=0;i--)if(d[i]===j){l=i,c===!0&&l++;break}if(i<0&&d[l]!==void 0&&d[l]!==j)return z.right(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},right(r,l){const c=r.value.length;let i=Math.min(c,l+1);for(;i<=c;i++)if(d[i]===j){l=i;break}else d[i-1]===j&&(l=i);if(i>c&&d[l-1]!==void 0&&d[l-1]!==j)return z.left(r,c);r.setSelectionRange(l,l,"forward")},leftReverse(r,l){const c=_(r.value.length);let i=Math.max(0,l-1);for(;i>=0;i--)if(c[i-1]===j){l=i;break}else if(c[i]===j&&(l=i,i===0))break;if(i<0&&c[l]!==void 0&&c[l]!==j)return z.rightReverse(r,0);l>=0&&r.setSelectionRange(l,l,"backward")},rightReverse(r,l){const c=r.value.length,i=_(c),C=i.slice(0,l+1).indexOf(j)===-1;let b=Math.min(c,l+1);for(;b<=c;b++)if(i[b-1]===j){l=b,l>0&&C===!0&&l--;break}if(b>c&&i[l-1]!==void 0&&i[l-1]!==j)return z.leftReverse(r,c);r.setSelectionRange(l,l,"forward")}};function E(r){t("click",r),h=void 0}function B(r){if(t("keydown",r),Ye(r)===!0||r.altKey===!0)return;const l=n.value,c=l.selectionStart,i=l.selectionEnd;if(r.shiftKey||(h=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&h===void 0&&(h=l.selectionDirection==="forward"?c:i);const C=z[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),C(l,h===c?i:c),r.shiftKey){const b=l.selectionStart;l.setSelectionRange(Math.min(h,b),Math.max(h,b),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&c===i?(z.left(l,c),l.setSelectionRange(l.selectionStart,i,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&c===i&&(z.rightReverse(l,i),l.setSelectionRange(c,l.selectionEnd,"forward"))}function P(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return R(r);const l=v;let c=0,i="";for(let C=0;C<l.length;C++){const b=r[c],$=l[C];if(typeof $=="string")i+=$,b===$&&c++;else if(b!==void 0&&$.regex.test(b))i+=$.transform!==void 0?$.transform(b):b,c++;else return i}return i}function R(r){const l=v,c=d.indexOf(j);let i=r.length-1,C="";for(let b=l.length-1;b>=0&&i!==-1;b--){const $=l[b];let x=r[i];if(typeof $=="string")C=$+C,x===$&&i--;else if(x!==void 0&&$.regex.test(x))do C=($.transform!==void 0?$.transform(x):x)+C,i--,x=r[i];while(c===b&&x!==void 0&&$.regex.test(x));else return C}return C}function S(r){return typeof r!="string"||p===void 0?typeof r=="number"?p(""+r):r:p(r)}function N(r){return s.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?s.slice(0,-r.length)+r:r+s.slice(r.length)}return{innerValue:g,hasMask:f,moveCursorForPaste:H,updateMaskValue:O,onMaskedKeydown:B,onMaskedClick:E}}const qt={name:String};function St(e){return k(()=>e.name||e.for)}function Mt(e,t){function o(){const n=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(s=>{d.items.add(s)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?k(()=>{if(e.type==="file")return o()}):k(o)}const Rt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,At=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ft=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Vt=/[a-z0-9_ -]$/i;function Et(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(Ge.is.firefox===!0?Vt.test(o.data)===!1:Rt.test(o.data)===!0||At.test(o.data)===!0||Ft.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}var Bt=ve({name:"QInput",inheritAttrs:!1,props:{...yt,...kt,...qt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...bt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:o}){const{proxy:n}=Y(),{$q:d}=n,s={};let v=NaN,p,w,h=null,f;const g=T(null),L=St(e),{innerValue:m,hasMask:_,moveCursorForPaste:F,updateMaskValue:O,onMaskedKeydown:H,onMaskedClick:z}=wt(e,t,x,g),E=Mt(e,!0),B=k(()=>ke(m.value)),P=Et(b),R=xt({changeEvent:!0}),S=k(()=>e.type==="textarea"||e.autogrow===!0),N=k(()=>S.value===!0||["text","search","url","tel","password"].includes(e.type)),r=k(()=>{const a={...R.splitAttrs.listeners.value,onInput:b,onPaste:C,onChange:u,onBlur:y,onFocus:qe};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=P,_.value===!0&&(a.onKeydown=H,a.onClick=z),e.autogrow===!0&&(a.onAnimationend=$),a}),l=k(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:L.value,...R.splitAttrs.attributes.value,id:R.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return S.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});U(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),U(()=>e.modelValue,a=>{if(_.value===!0){if(w===!0&&(w=!1,String(a)===v))return;O(a)}else m.value!==a&&(m.value=a,e.type==="number"&&s.hasOwnProperty("value")===!0&&(p===!0?p=!1:delete s.value));e.autogrow===!0&&G(q)}),U(()=>e.autogrow,a=>{a===!0?G(q):g.value!==null&&o.rows>0&&(g.value.style.height="auto")}),U(()=>e.dense,()=>{e.autogrow===!0&&G(q)});function c(){we(()=>{const a=document.activeElement;g.value!==null&&g.value!==a&&(a===null||a.id!==R.targetUid.value)&&g.value.focus({preventScroll:!0})})}function i(){g.value!==null&&g.value.select()}function C(a){if(_.value===!0&&e.reverseFillMask!==!0){const D=a.target;F(D,D.selectionStart,D.selectionEnd)}t("paste",a)}function b(a){if(!a||!a.target)return;if(e.type==="file"){t("update:modelValue",a.target.files);return}const D=a.target.value;if(a.target.qComposing===!0){s.value=D;return}if(_.value===!0)O(D,!1,a.inputType);else if(x(D),N.value===!0&&a.target===document.activeElement){const{selectionStart:J,selectionEnd:Z}=a.target;J!==void 0&&Z!==void 0&&G(()=>{a.target===document.activeElement&&D.indexOf(a.target.value)===0&&a.target.setSelectionRange(J,Z)})}e.autogrow===!0&&q()}function $(a){t("animationend",a),q()}function x(a,D){f=()=>{h=null,e.type!=="number"&&s.hasOwnProperty("value")===!0&&delete s.value,e.modelValue!==a&&v!==a&&(v=a,D===!0&&(w=!0),t("update:modelValue",a),G(()=>{v===a&&(v=NaN)})),f=void 0},e.type==="number"&&(p=!0,s.value=a),e.debounce!==void 0?(h!==null&&clearTimeout(h),s.value=a,h=setTimeout(f,e.debounce)):f()}function q(){requestAnimationFrame(()=>{const a=g.value;if(a!==null){const D=a.parentNode.style,{scrollTop:J}=a,{overflowY:Z,maxHeight:Q}=d.platform.is.firefox===!0?{}:window.getComputedStyle(a),ee=Z!==void 0&&Z!=="scroll";ee===!0&&(a.style.overflowY="hidden"),D.marginBottom=a.scrollHeight-1+"px",a.style.height="1px",a.style.height=a.scrollHeight+"px",ee===!0&&(a.style.overflowY=parseInt(Q,10)<a.scrollHeight?"auto":"hidden"),D.marginBottom="",a.scrollTop=J}})}function u(a){P(a),h!==null&&(clearTimeout(h),h=null),f!==void 0&&f(),t("change",a.target.value)}function y(a){a!==void 0&&qe(a),h!==null&&(clearTimeout(h),h=null),f!==void 0&&f(),p=!1,w=!1,delete s.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=m.value!==void 0?m.value:"")})}function A(){return s.hasOwnProperty("value")===!0?s.value:m.value!==void 0?m.value:""}fe(()=>{y()}),le(()=>{e.autogrow===!0&&q()}),Object.assign(R,{innerValue:m,fieldClass:k(()=>`q-${S.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:x,hasValue:B,floatingLabel:k(()=>B.value===!0&&(e.type!=="number"||isNaN(m.value)===!1)||ke(e.displayValue)),getControl:()=>M(S.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...l.value,...r.value,...e.type!=="file"?{value:A()}:E.value}),getShadowControl:()=>M("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(S.value===!0?"":" text-no-wrap")},[M("span",{class:"invisible"},A()),M("span",e.shadowText)])});const I=_t(R);return Object.assign(n,{focus:c,select:i,getNativeElement:()=>g.value}),Te(n,"nativeEl",()=>g.value),I}}),Pt=ve({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:o}){const n=Y(),d=T(null);let s=0;const v=[];function p(m){const _=typeof m=="boolean"?m:e.noErrorFocus!==!0,F=++s,O=(E,B)=>{o(`validation${E===!0?"Success":"Error"}`,B)},H=E=>{const B=E.validate();return typeof B.then=="function"?B.then(P=>({valid:P,comp:E}),P=>({valid:!1,comp:E,err:P})):Promise.resolve({valid:B,comp:E})};return(e.greedy===!0?Promise.all(v.map(H)).then(E=>E.filter(B=>B.valid!==!0)):v.reduce((E,B)=>E.then(()=>H(B).then(P=>{if(P.valid===!1)return Promise.reject(P)})),Promise.resolve()).catch(E=>[E])).then(E=>{if(E===void 0||E.length===0)return F===s&&O(!0),!0;if(F===s){const{comp:B,err:P}=E[0];if(P!==void 0&&console.error(P),O(!1,B),_===!0){const R=E.find(({comp:S})=>typeof S.focus=="function"&&lt(S.$)===!1);R!==void 0&&R.comp.focus()}}return!1})}function w(){s++,v.forEach(m=>{typeof m.resetValidation=="function"&&m.resetValidation()})}function h(m){m!==void 0&&be(m);const _=s+1;p().then(F=>{_===s&&F===!0&&(e.onSubmit!==void 0?o("submit",m):m!==void 0&&m.target!==void 0&&typeof m.target.submit=="function"&&m.target.submit())})}function f(m){m!==void 0&&be(m),o("reset"),G(()=>{w(),e.autofocus===!0&&e.noResetFocus!==!0&&g()})}function g(){we(()=>{if(d.value===null)return;const m=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),_=>_.tabIndex!==-1);m!=null&&m.focus({preventScroll:!0})})}We(je,{bindComponent(m){v.push(m)},unbindComponent(m){const _=v.indexOf(m);_!==-1&&v.splice(_,1)}});let L=!1;return Oe(()=>{L=!0}),Ne(()=>{L===!0&&e.autofocus===!0&&g()}),le(()=>{e.autofocus===!0&&g()}),Object.assign(n.proxy,{validate:p,resetValidation:w,submit:h,reset:f,focus:g,getValidationComponents:()=>v}),()=>M("form",{class:"q-form",ref:d,onSubmit:h,onReset:f},X(t.default))}}),$t=ve({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:o}}=Y(),n=ye(Xe,te);if(n===te)return console.error("QPage needs to be a deep child of QLayout"),te;if(ye(et,te)===te)return console.error("QPage needs to be child of QPageContainer"),te;const s=k(()=>{const p=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const w=n.isContainer.value===!0?n.containerHeight.value:o.screen.height;return e.styleFn(p,w)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-p+"px":o.screen.height===0?p!==0?`calc(100vh - ${p}px)`:"100vh":o.screen.height-p+"px"}}),v=k(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>M("main",{class:v.value,style:s.value},X(t.default))}}),It=ve({name:"QCard",props:{...Le,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=Y(),n=Ke(e,o),d=k(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>M(e.tag,{class:d.value},X(t.default))}});const me=e=>(tt("data-v-5aae1ec1"),e=e(),ot(),e),Dt={class:"text-indigo-10"},zt=me(()=>V("strong",{class:"text-dark"},"Nome:",-1)),jt=me(()=>V("strong",null,"Endere\xE7o:",-1)),Tt=me(()=>V("strong",null,"Total da entrega:",-1)),Ot={class:"text-red text-bold"},Nt=me(()=>V("strong",{class:"text-dark"},"Peso:",-1)),Lt={__name:"CardPedidos",props:{nomeDestinatario:{type:String,required:!0,default:""},enderecoDestinatario:{type:String,required:!0,default:""},totalEntrega:{type:Number,required:!0,default:0},peso:{type:Number,required:!0,default:0}},setup(e){return(t,o)=>(W(),de("div",null,[ae(It,{class:"q-pa-sm q-px-md cardEntregas"},{default:xe(()=>[V("p",Dt,[zt,re(" "+ne(e.nomeDestinatario),1)]),V("p",null,[jt,re(" "+ne(e.enderecoDestinatario),1)]),V("p",null,[Tt,re(" "+ne(e.totalEntrega),1)]),V("p",Ot,[Nt,re(" "+ne(e.peso)+" Kg ",1)])]),_:1})]))}};var ze=rt(Lt,[["__scopeId","data-v-5aae1ec1"]]);const Kt={class:"flex justify-center"},Ht={class:"container q-mt-md"},Qt={class:"row flex justify-center q-gutter-sm"},Ut={class:"col-sm-4 col-xs-12 containerCard"},Zt={class:"row justify-between"},Jt=V("div",{class:"col-12 text-bold flex justify-center items-center q-pa-sm text-h6"}," Informa\xE7\xF5es dos pedidos ",-1),Yt={class:"col-xs-12 col-sm-7 containerCard"},Gt={class:"row full-width flex justify-center q-mt-md"},Wt=V("p",{class:"text-h5 text-bold"},"Capacidade da mochila",-1),Xt={key:0,class:"col-12 flex justify-center"},eo=V("p",{class:"textoMochila text-red-10 q-px-md"}," * Digite a capacidade da mochila no campo abaixo e clique no bot\xE3o para otimizar a mochila. ",-1),to=[eo],oo={class:"col-12 flex justify-center",else:""},ao={class:"text-red text-bold text-h4 text-center",else:""},no={class:"row flex full-width"},lo={class:"full-width row flex justify-center q-gutter-x-lg q-mt-md"},ro={class:"col-sm-4"},io={class:"col-sm-4"},uo={class:"row flex justify-center"},so=V("div",{class:"full-width flex justify-center items-center cardResultado tituloResposta"}," Pedidos que cabem na mochila ",-1),co={class:"row q-mt-md"},ho={__name:"IndexPage",setup(e){const t=T(),o=T([]),n={id:1,nome:"McDonalds",localizacao:[-38.9450632,-12.2560224],endereco:"Av. Get\xFAlio Vargas, 1795 - Capuchinhos, Feira de Santana - BA, 44076-015",entregas:[{id:1,destinatario:"Lucas Silva",endereco:"Travessa Serrol\xE2ndia, 30, Caseb, Feira de Santana - BA, 44052-168",localizacao:[-38.9349956,-12.2384015],produtos:[{id:12,nome:"Pizza Hut Brotinho",quantidade:1,preco_unitario:16.9,subtotal:16.9,desconto:0,total:16.9}],total_entrega:16.9,total_desconto:0,codigo_entrega:3542,pago:!1,tipo_pagamento:[{id:5,nome:"Cart\xE3o de Cr\xE9dito VISA \xC1 vista",bandeira:"VISA"}],peso:.25},{id:2,destinatario:"Marcela Almeida",endereco:"R. Araraquara, 10 - Caseb, Feira de Santana - BA, 44052-061",localizacao:[-12.240613,-38.943099],produtos:[{id:33,nome:"Pizza Hut Box",quantidade:1,preco_unitario:30.9,subtotal:30.9,desconto:0,total:30.9},{id:55,nome:"Coca Cola 1L",quantidade:2,preco_unitario:6.9,subtotal:13.8,desconto:0,total:13.8}],total_entrega:44.7,total_desconto:0,codigo_entrega:3544,pago:!1,tipo_pagamento:[{id:8,nome:"Cart\xE3o de Cr\xE9dito MASTERCARD \xC1 vista",bandeira:"MASTERCARD"}],peso:1.2},{id:3,destinatario:"Jo\xE3o Pedro",endereco:"R. Gov. Juraci Magalh\xE3es, 870 - Ponto Central, Feira de Santana - BA, 44075-115",localizacao:[-12.2467237,-38.9514906],produtos:[{id:12,nome:"Pizza Hut Brotinho",quantidade:1,preco_unitario:16.9,subtotal:16.9,desconto:0,total:16.9},{id:55,nome:"Coca Cola 1L",quantidade:1,preco_unitario:6.9,subtotal:6.9,desconto:0,total:6.9}],total_entrega:23.8,total_desconto:0,codigo_entrega:3545,pago:!1,tipo_pagamento:[{id:5,nome:"Cart\xE3o de Cr\xE9dito VISA \xC1 vista",bandeira:"VISA"}],peso:.6}]},d=[w=>w?isNaN(w)?"Por favor, insira um valor num\xE9rico.":w<=0?"Por favor, insira um valor maior que zero.":!0:"Por favor, insira a capacidade da mochila."];function s(){t.value=null,o.value=[]}function v(w){return w.sort((h,f)=>h.total_entrega!==f.total_entrega?f.total_entrega-h.total_entrega:h.peso-f.peso)}function p(){const w=t.value,h=v([...n.entregas]),f=Math.round(w*1e3),g=Array(h.length+1).fill(0).map(()=>Array(f+1).fill(0));for(let _=1;_<=h.length;_++)for(let F=1;F<=f;F++)h[_-1].peso*1e3<=F?g[_][F]=Math.max(g[_-1][F],g[_-1][F-Math.round(h[_-1].peso*1e3)]+h[_-1].total_entrega):g[_][F]=g[_-1][F];let L=h.length,m=f;for(o.value=[];L>0&&m>0;)g[L][m]!==g[L-1][m]&&(o.value.push(h[L-1]),m-=Math.round(h[L-1].peso*1e3)),L--;console.log("Pedidos na mochila otimizada:",o.value)}return(w,h)=>(W(),ge($t,null,{default:xe(()=>[V("div",Kt,[V("div",Ht,[V("div",Qt,[V("div",Ut,[V("div",Zt,[Jt,(W(!0),de(Me,null,Se(n.entregas,f=>(W(),ge(ze,{class:"col-xs-12 col-sm-12 justify-around items-center q-pa-sm q-my-sm",key:f.id,nomeDestinatario:f.destinatario,enderecoDestinatario:f.endereco,totalEntrega:f.total_entrega,peso:f.peso},null,8,["nomeDestinatario","enderecoDestinatario","totalEntrega","peso"]))),128))])]),V("div",Yt,[V("div",Gt,[Wt,t.value?at("",!0):(W(),de("div",Xt,to)),V("div",oo,[V("p",ao,ne(t.value?`${t.value} Kg`:""),1)])]),V("div",no,[ae(Pt,{class:"full-width flex justify-center q-pa-sm q-my-sm",onSubmit:p,onReset:s},{default:xe(()=>[ae(Bt,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=f=>t.value=f),label:"Capacidade da mochila",outlined:"",class:"q-mb-sm input",dense:"",hint:"Exemplos de formato aceito: 1.20, 1 ou 0.5","lazy-rules":"true",rules:d},null,8,["modelValue"]),V("div",lo,[V("div",ro,[ae(Ae,{class:"q-my-md q-pa-md q-px-lg full-width",unelevated:"",rounded:"",color:"teal-9",label:"Otimizar Mochila","no-caps":"",type:"submit"})]),V("div",io,[ae(Ae,{class:"q-my-md q-pa-md q-px-lg full-width",outline:"",rounded:"",color:"teal-9",label:"Limpar dados","no-caps":"",type:"reset"})])])]),_:1})]),V("div",uo,[so,V("div",co,[(W(!0),de(Me,null,Se(o.value,f=>(W(),ge(ze,{class:"col-xs-12 col-sm-6 justify-around items-center q-pa-sm",key:f.id,nomeDestinatario:f.destinatario,enderecoDestinatario:f.endereco,totalEntrega:f.total_entrega,peso:f.peso},null,8,["nomeDestinatario","enderecoDestinatario","totalEntrega","peso"]))),128))])])])])])])]),_:1}))}};export{ho as default};
