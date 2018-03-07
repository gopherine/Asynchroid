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

/***/ "./components/Navbar/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar_scss__ = __webpack_require__("./components/Navbar/Navbar.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Navbar_scss__);
var _jsxFileName = '/home/atharva/ReactSpeech/components/Navbar/Navbar.js';



var Navbar = function Navbar(props) {
  var navWrapperClass = 'navbar navbar-expand-lg navbar-dark bg-dark ' + __WEBPACK_IMPORTED_MODULE_1__Navbar_scss___default.a.navbar;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'nav',
    { className: navWrapperClass, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'a',
      { className: 'navbar-brand', href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      'Navbar'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'button',
      { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'navbar-toggler-icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'collapse navbar-collapse', id: 'navbarSupportedContent', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        { className: 'navbar-nav mr-auto', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'nav-item active', __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'nav-link', href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            'Home ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: 'sr-only', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                }
              },
              '(current)'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'nav-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'nav-link', href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            'Link'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'nav-item dropdown', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'nav-link dropdown-toggle', href: '#', id: 'navbarDropdown', role: 'button', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            'Dropdown'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'dropdown-menu', 'aria-labelledby': 'navbarDropdown', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'dropdown-item', href: '#', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 26
                }
              },
              'Action'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'dropdown-item', href: '#', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                }
              },
              'Another action'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'dropdown-divider', __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { className: 'dropdown-item', href: '#', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              'Something else here'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'nav-item', __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: 'nav-link disabled', href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            'Disabled'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { className: 'form-inline my-2 my-lg-0', __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { className: 'form-control mr-sm-2', type: 'search', placeholder: 'Search', 'aria-label': 'Search', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { className: 'btn btn-outline-success my-2 my-sm-0', type: 'submit', __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          },
          'Search'
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/Navbar/Navbar.scss":
/***/ (function(module, exports) {

module.exports = {
	"navbar": "_2fWW2AxMbs71iqJlme-Fc6"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Navbar_Navbar__ = __webpack_require__("./components/Navbar/Navbar.js");
var _jsxFileName = '/home/atharva/ReactSpeech/pages/index.js';




var indexPage = function indexPage() {
   return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
         __source: {
            fileName: _jsxFileName,
            lineNumber: 5
         }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
         'div',
         {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 6
            }
         },
         __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Navbar_Navbar__["a" /* default */], {
            __source: {
               fileName: _jsxFileName,
               lineNumber: 7
            }
         })
      )
   );
};
/* harmony default export */ __webpack_exports__["default"] = (indexPage);

/***/ }),

/***/ "./styles/style.scss":
/***/ (function(module, exports) {

module.exports = {
	"error": "_9SDG13c69iGDhOm1O6wJl"
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