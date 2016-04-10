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

	var _custom = __webpack_require__(2);

	var _custom2 = _interopRequireDefault(_custom);

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

	        // Offset for Main Navigation
	        $('#nav').affix({
	            offset: {
	                top: 100
	            }
	        });
	    });
	})(jQuery);

/***/ }
/******/ ]);