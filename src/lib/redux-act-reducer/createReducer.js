'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function createReducer(handlers, defaultState, options) {
  var opts = {
    autoAssign: false
  };
  if (options) {
    Object.assign(opts, options);
  }
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
    var action = arguments[1];

    if (action.type) {
      var handler = handlers[action.type];
      if (typeof handler === 'function') {
        if (!action.subType) {
          if (opts.autoAssign) {
            return Object.assign({}, state, handler(state, action));
          }
          return handler(state, action);
        }

        if (opts.autoAssign && action.async && action.async.isAsync) {
          if (action.subType === 'REQUEST' && !handler.toString().includes('function REQUEST()')) {
            var obj = {};
            obj[action.async.name] = {
              isFetching: true,
              err: undefined
            };
            return Object.assign({}, state, {
              asyncStatus: Object.assign({}, state.asyncStatus, _extends({}, obj))
            });
          }
          if (action.subType === 'FAILURE' && !handler.toString().includes('function FAILURE()')) {
            var _obj = {};
            _obj[action.async.name] = {
              isFetching: false,
              err: action.err
            };
            return Object.assign({}, state, {
              asyncStatus: Object.assign({}, state.asyncStatus, _extends({}, _obj))
            });
          }
        }

        var subHandlers = handler(state, action);
        var subHandler = subHandlers[action.subType];
        if (opts.autoAssign && action.async && action.async.isAsync && action.subType === 'SUCCESS') {
          var _obj2 = {};
          if (state.asyncStatus && state.asyncStatus[action.async.name]) {
            _obj2[action.async.name] = {
              isFetching: false,
              err: undefined
            };
          }
          var newState = void 0;
          if (typeof subHandler === 'function') {
            if (state.asyncStatus && state.asyncStatus[action.async.name]) {
              newState = Object.assign({}, state, _extends({
                asyncStatus: Object.assign({}, state.asyncStatus, _extends({}, _obj2))
              }, subHandler(state, action)));
            } else {
              newState = Object.assign({}, state, _extends({}, subHandler(state, action)));
            }
          } else if (state.asyncStatus && state.asyncStatus[action.async.name]) {
            newState = Object.assign({}, state, _extends({
              asyncStatus: Object.assign({}, state.asyncStatus, _extends({}, _obj2))
            }, subHandlers));
          } else {
            newState = Object.assign({}, state, _extends({}, subHandlers));
          }

          return newState;
        }

        if (typeof subHandler === 'function') {
          if (opts.autoAssign) {
            return Object.assign({}, state, subHandler(state, action));
          }
          return subHandler(state, action);
        }
      }
    }
    return state;
  };
}

exports.default = createReducer;