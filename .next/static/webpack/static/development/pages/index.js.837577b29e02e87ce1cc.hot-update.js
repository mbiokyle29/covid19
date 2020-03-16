webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var igv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! igv */ "./node_modules/igv/dist/igv.js");
/* harmony import */ var igv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(igv__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/shanemcdermed/dev/covid19/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function index() {
  var ref = useRef(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var options = {
      reference: {
        id: "NC_045512.2",
        name: "SARS-CoV-2",
        fastaURL: "./ref/NC_045512.2.fa",
        indexURL: "./ref/NC_045512.2.fa.fai"
      }
    };
    igv__WEBPACK_IMPORTED_MODULE_1___default.a.createBrowser(ref.current, options).then(function (browser) {
      console.log("Created IGV browser");
    });
  }, [ref.current]);
  return __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "COVID19 - IGV"), __jsx("div", {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.837577b29e02e87ce1cc.hot-update.js.map