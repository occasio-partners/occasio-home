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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/fadingComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/marcoellwanger/nextjs/occasio-partners/components/fadingComponent.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var FadingComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(FadingComponent, _Component);

  function FadingComponent() {
    var _this;

    _classCallCheck(this, FadingComponent);

    _this = _possibleConstructorReturn(this, (FadingComponent.__proto__ || Object.getPrototypeOf(FadingComponent)).call(this));
    _this.state = {
      mounted: false
    };
    return _this;
  }

  _createClass(FadingComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // trick to make the animation work is to call the set state next run
      setTimeout(function () {
        _this2.setState({
          mounted: true
        });
      }, 1);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-3819936074" + " " + ('animated ' + (this.state.mounted ? 'mounted' : '') || "")
      }, this.props.children, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3819936074",
        css: ".animated.jsx-3819936074{opacity:0;visibility:hidden;-webkit-transition:all 0.8s ease-in;transition:all 0.8s ease-in;}.animated.mounted.jsx-3819936074{opacity:1;visibility:visible;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmFkaW5nQ29tcG9uZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCb0IsQUFHdUIsQUFLQSxVQUpRLEFBS0Msa0JBSlMsQ0FLOUIsK0RBSkEiLCJmaWxlIjoiY29tcG9uZW50cy9mYWRpbmdDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hcmNvZWxsd2FuZ2VyL25leHRqcy9vY2Nhc2lvLXBhcnRuZXJzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWRpbmdDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vdW50ZWQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gdHJpY2sgdG8gbWFrZSB0aGUgYW5pbWF0aW9uIHdvcmsgaXMgdG8gY2FsbCB0aGUgc2V0IHN0YXRlIG5leHQgcnVuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHttb3VudGVkOiB0cnVlfSlcbiAgICB9LCAxKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2FuaW1hdGVkICcgKyAodGhpcy5zdGF0ZS5tb3VudGVkID8gJ21vdW50ZWQnIDogJycpfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYW5pbWF0ZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbmltYXRlZC5tb3VudGVkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/fadingComponent.js */"
      }));
    }
  }]);

  return FadingComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/forms/Form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_micro_form__ = __webpack_require__("micro-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_micro_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_micro_form__);
var _jsxFileName = "/Users/marcoellwanger/nextjs/occasio-partners/components/forms/Form.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Form =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
    _this.Component = Object(__WEBPACK_IMPORTED_MODULE_1_micro_form__["createForm"])(props.children);
    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var Component = this.Component,
          props = this.props;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }));
    }
  }]);

  return Form;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ }),

/***/ "./components/forms/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_micro_form__ = __webpack_require__("micro-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_micro_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_micro_form__);
var _jsxFileName = "/Users/marcoellwanger/nextjs/occasio-partners/components/forms/Input.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }




var Input = Object(__WEBPACK_IMPORTED_MODULE_2_micro_form__["createFactory"])(function (_ref) {
  var name = _ref.name,
      value = _ref.value,
      valid = _ref.valid,
      validateField = _ref.validateField,
      updateField = _ref.updateField,
      props = _objectWithoutProperties(_ref, ["name", "value", "valid", "validateField", "updateField"]);

  var required = 'required' in props;
  var attrs = {
    type: props.type || 'text',
    name: name,
    value: value,
    onChange: function onChange(e) {
      return updateField(e.target.value);
    }
  };

  if (props.placeholder) {
    attrs.placeholder = props.placeholder;
  }

  if (props.minLength) {
    attrs.minLength = props.minLength;
  }

  if (props.pattern) {
    attrs.pattern = props.pattern;
  }

  if (required) {
    attrs.onBlur = function (e) {
      validateField();
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()('input-wrapper', props.className, {
      'has-error': !valid,
      'has-value': !!value,
      'no-label': !props.label
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", _extends({}, attrs, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), props.label && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, props.label, required ? '*' : ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Input, _extends({
    validate: function validate(val) {
      return !props.required || val !== '';
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }));
});

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styledLink_js__ = __webpack_require__("./components/styledLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_pure_lifecycle__ = __webpack_require__("react-pure-lifecycle");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_pure_lifecycle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_pure_lifecycle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_twitter_widgets__ = __webpack_require__("react-twitter-widgets");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_twitter_widgets___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_twitter_widgets__);
var _jsxFileName = "/Users/marcoellwanger/nextjs/occasio-partners/components/layout.js";






var methods = {
  componentDidMount: function componentDidMount(props) {
    console.log('I mounted! Here are my props: ', props);
  }
}; // background-image: url(/static/sf.jpg);
// background-size: cover;
// font: 11px menlo;
// color: #fff;

var render = function render(_ref) {
  var children = _ref.children,
      path = _ref.path,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "\n      body {\n        margin: 0;\n        font: 11px menlo;\n        color: #fff;\n      }\n      .box3-container {\n        position: absolute;\n        width: 50%;\n        height: 20%;\n        top: 30%;\n        left: 30%;\n        margin: -100px 0px 0px -100px;\n      }\n      .box3-bg {\n        /* Absolutely position it, but stretch it to all four corners, then put it just behind #search's z-index */\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n        z-index: 99;\n      \n        /* Pull the background 70px higher to the same place as #bg's */\n        background-position: center -70px;\n      \n        -webkit-filter: blur(10px);\n        filter: url('/media/blur.svg#blur');\n        filter: blur(10px);\n      }\n      .box3 {\n        /* Put this on top of the blurred layer */\n        position: relative;\n        z-index: 100;\n        padding: 20px;\n        background: rgb(34,34,34); /* for IE */\n        background: rgba(34,34,34,0.75);\n      }\n\n      .box {\n        background-color: #ffffff;\n        border: 1px solid solid rgba(176, 226, 255, 0.3);\n        opacity: 1;\n        filter: alpha(opacity=60); /* For IE8 and earlier */\n        position: absolute;\n        width: 50%;\n        height: 20%;\n        z-index: 15;\n        top: 50%;\n        left: 40%;\n        margin: -100px 0px 0px -100px;\n        font: 14px menlo;\n        color: #303030;\n        transition: opacity 0.5s;\n      }\n      .timeline {\n        background: white;\n        position:fixed;\n        top:10%;\n        left:0%\n      }\n     \n      $blue-3: hsl(211, 57%, 25%);\n      $blue-4: hsl(211, 39%, 44%);\n      $blue-5: hsl(211, 51%, 65%);\n      $blue-7: hsl(211, 90%, 93%);\n      $blue-rich: hsl(211, 65%, 48%);\n\n      dialog {\n        padding: 0;\n        border: 0;\n        border-radius: 0.6rem;\n        box-shadow: 0 0 1em black;\n      }\n      /* native backdrop */\n      dialog::backdrop {\n        background-color: rgba(0, 0, 0, 0.4);\n      }\n      /* polyfill backdrop */\n      dialog + .backdrop {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: rgba(0, 0, 0, 0.4);\n      }\n      dialog[open] {\n        animation: slide-up 0.4s ease-out;\n      }\n\n      /* The following styles are for older browsers when using\n        the polyfill. These aren\u2019t necessary for Chrome/Firefox. */\n      dialog {\n        display: none;\n        position: absolute;\n        margin: 0 auto; /* should center it, but not working in Safari */\n        max-width: 80vw;\n        background-color: white;\n      }\n      dialog[open] {\n        display: block;\n      }\n      /* prettying things up a bit */\n      .close {\n        position: absolute;\n        top: 0.2em;\n        right: 0.2em;\n        padding: 0.3em;\n        line-height: 0.6;\n        background-color: transparent;\n        border: 0;\n        font-size: 2em;\n      }\n      .modal-header,\n      .modal-body,\n      .modal-footer {\n        padding: 1em;\n      }\n\n      .modal-header {\n        margin: 0;\n        padding-bottom: 0.6em;\n        background-color: $blue-7;\n        border-top-left-radius: 0.6rem;\n        border-top-right-radius: 0.6rem;\n        border-bottom: 1px solid $blue-5;\n      }\n\n      .modal-footer {\n        border-top: 1px solid $blue-5;\n      }\n\n      :first-child {\n        margin-top: 0;\n      }\n\n      :last-child {\n        margin-bottom: 0;\n      }\n\n      button {\n        padding: 0.4em 1em 0.2em;\n        font-family: Glober, Helvetica, sans-serif;\n      }\n\n      @keyframes slide-up {\n        0% {\n          opacity: 0;\n          transform: translate(0, 15px);\n        }\n        \n        100% {\n          opacity: 1;\n          transform: translate(0, 0);\n        }\n      }\n      .logo {\n        width: 50%;\n        max-width: 100%;\n        max-height: 100%;\n        display: block;\n        float: center;\n        padding-left: 20px;\n      }\n      .logo2 {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        width: 50%;\n      }\n      .navbar {\n        overflow: hidden;\n        background: linear-gradient(#FFFFFF, #88ACE0);\n        position: fixed; /* Set the navbar to fixed position */\n        top: 10%; /* Position the navbar at the top of the page */\n        width: 100%; /* Full width */\n        height: 10%;\n      }\n      .navbar1 {\n        background: transparent;\n        position: fixed; /* Set the navbar to fixed position */\n        top: 0; /* Position the navbar at the top of the page */\n        width: 100%; /* Full width */\n        height: 10%;\n        padding: 1%;\n      }\n      .navbar2 {\n        background: transparent;\n        position: absolute; /* Set the navbar to fixed position */\n        top: calc(25px + 7.5vw);\n        width: 100%;\n        text-align: center;\n        border: 1px groove #ffffff1a;\n      }\n      .no-effect {\n        background-image: url(/static/sf.jpg);\n        background-size: cover;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n    "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    }
  }, title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "logo2",
    src: "/static/logo.png",
    path: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styledLink_js__["a" /* default */], {
    href: "/",
    name: "OUR FIRM",
    path: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styledLink_js__["a" /* default */], {
    href: "/about",
    name: "INVESTOR RELATIONS",
    path: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styledLink_js__["a" /* default */], {
    href: "/contact",
    name: "MANAGEMENT",
    path: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styledLink_js__["a" /* default */], {
    href: "/about",
    name: "CAREERS",
    path: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    }
  }))), children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_4_react_pure_lifecycle___default()(methods)(render));

/***/ }),

/***/ "./components/progressbutton.js":
/***/ (function(module, exports, __webpack_require__) {

var _jsxFileName = "/Users/marcoellwanger/nextjs/occasio-partners/components/progressbutton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("react");

var cx = __webpack_require__("classnames");

module.exports =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressButton, _React$Component);

  function ProgressButton(props) {
    var _this;

    _classCallCheck(this, ProgressButton);

    _this = _possibleConstructorReturn(this, (ProgressButton.__proto__ || Object.getPrototypeOf(ProgressButton)).call(this, props));
    _this.state = {
      buttonWidth: 'auto'
    };
    return _this;
  }

  _createClass(ProgressButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        buttonWidth: this.button.clientWidth + 5 + 'px'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var buttonWidth = this.state.buttonWidth;

      var _props = this.props,
          className = _props.className,
          inProgress = _props.inProgress,
          isDone = _props.isDone,
          inProgressText = _props.inProgressText,
          isDoneText = _props.isDoneText,
          children = _props.children,
          props = _objectWithoutProperties(_props, ["className", "inProgress", "isDone", "inProgressText", "isDoneText", "children"]);

      return React.createElement("button", _extends({}, props, {
        ref: function ref(c) {
          return _this2.button = c;
        },
        className: cx('progress-button', className),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), isDone ? React.createElement("div", {
        className: "f aic jcc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, isDoneText && React.createElement("span", {
        className: "mr05",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, isDoneText)) : inProgress ? React.createElement("div", {
        className: "f aic jcc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, inProgressText && React.createElement("span", {
        className: "mr05",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, inProgressText)) : children);
    }
  }]);

  return ProgressButton;
}(React.Component);

/***/ }),

/***/ "./components/styledLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
var _jsxFileName = "/Users/marcoellwanger/nextjs/occasio-partners/components/styledLink.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  display: inline-block;\n  color: #303030;\n  font: calc(5px + 1vw) menlo;\n  font-weight: bold;\n  text-align: center;\n  padding: 2% 4% 2% 4%;\n  text-decoration: none;\n  position: relative;\n  top: 50%;\n  transform: translate(0%,-50%);\n  background-color: ", ";\n  &:hover {\n    color: red; // <Thing> when hovered\n  }\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledLink = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a.attrs({
  background: function background(props) {
    return props.active ? 'white' : 'transparent';
  }
})(_templateObject, function (props) {
  return props.background;
});

var activeRoute = function activeRoute(href, path) {
  console.log("href=" + href + " path=" + path);
  console.log(href === path);
  return href === path;
};

var componentDidMount = function componentDidMount() {
  console.log("COMPONENTDIDMOUNT-SYTLEDLINK"); //this.setState({
  //loaded: true
  //})
};

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var href = _ref.href,
      name = _ref.name,
      path = _ref.path;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    prefetch: true,
    href: href,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledLink, {
    active: activeRoute(href, path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, name));
});

/***/ }),

/***/ "./pages/contact2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fadingComponent__ = __webpack_require__("./components/fadingComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_progressbutton__ = __webpack_require__("./components/progressbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_progressbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_progressbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_forms_Form__ = __webpack_require__("./components/forms/Form.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_forms_Input__ = __webpack_require__("./components/forms/Input.js");
var _jsxFileName = "/Users/marcoellwanger/nextjs/occasio-partners/pages/contact2.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



 // App Specific







var Contact2 =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact2, _Component);

  function Contact2(props) {
    var _this;

    _classCallCheck(this, Contact2);

    _this = _possibleConstructorReturn(this, (Contact2.__proto__ || Object.getPrototypeOf(Contact2)).call(this, props));
    _this.state = {
      submitting: false,
      submitted: false
    };
    return _this;
  }

  _createClass(Contact2, [{
    key: "submitForm",
    value: function submitForm(data) {
      var _this2 = this;

      fetch('/api/contact', {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (res) {
        res.status === 200 ? _this2.setState({
          submitted: true
        }) : '';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var props = this.props;
      var title = 'Contact Page';
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_layout__["a" /* default */], {
        path: props.path,
        title: "Contact2 us",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_fadingComponent__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "box3-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "box3-bg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "box3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_forms_Form__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, function (_ref) {
        var validateForm = _ref.validateForm,
            getPayload = _ref.getPayload;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
          className: "board-form",
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            validateForm() && _this3.submitForm(getPayload());
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, "Contact"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "f fw grid-row--s",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "mb1 pb05",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_forms_Input__["a" /* default */], {
          name: "name",
          label: "Name",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "mb1 pb05",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_forms_Input__["a" /* default */], {
          name: "email",
          label: "Email",
          required: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_progressbutton___default.a, {
          className: "button green",
          formNoValidate: true,
          inProgress: _this3.state.submitting,
          inProgressText: "Submitting",
          isDone: _this3.state.submitted,
          isDoneText: "Submitted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, "Submit Form"));
      })))));
    }
  }]);

  return Contact2;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact2);

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/contact2.js");


/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "micro-form":
/***/ (function(module, exports) {

module.exports = require("micro-form");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-pure-lifecycle":
/***/ (function(module, exports) {

module.exports = require("react-pure-lifecycle");

/***/ }),

/***/ "react-twitter-widgets":
/***/ (function(module, exports) {

module.exports = require("react-twitter-widgets");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=contact2.js.map