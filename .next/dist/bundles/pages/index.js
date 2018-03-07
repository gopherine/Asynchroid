module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/test.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_scss__ = __webpack_require__("./components/test.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__test_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "C:\\Projects\\React\\NextApp\\SpeechRecognition\\components\\test.js";



var test = function test(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "h2",
        { className: __WEBPACK_IMPORTED_MODULE_0__test_scss___default.a.newFont, __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        "Hello World"
    );
};

/* harmony default export */ __webpack_exports__["a"] = (test);

/***/ }),

/***/ "./components/test.scss":
/***/ (function(module, exports) {

module.exports = {
	"newFont": "ZUjhlz_9WVQv5no4eple1"
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_style_scss__ = __webpack_require__("./styles/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test__ = __webpack_require__("./components/test.js");
var _jsxFileName = 'C:\\Projects\\React\\NextApp\\SpeechRecognition\\pages\\index.js';




var classhere = __WEBPACK_IMPORTED_MODULE_1__styles_style_scss___default.a.example + ' ' + __WEBPACK_IMPORTED_MODULE_1__styles_style_scss___default.a.font;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classhere, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      'Hello World!'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_test__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    })
  );
});

/***/ }),

/***/ "./styles/style.scss":
/***/ (function(module, exports) {

module.exports = {
	"example": "_1FH3zoiFAWO9OxYHAbPKC-",
	"font": "_3L-GaJWAVHpxirIuAVvvGC"
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map