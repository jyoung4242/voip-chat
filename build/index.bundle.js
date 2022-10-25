/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*style.css*/ \r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY","sourcesContent":["/*style.css*/ \r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/peasy-ui/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/peasy-ui/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{UI:()=>n,UIView:()=>i});class i{constructor(){this.state="created",this.bindings=[],this.animations=[],this.animationQueue=[],this.destroyed="",this.moved=""}static create(e,t,s={},l={parent:null,prepare:!0,sibling:null}){var r;const o=new i;return o.model=s,o.element=t,o.bindings.push(...n.parse(o.element,s,o,l.parent)),o.parentElement=e,o.sibling=l.sibling,o.parent=null!==(r=l.parent)&&void 0!==r?r:n,o.attached=new Promise((e=>{o.attachResolve=e})),o}destroy(){this.element.classList.add("pui-removing"),this.destroyed="queue",n.destroyed.push(this)}terminate(){Promise.all(this.getAnimations()).then((()=>{var e;null===(e=this.element.parentElement)||void 0===e||e.removeChild(this.element),this.bindings.forEach((e=>e.unbind()));const t=this.parent.views.findIndex((e=>e===this));t>-1&&this.parent.views.splice(t,1)})),this.destroyed="destroyed"}move(e){this.moved="queue",this.element.classList.add("pui-moving"),this.sibling=e}play(e,t){return"string"==typeof e&&(e=this.animations.find((t=>t.name===e)).clone()),e.element=t,e.state="pending",this.animationQueue.push(e),this.updateAnimations(performance.now()),e}updateFromUI(){this.bindings.forEach((e=>e.updateFromUI()))}updateToUI(){var e,t;switch(this.bindings.forEach((e=>e.updateToUI())),this.state){case"created":this.element.classList.add("pui-adding"),this.element.hasAttribute("PUI-UNRENDERED")||(null!==(e=this.parentElement)&&void 0!==e?e:n.parentElement(this.element,this.parent)).insertBefore(this.element,null===(t=this.sibling)||void 0===t?void 0:t.nextSibling),this.attachResolve(),this.state="attaching";break;case"attaching":0===this.getAnimations(!1).length&&(this.element.classList.remove("pui-adding"),this.state="attached");break;case"attached":this.state="rendered"}}updateAtEvents(){this.bindings.forEach((e=>e.updateAtEvents()))}updateAnimations(e){for(var t,i;null!==(i="finished"===(null===(t=this.animationQueue[0])||void 0===t?void 0:t.state))&&void 0!==i&&i;)this.animationQueue.shift().destroy();for(let t=0;t<this.animationQueue.length;t++){const i=this.animationQueue[t];"pending"===i.state&&(i.isBlocked(e)||(i.state="playing",i.startTime=e,i.animation=i.element.animate(i.keyframes,i.options),i.finished=i.animation.finished,i.finished.then((()=>{i.state="finished",this.updateAnimations(performance.now())}))))}}updateMove(){switch(this.moved){case"queue":this.moved="move";break;case"move":0===this.getAnimations().length&&(n.parentElement(this.element,this.parent).insertBefore(this.element,this.sibling.nextSibling),this.element.classList.remove("pui-moving"),this.moved="",this.sibling=void 0)}this.bindings.forEach((e=>e.updateMove()))}getAnimations(e=!0){return this.element.getAnimations({subtree:e}).filter((e=>"finished"!==e.playState&&e.effect.getTiming().iterations!==1/0)).map((e=>e.finished))}}class s{constructor(){this.fromUI=!1,this.toUI=!0,this.atEvent=!1,this.oneTime=!1,this.views=[],this.firstUpdate=!0,this.events=[],this.triggerAtEvent=e=>{this.events.push(e)},this.id=++n.id}get element(){return null==this.$element&&(this.$element="string"==typeof this.selector?this.context.querySelector(this.selector):this.selector),this.$element}set element(e){this.$element=e}static create(e){var t,i,l,r,o,a,h,u,d,m,p;const c=new s,v=null!==(i=null===(t=e.property)||void 0===t?void 0:t.split(":"))&&void 0!==i?i:[],f=v.shift();return c.object="$model"in e.object?e.object:{$model:e.object},c.property=f,c.arguments=v,c.context=null!==(l=e.context)&&void 0!==l?l:document,c.selector=e.selector,c.attribute=null!==(r=e.attribute)&&void 0!==r?r:"innerText",c.value=null!==(o=e.value)&&void 0!==o?o:c.value,c.template=null!==(a=e.template)&&void 0!==a?a:c.template,c.fromUI=null!==(h=e.fromUI)&&void 0!==h?h:c.fromUI,c.toUI=null!==(u=e.toUI)&&void 0!==u?u:c.toUI,c.atEvent=null!==(d=e.atEvent)&&void 0!==d?d:c.atEvent,c.oneTime=null!==(m=e.oneTime)&&void 0!==m?m:c.oneTime,c.parent=null!==(p=e.parent)&&void 0!==p?p:n,c.addListener(),"boolean"!=typeof c.fromUI&&(c.fromUI=c.fromUI.bind(c)),"boolean"!=typeof c.toUI&&(c.toUI=c.toUI.bind(c)),c}destroy(){this.element=null,this.removeListener(),this.views.forEach((e=>e.destroy()))}unbind(){n.unbind(this)}addListener(){this.atEvent&&(this.toUI=!1,this.fromUI=!1,this.element.addEventListener(this.attribute,this.triggerAtEvent))}removeListener(){this.atEvent&&this.element.removeEventListener(this.attribute,this.triggerAtEvent)}updateFromUI(){if(!1===this.fromUI||this.firstUpdate)return this.firstUpdate=!1,void this.views.forEach((e=>e.updateFromUI()));const{target:e,property:t}=n.resolveProperty(this.element,this.attribute),i=e[t];if(i!==this.lastUIValue){let e=!0!==this.fromUI?this.fromUI(i,this.lastUIValue,this.property,this.object):i;if(this.lastUIValue=i,void 0!==e&&e!==this.lastValue){this.lastValue=e;const{target:t,property:i}=n.resolveProperty(this.object,this.property);"number"!==n.resolveValue(this.object,this.property)||isNaN(e)||(e=+e),t[i]=e}else this.lastValue=e}this.views.forEach((e=>e.updateFromUI()))}updateToUI(){var e,t,s,l,r,o,a,h,u,d;if(!1===this.toUI)return void this.views.forEach((e=>e.updateToUI()));let m=n.resolveValue(this.object,this.property),p=!1;if(null!=this.template){if(this.template instanceof HTMLElement)if("boolean"==typeof this.attribute){if(m=!1!==(null!=m&&m),m!==this.lastValue){const e=!0!==this.toUI?this.toUI(m,this.lastValue,this.property,this.object):m;if(void 0!==e&&e!==this.lastUIValue){if(e===this.attribute)this.views.push(i.create(this.element.parentElement,this.template.cloneNode(!0),this.object,{parent:this,prepare:!1,sibling:this.element}));else{const e=this.views.pop();null==e||e.destroy()}this.lastValue=m,this.lastUIValue=e}}}else{null==m&&(m=[]);const c=this.arguments[0],v=null!==(e=this.lastValue)&&void 0!==e?e:[];if(m.length!==v.length)p=!0;else for(let e=0,i=m.length;e<i;e++){let i,l;if(null==c?(i=m[e],l=v[e]):(i=n.resolveValue(null!==(t=m[e])&&void 0!==t?t:{},c),l=n.resolveValue(null!==(s=v[e])&&void 0!==s?s:{},c)),i!==l){p=!0;break}}if(!p)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const f=!0!==this.toUI?this.toUI(m,v,this.property,this.object):m;if(null==f)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const b=null!==(l=this.lastUIValue)&&void 0!==l?l:[];let g=0;for(let e=0,t=f.length,i=0;e<t;e++,i++){let t,s;if(null==c?(t=f[e],s=b[i]):(t=n.resolveValue(null!==(r=f[e])&&void 0!==r?r:{},c),s=n.resolveValue(null!==(o=b[i])&&void 0!==o?o:{},c)),t!==s)break;g++}if(g===f.length&&f.length===b.length)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const y=this.views.splice(0,g);let U=y[y.length-1];for(let e=g,t=f.length,s=g;e<t;e++,s++){const t=f[e];"string"!=typeof t&&(t.$index=e);const s=this.views.shift();if(null==s){const e={$model:{[this.attribute]:t},$parent:this.object},s=i.create(this.element.parentElement,this.template.cloneNode(!0),e,{parent:this,prepare:!1,sibling:null!==(a=null==U?void 0:U.element)&&void 0!==a?a:this.element});y.push(s),U=s;continue}const l=null==c?t:n.resolveValue(null!=t?t:{},c),r=null==s?void 0:s.model.$model[this.attribute],o=null==c?r:n.resolveValue(null!=r?r:{},c);if(l===o){y.push(s),s.move(null!==(h=null==U?void 0:U.element)&&void 0!==h?h:this.element),U=s;continue}if(!f.slice(e).map((e=>null==c?e:n.resolveValue(null!=e?e:{},c))).includes(o)){s.destroy(),e--,U=s;continue}this.views.unshift(s);let m=!1;for(let e=0,t=this.views.length;e<t;e++){const t=this.views[e],i=null==t?void 0:t.model.$model[this.attribute];if(l===(null==c?i:n.resolveValue(null!=i?i:{},c))){y.push(...this.views.splice(e,1)),t.move(null!==(u=null==U?void 0:U.element)&&void 0!==u?u:this.element),m=!0,U=t;break}}if(!m){const e={$model:{[this.attribute]:t},$parent:this.object},s=i.create(this.element.parentElement,this.template.cloneNode(!0),e,{parent:this,prepare:!1,sibling:null!==(d=null==U?void 0:U.element)&&void 0!==d?d:this.element});y.push(s),U=s}}this.views.forEach((e=>e.destroy())),this.views=y,this.lastValue=[...m],this.lastUIValue=[...f]}else if(null==this.value){const e=n.resolveValue(this.object,this.attribute),t=e.template,i=null==m?e:e.create(m);this.value=null!=m?m:e,this.views.push(n.create(this.element.parentElement,t,i,{parent:this,prepare:!0,sibling:this.element}))}}else if(m!==this.lastValue){const e=!0!==this.toUI?this.toUI(m,this.lastValue,this.property,this.object):m;if(void 0!==e&&e!==this.lastUIValue){const{target:t,property:i}=n.resolveProperty(this.element,this.attribute);t[i]=e,this.lastValue=m,this.lastUIValue=e}}this.views.forEach((e=>e.updateToUI())),this.oneTime&&this.oneTimeDone()}oneTimeDone(){this.toUI=!1,this.fromUI=!1}updateAtEvents(){let e=this.events.shift();for(;null!=e;)n.resolveValue(this.object,this.property)(e,this.object.$model,this.element,this.attribute,this.object),e=this.events.shift();this.views.forEach((e=>e.updateAtEvents()))}updateMove(){this.views.forEach((e=>e.updateMove()))}}class n{static create(e,t,s={},l={parent:null,prepare:!0,sibling:null}){var r;if("string"==typeof t){const i=null!==(r=null==e?void 0:e.ownerDocument)&&void 0!==r?r:document;t.startsWith("#")&&(t=i.querySelector(t).innerHTML);const s=i.createElement("div");s.innerHTML=l.prepare?n.prepare(t):t,t=s.firstElementChild}const o=i.create(e,t,s,l);return o.parent===n&&n.views.push(o),o}static play(e,t){return"string"==typeof e?(e=this.globals.animations.find((t=>t.name===e)).clone()).play(t):e.play()}static parse(e,t,i,s){var l,r,o;const a=[];if(3===e.nodeType){let l=e.textContent,r=l.match(n.regexValue);for(;null!=r;){const o=r[1];let h=r[2];l=r[3];let u=!1;h.startsWith("|")&&(u=!0,h=h.slice(1).trimStart());let d=e.cloneNode();e.textContent=o,n.parentElement(e,s).insertBefore(d,e.nextSibling),a.push(n.bind({selector:d,attribute:"textContent",object:t,property:h,parent:i,oneTime:u})),d=(e=d).cloneNode(),d.textContent=l,n.parentElement(e,s).insertBefore(d,e.nextSibling),e=d,r=l.match(n.regexValue)}}else{if(a.push(...Object.keys(null!==(l=e.attributes)&&void 0!==l?l:[]).reverse().map((l=>{const r=[];if(e instanceof Comment)return[];const o=e.attributes[l];if(o.name.startsWith("pui.")){const l=o.value.match(n.regexAttribute);let r,a,[h,u,d,m,p]=l,c=!1;if("@"!==d){const i=u.match(/^'(.*?)'$/);if(null!=i)r=i[1],e.setAttribute("value",r),u="option"===e.nodeName.toLowerCase()?"selected":"checked",m=e=>e?r:void 0,d=e=>e===r;else if(""===u){if(">"===m){const{target:i,property:s}=n.resolveProperty(t,p);return i[s]=e,[]}{const t=document.createComment(o.name);n.parentNode(e,s).insertBefore(t,e),n.parentNode(e,s).removeChild(e),e.removeAttribute(o.name),a=e,e=t,u="="===d,d=!0,"|"===m&&(c=!0)}}else if("="===m&&"="===d){const t=n.parentNode(e,s);if(8!==t.nodeType){const i=document.createComment(o.name);t.insertBefore(i,e),t.removeChild(e),e.removeAttribute(o.name),e=i}else e=t;a=u,c=!0,d=!0}else if("*"===m){const t=document.createComment(o.name);n.parentNode(e,s).insertBefore(t,e),n.parentNode(e,s).removeChild(e),e.removeAttribute(o.name),a=e,e=t}else"|"===m?c=!0:"checked"!==u&&e.setAttribute(u,"")}return[n.bind({selector:e,attribute:u,value:r,object:t,property:p,template:a,toUI:"string"==typeof d?"<"===d:d,fromUI:"string"==typeof m?">"===m:m,atEvent:"@"===d,parent:i,oneTime:c})]}const a=[o.value];let h=0,u=a[h].match(n.regexValue);for(;null!=u;){let{before:s,property:l,after:d}=u.groups,m=!1;l.startsWith("|")&&(m=!0,l=l.slice(1).trimStart()),r.push(n.bind({selector:e,attribute:o.name,object:t,property:l,oneTime:m,toUI(t,i,s,l){if(this.oneTime){const e=a.indexOf(s);e>-1&&(a[e]=n.resolveValue(l,s),a[e-1]+=a[e]+a[e+1],a.splice(e,2))}const r=a.map(((e,t)=>t%2==0?e:n.resolveValue(l,e))).join("");return e.setAttribute(o.name,r),t},parent:i})),a[h++]=s,a[h++]=l,a[h]=d,u=a[h].match(n.regexValue)}return r})).flat()),e instanceof Comment)return a.filter((e=>null!=e.template||(e.unbind(),!1)));if(!n.leaveAttributes)for(let t=Object.keys(null!==(r=e.attributes)&&void 0!==r?r:[]).length-1;t>=0;t--){const i=e.attributes[Object.keys(null!==(o=e.attributes)&&void 0!==o?o:[])[t]];i.name.startsWith("pui.")&&e.removeAttribute(i.name)}a.push(...Array.from(e.childNodes).map((e=>n.parse(e,t,i,s))).flat())}return a}static bind(e){return s.create(e)}static unbind(e){if(e.destroy(),e.parent!==n){const t=e.parent.bindings,i=t.indexOf(e);i>-1&&t.splice(i,1)}}static update(){this.views.forEach((e=>e.updateFromUI())),this.views.forEach((e=>e.updateToUI())),this.views.forEach((e=>e.updateAtEvents()));const e=performance.now();[...this.views,this.globals].forEach((t=>t.updateAnimations(e))),this.views.forEach((e=>{e.updateMove()})),this.destroyed.forEach((e=>{switch(e.destroyed){case"queue":e.destroyed="destroy";break;case"destroy":{e.terminate();const t=this.destroyed.findIndex((t=>e===t));t>-1&&this.destroyed.splice(t,1)}}}))}static resolveProperty(e,t){const i=(t=t.replace("[",".").replace("]",".")).split(".").filter((e=>(null!=e?e:"").length>0));let s="$model"in e?e.$model:e;for(;i.length>1;)s=s[i.shift()];return{target:s,property:i[0]}}static resolveValue(e,t){let i=0;do{const{target:i,property:s}=n.resolveProperty(e,t);if(null!=i&&s in i)return i[s];e=e.$parent}while(null!=e&&i++<1e3)}static parentElement(e,t){const i=e.parentElement;if(null!=i)return i;for(;null!=t&&(null==t.element||t.element===e);)t=t.parent;return null==t?void 0:t.element}static parentNode(e,t){const i=e.parentNode;if(null!=i)return i;for(;null!=t&&(null==t.element||t.element===e);)t=t.parent;return null==t?void 0:t.element}static prepare(e){let t=e;e="";let i=t.match(n.regexReplace);for(;null!=i;){const[s,l,r,o]=i;r.match(/\S\s*===/)?e+=`${l.trimEnd()}br PUI-UNRENDERED PUI.${n.bindingCounter++}="${r}"`:e+=`${l} PUI.${n.bindingCounter++}="${r}" `,t=o,i=t.match(n.regexReplace)}return e+t}}n.id=0,n.views=[],n.destroyed=[],n.globals=new i,n.leaveAttributes=!1,n.regexReplace=/([\S\s]*?)\$\{([^}]*?[<=@!]=[*=>|][^}]*?)\}([\S\s]*)/m,n.regexAttribute=/^\s*(\S*?)\s*([<=@!])=([*=>|])\s*(\S*?)\s*$/,n.regexValue=/(?<before>[\S\s]*?)\$\{\s*(?<property>[\s\S]*?)\s*\}(?<after>[\S\s]*)/m,n.bindingCounter=0;var l=exports;for(var r in t)l[r]=t[r];t.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();

/***/ }),

/***/ "./node_modules/peerjs-js-binarypack/lib/binarypack.js":
/*!*************************************************************!*\
  !*** ./node_modules/peerjs-js-binarypack/lib/binarypack.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BufferBuilder = (__webpack_require__(/*! ./bufferbuilder */ "./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js").BufferBuilder);
var binaryFeatures = (__webpack_require__(/*! ./bufferbuilder */ "./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js").binaryFeatures);

var BinaryPack = {
  unpack: function (data) {
    var unpacker = new Unpacker(data);
    return unpacker.unpack();
  },
  pack: function (data) {
    var packer = new Packer();
    packer.pack(data);
    var buffer = packer.getBuffer();
    return buffer;
  }
};

module.exports = BinaryPack;

function Unpacker (data) {
  // Data is ArrayBuffer
  this.index = 0;
  this.dataBuffer = data;
  this.dataView = new Uint8Array(this.dataBuffer);
  this.length = this.dataBuffer.byteLength;
}

Unpacker.prototype.unpack = function () {
  var type = this.unpack_uint8();
  if (type < 0x80) {
    return type;
  } else if ((type ^ 0xe0) < 0x20) {
    return (type ^ 0xe0) - 0x20;
  }

  var size;
  if ((size = type ^ 0xa0) <= 0x0f) {
    return this.unpack_raw(size);
  } else if ((size = type ^ 0xb0) <= 0x0f) {
    return this.unpack_string(size);
  } else if ((size = type ^ 0x90) <= 0x0f) {
    return this.unpack_array(size);
  } else if ((size = type ^ 0x80) <= 0x0f) {
    return this.unpack_map(size);
  }

  switch (type) {
    case 0xc0:
      return null;
    case 0xc1:
      return undefined;
    case 0xc2:
      return false;
    case 0xc3:
      return true;
    case 0xca:
      return this.unpack_float();
    case 0xcb:
      return this.unpack_double();
    case 0xcc:
      return this.unpack_uint8();
    case 0xcd:
      return this.unpack_uint16();
    case 0xce:
      return this.unpack_uint32();
    case 0xcf:
      return this.unpack_uint64();
    case 0xd0:
      return this.unpack_int8();
    case 0xd1:
      return this.unpack_int16();
    case 0xd2:
      return this.unpack_int32();
    case 0xd3:
      return this.unpack_int64();
    case 0xd4:
      return undefined;
    case 0xd5:
      return undefined;
    case 0xd6:
      return undefined;
    case 0xd7:
      return undefined;
    case 0xd8:
      size = this.unpack_uint16();
      return this.unpack_string(size);
    case 0xd9:
      size = this.unpack_uint32();
      return this.unpack_string(size);
    case 0xda:
      size = this.unpack_uint16();
      return this.unpack_raw(size);
    case 0xdb:
      size = this.unpack_uint32();
      return this.unpack_raw(size);
    case 0xdc:
      size = this.unpack_uint16();
      return this.unpack_array(size);
    case 0xdd:
      size = this.unpack_uint32();
      return this.unpack_array(size);
    case 0xde:
      size = this.unpack_uint16();
      return this.unpack_map(size);
    case 0xdf:
      size = this.unpack_uint32();
      return this.unpack_map(size);
  }
};

Unpacker.prototype.unpack_uint8 = function () {
  var byte = this.dataView[this.index] & 0xff;
  this.index++;
  return byte;
};

Unpacker.prototype.unpack_uint16 = function () {
  var bytes = this.read(2);
  var uint16 =
    ((bytes[0] & 0xff) * 256) + (bytes[1] & 0xff);
  this.index += 2;
  return uint16;
};

Unpacker.prototype.unpack_uint32 = function () {
  var bytes = this.read(4);
  var uint32 =
    ((bytes[0] * 256 +
      bytes[1]) * 256 +
      bytes[2]) * 256 +
    bytes[3];
  this.index += 4;
  return uint32;
};

Unpacker.prototype.unpack_uint64 = function () {
  var bytes = this.read(8);
  var uint64 =
    ((((((bytes[0] * 256 +
      bytes[1]) * 256 +
      bytes[2]) * 256 +
      bytes[3]) * 256 +
      bytes[4]) * 256 +
      bytes[5]) * 256 +
      bytes[6]) * 256 +
    bytes[7];
  this.index += 8;
  return uint64;
};

Unpacker.prototype.unpack_int8 = function () {
  var uint8 = this.unpack_uint8();
  return (uint8 < 0x80) ? uint8 : uint8 - (1 << 8);
};

Unpacker.prototype.unpack_int16 = function () {
  var uint16 = this.unpack_uint16();
  return (uint16 < 0x8000) ? uint16 : uint16 - (1 << 16);
};

Unpacker.prototype.unpack_int32 = function () {
  var uint32 = this.unpack_uint32();
  return (uint32 < Math.pow(2, 31)) ? uint32
    : uint32 - Math.pow(2, 32);
};

Unpacker.prototype.unpack_int64 = function () {
  var uint64 = this.unpack_uint64();
  return (uint64 < Math.pow(2, 63)) ? uint64
    : uint64 - Math.pow(2, 64);
};

Unpacker.prototype.unpack_raw = function (size) {
  if (this.length < this.index + size) {
    throw new Error('BinaryPackFailure: index is out of range' +
      ' ' + this.index + ' ' + size + ' ' + this.length);
  }
  var buf = this.dataBuffer.slice(this.index, this.index + size);
  this.index += size;

  // buf = util.bufferToString(buf);

  return buf;
};

Unpacker.prototype.unpack_string = function (size) {
  var bytes = this.read(size);
  var i = 0;
  var str = '';
  var c;
  var code;

  while (i < size) {
    c = bytes[i];
    if (c < 128) {
      str += String.fromCharCode(c);
      i++;
    } else if ((c ^ 0xc0) < 32) {
      code = ((c ^ 0xc0) << 6) | (bytes[i + 1] & 63);
      str += String.fromCharCode(code);
      i += 2;
    } else {
      code = ((c & 15) << 12) | ((bytes[i + 1] & 63) << 6) |
        (bytes[i + 2] & 63);
      str += String.fromCharCode(code);
      i += 3;
    }
  }

  this.index += size;
  return str;
};

Unpacker.prototype.unpack_array = function (size) {
  var objects = new Array(size);
  for (var i = 0; i < size; i++) {
    objects[i] = this.unpack();
  }
  return objects;
};

Unpacker.prototype.unpack_map = function (size) {
  var map = {};
  for (var i = 0; i < size; i++) {
    var key = this.unpack();
    var value = this.unpack();
    map[key] = value;
  }
  return map;
};

Unpacker.prototype.unpack_float = function () {
  var uint32 = this.unpack_uint32();
  var sign = uint32 >> 31;
  var exp = ((uint32 >> 23) & 0xff) - 127;
  var fraction = (uint32 & 0x7fffff) | 0x800000;
  return (sign === 0 ? 1 : -1) *
    fraction * Math.pow(2, exp - 23);
};

Unpacker.prototype.unpack_double = function () {
  var h32 = this.unpack_uint32();
  var l32 = this.unpack_uint32();
  var sign = h32 >> 31;
  var exp = ((h32 >> 20) & 0x7ff) - 1023;
  var hfrac = (h32 & 0xfffff) | 0x100000;
  var frac = hfrac * Math.pow(2, exp - 20) +
    l32 * Math.pow(2, exp - 52);
  return (sign === 0 ? 1 : -1) * frac;
};

Unpacker.prototype.read = function (length) {
  var j = this.index;
  if (j + length <= this.length) {
    return this.dataView.subarray(j, j + length);
  } else {
    throw new Error('BinaryPackFailure: read index out of range');
  }
};

function Packer () {
  this.bufferBuilder = new BufferBuilder();
}

Packer.prototype.getBuffer = function () {
  return this.bufferBuilder.getBuffer();
};

Packer.prototype.pack = function (value) {
  var type = typeof (value);
  if (type === 'string') {
    this.pack_string(value);
  } else if (type === 'number') {
    if (Math.floor(value) === value) {
      this.pack_integer(value);
    } else {
      this.pack_double(value);
    }
  } else if (type === 'boolean') {
    if (value === true) {
      this.bufferBuilder.append(0xc3);
    } else if (value === false) {
      this.bufferBuilder.append(0xc2);
    }
  } else if (type === 'undefined') {
    this.bufferBuilder.append(0xc0);
  } else if (type === 'object') {
    if (value === null) {
      this.bufferBuilder.append(0xc0);
    } else {
      var constructor = value.constructor;
      if (constructor == Array) {
        this.pack_array(value);
      } else if (constructor == Blob || constructor == File || value instanceof Blob || value instanceof File) {
        this.pack_bin(value);
      } else if (constructor == ArrayBuffer) {
        if (binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value));
        } else {
          this.pack_bin(value);
        }
      } else if ('BYTES_PER_ELEMENT' in value) {
        if (binaryFeatures.useArrayBufferView) {
          this.pack_bin(new Uint8Array(value.buffer));
        } else {
          this.pack_bin(value.buffer);
        }
      } else if ((constructor == Object) || (constructor.toString().startsWith('class'))) {
        this.pack_object(value);
      } else if (constructor == Date) {
        this.pack_string(value.toString());
      } else if (typeof value.toBinaryPack === 'function') {
        this.bufferBuilder.append(value.toBinaryPack());
      } else {
        throw new Error('Type "' + constructor.toString() + '" not yet supported');
      }
    }
  } else {
    throw new Error('Type "' + type + '" not yet supported');
  }
  this.bufferBuilder.flush();
};

Packer.prototype.pack_bin = function (blob) {
  var length = blob.length || blob.byteLength || blob.size;
  if (length <= 0x0f) {
    this.pack_uint8(0xa0 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xda);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xdb);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }
  this.bufferBuilder.append(blob);
};

Packer.prototype.pack_string = function (str) {
  var length = utf8Length(str);

  if (length <= 0x0f) {
    this.pack_uint8(0xb0 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xd8);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xd9);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }
  this.bufferBuilder.append(str);
};

Packer.prototype.pack_array = function (ary) {
  var length = ary.length;
  if (length <= 0x0f) {
    this.pack_uint8(0x90 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xdc);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xdd);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }
  for (var i = 0; i < length; i++) {
    this.pack(ary[i]);
  }
};

Packer.prototype.pack_integer = function (num) {
  if (num >= -0x20 && num <= 0x7f) {
    this.bufferBuilder.append(num & 0xff);
  } else if (num >= 0x00 && num <= 0xff) {
    this.bufferBuilder.append(0xcc);
    this.pack_uint8(num);
  } else if (num >= -0x80 && num <= 0x7f) {
    this.bufferBuilder.append(0xd0);
    this.pack_int8(num);
  } else if (num >= 0x0000 && num <= 0xffff) {
    this.bufferBuilder.append(0xcd);
    this.pack_uint16(num);
  } else if (num >= -0x8000 && num <= 0x7fff) {
    this.bufferBuilder.append(0xd1);
    this.pack_int16(num);
  } else if (num >= 0x00000000 && num <= 0xffffffff) {
    this.bufferBuilder.append(0xce);
    this.pack_uint32(num);
  } else if (num >= -0x80000000 && num <= 0x7fffffff) {
    this.bufferBuilder.append(0xd2);
    this.pack_int32(num);
  } else if (num >= -0x8000000000000000 && num <= 0x7FFFFFFFFFFFFFFF) {
    this.bufferBuilder.append(0xd3);
    this.pack_int64(num);
  } else if (num >= 0x0000000000000000 && num <= 0xFFFFFFFFFFFFFFFF) {
    this.bufferBuilder.append(0xcf);
    this.pack_uint64(num);
  } else {
    throw new Error('Invalid integer');
  }
};

Packer.prototype.pack_double = function (num) {
  var sign = 0;
  if (num < 0) {
    sign = 1;
    num = -num;
  }
  var exp = Math.floor(Math.log(num) / Math.LN2);
  var frac0 = num / Math.pow(2, exp) - 1;
  var frac1 = Math.floor(frac0 * Math.pow(2, 52));
  var b32 = Math.pow(2, 32);
  var h32 = (sign << 31) | ((exp + 1023) << 20) |
    (frac1 / b32) & 0x0fffff;
  var l32 = frac1 % b32;
  this.bufferBuilder.append(0xcb);
  this.pack_int32(h32);
  this.pack_int32(l32);
};

Packer.prototype.pack_object = function (obj) {
  var keys = Object.keys(obj);
  var length = keys.length;
  if (length <= 0x0f) {
    this.pack_uint8(0x80 + length);
  } else if (length <= 0xffff) {
    this.bufferBuilder.append(0xde);
    this.pack_uint16(length);
  } else if (length <= 0xffffffff) {
    this.bufferBuilder.append(0xdf);
    this.pack_uint32(length);
  } else {
    throw new Error('Invalid length');
  }
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      this.pack(prop);
      this.pack(obj[prop]);
    }
  }
};

Packer.prototype.pack_uint8 = function (num) {
  this.bufferBuilder.append(num);
};

Packer.prototype.pack_uint16 = function (num) {
  this.bufferBuilder.append(num >> 8);
  this.bufferBuilder.append(num & 0xff);
};

Packer.prototype.pack_uint32 = function (num) {
  var n = num & 0xffffffff;
  this.bufferBuilder.append((n & 0xff000000) >>> 24);
  this.bufferBuilder.append((n & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((n & 0x0000ff00) >>> 8);
  this.bufferBuilder.append((n & 0x000000ff));
};

Packer.prototype.pack_uint64 = function (num) {
  var high = num / Math.pow(2, 32);
  var low = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 0xff000000) >>> 24);
  this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
  this.bufferBuilder.append((high & 0x000000ff));
  this.bufferBuilder.append((low & 0xff000000) >>> 24);
  this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
  this.bufferBuilder.append((low & 0x000000ff));
};

Packer.prototype.pack_int8 = function (num) {
  this.bufferBuilder.append(num & 0xff);
};

Packer.prototype.pack_int16 = function (num) {
  this.bufferBuilder.append((num & 0xff00) >> 8);
  this.bufferBuilder.append(num & 0xff);
};

Packer.prototype.pack_int32 = function (num) {
  this.bufferBuilder.append((num >>> 24) & 0xff);
  this.bufferBuilder.append((num & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((num & 0x0000ff00) >>> 8);
  this.bufferBuilder.append((num & 0x000000ff));
};

Packer.prototype.pack_int64 = function (num) {
  var high = Math.floor(num / Math.pow(2, 32));
  var low = num % Math.pow(2, 32);
  this.bufferBuilder.append((high & 0xff000000) >>> 24);
  this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
  this.bufferBuilder.append((high & 0x000000ff));
  this.bufferBuilder.append((low & 0xff000000) >>> 24);
  this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
  this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
  this.bufferBuilder.append((low & 0x000000ff));
};

function _utf8Replace (m) {
  var code = m.charCodeAt(0);

  if (code <= 0x7ff) return '00';
  if (code <= 0xffff) return '000';
  if (code <= 0x1fffff) return '0000';
  if (code <= 0x3ffffff) return '00000';
  return '000000';
}

function utf8Length (str) {
  if (str.length > 600) {
    // Blob method faster for large strings
    return (new Blob([str])).size;
  } else {
    return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;
  }
}


/***/ }),

/***/ "./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js":
/*!****************************************************************!*\
  !*** ./node_modules/peerjs-js-binarypack/lib/bufferbuilder.js ***!
  \****************************************************************/
/***/ ((module) => {

var binaryFeatures = {};
binaryFeatures.useBlobBuilder = (function () {
  try {
    new Blob([]);
    return false;
  } catch (e) {
    return true;
  }
})();

binaryFeatures.useArrayBufferView = !binaryFeatures.useBlobBuilder && (function () {
  try {
    return (new Blob([new Uint8Array([])])).size === 0;
  } catch (e) {
    return true;
  }
})();

module.exports.binaryFeatures = binaryFeatures;
var BlobBuilder = module.exports.BlobBuilder;
if (typeof window !== 'undefined') {
  BlobBuilder = module.exports.BlobBuilder = window.WebKitBlobBuilder ||
    window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
}

function BufferBuilder () {
  this._pieces = [];
  this._parts = [];
}

BufferBuilder.prototype.append = function (data) {
  if (typeof data === 'number') {
    this._pieces.push(data);
  } else {
    this.flush();
    this._parts.push(data);
  }
};

BufferBuilder.prototype.flush = function () {
  if (this._pieces.length > 0) {
    var buf = new Uint8Array(this._pieces);
    if (!binaryFeatures.useArrayBufferView) {
      buf = buf.buffer;
    }
    this._parts.push(buf);
    this._pieces = [];
  }
};

BufferBuilder.prototype.getBuffer = function () {
  this.flush();
  if (binaryFeatures.useBlobBuilder) {
    var builder = new BlobBuilder();
    for (var i = 0, ii = this._parts.length; i < ii; i++) {
      builder.append(this._parts[i]);
    }
    return builder.getBlob();
  } else {
    return new Blob(this._parts);
  }
};

module.exports.BufferBuilder = BufferBuilder;


/***/ }),

/***/ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js":
/*!******************************************************************!*\
  !*** ./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


var SDPUtils = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");

function fixStatsType(stat) {
  return {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  }[stat.type] || stat.type;
}

function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
      transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
      transceiver.dtlsTransport.getLocalParameters(),
      type === 'offer' ? 'actpass' : dtlsRole || 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    var trackId = transceiver.rtpSender._initialTrackId ||
        transceiver.rtpSender.track.id;
    transceiver.rtpSender._initialTrackId = trackId;
    // spec.
    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
        trackId + '\r\n';
    sdp += 'a=' + msid;
    // for Chrome. Legacy should no longer be required.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;

    // RTX
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
}

// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  var hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(function(server) {
    if (server && (server.urls || server.url)) {
      var urls = server.urls || server.url;
      if (server.url && !server.urls) {
        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
      }
      var isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(function(url) {
        var validTurn = url.indexOf('turn:') === 0 &&
            url.indexOf('transport=udp') !== -1 &&
            url.indexOf('turn:[') === -1 &&
            !hasTurn;

        if (validTurn) {
          hasTurn = true;
          return true;
        }
        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
            url.indexOf('?transport=udp') === -1;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}

// Determines the intersection of local and remote capabilities.
function getCommonCapabilities(localCapabilities, remoteCapabilities) {
  var commonCapabilities = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: []
  };

  var findCodecByPayloadType = function(pt, codecs) {
    pt = parseInt(pt, 10);
    for (var i = 0; i < codecs.length; i++) {
      if (codecs[i].payloadType === pt ||
          codecs[i].preferredPayloadType === pt) {
        return codecs[i];
      }
    }
  };

  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
    return lCodec && rCodec &&
        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
  };

  localCapabilities.codecs.forEach(function(lCodec) {
    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
      var rCodec = remoteCapabilities.codecs[i];
      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
          lCodec.clockRate === rCodec.clockRate) {
        if (lCodec.name.toLowerCase() === 'rtx' &&
            lCodec.parameters && rCodec.parameters.apt) {
          // for RTX we need to find the local rtx that has a apt
          // which points to the same local codec as the remote one.
          if (!rtxCapabilityMatches(lCodec, rCodec,
              localCapabilities.codecs, remoteCapabilities.codecs)) {
            continue;
          }
        }
        rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
        // number of channels is the highest common number of channels
        rCodec.numChannels = Math.min(lCodec.numChannels,
            rCodec.numChannels);
        // push rCodec so we reply with offerer payload type
        commonCapabilities.codecs.push(rCodec);

        // determine common feedback mechanisms
        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
            if (lCodec.rtcpFeedback[j].type === fb.type &&
                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
              return true;
            }
          }
          return false;
        });
        // FIXME: also need to determine .parameters
        //  see https://github.com/openpeer/ortc/issues/569
        break;
      }
    }
  });

  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
         i++) {
      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
      if (lHeaderExtension.uri === rHeaderExtension.uri) {
        commonCapabilities.headerExtensions.push(rHeaderExtension);
        break;
      }
    }
  });

  // FIXME: fecMechanisms
  return commonCapabilities;
}

// is action=setLocalDescription with type allowed in signalingState
function isActionAllowedInSignalingState(action, type, signalingState) {
  return {
    offer: {
      setLocalDescription: ['stable', 'have-local-offer'],
      setRemoteDescription: ['stable', 'have-remote-offer']
    },
    answer: {
      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
    }
  }[type][action].indexOf(signalingState) !== -1;
}

function maybeAddCandidate(iceTransport, candidate) {
  // Edge's internal representation adds some fields therefore
  // not all fieldѕ are taken into account.
  var alreadyAdded = iceTransport.getRemoteCandidates()
      .find(function(remoteCandidate) {
        return candidate.foundation === remoteCandidate.foundation &&
            candidate.ip === remoteCandidate.ip &&
            candidate.port === remoteCandidate.port &&
            candidate.priority === remoteCandidate.priority &&
            candidate.protocol === remoteCandidate.protocol &&
            candidate.type === remoteCandidate.type;
      });
  if (!alreadyAdded) {
    iceTransport.addRemoteCandidate(candidate);
  }
  return !alreadyAdded;
}


function makeError(name, description) {
  var e = new Error(description);
  e.name = name;
  // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
  e.code = {
    NotSupportedError: 9,
    InvalidStateError: 11,
    InvalidAccessError: 15,
    TypeError: undefined,
    OperationError: undefined
  }[name];
  return e;
}

module.exports = function(window, edgeVersion) {
  // https://w3c.github.io/mediacapture-main/#mediastream
  // Helper function to add the track to the stream and
  // dispatch the event ourselves.
  function addTrackToStreamAndFireEvent(track, stream) {
    stream.addTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
        {track: track}));
  }

  function removeTrackFromStreamAndFireEvent(track, stream) {
    stream.removeTrack(track);
    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
        {track: track}));
  }

  function fireAddTrack(pc, track, receiver, streams) {
    var trackEvent = new Event('track');
    trackEvent.track = track;
    trackEvent.receiver = receiver;
    trackEvent.transceiver = {receiver: receiver};
    trackEvent.streams = streams;
    window.setTimeout(function() {
      pc._dispatchEvent('track', trackEvent);
    });
  }

  var RTCPeerConnection = function(config) {
    var pc = this;

    var _eventTarget = document.createDocumentFragment();
    ['addEventListener', 'removeEventListener', 'dispatchEvent']
        .forEach(function(method) {
          pc[method] = _eventTarget[method].bind(_eventTarget);
        });

    this.canTrickleIceCandidates = null;

    this.needNegotiation = false;

    this.localStreams = [];
    this.remoteStreams = [];

    this._localDescription = null;
    this._remoteDescription = null;

    this.signalingState = 'stable';
    this.iceConnectionState = 'new';
    this.connectionState = 'new';
    this.iceGatheringState = 'new';

    config = JSON.parse(JSON.stringify(config || {}));

    this.usingBundle = config.bundlePolicy === 'max-bundle';
    if (config.rtcpMuxPolicy === 'negotiate') {
      throw(makeError('NotSupportedError',
          'rtcpMuxPolicy \'negotiate\' is not supported'));
    } else if (!config.rtcpMuxPolicy) {
      config.rtcpMuxPolicy = 'require';
    }

    switch (config.iceTransportPolicy) {
      case 'all':
      case 'relay':
        break;
      default:
        config.iceTransportPolicy = 'all';
        break;
    }

    switch (config.bundlePolicy) {
      case 'balanced':
      case 'max-compat':
      case 'max-bundle':
        break;
      default:
        config.bundlePolicy = 'balanced';
        break;
    }

    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

    this._iceGatherers = [];
    if (config.iceCandidatePoolSize) {
      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
        this._iceGatherers.push(new window.RTCIceGatherer({
          iceServers: config.iceServers,
          gatherPolicy: config.iceTransportPolicy
        }));
      }
    } else {
      config.iceCandidatePoolSize = 0;
    }

    this._config = config;

    // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
    // everything that is needed to describe a SDP m-line.
    this.transceivers = [];

    this._sdpSessionId = SDPUtils.generateSessionId();
    this._sdpSessionVersion = 0;

    this._dtlsRole = undefined; // role for a=setup to use in answers.

    this._isClosed = false;
  };

  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
    configurable: true,
    get: function() {
      return this._localDescription;
    }
  });
  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
    configurable: true,
    get: function() {
      return this._remoteDescription;
    }
  });

  // set up event handlers on prototype
  RTCPeerConnection.prototype.onicecandidate = null;
  RTCPeerConnection.prototype.onaddstream = null;
  RTCPeerConnection.prototype.ontrack = null;
  RTCPeerConnection.prototype.onremovestream = null;
  RTCPeerConnection.prototype.onsignalingstatechange = null;
  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
  RTCPeerConnection.prototype.onconnectionstatechange = null;
  RTCPeerConnection.prototype.onicegatheringstatechange = null;
  RTCPeerConnection.prototype.onnegotiationneeded = null;
  RTCPeerConnection.prototype.ondatachannel = null;

  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
    if (this._isClosed) {
      return;
    }
    this.dispatchEvent(event);
    if (typeof this['on' + name] === 'function') {
      this['on' + name](event);
    }
  };

  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
    var event = new Event('icegatheringstatechange');
    this._dispatchEvent('icegatheringstatechange', event);
  };

  RTCPeerConnection.prototype.getConfiguration = function() {
    return this._config;
  };

  RTCPeerConnection.prototype.getLocalStreams = function() {
    return this.localStreams;
  };

  RTCPeerConnection.prototype.getRemoteStreams = function() {
    return this.remoteStreams;
  };

  // internal helper to create a transceiver object.
  // (which is not yet the same as the WebRTC 1.0 transceiver)
  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
    var hasBundleTransport = this.transceivers.length > 0;
    var transceiver = {
      track: null,
      iceGatherer: null,
      iceTransport: null,
      dtlsTransport: null,
      localCapabilities: null,
      remoteCapabilities: null,
      rtpSender: null,
      rtpReceiver: null,
      kind: kind,
      mid: null,
      sendEncodingParameters: null,
      recvEncodingParameters: null,
      stream: null,
      associatedRemoteMediaStreams: [],
      wantReceive: true
    };
    if (this.usingBundle && hasBundleTransport) {
      transceiver.iceTransport = this.transceivers[0].iceTransport;
      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
    } else {
      var transports = this._createIceAndDtlsTransports();
      transceiver.iceTransport = transports.iceTransport;
      transceiver.dtlsTransport = transports.dtlsTransport;
    }
    if (!doNotAdd) {
      this.transceivers.push(transceiver);
    }
    return transceiver;
  };

  RTCPeerConnection.prototype.addTrack = function(track, stream) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call addTrack on a closed peerconnection.');
    }

    var alreadyExists = this.transceivers.find(function(s) {
      return s.track === track;
    });

    if (alreadyExists) {
      throw makeError('InvalidAccessError', 'Track already exists.');
    }

    var transceiver;
    for (var i = 0; i < this.transceivers.length; i++) {
      if (!this.transceivers[i].track &&
          this.transceivers[i].kind === track.kind) {
        transceiver = this.transceivers[i];
      }
    }
    if (!transceiver) {
      transceiver = this._createTransceiver(track.kind);
    }

    this._maybeFireNegotiationNeeded();

    if (this.localStreams.indexOf(stream) === -1) {
      this.localStreams.push(stream);
    }

    transceiver.track = track;
    transceiver.stream = stream;
    transceiver.rtpSender = new window.RTCRtpSender(track,
        transceiver.dtlsTransport);
    return transceiver.rtpSender;
  };

  RTCPeerConnection.prototype.addStream = function(stream) {
    var pc = this;
    if (edgeVersion >= 15025) {
      stream.getTracks().forEach(function(track) {
        pc.addTrack(track, stream);
      });
    } else {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      // Fixed in 15025 (or earlier)
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      clonedStream.getTracks().forEach(function(track) {
        pc.addTrack(track, clonedStream);
      });
    }
  };

  RTCPeerConnection.prototype.removeTrack = function(sender) {
    if (this._isClosed) {
      throw makeError('InvalidStateError',
          'Attempted to call removeTrack on a closed peerconnection.');
    }

    if (!(sender instanceof window.RTCRtpSender)) {
      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
          'does not implement interface RTCRtpSender.');
    }

    var transceiver = this.transceivers.find(function(t) {
      return t.rtpSender === sender;
    });

    if (!transceiver) {
      throw makeError('InvalidAccessError',
          'Sender was not created by this connection.');
    }
    var stream = transceiver.stream;

    transceiver.rtpSender.stop();
    transceiver.rtpSender = null;
    transceiver.track = null;
    transceiver.stream = null;

    // remove the stream from the set of local streams
    var localStreams = this.transceivers.map(function(t) {
      return t.stream;
    });
    if (localStreams.indexOf(stream) === -1 &&
        this.localStreams.indexOf(stream) > -1) {
      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
    }

    this._maybeFireNegotiationNeeded();
  };

  RTCPeerConnection.prototype.removeStream = function(stream) {
    var pc = this;
    stream.getTracks().forEach(function(track) {
      var sender = pc.getSenders().find(function(s) {
        return s.track === track;
      });
      if (sender) {
        pc.removeTrack(sender);
      }
    });
  };

  RTCPeerConnection.prototype.getSenders = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpSender;
    })
    .map(function(transceiver) {
      return transceiver.rtpSender;
    });
  };

  RTCPeerConnection.prototype.getReceivers = function() {
    return this.transceivers.filter(function(transceiver) {
      return !!transceiver.rtpReceiver;
    })
    .map(function(transceiver) {
      return transceiver.rtpReceiver;
    });
  };


  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
      usingBundle) {
    var pc = this;
    if (usingBundle && sdpMLineIndex > 0) {
      return this.transceivers[0].iceGatherer;
    } else if (this._iceGatherers.length) {
      return this._iceGatherers.shift();
    }
    var iceGatherer = new window.RTCIceGatherer({
      iceServers: this._config.iceServers,
      gatherPolicy: this._config.iceTransportPolicy
    });
    Object.defineProperty(iceGatherer, 'state',
        {value: 'new', writable: true}
    );

    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
      var end = !event.candidate || Object.keys(event.candidate).length === 0;
      // polyfill since RTCIceGatherer.state is not implemented in
      // Edge 10547 yet.
      iceGatherer.state = end ? 'completed' : 'gathering';
      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
      }
    };
    iceGatherer.addEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    return iceGatherer;
  };

  // start gathering from an RTCIceGatherer.
  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
    var pc = this;
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer.onlocalcandidate) {
      return;
    }
    var bufferedCandidateEvents =
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
    iceGatherer.removeEventListener('localcandidate',
      this.transceivers[sdpMLineIndex].bufferCandidates);
    iceGatherer.onlocalcandidate = function(evt) {
      if (pc.usingBundle && sdpMLineIndex > 0) {
        // if we know that we use bundle we can drop candidates with
        // ѕdpMLineIndex > 0. If we don't do this then our state gets
        // confused since we dispose the extra ice gatherer.
        return;
      }
      var event = new Event('icecandidate');
      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

      var cand = evt.candidate;
      // Edge emits an empty object for RTCIceCandidateComplete‥
      var end = !cand || Object.keys(cand).length === 0;
      if (end) {
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
          iceGatherer.state = 'completed';
        }
      } else {
        if (iceGatherer.state === 'new') {
          iceGatherer.state = 'gathering';
        }
        // RTCIceCandidate doesn't have a component, needs to be added
        cand.component = 1;
        // also the usernameFragment. TODO: update SDP to take both variants.
        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

        var serializedCandidate = SDPUtils.writeCandidate(cand);
        event.candidate = Object.assign(event.candidate,
            SDPUtils.parseCandidate(serializedCandidate));

        event.candidate.candidate = serializedCandidate;
        event.candidate.toJSON = function() {
          return {
            candidate: event.candidate.candidate,
            sdpMid: event.candidate.sdpMid,
            sdpMLineIndex: event.candidate.sdpMLineIndex,
            usernameFragment: event.candidate.usernameFragment
          };
        };
      }

      // update local description.
      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
      if (!end) {
        sections[event.candidate.sdpMLineIndex] +=
            'a=' + event.candidate.candidate + '\r\n';
      } else {
        sections[event.candidate.sdpMLineIndex] +=
            'a=end-of-candidates\r\n';
      }
      pc._localDescription.sdp =
          SDPUtils.getDescription(pc._localDescription.sdp) +
          sections.join('');
      var complete = pc.transceivers.every(function(transceiver) {
        return transceiver.iceGatherer &&
            transceiver.iceGatherer.state === 'completed';
      });

      if (pc.iceGatheringState !== 'gathering') {
        pc.iceGatheringState = 'gathering';
        pc._emitGatheringStateChange();
      }

      // Emit candidate. Also emit null candidate when all gatherers are
      // complete.
      if (!end) {
        pc._dispatchEvent('icecandidate', event);
      }
      if (complete) {
        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
        pc.iceGatheringState = 'complete';
        pc._emitGatheringStateChange();
      }
    };

    // emit already gathered candidates.
    window.setTimeout(function() {
      bufferedCandidateEvents.forEach(function(e) {
        iceGatherer.onlocalcandidate(e);
      });
    }, 0);
  };

  // Create ICE transport and DTLS transport.
  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
    var pc = this;
    var iceTransport = new window.RTCIceTransport(null);
    iceTransport.onicestatechange = function() {
      pc._updateIceConnectionState();
      pc._updateConnectionState();
    };

    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
    dtlsTransport.ondtlsstatechange = function() {
      pc._updateConnectionState();
    };
    dtlsTransport.onerror = function() {
      // onerror does not set state to failed by itself.
      Object.defineProperty(dtlsTransport, 'state',
          {value: 'failed', writable: true});
      pc._updateConnectionState();
    };

    return {
      iceTransport: iceTransport,
      dtlsTransport: dtlsTransport
    };
  };

  // Destroy ICE gatherer, ICE transport and DTLS transport.
  // Without triggering the callbacks.
  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
      sdpMLineIndex) {
    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
    if (iceGatherer) {
      delete iceGatherer.onlocalcandidate;
      delete this.transceivers[sdpMLineIndex].iceGatherer;
    }
    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
    if (iceTransport) {
      delete iceTransport.onicestatechange;
      delete this.transceivers[sdpMLineIndex].iceTransport;
    }
    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
    if (dtlsTransport) {
      delete dtlsTransport.ondtlsstatechange;
      delete dtlsTransport.onerror;
      delete this.transceivers[sdpMLineIndex].dtlsTransport;
    }
  };

  // Start the RTP Sender and Receiver for a transceiver.
  RTCPeerConnection.prototype._transceive = function(transceiver,
      send, recv) {
    var params = getCommonCapabilities(transceiver.localCapabilities,
        transceiver.remoteCapabilities);
    if (send && transceiver.rtpSender) {
      params.encodings = transceiver.sendEncodingParameters;
      params.rtcp = {
        cname: SDPUtils.localCName,
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.recvEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
      }
      transceiver.rtpSender.send(params);
    }
    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
      // remove RTX field in Edge 14942
      if (transceiver.kind === 'video'
          && transceiver.recvEncodingParameters
          && edgeVersion < 15019) {
        transceiver.recvEncodingParameters.forEach(function(p) {
          delete p.rtx;
        });
      }
      if (transceiver.recvEncodingParameters.length) {
        params.encodings = transceiver.recvEncodingParameters;
      } else {
        params.encodings = [{}];
      }
      params.rtcp = {
        compound: transceiver.rtcpParameters.compound
      };
      if (transceiver.rtcpParameters.cname) {
        params.rtcp.cname = transceiver.rtcpParameters.cname;
      }
      if (transceiver.sendEncodingParameters.length) {
        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
      }
      transceiver.rtpReceiver.receive(params);
    }
  };

  RTCPeerConnection.prototype.setLocalDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setLocalDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set local ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var sections;
    var sessionpart;
    if (description.type === 'offer') {
      // VERY limited support for SDP munging. Limited to:
      // * changing the order of codecs
      sections = SDPUtils.splitSections(description.sdp);
      sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var caps = SDPUtils.parseRtpParameters(mediaSection);
        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
      });

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        pc._gather(transceiver.mid, sdpMLineIndex);
      });
    } else if (description.type === 'answer') {
      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
      sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var transceiver = pc.transceivers[sdpMLineIndex];
        var iceGatherer = transceiver.iceGatherer;
        var iceTransport = transceiver.iceTransport;
        var dtlsTransport = transceiver.dtlsTransport;
        var localCapabilities = transceiver.localCapabilities;
        var remoteCapabilities = transceiver.remoteCapabilities;

        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

        if (!rejected && !transceiver.rejected) {
          var remoteIceParameters = SDPUtils.getIceParameters(
              mediaSection, sessionpart);
          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
              mediaSection, sessionpart);
          if (isIceLite) {
            remoteDtlsParameters.role = 'server';
          }

          if (!pc.usingBundle || sdpMLineIndex === 0) {
            pc._gather(transceiver.mid, sdpMLineIndex);
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  isIceLite ? 'controlling' : 'controlled');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // Calculate intersection of capabilities.
          var params = getCommonCapabilities(localCapabilities,
              remoteCapabilities);

          // Start the RTCRtpSender. The RTCRtpReceiver for this
          // transceiver has already been started in setRemoteDescription.
          pc._transceive(transceiver,
              params.codecs.length > 0,
              false);
        }
      });
    }

    pc._localDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-local-offer');
    } else {
      pc._updateSignalingState('stable');
    }

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
    var pc = this;

    // Note: pranswer is not supported.
    if (['offer', 'answer'].indexOf(description.type) === -1) {
      return Promise.reject(makeError('TypeError',
          'Unsupported type "' + description.type + '"'));
    }

    if (!isActionAllowedInSignalingState('setRemoteDescription',
        description.type, pc.signalingState) || pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not set remote ' + description.type +
          ' in state ' + pc.signalingState));
    }

    var streams = {};
    pc.remoteStreams.forEach(function(stream) {
      streams[stream.id] = stream;
    });
    var receiverList = [];
    var sections = SDPUtils.splitSections(description.sdp);
    var sessionpart = sections.shift();
    var isIceLite = SDPUtils.matchPrefix(sessionpart,
        'a=ice-lite').length > 0;
    var usingBundle = SDPUtils.matchPrefix(sessionpart,
        'a=group:BUNDLE ').length > 0;
    pc.usingBundle = usingBundle;
    var iceOptions = SDPUtils.matchPrefix(sessionpart,
        'a=ice-options:')[0];
    if (iceOptions) {
      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
          .indexOf('trickle') >= 0;
    } else {
      pc.canTrickleIceCandidates = false;
    }

    sections.forEach(function(mediaSection, sdpMLineIndex) {
      var lines = SDPUtils.splitLines(mediaSection);
      var kind = SDPUtils.getKind(mediaSection);
      // treat bundle-only as not-rejected.
      var rejected = SDPUtils.isRejected(mediaSection) &&
          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
      var protocol = lines[0].substr(2).split(' ')[2];

      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
      var remoteMsid = SDPUtils.parseMsid(mediaSection);

      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

      // Reject datachannels which are not implemented yet.
      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
          protocol === 'UDP/DTLS/SCTP'))) {
        // TODO: this is dangerous in the case where a non-rejected m-line
        //     becomes rejected.
        pc.transceivers[sdpMLineIndex] = {
          mid: mid,
          kind: kind,
          protocol: protocol,
          rejected: true
        };
        return;
      }

      if (!rejected && pc.transceivers[sdpMLineIndex] &&
          pc.transceivers[sdpMLineIndex].rejected) {
        // recycle a rejected transceiver.
        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
      }

      var transceiver;
      var iceGatherer;
      var iceTransport;
      var dtlsTransport;
      var rtpReceiver;
      var sendEncodingParameters;
      var recvEncodingParameters;
      var localCapabilities;

      var track;
      // FIXME: ensure the mediaSection has rtcp-mux set.
      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
      var remoteIceParameters;
      var remoteDtlsParameters;
      if (!rejected) {
        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
            sessionpart);
        remoteDtlsParameters.role = 'client';
      }
      recvEncodingParameters =
          SDPUtils.parseRtpEncodingParameters(mediaSection);

      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

      var isComplete = SDPUtils.matchPrefix(mediaSection,
          'a=end-of-candidates', sessionpart).length > 0;
      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
          .map(function(cand) {
            return SDPUtils.parseCandidate(cand);
          })
          .filter(function(cand) {
            return cand.component === 1;
          });

      // Check if we can use BUNDLE and dispose transports.
      if ((description.type === 'offer' || description.type === 'answer') &&
          !rejected && usingBundle && sdpMLineIndex > 0 &&
          pc.transceivers[sdpMLineIndex]) {
        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
        pc.transceivers[sdpMLineIndex].iceGatherer =
            pc.transceivers[0].iceGatherer;
        pc.transceivers[sdpMLineIndex].iceTransport =
            pc.transceivers[0].iceTransport;
        pc.transceivers[sdpMLineIndex].dtlsTransport =
            pc.transceivers[0].dtlsTransport;
        if (pc.transceivers[sdpMLineIndex].rtpSender) {
          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
              pc.transceivers[0].dtlsTransport);
        }
      }
      if (description.type === 'offer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex] ||
            pc._createTransceiver(kind);
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              usingBundle);
        }

        if (cands.length && transceiver.iceTransport.state === 'new') {
          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
            transceiver.iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }

        sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 2) * 1001
        }];

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        var isNewTrack = false;
        if (direction === 'sendrecv' || direction === 'sendonly') {
          isNewTrack = !transceiver.rtpReceiver;
          rtpReceiver = transceiver.rtpReceiver ||
              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

          if (isNewTrack) {
            var stream;
            track = rtpReceiver.track;
            // FIXME: does not work with Plan B.
            if (remoteMsid && remoteMsid.stream === '-') {
              // no-op. a stream id of '-' means: no associated stream.
            } else if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
                Object.defineProperty(streams[remoteMsid.stream], 'id', {
                  get: function() {
                    return remoteMsid.stream;
                  }
                });
              }
              Object.defineProperty(track, 'id', {
                get: function() {
                  return remoteMsid.track;
                }
              });
              stream = streams[remoteMsid.stream];
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              stream = streams.default;
            }
            if (stream) {
              addTrackToStreamAndFireEvent(track, stream);
              transceiver.associatedRemoteMediaStreams.push(stream);
            }
            receiverList.push([track, rtpReceiver, stream]);
          }
        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
            var nativeTrack = s.getTracks().find(function(t) {
              return t.id === transceiver.rtpReceiver.track.id;
            });
            if (nativeTrack) {
              removeTrackFromStreamAndFireEvent(nativeTrack, s);
            }
          });
          transceiver.associatedRemoteMediaStreams = [];
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.remoteCapabilities = remoteCapabilities;
        transceiver.rtpReceiver = rtpReceiver;
        transceiver.rtcpParameters = rtcpParameters;
        transceiver.sendEncodingParameters = sendEncodingParameters;
        transceiver.recvEncodingParameters = recvEncodingParameters;

        // Start the RTCRtpReceiver now. The RTPSender is started in
        // setLocalDescription.
        pc._transceive(pc.transceivers[sdpMLineIndex],
            false,
            isNewTrack);
      } else if (description.type === 'answer' && !rejected) {
        transceiver = pc.transceivers[sdpMLineIndex];
        iceGatherer = transceiver.iceGatherer;
        iceTransport = transceiver.iceTransport;
        dtlsTransport = transceiver.dtlsTransport;
        rtpReceiver = transceiver.rtpReceiver;
        sendEncodingParameters = transceiver.sendEncodingParameters;
        localCapabilities = transceiver.localCapabilities;

        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
            recvEncodingParameters;
        pc.transceivers[sdpMLineIndex].remoteCapabilities =
            remoteCapabilities;
        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

        if (cands.length && iceTransport.state === 'new') {
          if ((isIceLite || isComplete) &&
              (!usingBundle || sdpMLineIndex === 0)) {
            iceTransport.setRemoteCandidates(cands);
          } else {
            cands.forEach(function(candidate) {
              maybeAddCandidate(transceiver.iceTransport, candidate);
            });
          }
        }

        if (!usingBundle || sdpMLineIndex === 0) {
          if (iceTransport.state === 'new') {
            iceTransport.start(iceGatherer, remoteIceParameters,
                'controlling');
          }
          if (dtlsTransport.state === 'new') {
            dtlsTransport.start(remoteDtlsParameters);
          }
        }

        // If the offer contained RTX but the answer did not,
        // remove RTX from sendEncodingParameters.
        var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        pc._transceive(transceiver,
            direction === 'sendrecv' || direction === 'recvonly',
            direction === 'sendrecv' || direction === 'sendonly');

        // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
        if (rtpReceiver &&
            (direction === 'sendrecv' || direction === 'sendonly')) {
          track = rtpReceiver.track;
          if (remoteMsid) {
            if (!streams[remoteMsid.stream]) {
              streams[remoteMsid.stream] = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
          } else {
            if (!streams.default) {
              streams.default = new window.MediaStream();
            }
            addTrackToStreamAndFireEvent(track, streams.default);
            receiverList.push([track, rtpReceiver, streams.default]);
          }
        } else {
          // FIXME: actually the receiver should be created later.
          delete transceiver.rtpReceiver;
        }
      }
    });

    if (pc._dtlsRole === undefined) {
      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
    }

    pc._remoteDescription = {
      type: description.type,
      sdp: description.sdp
    };
    if (description.type === 'offer') {
      pc._updateSignalingState('have-remote-offer');
    } else {
      pc._updateSignalingState('stable');
    }
    Object.keys(streams).forEach(function(sid) {
      var stream = streams[sid];
      if (stream.getTracks().length) {
        if (pc.remoteStreams.indexOf(stream) === -1) {
          pc.remoteStreams.push(stream);
          var event = new Event('addstream');
          event.stream = stream;
          window.setTimeout(function() {
            pc._dispatchEvent('addstream', event);
          });
        }

        receiverList.forEach(function(item) {
          var track = item[0];
          var receiver = item[1];
          if (stream.id !== item[2].id) {
            return;
          }
          fireAddTrack(pc, track, receiver, [stream]);
        });
      }
    });
    receiverList.forEach(function(item) {
      if (item[2]) {
        return;
      }
      fireAddTrack(pc, item[0], item[1], []);
    });

    // check whether addIceCandidate({}) was called within four seconds after
    // setRemoteDescription.
    window.setTimeout(function() {
      if (!(pc && pc.transceivers)) {
        return;
      }
      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport &&
            transceiver.iceTransport.state === 'new' &&
            transceiver.iceTransport.getRemoteCandidates().length > 0) {
          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
              'an end-of-candidates notification');
          transceiver.iceTransport.addRemoteCandidate({});
        }
      });
    }, 4000);

    return Promise.resolve();
  };

  RTCPeerConnection.prototype.close = function() {
    this.transceivers.forEach(function(transceiver) {
      /* not yet
      if (transceiver.iceGatherer) {
        transceiver.iceGatherer.close();
      }
      */
      if (transceiver.iceTransport) {
        transceiver.iceTransport.stop();
      }
      if (transceiver.dtlsTransport) {
        transceiver.dtlsTransport.stop();
      }
      if (transceiver.rtpSender) {
        transceiver.rtpSender.stop();
      }
      if (transceiver.rtpReceiver) {
        transceiver.rtpReceiver.stop();
      }
    });
    // FIXME: clean up tracks, local streams, remote streams, etc
    this._isClosed = true;
    this._updateSignalingState('closed');
  };

  // Update the signaling state.
  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
    this.signalingState = newState;
    var event = new Event('signalingstatechange');
    this._dispatchEvent('signalingstatechange', event);
  };

  // Determine whether to fire the negotiationneeded event.
  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
    var pc = this;
    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
      return;
    }
    this.needNegotiation = true;
    window.setTimeout(function() {
      if (pc.needNegotiation) {
        pc.needNegotiation = false;
        var event = new Event('negotiationneeded');
        pc._dispatchEvent('negotiationneeded', event);
      }
    }, 0);
  };

  // Update the ice connection state.
  RTCPeerConnection.prototype._updateIceConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      checking: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
      }
    });

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.checking > 0) {
      newState = 'checking';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    } else if (states.completed > 0) {
      newState = 'completed';
    }

    if (newState !== this.iceConnectionState) {
      this.iceConnectionState = newState;
      var event = new Event('iceconnectionstatechange');
      this._dispatchEvent('iceconnectionstatechange', event);
    }
  };

  // Update the connection state.
  RTCPeerConnection.prototype._updateConnectionState = function() {
    var newState;
    var states = {
      'new': 0,
      closed: 0,
      connecting: 0,
      connected: 0,
      completed: 0,
      disconnected: 0,
      failed: 0
    };
    this.transceivers.forEach(function(transceiver) {
      if (transceiver.iceTransport && transceiver.dtlsTransport &&
          !transceiver.rejected) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      }
    });
    // ICETransport.completed and connected are the same for this purpose.
    states.connected += states.completed;

    newState = 'new';
    if (states.failed > 0) {
      newState = 'failed';
    } else if (states.connecting > 0) {
      newState = 'connecting';
    } else if (states.disconnected > 0) {
      newState = 'disconnected';
    } else if (states.new > 0) {
      newState = 'new';
    } else if (states.connected > 0) {
      newState = 'connected';
    }

    if (newState !== this.connectionState) {
      this.connectionState = newState;
      var event = new Event('connectionstatechange');
      this._dispatchEvent('connectionstatechange', event);
    }
  };

  RTCPeerConnection.prototype.createOffer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createOffer after close'));
    }

    var numAudioTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'audio';
    }).length;
    var numVideoTracks = pc.transceivers.filter(function(t) {
      return t.kind === 'video';
    }).length;

    // Determine number of audio and video tracks we need to send/recv.
    var offerOptions = arguments[0];
    if (offerOptions) {
      // Reject Chrome legacy constraints.
      if (offerOptions.mandatory || offerOptions.optional) {
        throw new TypeError(
            'Legacy mandatory/optional constraints not supported.');
      }
      if (offerOptions.offerToReceiveAudio !== undefined) {
        if (offerOptions.offerToReceiveAudio === true) {
          numAudioTracks = 1;
        } else if (offerOptions.offerToReceiveAudio === false) {
          numAudioTracks = 0;
        } else {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
      }
      if (offerOptions.offerToReceiveVideo !== undefined) {
        if (offerOptions.offerToReceiveVideo === true) {
          numVideoTracks = 1;
        } else if (offerOptions.offerToReceiveVideo === false) {
          numVideoTracks = 0;
        } else {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
    }

    pc.transceivers.forEach(function(transceiver) {
      if (transceiver.kind === 'audio') {
        numAudioTracks--;
        if (numAudioTracks < 0) {
          transceiver.wantReceive = false;
        }
      } else if (transceiver.kind === 'video') {
        numVideoTracks--;
        if (numVideoTracks < 0) {
          transceiver.wantReceive = false;
        }
      }
    });

    // Create M-lines for recvonly streams.
    while (numAudioTracks > 0 || numVideoTracks > 0) {
      if (numAudioTracks > 0) {
        pc._createTransceiver('audio');
        numAudioTracks--;
      }
      if (numVideoTracks > 0) {
        pc._createTransceiver('video');
        numVideoTracks--;
      }
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      // For each track, create an ice gatherer, ice transport,
      // dtls transport, potentially rtpsender and rtpreceiver.
      var track = transceiver.track;
      var kind = transceiver.kind;
      var mid = transceiver.mid || SDPUtils.generateIdentifier();
      transceiver.mid = mid;

      if (!transceiver.iceGatherer) {
        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
            pc.usingBundle);
      }

      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
      // filter RTX until additional stuff needed for RTX is implemented
      // in adapter.js
      if (edgeVersion < 15019) {
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
      }
      localCapabilities.codecs.forEach(function(codec) {
        // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
        // by adding level-asymmetry-allowed=1
        if (codec.name === 'H264' &&
            codec.parameters['level-asymmetry-allowed'] === undefined) {
          codec.parameters['level-asymmetry-allowed'] = '1';
        }

        // for subsequent offers, we might have to re-use the payload
        // type of the last offer.
        if (transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.codecs) {
          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                codec.clockRate === remoteCodec.clockRate) {
              codec.preferredPayloadType = remoteCodec.payloadType;
            }
          });
        }
      });
      localCapabilities.headerExtensions.forEach(function(hdrExt) {
        var remoteExtensions = transceiver.remoteCapabilities &&
            transceiver.remoteCapabilities.headerExtensions || [];
        remoteExtensions.forEach(function(rHdrExt) {
          if (hdrExt.uri === rHdrExt.uri) {
            hdrExt.id = rHdrExt.id;
          }
        });
      });

      // generate an ssrc now, to be used later in rtpSender.send
      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
        ssrc: (2 * sdpMLineIndex + 1) * 1001
      }];
      if (track) {
        // add RTX
        if (edgeVersion >= 15019 && kind === 'video' &&
            !sendEncodingParameters[0].rtx) {
          sendEncodingParameters[0].rtx = {
            ssrc: sendEncodingParameters[0].ssrc + 1
          };
        }
      }

      if (transceiver.wantReceive) {
        transceiver.rtpReceiver = new window.RTCRtpReceiver(
            transceiver.dtlsTransport, kind);
      }

      transceiver.localCapabilities = localCapabilities;
      transceiver.sendEncodingParameters = sendEncodingParameters;
    });

    // always offer BUNDLE and dispose on return if not supported.
    if (pc._config.bundlePolicy !== 'max-compat') {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
          'offer', transceiver.stream, pc._dtlsRole);
      sdp += 'a=rtcp-rsize\r\n';

      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
          (sdpMLineIndex === 0 || !pc.usingBundle)) {
        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
          cand.component = 1;
          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
        });

        if (transceiver.iceGatherer.state === 'completed') {
          sdp += 'a=end-of-candidates\r\n';
        }
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'offer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.createAnswer = function() {
    var pc = this;

    if (pc._isClosed) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer after close'));
    }

    if (!(pc.signalingState === 'have-remote-offer' ||
        pc.signalingState === 'have-local-pranswer')) {
      return Promise.reject(makeError('InvalidStateError',
          'Can not call createAnswer in signalingState ' + pc.signalingState));
    }

    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
        pc._sdpSessionVersion++);
    if (pc.usingBundle) {
      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
        return t.mid;
      }).join(' ') + '\r\n';
    }
    sdp += 'a=ice-options:trickle\r\n';

    var mediaSectionsInOffer = SDPUtils.getMediaSections(
        pc._remoteDescription.sdp).length;
    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
        return;
      }
      if (transceiver.rejected) {
        if (transceiver.kind === 'application') {
          if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
          } else {
            sdp += 'm=application 0 ' + transceiver.protocol +
                ' webrtc-datachannel\r\n';
          }
        } else if (transceiver.kind === 'audio') {
          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
              'a=rtpmap:0 PCMU/8000\r\n';
        } else if (transceiver.kind === 'video') {
          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
              'a=rtpmap:120 VP8/90000\r\n';
        }
        sdp += 'c=IN IP4 0.0.0.0\r\n' +
            'a=inactive\r\n' +
            'a=mid:' + transceiver.mid + '\r\n';
        return;
      }

      // FIXME: look at direction.
      if (transceiver.stream) {
        var localTrack;
        if (transceiver.kind === 'audio') {
          localTrack = transceiver.stream.getAudioTracks()[0];
        } else if (transceiver.kind === 'video') {
          localTrack = transceiver.stream.getVideoTracks()[0];
        }
        if (localTrack) {
          // add RTX
          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
              !transceiver.sendEncodingParameters[0].rtx) {
            transceiver.sendEncodingParameters[0].rtx = {
              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
            };
          }
        }
      }

      // Calculate intersection of capabilities.
      var commonCapabilities = getCommonCapabilities(
          transceiver.localCapabilities,
          transceiver.remoteCapabilities);

      var hasRtx = commonCapabilities.codecs.filter(function(c) {
        return c.name.toLowerCase() === 'rtx';
      }).length;
      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
        delete transceiver.sendEncodingParameters[0].rtx;
      }

      sdp += writeMediaSection(transceiver, commonCapabilities,
          'answer', transceiver.stream, pc._dtlsRole);
      if (transceiver.rtcpParameters &&
          transceiver.rtcpParameters.reducedSize) {
        sdp += 'a=rtcp-rsize\r\n';
      }
    });

    var desc = new window.RTCSessionDescription({
      type: 'answer',
      sdp: sdp
    });
    return Promise.resolve(desc);
  };

  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
    var pc = this;
    var sections;
    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
        candidate.sdpMid)) {
      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
    }

    // TODO: needs to go into ops queue.
    return new Promise(function(resolve, reject) {
      if (!pc._remoteDescription) {
        return reject(makeError('InvalidStateError',
            'Can not add ICE candidate without a remote description'));
      } else if (!candidate || candidate.candidate === '') {
        for (var j = 0; j < pc.transceivers.length; j++) {
          if (pc.transceivers[j].rejected) {
            continue;
          }
          pc.transceivers[j].iceTransport.addRemoteCandidate({});
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[j] += 'a=end-of-candidates\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
          if (pc.usingBundle) {
            break;
          }
        }
      } else {
        var sdpMLineIndex = candidate.sdpMLineIndex;
        if (candidate.sdpMid) {
          for (var i = 0; i < pc.transceivers.length; i++) {
            if (pc.transceivers[i].mid === candidate.sdpMid) {
              sdpMLineIndex = i;
              break;
            }
          }
        }
        var transceiver = pc.transceivers[sdpMLineIndex];
        if (transceiver) {
          if (transceiver.rejected) {
            return resolve();
          }
          var cand = Object.keys(candidate.candidate).length > 0 ?
              SDPUtils.parseCandidate(candidate.candidate) : {};
          // Ignore Chrome's invalid candidates since Edge does not like them.
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return resolve();
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component && cand.component !== 1) {
            return resolve();
          }
          // when using bundle, avoid adding candidates to the wrong
          // ice transport. And avoid adding candidates added in the SDP.
          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
              return reject(makeError('OperationError',
                  'Can not add ICE candidate'));
            }
          }

          // update the remoteDescription.
          var candidateString = candidate.candidate.trim();
          if (candidateString.indexOf('a=') === 0) {
            candidateString = candidateString.substr(2);
          }
          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
          sections[sdpMLineIndex] += 'a=' +
              (cand.type ? candidateString : 'end-of-candidates')
              + '\r\n';
          pc._remoteDescription.sdp =
              SDPUtils.getDescription(pc._remoteDescription.sdp) +
              sections.join('');
        } else {
          return reject(makeError('OperationError',
              'Can not add ICE candidate'));
        }
      }
      resolve();
    });
  };

  RTCPeerConnection.prototype.getStats = function(selector) {
    if (selector && selector instanceof window.MediaStreamTrack) {
      var senderOrReceiver = null;
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.rtpSender &&
            transceiver.rtpSender.track === selector) {
          senderOrReceiver = transceiver.rtpSender;
        } else if (transceiver.rtpReceiver &&
            transceiver.rtpReceiver.track === selector) {
          senderOrReceiver = transceiver.rtpReceiver;
        }
      });
      if (!senderOrReceiver) {
        throw makeError('InvalidAccessError', 'Invalid selector.');
      }
      return senderOrReceiver.getStats();
    }

    var promises = [];
    this.transceivers.forEach(function(transceiver) {
      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
          'dtlsTransport'].forEach(function(method) {
            if (transceiver[method]) {
              promises.push(transceiver[method].getStats());
            }
          });
    });
    return Promise.all(promises).then(function(allStats) {
      var results = new Map();
      allStats.forEach(function(stats) {
        stats.forEach(function(stat) {
          results.set(stat.id, stat);
        });
      });
      return results;
    });
  };

  // fix low-level stat names and return Map instead of object.
  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
    'RTCIceTransport', 'RTCDtlsTransport'];
  ortcObjects.forEach(function(ortcObjectName) {
    var obj = window[ortcObjectName];
    if (obj && obj.prototype && obj.prototype.getStats) {
      var nativeGetstats = obj.prototype.getStats;
      obj.prototype.getStats = function() {
        return nativeGetstats.apply(this)
        .then(function(nativeStats) {
          var mapStats = new Map();
          Object.keys(nativeStats).forEach(function(id) {
            nativeStats[id].type = fixStatsType(nativeStats[id]);
            mapStats.set(id, nativeStats[id]);
          });
          return mapStats;
        });
      };
    }
  });

  // legacy callback shims. Should be moved to adapter.js some days.
  var methods = ['createOffer', 'createAnswer'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[0] === 'function' ||
          typeof args[1] === 'function') { // legacy
        return nativeMethod.apply(this, [arguments[2]])
        .then(function(description) {
          if (typeof args[0] === 'function') {
            args[0].apply(null, [description]);
          }
        }, function(error) {
          if (typeof args[1] === 'function') {
            args[1].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
  methods.forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function' ||
          typeof args[2] === 'function') { // legacy
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        }, function(error) {
          if (typeof args[2] === 'function') {
            args[2].apply(null, [error]);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  // getStats is special. It doesn't have a spec legacy method yet we support
  // getStats(something, cb) without error callbacks.
  ['getStats'].forEach(function(method) {
    var nativeMethod = RTCPeerConnection.prototype[method];
    RTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      if (typeof args[1] === 'function') {
        return nativeMethod.apply(this, arguments)
        .then(function() {
          if (typeof args[1] === 'function') {
            args[1].apply(null);
          }
        });
      }
      return nativeMethod.apply(this, arguments);
    };
  });

  return RTCPeerConnection;
};


/***/ }),

/***/ "./node_modules/sdp/sdp.js":
/*!*********************************!*\
  !*** ./node_modules/sdp/sdp.js ***!
  \*********************************/
/***/ ((module) => {

"use strict";
/* eslint-env node */


// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
  return parts.map(function(part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function(blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function(blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function(line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parseInt(parts[1], 10),
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compability.
        candidate.usernameFragment = parts[i + 1];
        break;
      default: // extension handling, in particular ufrag
        candidate[parts[i]] = parts[i + 1];
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function(candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);
  sdp.push(candidate.component);
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress &&
      candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function(line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function(line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
        ? '/' + headerExtension.direction
        : '') +
      ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function(line) {
  var parsed = {};
  var kv;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function(param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function(line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function(codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function(fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
          '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function(line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function(line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function(ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function(mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function(line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function(params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function(fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};

// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3),
  };
};

SDPUtils.writeCryptoLine = function(parameters) {
  return 'a=crypto:' + parameters.tag + ' ' +
    parameters.cryptoSuite + ' ' +
    (typeof parameters.keyParams === 'object'
      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
      : parameters.keyParams) +
    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
    '\r\n';
};

// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function(keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }
  var parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
  };
};

SDPUtils.writeCryptoKeyParams = function(keyParams) {
  return keyParams.keyMethod + ':'
    + keyParams.keySalt +
    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
    (keyParams.mkiValue && keyParams.mkiLength
      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
      : '');
};

// Extracts all SDES paramters.
SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
};

// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-ufrag:')[0];
  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
    'a=ice-pwd:')[0];
  if (!(ufrag && pwd)) {
    return null;
  }
  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10),
  };
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function(params) {
  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
      'a=ice-pwd:' + params.password + '\r\n';
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function(mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(
      mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(
        mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(
        mediaSection, 'a=rtcp-fb:' + pt + ' ')
        .map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function(kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function(codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function(codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function(codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }
  sdp += 'a=rtcp-mux\r\n';

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function(extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(parts) {
      return parts.attribute === 'cname';
    });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
    .map(function(line) {
      var parts = line.substr(17).split(' ');
      return parts.map(function(part) {
        return parseInt(part, 10);
      });
    });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = {ssrc: secondarySsrc};
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
          - (50 * 40 * 8);
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function(mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note tha with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(obj) {
      return obj.attribute === 'cname';
    })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function(mediaSection) {
  var parts;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return {stream: parts[0], track: parts[1]};
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(msidParts) {
      return msidParts.attribute === 'msid';
    });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return {stream: parts[0], track: parts[1]};
  }
};

// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function(mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize;
  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }
  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }
  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }
  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
  if (sctpMapLines.length > 0) {
    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0]
      .substr(10)
      .split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
};

// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function(media, sctp) {
  var output = [];
  if (media.protocol !== 'DTLS/SCTP') {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctp-port:' + sctp.port + '\r\n'
    ];
  } else {
    output = [
      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
      'c=IN IP4 0.0.0.0\r\n',
      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
    ];
  }
  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }
  return output.join('');
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function() {
  return Math.random().toString().substr(2, 21);
};

// Write boilder plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
  var sessionId;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' +
      'o=' + user + ' ' + sessionId + ' ' + version +
        ' IN IP4 127.0.0.1\r\n' +
      's=-\r\n' +
      't=0 0\r\n';
};

SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

  // Map ICE parameters (ufrag, pwd) to SDP.
  sdp += SDPUtils.writeIceParameters(
    transceiver.iceGatherer.getLocalParameters());

  // Map DTLS parameters to SDP.
  sdp += SDPUtils.writeDtlsParameters(
    transceiver.dtlsTransport.getLocalParameters(),
    type === 'offer' ? 'actpass' : 'active');

  sdp += 'a=mid:' + transceiver.mid + '\r\n';

  if (transceiver.direction) {
    sdp += 'a=' + transceiver.direction + '\r\n';
  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
    sdp += 'a=sendrecv\r\n';
  } else if (transceiver.rtpSender) {
    sdp += 'a=sendonly\r\n';
  } else if (transceiver.rtpReceiver) {
    sdp += 'a=recvonly\r\n';
  } else {
    sdp += 'a=inactive\r\n';
  }

  if (transceiver.rtpSender) {
    // spec.
    var msid = 'msid:' + stream.id + ' ' +
        transceiver.rtpSender.track.id + '\r\n';
    sdp += 'a=' + msid;

    // for Chrome.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
    if (transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' ' + msid;
      sdp += 'a=ssrc-group:FID ' +
          transceiver.sendEncodingParameters[0].ssrc + ' ' +
          transceiver.sendEncodingParameters[0].rtx.ssrc +
          '\r\n';
    }
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
  }
  return sdp;
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function(mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function(mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function(mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function(mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function(blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if (true) {
  module.exports = SDPUtils;
}


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_core.js":
/*!************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_core.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter_factory.js */ "./node_modules/webrtc-adapter/src/js/adapter_factory.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





const adapter =
  (0,_adapter_factory_js__WEBPACK_IMPORTED_MODULE_0__.adapterFactory)({window: typeof window === 'undefined' ? undefined : window});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adapter);


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/adapter_factory.js":
/*!***************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/adapter_factory.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adapterFactory": () => (/* binding */ adapterFactory)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chrome/chrome_shim */ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js");
/* harmony import */ var _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edge/edge_shim */ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js");
/* harmony import */ var _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firefox/firefox_shim */ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js");
/* harmony import */ var _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./safari/safari_shim */ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js");
/* harmony import */ var _common_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common_shim */ "./node_modules/webrtc-adapter/src/js/common_shim.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */


  // Browser shims.






// Shimming starts here.
function adapterFactory({window} = {}, options = {
  shimChrome: true,
  shimFirefox: true,
  shimEdge: true,
  shimSafari: true,
}) {
  // Utils.
  const logging = _utils__WEBPACK_IMPORTED_MODULE_0__.log;
  const browserDetails = _utils__WEBPACK_IMPORTED_MODULE_0__.detectBrowser(window);

  const adapter = {
    browserDetails,
    commonShim: _common_shim__WEBPACK_IMPORTED_MODULE_5__,
    extractVersion: _utils__WEBPACK_IMPORTED_MODULE_0__.extractVersion,
    disableLog: _utils__WEBPACK_IMPORTED_MODULE_0__.disableLog,
    disableWarnings: _utils__WEBPACK_IMPORTED_MODULE_0__.disableWarnings
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__ || !_chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimPeerConnection ||
          !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__;

      // Must be called before shimPeerConnection.
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimAddIceCandidateNullOrEmpty(window, browserDetails);

      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimGetUserMedia(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimMediaStream(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimPeerConnection(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimOnTrack(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimAddTrackRemoveTrack(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimGetSendersWithDtmf(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimGetStats(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.shimSenderReceiverGetStats(window, browserDetails);
      _chrome_chrome_shim__WEBPACK_IMPORTED_MODULE_1__.fixNegotiationNeeded(window, browserDetails);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimRTCIceCandidate(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimConnectionState(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimMaxMessageSize(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimSendThrowTypeError(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.removeExtmapAllowMixed(window, browserDetails);
      break;
    case 'firefox':
      if (!_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__ || !_firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimPeerConnection ||
          !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__;

      // Must be called before shimPeerConnection.
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimAddIceCandidateNullOrEmpty(window, browserDetails);

      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimGetUserMedia(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimPeerConnection(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimOnTrack(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimRemoveStream(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimSenderGetStats(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimReceiverGetStats(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimRTCDataChannel(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimAddTransceiver(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimGetParameters(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimCreateOffer(window, browserDetails);
      _firefox_firefox_shim__WEBPACK_IMPORTED_MODULE_3__.shimCreateAnswer(window, browserDetails);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimRTCIceCandidate(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimConnectionState(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimMaxMessageSize(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimSendThrowTypeError(window, browserDetails);
      break;
    case 'edge':
      if (!_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__ || !_edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__.shimPeerConnection || !options.shimEdge) {
        logging('MS edge shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__;

      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__.shimGetUserMedia(window, browserDetails);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__.shimGetDisplayMedia(window, browserDetails);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__.shimPeerConnection(window, browserDetails);
      _edge_edge_shim__WEBPACK_IMPORTED_MODULE_2__.shimReplaceTrack(window, browserDetails);

      // the edge shim implements the full RTCIceCandidate object.

      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimMaxMessageSize(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimSendThrowTypeError(window, browserDetails);
      break;
    case 'safari':
      if (!_safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__ || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__;

      // Must be called before shimCallbackAPI.
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimAddIceCandidateNullOrEmpty(window, browserDetails);

      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimRTCIceServerUrls(window, browserDetails);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimCreateOfferLegacy(window, browserDetails);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimCallbacksAPI(window, browserDetails);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimLocalStreamsAPI(window, browserDetails);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimRemoteStreamsAPI(window, browserDetails);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimTrackEventTransceiver(window, browserDetails);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimGetUserMedia(window, browserDetails);
      _safari_safari_shim__WEBPACK_IMPORTED_MODULE_4__.shimAudioContext(window, browserDetails);

      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimRTCIceCandidate(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimMaxMessageSize(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.shimSendThrowTypeError(window, browserDetails);
      _common_shim__WEBPACK_IMPORTED_MODULE_5__.removeExtmapAllowMixed(window, browserDetails);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixNegotiationNeeded": () => (/* binding */ fixNegotiationNeeded),
/* harmony export */   "shimAddTrackRemoveTrack": () => (/* binding */ shimAddTrackRemoveTrack),
/* harmony export */   "shimAddTrackRemoveTrackWithNative": () => (/* binding */ shimAddTrackRemoveTrackWithNative),
/* harmony export */   "shimGetDisplayMedia": () => (/* reexport safe */ _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__.shimGetDisplayMedia),
/* harmony export */   "shimGetSendersWithDtmf": () => (/* binding */ shimGetSendersWithDtmf),
/* harmony export */   "shimGetStats": () => (/* binding */ shimGetStats),
/* harmony export */   "shimGetUserMedia": () => (/* reexport safe */ _getusermedia__WEBPACK_IMPORTED_MODULE_1__.shimGetUserMedia),
/* harmony export */   "shimMediaStream": () => (/* binding */ shimMediaStream),
/* harmony export */   "shimOnTrack": () => (/* binding */ shimOnTrack),
/* harmony export */   "shimPeerConnection": () => (/* binding */ shimPeerConnection),
/* harmony export */   "shimSenderReceiverGetStats": () => (/* binding */ shimSenderReceiverGetStats)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js");
/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */






function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
      window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get() {
        return this._ontrack;
      },
      set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },
      enumerable: true,
      configurable: true
    });
    const origSetRemoteDescription =
        window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        if (!this._ontrackpoly) {
          this._ontrackpoly = (e) => {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', te => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === te.track.id);
              } else {
                receiver = {track: te.track};
              }

              const event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(track => {
              let receiver;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers()
                  .find(r => r.track && r.track.id === track.id);
              } else {
                receiver = {track};
              }
              const event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = {receiver};
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
          };
          this.addEventListener('addstream', this._ontrackpoly);
        }
        return origSetRemoteDescription.apply(this, arguments);
      };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.wrapPeerConnectionEvent(window, 'track', e => {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver',
          {value: {receiver: e.receiver}});
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if (typeof window === 'object' && window.RTCPeerConnection &&
      !('getSenders' in window.RTCPeerConnection.prototype) &&
      'createDTMFSender' in window.RTCPeerConnection.prototype) {
    const shimSenderWithDtmf = function(pc, track) {
      return {
        track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack =
        function addTrack(track, stream) {
          let sender = origAddTrack.apply(this, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(this, track);
            this._senders.push(sender);
          }
          return sender;
        };

      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack =
        function removeTrack(sender) {
          origRemoveTrack.apply(this, arguments);
          const idx = this._senders.indexOf(sender);
          if (idx !== -1) {
            this._senders.splice(idx, 1);
          }
        };
    }
    const origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(track => {
        this._senders.push(shimSenderWithDtmf(this, track));
      });
    };

    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        this._senders = this._senders || [];
        origRemoveStream.apply(this, [stream]);

        stream.getTracks().forEach(track => {
          const sender = this._senders.find(s => s.track === track);
          if (sender) { // remove sender
            this._senders.splice(this._senders.indexOf(sender), 1);
          }
        });
      };
  } else if (typeof window === 'object' && window.RTCPeerConnection &&
             'getSenders' in window.RTCPeerConnection.prototype &&
             'createDTMFSender' in window.RTCPeerConnection.prototype &&
             window.RTCRtpSender &&
             !('dtmf' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.
    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 ||
        typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    const fixChromeStats_ = function(response) {
      const standardReport = {};
      const reports = response.result();
      reports.forEach(report => {
        const standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(name => {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    const makeMapStats = function(stats) {
      return new Map(Object.keys(stats).map(key => [key, stats[key]]));
    };

    if (arguments.length >= 2) {
      const successCallbackWrapper_ = function(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_,
        selector]);
    }

    // promise-support
    return new Promise((resolve, reject) => {
      origGetStats.apply(this, [
        function(response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        }, reject]);
    }).then(onSucc, onErr);
  };
}

function shimSenderReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach(sender => sender._pc = this);
        return senders;
      };
    }

    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
      const sender = this;
      return this._pc.getStats().then(result =>
        /* Note: this will include stats of all senders that
         *   send a track with the same id as sender.track as
         *   it is not possible to identify the RTCRtpSender.
         */
        _utils_js__WEBPACK_IMPORTED_MODULE_0__.filterStats(result, sender.track, true));
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers =
        function getReceivers() {
          const receivers = origGetReceivers.apply(this, []);
          receivers.forEach(receiver => receiver._pc = this);
          return receivers;
        };
    }
    _utils_js__WEBPACK_IMPORTED_MODULE_0__.wrapPeerConnectionEvent(window, 'track', e => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      const receiver = this;
      return this._pc.getStats().then(result =>
        _utils_js__WEBPACK_IMPORTED_MODULE_0__.filterStats(result, receiver.track, false));
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype &&
      'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  const origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 &&
        arguments[0] instanceof window.MediaStreamTrack) {
      const track = arguments[0];
      let sender;
      let receiver;
      let err;
      this.getSenders().forEach(s => {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(r => {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || (sender && receiver)) {
        return Promise.reject(new DOMException(
          'There are more than one sender or receiver for the track.',
          'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException(
        'There is no sender or receiver for the track.',
        'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams)
        .map(streamId => this._shimmedLocalStreams[streamId][0]);
    };

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      const sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    const existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    const newSenders = this.getSenders()
      .filter(newSender => existingSenders.indexOf(newSender) === -1);
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };

  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach(streamId => {
          const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx !== -1) {
            this._shimmedLocalStreams[streamId].splice(idx, 1);
          }
          if (this._shimmedLocalStreams[streamId].length === 1) {
            delete this._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
}

function shimAddTrackRemoveTrack(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack &&
      browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  const origGetLocalStreams = window.RTCPeerConnection.prototype
      .getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams =
    function getLocalStreams() {
      const nativeStreams = origGetLocalStreams.apply(this);
      this._reverseStreams = this._reverseStreams || {};
      return nativeStreams.map(stream => this._reverseStreams[stream.id]);
    };

  const origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(track => {
      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      const newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};

      origRemoveStream.apply(this, [(this._streams[stream.id] || stream)]);
      delete this._reverseStreams[(this._streams[stream.id] ?
          this._streams[stream.id].id : stream.id)];
      delete this._streams[stream.id];
    };

  window.RTCPeerConnection.prototype.addTrack =
    function addTrack(track, stream) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      const streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 ||
          !streams[0].getTracks().find(t => t === track)) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException(
          'The adapter.js addTrack polyfill only supports a single ' +
          ' stream which is associated with the specified track.',
          'NotSupportedError');
      }

      const alreadyExists = this.getSenders().find(s => s.track === track);
      if (alreadyExists) {
        throw new DOMException('Track already exists.',
            'InvalidAccessError');
      }

      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      const oldStream = this._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(() => {
          this.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        const newStream = new window.MediaStream([track]);
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        this.addStream(newStream);
      }
      return this.getSenders().find(s => s.track === track);
    };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
          externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    let sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(internalId => {
      const externalStream = pc._reverseStreams[internalId];
      const internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
          internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function(method) {
    const nativeMethod = window.RTCPeerConnection.prototype[method];
    const methodObj = {[method]() {
      const args = arguments;
      const isLegacyCall = arguments.length &&
          typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [
          (description) => {
            const desc = replaceInternalStreamId(this, description);
            args[0].apply(null, [desc]);
          },
          (err) => {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]
        ]);
      }
      return nativeMethod.apply(this, arguments)
      .then(description => replaceInternalStreamId(this, description));
    }};
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });

  const origSetLocalDescription =
      window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription =
    function setLocalDescription() {
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(this, arguments);
      }
      arguments[0] = replaceExternalStreamId(this, arguments[0]);
      return origSetLocalDescription.apply(this, arguments);
    };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  const origLocalDescription = Object.getOwnPropertyDescriptor(
      window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype,
      'localDescription', {
        get() {
          const description = origLocalDescription.get.apply(this);
          if (description.type === '') {
            return description;
          }
          return replaceInternalStreamId(this, description);
        }
      });

  window.RTCPeerConnection.prototype.removeTrack =
    function removeTrack(sender) {
      if (this.signalingState === 'closed') {
        throw new DOMException(
          'The RTCPeerConnection\'s signalingState is \'closed\'.',
          'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.', 'TypeError');
      }
      const isLocal = sender._pc === this;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.',
            'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      this._streams = this._streams || {};
      let stream;
      Object.keys(this._streams).forEach(streamid => {
        const hasTrack = this._streams[streamid].getTracks()
          .find(track => sender.track === track);
        if (hasTrack) {
          stream = this._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          this.removeStream(this._reverseStreams[stream.id]);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        this.dispatchEvent(new Event('negotiationneeded'));
      }
    };
}

function shimPeerConnection(window, browserDetails) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          const nativeMethod = window.RTCPeerConnection.prototype[method];
          const methodObj = {[method]() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          }};
          window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
  }
}

// Attempt to fix ONN in plan-b mode.
function fixNegotiationNeeded(window, browserDetails) {
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.wrapPeerConnectionEvent(window, 'negotiationneeded', e => {
    const pc = e.target;
    if (browserDetails.version < 72 || (pc.getConfiguration &&
        pc.getConfiguration().sdpSemantics === 'plan-b')) {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }
    return e;
  });
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getdisplaymedia.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimGetDisplayMedia": () => (/* binding */ shimGetDisplayMedia)
/* harmony export */ });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' +
        'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    function getDisplayMedia(constraints) {
      return getSourceId(constraints)
        .then(sourceId => {
          const widthSpecified = constraints.video && constraints.video.width;
          const heightSpecified = constraints.video &&
            constraints.video.height;
          const frameRateSpecified = constraints.video &&
            constraints.video.frameRate;
          constraints.video = {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: sourceId,
              maxFrameRate: frameRateSpecified || 3
            }
          };
          if (widthSpecified) {
            constraints.video.mandatory.maxWidth = widthSpecified;
          }
          if (heightSpecified) {
            constraints.video.mandatory.maxHeight = heightSpecified;
          }
          return window.navigator.mediaDevices.getUserMedia(constraints);
        });
    };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js":
/*!*******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/chrome/getusermedia.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimGetUserMedia": () => (/* binding */ shimGetUserMedia)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


const logging = _utils_js__WEBPACK_IMPORTED_MODULE_0__.log;

function shimGetUserMedia(window, browserDetails) {
  const navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  const constraintsToChrome_ = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    const cc = {};
    Object.keys(c).forEach(key => {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      const r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      const oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        let oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(mix => {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  const shimConstraints_ = function(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && typeof constraints.audio === 'object') {
      const remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile & surface pro.
      let face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});
      const getSupportedFacingModeLies = browserDetails.version < 66;

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode &&
            !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        let matches;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices()
          .then(devices => {
            devices = devices.filter(d => d.kind === 'videoinput');
            let dev = devices.find(d => matches.some(match =>
              d.label.toLowerCase().includes(match)));
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
                                                        {ideal: dev.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  const shimError_ = function(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  const getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, c => {
      navigator.webkitGetUserMedia(c, onSuccess, e => {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  if (navigator.mediaDevices.getUserMedia) {
    const origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(track => {
            track.stop();
          });
          throw new DOMException('', 'NotFoundError');
        }
        return stream;
      }, e => Promise.reject(shimError_(e))));
    };
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/common_shim.js":
/*!***********************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/common_shim.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeExtmapAllowMixed": () => (/* binding */ removeExtmapAllowMixed),
/* harmony export */   "shimAddIceCandidateNullOrEmpty": () => (/* binding */ shimAddIceCandidateNullOrEmpty),
/* harmony export */   "shimConnectionState": () => (/* binding */ shimConnectionState),
/* harmony export */   "shimMaxMessageSize": () => (/* binding */ shimMaxMessageSize),
/* harmony export */   "shimRTCIceCandidate": () => (/* binding */ shimRTCIceCandidate),
/* harmony export */   "shimSendThrowTypeError": () => (/* binding */ shimSendThrowTypeError)
/* harmony export */ });
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sdp */ "./node_modules/sdp/sdp.js");
/* harmony import */ var sdp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sdp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */





function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
      window.RTCIceCandidate.prototype)) {
    return;
  }

  const NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if (typeof args === 'object' && args.candidate &&
        args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      const nativeCandidate = new NativeRTCIceCandidate(args);
      const parsedCandidate = sdp__WEBPACK_IMPORTED_MODULE_0___default().parseCandidate(args.candidate);
      const augmentedCandidate = Object.assign(nativeCandidate,
          parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment,
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  _utils__WEBPACK_IMPORTED_MODULE_1__.wrapPeerConnectionEvent(window, 'icecandidate', e => {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  const sctpInDescription = function(description) {
    if (!description || !description.sdp) {
      return false;
    }
    const sections = sdp__WEBPACK_IMPORTED_MODULE_0___default().splitSections(description.sdp);
    sections.shift();
    return sections.some(mediaSection => {
      const mLine = sdp__WEBPACK_IMPORTED_MODULE_0___default().parseMLine(mediaSection);
      return mLine && mLine.kind === 'application'
          && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  const getRemoteFirefoxVersion = function(description) {
    // TODO: Is there a better solution for detecting Firefox?
    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    const version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  const getCanSendMaxMessageSize = function(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    let canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize =
          browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  const getMaxMessageSize = function(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    let maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox'
         && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    const match = sdp__WEBPACK_IMPORTED_MODULE_0___default().matchPrefix(description.sdp,
      'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' &&
                remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
    function setRemoteDescription() {
      this._sctp = null;
      // Chrome decided to not expose .sctp in plan-b mode.
      // As usual, adapter.js has to do an 'ugly worakaround'
      // to cover up the mess.
      if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
        const {sdpSemantics} = this.getConfiguration();
        if (sdpSemantics === 'plan-b') {
          Object.defineProperty(this, 'sctp', {
            get() {
              return typeof this._sctp === 'undefined' ? null : this._sctp;
            },
            enumerable: true,
            configurable: true,
          });
        }
      }

      if (sctpInDescription(arguments[0])) {
        // Check if the remote is FF.
        const isFirefox = getRemoteFirefoxVersion(arguments[0]);

        // Get the maximum message size the local peer is capable of sending
        const canSendMMS = getCanSendMaxMessageSize(isFirefox);

        // Get the maximum message size of the remote peer.
        const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

        // Determine final maximum message size
        let maxMessageSize;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }

        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
        // attribute.
        const sctp = {};
        Object.defineProperty(sctp, 'maxMessageSize', {
          get() {
            return maxMessageSize;
          }
        });
        this._sctp = sctp;
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection &&
      'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    const origDataChannelSend = dc.send;
    dc.send = function send() {
      const data = arguments[0];
      const length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' &&
          pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' +
          pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  const origCreateDataChannel =
    window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel =
    function createDataChannel() {
      const dataChannel = origCreateDataChannel.apply(this, arguments);
      wrapDcSend(dataChannel, this);
      return dataChannel;
    };
  _utils__WEBPACK_IMPORTED_MODULE_1__.wrapPeerConnectionEvent(window, 'datachannel', e => {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}


/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection ||
      'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get() {
      return this._onconnectionstatechange || null;
    },
    set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange',
            this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange',
            this._onconnectionstatechange = cb);
      }
    },
    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach((method) => {
    const origMethod = proto[method];
    proto[method] = function() {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = e => {
          const pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            const newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange',
          this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeExtmapAllowMixed(window, browserDetails) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }
  const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription =
  function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      const sdp = desc.sdp.split('\n').filter((line) => {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
      // Safari enforces read-only-ness of RTCSessionDescription fields.
      if (window.RTCSessionDescription &&
          desc instanceof window.RTCSessionDescription) {
        arguments[0] = new window.RTCSessionDescription({
          type: desc.type,
          sdp,
        });
      } else {
        desc.sdp = sdp;
      }
    }
    return nativeSRD.apply(this, arguments);
  };
}

function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
  // Support for addIceCandidate(null or undefined)
  // as well as addIceCandidate({candidate: "", ...})
  // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
  // Note: must be called before other polyfills which change the signature.
  if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
    return;
  }
  const nativeAddIceCandidate =
      window.RTCPeerConnection.prototype.addIceCandidate;
  if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
    return;
  }
  window.RTCPeerConnection.prototype.addIceCandidate =
    function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      // Firefox 68+ emits and processes {candidate: "", ...}, ignore
      // in older versions.
      // Native support for ignoring exists for Chrome M77+.
      // Safari ignores as well, exact version unknown but works in the same
      // version that also ignores addIceCandidate(null).
      if (((browserDetails.browser === 'chrome' && browserDetails.version < 78)
           || (browserDetails.browser === 'firefox'
               && browserDetails.version < 68)
           || (browserDetails.browser === 'safari'))
          && arguments[0] && arguments[0].candidate === '') {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/edge_shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/edge_shim.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimGetDisplayMedia": () => (/* reexport safe */ _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__.shimGetDisplayMedia),
/* harmony export */   "shimGetUserMedia": () => (/* reexport safe */ _getusermedia__WEBPACK_IMPORTED_MODULE_3__.shimGetUserMedia),
/* harmony export */   "shimPeerConnection": () => (/* binding */ shimPeerConnection),
/* harmony export */   "shimReplaceTrack": () => (/* binding */ shimReplaceTrack)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _filtericeservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filtericeservers */ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rtcpeerconnection-shim */ "./node_modules/rtcpeerconnection-shim/rtcpeerconnection.js");
/* harmony import */ var rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js");
/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */









function shimPeerConnection(window, browserDetails) {
  if (window.RTCIceGatherer) {
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function RTCIceCandidate(args) {
        return args;
      };
    }
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function RTCSessionDescription(args) {
        return args;
      };
    }
    // this adds an additional event listener to MediaStrackTrack that signals
    // when a tracks enabled property was changed. Workaround for a bug in
    // addStream, see below. No longer required in 15025+
    if (browserDetails.version < 15025) {
      const origMSTEnabled = Object.getOwnPropertyDescriptor(
          window.MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
        set(value) {
          origMSTEnabled.set.call(this, value);
          const ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }
  }

  // ORTC defines the DTMF sender a bit different.
  // https://github.com/w3c/ortc/issues/714
  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = new window.RTCDtmfSender(this);
          } else if (this.track.kind === 'video') {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
  // Edge currently only implements the RTCDtmfSender, not the
  // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
    window.RTCDTMFSender = window.RTCDtmfSender;
  }

  const RTCPeerConnectionShim = rtcpeerconnection_shim__WEBPACK_IMPORTED_MODULE_2___default()(window,
      browserDetails.version);
  window.RTCPeerConnection = function RTCPeerConnection(config) {
    if (config && config.iceServers) {
      config.iceServers = (0,_filtericeservers__WEBPACK_IMPORTED_MODULE_1__.filterIceServers)(config.iceServers,
        browserDetails.version);
      _utils__WEBPACK_IMPORTED_MODULE_0__.log('ICE servers after filtering:', config.iceServers);
    }
    return new RTCPeerConnectionShim(config);
  };
  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
}

function shimReplaceTrack(window) {
  // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
  if (window.RTCRtpSender &&
      !('replaceTrack' in window.RTCRtpSender.prototype)) {
    window.RTCRtpSender.prototype.replaceTrack =
        window.RTCRtpSender.prototype.setTrack;
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/filtericeservers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterIceServers": () => (/* binding */ filterIceServers)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */



// Edge does not like
// 1) stun: filtered after 14393 unless ?transport=udp is present
// 2) turn: that does not have all of turn:host:port?transport=udp
// 3) turn: with ipv6 addresses
// 4) turn: occurring muliple times
function filterIceServers(iceServers, edgeVersion) {
  let hasTurn = false;
  iceServers = JSON.parse(JSON.stringify(iceServers));
  return iceServers.filter(server => {
    if (server && (server.urls || server.url)) {
      let urls = server.urls || server.url;
      if (server.url && !server.urls) {
        _utils__WEBPACK_IMPORTED_MODULE_0__.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
      }
      const isString = typeof urls === 'string';
      if (isString) {
        urls = [urls];
      }
      urls = urls.filter(url => {
        // filter STUN unconditionally.
        if (url.indexOf('stun:') === 0) {
          return false;
        }

        const validTurn = url.startsWith('turn') &&
            !url.startsWith('turn:[') &&
            url.includes('transport=udp');
        if (validTurn && !hasTurn) {
          hasTurn = true;
          return true;
        }
        return validTurn && !hasTurn;
      });

      delete server.url;
      server.urls = isString ? urls[0] : urls;
      return !!urls.length;
    }
  });
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getdisplaymedia.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimGetDisplayMedia": () => (/* binding */ shimGetDisplayMedia)
/* harmony export */ });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function shimGetDisplayMedia(window) {
  if (!('getDisplayMedia' in window.navigator)) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    window.navigator.getDisplayMedia.bind(window.navigator);
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/edge/getusermedia.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/edge/getusermedia.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimGetUserMedia": () => (/* binding */ shimGetUserMedia)
/* harmony export */ });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  const shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  const origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(e => Promise.reject(shimError_(e)));
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimAddTransceiver": () => (/* binding */ shimAddTransceiver),
/* harmony export */   "shimCreateAnswer": () => (/* binding */ shimCreateAnswer),
/* harmony export */   "shimCreateOffer": () => (/* binding */ shimCreateOffer),
/* harmony export */   "shimGetDisplayMedia": () => (/* reexport safe */ _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__.shimGetDisplayMedia),
/* harmony export */   "shimGetParameters": () => (/* binding */ shimGetParameters),
/* harmony export */   "shimGetUserMedia": () => (/* reexport safe */ _getusermedia__WEBPACK_IMPORTED_MODULE_1__.shimGetUserMedia),
/* harmony export */   "shimOnTrack": () => (/* binding */ shimOnTrack),
/* harmony export */   "shimPeerConnection": () => (/* binding */ shimPeerConnection),
/* harmony export */   "shimRTCDataChannel": () => (/* binding */ shimRTCDataChannel),
/* harmony export */   "shimReceiverGetStats": () => (/* binding */ shimReceiverGetStats),
/* harmony export */   "shimRemoveStream": () => (/* binding */ shimRemoveStream),
/* harmony export */   "shimSenderGetStats": () => (/* binding */ shimSenderGetStats)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/* harmony import */ var _getusermedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getusermedia */ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js");
/* harmony import */ var _getdisplaymedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getdisplaymedia */ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */






function shimOnTrack(window) {
  if (typeof window === 'object' && window.RTCTrackEvent &&
      ('receiver' in window.RTCTrackEvent.prototype) &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimPeerConnection(window, browserDetails) {
  if (typeof window !== 'object' ||
      !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          const nativeMethod = window.RTCPeerConnection.prototype[method];
          const methodObj = {[method]() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                window.RTCIceCandidate :
                window.RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          }};
          window.RTCPeerConnection.prototype[method] = methodObj[method];
        });
  }

  const modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    const [selector, onSucc, onErr] = arguments;
    return nativeGetStats.apply(this, [selector || null])
      .then(stats => {
        if (browserDetails.version < 53 && !onSucc) {
          // Shim only promise getStats with spec-hyphens in type names
          // Leave callback version alone; misc old uses of forEach before Map
          try {
            stats.forEach(stat => {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== 'TypeError') {
              throw e;
            }
            // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
            stats.forEach((stat, i) => {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      })
      .then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      const senders = origGetSenders.apply(this, []);
      senders.forEach(sender => sender._pc = this);
      return senders;
    };
  }

  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      const sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) :
        Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!(typeof window === 'object' && window.RTCPeerConnection &&
      window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      const receivers = origGetReceivers.apply(this, []);
      receivers.forEach(receiver => receiver._pc = this);
      return receivers;
    };
  }
  _utils__WEBPACK_IMPORTED_MODULE_0__.wrapPeerConnectionEvent(window, 'track', e => {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection ||
      'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream =
    function removeStream(stream) {
      _utils__WEBPACK_IMPORTED_MODULE_0__.deprecated('removeStream', 'removeTrack');
      this.getSenders().forEach(sender => {
        if (sender.track && stream.getTracks().includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver =
      function addTransceiver() {
        this.setParametersPromises = [];
        const initParameters = arguments[1];
        const shouldPerformCheck = initParameters &&
                                  'sendEncodings' in initParameters;
        if (shouldPerformCheck) {
          // If sendEncodings params are provided, validate grammar
          initParameters.sendEncodings.forEach((encodingParam) => {
            if ('rid' in encodingParam) {
              const ridRegex = /^[a-z0-9]{0,16}$/i;
              if (!ridRegex.test(encodingParam.rid)) {
                throw new TypeError('Invalid RID value provided.');
              }
            }
            if ('scaleResolutionDownBy' in encodingParam) {
              if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
                throw new RangeError('scale_resolution_down_by must be >= 1.0');
              }
            }
            if ('maxFramerate' in encodingParam) {
              if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
                throw new RangeError('max_framerate must be >= 0.0');
              }
            }
          });
        }
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
          // Check if the init options were applied. If not we do this in an
          // asynchronous way and save the promise reference in a global object.
          // This is an ugly hack, but at the same time is way more robust than
          // checking the sender parameters before and after the createOffer
          // Also note that after the createoffer we are not 100% sure that
          // the params were asynchronously applied so we might miss the
          // opportunity to recreate offer.
          const {sender} = transceiver;
          const params = sender.getParameters();
          if (!('encodings' in params) ||
              // Avoid being fooled by patched getParameters() below.
              (params.encodings.length === 1 &&
               Object.keys(params.encodings[0]).length === 0)) {
            params.encodings = initParameters.sendEncodings;
            sender.sendEncodings = initParameters.sendEncodings;
            this.setParametersPromises.push(sender.setParameters(params)
              .then(() => {
                delete sender.sendEncodings;
              }).catch(() => {
                delete sender.sendEncodings;
              })
            );
          }
        }
        return transceiver;
      };
  }
}

function shimGetParameters(window) {
  if (!(typeof window === 'object' && window.RTCRtpSender)) {
    return;
  }
  const origGetParameters = window.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters =
      function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!('encodings' in params)) {
          params.encodings = [].concat(this.sendEncodings || [{}]);
        }
        return params;
      };
  }
}

function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises)
      .then(() => {
        return origCreateOffer.apply(this, arguments);
      })
      .finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
    return;
  }
  const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises)
      .then(() => {
        return origCreateAnswer.apply(this, arguments);
      })
      .finally(() => {
        this.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimGetDisplayMedia": () => (/* binding */ shimGetDisplayMedia)
/* harmony export */ });
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */


function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices &&
    'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!(window.navigator.mediaDevices)) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia =
    function getDisplayMedia(constraints) {
      if (!(constraints && constraints.video)) {
        const err = new DOMException('getDisplayMedia without video ' +
            'constraints is undefined');
        err.name = 'NotFoundError';
        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = {mediaSource: preferredMediaSource};
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    };
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js":
/*!********************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/firefox/getusermedia.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimGetUserMedia": () => (/* binding */ shimGetUserMedia)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */




function shimGetUserMedia(window, browserDetails) {
  const navigator = window && window.navigator;
  const MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    _utils__WEBPACK_IMPORTED_MODULE_0__.deprecated('navigator.getUserMedia',
        'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 &&
      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    const remap = function(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      if (typeof c === 'object' && typeof c.audio === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function() {
        const obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      const nativeApplyConstraints =
        MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function(c) {
        if (this.kind === 'audio' && typeof c === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/safari/safari_shim.js":
/*!******************************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/safari/safari_shim.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shimAudioContext": () => (/* binding */ shimAudioContext),
/* harmony export */   "shimCallbacksAPI": () => (/* binding */ shimCallbacksAPI),
/* harmony export */   "shimConstraints": () => (/* binding */ shimConstraints),
/* harmony export */   "shimCreateOfferLegacy": () => (/* binding */ shimCreateOfferLegacy),
/* harmony export */   "shimGetUserMedia": () => (/* binding */ shimGetUserMedia),
/* harmony export */   "shimLocalStreamsAPI": () => (/* binding */ shimLocalStreamsAPI),
/* harmony export */   "shimRTCIceServerUrls": () => (/* binding */ shimRTCIceServerUrls),
/* harmony export */   "shimRemoteStreamsAPI": () => (/* binding */ shimRemoteStreamsAPI),
/* harmony export */   "shimTrackEventTransceiver": () => (/* binding */ shimTrackEventTransceiver)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/webrtc-adapter/src/js/utils.js");
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */



function shimLocalStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams =
      function getLocalStreams() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    const _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.
      stream.getAudioTracks().forEach(track => _addTrack.call(this, track,
        stream));
      stream.getVideoTracks().forEach(track => _addTrack.call(this, track,
        stream));
    };

    window.RTCPeerConnection.prototype.addTrack =
      function addTrack(track, ...streams) {
        if (streams) {
          streams.forEach((stream) => {
            if (!this._localStreams) {
              this._localStreams = [stream];
            } else if (!this._localStreams.includes(stream)) {
              this._localStreams.push(stream);
            }
          });
        }
        return _addTrack.apply(this, arguments);
      };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream =
      function removeStream(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        const index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach(sender => {
          if (tracks.includes(sender.track)) {
            this.removeTrack(sender);
          }
        });
      };
  }
}

function shimRemoteStreamsAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams =
      function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get() {
        return this._onaddstream;
      },
      set(f) {
        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = (e) => {
          e.streams.forEach(stream => {
            if (!this._remoteStreams) {
              this._remoteStreams = [];
            }
            if (this._remoteStreams.includes(stream)) {
              return;
            }
            this._remoteStreams.push(stream);
            const event = new Event('addstream');
            event.stream = stream;
            this.dispatchEvent(event);
          });
        });
      }
    });
    const origSetRemoteDescription =
      window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription =
      function setRemoteDescription() {
        const pc = this;
        if (!this._onaddstreampoly) {
          this.addEventListener('track', this._onaddstreampoly = function(e) {
            e.streams.forEach(stream => {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              const event = new Event('addstream');
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
  }
}

function shimCallbacksAPI(window) {
  if (typeof window !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  const prototype = window.RTCPeerConnection.prototype;
  const origCreateOffer = prototype.createOffer;
  const origCreateAnswer = prototype.createAnswer;
  const setLocalDescription = prototype.setLocalDescription;
  const setRemoteDescription = prototype.setRemoteDescription;
  const addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer =
    function createOffer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  prototype.createAnswer =
    function createAnswer(successCallback, failureCallback) {
      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
      const promise = origCreateAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

  let withCallback = function(description, successCallback, failureCallback) {
    const promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function(description, successCallback, failureCallback) {
    const promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function(candidate, successCallback, failureCallback) {
    const promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  const navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    const mediaDevices = navigator.mediaDevices;
    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = (constraints) => {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints)
      .then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({},
      constraints,
      {video: _utils__WEBPACK_IMPORTED_MODULE_0__.compactObject(constraints.video)}
    );
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  const OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection =
    function RTCPeerConnection(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        const newIceServers = [];
        for (let i = 0; i < pcConfig.iceServers.length; i++) {
          let server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') &&
              server.hasOwnProperty('url')) {
            _utils__WEBPACK_IMPORTED_MODULE_0__.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if (typeof window === 'object' && window.RTCTrackEvent &&
      'receiver' in window.RTCTrackEvent.prototype &&
      !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get() {
        return {receiver: this.receiver};
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer =
    function createOffer(offerOptions) {
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveAudio =
            !!offerOptions.offerToReceiveAudio;
        }
        const audioTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'audio');
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === 'sendrecv') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('sendonly');
            } else {
              audioTransceiver.direction = 'sendonly';
            }
          } else if (audioTransceiver.direction === 'recvonly') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('inactive');
            } else {
              audioTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true &&
            !audioTransceiver) {
          this.addTransceiver('audio');
        }

        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveVideo =
            !!offerOptions.offerToReceiveVideo;
        }
        const videoTransceiver = this.getTransceivers().find(transceiver =>
          transceiver.receiver.track.kind === 'video');
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === 'sendrecv') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('sendonly');
            } else {
              videoTransceiver.direction = 'sendonly';
            }
          } else if (videoTransceiver.direction === 'recvonly') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('inactive');
            } else {
              videoTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveVideo === true &&
            !videoTransceiver) {
          this.addTransceiver('video');
        }
      }
      return origCreateOffer.apply(this, arguments);
    };
}

function shimAudioContext(window) {
  if (typeof window !== 'object' || window.AudioContext) {
    return;
  }
  window.AudioContext = window.webkitAudioContext;
}


/***/ }),

/***/ "./node_modules/webrtc-adapter/src/js/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/webrtc-adapter/src/js/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compactObject": () => (/* binding */ compactObject),
/* harmony export */   "deprecated": () => (/* binding */ deprecated),
/* harmony export */   "detectBrowser": () => (/* binding */ detectBrowser),
/* harmony export */   "disableLog": () => (/* binding */ disableLog),
/* harmony export */   "disableWarnings": () => (/* binding */ disableWarnings),
/* harmony export */   "extractVersion": () => (/* binding */ extractVersion),
/* harmony export */   "filterStats": () => (/* binding */ filterStats),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "walkStats": () => (/* binding */ walkStats),
/* harmony export */   "wrapPeerConnectionEvent": () => (/* binding */ wrapPeerConnectionEvent)
/* harmony export */ });
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */


let logDisabled_ = true;
let deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  const match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  const proto = window.RTCPeerConnection.prototype;
  const nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    const wrappedCallback = (e) => {
      const modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [nativeEventName,
      wrappedCallback]);
  };

  const nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function(nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap
        || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [nativeEventName,
      unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get() {
      return this['_on' + eventNameToWrap];
    },
    set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap,
            this['_on' + eventNameToWrap] = cb);
      }
    },
    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return (bool) ? 'adapter.js logging disabled' :
      'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + typeof bool +
        '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if (typeof window === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
      ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  // Returned result object.
  const result = {browser: null, version: null};

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  const {navigator} = window;

  if (navigator.mozGetUserMedia) { // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent,
        /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia ||
      (window.isSecureContext === false && window.webkitRTCPeerConnection &&
       !window.RTCIceGatherer)) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent,
        /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (navigator.mediaDevices &&
      navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) { // Edge.
    result.browser = 'edge';
    result.version = extractVersion(navigator.userAgent,
        /Edge\/(\d+).(\d+)$/, 2);
  } else if (window.RTCPeerConnection &&
      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) { // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent,
        /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver &&
        'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else { // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */
function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function(accumulator, key) {
    const isObj = isObject(data[key]);
    const value = isObj ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObj && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, {[key]: value});
  }, {});
}

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(name => {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(id => {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  const filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  const trackStats = [];
  result.forEach(value => {
    if (value.type === 'track' &&
        value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(trackStat => {
    result.forEach(stats => {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}



/***/ }),

/***/ "./node_modules/peerjs/dist/bundler.mjs":
/*!**********************************************!*\
  !*** ./node_modules/peerjs/dist/bundler.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Peer": () => (/* binding */ $26088d7da5b03f69$export$ecd1fc136c422448),
/* harmony export */   "default": () => (/* binding */ $70d766613f57b014$export$2e2bcd8739ae039),
/* harmony export */   "util": () => (/* binding */ $06cb531ed7840f78$export$7debb50ef11d5e0b)
/* harmony export */ });
/* harmony import */ var peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! peerjs-js-binarypack */ "./node_modules/peerjs-js-binarypack/lib/binarypack.js");
/* harmony import */ var webrtc_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webrtc-adapter */ "./node_modules/webrtc-adapter/src/js/adapter_core.js");



function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


var $af8cf1f663f490f4$var$webRTCAdapter = //@ts-ignore
webrtc_adapter__WEBPACK_IMPORTED_MODULE_1__["default"]["default"] || webrtc_adapter__WEBPACK_IMPORTED_MODULE_1__["default"];
var $af8cf1f663f490f4$export$25be9502477c137d = new /** @class */ (function() {
    function class_1() {
        this.isIOS = [
            "iPad",
            "iPhone",
            "iPod"
        ].includes(navigator.platform);
        this.supportedBrowsers = [
            "firefox",
            "chrome",
            "safari"
        ];
        this.minFirefoxVersion = 59;
        this.minChromeVersion = 72;
        this.minSafariVersion = 605;
    }
    class_1.prototype.isWebRTCSupported = function() {
        return typeof RTCPeerConnection !== "undefined";
    };
    class_1.prototype.isBrowserSupported = function() {
        var browser = this.getBrowser();
        var version = this.getVersion();
        var validBrowser = this.supportedBrowsers.includes(browser);
        if (!validBrowser) return false;
        if (browser === "chrome") return version >= this.minChromeVersion;
        if (browser === "firefox") return version >= this.minFirefoxVersion;
        if (browser === "safari") return !this.isIOS && version >= this.minSafariVersion;
        return false;
    };
    class_1.prototype.getBrowser = function() {
        return $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.browser;
    };
    class_1.prototype.getVersion = function() {
        return $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.version || 0;
    };
    class_1.prototype.isUnifiedPlanSupported = function() {
        var browser = this.getBrowser();
        var version = $af8cf1f663f490f4$var$webRTCAdapter.browserDetails.version || 0;
        if (browser === "chrome" && version < this.minChromeVersion) return false;
        if (browser === "firefox" && version >= this.minFirefoxVersion) return true;
        if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
        var tempPc;
        var supported = false;
        try {
            tempPc = new RTCPeerConnection();
            tempPc.addTransceiver("audio");
            supported = true;
        } catch (e) {} finally{
            if (tempPc) tempPc.close();
        }
        return supported;
    };
    class_1.prototype.toString = function() {
        return "Supports:\n    browser:".concat(this.getBrowser(), "\n    version:").concat(this.getVersion(), "\n    isIOS:").concat(this.isIOS, "\n    isWebRTCSupported:").concat(this.isWebRTCSupported(), "\n    isBrowserSupported:").concat(this.isBrowserSupported(), "\n    isUnifiedPlanSupported:").concat(this.isUnifiedPlanSupported());
    };
    return class_1;
}())();


var $06cb531ed7840f78$var$DEFAULT_CONFIG = {
    iceServers: [
        {
            urls: "stun:stun.l.google.com:19302"
        },
        {
            urls: [
                "turn:eu-0.turn.peerjs.com:3478",
                "turn:us-0.turn.peerjs.com:3478", 
            ],
            username: "peerjs",
            credential: "peerjsp"
        }, 
    ],
    sdpSemantics: "unified-plan"
};
var $06cb531ed7840f78$var$Util = /** @class */ function() {
    function Util() {
        this.CLOUD_HOST = "0.peerjs.com";
        this.CLOUD_PORT = 443;
        // Browsers that need chunking:
        this.chunkedBrowsers = {
            Chrome: 1,
            chrome: 1
        };
        this.chunkedMTU = 16300; // The original 60000 bytes setting does not work when sending data from Firefox to Chrome, which is "cut off" after 16384 bytes and delivered individually.
        // Returns browser-agnostic default config
        this.defaultConfig = $06cb531ed7840f78$var$DEFAULT_CONFIG;
        this.browser = $af8cf1f663f490f4$export$25be9502477c137d.getBrowser();
        this.browserVersion = $af8cf1f663f490f4$export$25be9502477c137d.getVersion();
        // Lists which features are supported
        this.supports = function() {
            var supported = {
                browser: $af8cf1f663f490f4$export$25be9502477c137d.isBrowserSupported(),
                webRTC: $af8cf1f663f490f4$export$25be9502477c137d.isWebRTCSupported(),
                audioVideo: false,
                data: false,
                binaryBlob: false,
                reliable: false
            };
            if (!supported.webRTC) return supported;
            var pc;
            try {
                pc = new RTCPeerConnection($06cb531ed7840f78$var$DEFAULT_CONFIG);
                supported.audioVideo = true;
                var dc = void 0;
                try {
                    dc = pc.createDataChannel("_PEERJSTEST", {
                        ordered: true
                    });
                    supported.data = true;
                    supported.reliable = !!dc.ordered;
                    // Binary test
                    try {
                        dc.binaryType = "blob";
                        supported.binaryBlob = !$af8cf1f663f490f4$export$25be9502477c137d.isIOS;
                    } catch (e) {}
                } catch (e) {} finally{
                    if (dc) dc.close();
                }
            } catch (e) {} finally{
                if (pc) pc.close();
            }
            return supported;
        }();
        this.pack = peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0__.pack;
        this.unpack = peerjs_js_binarypack__WEBPACK_IMPORTED_MODULE_0__.unpack;
        // Binary stuff
        this._dataCount = 1;
    }
    Util.prototype.noop = function() {};
    // Ensure alphanumeric ids
    Util.prototype.validateId = function(id) {
        // Allow empty ids
        return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(id);
    };
    Util.prototype.chunk = function(blob) {
        var chunks = [];
        var size = blob.size;
        var total = Math.ceil(size / $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU);
        var index = 0;
        var start = 0;
        while(start < size){
            var end = Math.min(size, start + $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU);
            var b = blob.slice(start, end);
            var chunk = {
                __peerData: this._dataCount,
                n: index,
                data: b,
                total: total
            };
            chunks.push(chunk);
            start = end;
            index++;
        }
        this._dataCount++;
        return chunks;
    };
    Util.prototype.blobToArrayBuffer = function(blob, cb) {
        var fr = new FileReader();
        fr.onload = function(evt) {
            if (evt.target) cb(evt.target.result);
        };
        fr.readAsArrayBuffer(blob);
        return fr;
    };
    Util.prototype.binaryStringToArrayBuffer = function(binary) {
        var byteArray = new Uint8Array(binary.length);
        for(var i = 0; i < binary.length; i++)byteArray[i] = binary.charCodeAt(i) & 0xff;
        return byteArray.buffer;
    };
    Util.prototype.randomToken = function() {
        return Math.random().toString(36).slice(2);
    };
    Util.prototype.isSecure = function() {
        return location.protocol === "https:";
    };
    return Util;
}();
var $06cb531ed7840f78$export$7debb50ef11d5e0b = new $06cb531ed7840f78$var$Util();


var $26088d7da5b03f69$exports = {};

$parcel$export($26088d7da5b03f69$exports, "Peer", () => $26088d7da5b03f69$export$ecd1fc136c422448, (v) => $26088d7da5b03f69$export$ecd1fc136c422448 = v);
var $ac9b757d51178e15$exports = {};
'use strict';
var $ac9b757d51178e15$var$has = Object.prototype.hasOwnProperty, $ac9b757d51178e15$var$prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function $ac9b757d51178e15$var$Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    $ac9b757d51178e15$var$Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new $ac9b757d51178e15$var$Events().__proto__) $ac9b757d51178e15$var$prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function $ac9b757d51178e15$var$EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function $ac9b757d51178e15$var$addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new $ac9b757d51178e15$var$EE(fn, context || emitter, once), evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function $ac9b757d51178e15$var$clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new $ac9b757d51178e15$var$Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function $ac9b757d51178e15$var$EventEmitter() {
    this._events = new $ac9b757d51178e15$var$Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if ($ac9b757d51178e15$var$has.call(events, name)) names.push($ac9b757d51178e15$var$prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.listeners = function listeners(event) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.on = function on(event, fn, context) {
    return $ac9b757d51178e15$var$addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.once = function once(event, fn, context) {
    return $ac9b757d51178e15$var$addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        $ac9b757d51178e15$var$clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) $ac9b757d51178e15$var$clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else $ac9b757d51178e15$var$clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ $ac9b757d51178e15$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = $ac9b757d51178e15$var$prefix ? $ac9b757d51178e15$var$prefix + event : event;
        if (this._events[evt]) $ac9b757d51178e15$var$clearEvent(this, evt);
    } else {
        this._events = new $ac9b757d51178e15$var$Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
$ac9b757d51178e15$var$EventEmitter.prototype.off = $ac9b757d51178e15$var$EventEmitter.prototype.removeListener;
$ac9b757d51178e15$var$EventEmitter.prototype.addListener = $ac9b757d51178e15$var$EventEmitter.prototype.on;
//
// Expose the prefix.
//
$ac9b757d51178e15$var$EventEmitter.prefixed = $ac9b757d51178e15$var$prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
$ac9b757d51178e15$var$EventEmitter.EventEmitter = $ac9b757d51178e15$var$EventEmitter;
$ac9b757d51178e15$exports = $ac9b757d51178e15$var$EventEmitter;



var $1615705ecc6adca3$exports = {};

$parcel$export($1615705ecc6adca3$exports, "LogLevel", () => $1615705ecc6adca3$export$243e62d78d3b544d, (v) => $1615705ecc6adca3$export$243e62d78d3b544d = v);
$parcel$export($1615705ecc6adca3$exports, "default", () => $1615705ecc6adca3$export$2e2bcd8739ae039, (v) => $1615705ecc6adca3$export$2e2bcd8739ae039 = v);
var $1615705ecc6adca3$var$__read =  false || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var $1615705ecc6adca3$var$__spreadArray =  false || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $1615705ecc6adca3$var$LOG_PREFIX = "PeerJS: ";
var $1615705ecc6adca3$export$243e62d78d3b544d;
(function($1615705ecc6adca3$export$243e62d78d3b544d) {
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["Disabled"] = 0] = "Disabled";
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["Errors"] = 1] = "Errors";
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["Warnings"] = 2] = "Warnings";
    $1615705ecc6adca3$export$243e62d78d3b544d[$1615705ecc6adca3$export$243e62d78d3b544d["All"] = 3] = "All";
})($1615705ecc6adca3$export$243e62d78d3b544d || ($1615705ecc6adca3$export$243e62d78d3b544d = {}));
var $1615705ecc6adca3$var$Logger = /** @class */ function() {
    function Logger() {
        this._logLevel = $1615705ecc6adca3$export$243e62d78d3b544d.Disabled;
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function() {
            return this._logLevel;
        },
        set: function(logLevel) {
            this._logLevel = logLevel;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.log = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.All) this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$export$243e62d78d3b544d.All
        ], $1615705ecc6adca3$var$__read(args), false));
    };
    Logger.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Warnings) this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$export$243e62d78d3b544d.Warnings
        ], $1615705ecc6adca3$var$__read(args), false));
    };
    Logger.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        if (this._logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Errors) this._print.apply(this, $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$export$243e62d78d3b544d.Errors
        ], $1615705ecc6adca3$var$__read(args), false));
    };
    Logger.prototype.setLogFunction = function(fn) {
        this._print = fn;
    };
    Logger.prototype._print = function(logLevel) {
        var rest = [];
        for(var _i = 1; _i < arguments.length; _i++)rest[_i - 1] = arguments[_i];
        var copy = $1615705ecc6adca3$var$__spreadArray([
            $1615705ecc6adca3$var$LOG_PREFIX
        ], $1615705ecc6adca3$var$__read(rest), false);
        for(var i in copy)if (copy[i] instanceof Error) copy[i] = "(" + copy[i].name + ") " + copy[i].message;
        if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.All) console.log.apply(console, $1615705ecc6adca3$var$__spreadArray([], $1615705ecc6adca3$var$__read(copy), false));
        else if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Warnings) console.warn.apply(console, $1615705ecc6adca3$var$__spreadArray([
            "WARNING"
        ], $1615705ecc6adca3$var$__read(copy), false));
        else if (logLevel >= $1615705ecc6adca3$export$243e62d78d3b544d.Errors) console.error.apply(console, $1615705ecc6adca3$var$__spreadArray([
            "ERROR"
        ], $1615705ecc6adca3$var$__read(copy), false));
    };
    return Logger;
}();
var $1615705ecc6adca3$export$2e2bcd8739ae039 = new $1615705ecc6adca3$var$Logger();


var $31d11a8d122cb4b7$exports = {};

$parcel$export($31d11a8d122cb4b7$exports, "Socket", () => $31d11a8d122cb4b7$export$4798917dbf149b79, (v) => $31d11a8d122cb4b7$export$4798917dbf149b79 = v);


var $60fadef21a2daafc$export$3157d57b4135e3bc;
(function($60fadef21a2daafc$export$3157d57b4135e3bc) {
    $60fadef21a2daafc$export$3157d57b4135e3bc["Data"] = "data";
    $60fadef21a2daafc$export$3157d57b4135e3bc["Media"] = "media";
})($60fadef21a2daafc$export$3157d57b4135e3bc || ($60fadef21a2daafc$export$3157d57b4135e3bc = {}));
var $60fadef21a2daafc$export$9547aaa2e39030ff;
(function($60fadef21a2daafc$export$9547aaa2e39030ff) {
    $60fadef21a2daafc$export$9547aaa2e39030ff["BrowserIncompatible"] = "browser-incompatible";
    $60fadef21a2daafc$export$9547aaa2e39030ff["Disconnected"] = "disconnected";
    $60fadef21a2daafc$export$9547aaa2e39030ff["InvalidID"] = "invalid-id";
    $60fadef21a2daafc$export$9547aaa2e39030ff["InvalidKey"] = "invalid-key";
    $60fadef21a2daafc$export$9547aaa2e39030ff["Network"] = "network";
    $60fadef21a2daafc$export$9547aaa2e39030ff["PeerUnavailable"] = "peer-unavailable";
    $60fadef21a2daafc$export$9547aaa2e39030ff["SslUnavailable"] = "ssl-unavailable";
    $60fadef21a2daafc$export$9547aaa2e39030ff["ServerError"] = "server-error";
    $60fadef21a2daafc$export$9547aaa2e39030ff["SocketError"] = "socket-error";
    $60fadef21a2daafc$export$9547aaa2e39030ff["SocketClosed"] = "socket-closed";
    $60fadef21a2daafc$export$9547aaa2e39030ff["UnavailableID"] = "unavailable-id";
    $60fadef21a2daafc$export$9547aaa2e39030ff["WebRTC"] = "webrtc";
})($60fadef21a2daafc$export$9547aaa2e39030ff || ($60fadef21a2daafc$export$9547aaa2e39030ff = {}));
var $60fadef21a2daafc$export$89f507cf986a947;
(function($60fadef21a2daafc$export$89f507cf986a947) {
    $60fadef21a2daafc$export$89f507cf986a947["Binary"] = "binary";
    $60fadef21a2daafc$export$89f507cf986a947["BinaryUTF8"] = "binary-utf8";
    $60fadef21a2daafc$export$89f507cf986a947["JSON"] = "json";
})($60fadef21a2daafc$export$89f507cf986a947 || ($60fadef21a2daafc$export$89f507cf986a947 = {}));
var $60fadef21a2daafc$export$3b5c4a4b6354f023;
(function($60fadef21a2daafc$export$3b5c4a4b6354f023) {
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Message"] = "message";
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Disconnected"] = "disconnected";
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Error"] = "error";
    $60fadef21a2daafc$export$3b5c4a4b6354f023["Close"] = "close";
})($60fadef21a2daafc$export$3b5c4a4b6354f023 || ($60fadef21a2daafc$export$3b5c4a4b6354f023 = {}));
var $60fadef21a2daafc$export$adb4a1754da6f10d;
(function($60fadef21a2daafc$export$adb4a1754da6f10d) {
    $60fadef21a2daafc$export$adb4a1754da6f10d["Heartbeat"] = "HEARTBEAT";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Candidate"] = "CANDIDATE";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Offer"] = "OFFER";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Answer"] = "ANSWER";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Open"] = "OPEN";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Error"] = "ERROR";
    $60fadef21a2daafc$export$adb4a1754da6f10d["IdTaken"] = "ID-TAKEN";
    $60fadef21a2daafc$export$adb4a1754da6f10d["InvalidKey"] = "INVALID-KEY";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Leave"] = "LEAVE";
    $60fadef21a2daafc$export$adb4a1754da6f10d["Expire"] = "EXPIRE";
})($60fadef21a2daafc$export$adb4a1754da6f10d || ($60fadef21a2daafc$export$adb4a1754da6f10d = {}));


var $0d1ed891c5cb27c0$exports = {};
$0d1ed891c5cb27c0$exports = JSON.parse("{\"name\":\"peerjs\",\"version\":\"1.4.7\",\"keywords\":[\"peerjs\",\"webrtc\",\"p2p\",\"rtc\"],\"description\":\"PeerJS client\",\"homepage\":\"https://peerjs.com\",\"bugs\":{\"url\":\"https://github.com/peers/peerjs/issues\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/peers/peerjs\"},\"license\":\"MIT\",\"contributors\":[\"Michelle Bu <michelle@michellebu.com>\",\"afrokick <devbyru@gmail.com>\",\"ericz <really.ez@gmail.com>\",\"Jairo <kidandcat@gmail.com>\",\"Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>\",\"Jairo Caro-Accino Viciana <jairo@galax.be>\",\"Carlos Caballero <carlos.caballero.gonzalez@gmail.com>\",\"hc <hheennrryy@gmail.com>\",\"Muhammad Asif <capripio@gmail.com>\",\"PrashoonB <prashoonbhattacharjee@gmail.com>\",\"Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>\",\"akotynski <aleksanderkotbury@gmail.com>\",\"lmb <i@lmb.io>\",\"Jairooo <jairocaro@msn.com>\",\"Moritz Stückler <moritz.stueckler@gmail.com>\",\"Simon <crydotsnakegithub@gmail.com>\",\"Denis Lukov <denismassters@gmail.com>\",\"Philipp Hancke <fippo@andyet.net>\",\"Hans Oksendahl <hansoksendahl@gmail.com>\",\"Jess <jessachandler@gmail.com>\",\"khankuan <khankuan@gmail.com>\",\"DUODVK <kurmanov.work@gmail.com>\",\"XiZhao <kwang1imsa@gmail.com>\",\"Matthias Lohr <matthias@lohr.me>\",\"=frank tree <=frnktrb@googlemail.com>\",\"Andre Eckardt <aeckardt@outlook.com>\",\"Chris Cowan <agentme49@gmail.com>\",\"Alex Chuev <alex@chuev.com>\",\"alxnull <alxnull@e.mail.de>\",\"Yemel Jardi <angel.jardi@gmail.com>\",\"Ben Parnell <benjaminparnell.94@gmail.com>\",\"Benny Lichtner <bennlich@gmail.com>\",\"fresheneesz <bitetrudpublic@gmail.com>\",\"bob.barstead@exaptive.com <bob.barstead@exaptive.com>\",\"chandika <chandika@gmail.com>\",\"emersion <contact@emersion.fr>\",\"Christopher Van <cvan@users.noreply.github.com>\",\"eddieherm <edhermoso@gmail.com>\",\"Eduardo Pinho <enet4mikeenet@gmail.com>\",\"Evandro Zanatta <ezanatta@tray.net.br>\",\"Gardner Bickford <gardner@users.noreply.github.com>\",\"Gian Luca <gianluca.cecchi@cynny.com>\",\"PatrickJS <github@gdi2290.com>\",\"jonnyf <github@jonathanfoss.co.uk>\",\"Hizkia Felix <hizkifw@gmail.com>\",\"Hristo Oskov <hristo.oskov@gmail.com>\",\"Isaac Madwed <i.madwed@gmail.com>\",\"Ilya Konanykhin <ilya.konanykhin@gmail.com>\",\"jasonbarry <jasbarry@me.com>\",\"Jonathan Burke <jonathan.burke.1311@googlemail.com>\",\"Josh Hamit <josh.hamit@gmail.com>\",\"Jordan Austin <jrax86@gmail.com>\",\"Joel Wetzell <jwetzell@yahoo.com>\",\"xizhao <kevin.wang@cloudera.com>\",\"Alberto Torres <kungfoobar@gmail.com>\",\"Jonathan Mayol <mayoljonathan@gmail.com>\",\"Jefferson Felix <me@jsfelix.dev>\",\"Rolf Erik Lekang <me@rolflekang.com>\",\"Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>\",\"Pepijn de Vos <pepijndevos@gmail.com>\",\"JooYoung <qkdlql@naver.com>\",\"Tobias Speicher <rootcommander@gmail.com>\",\"Steve Blaurock <sblaurock@gmail.com>\",\"Kyrylo Shegeda <shegeda@ualberta.ca>\",\"Diwank Singh Tomer <singh@diwank.name>\",\"Sören Balko <Soeren.Balko@gmail.com>\",\"Arpit Solanki <solankiarpit1997@gmail.com>\",\"Yuki Ito <yuki@gnnk.net>\",\"Artur Zayats <zag2art@gmail.com>\"],\"funding\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/peer\"},\"collective\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/peer\"},\"files\":[\"dist/*\"],\"sideEffects\":[\"lib/global.ts\",\"lib/supports.ts\"],\"main\":\"dist/bundler.cjs\",\"module\":\"dist/bundler.mjs\",\"browser-minified\":\"dist/peerjs.min.js\",\"browser-unminified\":\"dist/peerjs.js\",\"types\":\"dist/types.d.ts\",\"engines\":{\"node\":\">= 10\"},\"targets\":{\"types\":{\"source\":\"lib/exports.ts\"},\"main\":{\"source\":\"lib/exports.ts\",\"sourceMap\":{\"inlineSources\":true}},\"module\":{\"source\":\"lib/exports.ts\",\"includeNodeModules\":[\"eventemitter3\"],\"sourceMap\":{\"inlineSources\":true}},\"browser-minified\":{\"context\":\"browser\",\"outputFormat\":\"global\",\"optimize\":true,\"engines\":{\"browsers\":\"cover 99%, not dead\"},\"source\":\"lib/global.ts\"},\"browser-unminified\":{\"context\":\"browser\",\"outputFormat\":\"global\",\"optimize\":false,\"engines\":{\"browsers\":\"cover 99%, not dead\"},\"source\":\"lib/global.ts\"}},\"scripts\":{\"contributors\":\"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\\"chore(contributors): update and sort contributors list\\\"\",\"check\":\"tsc --noEmit\",\"watch\":\"parcel watch\",\"build\":\"rm -rf dist && parcel build\",\"prepublishOnly\":\"npm run build\",\"test\":\"mocha -r ts-node/register -r jsdom-global/register test/**/*.ts\",\"format\":\"prettier --write .\",\"semantic-release\":\"semantic-release\"},\"devDependencies\":{\"@parcel/config-default\":\"^2.5.0\",\"@parcel/packager-ts\":\"^2.5.0\",\"@parcel/transformer-typescript-tsc\":\"^2.5.0\",\"@parcel/transformer-typescript-types\":\"^2.5.0\",\"@semantic-release/changelog\":\"^6.0.1\",\"@semantic-release/git\":\"^10.0.1\",\"@types/chai\":\"^4.3.0\",\"@types/mocha\":\"^9.1.0\",\"@types/node\":\"^17.0.18\",\"chai\":\"^4.3.6\",\"git-authors-cli\":\"^1.0.40\",\"jsdom\":\"^19.0.0\",\"jsdom-global\":\"^3.0.2\",\"mocha\":\"^9.2.0\",\"mock-socket\":\"8.0.5\",\"parcel\":\"^2.5.0\",\"parcel-transformer-tsc-sourcemaps\":\"^1.0.2\",\"prettier\":\"^2.6.2\",\"semantic-release\":\"^19.0.2\",\"standard\":\"^16.0.4\",\"ts-node\":\"^10.5.0\",\"typescript\":\"^4.5.5\"},\"dependencies\":{\"@swc/helpers\":\"^0.3.13\",\"eventemitter3\":\"^4.0.7\",\"peerjs-js-binarypack\":\"1.0.1\",\"webrtc-adapter\":\"^7.7.1\"}}");


var $31d11a8d122cb4b7$var$__extends =  false || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $31d11a8d122cb4b7$var$__read =  false || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var $31d11a8d122cb4b7$var$__spreadArray =  false || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $31d11a8d122cb4b7$var$__values =  false || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * An abstraction on top of WebSockets to provide fastest
 * possible connection for peers.
 */ var $31d11a8d122cb4b7$export$4798917dbf149b79 = /** @class */ function(_super) {
    $31d11a8d122cb4b7$var$__extends($31d11a8d122cb4b7$export$4798917dbf149b79, _super);
    function $31d11a8d122cb4b7$export$4798917dbf149b79(secure, host, port, path, key, pingInterval) {
        if (pingInterval === void 0) pingInterval = 5000;
        var _this = _super.call(this) || this;
        _this.pingInterval = pingInterval;
        _this._disconnected = true;
        _this._messagesQueue = [];
        var wsProtocol = secure ? "wss://" : "ws://";
        _this._baseUrl = wsProtocol + host + ":" + port + path + "peerjs?key=" + key;
        return _this;
    }
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype.start = function(id, token) {
        var _this = this;
        this._id = id;
        var wsUrl = "".concat(this._baseUrl, "&id=").concat(id, "&token=").concat(token);
        if (!!this._socket || !this._disconnected) return;
        this._socket = new WebSocket(wsUrl + "&version=" + $0d1ed891c5cb27c0$exports.version);
        this._disconnected = false;
        this._socket.onmessage = function(event) {
            var data;
            try {
                data = JSON.parse(event.data);
                $1615705ecc6adca3$exports.default.log("Server message received:", data);
            } catch (e) {
                $1615705ecc6adca3$exports.default.log("Invalid server message", event.data);
                return;
            }
            _this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Message, data);
        };
        this._socket.onclose = function(event) {
            if (_this._disconnected) return;
            $1615705ecc6adca3$exports.default.log("Socket closed.", event);
            _this._cleanup();
            _this._disconnected = true;
            _this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Disconnected);
        };
        // Take care of the queue of connections if necessary and make sure Peer knows
        // socket is open.
        this._socket.onopen = function() {
            if (_this._disconnected) return;
            _this._sendQueuedMessages();
            $1615705ecc6adca3$exports.default.log("Socket open");
            _this._scheduleHeartbeat();
        };
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._scheduleHeartbeat = function() {
        var _this = this;
        this._wsPingTimer = setTimeout(function() {
            _this._sendHeartbeat();
        }, this.pingInterval);
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._sendHeartbeat = function() {
        if (!this._wsOpen()) {
            $1615705ecc6adca3$exports.default.log("Cannot send heartbeat, because socket closed");
            return;
        }
        var message = JSON.stringify({
            type: $60fadef21a2daafc$export$adb4a1754da6f10d.Heartbeat
        });
        this._socket.send(message);
        this._scheduleHeartbeat();
    };
    /** Is the websocket currently open? */ $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._wsOpen = function() {
        return !!this._socket && this._socket.readyState === 1;
    };
    /** Send queued messages. */ $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._sendQueuedMessages = function() {
        var e_1, _a;
        //Create copy of queue and clear it,
        //because send method push the message back to queue if smth will go wrong
        var copiedQueue = $31d11a8d122cb4b7$var$__spreadArray([], $31d11a8d122cb4b7$var$__read(this._messagesQueue), false);
        this._messagesQueue = [];
        try {
            for(var copiedQueue_1 = $31d11a8d122cb4b7$var$__values(copiedQueue), copiedQueue_1_1 = copiedQueue_1.next(); !copiedQueue_1_1.done; copiedQueue_1_1 = copiedQueue_1.next()){
                var message = copiedQueue_1_1.value;
                this.send(message);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (copiedQueue_1_1 && !copiedQueue_1_1.done && (_a = copiedQueue_1.return)) _a.call(copiedQueue_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    /** Exposed send for DC & Peer. */ $31d11a8d122cb4b7$export$4798917dbf149b79.prototype.send = function(data) {
        if (this._disconnected) return;
        // If we didn't get an ID yet, we can't yet send anything so we should queue
        // up these messages.
        if (!this._id) {
            this._messagesQueue.push(data);
            return;
        }
        if (!data.type) {
            this.emit($60fadef21a2daafc$export$3b5c4a4b6354f023.Error, "Invalid message");
            return;
        }
        if (!this._wsOpen()) return;
        var message = JSON.stringify(data);
        this._socket.send(message);
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype.close = function() {
        if (this._disconnected) return;
        this._cleanup();
        this._disconnected = true;
    };
    $31d11a8d122cb4b7$export$4798917dbf149b79.prototype._cleanup = function() {
        if (this._socket) {
            this._socket.onopen = this._socket.onmessage = this._socket.onclose = null;
            this._socket.close();
            this._socket = undefined;
        }
        clearTimeout(this._wsPingTimer);
    };
    return $31d11a8d122cb4b7$export$4798917dbf149b79;
}($ac9b757d51178e15$exports.EventEmitter);


var $353dee38f9ab557b$exports = {};

$parcel$export($353dee38f9ab557b$exports, "MediaConnection", () => $353dee38f9ab557b$export$4a84e95a2324ac29, (v) => $353dee38f9ab557b$export$4a84e95a2324ac29 = v);


var $77f14d3e81888156$exports = {};

$parcel$export($77f14d3e81888156$exports, "Negotiator", () => $77f14d3e81888156$export$89e6bb5ad64bf4a, (v) => $77f14d3e81888156$export$89e6bb5ad64bf4a = v);



var $77f14d3e81888156$var$__assign =  false || function() {
    $77f14d3e81888156$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $77f14d3e81888156$var$__assign.apply(this, arguments);
};
var $77f14d3e81888156$var$__awaiter =  false || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $77f14d3e81888156$var$__generator =  false || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
/**
 * Manages all negotiations between Peers.
 */ var $77f14d3e81888156$export$89e6bb5ad64bf4a = /** @class */ function() {
    function $77f14d3e81888156$export$89e6bb5ad64bf4a(connection) {
        this.connection = connection;
    }
    /** Returns a PeerConnection object set up correctly (for data, media). */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.startConnection = function(options) {
        var peerConnection = this._startPeerConnection();
        // Set the connection's PC.
        this.connection.peerConnection = peerConnection;
        if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media && options._stream) this._addTracksToConnection(options._stream, peerConnection);
        // What do we need to do now?
        if (options.originator) {
            if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
                var dataConnection = this.connection;
                var config = {
                    ordered: !!options.reliable
                };
                var dataChannel = peerConnection.createDataChannel(dataConnection.label, config);
                dataConnection.initialize(dataChannel);
            }
            this._makeOffer();
        } else this.handleSDP("OFFER", options.sdp);
    };
    /** Start a PC. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._startPeerConnection = function() {
        $1615705ecc6adca3$exports.default.log("Creating RTCPeerConnection.");
        var peerConnection = new RTCPeerConnection(this.connection.provider.options.config);
        this._setupListeners(peerConnection);
        return peerConnection;
    };
    /** Set up various WebRTC listeners. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._setupListeners = function(peerConnection) {
        var _this = this;
        var peerId = this.connection.peer;
        var connectionId = this.connection.connectionId;
        var connectionType = this.connection.type;
        var provider = this.connection.provider;
        // ICE CANDIDATES.
        $1615705ecc6adca3$exports.default.log("Listening for ICE candidates.");
        peerConnection.onicecandidate = function(evt) {
            if (!evt.candidate || !evt.candidate.candidate) return;
            $1615705ecc6adca3$exports.default.log("Received ICE candidates for ".concat(peerId, ":"), evt.candidate);
            provider.socket.send({
                type: $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate,
                payload: {
                    candidate: evt.candidate,
                    type: connectionType,
                    connectionId: connectionId
                },
                dst: peerId
            });
        };
        peerConnection.oniceconnectionstatechange = function() {
            switch(peerConnection.iceConnectionState){
                case "failed":
                    $1615705ecc6adca3$exports.default.log("iceConnectionState is failed, closing connections to " + peerId);
                    _this.connection.emit("error", new Error("Negotiation of connection to " + peerId + " failed."));
                    _this.connection.close();
                    break;
                case "closed":
                    $1615705ecc6adca3$exports.default.log("iceConnectionState is closed, closing connections to " + peerId);
                    _this.connection.emit("error", new Error("Connection to " + peerId + " closed."));
                    _this.connection.close();
                    break;
                case "disconnected":
                    $1615705ecc6adca3$exports.default.log("iceConnectionState changed to disconnected on the connection with " + peerId);
                    break;
                case "completed":
                    peerConnection.onicecandidate = $06cb531ed7840f78$export$7debb50ef11d5e0b.noop;
                    break;
            }
            _this.connection.emit("iceStateChanged", peerConnection.iceConnectionState);
        };
        // DATACONNECTION.
        $1615705ecc6adca3$exports.default.log("Listening for data channel");
        // Fired between offer and answer, so options should already be saved
        // in the options hash.
        peerConnection.ondatachannel = function(evt) {
            $1615705ecc6adca3$exports.default.log("Received data channel");
            var dataChannel = evt.channel;
            var connection = provider.getConnection(peerId, connectionId);
            connection.initialize(dataChannel);
        };
        // MEDIACONNECTION.
        $1615705ecc6adca3$exports.default.log("Listening for remote stream");
        peerConnection.ontrack = function(evt) {
            $1615705ecc6adca3$exports.default.log("Received remote stream");
            var stream = evt.streams[0];
            var connection = provider.getConnection(peerId, connectionId);
            if (connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media) {
                var mediaConnection = connection;
                _this._addStreamToMediaConnection(stream, mediaConnection);
            }
        };
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.cleanup = function() {
        $1615705ecc6adca3$exports.default.log("Cleaning up PeerConnection to " + this.connection.peer);
        var peerConnection = this.connection.peerConnection;
        if (!peerConnection) return;
        this.connection.peerConnection = null;
        //unsubscribe from all PeerConnection's events
        peerConnection.onicecandidate = peerConnection.oniceconnectionstatechange = peerConnection.ondatachannel = peerConnection.ontrack = function() {};
        var peerConnectionNotClosed = peerConnection.signalingState !== "closed";
        var dataChannelNotClosed = false;
        if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
            var dataConnection = this.connection;
            var dataChannel = dataConnection.dataChannel;
            if (dataChannel) dataChannelNotClosed = !!dataChannel.readyState && dataChannel.readyState !== "closed";
        }
        if (peerConnectionNotClosed || dataChannelNotClosed) peerConnection.close();
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._makeOffer = function() {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var peerConnection, provider, offer, payload, dataConnection, err_2, err_1_1;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            7,
                            ,
                            8
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.createOffer(this.connection.options.constraints)
                        ];
                    case 2:
                        offer = _a.sent();
                        $1615705ecc6adca3$exports.default.log("Created offer.");
                        if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") offer.sdp = this.connection.options.sdpTransform(offer.sdp) || offer.sdp;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([
                            3,
                            5,
                            ,
                            6
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.setLocalDescription(offer)
                        ];
                    case 4:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Set localDescription:", offer, "for:".concat(this.connection.peer));
                        payload = {
                            sdp: offer,
                            type: this.connection.type,
                            connectionId: this.connection.connectionId,
                            metadata: this.connection.metadata,
                            browser: $06cb531ed7840f78$export$7debb50ef11d5e0b.browser
                        };
                        if (this.connection.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
                            dataConnection = this.connection;
                            payload = $77f14d3e81888156$var$__assign($77f14d3e81888156$var$__assign({}, payload), {
                                label: dataConnection.label,
                                reliable: dataConnection.reliable,
                                serialization: dataConnection.serialization
                            });
                        }
                        provider.socket.send({
                            type: $60fadef21a2daafc$export$adb4a1754da6f10d.Offer,
                            payload: payload,
                            dst: this.connection.peer
                        });
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 5:
                        err_2 = _a.sent();
                        // TODO: investigate why _makeOffer is being called from the answer
                        if (err_2 != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer") {
                            provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_2);
                            $1615705ecc6adca3$exports.default.log("Failed to setLocalDescription, ", err_2);
                        }
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 6:
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 7:
                        err_1_1 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_1_1);
                        $1615705ecc6adca3$exports.default.log("Failed to createOffer, ", err_1_1);
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._makeAnswer = function() {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var peerConnection, provider, answer, err_3, err_1_2;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            7,
                            ,
                            8
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.createAnswer()
                        ];
                    case 2:
                        answer = _a.sent();
                        $1615705ecc6adca3$exports.default.log("Created answer.");
                        if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") answer.sdp = this.connection.options.sdpTransform(answer.sdp) || answer.sdp;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([
                            3,
                            5,
                            ,
                            6
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.setLocalDescription(answer)
                        ];
                    case 4:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Set localDescription:", answer, "for:".concat(this.connection.peer));
                        provider.socket.send({
                            type: $60fadef21a2daafc$export$adb4a1754da6f10d.Answer,
                            payload: {
                                sdp: answer,
                                type: this.connection.type,
                                connectionId: this.connection.connectionId,
                                browser: $06cb531ed7840f78$export$7debb50ef11d5e0b.browser
                            },
                            dst: this.connection.peer
                        });
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 5:
                        err_3 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_3);
                        $1615705ecc6adca3$exports.default.log("Failed to setLocalDescription, ", err_3);
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 6:
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 7:
                        err_1_2 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_1_2);
                        $1615705ecc6adca3$exports.default.log("Failed to create answer, ", err_1_2);
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /** Handle an SDP. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.handleSDP = function(type, sdp) {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var peerConnection, provider, self, err_4;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        sdp = new RTCSessionDescription(sdp);
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        $1615705ecc6adca3$exports.default.log("Setting remote description", sdp);
                        self = this;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            5,
                            ,
                            6
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.setRemoteDescription(sdp)
                        ];
                    case 2:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Set remoteDescription:".concat(type, " for:").concat(this.connection.peer));
                        if (!(type === "OFFER")) return [
                            3 /*break*/ ,
                            4
                        ];
                        return [
                            4 /*yield*/ ,
                            self._makeAnswer()
                        ];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 5:
                        err_4 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_4);
                        $1615705ecc6adca3$exports.default.log("Failed to setRemoteDescription, ", err_4);
                        return [
                            3 /*break*/ ,
                            6
                        ];
                    case 6:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /** Handle a candidate. */ $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype.handleCandidate = function(ice) {
        return $77f14d3e81888156$var$__awaiter(this, void 0, Promise, function() {
            var candidate, sdpMLineIndex, sdpMid, peerConnection, provider, err_5;
            return $77f14d3e81888156$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        $1615705ecc6adca3$exports.default.log("handleCandidate:", ice);
                        candidate = ice.candidate;
                        sdpMLineIndex = ice.sdpMLineIndex;
                        sdpMid = ice.sdpMid;
                        peerConnection = this.connection.peerConnection;
                        provider = this.connection.provider;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4 /*yield*/ ,
                            peerConnection.addIceCandidate(new RTCIceCandidate({
                                sdpMid: sdpMid,
                                sdpMLineIndex: sdpMLineIndex,
                                candidate: candidate
                            }))
                        ];
                    case 2:
                        _a.sent();
                        $1615705ecc6adca3$exports.default.log("Added ICE candidate for:".concat(this.connection.peer));
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 3:
                        err_5 = _a.sent();
                        provider.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.WebRTC, err_5);
                        $1615705ecc6adca3$exports.default.log("Failed to handleCandidate, ", err_5);
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 4:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._addTracksToConnection = function(stream, peerConnection) {
        $1615705ecc6adca3$exports.default.log("add tracks from stream ".concat(stream.id, " to peer connection"));
        if (!peerConnection.addTrack) return $1615705ecc6adca3$exports.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");
        stream.getTracks().forEach(function(track) {
            peerConnection.addTrack(track, stream);
        });
    };
    $77f14d3e81888156$export$89e6bb5ad64bf4a.prototype._addStreamToMediaConnection = function(stream, mediaConnection) {
        $1615705ecc6adca3$exports.default.log("add stream ".concat(stream.id, " to media connection ").concat(mediaConnection.connectionId));
        mediaConnection.addStream(stream);
    };
    return $77f14d3e81888156$export$89e6bb5ad64bf4a;
}();



var $0b3b332fd86c5202$exports = {};

$parcel$export($0b3b332fd86c5202$exports, "BaseConnection", () => $0b3b332fd86c5202$export$23a2a68283c24d80, (v) => $0b3b332fd86c5202$export$23a2a68283c24d80 = v);

var $0b3b332fd86c5202$var$__extends =  false || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $0b3b332fd86c5202$export$23a2a68283c24d80 = /** @class */ function(_super) {
    $0b3b332fd86c5202$var$__extends($0b3b332fd86c5202$export$23a2a68283c24d80, _super);
    function $0b3b332fd86c5202$export$23a2a68283c24d80(peer, provider, options) {
        var _this = _super.call(this) || this;
        _this.peer = peer;
        _this.provider = provider;
        _this.options = options;
        _this._open = false;
        _this.metadata = options.metadata;
        return _this;
    }
    Object.defineProperty($0b3b332fd86c5202$export$23a2a68283c24d80.prototype, "open", {
        get: function() {
            return this._open;
        },
        enumerable: false,
        configurable: true
    });
    return $0b3b332fd86c5202$export$23a2a68283c24d80;
}($ac9b757d51178e15$exports.EventEmitter);


var $353dee38f9ab557b$var$__extends =  false || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $353dee38f9ab557b$var$__assign =  false || function() {
    $353dee38f9ab557b$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $353dee38f9ab557b$var$__assign.apply(this, arguments);
};
var $353dee38f9ab557b$var$__values =  false || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * Wraps the streaming interface between two Peers.
 */ var $353dee38f9ab557b$export$4a84e95a2324ac29 = /** @class */ function(_super) {
    $353dee38f9ab557b$var$__extends($353dee38f9ab557b$export$4a84e95a2324ac29, _super);
    function $353dee38f9ab557b$export$4a84e95a2324ac29(peerId, provider, options) {
        var _this = _super.call(this, peerId, provider, options) || this;
        _this._localStream = _this.options._stream;
        _this.connectionId = _this.options.connectionId || $353dee38f9ab557b$export$4a84e95a2324ac29.ID_PREFIX + $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken();
        _this._negotiator = new $77f14d3e81888156$exports.Negotiator(_this);
        if (_this._localStream) _this._negotiator.startConnection({
            _stream: _this._localStream,
            originator: true
        });
        return _this;
    }
    Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac29.prototype, "type", {
        get: function() {
            return $60fadef21a2daafc$export$3157d57b4135e3bc.Media;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac29.prototype, "localStream", {
        get: function() {
            return this._localStream;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($353dee38f9ab557b$export$4a84e95a2324ac29.prototype, "remoteStream", {
        get: function() {
            return this._remoteStream;
        },
        enumerable: false,
        configurable: true
    });
    $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.addStream = function(remoteStream) {
        $1615705ecc6adca3$exports.default.log("Receiving stream", remoteStream);
        this._remoteStream = remoteStream;
        _super.prototype.emit.call(this, "stream", remoteStream); // Should we call this `open`?
    };
    $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.handleMessage = function(message) {
        var type = message.type;
        var payload = message.payload;
        switch(message.type){
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Answer:
                // Forward to negotiator
                this._negotiator.handleSDP(type, payload.sdp);
                this._open = true;
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate:
                this._negotiator.handleCandidate(payload.candidate);
                break;
            default:
                $1615705ecc6adca3$exports.default.warn("Unrecognized message type:".concat(type, " from peer:").concat(this.peer));
                break;
        }
    };
    $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.answer = function(stream, options) {
        var e_1, _a;
        if (options === void 0) options = {};
        if (this._localStream) {
            $1615705ecc6adca3$exports.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
            return;
        }
        this._localStream = stream;
        if (options && options.sdpTransform) this.options.sdpTransform = options.sdpTransform;
        this._negotiator.startConnection($353dee38f9ab557b$var$__assign($353dee38f9ab557b$var$__assign({}, this.options._payload), {
            _stream: stream
        }));
        // Retrieve lost messages stored because PeerConnection not set up.
        var messages = this.provider._getMessages(this.connectionId);
        try {
            for(var messages_1 = $353dee38f9ab557b$var$__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()){
                var message = messages_1_1.value;
                this.handleMessage(message);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        this._open = true;
    };
    /**
     * Exposed functionality for users.
     */ /** Allows user to close connection. */ $353dee38f9ab557b$export$4a84e95a2324ac29.prototype.close = function() {
        if (this._negotiator) {
            this._negotiator.cleanup();
            this._negotiator = null;
        }
        this._localStream = null;
        this._remoteStream = null;
        if (this.provider) {
            this.provider._removeConnection(this);
            this.provider = null;
        }
        if (this.options && this.options._stream) this.options._stream = null;
        if (!this.open) return;
        this._open = false;
        _super.prototype.emit.call(this, "close");
    };
    $353dee38f9ab557b$export$4a84e95a2324ac29.ID_PREFIX = "mc_";
    return $353dee38f9ab557b$export$4a84e95a2324ac29;
}($0b3b332fd86c5202$exports.BaseConnection);


var $3356170d7bce7f20$exports = {};

$parcel$export($3356170d7bce7f20$exports, "DataConnection", () => $3356170d7bce7f20$export$d365f7ad9d7df9c9, (v) => $3356170d7bce7f20$export$d365f7ad9d7df9c9 = v);





var $3014d862dcc9946b$exports = {};

$parcel$export($3014d862dcc9946b$exports, "EncodingQueue", () => $3014d862dcc9946b$export$c6913ae0ed687038, (v) => $3014d862dcc9946b$export$c6913ae0ed687038 = v);


var $3014d862dcc9946b$var$__extends =  false || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $3014d862dcc9946b$export$c6913ae0ed687038 = /** @class */ function(_super) {
    $3014d862dcc9946b$var$__extends($3014d862dcc9946b$export$c6913ae0ed687038, _super);
    function $3014d862dcc9946b$export$c6913ae0ed687038() {
        var _this = _super.call(this) || this;
        _this.fileReader = new FileReader();
        _this._queue = [];
        _this._processing = false;
        _this.fileReader.onload = function(evt) {
            _this._processing = false;
            if (evt.target) _this.emit("done", evt.target.result);
            _this.doNextTask();
        };
        _this.fileReader.onerror = function(evt) {
            $1615705ecc6adca3$exports.default.error("EncodingQueue error:", evt);
            _this._processing = false;
            _this.destroy();
            _this.emit("error", evt);
        };
        return _this;
    }
    Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed687038.prototype, "queue", {
        get: function() {
            return this._queue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed687038.prototype, "size", {
        get: function() {
            return this.queue.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3014d862dcc9946b$export$c6913ae0ed687038.prototype, "processing", {
        get: function() {
            return this._processing;
        },
        enumerable: false,
        configurable: true
    });
    $3014d862dcc9946b$export$c6913ae0ed687038.prototype.enque = function(blob) {
        this.queue.push(blob);
        if (this.processing) return;
        this.doNextTask();
    };
    $3014d862dcc9946b$export$c6913ae0ed687038.prototype.destroy = function() {
        this.fileReader.abort();
        this._queue = [];
    };
    $3014d862dcc9946b$export$c6913ae0ed687038.prototype.doNextTask = function() {
        if (this.size === 0) return;
        if (this.processing) return;
        this._processing = true;
        this.fileReader.readAsArrayBuffer(this.queue.shift());
    };
    return $3014d862dcc9946b$export$c6913ae0ed687038;
}($ac9b757d51178e15$exports.EventEmitter);


var $3356170d7bce7f20$var$__extends =  false || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $3356170d7bce7f20$var$__values =  false || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/**
 * Wraps a DataChannel between two Peers.
 */ var $3356170d7bce7f20$export$d365f7ad9d7df9c9 = /** @class */ function(_super) {
    $3356170d7bce7f20$var$__extends($3356170d7bce7f20$export$d365f7ad9d7df9c9, _super);
    function $3356170d7bce7f20$export$d365f7ad9d7df9c9(peerId, provider, options) {
        var _this = _super.call(this, peerId, provider, options) || this;
        _this.stringify = JSON.stringify;
        _this.parse = JSON.parse;
        _this._buffer = [];
        _this._bufferSize = 0;
        _this._buffering = false;
        _this._chunkedData = {};
        _this._encodingQueue = new $3014d862dcc9946b$exports.EncodingQueue();
        _this.connectionId = _this.options.connectionId || $3356170d7bce7f20$export$d365f7ad9d7df9c9.ID_PREFIX + $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken();
        _this.label = _this.options.label || _this.connectionId;
        _this.serialization = _this.options.serialization || $60fadef21a2daafc$export$89f507cf986a947.Binary;
        _this.reliable = !!_this.options.reliable;
        _this._encodingQueue.on("done", function(ab) {
            _this._bufferedSend(ab);
        });
        _this._encodingQueue.on("error", function() {
            $1615705ecc6adca3$exports.default.error("DC#".concat(_this.connectionId, ": Error occured in encoding from blob to arraybuffer, close DC"));
            _this.close();
        });
        _this._negotiator = new $77f14d3e81888156$exports.Negotiator(_this);
        _this._negotiator.startConnection(_this.options._payload || {
            originator: true
        });
        return _this;
    }
    Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype, "type", {
        get: function() {
            return $60fadef21a2daafc$export$3157d57b4135e3bc.Data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype, "dataChannel", {
        get: function() {
            return this._dc;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype, "bufferSize", {
        get: function() {
            return this._bufferSize;
        },
        enumerable: false,
        configurable: true
    });
    /** Called by the Negotiator when the DataChannel is ready. */ $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.initialize = function(dc) {
        this._dc = dc;
        this._configureDataChannel();
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._configureDataChannel = function() {
        var _this = this;
        if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.binaryBlob || $06cb531ed7840f78$export$7debb50ef11d5e0b.supports.reliable) this.dataChannel.binaryType = "arraybuffer";
        this.dataChannel.onopen = function() {
            $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc connection success"));
            _this._open = true;
            _this.emit("open");
        };
        this.dataChannel.onmessage = function(e) {
            $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc onmessage:"), e.data);
            _this._handleDataMessage(e);
        };
        this.dataChannel.onclose = function() {
            $1615705ecc6adca3$exports.default.log("DC#".concat(_this.connectionId, " dc closed for:"), _this.peer);
            _this.close();
        };
    };
    // Handles a DataChannel message.
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._handleDataMessage = function(_a) {
        var _this = this;
        var data = _a.data;
        var datatype = data.constructor;
        var isBinarySerialization = this.serialization === $60fadef21a2daafc$export$89f507cf986a947.Binary || this.serialization === $60fadef21a2daafc$export$89f507cf986a947.BinaryUTF8;
        var deserializedData = data;
        if (isBinarySerialization) {
            if (datatype === Blob) {
                // Datatype should never be blob
                $06cb531ed7840f78$export$7debb50ef11d5e0b.blobToArrayBuffer(data, function(ab) {
                    var unpackedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(ab);
                    _this.emit("data", unpackedData);
                });
                return;
            } else if (datatype === ArrayBuffer) deserializedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(data);
            else if (datatype === String) {
                // String fallback for binary data for browsers that don't support binary yet
                var ab1 = $06cb531ed7840f78$export$7debb50ef11d5e0b.binaryStringToArrayBuffer(data);
                deserializedData = $06cb531ed7840f78$export$7debb50ef11d5e0b.unpack(ab1);
            }
        } else if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.JSON) deserializedData = this.parse(data);
        // Check if we've chunked--if so, piece things back together.
        // We're guaranteed that this isn't 0.
        if (deserializedData.__peerData) {
            this._handleChunk(deserializedData);
            return;
        }
        _super.prototype.emit.call(this, "data", deserializedData);
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._handleChunk = function(data) {
        var id = data.__peerData;
        var chunkInfo = this._chunkedData[id] || {
            data: [],
            count: 0,
            total: data.total
        };
        chunkInfo.data[data.n] = data.data;
        chunkInfo.count++;
        this._chunkedData[id] = chunkInfo;
        if (chunkInfo.total === chunkInfo.count) {
            // Clean up before making the recursive call to `_handleDataMessage`.
            delete this._chunkedData[id];
            // We've received all the chunks--time to construct the complete data.
            var data_1 = new Blob(chunkInfo.data);
            this._handleDataMessage({
                data: data_1
            });
        }
    };
    /**
     * Exposed functionality for users.
     */ /** Allows user to close connection. */ $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.close = function() {
        this._buffer = [];
        this._bufferSize = 0;
        this._chunkedData = {};
        if (this._negotiator) {
            this._negotiator.cleanup();
            this._negotiator = null;
        }
        if (this.provider) {
            this.provider._removeConnection(this);
            this.provider = null;
        }
        if (this.dataChannel) {
            this.dataChannel.onopen = null;
            this.dataChannel.onmessage = null;
            this.dataChannel.onclose = null;
            this._dc = null;
        }
        if (this._encodingQueue) {
            this._encodingQueue.destroy();
            this._encodingQueue.removeAllListeners();
            this._encodingQueue = null;
        }
        if (!this.open) return;
        this._open = false;
        _super.prototype.emit.call(this, "close");
    };
    /** Allows user to send data. */ $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.send = function(data, chunked) {
        if (!this.open) {
            _super.prototype.emit.call(this, "error", new Error("Connection is not open. You should listen for the `open` event before sending messages."));
            return;
        }
        if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.JSON) this._bufferedSend(this.stringify(data));
        else if (this.serialization === $60fadef21a2daafc$export$89f507cf986a947.Binary || this.serialization === $60fadef21a2daafc$export$89f507cf986a947.BinaryUTF8) {
            var blob = $06cb531ed7840f78$export$7debb50ef11d5e0b.pack(data);
            if (!chunked && blob.size > $06cb531ed7840f78$export$7debb50ef11d5e0b.chunkedMTU) {
                this._sendChunks(blob);
                return;
            }
            if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.binaryBlob) // We only do this if we really need to (e.g. blobs are not supported),
            // because this conversion is costly.
            this._encodingQueue.enque(blob);
            else this._bufferedSend(blob);
        } else this._bufferedSend(data);
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._bufferedSend = function(msg) {
        if (this._buffering || !this._trySend(msg)) {
            this._buffer.push(msg);
            this._bufferSize = this._buffer.length;
        }
    };
    // Returns true if the send succeeds.
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._trySend = function(msg) {
        var _this = this;
        if (!this.open) return false;
        if (this.dataChannel.bufferedAmount > $3356170d7bce7f20$export$d365f7ad9d7df9c9.MAX_BUFFERED_AMOUNT) {
            this._buffering = true;
            setTimeout(function() {
                _this._buffering = false;
                _this._tryBuffer();
            }, 50);
            return false;
        }
        try {
            this.dataChannel.send(msg);
        } catch (e) {
            $1615705ecc6adca3$exports.default.error("DC#:".concat(this.connectionId, " Error when sending:"), e);
            this._buffering = true;
            this.close();
            return false;
        }
        return true;
    };
    // Try to send the first message in the buffer.
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._tryBuffer = function() {
        if (!this.open) return;
        if (this._buffer.length === 0) return;
        var msg = this._buffer[0];
        if (this._trySend(msg)) {
            this._buffer.shift();
            this._bufferSize = this._buffer.length;
            this._tryBuffer();
        }
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype._sendChunks = function(blob) {
        var e_1, _a;
        var blobs = $06cb531ed7840f78$export$7debb50ef11d5e0b.chunk(blob);
        $1615705ecc6adca3$exports.default.log("DC#".concat(this.connectionId, " Try to send ").concat(blobs.length, " chunks..."));
        try {
            for(var blobs_1 = $3356170d7bce7f20$var$__values(blobs), blobs_1_1 = blobs_1.next(); !blobs_1_1.done; blobs_1_1 = blobs_1.next()){
                var blob_1 = blobs_1_1.value;
                this.send(blob_1, true);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (blobs_1_1 && !blobs_1_1.done && (_a = blobs_1.return)) _a.call(blobs_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.prototype.handleMessage = function(message) {
        var payload = message.payload;
        switch(message.type){
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Answer:
                this._negotiator.handleSDP(message.type, payload.sdp);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Candidate:
                this._negotiator.handleCandidate(payload.candidate);
                break;
            default:
                $1615705ecc6adca3$exports.default.warn("Unrecognized message type:", message.type, "from peer:", this.peer);
                break;
        }
    };
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.ID_PREFIX = "dc_";
    $3356170d7bce7f20$export$d365f7ad9d7df9c9.MAX_BUFFERED_AMOUNT = 8388608;
    return $3356170d7bce7f20$export$d365f7ad9d7df9c9;
}($0b3b332fd86c5202$exports.BaseConnection);



var $9e85b3e1327369e6$exports = {};

$parcel$export($9e85b3e1327369e6$exports, "API", () => $9e85b3e1327369e6$export$2c4e825dc9120f87, (v) => $9e85b3e1327369e6$export$2c4e825dc9120f87 = v);



var $9e85b3e1327369e6$var$__awaiter =  false || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var $9e85b3e1327369e6$var$__generator =  false || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var $9e85b3e1327369e6$export$2c4e825dc9120f87 = /** @class */ function() {
    function $9e85b3e1327369e6$export$2c4e825dc9120f87(_options) {
        this._options = _options;
    }
    $9e85b3e1327369e6$export$2c4e825dc9120f87.prototype._buildRequest = function(method) {
        var protocol = this._options.secure ? "https" : "http";
        var _a = this._options, host = _a.host, port = _a.port, path = _a.path, key = _a.key;
        var url = new URL("".concat(protocol, "://").concat(host, ":").concat(port).concat(path).concat(key, "/").concat(method));
        // TODO: Why timestamp, why random?
        url.searchParams.set("ts", "".concat(Date.now()).concat(Math.random()));
        url.searchParams.set("version", $0d1ed891c5cb27c0$exports.version);
        return fetch(url.href, {
            referrerPolicy: this._options.referrerPolicy
        });
    };
    /** Get a unique ID from the server via XHR and initialize with it. */ $9e85b3e1327369e6$export$2c4e825dc9120f87.prototype.retrieveId = function() {
        return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function() {
            var response, error_1, pathError;
            return $9e85b3e1327369e6$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._buildRequest("id")
                        ];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) throw new Error("Error. Status:".concat(response.status));
                        return [
                            2 /*return*/ ,
                            response.text()
                        ];
                    case 2:
                        error_1 = _a.sent();
                        $1615705ecc6adca3$exports.default.error("Error retrieving ID", error_1);
                        pathError = "";
                        if (this._options.path === "/" && this._options.host !== $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) pathError = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer.";
                        throw new Error("Could not get an ID from the server." + pathError);
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    /** @deprecated */ $9e85b3e1327369e6$export$2c4e825dc9120f87.prototype.listAllPeers = function() {
        return $9e85b3e1327369e6$var$__awaiter(this, void 0, Promise, function() {
            var response, helpfulError, error_2;
            return $9e85b3e1327369e6$var$__generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            this._buildRequest("peers")
                        ];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            if (response.status === 401) {
                                helpfulError = "";
                                if (this._options.host === $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) helpfulError = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.";
                                else helpfulError = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.";
                                throw new Error("It doesn't look like you have permission to list peers IDs. " + helpfulError);
                            }
                            throw new Error("Error. Status:".concat(response.status));
                        }
                        return [
                            2 /*return*/ ,
                            response.json()
                        ];
                    case 2:
                        error_2 = _a.sent();
                        $1615705ecc6adca3$exports.default.error("Error retrieving list peers", error_2);
                        throw new Error("Could not get list peers from the server." + error_2);
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    return $9e85b3e1327369e6$export$2c4e825dc9120f87;
}();


var $26088d7da5b03f69$var$__extends =  false || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var $26088d7da5b03f69$var$__assign =  false || function() {
    $26088d7da5b03f69$var$__assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $26088d7da5b03f69$var$__assign.apply(this, arguments);
};
var $26088d7da5b03f69$var$__values =  false || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var $26088d7da5b03f69$var$__read =  false || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var $26088d7da5b03f69$var$PeerOptions = /** @class */ function() {
    function PeerOptions() {}
    return PeerOptions;
}();
/**
 * A peer who can initiate connections with other peers.
 */ var $26088d7da5b03f69$export$ecd1fc136c422448 = /** @class */ function(_super) {
    $26088d7da5b03f69$var$__extends($26088d7da5b03f69$export$ecd1fc136c422448, _super);
    function $26088d7da5b03f69$export$ecd1fc136c422448(id1, options) {
        var _this = _super.call(this) || this;
        _this._id = null;
        _this._lastServerId = null;
        // States.
        _this._destroyed = false; // Connections have been killed
        _this._disconnected = false; // Connection to PeerServer killed but P2P connections still active
        _this._open = false; // Sockets and such are not yet open.
        _this._connections = new Map(); // All connections for this peer.
        _this._lostMessages = new Map(); // src => [list of messages]
        var userId;
        // Deal with overloading
        if (id1 && id1.constructor == Object) options = id1;
        else if (id1) userId = id1.toString();
        // Configurize options
        options = $26088d7da5b03f69$var$__assign({
            debug: 0,
            host: $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST,
            port: $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_PORT,
            path: "/",
            key: $26088d7da5b03f69$export$ecd1fc136c422448.DEFAULT_KEY,
            token: $06cb531ed7840f78$export$7debb50ef11d5e0b.randomToken(),
            config: $06cb531ed7840f78$export$7debb50ef11d5e0b.defaultConfig,
            referrerPolicy: "strict-origin-when-cross-origin"
        }, options);
        _this._options = options;
        // Detect relative URL host.
        if (_this._options.host === "/") _this._options.host = window.location.hostname;
        // Set path correctly.
        if (_this._options.path) {
            if (_this._options.path[0] !== "/") _this._options.path = "/" + _this._options.path;
            if (_this._options.path[_this._options.path.length - 1] !== "/") _this._options.path += "/";
        }
        // Set whether we use SSL to same as current host
        if (_this._options.secure === undefined && _this._options.host !== $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) _this._options.secure = $06cb531ed7840f78$export$7debb50ef11d5e0b.isSecure();
        else if (_this._options.host == $06cb531ed7840f78$export$7debb50ef11d5e0b.CLOUD_HOST) _this._options.secure = true;
        // Set a custom log function if present
        if (_this._options.logFunction) $1615705ecc6adca3$exports.default.setLogFunction(_this._options.logFunction);
        $1615705ecc6adca3$exports.default.logLevel = _this._options.debug || 0;
        _this._api = new $9e85b3e1327369e6$exports.API(options);
        _this._socket = _this._createServerConnection();
        // Sanity checks
        // Ensure WebRTC supported
        if (!$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.audioVideo && !$06cb531ed7840f78$export$7debb50ef11d5e0b.supports.data) {
            _this._delayedAbort($60fadef21a2daafc$export$9547aaa2e39030ff.BrowserIncompatible, "The current browser does not support WebRTC");
            return _this;
        }
        // Ensure alphanumeric id
        if (!!userId && !$06cb531ed7840f78$export$7debb50ef11d5e0b.validateId(userId)) {
            _this._delayedAbort($60fadef21a2daafc$export$9547aaa2e39030ff.InvalidID, "ID \"".concat(userId, "\" is invalid"));
            return _this;
        }
        if (userId) _this._initialize(userId);
        else _this._api.retrieveId().then(function(id) {
            return _this._initialize(id);
        }).catch(function(error) {
            return _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, error);
        });
        return _this;
    }
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "id", {
        /**
         * The brokering ID of this peer
         */ get: function() {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "options", {
        get: function() {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "open", {
        get: function() {
            return this._open;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "socket", {
        get: function() {
            return this._socket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "connections", {
        /**
         * A hash of all connections associated with this peer, keyed by the remote peer's ID.
         * @deprecated
         * Return type will change from Object to Map<string,[]>
         */ get: function() {
            var e_1, _a;
            var plainConnections = Object.create(null);
            try {
                for(var _b = $26088d7da5b03f69$var$__values(this._connections), _c = _b.next(); !_c.done; _c = _b.next()){
                    var _d = $26088d7da5b03f69$var$__read(_c.value, 2), k = _d[0], v = _d[1];
                    plainConnections[k] = v;
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return plainConnections;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "destroyed", {
        /**
         * true if this peer and all of its connections can no longer be used.
         */ get: function() {
            return this._destroyed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty($26088d7da5b03f69$export$ecd1fc136c422448.prototype, "disconnected", {
        /**
         * false if there is an active connection to the PeerServer.
         */ get: function() {
            return this._disconnected;
        },
        enumerable: false,
        configurable: true
    });
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._createServerConnection = function() {
        var _this = this;
        var socket = new $31d11a8d122cb4b7$exports.Socket(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Message, function(data) {
            _this._handleMessage(data);
        });
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Error, function(error) {
            _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.SocketError, error);
        });
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Disconnected, function() {
            if (_this.disconnected) return;
            _this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Network, "Lost connection to server.");
            _this.disconnect();
        });
        socket.on($60fadef21a2daafc$export$3b5c4a4b6354f023.Close, function() {
            if (_this.disconnected) return;
            _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.SocketClosed, "Underlying socket is already closed.");
        });
        return socket;
    };
    /** Initialize a connection with the server. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._initialize = function(id) {
        this._id = id;
        this.socket.start(id, this._options.token);
    };
    /** Handles messages from the server. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._handleMessage = function(message) {
        var e_2, _a;
        var type = message.type;
        var payload = message.payload;
        var peerId = message.src;
        switch(type){
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Open:
                this._lastServerId = this.id;
                this._open = true;
                this.emit("open", this.id);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Error:
                this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, payload.msg);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.IdTaken:
                this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.UnavailableID, "ID \"".concat(this.id, "\" is taken"));
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.InvalidKey:
                this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.InvalidKey, "API KEY \"".concat(this._options.key, "\" is invalid"));
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Leave:
                $1615705ecc6adca3$exports.default.log("Received leave message from ".concat(peerId));
                this._cleanupPeer(peerId);
                this._connections.delete(peerId);
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Expire:
                this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.PeerUnavailable, "Could not connect to peer ".concat(peerId));
                break;
            case $60fadef21a2daafc$export$adb4a1754da6f10d.Offer:
                // we should consider switching this to CALL/CONNECT, but this is the least breaking option.
                var connectionId = payload.connectionId;
                var connection = this.getConnection(peerId, connectionId);
                if (connection) {
                    connection.close();
                    $1615705ecc6adca3$exports.default.warn("Offer received for existing Connection ID:".concat(connectionId));
                }
                // Create a new connection.
                if (payload.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Media) {
                    var mediaConnection = new $353dee38f9ab557b$exports.MediaConnection(peerId, this, {
                        connectionId: connectionId,
                        _payload: payload,
                        metadata: payload.metadata
                    });
                    connection = mediaConnection;
                    this._addConnection(peerId, connection);
                    this.emit("call", mediaConnection);
                } else if (payload.type === $60fadef21a2daafc$export$3157d57b4135e3bc.Data) {
                    var dataConnection = new $3356170d7bce7f20$exports.DataConnection(peerId, this, {
                        connectionId: connectionId,
                        _payload: payload,
                        metadata: payload.metadata,
                        label: payload.label,
                        serialization: payload.serialization,
                        reliable: payload.reliable
                    });
                    connection = dataConnection;
                    this._addConnection(peerId, connection);
                    this.emit("connection", dataConnection);
                } else {
                    $1615705ecc6adca3$exports.default.warn("Received malformed connection type:".concat(payload.type));
                    return;
                }
                // Find messages.
                var messages = this._getMessages(connectionId);
                try {
                    for(var messages_1 = $26088d7da5b03f69$var$__values(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()){
                        var message_1 = messages_1_1.value;
                        connection.handleMessage(message_1);
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
                break;
            default:
                if (!payload) {
                    $1615705ecc6adca3$exports.default.warn("You received a malformed message from ".concat(peerId, " of type ").concat(type));
                    return;
                }
                var connectionId = payload.connectionId;
                var connection = this.getConnection(peerId, connectionId);
                if (connection && connection.peerConnection) // Pass it on.
                connection.handleMessage(message);
                else if (connectionId) // Store for possible later use
                this._storeMessage(connectionId, message);
                else $1615705ecc6adca3$exports.default.warn("You received an unrecognized message:", message);
                break;
        }
    };
    /** Stores messages without a set up connection, to be claimed later. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._storeMessage = function(connectionId, message) {
        if (!this._lostMessages.has(connectionId)) this._lostMessages.set(connectionId, []);
        this._lostMessages.get(connectionId).push(message);
    };
    /** Retrieve messages from lost message store */ //TODO Change it to private
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._getMessages = function(connectionId) {
        var messages = this._lostMessages.get(connectionId);
        if (messages) {
            this._lostMessages.delete(connectionId);
            return messages;
        }
        return [];
    };
    /**
     * Connects to the remote peer specified by id and returns a data connection.
     * @param peer The brokering ID of the remote peer (their peer.id).
     * @param options for specifying details about Peer Connection
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.connect = function(peer, options) {
        if (options === void 0) options = {};
        if (this.disconnected) {
            $1615705ecc6adca3$exports.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.");
            this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return;
        }
        var dataConnection = new $3356170d7bce7f20$exports.DataConnection(peer, this, options);
        this._addConnection(peer, dataConnection);
        return dataConnection;
    };
    /**
     * Calls the remote peer specified by id and returns a media connection.
     * @param peer The brokering ID of the remote peer (their peer.id).
     * @param stream The caller's media stream
     * @param options Metadata associated with the connection, passed in by whoever initiated the connection.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.call = function(peer, stream, options) {
        if (options === void 0) options = {};
        if (this.disconnected) {
            $1615705ecc6adca3$exports.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.");
            this.emitError($60fadef21a2daafc$export$9547aaa2e39030ff.Disconnected, "Cannot connect to new Peer after disconnecting from server.");
            return;
        }
        if (!stream) {
            $1615705ecc6adca3$exports.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
            return;
        }
        var mediaConnection = new $353dee38f9ab557b$exports.MediaConnection(peer, this, $26088d7da5b03f69$var$__assign($26088d7da5b03f69$var$__assign({}, options), {
            _stream: stream
        }));
        this._addConnection(peer, mediaConnection);
        return mediaConnection;
    };
    /** Add a data/media connection to this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._addConnection = function(peerId, connection) {
        $1615705ecc6adca3$exports.default.log("add connection ".concat(connection.type, ":").concat(connection.connectionId, " to peerId:").concat(peerId));
        if (!this._connections.has(peerId)) this._connections.set(peerId, []);
        this._connections.get(peerId).push(connection);
    };
    //TODO should be private
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._removeConnection = function(connection) {
        var connections = this._connections.get(connection.peer);
        if (connections) {
            var index = connections.indexOf(connection);
            if (index !== -1) connections.splice(index, 1);
        }
        //remove from lost messages
        this._lostMessages.delete(connection.connectionId);
    };
    /** Retrieve a data/media connection for this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.getConnection = function(peerId, connectionId) {
        var e_3, _a;
        var connections = this._connections.get(peerId);
        if (!connections) return null;
        try {
            for(var connections_1 = $26088d7da5b03f69$var$__values(connections), connections_1_1 = connections_1.next(); !connections_1_1.done; connections_1_1 = connections_1.next()){
                var connection = connections_1_1.value;
                if (connection.connectionId === connectionId) return connection;
            }
        } catch (e_3_1) {
            e_3 = {
                error: e_3_1
            };
        } finally{
            try {
                if (connections_1_1 && !connections_1_1.done && (_a = connections_1.return)) _a.call(connections_1);
            } finally{
                if (e_3) throw e_3.error;
            }
        }
        return null;
    };
    $26088d7da5b03f69$export$ecd1fc136c422448.prototype._delayedAbort = function(type, message) {
        var _this = this;
        setTimeout(function() {
            _this._abort(type, message);
        }, 0);
    };
    /**
     * Emits an error message and destroys the Peer.
     * The Peer is not destroyed if it's in a disconnected state, in which case
     * it retains its disconnected state and its existing connections.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._abort = function(type, message) {
        $1615705ecc6adca3$exports.default.error("Aborting!");
        this.emitError(type, message);
        if (!this._lastServerId) this.destroy();
        else this.disconnect();
    };
    /** Emits a typed error message. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.emitError = function(type, err) {
        $1615705ecc6adca3$exports.default.error("Error:", err);
        var error;
        if (typeof err === "string") error = new Error(err);
        else error = err;
        error.type = type;
        this.emit("error", error);
    };
    /**
     * Destroys the Peer: closes all active connections as well as the connection
     *  to the server.
     * Warning: The peer can no longer create or accept connections after being
     *  destroyed.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.destroy = function() {
        if (this.destroyed) return;
        $1615705ecc6adca3$exports.default.log("Destroy peer with ID:".concat(this.id));
        this.disconnect();
        this._cleanup();
        this._destroyed = true;
        this.emit("close");
    };
    /** Disconnects every connection on this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._cleanup = function() {
        var e_4, _a;
        try {
            for(var _b = $26088d7da5b03f69$var$__values(this._connections.keys()), _c = _b.next(); !_c.done; _c = _b.next()){
                var peerId = _c.value;
                this._cleanupPeer(peerId);
                this._connections.delete(peerId);
            }
        } catch (e_4_1) {
            e_4 = {
                error: e_4_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_4) throw e_4.error;
            }
        }
        this.socket.removeAllListeners();
    };
    /** Closes all connections to this peer. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype._cleanupPeer = function(peerId) {
        var e_5, _a;
        var connections = this._connections.get(peerId);
        if (!connections) return;
        try {
            for(var connections_2 = $26088d7da5b03f69$var$__values(connections), connections_2_1 = connections_2.next(); !connections_2_1.done; connections_2_1 = connections_2.next()){
                var connection = connections_2_1.value;
                connection.close();
            }
        } catch (e_5_1) {
            e_5 = {
                error: e_5_1
            };
        } finally{
            try {
                if (connections_2_1 && !connections_2_1.done && (_a = connections_2.return)) _a.call(connections_2);
            } finally{
                if (e_5) throw e_5.error;
            }
        }
    };
    /**
     * Disconnects the Peer's connection to the PeerServer. Does not close any
     *  active connections.
     * Warning: The peer can no longer create or accept connections after being
     *  disconnected. It also cannot reconnect to the server.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.disconnect = function() {
        if (this.disconnected) return;
        var currentId = this.id;
        $1615705ecc6adca3$exports.default.log("Disconnect peer with ID:".concat(currentId));
        this._disconnected = true;
        this._open = false;
        this.socket.close();
        this._lastServerId = currentId;
        this._id = null;
        this.emit("disconnected", currentId);
    };
    /** Attempts to reconnect with the same ID. */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.reconnect = function() {
        if (this.disconnected && !this.destroyed) {
            $1615705ecc6adca3$exports.default.log("Attempting reconnection to server with ID ".concat(this._lastServerId));
            this._disconnected = false;
            this._initialize(this._lastServerId);
        } else if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
        else if (!this.disconnected && !this.open) // Do nothing. We're still connecting the first time.
        $1615705ecc6adca3$exports.default.error("In a hurry? We're still trying to make the initial connection!");
        else throw new Error("Peer ".concat(this.id, " cannot reconnect because it is not disconnected from the server!"));
    };
    /**
     * Get a list of available peer IDs. If you're running your own server, you'll
     * want to set allow_discovery: true in the PeerServer options. If you're using
     * the cloud server, email team@peerjs.com to get the functionality enabled for
     * your key.
     */ $26088d7da5b03f69$export$ecd1fc136c422448.prototype.listAllPeers = function(cb) {
        var _this = this;
        if (cb === void 0) cb = function(_) {};
        this._api.listAllPeers().then(function(peers) {
            return cb(peers);
        }).catch(function(error) {
            return _this._abort($60fadef21a2daafc$export$9547aaa2e39030ff.ServerError, error);
        });
    };
    $26088d7da5b03f69$export$ecd1fc136c422448.DEFAULT_KEY = "peerjs";
    return $26088d7da5b03f69$export$ecd1fc136c422448;
}($ac9b757d51178e15$exports.EventEmitter);


var $70d766613f57b014$export$2e2bcd8739ae039 = $26088d7da5b03f69$exports.Peer;



//# sourceMappingURL=bundler.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var peasy_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peasy-ui */ "./node_modules/peasy-ui/dist/index.js");
/* harmony import */ var peasy_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(peasy_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! peerjs */ "./node_modules/peerjs/dist/bundler.mjs");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
    console.log("Let's get this party started");
}
else {
    window.alert("BROWSER NO WORKY");
}
var peer = new peerjs__WEBPACK_IMPORTED_MODULE_2__["default"]();
var template = "\n<div>\n    <div>\n        <button ${click@=>makeCall}>Make Call</button>\n        <input type=\"text\" ${value<=>remoteID} />\n        <p> my id is: </p>\n        <span>${myID}</span>\n    </div>\n\n    <div>\n        <video id=\"myvid\" />\n    </div>\n</div>";
var model = {
    makeCall: function (_event, model, _element) {
        var theirID = model.remoteID;
        console.log("calling: ", theirID);
        call(theirID);
    },
    videoSrc: "",
    myID: "",
    remoteID: "",
};
peer.on("open", function (id) {
    console.log("peer ID: ", id);
    model.myID = id;
});
peer.on("call", function (call) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserMedia, stream, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("getting called");
                getUserMedia = navigator.mediaDevices.getUserMedia;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                console.log("trying call");
                return [4 /*yield*/, getUserMedia({ video: true, audio: true })];
            case 2:
                stream = _a.sent();
                console.log("answering call");
                call.answer(stream);
                call.on("stream", function (remoteStream) {
                    console.log("stream established");
                    console.log(remoteStream);
                    var vidCntrl = document.getElementById("myvid");
                    vidCntrl.srcObject = remoteStream;
                    vidCntrl.play();
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                window.alert(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var call = function (remotePeerID) { return __awaiter(void 0, void 0, void 0, function () {
    var getUserMedia, stream, call_1, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                getUserMedia = navigator.mediaDevices.getUserMedia;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                console.log("setting up stream");
                return [4 /*yield*/, getUserMedia({ video: true, audio: true })];
            case 2:
                stream = _a.sent();
                console.log("making call");
                call_1 = peer.call(remotePeerID, stream, {});
                console.log("call id: ", call_1);
                call_1.on("stream", function (remoteStream) {
                    console.log("stream established");
                    console.log(remoteStream);
                    var vidCntrl = document.getElementById("myvid");
                    vidCntrl.srcObject = remoteStream;
                    vidCntrl.play();
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                window.alert(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.create(document.body, template, model);
setInterval(function () {
    peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.update();
}, 1000 / 60);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxtRUFBbUUsOElBQThJO0FBQ2pOO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JCQSxNQUFNLGFBQWEsT0FBTyxVQUFVLCtEQUErRCx1QkFBdUIsRUFBRSwwREFBMEQsNEZBQTRGLGVBQWUsd0NBQXdDLFNBQVMsR0FBRyxNQUFNLGNBQWMsc0JBQXNCLEVBQUUsUUFBUSxjQUFjLGdIQUFnSCxzQkFBc0IsSUFBSSxvQ0FBb0MsRUFBRSxNQUFNLGNBQWMsZ01BQWdNLGtCQUFrQixLQUFLLFVBQVUseUZBQXlGLFlBQVksNkNBQTZDLE1BQU0sc0hBQXNILG1EQUFtRCxvQ0FBb0MsOEJBQThCLFFBQVEsMkVBQTJFLFVBQVUsaUxBQWlMLGVBQWUsNkNBQTZDLGFBQWEsUUFBUSw4REFBOEQsNFRBQTRULE1BQU0sdUhBQXVILE1BQU0sc0NBQXNDLGlCQUFpQiwrQ0FBK0Msb0JBQW9CLFlBQVksc0dBQXNHLHVDQUF1QyxZQUFZLDZCQUE2QixLQUFLLCtCQUErQixrTEFBa0wsNERBQTRELE1BQU0sYUFBYSxtQkFBbUIsOEJBQThCLE1BQU0sME5BQTBOLDJDQUEyQyxvQkFBb0IsbUNBQW1DLFVBQVUscUdBQXFHLFFBQVEsY0FBYyxxSUFBcUksb0JBQW9CLGdCQUFnQixjQUFjLGlKQUFpSixlQUFlLGdCQUFnQixpQkFBaUIsMEJBQTBCLDhHQUE4Ryw4Q0FBOEMsZ0JBQWdCLHlvQkFBeW9CLFVBQVUsNkVBQTZFLFNBQVMsZUFBZSxjQUFjLDhHQUE4RyxpQkFBaUIsbUZBQW1GLGVBQWUsZ0hBQWdILE1BQU0sb0JBQW9CLHVEQUF1RCx5QkFBeUIsbUZBQW1GLHNEQUFzRCxpQkFBaUIsTUFBTSxvQkFBb0IsOENBQThDLDhFQUE4RSxzQkFBc0IsMENBQTBDLGFBQWEsd0JBQXdCLHNFQUFzRSxxREFBcUQsd0JBQXdCLDZFQUE2RSwyQ0FBMkMsK0VBQStFLHFDQUFxQyxtSEFBbUgsNENBQTRDLEdBQUcsS0FBSyx5QkFBeUIscUJBQXFCLHNDQUFzQyxLQUFLLGdCQUFnQix1RUFBdUUsNEJBQTRCLDRCQUE0QixJQUFJLEtBQUssUUFBUSw2RUFBNkUscURBQXFELFlBQVksS0FBSyxPQUFPLDRGQUE0RixrRUFBa0UsaUdBQWlHLHFEQUFxRCxRQUFRLDJCQUEyQixJQUFJLFNBQVMsUUFBUSw2RUFBNkUscURBQXFELGlCQUFpQixJQUFJLDJIQUEySCwrQkFBK0Isb0JBQW9CLDJCQUEyQixJQUFJLFNBQVMsYUFBYSxpQ0FBaUMsMkJBQTJCLFlBQVksU0FBUyxRQUFRLG1CQUFtQixxQkFBcUIsc0VBQXNFLDhGQUE4RixFQUFFLGNBQWMsU0FBUyw2Q0FBNkMsMkZBQTJGLElBQUksVUFBVSxxRkFBcUYsU0FBUyw0REFBNEQsbUJBQW1CLG9CQUFvQixTQUFTLHNCQUFzQixTQUFTLGdDQUFnQyxJQUFJLEtBQUssc0VBQXNFLDZDQUE2QyxNQUFNLGtIQUFrSCxPQUFPLE9BQU8sU0FBUyxRQUFRLG1CQUFtQixxQkFBcUIsc0VBQXNFLDhGQUE4RixFQUFFLGVBQWUsZ0dBQWdHLDBCQUEwQix3RkFBd0YsZ0ZBQWdGLDRDQUE0QyxJQUFJLDRCQUE0QiwrRUFBK0UscUNBQXFDLE1BQU0sb0JBQW9CLGdEQUFnRCw0Q0FBNEMseUVBQXlFLGNBQWMsNEJBQTRCLGlCQUFpQiwwQkFBMEIsS0FBSyxRQUFRLCtIQUErSCw0Q0FBNEMsYUFBYSx5Q0FBeUMsUUFBUSxzQkFBc0IsSUFBSSxvQ0FBb0MsRUFBRSxNQUFNLHVCQUF1Qix5RUFBeUUsb0RBQW9ELCtCQUErQiwyREFBMkQsMEJBQTBCLHVDQUF1QyxpQkFBaUIsb0dBQW9HLHNCQUFzQixVQUFVLFdBQVcsbUJBQW1CLDRDQUE0QyxLQUFLLFFBQVEsRUFBRSxhQUFhLFdBQVcsT0FBTyxTQUFTLG1EQUFtRCxvQkFBb0Isa0ZBQWtGLDBFQUEwRSx1SEFBdUgsS0FBSyxzRkFBc0YsV0FBVyxpQ0FBaUMsd0JBQXdCLDhCQUE4Qix3Q0FBd0MsMkJBQTJCLFlBQVksNkJBQTZCLGtJQUFrSSxnQkFBZ0IsWUFBWSxNQUFNLG9CQUFvQix3QkFBd0Isa0JBQWtCLHVDQUF1Qyx1SUFBdUksMEJBQTBCLDBCQUEwQixtQkFBbUIsdUNBQXVDLG1FQUFtRSxTQUFTLGNBQWMsaUJBQWlCLHVDQUF1Qyx1R0FBdUcscURBQXFELGVBQWUsdUtBQXVLLEdBQUcsa0JBQWtCLG1DQUFtQyxLQUFLLFFBQVEsRUFBRSxJQUFJLDRCQUE0QixlQUFlLGtFQUFrRSx3RUFBd0UsaUJBQWlCLHFCQUFxQixtRUFBbUUsOERBQThELGtDQUFrQyxVQUFVLHVEQUF1RCxTQUFTLHdGQUF3RiwrRkFBK0YsS0FBSyxLQUFLLCtFQUErRSxxREFBcUQsc0VBQXNFLFNBQVMsZUFBZSxtQkFBbUIsaUJBQWlCLDZCQUE2Qix5Q0FBeUMscUJBQXFCLGdCQUFnQiw4SEFBOEgsMEJBQTBCLHlGQUF5RixlQUFlLCtCQUErQixvQkFBb0Isa0NBQWtDLE1BQU0sZUFBZSxjQUFjLDZDQUE2QyxtQ0FBbUMsR0FBRyw0QkFBNEIsZ0dBQWdHLDhCQUE4QixLQUFLLFdBQVcsZ0JBQWdCLE9BQU8sd0JBQXdCLHlCQUF5QixRQUFRLEdBQUcsTUFBTSxvQkFBb0Isd0JBQXdCLCtCQUErQixZQUFZLHdCQUF3QiwwQkFBMEIsd0JBQXdCLG9CQUFvQixLQUFLLDBDQUEwQyxZQUFZLGdDQUFnQyx1QkFBdUIscUJBQXFCLG9CQUFvQixLQUFLLDBDQUEwQyxZQUFZLGdDQUFnQyxrQkFBa0IsUUFBUSxLQUFLLDhCQUE4QixLQUFLLFFBQVEsRUFBRSxpQkFBaUIsMEJBQTBCLFlBQVksd0JBQXdCLG1CQUFtQixJQUFJLEVBQUUsU0FBUyxHQUFHLE1BQU0sbUJBQW1CLElBQUksRUFBRSxrQ0FBa0MsWUFBWSxvR0FBb0csSUFBSSxtQkFBbUIsTUFBTSxnSEFBZ0gsNkJBQTZCLHVDQUF1QyxjQUFjLHlCQUF5QixvREFBb0QsU0FBUyxFQUFFOzs7Ozs7Ozs7O0FDQXRyYyxvQkFBb0Isc0hBQXdDO0FBQzVELHFCQUFxQix1SEFBeUM7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0NBQWdDOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdDQUFnQztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1Isd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQixPQUFPO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLElBQTBCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Z6QkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUV1Qzs7QUFFcEQ7QUFDQSxFQUFFLG1FQUFjLEVBQUUsMkRBQTJEO0FBQzdFLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNpQzs7QUFFakM7QUFDbUQ7QUFDTjtBQUNTO0FBQ0g7QUFDUDs7QUFFNUM7QUFDTyx5QkFBeUIsUUFBUSxJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esa0JBQWtCLHVDQUFTO0FBQzNCLHlCQUF5QixpREFBbUI7O0FBRTVDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsb0JBQW9CLGtEQUFvQjtBQUN4QyxnQkFBZ0IsOENBQWdCO0FBQ2hDLHFCQUFxQixtREFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBVSxLQUFLLG1FQUE2QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBVTs7QUFFdEM7QUFDQSxNQUFNLHdFQUF5Qzs7QUFFL0MsTUFBTSxpRUFBMkI7QUFDakMsTUFBTSxnRUFBMEI7QUFDaEMsTUFBTSxtRUFBNkI7QUFDbkMsTUFBTSw0REFBc0I7QUFDNUIsTUFBTSx3RUFBa0M7QUFDeEMsTUFBTSx1RUFBaUM7QUFDdkMsTUFBTSw2REFBdUI7QUFDN0IsTUFBTSwyRUFBcUM7QUFDM0MsTUFBTSxxRUFBK0I7O0FBRXJDLE1BQU0sNkRBQThCO0FBQ3BDLE1BQU0sNkRBQThCO0FBQ3BDLE1BQU0sNERBQTZCO0FBQ25DLE1BQU0sZ0VBQWlDO0FBQ3ZDLE1BQU0sZ0VBQWlDO0FBQ3ZDO0FBQ0E7QUFDQSxXQUFXLGtEQUFXLEtBQUsscUVBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrREFBVzs7QUFFdkM7QUFDQSxNQUFNLHdFQUF5Qzs7QUFFL0MsTUFBTSxtRUFBNEI7QUFDbEMsTUFBTSxxRUFBOEI7QUFDcEMsTUFBTSw4REFBdUI7QUFDN0IsTUFBTSxtRUFBNEI7QUFDbEMsTUFBTSxxRUFBOEI7QUFDcEMsTUFBTSx1RUFBZ0M7QUFDdEMsTUFBTSxxRUFBOEI7QUFDcEMsTUFBTSxxRUFBOEI7QUFDcEMsTUFBTSxvRUFBNkI7QUFDbkMsTUFBTSxrRUFBMkI7QUFDakMsTUFBTSxtRUFBNEI7O0FBRWxDLE1BQU0sNkRBQThCO0FBQ3BDLE1BQU0sNkRBQThCO0FBQ3BDLE1BQU0sNERBQTZCO0FBQ25DLE1BQU0sZ0VBQWlDO0FBQ3ZDO0FBQ0E7QUFDQSxXQUFXLDRDQUFRLEtBQUssK0RBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNENBQVE7O0FBRXBDLE1BQU0sNkRBQXlCO0FBQy9CLE1BQU0sZ0VBQTRCO0FBQ2xDLE1BQU0sK0RBQTJCO0FBQ2pDLE1BQU0sNkRBQXlCOztBQUUvQjs7QUFFQSxNQUFNLDREQUE2QjtBQUNuQyxNQUFNLGdFQUFpQztBQUN2QztBQUNBO0FBQ0EsV0FBVyxnREFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFVOztBQUV0QztBQUNBLE1BQU0sd0VBQXlDOztBQUUvQyxNQUFNLHFFQUErQjtBQUNyQyxNQUFNLHNFQUFnQztBQUN0QyxNQUFNLGlFQUEyQjtBQUNqQyxNQUFNLG9FQUE4QjtBQUNwQyxNQUFNLHFFQUErQjtBQUNyQyxNQUFNLDBFQUFvQztBQUMxQyxNQUFNLGlFQUEyQjtBQUNqQyxNQUFNLGlFQUEyQjs7QUFFakMsTUFBTSw2REFBOEI7QUFDcEMsTUFBTSw0REFBNkI7QUFDbkMsTUFBTSxnRUFBaUM7QUFDdkMsTUFBTSxnRUFBaUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDd0I7O0FBRVc7QUFDTTs7QUFFL0M7QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUE2QjtBQUNqQztBQUNBO0FBQ0EsV0FBVyxRQUFRLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFpQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUE2QjtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQWlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsRUFBRSw4REFBNkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQzdyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ047QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7QUFDd0I7QUFDckMsZ0JBQWdCLDBDQUFTOztBQUVsQjtBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFlBQVk7QUFDdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSx5REFBeUQscUJBQXFCO0FBQzlFLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYztBQUNNOztBQUUxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix5REFBdUI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLDJEQUE2QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQXNCO0FBQzNDO0FBQ0E7QUFDQSxvQkFBb0IscURBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHNEQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUE2QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNhO0FBQ3FCOztBQUUzQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOztBQUVBOztBQUVBLHNDQUFzQyxNQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7OztBQUdELHNDQUFzQyxNQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFDQUFxQyxNQUErQjtBQUNwRTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE1BQStCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHO0FBQ3pHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RyxvQkFBb0I7QUFDakk7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7Ozs7OztBQU1BOztBQUVBOzs7QUFHQSxzQ0FBc0MsTUFBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRCxzQ0FBc0MsTUFBZ0M7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxxQ0FBcUMsTUFBK0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlHQUFpRyxpQkFBaUI7QUFDbEg7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7QUFFQTs7OztBQUlBLHNDQUFzQyxNQUFnQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3Q0FBd0MsTUFBa0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Qsc0NBQXNDLE1BQWdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUNBQXFDLE1BQStCO0FBQ3BFO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsTUFBK0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTFDLFdBQVcsQ0FBQztJQUNWLCtDQUFTLEVBQUUsQ0FBQztBQUNkLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3ZvaXAtY2hhdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3BlYXN5LXVpL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3BlZXJqcy1qcy1iaW5hcnlwYWNrL2xpYi9iaW5hcnlwYWNrLmpzIiwid2VicGFjazovL3ZvaXAtY2hhdC8uL25vZGVfbW9kdWxlcy9wZWVyanMtanMtYmluYXJ5cGFjay9saWIvYnVmZmVyYnVpbGRlci5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvcnRjcGVlcmNvbm5lY3Rpb24tc2hpbS9ydGNwZWVyY29ubmVjdGlvbi5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvc2RwL3NkcC5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ZvaXAtY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3ZvaXAtY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2FkYXB0ZXJfY29yZS5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2FkYXB0ZXJfZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9jaHJvbWVfc2hpbS5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2Nocm9tZS9nZXRkaXNwbGF5bWVkaWEuanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9jaHJvbWUvZ2V0dXNlcm1lZGlhLmpzIiwid2VicGFjazovL3ZvaXAtY2hhdC8uL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9zcmMvanMvY29tbW9uX3NoaW0uanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9lZGdlL2VkZ2Vfc2hpbS5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZmlsdGVyaWNlc2VydmVycy5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2VkZ2UvZ2V0ZGlzcGxheW1lZGlhLmpzIiwid2VicGFjazovL3ZvaXAtY2hhdC8uL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9zcmMvanMvZWRnZS9nZXR1c2VybWVkaWEuanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9maXJlZm94L2ZpcmVmb3hfc2hpbS5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvd2VicnRjLWFkYXB0ZXIvc3JjL2pzL2ZpcmVmb3gvZ2V0ZGlzcGxheW1lZGlhLmpzIiwid2VicGFjazovL3ZvaXAtY2hhdC8uL25vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci9zcmMvanMvZmlyZWZveC9nZXR1c2VybWVkaWEuanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy9zYWZhcmkvc2FmYXJpX3NoaW0uanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3dlYnJ0Yy1hZGFwdGVyL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly92b2lwLWNoYXQvLi9ub2RlX21vZHVsZXMvcGVlcmpzL2Rpc3QvYnVuZGxlci5tanMiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3ZvaXAtY2hhdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly92b2lwLWNoYXQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZvaXAtY2hhdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3ZvaXAtY2hhdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3ZvaXAtY2hhdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdm9pcC1jaGF0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypzdHlsZS5jc3MqLyBcXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVlcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypzdHlsZS5jc3MqLyBcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KHQsaSk9Pntmb3IodmFyIHMgaW4gaSllLm8oaSxzKSYmIWUubyh0LHMpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLHtlbnVtZXJhYmxlOiEwLGdldDppW3NdfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSx0PXt9O2Uucih0KSxlLmQodCx7VUk6KCk9Pm4sVUlWaWV3OigpPT5pfSk7Y2xhc3MgaXtjb25zdHJ1Y3Rvcigpe3RoaXMuc3RhdGU9XCJjcmVhdGVkXCIsdGhpcy5iaW5kaW5ncz1bXSx0aGlzLmFuaW1hdGlvbnM9W10sdGhpcy5hbmltYXRpb25RdWV1ZT1bXSx0aGlzLmRlc3Ryb3llZD1cIlwiLHRoaXMubW92ZWQ9XCJcIn1zdGF0aWMgY3JlYXRlKGUsdCxzPXt9LGw9e3BhcmVudDpudWxsLHByZXBhcmU6ITAsc2libGluZzpudWxsfSl7dmFyIHI7Y29uc3Qgbz1uZXcgaTtyZXR1cm4gby5tb2RlbD1zLG8uZWxlbWVudD10LG8uYmluZGluZ3MucHVzaCguLi5uLnBhcnNlKG8uZWxlbWVudCxzLG8sbC5wYXJlbnQpKSxvLnBhcmVudEVsZW1lbnQ9ZSxvLnNpYmxpbmc9bC5zaWJsaW5nLG8ucGFyZW50PW51bGwhPT0ocj1sLnBhcmVudCkmJnZvaWQgMCE9PXI/cjpuLG8uYXR0YWNoZWQ9bmV3IFByb21pc2UoKGU9PntvLmF0dGFjaFJlc29sdmU9ZX0pKSxvfWRlc3Ryb3koKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1yZW1vdmluZ1wiKSx0aGlzLmRlc3Ryb3llZD1cInF1ZXVlXCIsbi5kZXN0cm95ZWQucHVzaCh0aGlzKX10ZXJtaW5hdGUoKXtQcm9taXNlLmFsbCh0aGlzLmdldEFuaW1hdGlvbnMoKSkudGhlbigoKCk9Pnt2YXIgZTtudWxsPT09KGU9dGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQpfHx2b2lkIDA9PT1lfHxlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCksdGhpcy5iaW5kaW5ncy5mb3JFYWNoKChlPT5lLnVuYmluZCgpKSk7Y29uc3QgdD10aGlzLnBhcmVudC52aWV3cy5maW5kSW5kZXgoKGU9PmU9PT10aGlzKSk7dD4tMSYmdGhpcy5wYXJlbnQudmlld3Muc3BsaWNlKHQsMSl9KSksdGhpcy5kZXN0cm95ZWQ9XCJkZXN0cm95ZWRcIn1tb3ZlKGUpe3RoaXMubW92ZWQ9XCJxdWV1ZVwiLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHVpLW1vdmluZ1wiKSx0aGlzLnNpYmxpbmc9ZX1wbGF5KGUsdCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXRoaXMuYW5pbWF0aW9ucy5maW5kKCh0PT50Lm5hbWU9PT1lKSkuY2xvbmUoKSksZS5lbGVtZW50PXQsZS5zdGF0ZT1cInBlbmRpbmdcIix0aGlzLmFuaW1hdGlvblF1ZXVlLnB1c2goZSksdGhpcy51cGRhdGVBbmltYXRpb25zKHBlcmZvcm1hbmNlLm5vdygpKSxlfXVwZGF0ZUZyb21VSSgpe3RoaXMuYmluZGluZ3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVGcm9tVUkoKSkpfXVwZGF0ZVRvVUkoKXt2YXIgZSx0O3N3aXRjaCh0aGlzLmJpbmRpbmdzLmZvckVhY2goKGU9PmUudXBkYXRlVG9VSSgpKSksdGhpcy5zdGF0ZSl7Y2FzZVwiY3JlYXRlZFwiOnRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHVpLWFkZGluZ1wiKSx0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiUFVJLVVOUkVOREVSRURcIil8fChudWxsIT09KGU9dGhpcy5wYXJlbnRFbGVtZW50KSYmdm9pZCAwIT09ZT9lOm4ucGFyZW50RWxlbWVudCh0aGlzLmVsZW1lbnQsdGhpcy5wYXJlbnQpKS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LG51bGw9PT0odD10aGlzLnNpYmxpbmcpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lm5leHRTaWJsaW5nKSx0aGlzLmF0dGFjaFJlc29sdmUoKSx0aGlzLnN0YXRlPVwiYXR0YWNoaW5nXCI7YnJlYWs7Y2FzZVwiYXR0YWNoaW5nXCI6MD09PXRoaXMuZ2V0QW5pbWF0aW9ucyghMSkubGVuZ3RoJiYodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwdWktYWRkaW5nXCIpLHRoaXMuc3RhdGU9XCJhdHRhY2hlZFwiKTticmVhaztjYXNlXCJhdHRhY2hlZFwiOnRoaXMuc3RhdGU9XCJyZW5kZXJlZFwifX11cGRhdGVBdEV2ZW50cygpe3RoaXMuYmluZGluZ3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVBdEV2ZW50cygpKSl9dXBkYXRlQW5pbWF0aW9ucyhlKXtmb3IodmFyIHQsaTtudWxsIT09KGk9XCJmaW5pc2hlZFwiPT09KG51bGw9PT0odD10aGlzLmFuaW1hdGlvblF1ZXVlWzBdKXx8dm9pZCAwPT09dD92b2lkIDA6dC5zdGF0ZSkpJiZ2b2lkIDAhPT1pJiZpOyl0aGlzLmFuaW1hdGlvblF1ZXVlLnNoaWZ0KCkuZGVzdHJveSgpO2ZvcihsZXQgdD0wO3Q8dGhpcy5hbmltYXRpb25RdWV1ZS5sZW5ndGg7dCsrKXtjb25zdCBpPXRoaXMuYW5pbWF0aW9uUXVldWVbdF07XCJwZW5kaW5nXCI9PT1pLnN0YXRlJiYoaS5pc0Jsb2NrZWQoZSl8fChpLnN0YXRlPVwicGxheWluZ1wiLGkuc3RhcnRUaW1lPWUsaS5hbmltYXRpb249aS5lbGVtZW50LmFuaW1hdGUoaS5rZXlmcmFtZXMsaS5vcHRpb25zKSxpLmZpbmlzaGVkPWkuYW5pbWF0aW9uLmZpbmlzaGVkLGkuZmluaXNoZWQudGhlbigoKCk9PntpLnN0YXRlPVwiZmluaXNoZWRcIix0aGlzLnVwZGF0ZUFuaW1hdGlvbnMocGVyZm9ybWFuY2Uubm93KCkpfSkpKSl9fXVwZGF0ZU1vdmUoKXtzd2l0Y2godGhpcy5tb3ZlZCl7Y2FzZVwicXVldWVcIjp0aGlzLm1vdmVkPVwibW92ZVwiO2JyZWFrO2Nhc2VcIm1vdmVcIjowPT09dGhpcy5nZXRBbmltYXRpb25zKCkubGVuZ3RoJiYobi5wYXJlbnRFbGVtZW50KHRoaXMuZWxlbWVudCx0aGlzLnBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCx0aGlzLnNpYmxpbmcubmV4dFNpYmxpbmcpLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicHVpLW1vdmluZ1wiKSx0aGlzLm1vdmVkPVwiXCIsdGhpcy5zaWJsaW5nPXZvaWQgMCl9dGhpcy5iaW5kaW5ncy5mb3JFYWNoKChlPT5lLnVwZGF0ZU1vdmUoKSkpfWdldEFuaW1hdGlvbnMoZT0hMCl7cmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBbmltYXRpb25zKHtzdWJ0cmVlOmV9KS5maWx0ZXIoKGU9PlwiZmluaXNoZWRcIiE9PWUucGxheVN0YXRlJiZlLmVmZmVjdC5nZXRUaW1pbmcoKS5pdGVyYXRpb25zIT09MS8wKSkubWFwKChlPT5lLmZpbmlzaGVkKSl9fWNsYXNzIHN7Y29uc3RydWN0b3IoKXt0aGlzLmZyb21VST0hMSx0aGlzLnRvVUk9ITAsdGhpcy5hdEV2ZW50PSExLHRoaXMub25lVGltZT0hMSx0aGlzLnZpZXdzPVtdLHRoaXMuZmlyc3RVcGRhdGU9ITAsdGhpcy5ldmVudHM9W10sdGhpcy50cmlnZ2VyQXRFdmVudD1lPT57dGhpcy5ldmVudHMucHVzaChlKX0sdGhpcy5pZD0rK24uaWR9Z2V0IGVsZW1lbnQoKXtyZXR1cm4gbnVsbD09dGhpcy4kZWxlbWVudCYmKHRoaXMuJGVsZW1lbnQ9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuc2VsZWN0b3I/dGhpcy5jb250ZXh0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik6dGhpcy5zZWxlY3RvciksdGhpcy4kZWxlbWVudH1zZXQgZWxlbWVudChlKXt0aGlzLiRlbGVtZW50PWV9c3RhdGljIGNyZWF0ZShlKXt2YXIgdCxpLGwscixvLGEsaCx1LGQsbSxwO2NvbnN0IGM9bmV3IHMsdj1udWxsIT09KGk9bnVsbD09PSh0PWUucHJvcGVydHkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnNwbGl0KFwiOlwiKSkmJnZvaWQgMCE9PWk/aTpbXSxmPXYuc2hpZnQoKTtyZXR1cm4gYy5vYmplY3Q9XCIkbW9kZWxcImluIGUub2JqZWN0P2Uub2JqZWN0OnskbW9kZWw6ZS5vYmplY3R9LGMucHJvcGVydHk9ZixjLmFyZ3VtZW50cz12LGMuY29udGV4dD1udWxsIT09KGw9ZS5jb250ZXh0KSYmdm9pZCAwIT09bD9sOmRvY3VtZW50LGMuc2VsZWN0b3I9ZS5zZWxlY3RvcixjLmF0dHJpYnV0ZT1udWxsIT09KHI9ZS5hdHRyaWJ1dGUpJiZ2b2lkIDAhPT1yP3I6XCJpbm5lclRleHRcIixjLnZhbHVlPW51bGwhPT0obz1lLnZhbHVlKSYmdm9pZCAwIT09bz9vOmMudmFsdWUsYy50ZW1wbGF0ZT1udWxsIT09KGE9ZS50ZW1wbGF0ZSkmJnZvaWQgMCE9PWE/YTpjLnRlbXBsYXRlLGMuZnJvbVVJPW51bGwhPT0oaD1lLmZyb21VSSkmJnZvaWQgMCE9PWg/aDpjLmZyb21VSSxjLnRvVUk9bnVsbCE9PSh1PWUudG9VSSkmJnZvaWQgMCE9PXU/dTpjLnRvVUksYy5hdEV2ZW50PW51bGwhPT0oZD1lLmF0RXZlbnQpJiZ2b2lkIDAhPT1kP2Q6Yy5hdEV2ZW50LGMub25lVGltZT1udWxsIT09KG09ZS5vbmVUaW1lKSYmdm9pZCAwIT09bT9tOmMub25lVGltZSxjLnBhcmVudD1udWxsIT09KHA9ZS5wYXJlbnQpJiZ2b2lkIDAhPT1wP3A6bixjLmFkZExpc3RlbmVyKCksXCJib29sZWFuXCIhPXR5cGVvZiBjLmZyb21VSSYmKGMuZnJvbVVJPWMuZnJvbVVJLmJpbmQoYykpLFwiYm9vbGVhblwiIT10eXBlb2YgYy50b1VJJiYoYy50b1VJPWMudG9VSS5iaW5kKGMpKSxjfWRlc3Ryb3koKXt0aGlzLmVsZW1lbnQ9bnVsbCx0aGlzLnJlbW92ZUxpc3RlbmVyKCksdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLmRlc3Ryb3koKSkpfXVuYmluZCgpe24udW5iaW5kKHRoaXMpfWFkZExpc3RlbmVyKCl7dGhpcy5hdEV2ZW50JiYodGhpcy50b1VJPSExLHRoaXMuZnJvbVVJPSExLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuYXR0cmlidXRlLHRoaXMudHJpZ2dlckF0RXZlbnQpKX1yZW1vdmVMaXN0ZW5lcigpe3RoaXMuYXRFdmVudCYmdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5hdHRyaWJ1dGUsdGhpcy50cmlnZ2VyQXRFdmVudCl9dXBkYXRlRnJvbVVJKCl7aWYoITE9PT10aGlzLmZyb21VSXx8dGhpcy5maXJzdFVwZGF0ZSlyZXR1cm4gdGhpcy5maXJzdFVwZGF0ZT0hMSx2b2lkIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVGcm9tVUkoKSkpO2NvbnN0e3RhcmdldDplLHByb3BlcnR5OnR9PW4ucmVzb2x2ZVByb3BlcnR5KHRoaXMuZWxlbWVudCx0aGlzLmF0dHJpYnV0ZSksaT1lW3RdO2lmKGkhPT10aGlzLmxhc3RVSVZhbHVlKXtsZXQgZT0hMCE9PXRoaXMuZnJvbVVJP3RoaXMuZnJvbVVJKGksdGhpcy5sYXN0VUlWYWx1ZSx0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTppO2lmKHRoaXMubGFzdFVJVmFsdWU9aSx2b2lkIDAhPT1lJiZlIT09dGhpcy5sYXN0VmFsdWUpe3RoaXMubGFzdFZhbHVlPWU7Y29uc3R7dGFyZ2V0OnQscHJvcGVydHk6aX09bi5yZXNvbHZlUHJvcGVydHkodGhpcy5vYmplY3QsdGhpcy5wcm9wZXJ0eSk7XCJudW1iZXJcIiE9PW4ucmVzb2x2ZVZhbHVlKHRoaXMub2JqZWN0LHRoaXMucHJvcGVydHkpfHxpc05hTihlKXx8KGU9K2UpLHRbaV09ZX1lbHNlIHRoaXMubGFzdFZhbHVlPWV9dGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZUZyb21VSSgpKSl9dXBkYXRlVG9VSSgpe3ZhciBlLHQscyxsLHIsbyxhLGgsdSxkO2lmKCExPT09dGhpcy50b1VJKXJldHVybiB2b2lkIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKTtsZXQgbT1uLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5KSxwPSExO2lmKG51bGwhPXRoaXMudGVtcGxhdGUpe2lmKHRoaXMudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClpZihcImJvb2xlYW5cIj09dHlwZW9mIHRoaXMuYXR0cmlidXRlKXtpZihtPSExIT09KG51bGwhPW0mJm0pLG0hPT10aGlzLmxhc3RWYWx1ZSl7Y29uc3QgZT0hMCE9PXRoaXMudG9VST90aGlzLnRvVUkobSx0aGlzLmxhc3RWYWx1ZSx0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTptO2lmKHZvaWQgMCE9PWUmJmUhPT10aGlzLmxhc3RVSVZhbHVlKXtpZihlPT09dGhpcy5hdHRyaWJ1dGUpdGhpcy52aWV3cy5wdXNoKGkuY3JlYXRlKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LHRoaXMudGVtcGxhdGUuY2xvbmVOb2RlKCEwKSx0aGlzLm9iamVjdCx7cGFyZW50OnRoaXMscHJlcGFyZTohMSxzaWJsaW5nOnRoaXMuZWxlbWVudH0pKTtlbHNle2NvbnN0IGU9dGhpcy52aWV3cy5wb3AoKTtudWxsPT1lfHxlLmRlc3Ryb3koKX10aGlzLmxhc3RWYWx1ZT1tLHRoaXMubGFzdFVJVmFsdWU9ZX19fWVsc2V7bnVsbD09bSYmKG09W10pO2NvbnN0IGM9dGhpcy5hcmd1bWVudHNbMF0sdj1udWxsIT09KGU9dGhpcy5sYXN0VmFsdWUpJiZ2b2lkIDAhPT1lP2U6W107aWYobS5sZW5ndGghPT12Lmxlbmd0aClwPSEwO2Vsc2UgZm9yKGxldCBlPTAsaT1tLmxlbmd0aDtlPGk7ZSsrKXtsZXQgaSxsO2lmKG51bGw9PWM/KGk9bVtlXSxsPXZbZV0pOihpPW4ucmVzb2x2ZVZhbHVlKG51bGwhPT0odD1tW2VdKSYmdm9pZCAwIT09dD90Ont9LGMpLGw9bi5yZXNvbHZlVmFsdWUobnVsbCE9PShzPXZbZV0pJiZ2b2lkIDAhPT1zP3M6e30sYykpLGkhPT1sKXtwPSEwO2JyZWFrfX1pZighcClyZXR1cm4gdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZVRvVUkoKSkpLHZvaWQodGhpcy5vbmVUaW1lJiZ0aGlzLm9uZVRpbWVEb25lKCkpO2NvbnN0IGY9ITAhPT10aGlzLnRvVUk/dGhpcy50b1VJKG0sdix0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTptO2lmKG51bGw9PWYpcmV0dXJuIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx2b2lkKHRoaXMub25lVGltZSYmdGhpcy5vbmVUaW1lRG9uZSgpKTtjb25zdCBiPW51bGwhPT0obD10aGlzLmxhc3RVSVZhbHVlKSYmdm9pZCAwIT09bD9sOltdO2xldCBnPTA7Zm9yKGxldCBlPTAsdD1mLmxlbmd0aCxpPTA7ZTx0O2UrKyxpKyspe2xldCB0LHM7aWYobnVsbD09Yz8odD1mW2VdLHM9YltpXSk6KHQ9bi5yZXNvbHZlVmFsdWUobnVsbCE9PShyPWZbZV0pJiZ2b2lkIDAhPT1yP3I6e30sYykscz1uLnJlc29sdmVWYWx1ZShudWxsIT09KG89YltpXSkmJnZvaWQgMCE9PW8/bzp7fSxjKSksdCE9PXMpYnJlYWs7ZysrfWlmKGc9PT1mLmxlbmd0aCYmZi5sZW5ndGg9PT1iLmxlbmd0aClyZXR1cm4gdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZVRvVUkoKSkpLHZvaWQodGhpcy5vbmVUaW1lJiZ0aGlzLm9uZVRpbWVEb25lKCkpO2NvbnN0IHk9dGhpcy52aWV3cy5zcGxpY2UoMCxnKTtsZXQgVT15W3kubGVuZ3RoLTFdO2ZvcihsZXQgZT1nLHQ9Zi5sZW5ndGgscz1nO2U8dDtlKysscysrKXtjb25zdCB0PWZbZV07XCJzdHJpbmdcIiE9dHlwZW9mIHQmJih0LiRpbmRleD1lKTtjb25zdCBzPXRoaXMudmlld3Muc2hpZnQoKTtpZihudWxsPT1zKXtjb25zdCBlPXskbW9kZWw6e1t0aGlzLmF0dHJpYnV0ZV06dH0sJHBhcmVudDp0aGlzLm9iamVjdH0scz1pLmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCx0aGlzLnRlbXBsYXRlLmNsb25lTm9kZSghMCksZSx7cGFyZW50OnRoaXMscHJlcGFyZTohMSxzaWJsaW5nOm51bGwhPT0oYT1udWxsPT1VP3ZvaWQgMDpVLmVsZW1lbnQpJiZ2b2lkIDAhPT1hP2E6dGhpcy5lbGVtZW50fSk7eS5wdXNoKHMpLFU9cztjb250aW51ZX1jb25zdCBsPW51bGw9PWM/dDpuLnJlc29sdmVWYWx1ZShudWxsIT10P3Q6e30sYykscj1udWxsPT1zP3ZvaWQgMDpzLm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV0sbz1udWxsPT1jP3I6bi5yZXNvbHZlVmFsdWUobnVsbCE9cj9yOnt9LGMpO2lmKGw9PT1vKXt5LnB1c2gocykscy5tb3ZlKG51bGwhPT0oaD1udWxsPT1VP3ZvaWQgMDpVLmVsZW1lbnQpJiZ2b2lkIDAhPT1oP2g6dGhpcy5lbGVtZW50KSxVPXM7Y29udGludWV9aWYoIWYuc2xpY2UoZSkubWFwKChlPT5udWxsPT1jP2U6bi5yZXNvbHZlVmFsdWUobnVsbCE9ZT9lOnt9LGMpKSkuaW5jbHVkZXMobykpe3MuZGVzdHJveSgpLGUtLSxVPXM7Y29udGludWV9dGhpcy52aWV3cy51bnNoaWZ0KHMpO2xldCBtPSExO2ZvcihsZXQgZT0wLHQ9dGhpcy52aWV3cy5sZW5ndGg7ZTx0O2UrKyl7Y29uc3QgdD10aGlzLnZpZXdzW2VdLGk9bnVsbD09dD92b2lkIDA6dC5tb2RlbC4kbW9kZWxbdGhpcy5hdHRyaWJ1dGVdO2lmKGw9PT0obnVsbD09Yz9pOm4ucmVzb2x2ZVZhbHVlKG51bGwhPWk/aTp7fSxjKSkpe3kucHVzaCguLi50aGlzLnZpZXdzLnNwbGljZShlLDEpKSx0Lm1vdmUobnVsbCE9PSh1PW51bGw9PVU/dm9pZCAwOlUuZWxlbWVudCkmJnZvaWQgMCE9PXU/dTp0aGlzLmVsZW1lbnQpLG09ITAsVT10O2JyZWFrfX1pZighbSl7Y29uc3QgZT17JG1vZGVsOntbdGhpcy5hdHRyaWJ1dGVdOnR9LCRwYXJlbnQ6dGhpcy5vYmplY3R9LHM9aS5jcmVhdGUodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsdGhpcy50ZW1wbGF0ZS5jbG9uZU5vZGUoITApLGUse3BhcmVudDp0aGlzLHByZXBhcmU6ITEsc2libGluZzpudWxsIT09KGQ9bnVsbD09VT92b2lkIDA6VS5lbGVtZW50KSYmdm9pZCAwIT09ZD9kOnRoaXMuZWxlbWVudH0pO3kucHVzaChzKSxVPXN9fXRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS5kZXN0cm95KCkpKSx0aGlzLnZpZXdzPXksdGhpcy5sYXN0VmFsdWU9Wy4uLm1dLHRoaXMubGFzdFVJVmFsdWU9Wy4uLmZdfWVsc2UgaWYobnVsbD09dGhpcy52YWx1ZSl7Y29uc3QgZT1uLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLmF0dHJpYnV0ZSksdD1lLnRlbXBsYXRlLGk9bnVsbD09bT9lOmUuY3JlYXRlKG0pO3RoaXMudmFsdWU9bnVsbCE9bT9tOmUsdGhpcy52aWV3cy5wdXNoKG4uY3JlYXRlKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LHQsaSx7cGFyZW50OnRoaXMscHJlcGFyZTohMCxzaWJsaW5nOnRoaXMuZWxlbWVudH0pKX19ZWxzZSBpZihtIT09dGhpcy5sYXN0VmFsdWUpe2NvbnN0IGU9ITAhPT10aGlzLnRvVUk/dGhpcy50b1VJKG0sdGhpcy5sYXN0VmFsdWUsdGhpcy5wcm9wZXJ0eSx0aGlzLm9iamVjdCk6bTtpZih2b2lkIDAhPT1lJiZlIT09dGhpcy5sYXN0VUlWYWx1ZSl7Y29uc3R7dGFyZ2V0OnQscHJvcGVydHk6aX09bi5yZXNvbHZlUHJvcGVydHkodGhpcy5lbGVtZW50LHRoaXMuYXR0cmlidXRlKTt0W2ldPWUsdGhpcy5sYXN0VmFsdWU9bSx0aGlzLmxhc3RVSVZhbHVlPWV9fXRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx0aGlzLm9uZVRpbWUmJnRoaXMub25lVGltZURvbmUoKX1vbmVUaW1lRG9uZSgpe3RoaXMudG9VST0hMSx0aGlzLmZyb21VST0hMX11cGRhdGVBdEV2ZW50cygpe2xldCBlPXRoaXMuZXZlbnRzLnNoaWZ0KCk7Zm9yKDtudWxsIT1lOyluLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5KShlLHRoaXMub2JqZWN0LiRtb2RlbCx0aGlzLmVsZW1lbnQsdGhpcy5hdHRyaWJ1dGUsdGhpcy5vYmplY3QpLGU9dGhpcy5ldmVudHMuc2hpZnQoKTt0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlQXRFdmVudHMoKSkpfXVwZGF0ZU1vdmUoKXt0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlTW92ZSgpKSl9fWNsYXNzIG57c3RhdGljIGNyZWF0ZShlLHQscz17fSxsPXtwYXJlbnQ6bnVsbCxwcmVwYXJlOiEwLHNpYmxpbmc6bnVsbH0pe3ZhciByO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtjb25zdCBpPW51bGwhPT0ocj1udWxsPT1lP3ZvaWQgMDplLm93bmVyRG9jdW1lbnQpJiZ2b2lkIDAhPT1yP3I6ZG9jdW1lbnQ7dC5zdGFydHNXaXRoKFwiI1wiKSYmKHQ9aS5xdWVyeVNlbGVjdG9yKHQpLmlubmVySFRNTCk7Y29uc3Qgcz1pLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy5pbm5lckhUTUw9bC5wcmVwYXJlP24ucHJlcGFyZSh0KTp0LHQ9cy5maXJzdEVsZW1lbnRDaGlsZH1jb25zdCBvPWkuY3JlYXRlKGUsdCxzLGwpO3JldHVybiBvLnBhcmVudD09PW4mJm4udmlld3MucHVzaChvKSxvfXN0YXRpYyBwbGF5KGUsdCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGU/KGU9dGhpcy5nbG9iYWxzLmFuaW1hdGlvbnMuZmluZCgodD0+dC5uYW1lPT09ZSkpLmNsb25lKCkpLnBsYXkodCk6ZS5wbGF5KCl9c3RhdGljIHBhcnNlKGUsdCxpLHMpe3ZhciBsLHIsbztjb25zdCBhPVtdO2lmKDM9PT1lLm5vZGVUeXBlKXtsZXQgbD1lLnRleHRDb250ZW50LHI9bC5tYXRjaChuLnJlZ2V4VmFsdWUpO2Zvcig7bnVsbCE9cjspe2NvbnN0IG89clsxXTtsZXQgaD1yWzJdO2w9clszXTtsZXQgdT0hMTtoLnN0YXJ0c1dpdGgoXCJ8XCIpJiYodT0hMCxoPWguc2xpY2UoMSkudHJpbVN0YXJ0KCkpO2xldCBkPWUuY2xvbmVOb2RlKCk7ZS50ZXh0Q29udGVudD1vLG4ucGFyZW50RWxlbWVudChlLHMpLmluc2VydEJlZm9yZShkLGUubmV4dFNpYmxpbmcpLGEucHVzaChuLmJpbmQoe3NlbGVjdG9yOmQsYXR0cmlidXRlOlwidGV4dENvbnRlbnRcIixvYmplY3Q6dCxwcm9wZXJ0eTpoLHBhcmVudDppLG9uZVRpbWU6dX0pKSxkPShlPWQpLmNsb25lTm9kZSgpLGQudGV4dENvbnRlbnQ9bCxuLnBhcmVudEVsZW1lbnQoZSxzKS5pbnNlcnRCZWZvcmUoZCxlLm5leHRTaWJsaW5nKSxlPWQscj1sLm1hdGNoKG4ucmVnZXhWYWx1ZSl9fWVsc2V7aWYoYS5wdXNoKC4uLk9iamVjdC5rZXlzKG51bGwhPT0obD1lLmF0dHJpYnV0ZXMpJiZ2b2lkIDAhPT1sP2w6W10pLnJldmVyc2UoKS5tYXAoKGw9Pntjb25zdCByPVtdO2lmKGUgaW5zdGFuY2VvZiBDb21tZW50KXJldHVybltdO2NvbnN0IG89ZS5hdHRyaWJ1dGVzW2xdO2lmKG8ubmFtZS5zdGFydHNXaXRoKFwicHVpLlwiKSl7Y29uc3QgbD1vLnZhbHVlLm1hdGNoKG4ucmVnZXhBdHRyaWJ1dGUpO2xldCByLGEsW2gsdSxkLG0scF09bCxjPSExO2lmKFwiQFwiIT09ZCl7Y29uc3QgaT11Lm1hdGNoKC9eJyguKj8pJyQvKTtpZihudWxsIT1pKXI9aVsxXSxlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsciksdT1cIm9wdGlvblwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpP1wic2VsZWN0ZWRcIjpcImNoZWNrZWRcIixtPWU9PmU/cjp2b2lkIDAsZD1lPT5lPT09cjtlbHNlIGlmKFwiXCI9PT11KXtpZihcIj5cIj09PW0pe2NvbnN0e3RhcmdldDppLHByb3BlcnR5OnN9PW4ucmVzb2x2ZVByb3BlcnR5KHQscCk7cmV0dXJuIGlbc109ZSxbXX17Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVDb21tZW50KG8ubmFtZSk7bi5wYXJlbnROb2RlKGUscykuaW5zZXJ0QmVmb3JlKHQsZSksbi5wYXJlbnROb2RlKGUscykucmVtb3ZlQ2hpbGQoZSksZS5yZW1vdmVBdHRyaWJ1dGUoby5uYW1lKSxhPWUsZT10LHU9XCI9XCI9PT1kLGQ9ITAsXCJ8XCI9PT1tJiYoYz0hMCl9fWVsc2UgaWYoXCI9XCI9PT1tJiZcIj1cIj09PWQpe2NvbnN0IHQ9bi5wYXJlbnROb2RlKGUscyk7aWYoOCE9PXQubm9kZVR5cGUpe2NvbnN0IGk9ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChvLm5hbWUpO3QuaW5zZXJ0QmVmb3JlKGksZSksdC5yZW1vdmVDaGlsZChlKSxlLnJlbW92ZUF0dHJpYnV0ZShvLm5hbWUpLGU9aX1lbHNlIGU9dDthPXUsYz0hMCxkPSEwfWVsc2UgaWYoXCIqXCI9PT1tKXtjb25zdCB0PWRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoby5uYW1lKTtuLnBhcmVudE5vZGUoZSxzKS5pbnNlcnRCZWZvcmUodCxlKSxuLnBhcmVudE5vZGUoZSxzKS5yZW1vdmVDaGlsZChlKSxlLnJlbW92ZUF0dHJpYnV0ZShvLm5hbWUpLGE9ZSxlPXR9ZWxzZVwifFwiPT09bT9jPSEwOlwiY2hlY2tlZFwiIT09dSYmZS5zZXRBdHRyaWJ1dGUodSxcIlwiKX1yZXR1cm5bbi5iaW5kKHtzZWxlY3RvcjplLGF0dHJpYnV0ZTp1LHZhbHVlOnIsb2JqZWN0OnQscHJvcGVydHk6cCx0ZW1wbGF0ZTphLHRvVUk6XCJzdHJpbmdcIj09dHlwZW9mIGQ/XCI8XCI9PT1kOmQsZnJvbVVJOlwic3RyaW5nXCI9PXR5cGVvZiBtP1wiPlwiPT09bTptLGF0RXZlbnQ6XCJAXCI9PT1kLHBhcmVudDppLG9uZVRpbWU6Y30pXX1jb25zdCBhPVtvLnZhbHVlXTtsZXQgaD0wLHU9YVtoXS5tYXRjaChuLnJlZ2V4VmFsdWUpO2Zvcig7bnVsbCE9dTspe2xldHtiZWZvcmU6cyxwcm9wZXJ0eTpsLGFmdGVyOmR9PXUuZ3JvdXBzLG09ITE7bC5zdGFydHNXaXRoKFwifFwiKSYmKG09ITAsbD1sLnNsaWNlKDEpLnRyaW1TdGFydCgpKSxyLnB1c2gobi5iaW5kKHtzZWxlY3RvcjplLGF0dHJpYnV0ZTpvLm5hbWUsb2JqZWN0OnQscHJvcGVydHk6bCxvbmVUaW1lOm0sdG9VSSh0LGkscyxsKXtpZih0aGlzLm9uZVRpbWUpe2NvbnN0IGU9YS5pbmRleE9mKHMpO2U+LTEmJihhW2VdPW4ucmVzb2x2ZVZhbHVlKGwscyksYVtlLTFdKz1hW2VdK2FbZSsxXSxhLnNwbGljZShlLDIpKX1jb25zdCByPWEubWFwKCgoZSx0KT0+dCUyPT0wP2U6bi5yZXNvbHZlVmFsdWUobCxlKSkpLmpvaW4oXCJcIik7cmV0dXJuIGUuc2V0QXR0cmlidXRlKG8ubmFtZSxyKSx0fSxwYXJlbnQ6aX0pKSxhW2grK109cyxhW2grK109bCxhW2hdPWQsdT1hW2hdLm1hdGNoKG4ucmVnZXhWYWx1ZSl9cmV0dXJuIHJ9KSkuZmxhdCgpKSxlIGluc3RhbmNlb2YgQ29tbWVudClyZXR1cm4gYS5maWx0ZXIoKGU9Pm51bGwhPWUudGVtcGxhdGV8fChlLnVuYmluZCgpLCExKSkpO2lmKCFuLmxlYXZlQXR0cmlidXRlcylmb3IobGV0IHQ9T2JqZWN0LmtleXMobnVsbCE9PShyPWUuYXR0cmlidXRlcykmJnZvaWQgMCE9PXI/cjpbXSkubGVuZ3RoLTE7dD49MDt0LS0pe2NvbnN0IGk9ZS5hdHRyaWJ1dGVzW09iamVjdC5rZXlzKG51bGwhPT0obz1lLmF0dHJpYnV0ZXMpJiZ2b2lkIDAhPT1vP286W10pW3RdXTtpLm5hbWUuc3RhcnRzV2l0aChcInB1aS5cIikmJmUucmVtb3ZlQXR0cmlidXRlKGkubmFtZSl9YS5wdXNoKC4uLkFycmF5LmZyb20oZS5jaGlsZE5vZGVzKS5tYXAoKGU9Pm4ucGFyc2UoZSx0LGkscykpKS5mbGF0KCkpfXJldHVybiBhfXN0YXRpYyBiaW5kKGUpe3JldHVybiBzLmNyZWF0ZShlKX1zdGF0aWMgdW5iaW5kKGUpe2lmKGUuZGVzdHJveSgpLGUucGFyZW50IT09bil7Y29uc3QgdD1lLnBhcmVudC5iaW5kaW5ncyxpPXQuaW5kZXhPZihlKTtpPi0xJiZ0LnNwbGljZShpLDEpfX1zdGF0aWMgdXBkYXRlKCl7dGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZUZyb21VSSgpKSksdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZVRvVUkoKSkpLHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVBdEV2ZW50cygpKSk7Y29uc3QgZT1wZXJmb3JtYW5jZS5ub3coKTtbLi4udGhpcy52aWV3cyx0aGlzLmdsb2JhbHNdLmZvckVhY2goKHQ9PnQudXBkYXRlQW5pbWF0aW9ucyhlKSkpLHRoaXMudmlld3MuZm9yRWFjaCgoZT0+e2UudXBkYXRlTW92ZSgpfSkpLHRoaXMuZGVzdHJveWVkLmZvckVhY2goKGU9Pntzd2l0Y2goZS5kZXN0cm95ZWQpe2Nhc2VcInF1ZXVlXCI6ZS5kZXN0cm95ZWQ9XCJkZXN0cm95XCI7YnJlYWs7Y2FzZVwiZGVzdHJveVwiOntlLnRlcm1pbmF0ZSgpO2NvbnN0IHQ9dGhpcy5kZXN0cm95ZWQuZmluZEluZGV4KCh0PT5lPT09dCkpO3Q+LTEmJnRoaXMuZGVzdHJveWVkLnNwbGljZSh0LDEpfX19KSl9c3RhdGljIHJlc29sdmVQcm9wZXJ0eShlLHQpe2NvbnN0IGk9KHQ9dC5yZXBsYWNlKFwiW1wiLFwiLlwiKS5yZXBsYWNlKFwiXVwiLFwiLlwiKSkuc3BsaXQoXCIuXCIpLmZpbHRlcigoZT0+KG51bGwhPWU/ZTpcIlwiKS5sZW5ndGg+MCkpO2xldCBzPVwiJG1vZGVsXCJpbiBlP2UuJG1vZGVsOmU7Zm9yKDtpLmxlbmd0aD4xOylzPXNbaS5zaGlmdCgpXTtyZXR1cm57dGFyZ2V0OnMscHJvcGVydHk6aVswXX19c3RhdGljIHJlc29sdmVWYWx1ZShlLHQpe2xldCBpPTA7ZG97Y29uc3R7dGFyZ2V0OmkscHJvcGVydHk6c309bi5yZXNvbHZlUHJvcGVydHkoZSx0KTtpZihudWxsIT1pJiZzIGluIGkpcmV0dXJuIGlbc107ZT1lLiRwYXJlbnR9d2hpbGUobnVsbCE9ZSYmaSsrPDFlMyl9c3RhdGljIHBhcmVudEVsZW1lbnQoZSx0KXtjb25zdCBpPWUucGFyZW50RWxlbWVudDtpZihudWxsIT1pKXJldHVybiBpO2Zvcig7bnVsbCE9dCYmKG51bGw9PXQuZWxlbWVudHx8dC5lbGVtZW50PT09ZSk7KXQ9dC5wYXJlbnQ7cmV0dXJuIG51bGw9PXQ/dm9pZCAwOnQuZWxlbWVudH1zdGF0aWMgcGFyZW50Tm9kZShlLHQpe2NvbnN0IGk9ZS5wYXJlbnROb2RlO2lmKG51bGwhPWkpcmV0dXJuIGk7Zm9yKDtudWxsIT10JiYobnVsbD09dC5lbGVtZW50fHx0LmVsZW1lbnQ9PT1lKTspdD10LnBhcmVudDtyZXR1cm4gbnVsbD09dD92b2lkIDA6dC5lbGVtZW50fXN0YXRpYyBwcmVwYXJlKGUpe2xldCB0PWU7ZT1cIlwiO2xldCBpPXQubWF0Y2gobi5yZWdleFJlcGxhY2UpO2Zvcig7bnVsbCE9aTspe2NvbnN0W3MsbCxyLG9dPWk7ci5tYXRjaCgvXFxTXFxzKj09PS8pP2UrPWAke2wudHJpbUVuZCgpfWJyIFBVSS1VTlJFTkRFUkVEIFBVSS4ke24uYmluZGluZ0NvdW50ZXIrK309XCIke3J9XCJgOmUrPWAke2x9IFBVSS4ke24uYmluZGluZ0NvdW50ZXIrK309XCIke3J9XCIgYCx0PW8saT10Lm1hdGNoKG4ucmVnZXhSZXBsYWNlKX1yZXR1cm4gZSt0fX1uLmlkPTAsbi52aWV3cz1bXSxuLmRlc3Ryb3llZD1bXSxuLmdsb2JhbHM9bmV3IGksbi5sZWF2ZUF0dHJpYnV0ZXM9ITEsbi5yZWdleFJlcGxhY2U9LyhbXFxTXFxzXSo/KVxcJFxceyhbXn1dKj9bPD1AIV09Wyo9PnxdW159XSo/KVxcfShbXFxTXFxzXSopL20sbi5yZWdleEF0dHJpYnV0ZT0vXlxccyooXFxTKj8pXFxzKihbPD1AIV0pPShbKj0+fF0pXFxzKihcXFMqPylcXHMqJC8sbi5yZWdleFZhbHVlPS8oPzxiZWZvcmU+W1xcU1xcc10qPylcXCRcXHtcXHMqKD88cHJvcGVydHk+W1xcc1xcU10qPylcXHMqXFx9KD88YWZ0ZXI+W1xcU1xcc10qKS9tLG4uYmluZGluZ0NvdW50ZXI9MDt2YXIgbD1leHBvcnRzO2Zvcih2YXIgciBpbiB0KWxbcl09dFtyXTt0Ll9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShsLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTsiLCJ2YXIgQnVmZmVyQnVpbGRlciA9IHJlcXVpcmUoJy4vYnVmZmVyYnVpbGRlcicpLkJ1ZmZlckJ1aWxkZXI7XHJcbnZhciBiaW5hcnlGZWF0dXJlcyA9IHJlcXVpcmUoJy4vYnVmZmVyYnVpbGRlcicpLmJpbmFyeUZlYXR1cmVzO1xyXG5cclxudmFyIEJpbmFyeVBhY2sgPSB7XHJcbiAgdW5wYWNrOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgdmFyIHVucGFja2VyID0gbmV3IFVucGFja2VyKGRhdGEpO1xyXG4gICAgcmV0dXJuIHVucGFja2VyLnVucGFjaygpO1xyXG4gIH0sXHJcbiAgcGFjazogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHZhciBwYWNrZXIgPSBuZXcgUGFja2VyKCk7XHJcbiAgICBwYWNrZXIucGFjayhkYXRhKTtcclxuICAgIHZhciBidWZmZXIgPSBwYWNrZXIuZ2V0QnVmZmVyKCk7XHJcbiAgICByZXR1cm4gYnVmZmVyO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmluYXJ5UGFjaztcclxuXHJcbmZ1bmN0aW9uIFVucGFja2VyIChkYXRhKSB7XHJcbiAgLy8gRGF0YSBpcyBBcnJheUJ1ZmZlclxyXG4gIHRoaXMuaW5kZXggPSAwO1xyXG4gIHRoaXMuZGF0YUJ1ZmZlciA9IGRhdGE7XHJcbiAgdGhpcy5kYXRhVmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMuZGF0YUJ1ZmZlcik7XHJcbiAgdGhpcy5sZW5ndGggPSB0aGlzLmRhdGFCdWZmZXIuYnl0ZUxlbmd0aDtcclxufVxyXG5cclxuVW5wYWNrZXIucHJvdG90eXBlLnVucGFjayA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdHlwZSA9IHRoaXMudW5wYWNrX3VpbnQ4KCk7XHJcbiAgaWYgKHR5cGUgPCAweDgwKSB7XHJcbiAgICByZXR1cm4gdHlwZTtcclxuICB9IGVsc2UgaWYgKCh0eXBlIF4gMHhlMCkgPCAweDIwKSB7XHJcbiAgICByZXR1cm4gKHR5cGUgXiAweGUwKSAtIDB4MjA7XHJcbiAgfVxyXG5cclxuICB2YXIgc2l6ZTtcclxuICBpZiAoKHNpemUgPSB0eXBlIF4gMHhhMCkgPD0gMHgwZikge1xyXG4gICAgcmV0dXJuIHRoaXMudW5wYWNrX3JhdyhzaXplKTtcclxuICB9IGVsc2UgaWYgKChzaXplID0gdHlwZSBeIDB4YjApIDw9IDB4MGYpIHtcclxuICAgIHJldHVybiB0aGlzLnVucGFja19zdHJpbmcoc2l6ZSk7XHJcbiAgfSBlbHNlIGlmICgoc2l6ZSA9IHR5cGUgXiAweDkwKSA8PSAweDBmKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bnBhY2tfYXJyYXkoc2l6ZSk7XHJcbiAgfSBlbHNlIGlmICgoc2l6ZSA9IHR5cGUgXiAweDgwKSA8PSAweDBmKSB7XHJcbiAgICByZXR1cm4gdGhpcy51bnBhY2tfbWFwKHNpemUpO1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIDB4YzA6XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgY2FzZSAweGMxOlxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgY2FzZSAweGMyOlxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBjYXNlIDB4YzM6XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgY2FzZSAweGNhOlxyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfZmxvYXQoKTtcclxuICAgIGNhc2UgMHhjYjpcclxuICAgICAgcmV0dXJuIHRoaXMudW5wYWNrX2RvdWJsZSgpO1xyXG4gICAgY2FzZSAweGNjOlxyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfdWludDgoKTtcclxuICAgIGNhc2UgMHhjZDpcclxuICAgICAgcmV0dXJuIHRoaXMudW5wYWNrX3VpbnQxNigpO1xyXG4gICAgY2FzZSAweGNlOlxyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfdWludDMyKCk7XHJcbiAgICBjYXNlIDB4Y2Y6XHJcbiAgICAgIHJldHVybiB0aGlzLnVucGFja191aW50NjQoKTtcclxuICAgIGNhc2UgMHhkMDpcclxuICAgICAgcmV0dXJuIHRoaXMudW5wYWNrX2ludDgoKTtcclxuICAgIGNhc2UgMHhkMTpcclxuICAgICAgcmV0dXJuIHRoaXMudW5wYWNrX2ludDE2KCk7XHJcbiAgICBjYXNlIDB4ZDI6XHJcbiAgICAgIHJldHVybiB0aGlzLnVucGFja19pbnQzMigpO1xyXG4gICAgY2FzZSAweGQzOlxyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfaW50NjQoKTtcclxuICAgIGNhc2UgMHhkNDpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNhc2UgMHhkNTpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNhc2UgMHhkNjpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNhc2UgMHhkNzpcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNhc2UgMHhkODpcclxuICAgICAgc2l6ZSA9IHRoaXMudW5wYWNrX3VpbnQxNigpO1xyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfc3RyaW5nKHNpemUpO1xyXG4gICAgY2FzZSAweGQ5OlxyXG4gICAgICBzaXplID0gdGhpcy51bnBhY2tfdWludDMyKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLnVucGFja19zdHJpbmcoc2l6ZSk7XHJcbiAgICBjYXNlIDB4ZGE6XHJcbiAgICAgIHNpemUgPSB0aGlzLnVucGFja191aW50MTYoKTtcclxuICAgICAgcmV0dXJuIHRoaXMudW5wYWNrX3JhdyhzaXplKTtcclxuICAgIGNhc2UgMHhkYjpcclxuICAgICAgc2l6ZSA9IHRoaXMudW5wYWNrX3VpbnQzMigpO1xyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfcmF3KHNpemUpO1xyXG4gICAgY2FzZSAweGRjOlxyXG4gICAgICBzaXplID0gdGhpcy51bnBhY2tfdWludDE2KCk7XHJcbiAgICAgIHJldHVybiB0aGlzLnVucGFja19hcnJheShzaXplKTtcclxuICAgIGNhc2UgMHhkZDpcclxuICAgICAgc2l6ZSA9IHRoaXMudW5wYWNrX3VpbnQzMigpO1xyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfYXJyYXkoc2l6ZSk7XHJcbiAgICBjYXNlIDB4ZGU6XHJcbiAgICAgIHNpemUgPSB0aGlzLnVucGFja191aW50MTYoKTtcclxuICAgICAgcmV0dXJuIHRoaXMudW5wYWNrX21hcChzaXplKTtcclxuICAgIGNhc2UgMHhkZjpcclxuICAgICAgc2l6ZSA9IHRoaXMudW5wYWNrX3VpbnQzMigpO1xyXG4gICAgICByZXR1cm4gdGhpcy51bnBhY2tfbWFwKHNpemUpO1xyXG4gIH1cclxufTtcclxuXHJcblVucGFja2VyLnByb3RvdHlwZS51bnBhY2tfdWludDggPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGJ5dGUgPSB0aGlzLmRhdGFWaWV3W3RoaXMuaW5kZXhdICYgMHhmZjtcclxuICB0aGlzLmluZGV4Kys7XHJcbiAgcmV0dXJuIGJ5dGU7XHJcbn07XHJcblxyXG5VbnBhY2tlci5wcm90b3R5cGUudW5wYWNrX3VpbnQxNiA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWQoMik7XHJcbiAgdmFyIHVpbnQxNiA9XHJcbiAgICAoKGJ5dGVzWzBdICYgMHhmZikgKiAyNTYpICsgKGJ5dGVzWzFdICYgMHhmZik7XHJcbiAgdGhpcy5pbmRleCArPSAyO1xyXG4gIHJldHVybiB1aW50MTY7XHJcbn07XHJcblxyXG5VbnBhY2tlci5wcm90b3R5cGUudW5wYWNrX3VpbnQzMiA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWQoNCk7XHJcbiAgdmFyIHVpbnQzMiA9XHJcbiAgICAoKGJ5dGVzWzBdICogMjU2ICtcclxuICAgICAgYnl0ZXNbMV0pICogMjU2ICtcclxuICAgICAgYnl0ZXNbMl0pICogMjU2ICtcclxuICAgIGJ5dGVzWzNdO1xyXG4gIHRoaXMuaW5kZXggKz0gNDtcclxuICByZXR1cm4gdWludDMyO1xyXG59O1xyXG5cclxuVW5wYWNrZXIucHJvdG90eXBlLnVucGFja191aW50NjQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGJ5dGVzID0gdGhpcy5yZWFkKDgpO1xyXG4gIHZhciB1aW50NjQgPVxyXG4gICAgKCgoKCgoYnl0ZXNbMF0gKiAyNTYgK1xyXG4gICAgICBieXRlc1sxXSkgKiAyNTYgK1xyXG4gICAgICBieXRlc1syXSkgKiAyNTYgK1xyXG4gICAgICBieXRlc1szXSkgKiAyNTYgK1xyXG4gICAgICBieXRlc1s0XSkgKiAyNTYgK1xyXG4gICAgICBieXRlc1s1XSkgKiAyNTYgK1xyXG4gICAgICBieXRlc1s2XSkgKiAyNTYgK1xyXG4gICAgYnl0ZXNbN107XHJcbiAgdGhpcy5pbmRleCArPSA4O1xyXG4gIHJldHVybiB1aW50NjQ7XHJcbn07XHJcblxyXG5VbnBhY2tlci5wcm90b3R5cGUudW5wYWNrX2ludDggPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHVpbnQ4ID0gdGhpcy51bnBhY2tfdWludDgoKTtcclxuICByZXR1cm4gKHVpbnQ4IDwgMHg4MCkgPyB1aW50OCA6IHVpbnQ4IC0gKDEgPDwgOCk7XHJcbn07XHJcblxyXG5VbnBhY2tlci5wcm90b3R5cGUudW5wYWNrX2ludDE2ID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciB1aW50MTYgPSB0aGlzLnVucGFja191aW50MTYoKTtcclxuICByZXR1cm4gKHVpbnQxNiA8IDB4ODAwMCkgPyB1aW50MTYgOiB1aW50MTYgLSAoMSA8PCAxNik7XHJcbn07XHJcblxyXG5VbnBhY2tlci5wcm90b3R5cGUudW5wYWNrX2ludDMyID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciB1aW50MzIgPSB0aGlzLnVucGFja191aW50MzIoKTtcclxuICByZXR1cm4gKHVpbnQzMiA8IE1hdGgucG93KDIsIDMxKSkgPyB1aW50MzJcclxuICAgIDogdWludDMyIC0gTWF0aC5wb3coMiwgMzIpO1xyXG59O1xyXG5cclxuVW5wYWNrZXIucHJvdG90eXBlLnVucGFja19pbnQ2NCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdWludDY0ID0gdGhpcy51bnBhY2tfdWludDY0KCk7XHJcbiAgcmV0dXJuICh1aW50NjQgPCBNYXRoLnBvdygyLCA2MykpID8gdWludDY0XHJcbiAgICA6IHVpbnQ2NCAtIE1hdGgucG93KDIsIDY0KTtcclxufTtcclxuXHJcblVucGFja2VyLnByb3RvdHlwZS51bnBhY2tfcmF3ID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICBpZiAodGhpcy5sZW5ndGggPCB0aGlzLmluZGV4ICsgc2l6ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdCaW5hcnlQYWNrRmFpbHVyZTogaW5kZXggaXMgb3V0IG9mIHJhbmdlJyArXHJcbiAgICAgICcgJyArIHRoaXMuaW5kZXggKyAnICcgKyBzaXplICsgJyAnICsgdGhpcy5sZW5ndGgpO1xyXG4gIH1cclxuICB2YXIgYnVmID0gdGhpcy5kYXRhQnVmZmVyLnNsaWNlKHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyBzaXplKTtcclxuICB0aGlzLmluZGV4ICs9IHNpemU7XHJcblxyXG4gIC8vIGJ1ZiA9IHV0aWwuYnVmZmVyVG9TdHJpbmcoYnVmKTtcclxuXHJcbiAgcmV0dXJuIGJ1ZjtcclxufTtcclxuXHJcblVucGFja2VyLnByb3RvdHlwZS51bnBhY2tfc3RyaW5nID0gZnVuY3Rpb24gKHNpemUpIHtcclxuICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWQoc2l6ZSk7XHJcbiAgdmFyIGkgPSAwO1xyXG4gIHZhciBzdHIgPSAnJztcclxuICB2YXIgYztcclxuICB2YXIgY29kZTtcclxuXHJcbiAgd2hpbGUgKGkgPCBzaXplKSB7XHJcbiAgICBjID0gYnl0ZXNbaV07XHJcbiAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcclxuICAgICAgaSsrO1xyXG4gICAgfSBlbHNlIGlmICgoYyBeIDB4YzApIDwgMzIpIHtcclxuICAgICAgY29kZSA9ICgoYyBeIDB4YzApIDw8IDYpIHwgKGJ5dGVzW2kgKyAxXSAmIDYzKTtcclxuICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSk7XHJcbiAgICAgIGkgKz0gMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvZGUgPSAoKGMgJiAxNSkgPDwgMTIpIHwgKChieXRlc1tpICsgMV0gJiA2MykgPDwgNikgfFxyXG4gICAgICAgIChieXRlc1tpICsgMl0gJiA2Myk7XHJcbiAgICAgIHN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpO1xyXG4gICAgICBpICs9IDM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGlzLmluZGV4ICs9IHNpemU7XHJcbiAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcblVucGFja2VyLnByb3RvdHlwZS51bnBhY2tfYXJyYXkgPSBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gIHZhciBvYmplY3RzID0gbmV3IEFycmF5KHNpemUpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICBvYmplY3RzW2ldID0gdGhpcy51bnBhY2soKTtcclxuICB9XHJcbiAgcmV0dXJuIG9iamVjdHM7XHJcbn07XHJcblxyXG5VbnBhY2tlci5wcm90b3R5cGUudW5wYWNrX21hcCA9IGZ1bmN0aW9uIChzaXplKSB7XHJcbiAgdmFyIG1hcCA9IHt9O1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICB2YXIga2V5ID0gdGhpcy51bnBhY2soKTtcclxuICAgIHZhciB2YWx1ZSA9IHRoaXMudW5wYWNrKCk7XHJcbiAgICBtYXBba2V5XSA9IHZhbHVlO1xyXG4gIH1cclxuICByZXR1cm4gbWFwO1xyXG59O1xyXG5cclxuVW5wYWNrZXIucHJvdG90eXBlLnVucGFja19mbG9hdCA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgdWludDMyID0gdGhpcy51bnBhY2tfdWludDMyKCk7XHJcbiAgdmFyIHNpZ24gPSB1aW50MzIgPj4gMzE7XHJcbiAgdmFyIGV4cCA9ICgodWludDMyID4+IDIzKSAmIDB4ZmYpIC0gMTI3O1xyXG4gIHZhciBmcmFjdGlvbiA9ICh1aW50MzIgJiAweDdmZmZmZikgfCAweDgwMDAwMDtcclxuICByZXR1cm4gKHNpZ24gPT09IDAgPyAxIDogLTEpICpcclxuICAgIGZyYWN0aW9uICogTWF0aC5wb3coMiwgZXhwIC0gMjMpO1xyXG59O1xyXG5cclxuVW5wYWNrZXIucHJvdG90eXBlLnVucGFja19kb3VibGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGgzMiA9IHRoaXMudW5wYWNrX3VpbnQzMigpO1xyXG4gIHZhciBsMzIgPSB0aGlzLnVucGFja191aW50MzIoKTtcclxuICB2YXIgc2lnbiA9IGgzMiA+PiAzMTtcclxuICB2YXIgZXhwID0gKChoMzIgPj4gMjApICYgMHg3ZmYpIC0gMTAyMztcclxuICB2YXIgaGZyYWMgPSAoaDMyICYgMHhmZmZmZikgfCAweDEwMDAwMDtcclxuICB2YXIgZnJhYyA9IGhmcmFjICogTWF0aC5wb3coMiwgZXhwIC0gMjApICtcclxuICAgIGwzMiAqIE1hdGgucG93KDIsIGV4cCAtIDUyKTtcclxuICByZXR1cm4gKHNpZ24gPT09IDAgPyAxIDogLTEpICogZnJhYztcclxufTtcclxuXHJcblVucGFja2VyLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gIHZhciBqID0gdGhpcy5pbmRleDtcclxuICBpZiAoaiArIGxlbmd0aCA8PSB0aGlzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVZpZXcuc3ViYXJyYXkoaiwgaiArIGxlbmd0aCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQmluYXJ5UGFja0ZhaWx1cmU6IHJlYWQgaW5kZXggb3V0IG9mIHJhbmdlJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gUGFja2VyICgpIHtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIgPSBuZXcgQnVmZmVyQnVpbGRlcigpO1xyXG59XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLmdldEJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5idWZmZXJCdWlsZGVyLmdldEJ1ZmZlcigpO1xyXG59O1xyXG5cclxuUGFja2VyLnByb3RvdHlwZS5wYWNrID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgdmFyIHR5cGUgPSB0eXBlb2YgKHZhbHVlKTtcclxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHRoaXMucGFja19zdHJpbmcodmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgIGlmIChNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5wYWNrX2ludGVnZXIodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYWNrX2RvdWJsZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnYm9vbGVhbicpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDB4YzMpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgweGMyKTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDB4YzApO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDB4YzApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdmFsdWUuY29uc3RydWN0b3I7XHJcbiAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBBcnJheSkge1xyXG4gICAgICAgIHRoaXMucGFja19hcnJheSh2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3IgPT0gQmxvYiB8fCBjb25zdHJ1Y3RvciA9PSBGaWxlIHx8IHZhbHVlIGluc3RhbmNlb2YgQmxvYiB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICB0aGlzLnBhY2tfYmluKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIGlmIChjb25zdHJ1Y3RvciA9PSBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgIGlmIChiaW5hcnlGZWF0dXJlcy51c2VBcnJheUJ1ZmZlclZpZXcpIHtcclxuICAgICAgICAgIHRoaXMucGFja19iaW4obmV3IFVpbnQ4QXJyYXkodmFsdWUpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5wYWNrX2Jpbih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKCdCWVRFU19QRVJfRUxFTUVOVCcgaW4gdmFsdWUpIHtcclxuICAgICAgICBpZiAoYmluYXJ5RmVhdHVyZXMudXNlQXJyYXlCdWZmZXJWaWV3KSB7XHJcbiAgICAgICAgICB0aGlzLnBhY2tfYmluKG5ldyBVaW50OEFycmF5KHZhbHVlLmJ1ZmZlcikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnBhY2tfYmluKHZhbHVlLmJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKChjb25zdHJ1Y3RvciA9PSBPYmplY3QpIHx8IChjb25zdHJ1Y3Rvci50b1N0cmluZygpLnN0YXJ0c1dpdGgoJ2NsYXNzJykpKSB7XHJcbiAgICAgICAgdGhpcy5wYWNrX29iamVjdCh2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29uc3RydWN0b3IgPT0gRGF0ZSkge1xyXG4gICAgICAgIHRoaXMucGFja19zdHJpbmcodmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlLnRvQmluYXJ5UGFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQodmFsdWUudG9CaW5hcnlQYWNrKCkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVHlwZSBcIicgKyBjb25zdHJ1Y3Rvci50b1N0cmluZygpICsgJ1wiIG5vdCB5ZXQgc3VwcG9ydGVkJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdUeXBlIFwiJyArIHR5cGUgKyAnXCIgbm90IHlldCBzdXBwb3J0ZWQnKTtcclxuICB9XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmZsdXNoKCk7XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfYmluID0gZnVuY3Rpb24gKGJsb2IpIHtcclxuICB2YXIgbGVuZ3RoID0gYmxvYi5sZW5ndGggfHwgYmxvYi5ieXRlTGVuZ3RoIHx8IGJsb2Iuc2l6ZTtcclxuICBpZiAobGVuZ3RoIDw9IDB4MGYpIHtcclxuICAgIHRoaXMucGFja191aW50OCgweGEwICsgbGVuZ3RoKTtcclxuICB9IGVsc2UgaWYgKGxlbmd0aCA8PSAweGZmZmYpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhkYSk7XHJcbiAgICB0aGlzLnBhY2tfdWludDE2KGxlbmd0aCk7XHJcbiAgfSBlbHNlIGlmIChsZW5ndGggPD0gMHhmZmZmZmZmZikge1xyXG4gICAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgweGRiKTtcclxuICAgIHRoaXMucGFja191aW50MzIobGVuZ3RoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGxlbmd0aCcpO1xyXG4gIH1cclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKGJsb2IpO1xyXG59O1xyXG5cclxuUGFja2VyLnByb3RvdHlwZS5wYWNrX3N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICB2YXIgbGVuZ3RoID0gdXRmOExlbmd0aChzdHIpO1xyXG5cclxuICBpZiAobGVuZ3RoIDw9IDB4MGYpIHtcclxuICAgIHRoaXMucGFja191aW50OCgweGIwICsgbGVuZ3RoKTtcclxuICB9IGVsc2UgaWYgKGxlbmd0aCA8PSAweGZmZmYpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhkOCk7XHJcbiAgICB0aGlzLnBhY2tfdWludDE2KGxlbmd0aCk7XHJcbiAgfSBlbHNlIGlmIChsZW5ndGggPD0gMHhmZmZmZmZmZikge1xyXG4gICAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgweGQ5KTtcclxuICAgIHRoaXMucGFja191aW50MzIobGVuZ3RoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGxlbmd0aCcpO1xyXG4gIH1cclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKHN0cik7XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfYXJyYXkgPSBmdW5jdGlvbiAoYXJ5KSB7XHJcbiAgdmFyIGxlbmd0aCA9IGFyeS5sZW5ndGg7XHJcbiAgaWYgKGxlbmd0aCA8PSAweDBmKSB7XHJcbiAgICB0aGlzLnBhY2tfdWludDgoMHg5MCArIGxlbmd0aCk7XHJcbiAgfSBlbHNlIGlmIChsZW5ndGggPD0gMHhmZmZmKSB7XHJcbiAgICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDB4ZGMpO1xyXG4gICAgdGhpcy5wYWNrX3VpbnQxNihsZW5ndGgpO1xyXG4gIH0gZWxzZSBpZiAobGVuZ3RoIDw9IDB4ZmZmZmZmZmYpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhkZCk7XHJcbiAgICB0aGlzLnBhY2tfdWludDMyKGxlbmd0aCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBsZW5ndGgnKTtcclxuICB9XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgdGhpcy5wYWNrKGFyeVtpXSk7XHJcbiAgfVxyXG59O1xyXG5cclxuUGFja2VyLnByb3RvdHlwZS5wYWNrX2ludGVnZXIgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgaWYgKG51bSA+PSAtMHgyMCAmJiBudW0gPD0gMHg3Zikge1xyXG4gICAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZChudW0gJiAweGZmKTtcclxuICB9IGVsc2UgaWYgKG51bSA+PSAweDAwICYmIG51bSA8PSAweGZmKSB7XHJcbiAgICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDB4Y2MpO1xyXG4gICAgdGhpcy5wYWNrX3VpbnQ4KG51bSk7XHJcbiAgfSBlbHNlIGlmIChudW0gPj0gLTB4ODAgJiYgbnVtIDw9IDB4N2YpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhkMCk7XHJcbiAgICB0aGlzLnBhY2tfaW50OChudW0pO1xyXG4gIH0gZWxzZSBpZiAobnVtID49IDB4MDAwMCAmJiBudW0gPD0gMHhmZmZmKSB7XHJcbiAgICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKDB4Y2QpO1xyXG4gICAgdGhpcy5wYWNrX3VpbnQxNihudW0pO1xyXG4gIH0gZWxzZSBpZiAobnVtID49IC0weDgwMDAgJiYgbnVtIDw9IDB4N2ZmZikge1xyXG4gICAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgweGQxKTtcclxuICAgIHRoaXMucGFja19pbnQxNihudW0pO1xyXG4gIH0gZWxzZSBpZiAobnVtID49IDB4MDAwMDAwMDAgJiYgbnVtIDw9IDB4ZmZmZmZmZmYpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhjZSk7XHJcbiAgICB0aGlzLnBhY2tfdWludDMyKG51bSk7XHJcbiAgfSBlbHNlIGlmIChudW0gPj0gLTB4ODAwMDAwMDAgJiYgbnVtIDw9IDB4N2ZmZmZmZmYpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhkMik7XHJcbiAgICB0aGlzLnBhY2tfaW50MzIobnVtKTtcclxuICB9IGVsc2UgaWYgKG51bSA+PSAtMHg4MDAwMDAwMDAwMDAwMDAwICYmIG51bSA8PSAweDdGRkZGRkZGRkZGRkZGRkYpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhkMyk7XHJcbiAgICB0aGlzLnBhY2tfaW50NjQobnVtKTtcclxuICB9IGVsc2UgaWYgKG51bSA+PSAweDAwMDAwMDAwMDAwMDAwMDAgJiYgbnVtIDw9IDB4RkZGRkZGRkZGRkZGRkZGRikge1xyXG4gICAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgweGNmKTtcclxuICAgIHRoaXMucGFja191aW50NjQobnVtKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGludGVnZXInKTtcclxuICB9XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfZG91YmxlID0gZnVuY3Rpb24gKG51bSkge1xyXG4gIHZhciBzaWduID0gMDtcclxuICBpZiAobnVtIDwgMCkge1xyXG4gICAgc2lnbiA9IDE7XHJcbiAgICBudW0gPSAtbnVtO1xyXG4gIH1cclxuICB2YXIgZXhwID0gTWF0aC5mbG9vcihNYXRoLmxvZyhudW0pIC8gTWF0aC5MTjIpO1xyXG4gIHZhciBmcmFjMCA9IG51bSAvIE1hdGgucG93KDIsIGV4cCkgLSAxO1xyXG4gIHZhciBmcmFjMSA9IE1hdGguZmxvb3IoZnJhYzAgKiBNYXRoLnBvdygyLCA1MikpO1xyXG4gIHZhciBiMzIgPSBNYXRoLnBvdygyLCAzMik7XHJcbiAgdmFyIGgzMiA9IChzaWduIDw8IDMxKSB8ICgoZXhwICsgMTAyMykgPDwgMjApIHxcclxuICAgIChmcmFjMSAvIGIzMikgJiAweDBmZmZmZjtcclxuICB2YXIgbDMyID0gZnJhYzEgJSBiMzI7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgweGNiKTtcclxuICB0aGlzLnBhY2tfaW50MzIoaDMyKTtcclxuICB0aGlzLnBhY2tfaW50MzIobDMyKTtcclxufTtcclxuXHJcblBhY2tlci5wcm90b3R5cGUucGFja19vYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xyXG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBpZiAobGVuZ3RoIDw9IDB4MGYpIHtcclxuICAgIHRoaXMucGFja191aW50OCgweDgwICsgbGVuZ3RoKTtcclxuICB9IGVsc2UgaWYgKGxlbmd0aCA8PSAweGZmZmYpIHtcclxuICAgIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoMHhkZSk7XHJcbiAgICB0aGlzLnBhY2tfdWludDE2KGxlbmd0aCk7XHJcbiAgfSBlbHNlIGlmIChsZW5ndGggPD0gMHhmZmZmZmZmZikge1xyXG4gICAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgweGRmKTtcclxuICAgIHRoaXMucGFja191aW50MzIobGVuZ3RoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGxlbmd0aCcpO1xyXG4gIH1cclxuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xyXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4gICAgICB0aGlzLnBhY2socHJvcCk7XHJcbiAgICAgIHRoaXMucGFjayhvYmpbcHJvcF0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblBhY2tlci5wcm90b3R5cGUucGFja191aW50OCA9IGZ1bmN0aW9uIChudW0pIHtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKG51bSk7XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfdWludDE2ID0gZnVuY3Rpb24gKG51bSkge1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQobnVtID4+IDgpO1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQobnVtICYgMHhmZik7XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfdWludDMyID0gZnVuY3Rpb24gKG51bSkge1xyXG4gIHZhciBuID0gbnVtICYgMHhmZmZmZmZmZjtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChuICYgMHhmZjAwMDAwMCkgPj4+IDI0KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChuICYgMHgwMGZmMDAwMCkgPj4+IDE2KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChuICYgMHgwMDAwZmYwMCkgPj4+IDgpO1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKG4gJiAweDAwMDAwMGZmKSk7XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfdWludDY0ID0gZnVuY3Rpb24gKG51bSkge1xyXG4gIHZhciBoaWdoID0gbnVtIC8gTWF0aC5wb3coMiwgMzIpO1xyXG4gIHZhciBsb3cgPSBudW0gJSBNYXRoLnBvdygyLCAzMik7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoaGlnaCAmIDB4ZmYwMDAwMDApID4+PiAyNCk7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoaGlnaCAmIDB4MDBmZjAwMDApID4+PiAxNik7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgoaGlnaCAmIDB4MDAwMGZmMDApID4+PiA4KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChoaWdoICYgMHgwMDAwMDBmZikpO1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKGxvdyAmIDB4ZmYwMDAwMDApID4+PiAyNCk7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgobG93ICYgMHgwMGZmMDAwMCkgPj4+IDE2KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChsb3cgJiAweDAwMDBmZjAwKSA+Pj4gOCk7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgobG93ICYgMHgwMDAwMDBmZikpO1xyXG59O1xyXG5cclxuUGFja2VyLnByb3RvdHlwZS5wYWNrX2ludDggPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZChudW0gJiAweGZmKTtcclxufTtcclxuXHJcblBhY2tlci5wcm90b3R5cGUucGFja19pbnQxNiA9IGZ1bmN0aW9uIChudW0pIHtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChudW0gJiAweGZmMDApID4+IDgpO1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQobnVtICYgMHhmZik7XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfaW50MzIgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgobnVtID4+PiAyNCkgJiAweGZmKTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChudW0gJiAweDAwZmYwMDAwKSA+Pj4gMTYpO1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKG51bSAmIDB4MDAwMGZmMDApID4+PiA4KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChudW0gJiAweDAwMDAwMGZmKSk7XHJcbn07XHJcblxyXG5QYWNrZXIucHJvdG90eXBlLnBhY2tfaW50NjQgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgdmFyIGhpZ2ggPSBNYXRoLmZsb29yKG51bSAvIE1hdGgucG93KDIsIDMyKSk7XHJcbiAgdmFyIGxvdyA9IG51bSAlIE1hdGgucG93KDIsIDMyKTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChoaWdoICYgMHhmZjAwMDAwMCkgPj4+IDI0KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChoaWdoICYgMHgwMGZmMDAwMCkgPj4+IDE2KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChoaWdoICYgMHgwMDAwZmYwMCkgPj4+IDgpO1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKGhpZ2ggJiAweDAwMDAwMGZmKSk7XHJcbiAgdGhpcy5idWZmZXJCdWlsZGVyLmFwcGVuZCgobG93ICYgMHhmZjAwMDAwMCkgPj4+IDI0KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChsb3cgJiAweDAwZmYwMDAwKSA+Pj4gMTYpO1xyXG4gIHRoaXMuYnVmZmVyQnVpbGRlci5hcHBlbmQoKGxvdyAmIDB4MDAwMGZmMDApID4+PiA4KTtcclxuICB0aGlzLmJ1ZmZlckJ1aWxkZXIuYXBwZW5kKChsb3cgJiAweDAwMDAwMGZmKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfdXRmOFJlcGxhY2UgKG0pIHtcclxuICB2YXIgY29kZSA9IG0uY2hhckNvZGVBdCgwKTtcclxuXHJcbiAgaWYgKGNvZGUgPD0gMHg3ZmYpIHJldHVybiAnMDAnO1xyXG4gIGlmIChjb2RlIDw9IDB4ZmZmZikgcmV0dXJuICcwMDAnO1xyXG4gIGlmIChjb2RlIDw9IDB4MWZmZmZmKSByZXR1cm4gJzAwMDAnO1xyXG4gIGlmIChjb2RlIDw9IDB4M2ZmZmZmZikgcmV0dXJuICcwMDAwMCc7XHJcbiAgcmV0dXJuICcwMDAwMDAnO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1dGY4TGVuZ3RoIChzdHIpIHtcclxuICBpZiAoc3RyLmxlbmd0aCA+IDYwMCkge1xyXG4gICAgLy8gQmxvYiBtZXRob2QgZmFzdGVyIGZvciBsYXJnZSBzdHJpbmdzXHJcbiAgICByZXR1cm4gKG5ldyBCbG9iKFtzdHJdKSkuc2l6ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXlxcdTAwMDAtXFx1MDA3Rl0vZywgX3V0ZjhSZXBsYWNlKS5sZW5ndGg7XHJcbiAgfVxyXG59XHJcbiIsInZhciBiaW5hcnlGZWF0dXJlcyA9IHt9O1xyXG5iaW5hcnlGZWF0dXJlcy51c2VCbG9iQnVpbGRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdHJ5IHtcclxuICAgIG5ldyBCbG9iKFtdKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG5iaW5hcnlGZWF0dXJlcy51c2VBcnJheUJ1ZmZlclZpZXcgPSAhYmluYXJ5RmVhdHVyZXMudXNlQmxvYkJ1aWxkZXIgJiYgKGZ1bmN0aW9uICgpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIChuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoW10pXSkpLnNpemUgPT09IDA7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuYmluYXJ5RmVhdHVyZXMgPSBiaW5hcnlGZWF0dXJlcztcclxudmFyIEJsb2JCdWlsZGVyID0gbW9kdWxlLmV4cG9ydHMuQmxvYkJ1aWxkZXI7XHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEJsb2JCdWlsZGVyID0gbW9kdWxlLmV4cG9ydHMuQmxvYkJ1aWxkZXIgPSB3aW5kb3cuV2ViS2l0QmxvYkJ1aWxkZXIgfHxcclxuICAgIHdpbmRvdy5Nb3pCbG9iQnVpbGRlciB8fCB3aW5kb3cuTVNCbG9iQnVpbGRlciB8fCB3aW5kb3cuQmxvYkJ1aWxkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1ZmZlckJ1aWxkZXIgKCkge1xyXG4gIHRoaXMuX3BpZWNlcyA9IFtdO1xyXG4gIHRoaXMuX3BhcnRzID0gW107XHJcbn1cclxuXHJcbkJ1ZmZlckJ1aWxkZXIucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xyXG4gICAgdGhpcy5fcGllY2VzLnB1c2goZGF0YSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuZmx1c2goKTtcclxuICAgIHRoaXMuX3BhcnRzLnB1c2goZGF0YSk7XHJcbiAgfVxyXG59O1xyXG5cclxuQnVmZmVyQnVpbGRlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgaWYgKHRoaXMuX3BpZWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fcGllY2VzKTtcclxuICAgIGlmICghYmluYXJ5RmVhdHVyZXMudXNlQXJyYXlCdWZmZXJWaWV3KSB7XHJcbiAgICAgIGJ1ZiA9IGJ1Zi5idWZmZXI7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wYXJ0cy5wdXNoKGJ1Zik7XHJcbiAgICB0aGlzLl9waWVjZXMgPSBbXTtcclxuICB9XHJcbn07XHJcblxyXG5CdWZmZXJCdWlsZGVyLnByb3RvdHlwZS5nZXRCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5mbHVzaCgpO1xyXG4gIGlmIChiaW5hcnlGZWF0dXJlcy51c2VCbG9iQnVpbGRlcikge1xyXG4gICAgdmFyIGJ1aWxkZXIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHRoaXMuX3BhcnRzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcclxuICAgICAgYnVpbGRlci5hcHBlbmQodGhpcy5fcGFydHNbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJ1aWxkZXIuZ2V0QmxvYigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbmV3IEJsb2IodGhpcy5fcGFydHMpO1xyXG4gIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLkJ1ZmZlckJ1aWxkZXIgPSBCdWZmZXJCdWlsZGVyO1xyXG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNyBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbiAvKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFNEUFV0aWxzID0gcmVxdWlyZSgnc2RwJyk7XG5cbmZ1bmN0aW9uIGZpeFN0YXRzVHlwZShzdGF0KSB7XG4gIHJldHVybiB7XG4gICAgaW5ib3VuZHJ0cDogJ2luYm91bmQtcnRwJyxcbiAgICBvdXRib3VuZHJ0cDogJ291dGJvdW5kLXJ0cCcsXG4gICAgY2FuZGlkYXRlcGFpcjogJ2NhbmRpZGF0ZS1wYWlyJyxcbiAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgcmVtb3RlY2FuZGlkYXRlOiAncmVtb3RlLWNhbmRpZGF0ZSdcbiAgfVtzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbn1cblxuZnVuY3Rpb24gd3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsIGNhcHMsIHR5cGUsIHN0cmVhbSwgZHRsc1JvbGUpIHtcbiAgdmFyIHNkcCA9IFNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24odHJhbnNjZWl2ZXIua2luZCwgY2Fwcyk7XG5cbiAgLy8gTWFwIElDRSBwYXJhbWV0ZXJzICh1ZnJhZywgcHdkKSB0byBTRFAuXG4gIHNkcCArPSBTRFBVdGlscy53cml0ZUljZVBhcmFtZXRlcnMoXG4gICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5nZXRMb2NhbFBhcmFtZXRlcnMoKSk7XG5cbiAgLy8gTWFwIERUTFMgcGFyYW1ldGVycyB0byBTRFAuXG4gIHNkcCArPSBTRFBVdGlscy53cml0ZUR0bHNQYXJhbWV0ZXJzKFxuICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5nZXRMb2NhbFBhcmFtZXRlcnMoKSxcbiAgICAgIHR5cGUgPT09ICdvZmZlcicgPyAnYWN0cGFzcycgOiBkdGxzUm9sZSB8fCAnYWN0aXZlJyk7XG5cbiAgc2RwICs9ICdhPW1pZDonICsgdHJhbnNjZWl2ZXIubWlkICsgJ1xcclxcbic7XG5cbiAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlciAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgIHNkcCArPSAnYT1zZW5kcmVjdlxcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgc2RwICs9ICdhPXNlbmRvbmx5XFxyXFxuJztcbiAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgIHNkcCArPSAnYT1yZWN2b25seVxcclxcbic7XG4gIH0gZWxzZSB7XG4gICAgc2RwICs9ICdhPWluYWN0aXZlXFxyXFxuJztcbiAgfVxuXG4gIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICB2YXIgdHJhY2tJZCA9IHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5faW5pdGlhbFRyYWNrSWQgfHxcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnRyYWNrLmlkO1xuICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5faW5pdGlhbFRyYWNrSWQgPSB0cmFja0lkO1xuICAgIC8vIHNwZWMuXG4gICAgdmFyIG1zaWQgPSAnbXNpZDonICsgKHN0cmVhbSA/IHN0cmVhbS5pZCA6ICctJykgKyAnICcgK1xuICAgICAgICB0cmFja0lkICsgJ1xcclxcbic7XG4gICAgc2RwICs9ICdhPScgKyBtc2lkO1xuICAgIC8vIGZvciBDaHJvbWUuIExlZ2FjeSBzaG91bGQgbm8gbG9uZ2VyIGJlIHJlcXVpcmVkLlxuICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgK1xuICAgICAgICAnICcgKyBtc2lkO1xuXG4gICAgLy8gUlRYXG4gICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICAgJyAnICsgbXNpZDtcbiAgICAgIHNkcCArPSAnYT1zc3JjLWdyb3VwOkZJRCAnICtcbiAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgKyAnICcgK1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAgICdcXHJcXG4nO1xuICAgIH1cbiAgfVxuICAvLyBGSVhNRTogdGhpcyBzaG91bGQgYmUgd3JpdHRlbiBieSB3cml0ZVJ0cERlc2NyaXB0aW9uLlxuICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICtcbiAgICAgICcgY25hbWU6JyArIFNEUFV0aWxzLmxvY2FsQ05hbWUgKyAnXFxyXFxuJztcbiAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlciAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgJyBjbmFtZTonICsgU0RQVXRpbHMubG9jYWxDTmFtZSArICdcXHJcXG4nO1xuICB9XG4gIHJldHVybiBzZHA7XG59XG5cbi8vIEVkZ2UgZG9lcyBub3QgbGlrZVxuLy8gMSkgc3R1bjogZmlsdGVyZWQgYWZ0ZXIgMTQzOTMgdW5sZXNzID90cmFuc3BvcnQ9dWRwIGlzIHByZXNlbnRcbi8vIDIpIHR1cm46IHRoYXQgZG9lcyBub3QgaGF2ZSBhbGwgb2YgdHVybjpob3N0OnBvcnQ/dHJhbnNwb3J0PXVkcFxuLy8gMykgdHVybjogd2l0aCBpcHY2IGFkZHJlc3Nlc1xuLy8gNCkgdHVybjogb2NjdXJyaW5nIG11bGlwbGUgdGltZXNcbmZ1bmN0aW9uIGZpbHRlckljZVNlcnZlcnMoaWNlU2VydmVycywgZWRnZVZlcnNpb24pIHtcbiAgdmFyIGhhc1R1cm4gPSBmYWxzZTtcbiAgaWNlU2VydmVycyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaWNlU2VydmVycykpO1xuICByZXR1cm4gaWNlU2VydmVycy5maWx0ZXIoZnVuY3Rpb24oc2VydmVyKSB7XG4gICAgaWYgKHNlcnZlciAmJiAoc2VydmVyLnVybHMgfHwgc2VydmVyLnVybCkpIHtcbiAgICAgIHZhciB1cmxzID0gc2VydmVyLnVybHMgfHwgc2VydmVyLnVybDtcbiAgICAgIGlmIChzZXJ2ZXIudXJsICYmICFzZXJ2ZXIudXJscykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1JUQ0ljZVNlcnZlci51cmwgaXMgZGVwcmVjYXRlZCEgVXNlIHVybHMgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBpc1N0cmluZyA9IHR5cGVvZiB1cmxzID09PSAnc3RyaW5nJztcbiAgICAgIGlmIChpc1N0cmluZykge1xuICAgICAgICB1cmxzID0gW3VybHNdO1xuICAgICAgfVxuICAgICAgdXJscyA9IHVybHMuZmlsdGVyKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICB2YXIgdmFsaWRUdXJuID0gdXJsLmluZGV4T2YoJ3R1cm46JykgPT09IDAgJiZcbiAgICAgICAgICAgIHVybC5pbmRleE9mKCd0cmFuc3BvcnQ9dWRwJykgIT09IC0xICYmXG4gICAgICAgICAgICB1cmwuaW5kZXhPZigndHVybjpbJykgPT09IC0xICYmXG4gICAgICAgICAgICAhaGFzVHVybjtcblxuICAgICAgICBpZiAodmFsaWRUdXJuKSB7XG4gICAgICAgICAgaGFzVHVybiA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybC5pbmRleE9mKCdzdHVuOicpID09PSAwICYmIGVkZ2VWZXJzaW9uID49IDE0MzkzICYmXG4gICAgICAgICAgICB1cmwuaW5kZXhPZignP3RyYW5zcG9ydD11ZHAnKSA9PT0gLTE7XG4gICAgICB9KTtcblxuICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICBzZXJ2ZXIudXJscyA9IGlzU3RyaW5nID8gdXJsc1swXSA6IHVybHM7XG4gICAgICByZXR1cm4gISF1cmxzLmxlbmd0aDtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBEZXRlcm1pbmVzIHRoZSBpbnRlcnNlY3Rpb24gb2YgbG9jYWwgYW5kIHJlbW90ZSBjYXBhYmlsaXRpZXMuXG5mdW5jdGlvbiBnZXRDb21tb25DYXBhYmlsaXRpZXMobG9jYWxDYXBhYmlsaXRpZXMsIHJlbW90ZUNhcGFiaWxpdGllcykge1xuICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0ge1xuICAgIGNvZGVjczogW10sXG4gICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgZmVjTWVjaGFuaXNtczogW11cbiAgfTtcblxuICB2YXIgZmluZENvZGVjQnlQYXlsb2FkVHlwZSA9IGZ1bmN0aW9uKHB0LCBjb2RlY3MpIHtcbiAgICBwdCA9IHBhcnNlSW50KHB0LCAxMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2RlY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChjb2RlY3NbaV0ucGF5bG9hZFR5cGUgPT09IHB0IHx8XG4gICAgICAgICAgY29kZWNzW2ldLnByZWZlcnJlZFBheWxvYWRUeXBlID09PSBwdCkge1xuICAgICAgICByZXR1cm4gY29kZWNzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgcnR4Q2FwYWJpbGl0eU1hdGNoZXMgPSBmdW5jdGlvbihsUnR4LCByUnR4LCBsQ29kZWNzLCByQ29kZWNzKSB7XG4gICAgdmFyIGxDb2RlYyA9IGZpbmRDb2RlY0J5UGF5bG9hZFR5cGUobFJ0eC5wYXJhbWV0ZXJzLmFwdCwgbENvZGVjcyk7XG4gICAgdmFyIHJDb2RlYyA9IGZpbmRDb2RlY0J5UGF5bG9hZFR5cGUoclJ0eC5wYXJhbWV0ZXJzLmFwdCwgckNvZGVjcyk7XG4gICAgcmV0dXJuIGxDb2RlYyAmJiByQ29kZWMgJiZcbiAgICAgICAgbENvZGVjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gckNvZGVjLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihsQ29kZWMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW90ZUNhcGFiaWxpdGllcy5jb2RlY3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByQ29kZWMgPSByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzW2ldO1xuICAgICAgaWYgKGxDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgJiZcbiAgICAgICAgICBsQ29kZWMuY2xvY2tSYXRlID09PSByQ29kZWMuY2xvY2tSYXRlKSB7XG4gICAgICAgIGlmIChsQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSAncnR4JyAmJlxuICAgICAgICAgICAgbENvZGVjLnBhcmFtZXRlcnMgJiYgckNvZGVjLnBhcmFtZXRlcnMuYXB0KSB7XG4gICAgICAgICAgLy8gZm9yIFJUWCB3ZSBuZWVkIHRvIGZpbmQgdGhlIGxvY2FsIHJ0eCB0aGF0IGhhcyBhIGFwdFxuICAgICAgICAgIC8vIHdoaWNoIHBvaW50cyB0byB0aGUgc2FtZSBsb2NhbCBjb2RlYyBhcyB0aGUgcmVtb3RlIG9uZS5cbiAgICAgICAgICBpZiAoIXJ0eENhcGFiaWxpdHlNYXRjaGVzKGxDb2RlYywgckNvZGVjLFxuICAgICAgICAgICAgICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MsIHJlbW90ZUNhcGFiaWxpdGllcy5jb2RlY3MpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgckNvZGVjID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyQ29kZWMpKTsgLy8gZGVlcGNvcHlcbiAgICAgICAgLy8gbnVtYmVyIG9mIGNoYW5uZWxzIGlzIHRoZSBoaWdoZXN0IGNvbW1vbiBudW1iZXIgb2YgY2hhbm5lbHNcbiAgICAgICAgckNvZGVjLm51bUNoYW5uZWxzID0gTWF0aC5taW4obENvZGVjLm51bUNoYW5uZWxzLFxuICAgICAgICAgICAgckNvZGVjLm51bUNoYW5uZWxzKTtcbiAgICAgICAgLy8gcHVzaCByQ29kZWMgc28gd2UgcmVwbHkgd2l0aCBvZmZlcmVyIHBheWxvYWQgdHlwZVxuICAgICAgICBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLnB1c2gockNvZGVjKTtcblxuICAgICAgICAvLyBkZXRlcm1pbmUgY29tbW9uIGZlZWRiYWNrIG1lY2hhbmlzbXNcbiAgICAgICAgckNvZGVjLnJ0Y3BGZWVkYmFjayA9IHJDb2RlYy5ydGNwRmVlZGJhY2suZmlsdGVyKGZ1bmN0aW9uKGZiKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsQ29kZWMucnRjcEZlZWRiYWNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAobENvZGVjLnJ0Y3BGZWVkYmFja1tqXS50eXBlID09PSBmYi50eXBlICYmXG4gICAgICAgICAgICAgICAgbENvZGVjLnJ0Y3BGZWVkYmFja1tqXS5wYXJhbWV0ZXIgPT09IGZiLnBhcmFtZXRlcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRklYTUU6IGFsc28gbmVlZCB0byBkZXRlcm1pbmUgLnBhcmFtZXRlcnNcbiAgICAgICAgLy8gIHNlZSBodHRwczovL2dpdGh1Yi5jb20vb3BlbnBlZXIvb3J0Yy9pc3N1ZXMvNTY5XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgbG9jYWxDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGxIZWFkZXJFeHRlbnNpb24pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW90ZUNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zLmxlbmd0aDtcbiAgICAgICAgIGkrKykge1xuICAgICAgdmFyIHJIZWFkZXJFeHRlbnNpb24gPSByZW1vdGVDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9uc1tpXTtcbiAgICAgIGlmIChsSGVhZGVyRXh0ZW5zaW9uLnVyaSA9PT0gckhlYWRlckV4dGVuc2lvbi51cmkpIHtcbiAgICAgICAgY29tbW9uQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMucHVzaChySGVhZGVyRXh0ZW5zaW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBGSVhNRTogZmVjTWVjaGFuaXNtc1xuICByZXR1cm4gY29tbW9uQ2FwYWJpbGl0aWVzO1xufVxuXG4vLyBpcyBhY3Rpb249c2V0TG9jYWxEZXNjcmlwdGlvbiB3aXRoIHR5cGUgYWxsb3dlZCBpbiBzaWduYWxpbmdTdGF0ZVxuZnVuY3Rpb24gaXNBY3Rpb25BbGxvd2VkSW5TaWduYWxpbmdTdGF0ZShhY3Rpb24sIHR5cGUsIHNpZ25hbGluZ1N0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgb2ZmZXI6IHtcbiAgICAgIHNldExvY2FsRGVzY3JpcHRpb246IFsnc3RhYmxlJywgJ2hhdmUtbG9jYWwtb2ZmZXInXSxcbiAgICAgIHNldFJlbW90ZURlc2NyaXB0aW9uOiBbJ3N0YWJsZScsICdoYXZlLXJlbW90ZS1vZmZlciddXG4gICAgfSxcbiAgICBhbnN3ZXI6IHtcbiAgICAgIHNldExvY2FsRGVzY3JpcHRpb246IFsnaGF2ZS1yZW1vdGUtb2ZmZXInLCAnaGF2ZS1sb2NhbC1wcmFuc3dlciddLFxuICAgICAgc2V0UmVtb3RlRGVzY3JpcHRpb246IFsnaGF2ZS1sb2NhbC1vZmZlcicsICdoYXZlLXJlbW90ZS1wcmFuc3dlciddXG4gICAgfVxuICB9W3R5cGVdW2FjdGlvbl0uaW5kZXhPZihzaWduYWxpbmdTdGF0ZSkgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBtYXliZUFkZENhbmRpZGF0ZShpY2VUcmFuc3BvcnQsIGNhbmRpZGF0ZSkge1xuICAvLyBFZGdlJ3MgaW50ZXJuYWwgcmVwcmVzZW50YXRpb24gYWRkcyBzb21lIGZpZWxkcyB0aGVyZWZvcmVcbiAgLy8gbm90IGFsbCBmaWVsZNGVIGFyZSB0YWtlbiBpbnRvIGFjY291bnQuXG4gIHZhciBhbHJlYWR5QWRkZWQgPSBpY2VUcmFuc3BvcnQuZ2V0UmVtb3RlQ2FuZGlkYXRlcygpXG4gICAgICAuZmluZChmdW5jdGlvbihyZW1vdGVDYW5kaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZS5mb3VuZGF0aW9uID09PSByZW1vdGVDYW5kaWRhdGUuZm91bmRhdGlvbiAmJlxuICAgICAgICAgICAgY2FuZGlkYXRlLmlwID09PSByZW1vdGVDYW5kaWRhdGUuaXAgJiZcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5wb3J0ID09PSByZW1vdGVDYW5kaWRhdGUucG9ydCAmJlxuICAgICAgICAgICAgY2FuZGlkYXRlLnByaW9yaXR5ID09PSByZW1vdGVDYW5kaWRhdGUucHJpb3JpdHkgJiZcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5wcm90b2NvbCA9PT0gcmVtb3RlQ2FuZGlkYXRlLnByb3RvY29sICYmXG4gICAgICAgICAgICBjYW5kaWRhdGUudHlwZSA9PT0gcmVtb3RlQ2FuZGlkYXRlLnR5cGU7XG4gICAgICB9KTtcbiAgaWYgKCFhbHJlYWR5QWRkZWQpIHtcbiAgICBpY2VUcmFuc3BvcnQuYWRkUmVtb3RlQ2FuZGlkYXRlKGNhbmRpZGF0ZSk7XG4gIH1cbiAgcmV0dXJuICFhbHJlYWR5QWRkZWQ7XG59XG5cblxuZnVuY3Rpb24gbWFrZUVycm9yKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKGRlc2NyaXB0aW9uKTtcbiAgZS5uYW1lID0gbmFtZTtcbiAgLy8gbGVnYWN5IGVycm9yIGNvZGVzIGZyb20gaHR0cHM6Ly9oZXljYW0uZ2l0aHViLmlvL3dlYmlkbC8jaWRsLURPTUV4Y2VwdGlvbi1lcnJvci1uYW1lc1xuICBlLmNvZGUgPSB7XG4gICAgTm90U3VwcG9ydGVkRXJyb3I6IDksXG4gICAgSW52YWxpZFN0YXRlRXJyb3I6IDExLFxuICAgIEludmFsaWRBY2Nlc3NFcnJvcjogMTUsXG4gICAgVHlwZUVycm9yOiB1bmRlZmluZWQsXG4gICAgT3BlcmF0aW9uRXJyb3I6IHVuZGVmaW5lZFxuICB9W25hbWVdO1xuICByZXR1cm4gZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih3aW5kb3csIGVkZ2VWZXJzaW9uKSB7XG4gIC8vIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtbWFpbi8jbWVkaWFzdHJlYW1cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGFkZCB0aGUgdHJhY2sgdG8gdGhlIHN0cmVhbSBhbmRcbiAgLy8gZGlzcGF0Y2ggdGhlIGV2ZW50IG91cnNlbHZlcy5cbiAgZnVuY3Rpb24gYWRkVHJhY2tUb1N0cmVhbUFuZEZpcmVFdmVudCh0cmFjaywgc3RyZWFtKSB7XG4gICAgc3RyZWFtLmFkZFRyYWNrKHRyYWNrKTtcbiAgICBzdHJlYW0uZGlzcGF0Y2hFdmVudChuZXcgd2luZG93Lk1lZGlhU3RyZWFtVHJhY2tFdmVudCgnYWRkdHJhY2snLFxuICAgICAgICB7dHJhY2s6IHRyYWNrfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVHJhY2tGcm9tU3RyZWFtQW5kRmlyZUV2ZW50KHRyYWNrLCBzdHJlYW0pIHtcbiAgICBzdHJlYW0ucmVtb3ZlVHJhY2sodHJhY2spO1xuICAgIHN0cmVhbS5kaXNwYXRjaEV2ZW50KG5ldyB3aW5kb3cuTWVkaWFTdHJlYW1UcmFja0V2ZW50KCdyZW1vdmV0cmFjaycsXG4gICAgICAgIHt0cmFjazogdHJhY2t9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaXJlQWRkVHJhY2socGMsIHRyYWNrLCByZWNlaXZlciwgc3RyZWFtcykge1xuICAgIHZhciB0cmFja0V2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgIHRyYWNrRXZlbnQudHJhY2sgPSB0cmFjaztcbiAgICB0cmFja0V2ZW50LnJlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgdHJhY2tFdmVudC50cmFuc2NlaXZlciA9IHtyZWNlaXZlcjogcmVjZWl2ZXJ9O1xuICAgIHRyYWNrRXZlbnQuc3RyZWFtcyA9IHN0cmVhbXM7XG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwYy5fZGlzcGF0Y2hFdmVudCgndHJhY2snLCB0cmFja0V2ZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBSVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBwYyA9IHRoaXM7XG5cbiAgICB2YXIgX2V2ZW50VGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIFsnYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJywgJ2Rpc3BhdGNoRXZlbnQnXVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICBwY1ttZXRob2RdID0gX2V2ZW50VGFyZ2V0W21ldGhvZF0uYmluZChfZXZlbnRUYXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgIHRoaXMuY2FuVHJpY2tsZUljZUNhbmRpZGF0ZXMgPSBudWxsO1xuXG4gICAgdGhpcy5uZWVkTmVnb3RpYXRpb24gPSBmYWxzZTtcblxuICAgIHRoaXMubG9jYWxTdHJlYW1zID0gW107XG4gICAgdGhpcy5yZW1vdGVTdHJlYW1zID0gW107XG5cbiAgICB0aGlzLl9sb2NhbERlc2NyaXB0aW9uID0gbnVsbDtcbiAgICB0aGlzLl9yZW1vdGVEZXNjcmlwdGlvbiA9IG51bGw7XG5cbiAgICB0aGlzLnNpZ25hbGluZ1N0YXRlID0gJ3N0YWJsZSc7XG4gICAgdGhpcy5pY2VDb25uZWN0aW9uU3RhdGUgPSAnbmV3JztcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0ZSA9ICduZXcnO1xuICAgIHRoaXMuaWNlR2F0aGVyaW5nU3RhdGUgPSAnbmV3JztcblxuICAgIGNvbmZpZyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY29uZmlnIHx8IHt9KSk7XG5cbiAgICB0aGlzLnVzaW5nQnVuZGxlID0gY29uZmlnLmJ1bmRsZVBvbGljeSA9PT0gJ21heC1idW5kbGUnO1xuICAgIGlmIChjb25maWcucnRjcE11eFBvbGljeSA9PT0gJ25lZ290aWF0ZScpIHtcbiAgICAgIHRocm93KG1ha2VFcnJvcignTm90U3VwcG9ydGVkRXJyb3InLFxuICAgICAgICAgICdydGNwTXV4UG9saWN5IFxcJ25lZ290aWF0ZVxcJyBpcyBub3Qgc3VwcG9ydGVkJykpO1xuICAgIH0gZWxzZSBpZiAoIWNvbmZpZy5ydGNwTXV4UG9saWN5KSB7XG4gICAgICBjb25maWcucnRjcE11eFBvbGljeSA9ICdyZXF1aXJlJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgIGNhc2UgJ2FsbCc6XG4gICAgICBjYXNlICdyZWxheSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSA9ICdhbGwnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGNvbmZpZy5idW5kbGVQb2xpY3kpIHtcbiAgICAgIGNhc2UgJ2JhbGFuY2VkJzpcbiAgICAgIGNhc2UgJ21heC1jb21wYXQnOlxuICAgICAgY2FzZSAnbWF4LWJ1bmRsZSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uZmlnLmJ1bmRsZVBvbGljeSA9ICdiYWxhbmNlZCc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbmZpZy5pY2VTZXJ2ZXJzID0gZmlsdGVySWNlU2VydmVycyhjb25maWcuaWNlU2VydmVycyB8fCBbXSwgZWRnZVZlcnNpb24pO1xuXG4gICAgdGhpcy5faWNlR2F0aGVyZXJzID0gW107XG4gICAgaWYgKGNvbmZpZy5pY2VDYW5kaWRhdGVQb29sU2l6ZSkge1xuICAgICAgZm9yICh2YXIgaSA9IGNvbmZpZy5pY2VDYW5kaWRhdGVQb29sU2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICB0aGlzLl9pY2VHYXRoZXJlcnMucHVzaChuZXcgd2luZG93LlJUQ0ljZUdhdGhlcmVyKHtcbiAgICAgICAgICBpY2VTZXJ2ZXJzOiBjb25maWcuaWNlU2VydmVycyxcbiAgICAgICAgICBnYXRoZXJQb2xpY3k6IGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3lcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcuaWNlQ2FuZGlkYXRlUG9vbFNpemUgPSAwO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblxuICAgIC8vIHBlci10cmFjayBpY2VHYXRoZXJzLCBpY2VUcmFuc3BvcnRzLCBkdGxzVHJhbnNwb3J0cywgcnRwU2VuZGVycywgLi4uXG4gICAgLy8gZXZlcnl0aGluZyB0aGF0IGlzIG5lZWRlZCB0byBkZXNjcmliZSBhIFNEUCBtLWxpbmUuXG4gICAgdGhpcy50cmFuc2NlaXZlcnMgPSBbXTtcblxuICAgIHRoaXMuX3NkcFNlc3Npb25JZCA9IFNEUFV0aWxzLmdlbmVyYXRlU2Vzc2lvbklkKCk7XG4gICAgdGhpcy5fc2RwU2Vzc2lvblZlcnNpb24gPSAwO1xuXG4gICAgdGhpcy5fZHRsc1JvbGUgPSB1bmRlZmluZWQ7IC8vIHJvbGUgZm9yIGE9c2V0dXAgdG8gdXNlIGluIGFuc3dlcnMuXG5cbiAgICB0aGlzLl9pc0Nsb3NlZCA9IGZhbHNlO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdsb2NhbERlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsRGVzY3JpcHRpb247XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ3JlbW90ZURlc2NyaXB0aW9uJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbW90ZURlc2NyaXB0aW9uO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gc2V0IHVwIGV2ZW50IGhhbmRsZXJzIG9uIHByb3RvdHlwZVxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub25pY2VjYW5kaWRhdGUgPSBudWxsO1xuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub25hZGRzdHJlYW0gPSBudWxsO1xuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub250cmFjayA9IG51bGw7XG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5vbnJlbW92ZXN0cmVhbSA9IG51bGw7XG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gbnVsbDtcbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gbnVsbDtcbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLm9uY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gbnVsbDtcbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLm9uaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUub25uZWdvdGlhdGlvbm5lZWRlZCA9IG51bGw7XG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5vbmRhdGFjaGFubmVsID0gbnVsbDtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2Rpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbihuYW1lLCBldmVudCkge1xuICAgIGlmICh0aGlzLl9pc0Nsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIGlmICh0eXBlb2YgdGhpc1snb24nICsgbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbJ29uJyArIG5hbWVdKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2ljZWdhdGhlcmluZ3N0YXRlY2hhbmdlJyk7XG4gICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnaWNlZ2F0aGVyaW5nc3RhdGVjaGFuZ2UnLCBldmVudCk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldENvbmZpZ3VyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbFN0cmVhbXM7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlbW90ZVN0cmVhbXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdGVTdHJlYW1zO1xuICB9O1xuXG4gIC8vIGludGVybmFsIGhlbHBlciB0byBjcmVhdGUgYSB0cmFuc2NlaXZlciBvYmplY3QuXG4gIC8vICh3aGljaCBpcyBub3QgeWV0IHRoZSBzYW1lIGFzIHRoZSBXZWJSVEMgMS4wIHRyYW5zY2VpdmVyKVxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2NyZWF0ZVRyYW5zY2VpdmVyID0gZnVuY3Rpb24oa2luZCwgZG9Ob3RBZGQpIHtcbiAgICB2YXIgaGFzQnVuZGxlVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoID4gMDtcbiAgICB2YXIgdHJhbnNjZWl2ZXIgPSB7XG4gICAgICB0cmFjazogbnVsbCxcbiAgICAgIGljZUdhdGhlcmVyOiBudWxsLFxuICAgICAgaWNlVHJhbnNwb3J0OiBudWxsLFxuICAgICAgZHRsc1RyYW5zcG9ydDogbnVsbCxcbiAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgcnRwU2VuZGVyOiBudWxsLFxuICAgICAgcnRwUmVjZWl2ZXI6IG51bGwsXG4gICAgICBraW5kOiBraW5kLFxuICAgICAgbWlkOiBudWxsLFxuICAgICAgc2VuZEVuY29kaW5nUGFyYW1ldGVyczogbnVsbCxcbiAgICAgIHJlY3ZFbmNvZGluZ1BhcmFtZXRlcnM6IG51bGwsXG4gICAgICBzdHJlYW06IG51bGwsXG4gICAgICBhc3NvY2lhdGVkUmVtb3RlTWVkaWFTdHJlYW1zOiBbXSxcbiAgICAgIHdhbnRSZWNlaXZlOiB0cnVlXG4gICAgfTtcbiAgICBpZiAodGhpcy51c2luZ0J1bmRsZSAmJiBoYXNCdW5kbGVUcmFuc3BvcnQpIHtcbiAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCA9IHRoaXMudHJhbnNjZWl2ZXJzWzBdLmljZVRyYW5zcG9ydDtcbiAgICAgIHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQgPSB0aGlzLnRyYW5zY2VpdmVyc1swXS5kdGxzVHJhbnNwb3J0O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdHJhbnNwb3J0cyA9IHRoaXMuX2NyZWF0ZUljZUFuZER0bHNUcmFuc3BvcnRzKCk7XG4gICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgPSB0cmFuc3BvcnRzLmljZVRyYW5zcG9ydDtcbiAgICAgIHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQgPSB0cmFuc3BvcnRzLmR0bHNUcmFuc3BvcnQ7XG4gICAgfVxuICAgIGlmICghZG9Ob3RBZGQpIHtcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzLnB1c2godHJhbnNjZWl2ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNjZWl2ZXI7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24odHJhY2ssIHN0cmVhbSkge1xuICAgIGlmICh0aGlzLl9pc0Nsb3NlZCkge1xuICAgICAgdGhyb3cgbWFrZUVycm9yKCdJbnZhbGlkU3RhdGVFcnJvcicsXG4gICAgICAgICAgJ0F0dGVtcHRlZCB0byBjYWxsIGFkZFRyYWNrIG9uIGEgY2xvc2VkIHBlZXJjb25uZWN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5RXhpc3RzID0gdGhpcy50cmFuc2NlaXZlcnMuZmluZChmdW5jdGlvbihzKSB7XG4gICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgfSk7XG5cbiAgICBpZiAoYWxyZWFkeUV4aXN0cykge1xuICAgICAgdGhyb3cgbWFrZUVycm9yKCdJbnZhbGlkQWNjZXNzRXJyb3InLCAnVHJhY2sgYWxyZWFkeSBleGlzdHMuJyk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zY2VpdmVyO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy50cmFuc2NlaXZlcnNbaV0udHJhY2sgJiZcbiAgICAgICAgICB0aGlzLnRyYW5zY2VpdmVyc1tpXS5raW5kID09PSB0cmFjay5raW5kKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gdGhpcy50cmFuc2NlaXZlcnNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdHJhbnNjZWl2ZXIpIHtcbiAgICAgIHRyYW5zY2VpdmVyID0gdGhpcy5fY3JlYXRlVHJhbnNjZWl2ZXIodHJhY2sua2luZCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcblxuICAgIGlmICh0aGlzLmxvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xKSB7XG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgfVxuXG4gICAgdHJhbnNjZWl2ZXIudHJhY2sgPSB0cmFjaztcbiAgICB0cmFuc2NlaXZlci5zdHJlYW0gPSBzdHJlYW07XG4gICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyID0gbmV3IHdpbmRvdy5SVENSdHBTZW5kZXIodHJhY2ssXG4gICAgICAgIHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQpO1xuICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgIHZhciBwYyA9IHRoaXM7XG4gICAgaWYgKGVkZ2VWZXJzaW9uID49IDE1MDI1KSB7XG4gICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICBwYy5hZGRUcmFjayh0cmFjaywgc3RyZWFtKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbG9uZSBpcyBuZWNlc3NhcnkgZm9yIGxvY2FsIGRlbW9zIG1vc3RseSwgYXR0YWNoaW5nIGRpcmVjdGx5XG4gICAgICAvLyB0byB0d28gZGlmZmVyZW50IHNlbmRlcnMgZG9lcyBub3Qgd29yayAoYnVpbGQgMTA1NDcpLlxuICAgICAgLy8gRml4ZWQgaW4gMTUwMjUgKG9yIGVhcmxpZXIpXG4gICAgICB2YXIgY2xvbmVkU3RyZWFtID0gc3RyZWFtLmNsb25lKCk7XG4gICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaywgaWR4KSB7XG4gICAgICAgIHZhciBjbG9uZWRUcmFjayA9IGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKVtpZHhdO1xuICAgICAgICB0cmFjay5hZGRFdmVudExpc3RlbmVyKCdlbmFibGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBjbG9uZWRUcmFjay5lbmFibGVkID0gZXZlbnQuZW5hYmxlZDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNsb25lZFN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgIHBjLmFkZFRyYWNrKHRyYWNrLCBjbG9uZWRTdHJlYW0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjayA9IGZ1bmN0aW9uKHNlbmRlcikge1xuICAgIGlmICh0aGlzLl9pc0Nsb3NlZCkge1xuICAgICAgdGhyb3cgbWFrZUVycm9yKCdJbnZhbGlkU3RhdGVFcnJvcicsXG4gICAgICAgICAgJ0F0dGVtcHRlZCB0byBjYWxsIHJlbW92ZVRyYWNrIG9uIGEgY2xvc2VkIHBlZXJjb25uZWN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmICghKHNlbmRlciBpbnN0YW5jZW9mIHdpbmRvdy5SVENSdHBTZW5kZXIpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCAxIG9mIFJUQ1BlZXJDb25uZWN0aW9uLnJlbW92ZVRyYWNrICcgK1xuICAgICAgICAgICdkb2VzIG5vdCBpbXBsZW1lbnQgaW50ZXJmYWNlIFJUQ1J0cFNlbmRlci4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNjZWl2ZXIgPSB0aGlzLnRyYW5zY2VpdmVycy5maW5kKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0LnJ0cFNlbmRlciA9PT0gc2VuZGVyO1xuICAgIH0pO1xuXG4gICAgaWYgKCF0cmFuc2NlaXZlcikge1xuICAgICAgdGhyb3cgbWFrZUVycm9yKCdJbnZhbGlkQWNjZXNzRXJyb3InLFxuICAgICAgICAgICdTZW5kZXIgd2FzIG5vdCBjcmVhdGVkIGJ5IHRoaXMgY29ubmVjdGlvbi4nKTtcbiAgICB9XG4gICAgdmFyIHN0cmVhbSA9IHRyYW5zY2VpdmVyLnN0cmVhbTtcblxuICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zdG9wKCk7XG4gICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyID0gbnVsbDtcbiAgICB0cmFuc2NlaXZlci50cmFjayA9IG51bGw7XG4gICAgdHJhbnNjZWl2ZXIuc3RyZWFtID0gbnVsbDtcblxuICAgIC8vIHJlbW92ZSB0aGUgc3RyZWFtIGZyb20gdGhlIHNldCBvZiBsb2NhbCBzdHJlYW1zXG4gICAgdmFyIGxvY2FsU3RyZWFtcyA9IHRoaXMudHJhbnNjZWl2ZXJzLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5zdHJlYW07XG4gICAgfSk7XG4gICAgaWYgKGxvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPT09IC0xICYmXG4gICAgICAgIHRoaXMubG9jYWxTdHJlYW1zLmluZGV4T2Yoc3RyZWFtKSA+IC0xKSB7XG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcy5zcGxpY2UodGhpcy5sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pLCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXliZUZpcmVOZWdvdGlhdGlvbk5lZWRlZCgpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICB2YXIgcGMgPSB0aGlzO1xuICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICB2YXIgc2VuZGVyID0gcGMuZ2V0U2VuZGVycygpLmZpbmQoZnVuY3Rpb24ocykge1xuICAgICAgICByZXR1cm4gcy50cmFjayA9PT0gdHJhY2s7XG4gICAgICB9KTtcbiAgICAgIGlmIChzZW5kZXIpIHtcbiAgICAgICAgcGMucmVtb3ZlVHJhY2soc2VuZGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zY2VpdmVycy5maWx0ZXIoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIHJldHVybiAhIXRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgICB9KVxuICAgIC5tYXAoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIHJldHVybiB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgfSk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zY2VpdmVycy5maWx0ZXIoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIHJldHVybiAhIXRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyO1xuICAgIH0pXG4gICAgLm1hcChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgcmV0dXJuIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyO1xuICAgIH0pO1xuICB9O1xuXG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVJY2VHYXRoZXJlciA9IGZ1bmN0aW9uKHNkcE1MaW5lSW5kZXgsXG4gICAgICB1c2luZ0J1bmRsZSkge1xuICAgIHZhciBwYyA9IHRoaXM7XG4gICAgaWYgKHVzaW5nQnVuZGxlICYmIHNkcE1MaW5lSW5kZXggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2NlaXZlcnNbMF0uaWNlR2F0aGVyZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pY2VHYXRoZXJlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faWNlR2F0aGVyZXJzLnNoaWZ0KCk7XG4gICAgfVxuICAgIHZhciBpY2VHYXRoZXJlciA9IG5ldyB3aW5kb3cuUlRDSWNlR2F0aGVyZXIoe1xuICAgICAgaWNlU2VydmVyczogdGhpcy5fY29uZmlnLmljZVNlcnZlcnMsXG4gICAgICBnYXRoZXJQb2xpY3k6IHRoaXMuX2NvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3lcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaWNlR2F0aGVyZXIsICdzdGF0ZScsXG4gICAgICAgIHt2YWx1ZTogJ25ldycsIHdyaXRhYmxlOiB0cnVlfVxuICAgICk7XG5cbiAgICB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5idWZmZXJlZENhbmRpZGF0ZUV2ZW50cyA9IFtdO1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmJ1ZmZlckNhbmRpZGF0ZXMgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgdmFyIGVuZCA9ICFldmVudC5jYW5kaWRhdGUgfHwgT2JqZWN0LmtleXMoZXZlbnQuY2FuZGlkYXRlKS5sZW5ndGggPT09IDA7XG4gICAgICAvLyBwb2x5ZmlsbCBzaW5jZSBSVENJY2VHYXRoZXJlci5zdGF0ZSBpcyBub3QgaW1wbGVtZW50ZWQgaW5cbiAgICAgIC8vIEVkZ2UgMTA1NDcgeWV0LlxuICAgICAgaWNlR2F0aGVyZXIuc3RhdGUgPSBlbmQgPyAnY29tcGxldGVkJyA6ICdnYXRoZXJpbmcnO1xuICAgICAgaWYgKHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5idWZmZXJlZENhbmRpZGF0ZUV2ZW50cyAhPT0gbnVsbCkge1xuICAgICAgICBwYy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uYnVmZmVyZWRDYW5kaWRhdGVFdmVudHMucHVzaChldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpY2VHYXRoZXJlci5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGNhbmRpZGF0ZScsXG4gICAgICB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5idWZmZXJDYW5kaWRhdGVzKTtcbiAgICByZXR1cm4gaWNlR2F0aGVyZXI7XG4gIH07XG5cbiAgLy8gc3RhcnQgZ2F0aGVyaW5nIGZyb20gYW4gUlRDSWNlR2F0aGVyZXIuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZ2F0aGVyID0gZnVuY3Rpb24obWlkLCBzZHBNTGluZUluZGV4KSB7XG4gICAgdmFyIHBjID0gdGhpcztcbiAgICB2YXIgaWNlR2F0aGVyZXIgPSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VHYXRoZXJlcjtcbiAgICBpZiAoaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYnVmZmVyZWRDYW5kaWRhdGVFdmVudHMgPVxuICAgICAgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uYnVmZmVyZWRDYW5kaWRhdGVFdmVudHM7XG4gICAgdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uYnVmZmVyZWRDYW5kaWRhdGVFdmVudHMgPSBudWxsO1xuICAgIGljZUdhdGhlcmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvY2FsY2FuZGlkYXRlJyxcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmJ1ZmZlckNhbmRpZGF0ZXMpO1xuICAgIGljZUdhdGhlcmVyLm9ubG9jYWxjYW5kaWRhdGUgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIGlmIChwYy51c2luZ0J1bmRsZSAmJiBzZHBNTGluZUluZGV4ID4gMCkge1xuICAgICAgICAvLyBpZiB3ZSBrbm93IHRoYXQgd2UgdXNlIGJ1bmRsZSB3ZSBjYW4gZHJvcCBjYW5kaWRhdGVzIHdpdGhcbiAgICAgICAgLy8g0ZVkcE1MaW5lSW5kZXggPiAwLiBJZiB3ZSBkb24ndCBkbyB0aGlzIHRoZW4gb3VyIHN0YXRlIGdldHNcbiAgICAgICAgLy8gY29uZnVzZWQgc2luY2Ugd2UgZGlzcG9zZSB0aGUgZXh0cmEgaWNlIGdhdGhlcmVyLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2ljZWNhbmRpZGF0ZScpO1xuICAgICAgZXZlbnQuY2FuZGlkYXRlID0ge3NkcE1pZDogbWlkLCBzZHBNTGluZUluZGV4OiBzZHBNTGluZUluZGV4fTtcblxuICAgICAgdmFyIGNhbmQgPSBldnQuY2FuZGlkYXRlO1xuICAgICAgLy8gRWRnZSBlbWl0cyBhbiBlbXB0eSBvYmplY3QgZm9yIFJUQ0ljZUNhbmRpZGF0ZUNvbXBsZXRl4oClXG4gICAgICB2YXIgZW5kID0gIWNhbmQgfHwgT2JqZWN0LmtleXMoY2FuZCkubGVuZ3RoID09PSAwO1xuICAgICAgaWYgKGVuZCkge1xuICAgICAgICAvLyBwb2x5ZmlsbCBzaW5jZSBSVENJY2VHYXRoZXJlci5zdGF0ZSBpcyBub3QgaW1wbGVtZW50ZWQgaW5cbiAgICAgICAgLy8gRWRnZSAxMDU0NyB5ZXQuXG4gICAgICAgIGlmIChpY2VHYXRoZXJlci5zdGF0ZSA9PT0gJ25ldycgfHwgaWNlR2F0aGVyZXIuc3RhdGUgPT09ICdnYXRoZXJpbmcnKSB7XG4gICAgICAgICAgaWNlR2F0aGVyZXIuc3RhdGUgPSAnY29tcGxldGVkJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGljZUdhdGhlcmVyLnN0YXRlID09PSAnbmV3Jykge1xuICAgICAgICAgIGljZUdhdGhlcmVyLnN0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUlRDSWNlQ2FuZGlkYXRlIGRvZXNuJ3QgaGF2ZSBhIGNvbXBvbmVudCwgbmVlZHMgdG8gYmUgYWRkZWRcbiAgICAgICAgY2FuZC5jb21wb25lbnQgPSAxO1xuICAgICAgICAvLyBhbHNvIHRoZSB1c2VybmFtZUZyYWdtZW50LiBUT0RPOiB1cGRhdGUgU0RQIHRvIHRha2UgYm90aCB2YXJpYW50cy5cbiAgICAgICAgY2FuZC51ZnJhZyA9IGljZUdhdGhlcmVyLmdldExvY2FsUGFyYW1ldGVycygpLnVzZXJuYW1lRnJhZ21lbnQ7XG5cbiAgICAgICAgdmFyIHNlcmlhbGl6ZWRDYW5kaWRhdGUgPSBTRFBVdGlscy53cml0ZUNhbmRpZGF0ZShjYW5kKTtcbiAgICAgICAgZXZlbnQuY2FuZGlkYXRlID0gT2JqZWN0LmFzc2lnbihldmVudC5jYW5kaWRhdGUsXG4gICAgICAgICAgICBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShzZXJpYWxpemVkQ2FuZGlkYXRlKSk7XG5cbiAgICAgICAgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSA9IHNlcmlhbGl6ZWRDYW5kaWRhdGU7XG4gICAgICAgIGV2ZW50LmNhbmRpZGF0ZS50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICAgICAgc2RwTWlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkLFxuICAgICAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICAgICAgICB1c2VybmFtZUZyYWdtZW50OiBldmVudC5jYW5kaWRhdGUudXNlcm5hbWVGcmFnbWVudFxuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSBsb2NhbCBkZXNjcmlwdGlvbi5cbiAgICAgIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLmdldE1lZGlhU2VjdGlvbnMocGMuX2xvY2FsRGVzY3JpcHRpb24uc2RwKTtcbiAgICAgIGlmICghZW5kKSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4XSArPVxuICAgICAgICAgICAgJ2E9JyArIGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUgKyAnXFxyXFxuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlY3Rpb25zW2V2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4XSArPVxuICAgICAgICAgICAgJ2E9ZW5kLW9mLWNhbmRpZGF0ZXNcXHJcXG4nO1xuICAgICAgfVxuICAgICAgcGMuX2xvY2FsRGVzY3JpcHRpb24uc2RwID1cbiAgICAgICAgICBTRFBVdGlscy5nZXREZXNjcmlwdGlvbihwYy5fbG9jYWxEZXNjcmlwdGlvbi5zZHApICtcbiAgICAgICAgICBzZWN0aW9ucy5qb2luKCcnKTtcbiAgICAgIHZhciBjb21wbGV0ZSA9IHBjLnRyYW5zY2VpdmVycy5ldmVyeShmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICByZXR1cm4gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLnN0YXRlID09PSAnY29tcGxldGVkJztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocGMuaWNlR2F0aGVyaW5nU3RhdGUgIT09ICdnYXRoZXJpbmcnKSB7XG4gICAgICAgIHBjLmljZUdhdGhlcmluZ1N0YXRlID0gJ2dhdGhlcmluZyc7XG4gICAgICAgIHBjLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCBjYW5kaWRhdGUuIEFsc28gZW1pdCBudWxsIGNhbmRpZGF0ZSB3aGVuIGFsbCBnYXRoZXJlcnMgYXJlXG4gICAgICAvLyBjb21wbGV0ZS5cbiAgICAgIGlmICghZW5kKSB7XG4gICAgICAgIHBjLl9kaXNwYXRjaEV2ZW50KCdpY2VjYW5kaWRhdGUnLCBldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgcGMuX2Rpc3BhdGNoRXZlbnQoJ2ljZWNhbmRpZGF0ZScsIG5ldyBFdmVudCgnaWNlY2FuZGlkYXRlJykpO1xuICAgICAgICBwYy5pY2VHYXRoZXJpbmdTdGF0ZSA9ICdjb21wbGV0ZSc7XG4gICAgICAgIHBjLl9lbWl0R2F0aGVyaW5nU3RhdGVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gZW1pdCBhbHJlYWR5IGdhdGhlcmVkIGNhbmRpZGF0ZXMuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBidWZmZXJlZENhbmRpZGF0ZUV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZShlKTtcbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIC8vIENyZWF0ZSBJQ0UgdHJhbnNwb3J0IGFuZCBEVExTIHRyYW5zcG9ydC5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYyA9IHRoaXM7XG4gICAgdmFyIGljZVRyYW5zcG9ydCA9IG5ldyB3aW5kb3cuUlRDSWNlVHJhbnNwb3J0KG51bGwpO1xuICAgIGljZVRyYW5zcG9ydC5vbmljZXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBwYy5fdXBkYXRlSWNlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgICBwYy5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgfTtcblxuICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gbmV3IHdpbmRvdy5SVENEdGxzVHJhbnNwb3J0KGljZVRyYW5zcG9ydCk7XG4gICAgZHRsc1RyYW5zcG9ydC5vbmR0bHNzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcGMuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgIH07XG4gICAgZHRsc1RyYW5zcG9ydC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBvbmVycm9yIGRvZXMgbm90IHNldCBzdGF0ZSB0byBmYWlsZWQgYnkgaXRzZWxmLlxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGR0bHNUcmFuc3BvcnQsICdzdGF0ZScsXG4gICAgICAgICAge3ZhbHVlOiAnZmFpbGVkJywgd3JpdGFibGU6IHRydWV9KTtcbiAgICAgIHBjLl91cGRhdGVDb25uZWN0aW9uU3RhdGUoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGljZVRyYW5zcG9ydDogaWNlVHJhbnNwb3J0LFxuICAgICAgZHRsc1RyYW5zcG9ydDogZHRsc1RyYW5zcG9ydFxuICAgIH07XG4gIH07XG5cbiAgLy8gRGVzdHJveSBJQ0UgZ2F0aGVyZXIsIElDRSB0cmFuc3BvcnQgYW5kIERUTFMgdHJhbnNwb3J0LlxuICAvLyBXaXRob3V0IHRyaWdnZXJpbmcgdGhlIGNhbGxiYWNrcy5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9kaXNwb3NlSWNlQW5kRHRsc1RyYW5zcG9ydHMgPSBmdW5jdGlvbihcbiAgICAgIHNkcE1MaW5lSW5kZXgpIHtcbiAgICB2YXIgaWNlR2F0aGVyZXIgPSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VHYXRoZXJlcjtcbiAgICBpZiAoaWNlR2F0aGVyZXIpIHtcbiAgICAgIGRlbGV0ZSBpY2VHYXRoZXJlci5vbmxvY2FsY2FuZGlkYXRlO1xuICAgICAgZGVsZXRlIHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmljZUdhdGhlcmVyO1xuICAgIH1cbiAgICB2YXIgaWNlVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlVHJhbnNwb3J0O1xuICAgIGlmIChpY2VUcmFuc3BvcnQpIHtcbiAgICAgIGRlbGV0ZSBpY2VUcmFuc3BvcnQub25pY2VzdGF0ZWNoYW5nZTtcbiAgICAgIGRlbGV0ZSB0aGlzLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5pY2VUcmFuc3BvcnQ7XG4gICAgfVxuICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gdGhpcy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uZHRsc1RyYW5zcG9ydDtcbiAgICBpZiAoZHRsc1RyYW5zcG9ydCkge1xuICAgICAgZGVsZXRlIGR0bHNUcmFuc3BvcnQub25kdGxzc3RhdGVjaGFuZ2U7XG4gICAgICBkZWxldGUgZHRsc1RyYW5zcG9ydC5vbmVycm9yO1xuICAgICAgZGVsZXRlIHRoaXMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLmR0bHNUcmFuc3BvcnQ7XG4gICAgfVxuICB9O1xuXG4gIC8vIFN0YXJ0IHRoZSBSVFAgU2VuZGVyIGFuZCBSZWNlaXZlciBmb3IgYSB0cmFuc2NlaXZlci5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl90cmFuc2NlaXZlID0gZnVuY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICBzZW5kLCByZWN2KSB7XG4gICAgdmFyIHBhcmFtcyA9IGdldENvbW1vbkNhcGFiaWxpdGllcyh0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzKTtcbiAgICBpZiAoc2VuZCAmJiB0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgIGNuYW1lOiBTRFBVdGlscy5sb2NhbENOYW1lLFxuICAgICAgICBjb21wb3VuZDogdHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMuY29tcG91bmRcbiAgICAgIH07XG4gICAgICBpZiAodHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgcGFyYW1zLnJ0Y3Auc3NyYyA9IHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYztcbiAgICAgIH1cbiAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zZW5kKHBhcmFtcyk7XG4gICAgfVxuICAgIGlmIChyZWN2ICYmIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyICYmIHBhcmFtcy5jb2RlY3MubGVuZ3RoID4gMCkge1xuICAgICAgLy8gcmVtb3ZlIFJUWCBmaWVsZCBpbiBFZGdlIDE0OTQyXG4gICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICYmIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgICAgICAmJiBlZGdlVmVyc2lvbiA8IDE1MDE5KSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJlY3ZFbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICAgICAgZGVsZXRlIHAucnR4O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICBwYXJhbXMuZW5jb2RpbmdzID0gdHJhbnNjZWl2ZXIucmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSBbe31dO1xuICAgICAgfVxuICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgIGNvbXBvdW5kOiB0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5jb21wb3VuZFxuICAgICAgfTtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5jbmFtZSkge1xuICAgICAgICBwYXJhbXMucnRjcC5jbmFtZSA9IHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzLmNuYW1lO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoKSB7XG4gICAgICAgIHBhcmFtcy5ydGNwLnNzcmMgPSB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmM7XG4gICAgICB9XG4gICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5yZWNlaXZlKHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgcGMgPSB0aGlzO1xuXG4gICAgLy8gTm90ZTogcHJhbnN3ZXIgaXMgbm90IHN1cHBvcnRlZC5cbiAgICBpZiAoWydvZmZlcicsICdhbnN3ZXInXS5pbmRleE9mKGRlc2NyaXB0aW9uLnR5cGUpID09PSAtMSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG1ha2VFcnJvcignVHlwZUVycm9yJyxcbiAgICAgICAgICAnVW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICsgJ1wiJykpO1xuICAgIH1cblxuICAgIGlmICghaXNBY3Rpb25BbGxvd2VkSW5TaWduYWxpbmdTdGF0ZSgnc2V0TG9jYWxEZXNjcmlwdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uLnR5cGUsIHBjLnNpZ25hbGluZ1N0YXRlKSB8fCBwYy5faXNDbG9zZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChtYWtlRXJyb3IoJ0ludmFsaWRTdGF0ZUVycm9yJyxcbiAgICAgICAgICAnQ2FuIG5vdCBzZXQgbG9jYWwgJyArIGRlc2NyaXB0aW9uLnR5cGUgK1xuICAgICAgICAgICcgaW4gc3RhdGUgJyArIHBjLnNpZ25hbGluZ1N0YXRlKSk7XG4gICAgfVxuXG4gICAgdmFyIHNlY3Rpb25zO1xuICAgIHZhciBzZXNzaW9ucGFydDtcbiAgICBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJykge1xuICAgICAgLy8gVkVSWSBsaW1pdGVkIHN1cHBvcnQgZm9yIFNEUCBtdW5naW5nLiBMaW1pdGVkIHRvOlxuICAgICAgLy8gKiBjaGFuZ2luZyB0aGUgb3JkZXIgb2YgY29kZWNzXG4gICAgICBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoZGVzY3JpcHRpb24uc2RwKTtcbiAgICAgIHNlc3Npb25wYXJ0ID0gc2VjdGlvbnMuc2hpZnQoKTtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAgIHZhciBjYXBzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICAgIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5sb2NhbENhcGFiaWxpdGllcyA9IGNhcHM7XG4gICAgICB9KTtcblxuICAgICAgcGMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgcGMuX2dhdGhlcih0cmFuc2NlaXZlci5taWQsIHNkcE1MaW5lSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnYW5zd2VyJykge1xuICAgICAgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHBjLl9yZW1vdGVEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgdmFyIGlzSWNlTGl0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAgICdhPWljZS1saXRlJykubGVuZ3RoID4gMDtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAgIHZhciB0cmFuc2NlaXZlciA9IHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XTtcbiAgICAgICAgdmFyIGljZUdhdGhlcmVyID0gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXI7XG4gICAgICAgIHZhciBpY2VUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgdmFyIGxvY2FsQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXM7XG4gICAgICAgIHZhciByZW1vdGVDYXBhYmlsaXRpZXMgPSB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXM7XG5cbiAgICAgICAgLy8gdHJlYXQgYnVuZGxlLW9ubHkgYXMgbm90LXJlamVjdGVkLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBTRFBVdGlscy5pc1JlamVjdGVkKG1lZGlhU2VjdGlvbikgJiZcbiAgICAgICAgICAgIFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9YnVuZGxlLW9ubHknKS5sZW5ndGggPT09IDA7XG5cbiAgICAgICAgaWYgKCFyZWplY3RlZCAmJiAhdHJhbnNjZWl2ZXIucmVqZWN0ZWQpIHtcbiAgICAgICAgICB2YXIgcmVtb3RlSWNlUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldEljZVBhcmFtZXRlcnMoXG4gICAgICAgICAgICAgIG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpO1xuICAgICAgICAgIHZhciByZW1vdGVEdGxzUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzKFxuICAgICAgICAgICAgICBtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICBpZiAoaXNJY2VMaXRlKSB7XG4gICAgICAgICAgICByZW1vdGVEdGxzUGFyYW1ldGVycy5yb2xlID0gJ3NlcnZlcic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFwYy51c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBwYy5fZ2F0aGVyKHRyYW5zY2VpdmVyLm1pZCwgc2RwTUxpbmVJbmRleCk7XG4gICAgICAgICAgICBpZiAoaWNlVHJhbnNwb3J0LnN0YXRlID09PSAnbmV3Jykge1xuICAgICAgICAgICAgICBpY2VUcmFuc3BvcnQuc3RhcnQoaWNlR2F0aGVyZXIsIHJlbW90ZUljZVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgICBpc0ljZUxpdGUgPyAnY29udHJvbGxpbmcnIDogJ2NvbnRyb2xsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkdGxzVHJhbnNwb3J0LnN0YXRlID09PSAnbmV3Jykge1xuICAgICAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIG9mIGNhcGFiaWxpdGllcy5cbiAgICAgICAgICB2YXIgcGFyYW1zID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKGxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgICAgLy8gU3RhcnQgdGhlIFJUQ1J0cFNlbmRlci4gVGhlIFJUQ1J0cFJlY2VpdmVyIGZvciB0aGlzXG4gICAgICAgICAgLy8gdHJhbnNjZWl2ZXIgaGFzIGFscmVhZHkgYmVlbiBzdGFydGVkIGluIHNldFJlbW90ZURlc2NyaXB0aW9uLlxuICAgICAgICAgIHBjLl90cmFuc2NlaXZlKHRyYW5zY2VpdmVyLFxuICAgICAgICAgICAgICBwYXJhbXMuY29kZWNzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICAgIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcGMuX2xvY2FsRGVzY3JpcHRpb24gPSB7XG4gICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHBcbiAgICB9O1xuICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICBwYy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ2hhdmUtbG9jYWwtb2ZmZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICB2YXIgcGMgPSB0aGlzO1xuXG4gICAgLy8gTm90ZTogcHJhbnN3ZXIgaXMgbm90IHN1cHBvcnRlZC5cbiAgICBpZiAoWydvZmZlcicsICdhbnN3ZXInXS5pbmRleE9mKGRlc2NyaXB0aW9uLnR5cGUpID09PSAtMSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG1ha2VFcnJvcignVHlwZUVycm9yJyxcbiAgICAgICAgICAnVW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICsgJ1wiJykpO1xuICAgIH1cblxuICAgIGlmICghaXNBY3Rpb25BbGxvd2VkSW5TaWduYWxpbmdTdGF0ZSgnc2V0UmVtb3RlRGVzY3JpcHRpb24nLFxuICAgICAgICBkZXNjcmlwdGlvbi50eXBlLCBwYy5zaWduYWxpbmdTdGF0ZSkgfHwgcGMuX2lzQ2xvc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobWFrZUVycm9yKCdJbnZhbGlkU3RhdGVFcnJvcicsXG4gICAgICAgICAgJ0NhbiBub3Qgc2V0IHJlbW90ZSAnICsgZGVzY3JpcHRpb24udHlwZSArXG4gICAgICAgICAgJyBpbiBzdGF0ZSAnICsgcGMuc2lnbmFsaW5nU3RhdGUpKTtcbiAgICB9XG5cbiAgICB2YXIgc3RyZWFtcyA9IHt9O1xuICAgIHBjLnJlbW90ZVN0cmVhbXMuZm9yRWFjaChmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIHN0cmVhbXNbc3RyZWFtLmlkXSA9IHN0cmVhbTtcbiAgICB9KTtcbiAgICB2YXIgcmVjZWl2ZXJMaXN0ID0gW107XG4gICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhkZXNjcmlwdGlvbi5zZHApO1xuICAgIHZhciBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgdmFyIGlzSWNlTGl0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KHNlc3Npb25wYXJ0LFxuICAgICAgICAnYT1pY2UtbGl0ZScpLmxlbmd0aCA+IDA7XG4gICAgdmFyIHVzaW5nQnVuZGxlID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoc2Vzc2lvbnBhcnQsXG4gICAgICAgICdhPWdyb3VwOkJVTkRMRSAnKS5sZW5ndGggPiAwO1xuICAgIHBjLnVzaW5nQnVuZGxlID0gdXNpbmdCdW5kbGU7XG4gICAgdmFyIGljZU9wdGlvbnMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChzZXNzaW9ucGFydCxcbiAgICAgICAgJ2E9aWNlLW9wdGlvbnM6JylbMF07XG4gICAgaWYgKGljZU9wdGlvbnMpIHtcbiAgICAgIHBjLmNhblRyaWNrbGVJY2VDYW5kaWRhdGVzID0gaWNlT3B0aW9ucy5zdWJzdHIoMTQpLnNwbGl0KCcgJylcbiAgICAgICAgICAuaW5kZXhPZigndHJpY2tsZScpID49IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBjLmNhblRyaWNrbGVJY2VDYW5kaWRhdGVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciBraW5kID0gU0RQVXRpbHMuZ2V0S2luZChtZWRpYVNlY3Rpb24pO1xuICAgICAgLy8gdHJlYXQgYnVuZGxlLW9ubHkgYXMgbm90LXJlamVjdGVkLlxuICAgICAgdmFyIHJlamVjdGVkID0gU0RQVXRpbHMuaXNSZWplY3RlZChtZWRpYVNlY3Rpb24pICYmXG4gICAgICAgICAgU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1idW5kbGUtb25seScpLmxlbmd0aCA9PT0gMDtcbiAgICAgIHZhciBwcm90b2NvbCA9IGxpbmVzWzBdLnN1YnN0cigyKS5zcGxpdCgnICcpWzJdO1xuXG4gICAgICB2YXIgZGlyZWN0aW9uID0gU0RQVXRpbHMuZ2V0RGlyZWN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpO1xuICAgICAgdmFyIHJlbW90ZU1zaWQgPSBTRFBVdGlscy5wYXJzZU1zaWQobWVkaWFTZWN0aW9uKTtcblxuICAgICAgdmFyIG1pZCA9IFNEUFV0aWxzLmdldE1pZChtZWRpYVNlY3Rpb24pIHx8IFNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllcigpO1xuXG4gICAgICAvLyBSZWplY3QgZGF0YWNoYW5uZWxzIHdoaWNoIGFyZSBub3QgaW1wbGVtZW50ZWQgeWV0LlxuICAgICAgaWYgKHJlamVjdGVkIHx8IChraW5kID09PSAnYXBwbGljYXRpb24nICYmIChwcm90b2NvbCA9PT0gJ0RUTFMvU0NUUCcgfHxcbiAgICAgICAgICBwcm90b2NvbCA9PT0gJ1VEUC9EVExTL1NDVFAnKSkpIHtcbiAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBkYW5nZXJvdXMgaW4gdGhlIGNhc2Ugd2hlcmUgYSBub24tcmVqZWN0ZWQgbS1saW5lXG4gICAgICAgIC8vICAgICBiZWNvbWVzIHJlamVjdGVkLlxuICAgICAgICBwYy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0gPSB7XG4gICAgICAgICAgbWlkOiBtaWQsXG4gICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICBwcm90b2NvbDogcHJvdG9jb2wsXG4gICAgICAgICAgcmVqZWN0ZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlamVjdGVkICYmIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSAmJlxuICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5yZWplY3RlZCkge1xuICAgICAgICAvLyByZWN5Y2xlIGEgcmVqZWN0ZWQgdHJhbnNjZWl2ZXIuXG4gICAgICAgIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSA9IHBjLl9jcmVhdGVUcmFuc2NlaXZlcihraW5kLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRyYW5zY2VpdmVyO1xuICAgICAgdmFyIGljZUdhdGhlcmVyO1xuICAgICAgdmFyIGljZVRyYW5zcG9ydDtcbiAgICAgIHZhciBkdGxzVHJhbnNwb3J0O1xuICAgICAgdmFyIHJ0cFJlY2VpdmVyO1xuICAgICAgdmFyIHNlbmRFbmNvZGluZ1BhcmFtZXRlcnM7XG4gICAgICB2YXIgcmVjdkVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcztcblxuICAgICAgdmFyIHRyYWNrO1xuICAgICAgLy8gRklYTUU6IGVuc3VyZSB0aGUgbWVkaWFTZWN0aW9uIGhhcyBydGNwLW11eCBzZXQuXG4gICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICB2YXIgcmVtb3RlSWNlUGFyYW1ldGVycztcbiAgICAgIHZhciByZW1vdGVEdGxzUGFyYW1ldGVycztcbiAgICAgIGlmICghcmVqZWN0ZWQpIHtcbiAgICAgICAgcmVtb3RlSWNlUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldEljZVBhcmFtZXRlcnMobWVkaWFTZWN0aW9uLFxuICAgICAgICAgICAgc2Vzc2lvbnBhcnQpO1xuICAgICAgICByZW1vdGVEdGxzUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgcmVtb3RlRHRsc1BhcmFtZXRlcnMucm9sZSA9ICdjbGllbnQnO1xuICAgICAgfVxuICAgICAgcmVjdkVuY29kaW5nUGFyYW1ldGVycyA9XG4gICAgICAgICAgU0RQVXRpbHMucGFyc2VSdHBFbmNvZGluZ1BhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcblxuICAgICAgdmFyIHJ0Y3BQYXJhbWV0ZXJzID0gU0RQVXRpbHMucGFyc2VSdGNwUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24pO1xuXG4gICAgICB2YXIgaXNDb21wbGV0ZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAnYT1lbmQtb2YtY2FuZGlkYXRlcycsIHNlc3Npb25wYXJ0KS5sZW5ndGggPiAwO1xuICAgICAgdmFyIGNhbmRzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1jYW5kaWRhdGU6JylcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uKGNhbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY2FuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmQuY29tcG9uZW50ID09PSAxO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gdXNlIEJVTkRMRSBhbmQgZGlzcG9zZSB0cmFuc3BvcnRzLlxuICAgICAgaWYgKChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInIHx8IGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInKSAmJlxuICAgICAgICAgICFyZWplY3RlZCAmJiB1c2luZ0J1bmRsZSAmJiBzZHBNTGluZUluZGV4ID4gMCAmJlxuICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSkge1xuICAgICAgICBwYy5fZGlzcG9zZUljZUFuZER0bHNUcmFuc3BvcnRzKHNkcE1MaW5lSW5kZXgpO1xuICAgICAgICBwYy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlR2F0aGVyZXIgPVxuICAgICAgICAgICAgcGMudHJhbnNjZWl2ZXJzWzBdLmljZUdhdGhlcmVyO1xuICAgICAgICBwYy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uaWNlVHJhbnNwb3J0ID1cbiAgICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5kdGxzVHJhbnNwb3J0ID1cbiAgICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1swXS5kdGxzVHJhbnNwb3J0O1xuICAgICAgICBpZiAocGMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0cFNlbmRlcikge1xuICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBTZW5kZXIuc2V0VHJhbnNwb3J0KFxuICAgICAgICAgICAgICBwYy50cmFuc2NlaXZlcnNbMF0uZHRsc1RyYW5zcG9ydCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBSZWNlaXZlcikge1xuICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5ydHBSZWNlaXZlci5zZXRUcmFuc3BvcnQoXG4gICAgICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1swXS5kdGxzVHJhbnNwb3J0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gcGMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdIHx8XG4gICAgICAgICAgICBwYy5fY3JlYXRlVHJhbnNjZWl2ZXIoa2luZCk7XG4gICAgICAgIHRyYW5zY2VpdmVyLm1pZCA9IG1pZDtcblxuICAgICAgICBpZiAoIXRyYW5zY2VpdmVyLmljZUdhdGhlcmVyKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgPSBwYy5fY3JlYXRlSWNlR2F0aGVyZXIoc2RwTUxpbmVJbmRleCxcbiAgICAgICAgICAgICAgdXNpbmdCdW5kbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbmRzLmxlbmd0aCAmJiB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RhdGUgPT09ICduZXcnKSB7XG4gICAgICAgICAgaWYgKGlzQ29tcGxldGUgJiYgKCF1c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSkge1xuICAgICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnNldFJlbW90ZUNhbmRpZGF0ZXMoY2FuZHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYW5kcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICBtYXliZUFkZENhbmRpZGF0ZSh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQsIGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbENhcGFiaWxpdGllcyA9IHdpbmRvdy5SVENSdHBSZWNlaXZlci5nZXRDYXBhYmlsaXRpZXMoa2luZCk7XG5cbiAgICAgICAgLy8gZmlsdGVyIFJUWCB1bnRpbCBhZGRpdGlvbmFsIHN0dWZmIG5lZWRlZCBmb3IgUlRYIGlzIGltcGxlbWVudGVkXG4gICAgICAgIC8vIGluIGFkYXB0ZXIuanNcbiAgICAgICAgaWYgKGVkZ2VWZXJzaW9uIDwgMTUwMTkpIHtcbiAgICAgICAgICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MgPSBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MuZmlsdGVyKFxuICAgICAgICAgICAgICBmdW5jdGlvbihjb2RlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2RlYy5uYW1lICE9PSAncnR4JztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzID0gdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycyB8fCBbe1xuICAgICAgICAgIHNzcmM6ICgyICogc2RwTUxpbmVJbmRleCArIDIpICogMTAwMVxuICAgICAgICB9XTtcblxuICAgICAgICAvLyBUT0RPOiByZXdyaXRlIHRvIHVzZSBodHRwOi8vdzNjLmdpdGh1Yi5pby93ZWJydGMtcGMvI3NldC1hc3NvY2lhdGVkLXJlbW90ZS1zdHJlYW1zXG4gICAgICAgIHZhciBpc05ld1RyYWNrID0gZmFsc2U7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSB7XG4gICAgICAgICAgaXNOZXdUcmFjayA9ICF0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgICBydHBSZWNlaXZlciA9IHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyIHx8XG4gICAgICAgICAgICAgIG5ldyB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIodHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCwga2luZCk7XG5cbiAgICAgICAgICBpZiAoaXNOZXdUcmFjaykge1xuICAgICAgICAgICAgdmFyIHN0cmVhbTtcbiAgICAgICAgICAgIHRyYWNrID0gcnRwUmVjZWl2ZXIudHJhY2s7XG4gICAgICAgICAgICAvLyBGSVhNRTogZG9lcyBub3Qgd29yayB3aXRoIFBsYW4gQi5cbiAgICAgICAgICAgIGlmIChyZW1vdGVNc2lkICYmIHJlbW90ZU1zaWQuc3RyZWFtID09PSAnLScpIHtcbiAgICAgICAgICAgICAgLy8gbm8tb3AuIGEgc3RyZWFtIGlkIG9mICctJyBtZWFuczogbm8gYXNzb2NpYXRlZCBzdHJlYW0uXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlbW90ZU1zaWQpIHtcbiAgICAgICAgICAgICAgaWYgKCFzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSkge1xuICAgICAgICAgICAgICAgIHN0cmVhbXNbcmVtb3RlTXNpZC5zdHJlYW1dID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSwgJ2lkJywge1xuICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW90ZU1zaWQuc3RyZWFtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0cmFjaywgJ2lkJywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVtb3RlTXNpZC50cmFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBzdHJlYW0gPSBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghc3RyZWFtcy5kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgc3RyZWFtcy5kZWZhdWx0ID0gbmV3IHdpbmRvdy5NZWRpYVN0cmVhbSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0cmVhbSA9IHN0cmVhbXMuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgICAgICAgYWRkVHJhY2tUb1N0cmVhbUFuZEZpcmVFdmVudCh0cmFjaywgc3RyZWFtKTtcbiAgICAgICAgICAgICAgdHJhbnNjZWl2ZXIuYXNzb2NpYXRlZFJlbW90ZU1lZGlhU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWNlaXZlckxpc3QucHVzaChbdHJhY2ssIHJ0cFJlY2VpdmVyLCBzdHJlYW1dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIgJiYgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIudHJhY2spIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5hc3NvY2lhdGVkUmVtb3RlTWVkaWFTdHJlYW1zLmZvckVhY2goZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZVRyYWNrID0gcy5nZXRUcmFja3MoKS5maW5kKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQuaWQgPT09IHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyLnRyYWNrLmlkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobmF0aXZlVHJhY2spIHtcbiAgICAgICAgICAgICAgcmVtb3ZlVHJhY2tGcm9tU3RyZWFtQW5kRmlyZUV2ZW50KG5hdGl2ZVRyYWNrLCBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0cmFuc2NlaXZlci5hc3NvY2lhdGVkUmVtb3RlTWVkaWFTdHJlYW1zID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyA9IGxvY2FsQ2FwYWJpbGl0aWVzO1xuICAgICAgICB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMgPSByZW1vdGVDYXBhYmlsaXRpZXM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyID0gcnRwUmVjZWl2ZXI7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0Y3BQYXJhbWV0ZXJzID0gcnRjcFBhcmFtZXRlcnM7XG4gICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICB0cmFuc2NlaXZlci5yZWN2RW5jb2RpbmdQYXJhbWV0ZXJzID0gcmVjdkVuY29kaW5nUGFyYW1ldGVycztcblxuICAgICAgICAvLyBTdGFydCB0aGUgUlRDUnRwUmVjZWl2ZXIgbm93LiBUaGUgUlRQU2VuZGVyIGlzIHN0YXJ0ZWQgaW5cbiAgICAgICAgLy8gc2V0TG9jYWxEZXNjcmlwdGlvbi5cbiAgICAgICAgcGMuX3RyYW5zY2VpdmUocGMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBpc05ld1RyYWNrKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyID0gcGMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICBpY2VUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQ7XG4gICAgICAgIGR0bHNUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0O1xuICAgICAgICBydHBSZWNlaXZlciA9IHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyO1xuICAgICAgICBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzID0gdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVycztcbiAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcztcblxuICAgICAgICBwYy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVjdkVuY29kaW5nUGFyYW1ldGVycyA9XG4gICAgICAgICAgICByZWN2RW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgICAgICBwYy50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVtb3RlQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgcGMudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJ0Y3BQYXJhbWV0ZXJzID0gcnRjcFBhcmFtZXRlcnM7XG5cbiAgICAgICAgaWYgKGNhbmRzLmxlbmd0aCAmJiBpY2VUcmFuc3BvcnQuc3RhdGUgPT09ICduZXcnKSB7XG4gICAgICAgICAgaWYgKChpc0ljZUxpdGUgfHwgaXNDb21wbGV0ZSkgJiZcbiAgICAgICAgICAgICAgKCF1c2luZ0J1bmRsZSB8fCBzZHBNTGluZUluZGV4ID09PSAwKSkge1xuICAgICAgICAgICAgaWNlVHJhbnNwb3J0LnNldFJlbW90ZUNhbmRpZGF0ZXMoY2FuZHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYW5kcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbmRpZGF0ZSkge1xuICAgICAgICAgICAgICBtYXliZUFkZENhbmRpZGF0ZSh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQsIGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXVzaW5nQnVuZGxlIHx8IHNkcE1MaW5lSW5kZXggPT09IDApIHtcbiAgICAgICAgICBpZiAoaWNlVHJhbnNwb3J0LnN0YXRlID09PSAnbmV3Jykge1xuICAgICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICdjb250cm9sbGluZycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZHRsc1RyYW5zcG9ydC5zdGF0ZSA9PT0gJ25ldycpIHtcbiAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQuc3RhcnQocmVtb3RlRHRsc1BhcmFtZXRlcnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBvZmZlciBjb250YWluZWQgUlRYIGJ1dCB0aGUgYW5zd2VyIGRpZCBub3QsXG4gICAgICAgIC8vIHJlbW92ZSBSVFggZnJvbSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzLlxuICAgICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgdmFyIGhhc1J0eCA9IGNvbW1vbkNhcGFiaWxpdGllcy5jb2RlY3MuZmlsdGVyKGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdydHgnO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICAgIGlmICghaGFzUnR4ICYmIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgICAgICAgZGVsZXRlIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGMuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAncmVjdm9ubHknLFxuICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG5cbiAgICAgICAgLy8gVE9ETzogcmV3cml0ZSB0byB1c2UgaHR0cDovL3czYy5naXRodWIuaW8vd2VicnRjLXBjLyNzZXQtYXNzb2NpYXRlZC1yZW1vdGUtc3RyZWFtc1xuICAgICAgICBpZiAocnRwUmVjZWl2ZXIgJiZcbiAgICAgICAgICAgIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSkge1xuICAgICAgICAgIHRyYWNrID0gcnRwUmVjZWl2ZXIudHJhY2s7XG4gICAgICAgICAgaWYgKHJlbW90ZU1zaWQpIHtcbiAgICAgICAgICAgIGlmICghc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0pIHtcbiAgICAgICAgICAgICAgc3RyZWFtc1tyZW1vdGVNc2lkLnN0cmVhbV0gPSBuZXcgd2luZG93Lk1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUcmFja1RvU3RyZWFtQW5kRmlyZUV2ZW50KHRyYWNrLCBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXSk7XG4gICAgICAgICAgICByZWNlaXZlckxpc3QucHVzaChbdHJhY2ssIHJ0cFJlY2VpdmVyLCBzdHJlYW1zW3JlbW90ZU1zaWQuc3RyZWFtXV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXN0cmVhbXMuZGVmYXVsdCkge1xuICAgICAgICAgICAgICBzdHJlYW1zLmRlZmF1bHQgPSBuZXcgd2luZG93Lk1lZGlhU3RyZWFtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRUcmFja1RvU3RyZWFtQW5kRmlyZUV2ZW50KHRyYWNrLCBzdHJlYW1zLmRlZmF1bHQpO1xuICAgICAgICAgICAgcmVjZWl2ZXJMaXN0LnB1c2goW3RyYWNrLCBydHBSZWNlaXZlciwgc3RyZWFtcy5kZWZhdWx0XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEZJWE1FOiBhY3R1YWxseSB0aGUgcmVjZWl2ZXIgc2hvdWxkIGJlIGNyZWF0ZWQgbGF0ZXIuXG4gICAgICAgICAgZGVsZXRlIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocGMuX2R0bHNSb2xlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBjLl9kdGxzUm9sZSA9IGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicgPyAnYWN0aXZlJyA6ICdwYXNzaXZlJztcbiAgICB9XG5cbiAgICBwYy5fcmVtb3RlRGVzY3JpcHRpb24gPSB7XG4gICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlLFxuICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHBcbiAgICB9O1xuICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICBwYy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ2hhdmUtcmVtb3RlLW9mZmVyJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBjLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnc3RhYmxlJyk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHN0cmVhbXMpLmZvckVhY2goZnVuY3Rpb24oc2lkKSB7XG4gICAgICB2YXIgc3RyZWFtID0gc3RyZWFtc1tzaWRdO1xuICAgICAgaWYgKHN0cmVhbS5nZXRUcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKHBjLnJlbW90ZVN0cmVhbXMuaW5kZXhPZihzdHJlYW0pID09PSAtMSkge1xuICAgICAgICAgIHBjLnJlbW90ZVN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgnYWRkc3RyZWFtJyk7XG4gICAgICAgICAgZXZlbnQuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcGMuX2Rpc3BhdGNoRXZlbnQoJ2FkZHN0cmVhbScsIGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY2VpdmVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICB2YXIgdHJhY2sgPSBpdGVtWzBdO1xuICAgICAgICAgIHZhciByZWNlaXZlciA9IGl0ZW1bMV07XG4gICAgICAgICAgaWYgKHN0cmVhbS5pZCAhPT0gaXRlbVsyXS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmaXJlQWRkVHJhY2socGMsIHRyYWNrLCByZWNlaXZlciwgW3N0cmVhbV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZWNlaXZlckxpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmaXJlQWRkVHJhY2socGMsIGl0ZW1bMF0sIGl0ZW1bMV0sIFtdKTtcbiAgICB9KTtcblxuICAgIC8vIGNoZWNrIHdoZXRoZXIgYWRkSWNlQ2FuZGlkYXRlKHt9KSB3YXMgY2FsbGVkIHdpdGhpbiBmb3VyIHNlY29uZHMgYWZ0ZXJcbiAgICAvLyBzZXRSZW1vdGVEZXNjcmlwdGlvbi5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGlmICghKHBjICYmIHBjLnRyYW5zY2VpdmVycykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcGMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCAmJlxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnN0YXRlID09PSAnbmV3JyAmJlxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LmdldFJlbW90ZUNhbmRpZGF0ZXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaW1lb3V0IGZvciBhZGRSZW1vdGVDYW5kaWRhdGUuIENvbnNpZGVyIHNlbmRpbmcgJyArXG4gICAgICAgICAgICAgICdhbiBlbmQtb2YtY2FuZGlkYXRlcyBub3RpZmljYXRpb24nKTtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuYWRkUmVtb3RlQ2FuZGlkYXRlKHt9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgNDAwMCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgLyogbm90IHlldFxuICAgICAgaWYgKHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLmNsb3NlKCk7XG4gICAgICB9XG4gICAgICAqL1xuICAgICAgaWYgKHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCkge1xuICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RvcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIuc3RvcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEZJWE1FOiBjbGVhbiB1cCB0cmFja3MsIGxvY2FsIHN0cmVhbXMsIHJlbW90ZSBzdHJlYW1zLCBldGNcbiAgICB0aGlzLl9pc0Nsb3NlZCA9IHRydWU7XG4gICAgdGhpcy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ2Nsb3NlZCcpO1xuICB9O1xuXG4gIC8vIFVwZGF0ZSB0aGUgc2lnbmFsaW5nIHN0YXRlLlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlID0gZnVuY3Rpb24obmV3U3RhdGUpIHtcbiAgICB0aGlzLnNpZ25hbGluZ1N0YXRlID0gbmV3U3RhdGU7XG4gICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdzaWduYWxpbmdzdGF0ZWNoYW5nZScpO1xuICAgIHRoaXMuX2Rpc3BhdGNoRXZlbnQoJ3NpZ25hbGluZ3N0YXRlY2hhbmdlJywgZXZlbnQpO1xuICB9O1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIHRvIGZpcmUgdGhlIG5lZ290aWF0aW9ubmVlZGVkIGV2ZW50LlxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBjID0gdGhpcztcbiAgICBpZiAodGhpcy5zaWduYWxpbmdTdGF0ZSAhPT0gJ3N0YWJsZScgfHwgdGhpcy5uZWVkTmVnb3RpYXRpb24gPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZWVkTmVnb3RpYXRpb24gPSB0cnVlO1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHBjLm5lZWROZWdvdGlhdGlvbikge1xuICAgICAgICBwYy5uZWVkTmVnb3RpYXRpb24gPSBmYWxzZTtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpO1xuICAgICAgICBwYy5fZGlzcGF0Y2hFdmVudCgnbmVnb3RpYXRpb25uZWVkZWQnLCBldmVudCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgLy8gVXBkYXRlIHRoZSBpY2UgY29ubmVjdGlvbiBzdGF0ZS5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVJY2VDb25uZWN0aW9uU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmV3U3RhdGU7XG4gICAgdmFyIHN0YXRlcyA9IHtcbiAgICAgICduZXcnOiAwLFxuICAgICAgY2xvc2VkOiAwLFxuICAgICAgY2hlY2tpbmc6IDAsXG4gICAgICBjb25uZWN0ZWQ6IDAsXG4gICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICBkaXNjb25uZWN0ZWQ6IDAsXG4gICAgICBmYWlsZWQ6IDBcbiAgICB9O1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgJiYgIXRyYW5zY2VpdmVyLnJlamVjdGVkKSB7XG4gICAgICAgIHN0YXRlc1t0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RhdGVdKys7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgIGlmIChzdGF0ZXMuZmFpbGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnZmFpbGVkJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5jaGVja2luZyA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ2NoZWNraW5nJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5kaXNjb25uZWN0ZWQgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzLm5ldyA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ25ldyc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGVkID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnY29ubmVjdGVkJztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb21wbGV0ZWQgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdjb21wbGV0ZWQnO1xuICAgIH1cblxuICAgIGlmIChuZXdTdGF0ZSAhPT0gdGhpcy5pY2VDb25uZWN0aW9uU3RhdGUpIHtcbiAgICAgIHRoaXMuaWNlQ29ubmVjdGlvblN0YXRlID0gbmV3U3RhdGU7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2ljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScpO1xuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICAvLyBVcGRhdGUgdGhlIGNvbm5lY3Rpb24gc3RhdGUuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdXBkYXRlQ29ubmVjdGlvblN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5ld1N0YXRlO1xuICAgIHZhciBzdGF0ZXMgPSB7XG4gICAgICAnbmV3JzogMCxcbiAgICAgIGNsb3NlZDogMCxcbiAgICAgIGNvbm5lY3Rpbmc6IDAsXG4gICAgICBjb25uZWN0ZWQ6IDAsXG4gICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICBkaXNjb25uZWN0ZWQ6IDAsXG4gICAgICBmYWlsZWQ6IDBcbiAgICB9O1xuICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgJiYgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydCAmJlxuICAgICAgICAgICF0cmFuc2NlaXZlci5yZWplY3RlZCkge1xuICAgICAgICBzdGF0ZXNbdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnN0YXRlXSsrO1xuICAgICAgICBzdGF0ZXNbdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBJQ0VUcmFuc3BvcnQuY29tcGxldGVkIGFuZCBjb25uZWN0ZWQgYXJlIHRoZSBzYW1lIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgc3RhdGVzLmNvbm5lY3RlZCArPSBzdGF0ZXMuY29tcGxldGVkO1xuXG4gICAgbmV3U3RhdGUgPSAnbmV3JztcbiAgICBpZiAoc3RhdGVzLmZhaWxlZCA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ2ZhaWxlZCc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGluZyA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ2Nvbm5lY3RpbmcnO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVzLmRpc2Nvbm5lY3RlZCA+IDApIHtcbiAgICAgIG5ld1N0YXRlID0gJ2Rpc2Nvbm5lY3RlZCc7XG4gICAgfSBlbHNlIGlmIChzdGF0ZXMubmV3ID4gMCkge1xuICAgICAgbmV3U3RhdGUgPSAnbmV3JztcbiAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb25uZWN0ZWQgPiAwKSB7XG4gICAgICBuZXdTdGF0ZSA9ICdjb25uZWN0ZWQnO1xuICAgIH1cblxuICAgIGlmIChuZXdTdGF0ZSAhPT0gdGhpcy5jb25uZWN0aW9uU3RhdGUpIHtcbiAgICAgIHRoaXMuY29ubmVjdGlvblN0YXRlID0gbmV3U3RhdGU7XG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2Nvbm5lY3Rpb25zdGF0ZWNoYW5nZScpO1xuICAgICAgdGhpcy5fZGlzcGF0Y2hFdmVudCgnY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcGMgPSB0aGlzO1xuXG4gICAgaWYgKHBjLl9pc0Nsb3NlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG1ha2VFcnJvcignSW52YWxpZFN0YXRlRXJyb3InLFxuICAgICAgICAgICdDYW4gbm90IGNhbGwgY3JlYXRlT2ZmZXIgYWZ0ZXIgY2xvc2UnKSk7XG4gICAgfVxuXG4gICAgdmFyIG51bUF1ZGlvVHJhY2tzID0gcGMudHJhbnNjZWl2ZXJzLmZpbHRlcihmdW5jdGlvbih0KSB7XG4gICAgICByZXR1cm4gdC5raW5kID09PSAnYXVkaW8nO1xuICAgIH0pLmxlbmd0aDtcbiAgICB2YXIgbnVtVmlkZW9UcmFja3MgPSBwYy50cmFuc2NlaXZlcnMuZmlsdGVyKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHJldHVybiB0LmtpbmQgPT09ICd2aWRlbyc7XG4gICAgfSkubGVuZ3RoO1xuXG4gICAgLy8gRGV0ZXJtaW5lIG51bWJlciBvZiBhdWRpbyBhbmQgdmlkZW8gdHJhY2tzIHdlIG5lZWQgdG8gc2VuZC9yZWN2LlxuICAgIHZhciBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG4gICAgaWYgKG9mZmVyT3B0aW9ucykge1xuICAgICAgLy8gUmVqZWN0IENocm9tZSBsZWdhY3kgY29uc3RyYWludHMuXG4gICAgICBpZiAob2ZmZXJPcHRpb25zLm1hbmRhdG9yeSB8fCBvZmZlck9wdGlvbnMub3B0aW9uYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICdMZWdhY3kgbWFuZGF0b3J5L29wdGlvbmFsIGNvbnN0cmFpbnRzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9XG4gICAgICBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPT09IHRydWUpIHtcbiAgICAgICAgICBudW1BdWRpb1RyYWNrcyA9IDE7XG4gICAgICAgIH0gZWxzZSBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzID0gb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBudW1WaWRlb1RyYWNrcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHBjLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyKSB7XG4gICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICBudW1BdWRpb1RyYWNrcy0tO1xuICAgICAgICBpZiAobnVtQXVkaW9UcmFja3MgPCAwKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIud2FudFJlY2VpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgIG51bVZpZGVvVHJhY2tzLS07XG4gICAgICAgIGlmIChudW1WaWRlb1RyYWNrcyA8IDApIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci53YW50UmVjZWl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgTS1saW5lcyBmb3IgcmVjdm9ubHkgc3RyZWFtcy5cbiAgICB3aGlsZSAobnVtQXVkaW9UcmFja3MgPiAwIHx8IG51bVZpZGVvVHJhY2tzID4gMCkge1xuICAgICAgaWYgKG51bUF1ZGlvVHJhY2tzID4gMCkge1xuICAgICAgICBwYy5fY3JlYXRlVHJhbnNjZWl2ZXIoJ2F1ZGlvJyk7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICB9XG4gICAgICBpZiAobnVtVmlkZW9UcmFja3MgPiAwKSB7XG4gICAgICAgIHBjLl9jcmVhdGVUcmFuc2NlaXZlcigndmlkZW8nKTtcbiAgICAgICAgbnVtVmlkZW9UcmFja3MtLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUocGMuX3NkcFNlc3Npb25JZCxcbiAgICAgICAgcGMuX3NkcFNlc3Npb25WZXJzaW9uKyspO1xuICAgIHBjLnRyYW5zY2VpdmVycy5mb3JFYWNoKGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAvLyBGb3IgZWFjaCB0cmFjaywgY3JlYXRlIGFuIGljZSBnYXRoZXJlciwgaWNlIHRyYW5zcG9ydCxcbiAgICAgIC8vIGR0bHMgdHJhbnNwb3J0LCBwb3RlbnRpYWxseSBydHBzZW5kZXIgYW5kIHJ0cHJlY2VpdmVyLlxuICAgICAgdmFyIHRyYWNrID0gdHJhbnNjZWl2ZXIudHJhY2s7XG4gICAgICB2YXIga2luZCA9IHRyYW5zY2VpdmVyLmtpbmQ7XG4gICAgICB2YXIgbWlkID0gdHJhbnNjZWl2ZXIubWlkIHx8IFNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllcigpO1xuICAgICAgdHJhbnNjZWl2ZXIubWlkID0gbWlkO1xuXG4gICAgICBpZiAoIXRyYW5zY2VpdmVyLmljZUdhdGhlcmVyKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyID0gcGMuX2NyZWF0ZUljZUdhdGhlcmVyKHNkcE1MaW5lSW5kZXgsXG4gICAgICAgICAgICBwYy51c2luZ0J1bmRsZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcyA9IHdpbmRvdy5SVENSdHBTZW5kZXIuZ2V0Q2FwYWJpbGl0aWVzKGtpbmQpO1xuICAgICAgLy8gZmlsdGVyIFJUWCB1bnRpbCBhZGRpdGlvbmFsIHN0dWZmIG5lZWRlZCBmb3IgUlRYIGlzIGltcGxlbWVudGVkXG4gICAgICAvLyBpbiBhZGFwdGVyLmpzXG4gICAgICBpZiAoZWRnZVZlcnNpb24gPCAxNTAxOSkge1xuICAgICAgICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MgPSBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MuZmlsdGVyKFxuICAgICAgICAgICAgZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvZGVjLm5hbWUgIT09ICdydHgnO1xuICAgICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihjb2RlYykge1xuICAgICAgICAvLyB3b3JrIGFyb3VuZCBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9NjU1MlxuICAgICAgICAvLyBieSBhZGRpbmcgbGV2ZWwtYXN5bW1ldHJ5LWFsbG93ZWQ9MVxuICAgICAgICBpZiAoY29kZWMubmFtZSA9PT0gJ0gyNjQnICYmXG4gICAgICAgICAgICBjb2RlYy5wYXJhbWV0ZXJzWydsZXZlbC1hc3ltbWV0cnktYWxsb3dlZCddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjb2RlYy5wYXJhbWV0ZXJzWydsZXZlbC1hc3ltbWV0cnktYWxsb3dlZCddID0gJzEnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yIHN1YnNlcXVlbnQgb2ZmZXJzLCB3ZSBtaWdodCBoYXZlIHRvIHJlLXVzZSB0aGUgcGF5bG9hZFxuICAgICAgICAvLyB0eXBlIG9mIHRoZSBsYXN0IG9mZmVyLlxuICAgICAgICBpZiAodHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzICYmXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKHJlbW90ZUNvZGVjKSB7XG4gICAgICAgICAgICBpZiAoY29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSByZW1vdGVDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgJiZcbiAgICAgICAgICAgICAgICBjb2RlYy5jbG9ja1JhdGUgPT09IHJlbW90ZUNvZGVjLmNsb2NrUmF0ZSkge1xuICAgICAgICAgICAgICBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSA9IHJlbW90ZUNvZGVjLnBheWxvYWRUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihoZHJFeHQpIHtcbiAgICAgICAgdmFyIHJlbW90ZUV4dGVuc2lvbnMgPSB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXMgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zIHx8IFtdO1xuICAgICAgICByZW1vdGVFeHRlbnNpb25zLmZvckVhY2goZnVuY3Rpb24ockhkckV4dCkge1xuICAgICAgICAgIGlmIChoZHJFeHQudXJpID09PSBySGRyRXh0LnVyaSkge1xuICAgICAgICAgICAgaGRyRXh0LmlkID0gckhkckV4dC5pZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGdlbmVyYXRlIGFuIHNzcmMgbm93LCB0byBiZSB1c2VkIGxhdGVyIGluIHJ0cFNlbmRlci5zZW5kXG4gICAgICB2YXIgc2VuZEVuY29kaW5nUGFyYW1ldGVycyA9IHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgfHwgW3tcbiAgICAgICAgc3NyYzogKDIgKiBzZHBNTGluZUluZGV4ICsgMSkgKiAxMDAxXG4gICAgICB9XTtcbiAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAvLyBhZGQgUlRYXG4gICAgICAgIGlmIChlZGdlVmVyc2lvbiA+PSAxNTAxOSAmJiBraW5kID09PSAndmlkZW8nICYmXG4gICAgICAgICAgICAhc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHgpIHtcbiAgICAgICAgICBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCA9IHtcbiAgICAgICAgICAgIHNzcmM6IHNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArIDFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFuc2NlaXZlci53YW50UmVjZWl2ZSkge1xuICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlciA9IG5ldyB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIoXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LCBraW5kKTtcbiAgICAgIH1cblxuICAgICAgdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMgPSBsb2NhbENhcGFiaWxpdGllcztcbiAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnMgPSBzZW5kRW5jb2RpbmdQYXJhbWV0ZXJzO1xuICAgIH0pO1xuXG4gICAgLy8gYWx3YXlzIG9mZmVyIEJVTkRMRSBhbmQgZGlzcG9zZSBvbiByZXR1cm4gaWYgbm90IHN1cHBvcnRlZC5cbiAgICBpZiAocGMuX2NvbmZpZy5idW5kbGVQb2xpY3kgIT09ICdtYXgtY29tcGF0Jykge1xuICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgcGMudHJhbnNjZWl2ZXJzLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0Lm1pZDtcbiAgICAgIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuICAgIH1cbiAgICBzZHAgKz0gJ2E9aWNlLW9wdGlvbnM6dHJpY2tsZVxcclxcbic7XG5cbiAgICBwYy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlciwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgc2RwICs9IHdyaXRlTWVkaWFTZWN0aW9uKHRyYW5zY2VpdmVyLCB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICAnb2ZmZXInLCB0cmFuc2NlaXZlci5zdHJlYW0sIHBjLl9kdGxzUm9sZSk7XG4gICAgICBzZHAgKz0gJ2E9cnRjcC1yc2l6ZVxcclxcbic7XG5cbiAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJiBwYy5pY2VHYXRoZXJpbmdTdGF0ZSAhPT0gJ25ldycgJiZcbiAgICAgICAgICAoc2RwTUxpbmVJbmRleCA9PT0gMCB8fCAhcGMudXNpbmdCdW5kbGUpKSB7XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLmdldExvY2FsQ2FuZGlkYXRlcygpLmZvckVhY2goZnVuY3Rpb24oY2FuZCkge1xuICAgICAgICAgIGNhbmQuY29tcG9uZW50ID0gMTtcbiAgICAgICAgICBzZHAgKz0gJ2E9JyArIFNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlKGNhbmQpICsgJ1xcclxcbic7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5zdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgICBzZHAgKz0gJ2E9ZW5kLW9mLWNhbmRpZGF0ZXNcXHJcXG4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZGVzYyA9IG5ldyB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgIHR5cGU6ICdvZmZlcicsXG4gICAgICBzZHA6IHNkcFxuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVzYyk7XG4gIH07XG5cbiAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZUFuc3dlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwYyA9IHRoaXM7XG5cbiAgICBpZiAocGMuX2lzQ2xvc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobWFrZUVycm9yKCdJbnZhbGlkU3RhdGVFcnJvcicsXG4gICAgICAgICAgJ0NhbiBub3QgY2FsbCBjcmVhdGVBbnN3ZXIgYWZ0ZXIgY2xvc2UnKSk7XG4gICAgfVxuXG4gICAgaWYgKCEocGMuc2lnbmFsaW5nU3RhdGUgPT09ICdoYXZlLXJlbW90ZS1vZmZlcicgfHxcbiAgICAgICAgcGMuc2lnbmFsaW5nU3RhdGUgPT09ICdoYXZlLWxvY2FsLXByYW5zd2VyJykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChtYWtlRXJyb3IoJ0ludmFsaWRTdGF0ZUVycm9yJyxcbiAgICAgICAgICAnQ2FuIG5vdCBjYWxsIGNyZWF0ZUFuc3dlciBpbiBzaWduYWxpbmdTdGF0ZSAnICsgcGMuc2lnbmFsaW5nU3RhdGUpKTtcbiAgICB9XG5cbiAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUocGMuX3NkcFNlc3Npb25JZCxcbiAgICAgICAgcGMuX3NkcFNlc3Npb25WZXJzaW9uKyspO1xuICAgIGlmIChwYy51c2luZ0J1bmRsZSkge1xuICAgICAgc2RwICs9ICdhPWdyb3VwOkJVTkRMRSAnICsgcGMudHJhbnNjZWl2ZXJzLm1hcChmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0Lm1pZDtcbiAgICAgIH0pLmpvaW4oJyAnKSArICdcXHJcXG4nO1xuICAgIH1cbiAgICBzZHAgKz0gJ2E9aWNlLW9wdGlvbnM6dHJpY2tsZVxcclxcbic7XG5cbiAgICB2YXIgbWVkaWFTZWN0aW9uc0luT2ZmZXIgPSBTRFBVdGlscy5nZXRNZWRpYVNlY3Rpb25zKFxuICAgICAgICBwYy5fcmVtb3RlRGVzY3JpcHRpb24uc2RwKS5sZW5ndGg7XG4gICAgcGMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIGlmIChzZHBNTGluZUluZGV4ICsgMSA+IG1lZGlhU2VjdGlvbnNJbk9mZmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFuc2NlaXZlci5yZWplY3RlZCkge1xuICAgICAgICBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ2FwcGxpY2F0aW9uJykge1xuICAgICAgICAgIGlmICh0cmFuc2NlaXZlci5wcm90b2NvbCA9PT0gJ0RUTFMvU0NUUCcpIHsgLy8gbGVnYWN5IGZtdFxuICAgICAgICAgICAgc2RwICs9ICdtPWFwcGxpY2F0aW9uIDAgRFRMUy9TQ1RQIDUwMDBcXHJcXG4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZHAgKz0gJ209YXBwbGljYXRpb24gMCAnICsgdHJhbnNjZWl2ZXIucHJvdG9jb2wgK1xuICAgICAgICAgICAgICAgICcgd2VicnRjLWRhdGFjaGFubmVsXFxyXFxuJztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgIHNkcCArPSAnbT1hdWRpbyAwIFVEUC9UTFMvUlRQL1NBVlBGIDBcXHJcXG4nICtcbiAgICAgICAgICAgICAgJ2E9cnRwbWFwOjAgUENNVS84MDAwXFxyXFxuJztcbiAgICAgICAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgc2RwICs9ICdtPXZpZGVvIDAgVURQL1RMUy9SVFAvU0FWUEYgMTIwXFxyXFxuJyArXG4gICAgICAgICAgICAgICdhPXJ0cG1hcDoxMjAgVlA4LzkwMDAwXFxyXFxuJztcbiAgICAgICAgfVxuICAgICAgICBzZHAgKz0gJ2M9SU4gSVA0IDAuMC4wLjBcXHJcXG4nICtcbiAgICAgICAgICAgICdhPWluYWN0aXZlXFxyXFxuJyArXG4gICAgICAgICAgICAnYT1taWQ6JyArIHRyYW5zY2VpdmVyLm1pZCArICdcXHJcXG4nO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEZJWE1FOiBsb29rIGF0IGRpcmVjdGlvbi5cbiAgICAgIGlmICh0cmFuc2NlaXZlci5zdHJlYW0pIHtcbiAgICAgICAgdmFyIGxvY2FsVHJhY2s7XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5raW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgbG9jYWxUcmFjayA9IHRyYW5zY2VpdmVyLnN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdO1xuICAgICAgICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLmtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICBsb2NhbFRyYWNrID0gdHJhbnNjZWl2ZXIuc3RyZWFtLmdldFZpZGVvVHJhY2tzKClbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsVHJhY2spIHtcbiAgICAgICAgICAvLyBhZGQgUlRYXG4gICAgICAgICAgaWYgKGVkZ2VWZXJzaW9uID49IDE1MDE5ICYmIHRyYW5zY2VpdmVyLmtpbmQgPT09ICd2aWRlbycgJiZcbiAgICAgICAgICAgICAgIXRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgICAgICAgICB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCA9IHtcbiAgICAgICAgICAgICAgc3NyYzogdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0gZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgIHZhciBoYXNSdHggPSBjb21tb25DYXBhYmlsaXRpZXMuY29kZWNzLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBjLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3J0eCc7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBpZiAoIWhhc1J0eCAmJiB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eCkge1xuICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHg7XG4gICAgICB9XG5cbiAgICAgIHNkcCArPSB3cml0ZU1lZGlhU2VjdGlvbih0cmFuc2NlaXZlciwgY29tbW9uQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICdhbnN3ZXInLCB0cmFuc2NlaXZlci5zdHJlYW0sIHBjLl9kdGxzUm9sZSk7XG4gICAgICBpZiAodHJhbnNjZWl2ZXIucnRjcFBhcmFtZXRlcnMgJiZcbiAgICAgICAgICB0cmFuc2NlaXZlci5ydGNwUGFyYW1ldGVycy5yZWR1Y2VkU2l6ZSkge1xuICAgICAgICBzZHAgKz0gJ2E9cnRjcC1yc2l6ZVxcclxcbic7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgZGVzYyA9IG5ldyB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgIHR5cGU6ICdhbnN3ZXInLFxuICAgICAgc2RwOiBzZHBcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlc2MpO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbihjYW5kaWRhdGUpIHtcbiAgICB2YXIgcGMgPSB0aGlzO1xuICAgIHZhciBzZWN0aW9ucztcbiAgICBpZiAoY2FuZGlkYXRlICYmICEoY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXggIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBjYW5kaWRhdGUuc2RwTWlkKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ3NkcE1MaW5lSW5kZXggb3Igc2RwTWlkIHJlcXVpcmVkJykpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IG5lZWRzIHRvIGdvIGludG8gb3BzIHF1ZXVlLlxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghcGMuX3JlbW90ZURlc2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiByZWplY3QobWFrZUVycm9yKCdJbnZhbGlkU3RhdGVFcnJvcicsXG4gICAgICAgICAgICAnQ2FuIG5vdCBhZGQgSUNFIGNhbmRpZGF0ZSB3aXRob3V0IGEgcmVtb3RlIGRlc2NyaXB0aW9uJykpO1xuICAgICAgfSBlbHNlIGlmICghY2FuZGlkYXRlIHx8IGNhbmRpZGF0ZS5jYW5kaWRhdGUgPT09ICcnKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKHBjLnRyYW5zY2VpdmVyc1tqXS5yZWplY3RlZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBjLnRyYW5zY2VpdmVyc1tqXS5pY2VUcmFuc3BvcnQuYWRkUmVtb3RlQ2FuZGlkYXRlKHt9KTtcbiAgICAgICAgICBzZWN0aW9ucyA9IFNEUFV0aWxzLmdldE1lZGlhU2VjdGlvbnMocGMuX3JlbW90ZURlc2NyaXB0aW9uLnNkcCk7XG4gICAgICAgICAgc2VjdGlvbnNbal0gKz0gJ2E9ZW5kLW9mLWNhbmRpZGF0ZXNcXHJcXG4nO1xuICAgICAgICAgIHBjLl9yZW1vdGVEZXNjcmlwdGlvbi5zZHAgPVxuICAgICAgICAgICAgICBTRFBVdGlscy5nZXREZXNjcmlwdGlvbihwYy5fcmVtb3RlRGVzY3JpcHRpb24uc2RwKSArXG4gICAgICAgICAgICAgIHNlY3Rpb25zLmpvaW4oJycpO1xuICAgICAgICAgIGlmIChwYy51c2luZ0J1bmRsZSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2RwTUxpbmVJbmRleCA9IGNhbmRpZGF0ZS5zZHBNTGluZUluZGV4O1xuICAgICAgICBpZiAoY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGMudHJhbnNjZWl2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGMudHJhbnNjZWl2ZXJzW2ldLm1pZCA9PT0gY2FuZGlkYXRlLnNkcE1pZCkge1xuICAgICAgICAgICAgICBzZHBNTGluZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciB0cmFuc2NlaXZlciA9IHBjLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XTtcbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyKSB7XG4gICAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnJlamVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgY2FuZCA9IE9iamVjdC5rZXlzKGNhbmRpZGF0ZS5jYW5kaWRhdGUpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgICBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZShjYW5kaWRhdGUuY2FuZGlkYXRlKSA6IHt9O1xuICAgICAgICAgIC8vIElnbm9yZSBDaHJvbWUncyBpbnZhbGlkIGNhbmRpZGF0ZXMgc2luY2UgRWRnZSBkb2VzIG5vdCBsaWtlIHRoZW0uXG4gICAgICAgICAgaWYgKGNhbmQucHJvdG9jb2wgPT09ICd0Y3AnICYmIChjYW5kLnBvcnQgPT09IDAgfHwgY2FuZC5wb3J0ID09PSA5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWdub3JlIFJUQ1AgY2FuZGlkYXRlcywgd2UgYXNzdW1lIFJUQ1AtTVVYLlxuICAgICAgICAgIGlmIChjYW5kLmNvbXBvbmVudCAmJiBjYW5kLmNvbXBvbmVudCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2hlbiB1c2luZyBidW5kbGUsIGF2b2lkIGFkZGluZyBjYW5kaWRhdGVzIHRvIHRoZSB3cm9uZ1xuICAgICAgICAgIC8vIGljZSB0cmFuc3BvcnQuIEFuZCBhdm9pZCBhZGRpbmcgY2FuZGlkYXRlcyBhZGRlZCBpbiB0aGUgU0RQLlxuICAgICAgICAgIGlmIChzZHBNTGluZUluZGV4ID09PSAwIHx8IChzZHBNTGluZUluZGV4ID4gMCAmJlxuICAgICAgICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQgIT09IHBjLnRyYW5zY2VpdmVyc1swXS5pY2VUcmFuc3BvcnQpKSB7XG4gICAgICAgICAgICBpZiAoIW1heWJlQWRkQ2FuZGlkYXRlKHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCwgY2FuZCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChtYWtlRXJyb3IoJ09wZXJhdGlvbkVycm9yJyxcbiAgICAgICAgICAgICAgICAgICdDYW4gbm90IGFkZCBJQ0UgY2FuZGlkYXRlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgcmVtb3RlRGVzY3JpcHRpb24uXG4gICAgICAgICAgdmFyIGNhbmRpZGF0ZVN0cmluZyA9IGNhbmRpZGF0ZS5jYW5kaWRhdGUudHJpbSgpO1xuICAgICAgICAgIGlmIChjYW5kaWRhdGVTdHJpbmcuaW5kZXhPZignYT0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY2FuZGlkYXRlU3RyaW5nID0gY2FuZGlkYXRlU3RyaW5nLnN1YnN0cigyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2VjdGlvbnMgPSBTRFBVdGlscy5nZXRNZWRpYVNlY3Rpb25zKHBjLl9yZW1vdGVEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgICAgIHNlY3Rpb25zW3NkcE1MaW5lSW5kZXhdICs9ICdhPScgK1xuICAgICAgICAgICAgICAoY2FuZC50eXBlID8gY2FuZGlkYXRlU3RyaW5nIDogJ2VuZC1vZi1jYW5kaWRhdGVzJylcbiAgICAgICAgICAgICAgKyAnXFxyXFxuJztcbiAgICAgICAgICBwYy5fcmVtb3RlRGVzY3JpcHRpb24uc2RwID1cbiAgICAgICAgICAgICAgU0RQVXRpbHMuZ2V0RGVzY3JpcHRpb24ocGMuX3JlbW90ZURlc2NyaXB0aW9uLnNkcCkgK1xuICAgICAgICAgICAgICBzZWN0aW9ucy5qb2luKCcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG1ha2VFcnJvcignT3BlcmF0aW9uRXJyb3InLFxuICAgICAgICAgICAgICAnQ2FuIG5vdCBhZGQgSUNFIGNhbmRpZGF0ZScpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yICYmIHNlbGVjdG9yIGluc3RhbmNlb2Ygd2luZG93Lk1lZGlhU3RyZWFtVHJhY2spIHtcbiAgICAgIHZhciBzZW5kZXJPclJlY2VpdmVyID0gbnVsbDtcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlciAmJlxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnRyYWNrID09PSBzZWxlY3Rvcikge1xuICAgICAgICAgIHNlbmRlck9yUmVjZWl2ZXIgPSB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIgJiZcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyLnRyYWNrID09PSBzZWxlY3Rvcikge1xuICAgICAgICAgIHNlbmRlck9yUmVjZWl2ZXIgPSB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIXNlbmRlck9yUmVjZWl2ZXIpIHtcbiAgICAgICAgdGhyb3cgbWFrZUVycm9yKCdJbnZhbGlkQWNjZXNzRXJyb3InLCAnSW52YWxpZCBzZWxlY3Rvci4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZW5kZXJPclJlY2VpdmVyLmdldFN0YXRzKCk7XG4gICAgfVxuXG4gICAgdmFyIHByb21pc2VzID0gW107XG4gICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgWydydHBTZW5kZXInLCAncnRwUmVjZWl2ZXInLCAnaWNlR2F0aGVyZXInLCAnaWNlVHJhbnNwb3J0JyxcbiAgICAgICAgICAnZHRsc1RyYW5zcG9ydCddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgICBpZiAodHJhbnNjZWl2ZXJbbWV0aG9kXSkge1xuICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRyYW5zY2VpdmVyW21ldGhvZF0uZ2V0U3RhdHMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFsbFN0YXRzKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IG5ldyBNYXAoKTtcbiAgICAgIGFsbFN0YXRzLmZvckVhY2goZnVuY3Rpb24oc3RhdHMpIHtcbiAgICAgICAgc3RhdHMuZm9yRWFjaChmdW5jdGlvbihzdGF0KSB7XG4gICAgICAgICAgcmVzdWx0cy5zZXQoc3RhdC5pZCwgc3RhdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9KTtcbiAgfTtcblxuICAvLyBmaXggbG93LWxldmVsIHN0YXQgbmFtZXMgYW5kIHJldHVybiBNYXAgaW5zdGVhZCBvZiBvYmplY3QuXG4gIHZhciBvcnRjT2JqZWN0cyA9IFsnUlRDUnRwU2VuZGVyJywgJ1JUQ1J0cFJlY2VpdmVyJywgJ1JUQ0ljZUdhdGhlcmVyJyxcbiAgICAnUlRDSWNlVHJhbnNwb3J0JywgJ1JUQ0R0bHNUcmFuc3BvcnQnXTtcbiAgb3J0Y09iamVjdHMuZm9yRWFjaChmdW5jdGlvbihvcnRjT2JqZWN0TmFtZSkge1xuICAgIHZhciBvYmogPSB3aW5kb3dbb3J0Y09iamVjdE5hbWVdO1xuICAgIGlmIChvYmogJiYgb2JqLnByb3RvdHlwZSAmJiBvYmoucHJvdG90eXBlLmdldFN0YXRzKSB7XG4gICAgICB2YXIgbmF0aXZlR2V0c3RhdHMgPSBvYmoucHJvdG90eXBlLmdldFN0YXRzO1xuICAgICAgb2JqLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbmF0aXZlR2V0c3RhdHMuYXBwbHkodGhpcylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24obmF0aXZlU3RhdHMpIHtcbiAgICAgICAgICB2YXIgbWFwU3RhdHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgT2JqZWN0LmtleXMobmF0aXZlU3RhdHMpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgIG5hdGl2ZVN0YXRzW2lkXS50eXBlID0gZml4U3RhdHNUeXBlKG5hdGl2ZVN0YXRzW2lkXSk7XG4gICAgICAgICAgICBtYXBTdGF0cy5zZXQoaWQsIG5hdGl2ZVN0YXRzW2lkXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIG1hcFN0YXRzO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICAvLyBsZWdhY3kgY2FsbGJhY2sgc2hpbXMuIFNob3VsZCBiZSBtb3ZlZCB0byBhZGFwdGVyLmpzIHNvbWUgZGF5cy5cbiAgdmFyIG1ldGhvZHMgPSBbJ2NyZWF0ZU9mZmVyJywgJ2NyZWF0ZUFuc3dlciddO1xuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIG5hdGl2ZU1ldGhvZCA9IFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgIHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7IC8vIGxlZ2FjeVxuICAgICAgICByZXR1cm4gbmF0aXZlTWV0aG9kLmFwcGx5KHRoaXMsIFthcmd1bWVudHNbMl1dKVxuICAgICAgICAudGhlbihmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJnc1swXS5hcHBseShudWxsLCBbZGVzY3JpcHRpb25dKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzWzFdLmFwcGx5KG51bGwsIFtlcnJvcl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgbWV0aG9kcyA9IFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbicsICdhZGRJY2VDYW5kaWRhdGUnXTtcbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBuYXRpdmVNZXRob2QgPSBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICBSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICB0eXBlb2YgYXJnc1syXSA9PT0gJ2Z1bmN0aW9uJykgeyAvLyBsZWdhY3lcbiAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYXJnc1sxXS5hcHBseShudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzWzJdLmFwcGx5KG51bGwsIFtlcnJvcl0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gZ2V0U3RhdHMgaXMgc3BlY2lhbC4gSXQgZG9lc24ndCBoYXZlIGEgc3BlYyBsZWdhY3kgbWV0aG9kIHlldCB3ZSBzdXBwb3J0XG4gIC8vIGdldFN0YXRzKHNvbWV0aGluZywgY2IpIHdpdGhvdXQgZXJyb3IgY2FsbGJhY2tzLlxuICBbJ2dldFN0YXRzJ10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgbmF0aXZlTWV0aG9kID0gUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGFyZ3NbMV0uYXBwbHkobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gUlRDUGVlckNvbm5lY3Rpb247XG59O1xuIiwiLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIFNEUCBoZWxwZXJzLlxudmFyIFNEUFV0aWxzID0ge307XG5cbi8vIEdlbmVyYXRlIGFuIGFscGhhbnVtZXJpYyBpZGVudGlmaWVyIGZvciBjbmFtZSBvciBtaWRzLlxuLy8gVE9ETzogdXNlIFVVSURzIGluc3RlYWQ/IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plZC85ODI4ODNcblNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllciA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEwKTtcbn07XG5cbi8vIFRoZSBSVENQIENOQU1FIHVzZWQgYnkgYWxsIHBlZXJjb25uZWN0aW9ucyBmcm9tIHRoZSBzYW1lIEpTLlxuU0RQVXRpbHMubG9jYWxDTmFtZSA9IFNEUFV0aWxzLmdlbmVyYXRlSWRlbnRpZmllcigpO1xuXG4vLyBTcGxpdHMgU0RQIGludG8gbGluZXMsIGRlYWxpbmcgd2l0aCBib3RoIENSTEYgYW5kIExGLlxuU0RQVXRpbHMuc3BsaXRMaW5lcyA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgcmV0dXJuIGJsb2IudHJpbSgpLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBsaW5lLnRyaW0oKTtcbiAgfSk7XG59O1xuLy8gU3BsaXRzIFNEUCBpbnRvIHNlc3Npb25wYXJ0IGFuZCBtZWRpYXNlY3Rpb25zLiBFbnN1cmVzIENSTEYuXG5TRFBVdGlscy5zcGxpdFNlY3Rpb25zID0gZnVuY3Rpb24oYmxvYikge1xuICB2YXIgcGFydHMgPSBibG9iLnNwbGl0KCdcXG5tPScpO1xuICByZXR1cm4gcGFydHMubWFwKGZ1bmN0aW9uKHBhcnQsIGluZGV4KSB7XG4gICAgcmV0dXJuIChpbmRleCA+IDAgPyAnbT0nICsgcGFydCA6IHBhcnQpLnRyaW0oKSArICdcXHJcXG4nO1xuICB9KTtcbn07XG5cbi8vIHJldHVybnMgdGhlIHNlc3Npb24gZGVzY3JpcHRpb24uXG5TRFBVdGlscy5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhibG9iKTtcbiAgcmV0dXJuIHNlY3Rpb25zICYmIHNlY3Rpb25zWzBdO1xufTtcblxuLy8gcmV0dXJucyB0aGUgaW5kaXZpZHVhbCBtZWRpYSBzZWN0aW9ucy5cblNEUFV0aWxzLmdldE1lZGlhU2VjdGlvbnMgPSBmdW5jdGlvbihibG9iKSB7XG4gIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoYmxvYik7XG4gIHNlY3Rpb25zLnNoaWZ0KCk7XG4gIHJldHVybiBzZWN0aW9ucztcbn07XG5cbi8vIFJldHVybnMgbGluZXMgdGhhdCBzdGFydCB3aXRoIGEgY2VydGFpbiBwcmVmaXguXG5TRFBVdGlscy5tYXRjaFByZWZpeCA9IGZ1bmN0aW9uKGJsb2IsIHByZWZpeCkge1xuICByZXR1cm4gU0RQVXRpbHMuc3BsaXRMaW5lcyhibG9iKS5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgIHJldHVybiBsaW5lLmluZGV4T2YocHJlZml4KSA9PT0gMDtcbiAgfSk7XG59O1xuXG4vLyBQYXJzZXMgYW4gSUNFIGNhbmRpZGF0ZSBsaW5lLiBTYW1wbGUgaW5wdXQ6XG4vLyBjYW5kaWRhdGU6NzAyNzg2MzUwIDIgdWRwIDQxODE5OTAyIDguOC44LjggNjA3NjkgdHlwIHJlbGF5IHJhZGRyIDguOC44Ljhcbi8vIHJwb3J0IDU1OTk2XCJcblNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHM7XG4gIC8vIFBhcnNlIGJvdGggdmFyaWFudHMuXG4gIGlmIChsaW5lLmluZGV4T2YoJ2E9Y2FuZGlkYXRlOicpID09PSAwKSB7XG4gICAgcGFydHMgPSBsaW5lLnN1YnN0cmluZygxMikuc3BsaXQoJyAnKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEwKS5zcGxpdCgnICcpO1xuICB9XG5cbiAgdmFyIGNhbmRpZGF0ZSA9IHtcbiAgICBmb3VuZGF0aW9uOiBwYXJ0c1swXSxcbiAgICBjb21wb25lbnQ6IHBhcnNlSW50KHBhcnRzWzFdLCAxMCksXG4gICAgcHJvdG9jb2w6IHBhcnRzWzJdLnRvTG93ZXJDYXNlKCksXG4gICAgcHJpb3JpdHk6IHBhcnNlSW50KHBhcnRzWzNdLCAxMCksXG4gICAgaXA6IHBhcnRzWzRdLFxuICAgIGFkZHJlc3M6IHBhcnRzWzRdLCAvLyBhZGRyZXNzIGlzIGFuIGFsaWFzIGZvciBpcC5cbiAgICBwb3J0OiBwYXJzZUludChwYXJ0c1s1XSwgMTApLFxuICAgIC8vIHNraXAgcGFydHNbNl0gPT0gJ3R5cCdcbiAgICB0eXBlOiBwYXJ0c1s3XVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSA4OyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzd2l0Y2ggKHBhcnRzW2ldKSB7XG4gICAgICBjYXNlICdyYWRkcic6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdycG9ydCc6XG4gICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCA9IHBhcnNlSW50KHBhcnRzW2kgKyAxXSwgMTApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RjcHR5cGUnOlxuICAgICAgICBjYW5kaWRhdGUudGNwVHlwZSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1ZnJhZyc6XG4gICAgICAgIGNhbmRpZGF0ZS51ZnJhZyA9IHBhcnRzW2kgKyAxXTsgLy8gZm9yIGJhY2t3YXJkIGNvbXBhYmlsaXR5LlxuICAgICAgICBjYW5kaWRhdGUudXNlcm5hbWVGcmFnbWVudCA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiAvLyBleHRlbnNpb24gaGFuZGxpbmcsIGluIHBhcnRpY3VsYXIgdWZyYWdcbiAgICAgICAgY2FuZGlkYXRlW3BhcnRzW2ldXSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBjYW5kaWRhdGU7XG59O1xuXG4vLyBUcmFuc2xhdGVzIGEgY2FuZGlkYXRlIG9iamVjdCBpbnRvIFNEUCBjYW5kaWRhdGUgYXR0cmlidXRlLlxuU0RQVXRpbHMud3JpdGVDYW5kaWRhdGUgPSBmdW5jdGlvbihjYW5kaWRhdGUpIHtcbiAgdmFyIHNkcCA9IFtdO1xuICBzZHAucHVzaChjYW5kaWRhdGUuZm91bmRhdGlvbik7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5jb21wb25lbnQpO1xuICBzZHAucHVzaChjYW5kaWRhdGUucHJvdG9jb2wudG9VcHBlckNhc2UoKSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wcmlvcml0eSk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5hZGRyZXNzIHx8IGNhbmRpZGF0ZS5pcCk7XG4gIHNkcC5wdXNoKGNhbmRpZGF0ZS5wb3J0KTtcblxuICB2YXIgdHlwZSA9IGNhbmRpZGF0ZS50eXBlO1xuICBzZHAucHVzaCgndHlwJyk7XG4gIHNkcC5wdXNoKHR5cGUpO1xuICBpZiAodHlwZSAhPT0gJ2hvc3QnICYmIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyAmJlxuICAgICAgY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KSB7XG4gICAgc2RwLnB1c2goJ3JhZGRyJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRBZGRyZXNzKTtcbiAgICBzZHAucHVzaCgncnBvcnQnKTtcbiAgICBzZHAucHVzaChjYW5kaWRhdGUucmVsYXRlZFBvcnQpO1xuICB9XG4gIGlmIChjYW5kaWRhdGUudGNwVHlwZSAmJiBjYW5kaWRhdGUucHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PT0gJ3RjcCcpIHtcbiAgICBzZHAucHVzaCgndGNwdHlwZScpO1xuICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS50Y3BUeXBlKTtcbiAgfVxuICBpZiAoY2FuZGlkYXRlLnVzZXJuYW1lRnJhZ21lbnQgfHwgY2FuZGlkYXRlLnVmcmFnKSB7XG4gICAgc2RwLnB1c2goJ3VmcmFnJyk7XG4gICAgc2RwLnB1c2goY2FuZGlkYXRlLnVzZXJuYW1lRnJhZ21lbnQgfHwgY2FuZGlkYXRlLnVmcmFnKTtcbiAgfVxuICByZXR1cm4gJ2NhbmRpZGF0ZTonICsgc2RwLmpvaW4oJyAnKTtcbn07XG5cbi8vIFBhcnNlcyBhbiBpY2Utb3B0aW9ucyBsaW5lLCByZXR1cm5zIGFuIGFycmF5IG9mIG9wdGlvbiB0YWdzLlxuLy8gYT1pY2Utb3B0aW9uczpmb28gYmFyXG5TRFBVdGlscy5wYXJzZUljZU9wdGlvbnMgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHJldHVybiBsaW5lLnN1YnN0cigxNCkuc3BsaXQoJyAnKTtcbn07XG5cbi8vIFBhcnNlcyBhbiBydHBtYXAgbGluZSwgcmV0dXJucyBSVENSdHBDb2RkZWNQYXJhbWV0ZXJzLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXJ0cG1hcDoxMTEgb3B1cy80ODAwMC8yXG5TRFBVdGlscy5wYXJzZVJ0cE1hcCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoOSkuc3BsaXQoJyAnKTtcbiAgdmFyIHBhcnNlZCA9IHtcbiAgICBwYXlsb2FkVHlwZTogcGFyc2VJbnQocGFydHMuc2hpZnQoKSwgMTApIC8vIHdhczogaWRcbiAgfTtcblxuICBwYXJ0cyA9IHBhcnRzWzBdLnNwbGl0KCcvJyk7XG5cbiAgcGFyc2VkLm5hbWUgPSBwYXJ0c1swXTtcbiAgcGFyc2VkLmNsb2NrUmF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7IC8vIHdhczogY2xvY2tyYXRlXG4gIHBhcnNlZC5jaGFubmVscyA9IHBhcnRzLmxlbmd0aCA9PT0gMyA/IHBhcnNlSW50KHBhcnRzWzJdLCAxMCkgOiAxO1xuICAvLyBsZWdhY3kgYWxpYXMsIGdvdCByZW5hbWVkIGJhY2sgdG8gY2hhbm5lbHMgaW4gT1JUQy5cbiAgcGFyc2VkLm51bUNoYW5uZWxzID0gcGFyc2VkLmNoYW5uZWxzO1xuICByZXR1cm4gcGFyc2VkO1xufTtcblxuLy8gR2VuZXJhdGUgYW4gYT1ydHBtYXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvclxuLy8gUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBNYXAgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICB9XG4gIHZhciBjaGFubmVscyA9IGNvZGVjLmNoYW5uZWxzIHx8IGNvZGVjLm51bUNoYW5uZWxzIHx8IDE7XG4gIHJldHVybiAnYT1ydHBtYXA6JyArIHB0ICsgJyAnICsgY29kZWMubmFtZSArICcvJyArIGNvZGVjLmNsb2NrUmF0ZSArXG4gICAgICAoY2hhbm5lbHMgIT09IDEgPyAnLycgKyBjaGFubmVscyA6ICcnKSArICdcXHJcXG4nO1xufTtcblxuLy8gUGFyc2VzIGFuIGE9ZXh0bWFwIGxpbmUgKGhlYWRlcmV4dGVuc2lvbiBmcm9tIFJGQyA1Mjg1KS4gU2FtcGxlIGlucHV0OlxuLy8gYT1leHRtYXA6MiB1cm46aWV0ZjpwYXJhbXM6cnRwLWhkcmV4dDp0b2Zmc2V0XG4vLyBhPWV4dG1hcDoyL3NlbmRvbmx5IHVybjppZXRmOnBhcmFtczpydHAtaGRyZXh0OnRvZmZzZXRcblNEUFV0aWxzLnBhcnNlRXh0bWFwID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cig5KS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGlkOiBwYXJzZUludChwYXJ0c1swXSwgMTApLFxuICAgIGRpcmVjdGlvbjogcGFydHNbMF0uaW5kZXhPZignLycpID4gMCA/IHBhcnRzWzBdLnNwbGl0KCcvJylbMV0gOiAnc2VuZHJlY3YnLFxuICAgIHVyaTogcGFydHNbMV1cbiAgfTtcbn07XG5cbi8vIEdlbmVyYXRlcyBhPWV4dG1hcCBsaW5lIGZyb20gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uUGFyYW1ldGVycyBvclxuLy8gUlRDUnRwSGVhZGVyRXh0ZW5zaW9uLlxuU0RQVXRpbHMud3JpdGVFeHRtYXAgPSBmdW5jdGlvbihoZWFkZXJFeHRlbnNpb24pIHtcbiAgcmV0dXJuICdhPWV4dG1hcDonICsgKGhlYWRlckV4dGVuc2lvbi5pZCB8fCBoZWFkZXJFeHRlbnNpb24ucHJlZmVycmVkSWQpICtcbiAgICAgIChoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uICYmIGhlYWRlckV4dGVuc2lvbi5kaXJlY3Rpb24gIT09ICdzZW5kcmVjdidcbiAgICAgICAgPyAnLycgKyBoZWFkZXJFeHRlbnNpb24uZGlyZWN0aW9uXG4gICAgICAgIDogJycpICtcbiAgICAgICcgJyArIGhlYWRlckV4dGVuc2lvbi51cmkgKyAnXFxyXFxuJztcbn07XG5cbi8vIFBhcnNlcyBhbiBmdG1wIGxpbmUsIHJldHVybnMgZGljdGlvbmFyeS4gU2FtcGxlIGlucHV0OlxuLy8gYT1mbXRwOjk2IHZicj1vbjtjbmc9b25cbi8vIEFsc28gZGVhbHMgd2l0aCB2YnI9b247IGNuZz1vblxuU0RQVXRpbHMucGFyc2VGbXRwID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrdjtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKCcgJykgKyAxKS5zcGxpdCgnOycpO1xuICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAga3YgPSBwYXJ0c1tqXS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICBwYXJzZWRba3ZbMF0udHJpbSgpXSA9IGt2WzFdO1xuICB9XG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG4vLyBHZW5lcmF0ZXMgYW4gYT1mdG1wIGxpbmUgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVGbXRwID0gZnVuY3Rpb24oY29kZWMpIHtcbiAgdmFyIGxpbmUgPSAnJztcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICBpZiAoY29kZWMucGFyYW1ldGVycyAmJiBPYmplY3Qua2V5cyhjb2RlYy5wYXJhbWV0ZXJzKS5sZW5ndGgpIHtcbiAgICB2YXIgcGFyYW1zID0gW107XG4gICAgT2JqZWN0LmtleXMoY29kZWMucGFyYW1ldGVycykuZm9yRWFjaChmdW5jdGlvbihwYXJhbSkge1xuICAgICAgaWYgKGNvZGVjLnBhcmFtZXRlcnNbcGFyYW1dKSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKHBhcmFtICsgJz0nICsgY29kZWMucGFyYW1ldGVyc1twYXJhbV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyYW1zLnB1c2gocGFyYW0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxpbmUgKz0gJ2E9Zm10cDonICsgcHQgKyAnICcgKyBwYXJhbXMuam9pbignOycpICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIGxpbmU7XG59O1xuXG4vLyBQYXJzZXMgYW4gcnRjcC1mYiBsaW5lLCByZXR1cm5zIFJUQ1BSdGNwRmVlZGJhY2sgb2JqZWN0LiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXJ0Y3AtZmI6OTggbmFjayBycHNpXG5TRFBVdGlscy5wYXJzZVJ0Y3BGYiA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIobGluZS5pbmRleE9mKCcgJykgKyAxKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IHBhcnRzLnNoaWZ0KCksXG4gICAgcGFyYW1ldGVyOiBwYXJ0cy5qb2luKCcgJylcbiAgfTtcbn07XG4vLyBHZW5lcmF0ZSBhPXJ0Y3AtZmIgbGluZXMgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdGNwRmIgPSBmdW5jdGlvbihjb2RlYykge1xuICB2YXIgbGluZXMgPSAnJztcbiAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgfVxuICBpZiAoY29kZWMucnRjcEZlZWRiYWNrICYmIGNvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGgpIHtcbiAgICAvLyBGSVhNRTogc3BlY2lhbCBoYW5kbGluZyBmb3IgdHJyLWludD9cbiAgICBjb2RlYy5ydGNwRmVlZGJhY2suZm9yRWFjaChmdW5jdGlvbihmYikge1xuICAgICAgbGluZXMgKz0gJ2E9cnRjcC1mYjonICsgcHQgKyAnICcgKyBmYi50eXBlICtcbiAgICAgIChmYi5wYXJhbWV0ZXIgJiYgZmIucGFyYW1ldGVyLmxlbmd0aCA/ICcgJyArIGZiLnBhcmFtZXRlciA6ICcnKSArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGxpbmVzO1xufTtcblxuLy8gUGFyc2VzIGFuIFJGQyA1NTc2IHNzcmMgbWVkaWEgYXR0cmlidXRlLiBTYW1wbGUgaW5wdXQ6XG4vLyBhPXNzcmM6MzczNTkyODU1OSBjbmFtZTpzb21ldGhpbmdcblNEUFV0aWxzLnBhcnNlU3NyY01lZGlhID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgc3AgPSBsaW5lLmluZGV4T2YoJyAnKTtcbiAgdmFyIHBhcnRzID0ge1xuICAgIHNzcmM6IHBhcnNlSW50KGxpbmUuc3Vic3RyKDcsIHNwIC0gNyksIDEwKVxuICB9O1xuICB2YXIgY29sb24gPSBsaW5lLmluZGV4T2YoJzonLCBzcCk7XG4gIGlmIChjb2xvbiA+IC0xKSB7XG4gICAgcGFydHMuYXR0cmlidXRlID0gbGluZS5zdWJzdHIoc3AgKyAxLCBjb2xvbiAtIHNwIC0gMSk7XG4gICAgcGFydHMudmFsdWUgPSBsaW5lLnN1YnN0cihjb2xvbiArIDEpO1xuICB9IGVsc2Uge1xuICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSk7XG4gIH1cbiAgcmV0dXJuIHBhcnRzO1xufTtcblxuU0RQVXRpbHMucGFyc2VTc3JjR3JvdXAgPSBmdW5jdGlvbihsaW5lKSB7XG4gIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDEzKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIHNlbWFudGljczogcGFydHMuc2hpZnQoKSxcbiAgICBzc3JjczogcGFydHMubWFwKGZ1bmN0aW9uKHNzcmMpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzc3JjLCAxMCk7XG4gICAgfSlcbiAgfTtcbn07XG5cbi8vIEV4dHJhY3RzIHRoZSBNSUQgKFJGQyA1ODg4KSBmcm9tIGEgbWVkaWEgc2VjdGlvbi5cbi8vIHJldHVybnMgdGhlIE1JRCBvciB1bmRlZmluZWQgaWYgbm8gbWlkIGxpbmUgd2FzIGZvdW5kLlxuU0RQVXRpbHMuZ2V0TWlkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBtaWQgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1pZDonKVswXTtcbiAgaWYgKG1pZCkge1xuICAgIHJldHVybiBtaWQuc3Vic3RyKDYpO1xuICB9XG59O1xuXG5TRFBVdGlscy5wYXJzZUZpbmdlcnByaW50ID0gZnVuY3Rpb24obGluZSkge1xuICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cigxNCkuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIHtcbiAgICBhbGdvcml0aG06IHBhcnRzWzBdLnRvTG93ZXJDYXNlKCksIC8vIGFsZ29yaXRobSBpcyBjYXNlLXNlbnNpdGl2ZSBpbiBFZGdlLlxuICAgIHZhbHVlOiBwYXJ0c1sxXVxuICB9O1xufTtcblxuLy8gRXh0cmFjdHMgRFRMUyBwYXJhbWV0ZXJzIGZyb20gU0RQIG1lZGlhIHNlY3Rpb24gb3Igc2Vzc2lvbnBhcnQuXG4vLyBGSVhNRTogZm9yIGNvbnNpc3RlbmN5IHdpdGggb3RoZXIgZnVuY3Rpb25zIHRoaXMgc2hvdWxkIG9ubHlcbi8vICAgZ2V0IHRoZSBmaW5nZXJwcmludCBsaW5lIGFzIGlucHV0LiBTZWUgYWxzbyBnZXRJY2VQYXJhbWV0ZXJzLlxuU0RQVXRpbHMuZ2V0RHRsc1BhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gIHZhciBsaW5lcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiArIHNlc3Npb25wYXJ0LFxuICAgICdhPWZpbmdlcnByaW50OicpO1xuICAvLyBOb3RlOiBhPXNldHVwIGxpbmUgaXMgaWdub3JlZCBzaW5jZSB3ZSB1c2UgdGhlICdhdXRvJyByb2xlLlxuICAvLyBOb3RlMjogJ2FsZ29yaXRobScgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlIGV4Y2VwdCBpbiBFZGdlLlxuICByZXR1cm4ge1xuICAgIHJvbGU6ICdhdXRvJyxcbiAgICBmaW5nZXJwcmludHM6IGxpbmVzLm1hcChTRFBVdGlscy5wYXJzZUZpbmdlcnByaW50KVxuICB9O1xufTtcblxuLy8gU2VyaWFsaXplcyBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcywgc2V0dXBUeXBlKSB7XG4gIHZhciBzZHAgPSAnYT1zZXR1cDonICsgc2V0dXBUeXBlICsgJ1xcclxcbic7XG4gIHBhcmFtcy5maW5nZXJwcmludHMuZm9yRWFjaChmdW5jdGlvbihmcCkge1xuICAgIHNkcCArPSAnYT1maW5nZXJwcmludDonICsgZnAuYWxnb3JpdGhtICsgJyAnICsgZnAudmFsdWUgKyAnXFxyXFxuJztcbiAgfSk7XG4gIHJldHVybiBzZHA7XG59O1xuXG4vLyBQYXJzZXMgYT1jcnlwdG8gbGluZXMgaW50b1xuLy8gICBodHRwczovL3Jhd2dpdC5jb20vYWJvYmEvZWRnZXJ0Yy9tYXN0ZXIvbXNvcnRjLXJzNC5odG1sI2RpY3Rpb25hcnktcnRjc3J0cHNkZXNwYXJhbWV0ZXJzLW1lbWJlcnNcblNEUFV0aWxzLnBhcnNlQ3J5cHRvTGluZSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoOSkuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIHtcbiAgICB0YWc6IHBhcnNlSW50KHBhcnRzWzBdLCAxMCksXG4gICAgY3J5cHRvU3VpdGU6IHBhcnRzWzFdLFxuICAgIGtleVBhcmFtczogcGFydHNbMl0sXG4gICAgc2Vzc2lvblBhcmFtczogcGFydHMuc2xpY2UoMyksXG4gIH07XG59O1xuXG5TRFBVdGlscy53cml0ZUNyeXB0b0xpbmUgPSBmdW5jdGlvbihwYXJhbWV0ZXJzKSB7XG4gIHJldHVybiAnYT1jcnlwdG86JyArIHBhcmFtZXRlcnMudGFnICsgJyAnICtcbiAgICBwYXJhbWV0ZXJzLmNyeXB0b1N1aXRlICsgJyAnICtcbiAgICAodHlwZW9mIHBhcmFtZXRlcnMua2V5UGFyYW1zID09PSAnb2JqZWN0J1xuICAgICAgPyBTRFBVdGlscy53cml0ZUNyeXB0b0tleVBhcmFtcyhwYXJhbWV0ZXJzLmtleVBhcmFtcylcbiAgICAgIDogcGFyYW1ldGVycy5rZXlQYXJhbXMpICtcbiAgICAocGFyYW1ldGVycy5zZXNzaW9uUGFyYW1zID8gJyAnICsgcGFyYW1ldGVycy5zZXNzaW9uUGFyYW1zLmpvaW4oJyAnKSA6ICcnKSArXG4gICAgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgdGhlIGNyeXB0byBrZXkgcGFyYW1ldGVycyBpbnRvXG4vLyAgIGh0dHBzOi8vcmF3Z2l0LmNvbS9hYm9iYS9lZGdlcnRjL21hc3Rlci9tc29ydGMtcnM0Lmh0bWwjcnRjc3J0cGtleXBhcmFtKlxuU0RQVXRpbHMucGFyc2VDcnlwdG9LZXlQYXJhbXMgPSBmdW5jdGlvbihrZXlQYXJhbXMpIHtcbiAgaWYgKGtleVBhcmFtcy5pbmRleE9mKCdpbmxpbmU6JykgIT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcGFydHMgPSBrZXlQYXJhbXMuc3Vic3RyKDcpLnNwbGl0KCd8Jyk7XG4gIHJldHVybiB7XG4gICAga2V5TWV0aG9kOiAnaW5saW5lJyxcbiAgICBrZXlTYWx0OiBwYXJ0c1swXSxcbiAgICBsaWZlVGltZTogcGFydHNbMV0sXG4gICAgbWtpVmFsdWU6IHBhcnRzWzJdID8gcGFydHNbMl0uc3BsaXQoJzonKVswXSA6IHVuZGVmaW5lZCxcbiAgICBta2lMZW5ndGg6IHBhcnRzWzJdID8gcGFydHNbMl0uc3BsaXQoJzonKVsxXSA6IHVuZGVmaW5lZCxcbiAgfTtcbn07XG5cblNEUFV0aWxzLndyaXRlQ3J5cHRvS2V5UGFyYW1zID0gZnVuY3Rpb24oa2V5UGFyYW1zKSB7XG4gIHJldHVybiBrZXlQYXJhbXMua2V5TWV0aG9kICsgJzonXG4gICAgKyBrZXlQYXJhbXMua2V5U2FsdCArXG4gICAgKGtleVBhcmFtcy5saWZlVGltZSA/ICd8JyArIGtleVBhcmFtcy5saWZlVGltZSA6ICcnKSArXG4gICAgKGtleVBhcmFtcy5ta2lWYWx1ZSAmJiBrZXlQYXJhbXMubWtpTGVuZ3RoXG4gICAgICA/ICd8JyArIGtleVBhcmFtcy5ta2lWYWx1ZSArICc6JyArIGtleVBhcmFtcy5ta2lMZW5ndGhcbiAgICAgIDogJycpO1xufTtcblxuLy8gRXh0cmFjdHMgYWxsIFNERVMgcGFyYW10ZXJzLlxuU0RQVXRpbHMuZ2V0Q3J5cHRvUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uICsgc2Vzc2lvbnBhcnQsXG4gICAgJ2E9Y3J5cHRvOicpO1xuICByZXR1cm4gbGluZXMubWFwKFNEUFV0aWxzLnBhcnNlQ3J5cHRvTGluZSk7XG59O1xuXG4vLyBQYXJzZXMgSUNFIGluZm9ybWF0aW9uIGZyb20gU0RQIG1lZGlhIHNlY3Rpb24gb3Igc2Vzc2lvbnBhcnQuXG4vLyBGSVhNRTogZm9yIGNvbnNpc3RlbmN5IHdpdGggb3RoZXIgZnVuY3Rpb25zIHRoaXMgc2hvdWxkIG9ubHlcbi8vICAgZ2V0IHRoZSBpY2UtdWZyYWcgYW5kIGljZS1wd2QgbGluZXMgYXMgaW5wdXQuXG5TRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICB2YXIgdWZyYWcgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24gKyBzZXNzaW9ucGFydCxcbiAgICAnYT1pY2UtdWZyYWc6JylbMF07XG4gIHZhciBwd2QgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24gKyBzZXNzaW9ucGFydCxcbiAgICAnYT1pY2UtcHdkOicpWzBdO1xuICBpZiAoISh1ZnJhZyAmJiBwd2QpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZUZyYWdtZW50OiB1ZnJhZy5zdWJzdHIoMTIpLFxuICAgIHBhc3N3b3JkOiBwd2Quc3Vic3RyKDEwKSxcbiAgfTtcbn07XG5cbi8vIFNlcmlhbGl6ZXMgSUNFIHBhcmFtZXRlcnMgdG8gU0RQLlxuU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gIHJldHVybiAnYT1pY2UtdWZyYWc6JyArIHBhcmFtcy51c2VybmFtZUZyYWdtZW50ICsgJ1xcclxcbicgK1xuICAgICAgJ2E9aWNlLXB3ZDonICsgcGFyYW1zLnBhc3N3b3JkICsgJ1xcclxcbic7XG59O1xuXG4vLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIFJUQ1J0cFBhcmFtZXRlcnMuXG5TRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGRlc2NyaXB0aW9uID0ge1xuICAgIGNvZGVjczogW10sXG4gICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgZmVjTWVjaGFuaXNtczogW10sXG4gICAgcnRjcDogW11cbiAgfTtcbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICBmb3IgKHZhciBpID0gMzsgaSA8IG1saW5lLmxlbmd0aDsgaSsrKSB7IC8vIGZpbmQgYWxsIGNvZGVjcyBmcm9tIG1saW5lWzMuLl1cbiAgICB2YXIgcHQgPSBtbGluZVtpXTtcbiAgICB2YXIgcnRwbWFwbGluZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydHBtYXA6JyArIHB0ICsgJyAnKVswXTtcbiAgICBpZiAocnRwbWFwbGluZSkge1xuICAgICAgdmFyIGNvZGVjID0gU0RQVXRpbHMucGFyc2VSdHBNYXAocnRwbWFwbGluZSk7XG4gICAgICB2YXIgZm10cHMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1mbXRwOicgKyBwdCArICcgJyk7XG4gICAgICAvLyBPbmx5IHRoZSBmaXJzdCBhPWZtdHA6PHB0PiBpcyBjb25zaWRlcmVkLlxuICAgICAgY29kZWMucGFyYW1ldGVycyA9IGZtdHBzLmxlbmd0aCA/IFNEUFV0aWxzLnBhcnNlRm10cChmbXRwc1swXSkgOiB7fTtcbiAgICAgIGNvZGVjLnJ0Y3BGZWVkYmFjayA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtZmI6JyArIHB0ICsgJyAnKVxuICAgICAgICAubWFwKFNEUFV0aWxzLnBhcnNlUnRjcEZiKTtcbiAgICAgIGRlc2NyaXB0aW9uLmNvZGVjcy5wdXNoKGNvZGVjKTtcbiAgICAgIC8vIHBhcnNlIEZFQyBtZWNoYW5pc21zIGZyb20gcnRwbWFwIGxpbmVzLlxuICAgICAgc3dpdGNoIChjb2RlYy5uYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSAnUkVEJzpcbiAgICAgICAgY2FzZSAnVUxQRkVDJzpcbiAgICAgICAgICBkZXNjcmlwdGlvbi5mZWNNZWNoYW5pc21zLnB1c2goY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogLy8gb25seSBSRUQgYW5kIFVMUEZFQyBhcmUgcmVjb2duaXplZCBhcyBGRUMgbWVjaGFuaXNtcy5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1leHRtYXA6JykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgZGVzY3JpcHRpb24uaGVhZGVyRXh0ZW5zaW9ucy5wdXNoKFNEUFV0aWxzLnBhcnNlRXh0bWFwKGxpbmUpKTtcbiAgfSk7XG4gIC8vIEZJWE1FOiBwYXJzZSBydGNwLlxuICByZXR1cm4gZGVzY3JpcHRpb247XG59O1xuXG4vLyBHZW5lcmF0ZXMgcGFydHMgb2YgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGRlc2NyaWJpbmcgdGhlIGNhcGFiaWxpdGllcyAvXG4vLyBwYXJhbWV0ZXJzLlxuU0RQVXRpbHMud3JpdGVSdHBEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGtpbmQsIGNhcHMpIHtcbiAgdmFyIHNkcCA9ICcnO1xuXG4gIC8vIEJ1aWxkIHRoZSBtbGluZS5cbiAgc2RwICs9ICdtPScgKyBraW5kICsgJyAnO1xuICBzZHAgKz0gY2Fwcy5jb2RlY3MubGVuZ3RoID4gMCA/ICc5JyA6ICcwJzsgLy8gcmVqZWN0IGlmIG5vIGNvZGVjcy5cbiAgc2RwICs9ICcgVURQL1RMUy9SVFAvU0FWUEYgJztcbiAgc2RwICs9IGNhcHMuY29kZWNzLm1hcChmdW5jdGlvbihjb2RlYykge1xuICAgIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gICAgfVxuICAgIHJldHVybiBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG5cbiAgc2RwICs9ICdjPUlOIElQNCAwLjAuMC4wXFxyXFxuJztcbiAgc2RwICs9ICdhPXJ0Y3A6OSBJTiBJUDQgMC4wLjAuMFxcclxcbic7XG5cbiAgLy8gQWRkIGE9cnRwbWFwIGxpbmVzIGZvciBlYWNoIGNvZGVjLiBBbHNvIGZtdHAgYW5kIHJ0Y3AtZmIuXG4gIGNhcHMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdHBNYXAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUZtdHAoY29kZWMpO1xuICAgIHNkcCArPSBTRFBVdGlscy53cml0ZVJ0Y3BGYihjb2RlYyk7XG4gIH0pO1xuICB2YXIgbWF4cHRpbWUgPSAwO1xuICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgaWYgKGNvZGVjLm1heHB0aW1lID4gbWF4cHRpbWUpIHtcbiAgICAgIG1heHB0aW1lID0gY29kZWMubWF4cHRpbWU7XG4gICAgfVxuICB9KTtcbiAgaWYgKG1heHB0aW1lID4gMCkge1xuICAgIHNkcCArPSAnYT1tYXhwdGltZTonICsgbWF4cHRpbWUgKyAnXFxyXFxuJztcbiAgfVxuICBzZHAgKz0gJ2E9cnRjcC1tdXhcXHJcXG4nO1xuXG4gIGlmIChjYXBzLmhlYWRlckV4dGVuc2lvbnMpIHtcbiAgICBjYXBzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihleHRlbnNpb24pIHtcbiAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUV4dG1hcChleHRlbnNpb24pO1xuICAgIH0pO1xuICB9XG4gIC8vIEZJWE1FOiB3cml0ZSBmZWNNZWNoYW5pc21zLlxuICByZXR1cm4gc2RwO1xufTtcblxuLy8gUGFyc2VzIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZlxuLy8gUlRDUnRwRW5jb2RpbmdQYXJhbWV0ZXJzLlxuU0RQVXRpbHMucGFyc2VSdHBFbmNvZGluZ1BhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIGVuY29kaW5nUGFyYW1ldGVycyA9IFtdO1xuICB2YXIgZGVzY3JpcHRpb24gPSBTRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcbiAgdmFyIGhhc1JlZCA9IGRlc2NyaXB0aW9uLmZlY01lY2hhbmlzbXMuaW5kZXhPZignUkVEJykgIT09IC0xO1xuICB2YXIgaGFzVWxwZmVjID0gZGVzY3JpcHRpb24uZmVjTWVjaGFuaXNtcy5pbmRleE9mKCdVTFBGRUMnKSAhPT0gLTE7XG5cbiAgLy8gZmlsdGVyIGE9c3NyYzouLi4gY25hbWU6LCBpZ25vcmUgUGxhbkItbXNpZFxuICB2YXIgc3NyY3MgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmM6JylcbiAgICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHJldHVybiBTRFBVdGlscy5wYXJzZVNzcmNNZWRpYShsaW5lKTtcbiAgICB9KVxuICAgIC5maWx0ZXIoZnVuY3Rpb24ocGFydHMpIHtcbiAgICAgIHJldHVybiBwYXJ0cy5hdHRyaWJ1dGUgPT09ICdjbmFtZSc7XG4gICAgfSk7XG4gIHZhciBwcmltYXJ5U3NyYyA9IHNzcmNzLmxlbmd0aCA+IDAgJiYgc3NyY3NbMF0uc3NyYztcbiAgdmFyIHNlY29uZGFyeVNzcmM7XG5cbiAgdmFyIGZsb3dzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjLWdyb3VwOkZJRCcpXG4gICAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cigxNykuc3BsaXQoJyAnKTtcbiAgICAgIHJldHVybiBwYXJ0cy5tYXAoZnVuY3Rpb24ocGFydCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQocGFydCwgMTApO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIGlmIChmbG93cy5sZW5ndGggPiAwICYmIGZsb3dzWzBdLmxlbmd0aCA+IDEgJiYgZmxvd3NbMF1bMF0gPT09IHByaW1hcnlTc3JjKSB7XG4gICAgc2Vjb25kYXJ5U3NyYyA9IGZsb3dzWzBdWzFdO1xuICB9XG5cbiAgZGVzY3JpcHRpb24uY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICBpZiAoY29kZWMubmFtZS50b1VwcGVyQ2FzZSgpID09PSAnUlRYJyAmJiBjb2RlYy5wYXJhbWV0ZXJzLmFwdCkge1xuICAgICAgdmFyIGVuY1BhcmFtID0ge1xuICAgICAgICBzc3JjOiBwcmltYXJ5U3NyYyxcbiAgICAgICAgY29kZWNQYXlsb2FkVHlwZTogcGFyc2VJbnQoY29kZWMucGFyYW1ldGVycy5hcHQsIDEwKVxuICAgICAgfTtcbiAgICAgIGlmIChwcmltYXJ5U3NyYyAmJiBzZWNvbmRhcnlTc3JjKSB7XG4gICAgICAgIGVuY1BhcmFtLnJ0eCA9IHtzc3JjOiBzZWNvbmRhcnlTc3JjfTtcbiAgICAgIH1cbiAgICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKGVuY1BhcmFtKTtcbiAgICAgIGlmIChoYXNSZWQpIHtcbiAgICAgICAgZW5jUGFyYW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGVuY1BhcmFtKSk7XG4gICAgICAgIGVuY1BhcmFtLmZlYyA9IHtcbiAgICAgICAgICBzc3JjOiBwcmltYXJ5U3NyYyxcbiAgICAgICAgICBtZWNoYW5pc206IGhhc1VscGZlYyA/ICdyZWQrdWxwZmVjJyA6ICdyZWQnXG4gICAgICAgIH07XG4gICAgICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKGVuY1BhcmFtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoZW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMCAmJiBwcmltYXJ5U3NyYykge1xuICAgIGVuY29kaW5nUGFyYW1ldGVycy5wdXNoKHtcbiAgICAgIHNzcmM6IHByaW1hcnlTc3JjXG4gICAgfSk7XG4gIH1cblxuICAvLyB3ZSBzdXBwb3J0IGJvdGggYj1BUyBhbmQgYj1USUFTIGJ1dCBpbnRlcnByZXQgQVMgYXMgVElBUy5cbiAgdmFyIGJhbmR3aWR0aCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2I9Jyk7XG4gIGlmIChiYW5kd2lkdGgubGVuZ3RoKSB7XG4gICAgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPVRJQVM6JykgPT09IDApIHtcbiAgICAgIGJhbmR3aWR0aCA9IHBhcnNlSW50KGJhbmR3aWR0aFswXS5zdWJzdHIoNyksIDEwKTtcbiAgICB9IGVsc2UgaWYgKGJhbmR3aWR0aFswXS5pbmRleE9mKCdiPUFTOicpID09PSAwKSB7XG4gICAgICAvLyB1c2UgZm9ybXVsYSBmcm9tIEpTRVAgdG8gY29udmVydCBiPUFTIHRvIFRJQVMgdmFsdWUuXG4gICAgICBiYW5kd2lkdGggPSBwYXJzZUludChiYW5kd2lkdGhbMF0uc3Vic3RyKDUpLCAxMCkgKiAxMDAwICogMC45NVxuICAgICAgICAgIC0gKDUwICogNDAgKiA4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFuZHdpZHRoID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbmNvZGluZ1BhcmFtZXRlcnMuZm9yRWFjaChmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5tYXhCaXRyYXRlID0gYmFuZHdpZHRoO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBlbmNvZGluZ1BhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgaHR0cDovL2RyYWZ0Lm9ydGMub3JnLyNydGNydGNwcGFyYW1ldGVycypcblNEUFV0aWxzLnBhcnNlUnRjcFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgdmFyIHJ0Y3BQYXJhbWV0ZXJzID0ge307XG5cbiAgLy8gR2V0cyB0aGUgZmlyc3QgU1NSQy4gTm90ZSB0aGEgd2l0aCBSVFggdGhlcmUgbWlnaHQgYmUgbXVsdGlwbGVcbiAgLy8gU1NSQ3MuXG4gIHZhciByZW1vdGVTc3JjID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gICAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gICAgfSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iai5hdHRyaWJ1dGUgPT09ICdjbmFtZSc7XG4gICAgfSlbMF07XG4gIGlmIChyZW1vdGVTc3JjKSB7XG4gICAgcnRjcFBhcmFtZXRlcnMuY25hbWUgPSByZW1vdGVTc3JjLnZhbHVlO1xuICAgIHJ0Y3BQYXJhbWV0ZXJzLnNzcmMgPSByZW1vdGVTc3JjLnNzcmM7XG4gIH1cblxuICAvLyBFZGdlIHVzZXMgdGhlIGNvbXBvdW5kIGF0dHJpYnV0ZSBpbnN0ZWFkIG9mIHJlZHVjZWRTaXplXG4gIC8vIGNvbXBvdW5kIGlzICFyZWR1Y2VkU2l6ZVxuICB2YXIgcnNpemUgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtcnNpemUnKTtcbiAgcnRjcFBhcmFtZXRlcnMucmVkdWNlZFNpemUgPSByc2l6ZS5sZW5ndGggPiAwO1xuICBydGNwUGFyYW1ldGVycy5jb21wb3VuZCA9IHJzaXplLmxlbmd0aCA9PT0gMDtcblxuICAvLyBwYXJzZXMgdGhlIHJ0Y3AtbXV4IGF0dHLRlmJ1dGUuXG4gIC8vIE5vdGUgdGhhdCBFZGdlIGRvZXMgbm90IHN1cHBvcnQgdW5tdXhlZCBSVENQLlxuICB2YXIgbXV4ID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1ydGNwLW11eCcpO1xuICBydGNwUGFyYW1ldGVycy5tdXggPSBtdXgubGVuZ3RoID4gMDtcblxuICByZXR1cm4gcnRjcFBhcmFtZXRlcnM7XG59O1xuXG4vLyBwYXJzZXMgZWl0aGVyIGE9bXNpZDogb3IgYT1zc3JjOi4uLiBtc2lkIGxpbmVzIGFuZCByZXR1cm5zXG4vLyB0aGUgaWQgb2YgdGhlIE1lZGlhU3RyZWFtIGFuZCBNZWRpYVN0cmVhbVRyYWNrLlxuU0RQVXRpbHMucGFyc2VNc2lkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBwYXJ0cztcbiAgdmFyIHNwZWMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1zaWQ6Jyk7XG4gIGlmIChzcGVjLmxlbmd0aCA9PT0gMSkge1xuICAgIHBhcnRzID0gc3BlY1swXS5zdWJzdHIoNykuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4ge3N0cmVhbTogcGFydHNbMF0sIHRyYWNrOiBwYXJ0c1sxXX07XG4gIH1cbiAgdmFyIHBsYW5CID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gICAgLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gICAgfSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKG1zaWRQYXJ0cykge1xuICAgICAgcmV0dXJuIG1zaWRQYXJ0cy5hdHRyaWJ1dGUgPT09ICdtc2lkJztcbiAgICB9KTtcbiAgaWYgKHBsYW5CLmxlbmd0aCA+IDApIHtcbiAgICBwYXJ0cyA9IHBsYW5CWzBdLnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgcmV0dXJuIHtzdHJlYW06IHBhcnRzWzBdLCB0cmFjazogcGFydHNbMV19O1xuICB9XG59O1xuXG4vLyBTQ1RQXG4vLyBwYXJzZXMgZHJhZnQtaWV0Zi1tbXVzaWMtc2N0cC1zZHAtMjYgZmlyc3QgYW5kIGZhbGxzIGJhY2tcbi8vIHRvIGRyYWZ0LWlldGYtbW11c2ljLXNjdHAtc2RwLTA1XG5TRFBVdGlscy5wYXJzZVNjdHBEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgbWxpbmUgPSBTRFBVdGlscy5wYXJzZU1MaW5lKG1lZGlhU2VjdGlvbik7XG4gIHZhciBtYXhTaXplTGluZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9bWF4LW1lc3NhZ2Utc2l6ZTonKTtcbiAgdmFyIG1heE1lc3NhZ2VTaXplO1xuICBpZiAobWF4U2l6ZUxpbmUubGVuZ3RoID4gMCkge1xuICAgIG1heE1lc3NhZ2VTaXplID0gcGFyc2VJbnQobWF4U2l6ZUxpbmVbMF0uc3Vic3RyKDE5KSwgMTApO1xuICB9XG4gIGlmIChpc05hTihtYXhNZXNzYWdlU2l6ZSkpIHtcbiAgICBtYXhNZXNzYWdlU2l6ZSA9IDY1NTM2O1xuICB9XG4gIHZhciBzY3RwUG9ydCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9c2N0cC1wb3J0OicpO1xuICBpZiAoc2N0cFBvcnQubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb3J0OiBwYXJzZUludChzY3RwUG9ydFswXS5zdWJzdHIoMTIpLCAxMCksXG4gICAgICBwcm90b2NvbDogbWxpbmUuZm10LFxuICAgICAgbWF4TWVzc2FnZVNpemU6IG1heE1lc3NhZ2VTaXplXG4gICAgfTtcbiAgfVxuICB2YXIgc2N0cE1hcExpbmVzID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zY3RwbWFwOicpO1xuICBpZiAoc2N0cE1hcExpbmVzLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgcGFydHMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNjdHBtYXA6JylbMF1cbiAgICAgIC5zdWJzdHIoMTApXG4gICAgICAuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4ge1xuICAgICAgcG9ydDogcGFyc2VJbnQocGFydHNbMF0sIDEwKSxcbiAgICAgIHByb3RvY29sOiBwYXJ0c1sxXSxcbiAgICAgIG1heE1lc3NhZ2VTaXplOiBtYXhNZXNzYWdlU2l6ZVxuICAgIH07XG4gIH1cbn07XG5cbi8vIFNDVFBcbi8vIG91dHB1dHMgdGhlIGRyYWZ0LWlldGYtbW11c2ljLXNjdHAtc2RwLTI2IHZlcnNpb24gdGhhdCBhbGwgYnJvd3NlcnNcbi8vIHN1cHBvcnQgYnkgbm93IHJlY2VpdmluZyBpbiB0aGlzIGZvcm1hdCwgdW5sZXNzIHdlIG9yaWdpbmFsbHkgcGFyc2VkXG4vLyBhcyB0aGUgZHJhZnQtaWV0Zi1tbXVzaWMtc2N0cC1zZHAtMDUgZm9ybWF0IChpbmRpY2F0ZWQgYnkgdGhlIG0tbGluZVxuLy8gcHJvdG9jb2wgb2YgRFRMUy9TQ1RQIC0tIHdpdGhvdXQgVURQLyBvciBUQ1AvKVxuU0RQVXRpbHMud3JpdGVTY3RwRGVzY3JpcHRpb24gPSBmdW5jdGlvbihtZWRpYSwgc2N0cCkge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGlmIChtZWRpYS5wcm90b2NvbCAhPT0gJ0RUTFMvU0NUUCcpIHtcbiAgICBvdXRwdXQgPSBbXG4gICAgICAnbT0nICsgbWVkaWEua2luZCArICcgOSAnICsgbWVkaWEucHJvdG9jb2wgKyAnICcgKyBzY3RwLnByb3RvY29sICsgJ1xcclxcbicsXG4gICAgICAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbicsXG4gICAgICAnYT1zY3RwLXBvcnQ6JyArIHNjdHAucG9ydCArICdcXHJcXG4nXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBvdXRwdXQgPSBbXG4gICAgICAnbT0nICsgbWVkaWEua2luZCArICcgOSAnICsgbWVkaWEucHJvdG9jb2wgKyAnICcgKyBzY3RwLnBvcnQgKyAnXFxyXFxuJyxcbiAgICAgICdjPUlOIElQNCAwLjAuMC4wXFxyXFxuJyxcbiAgICAgICdhPXNjdHBtYXA6JyArIHNjdHAucG9ydCArICcgJyArIHNjdHAucHJvdG9jb2wgKyAnIDY1NTM1XFxyXFxuJ1xuICAgIF07XG4gIH1cbiAgaWYgKHNjdHAubWF4TWVzc2FnZVNpemUgIT09IHVuZGVmaW5lZCkge1xuICAgIG91dHB1dC5wdXNoKCdhPW1heC1tZXNzYWdlLXNpemU6JyArIHNjdHAubWF4TWVzc2FnZVNpemUgKyAnXFxyXFxuJyk7XG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbn07XG5cbi8vIEdlbmVyYXRlIGEgc2Vzc2lvbiBJRCBmb3IgU0RQLlxuLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL2RyYWZ0LWlldGYtcnRjd2ViLWpzZXAtMjAjc2VjdGlvbi01LjIuMVxuLy8gcmVjb21tZW5kcyB1c2luZyBhIGNyeXB0b2dyYXBoaWNhbGx5IHJhbmRvbSArdmUgNjQtYml0IHZhbHVlXG4vLyBidXQgcmlnaHQgbm93IHRoaXMgc2hvdWxkIGJlIGFjY2VwdGFibGUgYW5kIHdpdGhpbiB0aGUgcmlnaHQgcmFuZ2VcblNEUFV0aWxzLmdlbmVyYXRlU2Vzc2lvbklkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3Vic3RyKDIsIDIxKTtcbn07XG5cbi8vIFdyaXRlIGJvaWxkZXIgcGxhdGUgZm9yIHN0YXJ0IG9mIFNEUFxuLy8gc2Vzc0lkIGFyZ3VtZW50IGlzIG9wdGlvbmFsIC0gaWYgbm90IHN1cHBsaWVkIGl0IHdpbGxcbi8vIGJlIGdlbmVyYXRlZCByYW5kb21seVxuLy8gc2Vzc1ZlcnNpb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIDJcbi8vIHNlc3NVc2VyIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byAndGhpc2lzYWRhcHRlcm9ydGMnXG5TRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSA9IGZ1bmN0aW9uKHNlc3NJZCwgc2Vzc1Zlciwgc2Vzc1VzZXIpIHtcbiAgdmFyIHNlc3Npb25JZDtcbiAgdmFyIHZlcnNpb24gPSBzZXNzVmVyICE9PSB1bmRlZmluZWQgPyBzZXNzVmVyIDogMjtcbiAgaWYgKHNlc3NJZCkge1xuICAgIHNlc3Npb25JZCA9IHNlc3NJZDtcbiAgfSBlbHNlIHtcbiAgICBzZXNzaW9uSWQgPSBTRFBVdGlscy5nZW5lcmF0ZVNlc3Npb25JZCgpO1xuICB9XG4gIHZhciB1c2VyID0gc2Vzc1VzZXIgfHwgJ3RoaXNpc2FkYXB0ZXJvcnRjJztcbiAgLy8gRklYTUU6IHNlc3MtaWQgc2hvdWxkIGJlIGFuIE5UUCB0aW1lc3RhbXAuXG4gIHJldHVybiAndj0wXFxyXFxuJyArXG4gICAgICAnbz0nICsgdXNlciArICcgJyArIHNlc3Npb25JZCArICcgJyArIHZlcnNpb24gK1xuICAgICAgICAnIElOIElQNCAxMjcuMC4wLjFcXHJcXG4nICtcbiAgICAgICdzPS1cXHJcXG4nICtcbiAgICAgICd0PTAgMFxcclxcbic7XG59O1xuXG5TRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbiA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBjYXBzLCB0eXBlLCBzdHJlYW0pIHtcbiAgdmFyIHNkcCA9IFNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24odHJhbnNjZWl2ZXIua2luZCwgY2Fwcyk7XG5cbiAgLy8gTWFwIElDRSBwYXJhbWV0ZXJzICh1ZnJhZywgcHdkKSB0byBTRFAuXG4gIHNkcCArPSBTRFBVdGlscy53cml0ZUljZVBhcmFtZXRlcnMoXG4gICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuZ2V0TG9jYWxQYXJhbWV0ZXJzKCkpO1xuXG4gIC8vIE1hcCBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuICBzZHAgKz0gU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyhcbiAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LmdldExvY2FsUGFyYW1ldGVycygpLFxuICAgIHR5cGUgPT09ICdvZmZlcicgPyAnYWN0cGFzcycgOiAnYWN0aXZlJyk7XG5cbiAgc2RwICs9ICdhPW1pZDonICsgdHJhbnNjZWl2ZXIubWlkICsgJ1xcclxcbic7XG5cbiAgaWYgKHRyYW5zY2VpdmVyLmRpcmVjdGlvbikge1xuICAgIHNkcCArPSAnYT0nICsgdHJhbnNjZWl2ZXIuZGlyZWN0aW9uICsgJ1xcclxcbic7XG4gIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyICYmIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgc2RwICs9ICdhPXNlbmRyZWN2XFxyXFxuJztcbiAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICBzZHAgKz0gJ2E9c2VuZG9ubHlcXHJcXG4nO1xuICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgc2RwICs9ICdhPXJlY3Zvbmx5XFxyXFxuJztcbiAgfSBlbHNlIHtcbiAgICBzZHAgKz0gJ2E9aW5hY3RpdmVcXHJcXG4nO1xuICB9XG5cbiAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgIC8vIHNwZWMuXG4gICAgdmFyIG1zaWQgPSAnbXNpZDonICsgc3RyZWFtLmlkICsgJyAnICtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnRyYWNrLmlkICsgJ1xcclxcbic7XG4gICAgc2RwICs9ICdhPScgKyBtc2lkO1xuXG4gICAgLy8gZm9yIENocm9tZS5cbiAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5zc3JjICtcbiAgICAgICAgJyAnICsgbXNpZDtcbiAgICBpZiAodHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHgpIHtcbiAgICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnJ0eC5zc3JjICtcbiAgICAgICAgICAnICcgKyBtc2lkO1xuICAgICAgc2RwICs9ICdhPXNzcmMtZ3JvdXA6RklEICcgK1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0uc3NyYyArICcgJyArXG4gICAgICAgICAgdHJhbnNjZWl2ZXIuc2VuZEVuY29kaW5nUGFyYW1ldGVyc1swXS5ydHguc3NyYyArXG4gICAgICAgICAgJ1xcclxcbic7XG4gICAgfVxuICB9XG4gIC8vIEZJWE1FOiB0aGlzIHNob3VsZCBiZSB3cml0dGVuIGJ5IHdyaXRlUnRwRGVzY3JpcHRpb24uXG4gIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kRW5jb2RpbmdQYXJhbWV0ZXJzWzBdLnNzcmMgK1xuICAgICAgJyBjbmFtZTonICsgU0RQVXRpbHMubG9jYWxDTmFtZSArICdcXHJcXG4nO1xuICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyICYmIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4KSB7XG4gICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRFbmNvZGluZ1BhcmFtZXRlcnNbMF0ucnR4LnNzcmMgK1xuICAgICAgICAnIGNuYW1lOicgKyBTRFBVdGlscy5sb2NhbENOYW1lICsgJ1xcclxcbic7XG4gIH1cbiAgcmV0dXJuIHNkcDtcbn07XG5cbi8vIEdldHMgdGhlIGRpcmVjdGlvbiBmcm9tIHRoZSBtZWRpYVNlY3Rpb24gb3IgdGhlIHNlc3Npb25wYXJ0LlxuU0RQVXRpbHMuZ2V0RGlyZWN0aW9uID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICAvLyBMb29rIGZvciBzZW5kcmVjdiwgc2VuZG9ubHksIHJlY3Zvbmx5LCBpbmFjdGl2ZSwgZGVmYXVsdCB0byBzZW5kcmVjdi5cbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChsaW5lc1tpXSkge1xuICAgICAgY2FzZSAnYT1zZW5kcmVjdic6XG4gICAgICBjYXNlICdhPXNlbmRvbmx5JzpcbiAgICAgIGNhc2UgJ2E9cmVjdm9ubHknOlxuICAgICAgY2FzZSAnYT1pbmFjdGl2ZSc6XG4gICAgICAgIHJldHVybiBsaW5lc1tpXS5zdWJzdHIoMik7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBGSVhNRTogV2hhdCBzaG91bGQgaGFwcGVuIGhlcmU/XG4gICAgfVxuICB9XG4gIGlmIChzZXNzaW9ucGFydCkge1xuICAgIHJldHVybiBTRFBVdGlscy5nZXREaXJlY3Rpb24oc2Vzc2lvbnBhcnQpO1xuICB9XG4gIHJldHVybiAnc2VuZHJlY3YnO1xufTtcblxuU0RQVXRpbHMuZ2V0S2luZCA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIHZhciBtbGluZSA9IGxpbmVzWzBdLnNwbGl0KCcgJyk7XG4gIHJldHVybiBtbGluZVswXS5zdWJzdHIoMik7XG59O1xuXG5TRFBVdGlscy5pc1JlamVjdGVkID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHJldHVybiBtZWRpYVNlY3Rpb24uc3BsaXQoJyAnLCAyKVsxXSA9PT0gJzAnO1xufTtcblxuU0RQVXRpbHMucGFyc2VNTGluZSA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbikge1xuICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gIHZhciBwYXJ0cyA9IGxpbmVzWzBdLnN1YnN0cigyKS5zcGxpdCgnICcpO1xuICByZXR1cm4ge1xuICAgIGtpbmQ6IHBhcnRzWzBdLFxuICAgIHBvcnQ6IHBhcnNlSW50KHBhcnRzWzFdLCAxMCksXG4gICAgcHJvdG9jb2w6IHBhcnRzWzJdLFxuICAgIGZtdDogcGFydHMuc2xpY2UoMykuam9pbignICcpXG4gIH07XG59O1xuXG5TRFBVdGlscy5wYXJzZU9MaW5lID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gIHZhciBsaW5lID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnbz0nKVswXTtcbiAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoMikuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogcGFydHNbMF0sXG4gICAgc2Vzc2lvbklkOiBwYXJ0c1sxXSxcbiAgICBzZXNzaW9uVmVyc2lvbjogcGFyc2VJbnQocGFydHNbMl0sIDEwKSxcbiAgICBuZXRUeXBlOiBwYXJ0c1szXSxcbiAgICBhZGRyZXNzVHlwZTogcGFydHNbNF0sXG4gICAgYWRkcmVzczogcGFydHNbNV1cbiAgfTtcbn07XG5cbi8vIGEgdmVyeSBuYWl2ZSBpbnRlcnByZXRhdGlvbiBvZiBhIHZhbGlkIFNEUC5cblNEUFV0aWxzLmlzVmFsaWRTRFAgPSBmdW5jdGlvbihibG9iKSB7XG4gIGlmICh0eXBlb2YgYmxvYiAhPT0gJ3N0cmluZycgfHwgYmxvYi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhibG9iKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChsaW5lc1tpXS5sZW5ndGggPCAyIHx8IGxpbmVzW2ldLmNoYXJBdCgxKSAhPT0gJz0nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFRPRE86IGNoZWNrIHRoZSBtb2RpZmllciBhIGJpdCBtb3JlLlxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzLlxuaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gU0RQVXRpbHM7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4vKiBlc2xpbnQtZW52IG5vZGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge2FkYXB0ZXJGYWN0b3J5fSBmcm9tICcuL2FkYXB0ZXJfZmFjdG9yeS5qcyc7XG5cbmNvbnN0IGFkYXB0ZXIgPVxuICBhZGFwdGVyRmFjdG9yeSh7d2luZG93OiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IHdpbmRvd30pO1xuZXhwb3J0IGRlZmF1bHQgYWRhcHRlcjtcbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbiAgLy8gQnJvd3NlciBzaGltcy5cbmltcG9ydCAqIGFzIGNocm9tZVNoaW0gZnJvbSAnLi9jaHJvbWUvY2hyb21lX3NoaW0nO1xuaW1wb3J0ICogYXMgZWRnZVNoaW0gZnJvbSAnLi9lZGdlL2VkZ2Vfc2hpbSc7XG5pbXBvcnQgKiBhcyBmaXJlZm94U2hpbSBmcm9tICcuL2ZpcmVmb3gvZmlyZWZveF9zaGltJztcbmltcG9ydCAqIGFzIHNhZmFyaVNoaW0gZnJvbSAnLi9zYWZhcmkvc2FmYXJpX3NoaW0nO1xuaW1wb3J0ICogYXMgY29tbW9uU2hpbSBmcm9tICcuL2NvbW1vbl9zaGltJztcblxuLy8gU2hpbW1pbmcgc3RhcnRzIGhlcmUuXG5leHBvcnQgZnVuY3Rpb24gYWRhcHRlckZhY3Rvcnkoe3dpbmRvd30gPSB7fSwgb3B0aW9ucyA9IHtcbiAgc2hpbUNocm9tZTogdHJ1ZSxcbiAgc2hpbUZpcmVmb3g6IHRydWUsXG4gIHNoaW1FZGdlOiB0cnVlLFxuICBzaGltU2FmYXJpOiB0cnVlLFxufSkge1xuICAvLyBVdGlscy5cbiAgY29uc3QgbG9nZ2luZyA9IHV0aWxzLmxvZztcbiAgY29uc3QgYnJvd3NlckRldGFpbHMgPSB1dGlscy5kZXRlY3RCcm93c2VyKHdpbmRvdyk7XG5cbiAgY29uc3QgYWRhcHRlciA9IHtcbiAgICBicm93c2VyRGV0YWlscyxcbiAgICBjb21tb25TaGltLFxuICAgIGV4dHJhY3RWZXJzaW9uOiB1dGlscy5leHRyYWN0VmVyc2lvbixcbiAgICBkaXNhYmxlTG9nOiB1dGlscy5kaXNhYmxlTG9nLFxuICAgIGRpc2FibGVXYXJuaW5nczogdXRpbHMuZGlzYWJsZVdhcm5pbmdzXG4gIH07XG5cbiAgLy8gU2hpbSBicm93c2VyIGlmIGZvdW5kLlxuICBzd2l0Y2ggKGJyb3dzZXJEZXRhaWxzLmJyb3dzZXIpIHtcbiAgICBjYXNlICdjaHJvbWUnOlxuICAgICAgaWYgKCFjaHJvbWVTaGltIHx8ICFjaHJvbWVTaGltLnNoaW1QZWVyQ29ubmVjdGlvbiB8fFxuICAgICAgICAgICFvcHRpb25zLnNoaW1DaHJvbWUpIHtcbiAgICAgICAgbG9nZ2luZygnQ2hyb21lIHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uID09PSBudWxsKSB7XG4gICAgICAgIGxvZ2dpbmcoJ0Nocm9tZSBzaGltIGNhbiBub3QgZGV0ZXJtaW5lIHZlcnNpb24sIG5vdCBzaGltbWluZy4nKTtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIGNocm9tZS4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gY2hyb21lU2hpbTtcblxuICAgICAgLy8gTXVzdCBiZSBjYWxsZWQgYmVmb3JlIHNoaW1QZWVyQ29ubmVjdGlvbi5cbiAgICAgIGNvbW1vblNoaW0uc2hpbUFkZEljZUNhbmRpZGF0ZU51bGxPckVtcHR5KHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuXG4gICAgICBjaHJvbWVTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1NZWRpYVN0cmVhbSh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgY2hyb21lU2hpbS5zaGltT25UcmFjayh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2sod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1HZXRTZW5kZXJzV2l0aER0bWYod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjaHJvbWVTaGltLnNoaW1HZXRTdGF0cyh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGNocm9tZVNoaW0uc2hpbVNlbmRlclJlY2VpdmVyR2V0U3RhdHMod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjaHJvbWVTaGltLmZpeE5lZ290aWF0aW9uTmVlZGVkKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuXG4gICAgICBjb21tb25TaGltLnNoaW1SVENJY2VDYW5kaWRhdGUod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjb21tb25TaGltLnNoaW1Db25uZWN0aW9uU3RhdGUod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjb21tb25TaGltLnNoaW1NYXhNZXNzYWdlU2l6ZSh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGNvbW1vblNoaW0uc2hpbVNlbmRUaHJvd1R5cGVFcnJvcih3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGNvbW1vblNoaW0ucmVtb3ZlRXh0bWFwQWxsb3dNaXhlZCh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ZpcmVmb3gnOlxuICAgICAgaWYgKCFmaXJlZm94U2hpbSB8fCAhZmlyZWZveFNoaW0uc2hpbVBlZXJDb25uZWN0aW9uIHx8XG4gICAgICAgICAgIW9wdGlvbnMuc2hpbUZpcmVmb3gpIHtcbiAgICAgICAgbG9nZ2luZygnRmlyZWZveCBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIGZpcmVmb3guJyk7XG4gICAgICAvLyBFeHBvcnQgdG8gdGhlIGFkYXB0ZXIgZ2xvYmFsIG9iamVjdCB2aXNpYmxlIGluIHRoZSBicm93c2VyLlxuICAgICAgYWRhcHRlci5icm93c2VyU2hpbSA9IGZpcmVmb3hTaGltO1xuXG4gICAgICAvLyBNdXN0IGJlIGNhbGxlZCBiZWZvcmUgc2hpbVBlZXJDb25uZWN0aW9uLlxuICAgICAgY29tbW9uU2hpbS5zaGltQWRkSWNlQ2FuZGlkYXRlTnVsbE9yRW1wdHkod2luZG93LCBicm93c2VyRGV0YWlscyk7XG5cbiAgICAgIGZpcmVmb3hTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBmaXJlZm94U2hpbS5zaGltUGVlckNvbm5lY3Rpb24od2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBmaXJlZm94U2hpbS5zaGltT25UcmFjayh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1SZW1vdmVTdHJlYW0od2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBmaXJlZm94U2hpbS5zaGltU2VuZGVyR2V0U3RhdHMod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBmaXJlZm94U2hpbS5zaGltUmVjZWl2ZXJHZXRTdGF0cyh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1SVENEYXRhQ2hhbm5lbCh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1BZGRUcmFuc2NlaXZlcih3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGZpcmVmb3hTaGltLnNoaW1HZXRQYXJhbWV0ZXJzKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbUNyZWF0ZU9mZmVyKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgZmlyZWZveFNoaW0uc2hpbUNyZWF0ZUFuc3dlcih3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcblxuICAgICAgY29tbW9uU2hpbS5zaGltUlRDSWNlQ2FuZGlkYXRlKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgY29tbW9uU2hpbS5zaGltQ29ubmVjdGlvblN0YXRlKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgY29tbW9uU2hpbS5zaGltTWF4TWVzc2FnZVNpemUod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjb21tb25TaGltLnNoaW1TZW5kVGhyb3dUeXBlRXJyb3Iod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlZGdlJzpcbiAgICAgIGlmICghZWRnZVNoaW0gfHwgIWVkZ2VTaGltLnNoaW1QZWVyQ29ubmVjdGlvbiB8fCAhb3B0aW9ucy5zaGltRWRnZSkge1xuICAgICAgICBsb2dnaW5nKCdNUyBlZGdlIHNoaW0gaXMgbm90IGluY2x1ZGVkIGluIHRoaXMgYWRhcHRlciByZWxlYXNlLicpO1xuICAgICAgICByZXR1cm4gYWRhcHRlcjtcbiAgICAgIH1cbiAgICAgIGxvZ2dpbmcoJ2FkYXB0ZXIuanMgc2hpbW1pbmcgZWRnZS4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gZWRnZVNoaW07XG5cbiAgICAgIGVkZ2VTaGltLnNoaW1HZXRVc2VyTWVkaWEod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBlZGdlU2hpbS5zaGltR2V0RGlzcGxheU1lZGlhKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgZWRnZVNoaW0uc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgZWRnZVNoaW0uc2hpbVJlcGxhY2VUcmFjayh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcblxuICAgICAgLy8gdGhlIGVkZ2Ugc2hpbSBpbXBsZW1lbnRzIHRoZSBmdWxsIFJUQ0ljZUNhbmRpZGF0ZSBvYmplY3QuXG5cbiAgICAgIGNvbW1vblNoaW0uc2hpbU1heE1lc3NhZ2VTaXplKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgY29tbW9uU2hpbS5zaGltU2VuZFRocm93VHlwZUVycm9yKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2FmYXJpJzpcbiAgICAgIGlmICghc2FmYXJpU2hpbSB8fCAhb3B0aW9ucy5zaGltU2FmYXJpKSB7XG4gICAgICAgIGxvZ2dpbmcoJ1NhZmFyaSBzaGltIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGlzIGFkYXB0ZXIgcmVsZWFzZS4nKTtcbiAgICAgICAgcmV0dXJuIGFkYXB0ZXI7XG4gICAgICB9XG4gICAgICBsb2dnaW5nKCdhZGFwdGVyLmpzIHNoaW1taW5nIHNhZmFyaS4nKTtcbiAgICAgIC8vIEV4cG9ydCB0byB0aGUgYWRhcHRlciBnbG9iYWwgb2JqZWN0IHZpc2libGUgaW4gdGhlIGJyb3dzZXIuXG4gICAgICBhZGFwdGVyLmJyb3dzZXJTaGltID0gc2FmYXJpU2hpbTtcblxuICAgICAgLy8gTXVzdCBiZSBjYWxsZWQgYmVmb3JlIHNoaW1DYWxsYmFja0FQSS5cbiAgICAgIGNvbW1vblNoaW0uc2hpbUFkZEljZUNhbmRpZGF0ZU51bGxPckVtcHR5KHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuXG4gICAgICBzYWZhcmlTaGltLnNoaW1SVENJY2VTZXJ2ZXJVcmxzKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltQ3JlYXRlT2ZmZXJMZWdhY3kod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1DYWxsYmFja3NBUEkod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1Mb2NhbFN0cmVhbXNBUEkod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBzYWZhcmlTaGltLnNoaW1SZW1vdGVTdHJlYW1zQVBJKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltVHJhY2tFdmVudFRyYW5zY2VpdmVyKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltR2V0VXNlck1lZGlhKHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuICAgICAgc2FmYXJpU2hpbS5zaGltQXVkaW9Db250ZXh0KHdpbmRvdywgYnJvd3NlckRldGFpbHMpO1xuXG4gICAgICBjb21tb25TaGltLnNoaW1SVENJY2VDYW5kaWRhdGUod2luZG93LCBicm93c2VyRGV0YWlscyk7XG4gICAgICBjb21tb25TaGltLnNoaW1NYXhNZXNzYWdlU2l6ZSh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGNvbW1vblNoaW0uc2hpbVNlbmRUaHJvd1R5cGVFcnJvcih3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGNvbW1vblNoaW0ucmVtb3ZlRXh0bWFwQWxsb3dNaXhlZCh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsb2dnaW5nKCdVbnN1cHBvcnRlZCBicm93c2VyIScpO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gYWRhcHRlcjtcbn1cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQge3NoaW1HZXRVc2VyTWVkaWF9IGZyb20gJy4vZ2V0dXNlcm1lZGlhJztcbmV4cG9ydCB7c2hpbUdldERpc3BsYXlNZWRpYX0gZnJvbSAnLi9nZXRkaXNwbGF5bWVkaWEnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpbU1lZGlhU3RyZWFtKHdpbmRvdykge1xuICB3aW5kb3cuTWVkaWFTdHJlYW0gPSB3aW5kb3cuTWVkaWFTdHJlYW0gfHwgd2luZG93LndlYmtpdE1lZGlhU3RyZWFtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbU9uVHJhY2sod2luZG93KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgISgnb250cmFjaycgaW5cbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdvbnRyYWNrJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250cmFjaztcbiAgICAgIH0sXG4gICAgICBzZXQoZikge1xuICAgICAgICBpZiAodGhpcy5fb250cmFjaykge1xuICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbnRyYWNrKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayA9IGYpO1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBjb25zdCBvcmlnU2V0UmVtb3RlRGVzY3JpcHRpb24gPVxuICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb24gPVxuICAgICAgZnVuY3Rpb24gc2V0UmVtb3RlRGVzY3JpcHRpb24oKSB7XG4gICAgICAgIGlmICghdGhpcy5fb250cmFja3BvbHkpIHtcbiAgICAgICAgICB0aGlzLl9vbnRyYWNrcG9seSA9IChlKSA9PiB7XG4gICAgICAgICAgICAvLyBvbmFkZHN0cmVhbSBkb2VzIG5vdCBmaXJlIHdoZW4gYSB0cmFjayBpcyBhZGRlZCB0byBhbiBleGlzdGluZ1xuICAgICAgICAgICAgLy8gc3RyZWFtLiBCdXQgc3RyZWFtLm9uYWRkdHJhY2sgaXMgaW1wbGVtZW50ZWQgc28gd2UgdXNlIHRoYXQuXG4gICAgICAgICAgICBlLnN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdhZGR0cmFjaycsIHRlID0+IHtcbiAgICAgICAgICAgICAgbGV0IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHRoaXMuZ2V0UmVjZWl2ZXJzKClcbiAgICAgICAgICAgICAgICAgIC5maW5kKHIgPT4gci50cmFjayAmJiByLnRyYWNrLmlkID09PSB0ZS50cmFjay5pZCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB7dHJhY2s6IHRlLnRyYWNrfTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRlLnRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBldmVudC50cmFuc2NlaXZlciA9IHtyZWNlaXZlcn07XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgICAgICAgICAgbGV0IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnMpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHRoaXMuZ2V0UmVjZWl2ZXJzKClcbiAgICAgICAgICAgICAgICAgIC5maW5kKHIgPT4gci50cmFjayAmJiByLnRyYWNrLmlkID09PSB0cmFjay5pZCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB7dHJhY2t9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgICAgICBldmVudC50cmFjayA9IHRyYWNrO1xuICAgICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICAgICAgICBldmVudC50cmFuc2NlaXZlciA9IHtyZWNlaXZlcn07XG4gICAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3JpZ1NldFJlbW90ZURlc2NyaXB0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGV2ZW4gaWYgUlRDUnRwVHJhbnNjZWl2ZXIgaXMgaW4gd2luZG93LCBpdCBpcyBvbmx5IHVzZWQgYW5kXG4gICAgLy8gZW1pdHRlZCBpbiB1bmlmaWVkLXBsYW4uIFVuZm9ydHVuYXRlbHkgdGhpcyBtZWFucyB3ZSBuZWVkXG4gICAgLy8gdG8gdW5jb25kaXRpb25hbGx5IHdyYXAgdGhlIGV2ZW50LlxuICAgIHV0aWxzLndyYXBQZWVyQ29ubmVjdGlvbkV2ZW50KHdpbmRvdywgJ3RyYWNrJywgZSA9PiB7XG4gICAgICBpZiAoIWUudHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsICd0cmFuc2NlaXZlcicsXG4gICAgICAgICAge3ZhbHVlOiB7cmVjZWl2ZXI6IGUucmVjZWl2ZXJ9fSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUdldFNlbmRlcnNXaXRoRHRtZih3aW5kb3cpIHtcbiAgLy8gT3ZlcnJpZGVzIGFkZFRyYWNrL3JlbW92ZVRyYWNrLCBkZXBlbmRzIG9uIHNoaW1BZGRUcmFja1JlbW92ZVRyYWNrLlxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmXG4gICAgICAhKCdnZXRTZW5kZXJzJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlKSAmJlxuICAgICAgJ2NyZWF0ZURUTUZTZW5kZXInIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBzaGltU2VuZGVyV2l0aER0bWYgPSBmdW5jdGlvbihwYywgdHJhY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRyYWNrLFxuICAgICAgICBnZXQgZHRtZigpIHtcbiAgICAgICAgICBpZiAodGhpcy5fZHRtZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gcGMuY3JlYXRlRFRNRlNlbmRlcih0cmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9kdG1mID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2R0bWY7XG4gICAgICAgIH0sXG4gICAgICAgIF9wYzogcGNcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIGF1Z21lbnQgYWRkVHJhY2sgd2hlbiBnZXRTZW5kZXJzIGlzIG5vdCBhdmFpbGFibGUuXG4gICAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycyA9IGZ1bmN0aW9uIGdldFNlbmRlcnMoKSB7XG4gICAgICAgIHRoaXMuX3NlbmRlcnMgPSB0aGlzLl9zZW5kZXJzIHx8IFtdO1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VuZGVycy5zbGljZSgpOyAvLyByZXR1cm4gYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgIH07XG4gICAgICBjb25zdCBvcmlnQWRkVHJhY2sgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrO1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9XG4gICAgICAgIGZ1bmN0aW9uIGFkZFRyYWNrKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgICAgICBsZXQgc2VuZGVyID0gb3JpZ0FkZFRyYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgaWYgKCFzZW5kZXIpIHtcbiAgICAgICAgICAgIHNlbmRlciA9IHNoaW1TZW5kZXJXaXRoRHRtZih0aGlzLCB0cmFjayk7XG4gICAgICAgICAgICB0aGlzLl9zZW5kZXJzLnB1c2goc2VuZGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHNlbmRlcjtcbiAgICAgICAgfTtcblxuICAgICAgY29uc3Qgb3JpZ1JlbW92ZVRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVUcmFjaztcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlVHJhY2sgPVxuICAgICAgICBmdW5jdGlvbiByZW1vdmVUcmFjayhzZW5kZXIpIHtcbiAgICAgICAgICBvcmlnUmVtb3ZlVHJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLl9zZW5kZXJzLmluZGV4T2Yoc2VuZGVyKTtcbiAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fc2VuZGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IG9yaWdBZGRTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uIGFkZFN0cmVhbShzdHJlYW0pIHtcbiAgICAgIHRoaXMuX3NlbmRlcnMgPSB0aGlzLl9zZW5kZXJzIHx8IFtdO1xuICAgICAgb3JpZ0FkZFN0cmVhbS5hcHBseSh0aGlzLCBbc3RyZWFtXSk7XG4gICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgIHRoaXMuX3NlbmRlcnMucHVzaChzaGltU2VuZGVyV2l0aER0bWYodGhpcywgdHJhY2spKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvcmlnUmVtb3ZlU3RyZWFtID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW07XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPVxuICAgICAgZnVuY3Rpb24gcmVtb3ZlU3RyZWFtKHN0cmVhbSkge1xuICAgICAgICB0aGlzLl9zZW5kZXJzID0gdGhpcy5fc2VuZGVycyB8fCBbXTtcbiAgICAgICAgb3JpZ1JlbW92ZVN0cmVhbS5hcHBseSh0aGlzLCBbc3RyZWFtXSk7XG5cbiAgICAgICAgc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuX3NlbmRlcnMuZmluZChzID0+IHMudHJhY2sgPT09IHRyYWNrKTtcbiAgICAgICAgICBpZiAoc2VuZGVyKSB7IC8vIHJlbW92ZSBzZW5kZXJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRlcnMuc3BsaWNlKHRoaXMuX3NlbmRlcnMuaW5kZXhPZihzZW5kZXIpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiZcbiAgICAgICAgICAgICAnZ2V0U2VuZGVycycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSAmJlxuICAgICAgICAgICAgICdjcmVhdGVEVE1GU2VuZGVyJyBpbiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgd2luZG93LlJUQ1J0cFNlbmRlciAmJlxuICAgICAgICAgICAgICEoJ2R0bWYnIGluIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlKSkge1xuICAgIGNvbnN0IG9yaWdHZXRTZW5kZXJzID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTZW5kZXJzO1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U2VuZGVycyA9IGZ1bmN0aW9uIGdldFNlbmRlcnMoKSB7XG4gICAgICBjb25zdCBzZW5kZXJzID0gb3JpZ0dldFNlbmRlcnMuYXBwbHkodGhpcywgW10pO1xuICAgICAgc2VuZGVycy5mb3JFYWNoKHNlbmRlciA9PiBzZW5kZXIuX3BjID0gdGhpcyk7XG4gICAgICByZXR1cm4gc2VuZGVycztcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLCAnZHRtZicsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2R0bWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLnRyYWNrLmtpbmQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgIHRoaXMuX2R0bWYgPSB0aGlzLl9wYy5jcmVhdGVEVE1GU2VuZGVyKHRoaXMudHJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kdG1mID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2R0bWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1HZXRTdGF0cyh3aW5kb3cpIHtcbiAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBvcmlnR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzID0gZnVuY3Rpb24gZ2V0U3RhdHMoKSB7XG4gICAgY29uc3QgW3NlbGVjdG9yLCBvblN1Y2MsIG9uRXJyXSA9IGFyZ3VtZW50cztcblxuICAgIC8vIElmIHNlbGVjdG9yIGlzIGEgZnVuY3Rpb24gdGhlbiB3ZSBhcmUgaW4gdGhlIG9sZCBzdHlsZSBzdGF0cyBzbyBqdXN0XG4gICAgLy8gcGFzcyBiYWNrIHRoZSBvcmlnaW5hbCBnZXRTdGF0cyBmb3JtYXQgdG8gYXZvaWQgYnJlYWtpbmcgb2xkIHVzZXJzLlxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvcmlnR2V0U3RhdHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvLyBXaGVuIHNwZWMtc3R5bGUgZ2V0U3RhdHMgaXMgc3VwcG9ydGVkLCByZXR1cm4gdGhvc2Ugd2hlbiBjYWxsZWQgd2l0aFxuICAgIC8vIGVpdGhlciBubyBhcmd1bWVudHMgb3IgdGhlIHNlbGVjdG9yIGFyZ3VtZW50IGlzIG51bGwuXG4gICAgaWYgKG9yaWdHZXRTdGF0cy5sZW5ndGggPT09IDAgJiYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgdHlwZW9mIHNlbGVjdG9yICE9PSAnZnVuY3Rpb24nKSkge1xuICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbXSk7XG4gICAgfVxuXG4gICAgY29uc3QgZml4Q2hyb21lU3RhdHNfID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IHN0YW5kYXJkUmVwb3J0ID0ge307XG4gICAgICBjb25zdCByZXBvcnRzID0gcmVzcG9uc2UucmVzdWx0KCk7XG4gICAgICByZXBvcnRzLmZvckVhY2gocmVwb3J0ID0+IHtcbiAgICAgICAgY29uc3Qgc3RhbmRhcmRTdGF0cyA9IHtcbiAgICAgICAgICBpZDogcmVwb3J0LmlkLFxuICAgICAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBsb2NhbGNhbmRpZGF0ZTogJ2xvY2FsLWNhbmRpZGF0ZScsXG4gICAgICAgICAgICByZW1vdGVjYW5kaWRhdGU6ICdyZW1vdGUtY2FuZGlkYXRlJ1xuICAgICAgICAgIH1bcmVwb3J0LnR5cGVdIHx8IHJlcG9ydC50eXBlXG4gICAgICAgIH07XG4gICAgICAgIHJlcG9ydC5uYW1lcygpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgc3RhbmRhcmRTdGF0c1tuYW1lXSA9IHJlcG9ydC5zdGF0KG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3RhbmRhcmRSZXBvcnRbc3RhbmRhcmRTdGF0cy5pZF0gPSBzdGFuZGFyZFN0YXRzO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbiAgICB9O1xuXG4gICAgLy8gc2hpbSBnZXRTdGF0cyB3aXRoIG1hcGxpa2Ugc3VwcG9ydFxuICAgIGNvbnN0IG1ha2VNYXBTdGF0cyA9IGZ1bmN0aW9uKHN0YXRzKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcChPYmplY3Qua2V5cyhzdGF0cykubWFwKGtleSA9PiBba2V5LCBzdGF0c1trZXldXSkpO1xuICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCBzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyXyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIG9uU3VjYyhtYWtlTWFwU3RhdHMoZml4Q2hyb21lU3RhdHNfKHJlc3BvbnNlKSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbc3VjY2Vzc0NhbGxiYWNrV3JhcHBlcl8sXG4gICAgICAgIHNlbGVjdG9yXSk7XG4gICAgfVxuXG4gICAgLy8gcHJvbWlzZS1zdXBwb3J0XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBbXG4gICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShtYWtlTWFwU3RhdHMoZml4Q2hyb21lU3RhdHNfKHJlc3BvbnNlKSkpO1xuICAgICAgICB9LCByZWplY3RdKTtcbiAgICB9KS50aGVuKG9uU3VjYywgb25FcnIpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbVNlbmRlclJlY2VpdmVyR2V0U3RhdHMod2luZG93KSB7XG4gIGlmICghKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJlxuICAgICAgd2luZG93LlJUQ1J0cFNlbmRlciAmJiB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc2hpbSBzZW5kZXIgc3RhdHMuXG4gIGlmICghKCdnZXRTdGF0cycgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUpKSB7XG4gICAgY29uc3Qgb3JpZ0dldFNlbmRlcnMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnM7XG4gICAgaWYgKG9yaWdHZXRTZW5kZXJzKSB7XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbiBnZXRTZW5kZXJzKCkge1xuICAgICAgICBjb25zdCBzZW5kZXJzID0gb3JpZ0dldFNlbmRlcnMuYXBwbHkodGhpcywgW10pO1xuICAgICAgICBzZW5kZXJzLmZvckVhY2goc2VuZGVyID0+IHNlbmRlci5fcGMgPSB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHNlbmRlcnM7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IG9yaWdBZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gICAgaWYgKG9yaWdBZGRUcmFjaykge1xuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9IGZ1bmN0aW9uIGFkZFRyYWNrKCkge1xuICAgICAgICBjb25zdCBzZW5kZXIgPSBvcmlnQWRkVHJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgc2VuZGVyLl9wYyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZW5kZXI7XG4gICAgICB9O1xuICAgIH1cbiAgICB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uIGdldFN0YXRzKCkge1xuICAgICAgY29uc3Qgc2VuZGVyID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9wYy5nZXRTdGF0cygpLnRoZW4ocmVzdWx0ID0+XG4gICAgICAgIC8qIE5vdGU6IHRoaXMgd2lsbCBpbmNsdWRlIHN0YXRzIG9mIGFsbCBzZW5kZXJzIHRoYXRcbiAgICAgICAgICogICBzZW5kIGEgdHJhY2sgd2l0aCB0aGUgc2FtZSBpZCBhcyBzZW5kZXIudHJhY2sgYXNcbiAgICAgICAgICogICBpdCBpcyBub3QgcG9zc2libGUgdG8gaWRlbnRpZnkgdGhlIFJUQ1J0cFNlbmRlci5cbiAgICAgICAgICovXG4gICAgICAgIHV0aWxzLmZpbHRlclN0YXRzKHJlc3VsdCwgc2VuZGVyLnRyYWNrLCB0cnVlKSk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIHNoaW0gcmVjZWl2ZXIgc3RhdHMuXG4gIGlmICghKCdnZXRTdGF0cycgaW4gd2luZG93LlJUQ1J0cFJlY2VpdmVyLnByb3RvdHlwZSkpIHtcbiAgICBjb25zdCBvcmlnR2V0UmVjZWl2ZXJzID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRSZWNlaXZlcnM7XG4gICAgaWYgKG9yaWdHZXRSZWNlaXZlcnMpIHtcbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0UmVjZWl2ZXJzID1cbiAgICAgICAgZnVuY3Rpb24gZ2V0UmVjZWl2ZXJzKCkge1xuICAgICAgICAgIGNvbnN0IHJlY2VpdmVycyA9IG9yaWdHZXRSZWNlaXZlcnMuYXBwbHkodGhpcywgW10pO1xuICAgICAgICAgIHJlY2VpdmVycy5mb3JFYWNoKHJlY2VpdmVyID0+IHJlY2VpdmVyLl9wYyA9IHRoaXMpO1xuICAgICAgICAgIHJldHVybiByZWNlaXZlcnM7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHV0aWxzLndyYXBQZWVyQ29ubmVjdGlvbkV2ZW50KHdpbmRvdywgJ3RyYWNrJywgZSA9PiB7XG4gICAgICBlLnJlY2VpdmVyLl9wYyA9IGUuc3JjRWxlbWVudDtcbiAgICAgIHJldHVybiBlO1xuICAgIH0pO1xuICAgIHdpbmRvdy5SVENSdHBSZWNlaXZlci5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbiBnZXRTdGF0cygpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLl9wYy5nZXRTdGF0cygpLnRoZW4ocmVzdWx0ID0+XG4gICAgICAgIHV0aWxzLmZpbHRlclN0YXRzKHJlc3VsdCwgcmVjZWl2ZXIudHJhY2ssIGZhbHNlKSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghKCdnZXRTdGF0cycgaW4gd2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUgJiZcbiAgICAgICdnZXRTdGF0cycgaW4gd2luZG93LlJUQ1J0cFJlY2VpdmVyLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBzaGltIFJUQ1BlZXJDb25uZWN0aW9uLmdldFN0YXRzKHRyYWNrKS5cbiAgY29uc3Qgb3JpZ0dldFN0YXRzID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cztcbiAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uIGdldFN0YXRzKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiB3aW5kb3cuTWVkaWFTdHJlYW1UcmFjaykge1xuICAgICAgY29uc3QgdHJhY2sgPSBhcmd1bWVudHNbMF07XG4gICAgICBsZXQgc2VuZGVyO1xuICAgICAgbGV0IHJlY2VpdmVyO1xuICAgICAgbGV0IGVycjtcbiAgICAgIHRoaXMuZ2V0U2VuZGVycygpLmZvckVhY2gocyA9PiB7XG4gICAgICAgIGlmIChzLnRyYWNrID09PSB0cmFjaykge1xuICAgICAgICAgIGlmIChzZW5kZXIpIHtcbiAgICAgICAgICAgIGVyciA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRlciA9IHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZ2V0UmVjZWl2ZXJzKCkuZm9yRWFjaChyID0+IHtcbiAgICAgICAgaWYgKHIudHJhY2sgPT09IHRyYWNrKSB7XG4gICAgICAgICAgaWYgKHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBlcnIgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWNlaXZlciA9IHI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByLnRyYWNrID09PSB0cmFjaztcbiAgICAgIH0pO1xuICAgICAgaWYgKGVyciB8fCAoc2VuZGVyICYmIHJlY2VpdmVyKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IERPTUV4Y2VwdGlvbihcbiAgICAgICAgICAnVGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgc2VuZGVyIG9yIHJlY2VpdmVyIGZvciB0aGUgdHJhY2suJyxcbiAgICAgICAgICAnSW52YWxpZEFjY2Vzc0Vycm9yJykpO1xuICAgICAgfSBlbHNlIGlmIChzZW5kZXIpIHtcbiAgICAgICAgcmV0dXJuIHNlbmRlci5nZXRTdGF0cygpO1xuICAgICAgfSBlbHNlIGlmIChyZWNlaXZlcikge1xuICAgICAgICByZXR1cm4gcmVjZWl2ZXIuZ2V0U3RhdHMoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAnVGhlcmUgaXMgbm8gc2VuZGVyIG9yIHJlY2VpdmVyIGZvciB0aGUgdHJhY2suJyxcbiAgICAgICAgJ0ludmFsaWRBY2Nlc3NFcnJvcicpKTtcbiAgICB9XG4gICAgcmV0dXJuIG9yaWdHZXRTdGF0cy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2tXaXRoTmF0aXZlKHdpbmRvdykge1xuICAvLyBzaGltIGFkZFRyYWNrL3JlbW92ZVRyYWNrIHdpdGggbmF0aXZlIHZhcmlhbnRzIGluIG9yZGVyIHRvIG1ha2VcbiAgLy8gdGhlIGludGVyYWN0aW9ucyB3aXRoIGxlZ2FjeSBnZXRMb2NhbFN0cmVhbXMgYmVoYXZlIGFzIGluIG90aGVyIGJyb3dzZXJzLlxuICAvLyBLZWVwcyBhIG1hcHBpbmcgc3RyZWFtLmlkID0+IFtzdHJlYW0sIHJ0cHNlbmRlcnMuLi5dXG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0TG9jYWxTdHJlYW1zID1cbiAgICBmdW5jdGlvbiBnZXRMb2NhbFN0cmVhbXMoKSB7XG4gICAgICB0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zID0gdGhpcy5fc2hpbW1lZExvY2FsU3RyZWFtcyB8fCB7fTtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zKVxuICAgICAgICAubWFwKHN0cmVhbUlkID0+IHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXNbc3RyZWFtSWRdWzBdKTtcbiAgICB9O1xuXG4gIGNvbnN0IG9yaWdBZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgPVxuICAgIGZ1bmN0aW9uIGFkZFRyYWNrKHRyYWNrLCBzdHJlYW0pIHtcbiAgICAgIGlmICghc3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBvcmlnQWRkVHJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXMgPSB0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zIHx8IHt9O1xuXG4gICAgICBjb25zdCBzZW5kZXIgPSBvcmlnQWRkVHJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIGlmICghdGhpcy5fc2hpbW1lZExvY2FsU3RyZWFtc1tzdHJlYW0uaWRdKSB7XG4gICAgICAgIHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXNbc3RyZWFtLmlkXSA9IFtzdHJlYW0sIHNlbmRlcl07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXNbc3RyZWFtLmlkXS5pbmRleE9mKHNlbmRlcikgPT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXNbc3RyZWFtLmlkXS5wdXNoKHNlbmRlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2VuZGVyO1xuICAgIH07XG5cbiAgY29uc3Qgb3JpZ0FkZFN0cmVhbSA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkU3RyZWFtO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uIGFkZFN0cmVhbShzdHJlYW0pIHtcbiAgICB0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zID0gdGhpcy5fc2hpbW1lZExvY2FsU3RyZWFtcyB8fCB7fTtcblxuICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSB0aGlzLmdldFNlbmRlcnMoKS5maW5kKHMgPT4gcy50cmFjayA9PT0gdHJhY2spO1xuICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVHJhY2sgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBleGlzdGluZ1NlbmRlcnMgPSB0aGlzLmdldFNlbmRlcnMoKTtcbiAgICBvcmlnQWRkU3RyZWFtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgY29uc3QgbmV3U2VuZGVycyA9IHRoaXMuZ2V0U2VuZGVycygpXG4gICAgICAuZmlsdGVyKG5ld1NlbmRlciA9PiBleGlzdGluZ1NlbmRlcnMuaW5kZXhPZihuZXdTZW5kZXIpID09PSAtMSk7XG4gICAgdGhpcy5fc2hpbW1lZExvY2FsU3RyZWFtc1tzdHJlYW0uaWRdID0gW3N0cmVhbV0uY29uY2F0KG5ld1NlbmRlcnMpO1xuICB9O1xuXG4gIGNvbnN0IG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPVxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0cmVhbShzdHJlYW0pIHtcbiAgICAgIHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXMgPSB0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zIHx8IHt9O1xuICAgICAgZGVsZXRlIHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXNbc3RyZWFtLmlkXTtcbiAgICAgIHJldHVybiBvcmlnUmVtb3ZlU3RyZWFtLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICBjb25zdCBvcmlnUmVtb3ZlVHJhY2sgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVRyYWNrO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVRyYWNrID1cbiAgICBmdW5jdGlvbiByZW1vdmVUcmFjayhzZW5kZXIpIHtcbiAgICAgIHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXMgPSB0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zIHx8IHt9O1xuICAgICAgaWYgKHNlbmRlcikge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zKS5mb3JFYWNoKHN0cmVhbUlkID0+IHtcbiAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLl9zaGltbWVkTG9jYWxTdHJlYW1zW3N0cmVhbUlkXS5pbmRleE9mKHNlbmRlcik7XG4gICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoaW1tZWRMb2NhbFN0cmVhbXNbc3RyZWFtSWRdLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5fc2hpbW1lZExvY2FsU3RyZWFtc1tzdHJlYW1JZF0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc2hpbW1lZExvY2FsU3RyZWFtc1tzdHJlYW1JZF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnUmVtb3ZlVHJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2sod2luZG93LCBicm93c2VyRGV0YWlscykge1xuICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzaGltIGFkZFRyYWNrIGFuZCByZW1vdmVUcmFjay5cbiAgaWYgKHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2sgJiZcbiAgICAgIGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPj0gNjUpIHtcbiAgICByZXR1cm4gc2hpbUFkZFRyYWNrUmVtb3ZlVHJhY2tXaXRoTmF0aXZlKHdpbmRvdyk7XG4gIH1cblxuICAvLyBhbHNvIHNoaW0gcGMuZ2V0TG9jYWxTdHJlYW1zIHdoZW4gYWRkVHJhY2sgaXMgc2hpbW1lZFxuICAvLyB0byByZXR1cm4gdGhlIG9yaWdpbmFsIHN0cmVhbXMuXG4gIGNvbnN0IG9yaWdHZXRMb2NhbFN0cmVhbXMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlXG4gICAgICAuZ2V0TG9jYWxTdHJlYW1zO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldExvY2FsU3RyZWFtcyA9XG4gICAgZnVuY3Rpb24gZ2V0TG9jYWxTdHJlYW1zKCkge1xuICAgICAgY29uc3QgbmF0aXZlU3RyZWFtcyA9IG9yaWdHZXRMb2NhbFN0cmVhbXMuYXBwbHkodGhpcyk7XG4gICAgICB0aGlzLl9yZXZlcnNlU3RyZWFtcyA9IHRoaXMuX3JldmVyc2VTdHJlYW1zIHx8IHt9O1xuICAgICAgcmV0dXJuIG5hdGl2ZVN0cmVhbXMubWFwKHN0cmVhbSA9PiB0aGlzLl9yZXZlcnNlU3RyZWFtc1tzdHJlYW0uaWRdKTtcbiAgICB9O1xuXG4gIGNvbnN0IG9yaWdBZGRTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbTtcbiAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRTdHJlYW0gPSBmdW5jdGlvbiBhZGRTdHJlYW0oc3RyZWFtKSB7XG4gICAgdGhpcy5fc3RyZWFtcyA9IHRoaXMuX3N0cmVhbXMgfHwge307XG4gICAgdGhpcy5fcmV2ZXJzZVN0cmVhbXMgPSB0aGlzLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcblxuICAgIHN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSB0aGlzLmdldFNlbmRlcnMoKS5maW5kKHMgPT4gcy50cmFjayA9PT0gdHJhY2spO1xuICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVHJhY2sgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBBZGQgaWRlbnRpdHkgbWFwcGluZyBmb3IgY29uc2lzdGVuY3kgd2l0aCBhZGRUcmFjay5cbiAgICAvLyBVbmxlc3MgdGhpcyBpcyBiZWluZyB1c2VkIHdpdGggYSBzdHJlYW0gZnJvbSBhZGRUcmFjay5cbiAgICBpZiAoIXRoaXMuX3JldmVyc2VTdHJlYW1zW3N0cmVhbS5pZF0pIHtcbiAgICAgIGNvbnN0IG5ld1N0cmVhbSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oc3RyZWFtLmdldFRyYWNrcygpKTtcbiAgICAgIHRoaXMuX3N0cmVhbXNbc3RyZWFtLmlkXSA9IG5ld1N0cmVhbTtcbiAgICAgIHRoaXMuX3JldmVyc2VTdHJlYW1zW25ld1N0cmVhbS5pZF0gPSBzdHJlYW07XG4gICAgICBzdHJlYW0gPSBuZXdTdHJlYW07XG4gICAgfVxuICAgIG9yaWdBZGRTdHJlYW0uYXBwbHkodGhpcywgW3N0cmVhbV0pO1xuICB9O1xuXG4gIGNvbnN0IG9yaWdSZW1vdmVTdHJlYW0gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbTtcbiAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPVxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0cmVhbShzdHJlYW0pIHtcbiAgICAgIHRoaXMuX3N0cmVhbXMgPSB0aGlzLl9zdHJlYW1zIHx8IHt9O1xuICAgICAgdGhpcy5fcmV2ZXJzZVN0cmVhbXMgPSB0aGlzLl9yZXZlcnNlU3RyZWFtcyB8fCB7fTtcblxuICAgICAgb3JpZ1JlbW92ZVN0cmVhbS5hcHBseSh0aGlzLCBbKHRoaXMuX3N0cmVhbXNbc3RyZWFtLmlkXSB8fCBzdHJlYW0pXSk7XG4gICAgICBkZWxldGUgdGhpcy5fcmV2ZXJzZVN0cmVhbXNbKHRoaXMuX3N0cmVhbXNbc3RyZWFtLmlkXSA/XG4gICAgICAgICAgdGhpcy5fc3RyZWFtc1tzdHJlYW0uaWRdLmlkIDogc3RyZWFtLmlkKV07XG4gICAgICBkZWxldGUgdGhpcy5fc3RyZWFtc1tzdHJlYW0uaWRdO1xuICAgIH07XG5cbiAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjayA9XG4gICAgZnVuY3Rpb24gYWRkVHJhY2sodHJhY2ssIHN0cmVhbSkge1xuICAgICAgaWYgKHRoaXMuc2lnbmFsaW5nU3RhdGUgPT09ICdjbG9zZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oXG4gICAgICAgICAgJ1RoZSBSVENQZWVyQ29ubmVjdGlvblxcJ3Mgc2lnbmFsaW5nU3RhdGUgaXMgXFwnY2xvc2VkXFwnLicsXG4gICAgICAgICAgJ0ludmFsaWRTdGF0ZUVycm9yJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdHJlYW1zID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgaWYgKHN0cmVhbXMubGVuZ3RoICE9PSAxIHx8XG4gICAgICAgICAgIXN0cmVhbXNbMF0uZ2V0VHJhY2tzKCkuZmluZCh0ID0+IHQgPT09IHRyYWNrKSkge1xuICAgICAgICAvLyB0aGlzIGlzIG5vdCBmdWxseSBjb3JyZWN0IGJ1dCBhbGwgd2UgY2FuIG1hbmFnZSB3aXRob3V0XG4gICAgICAgIC8vIFtbYXNzb2NpYXRlZCBNZWRpYVN0cmVhbXNdXSBpbnRlcm5hbCBzbG90LlxuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAgICdUaGUgYWRhcHRlci5qcyBhZGRUcmFjayBwb2x5ZmlsbCBvbmx5IHN1cHBvcnRzIGEgc2luZ2xlICcgK1xuICAgICAgICAgICcgc3RyZWFtIHdoaWNoIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgc3BlY2lmaWVkIHRyYWNrLicsXG4gICAgICAgICAgJ05vdFN1cHBvcnRlZEVycm9yJyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFscmVhZHlFeGlzdHMgPSB0aGlzLmdldFNlbmRlcnMoKS5maW5kKHMgPT4gcy50cmFjayA9PT0gdHJhY2spO1xuICAgICAgaWYgKGFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignVHJhY2sgYWxyZWFkeSBleGlzdHMuJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc3RyZWFtcyA9IHRoaXMuX3N0cmVhbXMgfHwge307XG4gICAgICB0aGlzLl9yZXZlcnNlU3RyZWFtcyA9IHRoaXMuX3JldmVyc2VTdHJlYW1zIHx8IHt9O1xuICAgICAgY29uc3Qgb2xkU3RyZWFtID0gdGhpcy5fc3RyZWFtc1tzdHJlYW0uaWRdO1xuICAgICAgaWYgKG9sZFN0cmVhbSkge1xuICAgICAgICAvLyB0aGlzIGlzIHVzaW5nIG9kZCBDaHJvbWUgYmVoYXZpb3VyLCB1c2Ugd2l0aCBjYXV0aW9uOlxuICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3Avd2VicnRjL2lzc3Vlcy9kZXRhaWw/aWQ9NzgxNVxuICAgICAgICAvLyBOb3RlOiB3ZSByZWx5IG9uIHRoZSBoaWdoLWxldmVsIGFkZFRyYWNrL2R0bWYgc2hpbSB0b1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHNlbmRlciB3aXRoIGEgZHRtZiBzZW5kZXIuXG4gICAgICAgIG9sZFN0cmVhbS5hZGRUcmFjayh0cmFjayk7XG5cbiAgICAgICAgLy8gVHJpZ2dlciBPTk4gYXN5bmMuXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ25lZ290aWF0aW9ubmVlZGVkJykpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld1N0cmVhbSA9IG5ldyB3aW5kb3cuTWVkaWFTdHJlYW0oW3RyYWNrXSk7XG4gICAgICAgIHRoaXMuX3N0cmVhbXNbc3RyZWFtLmlkXSA9IG5ld1N0cmVhbTtcbiAgICAgICAgdGhpcy5fcmV2ZXJzZVN0cmVhbXNbbmV3U3RyZWFtLmlkXSA9IHN0cmVhbTtcbiAgICAgICAgdGhpcy5hZGRTdHJlYW0obmV3U3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmdldFNlbmRlcnMoKS5maW5kKHMgPT4gcy50cmFjayA9PT0gdHJhY2spO1xuICAgIH07XG5cbiAgLy8gcmVwbGFjZSB0aGUgaW50ZXJuYWwgc3RyZWFtIGlkIHdpdGggdGhlIGV4dGVybmFsIG9uZSBhbmRcbiAgLy8gdmljZSB2ZXJzYS5cbiAgZnVuY3Rpb24gcmVwbGFjZUludGVybmFsU3RyZWFtSWQocGMsIGRlc2NyaXB0aW9uKSB7XG4gICAgbGV0IHNkcCA9IGRlc2NyaXB0aW9uLnNkcDtcbiAgICBPYmplY3Qua2V5cyhwYy5fcmV2ZXJzZVN0cmVhbXMgfHwgW10pLmZvckVhY2goaW50ZXJuYWxJZCA9PiB7XG4gICAgICBjb25zdCBleHRlcm5hbFN0cmVhbSA9IHBjLl9yZXZlcnNlU3RyZWFtc1tpbnRlcm5hbElkXTtcbiAgICAgIGNvbnN0IGludGVybmFsU3RyZWFtID0gcGMuX3N0cmVhbXNbZXh0ZXJuYWxTdHJlYW0uaWRdO1xuICAgICAgc2RwID0gc2RwLnJlcGxhY2UobmV3IFJlZ0V4cChpbnRlcm5hbFN0cmVhbS5pZCwgJ2cnKSxcbiAgICAgICAgICBleHRlcm5hbFN0cmVhbS5pZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgdHlwZTogZGVzY3JpcHRpb24udHlwZSxcbiAgICAgIHNkcFxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGxhY2VFeHRlcm5hbFN0cmVhbUlkKHBjLCBkZXNjcmlwdGlvbikge1xuICAgIGxldCBzZHAgPSBkZXNjcmlwdGlvbi5zZHA7XG4gICAgT2JqZWN0LmtleXMocGMuX3JldmVyc2VTdHJlYW1zIHx8IFtdKS5mb3JFYWNoKGludGVybmFsSWQgPT4ge1xuICAgICAgY29uc3QgZXh0ZXJuYWxTdHJlYW0gPSBwYy5fcmV2ZXJzZVN0cmVhbXNbaW50ZXJuYWxJZF07XG4gICAgICBjb25zdCBpbnRlcm5hbFN0cmVhbSA9IHBjLl9zdHJlYW1zW2V4dGVybmFsU3RyZWFtLmlkXTtcbiAgICAgIHNkcCA9IHNkcC5yZXBsYWNlKG5ldyBSZWdFeHAoZXh0ZXJuYWxTdHJlYW0uaWQsICdnJyksXG4gICAgICAgICAgaW50ZXJuYWxTdHJlYW0uaWQpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgIHR5cGU6IGRlc2NyaXB0aW9uLnR5cGUsXG4gICAgICBzZHBcbiAgICB9KTtcbiAgfVxuICBbJ2NyZWF0ZU9mZmVyJywgJ2NyZWF0ZUFuc3dlciddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgY29uc3QgbmF0aXZlTWV0aG9kID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgIGNvbnN0IG1ldGhvZE9iaiA9IHtbbWV0aG9kXSgpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBjb25zdCBpc0xlZ2FjeUNhbGwgPSBhcmd1bWVudHMubGVuZ3RoICYmXG4gICAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmIChpc0xlZ2FjeUNhbGwpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgKGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gcmVwbGFjZUludGVybmFsU3RyZWFtSWQodGhpcywgZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgYXJnc1swXS5hcHBseShudWxsLCBbZGVzY10pO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGFyZ3NbMV0pIHtcbiAgICAgICAgICAgICAgYXJnc1sxXS5hcHBseShudWxsLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGFyZ3VtZW50c1syXVxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgLnRoZW4oZGVzY3JpcHRpb24gPT4gcmVwbGFjZUludGVybmFsU3RyZWFtSWQodGhpcywgZGVzY3JpcHRpb24pKTtcbiAgICB9fTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBtZXRob2RPYmpbbWV0aG9kXTtcbiAgfSk7XG5cbiAgY29uc3Qgb3JpZ1NldExvY2FsRGVzY3JpcHRpb24gPVxuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb24gPVxuICAgIGZ1bmN0aW9uIHNldExvY2FsRGVzY3JpcHRpb24oKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGggfHwgIWFyZ3VtZW50c1swXS50eXBlKSB7XG4gICAgICAgIHJldHVybiBvcmlnU2V0TG9jYWxEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgYXJndW1lbnRzWzBdID0gcmVwbGFjZUV4dGVybmFsU3RyZWFtSWQodGhpcywgYXJndW1lbnRzWzBdKTtcbiAgICAgIHJldHVybiBvcmlnU2V0TG9jYWxEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgLy8gVE9ETzogbWFuZ2xlIGdldFN0YXRzOiBodHRwczovL3czYy5naXRodWIuaW8vd2VicnRjLXN0YXRzLyNkb20tcnRjbWVkaWFzdHJlYW1zdGF0cy1zdHJlYW1pZGVudGlmaWVyXG5cbiAgY29uc3Qgb3JpZ0xvY2FsRGVzY3JpcHRpb24gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ2xvY2FsRGVzY3JpcHRpb24nKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsXG4gICAgICAnbG9jYWxEZXNjcmlwdGlvbicsIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gb3JpZ0xvY2FsRGVzY3JpcHRpb24uZ2V0LmFwcGx5KHRoaXMpO1xuICAgICAgICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVwbGFjZUludGVybmFsU3RyZWFtSWQodGhpcywgZGVzY3JpcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVRyYWNrID1cbiAgICBmdW5jdGlvbiByZW1vdmVUcmFjayhzZW5kZXIpIHtcbiAgICAgIGlmICh0aGlzLnNpZ25hbGluZ1N0YXRlID09PSAnY2xvc2VkJykge1xuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKFxuICAgICAgICAgICdUaGUgUlRDUGVlckNvbm5lY3Rpb25cXCdzIHNpZ25hbGluZ1N0YXRlIGlzIFxcJ2Nsb3NlZFxcJy4nLFxuICAgICAgICAgICdJbnZhbGlkU3RhdGVFcnJvcicpO1xuICAgICAgfVxuICAgICAgLy8gV2UgY2FuIG5vdCB5ZXQgY2hlY2sgZm9yIHNlbmRlciBpbnN0YW5jZW9mIFJUQ1J0cFNlbmRlclxuICAgICAgLy8gc2luY2Ugd2Ugc2hpbSBSVFBTZW5kZXIuIFNvIHdlIGNoZWNrIGlmIHNlbmRlci5fcGMgaXMgc2V0LlxuICAgICAgaWYgKCFzZW5kZXIuX3BjKSB7XG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJ0FyZ3VtZW50IDEgb2YgUlRDUGVlckNvbm5lY3Rpb24ucmVtb3ZlVHJhY2sgJyArXG4gICAgICAgICAgICAnZG9lcyBub3QgaW1wbGVtZW50IGludGVyZmFjZSBSVENSdHBTZW5kZXIuJywgJ1R5cGVFcnJvcicpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNMb2NhbCA9IHNlbmRlci5fcGMgPT09IHRoaXM7XG4gICAgICBpZiAoIWlzTG9jYWwpIHtcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignU2VuZGVyIHdhcyBub3QgY3JlYXRlZCBieSB0aGlzIGNvbm5lY3Rpb24uJyxcbiAgICAgICAgICAgICdJbnZhbGlkQWNjZXNzRXJyb3InKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VhcmNoIGZvciB0aGUgbmF0aXZlIHN0cmVhbSB0aGUgc2VuZGVycyB0cmFjayBiZWxvbmdzIHRvLlxuICAgICAgdGhpcy5fc3RyZWFtcyA9IHRoaXMuX3N0cmVhbXMgfHwge307XG4gICAgICBsZXQgc3RyZWFtO1xuICAgICAgT2JqZWN0LmtleXModGhpcy5fc3RyZWFtcykuZm9yRWFjaChzdHJlYW1pZCA9PiB7XG4gICAgICAgIGNvbnN0IGhhc1RyYWNrID0gdGhpcy5fc3RyZWFtc1tzdHJlYW1pZF0uZ2V0VHJhY2tzKClcbiAgICAgICAgICAuZmluZCh0cmFjayA9PiBzZW5kZXIudHJhY2sgPT09IHRyYWNrKTtcbiAgICAgICAgaWYgKGhhc1RyYWNrKSB7XG4gICAgICAgICAgc3RyZWFtID0gdGhpcy5fc3RyZWFtc1tzdHJlYW1pZF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3RyZWFtKSB7XG4gICAgICAgIGlmIChzdHJlYW0uZ2V0VHJhY2tzKCkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgbGFzdCB0cmFjayBvZiB0aGUgc3RyZWFtLCByZW1vdmUgdGhlIHN0cmVhbS4gVGhpc1xuICAgICAgICAgIC8vIHRha2VzIGNhcmUgb2YgYW55IHNoaW1tZWQgX3NlbmRlcnMuXG4gICAgICAgICAgdGhpcy5yZW1vdmVTdHJlYW0odGhpcy5fcmV2ZXJzZVN0cmVhbXNbc3RyZWFtLmlkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVseWluZyBvbiB0aGUgc2FtZSBvZGQgY2hyb21lIGJlaGF2aW91ciBhcyBhYm92ZS5cbiAgICAgICAgICBzdHJlYW0ucmVtb3ZlVHJhY2soc2VuZGVyLnRyYWNrKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCduZWdvdGlhdGlvbm5lZWRlZCcpKTtcbiAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdywgYnJvd3NlckRldGFpbHMpIHtcbiAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgLy8gdmVyeSBiYXNpYyBzdXBwb3J0IGZvciBvbGQgdmVyc2lvbnMuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uO1xuICB9XG4gIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gc2hpbSBpbXBsaWNpdCBjcmVhdGlvbiBvZiBSVENTZXNzaW9uRGVzY3JpcHRpb24vUlRDSWNlQ2FuZGlkYXRlXG4gIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNTMpIHtcbiAgICBbJ3NldExvY2FsRGVzY3JpcHRpb24nLCAnc2V0UmVtb3RlRGVzY3JpcHRpb24nLCAnYWRkSWNlQ2FuZGlkYXRlJ11cbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgY29uc3QgbmF0aXZlTWV0aG9kID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgICAgICAgIGNvbnN0IG1ldGhvZE9iaiA9IHtbbWV0aG9kXSgpIHtcbiAgICAgICAgICAgIGFyZ3VtZW50c1swXSA9IG5ldyAoKG1ldGhvZCA9PT0gJ2FkZEljZUNhbmRpZGF0ZScpID9cbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlIDpcbiAgICAgICAgICAgICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKShhcmd1bWVudHNbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH19O1xuICAgICAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IG1ldGhvZE9ialttZXRob2RdO1xuICAgICAgICB9KTtcbiAgfVxufVxuXG4vLyBBdHRlbXB0IHRvIGZpeCBPTk4gaW4gcGxhbi1iIG1vZGUuXG5leHBvcnQgZnVuY3Rpb24gZml4TmVnb3RpYXRpb25OZWVkZWQod2luZG93LCBicm93c2VyRGV0YWlscykge1xuICB1dGlscy53cmFwUGVlckNvbm5lY3Rpb25FdmVudCh3aW5kb3csICduZWdvdGlhdGlvbm5lZWRlZCcsIGUgPT4ge1xuICAgIGNvbnN0IHBjID0gZS50YXJnZXQ7XG4gICAgaWYgKGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA3MiB8fCAocGMuZ2V0Q29uZmlndXJhdGlvbiAmJlxuICAgICAgICBwYy5nZXRDb25maWd1cmF0aW9uKCkuc2RwU2VtYW50aWNzID09PSAncGxhbi1iJykpIHtcbiAgICAgIGlmIChwYy5zaWduYWxpbmdTdGF0ZSAhPT0gJ3N0YWJsZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfSk7XG59XG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxOCBUaGUgYWRhcHRlci5qcyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4vKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcbmV4cG9ydCBmdW5jdGlvbiBzaGltR2V0RGlzcGxheU1lZGlhKHdpbmRvdywgZ2V0U291cmNlSWQpIHtcbiAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgJ2dldERpc3BsYXlNZWRpYScgaW4gd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCEod2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGdldFNvdXJjZUlkIGlzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZpbmcgd2l0aFxuICAvLyB0aGUgc291cmNlSWQgb2YgdGhlIHNjcmVlbi93aW5kb3cvdGFiIHRvIGJlIHNoYXJlZC5cbiAgaWYgKHR5cGVvZiBnZXRTb3VyY2VJZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3NoaW1HZXREaXNwbGF5TWVkaWE6IGdldFNvdXJjZUlkIGFyZ3VtZW50IGlzIG5vdCAnICtcbiAgICAgICAgJ2EgZnVuY3Rpb24nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhID1cbiAgICBmdW5jdGlvbiBnZXREaXNwbGF5TWVkaWEoY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiBnZXRTb3VyY2VJZChjb25zdHJhaW50cylcbiAgICAgICAgLnRoZW4oc291cmNlSWQgPT4ge1xuICAgICAgICAgIGNvbnN0IHdpZHRoU3BlY2lmaWVkID0gY29uc3RyYWludHMudmlkZW8gJiYgY29uc3RyYWludHMudmlkZW8ud2lkdGg7XG4gICAgICAgICAgY29uc3QgaGVpZ2h0U3BlY2lmaWVkID0gY29uc3RyYWludHMudmlkZW8gJiZcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLmhlaWdodDtcbiAgICAgICAgICBjb25zdCBmcmFtZVJhdGVTcGVjaWZpZWQgPSBjb25zdHJhaW50cy52aWRlbyAmJlxuICAgICAgICAgICAgY29uc3RyYWludHMudmlkZW8uZnJhbWVSYXRlO1xuICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0ge1xuICAgICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAnZGVza3RvcCcsXG4gICAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IHNvdXJjZUlkLFxuICAgICAgICAgICAgICBtYXhGcmFtZVJhdGU6IGZyYW1lUmF0ZVNwZWNpZmllZCB8fCAzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAod2lkdGhTcGVjaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLm1hbmRhdG9yeS5tYXhXaWR0aCA9IHdpZHRoU3BlY2lmaWVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGVpZ2h0U3BlY2lmaWVkKSB7XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5tYW5kYXRvcnkubWF4SGVpZ2h0ID0gaGVpZ2h0U3BlY2lmaWVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscy5qcyc7XG5jb25zdCBsb2dnaW5nID0gdXRpbHMubG9nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUdldFVzZXJNZWRpYSh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKSB7XG4gIGNvbnN0IG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuXG4gIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbnN0cmFpbnRzVG9DaHJvbWVfID0gZnVuY3Rpb24oYykge1xuICAgIGlmICh0eXBlb2YgYyAhPT0gJ29iamVjdCcgfHwgYy5tYW5kYXRvcnkgfHwgYy5vcHRpb25hbCkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIGNvbnN0IGNjID0ge307XG4gICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlcXVpcmUnIHx8IGtleSA9PT0gJ2FkdmFuY2VkJyB8fCBrZXkgPT09ICdtZWRpYVNvdXJjZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgciA9ICh0eXBlb2YgY1trZXldID09PSAnb2JqZWN0JykgPyBjW2tleV0gOiB7aWRlYWw6IGNba2V5XX07XG4gICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByLmV4YWN0ID09PSAnbnVtYmVyJykge1xuICAgICAgICByLm1pbiA9IHIubWF4ID0gci5leGFjdDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9sZG5hbWVfID0gZnVuY3Rpb24ocHJlZml4LCBuYW1lKSB7XG4gICAgICAgIGlmIChwcmVmaXgpIHtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuYW1lID09PSAnZGV2aWNlSWQnKSA/ICdzb3VyY2VJZCcgOiBuYW1lO1xuICAgICAgfTtcbiAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2Mub3B0aW9uYWwgPSBjYy5vcHRpb25hbCB8fCBbXTtcbiAgICAgICAgbGV0IG9jID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnbWluJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICAgIG9jID0ge307XG4gICAgICAgICAgb2Nbb2xkbmFtZV8oJ21heCcsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY1tvbGRuYW1lXygnJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiByLmV4YWN0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjYy5tYW5kYXRvcnkgPSBjYy5tYW5kYXRvcnkgfHwge307XG4gICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lXygnJywga2V5KV0gPSByLmV4YWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgWydtaW4nLCAnbWF4J10uZm9yRWFjaChtaXggPT4ge1xuICAgICAgICAgIGlmIChyW21peF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2MubWFuZGF0b3J5ID0gY2MubWFuZGF0b3J5IHx8IHt9O1xuICAgICAgICAgICAgY2MubWFuZGF0b3J5W29sZG5hbWVfKG1peCwga2V5KV0gPSByW21peF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYy5hZHZhbmNlZCkge1xuICAgICAgY2Mub3B0aW9uYWwgPSAoY2Mub3B0aW9uYWwgfHwgW10pLmNvbmNhdChjLmFkdmFuY2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIGNjO1xuICB9O1xuXG4gIGNvbnN0IHNoaW1Db25zdHJhaW50c18gPSBmdW5jdGlvbihjb25zdHJhaW50cywgZnVuYykge1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uID49IDYxKSB7XG4gICAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gICAgfVxuICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIGlmIChjb25zdHJhaW50cyAmJiB0eXBlb2YgY29uc3RyYWludHMuYXVkaW8gPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCByZW1hcCA9IGZ1bmN0aW9uKG9iaiwgYSwgYikge1xuICAgICAgICBpZiAoYSBpbiBvYmogJiYgIShiIGluIG9iaikpIHtcbiAgICAgICAgICBvYmpbYl0gPSBvYmpbYV07XG4gICAgICAgICAgZGVsZXRlIG9ialthXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0cmFpbnRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdhdXRvR2FpbkNvbnRyb2wnLCAnZ29vZ0F1dG9HYWluQ29udHJvbCcpO1xuICAgICAgcmVtYXAoY29uc3RyYWludHMuYXVkaW8sICdub2lzZVN1cHByZXNzaW9uJywgJ2dvb2dOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICB9XG4gICAgaWYgKGNvbnN0cmFpbnRzICYmIHR5cGVvZiBjb25zdHJhaW50cy52aWRlbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIFNoaW0gZmFjaW5nTW9kZSBmb3IgbW9iaWxlICYgc3VyZmFjZSBwcm8uXG4gICAgICBsZXQgZmFjZSA9IGNvbnN0cmFpbnRzLnZpZGVvLmZhY2luZ01vZGU7XG4gICAgICBmYWNlID0gZmFjZSAmJiAoKHR5cGVvZiBmYWNlID09PSAnb2JqZWN0JykgPyBmYWNlIDoge2lkZWFsOiBmYWNlfSk7XG4gICAgICBjb25zdCBnZXRTdXBwb3J0ZWRGYWNpbmdNb2RlTGllcyA9IGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA2NjtcblxuICAgICAgaWYgKChmYWNlICYmIChmYWNlLmV4YWN0ID09PSAndXNlcicgfHwgZmFjZS5leGFjdCA9PT0gJ2Vudmlyb25tZW50JyB8fFxuICAgICAgICAgICAgICAgICAgICBmYWNlLmlkZWFsID09PSAndXNlcicgfHwgZmFjZS5pZGVhbCA9PT0gJ2Vudmlyb25tZW50JykpICYmXG4gICAgICAgICAgIShuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFN1cHBvcnRlZENvbnN0cmFpbnRzICYmXG4gICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFN1cHBvcnRlZENvbnN0cmFpbnRzKCkuZmFjaW5nTW9kZSAmJlxuICAgICAgICAgICAgIWdldFN1cHBvcnRlZEZhY2luZ01vZGVMaWVzKSkge1xuICAgICAgICBkZWxldGUgY29uc3RyYWludHMudmlkZW8uZmFjaW5nTW9kZTtcbiAgICAgICAgbGV0IG1hdGNoZXM7XG4gICAgICAgIGlmIChmYWNlLmV4YWN0ID09PSAnZW52aXJvbm1lbnQnIHx8IGZhY2UuaWRlYWwgPT09ICdlbnZpcm9ubWVudCcpIHtcbiAgICAgICAgICBtYXRjaGVzID0gWydiYWNrJywgJ3JlYXInXTtcbiAgICAgICAgfSBlbHNlIGlmIChmYWNlLmV4YWN0ID09PSAndXNlcicgfHwgZmFjZS5pZGVhbCA9PT0gJ3VzZXInKSB7XG4gICAgICAgICAgbWF0Y2hlcyA9IFsnZnJvbnQnXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIC8vIExvb2sgZm9yIG1hdGNoZXMgaW4gbGFiZWwsIG9yIHVzZSBsYXN0IGNhbSBmb3IgYmFjayAodHlwaWNhbCkuXG4gICAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpXG4gICAgICAgICAgLnRoZW4oZGV2aWNlcyA9PiB7XG4gICAgICAgICAgICBkZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoZCA9PiBkLmtpbmQgPT09ICd2aWRlb2lucHV0Jyk7XG4gICAgICAgICAgICBsZXQgZGV2ID0gZGV2aWNlcy5maW5kKGQgPT4gbWF0Y2hlcy5zb21lKG1hdGNoID0+XG4gICAgICAgICAgICAgIGQubGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhtYXRjaCkpKTtcbiAgICAgICAgICAgIGlmICghZGV2ICYmIGRldmljZXMubGVuZ3RoICYmIG1hdGNoZXMuaW5jbHVkZXMoJ2JhY2snKSkge1xuICAgICAgICAgICAgICBkZXYgPSBkZXZpY2VzW2RldmljZXMubGVuZ3RoIC0gMV07IC8vIG1vcmUgbGlrZWx5IHRoZSBiYWNrIGNhbVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRldikge1xuICAgICAgICAgICAgICBjb25zdHJhaW50cy52aWRlby5kZXZpY2VJZCA9IGZhY2UuZXhhY3QgPyB7ZXhhY3Q6IGRldi5kZXZpY2VJZH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aWRlYWw6IGRldi5kZXZpY2VJZH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWVfKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICAgICAgICAgIGxvZ2dpbmcoJ2Nocm9tZTogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYyhjb25zdHJhaW50cyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZV8oY29uc3RyYWludHMudmlkZW8pO1xuICAgIH1cbiAgICBsb2dnaW5nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIHJldHVybiBmdW5jKGNvbnN0cmFpbnRzKTtcbiAgfTtcblxuICBjb25zdCBzaGltRXJyb3JfID0gZnVuY3Rpb24oZSkge1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uID49IDY0KSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgUGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJyxcbiAgICAgICAgUGVybWlzc2lvbkRpc21pc3NlZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJyxcbiAgICAgICAgSW52YWxpZFN0YXRlRXJyb3I6ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBEZXZpY2VzTm90Rm91bmRFcnJvcjogJ05vdEZvdW5kRXJyb3InLFxuICAgICAgICBDb25zdHJhaW50Tm90U2F0aXNmaWVkRXJyb3I6ICdPdmVyY29uc3RyYWluZWRFcnJvcicsXG4gICAgICAgIFRyYWNrU3RhcnRFcnJvcjogJ05vdFJlYWRhYmxlRXJyb3InLFxuICAgICAgICBNZWRpYURldmljZUZhaWxlZER1ZVRvU2h1dGRvd246ICdOb3RBbGxvd2VkRXJyb3InLFxuICAgICAgICBNZWRpYURldmljZUtpbGxTd2l0Y2hPbjogJ05vdEFsbG93ZWRFcnJvcicsXG4gICAgICAgIFRhYkNhcHR1cmVFcnJvcjogJ0Fib3J0RXJyb3InLFxuICAgICAgICBTY3JlZW5DYXB0dXJlRXJyb3I6ICdBYm9ydEVycm9yJyxcbiAgICAgICAgRGV2aWNlQ2FwdHVyZUVycm9yOiAnQWJvcnRFcnJvcidcbiAgICAgIH1bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnQgfHwgZS5jb25zdHJhaW50TmFtZSxcbiAgICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgKHRoaXMubWVzc2FnZSAmJiAnOiAnKSArIHRoaXMubWVzc2FnZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGdldFVzZXJNZWRpYV8gPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgc2hpbUNvbnN0cmFpbnRzXyhjb25zdHJhaW50cywgYyA9PiB7XG4gICAgICBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKGMsIG9uU3VjY2VzcywgZSA9PiB7XG4gICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgb25FcnJvcihzaGltRXJyb3JfKGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBnZXRVc2VyTWVkaWFfLmJpbmQobmF2aWdhdG9yKTtcblxuICAvLyBFdmVuIHRob3VnaCBDaHJvbWUgNDUgaGFzIG5hdmlnYXRvci5tZWRpYURldmljZXMgYW5kIGEgZ2V0VXNlck1lZGlhXG4gIC8vIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBQcm9taXNlLCBpdCBkb2VzIG5vdCBhY2NlcHQgc3BlYy1zdHlsZVxuICAvLyBjb25zdHJhaW50cy5cbiAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gICAgY29uc3Qgb3JpZ0dldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY3MpIHtcbiAgICAgIHJldHVybiBzaGltQ29uc3RyYWludHNfKGNzLCBjID0+IG9yaWdHZXRVc2VyTWVkaWEoYykudGhlbihzdHJlYW0gPT4ge1xuICAgICAgICBpZiAoYy5hdWRpbyAmJiAhc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkubGVuZ3RoIHx8XG4gICAgICAgICAgICBjLnZpZGVvICYmICFzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGgpIHtcbiAgICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignJywgJ05vdEZvdW5kRXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyZWFtO1xuICAgICAgfSwgZSA9PiBQcm9taXNlLnJlamVjdChzaGltRXJyb3JfKGUpKSkpO1xuICAgIH07XG4gIH1cbn1cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTRFBVdGlscyBmcm9tICdzZHAnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltUlRDSWNlQ2FuZGlkYXRlKHdpbmRvdykge1xuICAvLyBmb3VuZGF0aW9uIGlzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBhbiBpbmRpY2F0b3IgZm9yIGZ1bGwgc3VwcG9ydCBmb3JcbiAgLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYnJ0Yy1wYy8jcnRjaWNlY2FuZGlkYXRlLWludGVyZmFjZVxuICBpZiAoIXdpbmRvdy5SVENJY2VDYW5kaWRhdGUgfHwgKHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgJiYgJ2ZvdW5kYXRpb24nIGluXG4gICAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBOYXRpdmVSVENJY2VDYW5kaWRhdGUgPSB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlO1xuICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gUlRDSWNlQ2FuZGlkYXRlKGFyZ3MpIHtcbiAgICAvLyBSZW1vdmUgdGhlIGE9IHdoaWNoIHNob3VsZG4ndCBiZSBwYXJ0IG9mIHRoZSBjYW5kaWRhdGUgc3RyaW5nLlxuICAgIGlmICh0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcgJiYgYXJncy5jYW5kaWRhdGUgJiZcbiAgICAgICAgYXJncy5jYW5kaWRhdGUuaW5kZXhPZignYT0nKSA9PT0gMCkge1xuICAgICAgYXJncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgICAgYXJncy5jYW5kaWRhdGUgPSBhcmdzLmNhbmRpZGF0ZS5zdWJzdHIoMik7XG4gICAgfVxuXG4gICAgaWYgKGFyZ3MuY2FuZGlkYXRlICYmIGFyZ3MuY2FuZGlkYXRlLmxlbmd0aCkge1xuICAgICAgLy8gQXVnbWVudCB0aGUgbmF0aXZlIGNhbmRpZGF0ZSB3aXRoIHRoZSBwYXJzZWQgZmllbGRzLlxuICAgICAgY29uc3QgbmF0aXZlQ2FuZGlkYXRlID0gbmV3IE5hdGl2ZVJUQ0ljZUNhbmRpZGF0ZShhcmdzKTtcbiAgICAgIGNvbnN0IHBhcnNlZENhbmRpZGF0ZSA9IFNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlKGFyZ3MuY2FuZGlkYXRlKTtcbiAgICAgIGNvbnN0IGF1Z21lbnRlZENhbmRpZGF0ZSA9IE9iamVjdC5hc3NpZ24obmF0aXZlQ2FuZGlkYXRlLFxuICAgICAgICAgIHBhcnNlZENhbmRpZGF0ZSk7XG5cbiAgICAgIC8vIEFkZCBhIHNlcmlhbGl6ZXIgdGhhdCBkb2VzIG5vdCBzZXJpYWxpemUgdGhlIGV4dHJhIGF0dHJpYnV0ZXMuXG4gICAgICBhdWdtZW50ZWRDYW5kaWRhdGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhbmRpZGF0ZTogYXVnbWVudGVkQ2FuZGlkYXRlLmNhbmRpZGF0ZSxcbiAgICAgICAgICBzZHBNaWQ6IGF1Z21lbnRlZENhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgICAgc2RwTUxpbmVJbmRleDogYXVnbWVudGVkQ2FuZGlkYXRlLnNkcE1MaW5lSW5kZXgsXG4gICAgICAgICAgdXNlcm5hbWVGcmFnbWVudDogYXVnbWVudGVkQ2FuZGlkYXRlLnVzZXJuYW1lRnJhZ21lbnQsXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGF1Z21lbnRlZENhbmRpZGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOYXRpdmVSVENJY2VDYW5kaWRhdGUoYXJncyk7XG4gIH07XG4gIHdpbmRvdy5SVENJY2VDYW5kaWRhdGUucHJvdG90eXBlID0gTmF0aXZlUlRDSWNlQ2FuZGlkYXRlLnByb3RvdHlwZTtcblxuICAvLyBIb29rIHVwIHRoZSBhdWdtZW50ZWQgY2FuZGlkYXRlIGluIG9uaWNlY2FuZGlkYXRlIGFuZFxuICAvLyBhZGRFdmVudExpc3RlbmVyKCdpY2VjYW5kaWRhdGUnLCAuLi4pXG4gIHV0aWxzLndyYXBQZWVyQ29ubmVjdGlvbkV2ZW50KHdpbmRvdywgJ2ljZWNhbmRpZGF0ZScsIGUgPT4ge1xuICAgIGlmIChlLmNhbmRpZGF0ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsICdjYW5kaWRhdGUnLCB7XG4gICAgICAgIHZhbHVlOiBuZXcgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZShlLmNhbmRpZGF0ZSksXG4gICAgICAgIHdyaXRhYmxlOiAnZmFsc2UnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGU7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbU1heE1lc3NhZ2VTaXplKHdpbmRvdywgYnJvd3NlckRldGFpbHMpIHtcbiAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoISgnc2N0cCcgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ3NjdHAnLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc2N0cCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogdGhpcy5fc2N0cDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHNjdHBJbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICFkZXNjcmlwdGlvbi5zZHApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKGRlc2NyaXB0aW9uLnNkcCk7XG4gICAgc2VjdGlvbnMuc2hpZnQoKTtcbiAgICByZXR1cm4gc2VjdGlvbnMuc29tZShtZWRpYVNlY3Rpb24gPT4ge1xuICAgICAgY29uc3QgbUxpbmUgPSBTRFBVdGlscy5wYXJzZU1MaW5lKG1lZGlhU2VjdGlvbik7XG4gICAgICByZXR1cm4gbUxpbmUgJiYgbUxpbmUua2luZCA9PT0gJ2FwcGxpY2F0aW9uJ1xuICAgICAgICAgICYmIG1MaW5lLnByb3RvY29sLmluZGV4T2YoJ1NDVFAnKSAhPT0gLTE7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UmVtb3RlRmlyZWZveFZlcnNpb24gPSBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgIC8vIFRPRE86IElzIHRoZXJlIGEgYmV0dGVyIHNvbHV0aW9uIGZvciBkZXRlY3RpbmcgRmlyZWZveD9cbiAgICBjb25zdCBtYXRjaCA9IGRlc2NyaXB0aW9uLnNkcC5tYXRjaCgvbW96aWxsYS4uLlRISVNfSVNfU0RQQVJUQS0oXFxkKykvKTtcbiAgICBpZiAobWF0Y2ggPT09IG51bGwgfHwgbWF0Y2gubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKTtcbiAgICAvLyBUZXN0IGZvciBOYU4gKHllcywgdGhpcyBpcyB1Z2x5KVxuICAgIHJldHVybiB2ZXJzaW9uICE9PSB2ZXJzaW9uID8gLTEgOiB2ZXJzaW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldENhblNlbmRNYXhNZXNzYWdlU2l6ZSA9IGZ1bmN0aW9uKHJlbW90ZUlzRmlyZWZveCkge1xuICAgIC8vIEV2ZXJ5IGltcGxlbWVudGF0aW9uIHdlIGtub3cgY2FuIHNlbmQgYXQgbGVhc3QgNjQgS2lCLlxuICAgIC8vIE5vdGU6IEFsdGhvdWdoIENocm9tZSBpcyB0ZWNobmljYWxseSBhYmxlIHRvIHNlbmQgdXAgdG8gMjU2IEtpQiwgdGhlXG4gICAgLy8gICAgICAgZGF0YSBkb2VzIG5vdCByZWFjaCB0aGUgb3RoZXIgcGVlciByZWxpYWJseS5cbiAgICAvLyAgICAgICBTZWU6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD04NDE5XG4gICAgbGV0IGNhblNlbmRNYXhNZXNzYWdlU2l6ZSA9IDY1NTM2O1xuICAgIGlmIChicm93c2VyRGV0YWlscy5icm93c2VyID09PSAnZmlyZWZveCcpIHtcbiAgICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNTcpIHtcbiAgICAgICAgaWYgKHJlbW90ZUlzRmlyZWZveCA9PT0gLTEpIHtcbiAgICAgICAgICAvLyBGRiA8IDU3IHdpbGwgc2VuZCBpbiAxNiBLaUIgY2h1bmtzIHVzaW5nIHRoZSBkZXByZWNhdGVkIFBQSURcbiAgICAgICAgICAvLyBmcmFnbWVudGF0aW9uLlxuICAgICAgICAgIGNhblNlbmRNYXhNZXNzYWdlU2l6ZSA9IDE2Mzg0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEhvd2V2ZXIsIG90aGVyIEZGIChhbmQgUkFXUlRDKSBjYW4gcmVhc3NlbWJsZSBQUElELWZyYWdtZW50ZWRcbiAgICAgICAgICAvLyBtZXNzYWdlcy4gVGh1cywgc3VwcG9ydGluZyB+MiBHaUIgd2hlbiBzZW5kaW5nLlxuICAgICAgICAgIGNhblNlbmRNYXhNZXNzYWdlU2l6ZSA9IDIxNDc0ODM2Mzc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDYwKSB7XG4gICAgICAgIC8vIEN1cnJlbnRseSwgYWxsIEZGID49IDU3IHdpbGwgcmVzZXQgdGhlIHJlbW90ZSBtYXhpbXVtIG1lc3NhZ2Ugc2l6ZVxuICAgICAgICAvLyB0byB0aGUgZGVmYXVsdCB2YWx1ZSB3aGVuIGEgZGF0YSBjaGFubmVsIGlzIGNyZWF0ZWQgYXQgYSBsYXRlclxuICAgICAgICAvLyBzdGFnZS4gOihcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI2ODMxXG4gICAgICAgIGNhblNlbmRNYXhNZXNzYWdlU2l6ZSA9XG4gICAgICAgICAgYnJvd3NlckRldGFpbHMudmVyc2lvbiA9PT0gNTcgPyA2NTUzNSA6IDY1NTM2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRkYgPj0gNjAgc3VwcG9ydHMgc2VuZGluZyB+MiBHaUJcbiAgICAgICAgY2FuU2VuZE1heE1lc3NhZ2VTaXplID0gMjE0NzQ4MzYzNztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNhblNlbmRNYXhNZXNzYWdlU2l6ZTtcbiAgfTtcblxuICBjb25zdCBnZXRNYXhNZXNzYWdlU2l6ZSA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uLCByZW1vdGVJc0ZpcmVmb3gpIHtcbiAgICAvLyBOb3RlOiA2NTUzNiBieXRlcyBpcyB0aGUgZGVmYXVsdCB2YWx1ZSBmcm9tIHRoZSBTRFAgc3BlYy4gQWxzbyxcbiAgICAvLyAgICAgICBldmVyeSBpbXBsZW1lbnRhdGlvbiB3ZSBrbm93IHN1cHBvcnRzIHJlY2VpdmluZyA2NTUzNiBieXRlcy5cbiAgICBsZXQgbWF4TWVzc2FnZVNpemUgPSA2NTUzNjtcblxuICAgIC8vIEZGIDU3IGhhcyBhIHNsaWdodGx5IGluY29ycmVjdCBkZWZhdWx0IHJlbW90ZSBtYXggbWVzc2FnZSBzaXplLCBzb1xuICAgIC8vIHdlIG5lZWQgdG8gYWRqdXN0IGl0IGhlcmUgdG8gYXZvaWQgYSBmYWlsdXJlIHdoZW4gc2VuZGluZy5cbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE0MjU2OTdcbiAgICBpZiAoYnJvd3NlckRldGFpbHMuYnJvd3NlciA9PT0gJ2ZpcmVmb3gnXG4gICAgICAgICAmJiBicm93c2VyRGV0YWlscy52ZXJzaW9uID09PSA1Nykge1xuICAgICAgbWF4TWVzc2FnZVNpemUgPSA2NTUzNTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KGRlc2NyaXB0aW9uLnNkcCxcbiAgICAgICdhPW1heC1tZXNzYWdlLXNpemU6Jyk7XG4gICAgaWYgKG1hdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgIG1heE1lc3NhZ2VTaXplID0gcGFyc2VJbnQobWF0Y2hbMF0uc3Vic3RyKDE5KSwgMTApO1xuICAgIH0gZWxzZSBpZiAoYnJvd3NlckRldGFpbHMuYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmXG4gICAgICAgICAgICAgICAgcmVtb3RlSXNGaXJlZm94ICE9PSAtMSkge1xuICAgICAgLy8gSWYgdGhlIG1heGltdW0gbWVzc2FnZSBzaXplIGlzIG5vdCBwcmVzZW50IGluIHRoZSByZW1vdGUgU0RQIGFuZFxuICAgICAgLy8gYm90aCBsb2NhbCBhbmQgcmVtb3RlIGFyZSBGaXJlZm94LCB0aGUgcmVtb3RlIHBlZXIgY2FuIHJlY2VpdmVcbiAgICAgIC8vIH4yIEdpQi5cbiAgICAgIG1heE1lc3NhZ2VTaXplID0gMjE0NzQ4MzYzNztcbiAgICB9XG4gICAgcmV0dXJuIG1heE1lc3NhZ2VTaXplO1xuICB9O1xuXG4gIGNvbnN0IG9yaWdTZXRSZW1vdGVEZXNjcmlwdGlvbiA9XG4gICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID1cbiAgICBmdW5jdGlvbiBzZXRSZW1vdGVEZXNjcmlwdGlvbigpIHtcbiAgICAgIHRoaXMuX3NjdHAgPSBudWxsO1xuICAgICAgLy8gQ2hyb21lIGRlY2lkZWQgdG8gbm90IGV4cG9zZSAuc2N0cCBpbiBwbGFuLWIgbW9kZS5cbiAgICAgIC8vIEFzIHVzdWFsLCBhZGFwdGVyLmpzIGhhcyB0byBkbyBhbiAndWdseSB3b3Jha2Fyb3VuZCdcbiAgICAgIC8vIHRvIGNvdmVyIHVwIHRoZSBtZXNzLlxuICAgICAgaWYgKGJyb3dzZXJEZXRhaWxzLmJyb3dzZXIgPT09ICdjaHJvbWUnICYmIGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPj0gNzYpIHtcbiAgICAgICAgY29uc3Qge3NkcFNlbWFudGljc30gPSB0aGlzLmdldENvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgaWYgKHNkcFNlbWFudGljcyA9PT0gJ3BsYW4tYicpIHtcbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3NjdHAnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fc2N0cCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogdGhpcy5fc2N0cDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzY3RwSW5EZXNjcmlwdGlvbihhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSByZW1vdGUgaXMgRkYuXG4gICAgICAgIGNvbnN0IGlzRmlyZWZveCA9IGdldFJlbW90ZUZpcmVmb3hWZXJzaW9uKGFyZ3VtZW50c1swXSk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSBtYXhpbXVtIG1lc3NhZ2Ugc2l6ZSB0aGUgbG9jYWwgcGVlciBpcyBjYXBhYmxlIG9mIHNlbmRpbmdcbiAgICAgICAgY29uc3QgY2FuU2VuZE1NUyA9IGdldENhblNlbmRNYXhNZXNzYWdlU2l6ZShpc0ZpcmVmb3gpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgbWF4aW11bSBtZXNzYWdlIHNpemUgb2YgdGhlIHJlbW90ZSBwZWVyLlxuICAgICAgICBjb25zdCByZW1vdGVNTVMgPSBnZXRNYXhNZXNzYWdlU2l6ZShhcmd1bWVudHNbMF0sIGlzRmlyZWZveCk7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGZpbmFsIG1heGltdW0gbWVzc2FnZSBzaXplXG4gICAgICAgIGxldCBtYXhNZXNzYWdlU2l6ZTtcbiAgICAgICAgaWYgKGNhblNlbmRNTVMgPT09IDAgJiYgcmVtb3RlTU1TID09PSAwKSB7XG4gICAgICAgICAgbWF4TWVzc2FnZVNpemUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FuU2VuZE1NUyA9PT0gMCB8fCByZW1vdGVNTVMgPT09IDApIHtcbiAgICAgICAgICBtYXhNZXNzYWdlU2l6ZSA9IE1hdGgubWF4KGNhblNlbmRNTVMsIHJlbW90ZU1NUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF4TWVzc2FnZVNpemUgPSBNYXRoLm1pbihjYW5TZW5kTU1TLCByZW1vdGVNTVMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgZHVtbXkgUlRDU2N0cFRyYW5zcG9ydCBvYmplY3QgYW5kIHRoZSAnbWF4TWVzc2FnZVNpemUnXG4gICAgICAgIC8vIGF0dHJpYnV0ZS5cbiAgICAgICAgY29uc3Qgc2N0cCA9IHt9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2N0cCwgJ21heE1lc3NhZ2VTaXplJywge1xuICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXhNZXNzYWdlU2l6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zY3RwID0gc2N0cDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9yaWdTZXRSZW1vdGVEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltU2VuZFRocm93VHlwZUVycm9yKHdpbmRvdykge1xuICBpZiAoISh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiZcbiAgICAgICdjcmVhdGVEYXRhQ2hhbm5lbCcgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBOb3RlOiBBbHRob3VnaCBGaXJlZm94ID49IDU3IGhhcyBhIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgdGhlIG1heGltdW1cbiAgLy8gICAgICAgbWVzc2FnZSBzaXplIGNhbiBiZSByZXNldCBmb3IgYWxsIGRhdGEgY2hhbm5lbHMgYXQgYSBsYXRlciBzdGFnZS5cbiAgLy8gICAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDI2ODMxXG5cbiAgZnVuY3Rpb24gd3JhcERjU2VuZChkYywgcGMpIHtcbiAgICBjb25zdCBvcmlnRGF0YUNoYW5uZWxTZW5kID0gZGMuc2VuZDtcbiAgICBkYy5zZW5kID0gZnVuY3Rpb24gc2VuZCgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhcmd1bWVudHNbMF07XG4gICAgICBjb25zdCBsZW5ndGggPSBkYXRhLmxlbmd0aCB8fCBkYXRhLnNpemUgfHwgZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgaWYgKGRjLnJlYWR5U3RhdGUgPT09ICdvcGVuJyAmJlxuICAgICAgICAgIHBjLnNjdHAgJiYgbGVuZ3RoID4gcGMuc2N0cC5tYXhNZXNzYWdlU2l6ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdNZXNzYWdlIHRvbyBsYXJnZSAoY2FuIHNlbmQgYSBtYXhpbXVtIG9mICcgK1xuICAgICAgICAgIHBjLnNjdHAubWF4TWVzc2FnZVNpemUgKyAnIGJ5dGVzKScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdEYXRhQ2hhbm5lbFNlbmQuYXBwbHkoZGMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuICBjb25zdCBvcmlnQ3JlYXRlRGF0YUNoYW5uZWwgPVxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlRGF0YUNoYW5uZWw7XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlRGF0YUNoYW5uZWwgPVxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhdGFDaGFubmVsKCkge1xuICAgICAgY29uc3QgZGF0YUNoYW5uZWwgPSBvcmlnQ3JlYXRlRGF0YUNoYW5uZWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHdyYXBEY1NlbmQoZGF0YUNoYW5uZWwsIHRoaXMpO1xuICAgICAgcmV0dXJuIGRhdGFDaGFubmVsO1xuICAgIH07XG4gIHV0aWxzLndyYXBQZWVyQ29ubmVjdGlvbkV2ZW50KHdpbmRvdywgJ2RhdGFjaGFubmVsJywgZSA9PiB7XG4gICAgd3JhcERjU2VuZChlLmNoYW5uZWwsIGUudGFyZ2V0KTtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG59XG5cblxuLyogc2hpbXMgUlRDQ29ubmVjdGlvblN0YXRlIGJ5IHByZXRlbmRpbmcgaXQgaXMgdGhlIHNhbWUgYXMgaWNlQ29ubmVjdGlvblN0YXRlLlxuICogU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD02MTQ1I2MxMlxuICogZm9yIHdoeSB0aGlzIGlzIGEgdmFsaWQgaGFjayBpbiBDaHJvbWUuIEluIEZpcmVmb3ggaXQgaXMgc2xpZ2h0bHkgaW5jb3JyZWN0XG4gKiBzaW5jZSBEVExTIGZhaWx1cmVzIHdvdWxkIGJlIGhpZGRlbi4gU2VlXG4gKiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMjY1ODI3XG4gKiBmb3IgdGhlIEZpcmVmb3ggdHJhY2tpbmcgYnVnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hpbUNvbm5lY3Rpb25TdGF0ZSh3aW5kb3cpIHtcbiAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gfHxcbiAgICAgICdjb25uZWN0aW9uU3RhdGUnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJvdG8gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdjb25uZWN0aW9uU3RhdGUnLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcGxldGVkOiAnY29ubmVjdGVkJyxcbiAgICAgICAgY2hlY2tpbmc6ICdjb25uZWN0aW5nJ1xuICAgICAgfVt0aGlzLmljZUNvbm5lY3Rpb25TdGF0ZV0gfHwgdGhpcy5pY2VDb25uZWN0aW9uU3RhdGU7XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnb25jb25uZWN0aW9uc3RhdGVjaGFuZ2UnLCB7XG4gICAgZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29uY29ubmVjdGlvbnN0YXRlY2hhbmdlIHx8IG51bGw7XG4gICAgfSxcbiAgICBzZXQoY2IpIHtcbiAgICAgIGlmICh0aGlzLl9vbmNvbm5lY3Rpb25zdGF0ZWNoYW5nZSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3Rpb25zdGF0ZWNoYW5nZScsXG4gICAgICAgICAgICB0aGlzLl9vbmNvbm5lY3Rpb25zdGF0ZWNoYW5nZSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vbmNvbm5lY3Rpb25zdGF0ZWNoYW5nZTtcbiAgICAgIH1cbiAgICAgIGlmIChjYikge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3Rpb25zdGF0ZWNoYW5nZScsXG4gICAgICAgICAgICB0aGlzLl9vbmNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IGNiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xuXG4gIFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbiddLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgIGNvbnN0IG9yaWdNZXRob2QgPSBwcm90b1ttZXRob2RdO1xuICAgIHByb3RvW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5fY29ubmVjdGlvbnN0YXRlY2hhbmdlcG9seSkge1xuICAgICAgICB0aGlzLl9jb25uZWN0aW9uc3RhdGVjaGFuZ2Vwb2x5ID0gZSA9PiB7XG4gICAgICAgICAgY29uc3QgcGMgPSBlLnRhcmdldDtcbiAgICAgICAgICBpZiAocGMuX2xhc3RDb25uZWN0aW9uU3RhdGUgIT09IHBjLmNvbm5lY3Rpb25TdGF0ZSkge1xuICAgICAgICAgICAgcGMuX2xhc3RDb25uZWN0aW9uU3RhdGUgPSBwYy5jb25uZWN0aW9uU3RhdGU7XG4gICAgICAgICAgICBjb25zdCBuZXdFdmVudCA9IG5ldyBFdmVudCgnY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgZSk7XG4gICAgICAgICAgICBwYy5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJyxcbiAgICAgICAgICB0aGlzLl9jb25uZWN0aW9uc3RhdGVjaGFuZ2Vwb2x5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFeHRtYXBBbGxvd01peGVkKHdpbmRvdywgYnJvd3NlckRldGFpbHMpIHtcbiAgLyogcmVtb3ZlIGE9ZXh0bWFwLWFsbG93LW1peGVkIGZvciB3ZWJydGMub3JnIDwgTTcxICovXG4gIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChicm93c2VyRGV0YWlscy5icm93c2VyID09PSAnY2hyb21lJyAmJiBicm93c2VyRGV0YWlscy52ZXJzaW9uID49IDcxKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChicm93c2VyRGV0YWlscy5icm93c2VyID09PSAnc2FmYXJpJyAmJiBicm93c2VyRGV0YWlscy52ZXJzaW9uID49IDYwNSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBuYXRpdmVTUkQgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID1cbiAgZnVuY3Rpb24gc2V0UmVtb3RlRGVzY3JpcHRpb24oZGVzYykge1xuICAgIGlmIChkZXNjICYmIGRlc2Muc2RwICYmIGRlc2Muc2RwLmluZGV4T2YoJ1xcbmE9ZXh0bWFwLWFsbG93LW1peGVkJykgIT09IC0xKSB7XG4gICAgICBjb25zdCBzZHAgPSBkZXNjLnNkcC5zcGxpdCgnXFxuJykuZmlsdGVyKChsaW5lKSA9PiB7XG4gICAgICAgIHJldHVybiBsaW5lLnRyaW0oKSAhPT0gJ2E9ZXh0bWFwLWFsbG93LW1peGVkJztcbiAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgLy8gU2FmYXJpIGVuZm9yY2VzIHJlYWQtb25seS1uZXNzIG9mIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiBmaWVsZHMuXG4gICAgICBpZiAod2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIGRlc2MgaW5zdGFuY2VvZiB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICAgIGFyZ3VtZW50c1swXSA9IG5ldyB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgICAgICB0eXBlOiBkZXNjLnR5cGUsXG4gICAgICAgICAgc2RwLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlc2Muc2RwID0gc2RwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmF0aXZlU1JELmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltQWRkSWNlQ2FuZGlkYXRlTnVsbE9yRW1wdHkod2luZG93LCBicm93c2VyRGV0YWlscykge1xuICAvLyBTdXBwb3J0IGZvciBhZGRJY2VDYW5kaWRhdGUobnVsbCBvciB1bmRlZmluZWQpXG4gIC8vIGFzIHdlbGwgYXMgYWRkSWNlQ2FuZGlkYXRlKHtjYW5kaWRhdGU6IFwiXCIsIC4uLn0pXG4gIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk3ODU4MlxuICAvLyBOb3RlOiBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgb3RoZXIgcG9seWZpbGxzIHdoaWNoIGNoYW5nZSB0aGUgc2lnbmF0dXJlLlxuICBpZiAoISh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbmF0aXZlQWRkSWNlQ2FuZGlkYXRlID1cbiAgICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuICBpZiAoIW5hdGl2ZUFkZEljZUNhbmRpZGF0ZSB8fCBuYXRpdmVBZGRJY2VDYW5kaWRhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID1cbiAgICBmdW5jdGlvbiBhZGRJY2VDYW5kaWRhdGUoKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50c1swXSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzWzFdKSB7XG4gICAgICAgICAgYXJndW1lbnRzWzFdLmFwcGx5KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIC8vIEZpcmVmb3ggNjgrIGVtaXRzIGFuZCBwcm9jZXNzZXMge2NhbmRpZGF0ZTogXCJcIiwgLi4ufSwgaWdub3JlXG4gICAgICAvLyBpbiBvbGRlciB2ZXJzaW9ucy5cbiAgICAgIC8vIE5hdGl2ZSBzdXBwb3J0IGZvciBpZ25vcmluZyBleGlzdHMgZm9yIENocm9tZSBNNzcrLlxuICAgICAgLy8gU2FmYXJpIGlnbm9yZXMgYXMgd2VsbCwgZXhhY3QgdmVyc2lvbiB1bmtub3duIGJ1dCB3b3JrcyBpbiB0aGUgc2FtZVxuICAgICAgLy8gdmVyc2lvbiB0aGF0IGFsc28gaWdub3JlcyBhZGRJY2VDYW5kaWRhdGUobnVsbCkuXG4gICAgICBpZiAoKChicm93c2VyRGV0YWlscy5icm93c2VyID09PSAnY2hyb21lJyAmJiBicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgNzgpXG4gICAgICAgICAgIHx8IChicm93c2VyRGV0YWlscy5icm93c2VyID09PSAnZmlyZWZveCdcbiAgICAgICAgICAgICAgICYmIGJyb3dzZXJEZXRhaWxzLnZlcnNpb24gPCA2OClcbiAgICAgICAgICAgfHwgKGJyb3dzZXJEZXRhaWxzLmJyb3dzZXIgPT09ICdzYWZhcmknKSlcbiAgICAgICAgICAmJiBhcmd1bWVudHNbMF0gJiYgYXJndW1lbnRzWzBdLmNhbmRpZGF0ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hdGl2ZUFkZEljZUNhbmRpZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbi8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2ZpbHRlckljZVNlcnZlcnN9IGZyb20gJy4vZmlsdGVyaWNlc2VydmVycyc7XG5pbXBvcnQgc2hpbVJUQ1BlZXJDb25uZWN0aW9uIGZyb20gJ3J0Y3BlZXJjb25uZWN0aW9uLXNoaW0nO1xuXG5leHBvcnQge3NoaW1HZXRVc2VyTWVkaWF9IGZyb20gJy4vZ2V0dXNlcm1lZGlhJztcbmV4cG9ydCB7c2hpbUdldERpc3BsYXlNZWRpYX0gZnJvbSAnLi9nZXRkaXNwbGF5bWVkaWEnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpbVBlZXJDb25uZWN0aW9uKHdpbmRvdywgYnJvd3NlckRldGFpbHMpIHtcbiAgaWYgKHdpbmRvdy5SVENJY2VHYXRoZXJlcikge1xuICAgIGlmICghd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSkge1xuICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uIFJUQ0ljZUNhbmRpZGF0ZShhcmdzKSB7XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKCF3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24gUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICB9O1xuICAgIH1cbiAgICAvLyB0aGlzIGFkZHMgYW4gYWRkaXRpb25hbCBldmVudCBsaXN0ZW5lciB0byBNZWRpYVN0cmFja1RyYWNrIHRoYXQgc2lnbmFsc1xuICAgIC8vIHdoZW4gYSB0cmFja3MgZW5hYmxlZCBwcm9wZXJ0eSB3YXMgY2hhbmdlZC4gV29ya2Fyb3VuZCBmb3IgYSBidWcgaW5cbiAgICAvLyBhZGRTdHJlYW0sIHNlZSBiZWxvdy4gTm8gbG9uZ2VyIHJlcXVpcmVkIGluIDE1MDI1K1xuICAgIGlmIChicm93c2VyRGV0YWlscy52ZXJzaW9uIDwgMTUwMjUpIHtcbiAgICAgIGNvbnN0IG9yaWdNU1RFbmFibGVkID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcbiAgICAgICAgICB3aW5kb3cuTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUsICdlbmFibGVkJyk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93Lk1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLCAnZW5hYmxlZCcsIHtcbiAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgb3JpZ01TVEVuYWJsZWQuc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgIGNvbnN0IGV2ID0gbmV3IEV2ZW50KCdlbmFibGVkJyk7XG4gICAgICAgICAgZXYuZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIE9SVEMgZGVmaW5lcyB0aGUgRFRNRiBzZW5kZXIgYSBiaXQgZGlmZmVyZW50LlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL29ydGMvaXNzdWVzLzcxNFxuICBpZiAod2luZG93LlJUQ1J0cFNlbmRlciAmJiAhKCdkdG1mJyBpbiB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1J0cFNlbmRlci5wcm90b3R5cGUsICdkdG1mJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICBpZiAodGhpcy5fZHRtZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMudHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgdGhpcy5fZHRtZiA9IG5ldyB3aW5kb3cuUlRDRHRtZlNlbmRlcih0aGlzKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHJhY2sua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgdGhpcy5fZHRtZiA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kdG1mO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIEVkZ2UgY3VycmVudGx5IG9ubHkgaW1wbGVtZW50cyB0aGUgUlRDRHRtZlNlbmRlciwgbm90IHRoZVxuICAvLyBSVENEVE1GU2VuZGVyIGFsaWFzLiBTZWUgaHR0cDovL2RyYWZ0Lm9ydGMub3JnLyNydGNkdG1mc2VuZGVyMipcbiAgaWYgKHdpbmRvdy5SVENEdG1mU2VuZGVyICYmICF3aW5kb3cuUlRDRFRNRlNlbmRlcikge1xuICAgIHdpbmRvdy5SVENEVE1GU2VuZGVyID0gd2luZG93LlJUQ0R0bWZTZW5kZXI7XG4gIH1cblxuICBjb25zdCBSVENQZWVyQ29ubmVjdGlvblNoaW0gPSBzaGltUlRDUGVlckNvbm5lY3Rpb24od2luZG93LFxuICAgICAgYnJvd3NlckRldGFpbHMudmVyc2lvbik7XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIFJUQ1BlZXJDb25uZWN0aW9uKGNvbmZpZykge1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgIGNvbmZpZy5pY2VTZXJ2ZXJzID0gZmlsdGVySWNlU2VydmVycyhjb25maWcuaWNlU2VydmVycyxcbiAgICAgICAgYnJvd3NlckRldGFpbHMudmVyc2lvbik7XG4gICAgICB1dGlscy5sb2coJ0lDRSBzZXJ2ZXJzIGFmdGVyIGZpbHRlcmluZzonLCBjb25maWcuaWNlU2VydmVycyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUlRDUGVlckNvbm5lY3Rpb25TaGltKGNvbmZpZyk7XG4gIH07XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSBSVENQZWVyQ29ubmVjdGlvblNoaW0ucHJvdG90eXBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbVJlcGxhY2VUcmFjayh3aW5kb3cpIHtcbiAgLy8gT1JUQyBoYXMgcmVwbGFjZVRyYWNrIC0tIGh0dHBzOi8vZ2l0aHViLmNvbS93M2Mvb3J0Yy9pc3N1ZXMvNjE0XG4gIGlmICh3aW5kb3cuUlRDUnRwU2VuZGVyICYmXG4gICAgICAhKCdyZXBsYWNlVHJhY2snIGluIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlKSkge1xuICAgIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLnJlcGxhY2VUcmFjayA9XG4gICAgICAgIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLnNldFRyYWNrO1xuICB9XG59XG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxOCBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbi8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG4vLyBFZGdlIGRvZXMgbm90IGxpa2Vcbi8vIDEpIHN0dW46IGZpbHRlcmVkIGFmdGVyIDE0MzkzIHVubGVzcyA/dHJhbnNwb3J0PXVkcCBpcyBwcmVzZW50XG4vLyAyKSB0dXJuOiB0aGF0IGRvZXMgbm90IGhhdmUgYWxsIG9mIHR1cm46aG9zdDpwb3J0P3RyYW5zcG9ydD11ZHBcbi8vIDMpIHR1cm46IHdpdGggaXB2NiBhZGRyZXNzZXNcbi8vIDQpIHR1cm46IG9jY3VycmluZyBtdWxpcGxlIHRpbWVzXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVySWNlU2VydmVycyhpY2VTZXJ2ZXJzLCBlZGdlVmVyc2lvbikge1xuICBsZXQgaGFzVHVybiA9IGZhbHNlO1xuICBpY2VTZXJ2ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpY2VTZXJ2ZXJzKSk7XG4gIHJldHVybiBpY2VTZXJ2ZXJzLmZpbHRlcihzZXJ2ZXIgPT4ge1xuICAgIGlmIChzZXJ2ZXIgJiYgKHNlcnZlci51cmxzIHx8IHNlcnZlci51cmwpKSB7XG4gICAgICBsZXQgdXJscyA9IHNlcnZlci51cmxzIHx8IHNlcnZlci51cmw7XG4gICAgICBpZiAoc2VydmVyLnVybCAmJiAhc2VydmVyLnVybHMpIHtcbiAgICAgICAgdXRpbHMuZGVwcmVjYXRlZCgnUlRDSWNlU2VydmVyLnVybCcsICdSVENJY2VTZXJ2ZXIudXJscycpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2YgdXJscyA9PT0gJ3N0cmluZyc7XG4gICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgdXJscyA9IFt1cmxzXTtcbiAgICAgIH1cbiAgICAgIHVybHMgPSB1cmxzLmZpbHRlcih1cmwgPT4ge1xuICAgICAgICAvLyBmaWx0ZXIgU1RVTiB1bmNvbmRpdGlvbmFsbHkuXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZignc3R1bjonKSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkVHVybiA9IHVybC5zdGFydHNXaXRoKCd0dXJuJykgJiZcbiAgICAgICAgICAgICF1cmwuc3RhcnRzV2l0aCgndHVybjpbJykgJiZcbiAgICAgICAgICAgIHVybC5pbmNsdWRlcygndHJhbnNwb3J0PXVkcCcpO1xuICAgICAgICBpZiAodmFsaWRUdXJuICYmICFoYXNUdXJuKSB7XG4gICAgICAgICAgaGFzVHVybiA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkVHVybiAmJiAhaGFzVHVybjtcbiAgICAgIH0pO1xuXG4gICAgICBkZWxldGUgc2VydmVyLnVybDtcbiAgICAgIHNlcnZlci51cmxzID0gaXNTdHJpbmcgPyB1cmxzWzBdIDogdXJscztcbiAgICAgIHJldHVybiAhIXVybHMubGVuZ3RoO1xuICAgIH1cbiAgfSk7XG59XG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxOCBUaGUgYWRhcHRlci5qcyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltR2V0RGlzcGxheU1lZGlhKHdpbmRvdykge1xuICBpZiAoISgnZ2V0RGlzcGxheU1lZGlhJyBpbiB3aW5kb3cubmF2aWdhdG9yKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoISh3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgJ2dldERpc3BsYXlNZWRpYScgaW4gd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhID1cbiAgICB3aW5kb3cubmF2aWdhdG9yLmdldERpc3BsYXlNZWRpYS5iaW5kKHdpbmRvdy5uYXZpZ2F0b3IpO1xufVxuIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4gLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltR2V0VXNlck1lZGlhKHdpbmRvdykge1xuICBjb25zdCBuYXZpZ2F0b3IgPSB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvcjtcblxuICBjb25zdCBzaGltRXJyb3JfID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB7UGVybWlzc2lvbkRlbmllZEVycm9yOiAnTm90QWxsb3dlZEVycm9yJ31bZS5uYW1lXSB8fCBlLm5hbWUsXG4gICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICBjb25zdHJhaW50OiBlLmNvbnN0cmFpbnQsXG4gICAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8vIGdldFVzZXJNZWRpYSBlcnJvciBzaGltLlxuICBjb25zdCBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKS5jYXRjaChlID0+IFByb21pc2UucmVqZWN0KHNoaW1FcnJvcl8oZSkpKTtcbiAgfTtcbn1cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuLyogZXNsaW50LWVudiBub2RlICovXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmV4cG9ydCB7c2hpbUdldFVzZXJNZWRpYX0gZnJvbSAnLi9nZXR1c2VybWVkaWEnO1xuZXhwb3J0IHtzaGltR2V0RGlzcGxheU1lZGlhfSBmcm9tICcuL2dldGRpc3BsYXltZWRpYSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltT25UcmFjayh3aW5kb3cpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENUcmFja0V2ZW50ICYmXG4gICAgICAoJ3JlY2VpdmVyJyBpbiB3aW5kb3cuUlRDVHJhY2tFdmVudC5wcm90b3R5cGUpICYmXG4gICAgICAhKCd0cmFuc2NlaXZlcicgaW4gd2luZG93LlJUQ1RyYWNrRXZlbnQucHJvdG90eXBlKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDVHJhY2tFdmVudC5wcm90b3R5cGUsICd0cmFuc2NlaXZlcicsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHtyZWNlaXZlcjogdGhpcy5yZWNlaXZlcn07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1QZWVyQ29ubmVjdGlvbih3aW5kb3csIGJyb3dzZXJEZXRhaWxzKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fFxuICAgICAgISh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gfHwgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uKSkge1xuICAgIHJldHVybjsgLy8gcHJvYmFibHkgbWVkaWEucGVlcmNvbm5lY3Rpb24uZW5hYmxlZD1mYWxzZSBpbiBhYm91dDpjb25maWdcbiAgfVxuICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiB3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICAvLyB2ZXJ5IGJhc2ljIHN1cHBvcnQgZm9yIG9sZCB2ZXJzaW9ucy5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSB3aW5kb3cubW96UlRDUGVlckNvbm5lY3Rpb247XG4gIH1cblxuICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUzKSB7XG4gICAgLy8gc2hpbSBhd2F5IG5lZWQgZm9yIG9ic29sZXRlIFJUQ0ljZUNhbmRpZGF0ZS9SVENTZXNzaW9uRGVzY3JpcHRpb24uXG4gICAgWydzZXRMb2NhbERlc2NyaXB0aW9uJywgJ3NldFJlbW90ZURlc2NyaXB0aW9uJywgJ2FkZEljZUNhbmRpZGF0ZSddXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIGNvbnN0IG5hdGl2ZU1ldGhvZCA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICAgICAgICBjb25zdCBtZXRob2RPYmogPSB7W21ldGhvZF0oKSB7XG4gICAgICAgICAgICBhcmd1bWVudHNbMF0gPSBuZXcgKChtZXRob2QgPT09ICdhZGRJY2VDYW5kaWRhdGUnKSA/XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA6XG4gICAgICAgICAgICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBuYXRpdmVNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9fTtcbiAgICAgICAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBtZXRob2RPYmpbbWV0aG9kXTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBjb25zdCBtb2Rlcm5TdGF0c1R5cGVzID0ge1xuICAgIGluYm91bmRydHA6ICdpbmJvdW5kLXJ0cCcsXG4gICAgb3V0Ym91bmRydHA6ICdvdXRib3VuZC1ydHAnLFxuICAgIGNhbmRpZGF0ZXBhaXI6ICdjYW5kaWRhdGUtcGFpcicsXG4gICAgbG9jYWxjYW5kaWRhdGU6ICdsb2NhbC1jYW5kaWRhdGUnLFxuICAgIHJlbW90ZWNhbmRpZGF0ZTogJ3JlbW90ZS1jYW5kaWRhdGUnXG4gIH07XG5cbiAgY29uc3QgbmF0aXZlR2V0U3RhdHMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzO1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzID0gZnVuY3Rpb24gZ2V0U3RhdHMoKSB7XG4gICAgY29uc3QgW3NlbGVjdG9yLCBvblN1Y2MsIG9uRXJyXSA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmF0aXZlR2V0U3RhdHMuYXBwbHkodGhpcywgW3NlbGVjdG9yIHx8IG51bGxdKVxuICAgICAgLnRoZW4oc3RhdHMgPT4ge1xuICAgICAgICBpZiAoYnJvd3NlckRldGFpbHMudmVyc2lvbiA8IDUzICYmICFvblN1Y2MpIHtcbiAgICAgICAgICAvLyBTaGltIG9ubHkgcHJvbWlzZSBnZXRTdGF0cyB3aXRoIHNwZWMtaHlwaGVucyBpbiB0eXBlIG5hbWVzXG4gICAgICAgICAgLy8gTGVhdmUgY2FsbGJhY2sgdmVyc2lvbiBhbG9uZTsgbWlzYyBvbGQgdXNlcyBvZiBmb3JFYWNoIGJlZm9yZSBNYXBcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhdHMuZm9yRWFjaChzdGF0ID0+IHtcbiAgICAgICAgICAgICAgc3RhdC50eXBlID0gbW9kZXJuU3RhdHNUeXBlc1tzdGF0LnR5cGVdIHx8IHN0YXQudHlwZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdm9pZCBUeXBlRXJyb3I6IFwidHlwZVwiIGlzIHJlYWQtb25seSwgaW4gb2xkIHZlcnNpb25zLiAzNC00M2lzaFxuICAgICAgICAgICAgc3RhdHMuZm9yRWFjaCgoc3RhdCwgaSkgPT4ge1xuICAgICAgICAgICAgICBzdGF0cy5zZXQoaSwgT2JqZWN0LmFzc2lnbih7fSwgc3RhdCwge1xuICAgICAgICAgICAgICAgIHR5cGU6IG1vZGVyblN0YXRzVHlwZXNbc3RhdC50eXBlXSB8fCBzdGF0LnR5cGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0cztcbiAgICAgIH0pXG4gICAgICAudGhlbihvblN1Y2MsIG9uRXJyKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1TZW5kZXJHZXRTdGF0cyh3aW5kb3cpIHtcbiAgaWYgKCEodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmXG4gICAgICB3aW5kb3cuUlRDUnRwU2VuZGVyKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAod2luZG93LlJUQ1J0cFNlbmRlciAmJiAnZ2V0U3RhdHMnIGluIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9yaWdHZXRTZW5kZXJzID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRTZW5kZXJzO1xuICBpZiAob3JpZ0dldFNlbmRlcnMpIHtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFNlbmRlcnMgPSBmdW5jdGlvbiBnZXRTZW5kZXJzKCkge1xuICAgICAgY29uc3Qgc2VuZGVycyA9IG9yaWdHZXRTZW5kZXJzLmFwcGx5KHRoaXMsIFtdKTtcbiAgICAgIHNlbmRlcnMuZm9yRWFjaChzZW5kZXIgPT4gc2VuZGVyLl9wYyA9IHRoaXMpO1xuICAgICAgcmV0dXJuIHNlbmRlcnM7XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG9yaWdBZGRUcmFjayA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkVHJhY2s7XG4gIGlmIChvcmlnQWRkVHJhY2spIHtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID0gZnVuY3Rpb24gYWRkVHJhY2soKSB7XG4gICAgICBjb25zdCBzZW5kZXIgPSBvcmlnQWRkVHJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHNlbmRlci5fcGMgPSB0aGlzO1xuICAgICAgcmV0dXJuIHNlbmRlcjtcbiAgICB9O1xuICB9XG4gIHdpbmRvdy5SVENSdHBTZW5kZXIucHJvdG90eXBlLmdldFN0YXRzID0gZnVuY3Rpb24gZ2V0U3RhdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhY2sgPyB0aGlzLl9wYy5nZXRTdGF0cyh0aGlzLnRyYWNrKSA6XG4gICAgICAgIFByb21pc2UucmVzb2x2ZShuZXcgTWFwKCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbVJlY2VpdmVyR2V0U3RhdHMod2luZG93KSB7XG4gIGlmICghKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJlxuICAgICAgd2luZG93LlJUQ1J0cFNlbmRlcikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5SVENSdHBTZW5kZXIgJiYgJ2dldFN0YXRzJyBpbiB3aW5kb3cuUlRDUnRwUmVjZWl2ZXIucHJvdG90eXBlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9yaWdHZXRSZWNlaXZlcnMgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycztcbiAgaWYgKG9yaWdHZXRSZWNlaXZlcnMpIHtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlY2VpdmVycyA9IGZ1bmN0aW9uIGdldFJlY2VpdmVycygpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVycyA9IG9yaWdHZXRSZWNlaXZlcnMuYXBwbHkodGhpcywgW10pO1xuICAgICAgcmVjZWl2ZXJzLmZvckVhY2gocmVjZWl2ZXIgPT4gcmVjZWl2ZXIuX3BjID0gdGhpcyk7XG4gICAgICByZXR1cm4gcmVjZWl2ZXJzO1xuICAgIH07XG4gIH1cbiAgdXRpbHMud3JhcFBlZXJDb25uZWN0aW9uRXZlbnQod2luZG93LCAndHJhY2snLCBlID0+IHtcbiAgICBlLnJlY2VpdmVyLl9wYyA9IGUuc3JjRWxlbWVudDtcbiAgICByZXR1cm4gZTtcbiAgfSk7XG4gIHdpbmRvdy5SVENSdHBSZWNlaXZlci5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbiBnZXRTdGF0cygpIHtcbiAgICByZXR1cm4gdGhpcy5fcGMuZ2V0U3RhdHModGhpcy50cmFjayk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltUmVtb3ZlU3RyZWFtKHdpbmRvdykge1xuICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiB8fFxuICAgICAgJ3JlbW92ZVN0cmVhbScgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkge1xuICAgIHJldHVybjtcbiAgfVxuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnJlbW92ZVN0cmVhbSA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RyZWFtKHN0cmVhbSkge1xuICAgICAgdXRpbHMuZGVwcmVjYXRlZCgncmVtb3ZlU3RyZWFtJywgJ3JlbW92ZVRyYWNrJyk7XG4gICAgICB0aGlzLmdldFNlbmRlcnMoKS5mb3JFYWNoKHNlbmRlciA9PiB7XG4gICAgICAgIGlmIChzZW5kZXIudHJhY2sgJiYgc3RyZWFtLmdldFRyYWNrcygpLmluY2x1ZGVzKHNlbmRlci50cmFjaykpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZVRyYWNrKHNlbmRlcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltUlRDRGF0YUNoYW5uZWwod2luZG93KSB7XG4gIC8vIHJlbmFtZSBEYXRhQ2hhbm5lbCB0byBSVENEYXRhQ2hhbm5lbCAobmF0aXZlIGZpeCBpbiBGRjYwKTpcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTE3Mzg1MVxuICBpZiAod2luZG93LkRhdGFDaGFubmVsICYmICF3aW5kb3cuUlRDRGF0YUNoYW5uZWwpIHtcbiAgICB3aW5kb3cuUlRDRGF0YUNoYW5uZWwgPSB3aW5kb3cuRGF0YUNoYW5uZWw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1BZGRUcmFuc2NlaXZlcih3aW5kb3cpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnJ0Y0hhY2tzL2FkYXB0ZXIvaXNzdWVzLzk5OCNpc3N1ZWNvbW1lbnQtNTE2OTIxNjQ3XG4gIC8vIEZpcmVmb3ggaWdub3JlcyB0aGUgaW5pdCBzZW5kRW5jb2RpbmdzIG9wdGlvbnMgcGFzc2VkIHRvIGFkZFRyYW5zY2VpdmVyXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzOTY5MThcbiAgaWYgKCEodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBvcmlnQWRkVHJhbnNjZWl2ZXIgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYW5zY2VpdmVyO1xuICBpZiAob3JpZ0FkZFRyYW5zY2VpdmVyKSB7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFuc2NlaXZlciA9XG4gICAgICBmdW5jdGlvbiBhZGRUcmFuc2NlaXZlcigpIHtcbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJzUHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3QgaW5pdFBhcmFtZXRlcnMgPSBhcmd1bWVudHNbMV07XG4gICAgICAgIGNvbnN0IHNob3VsZFBlcmZvcm1DaGVjayA9IGluaXRQYXJhbWV0ZXJzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbmRFbmNvZGluZ3MnIGluIGluaXRQYXJhbWV0ZXJzO1xuICAgICAgICBpZiAoc2hvdWxkUGVyZm9ybUNoZWNrKSB7XG4gICAgICAgICAgLy8gSWYgc2VuZEVuY29kaW5ncyBwYXJhbXMgYXJlIHByb3ZpZGVkLCB2YWxpZGF0ZSBncmFtbWFyXG4gICAgICAgICAgaW5pdFBhcmFtZXRlcnMuc2VuZEVuY29kaW5ncy5mb3JFYWNoKChlbmNvZGluZ1BhcmFtKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ3JpZCcgaW4gZW5jb2RpbmdQYXJhbSkge1xuICAgICAgICAgICAgICBjb25zdCByaWRSZWdleCA9IC9eW2EtejAtOV17MCwxNn0kL2k7XG4gICAgICAgICAgICAgIGlmICghcmlkUmVnZXgudGVzdChlbmNvZGluZ1BhcmFtLnJpZCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFJJRCB2YWx1ZSBwcm92aWRlZC4nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdzY2FsZVJlc29sdXRpb25Eb3duQnknIGluIGVuY29kaW5nUGFyYW0pIHtcbiAgICAgICAgICAgICAgaWYgKCEocGFyc2VGbG9hdChlbmNvZGluZ1BhcmFtLnNjYWxlUmVzb2x1dGlvbkRvd25CeSkgPj0gMS4wKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdzY2FsZV9yZXNvbHV0aW9uX2Rvd25fYnkgbXVzdCBiZSA+PSAxLjAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdtYXhGcmFtZXJhdGUnIGluIGVuY29kaW5nUGFyYW0pIHtcbiAgICAgICAgICAgICAgaWYgKCEocGFyc2VGbG9hdChlbmNvZGluZ1BhcmFtLm1heEZyYW1lcmF0ZSkgPj0gMCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbWF4X2ZyYW1lcmF0ZSBtdXN0IGJlID49IDAuMCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNjZWl2ZXIgPSBvcmlnQWRkVHJhbnNjZWl2ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKHNob3VsZFBlcmZvcm1DaGVjaykge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBpbml0IG9wdGlvbnMgd2VyZSBhcHBsaWVkLiBJZiBub3Qgd2UgZG8gdGhpcyBpbiBhblxuICAgICAgICAgIC8vIGFzeW5jaHJvbm91cyB3YXkgYW5kIHNhdmUgdGhlIHByb21pc2UgcmVmZXJlbmNlIGluIGEgZ2xvYmFsIG9iamVjdC5cbiAgICAgICAgICAvLyBUaGlzIGlzIGFuIHVnbHkgaGFjaywgYnV0IGF0IHRoZSBzYW1lIHRpbWUgaXMgd2F5IG1vcmUgcm9idXN0IHRoYW5cbiAgICAgICAgICAvLyBjaGVja2luZyB0aGUgc2VuZGVyIHBhcmFtZXRlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgY3JlYXRlT2ZmZXJcbiAgICAgICAgICAvLyBBbHNvIG5vdGUgdGhhdCBhZnRlciB0aGUgY3JlYXRlb2ZmZXIgd2UgYXJlIG5vdCAxMDAlIHN1cmUgdGhhdFxuICAgICAgICAgIC8vIHRoZSBwYXJhbXMgd2VyZSBhc3luY2hyb25vdXNseSBhcHBsaWVkIHNvIHdlIG1pZ2h0IG1pc3MgdGhlXG4gICAgICAgICAgLy8gb3Bwb3J0dW5pdHkgdG8gcmVjcmVhdGUgb2ZmZXIuXG4gICAgICAgICAgY29uc3Qge3NlbmRlcn0gPSB0cmFuc2NlaXZlcjtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSBzZW5kZXIuZ2V0UGFyYW1ldGVycygpO1xuICAgICAgICAgIGlmICghKCdlbmNvZGluZ3MnIGluIHBhcmFtcykgfHxcbiAgICAgICAgICAgICAgLy8gQXZvaWQgYmVpbmcgZm9vbGVkIGJ5IHBhdGNoZWQgZ2V0UGFyYW1ldGVycygpIGJlbG93LlxuICAgICAgICAgICAgICAocGFyYW1zLmVuY29kaW5ncy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcy5lbmNvZGluZ3NbMF0pLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSBpbml0UGFyYW1ldGVycy5zZW5kRW5jb2RpbmdzO1xuICAgICAgICAgICAgc2VuZGVyLnNlbmRFbmNvZGluZ3MgPSBpbml0UGFyYW1ldGVycy5zZW5kRW5jb2RpbmdzO1xuICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJzUHJvbWlzZXMucHVzaChzZW5kZXIuc2V0UGFyYW1ldGVycyhwYXJhbXMpXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc2VuZGVyLnNlbmRFbmNvZGluZ3M7XG4gICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc2VuZGVyLnNlbmRFbmNvZGluZ3M7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNjZWl2ZXI7XG4gICAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltR2V0UGFyYW1ldGVycyh3aW5kb3cpIHtcbiAgaWYgKCEodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1J0cFNlbmRlcikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgb3JpZ0dldFBhcmFtZXRlcnMgPSB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXJzO1xuICBpZiAob3JpZ0dldFBhcmFtZXRlcnMpIHtcbiAgICB3aW5kb3cuUlRDUnRwU2VuZGVyLnByb3RvdHlwZS5nZXRQYXJhbWV0ZXJzID1cbiAgICAgIGZ1bmN0aW9uIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG9yaWdHZXRQYXJhbWV0ZXJzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICghKCdlbmNvZGluZ3MnIGluIHBhcmFtcykpIHtcbiAgICAgICAgICBwYXJhbXMuZW5jb2RpbmdzID0gW10uY29uY2F0KHRoaXMuc2VuZEVuY29kaW5ncyB8fCBbe31dKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUNyZWF0ZU9mZmVyKHdpbmRvdykge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vd2VicnRjSGFja3MvYWRhcHRlci9pc3N1ZXMvOTk4I2lzc3VlY29tbWVudC01MTY5MjE2NDdcbiAgLy8gRmlyZWZveCBpZ25vcmVzIHRoZSBpbml0IHNlbmRFbmNvZGluZ3Mgb3B0aW9ucyBwYXNzZWQgdG8gYWRkVHJhbnNjZWl2ZXJcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM5NjkxOFxuICBpZiAoISh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IG9yaWdDcmVhdGVPZmZlciA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlT2ZmZXI7XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiBjcmVhdGVPZmZlcigpIHtcbiAgICBpZiAodGhpcy5zZXRQYXJhbWV0ZXJzUHJvbWlzZXMgJiYgdGhpcy5zZXRQYXJhbWV0ZXJzUHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5zZXRQYXJhbWV0ZXJzUHJvbWlzZXMpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHJldHVybiBvcmlnQ3JlYXRlT2ZmZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyc1Byb21pc2VzID0gW107XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9yaWdDcmVhdGVPZmZlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUNyZWF0ZUFuc3dlcih3aW5kb3cpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYnJ0Y0hhY2tzL2FkYXB0ZXIvaXNzdWVzLzk5OCNpc3N1ZWNvbW1lbnQtNTE2OTIxNjQ3XG4gIC8vIEZpcmVmb3ggaWdub3JlcyB0aGUgaW5pdCBzZW5kRW5jb2RpbmdzIG9wdGlvbnMgcGFzc2VkIHRvIGFkZFRyYW5zY2VpdmVyXG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzOTY5MThcbiAgaWYgKCEodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBvcmlnQ3JlYXRlQW5zd2VyID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXI7XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24gY3JlYXRlQW5zd2VyKCkge1xuICAgIGlmICh0aGlzLnNldFBhcmFtZXRlcnNQcm9taXNlcyAmJiB0aGlzLnNldFBhcmFtZXRlcnNQcm9taXNlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLnNldFBhcmFtZXRlcnNQcm9taXNlcylcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG9yaWdDcmVhdGVBbnN3ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyc1Byb21pc2VzID0gW107XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG9yaWdDcmVhdGVBbnN3ZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn1cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBhZGFwdGVyLmpzIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbi8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUdldERpc3BsYXlNZWRpYSh3aW5kb3csIHByZWZlcnJlZE1lZGlhU291cmNlKSB7XG4gIGlmICh3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJlxuICAgICdnZXREaXNwbGF5TWVkaWEnIGluIHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghKHdpbmRvdy5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB3aW5kb3cubmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEgPVxuICAgIGZ1bmN0aW9uIGdldERpc3BsYXlNZWRpYShjb25zdHJhaW50cykge1xuICAgICAgaWYgKCEoY29uc3RyYWludHMgJiYgY29uc3RyYWludHMudmlkZW8pKSB7XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBET01FeGNlcHRpb24oJ2dldERpc3BsYXlNZWRpYSB3aXRob3V0IHZpZGVvICcgK1xuICAgICAgICAgICAgJ2NvbnN0cmFpbnRzIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgICBlcnIubmFtZSA9ICdOb3RGb3VuZEVycm9yJztcbiAgICAgICAgLy8gZnJvbSBodHRwczovL2hleWNhbS5naXRodWIuaW8vd2ViaWRsLyNpZGwtRE9NRXhjZXB0aW9uLWVycm9yLW5hbWVzXG4gICAgICAgIGVyci5jb2RlID0gODtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICB9XG4gICAgICBpZiAoY29uc3RyYWludHMudmlkZW8gPT09IHRydWUpIHtcbiAgICAgICAgY29uc3RyYWludHMudmlkZW8gPSB7bWVkaWFTb3VyY2U6IHByZWZlcnJlZE1lZGlhU291cmNlfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvLm1lZGlhU291cmNlID0gcHJlZmVycmVkTWVkaWFTb3VyY2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICB9O1xufVxuIiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG4vKiBlc2xpbnQtZW52IG5vZGUgKi9cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUdldFVzZXJNZWRpYSh3aW5kb3csIGJyb3dzZXJEZXRhaWxzKSB7XG4gIGNvbnN0IG5hdmlnYXRvciA9IHdpbmRvdyAmJiB3aW5kb3cubmF2aWdhdG9yO1xuICBjb25zdCBNZWRpYVN0cmVhbVRyYWNrID0gd2luZG93ICYmIHdpbmRvdy5NZWRpYVN0cmVhbVRyYWNrO1xuXG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgLy8gUmVwbGFjZSBGaXJlZm94IDQ0KydzIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2l0aCB1bnByZWZpeGVkIHZlcnNpb24uXG4gICAgdXRpbHMuZGVwcmVjYXRlZCgnbmF2aWdhdG9yLmdldFVzZXJNZWRpYScsXG4gICAgICAgICduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYScpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XG4gIH07XG5cbiAgaWYgKCEoYnJvd3NlckRldGFpbHMudmVyc2lvbiA+IDU1ICYmXG4gICAgICAnYXV0b0dhaW5Db250cm9sJyBpbiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFN1cHBvcnRlZENvbnN0cmFpbnRzKCkpKSB7XG4gICAgY29uc3QgcmVtYXAgPSBmdW5jdGlvbihvYmosIGEsIGIpIHtcbiAgICAgIGlmIChhIGluIG9iaiAmJiAhKGIgaW4gb2JqKSkge1xuICAgICAgICBvYmpbYl0gPSBvYmpbYV07XG4gICAgICAgIGRlbGV0ZSBvYmpbYV07XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG5hdGl2ZUdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgaWYgKHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYy5hdWRpbyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnYXV0b0dhaW5Db250cm9sJywgJ21vekF1dG9HYWluQ29udHJvbCcpO1xuICAgICAgICByZW1hcChjLmF1ZGlvLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmF0aXZlR2V0VXNlck1lZGlhKGMpO1xuICAgIH07XG5cbiAgICBpZiAoTWVkaWFTdHJlYW1UcmFjayAmJiBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncykge1xuICAgICAgY29uc3QgbmF0aXZlR2V0U2V0dGluZ3MgPSBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5nZXRTZXR0aW5ncztcbiAgICAgIE1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLmdldFNldHRpbmdzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IG5hdGl2ZUdldFNldHRpbmdzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJlbWFwKG9iaiwgJ21vekF1dG9HYWluQ29udHJvbCcsICdhdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgcmVtYXAob2JqLCAnbW96Tm9pc2VTdXBwcmVzc2lvbicsICdub2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChNZWRpYVN0cmVhbVRyYWNrICYmIE1lZGlhU3RyZWFtVHJhY2sucHJvdG90eXBlLmFwcGx5Q29uc3RyYWludHMpIHtcbiAgICAgIGNvbnN0IG5hdGl2ZUFwcGx5Q29uc3RyYWludHMgPVxuICAgICAgICBNZWRpYVN0cmVhbVRyYWNrLnByb3RvdHlwZS5hcHBseUNvbnN0cmFpbnRzO1xuICAgICAgTWVkaWFTdHJlYW1UcmFjay5wcm90b3R5cGUuYXBwbHlDb25zdHJhaW50cyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgaWYgKHRoaXMua2luZCA9PT0gJ2F1ZGlvJyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjKSk7XG4gICAgICAgICAgcmVtYXAoYywgJ2F1dG9HYWluQ29udHJvbCcsICdtb3pBdXRvR2FpbkNvbnRyb2wnKTtcbiAgICAgICAgICByZW1hcChjLCAnbm9pc2VTdXBwcmVzc2lvbicsICdtb3pOb2lzZVN1cHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hdGl2ZUFwcGx5Q29uc3RyYWludHMuYXBwbHkodGhpcywgW2NdKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICogIENvcHlyaWdodCAoYykgMjAxNiBUaGUgV2ViUlRDIHByb2plY3QgYXV0aG9ycy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYSBCU0Qtc3R5bGUgbGljZW5zZVxuICogIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3Qgb2YgdGhlIHNvdXJjZVxuICogIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1Mb2NhbFN0cmVhbXNBUEkod2luZG93KSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JyB8fCAhd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghKCdnZXRMb2NhbFN0cmVhbXMnIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5nZXRMb2NhbFN0cmVhbXMgPVxuICAgICAgZnVuY3Rpb24gZ2V0TG9jYWxTdHJlYW1zKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2NhbFN0cmVhbXM7XG4gICAgICB9O1xuICB9XG4gIGlmICghKCdhZGRTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgY29uc3QgX2FkZFRyYWNrID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRUcmFjaztcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uIGFkZFN0cmVhbShzdHJlYW0pIHtcbiAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9sb2NhbFN0cmVhbXMuaW5jbHVkZXMoc3RyZWFtKSkge1xuICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMucHVzaChzdHJlYW0pO1xuICAgICAgfVxuICAgICAgLy8gVHJ5IHRvIGVtdWxhdGUgQ2hyb21lJ3MgYmVoYXZpb3VyIG9mIGFkZGluZyBpbiBhdWRpby12aWRlbyBvcmRlci5cbiAgICAgIC8vIFNhZmFyaSBvcmRlcnMgYnkgdHJhY2sgaWQuXG4gICAgICBzdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKHRyYWNrID0+IF9hZGRUcmFjay5jYWxsKHRoaXMsIHRyYWNrLFxuICAgICAgICBzdHJlYW0pKTtcbiAgICAgIHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmZvckVhY2godHJhY2sgPT4gX2FkZFRyYWNrLmNhbGwodGhpcywgdHJhY2ssXG4gICAgICAgIHN0cmVhbSkpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFRyYWNrID1cbiAgICAgIGZ1bmN0aW9uIGFkZFRyYWNrKHRyYWNrLCAuLi5zdHJlYW1zKSB7XG4gICAgICAgIGlmIChzdHJlYW1zKSB7XG4gICAgICAgICAgc3RyZWFtcy5mb3JFYWNoKChzdHJlYW0pID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtzdHJlYW1dO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5fbG9jYWxTdHJlYW1zLmluY2x1ZGVzKHN0cmVhbSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5fbG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2FkZFRyYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICB9XG4gIGlmICghKCdyZW1vdmVTdHJlYW0nIGluIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPVxuICAgICAgZnVuY3Rpb24gcmVtb3ZlU3RyZWFtKHN0cmVhbSkge1xuICAgICAgICBpZiAoIXRoaXMuX2xvY2FsU3RyZWFtcykge1xuICAgICAgICAgIHRoaXMuX2xvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fbG9jYWxTdHJlYW1zLmluZGV4T2Yoc3RyZWFtKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuICAgICAgICB0aGlzLmdldFNlbmRlcnMoKS5mb3JFYWNoKHNlbmRlciA9PiB7XG4gICAgICAgICAgaWYgKHRyYWNrcy5pbmNsdWRlcyhzZW5kZXIudHJhY2spKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVRyYWNrKHNlbmRlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1SZW1vdGVTdHJlYW1zQVBJKHdpbmRvdykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoISgnZ2V0UmVtb3RlU3RyZWFtcycgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFJlbW90ZVN0cmVhbXMgPVxuICAgICAgZnVuY3Rpb24gZ2V0UmVtb3RlU3RyZWFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW90ZVN0cmVhbXMgPyB0aGlzLl9yZW1vdGVTdHJlYW1zIDogW107XG4gICAgICB9O1xuICB9XG4gIGlmICghKCdvbmFkZHN0cmVhbScgaW4gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSwgJ29uYWRkc3RyZWFtJywge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb25hZGRzdHJlYW07XG4gICAgICB9LFxuICAgICAgc2V0KGYpIHtcbiAgICAgICAgaWYgKHRoaXMuX29uYWRkc3RyZWFtKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbmFkZHN0cmVhbSk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29uYWRkc3RyZWFtcG9seSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbmFkZHN0cmVhbSA9IGYpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb25hZGRzdHJlYW1wb2x5ID0gKGUpID0+IHtcbiAgICAgICAgICBlLnN0cmVhbXMuZm9yRWFjaChzdHJlYW0gPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZW1vdGVTdHJlYW1zKSB7XG4gICAgICAgICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW1vdGVTdHJlYW1zLmluY2x1ZGVzKHN0cmVhbSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVtb3RlU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWRkc3RyZWFtJyk7XG4gICAgICAgICAgICBldmVudC5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBvcmlnU2V0UmVtb3RlRGVzY3JpcHRpb24gPVxuICAgICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRSZW1vdGVEZXNjcmlwdGlvbjtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID1cbiAgICAgIGZ1bmN0aW9uIHNldFJlbW90ZURlc2NyaXB0aW9uKCkge1xuICAgICAgICBjb25zdCBwYyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5fb25hZGRzdHJlYW1wb2x5KSB7XG4gICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29uYWRkc3RyZWFtcG9seSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUuc3RyZWFtcy5mb3JFYWNoKHN0cmVhbSA9PiB7XG4gICAgICAgICAgICAgIGlmICghcGMuX3JlbW90ZVN0cmVhbXMpIHtcbiAgICAgICAgICAgICAgICBwYy5fcmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwYy5fcmVtb3RlU3RyZWFtcy5pbmRleE9mKHN0cmVhbSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwYy5fcmVtb3RlU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhZGRzdHJlYW0nKTtcbiAgICAgICAgICAgICAgZXZlbnQuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgICAgICBwYy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcmlnU2V0UmVtb3RlRGVzY3JpcHRpb24uYXBwbHkocGMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltQ2FsbGJhY2tzQVBJKHdpbmRvdykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBwcm90b3R5cGUgPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICBjb25zdCBvcmlnQ3JlYXRlT2ZmZXIgPSBwcm90b3R5cGUuY3JlYXRlT2ZmZXI7XG4gIGNvbnN0IG9yaWdDcmVhdGVBbnN3ZXIgPSBwcm90b3R5cGUuY3JlYXRlQW5zd2VyO1xuICBjb25zdCBzZXRMb2NhbERlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb247XG4gIGNvbnN0IHNldFJlbW90ZURlc2NyaXB0aW9uID0gcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uO1xuICBjb25zdCBhZGRJY2VDYW5kaWRhdGUgPSBwcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlO1xuXG4gIHByb3RvdHlwZS5jcmVhdGVPZmZlciA9XG4gICAgZnVuY3Rpb24gY3JlYXRlT2ZmZXIoc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSAoYXJndW1lbnRzLmxlbmd0aCA+PSAyKSA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1swXTtcbiAgICAgIGNvbnN0IHByb21pc2UgPSBvcmlnQ3JlYXRlT2ZmZXIuYXBwbHkodGhpcywgW29wdGlvbnNdKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuXG4gIHByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFuc3dlcihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IChhcmd1bWVudHMubGVuZ3RoID49IDIpID8gYXJndW1lbnRzWzJdIDogYXJndW1lbnRzWzBdO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG9yaWdDcmVhdGVBbnN3ZXIuYXBwbHkodGhpcywgW29wdGlvbnNdKTtcbiAgICAgIGlmICghZmFpbHVyZUNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfVxuICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3NDYWxsYmFjaywgZmFpbHVyZUNhbGxiYWNrKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuXG4gIGxldCB3aXRoQ2FsbGJhY2sgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICBjb25zdCBwcm9taXNlID0gc2V0TG9jYWxEZXNjcmlwdGlvbi5hcHBseSh0aGlzLCBbZGVzY3JpcHRpb25dKTtcbiAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuICBwcm90b3R5cGUuc2V0TG9jYWxEZXNjcmlwdGlvbiA9IHdpdGhDYWxsYmFjaztcblxuICB3aXRoQ2FsbGJhY2sgPSBmdW5jdGlvbihkZXNjcmlwdGlvbiwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICBjb25zdCBwcm9taXNlID0gc2V0UmVtb3RlRGVzY3JpcHRpb24uYXBwbHkodGhpcywgW2Rlc2NyaXB0aW9uXSk7XG4gICAgaWYgKCFmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICBwcm9taXNlLnRoZW4oc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcbiAgcHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID0gd2l0aENhbGxiYWNrO1xuXG4gIHdpdGhDYWxsYmFjayA9IGZ1bmN0aW9uKGNhbmRpZGF0ZSwgc3VjY2Vzc0NhbGxiYWNrLCBmYWlsdXJlQ2FsbGJhY2spIHtcbiAgICBjb25zdCBwcm9taXNlID0gYWRkSWNlQ2FuZGlkYXRlLmFwcGx5KHRoaXMsIFtjYW5kaWRhdGVdKTtcbiAgICBpZiAoIWZhaWx1cmVDYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHByb21pc2UudGhlbihzdWNjZXNzQ2FsbGJhY2ssIGZhaWx1cmVDYWxsYmFjayk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuICBwcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gd2l0aENhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUdldFVzZXJNZWRpYSh3aW5kb3cpIHtcbiAgY29uc3QgbmF2aWdhdG9yID0gd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3I7XG5cbiAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiYgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgICAvLyBzaGltIG5vdCBuZWVkZWQgaW4gU2FmYXJpIDEyLjFcbiAgICBjb25zdCBtZWRpYURldmljZXMgPSBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzO1xuICAgIGNvbnN0IF9nZXRVc2VyTWVkaWEgPSBtZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLmJpbmQobWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSA9IChjb25zdHJhaW50cykgPT4ge1xuICAgICAgcmV0dXJuIF9nZXRVc2VyTWVkaWEoc2hpbUNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSk7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghbmF2aWdhdG9yLmdldFVzZXJNZWRpYSAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEpIHtcbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24gZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCBjYiwgZXJyY2IpIHtcbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKVxuICAgICAgLnRoZW4oY2IsIGVycmNiKTtcbiAgICB9LmJpbmQobmF2aWdhdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpbUNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzKSB7XG4gIGlmIChjb25zdHJhaW50cyAmJiBjb25zdHJhaW50cy52aWRlbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sXG4gICAgICBjb25zdHJhaW50cyxcbiAgICAgIHt2aWRlbzogdXRpbHMuY29tcGFjdE9iamVjdChjb25zdHJhaW50cy52aWRlbyl9XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBjb25zdHJhaW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1SVENJY2VTZXJ2ZXJVcmxzKHdpbmRvdykge1xuICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBtaWdyYXRlIGZyb20gbm9uLXNwZWMgUlRDSWNlU2VydmVyLnVybCB0byBSVENJY2VTZXJ2ZXIudXJsc1xuICBjb25zdCBPcmlnUGVlckNvbm5lY3Rpb24gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb247XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9XG4gICAgZnVuY3Rpb24gUlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgIGlmIChwY0NvbmZpZyAmJiBwY0NvbmZpZy5pY2VTZXJ2ZXJzKSB7XG4gICAgICAgIGNvbnN0IG5ld0ljZVNlcnZlcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG4gICAgICAgICAgaWYgKCFzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybHMnKSAmJlxuICAgICAgICAgICAgICBzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XG4gICAgICAgICAgICB1dGlscy5kZXByZWNhdGVkKCdSVENJY2VTZXJ2ZXIudXJsJywgJ1JUQ0ljZVNlcnZlci51cmxzJyk7XG4gICAgICAgICAgICBzZXJ2ZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNlcnZlcikpO1xuICAgICAgICAgICAgc2VydmVyLnVybHMgPSBzZXJ2ZXIudXJsO1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZlci51cmw7XG4gICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2goc2VydmVyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzID0gbmV3SWNlU2VydmVycztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgT3JpZ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTtcbiAgICB9O1xuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID0gT3JpZ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcbiAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgaWYgKCdnZW5lcmF0ZUNlcnRpZmljYXRlJyBpbiBPcmlnUGVlckNvbm5lY3Rpb24pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLCAnZ2VuZXJhdGVDZXJ0aWZpY2F0ZScsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIE9yaWdQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltVHJhY2tFdmVudFRyYW5zY2VpdmVyKHdpbmRvdykge1xuICAvLyBBZGQgZXZlbnQudHJhbnNjZWl2ZXIgbWVtYmVyIG92ZXIgZGVwcmVjYXRlZCBldmVudC5yZWNlaXZlclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1RyYWNrRXZlbnQgJiZcbiAgICAgICdyZWNlaXZlcicgaW4gd2luZG93LlJUQ1RyYWNrRXZlbnQucHJvdG90eXBlICYmXG4gICAgICAhKCd0cmFuc2NlaXZlcicgaW4gd2luZG93LlJUQ1RyYWNrRXZlbnQucHJvdG90eXBlKSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDVHJhY2tFdmVudC5wcm90b3R5cGUsICd0cmFuc2NlaXZlcicsIHtcbiAgICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHtyZWNlaXZlcjogdGhpcy5yZWNlaXZlcn07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaW1DcmVhdGVPZmZlckxlZ2FjeSh3aW5kb3cpIHtcbiAgY29uc3Qgb3JpZ0NyZWF0ZU9mZmVyID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlcjtcbiAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9XG4gICAgZnVuY3Rpb24gY3JlYXRlT2ZmZXIob2ZmZXJPcHRpb25zKSB7XG4gICAgICBpZiAob2ZmZXJPcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gc3VwcG9ydCBiaXQgdmFsdWVzXG4gICAgICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPVxuICAgICAgICAgICAgISFvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdWRpb1RyYW5zY2VpdmVyID0gdGhpcy5nZXRUcmFuc2NlaXZlcnMoKS5maW5kKHRyYW5zY2VpdmVyID0+XG4gICAgICAgICAgdHJhbnNjZWl2ZXIucmVjZWl2ZXIudHJhY2sua2luZCA9PT0gJ2F1ZGlvJyk7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9PT0gZmFsc2UgJiYgYXVkaW9UcmFuc2NlaXZlcikge1xuICAgICAgICAgIGlmIChhdWRpb1RyYW5zY2VpdmVyLmRpcmVjdGlvbiA9PT0gJ3NlbmRyZWN2Jykge1xuICAgICAgICAgICAgaWYgKGF1ZGlvVHJhbnNjZWl2ZXIuc2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgIGF1ZGlvVHJhbnNjZWl2ZXIuc2V0RGlyZWN0aW9uKCdzZW5kb25seScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXVkaW9UcmFuc2NlaXZlci5kaXJlY3Rpb24gPSAnc2VuZG9ubHknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYXVkaW9UcmFuc2NlaXZlci5kaXJlY3Rpb24gPT09ICdyZWN2b25seScpIHtcbiAgICAgICAgICAgIGlmIChhdWRpb1RyYW5zY2VpdmVyLnNldERpcmVjdGlvbikge1xuICAgICAgICAgICAgICBhdWRpb1RyYW5zY2VpdmVyLnNldERpcmVjdGlvbignaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGF1ZGlvVHJhbnNjZWl2ZXIuZGlyZWN0aW9uID0gJ2luYWN0aXZlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlQXVkaW8gPT09IHRydWUgJiZcbiAgICAgICAgICAgICFhdWRpb1RyYW5zY2VpdmVyKSB7XG4gICAgICAgICAgdGhpcy5hZGRUcmFuc2NlaXZlcignYXVkaW8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Ygb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gc3VwcG9ydCBiaXQgdmFsdWVzXG4gICAgICAgICAgb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW8gPVxuICAgICAgICAgICAgISFvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2aWRlb1RyYW5zY2VpdmVyID0gdGhpcy5nZXRUcmFuc2NlaXZlcnMoKS5maW5kKHRyYW5zY2VpdmVyID0+XG4gICAgICAgICAgdHJhbnNjZWl2ZXIucmVjZWl2ZXIudHJhY2sua2luZCA9PT0gJ3ZpZGVvJyk7XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9PT0gZmFsc2UgJiYgdmlkZW9UcmFuc2NlaXZlcikge1xuICAgICAgICAgIGlmICh2aWRlb1RyYW5zY2VpdmVyLmRpcmVjdGlvbiA9PT0gJ3NlbmRyZWN2Jykge1xuICAgICAgICAgICAgaWYgKHZpZGVvVHJhbnNjZWl2ZXIuc2V0RGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgIHZpZGVvVHJhbnNjZWl2ZXIuc2V0RGlyZWN0aW9uKCdzZW5kb25seScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmlkZW9UcmFuc2NlaXZlci5kaXJlY3Rpb24gPSAnc2VuZG9ubHknO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodmlkZW9UcmFuc2NlaXZlci5kaXJlY3Rpb24gPT09ICdyZWN2b25seScpIHtcbiAgICAgICAgICAgIGlmICh2aWRlb1RyYW5zY2VpdmVyLnNldERpcmVjdGlvbikge1xuICAgICAgICAgICAgICB2aWRlb1RyYW5zY2VpdmVyLnNldERpcmVjdGlvbignaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZpZGVvVHJhbnNjZWl2ZXIuZGlyZWN0aW9uID0gJ2luYWN0aXZlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW8gPT09IHRydWUgJiZcbiAgICAgICAgICAgICF2aWRlb1RyYW5zY2VpdmVyKSB7XG4gICAgICAgICAgdGhpcy5hZGRUcmFuc2NlaXZlcigndmlkZW8nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdDcmVhdGVPZmZlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGltQXVkaW9Db250ZXh0KHdpbmRvdykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcgfHwgd2luZG93LkF1ZGlvQ29udGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbn1cbiIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbG9nRGlzYWJsZWRfID0gdHJ1ZTtcbmxldCBkZXByZWNhdGlvbldhcm5pbmdzXyA9IHRydWU7XG5cbi8qKlxuICogRXh0cmFjdCBicm93c2VyIHZlcnNpb24gb3V0IG9mIHRoZSBwcm92aWRlZCB1c2VyIGFnZW50IHN0cmluZy5cbiAqXG4gKiBAcGFyYW0geyFzdHJpbmd9IHVhc3RyaW5nIHVzZXJBZ2VudCBzdHJpbmcuXG4gKiBAcGFyYW0geyFzdHJpbmd9IGV4cHIgUmVndWxhciBleHByZXNzaW9uIHVzZWQgYXMgbWF0Y2ggY3JpdGVyaWEuXG4gKiBAcGFyYW0geyFudW1iZXJ9IHBvcyBwb3NpdGlvbiBpbiB0aGUgdmVyc2lvbiBzdHJpbmcgdG8gYmUgcmV0dXJuZWQuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBicm93c2VyIHZlcnNpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VmVyc2lvbih1YXN0cmluZywgZXhwciwgcG9zKSB7XG4gIGNvbnN0IG1hdGNoID0gdWFzdHJpbmcubWF0Y2goZXhwcik7XG4gIHJldHVybiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPj0gcG9zICYmIHBhcnNlSW50KG1hdGNoW3Bvc10sIDEwKTtcbn1cblxuLy8gV3JhcHMgdGhlIHBlZXJjb25uZWN0aW9uIGV2ZW50IGV2ZW50TmFtZVRvV3JhcCBpbiBhIGZ1bmN0aW9uXG4vLyB3aGljaCByZXR1cm5zIHRoZSBtb2RpZmllZCBldmVudCBvYmplY3QgKG9yIGZhbHNlIHRvIHByZXZlbnRcbi8vIHRoZSBldmVudCkuXG5leHBvcnQgZnVuY3Rpb24gd3JhcFBlZXJDb25uZWN0aW9uRXZlbnQod2luZG93LCBldmVudE5hbWVUb1dyYXAsIHdyYXBwZXIpIHtcbiAgaWYgKCF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcHJvdG8gPSB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuICBjb25zdCBuYXRpdmVBZGRFdmVudExpc3RlbmVyID0gcHJvdG8uYWRkRXZlbnRMaXN0ZW5lcjtcbiAgcHJvdG8uYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKG5hdGl2ZUV2ZW50TmFtZSwgY2IpIHtcbiAgICBpZiAobmF0aXZlRXZlbnROYW1lICE9PSBldmVudE5hbWVUb1dyYXApIHtcbiAgICAgIHJldHVybiBuYXRpdmVBZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGNvbnN0IHdyYXBwZWRDYWxsYmFjayA9IChlKSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllZEV2ZW50ID0gd3JhcHBlcihlKTtcbiAgICAgIGlmIChtb2RpZmllZEV2ZW50KSB7XG4gICAgICAgIGlmIChjYi5oYW5kbGVFdmVudCkge1xuICAgICAgICAgIGNiLmhhbmRsZUV2ZW50KG1vZGlmaWVkRXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNiKG1vZGlmaWVkRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLl9ldmVudE1hcCA9IHRoaXMuX2V2ZW50TWFwIHx8IHt9O1xuICAgIGlmICghdGhpcy5fZXZlbnRNYXBbZXZlbnROYW1lVG9XcmFwXSkge1xuICAgICAgdGhpcy5fZXZlbnRNYXBbZXZlbnROYW1lVG9XcmFwXSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgdGhpcy5fZXZlbnRNYXBbZXZlbnROYW1lVG9XcmFwXS5zZXQoY2IsIHdyYXBwZWRDYWxsYmFjayk7XG4gICAgcmV0dXJuIG5hdGl2ZUFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcywgW25hdGl2ZUV2ZW50TmFtZSxcbiAgICAgIHdyYXBwZWRDYWxsYmFja10pO1xuICB9O1xuXG4gIGNvbnN0IG5hdGl2ZVJlbW92ZUV2ZW50TGlzdGVuZXIgPSBwcm90by5yZW1vdmVFdmVudExpc3RlbmVyO1xuICBwcm90by5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24obmF0aXZlRXZlbnROYW1lLCBjYikge1xuICAgIGlmIChuYXRpdmVFdmVudE5hbWUgIT09IGV2ZW50TmFtZVRvV3JhcCB8fCAhdGhpcy5fZXZlbnRNYXBcbiAgICAgICAgfHwgIXRoaXMuX2V2ZW50TWFwW2V2ZW50TmFtZVRvV3JhcF0pIHtcbiAgICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5fZXZlbnRNYXBbZXZlbnROYW1lVG9XcmFwXS5oYXMoY2IpKSB7XG4gICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBjb25zdCB1bndyYXBwZWRDYiA9IHRoaXMuX2V2ZW50TWFwW2V2ZW50TmFtZVRvV3JhcF0uZ2V0KGNiKTtcbiAgICB0aGlzLl9ldmVudE1hcFtldmVudE5hbWVUb1dyYXBdLmRlbGV0ZShjYik7XG4gICAgaWYgKHRoaXMuX2V2ZW50TWFwW2V2ZW50TmFtZVRvV3JhcF0uc2l6ZSA9PT0gMCkge1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50TWFwW2V2ZW50TmFtZVRvV3JhcF07XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9ldmVudE1hcCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRNYXA7XG4gICAgfVxuICAgIHJldHVybiBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMsIFtuYXRpdmVFdmVudE5hbWUsXG4gICAgICB1bndyYXBwZWRDYl0pO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ29uJyArIGV2ZW50TmFtZVRvV3JhcCwge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzWydfb24nICsgZXZlbnROYW1lVG9XcmFwXTtcbiAgICB9LFxuICAgIHNldChjYikge1xuICAgICAgaWYgKHRoaXNbJ19vbicgKyBldmVudE5hbWVUb1dyYXBdKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWVUb1dyYXAsXG4gICAgICAgICAgICB0aGlzWydfb24nICsgZXZlbnROYW1lVG9XcmFwXSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzWydfb24nICsgZXZlbnROYW1lVG9XcmFwXTtcbiAgICAgIH1cbiAgICAgIGlmIChjYikge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lVG9XcmFwLFxuICAgICAgICAgICAgdGhpc1snX29uJyArIGV2ZW50TmFtZVRvV3JhcF0gPSBjYik7XG4gICAgICB9XG4gICAgfSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVMb2coYm9vbCkge1xuICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0FyZ3VtZW50IHR5cGU6ICcgKyB0eXBlb2YgYm9vbCArXG4gICAgICAgICcuIFBsZWFzZSB1c2UgYSBib29sZWFuLicpO1xuICB9XG4gIGxvZ0Rpc2FibGVkXyA9IGJvb2w7XG4gIHJldHVybiAoYm9vbCkgPyAnYWRhcHRlci5qcyBsb2dnaW5nIGRpc2FibGVkJyA6XG4gICAgICAnYWRhcHRlci5qcyBsb2dnaW5nIGVuYWJsZWQnO1xufVxuXG4vKipcbiAqIERpc2FibGUgb3IgZW5hYmxlIGRlcHJlY2F0aW9uIHdhcm5pbmdzXG4gKiBAcGFyYW0geyFib29sZWFufSBib29sIHNldCB0byB0cnVlIHRvIGRpc2FibGUgd2FybmluZ3MuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlV2FybmluZ3MoYm9vbCkge1xuICBpZiAodHlwZW9mIGJvb2wgIT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0FyZ3VtZW50IHR5cGU6ICcgKyB0eXBlb2YgYm9vbCArXG4gICAgICAgICcuIFBsZWFzZSB1c2UgYSBib29sZWFuLicpO1xuICB9XG4gIGRlcHJlY2F0aW9uV2FybmluZ3NfID0gIWJvb2w7XG4gIHJldHVybiAnYWRhcHRlci5qcyBkZXByZWNhdGlvbiB3YXJuaW5ncyAnICsgKGJvb2wgPyAnZGlzYWJsZWQnIDogJ2VuYWJsZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZygpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKGxvZ0Rpc2FibGVkXykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTaG93cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgc3VnZ2VzdGluZyB0aGUgbW9kZXJuIGFuZCBzcGVjLWNvbXBhdGlibGUgQVBJLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlZChvbGRNZXRob2QsIG5ld01ldGhvZCkge1xuICBpZiAoIWRlcHJlY2F0aW9uV2FybmluZ3NfKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnNvbGUud2FybihvbGRNZXRob2QgKyAnIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgJyArIG5ld01ldGhvZCArXG4gICAgICAnIGluc3RlYWQuJyk7XG59XG5cbi8qKlxuICogQnJvd3NlciBkZXRlY3Rvci5cbiAqXG4gKiBAcmV0dXJuIHtvYmplY3R9IHJlc3VsdCBjb250YWluaW5nIGJyb3dzZXIgYW5kIHZlcnNpb25cbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGV0ZWN0QnJvd3Nlcih3aW5kb3cpIHtcbiAgLy8gUmV0dXJuZWQgcmVzdWx0IG9iamVjdC5cbiAgY29uc3QgcmVzdWx0ID0ge2Jyb3dzZXI6IG51bGwsIHZlcnNpb246IG51bGx9O1xuXG4gIC8vIEZhaWwgZWFybHkgaWYgaXQncyBub3QgYSBicm93c2VyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93Lm5hdmlnYXRvcikge1xuICAgIHJlc3VsdC5icm93c2VyID0gJ05vdCBhIGJyb3dzZXIuJztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgY29uc3Qge25hdmlnYXRvcn0gPSB3aW5kb3c7XG5cbiAgaWYgKG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEpIHsgLy8gRmlyZWZveC5cbiAgICByZXN1bHQuYnJvd3NlciA9ICdmaXJlZm94JztcbiAgICByZXN1bHQudmVyc2lvbiA9IGV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAgIC9GaXJlZm94XFwvKFxcZCspXFwuLywgMSk7XG4gIH0gZWxzZSBpZiAobmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fFxuICAgICAgKHdpbmRvdy5pc1NlY3VyZUNvbnRleHQgPT09IGZhbHNlICYmIHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbiAmJlxuICAgICAgICF3aW5kb3cuUlRDSWNlR2F0aGVyZXIpKSB7XG4gICAgLy8gQ2hyb21lLCBDaHJvbWl1bSwgV2VidmlldywgT3BlcmEuXG4gICAgLy8gVmVyc2lvbiBtYXRjaGVzIENocm9tZS9XZWJSVEMgdmVyc2lvbi5cbiAgICAvLyBDaHJvbWUgNzQgcmVtb3ZlZCB3ZWJraXRHZXRVc2VyTWVkaWEgb24gaHR0cCBhcyB3ZWxsIHNvIHdlIG5lZWQgdGhlXG4gICAgLy8gbW9yZSBjb21wbGljYXRlZCBmYWxsYmFjayB0byB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5cbiAgICByZXN1bHQuYnJvd3NlciA9ICdjaHJvbWUnO1xuICAgIHJlc3VsdC52ZXJzaW9uID0gZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgL0Nocm9tKGV8aXVtKVxcLyhcXGQrKVxcLi8sIDIpO1xuICB9IGVsc2UgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMgJiZcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8pKSB7IC8vIEVkZ2UuXG4gICAgcmVzdWx0LmJyb3dzZXIgPSAnZWRnZSc7XG4gICAgcmVzdWx0LnZlcnNpb24gPSBleHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgICAvRWRnZVxcLyhcXGQrKS4oXFxkKykkLywgMik7XG4gIH0gZWxzZSBpZiAod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmXG4gICAgICBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLyhcXGQrKVxcLi8pKSB7IC8vIFNhZmFyaS5cbiAgICByZXN1bHQuYnJvd3NlciA9ICdzYWZhcmknO1xuICAgIHJlc3VsdC52ZXJzaW9uID0gZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgL0FwcGxlV2ViS2l0XFwvKFxcZCspXFwuLywgMSk7XG4gICAgcmVzdWx0LnN1cHBvcnRzVW5pZmllZFBsYW4gPSB3aW5kb3cuUlRDUnRwVHJhbnNjZWl2ZXIgJiZcbiAgICAgICAgJ2N1cnJlbnREaXJlY3Rpb24nIGluIHdpbmRvdy5SVENSdHBUcmFuc2NlaXZlci5wcm90b3R5cGU7XG4gIH0gZWxzZSB7IC8vIERlZmF1bHQgZmFsbHRocm91Z2g6IG5vdCBzdXBwb3J0ZWQuXG4gICAgcmVzdWx0LmJyb3dzZXIgPSAnTm90IGEgc3VwcG9ydGVkIGJyb3dzZXIuJztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgc29tZXRoaW5nIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgc29tZXRoaW5nIHlvdSB3YW50IHRvIGNoZWNrLlxuICogQHJldHVybiB0cnVlIGlmIHZhbCBpcyBhbiBvYmplY3QsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBlbXB0eSBvYmplY3RzIGFuZCB1bmRlZmluZWQgdmFsdWVzXG4gKiBmcm9tIGEgbmVzdGVkIG9iamVjdCAtLSBhbiBlbmhhbmNlZCBhbmQgdmFuaWxsYSB2ZXJzaW9uXG4gKiBvZiBMb2Rhc2gncyBgY29tcGFjdGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYWN0T2JqZWN0KGRhdGEpIHtcbiAgaWYgKCFpc09iamVjdChkYXRhKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLnJlZHVjZShmdW5jdGlvbihhY2N1bXVsYXRvciwga2V5KSB7XG4gICAgY29uc3QgaXNPYmogPSBpc09iamVjdChkYXRhW2tleV0pO1xuICAgIGNvbnN0IHZhbHVlID0gaXNPYmogPyBjb21wYWN0T2JqZWN0KGRhdGFba2V5XSkgOiBkYXRhW2tleV07XG4gICAgY29uc3QgaXNFbXB0eU9iamVjdCA9IGlzT2JqICYmICFPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGlzRW1wdHlPYmplY3QpIHtcbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjdW11bGF0b3IsIHtba2V5XTogdmFsdWV9KTtcbiAgfSwge30pO1xufVxuXG4vKiBpdGVyYXRlcyB0aGUgc3RhdHMgZ3JhcGggcmVjdXJzaXZlbHkuICovXG5leHBvcnQgZnVuY3Rpb24gd2Fsa1N0YXRzKHN0YXRzLCBiYXNlLCByZXN1bHRTZXQpIHtcbiAgaWYgKCFiYXNlIHx8IHJlc3VsdFNldC5oYXMoYmFzZS5pZCkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmVzdWx0U2V0LnNldChiYXNlLmlkLCBiYXNlKTtcbiAgT2JqZWN0LmtleXMoYmFzZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICBpZiAobmFtZS5lbmRzV2l0aCgnSWQnKSkge1xuICAgICAgd2Fsa1N0YXRzKHN0YXRzLCBzdGF0cy5nZXQoYmFzZVtuYW1lXSksIHJlc3VsdFNldCk7XG4gICAgfSBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCdJZHMnKSkge1xuICAgICAgYmFzZVtuYW1lXS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgd2Fsa1N0YXRzKHN0YXRzLCBzdGF0cy5nZXQoaWQpLCByZXN1bHRTZXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyogZmlsdGVyIGdldFN0YXRzIGZvciBhIHNlbmRlci9yZWNlaXZlciB0cmFjay4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJTdGF0cyhyZXN1bHQsIHRyYWNrLCBvdXRib3VuZCkge1xuICBjb25zdCBzdHJlYW1TdGF0c1R5cGUgPSBvdXRib3VuZCA/ICdvdXRib3VuZC1ydHAnIDogJ2luYm91bmQtcnRwJztcbiAgY29uc3QgZmlsdGVyZWRSZXN1bHQgPSBuZXcgTWFwKCk7XG4gIGlmICh0cmFjayA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmaWx0ZXJlZFJlc3VsdDtcbiAgfVxuICBjb25zdCB0cmFja1N0YXRzID0gW107XG4gIHJlc3VsdC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICBpZiAodmFsdWUudHlwZSA9PT0gJ3RyYWNrJyAmJlxuICAgICAgICB2YWx1ZS50cmFja0lkZW50aWZpZXIgPT09IHRyYWNrLmlkKSB7XG4gICAgICB0cmFja1N0YXRzLnB1c2godmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHRyYWNrU3RhdHMuZm9yRWFjaCh0cmFja1N0YXQgPT4ge1xuICAgIHJlc3VsdC5mb3JFYWNoKHN0YXRzID0+IHtcbiAgICAgIGlmIChzdGF0cy50eXBlID09PSBzdHJlYW1TdGF0c1R5cGUgJiYgc3RhdHMudHJhY2tJZCA9PT0gdHJhY2tTdGF0LmlkKSB7XG4gICAgICAgIHdhbGtTdGF0cyhyZXN1bHQsIHN0YXRzLCBmaWx0ZXJlZFJlc3VsdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWRSZXN1bHQ7XG59XG5cbiIsImltcG9ydCAka0t2cFMkcGVlcmpzanNiaW5hcnlwYWNrIGZyb20gXCJwZWVyanMtanMtYmluYXJ5cGFja1wiO1xuaW1wb3J0ICRrS3ZwUyR3ZWJydGNhZGFwdGVyIGZyb20gXCJ3ZWJydGMtYWRhcHRlclwiO1xuXG5mdW5jdGlvbiAkcGFyY2VsJGV4cG9ydChlLCBuLCB2LCBzKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBuLCB7Z2V0OiB2LCBzZXQ6IHMsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0pO1xufVxuXG5cbnZhciAkYWY4Y2YxZjY2M2Y0OTBmNCR2YXIkd2ViUlRDQWRhcHRlciA9IC8vQHRzLWlnbm9yZVxuJGtLdnBTJHdlYnJ0Y2FkYXB0ZXIuZGVmYXVsdCB8fCAka0t2cFMkd2VicnRjYWRhcHRlcjtcbnZhciAkYWY4Y2YxZjY2M2Y0OTBmNCRleHBvcnQkMjViZTk1MDI0NzdjMTM3ZCA9IG5ldyAvKiogQGNsYXNzICovIChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBjbGFzc18xKCkge1xuICAgICAgICB0aGlzLmlzSU9TID0gW1xuICAgICAgICAgICAgXCJpUGFkXCIsXG4gICAgICAgICAgICBcImlQaG9uZVwiLFxuICAgICAgICAgICAgXCJpUG9kXCJcbiAgICAgICAgXS5pbmNsdWRlcyhuYXZpZ2F0b3IucGxhdGZvcm0pO1xuICAgICAgICB0aGlzLnN1cHBvcnRlZEJyb3dzZXJzID0gW1xuICAgICAgICAgICAgXCJmaXJlZm94XCIsXG4gICAgICAgICAgICBcImNocm9tZVwiLFxuICAgICAgICAgICAgXCJzYWZhcmlcIlxuICAgICAgICBdO1xuICAgICAgICB0aGlzLm1pbkZpcmVmb3hWZXJzaW9uID0gNTk7XG4gICAgICAgIHRoaXMubWluQ2hyb21lVmVyc2lvbiA9IDcyO1xuICAgICAgICB0aGlzLm1pblNhZmFyaVZlcnNpb24gPSA2MDU7XG4gICAgfVxuICAgIGNsYXNzXzEucHJvdG90eXBlLmlzV2ViUlRDU3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgUlRDUGVlckNvbm5lY3Rpb24gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS5pc0Jyb3dzZXJTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSB0aGlzLmdldFZlcnNpb24oKTtcbiAgICAgICAgdmFyIHZhbGlkQnJvd3NlciA9IHRoaXMuc3VwcG9ydGVkQnJvd3NlcnMuaW5jbHVkZXMoYnJvd3Nlcik7XG4gICAgICAgIGlmICghdmFsaWRCcm93c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChicm93c2VyID09PSBcImNocm9tZVwiKSByZXR1cm4gdmVyc2lvbiA+PSB0aGlzLm1pbkNocm9tZVZlcnNpb247XG4gICAgICAgIGlmIChicm93c2VyID09PSBcImZpcmVmb3hcIikgcmV0dXJuIHZlcnNpb24gPj0gdGhpcy5taW5GaXJlZm94VmVyc2lvbjtcbiAgICAgICAgaWYgKGJyb3dzZXIgPT09IFwic2FmYXJpXCIpIHJldHVybiAhdGhpcy5pc0lPUyAmJiB2ZXJzaW9uID49IHRoaXMubWluU2FmYXJpVmVyc2lvbjtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgY2xhc3NfMS5wcm90b3R5cGUuZ2V0QnJvd3NlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJGFmOGNmMWY2NjNmNDkwZjQkdmFyJHdlYlJUQ0FkYXB0ZXIuYnJvd3NlckRldGFpbHMuYnJvd3NlcjtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmdldFZlcnNpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRhZjhjZjFmNjYzZjQ5MGY0JHZhciR3ZWJSVENBZGFwdGVyLmJyb3dzZXJEZXRhaWxzLnZlcnNpb24gfHwgMDtcbiAgICB9O1xuICAgIGNsYXNzXzEucHJvdG90eXBlLmlzVW5pZmllZFBsYW5TdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGJyb3dzZXIgPSB0aGlzLmdldEJyb3dzZXIoKTtcbiAgICAgICAgdmFyIHZlcnNpb24gPSAkYWY4Y2YxZjY2M2Y0OTBmNCR2YXIkd2ViUlRDQWRhcHRlci5icm93c2VyRGV0YWlscy52ZXJzaW9uIHx8IDA7XG4gICAgICAgIGlmIChicm93c2VyID09PSBcImNocm9tZVwiICYmIHZlcnNpb24gPCB0aGlzLm1pbkNocm9tZVZlcnNpb24pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGJyb3dzZXIgPT09IFwiZmlyZWZveFwiICYmIHZlcnNpb24gPj0gdGhpcy5taW5GaXJlZm94VmVyc2lvbikgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICghd2luZG93LlJUQ1J0cFRyYW5zY2VpdmVyIHx8ICEoXCJjdXJyZW50RGlyZWN0aW9uXCIgaW4gUlRDUnRwVHJhbnNjZWl2ZXIucHJvdG90eXBlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgdGVtcFBjO1xuICAgICAgICB2YXIgc3VwcG9ydGVkID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0ZW1wUGMgPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIHRlbXBQYy5hZGRUcmFuc2NlaXZlcihcImF1ZGlvXCIpO1xuICAgICAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge30gZmluYWxseXtcbiAgICAgICAgICAgIGlmICh0ZW1wUGMpIHRlbXBQYy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWQ7XG4gICAgfTtcbiAgICBjbGFzc18xLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJTdXBwb3J0czpcXG4gICAgYnJvd3NlcjpcIi5jb25jYXQodGhpcy5nZXRCcm93c2VyKCksIFwiXFxuICAgIHZlcnNpb246XCIpLmNvbmNhdCh0aGlzLmdldFZlcnNpb24oKSwgXCJcXG4gICAgaXNJT1M6XCIpLmNvbmNhdCh0aGlzLmlzSU9TLCBcIlxcbiAgICBpc1dlYlJUQ1N1cHBvcnRlZDpcIikuY29uY2F0KHRoaXMuaXNXZWJSVENTdXBwb3J0ZWQoKSwgXCJcXG4gICAgaXNCcm93c2VyU3VwcG9ydGVkOlwiKS5jb25jYXQodGhpcy5pc0Jyb3dzZXJTdXBwb3J0ZWQoKSwgXCJcXG4gICAgaXNVbmlmaWVkUGxhblN1cHBvcnRlZDpcIikuY29uY2F0KHRoaXMuaXNVbmlmaWVkUGxhblN1cHBvcnRlZCgpKTtcbiAgICB9O1xuICAgIHJldHVybiBjbGFzc18xO1xufSgpKSgpO1xuXG5cbnZhciAkMDZjYjUzMWVkNzg0MGY3OCR2YXIkREVGQVVMVF9DT05GSUcgPSB7XG4gICAgaWNlU2VydmVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgICB1cmxzOiBcInN0dW46c3R1bi5sLmdvb2dsZS5jb206MTkzMDJcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAgICAgXCJ0dXJuOmV1LTAudHVybi5wZWVyanMuY29tOjM0NzhcIixcbiAgICAgICAgICAgICAgICBcInR1cm46dXMtMC50dXJuLnBlZXJqcy5jb206MzQ3OFwiLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB1c2VybmFtZTogXCJwZWVyanNcIixcbiAgICAgICAgICAgIGNyZWRlbnRpYWw6IFwicGVlcmpzcFwiXG4gICAgICAgIH0sIFxuICAgIF0sXG4gICAgc2RwU2VtYW50aWNzOiBcInVuaWZpZWQtcGxhblwiXG59O1xudmFyICQwNmNiNTMxZWQ3ODQwZjc4JHZhciRVdGlsID0gLyoqIEBjbGFzcyAqLyBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBVdGlsKCkge1xuICAgICAgICB0aGlzLkNMT1VEX0hPU1QgPSBcIjAucGVlcmpzLmNvbVwiO1xuICAgICAgICB0aGlzLkNMT1VEX1BPUlQgPSA0NDM7XG4gICAgICAgIC8vIEJyb3dzZXJzIHRoYXQgbmVlZCBjaHVua2luZzpcbiAgICAgICAgdGhpcy5jaHVua2VkQnJvd3NlcnMgPSB7XG4gICAgICAgICAgICBDaHJvbWU6IDEsXG4gICAgICAgICAgICBjaHJvbWU6IDFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jaHVua2VkTVRVID0gMTYzMDA7IC8vIFRoZSBvcmlnaW5hbCA2MDAwMCBieXRlcyBzZXR0aW5nIGRvZXMgbm90IHdvcmsgd2hlbiBzZW5kaW5nIGRhdGEgZnJvbSBGaXJlZm94IHRvIENocm9tZSwgd2hpY2ggaXMgXCJjdXQgb2ZmXCIgYWZ0ZXIgMTYzODQgYnl0ZXMgYW5kIGRlbGl2ZXJlZCBpbmRpdmlkdWFsbHkuXG4gICAgICAgIC8vIFJldHVybnMgYnJvd3Nlci1hZ25vc3RpYyBkZWZhdWx0IGNvbmZpZ1xuICAgICAgICB0aGlzLmRlZmF1bHRDb25maWcgPSAkMDZjYjUzMWVkNzg0MGY3OCR2YXIkREVGQVVMVF9DT05GSUc7XG4gICAgICAgIHRoaXMuYnJvd3NlciA9ICRhZjhjZjFmNjYzZjQ5MGY0JGV4cG9ydCQyNWJlOTUwMjQ3N2MxMzdkLmdldEJyb3dzZXIoKTtcbiAgICAgICAgdGhpcy5icm93c2VyVmVyc2lvbiA9ICRhZjhjZjFmNjYzZjQ5MGY0JGV4cG9ydCQyNWJlOTUwMjQ3N2MxMzdkLmdldFZlcnNpb24oKTtcbiAgICAgICAgLy8gTGlzdHMgd2hpY2ggZmVhdHVyZXMgYXJlIHN1cHBvcnRlZFxuICAgICAgICB0aGlzLnN1cHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc3VwcG9ydGVkID0ge1xuICAgICAgICAgICAgICAgIGJyb3dzZXI6ICRhZjhjZjFmNjYzZjQ5MGY0JGV4cG9ydCQyNWJlOTUwMjQ3N2MxMzdkLmlzQnJvd3NlclN1cHBvcnRlZCgpLFxuICAgICAgICAgICAgICAgIHdlYlJUQzogJGFmOGNmMWY2NjNmNDkwZjQkZXhwb3J0JDI1YmU5NTAyNDc3YzEzN2QuaXNXZWJSVENTdXBwb3J0ZWQoKSxcbiAgICAgICAgICAgICAgICBhdWRpb1ZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBiaW5hcnlCbG9iOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZWxpYWJsZTogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXN1cHBvcnRlZC53ZWJSVEMpIHJldHVybiBzdXBwb3J0ZWQ7XG4gICAgICAgICAgICB2YXIgcGM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBjID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKCQwNmNiNTMxZWQ3ODQwZjc4JHZhciRERUZBVUxUX0NPTkZJRyk7XG4gICAgICAgICAgICAgICAgc3VwcG9ydGVkLmF1ZGlvVmlkZW8gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhciBkYyA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYyA9IHBjLmNyZWF0ZURhdGFDaGFubmVsKFwiX1BFRVJKU1RFU1RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXJlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkLmRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQucmVsaWFibGUgPSAhIWRjLm9yZGVyZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIEJpbmFyeSB0ZXN0XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYy5iaW5hcnlUeXBlID0gXCJibG9iXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQuYmluYXJ5QmxvYiA9ICEkYWY4Y2YxZjY2M2Y0OTBmNCRleHBvcnQkMjViZTk1MDI0NzdjMTM3ZC5pc0lPUztcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7fSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGMpIGRjLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge30gZmluYWxseXtcbiAgICAgICAgICAgICAgICBpZiAocGMpIHBjLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkO1xuICAgICAgICB9KCk7XG4gICAgICAgIHRoaXMucGFjayA9ICRrS3ZwUyRwZWVyanNqc2JpbmFyeXBhY2sucGFjaztcbiAgICAgICAgdGhpcy51bnBhY2sgPSAka0t2cFMkcGVlcmpzanNiaW5hcnlwYWNrLnVucGFjaztcbiAgICAgICAgLy8gQmluYXJ5IHN0dWZmXG4gICAgICAgIHRoaXMuX2RhdGFDb3VudCA9IDE7XG4gICAgfVxuICAgIFV0aWwucHJvdG90eXBlLm5vb3AgPSBmdW5jdGlvbigpIHt9O1xuICAgIC8vIEVuc3VyZSBhbHBoYW51bWVyaWMgaWRzXG4gICAgVXRpbC5wcm90b3R5cGUudmFsaWRhdGVJZCA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgIC8vIEFsbG93IGVtcHR5IGlkc1xuICAgICAgICByZXR1cm4gIWlkIHx8IC9eW0EtWmEtejAtOV0rKD86WyBfLV1bQS1aYS16MC05XSspKiQvLnRlc3QoaWQpO1xuICAgIH07XG4gICAgVXRpbC5wcm90b3R5cGUuY2h1bmsgPSBmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIHZhciBjaHVua3MgPSBbXTtcbiAgICAgICAgdmFyIHNpemUgPSBibG9iLnNpemU7XG4gICAgICAgIHZhciB0b3RhbCA9IE1hdGguY2VpbChzaXplIC8gJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuY2h1bmtlZE1UVSk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBzdGFydCA9IDA7XG4gICAgICAgIHdoaWxlKHN0YXJ0IDwgc2l6ZSl7XG4gICAgICAgICAgICB2YXIgZW5kID0gTWF0aC5taW4oc2l6ZSwgc3RhcnQgKyAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5jaHVua2VkTVRVKTtcbiAgICAgICAgICAgIHZhciBiID0gYmxvYi5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgICAgIHZhciBjaHVuayA9IHtcbiAgICAgICAgICAgICAgICBfX3BlZXJEYXRhOiB0aGlzLl9kYXRhQ291bnQsXG4gICAgICAgICAgICAgICAgbjogaW5kZXgsXG4gICAgICAgICAgICAgICAgZGF0YTogYixcbiAgICAgICAgICAgICAgICB0b3RhbDogdG90YWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjaHVua3MucHVzaChjaHVuayk7XG4gICAgICAgICAgICBzdGFydCA9IGVuZDtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YUNvdW50Kys7XG4gICAgICAgIHJldHVybiBjaHVua3M7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5ibG9iVG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKGJsb2IsIGNiKSB7XG4gICAgICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIGZyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQpIGNiKGV2dC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgICAgZnIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG4gICAgICAgIHJldHVybiBmcjtcbiAgICB9O1xuICAgIFV0aWwucHJvdG90eXBlLmJpbmFyeVN0cmluZ1RvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbihiaW5hcnkpIHtcbiAgICAgICAgdmFyIGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJpbmFyeS5sZW5ndGgpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSsrKWJ5dGVBcnJheVtpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgICAgcmV0dXJuIGJ5dGVBcnJheS5idWZmZXI7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5yYW5kb21Ub2tlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMik7XG4gICAgfTtcbiAgICBVdGlsLnByb3RvdHlwZS5pc1NlY3VyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCI7XG4gICAgfTtcbiAgICByZXR1cm4gVXRpbDtcbn0oKTtcbnZhciAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYiA9IG5ldyAkMDZjYjUzMWVkNzg0MGY3OCR2YXIkVXRpbCgpO1xuXG5cbnZhciAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnRzID0ge307XG5cbiRwYXJjZWwkZXhwb3J0KCQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydHMsIFwiUGVlclwiLCAoKSA9PiAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OCwgKHYpID0+ICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4ID0gdik7XG52YXIgJGFjOWI3NTdkNTExNzhlMTUkZXhwb3J0cyA9IHt9O1xuJ3VzZSBzdHJpY3QnO1xudmFyICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LCAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkcHJlZml4ID0gJ34nO1xuLyoqXG4gKiBDb25zdHJ1Y3RvciB0byBjcmVhdGUgYSBzdG9yYWdlIGZvciBvdXIgYEVFYCBvYmplY3RzLlxuICogQW4gYEV2ZW50c2AgaW5zdGFuY2UgaXMgYSBwbGFpbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgZXZlbnQgbmFtZXMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovIGZ1bmN0aW9uICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudHMoKSB7fVxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gICAgJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIC8vXG4gICAgLy8gVGhpcyBoYWNrIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBgX19wcm90b19fYCBwcm9wZXJ0eSBpcyBzdGlsbCBpbmhlcml0ZWQgaW5cbiAgICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAgIC8vXG4gICAgaWYgKCFuZXcgJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50cygpLl9fcHJvdG9fXykgJGFjOWI3NTdkNTExNzhlMTUkdmFyJHByZWZpeCA9IGZhbHNlO1xufVxuLyoqXG4gKiBSZXByZXNlbnRhdGlvbiBvZiBhIHNpbmdsZSBldmVudCBsaXN0ZW5lci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqLyBmdW5jdGlvbiAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkRUUoZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgICB0aGlzLmZuID0gZm47XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm9uY2UgPSBvbmNlIHx8IGZhbHNlO1xufVxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi8gZnVuY3Rpb24gJGFjOWI3NTdkNTExNzhlMTUkdmFyJGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB2YXIgbGlzdGVuZXIgPSBuZXcgJGFjOWI3NTdkNTExNzhlMTUkdmFyJEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpLCBldnQgPSAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkcHJlZml4ID8gJGFjOWI3NTdkNTExNzhlMTUkdmFyJHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XSkgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBsaXN0ZW5lciwgZW1pdHRlci5fZXZlbnRzQ291bnQrKztcbiAgICBlbHNlIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0uZm4pIGVtaXR0ZXIuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICAgIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbXG4gICAgICAgIGVtaXR0ZXIuX2V2ZW50c1tldnRdLFxuICAgICAgICBsaXN0ZW5lclxuICAgIF07XG4gICAgcmV0dXJuIGVtaXR0ZXI7XG59XG4vKipcbiAqIENsZWFyIGV2ZW50IGJ5IG5hbWUuXG4gKlxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgUmVmZXJlbmNlIHRvIHRoZSBgRXZlbnRFbWl0dGVyYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldnQgVGhlIEV2ZW50IG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovIGZ1bmN0aW9uICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRjbGVhckV2ZW50KGVtaXR0ZXIsIGV2dCkge1xuICAgIGlmICgtLWVtaXR0ZXIuX2V2ZW50c0NvdW50ID09PSAwKSBlbWl0dGVyLl9ldmVudHMgPSBuZXcgJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50cygpO1xuICAgIGVsc2UgZGVsZXRlIGVtaXR0ZXIuX2V2ZW50c1tldnRdO1xufVxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHVibGljXG4gKi8gZnVuY3Rpb24gJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50RW1pdHRlcigpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50cygpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbn1cbi8qKlxuICogUmV0dXJuIGFuIGFycmF5IGxpc3RpbmcgdGhlIGV2ZW50cyBmb3Igd2hpY2ggdGhlIGVtaXR0ZXIgaGFzIHJlZ2lzdGVyZWRcbiAqIGxpc3RlbmVycy5cbiAqXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAcHVibGljXG4gKi8gJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gICAgdmFyIG5hbWVzID0gW10sIGV2ZW50cywgbmFtZTtcbiAgICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcbiAgICBmb3IobmFtZSBpbiBldmVudHMgPSB0aGlzLl9ldmVudHMpaWYgKCRhYzliNzU3ZDUxMTc4ZTE1JHZhciRoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKCRhYzliNzU3ZDUxMTc4ZTE1JHZhciRwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgICByZXR1cm4gbmFtZXM7XG59O1xuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICAgIHZhciBldnQgPSAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkcHJlZml4ID8gJGFjOWI3NTdkNTExNzhlMTUkdmFyJHByZWZpeCArIGV2ZW50IDogZXZlbnQsIGhhbmRsZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgaWYgKCFoYW5kbGVycykgcmV0dXJuIFtdO1xuICAgIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtcbiAgICAgICAgaGFuZGxlcnMuZm5cbiAgICBdO1xuICAgIGZvcih2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKWVlW2ldID0gaGFuZGxlcnNbaV0uZm47XG4gICAgcmV0dXJuIGVlO1xufTtcbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gICAgdmFyIGV2dCA9ICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRwcmVmaXggPyAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkcHJlZml4ICsgZXZlbnQgOiBldmVudCwgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgaWYgKCFsaXN0ZW5lcnMpIHJldHVybiAwO1xuICAgIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICAgIHJldHVybiBsaXN0ZW5lcnMubGVuZ3RoO1xufTtcbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgICB2YXIgZXZ0ID0gJGFjOWI3NTdkNTExNzhlMTUkdmFyJHByZWZpeCA/ICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiBmYWxzZTtcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF0sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MsIGk7XG4gICAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgICAgICBpZiAobGlzdGVuZXJzLm9uY2UpIHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVycy5mbiwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgc3dpdGNoKGxlbil7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0KSwgdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiksIHRydWU7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzKSwgdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0LCBhNSksIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGkgPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpOyBpIDwgbGVuOyBpKyspYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGxpc3RlbmVycy5mbi5hcHBseShsaXN0ZW5lcnMuY29udGV4dCwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGgsIGo7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgICAgc3dpdGNoKGxlbil7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbaV0uZm4uY2FsbChsaXN0ZW5lcnNbaV0uY29udGV4dCwgYTEsIGEyLCBhMyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJncykgZm9yKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpOyBqIDwgbGVuOyBqKyspYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyc1tpXS5mbi5hcHBseShsaXN0ZW5lcnNbaV0uY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqLyAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBmbiwgY29udGV4dCkge1xuICAgIHJldHVybiAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkYWRkTGlzdGVuZXIodGhpcywgZXZlbnQsIGZuLCBjb250ZXh0LCBmYWxzZSk7XG59O1xuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqLyAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gJGFjOWI3NTdkNTExNzhlMTUkdmFyJGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuLyoqXG4gKiBSZW1vdmUgdGhlIGxpc3RlbmVycyBvZiBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBoYXZlIHRoaXMgY29udGV4dC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBPbmx5IHJlbW92ZSBvbmUtdGltZSBsaXN0ZW5lcnMuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi8gJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihldmVudCwgZm4sIGNvbnRleHQsIG9uY2UpIHtcbiAgICB2YXIgZXZ0ID0gJGFjOWI3NTdkNTExNzhlMTUkdmFyJHByZWZpeCA/ICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuICAgIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHJldHVybiB0aGlzO1xuICAgIGlmICghZm4pIHtcbiAgICAgICAgJGFjOWI3NTdkNTExNzhlMTUkdmFyJGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMuZm4gPT09IGZuICYmICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSkgJiYgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KSkgJGFjOWI3NTdkNTExNzhlMTUkdmFyJGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmb3IodmFyIGkgPSAwLCBldmVudHMgPSBbXSwgbGVuZ3RoID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKWlmIChsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8IG9uY2UgJiYgIWxpc3RlbmVyc1tpXS5vbmNlIHx8IGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAgICAgLy9cbiAgICAgICAgaWYgKGV2ZW50cy5sZW5ndGgpIHRoaXMuX2V2ZW50c1tldnRdID0gZXZlbnRzLmxlbmd0aCA9PT0gMSA/IGV2ZW50c1swXSA6IGV2ZW50cztcbiAgICAgICAgZWxzZSAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzLCBvciB0aG9zZSBvZiB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBbZXZlbnRdIFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQHB1YmxpY1xuICovICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICAgIHZhciBldnQ7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2dCA9ICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRwcmVmaXggPyAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IG5ldyAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuLy9cbi8vIEFsaWFzIG1ldGhvZHMgbmFtZXMgYmVjYXVzZSBwZW9wbGUgcm9sbCBsaWtlIHRoYXQuXG4vL1xuJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG4kYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9ICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbiRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudEVtaXR0ZXIucHJlZml4ZWQgPSAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkcHJlZml4O1xuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuJGFjOWI3NTdkNTExNzhlMTUkdmFyJEV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSAkYWM5Yjc1N2Q1MTE3OGUxNSR2YXIkRXZlbnRFbWl0dGVyO1xuJGFjOWI3NTdkNTExNzhlMTUkZXhwb3J0cyA9ICRhYzliNzU3ZDUxMTc4ZTE1JHZhciRFdmVudEVtaXR0ZXI7XG5cblxuXG52YXIgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cyA9IHt9O1xuXG4kcGFyY2VsJGV4cG9ydCgkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLCBcIkxvZ0xldmVsXCIsICgpID0+ICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydCQyNDNlNjJkNzhkM2I1NDRkLCAodikgPT4gJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDI0M2U2MmQ3OGQzYjU0NGQgPSB2KTtcbiRwYXJjZWwkZXhwb3J0KCQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMsIFwiZGVmYXVsdFwiLCAoKSA9PiAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMmUyYmNkODczOWFlMDM5LCAodikgPT4gJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOSA9IHYpO1xudmFyICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRfX3JlYWQgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fcmVhZCB8fCBmdW5jdGlvbihvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSlhci5wdXNoKHIudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGUgPSB7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfTtcbiAgICB9IGZpbmFsbHl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciAkMTYxNTcwNWVjYzZhZGNhMyR2YXIkX19zcHJlYWRBcnJheSA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19zcHJlYWRBcnJheSB8fCBmdW5jdGlvbih0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKylpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciAkMTYxNTcwNWVjYzZhZGNhMyR2YXIkTE9HX1BSRUZJWCA9IFwiUGVlckpTOiBcIjtcbnZhciAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZDtcbihmdW5jdGlvbigkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZCkge1xuICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydCQyNDNlNjJkNzhkM2I1NDRkWyQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydCQyNDNlNjJkNzhkM2I1NDRkW1wiRGlzYWJsZWRcIl0gPSAwXSA9IFwiRGlzYWJsZWRcIjtcbiAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZFskMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZFtcIkVycm9yc1wiXSA9IDFdID0gXCJFcnJvcnNcIjtcbiAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZFskMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZFtcIldhcm5pbmdzXCJdID0gMl0gPSBcIldhcm5pbmdzXCI7XG4gICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDI0M2U2MmQ3OGQzYjU0NGRbJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDI0M2U2MmQ3OGQzYjU0NGRbXCJBbGxcIl0gPSAzXSA9IFwiQWxsXCI7XG59KSgkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZCB8fCAoJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDI0M2U2MmQ3OGQzYjU0NGQgPSB7fSkpO1xudmFyICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRMb2dnZXIgPSAvKiogQGNsYXNzICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExvZ2dlcigpIHtcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZC5EaXNhYmxlZDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExvZ2dlci5wcm90b3R5cGUsIFwibG9nTGV2ZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGxvZ0xldmVsKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IGxvZ0xldmVsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKylhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIGlmICh0aGlzLl9sb2dMZXZlbCA+PSAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZC5BbGwpIHRoaXMuX3ByaW50LmFwcGx5KHRoaXMsICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRfX3NwcmVhZEFycmF5KFtcbiAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydCQyNDNlNjJkNzhkM2I1NDRkLkFsbFxuICAgICAgICBdLCAkMTYxNTcwNWVjYzZhZGNhMyR2YXIkX19yZWFkKGFyZ3MpLCBmYWxzZSkpO1xuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvcih2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICBpZiAodGhpcy5fbG9nTGV2ZWwgPj0gJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDI0M2U2MmQ3OGQzYjU0NGQuV2FybmluZ3MpIHRoaXMuX3ByaW50LmFwcGx5KHRoaXMsICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRfX3NwcmVhZEFycmF5KFtcbiAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydCQyNDNlNjJkNzhkM2I1NDRkLldhcm5pbmdzXG4gICAgICAgIF0sICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRfX3JlYWQoYXJncyksIGZhbHNlKSk7XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvcih2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICBpZiAodGhpcy5fbG9nTGV2ZWwgPj0gJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDI0M2U2MmQ3OGQzYjU0NGQuRXJyb3JzKSB0aGlzLl9wcmludC5hcHBseSh0aGlzLCAkMTYxNTcwNWVjYzZhZGNhMyR2YXIkX19zcHJlYWRBcnJheShbXG4gICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZC5FcnJvcnNcbiAgICAgICAgXSwgJDE2MTU3MDVlY2M2YWRjYTMkdmFyJF9fcmVhZChhcmdzKSwgZmFsc2UpKTtcbiAgICB9O1xuICAgIExvZ2dlci5wcm90b3R5cGUuc2V0TG9nRnVuY3Rpb24gPSBmdW5jdGlvbihmbikge1xuICAgICAgICB0aGlzLl9wcmludCA9IGZuO1xuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5fcHJpbnQgPSBmdW5jdGlvbihsb2dMZXZlbCkge1xuICAgICAgICB2YXIgcmVzdCA9IFtdO1xuICAgICAgICBmb3IodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKXJlc3RbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIHZhciBjb3B5ID0gJDE2MTU3MDVlY2M2YWRjYTMkdmFyJF9fc3ByZWFkQXJyYXkoW1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkdmFyJExPR19QUkVGSVhcbiAgICAgICAgXSwgJDE2MTU3MDVlY2M2YWRjYTMkdmFyJF9fcmVhZChyZXN0KSwgZmFsc2UpO1xuICAgICAgICBmb3IodmFyIGkgaW4gY29weSlpZiAoY29weVtpXSBpbnN0YW5jZW9mIEVycm9yKSBjb3B5W2ldID0gXCIoXCIgKyBjb3B5W2ldLm5hbWUgKyBcIikgXCIgKyBjb3B5W2ldLm1lc3NhZ2U7XG4gICAgICAgIGlmIChsb2dMZXZlbCA+PSAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZC5BbGwpIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRfX3NwcmVhZEFycmF5KFtdLCAkMTYxNTcwNWVjYzZhZGNhMyR2YXIkX19yZWFkKGNvcHkpLCBmYWxzZSkpO1xuICAgICAgICBlbHNlIGlmIChsb2dMZXZlbCA+PSAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnQkMjQzZTYyZDc4ZDNiNTQ0ZC5XYXJuaW5ncykgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRfX3NwcmVhZEFycmF5KFtcbiAgICAgICAgICAgIFwiV0FSTklOR1wiXG4gICAgICAgIF0sICQxNjE1NzA1ZWNjNmFkY2EzJHZhciRfX3JlYWQoY29weSksIGZhbHNlKSk7XG4gICAgICAgIGVsc2UgaWYgKGxvZ0xldmVsID49ICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydCQyNDNlNjJkNzhkM2I1NDRkLkVycm9ycykgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCAkMTYxNTcwNWVjYzZhZGNhMyR2YXIkX19zcHJlYWRBcnJheShbXG4gICAgICAgICAgICBcIkVSUk9SXCJcbiAgICAgICAgXSwgJDE2MTU3MDVlY2M2YWRjYTMkdmFyJF9fcmVhZChjb3B5KSwgZmFsc2UpKTtcbiAgICB9O1xuICAgIHJldHVybiBMb2dnZXI7XG59KCk7XG52YXIgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0JDJlMmJjZDg3MzlhZTAzOSA9IG5ldyAkMTYxNTcwNWVjYzZhZGNhMyR2YXIkTG9nZ2VyKCk7XG5cblxudmFyICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydHMgPSB7fTtcblxuJHBhcmNlbCRleHBvcnQoJDMxZDExYThkMTIyY2I0YjckZXhwb3J0cywgXCJTb2NrZXRcIiwgKCkgPT4gJDMxZDExYThkMTIyY2I0YjckZXhwb3J0JDQ3OTg5MTdkYmYxNDliNzksICh2KSA9PiAkMzFkMTFhOGQxMjJjYjRiNyRleHBvcnQkNDc5ODkxN2RiZjE0OWI3OSA9IHYpO1xuXG5cbnZhciAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkMzE1N2Q1N2I0MTM1ZTNiYztcbihmdW5jdGlvbigkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkMzE1N2Q1N2I0MTM1ZTNiYykge1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzMTU3ZDU3YjQxMzVlM2JjW1wiRGF0YVwiXSA9IFwiZGF0YVwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzMTU3ZDU3YjQxMzVlM2JjW1wiTWVkaWFcIl0gPSBcIm1lZGlhXCI7XG59KSgkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkMzE1N2Q1N2I0MTM1ZTNiYyB8fCAoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDMxNTdkNTdiNDEzNWUzYmMgPSB7fSkpO1xudmFyICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmO1xuKGZ1bmN0aW9uKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmKSB7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmZbXCJCcm93c2VySW5jb21wYXRpYmxlXCJdID0gXCJicm93c2VyLWluY29tcGF0aWJsZVwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmW1wiRGlzY29ubmVjdGVkXCJdID0gXCJkaXNjb25uZWN0ZWRcIjtcbiAgICAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZltcIkludmFsaWRJRFwiXSA9IFwiaW52YWxpZC1pZFwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmW1wiSW52YWxpZEtleVwiXSA9IFwiaW52YWxpZC1rZXlcIjtcbiAgICAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZltcIk5ldHdvcmtcIl0gPSBcIm5ldHdvcmtcIjtcbiAgICAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZltcIlBlZXJVbmF2YWlsYWJsZVwiXSA9IFwicGVlci11bmF2YWlsYWJsZVwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmW1wiU3NsVW5hdmFpbGFibGVcIl0gPSBcInNzbC11bmF2YWlsYWJsZVwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmW1wiU2VydmVyRXJyb3JcIl0gPSBcInNlcnZlci1lcnJvclwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmW1wiU29ja2V0RXJyb3JcIl0gPSBcInNvY2tldC1lcnJvclwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmW1wiU29ja2V0Q2xvc2VkXCJdID0gXCJzb2NrZXQtY2xvc2VkXCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmZbXCJVbmF2YWlsYWJsZUlEXCJdID0gXCJ1bmF2YWlsYWJsZS1pZFwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmW1wiV2ViUlRDXCJdID0gXCJ3ZWJydGNcIjtcbn0pKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmIHx8ICgkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZiA9IHt9KSk7XG52YXIgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDg5ZjUwN2NmOTg2YTk0NztcbihmdW5jdGlvbigkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkODlmNTA3Y2Y5ODZhOTQ3KSB7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDg5ZjUwN2NmOTg2YTk0N1tcIkJpbmFyeVwiXSA9IFwiYmluYXJ5XCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDg5ZjUwN2NmOTg2YTk0N1tcIkJpbmFyeVVURjhcIl0gPSBcImJpbmFyeS11dGY4XCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDg5ZjUwN2NmOTg2YTk0N1tcIkpTT05cIl0gPSBcImpzb25cIjtcbn0pKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ4OWY1MDdjZjk4NmE5NDcgfHwgKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ4OWY1MDdjZjk4NmE5NDcgPSB7fSkpO1xudmFyICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzYjVjNGE0YjYzNTRmMDIzO1xuKGZ1bmN0aW9uKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzYjVjNGE0YjYzNTRmMDIzKSB7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDNiNWM0YTRiNjM1NGYwMjNbXCJNZXNzYWdlXCJdID0gXCJtZXNzYWdlXCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDNiNWM0YTRiNjM1NGYwMjNbXCJEaXNjb25uZWN0ZWRcIl0gPSBcImRpc2Nvbm5lY3RlZFwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzYjVjNGE0YjYzNTRmMDIzW1wiRXJyb3JcIl0gPSBcImVycm9yXCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDNiNWM0YTRiNjM1NGYwMjNbXCJDbG9zZVwiXSA9IFwiY2xvc2VcIjtcbn0pKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzYjVjNGE0YjYzNTRmMDIzIHx8ICgkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkM2I1YzRhNGI2MzU0ZjAyMyA9IHt9KSk7XG52YXIgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQ7XG4oZnVuY3Rpb24oJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQpIHtcbiAgICAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZFtcIkhlYXJ0YmVhdFwiXSA9IFwiSEVBUlRCRUFUXCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGRbXCJDYW5kaWRhdGVcIl0gPSBcIkNBTkRJREFURVwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkW1wiT2ZmZXJcIl0gPSBcIk9GRkVSXCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGRbXCJBbnN3ZXJcIl0gPSBcIkFOU1dFUlwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkW1wiT3BlblwiXSA9IFwiT1BFTlwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkW1wiRXJyb3JcIl0gPSBcIkVSUk9SXCI7XG4gICAgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGRbXCJJZFRha2VuXCJdID0gXCJJRC1UQUtFTlwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkW1wiSW52YWxpZEtleVwiXSA9IFwiSU5WQUxJRC1LRVlcIjtcbiAgICAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZFtcIkxlYXZlXCJdID0gXCJMRUFWRVwiO1xuICAgICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkW1wiRXhwaXJlXCJdID0gXCJFWFBJUkVcIjtcbn0pKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkIHx8ICgkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZCA9IHt9KSk7XG5cblxudmFyICQwZDFlZDg5MWM1Y2IyN2MwJGV4cG9ydHMgPSB7fTtcbiQwZDFlZDg5MWM1Y2IyN2MwJGV4cG9ydHMgPSBKU09OLnBhcnNlKFwie1xcXCJuYW1lXFxcIjpcXFwicGVlcmpzXFxcIixcXFwidmVyc2lvblxcXCI6XFxcIjEuNC43XFxcIixcXFwia2V5d29yZHNcXFwiOltcXFwicGVlcmpzXFxcIixcXFwid2VicnRjXFxcIixcXFwicDJwXFxcIixcXFwicnRjXFxcIl0sXFxcImRlc2NyaXB0aW9uXFxcIjpcXFwiUGVlckpTIGNsaWVudFxcXCIsXFxcImhvbWVwYWdlXFxcIjpcXFwiaHR0cHM6Ly9wZWVyanMuY29tXFxcIixcXFwiYnVnc1xcXCI6e1xcXCJ1cmxcXFwiOlxcXCJodHRwczovL2dpdGh1Yi5jb20vcGVlcnMvcGVlcmpzL2lzc3Vlc1xcXCJ9LFxcXCJyZXBvc2l0b3J5XFxcIjp7XFxcInR5cGVcXFwiOlxcXCJnaXRcXFwiLFxcXCJ1cmxcXFwiOlxcXCJodHRwczovL2dpdGh1Yi5jb20vcGVlcnMvcGVlcmpzXFxcIn0sXFxcImxpY2Vuc2VcXFwiOlxcXCJNSVRcXFwiLFxcXCJjb250cmlidXRvcnNcXFwiOltcXFwiTWljaGVsbGUgQnUgPG1pY2hlbGxlQG1pY2hlbGxlYnUuY29tPlxcXCIsXFxcImFmcm9raWNrIDxkZXZieXJ1QGdtYWlsLmNvbT5cXFwiLFxcXCJlcmljeiA8cmVhbGx5LmV6QGdtYWlsLmNvbT5cXFwiLFxcXCJKYWlybyA8a2lkYW5kY2F0QGdtYWlsLmNvbT5cXFwiLFxcXCJKb25hcyBHbG9uaW5nIDwzNDE5NDM3MCtqb25hc2dsb25pbmdAdXNlcnMubm9yZXBseS5naXRodWIuY29tPlxcXCIsXFxcIkphaXJvIENhcm8tQWNjaW5vIFZpY2lhbmEgPGphaXJvQGdhbGF4LmJlPlxcXCIsXFxcIkNhcmxvcyBDYWJhbGxlcm8gPGNhcmxvcy5jYWJhbGxlcm8uZ29uemFsZXpAZ21haWwuY29tPlxcXCIsXFxcImhjIDxoaGVlbm5ycnl5QGdtYWlsLmNvbT5cXFwiLFxcXCJNdWhhbW1hZCBBc2lmIDxjYXByaXBpb0BnbWFpbC5jb20+XFxcIixcXFwiUHJhc2hvb25CIDxwcmFzaG9vbmJoYXR0YWNoYXJqZWVAZ21haWwuY29tPlxcXCIsXFxcIkhhcnNoIEJhcmRoYW4gTWlzaHJhIDw0NzM1MTAyNStIYXJzaENhc3BlckB1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+XFxcIixcXFwiYWtvdHluc2tpIDxhbGVrc2FuZGVya290YnVyeUBnbWFpbC5jb20+XFxcIixcXFwibG1iIDxpQGxtYi5pbz5cXFwiLFxcXCJKYWlyb29vIDxqYWlyb2Nhcm9AbXNuLmNvbT5cXFwiLFxcXCJNb3JpdHogU3TDvGNrbGVyIDxtb3JpdHouc3R1ZWNrbGVyQGdtYWlsLmNvbT5cXFwiLFxcXCJTaW1vbiA8Y3J5ZG90c25ha2VnaXRodWJAZ21haWwuY29tPlxcXCIsXFxcIkRlbmlzIEx1a292IDxkZW5pc21hc3N0ZXJzQGdtYWlsLmNvbT5cXFwiLFxcXCJQaGlsaXBwIEhhbmNrZSA8ZmlwcG9AYW5keWV0Lm5ldD5cXFwiLFxcXCJIYW5zIE9rc2VuZGFobCA8aGFuc29rc2VuZGFobEBnbWFpbC5jb20+XFxcIixcXFwiSmVzcyA8amVzc2FjaGFuZGxlckBnbWFpbC5jb20+XFxcIixcXFwia2hhbmt1YW4gPGtoYW5rdWFuQGdtYWlsLmNvbT5cXFwiLFxcXCJEVU9EVksgPGt1cm1hbm92LndvcmtAZ21haWwuY29tPlxcXCIsXFxcIlhpWmhhbyA8a3dhbmcxaW1zYUBnbWFpbC5jb20+XFxcIixcXFwiTWF0dGhpYXMgTG9ociA8bWF0dGhpYXNAbG9oci5tZT5cXFwiLFxcXCI9ZnJhbmsgdHJlZSA8PWZybmt0cmJAZ29vZ2xlbWFpbC5jb20+XFxcIixcXFwiQW5kcmUgRWNrYXJkdCA8YWVja2FyZHRAb3V0bG9vay5jb20+XFxcIixcXFwiQ2hyaXMgQ293YW4gPGFnZW50bWU0OUBnbWFpbC5jb20+XFxcIixcXFwiQWxleCBDaHVldiA8YWxleEBjaHVldi5jb20+XFxcIixcXFwiYWx4bnVsbCA8YWx4bnVsbEBlLm1haWwuZGU+XFxcIixcXFwiWWVtZWwgSmFyZGkgPGFuZ2VsLmphcmRpQGdtYWlsLmNvbT5cXFwiLFxcXCJCZW4gUGFybmVsbCA8YmVuamFtaW5wYXJuZWxsLjk0QGdtYWlsLmNvbT5cXFwiLFxcXCJCZW5ueSBMaWNodG5lciA8YmVubmxpY2hAZ21haWwuY29tPlxcXCIsXFxcImZyZXNoZW5lZXN6IDxiaXRldHJ1ZHB1YmxpY0BnbWFpbC5jb20+XFxcIixcXFwiYm9iLmJhcnN0ZWFkQGV4YXB0aXZlLmNvbSA8Ym9iLmJhcnN0ZWFkQGV4YXB0aXZlLmNvbT5cXFwiLFxcXCJjaGFuZGlrYSA8Y2hhbmRpa2FAZ21haWwuY29tPlxcXCIsXFxcImVtZXJzaW9uIDxjb250YWN0QGVtZXJzaW9uLmZyPlxcXCIsXFxcIkNocmlzdG9waGVyIFZhbiA8Y3ZhbkB1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+XFxcIixcXFwiZWRkaWVoZXJtIDxlZGhlcm1vc29AZ21haWwuY29tPlxcXCIsXFxcIkVkdWFyZG8gUGluaG8gPGVuZXQ0bWlrZWVuZXRAZ21haWwuY29tPlxcXCIsXFxcIkV2YW5kcm8gWmFuYXR0YSA8ZXphbmF0dGFAdHJheS5uZXQuYnI+XFxcIixcXFwiR2FyZG5lciBCaWNrZm9yZCA8Z2FyZG5lckB1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+XFxcIixcXFwiR2lhbiBMdWNhIDxnaWFubHVjYS5jZWNjaGlAY3lubnkuY29tPlxcXCIsXFxcIlBhdHJpY2tKUyA8Z2l0aHViQGdkaTIyOTAuY29tPlxcXCIsXFxcImpvbm55ZiA8Z2l0aHViQGpvbmF0aGFuZm9zcy5jby51az5cXFwiLFxcXCJIaXpraWEgRmVsaXggPGhpemtpZndAZ21haWwuY29tPlxcXCIsXFxcIkhyaXN0byBPc2tvdiA8aHJpc3RvLm9za292QGdtYWlsLmNvbT5cXFwiLFxcXCJJc2FhYyBNYWR3ZWQgPGkubWFkd2VkQGdtYWlsLmNvbT5cXFwiLFxcXCJJbHlhIEtvbmFueWtoaW4gPGlseWEua29uYW55a2hpbkBnbWFpbC5jb20+XFxcIixcXFwiamFzb25iYXJyeSA8amFzYmFycnlAbWUuY29tPlxcXCIsXFxcIkpvbmF0aGFuIEJ1cmtlIDxqb25hdGhhbi5idXJrZS4xMzExQGdvb2dsZW1haWwuY29tPlxcXCIsXFxcIkpvc2ggSGFtaXQgPGpvc2guaGFtaXRAZ21haWwuY29tPlxcXCIsXFxcIkpvcmRhbiBBdXN0aW4gPGpyYXg4NkBnbWFpbC5jb20+XFxcIixcXFwiSm9lbCBXZXR6ZWxsIDxqd2V0emVsbEB5YWhvby5jb20+XFxcIixcXFwieGl6aGFvIDxrZXZpbi53YW5nQGNsb3VkZXJhLmNvbT5cXFwiLFxcXCJBbGJlcnRvIFRvcnJlcyA8a3VuZ2Zvb2JhckBnbWFpbC5jb20+XFxcIixcXFwiSm9uYXRoYW4gTWF5b2wgPG1heW9sam9uYXRoYW5AZ21haWwuY29tPlxcXCIsXFxcIkplZmZlcnNvbiBGZWxpeCA8bWVAanNmZWxpeC5kZXY+XFxcIixcXFwiUm9sZiBFcmlrIExla2FuZyA8bWVAcm9sZmxla2FuZy5jb20+XFxcIixcXFwiS2V2aW4gTWFpLUh1c2FuIENoaWEgPG1oY2hpYUB1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+XFxcIixcXFwiUGVwaWpuIGRlIFZvcyA8cGVwaWpuZGV2b3NAZ21haWwuY29tPlxcXCIsXFxcIkpvb1lvdW5nIDxxa2RscWxAbmF2ZXIuY29tPlxcXCIsXFxcIlRvYmlhcyBTcGVpY2hlciA8cm9vdGNvbW1hbmRlckBnbWFpbC5jb20+XFxcIixcXFwiU3RldmUgQmxhdXJvY2sgPHNibGF1cm9ja0BnbWFpbC5jb20+XFxcIixcXFwiS3lyeWxvIFNoZWdlZGEgPHNoZWdlZGFAdWFsYmVydGEuY2E+XFxcIixcXFwiRGl3YW5rIFNpbmdoIFRvbWVyIDxzaW5naEBkaXdhbmsubmFtZT5cXFwiLFxcXCJTb8yIcmVuIEJhbGtvIDxTb2VyZW4uQmFsa29AZ21haWwuY29tPlxcXCIsXFxcIkFycGl0IFNvbGFua2kgPHNvbGFua2lhcnBpdDE5OTdAZ21haWwuY29tPlxcXCIsXFxcIll1a2kgSXRvIDx5dWtpQGdubmsubmV0PlxcXCIsXFxcIkFydHVyIFpheWF0cyA8emFnMmFydEBnbWFpbC5jb20+XFxcIl0sXFxcImZ1bmRpbmdcXFwiOntcXFwidHlwZVxcXCI6XFxcIm9wZW5jb2xsZWN0aXZlXFxcIixcXFwidXJsXFxcIjpcXFwiaHR0cHM6Ly9vcGVuY29sbGVjdGl2ZS5jb20vcGVlclxcXCJ9LFxcXCJjb2xsZWN0aXZlXFxcIjp7XFxcInR5cGVcXFwiOlxcXCJvcGVuY29sbGVjdGl2ZVxcXCIsXFxcInVybFxcXCI6XFxcImh0dHBzOi8vb3BlbmNvbGxlY3RpdmUuY29tL3BlZXJcXFwifSxcXFwiZmlsZXNcXFwiOltcXFwiZGlzdC8qXFxcIl0sXFxcInNpZGVFZmZlY3RzXFxcIjpbXFxcImxpYi9nbG9iYWwudHNcXFwiLFxcXCJsaWIvc3VwcG9ydHMudHNcXFwiXSxcXFwibWFpblxcXCI6XFxcImRpc3QvYnVuZGxlci5janNcXFwiLFxcXCJtb2R1bGVcXFwiOlxcXCJkaXN0L2J1bmRsZXIubWpzXFxcIixcXFwiYnJvd3Nlci1taW5pZmllZFxcXCI6XFxcImRpc3QvcGVlcmpzLm1pbi5qc1xcXCIsXFxcImJyb3dzZXItdW5taW5pZmllZFxcXCI6XFxcImRpc3QvcGVlcmpzLmpzXFxcIixcXFwidHlwZXNcXFwiOlxcXCJkaXN0L3R5cGVzLmQudHNcXFwiLFxcXCJlbmdpbmVzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCI+PSAxMFxcXCJ9LFxcXCJ0YXJnZXRzXFxcIjp7XFxcInR5cGVzXFxcIjp7XFxcInNvdXJjZVxcXCI6XFxcImxpYi9leHBvcnRzLnRzXFxcIn0sXFxcIm1haW5cXFwiOntcXFwic291cmNlXFxcIjpcXFwibGliL2V4cG9ydHMudHNcXFwiLFxcXCJzb3VyY2VNYXBcXFwiOntcXFwiaW5saW5lU291cmNlc1xcXCI6dHJ1ZX19LFxcXCJtb2R1bGVcXFwiOntcXFwic291cmNlXFxcIjpcXFwibGliL2V4cG9ydHMudHNcXFwiLFxcXCJpbmNsdWRlTm9kZU1vZHVsZXNcXFwiOltcXFwiZXZlbnRlbWl0dGVyM1xcXCJdLFxcXCJzb3VyY2VNYXBcXFwiOntcXFwiaW5saW5lU291cmNlc1xcXCI6dHJ1ZX19LFxcXCJicm93c2VyLW1pbmlmaWVkXFxcIjp7XFxcImNvbnRleHRcXFwiOlxcXCJicm93c2VyXFxcIixcXFwib3V0cHV0Rm9ybWF0XFxcIjpcXFwiZ2xvYmFsXFxcIixcXFwib3B0aW1pemVcXFwiOnRydWUsXFxcImVuZ2luZXNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOlxcXCJjb3ZlciA5OSUsIG5vdCBkZWFkXFxcIn0sXFxcInNvdXJjZVxcXCI6XFxcImxpYi9nbG9iYWwudHNcXFwifSxcXFwiYnJvd3Nlci11bm1pbmlmaWVkXFxcIjp7XFxcImNvbnRleHRcXFwiOlxcXCJicm93c2VyXFxcIixcXFwib3V0cHV0Rm9ybWF0XFxcIjpcXFwiZ2xvYmFsXFxcIixcXFwib3B0aW1pemVcXFwiOmZhbHNlLFxcXCJlbmdpbmVzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpcXFwiY292ZXIgOTklLCBub3QgZGVhZFxcXCJ9LFxcXCJzb3VyY2VcXFwiOlxcXCJsaWIvZ2xvYmFsLnRzXFxcIn19LFxcXCJzY3JpcHRzXFxcIjp7XFxcImNvbnRyaWJ1dG9yc1xcXCI6XFxcImdpdC1hdXRob3JzLWNsaSAtLXByaW50PWZhbHNlICYmIHByZXR0aWVyIC0td3JpdGUgcGFja2FnZS5qc29uICYmIGdpdCBhZGQgcGFja2FnZS5qc29uIHBhY2thZ2UtbG9jay5qc29uICYmIGdpdCBjb21taXQgLW0gXFxcXFxcXCJjaG9yZShjb250cmlidXRvcnMpOiB1cGRhdGUgYW5kIHNvcnQgY29udHJpYnV0b3JzIGxpc3RcXFxcXFxcIlxcXCIsXFxcImNoZWNrXFxcIjpcXFwidHNjIC0tbm9FbWl0XFxcIixcXFwid2F0Y2hcXFwiOlxcXCJwYXJjZWwgd2F0Y2hcXFwiLFxcXCJidWlsZFxcXCI6XFxcInJtIC1yZiBkaXN0ICYmIHBhcmNlbCBidWlsZFxcXCIsXFxcInByZXB1Ymxpc2hPbmx5XFxcIjpcXFwibnBtIHJ1biBidWlsZFxcXCIsXFxcInRlc3RcXFwiOlxcXCJtb2NoYSAtciB0cy1ub2RlL3JlZ2lzdGVyIC1yIGpzZG9tLWdsb2JhbC9yZWdpc3RlciB0ZXN0LyoqLyoudHNcXFwiLFxcXCJmb3JtYXRcXFwiOlxcXCJwcmV0dGllciAtLXdyaXRlIC5cXFwiLFxcXCJzZW1hbnRpYy1yZWxlYXNlXFxcIjpcXFwic2VtYW50aWMtcmVsZWFzZVxcXCJ9LFxcXCJkZXZEZXBlbmRlbmNpZXNcXFwiOntcXFwiQHBhcmNlbC9jb25maWctZGVmYXVsdFxcXCI6XFxcIl4yLjUuMFxcXCIsXFxcIkBwYXJjZWwvcGFja2FnZXItdHNcXFwiOlxcXCJeMi41LjBcXFwiLFxcXCJAcGFyY2VsL3RyYW5zZm9ybWVyLXR5cGVzY3JpcHQtdHNjXFxcIjpcXFwiXjIuNS4wXFxcIixcXFwiQHBhcmNlbC90cmFuc2Zvcm1lci10eXBlc2NyaXB0LXR5cGVzXFxcIjpcXFwiXjIuNS4wXFxcIixcXFwiQHNlbWFudGljLXJlbGVhc2UvY2hhbmdlbG9nXFxcIjpcXFwiXjYuMC4xXFxcIixcXFwiQHNlbWFudGljLXJlbGVhc2UvZ2l0XFxcIjpcXFwiXjEwLjAuMVxcXCIsXFxcIkB0eXBlcy9jaGFpXFxcIjpcXFwiXjQuMy4wXFxcIixcXFwiQHR5cGVzL21vY2hhXFxcIjpcXFwiXjkuMS4wXFxcIixcXFwiQHR5cGVzL25vZGVcXFwiOlxcXCJeMTcuMC4xOFxcXCIsXFxcImNoYWlcXFwiOlxcXCJeNC4zLjZcXFwiLFxcXCJnaXQtYXV0aG9ycy1jbGlcXFwiOlxcXCJeMS4wLjQwXFxcIixcXFwianNkb21cXFwiOlxcXCJeMTkuMC4wXFxcIixcXFwianNkb20tZ2xvYmFsXFxcIjpcXFwiXjMuMC4yXFxcIixcXFwibW9jaGFcXFwiOlxcXCJeOS4yLjBcXFwiLFxcXCJtb2NrLXNvY2tldFxcXCI6XFxcIjguMC41XFxcIixcXFwicGFyY2VsXFxcIjpcXFwiXjIuNS4wXFxcIixcXFwicGFyY2VsLXRyYW5zZm9ybWVyLXRzYy1zb3VyY2VtYXBzXFxcIjpcXFwiXjEuMC4yXFxcIixcXFwicHJldHRpZXJcXFwiOlxcXCJeMi42LjJcXFwiLFxcXCJzZW1hbnRpYy1yZWxlYXNlXFxcIjpcXFwiXjE5LjAuMlxcXCIsXFxcInN0YW5kYXJkXFxcIjpcXFwiXjE2LjAuNFxcXCIsXFxcInRzLW5vZGVcXFwiOlxcXCJeMTAuNS4wXFxcIixcXFwidHlwZXNjcmlwdFxcXCI6XFxcIl40LjUuNVxcXCJ9LFxcXCJkZXBlbmRlbmNpZXNcXFwiOntcXFwiQHN3Yy9oZWxwZXJzXFxcIjpcXFwiXjAuMy4xM1xcXCIsXFxcImV2ZW50ZW1pdHRlcjNcXFwiOlxcXCJeNC4wLjdcXFwiLFxcXCJwZWVyanMtanMtYmluYXJ5cGFja1xcXCI6XFxcIjEuMC4xXFxcIixcXFwid2VicnRjLWFkYXB0ZXJcXFwiOlxcXCJeNy43LjFcXFwifX1cIik7XG5cblxudmFyICQzMWQxMWE4ZDEyMmNiNGI3JHZhciRfX2V4dGVuZHMgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQxLCBiMSkge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICh7XG4gICAgICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgICAgIH0pIGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24oZCwgYikge1xuICAgICAgICAgICAgZC5fX3Byb3RvX18gPSBiO1xuICAgICAgICB9IHx8IGZ1bmN0aW9uKGQsIGIpIHtcbiAgICAgICAgICAgIGZvcih2YXIgcCBpbiBiKWlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkMSwgYjEpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkO1xuICAgICAgICB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSgpO1xudmFyICQzMWQxMWE4ZDEyMmNiNGI3JHZhciRfX3JlYWQgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fcmVhZCB8fCBmdW5jdGlvbihvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSlhci5wdXNoKHIudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGUgPSB7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgfTtcbiAgICB9IGZpbmFsbHl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgaWYgKGUpIHRocm93IGUuZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciAkMzFkMTFhOGQxMjJjYjRiNyR2YXIkX19zcHJlYWRBcnJheSA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19zcHJlYWRBcnJheSB8fCBmdW5jdGlvbih0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKylpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciAkMzFkMTFhOGQxMjJjYjRiNyR2YXIkX192YWx1ZXMgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fdmFsdWVzIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbyAmJiBvW2krK10sXG4gICAgICAgICAgICAgICAgZG9uZTogIW9cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG4vKipcbiAqIEFuIGFic3RyYWN0aW9uIG9uIHRvcCBvZiBXZWJTb2NrZXRzIHRvIHByb3ZpZGUgZmFzdGVzdFxuICogcG9zc2libGUgY29ubmVjdGlvbiBmb3IgcGVlcnMuXG4gKi8gdmFyICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydCQ0Nzk4OTE3ZGJmMTQ5Yjc5ID0gLyoqIEBjbGFzcyAqLyBmdW5jdGlvbihfc3VwZXIpIHtcbiAgICAkMzFkMTFhOGQxMjJjYjRiNyR2YXIkX19leHRlbmRzKCQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydCQ0Nzk4OTE3ZGJmMTQ5Yjc5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydCQ0Nzk4OTE3ZGJmMTQ5Yjc5KHNlY3VyZSwgaG9zdCwgcG9ydCwgcGF0aCwga2V5LCBwaW5nSW50ZXJ2YWwpIHtcbiAgICAgICAgaWYgKHBpbmdJbnRlcnZhbCA9PT0gdm9pZCAwKSBwaW5nSW50ZXJ2YWwgPSA1MDAwO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5waW5nSW50ZXJ2YWwgPSBwaW5nSW50ZXJ2YWw7XG4gICAgICAgIF90aGlzLl9kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5fbWVzc2FnZXNRdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgd3NQcm90b2NvbCA9IHNlY3VyZSA/IFwid3NzOi8vXCIgOiBcIndzOi8vXCI7XG4gICAgICAgIF90aGlzLl9iYXNlVXJsID0gd3NQcm90b2NvbCArIGhvc3QgKyBcIjpcIiArIHBvcnQgKyBwYXRoICsgXCJwZWVyanM/a2V5PVwiICsga2V5O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydCQ0Nzk4OTE3ZGJmMTQ5Yjc5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKGlkLCB0b2tlbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB2YXIgd3NVcmwgPSBcIlwiLmNvbmNhdCh0aGlzLl9iYXNlVXJsLCBcIiZpZD1cIikuY29uY2F0KGlkLCBcIiZ0b2tlbj1cIikuY29uY2F0KHRva2VuKTtcbiAgICAgICAgaWYgKCEhdGhpcy5fc29ja2V0IHx8ICF0aGlzLl9kaXNjb25uZWN0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fc29ja2V0ID0gbmV3IFdlYlNvY2tldCh3c1VybCArIFwiJnZlcnNpb249XCIgKyAkMGQxZWQ4OTFjNWNiMjdjMCRleHBvcnRzLnZlcnNpb24pO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZGF0YTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlNlcnZlciBtZXNzYWdlIHJlY2VpdmVkOlwiLCBkYXRhKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiSW52YWxpZCBzZXJ2ZXIgbWVzc2FnZVwiLCBldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5lbWl0KCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzYjVjNGE0YjYzNTRmMDIzLk1lc3NhZ2UsIGRhdGEpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9zb2NrZXQub25jbG9zZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2Rpc2Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlNvY2tldCBjbG9zZWQuXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIF90aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgICAgICBfdGhpcy5fZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDNiNWM0YTRiNjM1NGYwMjMuRGlzY29ubmVjdGVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gVGFrZSBjYXJlIG9mIHRoZSBxdWV1ZSBvZiBjb25uZWN0aW9ucyBpZiBuZWNlc3NhcnkgYW5kIG1ha2Ugc3VyZSBQZWVyIGtub3dzXG4gICAgICAgIC8vIHNvY2tldCBpcyBvcGVuLlxuICAgICAgICB0aGlzLl9zb2NrZXQub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuX2Rpc2Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICAgICAgX3RoaXMuX3NlbmRRdWV1ZWRNZXNzYWdlcygpO1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlNvY2tldCBvcGVuXCIpO1xuICAgICAgICAgICAgX3RoaXMuX3NjaGVkdWxlSGVhcnRiZWF0KCk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICAkMzFkMTFhOGQxMjJjYjRiNyRleHBvcnQkNDc5ODkxN2RiZjE0OWI3OS5wcm90b3R5cGUuX3NjaGVkdWxlSGVhcnRiZWF0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuX3dzUGluZ1RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLl9zZW5kSGVhcnRiZWF0KCk7XG4gICAgICAgIH0sIHRoaXMucGluZ0ludGVydmFsKTtcbiAgICB9O1xuICAgICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydCQ0Nzk4OTE3ZGJmMTQ5Yjc5LnByb3RvdHlwZS5fc2VuZEhlYXJ0YmVhdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3dzT3BlbigpKSB7XG4gICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiQ2Fubm90IHNlbmQgaGVhcnRiZWF0LCBiZWNhdXNlIHNvY2tldCBjbG9zZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICB0eXBlOiAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZC5IZWFydGJlYXRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3NvY2tldC5zZW5kKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZUhlYXJ0YmVhdCgpO1xuICAgIH07XG4gICAgLyoqIElzIHRoZSB3ZWJzb2NrZXQgY3VycmVudGx5IG9wZW4/ICovICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydCQ0Nzk4OTE3ZGJmMTQ5Yjc5LnByb3RvdHlwZS5fd3NPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX3NvY2tldCAmJiB0aGlzLl9zb2NrZXQucmVhZHlTdGF0ZSA9PT0gMTtcbiAgICB9O1xuICAgIC8qKiBTZW5kIHF1ZXVlZCBtZXNzYWdlcy4gKi8gJDMxZDExYThkMTIyY2I0YjckZXhwb3J0JDQ3OTg5MTdkYmYxNDliNzkucHJvdG90eXBlLl9zZW5kUXVldWVkTWVzc2FnZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIC8vQ3JlYXRlIGNvcHkgb2YgcXVldWUgYW5kIGNsZWFyIGl0LFxuICAgICAgICAvL2JlY2F1c2Ugc2VuZCBtZXRob2QgcHVzaCB0aGUgbWVzc2FnZSBiYWNrIHRvIHF1ZXVlIGlmIHNtdGggd2lsbCBnbyB3cm9uZ1xuICAgICAgICB2YXIgY29waWVkUXVldWUgPSAkMzFkMTFhOGQxMjJjYjRiNyR2YXIkX19zcHJlYWRBcnJheShbXSwgJDMxZDExYThkMTIyY2I0YjckdmFyJF9fcmVhZCh0aGlzLl9tZXNzYWdlc1F1ZXVlKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLl9tZXNzYWdlc1F1ZXVlID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IodmFyIGNvcGllZFF1ZXVlXzEgPSAkMzFkMTFhOGQxMjJjYjRiNyR2YXIkX192YWx1ZXMoY29waWVkUXVldWUpLCBjb3BpZWRRdWV1ZV8xXzEgPSBjb3BpZWRRdWV1ZV8xLm5leHQoKTsgIWNvcGllZFF1ZXVlXzFfMS5kb25lOyBjb3BpZWRRdWV1ZV8xXzEgPSBjb3BpZWRRdWV1ZV8xLm5leHQoKSl7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBjb3BpZWRRdWV1ZV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlXzFfMSkge1xuICAgICAgICAgICAgZV8xID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXzFfMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoY29waWVkUXVldWVfMV8xICYmICFjb3BpZWRRdWV1ZV8xXzEuZG9uZSAmJiAoX2EgPSBjb3BpZWRRdWV1ZV8xLnJldHVybikpIF9hLmNhbGwoY29waWVkUXVldWVfMSk7XG4gICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogRXhwb3NlZCBzZW5kIGZvciBEQyAmIFBlZXIuICovICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydCQ0Nzk4OTE3ZGJmMTQ5Yjc5LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5fZGlzY29ubmVjdGVkKSByZXR1cm47XG4gICAgICAgIC8vIElmIHdlIGRpZG4ndCBnZXQgYW4gSUQgeWV0LCB3ZSBjYW4ndCB5ZXQgc2VuZCBhbnl0aGluZyBzbyB3ZSBzaG91bGQgcXVldWVcbiAgICAgICAgLy8gdXAgdGhlc2UgbWVzc2FnZXMuXG4gICAgICAgIGlmICghdGhpcy5faWQpIHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VzUXVldWUucHVzaChkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGEudHlwZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzYjVjNGE0YjYzNTRmMDIzLkVycm9yLCBcIkludmFsaWQgbWVzc2FnZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX3dzT3BlbigpKSByZXR1cm47XG4gICAgICAgIHZhciBtZXNzYWdlID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIHRoaXMuX3NvY2tldC5zZW5kKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgJDMxZDExYThkMTIyY2I0YjckZXhwb3J0JDQ3OTg5MTdkYmYxNDliNzkucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaXNjb25uZWN0ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgIH07XG4gICAgJDMxZDExYThkMTIyY2I0YjckZXhwb3J0JDQ3OTg5MTdkYmYxNDliNzkucHJvdG90eXBlLl9jbGVhbnVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvY2tldC5vbm9wZW4gPSB0aGlzLl9zb2NrZXQub25tZXNzYWdlID0gdGhpcy5fc29ja2V0Lm9uY2xvc2UgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fc29ja2V0LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9zb2NrZXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3dzUGluZ1RpbWVyKTtcbiAgICB9O1xuICAgIHJldHVybiAkMzFkMTFhOGQxMjJjYjRiNyRleHBvcnQkNDc5ODkxN2RiZjE0OWI3OTtcbn0oJGFjOWI3NTdkNTExNzhlMTUkZXhwb3J0cy5FdmVudEVtaXR0ZXIpO1xuXG5cbnZhciAkMzUzZGVlMzhmOWFiNTU3YiRleHBvcnRzID0ge307XG5cbiRwYXJjZWwkZXhwb3J0KCQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydHMsIFwiTWVkaWFDb25uZWN0aW9uXCIsICgpID0+ICQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydCQ0YTg0ZTk1YTIzMjRhYzI5LCAodikgPT4gJDM1M2RlZTM4ZjlhYjU1N2IkZXhwb3J0JDRhODRlOTVhMjMyNGFjMjkgPSB2KTtcblxuXG52YXIgJDc3ZjE0ZDNlODE4ODgxNTYkZXhwb3J0cyA9IHt9O1xuXG4kcGFyY2VsJGV4cG9ydCgkNzdmMTRkM2U4MTg4ODE1NiRleHBvcnRzLCBcIk5lZ290aWF0b3JcIiwgKCkgPT4gJDc3ZjE0ZDNlODE4ODgxNTYkZXhwb3J0JDg5ZTZiYjVhZDY0YmY0YSwgKHYpID0+ICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGEgPSB2KTtcblxuXG5cbnZhciAkNzdmMTRkM2U4MTg4ODE1NiR2YXIkX19hc3NpZ24gPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXNzaWduIHx8IGZ1bmN0aW9uKCkge1xuICAgICQ3N2YxNGQzZTgxODg4MTU2JHZhciRfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKyl7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBwIGluIHMpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gJDc3ZjE0ZDNlODE4ODgxNTYkdmFyJF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyICQ3N2YxNGQzZTgxODg4MTU2JHZhciRfX2F3YWl0ZXIgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXdhaXRlciB8fCBmdW5jdGlvbih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgJDc3ZjE0ZDNlODE4ODgxNTYkdmFyJF9fZ2VuZXJhdG9yID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2dlbmVyYXRvciB8fCBmdW5jdGlvbih0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7XG4gICAgICAgIGxhYmVsOiAwLFxuICAgICAgICBzZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTtcbiAgICAgICAgICAgIHJldHVybiB0WzFdO1xuICAgICAgICB9LFxuICAgICAgICB0cnlzOiBbXSxcbiAgICAgICAgb3BzOiBbXVxuICAgIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7XG4gICAgICAgIG5leHQ6IHZlcmIoMCksXG4gICAgICAgIFwidGhyb3dcIjogdmVyYigxKSxcbiAgICAgICAgXCJyZXR1cm5cIjogdmVyYigyKVxuICAgIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAoW1xuICAgICAgICAgICAgICAgIG4sXG4gICAgICAgICAgICAgICAgdlxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZShfKXRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW1xuICAgICAgICAgICAgICAgIG9wWzBdICYgMixcbiAgICAgICAgICAgICAgICB0LnZhbHVlXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgc3dpdGNoKG9wWzBdKXtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICB0ID0gb3A7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCsrO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIF8ubGFiZWwrKztcbiAgICAgICAgICAgICAgICAgICAgeSA9IG9wWzFdO1xuICAgICAgICAgICAgICAgICAgICBvcCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBvcCA9IF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgb3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSBvcFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IHRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ID0gb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5sYWJlbCA9IHRbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wcy5wdXNoKG9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvcCA9IFtcbiAgICAgICAgICAgICAgICA2LFxuICAgICAgICAgICAgICAgIGVcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB5ID0gMDtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgZiA9IHQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxufTtcbi8qKlxuICogTWFuYWdlcyBhbGwgbmVnb3RpYXRpb25zIGJldHdlZW4gUGVlcnMuXG4gKi8gdmFyICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGEgPSAvKiogQGNsYXNzICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGEoY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyBhIFBlZXJDb25uZWN0aW9uIG9iamVjdCBzZXQgdXAgY29ycmVjdGx5IChmb3IgZGF0YSwgbWVkaWEpLiAqLyAkNzdmMTRkM2U4MTg4ODE1NiRleHBvcnQkODllNmJiNWFkNjRiZjRhLnByb3RvdHlwZS5zdGFydENvbm5lY3Rpb24gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBwZWVyQ29ubmVjdGlvbiA9IHRoaXMuX3N0YXJ0UGVlckNvbm5lY3Rpb24oKTtcbiAgICAgICAgLy8gU2V0IHRoZSBjb25uZWN0aW9uJ3MgUEMuXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5wZWVyQ29ubmVjdGlvbiA9IHBlZXJDb25uZWN0aW9uO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uLnR5cGUgPT09ICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzMTU3ZDU3YjQxMzVlM2JjLk1lZGlhICYmIG9wdGlvbnMuX3N0cmVhbSkgdGhpcy5fYWRkVHJhY2tzVG9Db25uZWN0aW9uKG9wdGlvbnMuX3N0cmVhbSwgcGVlckNvbm5lY3Rpb24pO1xuICAgICAgICAvLyBXaGF0IGRvIHdlIG5lZWQgdG8gZG8gbm93P1xuICAgICAgICBpZiAob3B0aW9ucy5vcmlnaW5hdG9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uLnR5cGUgPT09ICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzMTU3ZDU3YjQxMzVlM2JjLkRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb247XG4gICAgICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZDogISFvcHRpb25zLnJlbGlhYmxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YUNoYW5uZWwgPSBwZWVyQ29ubmVjdGlvbi5jcmVhdGVEYXRhQ2hhbm5lbChkYXRhQ29ubmVjdGlvbi5sYWJlbCwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICBkYXRhQ29ubmVjdGlvbi5pbml0aWFsaXplKGRhdGFDaGFubmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX21ha2VPZmZlcigpO1xuICAgICAgICB9IGVsc2UgdGhpcy5oYW5kbGVTRFAoXCJPRkZFUlwiLCBvcHRpb25zLnNkcCk7XG4gICAgfTtcbiAgICAvKiogU3RhcnQgYSBQQy4gKi8gJDc3ZjE0ZDNlODE4ODgxNTYkZXhwb3J0JDg5ZTZiYjVhZDY0YmY0YS5wcm90b3R5cGUuX3N0YXJ0UGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIkNyZWF0aW5nIFJUQ1BlZXJDb25uZWN0aW9uLlwiKTtcbiAgICAgICAgdmFyIHBlZXJDb25uZWN0aW9uID0gbmV3IFJUQ1BlZXJDb25uZWN0aW9uKHRoaXMuY29ubmVjdGlvbi5wcm92aWRlci5vcHRpb25zLmNvbmZpZyk7XG4gICAgICAgIHRoaXMuX3NldHVwTGlzdGVuZXJzKHBlZXJDb25uZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIHBlZXJDb25uZWN0aW9uO1xuICAgIH07XG4gICAgLyoqIFNldCB1cCB2YXJpb3VzIFdlYlJUQyBsaXN0ZW5lcnMuICovICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGEucHJvdG90eXBlLl9zZXR1cExpc3RlbmVycyA9IGZ1bmN0aW9uKHBlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwZWVySWQgPSB0aGlzLmNvbm5lY3Rpb24ucGVlcjtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25JZCA9IHRoaXMuY29ubmVjdGlvbi5jb25uZWN0aW9uSWQ7XG4gICAgICAgIHZhciBjb25uZWN0aW9uVHlwZSA9IHRoaXMuY29ubmVjdGlvbi50eXBlO1xuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0aGlzLmNvbm5lY3Rpb24ucHJvdmlkZXI7XG4gICAgICAgIC8vIElDRSBDQU5ESURBVEVTLlxuICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiTGlzdGVuaW5nIGZvciBJQ0UgY2FuZGlkYXRlcy5cIik7XG4gICAgICAgIHBlZXJDb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICBpZiAoIWV2dC5jYW5kaWRhdGUgfHwgIWV2dC5jYW5kaWRhdGUuY2FuZGlkYXRlKSByZXR1cm47XG4gICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiUmVjZWl2ZWQgSUNFIGNhbmRpZGF0ZXMgZm9yIFwiLmNvbmNhdChwZWVySWQsIFwiOlwiKSwgZXZ0LmNhbmRpZGF0ZSk7XG4gICAgICAgICAgICBwcm92aWRlci5zb2NrZXQuc2VuZCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQuQ2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlOiBldnQuY2FuZGlkYXRlLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb25uZWN0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbklkOiBjb25uZWN0aW9uSWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRzdDogcGVlcklkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcGVlckNvbm5lY3Rpb24ub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN3aXRjaChwZWVyQ29ubmVjdGlvbi5pY2VDb25uZWN0aW9uU3RhdGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmYWlsZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcImljZUNvbm5lY3Rpb25TdGF0ZSBpcyBmYWlsZWQsIGNsb3NpbmcgY29ubmVjdGlvbnMgdG8gXCIgKyBwZWVySWQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25uZWN0aW9uLmVtaXQoXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJOZWdvdGlhdGlvbiBvZiBjb25uZWN0aW9uIHRvIFwiICsgcGVlcklkICsgXCIgZmFpbGVkLlwiKSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNsb3NlZFwiOlxuICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiaWNlQ29ubmVjdGlvblN0YXRlIGlzIGNsb3NlZCwgY2xvc2luZyBjb25uZWN0aW9ucyB0byBcIiArIHBlZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbm5lY3Rpb24uZW1pdChcImVycm9yXCIsIG5ldyBFcnJvcihcIkNvbm5lY3Rpb24gdG8gXCIgKyBwZWVySWQgKyBcIiBjbG9zZWQuXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdGlvbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGlzY29ubmVjdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5sb2coXCJpY2VDb25uZWN0aW9uU3RhdGUgY2hhbmdlZCB0byBkaXNjb25uZWN0ZWQgb24gdGhlIGNvbm5lY3Rpb24gd2l0aCBcIiArIHBlZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24ub25pY2VjYW5kaWRhdGUgPSAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5ub29wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmNvbm5lY3Rpb24uZW1pdChcImljZVN0YXRlQ2hhbmdlZFwiLCBwZWVyQ29ubmVjdGlvbi5pY2VDb25uZWN0aW9uU3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICAvLyBEQVRBQ09OTkVDVElPTi5cbiAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIkxpc3RlbmluZyBmb3IgZGF0YSBjaGFubmVsXCIpO1xuICAgICAgICAvLyBGaXJlZCBiZXR3ZWVuIG9mZmVyIGFuZCBhbnN3ZXIsIHNvIG9wdGlvbnMgc2hvdWxkIGFscmVhZHkgYmUgc2F2ZWRcbiAgICAgICAgLy8gaW4gdGhlIG9wdGlvbnMgaGFzaC5cbiAgICAgICAgcGVlckNvbm5lY3Rpb24ub25kYXRhY2hhbm5lbCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlJlY2VpdmVkIGRhdGEgY2hhbm5lbFwiKTtcbiAgICAgICAgICAgIHZhciBkYXRhQ2hhbm5lbCA9IGV2dC5jaGFubmVsO1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSBwcm92aWRlci5nZXRDb25uZWN0aW9uKHBlZXJJZCwgY29ubmVjdGlvbklkKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uaW5pdGlhbGl6ZShkYXRhQ2hhbm5lbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIE1FRElBQ09OTkVDVElPTi5cbiAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIkxpc3RlbmluZyBmb3IgcmVtb3RlIHN0cmVhbVwiKTtcbiAgICAgICAgcGVlckNvbm5lY3Rpb24ub250cmFjayA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlJlY2VpdmVkIHJlbW90ZSBzdHJlYW1cIik7XG4gICAgICAgICAgICB2YXIgc3RyZWFtID0gZXZ0LnN0cmVhbXNbMF07XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHByb3ZpZGVyLmdldENvbm5lY3Rpb24ocGVlcklkLCBjb25uZWN0aW9uSWQpO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24udHlwZSA9PT0gJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDMxNTdkNTdiNDEzNWUzYmMuTWVkaWEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVkaWFDb25uZWN0aW9uID0gY29ubmVjdGlvbjtcbiAgICAgICAgICAgICAgICBfdGhpcy5fYWRkU3RyZWFtVG9NZWRpYUNvbm5lY3Rpb24oc3RyZWFtLCBtZWRpYUNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgJDc3ZjE0ZDNlODE4ODgxNTYkZXhwb3J0JDg5ZTZiYjVhZDY0YmY0YS5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiQ2xlYW5pbmcgdXAgUGVlckNvbm5lY3Rpb24gdG8gXCIgKyB0aGlzLmNvbm5lY3Rpb24ucGVlcik7XG4gICAgICAgIHZhciBwZWVyQ29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbi5wZWVyQ29ubmVjdGlvbjtcbiAgICAgICAgaWYgKCFwZWVyQ29ubmVjdGlvbikgcmV0dXJuO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucGVlckNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAvL3Vuc3Vic2NyaWJlIGZyb20gYWxsIFBlZXJDb25uZWN0aW9uJ3MgZXZlbnRzXG4gICAgICAgIHBlZXJDb25uZWN0aW9uLm9uaWNlY2FuZGlkYXRlID0gcGVlckNvbm5lY3Rpb24ub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgPSBwZWVyQ29ubmVjdGlvbi5vbmRhdGFjaGFubmVsID0gcGVlckNvbm5lY3Rpb24ub250cmFjayA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIHZhciBwZWVyQ29ubmVjdGlvbk5vdENsb3NlZCA9IHBlZXJDb25uZWN0aW9uLnNpZ25hbGluZ1N0YXRlICE9PSBcImNsb3NlZFwiO1xuICAgICAgICB2YXIgZGF0YUNoYW5uZWxOb3RDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbi50eXBlID09PSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkMzE1N2Q1N2I0MTM1ZTNiYy5EYXRhKSB7XG4gICAgICAgICAgICB2YXIgZGF0YUNvbm5lY3Rpb24gPSB0aGlzLmNvbm5lY3Rpb247XG4gICAgICAgICAgICB2YXIgZGF0YUNoYW5uZWwgPSBkYXRhQ29ubmVjdGlvbi5kYXRhQ2hhbm5lbDtcbiAgICAgICAgICAgIGlmIChkYXRhQ2hhbm5lbCkgZGF0YUNoYW5uZWxOb3RDbG9zZWQgPSAhIWRhdGFDaGFubmVsLnJlYWR5U3RhdGUgJiYgZGF0YUNoYW5uZWwucmVhZHlTdGF0ZSAhPT0gXCJjbG9zZWRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVlckNvbm5lY3Rpb25Ob3RDbG9zZWQgfHwgZGF0YUNoYW5uZWxOb3RDbG9zZWQpIHBlZXJDb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgfTtcbiAgICAkNzdmMTRkM2U4MTg4ODE1NiRleHBvcnQkODllNmJiNWFkNjRiZjRhLnByb3RvdHlwZS5fbWFrZU9mZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkNzdmMTRkM2U4MTg4ODE1NiR2YXIkX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGVlckNvbm5lY3Rpb24sIHByb3ZpZGVyLCBvZmZlciwgcGF5bG9hZCwgZGF0YUNvbm5lY3Rpb24sIGVycl8yLCBlcnJfMV8xO1xuICAgICAgICAgICAgcmV0dXJuICQ3N2YxNGQzZTgxODg4MTU2JHZhciRfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChfYS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uLnBlZXJDb25uZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSB0aGlzLmNvbm5lY3Rpb24ucHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCAvKnlpZWxkKi8gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLmNyZWF0ZU9mZmVyKHRoaXMuY29ubmVjdGlvbi5vcHRpb25zLmNvbnN0cmFpbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiQ3JlYXRlZCBvZmZlci5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uLm9wdGlvbnMuc2RwVHJhbnNmb3JtICYmIHR5cGVvZiB0aGlzLmNvbm5lY3Rpb24ub3B0aW9ucy5zZHBUcmFuc2Zvcm0gPT09IFwiZnVuY3Rpb25cIikgb2ZmZXIuc2RwID0gdGhpcy5jb25uZWN0aW9uLm9wdGlvbnMuc2RwVHJhbnNmb3JtKG9mZmVyLnNkcCkgfHwgb2ZmZXIuc2RwO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQgLyp5aWVsZCovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwZWVyQ29ubmVjdGlvbi5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlNldCBsb2NhbERlc2NyaXB0aW9uOlwiLCBvZmZlciwgXCJmb3I6XCIuY29uY2F0KHRoaXMuY29ubmVjdGlvbi5wZWVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkcDogb2ZmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy5jb25uZWN0aW9uLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbklkOiB0aGlzLmNvbm5lY3Rpb24uY29ubmVjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB0aGlzLmNvbm5lY3Rpb24ubWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlcjogJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuYnJvd3NlclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24udHlwZSA9PT0gJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDMxNTdkNTdiNDEzNWUzYmMuRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSAkNzdmMTRkM2U4MTg4ODE1NiR2YXIkX19hc3NpZ24oJDc3ZjE0ZDNlODE4ODgxNTYkdmFyJF9fYXNzaWduKHt9LCBwYXlsb2FkKSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZGF0YUNvbm5lY3Rpb24ubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGlhYmxlOiBkYXRhQ29ubmVjdGlvbi5yZWxpYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXphdGlvbjogZGF0YUNvbm5lY3Rpb24uc2VyaWFsaXphdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuc29ja2V0LnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkLk9mZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0OiB0aGlzLmNvbm5lY3Rpb24ucGVlclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMgLypicmVhayovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGludmVzdGlnYXRlIHdoeSBfbWFrZU9mZmVyIGlzIGJlaW5nIGNhbGxlZCBmcm9tIHRoZSBhbnN3ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJfMiAhPSBcIk9wZXJhdGlvbkVycm9yOiBGYWlsZWQgdG8gc2V0IGxvY2FsIG9mZmVyIHNkcDogQ2FsbGVkIGluIHdyb25nIHN0YXRlOiBrSGF2ZVJlbW90ZU9mZmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5lbWl0RXJyb3IoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuV2ViUlRDLCBlcnJfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIkZhaWxlZCB0byBzZXRMb2NhbERlc2NyaXB0aW9uLCBcIiwgZXJyXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzIC8qYnJlYWsqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzIC8qYnJlYWsqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzFfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmVtaXRFcnJvcigkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZi5XZWJSVEMsIGVycl8xXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIkZhaWxlZCB0byBjcmVhdGVPZmZlciwgXCIsIGVycl8xXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzIC8qYnJlYWsqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIC8qcmV0dXJuKi8gXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGEucHJvdG90eXBlLl9tYWtlQW5zd2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkNzdmMTRkM2U4MTg4ODE1NiR2YXIkX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGVlckNvbm5lY3Rpb24sIHByb3ZpZGVyLCBhbnN3ZXIsIGVycl8zLCBlcnJfMV8yO1xuICAgICAgICAgICAgcmV0dXJuICQ3N2YxNGQzZTgxODg4MTU2JHZhciRfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChfYS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uLnBlZXJDb25uZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSB0aGlzLmNvbm5lY3Rpb24ucHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCAvKnlpZWxkKi8gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLmNyZWF0ZUFuc3dlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiQ3JlYXRlZCBhbnN3ZXIuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbi5vcHRpb25zLnNkcFRyYW5zZm9ybSAmJiB0eXBlb2YgdGhpcy5jb25uZWN0aW9uLm9wdGlvbnMuc2RwVHJhbnNmb3JtID09PSBcImZ1bmN0aW9uXCIpIGFuc3dlci5zZHAgPSB0aGlzLmNvbm5lY3Rpb24ub3B0aW9ucy5zZHBUcmFuc2Zvcm0oYW5zd2VyLnNkcCkgfHwgYW5zd2VyLnNkcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0IC8qeWllbGQqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihhbnN3ZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiU2V0IGxvY2FsRGVzY3JpcHRpb246XCIsIGFuc3dlciwgXCJmb3I6XCIuY29uY2F0KHRoaXMuY29ubmVjdGlvbi5wZWVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5zb2NrZXQuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQuQW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2RwOiBhbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuY29ubmVjdGlvbi50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uSWQ6IHRoaXMuY29ubmVjdGlvbi5jb25uZWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyb3dzZXI6ICQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiLmJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdDogdGhpcy5jb25uZWN0aW9uLnBlZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzIC8qYnJlYWsqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5lbWl0RXJyb3IoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuV2ViUlRDLCBlcnJfMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiRmFpbGVkIHRvIHNldExvY2FsRGVzY3JpcHRpb24sIFwiLCBlcnJfMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMgLypicmVhayovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA2XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMgLypicmVhayovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIuZW1pdEVycm9yKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmLldlYlJUQywgZXJyXzFfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiRmFpbGVkIHRvIGNyZWF0ZSBhbnN3ZXIsIFwiLCBlcnJfMV8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyAvKmJyZWFrKi8gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMiAvKnJldHVybiovIFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogSGFuZGxlIGFuIFNEUC4gKi8gJDc3ZjE0ZDNlODE4ODgxNTYkZXhwb3J0JDg5ZTZiYjVhZDY0YmY0YS5wcm90b3R5cGUuaGFuZGxlU0RQID0gZnVuY3Rpb24odHlwZSwgc2RwKSB7XG4gICAgICAgIHJldHVybiAkNzdmMTRkM2U4MTg4ODE1NiR2YXIkX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGVlckNvbm5lY3Rpb24sIHByb3ZpZGVyLCBzZWxmLCBlcnJfNDtcbiAgICAgICAgICAgIHJldHVybiAkNzdmMTRkM2U4MTg4ODE1NiR2YXIkX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goX2EubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZHAgPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHNkcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZWVyQ29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbi5wZWVyQ29ubmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gdGhpcy5jb25uZWN0aW9uLnByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlNldHRpbmcgcmVtb3RlIGRlc2NyaXB0aW9uXCIsIHNkcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDZcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0IC8qeWllbGQqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24uc2V0UmVtb3RlRGVzY3JpcHRpb24oc2RwKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIlNldCByZW1vdGVEZXNjcmlwdGlvbjpcIi5jb25jYXQodHlwZSwgXCIgZm9yOlwiKS5jb25jYXQodGhpcy5jb25uZWN0aW9uLnBlZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGUgPT09IFwiT0ZGRVJcIikpIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMyAvKmJyZWFrKi8gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDRcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQgLyp5aWVsZCovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9tYWtlQW5zd2VyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzIC8qYnJlYWsqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlci5lbWl0RXJyb3IoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuV2ViUlRDLCBlcnJfNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiRmFpbGVkIHRvIHNldFJlbW90ZURlc2NyaXB0aW9uLCBcIiwgZXJyXzQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzIC8qYnJlYWsqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIC8qcmV0dXJuKi8gXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBIYW5kbGUgYSBjYW5kaWRhdGUuICovICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGEucHJvdG90eXBlLmhhbmRsZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGljZSkge1xuICAgICAgICByZXR1cm4gJDc3ZjE0ZDNlODE4ODgxNTYkdmFyJF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIFByb21pc2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSwgc2RwTUxpbmVJbmRleCwgc2RwTWlkLCBwZWVyQ29ubmVjdGlvbiwgcHJvdmlkZXIsIGVycl81O1xuICAgICAgICAgICAgcmV0dXJuICQ3N2YxNGQzZTgxODg4MTU2JHZhciRfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbihfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChfYS5sYWJlbCl7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5sb2coXCJoYW5kbGVDYW5kaWRhdGU6XCIsIGljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSBpY2UuY2FuZGlkYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2RwTUxpbmVJbmRleCA9IGljZS5zZHBNTGluZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2RwTWlkID0gaWNlLnNkcE1pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uLnBlZXJDb25uZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXIgPSB0aGlzLmNvbm5lY3Rpb24ucHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNCAvKnlpZWxkKi8gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlZXJDb25uZWN0aW9uLmFkZEljZUNhbmRpZGF0ZShuZXcgUlRDSWNlQ2FuZGlkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2RwTWlkOiBzZHBNaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNkcE1MaW5lSW5kZXg6IHNkcE1MaW5lSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZTogY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiQWRkZWQgSUNFIGNhbmRpZGF0ZSBmb3I6XCIuY29uY2F0KHRoaXMuY29ubmVjdGlvbi5wZWVyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMgLypicmVhayovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0XG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfNSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyLmVtaXRFcnJvcigkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZi5XZWJSVEMsIGVycl81KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5sb2coXCJGYWlsZWQgdG8gaGFuZGxlQ2FuZGlkYXRlLCBcIiwgZXJyXzUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAzIC8qYnJlYWsqLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIC8qcmV0dXJuKi8gXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGEucHJvdG90eXBlLl9hZGRUcmFja3NUb0Nvbm5lY3Rpb24gPSBmdW5jdGlvbihzdHJlYW0sIHBlZXJDb25uZWN0aW9uKSB7XG4gICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5sb2coXCJhZGQgdHJhY2tzIGZyb20gc3RyZWFtIFwiLmNvbmNhdChzdHJlYW0uaWQsIFwiIHRvIHBlZXIgY29ubmVjdGlvblwiKSk7XG4gICAgICAgIGlmICghcGVlckNvbm5lY3Rpb24uYWRkVHJhY2spIHJldHVybiAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQuZXJyb3IoXCJZb3VyIGJyb3dzZXIgZG9lcyd0IHN1cHBvcnQgUlRDUGVlckNvbm5lY3Rpb24jYWRkVHJhY2suIElnbm9yZWQuXCIpO1xuICAgICAgICBzdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbih0cmFjaykge1xuICAgICAgICAgICAgcGVlckNvbm5lY3Rpb24uYWRkVHJhY2sodHJhY2ssIHN0cmVhbSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgJDc3ZjE0ZDNlODE4ODgxNTYkZXhwb3J0JDg5ZTZiYjVhZDY0YmY0YS5wcm90b3R5cGUuX2FkZFN0cmVhbVRvTWVkaWFDb25uZWN0aW9uID0gZnVuY3Rpb24oc3RyZWFtLCBtZWRpYUNvbm5lY3Rpb24pIHtcbiAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcImFkZCBzdHJlYW0gXCIuY29uY2F0KHN0cmVhbS5pZCwgXCIgdG8gbWVkaWEgY29ubmVjdGlvbiBcIikuY29uY2F0KG1lZGlhQ29ubmVjdGlvbi5jb25uZWN0aW9uSWQpKTtcbiAgICAgICAgbWVkaWFDb25uZWN0aW9uLmFkZFN0cmVhbShzdHJlYW0pO1xuICAgIH07XG4gICAgcmV0dXJuICQ3N2YxNGQzZTgxODg4MTU2JGV4cG9ydCQ4OWU2YmI1YWQ2NGJmNGE7XG59KCk7XG5cblxuXG52YXIgJDBiM2IzMzJmZDg2YzUyMDIkZXhwb3J0cyA9IHt9O1xuXG4kcGFyY2VsJGV4cG9ydCgkMGIzYjMzMmZkODZjNTIwMiRleHBvcnRzLCBcIkJhc2VDb25uZWN0aW9uXCIsICgpID0+ICQwYjNiMzMyZmQ4NmM1MjAyJGV4cG9ydCQyM2EyYTY4MjgzYzI0ZDgwLCAodikgPT4gJDBiM2IzMzJmZDg2YzUyMDIkZXhwb3J0JDIzYTJhNjgyODNjMjRkODAgPSB2KTtcblxudmFyICQwYjNiMzMyZmQ4NmM1MjAyJHZhciRfX2V4dGVuZHMgPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcyB8fCBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQxLCBiMSkge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICh7XG4gICAgICAgICAgICBfX3Byb3RvX186IFtdXG4gICAgICAgIH0pIGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24oZCwgYikge1xuICAgICAgICAgICAgZC5fX3Byb3RvX18gPSBiO1xuICAgICAgICB9IHx8IGZ1bmN0aW9uKGQsIGIpIHtcbiAgICAgICAgICAgIGZvcih2YXIgcCBpbiBiKWlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkMSwgYjEpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQsIGIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkO1xuICAgICAgICB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSgpO1xudmFyICQwYjNiMzMyZmQ4NmM1MjAyJGV4cG9ydCQyM2EyYTY4MjgzYzI0ZDgwID0gLyoqIEBjbGFzcyAqLyBmdW5jdGlvbihfc3VwZXIpIHtcbiAgICAkMGIzYjMzMmZkODZjNTIwMiR2YXIkX19leHRlbmRzKCQwYjNiMzMyZmQ4NmM1MjAyJGV4cG9ydCQyM2EyYTY4MjgzYzI0ZDgwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uICQwYjNiMzMyZmQ4NmM1MjAyJGV4cG9ydCQyM2EyYTY4MjgzYzI0ZDgwKHBlZXIsIHByb3ZpZGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBlZXIgPSBwZWVyO1xuICAgICAgICBfdGhpcy5wcm92aWRlciA9IHByb3ZpZGVyO1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuX29wZW4gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMubWV0YWRhdGEgPSBvcHRpb25zLm1ldGFkYXRhO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkMGIzYjMzMmZkODZjNTIwMiRleHBvcnQkMjNhMmE2ODI4M2MyNGQ4MC5wcm90b3R5cGUsIFwib3BlblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiAkMGIzYjMzMmZkODZjNTIwMiRleHBvcnQkMjNhMmE2ODI4M2MyNGQ4MDtcbn0oJGFjOWI3NTdkNTExNzhlMTUkZXhwb3J0cy5FdmVudEVtaXR0ZXIpO1xuXG5cbnZhciAkMzUzZGVlMzhmOWFiNTU3YiR2YXIkX19leHRlbmRzID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMgfHwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkMSwgYjEpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoe1xuICAgICAgICAgICAgX19wcm90b19fOiBbXVxuICAgICAgICB9KSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uKGQsIGIpIHtcbiAgICAgICAgICAgIGQuX19wcm90b19fID0gYjtcbiAgICAgICAgfSB8fCBmdW5jdGlvbihkLCBiKSB7XG4gICAgICAgICAgICBmb3IodmFyIHAgaW4gYilpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZDEsIGIxKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbihkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZDtcbiAgICAgICAgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0oKTtcbnZhciAkMzUzZGVlMzhmOWFiNTU3YiR2YXIkX19hc3NpZ24gPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXNzaWduIHx8IGZ1bmN0aW9uKCkge1xuICAgICQzNTNkZWUzOGY5YWI1NTdiJHZhciRfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKyl7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBwIGluIHMpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gJDM1M2RlZTM4ZjlhYjU1N2IkdmFyJF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyICQzNTNkZWUzOGY5YWI1NTdiJHZhciRfX3ZhbHVlcyA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX192YWx1ZXMgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBvICYmIG9baSsrXSxcbiAgICAgICAgICAgICAgICBkb25lOiAhb1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbi8qKlxuICogV3JhcHMgdGhlIHN0cmVhbWluZyBpbnRlcmZhY2UgYmV0d2VlbiB0d28gUGVlcnMuXG4gKi8gdmFyICQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydCQ0YTg0ZTk1YTIzMjRhYzI5ID0gLyoqIEBjbGFzcyAqLyBmdW5jdGlvbihfc3VwZXIpIHtcbiAgICAkMzUzZGVlMzhmOWFiNTU3YiR2YXIkX19leHRlbmRzKCQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydCQ0YTg0ZTk1YTIzMjRhYzI5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uICQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydCQ0YTg0ZTk1YTIzMjRhYzI5KHBlZXJJZCwgcHJvdmlkZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcGVlcklkLCBwcm92aWRlciwgb3B0aW9ucykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2xvY2FsU3RyZWFtID0gX3RoaXMub3B0aW9ucy5fc3RyZWFtO1xuICAgICAgICBfdGhpcy5jb25uZWN0aW9uSWQgPSBfdGhpcy5vcHRpb25zLmNvbm5lY3Rpb25JZCB8fCAkMzUzZGVlMzhmOWFiNTU3YiRleHBvcnQkNGE4NGU5NWEyMzI0YWMyOS5JRF9QUkVGSVggKyAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5yYW5kb21Ub2tlbigpO1xuICAgICAgICBfdGhpcy5fbmVnb3RpYXRvciA9IG5ldyAkNzdmMTRkM2U4MTg4ODE1NiRleHBvcnRzLk5lZ290aWF0b3IoX3RoaXMpO1xuICAgICAgICBpZiAoX3RoaXMuX2xvY2FsU3RyZWFtKSBfdGhpcy5fbmVnb3RpYXRvci5zdGFydENvbm5lY3Rpb24oe1xuICAgICAgICAgICAgX3N0cmVhbTogX3RoaXMuX2xvY2FsU3RyZWFtLFxuICAgICAgICAgICAgb3JpZ2luYXRvcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoJDM1M2RlZTM4ZjlhYjU1N2IkZXhwb3J0JDRhODRlOTVhMjMyNGFjMjkucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzMTU3ZDU3YjQxMzVlM2JjLk1lZGlhO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydCQ0YTg0ZTk1YTIzMjRhYzI5LnByb3RvdHlwZSwgXCJsb2NhbFN0cmVhbVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9jYWxTdHJlYW07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoJDM1M2RlZTM4ZjlhYjU1N2IkZXhwb3J0JDRhODRlOTVhMjMyNGFjMjkucHJvdG90eXBlLCBcInJlbW90ZVN0cmVhbVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVtb3RlU3RyZWFtO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgJDM1M2RlZTM4ZjlhYjU1N2IkZXhwb3J0JDRhODRlOTVhMjMyNGFjMjkucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHJlbW90ZVN0cmVhbSkge1xuICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiUmVjZWl2aW5nIHN0cmVhbVwiLCByZW1vdGVTdHJlYW0pO1xuICAgICAgICB0aGlzLl9yZW1vdGVTdHJlYW0gPSByZW1vdGVTdHJlYW07XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZW1pdC5jYWxsKHRoaXMsIFwic3RyZWFtXCIsIHJlbW90ZVN0cmVhbSk7IC8vIFNob3VsZCB3ZSBjYWxsIHRoaXMgYG9wZW5gP1xuICAgIH07XG4gICAgJDM1M2RlZTM4ZjlhYjU1N2IkZXhwb3J0JDRhODRlOTVhMjMyNGFjMjkucHJvdG90eXBlLmhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHZhciB0eXBlID0gbWVzc2FnZS50eXBlO1xuICAgICAgICB2YXIgcGF5bG9hZCA9IG1lc3NhZ2UucGF5bG9hZDtcbiAgICAgICAgc3dpdGNoKG1lc3NhZ2UudHlwZSl7XG4gICAgICAgICAgICBjYXNlICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkLkFuc3dlcjpcbiAgICAgICAgICAgICAgICAvLyBGb3J3YXJkIHRvIG5lZ290aWF0b3JcbiAgICAgICAgICAgICAgICB0aGlzLl9uZWdvdGlhdG9yLmhhbmRsZVNEUCh0eXBlLCBwYXlsb2FkLnNkcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCRhZGI0YTE3NTRkYTZmMTBkLkNhbmRpZGF0ZTpcbiAgICAgICAgICAgICAgICB0aGlzLl9uZWdvdGlhdG9yLmhhbmRsZUNhbmRpZGF0ZShwYXlsb2FkLmNhbmRpZGF0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC53YXJuKFwiVW5yZWNvZ25pemVkIG1lc3NhZ2UgdHlwZTpcIi5jb25jYXQodHlwZSwgXCIgZnJvbSBwZWVyOlwiKS5jb25jYXQodGhpcy5wZWVyKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydCQ0YTg0ZTk1YTIzMjRhYzI5LnByb3RvdHlwZS5hbnN3ZXIgPSBmdW5jdGlvbihzdHJlYW0sIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMuX2xvY2FsU3RyZWFtKSB7XG4gICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQud2FybihcIkxvY2FsIHN0cmVhbSBhbHJlYWR5IGV4aXN0cyBvbiB0aGlzIE1lZGlhQ29ubmVjdGlvbi4gQXJlIHlvdSBhbnN3ZXJpbmcgYSBjYWxsIHR3aWNlP1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZHBUcmFuc2Zvcm0pIHRoaXMub3B0aW9ucy5zZHBUcmFuc2Zvcm0gPSBvcHRpb25zLnNkcFRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy5fbmVnb3RpYXRvci5zdGFydENvbm5lY3Rpb24oJDM1M2RlZTM4ZjlhYjU1N2IkdmFyJF9fYXNzaWduKCQzNTNkZWUzOGY5YWI1NTdiJHZhciRfX2Fzc2lnbih7fSwgdGhpcy5vcHRpb25zLl9wYXlsb2FkKSwge1xuICAgICAgICAgICAgX3N0cmVhbTogc3RyZWFtXG4gICAgICAgIH0pKTtcbiAgICAgICAgLy8gUmV0cmlldmUgbG9zdCBtZXNzYWdlcyBzdG9yZWQgYmVjYXVzZSBQZWVyQ29ubmVjdGlvbiBub3Qgc2V0IHVwLlxuICAgICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLnByb3ZpZGVyLl9nZXRNZXNzYWdlcyh0aGlzLmNvbm5lY3Rpb25JZCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IodmFyIG1lc3NhZ2VzXzEgPSAkMzUzZGVlMzhmOWFiNTU3YiR2YXIkX192YWx1ZXMobWVzc2FnZXMpLCBtZXNzYWdlc18xXzEgPSBtZXNzYWdlc18xLm5leHQoKTsgIW1lc3NhZ2VzXzFfMS5kb25lOyBtZXNzYWdlc18xXzEgPSBtZXNzYWdlc18xLm5leHQoKSl7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBtZXNzYWdlc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlXzFfMSkge1xuICAgICAgICAgICAgZV8xID0ge1xuICAgICAgICAgICAgICAgIGVycm9yOiBlXzFfMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZXNfMV8xICYmICFtZXNzYWdlc18xXzEuZG9uZSAmJiAoX2EgPSBtZXNzYWdlc18xLnJldHVybikpIF9hLmNhbGwobWVzc2FnZXNfMSk7XG4gICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wZW4gPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhwb3NlZCBmdW5jdGlvbmFsaXR5IGZvciB1c2Vycy5cbiAgICAgKi8gLyoqIEFsbG93cyB1c2VyIHRvIGNsb3NlIGNvbm5lY3Rpb24uICovICQzNTNkZWUzOGY5YWI1NTdiJGV4cG9ydCQ0YTg0ZTk1YTIzMjRhYzI5LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fbmVnb3RpYXRvcikge1xuICAgICAgICAgICAgdGhpcy5fbmVnb3RpYXRvci5jbGVhbnVwKCk7XG4gICAgICAgICAgICB0aGlzLl9uZWdvdGlhdG9yID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2NhbFN0cmVhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3JlbW90ZVN0cmVhbSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyLl9yZW1vdmVDb25uZWN0aW9uKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuX3N0cmVhbSkgdGhpcy5vcHRpb25zLl9zdHJlYW0gPSBudWxsO1xuICAgICAgICBpZiAoIXRoaXMub3BlbikgcmV0dXJuO1xuICAgICAgICB0aGlzLl9vcGVuID0gZmFsc2U7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZW1pdC5jYWxsKHRoaXMsIFwiY2xvc2VcIik7XG4gICAgfTtcbiAgICAkMzUzZGVlMzhmOWFiNTU3YiRleHBvcnQkNGE4NGU5NWEyMzI0YWMyOS5JRF9QUkVGSVggPSBcIm1jX1wiO1xuICAgIHJldHVybiAkMzUzZGVlMzhmOWFiNTU3YiRleHBvcnQkNGE4NGU5NWEyMzI0YWMyOTtcbn0oJDBiM2IzMzJmZDg2YzUyMDIkZXhwb3J0cy5CYXNlQ29ubmVjdGlvbik7XG5cblxudmFyICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydHMgPSB7fTtcblxuJHBhcmNlbCRleHBvcnQoJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0cywgXCJEYXRhQ29ubmVjdGlvblwiLCAoKSA9PiAkMzM1NjE3MGQ3YmNlN2YyMCRleHBvcnQkZDM2NWY3YWQ5ZDdkZjljOSwgKHYpID0+ICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5ID0gdik7XG5cblxuXG5cblxudmFyICQzMDE0ZDg2MmRjYzk5NDZiJGV4cG9ydHMgPSB7fTtcblxuJHBhcmNlbCRleHBvcnQoJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0cywgXCJFbmNvZGluZ1F1ZXVlXCIsICgpID0+ICQzMDE0ZDg2MmRjYzk5NDZiJGV4cG9ydCRjNjkxM2FlMGVkNjg3MDM4LCAodikgPT4gJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0JGM2OTEzYWUwZWQ2ODcwMzggPSB2KTtcblxuXG52YXIgJDMwMTRkODYyZGNjOTk0NmIkdmFyJF9fZXh0ZW5kcyA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzIHx8IGZ1bmN0aW9uKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZDEsIGIxKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKHtcbiAgICAgICAgICAgIF9fcHJvdG9fXzogW11cbiAgICAgICAgfSkgaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbihkLCBiKSB7XG4gICAgICAgICAgICBkLl9fcHJvdG9fXyA9IGI7XG4gICAgICAgIH0gfHwgZnVuY3Rpb24oZCwgYikge1xuICAgICAgICAgICAgZm9yKHZhciBwIGluIGIpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQxLCBiMSk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7XG4gICAgICAgIH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KCk7XG52YXIgJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0JGM2OTEzYWUwZWQ2ODcwMzggPSAvKiogQGNsYXNzICovIGZ1bmN0aW9uKF9zdXBlcikge1xuICAgICQzMDE0ZDg2MmRjYzk5NDZiJHZhciRfX2V4dGVuZHMoJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0JGM2OTEzYWUwZWQ2ODcwMzgsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0JGM2OTEzYWUwZWQ2ODcwMzgoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBfdGhpcy5fcXVldWUgPSBbXTtcbiAgICAgICAgX3RoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgIF90aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZXZ0LnRhcmdldCkgX3RoaXMuZW1pdChcImRvbmVcIiwgZXZ0LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgX3RoaXMuZG9OZXh0VGFzaygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5maWxlUmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5lcnJvcihcIkVuY29kaW5nUXVldWUgZXJyb3I6XCIsIGV2dCk7XG4gICAgICAgICAgICBfdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgX3RoaXMuZW1pdChcImVycm9yXCIsIGV2dCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQzMDE0ZDg2MmRjYzk5NDZiJGV4cG9ydCRjNjkxM2FlMGVkNjg3MDM4LnByb3RvdHlwZSwgXCJxdWV1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcXVldWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0JGM2OTEzYWUwZWQ2ODcwMzgucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVldWUubGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQzMDE0ZDg2MmRjYzk5NDZiJGV4cG9ydCRjNjkxM2FlMGVkNjg3MDM4LnByb3RvdHlwZSwgXCJwcm9jZXNzaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzaW5nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0JGM2OTEzYWUwZWQ2ODcwMzgucHJvdG90eXBlLmVucXVlID0gZnVuY3Rpb24oYmxvYikge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goYmxvYik7XG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5kb05leHRUYXNrKCk7XG4gICAgfTtcbiAgICAkMzAxNGQ4NjJkY2M5OTQ2YiRleHBvcnQkYzY5MTNhZTBlZDY4NzAzOC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmZpbGVSZWFkZXIuYWJvcnQoKTtcbiAgICAgICAgdGhpcy5fcXVldWUgPSBbXTtcbiAgICB9O1xuICAgICQzMDE0ZDg2MmRjYzk5NDZiJGV4cG9ydCRjNjkxM2FlMGVkNjg3MDM4LnByb3RvdHlwZS5kb05leHRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNpemUgPT09IDApIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2luZykgcmV0dXJuO1xuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHRoaXMucXVldWUuc2hpZnQoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gJDMwMTRkODYyZGNjOTk0NmIkZXhwb3J0JGM2OTEzYWUwZWQ2ODcwMzg7XG59KCRhYzliNzU3ZDUxMTc4ZTE1JGV4cG9ydHMuRXZlbnRFbWl0dGVyKTtcblxuXG52YXIgJDMzNTYxNzBkN2JjZTdmMjAkdmFyJF9fZXh0ZW5kcyA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzIHx8IGZ1bmN0aW9uKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZDEsIGIxKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKHtcbiAgICAgICAgICAgIF9fcHJvdG9fXzogW11cbiAgICAgICAgfSkgaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbihkLCBiKSB7XG4gICAgICAgICAgICBkLl9fcHJvdG9fXyA9IGI7XG4gICAgICAgIH0gfHwgZnVuY3Rpb24oZCwgYikge1xuICAgICAgICAgICAgZm9yKHZhciBwIGluIGIpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQxLCBiMSk7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7XG4gICAgICAgIH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KCk7XG52YXIgJDMzNTYxNzBkN2JjZTdmMjAkdmFyJF9fdmFsdWVzID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX3ZhbHVlcyB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG8gJiYgb1tpKytdLFxuICAgICAgICAgICAgICAgIGRvbmU6ICFvXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuLyoqXG4gKiBXcmFwcyBhIERhdGFDaGFubmVsIGJldHdlZW4gdHdvIFBlZXJzLlxuICovIHZhciAkMzM1NjE3MGQ3YmNlN2YyMCRleHBvcnQkZDM2NWY3YWQ5ZDdkZjljOSA9IC8qKiBAY2xhc3MgKi8gZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgJDMzNTYxNzBkN2JjZTdmMjAkdmFyJF9fZXh0ZW5kcygkMzM1NjE3MGQ3YmNlN2YyMCRleHBvcnQkZDM2NWY3YWQ5ZDdkZjljOSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiAkMzM1NjE3MGQ3YmNlN2YyMCRleHBvcnQkZDM2NWY3YWQ5ZDdkZjljOShwZWVySWQsIHByb3ZpZGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHBlZXJJZCwgcHJvdmlkZXIsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5O1xuICAgICAgICBfdGhpcy5wYXJzZSA9IEpTT04ucGFyc2U7XG4gICAgICAgIF90aGlzLl9idWZmZXIgPSBbXTtcbiAgICAgICAgX3RoaXMuX2J1ZmZlclNpemUgPSAwO1xuICAgICAgICBfdGhpcy5fYnVmZmVyaW5nID0gZmFsc2U7XG4gICAgICAgIF90aGlzLl9jaHVua2VkRGF0YSA9IHt9O1xuICAgICAgICBfdGhpcy5fZW5jb2RpbmdRdWV1ZSA9IG5ldyAkMzAxNGQ4NjJkY2M5OTQ2YiRleHBvcnRzLkVuY29kaW5nUXVldWUoKTtcbiAgICAgICAgX3RoaXMuY29ubmVjdGlvbklkID0gX3RoaXMub3B0aW9ucy5jb25uZWN0aW9uSWQgfHwgJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkuSURfUFJFRklYICsgJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIucmFuZG9tVG9rZW4oKTtcbiAgICAgICAgX3RoaXMubGFiZWwgPSBfdGhpcy5vcHRpb25zLmxhYmVsIHx8IF90aGlzLmNvbm5lY3Rpb25JZDtcbiAgICAgICAgX3RoaXMuc2VyaWFsaXphdGlvbiA9IF90aGlzLm9wdGlvbnMuc2VyaWFsaXphdGlvbiB8fCAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkODlmNTA3Y2Y5ODZhOTQ3LkJpbmFyeTtcbiAgICAgICAgX3RoaXMucmVsaWFibGUgPSAhIV90aGlzLm9wdGlvbnMucmVsaWFibGU7XG4gICAgICAgIF90aGlzLl9lbmNvZGluZ1F1ZXVlLm9uKFwiZG9uZVwiLCBmdW5jdGlvbihhYikge1xuICAgICAgICAgICAgX3RoaXMuX2J1ZmZlcmVkU2VuZChhYik7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy5fZW5jb2RpbmdRdWV1ZS5vbihcImVycm9yXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmVycm9yKFwiREMjXCIuY29uY2F0KF90aGlzLmNvbm5lY3Rpb25JZCwgXCI6IEVycm9yIG9jY3VyZWQgaW4gZW5jb2RpbmcgZnJvbSBibG9iIHRvIGFycmF5YnVmZmVyLCBjbG9zZSBEQ1wiKSk7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuX25lZ290aWF0b3IgPSBuZXcgJDc3ZjE0ZDNlODE4ODgxNTYkZXhwb3J0cy5OZWdvdGlhdG9yKF90aGlzKTtcbiAgICAgICAgX3RoaXMuX25lZ290aWF0b3Iuc3RhcnRDb25uZWN0aW9uKF90aGlzLm9wdGlvbnMuX3BheWxvYWQgfHwge1xuICAgICAgICAgICAgb3JpZ2luYXRvcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzMTU3ZDU3YjQxMzVlM2JjLkRhdGE7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkucHJvdG90eXBlLCBcImRhdGFDaGFubmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkMzM1NjE3MGQ3YmNlN2YyMCRleHBvcnQkZDM2NWY3YWQ5ZDdkZjljOS5wcm90b3R5cGUsIFwiYnVmZmVyU2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYnVmZmVyU2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKiBDYWxsZWQgYnkgdGhlIE5lZ290aWF0b3Igd2hlbiB0aGUgRGF0YUNoYW5uZWwgaXMgcmVhZHkuICovICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oZGMpIHtcbiAgICAgICAgdGhpcy5fZGMgPSBkYztcbiAgICAgICAgdGhpcy5fY29uZmlndXJlRGF0YUNoYW5uZWwoKTtcbiAgICB9O1xuICAgICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5LnByb3RvdHlwZS5fY29uZmlndXJlRGF0YUNoYW5uZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCEkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5zdXBwb3J0cy5iaW5hcnlCbG9iIHx8ICQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiLnN1cHBvcnRzLnJlbGlhYmxlKSB0aGlzLmRhdGFDaGFubmVsLmJpbmFyeVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5uZWwub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiREMjXCIuY29uY2F0KF90aGlzLmNvbm5lY3Rpb25JZCwgXCIgZGMgY29ubmVjdGlvbiBzdWNjZXNzXCIpKTtcbiAgICAgICAgICAgIF90aGlzLl9vcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLmVtaXQoXCJvcGVuXCIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGFDaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5sb2coXCJEQyNcIi5jb25jYXQoX3RoaXMuY29ubmVjdGlvbklkLCBcIiBkYyBvbm1lc3NhZ2U6XCIpLCBlLmRhdGEpO1xuICAgICAgICAgICAgX3RoaXMuX2hhbmRsZURhdGFNZXNzYWdlKGUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGFDaGFubmVsLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5sb2coXCJEQyNcIi5jb25jYXQoX3RoaXMuY29ubmVjdGlvbklkLCBcIiBkYyBjbG9zZWQgZm9yOlwiKSwgX3RoaXMucGVlcik7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8gSGFuZGxlcyBhIERhdGFDaGFubmVsIG1lc3NhZ2UuXG4gICAgJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkucHJvdG90eXBlLl9oYW5kbGVEYXRhTWVzc2FnZSA9IGZ1bmN0aW9uKF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gX2EuZGF0YTtcbiAgICAgICAgdmFyIGRhdGF0eXBlID0gZGF0YS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIGlzQmluYXJ5U2VyaWFsaXphdGlvbiA9IHRoaXMuc2VyaWFsaXphdGlvbiA9PT0gJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDg5ZjUwN2NmOTg2YTk0Ny5CaW5hcnkgfHwgdGhpcy5zZXJpYWxpemF0aW9uID09PSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkODlmNTA3Y2Y5ODZhOTQ3LkJpbmFyeVVURjg7XG4gICAgICAgIHZhciBkZXNlcmlhbGl6ZWREYXRhID0gZGF0YTtcbiAgICAgICAgaWYgKGlzQmluYXJ5U2VyaWFsaXphdGlvbikge1xuICAgICAgICAgICAgaWYgKGRhdGF0eXBlID09PSBCbG9iKSB7XG4gICAgICAgICAgICAgICAgLy8gRGF0YXR5cGUgc2hvdWxkIG5ldmVyIGJlIGJsb2JcbiAgICAgICAgICAgICAgICAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5ibG9iVG9BcnJheUJ1ZmZlcihkYXRhLCBmdW5jdGlvbihhYikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdW5wYWNrZWREYXRhID0gJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIudW5wYWNrKGFiKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdChcImRhdGFcIiwgdW5wYWNrZWREYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGF0eXBlID09PSBBcnJheUJ1ZmZlcikgZGVzZXJpYWxpemVkRGF0YSA9ICQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiLnVucGFjayhkYXRhKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGF0eXBlID09PSBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBTdHJpbmcgZmFsbGJhY2sgZm9yIGJpbmFyeSBkYXRhIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgYmluYXJ5IHlldFxuICAgICAgICAgICAgICAgIHZhciBhYjEgPSAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5iaW5hcnlTdHJpbmdUb0FycmF5QnVmZmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIGRlc2VyaWFsaXplZERhdGEgPSAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi51bnBhY2soYWIxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlcmlhbGl6YXRpb24gPT09ICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ4OWY1MDdjZjk4NmE5NDcuSlNPTikgZGVzZXJpYWxpemVkRGF0YSA9IHRoaXMucGFyc2UoZGF0YSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlJ3ZlIGNodW5rZWQtLWlmIHNvLCBwaWVjZSB0aGluZ3MgYmFjayB0b2dldGhlci5cbiAgICAgICAgLy8gV2UncmUgZ3VhcmFudGVlZCB0aGF0IHRoaXMgaXNuJ3QgMC5cbiAgICAgICAgaWYgKGRlc2VyaWFsaXplZERhdGEuX19wZWVyRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5faGFuZGxlQ2h1bmsoZGVzZXJpYWxpemVkRGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lbWl0LmNhbGwodGhpcywgXCJkYXRhXCIsIGRlc2VyaWFsaXplZERhdGEpO1xuICAgIH07XG4gICAgJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkucHJvdG90eXBlLl9oYW5kbGVDaHVuayA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIGlkID0gZGF0YS5fX3BlZXJEYXRhO1xuICAgICAgICB2YXIgY2h1bmtJbmZvID0gdGhpcy5fY2h1bmtlZERhdGFbaWRdIHx8IHtcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICB0b3RhbDogZGF0YS50b3RhbFxuICAgICAgICB9O1xuICAgICAgICBjaHVua0luZm8uZGF0YVtkYXRhLm5dID0gZGF0YS5kYXRhO1xuICAgICAgICBjaHVua0luZm8uY291bnQrKztcbiAgICAgICAgdGhpcy5fY2h1bmtlZERhdGFbaWRdID0gY2h1bmtJbmZvO1xuICAgICAgICBpZiAoY2h1bmtJbmZvLnRvdGFsID09PSBjaHVua0luZm8uY291bnQpIHtcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIGJlZm9yZSBtYWtpbmcgdGhlIHJlY3Vyc2l2ZSBjYWxsIHRvIGBfaGFuZGxlRGF0YU1lc3NhZ2VgLlxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NodW5rZWREYXRhW2lkXTtcbiAgICAgICAgICAgIC8vIFdlJ3ZlIHJlY2VpdmVkIGFsbCB0aGUgY2h1bmtzLS10aW1lIHRvIGNvbnN0cnVjdCB0aGUgY29tcGxldGUgZGF0YS5cbiAgICAgICAgICAgIHZhciBkYXRhXzEgPSBuZXcgQmxvYihjaHVua0luZm8uZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVEYXRhTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YV8xXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRXhwb3NlZCBmdW5jdGlvbmFsaXR5IGZvciB1c2Vycy5cbiAgICAgKi8gLyoqIEFsbG93cyB1c2VyIHRvIGNsb3NlIGNvbm5lY3Rpb24uICovICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLl9idWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5fYnVmZmVyU2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX2NodW5rZWREYXRhID0ge307XG4gICAgICAgIGlmICh0aGlzLl9uZWdvdGlhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLl9uZWdvdGlhdG9yLmNsZWFudXAoKTtcbiAgICAgICAgICAgIHRoaXMuX25lZ290aWF0b3IgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3ZpZGVyLl9yZW1vdmVDb25uZWN0aW9uKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wcm92aWRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YUNoYW5uZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNoYW5uZWwub25vcGVuID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNoYW5uZWwub25tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZGF0YUNoYW5uZWwub25jbG9zZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9kYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2VuY29kaW5nUXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2VuY29kaW5nUXVldWUuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5fZW5jb2RpbmdRdWV1ZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHRoaXMuX2VuY29kaW5nUXVldWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5vcGVuKSByZXR1cm47XG4gICAgICAgIHRoaXMuX29wZW4gPSBmYWxzZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lbWl0LmNhbGwodGhpcywgXCJjbG9zZVwiKTtcbiAgICB9O1xuICAgIC8qKiBBbGxvd3MgdXNlciB0byBzZW5kIGRhdGEuICovICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24oZGF0YSwgY2h1bmtlZCkge1xuICAgICAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lbWl0LmNhbGwodGhpcywgXCJlcnJvclwiLCBuZXcgRXJyb3IoXCJDb25uZWN0aW9uIGlzIG5vdCBvcGVuLiBZb3Ugc2hvdWxkIGxpc3RlbiBmb3IgdGhlIGBvcGVuYCBldmVudCBiZWZvcmUgc2VuZGluZyBtZXNzYWdlcy5cIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlcmlhbGl6YXRpb24gPT09ICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ4OWY1MDdjZjk4NmE5NDcuSlNPTikgdGhpcy5fYnVmZmVyZWRTZW5kKHRoaXMuc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZXJpYWxpemF0aW9uID09PSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkODlmNTA3Y2Y5ODZhOTQ3LkJpbmFyeSB8fCB0aGlzLnNlcmlhbGl6YXRpb24gPT09ICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ4OWY1MDdjZjk4NmE5NDcuQmluYXJ5VVRGOCkge1xuICAgICAgICAgICAgdmFyIGJsb2IgPSAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5wYWNrKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCFjaHVua2VkICYmIGJsb2Iuc2l6ZSA+ICQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiLmNodW5rZWRNVFUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZW5kQ2h1bmtzKGJsb2IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuc3VwcG9ydHMuYmluYXJ5QmxvYikgLy8gV2Ugb25seSBkbyB0aGlzIGlmIHdlIHJlYWxseSBuZWVkIHRvIChlLmcuIGJsb2JzIGFyZSBub3Qgc3VwcG9ydGVkKSxcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhpcyBjb252ZXJzaW9uIGlzIGNvc3RseS5cbiAgICAgICAgICAgIHRoaXMuX2VuY29kaW5nUXVldWUuZW5xdWUoYmxvYik7XG4gICAgICAgICAgICBlbHNlIHRoaXMuX2J1ZmZlcmVkU2VuZChibG9iKTtcbiAgICAgICAgfSBlbHNlIHRoaXMuX2J1ZmZlcmVkU2VuZChkYXRhKTtcbiAgICB9O1xuICAgICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5LnByb3RvdHlwZS5fYnVmZmVyZWRTZW5kID0gZnVuY3Rpb24obXNnKSB7XG4gICAgICAgIGlmICh0aGlzLl9idWZmZXJpbmcgfHwgIXRoaXMuX3RyeVNlbmQobXNnKSkge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyLnB1c2gobXNnKTtcbiAgICAgICAgICAgIHRoaXMuX2J1ZmZlclNpemUgPSB0aGlzLl9idWZmZXIubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIHNlbmQgc3VjY2VlZHMuXG4gICAgJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkucHJvdG90eXBlLl90cnlTZW5kID0gZnVuY3Rpb24obXNnKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5vcGVuKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmRhdGFDaGFubmVsLmJ1ZmZlcmVkQW1vdW50ID4gJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkuTUFYX0JVRkZFUkVEX0FNT1VOVCkge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2J1ZmZlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLl90cnlCdWZmZXIoKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbm5lbC5zZW5kKG1zZyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5lcnJvcihcIkRDIzpcIi5jb25jYXQodGhpcy5jb25uZWN0aW9uSWQsIFwiIEVycm9yIHdoZW4gc2VuZGluZzpcIiksIGUpO1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIC8vIFRyeSB0byBzZW5kIHRoZSBmaXJzdCBtZXNzYWdlIGluIHRoZSBidWZmZXIuXG4gICAgJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkucHJvdG90eXBlLl90cnlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9wZW4pIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMuX2J1ZmZlci5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgdmFyIG1zZyA9IHRoaXMuX2J1ZmZlclswXTtcbiAgICAgICAgaWYgKHRoaXMuX3RyeVNlbmQobXNnKSkge1xuICAgICAgICAgICAgdGhpcy5fYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLl9idWZmZXJTaXplID0gdGhpcy5fYnVmZmVyLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuX3RyeUJ1ZmZlcigpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAkMzM1NjE3MGQ3YmNlN2YyMCRleHBvcnQkZDM2NWY3YWQ5ZDdkZjljOS5wcm90b3R5cGUuX3NlbmRDaHVua3MgPSBmdW5jdGlvbihibG9iKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB2YXIgYmxvYnMgPSAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5jaHVuayhibG9iKTtcbiAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmxvZyhcIkRDI1wiLmNvbmNhdCh0aGlzLmNvbm5lY3Rpb25JZCwgXCIgVHJ5IHRvIHNlbmQgXCIpLmNvbmNhdChibG9icy5sZW5ndGgsIFwiIGNodW5rcy4uLlwiKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IodmFyIGJsb2JzXzEgPSAkMzM1NjE3MGQ3YmNlN2YyMCR2YXIkX192YWx1ZXMoYmxvYnMpLCBibG9ic18xXzEgPSBibG9ic18xLm5leHQoKTsgIWJsb2JzXzFfMS5kb25lOyBibG9ic18xXzEgPSBibG9ic18xLm5leHQoKSl7XG4gICAgICAgICAgICAgICAgdmFyIGJsb2JfMSA9IGJsb2JzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmQoYmxvYl8xLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZV8xXzEpIHtcbiAgICAgICAgICAgIGVfMSA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZV8xXzFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2JzXzFfMSAmJiAhYmxvYnNfMV8xLmRvbmUgJiYgKF9hID0gYmxvYnNfMS5yZXR1cm4pKSBfYS5jYWxsKGJsb2JzXzEpO1xuICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkucHJvdG90eXBlLmhhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHZhciBwYXlsb2FkID0gbWVzc2FnZS5wYXlsb2FkO1xuICAgICAgICBzd2l0Y2gobWVzc2FnZS50eXBlKXtcbiAgICAgICAgICAgIGNhc2UgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQuQW5zd2VyOlxuICAgICAgICAgICAgICAgIHRoaXMuX25lZ290aWF0b3IuaGFuZGxlU0RQKG1lc3NhZ2UudHlwZSwgcGF5bG9hZC5zZHApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZC5DYW5kaWRhdGU6XG4gICAgICAgICAgICAgICAgdGhpcy5fbmVnb3RpYXRvci5oYW5kbGVDYW5kaWRhdGUocGF5bG9hZC5jYW5kaWRhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQud2FybihcIlVucmVjb2duaXplZCBtZXNzYWdlIHR5cGU6XCIsIG1lc3NhZ2UudHlwZSwgXCJmcm9tIHBlZXI6XCIsIHRoaXMucGVlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5LklEX1BSRUZJWCA9IFwiZGNfXCI7XG4gICAgJDMzNTYxNzBkN2JjZTdmMjAkZXhwb3J0JGQzNjVmN2FkOWQ3ZGY5YzkuTUFYX0JVRkZFUkVEX0FNT1VOVCA9IDgzODg2MDg7XG4gICAgcmV0dXJuICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydCRkMzY1ZjdhZDlkN2RmOWM5O1xufSgkMGIzYjMzMmZkODZjNTIwMiRleHBvcnRzLkJhc2VDb25uZWN0aW9uKTtcblxuXG5cbnZhciAkOWU4NWIzZTEzMjczNjllNiRleHBvcnRzID0ge307XG5cbiRwYXJjZWwkZXhwb3J0KCQ5ZTg1YjNlMTMyNzM2OWU2JGV4cG9ydHMsIFwiQVBJXCIsICgpID0+ICQ5ZTg1YjNlMTMyNzM2OWU2JGV4cG9ydCQyYzRlODI1ZGM5MTIwZjg3LCAodikgPT4gJDllODViM2UxMzI3MzY5ZTYkZXhwb3J0JDJjNGU4MjVkYzkxMjBmODcgPSB2KTtcblxuXG5cbnZhciAkOWU4NWIzZTEzMjczNjllNiR2YXIkX19hd2FpdGVyID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2F3YWl0ZXIgfHwgZnVuY3Rpb24odGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbiAgICAgICAgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyICQ5ZTg1YjNlMTMyNzM2OWU2JHZhciRfX2dlbmVyYXRvciA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19nZW5lcmF0b3IgfHwgZnVuY3Rpb24odGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0ge1xuICAgICAgICBsYWJlbDogMCxcbiAgICAgICAgc2VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodFswXSAmIDEpIHRocm93IHRbMV07XG4gICAgICAgICAgICByZXR1cm4gdFsxXTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJ5czogW10sXG4gICAgICAgIG9wczogW11cbiAgICB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0ge1xuICAgICAgICBuZXh0OiB2ZXJiKDApLFxuICAgICAgICBcInRocm93XCI6IHZlcmIoMSksXG4gICAgICAgIFwicmV0dXJuXCI6IHZlcmIoMilcbiAgICB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFtcbiAgICAgICAgICAgICAgICBuLFxuICAgICAgICAgICAgICAgIHZcbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUoXyl0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtcbiAgICAgICAgICAgICAgICBvcFswXSAmIDIsXG4gICAgICAgICAgICAgICAgdC52YWx1ZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIHN3aXRjaChvcFswXSl7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdCA9IG9wO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIF8ubGFiZWwrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcFsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBfLmxhYmVsKys7XG4gICAgICAgICAgICAgICAgICAgIHkgPSBvcFsxXTtcbiAgICAgICAgICAgICAgICAgICAgb3AgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgb3AgPSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmxhYmVsID0gb3BbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSB0WzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdCA9IG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ubGFiZWwgPSB0WzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHMucHVzaChvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgb3AgPSBbXG4gICAgICAgICAgICAgICAgNixcbiAgICAgICAgICAgICAgICBlXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIGYgPSB0ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cbn07XG52YXIgJDllODViM2UxMzI3MzY5ZTYkZXhwb3J0JDJjNGU4MjVkYzkxMjBmODcgPSAvKiogQGNsYXNzICovIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uICQ5ZTg1YjNlMTMyNzM2OWU2JGV4cG9ydCQyYzRlODI1ZGM5MTIwZjg3KF9vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBfb3B0aW9ucztcbiAgICB9XG4gICAgJDllODViM2UxMzI3MzY5ZTYkZXhwb3J0JDJjNGU4MjVkYzkxMjBmODcucHJvdG90eXBlLl9idWlsZFJlcXVlc3QgPSBmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgdmFyIHByb3RvY29sID0gdGhpcy5fb3B0aW9ucy5zZWN1cmUgPyBcImh0dHBzXCIgOiBcImh0dHBcIjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5fb3B0aW9ucywgaG9zdCA9IF9hLmhvc3QsIHBvcnQgPSBfYS5wb3J0LCBwYXRoID0gX2EucGF0aCwga2V5ID0gX2Eua2V5O1xuICAgICAgICB2YXIgdXJsID0gbmV3IFVSTChcIlwiLmNvbmNhdChwcm90b2NvbCwgXCI6Ly9cIikuY29uY2F0KGhvc3QsIFwiOlwiKS5jb25jYXQocG9ydCkuY29uY2F0KHBhdGgpLmNvbmNhdChrZXksIFwiL1wiKS5jb25jYXQobWV0aG9kKSk7XG4gICAgICAgIC8vIFRPRE86IFdoeSB0aW1lc3RhbXAsIHdoeSByYW5kb20/XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KFwidHNcIiwgXCJcIi5jb25jYXQoRGF0ZS5ub3coKSkuY29uY2F0KE1hdGgucmFuZG9tKCkpKTtcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoXCJ2ZXJzaW9uXCIsICQwZDFlZDg5MWM1Y2IyN2MwJGV4cG9ydHMudmVyc2lvbik7XG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwuaHJlZiwge1xuICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k6IHRoaXMuX29wdGlvbnMucmVmZXJyZXJQb2xpY3lcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogR2V0IGEgdW5pcXVlIElEIGZyb20gdGhlIHNlcnZlciB2aWEgWEhSIGFuZCBpbml0aWFsaXplIHdpdGggaXQuICovICQ5ZTg1YjNlMTMyNzM2OWU2JGV4cG9ydCQyYzRlODI1ZGM5MTIwZjg3LnByb3RvdHlwZS5yZXRyaWV2ZUlkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkOWU4NWIzZTEzMjczNjllNiR2YXIkX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGVycm9yXzEsIHBhdGhFcnJvcjtcbiAgICAgICAgICAgIHJldHVybiAkOWU4NWIzZTEzMjczNjllNiR2YXIkX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goX2EubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQgLyp5aWVsZCovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWlsZFJlcXVlc3QoXCJpZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHRocm93IG5ldyBFcnJvcihcIkVycm9yLiBTdGF0dXM6XCIuY29uY2F0KHJlc3BvbnNlLnN0YXR1cykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIC8qcmV0dXJuKi8gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5lcnJvcihcIkVycm9yIHJldHJpZXZpbmcgSURcIiwgZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoRXJyb3IgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMucGF0aCA9PT0gXCIvXCIgJiYgdGhpcy5fb3B0aW9ucy5ob3N0ICE9PSAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5DTE9VRF9IT1NUKSBwYXRoRXJyb3IgPSBcIiBJZiB5b3UgcGFzc2VkIGluIGEgYHBhdGhgIHRvIHlvdXIgc2VsZi1ob3N0ZWQgUGVlclNlcnZlciwgeW91J2xsIGFsc28gbmVlZCB0byBwYXNzIGluIHRoYXQgc2FtZSBwYXRoIHdoZW4gY3JlYXRpbmcgYSBuZXcgUGVlci5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBnZXQgYW4gSUQgZnJvbSB0aGUgc2VydmVyLlwiICsgcGF0aEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyIC8qcmV0dXJuKi8gXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyAkOWU4NWIzZTEzMjczNjllNiRleHBvcnQkMmM0ZTgyNWRjOTEyMGY4Ny5wcm90b3R5cGUubGlzdEFsbFBlZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkOWU4NWIzZTEzMjczNjllNiR2YXIkX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgUHJvbWlzZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGhlbHBmdWxFcnJvciwgZXJyb3JfMjtcbiAgICAgICAgICAgIHJldHVybiAkOWU4NWIzZTEzMjczNjllNiR2YXIkX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24oX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goX2EubGFiZWwpe1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQgLyp5aWVsZCovICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9idWlsZFJlcXVlc3QoXCJwZWVyc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGZ1bEVycm9yID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX29wdGlvbnMuaG9zdCA9PT0gJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuQ0xPVURfSE9TVCkgaGVscGZ1bEVycm9yID0gXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB1c2luZyB0aGUgY2xvdWQgc2VydmVyLiBZb3UgY2FuIGVtYWlsIHRlYW1AcGVlcmpzLmNvbSB0byBlbmFibGUgcGVlciBsaXN0aW5nIGZvciB5b3VyIEFQSSBrZXkuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaGVscGZ1bEVycm9yID0gXCJZb3UgbmVlZCB0byBlbmFibGUgYGFsbG93X2Rpc2NvdmVyeWAgb24geW91ciBzZWxmLWhvc3RlZCBQZWVyU2VydmVyIHRvIHVzZSB0aGlzIGZlYXR1cmUuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkl0IGRvZXNuJ3QgbG9vayBsaWtlIHlvdSBoYXZlIHBlcm1pc3Npb24gdG8gbGlzdCBwZWVycyBJRHMuIFwiICsgaGVscGZ1bEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IuIFN0YXR1czpcIi5jb25jYXQocmVzcG9uc2Uuc3RhdHVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgLypyZXR1cm4qLyAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmVycm9yKFwiRXJyb3IgcmV0cmlldmluZyBsaXN0IHBlZXJzXCIsIGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGdldCBsaXN0IHBlZXJzIGZyb20gdGhlIHNlcnZlci5cIiArIGVycm9yXzIpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIgLypyZXR1cm4qLyBcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuICQ5ZTg1YjNlMTMyNzM2OWU2JGV4cG9ydCQyYzRlODI1ZGM5MTIwZjg3O1xufSgpO1xuXG5cbnZhciAkMjYwODhkN2RhNWIwM2Y2OSR2YXIkX19leHRlbmRzID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMgfHwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkMSwgYjEpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoe1xuICAgICAgICAgICAgX19wcm90b19fOiBbXVxuICAgICAgICB9KSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uKGQsIGIpIHtcbiAgICAgICAgICAgIGQuX19wcm90b19fID0gYjtcbiAgICAgICAgfSB8fCBmdW5jdGlvbihkLCBiKSB7XG4gICAgICAgICAgICBmb3IodmFyIHAgaW4gYilpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZDEsIGIxKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbihkLCBiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZDtcbiAgICAgICAgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0oKTtcbnZhciAkMjYwODhkN2RhNWIwM2Y2OSR2YXIkX19hc3NpZ24gPSB1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fYXNzaWduIHx8IGZ1bmN0aW9uKCkge1xuICAgICQyNjA4OGQ3ZGE1YjAzZjY5JHZhciRfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKyl7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBwIGluIHMpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gJDI2MDg4ZDdkYTViMDNmNjkkdmFyJF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyICQyNjA4OGQ3ZGE1YjAzZjY5JHZhciRfX3ZhbHVlcyA9IHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX192YWx1ZXMgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBvICYmIG9baSsrXSxcbiAgICAgICAgICAgICAgICBkb25lOiAhb1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbnZhciAkMjYwODhkN2RhNWIwM2Y2OSR2YXIkX19yZWFkID0gdW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX3JlYWQgfHwgZnVuY3Rpb24obywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpYXIucHVzaChyLnZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBlID0ge1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yXG4gICAgICAgIH07XG4gICAgfSBmaW5hbGx5e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIGlmIChlKSB0aHJvdyBlLmVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgJDI2MDg4ZDdkYTViMDNmNjkkdmFyJFBlZXJPcHRpb25zID0gLyoqIEBjbGFzcyAqLyBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBQZWVyT3B0aW9ucygpIHt9XG4gICAgcmV0dXJuIFBlZXJPcHRpb25zO1xufSgpO1xuLyoqXG4gKiBBIHBlZXIgd2hvIGNhbiBpbml0aWF0ZSBjb25uZWN0aW9ucyB3aXRoIG90aGVyIHBlZXJzLlxuICovIHZhciAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OCA9IC8qKiBAY2xhc3MgKi8gZnVuY3Rpb24oX3N1cGVyKSB7XG4gICAgJDI2MDg4ZDdkYTViMDNmNjkkdmFyJF9fZXh0ZW5kcygkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OChpZDEsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX2lkID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2xhc3RTZXJ2ZXJJZCA9IG51bGw7XG4gICAgICAgIC8vIFN0YXRlcy5cbiAgICAgICAgX3RoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlOyAvLyBDb25uZWN0aW9ucyBoYXZlIGJlZW4ga2lsbGVkXG4gICAgICAgIF90aGlzLl9kaXNjb25uZWN0ZWQgPSBmYWxzZTsgLy8gQ29ubmVjdGlvbiB0byBQZWVyU2VydmVyIGtpbGxlZCBidXQgUDJQIGNvbm5lY3Rpb25zIHN0aWxsIGFjdGl2ZVxuICAgICAgICBfdGhpcy5fb3BlbiA9IGZhbHNlOyAvLyBTb2NrZXRzIGFuZCBzdWNoIGFyZSBub3QgeWV0IG9wZW4uXG4gICAgICAgIF90aGlzLl9jb25uZWN0aW9ucyA9IG5ldyBNYXAoKTsgLy8gQWxsIGNvbm5lY3Rpb25zIGZvciB0aGlzIHBlZXIuXG4gICAgICAgIF90aGlzLl9sb3N0TWVzc2FnZXMgPSBuZXcgTWFwKCk7IC8vIHNyYyA9PiBbbGlzdCBvZiBtZXNzYWdlc11cbiAgICAgICAgdmFyIHVzZXJJZDtcbiAgICAgICAgLy8gRGVhbCB3aXRoIG92ZXJsb2FkaW5nXG4gICAgICAgIGlmIChpZDEgJiYgaWQxLmNvbnN0cnVjdG9yID09IE9iamVjdCkgb3B0aW9ucyA9IGlkMTtcbiAgICAgICAgZWxzZSBpZiAoaWQxKSB1c2VySWQgPSBpZDEudG9TdHJpbmcoKTtcbiAgICAgICAgLy8gQ29uZmlndXJpemUgb3B0aW9uc1xuICAgICAgICBvcHRpb25zID0gJDI2MDg4ZDdkYTViMDNmNjkkdmFyJF9fYXNzaWduKHtcbiAgICAgICAgICAgIGRlYnVnOiAwLFxuICAgICAgICAgICAgaG9zdDogJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuQ0xPVURfSE9TVCxcbiAgICAgICAgICAgIHBvcnQ6ICQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiLkNMT1VEX1BPUlQsXG4gICAgICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgICAgIGtleTogJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDguREVGQVVMVF9LRVksXG4gICAgICAgICAgICB0b2tlbjogJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIucmFuZG9tVG9rZW4oKSxcbiAgICAgICAgICAgIGNvbmZpZzogJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuZGVmYXVsdENvbmZpZyxcbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5OiBcInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIlxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgX3RoaXMuX29wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAvLyBEZXRlY3QgcmVsYXRpdmUgVVJMIGhvc3QuXG4gICAgICAgIGlmIChfdGhpcy5fb3B0aW9ucy5ob3N0ID09PSBcIi9cIikgX3RoaXMuX29wdGlvbnMuaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAgICAgLy8gU2V0IHBhdGggY29ycmVjdGx5LlxuICAgICAgICBpZiAoX3RoaXMuX29wdGlvbnMucGF0aCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLl9vcHRpb25zLnBhdGhbMF0gIT09IFwiL1wiKSBfdGhpcy5fb3B0aW9ucy5wYXRoID0gXCIvXCIgKyBfdGhpcy5fb3B0aW9ucy5wYXRoO1xuICAgICAgICAgICAgaWYgKF90aGlzLl9vcHRpb25zLnBhdGhbX3RoaXMuX29wdGlvbnMucGF0aC5sZW5ndGggLSAxXSAhPT0gXCIvXCIpIF90aGlzLl9vcHRpb25zLnBhdGggKz0gXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2V0IHdoZXRoZXIgd2UgdXNlIFNTTCB0byBzYW1lIGFzIGN1cnJlbnQgaG9zdFxuICAgICAgICBpZiAoX3RoaXMuX29wdGlvbnMuc2VjdXJlID09PSB1bmRlZmluZWQgJiYgX3RoaXMuX29wdGlvbnMuaG9zdCAhPT0gJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuQ0xPVURfSE9TVCkgX3RoaXMuX29wdGlvbnMuc2VjdXJlID0gJDA2Y2I1MzFlZDc4NDBmNzgkZXhwb3J0JDdkZWJiNTBlZjExZDVlMGIuaXNTZWN1cmUoKTtcbiAgICAgICAgZWxzZSBpZiAoX3RoaXMuX29wdGlvbnMuaG9zdCA9PSAkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi5DTE9VRF9IT1NUKSBfdGhpcy5fb3B0aW9ucy5zZWN1cmUgPSB0cnVlO1xuICAgICAgICAvLyBTZXQgYSBjdXN0b20gbG9nIGZ1bmN0aW9uIGlmIHByZXNlbnRcbiAgICAgICAgaWYgKF90aGlzLl9vcHRpb25zLmxvZ0Z1bmN0aW9uKSAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQuc2V0TG9nRnVuY3Rpb24oX3RoaXMuX29wdGlvbnMubG9nRnVuY3Rpb24pO1xuICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nTGV2ZWwgPSBfdGhpcy5fb3B0aW9ucy5kZWJ1ZyB8fCAwO1xuICAgICAgICBfdGhpcy5fYXBpID0gbmV3ICQ5ZTg1YjNlMTMyNzM2OWU2JGV4cG9ydHMuQVBJKG9wdGlvbnMpO1xuICAgICAgICBfdGhpcy5fc29ja2V0ID0gX3RoaXMuX2NyZWF0ZVNlcnZlckNvbm5lY3Rpb24oKTtcbiAgICAgICAgLy8gU2FuaXR5IGNoZWNrc1xuICAgICAgICAvLyBFbnN1cmUgV2ViUlRDIHN1cHBvcnRlZFxuICAgICAgICBpZiAoISQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiLnN1cHBvcnRzLmF1ZGlvVmlkZW8gJiYgISQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiLnN1cHBvcnRzLmRhdGEpIHtcbiAgICAgICAgICAgIF90aGlzLl9kZWxheWVkQWJvcnQoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuQnJvd3NlckluY29tcGF0aWJsZSwgXCJUaGUgY3VycmVudCBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgV2ViUlRDXCIpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyZSBhbHBoYW51bWVyaWMgaWRcbiAgICAgICAgaWYgKCEhdXNlcklkICYmICEkMDZjYjUzMWVkNzg0MGY3OCRleHBvcnQkN2RlYmI1MGVmMTFkNWUwYi52YWxpZGF0ZUlkKHVzZXJJZCkpIHtcbiAgICAgICAgICAgIF90aGlzLl9kZWxheWVkQWJvcnQoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuSW52YWxpZElELCBcIklEIFxcXCJcIi5jb25jYXQodXNlcklkLCBcIlxcXCIgaXMgaW52YWxpZFwiKSk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZXJJZCkgX3RoaXMuX2luaXRpYWxpemUodXNlcklkKTtcbiAgICAgICAgZWxzZSBfdGhpcy5fYXBpLnJldHJpZXZlSWQoKS50aGVuKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuX2luaXRpYWxpemUoaWQpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9hYm9ydCgkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZi5TZXJ2ZXJFcnJvciwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLCBcImlkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBicm9rZXJpbmcgSUQgb2YgdGhpcyBwZWVyXG4gICAgICAgICAqLyBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZSwgXCJvcHRpb25zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZSwgXCJvcGVuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZSwgXCJzb2NrZXRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NvY2tldDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OC5wcm90b3R5cGUsIFwiY29ubmVjdGlvbnNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBoYXNoIG9mIGFsbCBjb25uZWN0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhpcyBwZWVyLCBrZXllZCBieSB0aGUgcmVtb3RlIHBlZXIncyBJRC5cbiAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICogUmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UgZnJvbSBPYmplY3QgdG8gTWFwPHN0cmluZyxbXT5cbiAgICAgICAgICovIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIHZhciBwbGFpbkNvbm5lY3Rpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yKHZhciBfYiA9ICQyNjA4OGQ3ZGE1YjAzZjY5JHZhciRfX3ZhbHVlcyh0aGlzLl9jb25uZWN0aW9ucyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2QgPSAkMjYwODhkN2RhNWIwM2Y2OSR2YXIkX19yZWFkKF9jLnZhbHVlLCAyKSwgayA9IF9kWzBdLCB2ID0gX2RbMV07XG4gICAgICAgICAgICAgICAgICAgIHBsYWluQ29ubmVjdGlvbnNba10gPSB2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVfMV8xKSB7XG4gICAgICAgICAgICAgICAgZV8xID0ge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZV8xXzFcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcGxhaW5Db25uZWN0aW9ucztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSgkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OC5wcm90b3R5cGUsIFwiZGVzdHJveWVkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRydWUgaWYgdGhpcyBwZWVyIGFuZCBhbGwgb2YgaXRzIGNvbm5lY3Rpb25zIGNhbiBubyBsb25nZXIgYmUgdXNlZC5cbiAgICAgICAgICovIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZSwgXCJkaXNjb25uZWN0ZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogZmFsc2UgaWYgdGhlcmUgaXMgYW4gYWN0aXZlIGNvbm5lY3Rpb24gdG8gdGhlIFBlZXJTZXJ2ZXIuXG4gICAgICAgICAqLyBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2Nvbm5lY3RlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZS5fY3JlYXRlU2VydmVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc29ja2V0ID0gbmV3ICQzMWQxMWE4ZDEyMmNiNGI3JGV4cG9ydHMuU29ja2V0KHRoaXMuX29wdGlvbnMuc2VjdXJlLCB0aGlzLl9vcHRpb25zLmhvc3QsIHRoaXMuX29wdGlvbnMucG9ydCwgdGhpcy5fb3B0aW9ucy5wYXRoLCB0aGlzLl9vcHRpb25zLmtleSwgdGhpcy5fb3B0aW9ucy5waW5nSW50ZXJ2YWwpO1xuICAgICAgICBzb2NrZXQub24oJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDNiNWM0YTRiNjM1NGYwMjMuTWVzc2FnZSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMuX2hhbmRsZU1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzb2NrZXQub24oJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDNiNWM0YTRiNjM1NGYwMjMuRXJyb3IsIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5fYWJvcnQoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuU29ja2V0RXJyb3IsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5vbigkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkM2I1YzRhNGI2MzU0ZjAyMy5EaXNjb25uZWN0ZWQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmRpc2Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICAgICAgX3RoaXMuZW1pdEVycm9yKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmLk5ldHdvcmssIFwiTG9zdCBjb25uZWN0aW9uIHRvIHNlcnZlci5cIik7XG4gICAgICAgICAgICBfdGhpcy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzb2NrZXQub24oJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDNiNWM0YTRiNjM1NGYwMjMuQ2xvc2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmRpc2Nvbm5lY3RlZCkgcmV0dXJuO1xuICAgICAgICAgICAgX3RoaXMuX2Fib3J0KCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmLlNvY2tldENsb3NlZCwgXCJVbmRlcmx5aW5nIHNvY2tldCBpcyBhbHJlYWR5IGNsb3NlZC5cIik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ja2V0O1xuICAgIH07XG4gICAgLyoqIEluaXRpYWxpemUgYSBjb25uZWN0aW9uIHdpdGggdGhlIHNlcnZlci4gKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLl9pbml0aWFsaXplID0gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5zb2NrZXQuc3RhcnQoaWQsIHRoaXMuX29wdGlvbnMudG9rZW4pO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZXMgbWVzc2FnZXMgZnJvbSB0aGUgc2VydmVyLiAqLyAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OC5wcm90b3R5cGUuX2hhbmRsZU1lc3NhZ2UgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgIHZhciBlXzIsIF9hO1xuICAgICAgICB2YXIgdHlwZSA9IG1lc3NhZ2UudHlwZTtcbiAgICAgICAgdmFyIHBheWxvYWQgPSBtZXNzYWdlLnBheWxvYWQ7XG4gICAgICAgIHZhciBwZWVySWQgPSBtZXNzYWdlLnNyYztcbiAgICAgICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICAgICAgY2FzZSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZC5PcGVuOlxuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3RTZXJ2ZXJJZCA9IHRoaXMuaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwib3BlblwiLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQuRXJyb3I6XG4gICAgICAgICAgICAgICAgdGhpcy5fYWJvcnQoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuU2VydmVyRXJyb3IsIHBheWxvYWQubXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQuSWRUYWtlbjpcbiAgICAgICAgICAgICAgICB0aGlzLl9hYm9ydCgkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZi5VbmF2YWlsYWJsZUlELCBcIklEIFxcXCJcIi5jb25jYXQodGhpcy5pZCwgXCJcXFwiIGlzIHRha2VuXCIpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JGFkYjRhMTc1NGRhNmYxMGQuSW52YWxpZEtleTpcbiAgICAgICAgICAgICAgICB0aGlzLl9hYm9ydCgkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkOTU0N2FhYTJlMzkwMzBmZi5JbnZhbGlkS2V5LCBcIkFQSSBLRVkgXFxcIlwiLmNvbmNhdCh0aGlzLl9vcHRpb25zLmtleSwgXCJcXFwiIGlzIGludmFsaWRcIikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZC5MZWF2ZTpcbiAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiUmVjZWl2ZWQgbGVhdmUgbWVzc2FnZSBmcm9tIFwiLmNvbmNhdChwZWVySWQpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwUGVlcihwZWVySWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb25zLmRlbGV0ZShwZWVySWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZC5FeHBpcmU6XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0RXJyb3IoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuUGVlclVuYXZhaWxhYmxlLCBcIkNvdWxkIG5vdCBjb25uZWN0IHRvIHBlZXIgXCIuY29uY2F0KHBlZXJJZCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAkNjBmYWRlZjIxYTJkYWFmYyRleHBvcnQkYWRiNGExNzU0ZGE2ZjEwZC5PZmZlcjpcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgY29uc2lkZXIgc3dpdGNoaW5nIHRoaXMgdG8gQ0FMTC9DT05ORUNULCBidXQgdGhpcyBpcyB0aGUgbGVhc3QgYnJlYWtpbmcgb3B0aW9uLlxuICAgICAgICAgICAgICAgIHZhciBjb25uZWN0aW9uSWQgPSBwYXlsb2FkLmNvbm5lY3Rpb25JZDtcbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuZ2V0Q29ubmVjdGlvbihwZWVySWQsIGNvbm5lY3Rpb25JZCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQud2FybihcIk9mZmVyIHJlY2VpdmVkIGZvciBleGlzdGluZyBDb25uZWN0aW9uIElEOlwiLmNvbmNhdChjb25uZWN0aW9uSWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGNvbm5lY3Rpb24uXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWQudHlwZSA9PT0gJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDMxNTdkNTdiNDEzNWUzYmMuTWVkaWEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1lZGlhQ29ubmVjdGlvbiA9IG5ldyAkMzUzZGVlMzhmOWFiNTU3YiRleHBvcnRzLk1lZGlhQ29ubmVjdGlvbihwZWVySWQsIHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25JZDogY29ubmVjdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YTogcGF5bG9hZC5tZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IG1lZGlhQ29ubmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRkQ29ubmVjdGlvbihwZWVySWQsIGNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJjYWxsXCIsIG1lZGlhQ29ubmVjdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXlsb2FkLnR5cGUgPT09ICQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQzMTU3ZDU3YjQxMzVlM2JjLkRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFDb25uZWN0aW9uID0gbmV3ICQzMzU2MTcwZDdiY2U3ZjIwJGV4cG9ydHMuRGF0YUNvbm5lY3Rpb24ocGVlcklkLCB0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uSWQ6IGNvbm5lY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHBheWxvYWQubWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcGF5bG9hZC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcmlhbGl6YXRpb246IHBheWxvYWQuc2VyaWFsaXphdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGlhYmxlOiBwYXlsb2FkLnJlbGlhYmxlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25uZWN0aW9uID0gZGF0YUNvbm5lY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZENvbm5lY3Rpb24ocGVlcklkLCBjb25uZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiY29ubmVjdGlvblwiLCBkYXRhQ29ubmVjdGlvbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0Lndhcm4oXCJSZWNlaXZlZCBtYWxmb3JtZWQgY29ubmVjdGlvbiB0eXBlOlwiLmNvbmNhdChwYXlsb2FkLnR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBGaW5kIG1lc3NhZ2VzLlxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlcyA9IHRoaXMuX2dldE1lc3NhZ2VzKGNvbm5lY3Rpb25JZCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBtZXNzYWdlc18xID0gJDI2MDg4ZDdkYTViMDNmNjkkdmFyJF9fdmFsdWVzKG1lc3NhZ2VzKSwgbWVzc2FnZXNfMV8xID0gbWVzc2FnZXNfMS5uZXh0KCk7ICFtZXNzYWdlc18xXzEuZG9uZTsgbWVzc2FnZXNfMV8xID0gbWVzc2FnZXNfMS5uZXh0KCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2VfMSA9IG1lc3NhZ2VzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24uaGFuZGxlTWVzc2FnZShtZXNzYWdlXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZV8yXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgZV8yID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVfMl8xXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VzXzFfMSAmJiAhbWVzc2FnZXNfMV8xLmRvbmUgJiYgKF9hID0gbWVzc2FnZXNfMS5yZXR1cm4pKSBfYS5jYWxsKG1lc3NhZ2VzXzEpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGlmICghcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQud2FybihcIllvdSByZWNlaXZlZCBhIG1hbGZvcm1lZCBtZXNzYWdlIGZyb20gXCIuY29uY2F0KHBlZXJJZCwgXCIgb2YgdHlwZSBcIikuY29uY2F0KHR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGlvbklkID0gcGF5bG9hZC5jb25uZWN0aW9uSWQ7XG4gICAgICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLmdldENvbm5lY3Rpb24ocGVlcklkLCBjb25uZWN0aW9uSWQpO1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uICYmIGNvbm5lY3Rpb24ucGVlckNvbm5lY3Rpb24pIC8vIFBhc3MgaXQgb24uXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbm5lY3Rpb25JZCkgLy8gU3RvcmUgZm9yIHBvc3NpYmxlIGxhdGVyIHVzZVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3JlTWVzc2FnZShjb25uZWN0aW9uSWQsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGVsc2UgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0Lndhcm4oXCJZb3UgcmVjZWl2ZWQgYW4gdW5yZWNvZ25pemVkIG1lc3NhZ2U6XCIsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogU3RvcmVzIG1lc3NhZ2VzIHdpdGhvdXQgYSBzZXQgdXAgY29ubmVjdGlvbiwgdG8gYmUgY2xhaW1lZCBsYXRlci4gKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLl9zdG9yZU1lc3NhZ2UgPSBmdW5jdGlvbihjb25uZWN0aW9uSWQsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9sb3N0TWVzc2FnZXMuaGFzKGNvbm5lY3Rpb25JZCkpIHRoaXMuX2xvc3RNZXNzYWdlcy5zZXQoY29ubmVjdGlvbklkLCBbXSk7XG4gICAgICAgIHRoaXMuX2xvc3RNZXNzYWdlcy5nZXQoY29ubmVjdGlvbklkKS5wdXNoKG1lc3NhZ2UpO1xuICAgIH07XG4gICAgLyoqIFJldHJpZXZlIG1lc3NhZ2VzIGZyb20gbG9zdCBtZXNzYWdlIHN0b3JlICovIC8vVE9ETyBDaGFuZ2UgaXQgdG8gcHJpdmF0ZVxuICAgICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZS5fZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbihjb25uZWN0aW9uSWQpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5fbG9zdE1lc3NhZ2VzLmdldChjb25uZWN0aW9uSWQpO1xuICAgICAgICBpZiAobWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvc3RNZXNzYWdlcy5kZWxldGUoY29ubmVjdGlvbklkKTtcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb25uZWN0cyB0byB0aGUgcmVtb3RlIHBlZXIgc3BlY2lmaWVkIGJ5IGlkIGFuZCByZXR1cm5zIGEgZGF0YSBjb25uZWN0aW9uLlxuICAgICAqIEBwYXJhbSBwZWVyIFRoZSBicm9rZXJpbmcgSUQgb2YgdGhlIHJlbW90ZSBwZWVyICh0aGVpciBwZWVyLmlkKS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBmb3Igc3BlY2lmeWluZyBkZXRhaWxzIGFib3V0IFBlZXIgQ29ubmVjdGlvblxuICAgICAqLyAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uKHBlZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgb3B0aW9ucyA9IHt9O1xuICAgICAgICBpZiAodGhpcy5kaXNjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC53YXJuKFwiWW91IGNhbm5vdCBjb25uZWN0IHRvIGEgbmV3IFBlZXIgYmVjYXVzZSB5b3UgY2FsbGVkIC5kaXNjb25uZWN0KCkgb24gdGhpcyBQZWVyIGFuZCBlbmRlZCB5b3VyIGNvbm5lY3Rpb24gd2l0aCB0aGUgc2VydmVyLiBZb3UgY2FuIGNyZWF0ZSBhIG5ldyBQZWVyIHRvIHJlY29ubmVjdCwgb3IgY2FsbCByZWNvbm5lY3Qgb24gdGhpcyBwZWVyIGlmIHlvdSBiZWxpZXZlIGl0cyBJRCB0byBzdGlsbCBiZSBhdmFpbGFibGUuXCIpO1xuICAgICAgICAgICAgdGhpcy5lbWl0RXJyb3IoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuRGlzY29ubmVjdGVkLCBcIkNhbm5vdCBjb25uZWN0IHRvIG5ldyBQZWVyIGFmdGVyIGRpc2Nvbm5lY3RpbmcgZnJvbSBzZXJ2ZXIuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkYXRhQ29ubmVjdGlvbiA9IG5ldyAkMzM1NjE3MGQ3YmNlN2YyMCRleHBvcnRzLkRhdGFDb25uZWN0aW9uKHBlZXIsIHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9hZGRDb25uZWN0aW9uKHBlZXIsIGRhdGFDb25uZWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIGRhdGFDb25uZWN0aW9uO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIHJlbW90ZSBwZWVyIHNwZWNpZmllZCBieSBpZCBhbmQgcmV0dXJucyBhIG1lZGlhIGNvbm5lY3Rpb24uXG4gICAgICogQHBhcmFtIHBlZXIgVGhlIGJyb2tlcmluZyBJRCBvZiB0aGUgcmVtb3RlIHBlZXIgKHRoZWlyIHBlZXIuaWQpLlxuICAgICAqIEBwYXJhbSBzdHJlYW0gVGhlIGNhbGxlcidzIG1lZGlhIHN0cmVhbVxuICAgICAqIEBwYXJhbSBvcHRpb25zIE1ldGFkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29ubmVjdGlvbiwgcGFzc2VkIGluIGJ5IHdob2V2ZXIgaW5pdGlhdGVkIHRoZSBjb25uZWN0aW9uLlxuICAgICAqLyAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OC5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uKHBlZXIsIHN0cmVhbSwgb3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSBvcHRpb25zID0ge307XG4gICAgICAgIGlmICh0aGlzLmRpc2Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0Lndhcm4oXCJZb3UgY2Fubm90IGNvbm5lY3QgdG8gYSBuZXcgUGVlciBiZWNhdXNlIHlvdSBjYWxsZWQgLmRpc2Nvbm5lY3QoKSBvbiB0aGlzIFBlZXIgYW5kIGVuZGVkIHlvdXIgY29ubmVjdGlvbiB3aXRoIHRoZSBzZXJ2ZXIuIFlvdSBjYW4gY3JlYXRlIGEgbmV3IFBlZXIgdG8gcmVjb25uZWN0LlwiKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdEVycm9yKCQ2MGZhZGVmMjFhMmRhYWZjJGV4cG9ydCQ5NTQ3YWFhMmUzOTAzMGZmLkRpc2Nvbm5lY3RlZCwgXCJDYW5ub3QgY29ubmVjdCB0byBuZXcgUGVlciBhZnRlciBkaXNjb25uZWN0aW5nIGZyb20gc2VydmVyLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmVycm9yKFwiVG8gY2FsbCBhIHBlZXIsIHlvdSBtdXN0IHByb3ZpZGUgYSBzdHJlYW0gZnJvbSB5b3VyIGJyb3dzZXIncyBgZ2V0VXNlck1lZGlhYC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lZGlhQ29ubmVjdGlvbiA9IG5ldyAkMzUzZGVlMzhmOWFiNTU3YiRleHBvcnRzLk1lZGlhQ29ubmVjdGlvbihwZWVyLCB0aGlzLCAkMjYwODhkN2RhNWIwM2Y2OSR2YXIkX19hc3NpZ24oJDI2MDg4ZDdkYTViMDNmNjkkdmFyJF9fYXNzaWduKHt9LCBvcHRpb25zKSwge1xuICAgICAgICAgICAgX3N0cmVhbTogc3RyZWFtXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5fYWRkQ29ubmVjdGlvbihwZWVyLCBtZWRpYUNvbm5lY3Rpb24pO1xuICAgICAgICByZXR1cm4gbWVkaWFDb25uZWN0aW9uO1xuICAgIH07XG4gICAgLyoqIEFkZCBhIGRhdGEvbWVkaWEgY29ubmVjdGlvbiB0byB0aGlzIHBlZXIuICovICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZS5fYWRkQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKHBlZXJJZCwgY29ubmVjdGlvbikge1xuICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiYWRkIGNvbm5lY3Rpb24gXCIuY29uY2F0KGNvbm5lY3Rpb24udHlwZSwgXCI6XCIpLmNvbmNhdChjb25uZWN0aW9uLmNvbm5lY3Rpb25JZCwgXCIgdG8gcGVlcklkOlwiKS5jb25jYXQocGVlcklkKSk7XG4gICAgICAgIGlmICghdGhpcy5fY29ubmVjdGlvbnMuaGFzKHBlZXJJZCkpIHRoaXMuX2Nvbm5lY3Rpb25zLnNldChwZWVySWQsIFtdKTtcbiAgICAgICAgdGhpcy5fY29ubmVjdGlvbnMuZ2V0KHBlZXJJZCkucHVzaChjb25uZWN0aW9uKTtcbiAgICB9O1xuICAgIC8vVE9ETyBzaG91bGQgYmUgcHJpdmF0ZVxuICAgICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZS5fcmVtb3ZlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gdGhpcy5fY29ubmVjdGlvbnMuZ2V0KGNvbm5lY3Rpb24ucGVlcik7XG4gICAgICAgIGlmIChjb25uZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY29ubmVjdGlvbnMuaW5kZXhPZihjb25uZWN0aW9uKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIGNvbm5lY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZW1vdmUgZnJvbSBsb3N0IG1lc3NhZ2VzXG4gICAgICAgIHRoaXMuX2xvc3RNZXNzYWdlcy5kZWxldGUoY29ubmVjdGlvbi5jb25uZWN0aW9uSWQpO1xuICAgIH07XG4gICAgLyoqIFJldHJpZXZlIGEgZGF0YS9tZWRpYSBjb25uZWN0aW9uIGZvciB0aGlzIHBlZXIuICovICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4LnByb3RvdHlwZS5nZXRDb25uZWN0aW9uID0gZnVuY3Rpb24ocGVlcklkLCBjb25uZWN0aW9uSWQpIHtcbiAgICAgICAgdmFyIGVfMywgX2E7XG4gICAgICAgIHZhciBjb25uZWN0aW9ucyA9IHRoaXMuX2Nvbm5lY3Rpb25zLmdldChwZWVySWQpO1xuICAgICAgICBpZiAoIWNvbm5lY3Rpb25zKSByZXR1cm4gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvcih2YXIgY29ubmVjdGlvbnNfMSA9ICQyNjA4OGQ3ZGE1YjAzZjY5JHZhciRfX3ZhbHVlcyhjb25uZWN0aW9ucyksIGNvbm5lY3Rpb25zXzFfMSA9IGNvbm5lY3Rpb25zXzEubmV4dCgpOyAhY29ubmVjdGlvbnNfMV8xLmRvbmU7IGNvbm5lY3Rpb25zXzFfMSA9IGNvbm5lY3Rpb25zXzEubmV4dCgpKXtcbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25zXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGlvbi5jb25uZWN0aW9uSWQgPT09IGNvbm5lY3Rpb25JZCkgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVfM18xKSB7XG4gICAgICAgICAgICBlXzMgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVfM18xXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uc18xXzEgJiYgIWNvbm5lY3Rpb25zXzFfMS5kb25lICYmIChfYSA9IGNvbm5lY3Rpb25zXzEucmV0dXJuKSkgX2EuY2FsbChjb25uZWN0aW9uc18xKTtcbiAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OC5wcm90b3R5cGUuX2RlbGF5ZWRBYm9ydCA9IGZ1bmN0aW9uKHR5cGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLl9hYm9ydCh0eXBlLCBtZXNzYWdlKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFbWl0cyBhbiBlcnJvciBtZXNzYWdlIGFuZCBkZXN0cm95cyB0aGUgUGVlci5cbiAgICAgKiBUaGUgUGVlciBpcyBub3QgZGVzdHJveWVkIGlmIGl0J3MgaW4gYSBkaXNjb25uZWN0ZWQgc3RhdGUsIGluIHdoaWNoIGNhc2VcbiAgICAgKiBpdCByZXRhaW5zIGl0cyBkaXNjb25uZWN0ZWQgc3RhdGUgYW5kIGl0cyBleGlzdGluZyBjb25uZWN0aW9ucy5cbiAgICAgKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLl9hYm9ydCA9IGZ1bmN0aW9uKHR5cGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgJDE2MTU3MDVlY2M2YWRjYTMkZXhwb3J0cy5kZWZhdWx0LmVycm9yKFwiQWJvcnRpbmchXCIpO1xuICAgICAgICB0aGlzLmVtaXRFcnJvcih0eXBlLCBtZXNzYWdlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9sYXN0U2VydmVySWQpIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICBlbHNlIHRoaXMuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gICAgLyoqIEVtaXRzIGEgdHlwZWQgZXJyb3IgbWVzc2FnZS4gKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLmVtaXRFcnJvciA9IGZ1bmN0aW9uKHR5cGUsIGVycikge1xuICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKTtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICBpZiAodHlwZW9mIGVyciA9PT0gXCJzdHJpbmdcIikgZXJyb3IgPSBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgZWxzZSBlcnJvciA9IGVycjtcbiAgICAgICAgZXJyb3IudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuZW1pdChcImVycm9yXCIsIGVycm9yKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlc3Ryb3lzIHRoZSBQZWVyOiBjbG9zZXMgYWxsIGFjdGl2ZSBjb25uZWN0aW9ucyBhcyB3ZWxsIGFzIHRoZSBjb25uZWN0aW9uXG4gICAgICogIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICogV2FybmluZzogVGhlIHBlZXIgY2FuIG5vIGxvbmdlciBjcmVhdGUgb3IgYWNjZXB0IGNvbm5lY3Rpb25zIGFmdGVyIGJlaW5nXG4gICAgICogIGRlc3Ryb3llZC5cbiAgICAgKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSByZXR1cm47XG4gICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5sb2coXCJEZXN0cm95IHBlZXIgd2l0aCBJRDpcIi5jb25jYXQodGhpcy5pZCkpO1xuICAgICAgICB0aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtaXQoXCJjbG9zZVwiKTtcbiAgICB9O1xuICAgIC8qKiBEaXNjb25uZWN0cyBldmVyeSBjb25uZWN0aW9uIG9uIHRoaXMgcGVlci4gKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLl9jbGVhbnVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlXzQsIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yKHZhciBfYiA9ICQyNjA4OGQ3ZGE1YjAzZjY5JHZhciRfX3ZhbHVlcyh0aGlzLl9jb25uZWN0aW9ucy5rZXlzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKXtcbiAgICAgICAgICAgICAgICB2YXIgcGVlcklkID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYW51cFBlZXIocGVlcklkKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25uZWN0aW9ucy5kZWxldGUocGVlcklkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZV80XzEpIHtcbiAgICAgICAgICAgIGVfNCA9IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZV80XzFcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfSBmaW5hbGx5e1xuICAgICAgICAgICAgICAgIGlmIChlXzQpIHRocm93IGVfNC5lcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvY2tldC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICB9O1xuICAgIC8qKiBDbG9zZXMgYWxsIGNvbm5lY3Rpb25zIHRvIHRoaXMgcGVlci4gKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLl9jbGVhbnVwUGVlciA9IGZ1bmN0aW9uKHBlZXJJZCkge1xuICAgICAgICB2YXIgZV81LCBfYTtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb25zID0gdGhpcy5fY29ubmVjdGlvbnMuZ2V0KHBlZXJJZCk7XG4gICAgICAgIGlmICghY29ubmVjdGlvbnMpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvcih2YXIgY29ubmVjdGlvbnNfMiA9ICQyNjA4OGQ3ZGE1YjAzZjY5JHZhciRfX3ZhbHVlcyhjb25uZWN0aW9ucyksIGNvbm5lY3Rpb25zXzJfMSA9IGNvbm5lY3Rpb25zXzIubmV4dCgpOyAhY29ubmVjdGlvbnNfMl8xLmRvbmU7IGNvbm5lY3Rpb25zXzJfMSA9IGNvbm5lY3Rpb25zXzIubmV4dCgpKXtcbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25zXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVfNV8xKSB7XG4gICAgICAgICAgICBlXzUgPSB7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGVfNV8xXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGZpbmFsbHl7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0aW9uc18yXzEgJiYgIWNvbm5lY3Rpb25zXzJfMS5kb25lICYmIChfYSA9IGNvbm5lY3Rpb25zXzIucmV0dXJuKSkgX2EuY2FsbChjb25uZWN0aW9uc18yKTtcbiAgICAgICAgICAgIH0gZmluYWxseXtcbiAgICAgICAgICAgICAgICBpZiAoZV81KSB0aHJvdyBlXzUuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3RzIHRoZSBQZWVyJ3MgY29ubmVjdGlvbiB0byB0aGUgUGVlclNlcnZlci4gRG9lcyBub3QgY2xvc2UgYW55XG4gICAgICogIGFjdGl2ZSBjb25uZWN0aW9ucy5cbiAgICAgKiBXYXJuaW5nOiBUaGUgcGVlciBjYW4gbm8gbG9uZ2VyIGNyZWF0ZSBvciBhY2NlcHQgY29ubmVjdGlvbnMgYWZ0ZXIgYmVpbmdcbiAgICAgKiAgZGlzY29ubmVjdGVkLiBJdCBhbHNvIGNhbm5vdCByZWNvbm5lY3QgdG8gdGhlIHNlcnZlci5cbiAgICAgKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzY29ubmVjdGVkKSByZXR1cm47XG4gICAgICAgIHZhciBjdXJyZW50SWQgPSB0aGlzLmlkO1xuICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiRGlzY29ubmVjdCBwZWVyIHdpdGggSUQ6XCIuY29uY2F0KGN1cnJlbnRJZCkpO1xuICAgICAgICB0aGlzLl9kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9vcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIHRoaXMuX2xhc3RTZXJ2ZXJJZCA9IGN1cnJlbnRJZDtcbiAgICAgICAgdGhpcy5faWQgPSBudWxsO1xuICAgICAgICB0aGlzLmVtaXQoXCJkaXNjb25uZWN0ZWRcIiwgY3VycmVudElkKTtcbiAgICB9O1xuICAgIC8qKiBBdHRlbXB0cyB0byByZWNvbm5lY3Qgd2l0aCB0aGUgc2FtZSBJRC4gKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kaXNjb25uZWN0ZWQgJiYgIXRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICAkMTYxNTcwNWVjYzZhZGNhMyRleHBvcnRzLmRlZmF1bHQubG9nKFwiQXR0ZW1wdGluZyByZWNvbm5lY3Rpb24gdG8gc2VydmVyIHdpdGggSUQgXCIuY29uY2F0KHRoaXMuX2xhc3RTZXJ2ZXJJZCkpO1xuICAgICAgICAgICAgdGhpcy5fZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9pbml0aWFsaXplKHRoaXMuX2xhc3RTZXJ2ZXJJZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kZXN0cm95ZWQpIHRocm93IG5ldyBFcnJvcihcIlRoaXMgcGVlciBjYW5ub3QgcmVjb25uZWN0IHRvIHRoZSBzZXJ2ZXIuIEl0IGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkLlwiKTtcbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuZGlzY29ubmVjdGVkICYmICF0aGlzLm9wZW4pIC8vIERvIG5vdGhpbmcuIFdlJ3JlIHN0aWxsIGNvbm5lY3RpbmcgdGhlIGZpcnN0IHRpbWUuXG4gICAgICAgICQxNjE1NzA1ZWNjNmFkY2EzJGV4cG9ydHMuZGVmYXVsdC5lcnJvcihcIkluIGEgaHVycnk/IFdlJ3JlIHN0aWxsIHRyeWluZyB0byBtYWtlIHRoZSBpbml0aWFsIGNvbm5lY3Rpb24hXCIpO1xuICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvcihcIlBlZXIgXCIuY29uY2F0KHRoaXMuaWQsIFwiIGNhbm5vdCByZWNvbm5lY3QgYmVjYXVzZSBpdCBpcyBub3QgZGlzY29ubmVjdGVkIGZyb20gdGhlIHNlcnZlciFcIikpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdCBvZiBhdmFpbGFibGUgcGVlciBJRHMuIElmIHlvdSdyZSBydW5uaW5nIHlvdXIgb3duIHNlcnZlciwgeW91J2xsXG4gICAgICogd2FudCB0byBzZXQgYWxsb3dfZGlzY292ZXJ5OiB0cnVlIGluIHRoZSBQZWVyU2VydmVyIG9wdGlvbnMuIElmIHlvdSdyZSB1c2luZ1xuICAgICAqIHRoZSBjbG91ZCBzZXJ2ZXIsIGVtYWlsIHRlYW1AcGVlcmpzLmNvbSB0byBnZXQgdGhlIGZ1bmN0aW9uYWxpdHkgZW5hYmxlZCBmb3JcbiAgICAgKiB5b3VyIGtleS5cbiAgICAgKi8gJDI2MDg4ZDdkYTViMDNmNjkkZXhwb3J0JGVjZDFmYzEzNmM0MjI0NDgucHJvdG90eXBlLmxpc3RBbGxQZWVycyA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjYiA9PT0gdm9pZCAwKSBjYiA9IGZ1bmN0aW9uKF8pIHt9O1xuICAgICAgICB0aGlzLl9hcGkubGlzdEFsbFBlZXJzKCkudGhlbihmdW5jdGlvbihwZWVycykge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHBlZXJzKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fYWJvcnQoJDYwZmFkZWYyMWEyZGFhZmMkZXhwb3J0JDk1NDdhYWEyZTM5MDMwZmYuU2VydmVyRXJyb3IsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnQkZWNkMWZjMTM2YzQyMjQ0OC5ERUZBVUxUX0tFWSA9IFwicGVlcmpzXCI7XG4gICAgcmV0dXJuICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4O1xufSgkYWM5Yjc1N2Q1MTE3OGUxNSRleHBvcnRzLkV2ZW50RW1pdHRlcik7XG5cblxudmFyICQ3MGQ3NjY2MTNmNTdiMDE0JGV4cG9ydCQyZTJiY2Q4NzM5YWUwMzkgPSAkMjYwODhkN2RhNWIwM2Y2OSRleHBvcnRzLlBlZXI7XG5cblxuZXhwb3J0IHskNzBkNzY2NjEzZjU3YjAxNCRleHBvcnQkMmUyYmNkODczOWFlMDM5IGFzIGRlZmF1bHQsICQyNjA4OGQ3ZGE1YjAzZjY5JGV4cG9ydCRlY2QxZmMxMzZjNDIyNDQ4IGFzIFBlZXIsICQwNmNiNTMxZWQ3ODQwZjc4JGV4cG9ydCQ3ZGViYjUwZWYxMWQ1ZTBiIGFzIHV0aWx9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVuZGxlci5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBVSSB9IGZyb20gXCJwZWFzeS11aVwiO1xyXG5pbXBvcnQgUGVlciBmcm9tIFwicGVlcmpzXCI7XHJcblxyXG5pZiAoXCJtZWRpYURldmljZXNcIiBpbiBuYXZpZ2F0b3IgJiYgXCJnZXRVc2VyTWVkaWFcIiBpbiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XHJcbiAgY29uc29sZS5sb2coXCJMZXQncyBnZXQgdGhpcyBwYXJ0eSBzdGFydGVkXCIpO1xyXG59IGVsc2Uge1xyXG4gIHdpbmRvdy5hbGVydChcIkJST1dTRVIgTk8gV09SS1lcIik7XHJcbn1cclxuXHJcbmNvbnN0IHBlZXIgPSBuZXcgUGVlcigpO1xyXG5cclxuY29uc3QgdGVtcGxhdGUgPSBgXHJcbjxkaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gXFwke2NsaWNrQD0+bWFrZUNhbGx9Pk1ha2UgQ2FsbDwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxcJHt2YWx1ZTw9PnJlbW90ZUlEfSAvPlxyXG4gICAgICAgIDxwPiBteSBpZCBpczogPC9wPlxyXG4gICAgICAgIDxzcGFuPlxcJHtteUlEfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHZpZGVvIGlkPVwibXl2aWRcIiAvPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG5jb25zdCBtb2RlbCA9IHtcclxuICBtYWtlQ2FsbDogKF9ldmVudDogYW55LCBtb2RlbDogYW55LCBfZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICBjb25zdCB0aGVpcklEID0gbW9kZWwucmVtb3RlSUQ7XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbGxpbmc6IFwiLCB0aGVpcklEKTtcclxuICAgIGNhbGwodGhlaXJJRCk7XHJcbiAgfSxcclxuICB2aWRlb1NyYzogXCJcIixcclxuICBteUlEOiBcIlwiLFxyXG4gIHJlbW90ZUlEOiBcIlwiLFxyXG59O1xyXG5cclxucGVlci5vbihcIm9wZW5cIiwgaWQgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwicGVlciBJRDogXCIsIGlkKTtcclxuICBtb2RlbC5teUlEID0gaWQ7XHJcbn0pO1xyXG5cclxucGVlci5vbihcImNhbGxcIiwgYXN5bmMgY2FsbCA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJnZXR0aW5nIGNhbGxlZFwiKTtcclxuICBsZXQgZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWE7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIGNhbGxcIik7XHJcbiAgICBsZXQgc3RyZWFtID0gYXdhaXQgZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJhbnN3ZXJpbmcgY2FsbFwiKTtcclxuICAgIGNhbGwuYW5zd2VyKHN0cmVhbSk7XHJcbiAgICBjYWxsLm9uKFwic3RyZWFtXCIsIChyZW1vdGVTdHJlYW06IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInN0cmVhbSBlc3RhYmxpc2hlZFwiKTtcclxuICAgICAgY29uc29sZS5sb2cocmVtb3RlU3RyZWFtKTtcclxuICAgICAgY29uc3QgdmlkQ250cmw6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXl2aWRcIik7XHJcbiAgICAgIHZpZENudHJsLnNyY09iamVjdCA9IHJlbW90ZVN0cmVhbTtcclxuICAgICAgdmlkQ250cmwucGxheSgpO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHdpbmRvdy5hbGVydChlcnJvcik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGNhbGwgPSBhc3luYyAocmVtb3RlUGVlcklEOiBhbnkpID0+IHtcclxuICBsZXQgZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWE7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyB1cCBzdHJlYW1cIik7XHJcbiAgICBsZXQgc3RyZWFtID0gYXdhaXQgZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJtYWtpbmcgY2FsbFwiKTtcclxuICAgIGNvbnN0IGNhbGwgPSBwZWVyLmNhbGwocmVtb3RlUGVlcklELCBzdHJlYW0sIHt9KTtcclxuICAgIGNvbnNvbGUubG9nKFwiY2FsbCBpZDogXCIsIGNhbGwpO1xyXG4gICAgY2FsbC5vbihcInN0cmVhbVwiLCAocmVtb3RlU3RyZWFtOiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJzdHJlYW0gZXN0YWJsaXNoZWRcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlbW90ZVN0cmVhbSk7XHJcbiAgICAgIGNvbnN0IHZpZENudHJsOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15dmlkXCIpO1xyXG4gICAgICB2aWRDbnRybC5zcmNPYmplY3QgPSByZW1vdGVTdHJlYW07XHJcbiAgICAgIHZpZENudHJsLnBsYXkoKTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB3aW5kb3cuYWxlcnQoZXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcblVJLmNyZWF0ZShkb2N1bWVudC5ib2R5LCB0ZW1wbGF0ZSwgbW9kZWwpO1xyXG5cclxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gIFVJLnVwZGF0ZSgpO1xyXG59LCAxMDAwIC8gNjApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=