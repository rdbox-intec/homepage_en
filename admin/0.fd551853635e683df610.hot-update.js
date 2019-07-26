webpackHotUpdate(0,{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/fukuta/workspace/GitHub/fukuta-tatsuya-intec/homepage_en/src/components/Offerings/index.js";

(function () {
  var enterModule = __webpack_require__(7).enterModule;

  enterModule && enterModule(module);
})();




var Offerings = function Offerings(_ref) {
  var gridItems = _ref.gridItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, gridItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.image,
      className: "column is-6",
      style: {
        borderRadius: '5px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "",
      src: item.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item.text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/rdbox-intec/rdbox",
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "for more infomation.")));
  }));
};

Offerings.propTypes = {
  gridItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
var _default = Offerings;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(7).default;

  var leaveModule = __webpack_require__(7).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Offerings, "Offerings", "/Users/fukuta/workspace/GitHub/fukuta-tatsuya-intec/homepage_en/src/components/Offerings/index.js");
  reactHotLoader.register(_default, "default", "/Users/fukuta/workspace/GitHub/fukuta-tatsuya-intec/homepage_en/src/components/Offerings/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.fd551853635e683df610.hot-update.js.map