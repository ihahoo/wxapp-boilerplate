'use strict';

import regeneratorRuntime from '../regenerator-runtime/runtime';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function createActionAsync(type, api, options) {
  var _this = this;

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function () {
      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch, getState) {
        var defaultOpts, actionObj, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                defaultOpts = {
                  name: type,
                  isCreateRequest: true,
                  isCreateSuccess: true,
                  isCreateFailure: true,
                  onRequest: undefined,
                  onSuccess: undefined,
                  onFailure: undefined
                };


                if (options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
                  Object.assign(defaultOpts, options);
                }
                if (options && typeof options === 'string') {
                  Object.assign(defaultOpts, { name: options });
                }

                actionObj = {};


                if (defaultOpts.isCreateRequest) {
                  actionObj.request = {
                    type: type,
                    subType: 'REQUEST',
                    async: { isAsync: true, name: defaultOpts.name }
                  };
                  dispatch(actionObj.request);
                }
                if (defaultOpts.onRequest && typeof defaultOpts.onRequest === 'function') {
                  defaultOpts.onRequest(dispatch, getState);
                }

                _context.prev = 6;
                _context.next = 9;
                return api.apply(undefined, args.concat([dispatch, getState]));

              case 9:
                res = _context.sent;

                if (defaultOpts.isCreateSuccess) {
                  actionObj.success = {
                    type: type,
                    subType: 'SUCCESS',
                    async: { isAsync: true, name: defaultOpts.name },
                    res: res
                  };
                  dispatch(actionObj.success);
                }
                if (defaultOpts.onSuccess && typeof defaultOpts.onSuccess === 'function') {
                  defaultOpts.onSuccess(dispatch, getState, res);
                }
                _context.next = 19;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context['catch'](6);

                if (defaultOpts.isCreateFailure) {
                  actionObj.failure = {
                    type: type,
                    subType: 'FAILURE',
                    async: { isAsync: true, name: defaultOpts.name },
                    err: _context.t0
                  };
                  dispatch(actionObj.failure);
                }
                if (defaultOpts.onFailure && typeof defaultOpts.onFailure === 'function') {
                  defaultOpts.onFailure(dispatch, getState, _context.t0);
                }

                return _context.abrupt('return', Promise.reject(actionObj));

              case 19:
                return _context.abrupt('return', Promise.resolve(actionObj));

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[6, 14]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  };
}
exports.default = createActionAsync;
