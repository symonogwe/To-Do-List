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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Sanchez&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=League+Spartan&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --base-color: #023047;
    --sub-base-color: #ffa400;
    --sub-color: #454955;
    --text-color: #FFFFFF;
    --base-p-fs: calc(1rem + 1vw);
    --base-header-fs: calc(1.1rem + 1.2vw);
    --app-h2-fs: calc(.6rem + .6vw);
    --logo-width: max(40px, 35%);
    --base-header-ff: "Sanchez", sans-serif;
    --base-paragraph-ff: "League Spartan", sans-serif;
    --base-margin: 0.3em 0em;
    --box-shadow: 5px 10px 30px black;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    filter: invert(96%) sepia(4%) saturate(0%) hue-rotate(4deg) brightness(105%) contrast(105%);
}

.header-div {
    width: 40%;
    display: grid;
    text-align: center;
}

.header-txt {
    color: var(--sub-base-color);
    font-size: var(--base-header-fs);
    font-family: var(--base-header-ff);
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
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    border-radius: 10px;
    cursor: default;
}

.home-div:hover {
    background-color: var(--base-color);
}

.today-div:hover {
    background-color: var(--base-color);
}

.week-div:hover {
    background-color: var(--base-color);
}



.home-txt-div,
.today-txt-div,
.week-txt-div {
    grid-column: 2 / 3;
    color: var(--text-color);
    font-size: var(--app-h2-fs);
    font-family: var(--base-paragraph-ff);
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
    filter: invert(96%) sepia(4%) saturate(0%) hue-rotate(4deg) brightness(105%) contrast(105%);
}

.home-eye,
.today-eye,
.week-eye {
    width: max(30px, 20%);
    cursor: pointer;
    filter: invert(78%) sepia(23%) saturate(901%) hue-rotate(169deg) brightness(100%) contrast(89%);
}


.home-eye:hover {
    scale: 1.2;
    transition: .2s;
    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);
}

.today-eye:hover {
    scale: 1.2;
    transition: .2s;
    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);
}

.week-eye:hover {
    scale: 1.2;
    transition: .2s;
    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);
}

.project-container {
    position: relative;
}

.project-names-h1{
    color: var(--sub-base-color);
    font-size: var(--base-header-fs);
    font-family: var(--base-header-ff);
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
    margin-top: .7em;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    align-content: center;
}

.project-p {
    padding-left: .5em;
    display: grid;
    align-content: center;
    color: var(--text-color);
    font-size: var(--base-p-fs);
    font-family: var(--base-paragraph-ff);
}

.project-delete-icon {
    width: max(30px, 40%);
    cursor: pointer;
    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);
}

.project-delete-icon:hover {
    scale: 1.2;
    transition: .2s;
    filter: invert(23%) sepia(79%) saturate(4643%) hue-rotate(1deg) brightness(100%) contrast(109%);
}

.project-add-icon {
    width: max(30px, 40%);
    cursor: pointer;
    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);
}

.project-add-icon:hover {
    scale: 1.2;
    transition: .2s;
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
    font-size: calc(.5rem + .6vw);
    font-family: var(--base-paragraph-ff);
}

.project-btn:hover {
    scale: 1.1;
    transition: .2s;
}

.project-plus-icon {
    width: max(20px, 25%);
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(107%) contrast(106%);
}

/* PROJECT FORM STYLING */
#project-form-container {
    border: 1px solid var(--text-color);
    border-radius: 10px;
    display: none;
    position: absolute;
    top: 10%;
    right: 0%;
    left: 0%;
    margin: auto;
    height: 15%;
    width: 70%;
    background-color: #023047;
    padding: .4em .4em;
}

.project-name {
    display: grid;
    justify-content: center;
}

.project-name > input {
    border: none;
    width: 100%;
    height: 150%;
}

.project-name > input:focus {
    outline: none;
}

.project-name > input::placeholder {
    text-align: center;
}

.project-form-submit {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}

.project-form-btn {
    padding: .4em 1em;
    border: none;
    background-color: var(--sub-base-color);
    color: var(--text-color);
    border-radius: 8px;
    cursor: pointer;
}

.project-form-cancel {
    padding: .4em 1em;
    border: none;
    background-color: var(--sub-color);
    color: var(--text-color);
    border-radius: 8px;
    cursor: pointer;
}

/* MAIN RIGHT */
.right-side-bar {
    position: relative;
    /* background-color: #90dbf4; */
    background-color: #ccdbdc;
    overflow-y: auto;

}

.right-main-container {
    height: 100%;
}

.task-header {
    font-size: var(--base-header-fs);
    font-family: var(--base-header-ff);
    text-align: center;
    margin-bottom: 2em;
    color: var(--base-color);
}

.task-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5%;
    width: 80%;
    margin: 1em auto;
    padding: .4em .8em;
    background-color: var(--sub-color);
    color: var(--text-color);
    border-radius: 10px;
}

.completed-task {
    background-color: red;
    text-decoration: line-through;
}

.title-div {
    font-size: calc(.9rem + .9vw);
    font-family: var(--base-paragraph-ff);
}

.due-date-div {
    font-size: calc(.7rem + .7vw);
    font-family: var(--base-paragraph-ff);
}

.priority-div {
    font-size: calc(.9rem + .9vw);
    font-family: var(--base-paragraph-ff);
}

.complete-task-div {
    font-size: calc(.9rem + .9vw);
    font-family: var(--base-paragraph-ff);
}

.complete-task-btn {
    background-color: darkgreen;
    color: var(--text-color);
    border: none;
    border-radius: 5px;
    padding: .2em .4em;
    cursor: pointer;
}

.complete-task-btn:hover {
    scale: 1.1;
    transition: .2s;
}

.delete-task-div {
    width: 8%;
    display: grid;
    justify-content: center;
    align-content: center;
}

.delete-task-img {
    width: max(30px, 40%);
    cursor: pointer;
    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);
}

.delete-task-img:hover {
    scale: 1.1;
    transition: .2s;
}

.add-task-btn-div {
    display: grid;
    justify-content: center;
    align-content: center;
    height: 6%;
}

.add-task-btn {
    background-color: var(--sub-base-color);
    border: none;
    color: var(--sub-color);
    padding: .4em .8em;
    border-radius: 10px;
    cursor: pointer;
    font-family: var(--base-paragraph-ff);
    font-size: calc(.6rem + .6vw);
}

.add-task-btn:hover {
    scale: 1.1;
    transition: .2s;
}

/* PROJECT TASK STYLING */
#task-form-container {
    display: none;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 10%;
    margin: auto;
    height: 40%;
    width: 55%;
    background-color: var(--sub-color);
    border-radius: 10px;
}

#task-form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


.task-divs {
    border: 2px solid var(--text-color);
    height: 60px;
    color: var(--text-color);
    margin: .4em .6em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 5px;
}

#task-form-container  input:focus {
    outline: none;
}

.task-btn-div {
    border: none;
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
}

.task-btn {
    background-color: var(--sub-base-color);
    border: none;
    color: var(--text-color);
    padding: .4em .8em;
    border-radius: 5px;
    cursor: pointer;
}

.hide-task-form {
    background-color: var(--base-color);
    border: none;
    color: var(--text-color);
    padding: .4em .8em;
    border-radius: 5px;
    cursor: pointer;
}

/* FOOTER */
footer {
    position: fixed;
    bottom: 0;
    width: 70%;
    margin: 0 auto;
    height: 40px;
    display: flex;
    opacity: .8;
}
  
.social-icons-container {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
}

.social-icon-1,
.social-icon-2 {
    width: max(40px, 30%);
}
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAGA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,oBAAoB;IACpB,qBAAqB;IACrB,6BAA6B;IAC7B,sCAAsC;IACtC,+BAA+B;IAC/B,4BAA4B;IAC5B,uCAAuC;IACvC,iDAAiD;IACjD,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,SAAS;IACT,mBAAmB;IACnB,UAAU;IACV,mCAAmC;AACvC;;AAEA;IACI,UAAU;IACV,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,wBAAwB;IACxB,2FAA2F;AAC/F;;AAEA;IACI,UAAU;IACV,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,gCAAgC;IAChC,kCAAkC;AACtC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;AAClC;;AAEA,cAAc;AACd;IACI,aAAa;IACb,2BAA2B;IAC3B,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;;;IAGI,WAAW;IACX,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;AACvC;;;;AAIA;;;IAGI,kBAAkB;IAClB,wBAAwB;IACxB,2BAA2B;IAC3B,qCAAqC;AACzC;;AAEA;;;IAGI,kBAAkB;IAClB,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,2FAA2F;AAC/F;;AAEA;;;IAGI,qBAAqB;IACrB,eAAe;IACf,+FAA+F;AACnG;;;AAGA;IACI,UAAU;IACV,eAAe;IACf,iGAAiG;AACrG;;AAEA;IACI,UAAU;IACV,eAAe;IACf,iGAAiG;AACrG;;AAEA;IACI,UAAU;IACV,eAAe;IACf,iGAAiG;AACrG;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4BAA4B;IAC5B,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,UAAU;IACV,mCAAmC;IACnC,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,wBAAwB;IACxB,2BAA2B;IAC3B,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,gGAAgG;AACpG;;AAEA;IACI,UAAU;IACV,eAAe;IACf,+FAA+F;AACnG;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,gGAAgG;AACpG;;AAEA;IACI,UAAU;IACV,eAAe;IACf,gGAAgG;AACpG;;AAEA;IACI,UAAU;IACV,aAAa;IACb,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,wBAAwB;IACxB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,aAAa;IACb,kCAAkC;IAClC,mBAAmB;IACnB,QAAQ;IACR,6BAA6B;IAC7B,qCAAqC;AACzC;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,8FAA8F;AAClG;;AAEA,yBAAyB;AACzB;IACI,mCAAmC;IACnC,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,UAAU;IACV,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,uCAAuC;IACvC,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,kCAAkC;IAClC,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;AACnB;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,+BAA+B;IAC/B,yBAAyB;IACzB,gBAAgB;;AAEpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gCAAgC;IAChC,kCAAkC;IAClC,kBAAkB;IAClB,kBAAkB;IAClB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,gBAAgB;IAChB,kBAAkB;IAClB,kCAAkC;IAClC,wBAAwB;IACxB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;IAC7B,qCAAqC;AACzC;;AAEA;IACI,6BAA6B;IAC7B,qCAAqC;AACzC;;AAEA;IACI,6BAA6B;IAC7B,qCAAqC;AACzC;;AAEA;IACI,6BAA6B;IAC7B,qCAAqC;AACzC;;AAEA;IACI,2BAA2B;IAC3B,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,gGAAgG;AACpG;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,qCAAqC;IACrC,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA,yBAAyB;AACzB;IACI,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,UAAU;IACV,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;;AAGA;IACI,mCAAmC;IACnC,YAAY;IACZ,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,cAAc;IACd,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,uCAAuC;IACvC,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,wBAAwB;IACxB,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA,WAAW;AACX;IACI,eAAe;IACf,SAAS;IACT,UAAU;IACV,cAAc;IACd,YAAY;IACZ,aAAa;IACb,WAAW;AACf;;AAEA;IACI,UAAU;IACV,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;;IAEI,qBAAqB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=League+Spartan&display=swap');\n\n:root {\n    --base-color: #023047;\n    --sub-base-color: #ffa400;\n    --sub-color: #454955;\n    --text-color: #FFFFFF;\n    --base-p-fs: calc(1rem + 1vw);\n    --base-header-fs: calc(1.1rem + 1.2vw);\n    --app-h2-fs: calc(.6rem + .6vw);\n    --logo-width: max(40px, 35%);\n    --base-header-ff: \"Sanchez\", sans-serif;\n    --base-paragraph-ff: \"League Spartan\", sans-serif;\n    --base-margin: 0.3em 0em;\n    --box-shadow: 5px 10px 30px black;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#main-container {\n    height: 100vh;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: 0.5fr 1.5fr;\n    gap: 20px;\n    align-items: center;\n    height: 8%;\n    background-color: var(--base-color);\n}\n\n.logo-div {\n    width: 40%;\n    display: grid;\n    justify-items: center;\n}\n\n.logo-icon {\n    width: var(--logo-width);\n    filter: invert(96%) sepia(4%) saturate(0%) hue-rotate(4deg) brightness(105%) contrast(105%);\n}\n\n.header-div {\n    width: 40%;\n    display: grid;\n    text-align: center;\n}\n\n.header-txt {\n    color: var(--sub-base-color);\n    font-size: var(--base-header-fs);\n    font-family: var(--base-header-ff);\n}\n\nmain {\n    height: 92%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n/* MAIN LEFT */\n.left-side-bar {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    background-color: var(--sub-color);\n}\n\n.home-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.home-div,\n.today-div,\n.week-div {\n    height: 15%;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    border-radius: 10px;\n    cursor: default;\n}\n\n.home-div:hover {\n    background-color: var(--base-color);\n}\n\n.today-div:hover {\n    background-color: var(--base-color);\n}\n\n.week-div:hover {\n    background-color: var(--base-color);\n}\n\n\n\n.home-txt-div,\n.today-txt-div,\n.week-txt-div {\n    grid-column: 2 / 3;\n    color: var(--text-color);\n    font-size: var(--app-h2-fs);\n    font-family: var(--base-paragraph-ff);\n}\n\n.home-logo-div,\n.today-logo-div,\n.week-logo-div {\n    grid-column: 1 / 2;\n    display: grid;\n    justify-items: center;\n}\n\n.home-icons {\n    width: max(30px, 20%);\n    filter: invert(96%) sepia(4%) saturate(0%) hue-rotate(4deg) brightness(105%) contrast(105%);\n}\n\n.home-eye,\n.today-eye,\n.week-eye {\n    width: max(30px, 20%);\n    cursor: pointer;\n    filter: invert(78%) sepia(23%) saturate(901%) hue-rotate(169deg) brightness(100%) contrast(89%);\n}\n\n\n.home-eye:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);\n}\n\n.today-eye:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);\n}\n\n.week-eye:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);\n}\n\n.project-container {\n    position: relative;\n}\n\n.project-names-h1{\n    color: var(--sub-base-color);\n    font-size: var(--base-header-fs);\n    font-family: var(--base-header-ff);\n    text-align: center;\n}\n\n.projects-div {\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n}\n\n.my-project {\n    height: 10%;\n    width: 70%;\n    background-color: var(--base-color);\n    margin-top: .7em;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 3fr 1fr 1fr;\n    align-content: center;\n}\n\n.project-p {\n    padding-left: .5em;\n    display: grid;\n    align-content: center;\n    color: var(--text-color);\n    font-size: var(--base-p-fs);\n    font-family: var(--base-paragraph-ff);\n}\n\n.project-delete-icon {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.project-delete-icon:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(23%) sepia(79%) saturate(4643%) hue-rotate(1deg) brightness(100%) contrast(109%);\n}\n\n.project-add-icon {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.project-add-icon:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(74%) sepia(22%) saturate(2177%) hue-rotate(77deg) brightness(111%) contrast(103%);\n}\n\n.project-btn-div {\n    height: 8%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.project-btn {\n    background-color: var(--sub-base-color);\n    color: var(--base-color);\n    border: none;\n    padding: 0em 2em;\n    border-radius: 8px;\n    height: 80%;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 0.5fr 1.5fr;\n    align-items: center;\n    gap: 4px;\n    font-size: calc(.5rem + .6vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.project-btn:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n.project-plus-icon {\n    width: max(20px, 25%);\n    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(107%) contrast(106%);\n}\n\n/* PROJECT FORM STYLING */\n#project-form-container {\n    border: 1px solid var(--text-color);\n    border-radius: 10px;\n    display: none;\n    position: absolute;\n    top: 10%;\n    right: 0%;\n    left: 0%;\n    margin: auto;\n    height: 15%;\n    width: 70%;\n    background-color: #023047;\n    padding: .4em .4em;\n}\n\n.project-name {\n    display: grid;\n    justify-content: center;\n}\n\n.project-name > input {\n    border: none;\n    width: 100%;\n    height: 150%;\n}\n\n.project-name > input:focus {\n    outline: none;\n}\n\n.project-name > input::placeholder {\n    text-align: center;\n}\n\n.project-form-submit {\n    width: 80%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.project-form-btn {\n    padding: .4em 1em;\n    border: none;\n    background-color: var(--sub-base-color);\n    color: var(--text-color);\n    border-radius: 8px;\n    cursor: pointer;\n}\n\n.project-form-cancel {\n    padding: .4em 1em;\n    border: none;\n    background-color: var(--sub-color);\n    color: var(--text-color);\n    border-radius: 8px;\n    cursor: pointer;\n}\n\n/* MAIN RIGHT */\n.right-side-bar {\n    position: relative;\n    /* background-color: #90dbf4; */\n    background-color: #ccdbdc;\n    overflow-y: auto;\n\n}\n\n.right-main-container {\n    height: 100%;\n}\n\n.task-header {\n    font-size: var(--base-header-fs);\n    font-family: var(--base-header-ff);\n    text-align: center;\n    margin-bottom: 2em;\n    color: var(--base-color);\n}\n\n.task-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 5%;\n    width: 80%;\n    margin: 1em auto;\n    padding: .4em .8em;\n    background-color: var(--sub-color);\n    color: var(--text-color);\n    border-radius: 10px;\n}\n\n.completed-task {\n    background-color: red;\n    text-decoration: line-through;\n}\n\n.title-div {\n    font-size: calc(.9rem + .9vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.due-date-div {\n    font-size: calc(.7rem + .7vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.priority-div {\n    font-size: calc(.9rem + .9vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.complete-task-div {\n    font-size: calc(.9rem + .9vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.complete-task-btn {\n    background-color: darkgreen;\n    color: var(--text-color);\n    border: none;\n    border-radius: 5px;\n    padding: .2em .4em;\n    cursor: pointer;\n}\n\n.complete-task-btn:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n.delete-task-div {\n    width: 8%;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n}\n\n.delete-task-img {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.delete-task-img:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n.add-task-btn-div {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    height: 6%;\n}\n\n.add-task-btn {\n    background-color: var(--sub-base-color);\n    border: none;\n    color: var(--sub-color);\n    padding: .4em .8em;\n    border-radius: 10px;\n    cursor: pointer;\n    font-family: var(--base-paragraph-ff);\n    font-size: calc(.6rem + .6vw);\n}\n\n.add-task-btn:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n/* PROJECT TASK STYLING */\n#task-form-container {\n    display: none;\n    position: absolute;\n    left: 0%;\n    right: 0%;\n    top: 10%;\n    margin: auto;\n    height: 40%;\n    width: 55%;\n    background-color: var(--sub-color);\n    border-radius: 10px;\n}\n\n#task-form {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n.task-divs {\n    border: 2px solid var(--text-color);\n    height: 60px;\n    color: var(--text-color);\n    margin: .4em .6em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    border-radius: 5px;\n}\n\n#task-form-container  input:focus {\n    outline: none;\n}\n\n.task-btn-div {\n    border: none;\n    width: 50%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.task-btn {\n    background-color: var(--sub-base-color);\n    border: none;\n    color: var(--text-color);\n    padding: .4em .8em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.hide-task-form {\n    background-color: var(--base-color);\n    border: none;\n    color: var(--text-color);\n    padding: .4em .8em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n/* FOOTER */\nfooter {\n    position: fixed;\n    bottom: 0;\n    width: 70%;\n    margin: 0 auto;\n    height: 40px;\n    display: flex;\n    opacity: .8;\n}\n  \n.social-icons-container {\n    width: 20%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    margin: auto;\n}\n\n.social-icon-1,\n.social-icon-2 {\n    width: max(40px, 30%);\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getFinishTask: () => (/* binding */ getFinishTask)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _localeStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localeStorage.js */ "./src/localeStorage.js");





// PROJECT DELETE
function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_1__.deleteStorageProject)(targetIndex);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createProjectDiv)();
}

// TASKS COMPLETE & DELETE
function getFinishTask(e) {

    let completedDivIndex = e.target.parentElement.parentElement.dataset.index;

    let targetTask = (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_1__.getProjectArray)()[_dom_js__WEBPACK_IMPORTED_MODULE_0__.targetIndex].taskArray[completedDivIndex];
    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_1__.pushCompletedTask)(completedDivIndex, targetTask);

    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createProjectTasks)();
}

function deleteTask(e) {
    let targetIndex = e.target.parentElement.parentElement.dataset.index;

    // targetObject.taskArray.splice(targetIndex, 1);
    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_1__.deleteStorageTask)(targetIndex);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createProjectTasks)();
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAllTasks: () => (/* binding */ createAllTasks),
/* harmony export */   createProjectDiv: () => (/* binding */ createProjectDiv),
/* harmony export */   createProjectTasks: () => (/* binding */ createProjectTasks),
/* harmony export */   createThisWeekTasks: () => (/* binding */ createThisWeekTasks),
/* harmony export */   createTodayTasks: () => (/* binding */ createTodayTasks),
/* harmony export */   revealTargetObject: () => (/* binding */ revealTargetObject),
/* harmony export */   targetIndex: () => (/* binding */ targetIndex),
/* harmony export */   targetObject: () => (/* binding */ targetObject)
/* harmony export */ });
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/add.svg */ "./src/assets/add.svg");
/* harmony import */ var _deleteDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteDom.js */ "./src/deleteDom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _localeStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localeStorage.js */ "./src/localeStorage.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");











let targetObject;
let targetIndex;


function createProjectDiv() {
    const projectDiv = document.querySelector(".projects-div");
    projectDiv.innerHTML = "";

    if ((0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)().length !== 0) {
        for (let i = 0; i < (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)().length; i++) {
            let myProjectDiv = document.createElement("div");
            myProjectDiv.classList.add("my-project");
    
            myProjectDiv.dataset.position = i;
    
            let projectP = document.createElement("p");
            projectP.classList.add("project-p");
            projectP.textContent = (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[i].name;
    
            let projectAddIcon = document.createElement("img");
            projectAddIcon.classList.add("project-add-icon");
            projectAddIcon.addEventListener("click", revealTargetObject);
            projectAddIcon.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__;
    
            let projectDelete = document.createElement("img");
            projectDelete.classList.add("project-delete-icon");
            projectDelete.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_2__.deleteProject);
            projectDelete.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
    
            myProjectDiv.append(projectP, projectAddIcon, projectDelete);
    
            projectDiv.append(myProjectDiv);
        }

    }

}

function revealTargetObject(e) {
    targetIndex = e.target.parentElement.dataset.position;
    targetObject = (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex];

    createProjectTasks();
}

function createProjectTasks() {
    const rightContainer = document.querySelector(".right-main-container");

    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `${targetObject.name} To Do's`;

    rightContainer.append(taskHeader);

    if ((0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].taskArray.length !== 0) {
        for (let i = 0; i < (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].taskArray.length; i++) {
            // task div
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div");

            taskDiv.dataset.index = i;

            // task div items
            let titleDiv = document.createElement("div");
            titleDiv.classList.add("title-div");
            titleDiv.textContent = (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].taskArray[i].title;

            let dueDateDiv = document.createElement("div");
            dueDateDiv.classList.add("due-date-div");
            dueDateDiv.textContent = (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].taskArray[i].dueDate;

            let priorityDiv = document.createElement("div");
            priorityDiv.classList.add("priority-div");
            priorityDiv.textContent = (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].taskArray[i].priority;

            let completeTaskDiv = document.createElement("div");
            completeTaskDiv.classList.add("complete-task-div");
            let completeTaskBtn = document.createElement("button");
            completeTaskBtn.classList.add("complete-task-btn");
            completeTaskBtn.textContent = "Done";
            completeTaskBtn.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_2__.getFinishTask);
            completeTaskDiv.append(completeTaskBtn);

            let deleteTaskDiv = document.createElement("div");
            deleteTaskDiv.classList.add("delete-task-div");
            let deleteTaskImg = document.createElement("img");
            deleteTaskImg.classList.add("delete-task-img");
            deleteTaskImg.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)
            deleteTaskImg.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
            deleteTaskDiv.append(deleteTaskImg);

            taskDiv.append(titleDiv, dueDateDiv, priorityDiv, completeTaskDiv, deleteTaskDiv);

            if ((0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].completedArray !== 0) {
                (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].completedArray.forEach(completed => {
                    if (JSON.stringify(completed) ===  JSON.stringify((0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)()[targetIndex].taskArray[i])) {
                        taskDiv.classList.toggle("completed-task");
                    }
                })
            }


            rightContainer.append(taskDiv);
        }
    }

    const addTaskBtnDiv = document.createElement("div");
    addTaskBtnDiv.classList.add("add-task-btn-div");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_3__.revealTaskForm);

    const taskBtnP = document.createElement("p");
    taskBtnP.textContent = `New ${targetObject.name} Task`;

    addTaskBtn.append(taskBtnP);

    addTaskBtnDiv.append(addTaskBtn);

    rightContainer.append(addTaskBtnDiv);
}

function createAllTasks() {
    const rightContainer = document.querySelector(".right-main-container");
    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `ALL TASKS`;

    rightContainer.append(taskHeader);

    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)().forEach(project => {
        if (project.taskArray !== 0) {
            project.taskArray.forEach(task => {
                // task div
                let taskDiv = document.createElement("div");
                taskDiv.classList.add("task-div");

                // task div items
                let titleDiv = document.createElement("div");
                titleDiv.classList.add("title-div");
                titleDiv.textContent = task.title;

                let dueDateDiv = document.createElement("div");
                dueDateDiv.classList.add("due-date-div");
                dueDateDiv.textContent = task.dueDate;

                let priorityDiv = document.createElement("div");
                priorityDiv.classList.add("priority-div");
                priorityDiv.textContent = task.priority;

                taskDiv.append(titleDiv, dueDateDiv, priorityDiv);

                project.completedArray.forEach(completed => {
                    if (JSON.stringify(completed) === JSON.stringify(task)) {
                        taskDiv.classList.toggle("completed-task");
                    }
                })

                rightContainer.append(taskDiv);
            })
        }
    })
    
}

function createTodayTasks() {
    const rightContainer = document.querySelector(".right-main-container");
    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `TODAY'S TASKS`;

    rightContainer.append(taskHeader);

    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)().forEach(project => {
        if (project.taskArray.length !== 0) {
            project.taskArray.forEach(task => {
                let parsedDate = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])(task.dueDate);

                if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_6__["default"])(parsedDate)) {
                    // task div
                    let taskDiv = document.createElement("div");
                    taskDiv.classList.add("task-div");

                    // task div items
                    let titleDiv = document.createElement("div");
                    titleDiv.classList.add("title-div");
                    titleDiv.textContent = task.title;

                    let dueDateDiv = document.createElement("div");
                    dueDateDiv.classList.add("due-date-div");
                    dueDateDiv.textContent = task.dueDate;

                    let priorityDiv = document.createElement("div");
                    priorityDiv.classList.add("priority-div");
                    priorityDiv.textContent = task.priority;

                    taskDiv.append(titleDiv, dueDateDiv, priorityDiv);

                    project.completedArray.forEach(completed => {
                        if (JSON.stringify(completed) === JSON.stringify(task)) {
                            taskDiv.classList.toggle("completed-task");
                        }
                    })

                    rightContainer.append(taskDiv);
                }
            })
        }
    })
}

function createThisWeekTasks() {
    const rightContainer = document.querySelector(".right-main-container");
    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `THIS WEEK'S TASKS`;

    rightContainer.append(taskHeader);

    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_4__.getProjectArray)().forEach(project => {
        if (project.taskArray.length !== 0) {
            project.taskArray.forEach(task => {
                let parsedDate = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__["default"])(task.dueDate);

                if ((0,date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_7__["default"])(parsedDate)) {
                    // task div
                    let taskDiv = document.createElement("div");
                    taskDiv.classList.add("task-div");

                    // task div items
                    let titleDiv = document.createElement("div");
                    titleDiv.classList.add("title-div");
                    titleDiv.textContent = task.title;

                    let dueDateDiv = document.createElement("div");
                    dueDateDiv.classList.add("due-date-div");
                    dueDateDiv.textContent = task.dueDate;

                    let priorityDiv = document.createElement("div");
                    priorityDiv.classList.add("priority-div");
                    priorityDiv.textContent = task.priority;

                    taskDiv.append(titleDiv, dueDateDiv, priorityDiv);

                    project.completedArray.forEach(completed => {
                        if (JSON.stringify(completed) === JSON.stringify(task)) {
                            taskDiv.classList.toggle("completed-task");
                        }
                    })

                    rightContainer.append(taskDiv);
                }
            })
        }
    })
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
/* harmony export */   hideTaskForm: () => (/* binding */ hideTaskForm),
/* harmony export */   revealProjectForm: () => (/* binding */ revealProjectForm),
/* harmony export */   revealTaskForm: () => (/* binding */ revealTaskForm)
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

function revealTaskForm() {
    const taskForm = document.getElementById("task-form-container");
    taskForm.style.display = "block";
}

function hideTaskForm() {
    document.getElementById("task-form").reset();

    const taskForm = document.getElementById("task-form-container");
    taskForm.style.display = "none";
}



/***/ }),

/***/ "./src/localeStorage.js":
/*!******************************!*\
  !*** ./src/localeStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToTarget: () => (/* binding */ addTaskToTarget),
/* harmony export */   checkProjectsInStorage: () => (/* binding */ checkProjectsInStorage),
/* harmony export */   deleteStorageProject: () => (/* binding */ deleteStorageProject),
/* harmony export */   deleteStorageTask: () => (/* binding */ deleteStorageTask),
/* harmony export */   getProjectArray: () => (/* binding */ getProjectArray),
/* harmony export */   pushCompletedTask: () => (/* binding */ pushCompletedTask)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



// STORAGE PROJECT FUNCTIONS
function modifyProjectArray(project) {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectsArray.push(project);

    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

function getProjectArray() {
    return JSON.parse(localStorage.getItem("projectsArray"));
}

function checkProjectsInStorage(project) {
    if (!localStorage.getItem("projectsArray")) {
        const projectsArray = [];
        localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
        modifyProjectArray(project);
    } else {
        modifyProjectArray(project);
    }
}

function deleteStorageProject(index) {
    let projectsArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectsArray.splice(index, 1);

    localStorage.setItem("projectsArray", JSON.stringify(projectsArray));
}

// STORAGE TASKS FUNCTIONS
function addTaskToTarget(index, name, date, priority) {
    let projectArray = JSON.parse(localStorage.getItem("projectsArray"));
    let target = projectArray[index];
    projectArray.splice(index, 1);

    target.taskArray.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(name, date, priority))

    projectArray.splice(index, 0, target);

    localStorage.setItem("projectsArray", JSON.stringify(projectArray));
}

function pushCompletedTask(index, target) {
    let projectArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectArray[_dom_js__WEBPACK_IMPORTED_MODULE_1__.targetIndex].completedArray.push(target);

    localStorage.setItem("projectsArray", JSON.stringify(projectArray));
}

function deleteStorageTask(index) {
    let projectArray = JSON.parse(localStorage.getItem("projectsArray"));

    projectArray[_dom_js__WEBPACK_IMPORTED_MODULE_1__.targetIndex].taskArray.splice(index, 1);

    localStorage.setItem("projectsArray", JSON.stringify(projectArray));
}




/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _localeStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localeStorage.js */ "./src/localeStorage.js");







// PROJECT CONSTRUCTOR
class Project {
    constructor(name) {
        this.name = name;
    }

    taskArray = [];

    completedArray = [];

    newTask = (title, dueDate, priority) => {
        this.taskArray.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, dueDate, priority));
    }

}

// FUNCTION THAT CREATES A PROJECT
function createProject() {
    let name = document.getElementById("project-name").value;

    let newProject = new Project(name);

    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_3__.checkProjectsInStorage)(newProject);

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
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _localeStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localeStorage.js */ "./src/localeStorage.js");






class Task {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

// function that creates a task
function createTask() {
    let name = document.getElementById("task-name").value;
    let date = document.getElementById("task-date").value;
    let priority = document.getElementById("task-priority").value;

    (0,_localeStorage_js__WEBPACK_IMPORTED_MODULE_2__.addTaskToTarget)(_dom_js__WEBPACK_IMPORTED_MODULE_0__.targetIndex, name, date, priority);

    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createProjectTasks)();

    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.hideTaskForm)();
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

/***/ "./src/assets/github.svg":
/*!*******************************!*\
  !*** ./src/assets/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github .svg";

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

/***/ }),

/***/ "./src/assets/twitter.svg":
/*!********************************!*\
  !*** ./src/assets/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "twitter .svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/* harmony import */ var _assets_eye_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/eye.svg */ "./src/assets/eye.svg");
/* harmony import */ var _assets_github_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/github.svg */ "./src/assets/github.svg");
/* harmony import */ var _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/twitter.svg */ "./src/assets/twitter.svg");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");

















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

const homeEye = document.querySelector(".home-eye");
homeEye.src = _assets_eye_svg__WEBPACK_IMPORTED_MODULE_5__;
homeEye.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_11__.createAllTasks);

const todayEye = document.querySelector(".today-eye");
todayEye.src = _assets_eye_svg__WEBPACK_IMPORTED_MODULE_5__;
todayEye.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_11__.createTodayTasks);

const weekEye = document.querySelector(".week-eye");
weekEye.src = _assets_eye_svg__WEBPACK_IMPORTED_MODULE_5__;
weekEye.addEventListener("click", _dom_js__WEBPACK_IMPORTED_MODULE_11__.createThisWeekTasks);


// REVEAL PROJECT FORM
const revealFormBtn = document.querySelector(".project-btn");
revealFormBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_9__.revealProjectForm);

// HIDE PROJECT FORM BTN
const projectCancelBtn = document.querySelector(".project-form-cancel");
projectCancelBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_9__.hideProjectForm);


// CREATE NEW PROJECT
const projectNameBtn = document.querySelector(".project-form-btn");
projectNameBtn.addEventListener("click", _project_js__WEBPACK_IMPORTED_MODULE_8__.createProject);

// CREATE NEW TASK
const taskBtn = document.querySelector(".task-btn");
taskBtn.addEventListener("click", _task_js__WEBPACK_IMPORTED_MODULE_10__.createTask);

// HIDE TASK FORM BTN
const taskCancelBtn = document.querySelector(".hide-task-form");
taskCancelBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_9__.hideTaskForm);

// FOOTER
const githubImg = document.querySelector(".social-icon-1");
githubImg.src = _assets_github_svg__WEBPACK_IMPORTED_MODULE_6__;

const twitterImg = document.querySelector(".social-icon-2");
twitterImg.src = _assets_twitter_svg__WEBPACK_IMPORTED_MODULE_7__;

// ALWAYS CALL CREATE PROJECT DIV FUNCTION
(0,_dom_js__WEBPACK_IMPORTED_MODULE_11__.createProjectDiv)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUhBQXFIO0FBQ3JILDRIQUE0SDtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFV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QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7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Q0FBTztBQUN0QixtQ0FBbUMsc0RBQWdCOztBQUVuRDtBQUNBLGNBQWMsNENBQU87QUFDckIsa0NBQWtDLHlEQUFtQjs7O0FBR3JEO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQWlCOztBQUV6RDtBQUNBO0FBQ0EsMkNBQTJDLHFEQUFlOzs7QUFHMUQ7QUFDQTtBQUNBLHlDQUF5QyxzREFBYTs7QUFFdEQ7QUFDQTtBQUNBLGtDQUFrQyxpREFBVTs7QUFFNUM7QUFDQTtBQUNBLHdDQUF3QyxrREFBWTs7QUFFcEQ7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBVTs7QUFFMUI7QUFDQSxpQkFBaUIsZ0RBQVc7O0FBRTVCO0FBQ0EsMERBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvY2FsZVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U2FuY2hleiZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MZWFndWUrU3BhcnRhbiZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJhc2UtY29sb3I6ICMwMjMwNDc7XG4gICAgLS1zdWItYmFzZS1jb2xvcjogI2ZmYTQwMDtcbiAgICAtLXN1Yi1jb2xvcjogIzQ1NDk1NTtcbiAgICAtLXRleHQtY29sb3I6ICNGRkZGRkY7XG4gICAgLS1iYXNlLXAtZnM6IGNhbGMoMXJlbSArIDF2dyk7XG4gICAgLS1iYXNlLWhlYWRlci1mczogY2FsYygxLjFyZW0gKyAxLjJ2dyk7XG4gICAgLS1hcHAtaDItZnM6IGNhbGMoLjZyZW0gKyAuNnZ3KTtcbiAgICAtLWxvZ28td2lkdGg6IG1heCg0MHB4LCAzNSUpO1xuICAgIC0tYmFzZS1oZWFkZXItZmY6IFwiU2FuY2hlelwiLCBzYW5zLXNlcmlmO1xuICAgIC0tYmFzZS1wYXJhZ3JhcGgtZmY6IFwiTGVhZ3VlIFNwYXJ0YW5cIiwgc2Fucy1zZXJpZjtcbiAgICAtLWJhc2UtbWFyZ2luOiAwLjNlbSAwZW07XG4gICAgLS1ib3gtc2hhZG93OiA1cHggMTBweCAzMHB4IGJsYWNrO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jbWFpbi1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbm5hdiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogOCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XG59XG5cbi5sb2dvLWRpdiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28taWNvbiB7XG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xuICAgIGZpbHRlcjogaW52ZXJ0KDk2JSkgc2VwaWEoNCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDRkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTA1JSk7XG59XG5cbi5oZWFkZXItZGl2IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLXR4dCB7XG4gICAgY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1oZWFkZXItZmYpO1xufVxuXG5tYWluIHtcbiAgICBoZWlnaHQ6IDkyJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbn1cblxuLyogTUFJTiBMRUZUICovXG4ubGVmdC1zaWRlLWJhciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcbn1cblxuLmhvbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5ob21lLWRpdixcbi50b2RheS1kaXYsXG4ud2Vlay1kaXYge1xuICAgIGhlaWdodDogMTUlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uaG9tZS1kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xufVxuXG4udG9kYXktZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbn1cblxuLndlZWstZGl2OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbn1cblxuXG5cbi5ob21lLXR4dC1kaXYsXG4udG9kYXktdHh0LWRpdixcbi53ZWVrLXR4dC1kaXYge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiB2YXIoLS1hcHAtaDItZnMpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XG59XG5cbi5ob21lLWxvZ28tZGl2LFxuLnRvZGF5LWxvZ28tZGl2LFxuLndlZWstbG9nby1kaXYge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmhvbWUtaWNvbnMge1xuICAgIHdpZHRoOiBtYXgoMzBweCwgMjAlKTtcbiAgICBmaWx0ZXI6IGludmVydCg5NiUpIHNlcGlhKDQlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg0ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNSUpO1xufVxuXG4uaG9tZS1leWUsXG4udG9kYXktZXllLFxuLndlZWstZXllIHtcbiAgICB3aWR0aDogbWF4KDMwcHgsIDIwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogaW52ZXJ0KDc4JSkgc2VwaWEoMjMlKSBzYXR1cmF0ZSg5MDElKSBodWUtcm90YXRlKDE2OWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCg4OSUpO1xufVxuXG5cbi5ob21lLWV5ZTpob3ZlciB7XG4gICAgc2NhbGU6IDEuMjtcbiAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgZmlsdGVyOiBpbnZlcnQoMjIlKSBzZXBpYSg4NCUpIHNhdHVyYXRlKDQ3NzclKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcbn1cblxuLnRvZGF5LWV5ZTpob3ZlciB7XG4gICAgc2NhbGU6IDEuMjtcbiAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgZmlsdGVyOiBpbnZlcnQoMjIlKSBzZXBpYSg4NCUpIHNhdHVyYXRlKDQ3NzclKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcbn1cblxuLndlZWstZXllOmhvdmVyIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIHRyYW5zaXRpb246IC4ycztcbiAgICBmaWx0ZXI6IGludmVydCgyMiUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDc3NyUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2plY3QtbmFtZXMtaDF7XG4gICAgY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1oZWFkZXItZmYpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3RzLWRpdiB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm15LXByb2plY3Qge1xuICAgIGhlaWdodDogMTAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XG4gICAgbWFyZ2luLXRvcDogLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXAge1xuICAgIHBhZGRpbmctbGVmdDogLjVlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLXAtZnMpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XG59XG5cbi5wcm9qZWN0LWRlbGV0ZS1pY29uIHtcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDglKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgxODBkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoODglKTtcbn1cblxuLnByb2plY3QtZGVsZXRlLWljb246aG92ZXIge1xuICAgIHNjYWxlOiAxLjI7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xuICAgIGZpbHRlcjogaW52ZXJ0KDIzJSkgc2VwaWEoNzklKSBzYXR1cmF0ZSg0NjQzJSkgaHVlLXJvdGF0ZSgxZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwOSUpO1xufVxuXG4ucHJvamVjdC1hZGQtaWNvbiB7XG4gICAgd2lkdGg6IG1heCgzMHB4LCA0MCUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg4JSkgc2F0dXJhdGUoNzQ4MCUpIGh1ZS1yb3RhdGUoMTgwZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDg4JSk7XG59XG5cbi5wcm9qZWN0LWFkZC1pY29uOmhvdmVyIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIHRyYW5zaXRpb246IC4ycztcbiAgICBmaWx0ZXI6IGludmVydCg3NCUpIHNlcGlhKDIyJSkgc2F0dXJhdGUoMjE3NyUpIGh1ZS1yb3RhdGUoNzdkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoMTAzJSk7XG59XG5cbi5wcm9qZWN0LWJ0bi1kaXYge1xuICAgIGhlaWdodDogOCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwZW0gMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG4gICAgZm9udC1zaXplOiBjYWxjKC41cmVtICsgLjZ2dyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcbn1cblxuLnByb2plY3QtYnRuOmhvdmVyIHtcbiAgICBzY2FsZTogMS4xO1xuICAgIHRyYW5zaXRpb246IC4ycztcbn1cblxuLnByb2plY3QtcGx1cy1pY29uIHtcbiAgICB3aWR0aDogbWF4KDIwcHgsIDI1JSk7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDEzNGRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCgxMDYlKTtcbn1cblxuLyogUFJPSkVDVCBGT1JNIFNUWUxJTkcgKi9cbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICBsZWZ0OiAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzMDQ3O1xuICAgIHBhZGRpbmc6IC40ZW0gLjRlbTtcbn1cblxuLnByb2plY3QtbmFtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtbmFtZSA+IGlucHV0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNTAlO1xufVxuXG4ucHJvamVjdC1uYW1lID4gaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LW5hbWUgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2plY3QtZm9ybS1zdWJtaXQge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5wcm9qZWN0LWZvcm0tYnRuIHtcbiAgICBwYWRkaW5nOiAuNGVtIDFlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1mb3JtLWNhbmNlbCB7XG4gICAgcGFkZGluZzogLjRlbSAxZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIE1BSU4gUklHSFQgKi9cbi5yaWdodC1zaWRlLWJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM5MGRiZjQ7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZGJkYztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG59XG5cbi5yaWdodC1tYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFzay1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1oZWFkZXItZnMpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWhlYWRlci1mZik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICBjb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XG59XG5cbi50YXNrLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDUlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAxZW0gYXV0bztcbiAgICBwYWRkaW5nOiAuNGVtIC44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbXBsZXRlZC10YXNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50aXRsZS1kaXYge1xuICAgIGZvbnQtc2l6ZTogY2FsYyguOXJlbSArIC45dncpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XG59XG5cbi5kdWUtZGF0ZS1kaXYge1xuICAgIGZvbnQtc2l6ZTogY2FsYyguN3JlbSArIC43dncpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XG59XG5cbi5wcmlvcml0eS1kaXYge1xuICAgIGZvbnQtc2l6ZTogY2FsYyguOXJlbSArIC45dncpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XG59XG5cbi5jb21wbGV0ZS10YXNrLWRpdiB7XG4gICAgZm9udC1zaXplOiBjYWxjKC45cmVtICsgLjl2dyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcbn1cblxuLmNvbXBsZXRlLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogLjJlbSAuNGVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbXBsZXRlLXRhc2stYnRuOmhvdmVyIHtcbiAgICBzY2FsZTogMS4xO1xuICAgIHRyYW5zaXRpb246IC4ycztcbn1cblxuLmRlbGV0ZS10YXNrLWRpdiB7XG4gICAgd2lkdGg6IDglO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uZGVsZXRlLXRhc2staW1nIHtcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDglKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgxODBkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoODglKTtcbn1cblxuLmRlbGV0ZS10YXNrLWltZzpob3ZlciB7XG4gICAgc2NhbGU6IDEuMTtcbiAgICB0cmFuc2l0aW9uOiAuMnM7XG59XG5cbi5hZGQtdGFzay1idG4tZGl2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYlO1xufVxuXG4uYWRkLXRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xuICAgIHBhZGRpbmc6IC40ZW0gLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xuICAgIGZvbnQtc2l6ZTogY2FsYyguNnJlbSArIC42dncpO1xufVxuXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcbiAgICBzY2FsZTogMS4xO1xuICAgIHRyYW5zaXRpb246IC4ycztcbn1cblxuLyogUFJPSkVDVCBUQVNLIFNUWUxJTkcgKi9cbiN0YXNrLWZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwJTtcbiAgICByaWdodDogMCU7XG4gICAgdG9wOiAxMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogNDAlO1xuICAgIHdpZHRoOiA1NSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jdGFzay1mb3JtIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4udGFzay1kaXZzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIG1hcmdpbjogLjRlbSAuNmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiN0YXNrLWZvcm0tY29udGFpbmVyICBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhc2stYnRuLWRpdiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnRhc2stYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAuNGVtIC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZGUtdGFzay1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIHBhZGRpbmc6IC40ZW0gLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGT09URVIgKi9cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG9wYWNpdHk6IC44O1xufVxuICBcbi5zb2NpYWwtaWNvbnMtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5zb2NpYWwtaWNvbi0xLFxuLnNvY2lhbC1pY29uLTIge1xuICAgIHdpZHRoOiBtYXgoNDBweCwgMzAlKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QywrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2QyxpREFBaUQ7SUFDakQsd0JBQXdCO0lBQ3hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkZBQTJGO0FBQy9GOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYiwyQkFB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LHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5jaGV6JmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxlYWd1ZStTcGFydGFuJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1iYXNlLWNvbG9yOiAjMDIzMDQ3O1xcbiAgICAtLXN1Yi1iYXNlLWNvbG9yOiAjZmZhNDAwO1xcbiAgICAtLXN1Yi1jb2xvcjogIzQ1NDk1NTtcXG4gICAgLS10ZXh0LWNvbG9yOiAjRkZGRkZGO1xcbiAgICAtLWJhc2UtcC1mczogY2FsYygxcmVtICsgMXZ3KTtcXG4gICAgLS1iYXNlLWhlYWRlci1mczogY2FsYygxLjFyZW0gKyAxLjJ2dyk7XFxuICAgIC0tYXBwLWgyLWZzOiBjYWxjKC42cmVtICsgLjZ2dyk7XFxuICAgIC0tbG9nby13aWR0aDogbWF4KDQwcHgsIDM1JSk7XFxuICAgIC0tYmFzZS1oZWFkZXItZmY6IFxcXCJTYW5jaGV6XFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1iYXNlLXBhcmFncmFwaC1mZjogXFxcIkxlYWd1ZSBTcGFydGFuXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgLS1iYXNlLW1hcmdpbjogMC4zZW0gMGVtO1xcbiAgICAtLWJveC1zaGFkb3c6IDVweCAxMHB4IDMwcHggYmxhY2s7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNtYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm5hdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA4JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxufVxcblxcbi5sb2dvLWRpdiB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ28taWNvbiB7XFxuICAgIHdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTYlKSBzZXBpYSg0JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoNGRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmhlYWRlci1kaXYge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXItdHh0IHtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWhlYWRlci1mcyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWhlYWRlci1mZik7XFxufVxcblxcbm1haW4ge1xcbiAgICBoZWlnaHQ6IDkyJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4vKiBNQUlOIExFRlQgKi9cXG4ubGVmdC1zaWRlLWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5ob21lLWRpdixcXG4udG9kYXktZGl2LFxcbi53ZWVrLWRpdiB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5ob21lLWRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcbn1cXG5cXG4udG9kYXktZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxufVxcblxcbi53ZWVrLWRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcbn1cXG5cXG5cXG5cXG4uaG9tZS10eHQtZGl2LFxcbi50b2RheS10eHQtZGl2LFxcbi53ZWVrLXR4dC1kaXYge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1hcHAtaDItZnMpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xcbn1cXG5cXG4uaG9tZS1sb2dvLWRpdixcXG4udG9kYXktbG9nby1kaXYsXFxuLndlZWstbG9nby1kaXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtaWNvbnMge1xcbiAgICB3aWR0aDogbWF4KDMwcHgsIDIwJSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDk2JSkgc2VwaWEoNCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDRkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTA1JSk7XFxufVxcblxcbi5ob21lLWV5ZSxcXG4udG9kYXktZXllLFxcbi53ZWVrLWV5ZSB7XFxuICAgIHdpZHRoOiBtYXgoMzBweCwgMjAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCg3OCUpIHNlcGlhKDIzJSkgc2F0dXJhdGUoOTAxJSkgaHVlLXJvdGF0ZSgxNjlkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoODklKTtcXG59XFxuXFxuXFxuLmhvbWUtZXllOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBmaWx0ZXI6IGludmVydCgyMiUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDc3NyUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4udG9kYXktZXllOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBmaWx0ZXI6IGludmVydCgyMiUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDc3NyUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4ud2Vlay1leWU6aG92ZXIge1xcbiAgICBzY2FsZTogMS4yO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIyJSkgc2VwaWEoODQlKSBzYXR1cmF0ZSg0Nzc3JSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByb2plY3QtbmFtZXMtaDF7XFxuICAgIGNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1oZWFkZXItZnMpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1oZWFkZXItZmYpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1kaXYge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm15LXByb2plY3Qge1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxuICAgIG1hcmdpbi10b3A6IC43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmciAxZnI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtcCB7XFxuICAgIHBhZGRpbmctbGVmdDogLjVlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1wLWZzKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcXG59XFxuXFxuLnByb2plY3QtZGVsZXRlLWljb24ge1xcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtaWNvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjI7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3OSUpIHNhdHVyYXRlKDQ2NDMlKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA5JSk7XFxufVxcblxcbi5wcm9qZWN0LWFkZC1pY29uIHtcXG4gICAgd2lkdGg6IG1heCgzMHB4LCA0MCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDglKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgxODBkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoODglKTtcXG59XFxuXFxuLnByb2plY3QtYWRkLWljb246aG92ZXIge1xcbiAgICBzY2FsZTogMS4yO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDc0JSkgc2VwaWEoMjIlKSBzYXR1cmF0ZSgyMTc3JSkgaHVlLXJvdGF0ZSg3N2RlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxMDMlKTtcXG59XFxuXFxuLnByb2plY3QtYnRuLWRpdiB7XFxuICAgIGhlaWdodDogOCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMGVtIDJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDEuNWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDRweDtcXG4gICAgZm9udC1zaXplOiBjYWxjKC41cmVtICsgLjZ2dyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XFxufVxcblxcbi5wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLnByb2plY3QtcGx1cy1pY29uIHtcXG4gICAgd2lkdGg6IG1heCgyMHB4LCAyNSUpO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNiUpO1xcbn1cXG5cXG4vKiBQUk9KRUNUIEZPUk0gU1RZTElORyAqL1xcbiNwcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgbGVmdDogMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjMwNDc7XFxuICAgIHBhZGRpbmc6IC40ZW0gLjRlbTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lID4gaW5wdXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1MCU7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUgPiBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUgPiBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tc3VibWl0IHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnRuIHtcXG4gICAgcGFkZGluZzogLjRlbSAxZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWNhbmNlbCB7XFxuICAgIHBhZGRpbmc6IC40ZW0gMWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1BSU4gUklHSFQgKi9cXG4ucmlnaHQtc2lkZS1iYXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM5MGRiZjQ7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2RiZGM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuXFxufVxcblxcbi5yaWdodC1tYWluLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWhlYWRlci1mcyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWhlYWRlci1mZik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxufVxcblxcbi50YXNrLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAxZW0gYXV0bztcXG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFzayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50aXRsZS1kaXYge1xcbiAgICBmb250LXNpemU6IGNhbGMoLjlyZW0gKyAuOXZ3KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcXG59XFxuXFxuLmR1ZS1kYXRlLWRpdiB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguN3JlbSArIC43dncpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xcbn1cXG5cXG4ucHJpb3JpdHktZGl2IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKC45cmVtICsgLjl2dyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XFxufVxcblxcbi5jb21wbGV0ZS10YXNrLWRpdiB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguOXJlbSArIC45dncpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xcbn1cXG5cXG4uY29tcGxldGUtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IC4yZW0gLjRlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tcGxldGUtdGFzay1idG46aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5kZWxldGUtdGFzay1kaXYge1xcbiAgICB3aWR0aDogOCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtdGFzay1pbWcge1xcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2staW1nOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuLWRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNiU7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IC40ZW0gLjhlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xcbiAgICBmb250LXNpemU6IGNhbGMoLjZyZW0gKyAuNnZ3KTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLyogUFJPSkVDVCBUQVNLIFNUWUxJTkcgKi9cXG4jdGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMCU7XFxuICAgIHJpZ2h0OiAwJTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgaGVpZ2h0OiA0MCU7XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0YXNrLWZvcm0ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuLnRhc2stZGl2cyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgbWFyZ2luOiAuNGVtIC42ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jdGFzay1mb3JtLWNvbnRhaW5lciAgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFzay1idG4tZGl2IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi50YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IC40ZW0gLjhlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRlLXRhc2stZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG9wYWNpdHk6IC44O1xcbn1cXG4gIFxcbi5zb2NpYWwtaWNvbnMtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnNvY2lhbC1pY29uLTEsXFxuLnNvY2lhbC1pY29uLTIge1xcbiAgICB3aWR0aDogbWF4KDQwcHgsIDMwJSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpO1xuICAgIC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsO1xuXG4gIC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdERpdiwgdGFyZ2V0T2JqZWN0LCB0YXJnZXRJbmRleCwgY3JlYXRlUHJvamVjdFRhc2tzfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGdldFByb2plY3RBcnJheSwgZGVsZXRlU3RvcmFnZVByb2plY3QsIHB1c2hDb21wbGV0ZWRUYXNrLCBkZWxldGVTdG9yYWdlVGFzayB9IGZyb20gXCIuL2xvY2FsZVN0b3JhZ2UuanNcIjtcblxuXG5cbi8vIFBST0pFQ1QgREVMRVRFXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcbiAgICBsZXQgdGFyZ2V0SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQucG9zaXRpb247XG5cbiAgICBkZWxldGVTdG9yYWdlUHJvamVjdCh0YXJnZXRJbmRleCk7XG4gICAgY3JlYXRlUHJvamVjdERpdigpO1xufVxuXG4vLyBUQVNLUyBDT01QTEVURSAmIERFTEVURVxuZnVuY3Rpb24gZ2V0RmluaXNoVGFzayhlKSB7XG5cbiAgICBsZXQgY29tcGxldGVkRGl2SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcblxuICAgIGxldCB0YXJnZXRUYXNrID0gZ2V0UHJvamVjdEFycmF5KClbdGFyZ2V0SW5kZXhdLnRhc2tBcnJheVtjb21wbGV0ZWREaXZJbmRleF07XG4gICAgcHVzaENvbXBsZXRlZFRhc2soY29tcGxldGVkRGl2SW5kZXgsIHRhcmdldFRhc2spO1xuXG4gICAgY3JlYXRlUHJvamVjdFRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICAgIGxldCB0YXJnZXRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhc2V0LmluZGV4O1xuXG4gICAgLy8gdGFyZ2V0T2JqZWN0LnRhc2tBcnJheS5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgIGRlbGV0ZVN0b3JhZ2VUYXNrKHRhcmdldEluZGV4KTtcbiAgICBjcmVhdGVQcm9qZWN0VGFza3MoKTtcbn1cblxuZXhwb3J0IHsgZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFzaywgZ2V0RmluaXNoVGFzayB9IiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2Fzc2V0cy9hZGQuc3ZnXCJcblxuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCwgZGVsZXRlVGFzaywgZ2V0RmluaXNoVGFzayB9IGZyb20gXCIuL2RlbGV0ZURvbS5qc1wiO1xuaW1wb3J0IHsgcmV2ZWFsVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9sb2NhbGVTdG9yYWdlLmpzXCI7XG5cbmltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQgaXNUaGlzV2VlayBmcm9tICdkYXRlLWZucy9pc1RoaXNXZWVrJztcbmltcG9ydCBwYXJzZUlTTyBmcm9tICdkYXRlLWZucy9wYXJzZUlTTyc7XG5cbmxldCB0YXJnZXRPYmplY3Q7XG5sZXQgdGFyZ2V0SW5kZXg7XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpdigpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1kaXZcIik7XG4gICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgaWYgKGdldFByb2plY3RBcnJheSgpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldFByb2plY3RBcnJheSgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbXlQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG15UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibXktcHJvamVjdFwiKTtcbiAgICBcbiAgICAgICAgICAgIG15UHJvamVjdERpdi5kYXRhc2V0LnBvc2l0aW9uID0gaTtcbiAgICBcbiAgICAgICAgICAgIGxldCBwcm9qZWN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgcHJvamVjdFAuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcFwiKTtcbiAgICAgICAgICAgIHByb2plY3RQLnRleHRDb250ZW50ID0gZ2V0UHJvamVjdEFycmF5KClbaV0ubmFtZTtcbiAgICBcbiAgICAgICAgICAgIGxldCBwcm9qZWN0QWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBwcm9qZWN0QWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hZGQtaWNvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RBZGRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXZlYWxUYXJnZXRPYmplY3QpO1xuICAgICAgICAgICAgcHJvamVjdEFkZEljb24uc3JjID0gYWRkSWNvbjtcbiAgICBcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlLWljb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGUuc3JjID0gZGVsZXRlSWNvbjtcbiAgICBcbiAgICAgICAgICAgIG15UHJvamVjdERpdi5hcHBlbmQocHJvamVjdFAsIHByb2plY3RBZGRJY29uLCBwcm9qZWN0RGVsZXRlKTtcbiAgICBcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kKG15UHJvamVjdERpdik7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZXZlYWxUYXJnZXRPYmplY3QoZSkge1xuICAgIHRhcmdldEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LnBvc2l0aW9uO1xuICAgIHRhcmdldE9iamVjdCA9IGdldFByb2plY3RBcnJheSgpW3RhcmdldEluZGV4XTtcblxuICAgIGNyZWF0ZVByb2plY3RUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0VGFza3MoKSB7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LW1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgcmlnaHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1oZWFkZXJcIik7XG4gICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IGAke3RhcmdldE9iamVjdC5uYW1lfSBUbyBEbydzYDtcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZCh0YXNrSGVhZGVyKTtcblxuICAgIGlmIChnZXRQcm9qZWN0QXJyYXkoKVt0YXJnZXRJbmRleF0udGFza0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdldFByb2plY3RBcnJheSgpW3RhcmdldEluZGV4XS50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHRhc2sgZGl2XG4gICAgICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICAgICAgdGFza0Rpdi5kYXRhc2V0LmluZGV4ID0gaTtcblxuICAgICAgICAgICAgLy8gdGFzayBkaXYgaXRlbXNcbiAgICAgICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtZGl2XCIpO1xuICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSBnZXRQcm9qZWN0QXJyYXkoKVt0YXJnZXRJbmRleF0udGFza0FycmF5W2ldLnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS1kaXZcIik7XG4gICAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gZ2V0UHJvamVjdEFycmF5KClbdGFyZ2V0SW5kZXhdLnRhc2tBcnJheVtpXS5kdWVEYXRlO1xuXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWRpdlwiKTtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gZ2V0UHJvamVjdEFycmF5KClbdGFyZ2V0SW5kZXhdLnRhc2tBcnJheVtpXS5wcmlvcml0eTtcblxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21wbGV0ZVRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLXRhc2stZGl2XCIpO1xuICAgICAgICAgICAgbGV0IGNvbXBsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBjb21wbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLXRhc2stYnRuXCIpO1xuICAgICAgICAgICAgY29tcGxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgICAgICAgICBjb21wbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEZpbmlzaFRhc2spO1xuICAgICAgICAgICAgY29tcGxldGVUYXNrRGl2LmFwcGVuZChjb21wbGV0ZVRhc2tCdG4pO1xuXG4gICAgICAgICAgICBsZXQgZGVsZXRlVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkZWxldGVUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1kaXZcIik7XG4gICAgICAgICAgICBsZXQgZGVsZXRlVGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBkZWxldGVUYXNrSW1nLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1pbWdcIik7XG4gICAgICAgICAgICBkZWxldGVUYXNrSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKVxuICAgICAgICAgICAgZGVsZXRlVGFza0ltZy5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICAgICAgZGVsZXRlVGFza0Rpdi5hcHBlbmQoZGVsZXRlVGFza0ltZyk7XG5cbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kKHRpdGxlRGl2LCBkdWVEYXRlRGl2LCBwcmlvcml0eURpdiwgY29tcGxldGVUYXNrRGl2LCBkZWxldGVUYXNrRGl2KTtcblxuICAgICAgICAgICAgaWYgKGdldFByb2plY3RBcnJheSgpW3RhcmdldEluZGV4XS5jb21wbGV0ZWRBcnJheSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGdldFByb2plY3RBcnJheSgpW3RhcmdldEluZGV4XS5jb21wbGV0ZWRBcnJheS5mb3JFYWNoKGNvbXBsZXRlZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb21wbGV0ZWQpID09PSAgSlNPTi5zdHJpbmdpZnkoZ2V0UHJvamVjdEFycmF5KClbdGFyZ2V0SW5kZXhdLnRhc2tBcnJheVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZC10YXNrXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0Rpdik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUYXNrQnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG4tZGl2XCIpO1xuXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYnRuXCIpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJldmVhbFRhc2tGb3JtKTtcblxuICAgIGNvbnN0IHRhc2tCdG5QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGFza0J0blAudGV4dENvbnRlbnQgPSBgTmV3ICR7dGFyZ2V0T2JqZWN0Lm5hbWV9IFRhc2tgO1xuXG4gICAgYWRkVGFza0J0bi5hcHBlbmQodGFza0J0blApO1xuXG4gICAgYWRkVGFza0J0bkRpdi5hcHBlbmQoYWRkVGFza0J0bik7XG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmQoYWRkVGFza0J0bkRpdik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFsbFRhc2tzKCkge1xuICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1tYWluLWNvbnRhaW5lclwiKTtcbiAgICByaWdodENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcbiAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gYEFMTCBUQVNLU2A7XG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0hlYWRlcik7XG5cbiAgICBnZXRQcm9qZWN0QXJyYXkoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXkgIT09IDApIHtcbiAgICAgICAgICAgIHByb2plY3QudGFza0FycmF5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGFzayBkaXZcbiAgICAgICAgICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgICAgICAgICAvLyB0YXNrIGRpdiBpdGVtc1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlLWRpdlwiKTtcbiAgICAgICAgICAgICAgICB0aXRsZURpdi50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtZGl2XCIpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1kaXZcIik7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5O1xuXG4gICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmQodGl0bGVEaXYsIGR1ZURhdGVEaXYsIHByaW9yaXR5RGl2KTtcblxuICAgICAgICAgICAgICAgIHByb2plY3QuY29tcGxldGVkQXJyYXkuZm9yRWFjaChjb21wbGV0ZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY29tcGxldGVkKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFzaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZC10YXNrXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZCh0YXNrRGl2KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxuICAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1tYWluLWNvbnRhaW5lclwiKTtcbiAgICByaWdodENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcbiAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gYFRPREFZJ1MgVEFTS1NgO1xuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kKHRhc2tIZWFkZXIpO1xuXG4gICAgZ2V0UHJvamVjdEFycmF5KCkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QudGFza0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrQXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkRGF0ZSA9IHBhcnNlSVNPKHRhc2suZHVlRGF0ZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNUb2RheShwYXJzZWREYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0YXNrIGRpdlxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhc2sgZGl2IGl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1kaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlLWRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHktZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5hcHBlbmQodGl0bGVEaXYsIGR1ZURhdGVEaXYsIHByaW9yaXR5RGl2KTtcblxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LmNvbXBsZXRlZEFycmF5LmZvckVhY2goY29tcGxldGVkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb21wbGV0ZWQpID09PSBKU09OLnN0cmluZ2lmeSh0YXNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZC10YXNrXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZCh0YXNrRGl2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGhpc1dlZWtUYXNrcygpIHtcbiAgICBjb25zdCByaWdodENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHQtbWFpbi1jb250YWluZXJcIik7XG4gICAgcmlnaHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1oZWFkZXJcIik7XG4gICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IGBUSElTIFdFRUsnUyBUQVNLU2A7XG5cbiAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0hlYWRlcik7XG5cbiAgICBnZXRQcm9qZWN0QXJyYXkoKS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWREYXRlID0gcGFyc2VJU08odGFzay5kdWVEYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1RoaXNXZWVrKHBhcnNlZERhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRhc2sgZGl2XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGFzayBkaXYgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlLWRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1kaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZCh0aXRsZURpdiwgZHVlRGF0ZURpdiwgcHJpb3JpdHlEaXYpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QuY29tcGxldGVkQXJyYXkuZm9yRWFjaChjb21wbGV0ZWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlZCkgPT09IEpTT04uc3RyaW5naWZ5KHRhc2spKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkLXRhc2tcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgcmlnaHRDb250YWluZXIuYXBwZW5kKHRhc2tEaXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdERpdiwgdGFyZ2V0T2JqZWN0LCByZXZlYWxUYXJnZXRPYmplY3QsIGNyZWF0ZVByb2plY3RUYXNrcywgY3JlYXRlQWxsVGFza3MsIGNyZWF0ZVRvZGF5VGFza3MsIGNyZWF0ZVRoaXNXZWVrVGFza3MsIHRhcmdldEluZGV4IH07XG4iLCJcbmZ1bmN0aW9uIHJldmVhbFByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybS1jb250YWluZXJcIik7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XG4gICAgZm9ybUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiByZXZlYWxUYXNrRm9ybSgpIHtcbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBoaWRlVGFza0Zvcm0oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm1cIikucmVzZXQoKTtcblxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWZvcm0tY29udGFpbmVyXCIpO1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IHsgcmV2ZWFsUHJvamVjdEZvcm0sIGhpZGVQcm9qZWN0Rm9ybSwgcmV2ZWFsVGFza0Zvcm0sIGhpZGVUYXNrRm9ybSB9OyIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyB0YXJnZXRJbmRleCB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG4vLyBTVE9SQUdFIFBST0pFQ1QgRlVOQ1RJT05TXG5mdW5jdGlvbiBtb2RpZnlQcm9qZWN0QXJyYXkocHJvamVjdCkge1xuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQXJyYXlcIikpO1xuXG4gICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEFycmF5KCkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvamVjdHNJblN0b3JhZ2UocHJvamVjdCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKTtcbiAgICAgICAgbW9kaWZ5UHJvamVjdEFycmF5KHByb2plY3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGlmeVByb2plY3RBcnJheShwcm9qZWN0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVN0b3JhZ2VQcm9qZWN0KGluZGV4KSB7XG4gICAgbGV0IHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSk7XG5cbiAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNBcnJheSkpO1xufVxuXG4vLyBTVE9SQUdFIFRBU0tTIEZVTkNUSU9OU1xuZnVuY3Rpb24gYWRkVGFza1RvVGFyZ2V0KGluZGV4LCBuYW1lLCBkYXRlLCBwcmlvcml0eSkge1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSk7XG4gICAgbGV0IHRhcmdldCA9IHByb2plY3RBcnJheVtpbmRleF07XG4gICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG5cbiAgICB0YXJnZXQudGFza0FycmF5LnB1c2gobmV3IFRhc2sobmFtZSwgZGF0ZSwgcHJpb3JpdHkpKVxuXG4gICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMCwgdGFyZ2V0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBcnJheVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gcHVzaENvbXBsZXRlZFRhc2soaW5kZXgsIHRhcmdldCkge1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSk7XG5cbiAgICBwcm9qZWN0QXJyYXlbdGFyZ2V0SW5kZXhdLmNvbXBsZXRlZEFycmF5LnB1c2godGFyZ2V0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBcnJheVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU3RvcmFnZVRhc2soaW5kZXgpIHtcbiAgICBsZXQgcHJvamVjdEFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQXJyYXlcIikpO1xuXG4gICAgcHJvamVjdEFycmF5W3RhcmdldEluZGV4XS50YXNrQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBcnJheVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbn1cblxuZXhwb3J0IHsgZ2V0UHJvamVjdEFycmF5LCBjaGVja1Byb2plY3RzSW5TdG9yYWdlLCBkZWxldGVTdG9yYWdlUHJvamVjdCwgYWRkVGFza1RvVGFyZ2V0LCBwdXNoQ29tcGxldGVkVGFzaywgZGVsZXRlU3RvcmFnZVRhc2sgfVxuIiwiXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdERpdiB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgaGlkZVByb2plY3RGb3JtIH0gZnJvbSBcIi4vZm9ybS5qc1wiO1xuXG5pbXBvcnQgeyBjaGVja1Byb2plY3RzSW5TdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxlU3RvcmFnZS5qc1wiO1xuXG4vLyBQUk9KRUNUIENPTlNUUlVDVE9SXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgdGFza0FycmF5ID0gW107XG5cbiAgICBjb21wbGV0ZWRBcnJheSA9IFtdO1xuXG4gICAgbmV3VGFzayA9ICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgdGhpcy50YXNrQXJyYXkucHVzaChuZXcgVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpKTtcbiAgICB9XG5cbn1cblxuLy8gRlVOQ1RJT04gVEhBVCBDUkVBVEVTIEEgUFJPSkVDVFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuXG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcblxuICAgIGNoZWNrUHJvamVjdHNJblN0b3JhZ2UobmV3UHJvamVjdCk7XG5cbiAgICBjcmVhdGVQcm9qZWN0RGl2KCk7XG4gICAgaGlkZVByb2plY3RGb3JtKCk7XG59XG5cblxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07IiwiaW1wb3J0IHsgdGFyZ2V0T2JqZWN0LCB0YXJnZXRJbmRleCB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBoaWRlVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgeyBhZGRUYXNrVG9UYXJnZXQsIGdldFByb2plY3RBcnJheSB9IGZyb20gXCIuL2xvY2FsZVN0b3JhZ2UuanNcIjtcblxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0YXNrXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICBhZGRUYXNrVG9UYXJnZXQodGFyZ2V0SW5kZXgsIG5hbWUsIGRhdGUsIHByaW9yaXR5KTtcblxuICAgIGNyZWF0ZVByb2plY3RUYXNrcygpO1xuXG4gICAgaGlkZVRhc2tGb3JtKCk7XG59XG5cblxuXG5leHBvcnQgeyBUYXNrLCBjcmVhdGVUYXNrfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9hc3NldHMvbG9nby5zdmdcIjtcbmltcG9ydCBob21lRGl2SWNvbiBmcm9tIFwiLi9hc3NldHMvaG9tZS5zdmdcIjtcbmltcG9ydCBkYXRlRGl2SWNvbiBmcm9tIFwiLi9hc3NldHMvZGF5LnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vYXNzZXRzL2FkZC5zdmdcIjtcbmltcG9ydCBleWVJY29uIGZyb20gXCIuL2Fzc2V0cy9leWUuc3ZnXCI7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tIFwiLi9hc3NldHMvZ2l0aHViLnN2Z1wiXG5pbXBvcnQgdHdpdHRlckljb24gZnJvbSBcIi4vYXNzZXRzL3R3aXR0ZXIuc3ZnXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyByZXZlYWxQcm9qZWN0Rm9ybSwgaGlkZVByb2plY3RGb3JtLCBoaWRlVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQWxsVGFza3MsIGNyZWF0ZVRvZGF5VGFza3MsIGNyZWF0ZVRoaXNXZWVrVGFza3MsIGNyZWF0ZVByb2plY3REaXYgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuXG4vLyBOQVYgU0VDVElPTlxuY29uc3QgbG9nb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28taWNvblwiKTtcbmxvZ29JY29uLnNyYyA9IGxvZ287XG5cbi8vIExFRlQgU0lERS1CQVIgKEhPTUUgU0VDVElPTilcbmNvbnN0IGhvbWVJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtZGl2LWljb25cIik7XG5ob21lSW1nLnNyYyA9IGhvbWVEaXZJY29uO1xuXG5jb25zdCB0b2RheUltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktZGl2LWljb25cIik7XG50b2RheUltZy5zcmMgPSBkYXRlRGl2SWNvbjtcblxuY29uc3QgdGhpc1dlZWtJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWstZGl2LWljb25cIik7XG50aGlzV2Vla0ltZy5zcmMgPSBkYXRlRGl2SWNvbjtcblxuY29uc3QgcHJvamVjdFBsdXNJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcGx1cy1pY29uXCIpO1xucHJvamVjdFBsdXNJbWcuc3JjID0gYWRkSWNvbjtcblxuY29uc3QgaG9tZUV5ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1leWVcIik7XG5ob21lRXllLnNyYyA9IGV5ZUljb247XG5ob21lRXllLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVBbGxUYXNrcyk7XG5cbmNvbnN0IHRvZGF5RXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1leWVcIik7XG50b2RheUV5ZS5zcmMgPSBleWVJY29uO1xudG9kYXlFeWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvZGF5VGFza3MpO1xuXG5jb25zdCB3ZWVrRXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrLWV5ZVwiKTtcbndlZWtFeWUuc3JjID0gZXllSWNvbjtcbndlZWtFeWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRoaXNXZWVrVGFza3MpO1xuXG5cbi8vIFJFVkVBTCBQUk9KRUNUIEZPUk1cbmNvbnN0IHJldmVhbEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYnRuXCIpO1xucmV2ZWFsRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZWFsUHJvamVjdEZvcm0pO1xuXG4vLyBISURFIFBST0pFQ1QgRk9STSBCVE5cbmNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1jYW5jZWxcIik7XG5wcm9qZWN0Q2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlUHJvamVjdEZvcm0pO1xuXG5cbi8vIENSRUFURSBORVcgUFJPSkVDVFxuY29uc3QgcHJvamVjdE5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1idG5cIik7XG5wcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG5cbi8vIENSRUFURSBORVcgVEFTS1xuY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1idG5cIik7XG50YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrKTtcblxuLy8gSElERSBUQVNLIEZPUk0gQlROXG5jb25zdCB0YXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRlLXRhc2stZm9ybVwiKTtcbnRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVUYXNrRm9ybSk7XG5cbi8vIEZPT1RFUlxuY29uc3QgZ2l0aHViSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb2NpYWwtaWNvbi0xXCIpO1xuZ2l0aHViSW1nLnNyYyA9IGdpdGh1Ykljb247XG5cbmNvbnN0IHR3aXR0ZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvY2lhbC1pY29uLTJcIik7XG50d2l0dGVySW1nLnNyYyA9IHR3aXR0ZXJJY29uO1xuXG4vLyBBTFdBWVMgQ0FMTCBDUkVBVEUgUFJPSkVDVCBESVYgRlVOQ1RJT05cbmNyZWF0ZVByb2plY3REaXYoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==