/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppUi = __webpack_require__(5);

var _AppUi2 = _interopRequireDefault(_AppUi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App' },
        _react2.default.createElement(_AppUi2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(7);

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = __webpack_require__(8);

var _moment2 = _interopRequireDefault(_moment);

var _weatherLoader = __webpack_require__(9);

var _weatherLoader2 = _interopRequireDefault(_weatherLoader);

var _temperatureControl = __webpack_require__(10);

var _temperatureControl2 = _interopRequireDefault(_temperatureControl);

var _windSpeedControl = __webpack_require__(11);

var _windSpeedControl2 = _interopRequireDefault(_windSpeedControl);

var _cityInfoControl = __webpack_require__(12);

var _cityInfoControl2 = _interopRequireDefault(_cityInfoControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//Semantic-UI-React Components used


// Helper libraries


//Custom Controls


function validateLocation(latitude, longitude) {
	//This will ensure that the params are at least decimals
	var decimalPattern = new RegExp("(\-?(\d*)\.(\d*))$");

	var validLatitude = false;
	var validLongitude = false;

	//Lat & long have a value
	if (latitude && longitude) {
		if (decimalPattern.test(latitude)) {
			if (latitude >= -85.00000 && latitude <= 85.00000) {
				validLatitude = true;
			}
		}

		if (decimalPattern.test(longitude)) {
			if (longitude >= -180.00000 && longitude <= 180.00000) {
				validLongitude = true;
			}
		}
	}

	return { validLatitude: validLatitude, validLongitude: validLongitude };
}

var Main = function (_Component) {
	_inherits(Main, _Component);

	function Main(props) {
		_classCallCheck(this, Main);

		var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

		_this.state = {
			weatherInfo: null,
			apiKey: "53f9d8e4213222cf517d86dc406d67fc",
			errorMessage: null,
			modalOpen: true,
			lat: null,
			long: null,
			showLongitudeError: false,
			showLatitudeError: false
		};

		_this.handleWeatherInfoReset = _this.handleWeatherInfoReset.bind(_this);
		_this.makeWeatherApiCall = _this.makeWeatherApiCall.bind(_this);
		_this.handleLatitudeChange = _this.handleLatitudeChange.bind(_this);
		_this.handleLongitudeChange = _this.handleLongitudeChange.bind(_this);
		_this.validateInputValues = _this.validateInputValues.bind(_this);
		return _this;
	}

	// Lifecycle method


	_createClass(Main, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// console.log("Component Has Mounted Successfully");
		}
	}, {
		key: 'makeWeatherApiCall',
		value: function makeWeatherApiCall() {
			var self = this;
			self.setState({ modalOpen: false });
			_axios2.default.get('https://api.openweathermap.org/data/2.5/weather?lat=' + self.state.lat + '&lon=' + self.state.long + '&appid=' + self.state.apiKey + '&units=metric').then(function (res) {
				self.setState({
					weatherInfo: res.data
				});
				console.log(res);
			}).catch(function (error) {
				self.setState({ errorMessage: error.message });
				console.log(error);
			});
		}
	}, {
		key: 'handleWeatherInfoReset',
		value: function handleWeatherInfoReset() {
			this.setState({
				weatherInfo: null,
				modalOpen: true,
				lat: null,
				long: null,
				showLongitudeError: false,
				showLatitudeError: false
			});
		}
	}, {
		key: 'handleLatitudeChange',
		value: function handleLatitudeChange(event) {
			this.setState({
				lat: event.target.value
			});
		}
	}, {
		key: 'handleLongitudeChange',
		value: function handleLongitudeChange(event) {
			this.setState({
				long: event.target.value
			});
		}
	}, {
		key: 'validateInputValues',
		value: function validateInputValues() {
			var lat = this.state.lat;
			var long = this.state.long;

			var validatedFields = validateLocation(lat, long);
			console.log(validatedFields);
			if (validatedFields.validLatitude && validatedFields.validLongitude) {
				this.setState({
					showLatitudeError: false,
					showLongitudeError: false
				});

				this.makeWeatherApiCall(lat, long);
			} else {
				this.setState({
					showLatitudeError: !validatedFields.validLatitude,
					showLongitudeError: !validatedFields.validLongitude
				});
			}
		}

		/*
  	TODO:
  	*Write unit tests
  	*Write acceptance tests
  	*Write end-to-end tests
  	***bundle this shizz
  */

	}, {
		key: 'renderWeatherInfo',
		value: function renderWeatherInfo() {
			var weatherInfo = this.state.weatherInfo;
			var errorMessage = this.state.errorMessage;

			if (errorMessage) {
				return _react2.default.createElement(
					_semanticUiReact.Container,
					null,
					_react2.default.createElement(
						_semanticUiReact.Header,
						{ as: 'h1' },
						'Error:'
					),
					_react2.default.createElement(
						'p',
						null,
						errorMessage
					),
					_react2.default.createElement('br', null)
				);
			} else if (weatherInfo == null) {
				return _react2.default.createElement(_weatherLoader2.default, null);
			} else if (weatherInfo) {
				return _react2.default.createElement(
					_semanticUiReact.Grid,
					{ columns: 3, padded: true },
					_react2.default.createElement(
						_semanticUiReact.Grid.Row,
						null,
						_react2.default.createElement(
							_semanticUiReact.Grid.Column,
							{ width: 3 },
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									_semanticUiReact.Header,
									{ as: 'h1', style: { marginBottom: '0' } },
									_lodash2.default.head(weatherInfo.weather).main
								)
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement(
									'label',
									null,
									_react2.default.createElement(
										'i',
										null,
										_lodash2.default.head(weatherInfo.weather).description
									)
								)
							),
							_react2.default.createElement(
								'div',
								null,
								_react2.default.createElement('br', null),
								_react2.default.createElement(
									'label',
									null,
									'Calculated At:'
								),
								_react2.default.createElement('br', null),
								_react2.default.createElement(
									'span',
									null,
									_moment2.default.unix(weatherInfo.dt).format("dddd, MMMM Do YYYY, h:mm:ss a")
								)
							)
						)
					),
					_react2.default.createElement(
						_semanticUiReact.Grid.Row,
						null,
						_react2.default.createElement(
							_semanticUiReact.Grid.Column,
							null,
							_react2.default.createElement(_cityInfoControl2.default, { weatherInfo: weatherInfo })
						),
						_react2.default.createElement(
							_semanticUiReact.Grid.Column,
							null,
							_react2.default.createElement(_temperatureControl2.default, { weatherInfo: weatherInfo })
						),
						_react2.default.createElement(
							_semanticUiReact.Grid.Column,
							null,
							_react2.default.createElement(_windSpeedControl2.default, { weatherInfo: weatherInfo })
						)
					),
					_react2.default.createElement(
						_semanticUiReact.Grid.Row,
						null,
						_react2.default.createElement(
							_semanticUiReact.Grid.Column,
							null,
							_react2.default.createElement(
								_semanticUiReact.Button,
								{ secondary: true, onClick: this.handleWeatherInfoReset },
								_react2.default.createElement(_semanticUiReact.Icon, { name: 'refresh' }),
								' Refresh'
							)
						)
					)
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ style: { marginTop: '15px' } },
				_react2.default.createElement(
					_semanticUiReact.Modal,
					{ size: 'small', open: this.state.modalOpen },
					_react2.default.createElement(
						_semanticUiReact.Modal.Header,
						null,
						'Submit Location'
					),
					_react2.default.createElement(
						_semanticUiReact.Modal.Content,
						{ image: true },
						_react2.default.createElement(_semanticUiReact.Image, { wrapped: true, size: 'large', src: '../public/locationPin.svg' }),
						_react2.default.createElement(
							_semanticUiReact.Modal.Description,
							null,
							_react2.default.createElement(
								_semanticUiReact.Grid,
								{ columns: 12 },
								_react2.default.createElement(
									_semanticUiReact.Header,
									null,
									'Where in the world are you?'
								),
								_react2.default.createElement(
									'p',
									null,
									'We would like to give you accurate weather information'
								),
								_react2.default.createElement(
									'p',
									null,
									'Please enter your GPS coordinates'
								),
								_react2.default.createElement(
									_semanticUiReact.Grid.Row,
									null,
									_react2.default.createElement(
										_semanticUiReact.Grid.Column,
										{ width: 10 },
										_react2.default.createElement(_semanticUiReact.Input, { fluid: true, placeholder: 'Latitude', onChange: this.handleLatitudeChange })
									),
									_react2.default.createElement(
										_semanticUiReact.Grid.Column,
										{ width: 2 },
										this.state.showLatitudeError && _react2.default.createElement(
											_semanticUiReact.Label,
											{ basic: true, color: 'red', pointing: 'left' },
											'Invalid Latitude'
										)
									)
								),
								_react2.default.createElement(
									_semanticUiReact.Grid.Row,
									null,
									_react2.default.createElement(
										_semanticUiReact.Grid.Column,
										{ width: 10 },
										_react2.default.createElement(_semanticUiReact.Input, { fluid: true, placeholder: 'Longitude', onChange: this.handleLongitudeChange })
									),
									_react2.default.createElement(
										_semanticUiReact.Grid.Column,
										{ width: 2 },
										this.state.showLongitudeError && _react2.default.createElement(
											_semanticUiReact.Label,
											{ basic: true, color: 'red', pointing: 'left' },
											'Invalid Longitude'
										)
									)
								),
								_react2.default.createElement(
									_semanticUiReact.Grid.Row,
									null,
									_react2.default.createElement(
										_semanticUiReact.Grid.Column,
										{ width: 10 },
										_react2.default.createElement(
											_semanticUiReact.Button,
											{ fluid: true, type: 'submit', secondary: true, onClick: function onClick() {
													return _this2.validateInputValues();
												} },
											'Submit'
										)
									)
								)
							)
						)
					)
				),
				_react2.default.createElement(
					_semanticUiReact.Container,
					{ style: { borderRadius: '10px' } },
					this.renderWeatherInfo()
				)
			);
		}
	}]);

	return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WeatherLoader = function WeatherLoader() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_semanticUiReact.Loader, { active: true })
  );
};

exports.default = WeatherLoader;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemperatureControl = function (_Component) {
	_inherits(TemperatureControl, _Component);

	function TemperatureControl(props) {
		_classCallCheck(this, TemperatureControl);

		var _this = _possibleConstructorReturn(this, (TemperatureControl.__proto__ || Object.getPrototypeOf(TemperatureControl)).call(this, props));

		_this.state = {
			highTemp: _this.props.weatherInfo.main.temp_max,
			lowTemp: _this.props.weatherInfo.main.temp_min,
			temp: _this.props.weatherInfo.main.temp
		};
		return _this;
	}

	_createClass(TemperatureControl, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_semanticUiReact.Card,
				{ color: 'red' },
				_react2.default.createElement(
					_semanticUiReact.Card.Header,
					{ style: { backgroundColor: '#1b1c1d', color: 'white' } },
					_react2.default.createElement(
						'center',
						null,
						_react2.default.createElement(
							'h4',
							null,
							'Temp'
						)
					)
				),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					null,
					_react2.default.createElement(
						'section',
						{ style: { textAlign: 'left' } },
						_react2.default.createElement(
							'label',
							null,
							'High: ',
							this.state.highTemp,
							'\xB0c'
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							'Low: ',
							this.state.lowTemp,
							'\xB0c'
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							'Current: ',
							this.state.temp,
							'\xB0c'
						)
					)
				)
			);
		}
	}]);

	return TemperatureControl;
}(_react.Component);

exports.default = TemperatureControl;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WindSpeedControl = function (_Component) {
	_inherits(WindSpeedControl, _Component);

	function WindSpeedControl(props) {
		_classCallCheck(this, WindSpeedControl);

		var _this = _possibleConstructorReturn(this, (WindSpeedControl.__proto__ || Object.getPrototypeOf(WindSpeedControl)).call(this, props));

		_this.state = {
			windSpeed: _this.props.weatherInfo.wind.speed,
			windDirection: _this.props.weatherInfo.wind.deg
		};
		return _this;
	}

	_createClass(WindSpeedControl, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_semanticUiReact.Card,
				{ color: 'blue' },
				_react2.default.createElement(
					_semanticUiReact.Card.Header,
					{ style: { backgroundColor: '#1b1c1d', color: 'white' } },
					_react2.default.createElement(
						'center',
						null,
						_react2.default.createElement(
							'h4',
							null,
							'Wind'
						)
					)
				),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					null,
					_react2.default.createElement(
						'section',
						{ style: { textAlign: 'left' } },
						_react2.default.createElement(
							'label',
							null,
							'Speed: ',
							this.state.windSpeed,
							' m/sec'
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							'Direction: ',
							this.state.windDirection,
							'\xB0'
						),
						_react2.default.createElement('br', null)
					)
				)
			);
		}
	}]);

	return WindSpeedControl;
}(_react.Component);

exports.default = WindSpeedControl;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CityInfoControl = function (_Component) {
	_inherits(CityInfoControl, _Component);

	function CityInfoControl(props) {
		_classCallCheck(this, CityInfoControl);

		var _this = _possibleConstructorReturn(this, (CityInfoControl.__proto__ || Object.getPrototypeOf(CityInfoControl)).call(this, props));

		_this.state = {
			cityName: _this.props.weatherInfo.name,
			countryCode: _this.props.weatherInfo.sys.country
		};
		return _this;
	}

	_createClass(CityInfoControl, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_semanticUiReact.Card,
				{ color: 'green' },
				_react2.default.createElement(
					_semanticUiReact.Card.Header,
					{ style: { backgroundColor: '#1b1c1d', color: 'white' } },
					_react2.default.createElement(
						'center',
						null,
						_react2.default.createElement(
							'h4',
							null,
							'City Info'
						)
					)
				),
				_react2.default.createElement(
					_semanticUiReact.Card.Content,
					null,
					_react2.default.createElement(
						'section',
						{ style: { textAlign: 'left' } },
						_react2.default.createElement(
							'label',
							null,
							'Name: ',
							this.state.cityName
						),
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'label',
							null,
							'Country Code: ',
							this.state.countryCode
						)
					)
				)
			);
		}
	}]);

	return CityInfoControl;
}(_react.Component);

exports.default = CityInfoControl;

/***/ })
/******/ ]);