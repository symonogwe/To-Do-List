/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

:root {
    --base-color: #023047;
    --sub-base-color: #FFB703;
    --sub-color: #454955;
    --text-color: #FFFFFF;
    --base-p-fs: calc(1rem + 1vw);
    --base-header-fs: calc(1.1rem + 1.2vw);
    --app-h2-fs: calc(.6rem + .6vw);
    --logo-width: max(40px, 35%);
    --base-header-ff: "Caprasimo", sans-serif;
    --base-paragraph-ff: "Comfortaa", sans-serif;
    --base-margin: 0.3em 0em;
    --box-shadow: 5px 10px 30px black;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
}

#main-container {
    height: 100vh;
}

nav {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    gap: 20px;
    align-items: center;
    height: 8%;
    background-color: var(--base-color);
}

.logo-div {
    width: 40%;
    display: grid;
    justify-items: center;
}

.logo-icon {
    width: var(--logo-width);
}

.header-div {
    width: 40%;
    display: grid;
    text-align: center;
}

.header-txt {
    color: var(--sub-base-color);
    font-size: var(--base-header-fs);
}

main {
    height: 92%;
    display: grid;
    grid-template-columns: 1fr 2fr;
}

/* MAIN LEFT */
.left-side-bar {
    display: grid;
    grid-template-rows: 1fr 2fr;
    background-color: var(--sub-color);
}

.home-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.home-div,
.today-div,
.week-div {
    height: 15%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    background-color: var(--base-color);
    border-radius: 10px;
    cursor: pointer;
}

.home-txt-div,
.today-txt-div,
.week-txt-div {
    grid-column: 2 / 3;
    color: var(--text-color);
    font-size: var(--app-h2-fs);
}

.home-logo-div,
.today-logo-div,
.week-logo-div {
    grid-column: 1 / 2;
    display: grid;
    justify-items: center;
}

.home-icons {
    width: max(30px, 20%);
    filter: invert(65%) sepia(85%) saturate(856%) hue-rotate(355deg) brightness(102%) contrast(104%);
}

.project-container {
    position: relative;
}

.project-names-h1{
    color: var(--sub-base-color);
    font-size: var(--base-header-fs);
    text-align: center;
}

.projects-div {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
}

.my-project {
    height: 10%;
    width: 70%;
    background-color: var(--base-color);
    margin-top: .5em;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    align-content: center;
}

.project-p {
    color: var(--text-color);
    font-size: var(--base-p-fs);
}

.project-delete-icon {
    width: max(30px, 40%);
    cursor: pointer;
    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);
}

.project-delete-icon:hover {
    filter: invert(23%) sepia(79%) saturate(4643%) hue-rotate(1deg) brightness(100%) contrast(109%);
}

.project-add-icon {
    width: max(30px, 40%);
    cursor: pointer;
    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);
}

.project-add-icon:hover {
    filter: invert(74%) sepia(22%) saturate(2177%) hue-rotate(77deg) brightness(111%) contrast(103%);
}

.project-btn-div {
    height: 8%;
    display: grid;
    justify-items: center;
    align-items: center;
}

.project-btn {
    background-color: var(--sub-base-color);
    color: var(--base-color);
    border: none;
    padding: 0em 2em;
    border-radius: 8px;
    height: 80%;
    cursor: pointer;
    display: grid;
    grid-template-columns: 0.5fr 1.5fr;
    align-items: center;
    gap: 4px;
}

.project-plus-icon {
    width: max(20px, 25%);
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(107%) contrast(106%);
}

/* MAIN RIGHT */
.right-side-bar {
    /* border: 3px solid orange; */
}

.right-main-container {
    border: 1px solid red;
    height: 100%;
}

.task-header {
    font-size: var(--base-header-fs);
    text-align: center;
    margin-bottom: 2em;
    color: var(--sub-base-color);
}

.add-task-btn-div {
    border: 1px solid orange;
    display: grid;
    justify-content: center;
    align-content: center;
}

/* PROJECT FORM STYLING */
#project-form-container {
    display: none;
    position: absolute;
    top: 10%;
    right: 0%;
    left: 0%;
    margin: auto;
    height: 13%;
    width: 70%;
}

.project-fieldset {
    border-radius: 5px;
    background-color: var(--sub-base-color);
    border: 1px solid red;
    height: 100%;
    position: relative;
    border: none;
}

.project-name {
    display: grid;
    grid-template-columns: 0.3fr 0.2fr;
    justify-content: center;
    gap: 4px;
}

.project-name > input {
    border: none;
}

.project-name > input::placeholder {
    text-align: center;
}

.project-form-submit {
    display: grid;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.project-form-btn {
    padding: .4em 1em;
    border: none;
    background-color: var(--base-color);
    color: var(--text-color);
    border-radius: 8px;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["\n\n:root {\n    --base-color: #023047;\n    --sub-base-color: #FFB703;\n    --sub-color: #454955;\n    --text-color: #FFFFFF;\n    --base-p-fs: calc(1rem + 1vw);\n    --base-header-fs: calc(1.1rem + 1.2vw);\n    --app-h2-fs: calc(.6rem + .6vw);\n    --logo-width: max(40px, 35%);\n    --base-header-ff: \"Caprasimo\", sans-serif;\n    --base-paragraph-ff: \"Comfortaa\", sans-serif;\n    --base-margin: 0.3em 0em;\n    --box-shadow: 5px 10px 30px black;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n}\n\n#main-container {\n    height: 100vh;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: 0.5fr 1.5fr;\n    gap: 20px;\n    align-items: center;\n    height: 8%;\n    background-color: var(--base-color);\n}\n\n.logo-div {\n    width: 40%;\n    display: grid;\n    justify-items: center;\n}\n\n.logo-icon {\n    width: var(--logo-width);\n}\n\n.header-div {\n    width: 40%;\n    display: grid;\n    text-align: center;\n}\n\n.header-txt {\n    color: var(--sub-base-color);\n    font-size: var(--base-header-fs);\n}\n\nmain {\n    height: 92%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n/* MAIN LEFT */\n.left-side-bar {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    background-color: var(--sub-color);\n}\n\n.home-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.home-div,\n.today-div,\n.week-div {\n    height: 15%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    align-items: center;\n    background-color: var(--base-color);\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.home-txt-div,\n.today-txt-div,\n.week-txt-div {\n    grid-column: 2 / 3;\n    color: var(--text-color);\n    font-size: var(--app-h2-fs);\n}\n\n.home-logo-div,\n.today-logo-div,\n.week-logo-div {\n    grid-column: 1 / 2;\n    display: grid;\n    justify-items: center;\n}\n\n.home-icons {\n    width: max(30px, 20%);\n    filter: invert(65%) sepia(85%) saturate(856%) hue-rotate(355deg) brightness(102%) contrast(104%);\n}\n\n.project-container {\n    position: relative;\n}\n\n.project-names-h1{\n    color: var(--sub-base-color);\n    font-size: var(--base-header-fs);\n    text-align: center;\n}\n\n.projects-div {\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n}\n\n.my-project {\n    height: 10%;\n    width: 70%;\n    background-color: var(--base-color);\n    margin-top: .5em;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 3fr 1fr 1fr;\n    align-content: center;\n}\n\n.project-p {\n    color: var(--text-color);\n    font-size: var(--base-p-fs);\n}\n\n.project-delete-icon {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.project-delete-icon:hover {\n    filter: invert(23%) sepia(79%) saturate(4643%) hue-rotate(1deg) brightness(100%) contrast(109%);\n}\n\n.project-add-icon {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.project-add-icon:hover {\n    filter: invert(74%) sepia(22%) saturate(2177%) hue-rotate(77deg) brightness(111%) contrast(103%);\n}\n\n.project-btn-div {\n    height: 8%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.project-btn {\n    background-color: var(--sub-base-color);\n    color: var(--base-color);\n    border: none;\n    padding: 0em 2em;\n    border-radius: 8px;\n    height: 80%;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 0.5fr 1.5fr;\n    align-items: center;\n    gap: 4px;\n}\n\n.project-plus-icon {\n    width: max(20px, 25%);\n    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(107%) contrast(106%);\n}\n\n/* MAIN RIGHT */\n.right-side-bar {\n    /* border: 3px solid orange; */\n}\n\n.right-main-container {\n    border: 1px solid red;\n    height: 100%;\n}\n\n.task-header {\n    font-size: var(--base-header-fs);\n    text-align: center;\n    margin-bottom: 2em;\n    color: var(--sub-base-color);\n}\n\n.add-task-btn-div {\n    border: 1px solid orange;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n}\n\n/* PROJECT FORM STYLING */\n#project-form-container {\n    display: none;\n    position: absolute;\n    top: 10%;\n    right: 0%;\n    left: 0%;\n    margin: auto;\n    height: 13%;\n    width: 70%;\n}\n\n.project-fieldset {\n    border-radius: 5px;\n    background-color: var(--sub-base-color);\n    border: 1px solid red;\n    height: 100%;\n    position: relative;\n    border: none;\n}\n\n.project-name {\n    display: grid;\n    grid-template-columns: 0.3fr 0.2fr;\n    justify-content: center;\n    gap: 4px;\n}\n\n.project-name > input {\n    border: none;\n}\n\n.project-name > input::placeholder {\n    text-align: center;\n}\n\n.project-form-submit {\n    display: grid;\n    justify-content: center;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.project-form-btn {\n    padding: .4em 1em;\n    border: none;\n    background-color: var(--base-color);\n    color: var(--text-color);\n    border-radius: 8px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/deleteDom.js":
/*!**************************!*\
  !*** ./src/deleteDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProject: () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    _project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.splice(targetIndex, 1);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createProjectDiv)();
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectDiv: () => (/* binding */ createProjectDiv)
/* harmony export */ });
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_eye_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/eye.svg */ "./src/assets/eye.svg");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteDom.js */ "./src/deleteDom.js");







function createProjectDiv() {
    const projectDiv = document.querySelector(".projects-div");

    if (projectDiv.innerHTML === "") {
        let myProjectDiv = document.createElement("div");
        myProjectDiv.classList.add("my-project");
        
        myProjectDiv.dataset.position = 0;
        
        let projectP = document.createElement("p");
        projectP.classList.add("project-p");
        projectP.textContent = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[0].name;

        let projectAddIcon = document.createElement("img");
        projectAddIcon.classList.add("project-add-icon");
        projectAddIcon.addEventListener("click", revealTasks);
        projectAddIcon.src = _assets_eye_svg__WEBPACK_IMPORTED_MODULE_1__;

        let projectDelete = document.createElement("img");
        projectDelete.classList.add("project-delete-icon");
        projectDelete.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject);
        projectDelete.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;

        myProjectDiv.append(projectP, projectAddIcon, projectDelete);

        projectDiv.append(myProjectDiv);

    } else {
        projectDiv.innerHTML = "";
        _project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.forEach(project => {
            let myProjectDiv = document.createElement("div");
            myProjectDiv.classList.add("my-project");

            myProjectDiv.dataset.position = +(_project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.indexOf(project));

            let projectP = document.createElement("p");
            projectP.classList.add("project-p");
            projectP.textContent = project.name;

            let projectAddIcon = document.createElement("img");
            projectAddIcon.classList.add("project-add-icon");
            projectAddIcon.addEventListener("click", revealTasks);
            projectAddIcon.src = _assets_eye_svg__WEBPACK_IMPORTED_MODULE_1__;

            let projectDelete = document.createElement("img");
            projectDelete.classList.add("project-delete-icon");
            projectDelete.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject);
            projectDelete.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;

            myProjectDiv.append(projectP, projectAddIcon, projectDelete);

            projectDiv.append(myProjectDiv);
        })
    }
}

function revealTasks(e) {
    const rightContainer = document.querySelector(".right-main-container");

    rightContainer.innerHTML = "";

    let targetIndex = e.target.parentElement.dataset.position;
    let targetObject = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[targetIndex];

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `${targetObject.name} To Do's`;

    rightContainer.append(taskHeader);

    if (targetObject.taskArray.length !== 0) {
        targetObject.taskArray.forEach(task => {
            // task div
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div");

            // task div items
            let titleDiv = document.createElement("div");
            titleDiv.classList.add(".title-div");
            titleDiv.textContent = task.title;

            let descriptionDiv = document.createElement("div");
            descriptionDiv.classList.add(".description-div");
            descriptionDiv.textContent = task.description;

            let dueDateDiv = document.createElement("div");
            dueDateDiv.classList.add(".due-date-div");
            dueDateDiv.textContent = task.dueDate;

            let priorityDiv = document.createElement("div");
            priorityDiv.classList.add(".priority-div");
            priorityDiv.textContent = task.priority;

            let checkListDiv = document.createElement("div");
            checkListDiv.classList.add(".check-list-div");
            checkListDiv.textContent = task.checklist;

            taskDiv.append(titleDiv, descriptionDiv, dueDateDiv, priorityDiv,checkListDiv);

            rightContainer.append(taskDiv);
        })
    }

    const addTaskBtnDiv = document.createElement("div");
    addTaskBtnDiv.classList.add("add-task-btn-div");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");

    const taskBtnP = document.createElement("p");
    taskBtnP.textContent = "New Task";

    addTaskBtn.append(taskBtnP);

    addTaskBtnDiv.append(addTaskBtn);

    rightContainer.append(addTaskBtnDiv);
}






/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideProjectForm: () => (/* binding */ hideProjectForm),
/* harmony export */   revealProjectForm: () => (/* binding */ revealProjectForm)
/* harmony export */ });

function revealProjectForm() {
    const form = document.getElementById("project-form-container");
    form.style.display = "block";
}

function hideProjectForm() {
    const formInput = document.getElementById("project-name");
    formInput.value = "";
    
    const form = document.getElementById("project-form-container");
    form.style.display = "none";
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projectsArray: () => (/* binding */ projectsArray)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./src/form.js");





// PROJECT CONSTRUCTOR
class Project {
    constructor(name) {
        this.name = name;
    }

    taskArray = [];

    newTask = (title, description, dueDate, priority, checkList) => {
        this.taskArray.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority, checkList));
    }

}

// PROJECTS ARRAY
const projectsArray = [];

// FUNCTION THAT CREATES A PROJECT
function createProject() {
    let name = document.getElementById("project-name").value;

    let newProject = new Project(name);
    projectsArray.push(newProject);
    
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createProjectDiv)();
    (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.hideProjectForm)();
}




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   taskDone: () => (/* binding */ taskDone)
/* harmony export */ });

class Task {
    constructor(title, description, dueDate, priority, checkList) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = checkList;
    }
}

// function that checks whether task is done
function taskDone(project) {
    project.taskArray.forEach(task => {
        if (task.checkList === true) {
            console.log(task.title + ` task in ${project.name} project has been completed`);
        }
    })
}



/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add .svg";

/***/ }),

/***/ "./src/assets/day.svg":
/*!****************************!*\
  !*** ./src/assets/day.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "day .svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "delete .svg";

/***/ }),

/***/ "./src/assets/eye.svg":
/*!****************************!*\
  !*** ./src/assets/eye.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eye .svg";

/***/ }),

/***/ "./src/assets/home.svg":
/*!*****************************!*\
  !*** ./src/assets/home.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "home .svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo .svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_home_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/home.svg */ "./src/assets/home.svg");
/* harmony import */ var _assets_day_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/day.svg */ "./src/assets/day.svg");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/add.svg */ "./src/assets/add.svg");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.js */ "./src/form.js");












// NAV SECTION
const logoIcon = document.querySelector(".logo-icon");
logoIcon.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__;

// LEFT SIDE-BAR (HOME SECTION)
const homeImg = document.getElementById("home-div-icon");
homeImg.src = _assets_home_svg__WEBPACK_IMPORTED_MODULE_2__;

const todayImg = document.getElementById("today-div-icon");
todayImg.src = _assets_day_svg__WEBPACK_IMPORTED_MODULE_3__;

const thisWeekImg = document.getElementById("week-div-icon");
thisWeekImg.src = _assets_day_svg__WEBPACK_IMPORTED_MODULE_3__;

const projectPlusImg = document.querySelector(".project-plus-icon");
projectPlusImg.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_4__;

// REVEAL PROJECT FORM
const revealFormBtn = document.querySelector(".project-btn");
revealFormBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_6__.revealProjectForm);

// CREATE NEW PROJECT
const projectNameBtn = document.querySelector(".project-form-btn");
projectNameBtn.addEventListener("click", _project_js__WEBPACK_IMPORTED_MODULE_5__.createProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFh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Oi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuXG46cm9vdCB7XG4gICAgLS1iYXNlLWNvbG9yOiAjMDIzMDQ3O1xuICAgIC0tc3ViLWJhc2UtY29sb3I6ICNGRkI3MDM7XG4gICAgLS1zdWItY29sb3I6ICM0NTQ5NTU7XG4gICAgLS10ZXh0LWNvbG9yOiAjRkZGRkZGO1xuICAgIC0tYmFzZS1wLWZzOiBjYWxjKDFyZW0gKyAxdncpO1xuICAgIC0tYmFzZS1oZWFkZXItZnM6IGNhbGMoMS4xcmVtICsgMS4ydncpO1xuICAgIC0tYXBwLWgyLWZzOiBjYWxjKC42cmVtICsgLjZ2dyk7XG4gICAgLS1sb2dvLXdpZHRoOiBtYXgoNDBweCwgMzUlKTtcbiAgICAtLWJhc2UtaGVhZGVyLWZmOiBcIkNhcHJhc2ltb1wiLCBzYW5zLXNlcmlmO1xuICAgIC0tYmFzZS1wYXJhZ3JhcGgtZmY6IFwiQ29tZm9ydGFhXCIsIHNhbnMtc2VyaWY7XG4gICAgLS1iYXNlLW1hcmdpbjogMC4zZW0gMGVtO1xuICAgIC0tYm94LXNoYWRvdzogNXB4IDEwcHggMzBweCBibGFjaztcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG59XG5cbiNtYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbn1cblxuLmxvZ28tZGl2IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nby1pY29uIHtcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG59XG5cbi5oZWFkZXItZGl2IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLXR4dCB7XG4gICAgY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcbn1cblxubWFpbiB7XG4gICAgaGVpZ2h0OiA5MiU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG59XG5cbi8qIE1BSU4gTEVGVCAqL1xuLmxlZnQtc2lkZS1iYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XG59XG5cbi5ob21lLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uaG9tZS1kaXYsXG4udG9kYXktZGl2LFxuLndlZWstZGl2IHtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZS10eHQtZGl2LFxuLnRvZGF5LXR4dC1kaXYsXG4ud2Vlay10eHQtZGl2IHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tYXBwLWgyLWZzKTtcbn1cblxuLmhvbWUtbG9nby1kaXYsXG4udG9kYXktbG9nby1kaXYsXG4ud2Vlay1sb2dvLWRpdiB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZS1pY29ucyB7XG4gICAgd2lkdGg6IG1heCgzMHB4LCAyMCUpO1xuICAgIGZpbHRlcjogaW52ZXJ0KDY1JSkgc2VwaWEoODUlKSBzYXR1cmF0ZSg4NTYlKSBodWUtcm90YXRlKDM1NWRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCgxMDQlKTtcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9qZWN0LW5hbWVzLWgxe1xuICAgIGNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWhlYWRlci1mcyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdHMtZGl2IHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubXktcHJvamVjdCB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMWZyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtcCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1wLWZzKTtcbn1cblxuLnByb2plY3QtZGVsZXRlLWljb24ge1xuICAgIHdpZHRoOiBtYXgoMzBweCwgNDAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg4OCUpO1xufVxuXG4ucHJvamVjdC1kZWxldGUtaWNvbjpob3ZlciB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3OSUpIHNhdHVyYXRlKDQ2NDMlKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA5JSk7XG59XG5cbi5wcm9qZWN0LWFkZC1pY29uIHtcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDglKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgxODBkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoODglKTtcbn1cblxuLnByb2plY3QtYWRkLWljb246aG92ZXIge1xuICAgIGZpbHRlcjogaW52ZXJ0KDc0JSkgc2VwaWEoMjIlKSBzYXR1cmF0ZSgyMTc3JSkgaHVlLXJvdGF0ZSg3N2RlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxMDMlKTtcbn1cblxuLnByb2plY3QtYnRuLWRpdiB7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDBlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogODAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnByb2plY3QtcGx1cy1pY29uIHtcbiAgICB3aWR0aDogbWF4KDIwcHgsIDI1JSk7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDYlKTtcbn1cblxuLyogTUFJTiBSSUdIVCAqL1xuLnJpZ2h0LXNpZGUtYmFyIHtcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7ICovXG59XG5cbi5yaWdodC1tYWluLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnRhc2staGVhZGVyIHtcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIGNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XG59XG5cbi5hZGQtdGFzay1idG4tZGl2IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBvcmFuZ2U7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFBST0pFQ1QgRk9STSBTVFlMSU5HICovXG4jcHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGxlZnQ6IDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDEzJTtcbiAgICB3aWR0aDogNzAlO1xufVxuXG4ucHJvamVjdC1maWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9qZWN0LW5hbWUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAwLjJmcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbn1cblxuLnByb2plY3QtbmFtZSA+IGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9qZWN0LW5hbWUgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3QtZm9ybS1zdWJtaXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4ucHJvamVjdC1mb3JtLWJ0biB7XG4gICAgcGFkZGluZzogLjRlbSAxZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10s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UixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuXFxuOnJvb3Qge1xcbiAgICAtLWJhc2UtY29sb3I6ICMwMjMwNDc7XFxuICAgIC0tc3ViLWJhc2UtY29sb3I6ICNGRkI3MDM7XFxuICAgIC0tc3ViLWNvbG9yOiAjNDU0OTU1O1xcbiAgICAtLXRleHQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tYmFzZS1wLWZzOiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgICAtLWJhc2UtaGVhZGVyLWZzOiBjYWxjKDEuMXJlbSArIDEuMnZ3KTtcXG4gICAgLS1hcHAtaDItZnM6IGNhbGMoLjZyZW0gKyAuNnZ3KTtcXG4gICAgLS1sb2dvLXdpZHRoOiBtYXgoNDBweCwgMzUlKTtcXG4gICAgLS1iYXNlLWhlYWRlci1mZjogXFxcIkNhcHJhc2ltb1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIC0tYmFzZS1wYXJhZ3JhcGgtZmY6IFxcXCJDb21mb3J0YWFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWJhc2UtbWFyZ2luOiAwLjNlbSAwZW07XFxuICAgIC0tYm94LXNoYWRvdzogNXB4IDEwcHggMzBweCBibGFjaztcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxufVxcblxcbi5sb2dvLWRpdiB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28taWNvbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcXG59XFxuXFxuLmhlYWRlci1kaXYge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdHh0IHtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWhlYWRlci1mcyk7XFxufVxcblxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IDkyJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4vKiBNQUlOIExFRlQgKi9cXG4ubGVmdC1zaWRlLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5ob21lLWRpdixcXG4udG9kYXktZGl2LFxcbi53ZWVrLWRpdiB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob21lLXR4dC1kaXYsXFxuLnRvZGF5LXR4dC1kaXYsXFxuLndlZWstdHh0LWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWFwcC1oMi1mcyk7XFxufVxcblxcbi5ob21lLWxvZ28tZGl2LFxcbi50b2RheS1sb2dvLWRpdixcXG4ud2Vlay1sb2dvLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1pY29ucyB7XFxuICAgIHdpZHRoOiBtYXgoMzBweCwgMjAlKTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjUlKSBzZXBpYSg4NSUpIHNhdHVyYXRlKDg1NiUpIGh1ZS1yb3RhdGUoMzU1ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9qZWN0LW5hbWVzLWgxe1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtZGl2IHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5teS1wcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXAge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1wLWZzKTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWljb24ge1xcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzklKSBzYXR1cmF0ZSg0NjQzJSkgaHVlLXJvdGF0ZSgxZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwOSUpO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtaWNvbiB7XFxuICAgIHdpZHRoOiBtYXgoMzBweCwgNDAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg4JSkgc2F0dXJhdGUoNzQ4MCUpIGh1ZS1yb3RhdGUoMTgwZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5wcm9qZWN0LWFkZC1pY29uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNzQlKSBzZXBpYSgyMiUpIHNhdHVyYXRlKDIxNzclKSBodWUtcm90YXRlKDc3ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tZGl2IHtcXG4gICAgaGVpZ2h0OiA4JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwZW0gMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1wbHVzLWljb24ge1xcbiAgICB3aWR0aDogbWF4KDIwcHgsIDI1JSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbi8qIE1BSU4gUklHSFQgKi9cXG4ucmlnaHQtc2lkZS1iYXIge1xcbiAgICAvKiBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2U7ICovXFxufVxcblxcbi5yaWdodC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XFxufVxcblxcbi5hZGQtdGFzay1idG4tZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgb3JhbmdlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBQUk9KRUNUIEZPUk0gU1RZTElORyAqL1xcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEzJTtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnByb2plY3QtZmllbGRzZXQge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAwLjJmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lID4gaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tc3VibWl0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG4ge1xcbiAgICBwYWRkaW5nOiAuNGVtIDFlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdERpdiB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICAgIGxldCB0YXJnZXRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbjtcblxuICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICBjcmVhdGVQcm9qZWN0RGl2KCk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVByb2plY3QgfSIsImltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuL2Fzc2V0cy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgZXllSWNvbiBmcm9tIFwiLi9hc3NldHMvZXllLnN2Z1wiO1xuXG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL2RlbGV0ZURvbS5qc1wiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaXYoKSB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtZGl2XCIpO1xuXG4gICAgaWYgKHByb2plY3REaXYuaW5uZXJIVE1MID09PSBcIlwiKSB7XG4gICAgICAgIGxldCBteVByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBteVByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcIm15LXByb2plY3RcIik7XG4gICAgICAgIFxuICAgICAgICBteVByb2plY3REaXYuZGF0YXNldC5wb3NpdGlvbiA9IDA7XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJvamVjdFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvamVjdFAuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcFwiKTtcbiAgICAgICAgcHJvamVjdFAudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5WzBdLm5hbWU7XG5cbiAgICAgICAgbGV0IHByb2plY3RBZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcHJvamVjdEFkZEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYWRkLWljb25cIik7XG4gICAgICAgIHByb2plY3RBZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXZlYWxUYXNrcyk7XG4gICAgICAgIHByb2plY3RBZGRJY29uLnNyYyA9IGV5ZUljb247XG5cbiAgICAgICAgbGV0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlbGV0ZS1pY29uXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdERlbGV0ZS5zcmMgPSBkZWxldGVJY29uO1xuXG4gICAgICAgIG15UHJvamVjdERpdi5hcHBlbmQocHJvamVjdFAsIHByb2plY3RBZGRJY29uLCBwcm9qZWN0RGVsZXRlKTtcblxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChteVByb2plY3REaXYpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgbXlQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG15UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibXktcHJvamVjdFwiKTtcblxuICAgICAgICAgICAgbXlQcm9qZWN0RGl2LmRhdGFzZXQucG9zaXRpb24gPSArKHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0KSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgcHJvamVjdFAuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcFwiKTtcbiAgICAgICAgICAgIHByb2plY3RQLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdEFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgcHJvamVjdEFkZEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYWRkLWljb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0QWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZWFsVGFza3MpO1xuICAgICAgICAgICAgcHJvamVjdEFkZEljb24uc3JjID0gZXllSWNvbjtcblxuICAgICAgICAgICAgbGV0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZWxldGUtaWNvblwiKTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3QpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZS5zcmMgPSBkZWxldGVJY29uO1xuXG4gICAgICAgICAgICBteVByb2plY3REaXYuYXBwZW5kKHByb2plY3RQLCBwcm9qZWN0QWRkSWNvbiwgcHJvamVjdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kKG15UHJvamVjdERpdik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXZlYWxUYXNrcyhlKSB7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LW1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgcmlnaHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGxldCB0YXJnZXRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbjtcbiAgICBsZXQgdGFyZ2V0T2JqZWN0ID0gcHJvamVjdHNBcnJheVt0YXJnZXRJbmRleF07XG5cbiAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staGVhZGVyXCIpO1xuICAgIHRhc2tIZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0YXJnZXRPYmplY3QubmFtZX0gVG8gRG8nc2A7XG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0hlYWRlcik7XG5cbiAgICBpZiAodGFyZ2V0T2JqZWN0LnRhc2tBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGFyZ2V0T2JqZWN0LnRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgLy8gdGFzayBkaXZcbiAgICAgICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2XCIpO1xuXG4gICAgICAgICAgICAvLyB0YXNrIGRpdiBpdGVtc1xuICAgICAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCIudGl0bGUtZGl2XCIpO1xuICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcIi5kZXNjcmlwdGlvbi1kaXZcIik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcIi5kdWUtZGF0ZS1kaXZcIik7XG4gICAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcIi5wcmlvcml0eS1kaXZcIik7XG4gICAgICAgICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAgICAgICAgIGxldCBjaGVja0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY2hlY2tMaXN0RGl2LmNsYXNzTGlzdC5hZGQoXCIuY2hlY2stbGlzdC1kaXZcIik7XG4gICAgICAgICAgICBjaGVja0xpc3REaXYudGV4dENvbnRlbnQgPSB0YXNrLmNoZWNrbGlzdDtcblxuICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmQodGl0bGVEaXYsIGRlc2NyaXB0aW9uRGl2LCBkdWVEYXRlRGl2LCBwcmlvcml0eURpdixjaGVja0xpc3REaXYpO1xuXG4gICAgICAgICAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0Rpdik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkVGFza0J0bkRpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuLWRpdlwiKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0blwiKTtcblxuICAgIGNvbnN0IHRhc2tCdG5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0J0blAudGV4dENvbnRlbnQgPSBcIk5ldyBUYXNrXCI7XG5cbiAgICBhZGRUYXNrQnRuLmFwcGVuZCh0YXNrQnRuUCk7XG5cbiAgICBhZGRUYXNrQnRuRGl2LmFwcGVuZChhZGRUYXNrQnRuKTtcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZChhZGRUYXNrQnRuRGl2KTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3REaXYgfTtcbiIsIlxuZnVuY3Rpb24gcmV2ZWFsUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGhpZGVQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKTtcbiAgICBmb3JtSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybS1jb250YWluZXJcIik7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cblxuZXhwb3J0IHsgcmV2ZWFsUHJvamVjdEZvcm0sIGhpZGVQcm9qZWN0Rm9ybSB9OyIsIlxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3REaXYgfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGhpZGVQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm0uanNcIjtcblxuLy8gUFJPSkVDVCBDT05TVFJVQ1RPUlxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHRhc2tBcnJheSA9IFtdO1xuXG4gICAgbmV3VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpID0+IHtcbiAgICAgICAgdGhpcy50YXNrQXJyYXkucHVzaChuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpKTtcbiAgICB9XG5cbn1cblxuLy8gUFJPSkVDVFMgQVJSQVlcbmNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuLy8gRlVOQ1RJT04gVEhBVCBDUkVBVEVTIEEgUFJPSkVDVFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgXG4gICAgY3JlYXRlUHJvamVjdERpdigpO1xuICAgIGhpZGVQcm9qZWN0Rm9ybSgpO1xufVxuXG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzQXJyYXkgfTsiLCJcbmNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrTGlzdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNoZWNrTGlzdCA9IGNoZWNrTGlzdDtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIHdoZXRoZXIgdGFzayBpcyBkb25lXG5mdW5jdGlvbiB0YXNrRG9uZShwcm9qZWN0KSB7XG4gICAgcHJvamVjdC50YXNrQXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKHRhc2suY2hlY2tMaXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrLnRpdGxlICsgYCB0YXNrIGluICR7cHJvamVjdC5uYW1lfSBwcm9qZWN0IGhhcyBiZWVuIGNvbXBsZXRlZGApO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgVGFzaywgdGFza0RvbmV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcblxuaW1wb3J0IGxvZ28gZnJvbSBcIi4vYXNzZXRzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgaG9tZURpdkljb24gZnJvbSBcIi4vYXNzZXRzL2hvbWUuc3ZnXCI7XG5pbXBvcnQgZGF0ZURpdkljb24gZnJvbSBcIi4vYXNzZXRzL2RheS5zdmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2Fzc2V0cy9hZGQuc3ZnXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyByZXZlYWxQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm0uanNcIjtcblxuXG4vLyBOQVYgU0VDVElPTlxuY29uc3QgbG9nb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28taWNvblwiKTtcbmxvZ29JY29uLnNyYyA9IGxvZ287XG5cbi8vIExFRlQgU0lERS1CQVIgKEhPTUUgU0VDVElPTilcbmNvbnN0IGhvbWVJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtZGl2LWljb25cIik7XG5ob21lSW1nLnNyYyA9IGhvbWVEaXZJY29uO1xuXG5jb25zdCB0b2RheUltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktZGl2LWljb25cIik7XG50b2RheUltZy5zcmMgPSBkYXRlRGl2SWNvbjtcblxuY29uc3QgdGhpc1dlZWtJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWstZGl2LWljb25cIik7XG50aGlzV2Vla0ltZy5zcmMgPSBkYXRlRGl2SWNvbjtcblxuY29uc3QgcHJvamVjdFBsdXNJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcGx1cy1pY29uXCIpO1xucHJvamVjdFBsdXNJbWcuc3JjID0gYWRkSWNvbjtcblxuLy8gUkVWRUFMIFBST0pFQ1QgRk9STVxuY29uc3QgcmV2ZWFsRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1idG5cIik7XG5yZXZlYWxGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXZlYWxQcm9qZWN0Rm9ybSk7XG5cbi8vIENSRUFURSBORVcgUFJPSkVDVFxuY29uc3QgcHJvamVjdE5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1idG5cIik7XG5wcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=