/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/slider.js\");\n\n\nlet slider = new _slider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nslider.addListenerRight();\nslider.addListenerLeft();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Slider {\n    constructor() {\n        this.rightPhoto = [['url(./photos/porschetyl.jpg)', false], ['url(./photos/mustangtyl.jpg)', false], ['url(./photos/lambotyl.jpg)', false], ['url(./photos/merctyl.jpg)', false], ['url(./photos/ferrarityl.jpg)', false]];\n        this.leftPhoto = ['url(./photos/porscheprzod.jpg)', 'url(./photos/mustangprzod.jpg)', 'url(./photos/lamboprzod.jpg)', 'url(./photos/mercprzod.jpg)', 'url(./photos/ferrariprzod.jpg)'];\n    }\n\n    addListenerRight() {\n        const a = document.querySelectorAll('.fas.fa-angle-double-right');\n\n        a.forEach((el, index) => {\n            el.addEventListener(\"click\", e => {\n                if (this.rightPhoto[index][1] === false) {\n                    e.target.parentElement.style.animation = \"changePhoto 0.2s\";\n                    setTimeout(() => {\n                        e.target.parentElement.style.backgroundImage = this.rightPhoto[index][0];\n                        e.target.parentElement.style.animation = \"none\";\n                        this.rightPhoto[index][1] = true;\n                        e.target.style.opacity = \"0.5\";\n                        e.target.style.cursor = \"default\";\n                        e.target.previousElementSibling.style.opacity = \"1\";\n                        e.target.previousElementSibling.style.cursor = \"pointer\";\n                    }, 100);\n                }\n            });\n        });\n    }\n\n    addListenerLeft() {\n        const a = document.querySelectorAll('.fas.fa-angle-double-left');\n\n        a.forEach((el, index) => {\n            el.addEventListener(\"click\", e => {\n                if (this.rightPhoto[index][1]) {\n                    e.target.parentElement.style.animation = \"changePhoto 0.2s\";\n                    setTimeout(() => {\n                        e.target.parentElement.style.backgroundImage = this.leftPhoto[index];\n                        e.target.parentElement.style.animation = \"none\";\n                        this.rightPhoto[index][1] = false;\n                        e.target.style.opacity = \"0.5\";\n                        e.target.style.cursor = \"default\";\n                        e.target.nextElementSibling.style.opacity = \"1\";\n                        e.target.nextElementSibling.style.cursor = \"pointer\";\n                    }, 100);\n                }\n            });\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n//# sourceURL=webpack:///./src/slider.js?");

/***/ })

/******/ });