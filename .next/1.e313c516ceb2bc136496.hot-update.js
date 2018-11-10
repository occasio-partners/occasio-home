webpackHotUpdate(1,{

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styledLink_js__ = __webpack_require__("./components/styledLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_pure_lifecycle__ = __webpack_require__("./node_modules/react-pure-lifecycle/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_pure_lifecycle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_pure_lifecycle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_twitter_widgets__ = __webpack_require__("./node_modules/react-twitter-widgets/dist/index.js");
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

/***/ })

})
//# sourceMappingURL=1.e313c516ceb2bc136496.hot-update.js.map