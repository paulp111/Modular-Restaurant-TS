/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ------ General ------ */
* {
  box-sizing: border-box;
  margin: 0;
  text-align: center;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 400;
  font-style: normal; }

.hidden {
  display: none; }

.ingredient_container {
  display: flex;
  justify-content: center;
  gap: 5px; }

.container_wrapper {
  display: flex;
  order: 2;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 500px;
  margin: 0 auto;
  background-color: aliceblue;
  margin-bottom: 25px; }

.primary__container {
  order: -1;
  display: flex;
  flex-direction: column;
  gap: 25px; }

.deleteOrder {
  position: absolute;
  right: 0;
  top: 0; }

.ingredient_container,
.base,
.sauce {
  margin-top: 10px; }

/* ------ Mobile ------ */
/* ------ Desktop ------ */
header {
  background-color: #556b2f;
  display: grid;
  grid-template-columns: 80px 80% 1fr;
  align-items: center;
  color: white;
  padding-top: 0.5em;
  padding-bottom: 0.5em; }

.logo {
  align-self: center;
  font-size: 50pt;
  width: 100%;
  height: 80px;
  grid-column: 1; }

.btnCartHead {
  grid-column: 3;
  background-color: #556b2f;
  color: white;
  font-size: 25pt;
  border-style: none; }

.btnCartHead:hover {
  cursor: pointer;
  transform: scale(1.5);
  transition: 0.3s ease; }

.heading {
  grid-column: 2;
  text-align: left; }

.menu {
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  min-height: 100vh; }
  .menu h2 {
    padding: 2em; }
  .menu li {
    list-style-type: none; }
    .menu li a {
      text-decoration: none;
      color: black; }

.displayItem {
  border-radius: 20px;
  background-color: #b6b3b3c8;
  color: #696666;
  margin-left: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  width: 75%;
  height: fit-content;
  font-size: smaller; }

.pizzaHeading,
.pastaHeading,
.saladHeading,
.drinkHeading {
  display: flex;
  margin-top: 1em;
  flex-direction: row;
  justify-content: center;
  padding-left: 20%;
  padding-right: 20%;
  background-color: darkgoldenrod;
  color: white; }

.ingredientsPizza,
.ingredientsPasta,
.ingredientsSalad {
  padding-top: 1em;
  padding-bottom: 2em;
  padding-left: 20%;
  padding-right: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr; }
  .ingredientsPizza .displayItem,
  .ingredientsPasta .displayItem,
  .ingredientsSalad .displayItem {
    grid-column: 2; }

.base {
  grid-column: 1; }

.IngredList {
  display: grid;
  grid-column: 2fr 1fr; }
  .IngredList ul {
    grid-column: 1; }
  .IngredList li {
    grid-column: 2;
    display: flex;
    justify-content: space-between;
    float: left; }

.btnPizza,
.btnPasta,
.btnSalad,
.btnDrink {
  border: none;
  font-size: larger;
  background-color: transparent;
  color: rgba(252, 252, 252, 0.517);
  padding: none;
  margin-top: -5px; }

.btnPizza:hover,
.btnPasta:hover,
.btnSalad:hover {
  color: white; }

.drinkDisplay {
  display: flex;
  justify-content: center; }
  .drinkDisplay p {
    margin: 1em; }
  .drinkDisplay button {
    margin: 1em;
    height: fit-content; }

footer {
  margin-top: auto;
  background-color: #89938e;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly; }
  footer li {
    list-style-type: none;
    display: inline-block; }
  footer a {
    text-decoration: none;
    color: black;
    padding: 1em; }
`, "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/scss/_header.scss","webpack://./src/scss/_menu.scss","webpack://./src/scss/_footer.scss"],"names":[],"mappings":"AAEA,0BAAA;AACA;EACE,sBAAsB;EACtB,SAAS;EACT,kBAAkB;EAElB,4CAA4C;EAC5C,gBAAgB;EAChB,kBAAkB,EAAA;;AAEpB;EACE,aAAa,EAAA;;AAEf;EACE,aAAa;EACb,uBAAuB;EACvB,QAAQ,EAAA;;AAEV;EACE,aAAa;EACb,QAAQ;EACR,kBAAkB;EAClB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,gBAAgB;EAChB,cAAc;EACd,2BAA2B;EAC3B,mBAAmB,EAAA;;AAErB;EACE,SAAS;EACT,aAAa;EACb,sBAAsB;EACtB,SAAS,EAAA;;AAEX;EACE,kBAAkB;EAClB,QAAQ;EACR,MAAM,EAAA;;AAER;;;EAGE,gBAAgB,EAAA;;AAQlB,yBAAA;AAEA,0BAAA;ACxDA;EACE,yBAAyB;EACzB,aAAa;EACb,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB,EAAA;;AAEvB;EACE,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,cAAc,EAAA;;AAGhB;EACE,cAAc;EACd,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,kBAAkB,EAAA;;AAEpB;EACE,eAAe;EACf,qBAAqB;EACrB,qBAAqB,EAAA;;AAEvB;EACE,cAAc;EACd,gBAAgB,EAAA;;AC/BlB;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,iBAAiB,EAAA;EAJnB;IAMI,YAAY,EAAA;EANhB;IASI,qBAAqB,EAAA;IATzB;MAWM,qBAAqB;MACrB,YAAY,EAAA;;AAQlB;EACE,mBAAmB;EACnB,2BAA2B;EAC3B,cAAc;EACd,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,mBAAmB;EACnB,kBAAkB,EAAA;;AAGpB;;;;EAIE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,+BAA+B;EAE/B,YAAY,EAAA;;AAEd;;;EAGE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;EACb,8BAA8B,EAAA;EARhC;;;IAUI,cAAc,EAAA;;AAGlB;EACE,cAAc,EAAA;;AAEhB;EACE,aAAa;EACb,oBAAoB,EAAA;EAFtB;IAII,cAAc,EAAA;EAJlB;IAOI,cAAc;IAEd,aAAa;IACb,8BAA8B;IAC9B,WAAW,EAAA;;AAIf;;;;EAIE,YAAY;EACZ,iBAAiB;EACjB,6BAA6B;EAC7B,iCAAiC;EACjC,aAAa;EACb,gBAAgB,EAAA;;AAElB;;;EAGE,YAAyB,EAAA;;AAG3B;EACE,aAAa;EACb,uBAAuB,EAAA;EAFzB;IAII,WAAW,EAAA;EAJf;IAOI,WAAW;IACX,mBAAmB,EAAA;;ACtGvB;EACE,gBAAgB;EAChB,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,6BAA6B,EAAA;EAN/B;IASI,qBAAqB;IACrB,qBAAqB,EAAA;EAVzB;IAaI,qBAAqB;IACrB,YAAY;IACZ,YAAY,EAAA","sourcesContent":["$primary-color: white;\n$bg: black;\n/* ------ General ------ */\n* {\n  box-sizing: border-box;\n  margin: 0;\n  text-align: center;\n\n  font-family: \"M PLUS Rounded 1c\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n.hidden {\n  display: none;\n}\n.ingredient_container {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n.container_wrapper {\n  display: flex;\n  order: 2;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  max-width: 500px;\n  margin: 0 auto;\n  background-color: aliceblue;\n  margin-bottom: 25px;\n}\n.primary__container {\n  order: -1;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n.deleteOrder {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.ingredient_container,\n.base,\n.sauce {\n  margin-top: 10px;\n}\n.pizza_content {\n  // display: flex;\n  // flex-direction: column;\n  // gap: 20px;\n}\n\n/* ------ Mobile ------ */\n\n/* ------ Desktop ------ */\n\n@import \"./scss/header\";\n@import \"./scss/menu\";\n@import \"./scss/cart\";\n@import \"./scss/footer\";\n","header {\n  background-color: #556b2f;\n  display: grid;\n  grid-template-columns: 80px 80% 1fr;\n  align-items: center;\n  color: white;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n}\n.logo {\n  align-self: center;\n  font-size: 50pt;\n  width: 100%;\n  height: 80px;\n  grid-column: 1;\n}\n\n.btnCartHead {\n  grid-column: 3;\n  background-color: #556b2f;\n  color: white;\n  font-size: 25pt;\n  border-style: none;\n}\n.btnCartHead:hover {\n  cursor: pointer;\n  transform: scale(1.5);\n  transition: 0.3s ease;\n}\n.heading {\n  grid-column: 2;\n  text-align: left;\n  //display: none;\n}\n// @media (min-width: 992px) {\n//   .heading {\n//     grid-column: 2;\n//     text-align: left;\n//   }\n// }\n",".menu {\n  background-color: #fafafa;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  h2 {\n    padding: 2em;\n  }\n  li {\n    list-style-type: none;\n    a {\n      text-decoration: none;\n      color: black;\n    }\n  }\n  // .button {\n  //   padding: 1em;\n  //   margin: 1em;\n  // }\n}\n.displayItem {\n  border-radius: 20px;\n  background-color: #b6b3b3c8;\n  color: #696666;\n  margin-left: 2em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  width: 75%;\n  height: fit-content;\n  font-size: smaller;\n}\n\n.pizzaHeading,\n.pastaHeading,\n.saladHeading,\n.drinkHeading {\n  display: flex;\n  margin-top: 1em;\n  flex-direction: row;\n  justify-content: center;\n  padding-left: 20%;\n  padding-right: 20%;\n  background-color: darkgoldenrod;\n\n  color: white;\n}\n.ingredientsPizza,\n.ingredientsPasta,\n.ingredientsSalad {\n  padding-top: 1em;\n  padding-bottom: 2em;\n  padding-left: 20%;\n  padding-right: 5%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  .displayItem {\n    grid-column: 2;\n  }\n}\n.base {\n  grid-column: 1;\n}\n.IngredList {\n  display: grid;\n  grid-column: 2fr 1fr;\n  ul {\n    grid-column: 1;\n  }\n  li {\n    grid-column: 2;\n\n    display: flex;\n    justify-content: space-between;\n    float: left;\n  }\n}\n\n.btnPizza,\n.btnPasta,\n.btnSalad,\n.btnDrink {\n  border: none;\n  font-size: larger;\n  background-color: transparent;\n  color: rgba(252, 252, 252, 0.517);\n  padding: none;\n  margin-top: -5px;\n}\n.btnPizza:hover,\n.btnPasta:hover,\n.btnSalad:hover {\n  color: rgb(255, 255, 255);\n}\n//todo change to grid\n.drinkDisplay {\n  display: flex;\n  justify-content: center;\n  p {\n    margin: 1em;\n  }\n  button {\n    margin: 1em;\n    height: fit-content;\n  }\n}\n","footer {\n  margin-top: auto;\n  background-color: #89938e;\n  padding: 1em;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  li {\n    list-style-type: none;\n    display: inline-block;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n    padding: 1em;\n  }\n}\n// @media (min-width: 992px) {\n//   footer{\n\n//   }\n// }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cart: () => (/* binding */ cart)
/* harmony export */ });
/* harmony import */ var _src_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles.scss */ "./src/styles.scss");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.ts");
/* harmony import */ var _modules_pizza1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pizza1 */ "./src/modules/pizza1.ts");
/* harmony import */ var _modules_cart1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cart1 */ "./src/modules/cart1.ts");
/* harmony import */ var _modules_pasta1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pasta1 */ "./src/modules/pasta1.ts");
/* harmony import */ var _modules_salad1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/salad1 */ "./src/modules/salad1.ts");
/* harmony import */ var _modules_drink1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/drink1 */ "./src/modules/drink1.ts");







var cart = new _modules_cart1__WEBPACK_IMPORTED_MODULE_3__.Cart();
function init() {
    var _a, _b;
    var pizza_add_to_cart = document.querySelector(".pizza_add_to_cart");
    var pasta_add_to_cart = document.querySelector(".pasta_add_to_cart");
    var salad_add_to_cart = document.querySelector(".salad_add_to_cart");
    (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
    console.log("header created");
    // createMenu();
    console.log("menu created");
    pizza_add_to_cart === null || pizza_add_to_cart === void 0 ? void 0 : pizza_add_to_cart.addEventListener("click", function () {
        console.log("clicked");
        var pizza = new _modules_pizza1__WEBPACK_IMPORTED_MODULE_2__.Pizza();
        cart.addToCart(pizza);
        pizza.renderUI();
    });
    pasta_add_to_cart === null || pasta_add_to_cart === void 0 ? void 0 : pasta_add_to_cart.addEventListener("click", function () {
        console.log("clicked");
        var pasta = new _modules_pasta1__WEBPACK_IMPORTED_MODULE_4__.Pasta();
        cart.addToCart(pasta);
        pasta.renderUI();
    });
    salad_add_to_cart === null || salad_add_to_cart === void 0 ? void 0 : salad_add_to_cart.addEventListener("click", function () {
        console.log("clicked");
        var salad = new _modules_salad1__WEBPACK_IMPORTED_MODULE_5__.Salad();
        cart.addToCart(salad);
        salad.renderUI();
    });
    var drinks = new _modules_drink1__WEBPACK_IMPORTED_MODULE_6__.Drink();
    cart.addToCart(drinks);
    drinks.renderUI();
    (_a = document.querySelector(".add_ingredient")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (e) {
        console.log({ e: e });
    });
    (_b = document
        .querySelector(".get_cart_elements")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function (e) {
        cart.renderCart();
    });
    // createFooter();
    console.log("footer created");
}
init();


/***/ }),

/***/ "./src/modules/cart1.ts":
/*!******************************!*\
  !*** ./src/modules/cart1.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* binding */ Cart)
/* harmony export */ });
var Cart = /** @class */ (function () {
    function Cart() {
        this.data = [];
    }
    Cart.prototype.addToCart = function (arg) {
        this.data.push(arg);
        this.renderCart();
    };
    Cart.prototype.getCartData = function () {
        return this.data;
    };
    Cart.prototype.deleteFromCart = function (id) {
        this.data = this.data.filter(function (pizza) { return pizza.id !== id; });
        console.log("Hello fromCart", id, this.data);
        this.renderCart();
    };
    Cart.prototype.renderCart = function () {
        var container = document.querySelector(".cartData");
        container.classList.add("cart_wrapper");
        container.innerHTML = "";
        // // Create an array of <h2> elements using map
        this.getCartData().forEach(function (str) {
            if (str.order === "PIZZA" ||
                str.order === "PASTA" ||
                str.order === "SALAD") {
                var cartElement = document.createElement("div");
                cartElement.classList.add("cart_element");
                var h2Element = document.createElement("h4");
                h2Element.textContent = str.base || "Nothing Selected";
                var h6Element = document.createElement("h4");
                h6Element.textContent = str.sauce || "Nothing Selected";
                cartElement === null || cartElement === void 0 ? void 0 : cartElement.appendChild(h2Element);
                cartElement === null || cartElement === void 0 ? void 0 : cartElement.appendChild(h6Element);
                container.appendChild(cartElement);
            }
            if (str.order === "DRINKS" && Number(str.price) > 0) {
                var cartElement = document.createElement("div");
                cartElement.classList.add("cart_element");
                var h2Element = document.createElement("h2");
                h2Element.textContent = JSON.stringify(str.drinks);
                var h6Element = document.createElement("h6");
                h6Element.textContent = str.price.toString();
                cartElement === null || cartElement === void 0 ? void 0 : cartElement.appendChild(h2Element);
                cartElement === null || cartElement === void 0 ? void 0 : cartElement.appendChild(h6Element);
                container.appendChild(cartElement);
            }
            // Create <h2> element
            // const h2Element = document.createElement("h2");
            // const h6Element = document.createElement("h6");
            // // Set text content of <h2> element to the string
            // h2Element.textContent = String(str.price) + "$";
            // h6Element.textContent = str.id;
            // // Return the <h2> element
            // return { one: h2Element, two: h6Element };
        });
        // h2Elements.forEach((itm: any) => {
        //   container?.appendChild(itm.one);
        //   container?.appendChild(itm.two);
        // });
    };
    return Cart;
}());



/***/ }),

/***/ "./src/modules/drink1.ts":
/*!*******************************!*\
  !*** ./src/modules/drink1.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Drink: () => (/* binding */ Drink)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _cart1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart1 */ "./src/modules/cart1.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var drinks = [
    { id: "beer_.5l", label: "Beer, 0.5l", price: 3 },
    { id: "beer_.33l", label: "Beer, 0.33l", price: 2.7 },
    { id: "coca_cola_.5l", label: "Coca Cola, 0.5l", price: 2.2 },
    { id: "coca_cola_.33l", label: "Coca Cola, 0.33l", price: 1.8 },
    { id: "sprite_.5l", label: "Sprite, 0.5l", price: 2.2 },
    { id: "sprite_.33l", label: "Sprite, 0.33l", price: 1.8 },
    { id: "apple_juice_.5l", label: "Apple Juice, 0.5l", price: 1.9 },
    { id: "apple_juice_.33l", label: "Apple Juice, 0.33l", price: 1.6 },
    { id: "mineral_water_.5l", label: "Mineral Water, 0.5l", price: 1.7 },
];
var Drink = /** @class */ (function (_super) {
    __extends(Drink, _super);
    function Drink() {
        var _this = _super.call(this) || this;
        _this.order = "DRINKS";
        _this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _this.drinks = {};
        _this.price = 0;
        return _this;
    }
    Drink.prototype.renderUI = function () {
        var _this = this;
        var _a;
        var listContainer = document.createElement("div");
        listContainer.classList.add("container_wrapper");
        listContainer.id = this.id;
        var orderInfo = document.createElement("div");
        orderInfo.classList.add("orderInfo");
        listContainer.append(orderInfo);
        var primaryContainer = document.createElement("div");
        primaryContainer.classList.add("primary__container");
        var drinkContainer = document.createElement("div");
        var addOnTitle = document.createElement("h2");
        addOnTitle.innerHTML = "Add Ons";
        drinkContainer.append(addOnTitle);
        drinks.forEach(function (drink) {
            var drink_item = document.createElement("div");
            drink_item.classList.add("ingredient_container");
            drink_item.innerHTML = "\n        <p>".concat(drink.label, "</p>\n        <p>").concat(drink.price, "</p>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(drink.id, "\" data-price=\"").concat(drink.price, "\" class=\"drink_content add_ingredient\">+</button>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(drink.id, "\" data-price=\"").concat(drink.price, "\" class=\"drink_content decrease_ingredient\">-</button>\n        ");
            // Add event listener using DOM methods
            drinkContainer.append(drink_item);
        });
        primaryContainer.append(drinkContainer);
        // Attach event listeners to the buttons
        primaryContainer
            .querySelectorAll(".drink_content.add_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.add_ingredient.bind(_this));
        });
        primaryContainer
            .querySelectorAll(".drink_content.decrease_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.decrease_ingredient.bind(_this));
        });
        listContainer.append(primaryContainer);
        (_a = document.querySelector(".drink_content")) === null || _a === void 0 ? void 0 : _a.append(listContainer);
    };
    Drink.prototype.add_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        var price = parseFloat(event.target.dataset.price);
        console.log(price, typeof price);
        this.drinks = __assign(__assign({}, this.drinks), (_a = {}, _a[value] = this.drinks[value] ? this.drinks[value] + 1 : 1, _a));
        this.price = this.price + price;
        console.log(this.drinks, this.price);
        this.renderInfo();
    };
    Drink.prototype.decrease_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        var price = parseFloat(event.target.dataset.price);
        console.log(price, typeof price);
        if (!this.drinks[value])
            return;
        console.log("Data Attributes:", { id: id, value: value });
        var isZero = this.drinks[value] - 1;
        console.log({ isZero: isZero });
        if (isZero === 0) {
            console.log("HELLO fromZERO");
            delete this.drinks[value];
            this.renderInfo();
            return;
        }
        this.drinks = __assign(__assign({}, this.drinks), (_a = {}, _a[value] = this.drinks[value] - 1, _a));
        this.price = this.price - price;
        console.log(this.drinks, this.price);
        this.renderInfo();
    };
    Drink.prototype.renderInfo = function () {
        var _a;
        var renderInfo = (_a = document
            .getElementById(this.id)) === null || _a === void 0 ? void 0 : _a.querySelector(".orderInfo");
        renderInfo.innerHTML = "";
        // // Create an array of <h2> elements using map
        var h5Elements = Object.entries(this.drinks).map(function (str) {
            // Create <h2> element
            var h5Element = document.createElement("h5");
            // Set text content of <h2> element to the string
            h5Element.textContent = str[0] + "---" + str[1];
            // Return the <h2> element
            return h5Element;
        });
        h5Elements.forEach(function (itm) {
            renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(itm);
        });
        var priceElement = document.createElement("h5");
        priceElement.textContent = "Price" + "---" + this.price;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(priceElement);
        console.log("RENDER INFO", this, renderInfo);
        _index__WEBPACK_IMPORTED_MODULE_0__.cart.renderCart();
    };
    Drink.prototype.cartUI = function () {
        return {
            id: this.id,
            price: this.price,
            info: JSON.stringify(this.drinks),
        };
    };
    return Drink;
}(_cart1__WEBPACK_IMPORTED_MODULE_1__.Cart));



/***/ }),

/***/ "./src/modules/functions.ts":
/*!**********************************!*\
  !*** ./src/modules/functions.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMultiTags: () => (/* binding */ createMultiTags),
/* harmony export */   createTag: () => (/* binding */ createTag)
/* harmony export */ });
//create Tags
function createTag(parent_node, tag_node, id_name, class_name, content) {
    var tag = document.createElement(tag_node);
    if (parent_node != null) {
        parent_node.append(tag);
    }
    else {
        var startpoint = document.getElementById("content");
        startpoint.append(tag);
    }
    if (id_name != null) {
        tag.id = id_name;
    }
    if (class_name != null) {
        tag.className = class_name;
    }
    if (content != null) {
        tag.innerHTML = content;
    }
    return tag;
}
//create multiple tags
function createMultiTags(parent_node, tag_node, num, list, menu, links) {
    for (var i = 0; i < num; i++) {
        if (menu) {
            createTag(parent_node, tag_node, null, list[i], '<a href="#' + list[i].replace(/ /g, "-") + '">' + list[i] + "</a>");
        }
        else if (links) {
            createTag(parent_node, tag_node, null, null, '<a class="' + list[i] + '" href="#"></a>');
        }
        else {
            createTag(parent_node, tag_node, null, list[i].replace(/ /g, "_"), list[i]);
        }
    }
}



/***/ }),

/***/ "./src/modules/header.ts":
/*!*******************************!*\
  !*** ./src/modules/header.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/modules/functions.ts");

function createHeader() {
    var startpoint = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTag)(null, "header", null, null, null);
    var logo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTag)(startpoint, "div", "header_logo", "logo", null);
    logo.innerHTML = "<i class=\"fa-solid fa-plate-wheat\"></i>"; // TODO add png did not work
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTag)(startpoint, "h1", null, "heading", "Ristorante con Kit di Costruzione");
    var button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createTag)(startpoint, "button", "btn_cartHead", "btnCartHead", null);
    button.innerHTML = "<i class=\"fa-solid fa-cart-shopping\"></i>";
    // Buttons
    // TODO add cartpage
}



/***/ }),

/***/ "./src/modules/pasta1.ts":
/*!*******************************!*\
  !*** ./src/modules/pasta1.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pasta: () => (/* binding */ Pasta)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _cart1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart1 */ "./src/modules/cart1.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var base = [
    { id: "fusilli", label: "Fusilli" },
    { id: "penne", label: "Penne" },
    { id: "farfalle", label: "Farfalle" },
    { id: "spaghetti", label: "Spaghetti" },
    { id: "tagliatelle", label: "Tagliatelle" },
    { id: "rigatoni", label: "Rigatoni" },
];
var sauces = [
    { id: "tomato_sauce", label: "Tomato Sauce" },
    { id: "cream_sauce", label: "Cream Sauce" },
];
var add_ons = [
    { id: "onion", label: "Onion" },
    { id: "garlic", label: "Garlic" },
    { id: "bell_pepper", label: "Bell Pepper" },
    { id: "pepperoni", label: "Pepperoni" },
    { id: "corn", label: "Corn" },
    { id: "mushrooms", label: "Mushrooms" },
    { id: "zucchini", label: "Zucchini" },
    { id: "spinach", label: "Spinach" },
    { id: "olives", label: "Olives" },
    { id: "basil", label: "Basil" },
    { id: "sage", label: "Sage" },
    { id: "minced_meat", label: "Minced Meat" },
    { id: "tuna_fish", label: "Tuna Fish" },
    { id: "mozzarella", label: "Mozzarella" },
    { id: "parmesan", label: "Parmesan" },
    { id: "gorgonzola", label: "Gorgonzola" },
];
var ingredient_price = 1.5;
var Pasta = /** @class */ (function (_super) {
    __extends(Pasta, _super);
    function Pasta() {
        var _this = _super.call(this) || this;
        _this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _this.order = "PASTA";
        _this.base = "";
        _this.add_ons = {};
        _this.sauce = "";
        _this.price = 8.5;
        return _this;
    }
    Pasta.prototype.renderUI = function () {
        var _this = this;
        var _a;
        var listContainer = document.createElement("div");
        listContainer.classList.add("container_wrapper");
        listContainer.id = this.id;
        var orderInfo = document.createElement("div");
        orderInfo.classList.add("orderInfo");
        listContainer.append(orderInfo);
        var deleteOrder = document.createElement("div");
        deleteOrder.classList.add("deleteOrder");
        deleteOrder.innerHTML = "X";
        deleteOrder === null || deleteOrder === void 0 ? void 0 : deleteOrder.addEventListener("click", function (event) {
            _this.handleDelete(event, _this.id);
        });
        listContainer.append(deleteOrder);
        var primaryContainer = document.createElement("div");
        primaryContainer.classList.add("primary__container");
        var baseContainer = document.createElement("div");
        var baseTitle = document.createElement("h2");
        baseTitle.innerHTML = "Base";
        baseContainer.append(baseTitle);
        // Create a select element
        var selectElement = document.createElement("select");
        selectElement.classList.add("base");
        // Create options dynamically and append them to the select element
        base.forEach(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText.label;
            optionElement.value = optionText.id;
            selectElement.appendChild(optionElement);
        });
        // selectElement?.addEventListener("change", this.baseChange);
        selectElement === null || selectElement === void 0 ? void 0 : selectElement.addEventListener("change", function (event) {
            _this.handleSelect(event, "base");
        });
        baseContainer.append(selectElement);
        primaryContainer.append(baseContainer);
        var addOnContainer = document.createElement("div");
        var addOnTitle = document.createElement("h2");
        addOnTitle.innerHTML = "Add Ons";
        addOnContainer.append(addOnTitle);
        add_ons.forEach(function (add_on) {
            var add_on_item = document.createElement("div");
            add_on_item.classList.add("ingredient_container");
            add_on_item.innerHTML = "\n        <p>".concat(add_on.label, "</p>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(add_on.id, "\" class=\"pasta_content add_ingredient\">+</button>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(add_on.id, "\" class=\"pasta_content decrease_ingredient\">-</button>\n        ");
            // Add event listener using DOM methods
            addOnContainer.append(add_on_item);
        });
        primaryContainer.append(addOnContainer);
        // Attach event listeners to the buttons
        primaryContainer
            .querySelectorAll(".pasta_content.add_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.add_ingredient.bind(_this));
        });
        primaryContainer
            .querySelectorAll(".pasta_content.decrease_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.decrease_ingredient.bind(_this));
        });
        var sauceContainer = document.createElement("div");
        var sauseTitle = document.createElement("h2");
        sauseTitle.innerHTML = "Sause";
        sauceContainer.append(sauseTitle);
        // Create a select element
        var selectSause = document.createElement("select");
        selectSause.classList.add("sause");
        // Create options dynamically and append them to the select element
        sauces.forEach(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText.label;
            optionElement.value = optionText.id;
            selectSause.appendChild(optionElement);
        });
        selectSause === null || selectSause === void 0 ? void 0 : selectSause.addEventListener("change", function (event) {
            _this.handleSelect(event, "sauce");
        });
        sauceContainer.append(selectSause);
        primaryContainer.append(sauceContainer);
        listContainer.append(primaryContainer);
        (_a = document.querySelector(".pasta_content")) === null || _a === void 0 ? void 0 : _a.append(listContainer);
    };
    Pasta.prototype.add_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        console.log("Data Attributes:", { id: id, value: value }, this.add_ons);
        if (Object.keys(this.add_ons).length >= 5 && !this.add_ons[value]) {
            return alert("Cant Select More Than 5 ingredient");
        }
        this.add_ons = __assign(__assign({}, this.add_ons), (_a = {}, _a[value] = this.add_ons[value] ? this.add_ons[value] + 1 : 1, _a));
        this.price = this.price + ingredient_price;
        console.log(this.add_ons, this.price);
        this.renderInfo();
    };
    Pasta.prototype.decrease_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        if (!this.add_ons[value])
            return;
        console.log("Data Attributes:", { id: id, value: value });
        var isZero = this.add_ons[value] - 1;
        console.log({ isZero: isZero });
        if (isZero === 0) {
            console.log("HELLO fromZERO");
            delete this.add_ons[value];
            this.renderInfo();
            return;
        }
        this.add_ons = __assign(__assign({}, this.add_ons), (_a = {}, _a[value] = this.add_ons[value] - 1, _a));
        this.price = this.price - ingredient_price;
        console.log(this.add_ons, this.price);
        this.renderInfo();
    };
    Pasta.prototype.handleSelect = function (event, arg) {
        this[arg] = event.target.value;
        this.renderInfo();
        console.log(this);
    };
    Pasta.prototype.renderInfo = function () {
        var _a;
        var renderInfo = (_a = document
            .getElementById(this.id)) === null || _a === void 0 ? void 0 : _a.querySelector(".orderInfo");
        renderInfo.innerHTML = "";
        var baseElement = document.createElement("h5");
        baseElement.textContent = "Base" + "---" + this.base;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(baseElement);
        var sauceElement = document.createElement("h5");
        sauceElement.textContent = "Sauce" + "---" + this.sauce;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(sauceElement);
        // // Create an array of <h2> elements using map
        var h5Elements = Object.entries(this.add_ons).map(function (str) {
            // Create <h2> element
            var h5Element = document.createElement("h5");
            // Set text content of <h2> element to the string
            h5Element.textContent = str[0] + "---" + str[1];
            // Return the <h2> element
            return h5Element;
        });
        h5Elements.forEach(function (itm) {
            renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(itm);
        });
        var priceElement = document.createElement("h5");
        priceElement.textContent = "Price" + "---" + this.price;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(priceElement);
        console.log("RENDER INFO", this, renderInfo);
        _index__WEBPACK_IMPORTED_MODULE_0__.cart.renderCart();
    };
    Pasta.prototype.cartUI = function () {
        return { id: this.id, price: this.price, info: this.base };
    };
    Pasta.prototype.handleDelete = function (event, id) {
        _index__WEBPACK_IMPORTED_MODULE_0__.cart.deleteFromCart(id);
        var removeElement = function (el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };
        removeElement(document.getElementById(id));
        console.log({ id: id });
    };
    return Pasta;
}(_cart1__WEBPACK_IMPORTED_MODULE_1__.Cart));



/***/ }),

/***/ "./src/modules/pizza1.ts":
/*!*******************************!*\
  !*** ./src/modules/pizza1.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pizza: () => (/* binding */ Pizza)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _cart1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart1 */ "./src/modules/cart1.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var base = [
    { id: "wheat", label: "Wheat" },
    { id: "whole_grain", label: "Whole Grain" },
];
var sauces = [
    { id: "tomato_sauce", label: "Tomato Sauce" },
    { id: "white_sauce", label: "White Sauce" },
];
var add_ons = [
    { id: "onion", label: "Onion" },
    { id: "garlic", label: "Garlic" },
    { id: "bell_pepper", label: "Bell Pepper" },
    { id: "pepperoni", label: "Pepperoni" },
    { id: "corn", label: "Corn" },
    { id: "mushrooms", label: "Mushrooms" },
    { id: "zucchini", label: "Zucchini" },
    { id: "fried_egg", label: "Fried Egg" },
    { id: "spinach", label: "Spinach" },
    { id: "pineapple", label: "Pineapple" },
    { id: "ham", label: "Ham" },
    { id: "salami", label: "Salami" },
    { id: "bacon", label: "Bacon" },
    { id: "gouda_cheese", label: "Gouda Cheese" },
    { id: "mozzarella", label: "Mozzarella" },
    { id: "parmesan", label: "Parmesan" },
    { id: "blue_cheese", label: "Blue Cheese" },
    { id: "cheddar", label: "Cheddar" },
];
var ingredient_price = 1.5;
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza() {
        var _this = _super.call(this) || this;
        _this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _this.order = "PIZZA";
        _this.base = "";
        _this.add_ons = {};
        _this.sauce = "";
        _this.price = 9.7;
        return _this;
    }
    Pizza.prototype.renderUI = function () {
        var _this = this;
        var _a;
        var listContainer = document.createElement("div");
        listContainer.classList.add("container_wrapper");
        listContainer.id = this.id;
        var orderInfo = document.createElement("div");
        orderInfo.classList.add("orderInfo");
        listContainer.append(orderInfo);
        var deleteOrder = document.createElement("div");
        deleteOrder.classList.add("deleteOrder");
        deleteOrder.innerHTML = "X";
        deleteOrder === null || deleteOrder === void 0 ? void 0 : deleteOrder.addEventListener("click", function (event) {
            _this.handleDelete(event, _this.id);
        });
        listContainer.append(deleteOrder);
        var primaryContainer = document.createElement("div");
        primaryContainer.classList.add("primary__container");
        var baseContainer = document.createElement("div");
        var baseTitle = document.createElement("h2");
        baseTitle.innerHTML = "Base";
        baseContainer.append(baseTitle);
        // Create a select element
        var selectElement = document.createElement("select");
        selectElement.classList.add("base");
        // Create options dynamically and append them to the select element
        base.forEach(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText.label;
            optionElement.value = optionText.id;
            selectElement.appendChild(optionElement);
        });
        // selectElement?.addEventListener("change", this.baseChange);
        selectElement === null || selectElement === void 0 ? void 0 : selectElement.addEventListener("change", function (event) {
            _this.handleSelect(event, "base");
        });
        baseContainer.append(selectElement);
        primaryContainer.append(baseContainer);
        var addOnContainer = document.createElement("div");
        var addOnTitle = document.createElement("h2");
        addOnTitle.innerHTML = "Add Ons";
        addOnContainer.append(addOnTitle);
        add_ons.forEach(function (add_on) {
            var add_on_item = document.createElement("div");
            add_on_item.classList.add("ingredient_container");
            add_on_item.innerHTML = "\n        <p>".concat(add_on.label, "</p>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(add_on.id, "\" class=\"pizza_content add_ingredient\">+</button>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(add_on.id, "\" class=\"pizza_content decrease_ingredient\">-</button>\n        ");
            // Add event listener using DOM methods
            addOnContainer.append(add_on_item);
        });
        primaryContainer.append(addOnContainer);
        // Attach event listeners to the buttons
        primaryContainer
            .querySelectorAll(".pizza_content.add_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.add_ingredient.bind(_this));
        });
        primaryContainer
            .querySelectorAll(".pizza_content.decrease_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.decrease_ingredient.bind(_this));
        });
        var sauceContainer = document.createElement("div");
        var sauseTitle = document.createElement("h2");
        sauseTitle.innerHTML = "Sause";
        sauceContainer.append(sauseTitle);
        // Create a select element
        var selectSause = document.createElement("select");
        selectSause.classList.add("sause");
        // Create options dynamically and append them to the select element
        sauces.forEach(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText.label;
            optionElement.value = optionText.id;
            selectSause.appendChild(optionElement);
        });
        selectSause === null || selectSause === void 0 ? void 0 : selectSause.addEventListener("change", function (event) {
            _this.handleSelect(event, "sauce");
        });
        sauceContainer.append(selectSause);
        primaryContainer.append(sauceContainer);
        listContainer.append(primaryContainer);
        (_a = document.querySelector(".pizza_content")) === null || _a === void 0 ? void 0 : _a.append(listContainer);
    };
    Pizza.prototype.add_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        console.log("Data Attributes:", { id: id, value: value }, this.add_ons);
        if (Object.keys(this.add_ons).length >= 5 && !this.add_ons[value]) {
            return alert("Cant Select More Than 5 ingredient");
        }
        this.add_ons = __assign(__assign({}, this.add_ons), (_a = {}, _a[value] = this.add_ons[value] ? this.add_ons[value] + 1 : 1, _a));
        this.price = this.price + ingredient_price;
        console.log(this.add_ons, this.price);
        this.renderInfo();
    };
    Pizza.prototype.decrease_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        if (!this.add_ons[value])
            return;
        console.log("Data Attributes:", { id: id, value: value });
        var isZero = this.add_ons[value] - 1;
        console.log({ isZero: isZero });
        if (isZero === 0) {
            console.log("HELLO fromZERO");
            delete this.add_ons[value];
            this.renderInfo();
            return;
        }
        this.add_ons = __assign(__assign({}, this.add_ons), (_a = {}, _a[value] = this.add_ons[value] - 1, _a));
        this.price = this.price - ingredient_price;
        console.log(this.add_ons, this.price);
        this.renderInfo();
    };
    Pizza.prototype.handleSelect = function (event, arg) {
        this[arg] = event.target.value;
        this.renderInfo();
        console.log(this);
    };
    Pizza.prototype.renderInfo = function () {
        var _a;
        var renderInfo = (_a = document
            .getElementById(this.id)) === null || _a === void 0 ? void 0 : _a.querySelector(".orderInfo");
        renderInfo.innerHTML = "";
        var baseElement = document.createElement("h5");
        baseElement.textContent = "Base" + "---" + this.base;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(baseElement);
        var sauceElement = document.createElement("h5");
        sauceElement.textContent = "Sauce" + "---" + this.sauce;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(sauceElement);
        // // Create an array of <h2> elements using map
        var h5Elements = Object.entries(this.add_ons).map(function (str) {
            // Create <h2> element
            var h5Element = document.createElement("h5");
            // Set text content of <h2> element to the string
            h5Element.textContent = str[0] + "---" + str[1];
            // Return the <h2> element
            return h5Element;
        });
        h5Elements.forEach(function (itm) {
            renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(itm);
        });
        var priceElement = document.createElement("h5");
        priceElement.textContent = "Price" + "---" + this.price;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(priceElement);
        console.log("RENDER INFO", this, renderInfo);
        _index__WEBPACK_IMPORTED_MODULE_0__.cart.renderCart();
    };
    Pizza.prototype.cartUI = function () {
        return { id: this.id, price: this.price, info: this.base };
    };
    Pizza.prototype.handleDelete = function (event, id) {
        _index__WEBPACK_IMPORTED_MODULE_0__.cart.deleteFromCart(id);
        var removeElement = function (el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };
        removeElement(document.getElementById(id));
        console.log({ id: id });
    };
    return Pizza;
}(_cart1__WEBPACK_IMPORTED_MODULE_1__.Cart));



/***/ }),

/***/ "./src/modules/salad1.ts":
/*!*******************************!*\
  !*** ./src/modules/salad1.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Salad: () => (/* binding */ Salad)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _cart1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart1 */ "./src/modules/cart1.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var base = [
    { id: "romaine", label: "Romaine" },
    { id: "lollo_rosso", label: "Lollo Rosso" },
    { id: "radicchio", label: "Radicchio" },
    { id: "baby_spinach", label: "Baby Spinach" },
];
var sauces = [
    { id: "olive_oil_balsamic_vinegar", label: "Olive Oil and Balsamic Vinegar" },
    {
        id: "pumpkin_seed_oil_apple_cider_vinegar",
        label: "Pumpkin-Seed Oil and Apple Cider Vinegar",
    },
    { id: "french_dressing", label: "French Dressing" },
    { id: "yoghurt_dressing", label: "Yoghurt Dressing" },
];
var add_ons = [
    { id: "carrots", label: "Carrots" },
    { id: "cucumbers", label: "Cucumbers" },
    { id: "bell_peppers", label: "Bell Peppers" },
    { id: "tomatoes", label: "Tomatoes" },
    { id: "corn", label: "Corn" },
    { id: "tuna_fish", label: "Tuna Fish" },
    { id: "feta_cheese", label: "Feta Cheese" },
    { id: "olives", label: "Olives" },
    { id: "potatoes", label: "Potatoes" },
    { id: "onion", label: "Onion" },
];
var ingredient_price = 1.5;
var Salad = /** @class */ (function (_super) {
    __extends(Salad, _super);
    function Salad() {
        var _this = _super.call(this) || this;
        _this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
        _this.order = "SALAD";
        _this.base = "";
        _this.add_ons = {};
        _this.sauce = "";
        _this.price = 6.3;
        return _this;
    }
    Salad.prototype.renderUI = function () {
        var _this = this;
        var _a;
        var listContainer = document.createElement("div");
        listContainer.classList.add("container_wrapper");
        listContainer.id = this.id;
        var orderInfo = document.createElement("div");
        orderInfo.classList.add("orderInfo");
        listContainer.append(orderInfo);
        var deleteOrder = document.createElement("div");
        deleteOrder.classList.add("deleteOrder");
        deleteOrder.innerHTML = "X";
        deleteOrder === null || deleteOrder === void 0 ? void 0 : deleteOrder.addEventListener("click", function (event) {
            _this.handleDelete(event, _this.id);
        });
        listContainer.append(deleteOrder);
        var primaryContainer = document.createElement("div");
        primaryContainer.classList.add("primary__container");
        var baseContainer = document.createElement("div");
        var baseTitle = document.createElement("h2");
        baseTitle.innerHTML = "Base";
        baseContainer.append(baseTitle);
        // Create a select element
        var selectElement = document.createElement("select");
        selectElement.classList.add("base");
        // Create options dynamically and append them to the select element
        base.forEach(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText.label;
            optionElement.value = optionText.id;
            selectElement.appendChild(optionElement);
        });
        // selectElement?.addEventListener("change", this.baseChange);
        selectElement === null || selectElement === void 0 ? void 0 : selectElement.addEventListener("change", function (event) {
            _this.handleSelect(event, "base");
        });
        baseContainer.append(selectElement);
        primaryContainer.append(baseContainer);
        var addOnContainer = document.createElement("div");
        var addOnTitle = document.createElement("h2");
        addOnTitle.innerHTML = "Add Ons";
        addOnContainer.append(addOnTitle);
        add_ons.forEach(function (add_on) {
            var add_on_item = document.createElement("div");
            add_on_item.classList.add("ingredient_container");
            add_on_item.innerHTML = "\n        <p>".concat(add_on.label, "</p>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(add_on.id, "\" class=\"salad_content add_ingredient\">+</button>\n        <button data-id=\"").concat(_this.id, "\" data-value=\"").concat(add_on.id, "\" class=\"salad_content decrease_ingredient\">-</button>\n        ");
            // Add event listener using DOM methods
            addOnContainer.append(add_on_item);
        });
        primaryContainer.append(addOnContainer);
        // Attach event listeners to the buttons
        primaryContainer
            .querySelectorAll(".salad_content.add_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.add_ingredient.bind(_this));
        });
        primaryContainer
            .querySelectorAll(".salad_content.decrease_ingredient")
            .forEach(function (button) {
            button.addEventListener("click", _this.decrease_ingredient.bind(_this));
        });
        var sauceContainer = document.createElement("div");
        var sauseTitle = document.createElement("h2");
        sauseTitle.innerHTML = "Sause";
        sauceContainer.append(sauseTitle);
        // Create a select element
        var selectSause = document.createElement("select");
        selectSause.classList.add("sause");
        // Create options dynamically and append them to the select element
        sauces.forEach(function (optionText) {
            var optionElement = document.createElement("option");
            optionElement.textContent = optionText.label;
            optionElement.value = optionText.id;
            selectSause.appendChild(optionElement);
        });
        selectSause === null || selectSause === void 0 ? void 0 : selectSause.addEventListener("change", function (event) {
            _this.handleSelect(event, "sauce");
        });
        sauceContainer.append(selectSause);
        primaryContainer.append(sauceContainer);
        listContainer.append(primaryContainer);
        (_a = document.querySelector(".salad_content")) === null || _a === void 0 ? void 0 : _a.append(listContainer);
    };
    Salad.prototype.add_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        console.log("Data Attributes:", { id: id, value: value }, this.add_ons);
        if (Object.keys(this.add_ons).length >= 5 && !this.add_ons[value]) {
            return alert("Cant Select More Than 5 ingredient");
        }
        this.add_ons = __assign(__assign({}, this.add_ons), (_a = {}, _a[value] = this.add_ons[value] ? this.add_ons[value] + 1 : 1, _a));
        this.price = this.price + ingredient_price;
        console.log(this.add_ons, this.price);
        this.renderInfo();
    };
    Salad.prototype.decrease_ingredient = function (event) {
        var _a;
        var id = event.target.dataset.id;
        var value = event.target.dataset.value;
        if (!this.add_ons[value])
            return;
        console.log("Data Attributes:", { id: id, value: value });
        var isZero = this.add_ons[value] - 1;
        console.log({ isZero: isZero });
        if (isZero === 0) {
            console.log("HELLO fromZERO");
            delete this.add_ons[value];
            this.renderInfo();
            return;
        }
        this.add_ons = __assign(__assign({}, this.add_ons), (_a = {}, _a[value] = this.add_ons[value] - 1, _a));
        this.price = this.price - ingredient_price;
        console.log(this.add_ons, this.price);
        this.renderInfo();
    };
    Salad.prototype.handleSelect = function (event, arg) {
        this[arg] = event.target.value;
        this.renderInfo();
        console.log(this);
    };
    Salad.prototype.renderInfo = function () {
        var _a;
        var renderInfo = (_a = document
            .getElementById(this.id)) === null || _a === void 0 ? void 0 : _a.querySelector(".orderInfo");
        renderInfo.innerHTML = "";
        var baseElement = document.createElement("h5");
        baseElement.textContent = "Base" + "---" + this.base;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(baseElement);
        var sauceElement = document.createElement("h5");
        sauceElement.textContent = "Sauce" + "---" + this.sauce;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(sauceElement);
        // // Create an array of <h2> elements using map
        var h5Elements = Object.entries(this.add_ons).map(function (str) {
            // Create <h2> element
            var h5Element = document.createElement("h5");
            // Set text content of <h2> element to the string
            h5Element.textContent = str[0] + "---" + str[1];
            // Return the <h2> element
            return h5Element;
        });
        h5Elements.forEach(function (itm) {
            renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(itm);
        });
        var priceElement = document.createElement("h5");
        priceElement.textContent = "Price" + "---" + this.price;
        renderInfo === null || renderInfo === void 0 ? void 0 : renderInfo.appendChild(priceElement);
        console.log("RENDER INFO", this, renderInfo);
        _index__WEBPACK_IMPORTED_MODULE_0__.cart.renderCart();
    };
    Salad.prototype.cartUI = function () {
        return { id: this.id, price: this.price, info: this.base };
    };
    Salad.prototype.handleDelete = function (event, id) {
        _index__WEBPACK_IMPORTED_MODULE_0__.cart.deleteFromCart(id);
        var removeElement = function (el) {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };
        removeElement(document.getElementById(id));
        console.log({ id: id });
    };
    return Salad;
}(_cart1__WEBPACK_IMPORTED_MODULE_1__.Cart));



/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map