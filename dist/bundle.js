/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
function createProject(name) {
    let newProject = new Project(name);
    projectsArray.push(newProject);
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");




// dummy project 1
(0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)("school");

_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0].newTask("maths", "learn algebra", "tomorrow", "medium", false);

console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0]);

_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0].newTask("cre", "read bible", "friday", "low", false);

console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0].taskArray);

console.log("-----------------------------------");

// dummy project 2
(0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)("work");

_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1].newTask("website", "finish building website", "next week", "high", false);

console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1]);

_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1].newTask("footer", "implement footer on website", "2 weeks", "medium", false);

_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1].newTask("meeting", "meet with dev lead", "today", "high", false);

console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1].taskArray);

console.log("------------------------------------------------");

// setting done task on projects

_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0].taskArray[0].checkList = true;
console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0].taskArray[0]);

(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.taskDone)(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[0]);

_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1].taskArray[2].checkList = true;
console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1].taskArray[2]);

(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.taskDone)(_project_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[1]);







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQWdDLDBDQUFJO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsY0FBYztBQUMvRDtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTDREO0FBQ3ZCOztBQUVyQztBQUNBLDBEQUFhOztBQUViLHNEQUFhOztBQUViLFlBQVksc0RBQWE7O0FBRXpCLHNEQUFhOztBQUViLFlBQVksc0RBQWE7O0FBRXpCOztBQUVBO0FBQ0EsMERBQWE7O0FBRWIsc0RBQWE7O0FBRWIsWUFBWSxzREFBYTs7QUFFekIsc0RBQWE7O0FBRWIsc0RBQWE7O0FBRWIsWUFBWSxzREFBYTs7QUFFekI7O0FBRUE7O0FBRUEsc0RBQWE7QUFDYixZQUFZLHNEQUFhOztBQUV6QixrREFBUSxDQUFDLHNEQUFhOztBQUV0QixzREFBYTtBQUNiLFlBQVksc0RBQWE7O0FBRXpCLGtEQUFRLENBQUMsc0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuLy8gUFJPSkVDVCBDT05TVFJVQ1RPUlxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHRhc2tBcnJheSA9IFtdO1xuXG4gICAgbmV3VGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpID0+IHtcbiAgICAgICAgdGhpcy50YXNrQXJyYXkucHVzaChuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja0xpc3QpKTtcbiAgICB9XG5cbn1cblxuLy8gUFJPSkVDVFMgQVJSQVlcbmNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuLy8gRlVOQ1RJT04gVEhBVCBDUkVBVEVTIEEgUFJPSkVDVFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG59XG5cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNBcnJheSB9OyIsIlxuY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tMaXN0KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY2hlY2tMaXN0ID0gY2hlY2tMaXN0O1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdGhhdCBjaGVja3Mgd2hldGhlciB0YXNrIGlzIGRvbmVcbmZ1bmN0aW9uIHRhc2tEb25lKHByb2plY3QpIHtcbiAgICBwcm9qZWN0LnRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5jaGVja0xpc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2sudGl0bGUgKyBgIHRhc2sgaW4gJHtwcm9qZWN0Lm5hbWV9IHByb2plY3QgaGFzIGJlZW4gY29tcGxldGVkYCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5leHBvcnQgeyBUYXNrLCB0YXNrRG9uZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyB0YXNrRG9uZSB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuLy8gZHVtbXkgcHJvamVjdCAxXG5jcmVhdGVQcm9qZWN0KFwic2Nob29sXCIpO1xuXG5wcm9qZWN0c0FycmF5WzBdLm5ld1Rhc2soXCJtYXRoc1wiLCBcImxlYXJuIGFsZ2VicmFcIiwgXCJ0b21vcnJvd1wiLCBcIm1lZGl1bVwiLCBmYWxzZSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RzQXJyYXlbMF0pO1xuXG5wcm9qZWN0c0FycmF5WzBdLm5ld1Rhc2soXCJjcmVcIiwgXCJyZWFkIGJpYmxlXCIsIFwiZnJpZGF5XCIsIFwibG93XCIsIGZhbHNlKTtcblxuY29uc29sZS5sb2cocHJvamVjdHNBcnJheVswXS50YXNrQXJyYXkpO1xuXG5jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuXG4vLyBkdW1teSBwcm9qZWN0IDJcbmNyZWF0ZVByb2plY3QoXCJ3b3JrXCIpO1xuXG5wcm9qZWN0c0FycmF5WzFdLm5ld1Rhc2soXCJ3ZWJzaXRlXCIsIFwiZmluaXNoIGJ1aWxkaW5nIHdlYnNpdGVcIiwgXCJuZXh0IHdlZWtcIiwgXCJoaWdoXCIsIGZhbHNlKTtcblxuY29uc29sZS5sb2cocHJvamVjdHNBcnJheVsxXSk7XG5cbnByb2plY3RzQXJyYXlbMV0ubmV3VGFzayhcImZvb3RlclwiLCBcImltcGxlbWVudCBmb290ZXIgb24gd2Vic2l0ZVwiLCBcIjIgd2Vla3NcIiwgXCJtZWRpdW1cIiwgZmFsc2UpO1xuXG5wcm9qZWN0c0FycmF5WzFdLm5ld1Rhc2soXCJtZWV0aW5nXCIsIFwibWVldCB3aXRoIGRldiBsZWFkXCIsIFwidG9kYXlcIiwgXCJoaWdoXCIsIGZhbHNlKTtcblxuY29uc29sZS5sb2cocHJvamVjdHNBcnJheVsxXS50YXNrQXJyYXkpO1xuXG5jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcblxuLy8gc2V0dGluZyBkb25lIHRhc2sgb24gcHJvamVjdHNcblxucHJvamVjdHNBcnJheVswXS50YXNrQXJyYXlbMF0uY2hlY2tMaXN0ID0gdHJ1ZTtcbmNvbnNvbGUubG9nKHByb2plY3RzQXJyYXlbMF0udGFza0FycmF5WzBdKTtcblxudGFza0RvbmUocHJvamVjdHNBcnJheVswXSk7XG5cbnByb2plY3RzQXJyYXlbMV0udGFza0FycmF5WzJdLmNoZWNrTGlzdCA9IHRydWU7XG5jb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5WzFdLnRhc2tBcnJheVsyXSk7XG5cbnRhc2tEb25lKHByb2plY3RzQXJyYXlbMV0pO1xuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9