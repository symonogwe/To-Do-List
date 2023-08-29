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
`, "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Sanchez&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=League+Spartan&display=swap');\n\n:root {\n    --base-color: #023047;\n    --sub-base-color: #ffa400;\n    --sub-color: #454955;\n    --text-color: #FFFFFF;\n    --base-p-fs: calc(1rem + 1vw);\n    --base-header-fs: calc(1.1rem + 1.2vw);\n    --app-h2-fs: calc(.6rem + .6vw);\n    --logo-width: max(40px, 35%);\n    --base-header-ff: \"Sanchez\", sans-serif;\n    --base-paragraph-ff: \"League Spartan\", sans-serif;\n    --base-margin: 0.3em 0em;\n    --box-shadow: 5px 10px 30px black;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#main-container {\n    height: 100vh;\n}\n\nnav {\n    display: grid;\n    grid-template-columns: 0.5fr 1.5fr;\n    gap: 20px;\n    align-items: center;\n    height: 8%;\n    background-color: var(--base-color);\n}\n\n.logo-div {\n    width: 40%;\n    display: grid;\n    justify-items: center;\n}\n\n.logo-icon {\n    width: var(--logo-width);\n    filter: invert(96%) sepia(4%) saturate(0%) hue-rotate(4deg) brightness(105%) contrast(105%);\n}\n\n.header-div {\n    width: 40%;\n    display: grid;\n    text-align: center;\n}\n\n.header-txt {\n    color: var(--sub-base-color);\n    font-size: var(--base-header-fs);\n    font-family: var(--base-header-ff);\n}\n\nmain {\n    height: 92%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n/* MAIN LEFT */\n.left-side-bar {\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    background-color: var(--sub-color);\n}\n\n.home-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.home-div,\n.today-div,\n.week-div {\n    height: 15%;\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr;\n    align-items: center;\n    border-radius: 10px;\n    cursor: default;\n}\n\n.home-div:hover {\n    background-color: var(--base-color);\n}\n\n.today-div:hover {\n    background-color: var(--base-color);\n}\n\n.week-div:hover {\n    background-color: var(--base-color);\n}\n\n\n\n.home-txt-div,\n.today-txt-div,\n.week-txt-div {\n    grid-column: 2 / 3;\n    color: var(--text-color);\n    font-size: var(--app-h2-fs);\n    font-family: var(--base-paragraph-ff);\n}\n\n.home-logo-div,\n.today-logo-div,\n.week-logo-div {\n    grid-column: 1 / 2;\n    display: grid;\n    justify-items: center;\n}\n\n.home-icons {\n    width: max(30px, 20%);\n    filter: invert(96%) sepia(4%) saturate(0%) hue-rotate(4deg) brightness(105%) contrast(105%);\n}\n\n.home-eye,\n.today-eye,\n.week-eye {\n    width: max(30px, 20%);\n    cursor: pointer;\n    filter: invert(78%) sepia(23%) saturate(901%) hue-rotate(169deg) brightness(100%) contrast(89%);\n}\n\n\n.home-eye:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);\n}\n\n.today-eye:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);\n}\n\n.week-eye:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(22%) sepia(84%) saturate(4777%) hue-rotate(229deg) brightness(103%) contrast(104%);\n}\n\n.project-container {\n    position: relative;\n}\n\n.project-names-h1{\n    color: var(--sub-base-color);\n    font-size: var(--base-header-fs);\n    font-family: var(--base-header-ff);\n    text-align: center;\n}\n\n.projects-div {\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n}\n\n.my-project {\n    height: 10%;\n    width: 70%;\n    background-color: var(--base-color);\n    margin-top: .7em;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 3fr 1fr 1fr;\n    align-content: center;\n}\n\n.project-p {\n    padding-left: .5em;\n    display: grid;\n    align-content: center;\n    color: var(--text-color);\n    font-size: var(--base-p-fs);\n    font-family: var(--base-paragraph-ff);\n}\n\n.project-delete-icon {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.project-delete-icon:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(23%) sepia(79%) saturate(4643%) hue-rotate(1deg) brightness(100%) contrast(109%);\n}\n\n.project-add-icon {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.project-add-icon:hover {\n    scale: 1.2;\n    transition: .2s;\n    filter: invert(74%) sepia(22%) saturate(2177%) hue-rotate(77deg) brightness(111%) contrast(103%);\n}\n\n.project-btn-div {\n    height: 8%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n}\n\n.project-btn {\n    background-color: var(--sub-base-color);\n    color: var(--base-color);\n    border: none;\n    padding: 0em 2em;\n    border-radius: 8px;\n    height: 80%;\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 0.5fr 1.5fr;\n    align-items: center;\n    gap: 4px;\n    font-size: calc(.5rem + .6vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.project-btn:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n.project-plus-icon {\n    width: max(20px, 25%);\n    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(134deg) brightness(107%) contrast(106%);\n}\n\n/* PROJECT FORM STYLING */\n#project-form-container {\n    border: 1px solid var(--text-color);\n    border-radius: 10px;\n    display: none;\n    position: absolute;\n    top: 10%;\n    right: 0%;\n    left: 0%;\n    margin: auto;\n    height: 15%;\n    width: 70%;\n    background-color: #023047;\n    padding: .4em .4em;\n}\n\n.project-name {\n    display: grid;\n    justify-content: center;\n}\n\n.project-name > input {\n    border: none;\n    width: 100%;\n    height: 150%;\n}\n\n.project-name > input:focus {\n    outline: none;\n}\n\n.project-name > input::placeholder {\n    text-align: center;\n}\n\n.project-form-submit {\n    width: 80%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n.project-form-btn {\n    padding: .4em 1em;\n    border: none;\n    background-color: var(--sub-base-color);\n    color: var(--text-color);\n    border-radius: 8px;\n    cursor: pointer;\n}\n\n.project-form-cancel {\n    padding: .4em 1em;\n    border: none;\n    background-color: var(--sub-color);\n    color: var(--text-color);\n    border-radius: 8px;\n    cursor: pointer;\n}\n\n/* MAIN RIGHT */\n.right-side-bar {\n    position: relative;\n    /* background-color: #90dbf4; */\n    background-color: #ccdbdc;\n    overflow-y: auto;\n\n}\n\n.right-main-container {\n    height: 100%;\n}\n\n.task-header {\n    font-size: var(--base-header-fs);\n    font-family: var(--base-header-ff);\n    text-align: center;\n    margin-bottom: 2em;\n    color: var(--base-color);\n}\n\n.task-div {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 5%;\n    width: 80%;\n    margin: 1em auto;\n    padding: .4em .8em;\n    background-color: var(--sub-color);\n    color: var(--text-color);\n    border-radius: 10px;\n}\n\n.completed-task {\n    background-color: red;\n    text-decoration: line-through;\n}\n\n.title-div {\n    font-size: calc(.9rem + .9vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.due-date-div {\n    font-size: calc(.7rem + .7vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.priority-div {\n    font-size: calc(.9rem + .9vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.complete-task-div {\n    font-size: calc(.9rem + .9vw);\n    font-family: var(--base-paragraph-ff);\n}\n\n.complete-task-btn {\n    background-color: darkgreen;\n    color: var(--text-color);\n    border: none;\n    border-radius: 5px;\n    padding: .2em .4em;\n    cursor: pointer;\n}\n\n.complete-task-btn:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n.delete-task-div {\n    width: 8%;\n    display: grid;\n    justify-content: center;\n    align-content: center;\n}\n\n.delete-task-img {\n    width: max(30px, 40%);\n    cursor: pointer;\n    filter: invert(100%) sepia(8%) saturate(7480%) hue-rotate(180deg) brightness(109%) contrast(88%);\n}\n\n.delete-task-img:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n.add-task-btn-div {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    height: 6%;\n}\n\n.add-task-btn {\n    background-color: var(--sub-base-color);\n    border: none;\n    color: var(--sub-color);\n    padding: .4em .8em;\n    border-radius: 10px;\n    cursor: pointer;\n    font-family: var(--base-paragraph-ff);\n    font-size: calc(.6rem + .6vw);\n}\n\n.add-task-btn:hover {\n    scale: 1.1;\n    transition: .2s;\n}\n\n/* PROJECT TASK STYLING */\n#task-form-container {\n    display: none;\n    position: absolute;\n    left: 0%;\n    right: 0%;\n    top: 10%;\n    margin: auto;\n    height: 40%;\n    width: 55%;\n    background-color: var(--sub-color);\n    border-radius: 10px;\n}\n\n#task-form {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n\n.task-divs {\n    border: 2px solid var(--text-color);\n    height: 60px;\n    color: var(--text-color);\n    margin: .4em .6em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    border-radius: 5px;\n}\n\n#task-form-container  input:focus {\n    outline: none;\n}\n\n.task-btn-div {\n    border: none;\n    width: 50%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.task-btn {\n    background-color: var(--sub-base-color);\n    border: none;\n    color: var(--text-color);\n    padding: .4em .8em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.hide-task-form {\n    background-color: var(--base-color);\n    border: none;\n    color: var(--text-color);\n    padding: .4em .8em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n/* FOOTER */\nfooter {\n    position: fixed;\n    bottom: 0;\n    width: 70%;\n    margin: 0 auto;\n    height: 40px;\n    display: flex;\n    opacity: .8;\n}\n  \n.social-icons-container {\n    width: 20%;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    margin: auto;\n}\n\n.social-icon-1,\n.social-icon-2 {\n    width: max(40px, 30%);\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   completedDiv: () => (/* binding */ completedDiv),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getFinishTask: () => (/* binding */ getFinishTask)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





// PROJECT DELETE
function deleteProject(e) {
    let targetIndex = e.target.parentElement.dataset.position;

    _project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.splice(targetIndex, 1);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createProjectDiv)();
}

// TASKS COMPLETE & DELETE
let completedDiv = [];
function getFinishTask(e) {
    let completedDivIndex = e.target.parentElement.parentElement.dataset.index;
    completedDiv.push(_dom_js__WEBPACK_IMPORTED_MODULE_1__.targetObject.taskArray[completedDivIndex]);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createProjectTasks)();
    console.log(completedDiv);
}

function deleteTask(e) {
    let targetIndex = e.target.parentElement.parentElement.dataset.index;

    _dom_js__WEBPACK_IMPORTED_MODULE_1__.targetObject.taskArray.splice(targetIndex, 1);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createProjectTasks)();
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
/* harmony export */   targetObject: () => (/* binding */ targetObject)
/* harmony export */ });
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/add.svg */ "./src/assets/add.svg");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteDom.js */ "./src/deleteDom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form.js */ "./src/form.js");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isThisWeek__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/isThisWeek */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");











let targetObject;
let targetIndex;


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
        projectAddIcon.addEventListener("click", revealTargetObject);
        projectAddIcon.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__;

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
            projectAddIcon.addEventListener("click", revealTargetObject);
            projectAddIcon.src = _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__;

            let projectDelete = document.createElement("img");
            projectDelete.classList.add("project-delete-icon");
            projectDelete.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject);
            projectDelete.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;

            myProjectDiv.append(projectP, projectAddIcon, projectDelete);

            projectDiv.append(myProjectDiv);
        })
    }
}

function revealTargetObject(e) {
    targetIndex = e.target.parentElement.dataset.position;
    targetObject = _project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[targetIndex];

    createProjectTasks();
}

function createProjectTasks() {
    const rightContainer = document.querySelector(".right-main-container");

    rightContainer.innerHTML = "";

    const taskHeader = document.createElement("h1");
    taskHeader.classList.add("task-header");
    taskHeader.textContent = `${targetObject.name} To Do's`;

    rightContainer.append(taskHeader);

    if (targetObject.taskArray.length !== 0) {
        targetObject.taskArray.forEach(task => {
            // task div
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("task-div");

            taskDiv.dataset.index = +(targetObject.taskArray.indexOf(task));

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

            let completeTaskDiv = document.createElement("div");
            completeTaskDiv.classList.add("complete-task-div");
            let completeTaskBtn = document.createElement("button");
            completeTaskBtn.classList.add("complete-task-btn");
            completeTaskBtn.textContent = "Done";
            completeTaskBtn.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.getFinishTask);
            completeTaskDiv.append(completeTaskBtn);

            let deleteTaskDiv = document.createElement("div");
            deleteTaskDiv.classList.add("delete-task-div");
            let deleteTaskImg = document.createElement("img");
            deleteTaskImg.classList.add("delete-task-img");
            deleteTaskImg.addEventListener("click", _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.deleteTask)
            deleteTaskImg.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
            deleteTaskDiv.append(deleteTaskImg);

            taskDiv.append(titleDiv, dueDateDiv, priorityDiv, completeTaskDiv, deleteTaskDiv);

            _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.completedDiv.forEach(div => {
                if (div === task) {
                    taskDiv.classList.toggle("completed-task")
                }
            })

            rightContainer.append(taskDiv);
        })
    }

    const addTaskBtnDiv = document.createElement("div");
    addTaskBtnDiv.classList.add("add-task-btn-div");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.addEventListener("click", _form_js__WEBPACK_IMPORTED_MODULE_4__.revealTaskForm);

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

    _project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.forEach(project => {
        if (project.taskArray.length !== 0) {
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

                _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.completedDiv.forEach(div => {
                    if (div === task) {
                        taskDiv.classList.toggle("completed-task")
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

    _project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.forEach(project => {
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

                    _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.completedDiv.forEach(div => {
                        if (div === task) {
                            taskDiv.classList.toggle("completed-task")
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

    _project_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.forEach(project => {
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

                    _deleteDom_js__WEBPACK_IMPORTED_MODULE_3__.completedDiv.forEach(div => {
                        if (div === task) {
                            taskDiv.classList.toggle("completed-task")
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

    newTask = (title, dueDate, priority) => {
        this.taskArray.push(new _task_js__WEBPACK_IMPORTED_MODULE_0__.Task(title, dueDate, priority));
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
/* harmony export */   createTask: () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./src/form.js");





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

    _dom_js__WEBPACK_IMPORTED_MODULE_0__.targetObject.newTask(name, date, priority);

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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUhBQXFIO0FBQ3JILDRIQUE0SDtBQUM1SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFV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QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7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QUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0M0Qjs7QUFFUztBQUNPO0FBQ0Q7QUFDSjtBQUNBO0FBQ0s7QUFDRzs7QUFFRjtBQUNnQztBQUN0QztBQUMwQzs7O0FBR2pGO0FBQ0E7QUFDQSxlQUFlLDZDQUFJOztBQUVuQjtBQUNBO0FBQ0EsY0FBYyw2Q0FBVzs7QUFFekI7QUFDQSxlQUFlLDRDQUFXOztBQUUxQjtBQUNBLGtCQUFrQiw0Q0FBVzs7QUFFN0I7QUFDQSxxQkFBcUIsNENBQU87O0FBRTVCO0FBQ0EsY0FBYyw0Q0FBTztBQUNyQixrQ0FBa0Msb0RBQWM7O0FBRWhEO0FBQ0EsZUFBZSw0Q0FBTztBQUN0QixtQ0FBbUMsc0RBQWdCOztBQUVuRDtBQUNBLGNBQWMsNENBQU87QUFDckIsa0NBQWtDLHlEQUFtQjs7O0FBR3JEO0FBQ0E7QUFDQSx3Q0FBd0MsdURBQWlCOztBQUV6RDtBQUNBO0FBQ0EsMkNBQTJDLHFEQUFlOzs7QUFHMUQ7QUFDQTtBQUNBLHlDQUF5QyxzREFBYTs7QUFFdEQ7QUFDQTtBQUNBLGtDQUFrQyxpREFBVTs7QUFFNUM7QUFDQTtBQUNBLHdDQUF3QyxrREFBWTs7QUFFcEQ7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBVTs7QUFFMUI7QUFDQSxpQkFBaUIsZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGVsZXRlRG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1TYW5jaGV6JmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxlYWd1ZStTcGFydGFuJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYmFzZS1jb2xvcjogIzAyMzA0NztcbiAgICAtLXN1Yi1iYXNlLWNvbG9yOiAjZmZhNDAwO1xuICAgIC0tc3ViLWNvbG9yOiAjNDU0OTU1O1xuICAgIC0tdGV4dC1jb2xvcjogI0ZGRkZGRjtcbiAgICAtLWJhc2UtcC1mczogY2FsYygxcmVtICsgMXZ3KTtcbiAgICAtLWJhc2UtaGVhZGVyLWZzOiBjYWxjKDEuMXJlbSArIDEuMnZ3KTtcbiAgICAtLWFwcC1oMi1mczogY2FsYyguNnJlbSArIC42dncpO1xuICAgIC0tbG9nby13aWR0aDogbWF4KDQwcHgsIDM1JSk7XG4gICAgLS1iYXNlLWhlYWRlci1mZjogXCJTYW5jaGV6XCIsIHNhbnMtc2VyaWY7XG4gICAgLS1iYXNlLXBhcmFncmFwaC1mZjogXCJMZWFndWUgU3BhcnRhblwiLCBzYW5zLXNlcmlmO1xuICAgIC0tYmFzZS1tYXJnaW46IDAuM2VtIDBlbTtcbiAgICAtLWJveC1zaGFkb3c6IDVweCAxMHB4IDMwcHggYmxhY2s7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNtYWluLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxubmF2IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbn1cblxuLmxvZ28tZGl2IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nby1pY29uIHtcbiAgICB3aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG4gICAgZmlsdGVyOiBpbnZlcnQoOTYlKSBzZXBpYSg0JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoNGRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDUlKTtcbn1cblxuLmhlYWRlci1kaXYge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItdHh0IHtcbiAgICBjb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1oZWFkZXItZnMpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWhlYWRlci1mZik7XG59XG5cbm1haW4ge1xuICAgIGhlaWdodDogOTIlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xufVxuXG4vKiBNQUlOIExFRlQgKi9cbi5sZWZ0LXNpZGUtYmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xufVxuXG4uaG9tZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmhvbWUtZGl2LFxuLnRvZGF5LWRpdixcbi53ZWVrLWRpdiB7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5ob21lLWRpdjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XG59XG5cbi50b2RheS1kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xufVxuXG4ud2Vlay1kaXY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xufVxuXG5cblxuLmhvbWUtdHh0LWRpdixcbi50b2RheS10eHQtZGl2LFxuLndlZWstdHh0LWRpdiB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWFwcC1oMi1mcyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcbn1cblxuLmhvbWUtbG9nby1kaXYsXG4udG9kYXktbG9nby1kaXYsXG4ud2Vlay1sb2dvLWRpdiB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaG9tZS1pY29ucyB7XG4gICAgd2lkdGg6IG1heCgzMHB4LCAyMCUpO1xuICAgIGZpbHRlcjogaW52ZXJ0KDk2JSkgc2VwaWEoNCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDRkZWcpIGJyaWdodG5lc3MoMTA1JSkgY29udHJhc3QoMTA1JSk7XG59XG5cbi5ob21lLWV5ZSxcbi50b2RheS1leWUsXG4ud2Vlay1leWUge1xuICAgIHdpZHRoOiBtYXgoMzBweCwgMjAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBpbnZlcnQoNzglKSBzZXBpYSgyMyUpIHNhdHVyYXRlKDkwMSUpIGh1ZS1yb3RhdGUoMTY5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDg5JSk7XG59XG5cblxuLmhvbWUtZXllOmhvdmVyIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIHRyYW5zaXRpb246IC4ycztcbiAgICBmaWx0ZXI6IGludmVydCgyMiUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDc3NyUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xufVxuXG4udG9kYXktZXllOmhvdmVyIHtcbiAgICBzY2FsZTogMS4yO1xuICAgIHRyYW5zaXRpb246IC4ycztcbiAgICBmaWx0ZXI6IGludmVydCgyMiUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDc3NyUpIGh1ZS1yb3RhdGUoMjI5ZGVnKSBicmlnaHRuZXNzKDEwMyUpIGNvbnRyYXN0KDEwNCUpO1xufVxuXG4ud2Vlay1leWU6aG92ZXIge1xuICAgIHNjYWxlOiAxLjI7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xuICAgIGZpbHRlcjogaW52ZXJ0KDIyJSkgc2VwaWEoODQlKSBzYXR1cmF0ZSg0Nzc3JSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSk7XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvamVjdC1uYW1lcy1oMXtcbiAgICBjb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tYmFzZS1oZWFkZXItZnMpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWhlYWRlci1mZik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdHMtZGl2IHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubXktcHJvamVjdCB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbiAgICBtYXJnaW4tdG9wOiAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnIgMWZyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtcC1mcyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcbn1cblxuLnByb2plY3QtZGVsZXRlLWljb24ge1xuICAgIHdpZHRoOiBtYXgoMzBweCwgNDAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg4OCUpO1xufVxuXG4ucHJvamVjdC1kZWxldGUtaWNvbjpob3ZlciB7XG4gICAgc2NhbGU6IDEuMjtcbiAgICB0cmFuc2l0aW9uOiAuMnM7XG4gICAgZmlsdGVyOiBpbnZlcnQoMjMlKSBzZXBpYSg3OSUpIHNhdHVyYXRlKDQ2NDMlKSBodWUtcm90YXRlKDFkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA5JSk7XG59XG5cbi5wcm9qZWN0LWFkZC1pY29uIHtcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDglKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgxODBkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoODglKTtcbn1cblxuLnByb2plY3QtYWRkLWljb246aG92ZXIge1xuICAgIHNjYWxlOiAxLjI7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xuICAgIGZpbHRlcjogaW52ZXJ0KDc0JSkgc2VwaWEoMjIlKSBzYXR1cmF0ZSgyMTc3JSkgaHVlLXJvdGF0ZSg3N2RlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCgxMDMlKTtcbn1cblxuLnByb2plY3QtYnRuLWRpdiB7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDBlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogODAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDRweDtcbiAgICBmb250LXNpemU6IGNhbGMoLjVyZW0gKyAuNnZ3KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xufVxuXG4ucHJvamVjdC1idG46aG92ZXIge1xuICAgIHNjYWxlOiAxLjE7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4ucHJvamVjdC1wbHVzLWljb24ge1xuICAgIHdpZHRoOiBtYXgoMjBweCwgMjUlKTtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTM0ZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDEwNiUpO1xufVxuXG4vKiBQUk9KRUNUIEZPUk0gU1RZTElORyAqL1xuI3Byb2plY3QtZm9ybS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGxlZnQ6IDAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjMwNDc7XG4gICAgcGFkZGluZzogLjRlbSAuNGVtO1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucHJvamVjdC1uYW1lID4gaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE1MCU7XG59XG5cbi5wcm9qZWN0LW5hbWUgPiBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLnByb2plY3QtbmFtZSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdC1mb3JtLXN1Ym1pdCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLnByb2plY3QtZm9ybS1idG4ge1xuICAgIHBhZGRpbmc6IC40ZW0gMWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWZvcm0tY2FuY2VsIHtcbiAgICBwYWRkaW5nOiAuNGVtIDFlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTUFJTiBSSUdIVCAqL1xuLnJpZ2h0LXNpZGUtYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzkwZGJmNDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkYmRjO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbn1cblxuLnJpZ2h0LW1haW4tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YXNrLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWhlYWRlci1mcyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtaGVhZGVyLWZmKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIGNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcbn1cblxuLnRhc2stZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNSU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xuICAgIHBhZGRpbmc6IC40ZW0gLjhlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29tcGxldGVkLXRhc2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRpdGxlLWRpdiB7XG4gICAgZm9udC1zaXplOiBjYWxjKC45cmVtICsgLjl2dyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcbn1cblxuLmR1ZS1kYXRlLWRpdiB7XG4gICAgZm9udC1zaXplOiBjYWxjKC43cmVtICsgLjd2dyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcbn1cblxuLnByaW9yaXR5LWRpdiB7XG4gICAgZm9udC1zaXplOiBjYWxjKC45cmVtICsgLjl2dyk7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcbn1cblxuLmNvbXBsZXRlLXRhc2stZGl2IHtcbiAgICBmb250LXNpemU6IGNhbGMoLjlyZW0gKyAuOXZ3KTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xufVxuXG4uY29tcGxldGUtdGFzay1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAuMmVtIC40ZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29tcGxldGUtdGFzay1idG46aG92ZXIge1xuICAgIHNjYWxlOiAxLjE7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4uZGVsZXRlLXRhc2stZGl2IHtcbiAgICB3aWR0aDogOCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kZWxldGUtdGFzay1pbWcge1xuICAgIHdpZHRoOiBtYXgoMzBweCwgNDAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg4OCUpO1xufVxuXG4uZGVsZXRlLXRhc2staW1nOmhvdmVyIHtcbiAgICBzY2FsZTogMS4xO1xuICAgIHRyYW5zaXRpb246IC4ycztcbn1cblxuLmFkZC10YXNrLWJ0bi1kaXYge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNiU7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XG4gICAgZm9udC1zaXplOiBjYWxjKC42cmVtICsgLjZ2dyk7XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXIge1xuICAgIHNjYWxlOiAxLjE7XG4gICAgdHJhbnNpdGlvbjogLjJzO1xufVxuXG4vKiBQUk9KRUNUIFRBU0sgU1RZTElORyAqL1xuI3Rhc2stZm9ybS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICB0b3A6IDEwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiN0YXNrLWZvcm0ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi50YXNrLWRpdnMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgbWFyZ2luOiAuNGVtIC42ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3Rhc2stZm9ybS1jb250YWluZXIgIGlucHV0OmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFzay1idG4tZGl2IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4udGFzay1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIHBhZGRpbmc6IC40ZW0gLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZS10YXNrLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UtY29sb3IpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEZPT1RFUiAqL1xuZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3BhY2l0eTogLjg7XG59XG4gIFxuLnNvY2lhbC1pY29ucy1jb250YWluZXIge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnNvY2lhbC1pY29uLTEsXG4uc29jaWFsLWljb24tMiB7XG4gICAgd2lkdGg6IG1heCg0MHB4LCAzMCUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isc0NBQXND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QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNhbmNoZXomZGlzcGxheT1zd2FwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGVhZ3VlK1NwYXJ0YW4mZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLWJhc2UtY29sb3I6ICMwMjMwNDc7XFxuICAgIC0tc3ViLWJhc2UtY29sb3I6ICNmZmE0MDA7XFxuICAgIC0tc3ViLWNvbG9yOiAjNDU0OTU1O1xcbiAgICAtLXRleHQtY29sb3I6ICNGRkZGRkY7XFxuICAgIC0tYmFzZS1wLWZzOiBjYWxjKDFyZW0gKyAxdncpO1xcbiAgICAtLWJhc2UtaGVhZGVyLWZzOiBjYWxjKDEuMXJlbSArIDEuMnZ3KTtcXG4gICAgLS1hcHAtaDItZnM6IGNhbGMoLjZyZW0gKyAuNnZ3KTtcXG4gICAgLS1sb2dvLXdpZHRoOiBtYXgoNDBweCwgMzUlKTtcXG4gICAgLS1iYXNlLWhlYWRlci1mZjogXFxcIlNhbmNoZXpcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWJhc2UtcGFyYWdyYXBoLWZmOiBcXFwiTGVhZ3VlIFNwYXJ0YW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAtLWJhc2UtbWFyZ2luOiAwLjNlbSAwZW07XFxuICAgIC0tYm94LXNoYWRvdzogNXB4IDEwcHggMzBweCBibGFjaztcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxLjVmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDglO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXG59XFxuXFxuLmxvZ28tZGl2IHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nby1pY29uIHtcXG4gICAgd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcbiAgICBmaWx0ZXI6IGludmVydCg5NiUpIHNlcGlhKDQlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSg0ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNSUpO1xcbn1cXG5cXG4uaGVhZGVyLWRpdiB7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci10eHQge1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtaGVhZGVyLWZmKTtcXG59XFxuXFxubWFpbiB7XFxuICAgIGhlaWdodDogOTIlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcblxcbi8qIE1BSU4gTEVGVCAqL1xcbi5sZWZ0LXNpZGUtYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItY29sb3IpO1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmhvbWUtZGl2LFxcbi50b2RheS1kaXYsXFxuLndlZWstZGl2IHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmhvbWUtZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxufVxcblxcbi50b2RheS1kaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXG59XFxuXFxuLndlZWstZGl2OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxufVxcblxcblxcblxcbi5ob21lLXR4dC1kaXYsXFxuLnRvZGF5LXR4dC1kaXYsXFxuLndlZWstdHh0LWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWFwcC1oMi1mcyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XFxufVxcblxcbi5ob21lLWxvZ28tZGl2LFxcbi50b2RheS1sb2dvLWRpdixcXG4ud2Vlay1sb2dvLWRpdiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1pY29ucyB7XFxuICAgIHdpZHRoOiBtYXgoMzBweCwgMjAlKTtcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTYlKSBzZXBpYSg0JSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoNGRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDUlKTtcXG59XFxuXFxuLmhvbWUtZXllLFxcbi50b2RheS1leWUsXFxuLndlZWstZXllIHtcXG4gICAgd2lkdGg6IG1heCgzMHB4LCAyMCUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDc4JSkgc2VwaWEoMjMlKSBzYXR1cmF0ZSg5MDElKSBodWUtcm90YXRlKDE2OWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCg4OSUpO1xcbn1cXG5cXG5cXG4uaG9tZS1leWU6aG92ZXIge1xcbiAgICBzY2FsZTogMS4yO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIyJSkgc2VwaWEoODQlKSBzYXR1cmF0ZSg0Nzc3JSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi50b2RheS1leWU6aG92ZXIge1xcbiAgICBzY2FsZTogMS4yO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDIyJSkgc2VwaWEoODQlKSBzYXR1cmF0ZSg0Nzc3JSkgaHVlLXJvdGF0ZSgyMjlkZWcpIGJyaWdodG5lc3MoMTAzJSkgY29udHJhc3QoMTA0JSk7XFxufVxcblxcbi53ZWVrLWV5ZTpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjI7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgZmlsdGVyOiBpbnZlcnQoMjIlKSBzZXBpYSg4NCUpIHNhdHVyYXRlKDQ3NzclKSBodWUtcm90YXRlKDIyOWRlZykgYnJpZ2h0bmVzcygxMDMlKSBjb250cmFzdCgxMDQlKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lcy1oMXtcXG4gICAgY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLWhlYWRlci1mcyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLWhlYWRlci1mZik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWRpdiB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubXktcHJvamVjdCB7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXG4gICAgbWFyZ2luLXRvcDogLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1wIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1iYXNlLXAtZnMpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xcbn1cXG5cXG4ucHJvamVjdC1kZWxldGUtaWNvbiB7XFxuICAgIHdpZHRoOiBtYXgoMzBweCwgNDAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg4JSkgc2F0dXJhdGUoNzQ4MCUpIGh1ZS1yb3RhdGUoMTgwZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5wcm9qZWN0LWRlbGV0ZS1pY29uOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbiAgICBmaWx0ZXI6IGludmVydCgyMyUpIHNlcGlhKDc5JSkgc2F0dXJhdGUoNDY0MyUpIGh1ZS1yb3RhdGUoMWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDklKTtcXG59XFxuXFxuLnByb2plY3QtYWRkLWljb24ge1xcbiAgICB3aWR0aDogbWF4KDMwcHgsIDQwJSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDE4MGRlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg4OCUpO1xcbn1cXG5cXG4ucHJvamVjdC1hZGQtaWNvbjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjI7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG4gICAgZmlsdGVyOiBpbnZlcnQoNzQlKSBzZXBpYSgyMiUpIHNhdHVyYXRlKDIxNzclKSBodWUtcm90YXRlKDc3ZGVnKSBicmlnaHRuZXNzKDExMSUpIGNvbnRyYXN0KDEwMyUpO1xcbn1cXG5cXG4ucHJvamVjdC1idG4tZGl2IHtcXG4gICAgaGVpZ2h0OiA4JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwZW0gMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMS41ZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNHB4O1xcbiAgICBmb250LXNpemU6IGNhbGMoLjVyZW0gKyAuNnZ3KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcXG59XFxuXFxuLnByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbn1cXG5cXG4ucHJvamVjdC1wbHVzLWljb24ge1xcbiAgICB3aWR0aDogbWF4KDIwcHgsIDI1JSk7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxMzRkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTA2JSk7XFxufVxcblxcbi8qIFBST0pFQ1QgRk9STSBTVFlMSU5HICovXFxuI3Byb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMzA0NztcXG4gICAgcGFkZGluZzogLjRlbSAuNGVtO1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hbWUgPiBpbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTUwJTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSA+IGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtbmFtZSA+IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1zdWJtaXQge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG4ge1xcbiAgICBwYWRkaW5nOiAuNGVtIDFlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWItYmFzZS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY2FuY2VsIHtcXG4gICAgcGFkZGluZzogLjRlbSAxZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogTUFJTiBSSUdIVCAqL1xcbi5yaWdodC1zaWRlLWJhciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzkwZGJmNDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZGJkYztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG5cXG59XFxuXFxuLnJpZ2h0LW1haW4tY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFzay1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IHZhcigtLWJhc2UtaGVhZGVyLWZzKTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtaGVhZGVyLWZmKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1iYXNlLWNvbG9yKTtcXG59XFxuXFxuLnRhc2stZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xcbiAgICBwYWRkaW5nOiAuNGVtIC44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRpdGxlLWRpdiB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguOXJlbSArIC45dncpO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tYmFzZS1wYXJhZ3JhcGgtZmYpO1xcbn1cXG5cXG4uZHVlLWRhdGUtZGl2IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKC43cmVtICsgLjd2dyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XFxufVxcblxcbi5wcmlvcml0eS1kaXYge1xcbiAgICBmb250LXNpemU6IGNhbGMoLjlyZW0gKyAuOXZ3KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJhc2UtcGFyYWdyYXBoLWZmKTtcXG59XFxuXFxuLmNvbXBsZXRlLXRhc2stZGl2IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKC45cmVtICsgLjl2dyk7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XFxufVxcblxcbi5jb21wbGV0ZS10YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogLjJlbSAuNGVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZS10YXNrLWJ0bjpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjE7XFxuICAgIHRyYW5zaXRpb246IC4ycztcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWRpdiB7XFxuICAgIHdpZHRoOiA4JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS10YXNrLWltZyB7XFxuICAgIHdpZHRoOiBtYXgoMzBweCwgNDAlKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg4JSkgc2F0dXJhdGUoNzQ4MCUpIGh1ZS1yb3RhdGUoMTgwZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDg4JSk7XFxufVxcblxcbi5kZWxldGUtdGFzay1pbWc6aG92ZXIge1xcbiAgICBzY2FsZTogMS4xO1xcbiAgICB0cmFuc2l0aW9uOiAuMnM7XFxufVxcblxcbi5hZGQtdGFzay1idG4tZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2JTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Yi1iYXNlLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1iYXNlLXBhcmFncmFwaC1mZik7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyguNnJlbSArIC42dncpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMTtcXG4gICAgdHJhbnNpdGlvbjogLjJzO1xcbn1cXG5cXG4vKiBQUk9KRUNUIFRBU0sgU1RZTElORyAqL1xcbiN0YXNrLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwJTtcXG4gICAgcmlnaHQ6IDAlO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG4gICAgd2lkdGg6IDU1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3Rhc2stZm9ybSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG4udGFzay1kaXZzIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBtYXJnaW46IC40ZW0gLjZlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0YXNrLWZvcm0tY29udGFpbmVyICBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLWJ0bi1kaXYge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnRhc2stYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3ViLWJhc2UtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogLjRlbSAuOGVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGUtdGFzay1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZS1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAuNGVtIC44ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGT09URVIgKi9cXG5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3BhY2l0eTogLjg7XFxufVxcbiAgXFxuLnNvY2lhbC1pY29ucy1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uc29jaWFsLWljb24tMSxcXG4uc29jaWFsLWljb24tMiB7XFxuICAgIHdpZHRoOiBtYXgoNDBweCwgMzAlKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdERpdiwgdGFyZ2V0T2JqZWN0LCBjcmVhdGVQcm9qZWN0VGFza3N9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5cblxuLy8gUFJPSkVDVCBERUxFVEVcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xuICAgIGxldCB0YXJnZXRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbjtcblxuICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICBjcmVhdGVQcm9qZWN0RGl2KCk7XG59XG5cbi8vIFRBU0tTIENPTVBMRVRFICYgREVMRVRFXG5sZXQgY29tcGxldGVkRGl2ID0gW107XG5mdW5jdGlvbiBnZXRGaW5pc2hUYXNrKGUpIHtcbiAgICBsZXQgY29tcGxldGVkRGl2SW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pbmRleDtcbiAgICBjb21wbGV0ZWREaXYucHVzaCh0YXJnZXRPYmplY3QudGFza0FycmF5W2NvbXBsZXRlZERpdkluZGV4XSk7XG4gICAgY3JlYXRlUHJvamVjdFRhc2tzKCk7XG4gICAgY29uc29sZS5sb2coY29tcGxldGVkRGl2KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG4gICAgbGV0IHRhcmdldEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaW5kZXg7XG5cbiAgICB0YXJnZXRPYmplY3QudGFza0FycmF5LnNwbGljZSh0YXJnZXRJbmRleCwgMSk7XG4gICAgY3JlYXRlUHJvamVjdFRhc2tzKCk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRhc2ssIGdldEZpbmlzaFRhc2ssIGNvbXBsZXRlZERpdiB9IiwiaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vYXNzZXRzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBhZGRJY29uIGZyb20gXCIuL2Fzc2V0cy9hZGQuc3ZnXCJcblxuaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QsIGRlbGV0ZVRhc2ssIGdldEZpbmlzaFRhc2ssIGNvbXBsZXRlZERpdiB9IGZyb20gXCIuL2RlbGV0ZURvbS5qc1wiO1xuaW1wb3J0IHsgcmV2ZWFsVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5cbmltcG9ydCBpc1RvZGF5IGZyb20gXCJkYXRlLWZucy9pc1RvZGF5XCI7XG5pbXBvcnQgaXNUaGlzV2VlayBmcm9tICdkYXRlLWZucy9pc1RoaXNXZWVrJztcbmltcG9ydCBwYXJzZUlTTyBmcm9tICdkYXRlLWZucy9wYXJzZUlTTyc7XG5cbmxldCB0YXJnZXRPYmplY3Q7XG5sZXQgdGFyZ2V0SW5kZXg7XG5cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpdigpIHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1kaXZcIik7XG5cbiAgICBpZiAocHJvamVjdERpdi5pbm5lckhUTUwgPT09IFwiXCIpIHtcbiAgICAgICAgbGV0IG15UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG15UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibXktcHJvamVjdFwiKTtcbiAgICAgICAgXG4gICAgICAgIG15UHJvamVjdERpdi5kYXRhc2V0LnBvc2l0aW9uID0gMDtcbiAgICAgICAgXG4gICAgICAgIGxldCBwcm9qZWN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9qZWN0UC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1wXCIpO1xuICAgICAgICBwcm9qZWN0UC50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbMF0ubmFtZTtcblxuICAgICAgICBsZXQgcHJvamVjdEFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9qZWN0QWRkSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hZGQtaWNvblwiKTtcbiAgICAgICAgcHJvamVjdEFkZEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJldmVhbFRhcmdldE9iamVjdCk7XG4gICAgICAgIHByb2plY3RBZGRJY29uLnNyYyA9IGFkZEljb247XG5cbiAgICAgICAgbGV0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlbGV0ZS1pY29uXCIpO1xuICAgICAgICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdERlbGV0ZS5zcmMgPSBkZWxldGVJY29uO1xuXG4gICAgICAgIG15UHJvamVjdERpdi5hcHBlbmQocHJvamVjdFAsIHByb2plY3RBZGRJY29uLCBwcm9qZWN0RGVsZXRlKTtcblxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChteVByb2plY3REaXYpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgbXlQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG15UHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwibXktcHJvamVjdFwiKTtcblxuICAgICAgICAgICAgbXlQcm9qZWN0RGl2LmRhdGFzZXQucG9zaXRpb24gPSArKHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0KSk7XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgcHJvamVjdFAuY2xhc3NMaXN0LmFkZChcInByb2plY3QtcFwiKTtcbiAgICAgICAgICAgIHByb2plY3RQLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgICAgICBsZXQgcHJvamVjdEFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgcHJvamVjdEFkZEljb24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYWRkLWljb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0QWRkSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZWFsVGFyZ2V0T2JqZWN0KTtcbiAgICAgICAgICAgIHByb2plY3RBZGRJY29uLnNyYyA9IGFkZEljb247XG5cbiAgICAgICAgICAgIGxldCBwcm9qZWN0RGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGVsZXRlLWljb25cIik7XG4gICAgICAgICAgICBwcm9qZWN0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGUuc3JjID0gZGVsZXRlSWNvbjtcblxuICAgICAgICAgICAgbXlQcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0UCwgcHJvamVjdEFkZEljb24sIHByb2plY3REZWxldGUpO1xuXG4gICAgICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZChteVByb2plY3REaXYpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmV2ZWFsVGFyZ2V0T2JqZWN0KGUpIHtcbiAgICB0YXJnZXRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbjtcbiAgICB0YXJnZXRPYmplY3QgPSBwcm9qZWN0c0FycmF5W3RhcmdldEluZGV4XTtcblxuICAgIGNyZWF0ZVByb2plY3RUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0VGFza3MoKSB7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LW1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgcmlnaHRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGFza0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1oZWFkZXJcIik7XG4gICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IGAke3RhcmdldE9iamVjdC5uYW1lfSBUbyBEbydzYDtcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZCh0YXNrSGVhZGVyKTtcblxuICAgIGlmICh0YXJnZXRPYmplY3QudGFza0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0YXJnZXRPYmplY3QudGFza0FycmF5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAvLyB0YXNrIGRpdlxuICAgICAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgICAgIHRhc2tEaXYuZGF0YXNldC5pbmRleCA9ICsodGFyZ2V0T2JqZWN0LnRhc2tBcnJheS5pbmRleE9mKHRhc2spKTtcblxuICAgICAgICAgICAgLy8gdGFzayBkaXYgaXRlbXNcbiAgICAgICAgICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtZGl2XCIpO1xuICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS1kaXZcIik7XG4gICAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWRpdlwiKTtcbiAgICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb21wbGV0ZVRhc2tEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLXRhc2stZGl2XCIpO1xuICAgICAgICAgICAgbGV0IGNvbXBsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBjb21wbGV0ZVRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlLXRhc2stYnRuXCIpO1xuICAgICAgICAgICAgY29tcGxldGVUYXNrQnRuLnRleHRDb250ZW50ID0gXCJEb25lXCI7XG4gICAgICAgICAgICBjb21wbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldEZpbmlzaFRhc2spO1xuICAgICAgICAgICAgY29tcGxldGVUYXNrRGl2LmFwcGVuZChjb21wbGV0ZVRhc2tCdG4pO1xuXG4gICAgICAgICAgICBsZXQgZGVsZXRlVGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkZWxldGVUYXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1kaXZcIik7XG4gICAgICAgICAgICBsZXQgZGVsZXRlVGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBkZWxldGVUYXNrSW1nLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdGFzay1pbWdcIik7XG4gICAgICAgICAgICBkZWxldGVUYXNrSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKVxuICAgICAgICAgICAgZGVsZXRlVGFza0ltZy5zcmMgPSBkZWxldGVJY29uO1xuICAgICAgICAgICAgZGVsZXRlVGFza0Rpdi5hcHBlbmQoZGVsZXRlVGFza0ltZyk7XG5cbiAgICAgICAgICAgIHRhc2tEaXYuYXBwZW5kKHRpdGxlRGl2LCBkdWVEYXRlRGl2LCBwcmlvcml0eURpdiwgY29tcGxldGVUYXNrRGl2LCBkZWxldGVUYXNrRGl2KTtcblxuICAgICAgICAgICAgY29tcGxldGVkRGl2LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGl2ID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZC10YXNrXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgcmlnaHRDb250YWluZXIuYXBwZW5kKHRhc2tEaXYpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFkZFRhc2tCdG5EaXYuY2xhc3NMaXN0LmFkZChcImFkZC10YXNrLWJ0bi1kaXZcIik7XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZWFsVGFza0Zvcm0pO1xuXG4gICAgY29uc3QgdGFza0J0blAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0YXNrQnRuUC50ZXh0Q29udGVudCA9IGBOZXcgJHt0YXJnZXRPYmplY3QubmFtZX0gVGFza2A7XG5cbiAgICBhZGRUYXNrQnRuLmFwcGVuZCh0YXNrQnRuUCk7XG5cbiAgICBhZGRUYXNrQnRuRGl2LmFwcGVuZChhZGRUYXNrQnRuKTtcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZChhZGRUYXNrQnRuRGl2KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWxsVGFza3MoKSB7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LW1haW4tY29udGFpbmVyXCIpO1xuICAgIHJpZ2h0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staGVhZGVyXCIpO1xuICAgIHRhc2tIZWFkZXIudGV4dENvbnRlbnQgPSBgQUxMIFRBU0tTYDtcblxuICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZCh0YXNrSGVhZGVyKTtcblxuICAgIHByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3QudGFza0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgcHJvamVjdC50YXNrQXJyYXkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAvLyB0YXNrIGRpdlxuICAgICAgICAgICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpdlwiKTtcblxuICAgICAgICAgICAgICAgIC8vIHRhc2sgZGl2IGl0ZW1zXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidGl0bGUtZGl2XCIpO1xuICAgICAgICAgICAgICAgIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZS1kaXZcIik7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWRpdlwiKTtcbiAgICAgICAgICAgICAgICBwcmlvcml0eURpdi50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZCh0aXRsZURpdiwgZHVlRGF0ZURpdiwgcHJpb3JpdHlEaXYpO1xuXG4gICAgICAgICAgICAgICAgY29tcGxldGVkRGl2LmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpdiA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkLXRhc2tcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0Rpdik7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yaWdodC1tYWluLWNvbnRhaW5lclwiKTtcbiAgICByaWdodENvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0YXNrSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcbiAgICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gYFRPREFZJ1MgVEFTS1NgO1xuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kKHRhc2tIZWFkZXIpO1xuXG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWREYXRlID0gcGFyc2VJU08odGFzay5kdWVEYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1RvZGF5KHBhcnNlZERhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRhc2sgZGl2XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGFzayBkaXYgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlLWRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1kaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZCh0aXRsZURpdiwgZHVlRGF0ZURpdiwgcHJpb3JpdHlEaXYpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZERpdi5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2ID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkLXRhc2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0Rpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoaXNXZWVrVGFza3MoKSB7XG4gICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LW1haW4tY29udGFpbmVyXCIpO1xuICAgIHJpZ2h0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRhc2tIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staGVhZGVyXCIpO1xuICAgIHRhc2tIZWFkZXIudGV4dENvbnRlbnQgPSBgVEhJUyBXRUVLJ1MgVEFTS1NgO1xuXG4gICAgcmlnaHRDb250YWluZXIuYXBwZW5kKHRhc2tIZWFkZXIpO1xuXG4gICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBpZiAocHJvamVjdC50YXNrQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWREYXRlID0gcGFyc2VJU08odGFzay5kdWVEYXRlKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1RoaXNXZWVrKHBhcnNlZERhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRhc2sgZGl2XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXZcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGFzayBkaXYgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRpdGxlLWRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS1kaXZcIik7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdGFzay5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgICAgICB0YXNrRGl2LmFwcGVuZCh0aXRsZURpdiwgZHVlRGF0ZURpdiwgcHJpb3JpdHlEaXYpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZERpdi5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGl2ID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkLXRhc2tcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICByaWdodENvbnRhaW5lci5hcHBlbmQodGFza0Rpdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0RGl2LCB0YXJnZXRPYmplY3QsIHJldmVhbFRhcmdldE9iamVjdCwgY3JlYXRlUHJvamVjdFRhc2tzLCBjcmVhdGVBbGxUYXNrcywgY3JlYXRlVG9kYXlUYXNrcywgY3JlYXRlVGhpc1dlZWtUYXNrcyB9O1xuIiwiXG5mdW5jdGlvbiByZXZlYWxQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIGZvcm1JbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gcmV2ZWFsVGFza0Zvcm0oKSB7XG4gICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZm9ybS1jb250YWluZXJcIik7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gaGlkZVRhc2tGb3JtKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtXCIpLnJlc2V0KCk7XG5cbiAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1mb3JtLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7IHJldmVhbFByb2plY3RGb3JtLCBoaWRlUHJvamVjdEZvcm0sIHJldmVhbFRhc2tGb3JtLCBoaWRlVGFza0Zvcm0gfTsiLCJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RGl2IH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBoaWRlUHJvamVjdEZvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5cbi8vIFBST0pFQ1QgQ09OU1RSVUNUT1JcbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICB0YXNrQXJyYXkgPSBbXTtcblxuICAgIG5ld1Rhc2sgPSAodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHRoaXMudGFza0FycmF5LnB1c2gobmV3IFRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSk7XG4gICAgfVxuXG59XG5cbi8vIFBST0pFQ1RTIEFSUkFZXG5jb25zdCBwcm9qZWN0c0FycmF5ID0gW107XG5cbi8vIEZVTkNUSU9OIFRIQVQgQ1JFQVRFUyBBIFBST0pFQ1RcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcblxuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAgIFxuICAgIGNyZWF0ZVByb2plY3REaXYoKTtcbiAgICBoaWRlUHJvamVjdEZvcm0oKTtcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBwcm9qZWN0c0FycmF5IH07IiwiaW1wb3J0IHsgdGFyZ2V0T2JqZWN0IH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0VGFza3MgfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGhpZGVUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm0uanNcIjtcblxuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSB0YXNrXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIikudmFsdWU7XG5cbiAgICB0YXJnZXRPYmplY3QubmV3VGFzayhuYW1lLCBkYXRlLCBwcmlvcml0eSk7XG5cbiAgICBjcmVhdGVQcm9qZWN0VGFza3MoKTtcbiAgICBoaWRlVGFza0Zvcm0oKTtcbn1cblxuXG5cbmV4cG9ydCB7IFRhc2ssIGNyZWF0ZVRhc2t9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi9hc3NldHMvbG9nby5zdmdcIjtcbmltcG9ydCBob21lRGl2SWNvbiBmcm9tIFwiLi9hc3NldHMvaG9tZS5zdmdcIjtcbmltcG9ydCBkYXRlRGl2SWNvbiBmcm9tIFwiLi9hc3NldHMvZGF5LnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcIi4vYXNzZXRzL2FkZC5zdmdcIjtcbmltcG9ydCBleWVJY29uIGZyb20gXCIuL2Fzc2V0cy9leWUuc3ZnXCI7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tIFwiLi9hc3NldHMvZ2l0aHViLnN2Z1wiXG5pbXBvcnQgdHdpdHRlckljb24gZnJvbSBcIi4vYXNzZXRzL3R3aXR0ZXIuc3ZnXCI7XG5cbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyByZXZlYWxQcm9qZWN0Rm9ybSwgaGlkZVByb2plY3RGb3JtLCBoaWRlVGFza0Zvcm0gfSBmcm9tIFwiLi9mb3JtLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlQWxsVGFza3MsIGNyZWF0ZVRvZGF5VGFza3MsIGNyZWF0ZVRoaXNXZWVrVGFza3MgfSBmcm9tIFwiLi9kb20uanNcIjtcblxuXG4vLyBOQVYgU0VDVElPTlxuY29uc3QgbG9nb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ28taWNvblwiKTtcbmxvZ29JY29uLnNyYyA9IGxvZ287XG5cbi8vIExFRlQgU0lERS1CQVIgKEhPTUUgU0VDVElPTilcbmNvbnN0IGhvbWVJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtZGl2LWljb25cIik7XG5ob21lSW1nLnNyYyA9IGhvbWVEaXZJY29uO1xuXG5jb25zdCB0b2RheUltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktZGl2LWljb25cIik7XG50b2RheUltZy5zcmMgPSBkYXRlRGl2SWNvbjtcblxuY29uc3QgdGhpc1dlZWtJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlZWstZGl2LWljb25cIik7XG50aGlzV2Vla0ltZy5zcmMgPSBkYXRlRGl2SWNvbjtcblxuY29uc3QgcHJvamVjdFBsdXNJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcGx1cy1pY29uXCIpO1xucHJvamVjdFBsdXNJbWcuc3JjID0gYWRkSWNvbjtcblxuY29uc3QgaG9tZUV5ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1leWVcIik7XG5ob21lRXllLnNyYyA9IGV5ZUljb247XG5ob21lRXllLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVBbGxUYXNrcyk7XG5cbmNvbnN0IHRvZGF5RXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1leWVcIik7XG50b2RheUV5ZS5zcmMgPSBleWVJY29uO1xudG9kYXlFeWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRvZGF5VGFza3MpO1xuXG5jb25zdCB3ZWVrRXllID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWVrLWV5ZVwiKTtcbndlZWtFeWUuc3JjID0gZXllSWNvbjtcbndlZWtFeWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVRoaXNXZWVrVGFza3MpO1xuXG5cbi8vIFJFVkVBTCBQUk9KRUNUIEZPUk1cbmNvbnN0IHJldmVhbEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYnRuXCIpO1xucmV2ZWFsRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmV2ZWFsUHJvamVjdEZvcm0pO1xuXG4vLyBISURFIFBST0pFQ1QgRk9STSBCVE5cbmNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1jYW5jZWxcIik7XG5wcm9qZWN0Q2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlUHJvamVjdEZvcm0pO1xuXG5cbi8vIENSRUFURSBORVcgUFJPSkVDVFxuY29uc3QgcHJvamVjdE5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1idG5cIik7XG5wcm9qZWN0TmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUHJvamVjdCk7XG5cbi8vIENSRUFURSBORVcgVEFTS1xuY29uc3QgdGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1idG5cIik7XG50YXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVUYXNrKTtcblxuLy8gSElERSBUQVNLIEZPUk0gQlROXG5jb25zdCB0YXNrQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRlLXRhc2stZm9ybVwiKTtcbnRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVUYXNrRm9ybSk7XG5cbi8vIEZPT1RFUlxuY29uc3QgZ2l0aHViSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb2NpYWwtaWNvbi0xXCIpO1xuZ2l0aHViSW1nLnNyYyA9IGdpdGh1Ykljb247XG5cbmNvbnN0IHR3aXR0ZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvY2lhbC1pY29uLTJcIik7XG50d2l0dGVySW1nLnNyYyA9IHR3aXR0ZXJJY29uO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=