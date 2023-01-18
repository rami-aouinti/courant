(self["webpackChunk"] = self["webpackChunk"] || []).push([["search"],{

/***/ "./assets/js/jquery.instantSearch.js":
/*!*******************************************!*\
  !*** ./assets/js/jquery.instantSearch.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_window_dot_jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

/**
 * jQuery plugin for an instant searching.
 *
 * @author Oleg Voronkovich <oleg-voronkovich@yandex.ru>
 * @author Yonel Ceruto <yonelceruto@gmail.com>
 */
(function ($) {
  'use strict';

  String.prototype.render = function (parameters) {
    return this.replace(/({{ (\w+) }})/g, function (match, pattern, name) {
      return parameters[name];
    });
  }; // INSTANTS SEARCH PUBLIC CLASS DEFINITION
  // =======================================


  var InstantSearch = function InstantSearch(element, options) {
    this.$input = $(element);
    this.$form = this.$input.closest('form');
    this.$preview = $('<ul class="search-preview list-group">').appendTo(this.$form);
    this.options = $.extend({}, InstantSearch.DEFAULTS, this.$input.data(), options);
    this.$input.keyup(this.debounce());
  };

  InstantSearch.DEFAULTS = {
    minQueryLength: 2,
    limit: 10,
    delay: 500,
    noResultsMessage: 'No results found',
    itemTemplate: '\
                <article class="post">\
                    <h2><a href="{{ url }}">{{ title }}</a></h2>\
                    <p class="post-metadata">\
                       <span class="metadata"><i class="fa fa-calendar"></i> {{ date }}</span>\
                       <span class="metadata"><i class="fa fa-user"></i> {{ author }}</span>\
                    </p>\
                    <p>{{ summary }}</p>\
                </article>'
  };

  InstantSearch.prototype.debounce = function () {
    var delay = this.options.delay;
    var search = this.search;
    var timer = null;
    var self = this;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        search.apply(self);
      }, delay);
    };
  };

  InstantSearch.prototype.search = function () {
    var query = $.trim(this.$input.val()).replace(/\s{2,}/g, ' ');

    if (query.length < this.options.minQueryLength) {
      this.$preview.empty();
      return;
    }

    var self = this;
    var data = this.$form.serializeArray();
    data['l'] = this.limit;
    $.getJSON(this.$form.attr('action'), data, function (items) {
      self.show(items);
    });
  };

  InstantSearch.prototype.show = function (items) {
    var $preview = this.$preview;
    var itemTemplate = this.options.itemTemplate;

    if (0 === items.length) {
      $preview.html(this.options.noResultsMessage);
    } else {
      $preview.empty();
      $.each(items, function (index, item) {
        $preview.append(itemTemplate.render(item));
      });
    }
  }; // INSTANTS SEARCH PLUGIN DEFINITION
  // =================================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var instance = $this.data('instantSearch');
      var options = _typeof(option) === 'object' && option;
      if (!instance) $this.data('instantSearch', instance = new InstantSearch(this, options));
      if (option === 'search') instance.search();
    });
  }

  $.fn.instantSearch = Plugin;
  $.fn.instantSearch.Constructor = InstantSearch;
})(__webpack_provided_window_dot_jQuery);

/***/ }),

/***/ "./assets/search.js":
/*!**************************!*\
  !*** ./assets/search.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/jquery.instantSearch.js */ "./assets/js/jquery.instantSearch.js");
/* harmony import */ var _js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_jquery_instantSearch_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

$(function () {
  $('.search-field').instantSearch({
    delay: 100
  }).keyup();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_internals_add-to-unscopables_js-node_modules_core-js_internals_a-88c411","vendors-node_modules_core-js_modules_es_string_replace_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-eeaec9"], () => (__webpack_exec__("./assets/search.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvanF1ZXJ5Lmluc3RhbnRTZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyIkIiwiU3RyaW5nIiwicHJvdG90eXBlIiwicmVuZGVyIiwicGFyYW1ldGVycyIsInJlcGxhY2UiLCJtYXRjaCIsInBhdHRlcm4iLCJuYW1lIiwiSW5zdGFudFNlYXJjaCIsImVsZW1lbnQiLCJvcHRpb25zIiwiJGlucHV0IiwiJGZvcm0iLCJjbG9zZXN0IiwiJHByZXZpZXciLCJhcHBlbmRUbyIsImV4dGVuZCIsIkRFRkFVTFRTIiwiZGF0YSIsImtleXVwIiwiZGVib3VuY2UiLCJtaW5RdWVyeUxlbmd0aCIsImxpbWl0IiwiZGVsYXkiLCJub1Jlc3VsdHNNZXNzYWdlIiwiaXRlbVRlbXBsYXRlIiwic2VhcmNoIiwidGltZXIiLCJzZWxmIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwicXVlcnkiLCJ0cmltIiwidmFsIiwibGVuZ3RoIiwiZW1wdHkiLCJzZXJpYWxpemVBcnJheSIsImdldEpTT04iLCJhdHRyIiwiaXRlbXMiLCJzaG93IiwiaHRtbCIsImVhY2giLCJpbmRleCIsIml0ZW0iLCJhcHBlbmQiLCJQbHVnaW4iLCJvcHRpb24iLCIkdGhpcyIsImluc3RhbmNlIiwiZm4iLCJpbnN0YW50U2VhcmNoIiwiQ29uc3RydWN0b3IiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxVQUFVQSxDQUFWLEVBQWE7QUFDVjs7QUFFQUMsUUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFqQixHQUEwQixVQUFVQyxVQUFWLEVBQXNCO0FBQzVDLFdBQU8sS0FBS0MsT0FBTCxDQUFhLGdCQUFiLEVBQStCLFVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxJ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QixTQUFLLEVBQUU7QUFESSxHQURuQixFQUlLSixLQUpMO0FBS0gsQ0FOQSxDQUFELEMiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBqUXVlcnkgcGx1Z2luIGZvciBhbiBpbnN0YW50IHNlYXJjaGluZy5cbiAqXG4gKiBAYXV0aG9yIE9sZWcgVm9yb25rb3ZpY2ggPG9sZWctdm9yb25rb3ZpY2hAeWFuZGV4LnJ1PlxuICogQGF1dGhvciBZb25lbCBDZXJ1dG8gPHlvbmVsY2VydXRvQGdtYWlsLmNvbT5cbiAqL1xuKGZ1bmN0aW9uICgkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgU3RyaW5nLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC8oe3sgKFxcdyspIH19KS9nLCBmdW5jdGlvbiAobWF0Y2gsIHBhdHRlcm4sIG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbWV0ZXJzW25hbWVdO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICAvLyBJTlNUQU5UUyBTRUFSQ0ggUFVCTElDIENMQVNTIERFRklOSVRJT05cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHZhciBJbnN0YW50U2VhcmNoID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy4kaW5wdXQgPSAkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLiRmb3JtID0gdGhpcy4kaW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICB0aGlzLiRwcmV2aWV3ID0gJCgnPHVsIGNsYXNzPVwic2VhcmNoLXByZXZpZXcgbGlzdC1ncm91cFwiPicpLmFwcGVuZFRvKHRoaXMuJGZvcm0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgSW5zdGFudFNlYXJjaC5ERUZBVUxUUywgdGhpcy4kaW5wdXQuZGF0YSgpLCBvcHRpb25zKTtcblxuICAgICAgICB0aGlzLiRpbnB1dC5rZXl1cCh0aGlzLmRlYm91bmNlKCkpO1xuICAgIH07XG5cbiAgICBJbnN0YW50U2VhcmNoLkRFRkFVTFRTID0ge1xuICAgICAgICBtaW5RdWVyeUxlbmd0aDogMixcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgICBkZWxheTogNTAwLFxuICAgICAgICBub1Jlc3VsdHNNZXNzYWdlOiAnTm8gcmVzdWx0cyBmb3VuZCcsXG4gICAgICAgIGl0ZW1UZW1wbGF0ZTogJ1xcXG4gICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwb3N0XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgPGgyPjxhIGhyZWY9XCJ7eyB1cmwgfX1cIj57eyB0aXRsZSB9fTwvYT48L2gyPlxcXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicG9zdC1tZXRhZGF0YVwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWV0YWRhdGFcIj48aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPiB7eyBkYXRlIH19PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWV0YWRhdGFcIj48aSBjbGFzcz1cImZhIGZhLXVzZXJcIj48L2k+IHt7IGF1dGhvciB9fTwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICA8L3A+XFxcbiAgICAgICAgICAgICAgICAgICAgPHA+e3sgc3VtbWFyeSB9fTwvcD5cXFxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT4nXG4gICAgfTtcblxuICAgIEluc3RhbnRTZWFyY2gucHJvdG90eXBlLmRlYm91bmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVsYXkgPSB0aGlzLm9wdGlvbnMuZGVsYXk7XG4gICAgICAgIHZhciBzZWFyY2ggPSB0aGlzLnNlYXJjaDtcbiAgICAgICAgdmFyIHRpbWVyID0gbnVsbDtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2guYXBwbHkoc2VsZik7XG4gICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIEluc3RhbnRTZWFyY2gucHJvdG90eXBlLnNlYXJjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJC50cmltKHRoaXMuJGlucHV0LnZhbCgpKS5yZXBsYWNlKC9cXHN7Mix9L2csICcgJyk7XG4gICAgICAgIGlmIChxdWVyeS5sZW5ndGggPCB0aGlzLm9wdGlvbnMubWluUXVlcnlMZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuJHByZXZpZXcuZW1wdHkoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLiRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIGRhdGFbJ2wnXSA9IHRoaXMubGltaXQ7XG5cbiAgICAgICAgJC5nZXRKU09OKHRoaXMuJGZvcm0uYXR0cignYWN0aW9uJyksIGRhdGEsIGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgc2VsZi5zaG93KGl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIEluc3RhbnRTZWFyY2gucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgICAgICAgdmFyICRwcmV2aWV3ID0gdGhpcy4kcHJldmlldztcbiAgICAgICAgdmFyIGl0ZW1UZW1wbGF0ZSA9IHRoaXMub3B0aW9ucy5pdGVtVGVtcGxhdGU7XG5cbiAgICAgICAgaWYgKDAgPT09IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZpZXcuaHRtbCh0aGlzLm9wdGlvbnMubm9SZXN1bHRzTWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkcHJldmlldy5lbXB0eSgpO1xuICAgICAgICAgICAgJC5lYWNoKGl0ZW1zLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAkcHJldmlldy5hcHBlbmQoaXRlbVRlbXBsYXRlLnJlbmRlcihpdGVtKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBJTlNUQU5UUyBTRUFSQ0ggUExVR0lOIERFRklOSVRJT05cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGZ1bmN0aW9uIFBsdWdpbihvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gJHRoaXMuZGF0YSgnaW5zdGFudFNlYXJjaCcpO1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb247XG5cbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UpICR0aGlzLmRhdGEoJ2luc3RhbnRTZWFyY2gnLCAoaW5zdGFuY2UgPSBuZXcgSW5zdGFudFNlYXJjaCh0aGlzLCBvcHRpb25zKSkpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9uID09PSAnc2VhcmNoJykgaW5zdGFuY2Uuc2VhcmNoKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgJC5mbi5pbnN0YW50U2VhcmNoID0gUGx1Z2luO1xuICAgICQuZm4uaW5zdGFudFNlYXJjaC5Db25zdHJ1Y3RvciA9IEluc3RhbnRTZWFyY2g7XG5cbn0pKHdpbmRvdy5qUXVlcnkpO1xuIiwiaW1wb3J0ICcuL2pzL2pxdWVyeS5pbnN0YW50U2VhcmNoLmpzJztcblxuJChmdW5jdGlvbigpIHtcbiAgICAkKCcuc2VhcmNoLWZpZWxkJylcbiAgICAgICAgLmluc3RhbnRTZWFyY2goe1xuICAgICAgICAgICAgZGVsYXk6IDEwMCxcbiAgICAgICAgfSlcbiAgICAgICAgLmtleXVwKCk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=