/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)['default'];

	var _dp = __webpack_require__(2);

	var _dp2 = _interopRequireDefault(_dp);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	(function ($) {
	    // console.log('noss');

	    $(document).ready(function () {
	        // $('.sidebar-collapse').on('mouseenter', function(e){
	        // 	console.log('in', e.currentTarget);
	        // 	$(e.currentTarget).parents('.level-1').eq(0).addClass('bg-info');

	        // }).on('mouseout', function(e){
	        // 	console.log('out',e.currentTarget);
	        // 	$(e.currentTarget).parents('.level-1').eq(0).removeClass('bg-info');
	        // });

	        $('#scrollspy').on('activate.bs.scrollspy', function (e) {
	            // console.log('spy', e);
	        });

	        var searchHighlightOptions = {
	            'exact': 'partial',
	            'style_name_suffix': false,
	            'highlight': '.guide-search-index'
	        };

	        $('#guide-search-input').on('keyup change input', $.debounce(200, function () {
	            var $input = $(this);
	            var query = $input.val();
	            var queryObj;

	            resetSearch();

	            if (query !== '' && typeof query !== 'undefined') {
	                queryObj = $.extend(searchHighlightOptions, { 'keys': query });

	                $(document).SearchHighlight(queryObj);

	                $('#sidebar-search').addClass('guide-search-active');

	                hideSectionsWithoutResults();
	            } else {
	                $('#sidebar-search').removeClass('guide-search-active');
	            }
	        }));

	        $('#guide-search-control').on('click', function () {
	            $('#sidebar-search').removeClass('guide-search-active');
	            $('#guide-search-input').val('').trigger('change');
	        });

	        $('#sidebar-search .dropdown-menu').on('click', function (e) {
	            e.stopPropagation();
	        });

	        $('#search-scope').on('change', function () {
	            if ($(this).is(':checked')) {
	                searchHighlightOptions['highlight'] = 'pre .token';
	            } else {
	                searchHighlightOptions['highlight'] = '.guide-search-index';
	            }

	            $('#guide-search-input').trigger('change');
	        });

	        $('#search-exact').on('change', function () {
	            if ($(this).is(':checked')) {
	                searchHighlightOptions['exact'] = 'exact';
	            } else {
	                searchHighlightOptions['exact'] = 'partial';
	            }
	            $('#guide-search-input').trigger('change');
	        });
	    });

	    function resetSearch() {
	        $('.hide.hide-section').removeClass('hide').removeClass('hide-section');

	        $('.no-results').addClass('hide');

	        $('.hilite').each(function () {
	            var hilite = $(this);
	            var txt_el = hilite[0].previousSibling;
	            if (txt_el && txt_el.nodeType == 3) txt_el.data += hilite.text();else {
	                hilite.before(hilite.text());
	                txt_el = hilite[0].previousSibling;
	            }
	            if (hilite[0].nextSibling && hilite[0].nextSibling.nodeType == 3) {
	                txt_el.data += hilite[0].nextSibling.data;
	                $(hilite[0].nextSibling).remove();
	            }
	            hilite.remove();
	        });

	        $(document).SearchHighlight({});
	    }

	    function hideSectionsWithoutResults() {

	        $('.guide-sub-section').each(function () {
	            var $this = $(this);
	            var hasResults = $this.find('.hilite').length > 0;
	            if (!hasResults) {
	                $this.addClass('hide').addClass('hide-section');
	                $('#' + $this.attr('id') + '-nav').addClass('hide').addClass('hide-section');
	            }
	        });

	        $('.guide-section').each(function () {
	            var $this = $(this);
	            var hasResults = $this.find('.hilite').length > 0;
	            if (!hasResults) {
	                $this.addClass('hide').addClass('hide-section');
	                $('#' + $this.attr('id') + '-nav').addClass('hide').addClass('hide-section');
	            }
	        });

	        var noResultsFound = !$('.guide-section:not(.hide)').length;
	        if (noResultsFound) {
	            $('.no-results').removeClass('hide');
	        } else {
	            $('.no-results').addClass('hide');
	        }
	    }
	})(jQuery);

/***/ }
/******/ ]);