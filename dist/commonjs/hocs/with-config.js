"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _default = function _default(WrappedComponent, config) {
  var WithConfig =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(WithConfig, _React$Component);

    function WithConfig() {
      (0, _classCallCheck2.default)(this, WithConfig);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithConfig).apply(this, arguments));
    }

    (0, _createClass2.default)(WithConfig, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, this.props, {
          nextI18NextConfig: config
        }));
      }
    }]);
    return WithConfig;
  }(_react.default.Component);

  WithConfig.displayName = "withNextI18NextConfig(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")");
  return WithConfig;
};

exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;