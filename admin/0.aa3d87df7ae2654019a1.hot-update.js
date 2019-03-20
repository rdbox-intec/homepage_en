webpackHotUpdate(0,{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(170);
(function () {
  var enterModule = __webpack_require__(7).enterModule;

  enterModule && enterModule(module);
})();





var NavBar = function NavBar(_ref) {
  var toggleNavbar = _ref.toggleNavbar,
      isActive = _ref.isActive;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["StaticQuery"], {
    query: "1346230460",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar is-fixed-top",
        "aria-label": "main navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "icons/icon-192x192.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\xA0\xA0\xA0RDBOX")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button navbar-burger " + (isActive ? 'is-active' : ''),
        "data-target": "navMenu",
        onClick: toggleNavbar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-menu " + (isActive ? 'is-active' : ''),
        id: "navMenu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        searchIndex: data.siteSearchIndex.index
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/about"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/blog"
      }, "Blog"))));
    }
  });
};

var _default = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(7).default;

  var leaveModule = __webpack_require__(7).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NavBar, "NavBar", "/Users/fukuta/workspace/GitHub/fukuta-tatsuya-intec/homepage_en/src/components/NavBar/index.js");
  reactHotLoader.register(_default, "default", "/Users/fukuta/workspace/GitHub/fukuta-tatsuya-intec/homepage_en/src/components/NavBar/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ })

})
//# sourceMappingURL=0.aa3d87df7ae2654019a1.hot-update.js.map