"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ = _interopRequireDefault(require("."));

describe('waitFor', function () {
  describe('with default options', function () {
    describe('success', function () {
      it('should return the eval result after a delay',
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var expected, currentValue, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                expected = 'Bindlestick Candysack';
                currentValue = '';
                window.setTimeout(function () {
                  currentValue = expected;
                }, 900);
                _context.next = 5;
                return (0, _["default"])(function () {
                  return currentValue;
                });

              case 5:
                result = _context.sent;
                expect(result).toBe(expected);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    });
    describe('failure', function () {
      it('should return a rejected promise after the timeout threshold elapses',
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        var expected, currentValue, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                expected = 'Bumblebee Caddyshack';
                currentValue = '';
                _context2.prev = 2;
                _context2.next = 5;
                return (0, _["default"])(function () {
                  return currentValue;
                });

              case 5:
                result = _context2.sent;
                expect('You have encountered the extremely sad path. If you find yourself here, you broke something.').toBe('This test to pass.');
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                expect(_context2.t0).toEqual(new Error('checkFn did not pass within timeout'));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      })));
    });
  });
  describe('with custom options', function () {
    describe('success', function () {
      it('should return the eval result using a custom delay value',
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        var expected, currentValue, result;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                expected = 'Bendycar Crumplezone';
                currentValue = '';
                window.setTimeout(function () {
                  currentValue = expected;
                }, 25);
                _context3.next = 5;
                return (0, _["default"])(function () {
                  return currentValue;
                }, {
                  delay: 5
                });

              case 5:
                result = _context3.sent;
                expect(result).toBe(expected);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
      it('should return the eval result within a custom timeout threshold',
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var expected, currentValue, result;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                expected = 'Bootyshorts Cutiepie';
                currentValue = '';
                window.setTimeout(function () {
                  currentValue = expected;
                }, 25);
                _context4.next = 5;
                return (0, _["default"])(function () {
                  return currentValue;
                }, {
                  timeout: 26
                });

              case 5:
                result = _context4.sent;
                expect(result).toBe(expected);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      })));
      it('should return the eval result within a custom timeout threshold using a custom delay value',
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        var expected, currentValue, result;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                expected = 'Bumpercar Cacklepatch';
                currentValue = '';
                window.setTimeout(function () {
                  currentValue = expected;
                }, 25);
                _context5.next = 5;
                return (0, _["default"])(function () {
                  return currentValue;
                }, {
                  delay: 5,
                  timeout: 26
                });

              case 5:
                result = _context5.sent;
                expect(result).toBe(expected);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })));
    });
    describe('failure', function () {
      it('should return a rejected promise if the check function returns truthy after the delay time',
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6() {
        var expected, currentValue, result;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                expected = 'Thunderdome Masterblast';
                currentValue = '';
                window.setTimeout(function () {
                  currentValue = expected;
                }, 11);
                _context6.prev = 3;
                _context6.next = 6;
                return (0, _["default"])(function () {
                  return currentValue;
                }, {
                  delay: 10,
                  timeout: 12
                });

              case 6:
                result = _context6.sent;
                expect('You have encountered the extremely sad path. If you find yourself here, you broke something.').toBe('This test to pass.');
                _context6.next = 13;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](3);
                expect(_context6.t0).toEqual(new Error('checkFn did not pass within timeout'));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[3, 10]]);
      })));
    });
  });
});