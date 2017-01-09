webpackJsonp([4,5],{

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _helper = __webpack_require__(179);

	var _helper2 = _interopRequireDefault(_helper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  'section',
	  null,
	  _react2.default.createElement(
	    'h1',
	    null,
	    'Admin'
	  ),
	  _react2.default.createElement(
	    'p',
	    null,
	    _helper2.default.calc(1, 2)
	  )
	);

/***/ },

/***/ 179:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  calc: function calc(a, b) {
	    return a + b;
	  }
	};

/***/ }

});