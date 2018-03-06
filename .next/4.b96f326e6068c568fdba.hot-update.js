webpackHotUpdate(4,{

/***/ "./components/Navbars/MainNav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__ = __webpack_require__("./node_modules/material-ui/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar__ = __webpack_require__("./node_modules/material-ui/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__ = __webpack_require__("./node_modules/material-ui/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__ = __webpack_require__("./node_modules/material-ui/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu__ = __webpack_require__("./node_modules/material-ui-icons/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_AccountCircle__ = __webpack_require__("./node_modules/material-ui-icons/AccountCircle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons_AccountCircle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_AccountCircle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Switch__ = __webpack_require__("./node_modules/material-ui/Switch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_Switch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_Switch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Form__ = __webpack_require__("./node_modules/material-ui/Form/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__ = __webpack_require__("./node_modules/material-ui/Menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__);
var _jsxFileName = '/home/atharva/ReactSpeech/components/Navbars/MainNav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var MenuAppBar = function (_React$Component) {
  _inherits(MenuAppBar, _React$Component);

  function MenuAppBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuAppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuAppBar.__proto__ || Object.getPrototypeOf(MenuAppBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      auth: true,
      anchorEl: null
    }, _this.handleChange = function (event, checked) {
      _this.setState({ auth: checked });
    }, _this.handleMenu = function (event) {
      _this.setState({ anchorEl: event.currentTarget });
    }, _this.handleClose = function () {
      _this.setState({ anchorEl: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuAppBar, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          auth = _state.auth,
          anchorEl = _state.anchorEl;

      var open = Boolean(anchorEl);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_material_ui_Form__["FormGroup"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_material_ui_Form__["FormControlLabel"], {
            control: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_material_ui_Switch___default.a, { checked: auth, onChange: this.handleChange, 'aria-label': 'LoginSwitch', __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            }),
            label: auth ? 'Logout' : 'Login',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_material_ui_AppBar___default.a,
          { position: 'static', __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_material_ui_Toolbar___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default.a,
              { color: 'inherit', 'aria-label': 'Menu', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Menu___default.a, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_material_ui_Typography___default.a,
              { variant: 'title', color: 'inherit', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              },
              'Title'
            ),
            auth && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_material_ui_IconButton___default.a,
                {
                  'aria-owns': open ? 'menu-appbar' : null,
                  'aria-haspopup': 'true',
                  onClick: this.handleMenu,
                  color: 'inherit',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons_AccountCircle___default.a, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu___default.a,
                {
                  id: 'menu-appbar',
                  anchorEl: anchorEl,
                  anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                  },
                  open: open,
                  onClose: this.handleClose,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__["MenuItem"],
                  { onClick: this.handleClose, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  'Profile'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_material_ui_Menu__["MenuItem"],
                  { onClick: this.handleClose, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 78
                    }
                  },
                  'My account'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return MenuAppBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = MenuAppBar;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MenuAppBar, 'MenuAppBar', '/home/atharva/ReactSpeech/components/Navbars/MainNav.js');
  reactHotLoader.register(_default, 'default', '/home/atharva/ReactSpeech/components/Navbars/MainNav.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.b96f326e6068c568fdba.hot-update.js.map