"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = waitFor;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULTS = {
  delay: 50,
  timeout: 1000
};
/**
 * Accepts a function to evaluate after delay until timeout.
 * @param {function} checkFn Function to provide return value to evaluate truthy/falsey
 * @param {Object{}} options
 * @param {number=} options.delay Millisecond delay between evaluations
 * @param {number=} options.timeout Total timeout threshold in milliseconds to keep trying
 * @return Promise.resolve(return from checkFn) || Promise.reject(error)
 */

function waitFor(checkFn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _objectSpread({}, DEFAULTS);

  var config = _objectSpread({}, DEFAULTS, {}, options);

  return new Promise(function (resolve, reject) {
    var now = Date.now();
    var timeoutId;

    function delayAndCheck() {
      if (Date.now() - now < config.timeout) {
        timeoutId = window.setTimeout(check, config.delay);
      } else {
        window.clearTimeout(timeoutId);
        reject(new Error('checkFn did not pass within timeout'));
      }
    }

    ;

    function check() {
      var result = checkFn();

      if (result) {
        resolve(result);
      } else {
        delayAndCheck();
      }
    }

    ;
    check();
  });
}