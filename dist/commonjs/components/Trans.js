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

var _reactI18next = require("react-i18next");

var WrappedTrans =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(WrappedTrans, _React$Component);

  function WrappedTrans() {
    (0, _classCallCheck2.default)(this, WrappedTrans);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WrappedTrans).apply(this, arguments));
  }

  (0, _createClass2.default)(WrappedTrans, [{
    key: "render",
    value: function render() {
      var nextI18NextConfig = this.props.nextI18NextConfig;
      var i18n = nextI18NextConfig.i18n;
      return _react.default.createElement(_reactI18next.Trans, (0, _extends2.default)({}, this.props, {
        i18n: i18n
      }));
    }
  }]);
  return WrappedTrans;
}(_react.default.Component);

exports.default = WrappedTrans;
module.exports = exports.default;
module.exports.default = exports.default;