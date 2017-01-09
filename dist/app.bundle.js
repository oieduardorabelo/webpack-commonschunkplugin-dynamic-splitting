webpackJsonp([0,5],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _admin = __webpack_require__(178);

	var _admin2 = _interopRequireDefault(_admin);

	var _dashboard = __webpack_require__(180);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _settings = __webpack_require__(181);

	var _settings2 = _interopRequireDefault(_settings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App() {
	  return _react2.default.createElement(
	    'main',
	    null,
	    _admin2.default,
	    _dashboard2.default,
	    _settings2.default
	  );
	};

	_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector("#RootApp"));

/***/ }
]);