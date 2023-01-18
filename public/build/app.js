(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$":
/*!*****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j|t)sx?$ ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/transition.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_transition_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/alert.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/alert.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_alert_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-sass/assets/javascripts/bootstrap/modal.js */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap/modal.js");
/* harmony import */ var bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_sass_assets_javascripts_bootstrap_modal_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/highlight.js */ "./assets/js/highlight.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/doclinks.js */ "./assets/js/doclinks.js");
/* harmony import */ var _js_doclinks_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_doclinks_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
// loads the Bootstrap jQuery plugins

2;


 // loads the code syntax highlighting library

 // Creates links to the Symfony documentation

 // start the Stimulus application



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
 // Registers Stimulus controllers from controllers.json and in the controllers/ directory

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j|t)sx?$")); // register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/doclinks.js":
/*!*******************************!*\
  !*** ./assets/js/doclinks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 // Wraps some elements in anchor tags referencing to the Symfony documentation

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");

$(function () {
  var $modal = $('#sourceCodeModal');
  var $controllerCode = $modal.find('code.php');
  var $templateCode = $modal.find('code.twig');

  function anchor(url, content) {
    return '<a class="doclink" target="_blank" href="' + url + '">' + content + '</a>';
  }

  ; // Wraps links to the Symfony documentation

  $modal.find('.hljs-comment').each(function () {
    $(this).html($(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g, function (url) {
      return anchor(url, url);
    }));
  }); // Wraps Symfony's annotations

  var annotations = {
    '@Cache': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html',
    '@IsGranted': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted',
    '@ParamConverter': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html',
    '@Route': 'https://symfony.com/doc/current/routing.html#creating-routes-as-annotations',
    '@Security': 'https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security'
  };
  $controllerCode.find('.hljs-doctag').each(function () {
    var annotation = $(this).text();

    if (annotations[annotation]) {
      $(this).html(anchor(annotations[annotation], annotation));
    }
  }); // Wraps Twig's tags

  $templateCode.find('.hljs-template-tag > .hljs-name').each(function () {
    var tag = $(this).text();

    if ('else' === tag || tag.match(/^end/)) {
      return;
    }

    var url = 'https://twig.symfony.com/doc/3.x/tags/' + tag + '.html#' + tag;
    $(this).html(anchor(url, tag));
  }); // Wraps Twig's functions

  $templateCode.find('.hljs-template-variable > .hljs-name').each(function () {
    var func = $(this).text();
    var url = 'https://twig.symfony.com/doc/3.x/functions/' + func + '.html#' + func;
    $(this).html(anchor(url, func));
  });
});

/***/ }),

/***/ "./assets/js/highlight.js":
/*!********************************!*\
  !*** ./assets/js/highlight.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/core */ "./node_modules/highlight.js/lib/core.js");
/* harmony import */ var highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/php */ "./node_modules/highlight.js/lib/languages/php.js");
/* harmony import */ var highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/twig */ "./node_modules/highlight.js/lib/languages/twig.js");
/* harmony import */ var highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2__);



highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('php', (highlight_js_lib_languages_php__WEBPACK_IMPORTED_MODULE_1___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().registerLanguage('twig', (highlight_js_lib_languages_twig__WEBPACK_IMPORTED_MODULE_2___default()));
highlight_js_lib_core__WEBPACK_IMPORTED_MODULE_0___default().initHighlightingOnLoad();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-88c411","vendors-node_modules_core-js_modules_es_string_replace_js","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_bootstrap-sass_assets-f8a429"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vfC9cXC4oanx0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZG9jbGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2hpZ2hsaWdodC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJzdGFydFN0aW11bHVzQXBwIiwicmVxdWlyZSIsIiQiLCIkbW9kYWwiLCIkY29udHJvbGxlckNvZGUiLCJmaW5kIiwiJHRlbXBsYXRlQ29kZSIsImFuY2hvciIsInVybCIsImNvbnRlbnQiLCJlYWNoIiwiaHRtbCIsInJlcGxhY2UiLCJhbm5vdGF0aW9ucyIsImFubm90YXRpb24iLCJ0ZXh0IiwidGFnIiwibWF0Y2giLCJmdW5jIiwiaGxqcyIsInBocCIsInR3aWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSQSxpRUFBZTtBQUNmLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREQ7QUFDQTtBQUFtRTtBQUNuRTtBQUNBO0NBR0E7O0NBR0E7O0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ1ZBOztBQUNPLElBQU1BLEdBQUcsR0FBR0MsMEVBQWdCLENBQUNDLDBJQUFELENBQTVCLEMsQ0FNUDtBQUNBLGdFOzs7Ozs7Ozs7Ozs7Q0NSQTs7Ozs7Ozs7OztBQUNBQyxDQUFDLENBQUMsWUFBVztBQUNULE1BQUlDLE1BQU0sR0FBR0QsQ0FBQyxDQUFDLGtCQUFELENBQWQ7QUFDQSxNQUFJRSxlQUFlLEdBQUdELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFVBQVosQ0FBdEI7QUFDQSxNQUFJQyxhQUFhLEdBQUdILE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLFdBQVosQ0FBcEI7O0FBRUEsV0FBU0UsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLE9BQXJCLEVBQThCO0FBQzFCLFdBQU8sOENBQThDRCxHQUE5QyxHQUFvRCxJQUFwRCxHQUEyREMsT0FBM0QsR0FBcUUsTUFBNUU7QUFDSDs7QUFBQSxHQVBRLENBU1Q7O0FBQ0FOLFFBQU0sQ0FBQ0UsSUFBUCxDQUFZLGVBQVosRUFBNkJLLElBQTdCLENBQWtDLFlBQVc7QUFDekNSLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUixDQUFhVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsR0FBZUMsT0FBZixDQUF1Qix3Q0FBdkIsRUFBaUUsVUFBU0osR0FBVCxFQUFjO0FBQ3hGLGFBQU9ELE1BQU0sQ0FBQ0MsR0FBRCxFQUFNQSxHQUFOLENBQWI7QUFDSCxLQUZZLENBQWI7QUFHSCxHQUpELEVBVlMsQ0FnQlQ7O0FBQ0EsTUFBSUssV0FBVyxHQUFHO0FBQ2QsY0FBVSwyRkFESTtBQUVkLGtCQUFjLHdHQUZBO0FBR2QsdUJBQW1CLGdHQUhMO0FBSWQsY0FBVSw2RUFKSTtBQUtkLGlCQUFhO0FBTEMsR0FBbEI7QUFRQVQsaUJBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUIsY0FBckIsRUFBcUNLLElBQXJDLENBQTBDLFlBQVc7QUFDakQsUUFBSUksVUFBVSxHQUFHWixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLElBQVIsRUFBakI7O0FBRUEsUUFBSUYsV0FBVyxDQUFDQyxVQUFELENBQWYsRUFBNkI7QUFDekJaLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUixDQUFhSixNQUFNLENBQUNNLFdBQVcsQ0FBQ0MsVUFBRCxDQUFaLEVBQTBCQSxVQUExQixDQUFuQjtBQUNIO0FBQ0osR0FORCxFQXpCUyxDQWlDVDs7QUFDQVIsZUFBYSxDQUFDRCxJQUFkLENBQW1CLGlDQUFuQixFQUFzREssSUFBdEQsQ0FBMkQsWUFBVztBQUNsRSxRQUFJTSxHQUFHLEdBQUdkLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsSUFBUixFQUFWOztBQUVBLFFBQUksV0FBV0MsR0FBWCxJQUFrQkEsR0FBRyxDQUFDQyxLQUFKLENBQVUsTUFBVixDQUF0QixFQUF5QztBQUNyQztBQUNIOztBQUVELFFBQUlULEdBQUcsR0FBRywyQ0FBMkNRLEdBQTNDLEdBQWlELFFBQWpELEdBQTREQSxHQUF0RTtBQUVBZCxLQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsQ0FBYUosTUFBTSxDQUFDQyxHQUFELEVBQU1RLEdBQU4sQ0FBbkI7QUFDSCxHQVZELEVBbENTLENBOENUOztBQUNBVixlQUFhLENBQUNELElBQWQsQ0FBbUIsc0NBQW5CLEVBQTJESyxJQUEzRCxDQUFnRSxZQUFXO0FBQ3ZFLFFBQUlRLElBQUksR0FBR2hCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsSUFBUixFQUFYO0FBRUEsUUFBSVAsR0FBRyxHQUFHLGdEQUFnRFUsSUFBaEQsR0FBdUQsUUFBdkQsR0FBa0VBLElBQTVFO0FBRUFoQixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsQ0FBYUosTUFBTSxDQUFDQyxHQUFELEVBQU1VLElBQU4sQ0FBbkI7QUFDSCxHQU5EO0FBT0gsQ0F0REEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFFQUMsNkVBQUEsQ0FBc0IsS0FBdEIsRUFBNkJDLHVFQUE3QjtBQUNBRCw2RUFBQSxDQUFzQixNQUF0QixFQUE4QkUsd0VBQTlCO0FBRUFGLG1GQUFBLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLihqfHQpc3g/JFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IHtcbn07IiwiLy8gbG9hZHMgdGhlIEJvb3RzdHJhcCBqUXVlcnkgcGx1Z2luc1xuaW1wb3J0ICdib290c3RyYXAtc2Fzcy9hc3NldHMvamF2YXNjcmlwdHMvYm9vdHN0cmFwL3RyYW5zaXRpb24uanMnOzJcbmltcG9ydCAnYm9vdHN0cmFwLXNhc3MvYXNzZXRzL2phdmFzY3JpcHRzL2Jvb3RzdHJhcC9hbGVydC5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC1zYXNzL2Fzc2V0cy9qYXZhc2NyaXB0cy9ib290c3RyYXAvbW9kYWwuanMnO1xuaW1wb3J0ICdqcXVlcnknXG5cbi8vIGxvYWRzIHRoZSBjb2RlIHN5bnRheCBoaWdobGlnaHRpbmcgbGlicmFyeVxuaW1wb3J0ICcuL2pzL2hpZ2hsaWdodC5qcyc7XG5cbi8vIENyZWF0ZXMgbGlua3MgdG8gdGhlIFN5bWZvbnkgZG9jdW1lbnRhdGlvblxuaW1wb3J0ICcuL2pzL2RvY2xpbmtzLmpzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnO1xuXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxuZXhwb3J0IGNvbnN0IGFwcCA9IHN0YXJ0U3RpbXVsdXNBcHAocmVxdWlyZS5jb250ZXh0KFxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcbiAgICB0cnVlLFxuICAgIC9cXC4oanx0KXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gV3JhcHMgc29tZSBlbGVtZW50cyBpbiBhbmNob3IgdGFncyByZWZlcmVuY2luZyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXG4kKGZ1bmN0aW9uKCkge1xuICAgIHZhciAkbW9kYWwgPSAkKCcjc291cmNlQ29kZU1vZGFsJyk7XG4gICAgdmFyICRjb250cm9sbGVyQ29kZSA9ICRtb2RhbC5maW5kKCdjb2RlLnBocCcpO1xuICAgIHZhciAkdGVtcGxhdGVDb2RlID0gJG1vZGFsLmZpbmQoJ2NvZGUudHdpZycpO1xuXG4gICAgZnVuY3Rpb24gYW5jaG9yKHVybCwgY29udGVudCkge1xuICAgICAgICByZXR1cm4gJzxhIGNsYXNzPVwiZG9jbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCInICsgdXJsICsgJ1wiPicgKyBjb250ZW50ICsgJzwvYT4nO1xuICAgIH07XG5cbiAgICAvLyBXcmFwcyBsaW5rcyB0byB0aGUgU3ltZm9ueSBkb2N1bWVudGF0aW9uXG4gICAgJG1vZGFsLmZpbmQoJy5obGpzLWNvbW1lbnQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmh0bWwoJCh0aGlzKS5odG1sKCkucmVwbGFjZSgvaHR0cHM6XFwvXFwvc3ltZm9ueS5jb21cXC9kb2NcXC9bXFx3Ly4jLV0rL2csIGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgcmV0dXJuIGFuY2hvcih1cmwsIHVybCk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcblxuICAgIC8vIFdyYXBzIFN5bWZvbnkncyBhbm5vdGF0aW9uc1xuICAgIHZhciBhbm5vdGF0aW9ucyA9IHtcbiAgICAgICAgJ0BDYWNoZSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvY2FjaGUuaHRtbCcsXG4gICAgICAgICdASXNHcmFudGVkJzogJ2h0dHBzOi8vc3ltZm9ueS5jb20vZG9jL2N1cnJlbnQvYnVuZGxlcy9TZW5zaW9GcmFtZXdvcmtFeHRyYUJ1bmRsZS9hbm5vdGF0aW9ucy9zZWN1cml0eS5odG1sI2lzZ3JhbnRlZCcsXG4gICAgICAgICdAUGFyYW1Db252ZXJ0ZXInOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9idW5kbGVzL1NlbnNpb0ZyYW1ld29ya0V4dHJhQnVuZGxlL2Fubm90YXRpb25zL2NvbnZlcnRlcnMuaHRtbCcsXG4gICAgICAgICdAUm91dGUnOiAnaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvY3VycmVudC9yb3V0aW5nLmh0bWwjY3JlYXRpbmctcm91dGVzLWFzLWFubm90YXRpb25zJyxcbiAgICAgICAgJ0BTZWN1cml0eSc6ICdodHRwczovL3N5bWZvbnkuY29tL2RvYy9jdXJyZW50L2J1bmRsZXMvU2Vuc2lvRnJhbWV3b3JrRXh0cmFCdW5kbGUvYW5ub3RhdGlvbnMvc2VjdXJpdHkuaHRtbCNzZWN1cml0eSdcbiAgICB9O1xuXG4gICAgJGNvbnRyb2xsZXJDb2RlLmZpbmQoJy5obGpzLWRvY3RhZycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhbm5vdGF0aW9uID0gJCh0aGlzKS50ZXh0KCk7XG5cbiAgICAgICAgaWYgKGFubm90YXRpb25zW2Fubm90YXRpb25dKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoYW5jaG9yKGFubm90YXRpb25zW2Fubm90YXRpb25dLCBhbm5vdGF0aW9uKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFdyYXBzIFR3aWcncyB0YWdzXG4gICAgJHRlbXBsYXRlQ29kZS5maW5kKCcuaGxqcy10ZW1wbGF0ZS10YWcgPiAuaGxqcy1uYW1lJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRhZyA9ICQodGhpcykudGV4dCgpO1xuXG4gICAgICAgIGlmICgnZWxzZScgPT09IHRhZyB8fCB0YWcubWF0Y2goL15lbmQvKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9ICdodHRwczovL3R3aWcuc3ltZm9ueS5jb20vZG9jLzMueC90YWdzLycgKyB0YWcgKyAnLmh0bWwjJyArIHRhZztcblxuICAgICAgICAkKHRoaXMpLmh0bWwoYW5jaG9yKHVybCwgdGFnKSk7XG4gICAgfSk7XG5cbiAgICAvLyBXcmFwcyBUd2lnJ3MgZnVuY3Rpb25zXG4gICAgJHRlbXBsYXRlQ29kZS5maW5kKCcuaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSA+IC5obGpzLW5hbWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZnVuYyA9ICQodGhpcykudGV4dCgpO1xuXG4gICAgICAgIHZhciB1cmwgPSAnaHR0cHM6Ly90d2lnLnN5bWZvbnkuY29tL2RvYy8zLngvZnVuY3Rpb25zLycgKyBmdW5jICsgJy5odG1sIycgKyBmdW5jO1xuXG4gICAgICAgICQodGhpcykuaHRtbChhbmNob3IodXJsLCBmdW5jKSk7XG4gICAgfSk7XG59KTtcbiIsImltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvY29yZSc7XG5pbXBvcnQgcGhwIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BocCc7XG5pbXBvcnQgdHdpZyBmcm9tICdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90d2lnJztcblxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdwaHAnLCBwaHApO1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd0d2lnJywgdHdpZyk7XG5cbmhsanMuaW5pdEhpZ2hsaWdodGluZ09uTG9hZCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==