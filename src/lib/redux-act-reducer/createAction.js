"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function createAction(type) {
  for (var _len = arguments.length, argNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    argNames[_key - 1] = arguments[_key];
  }

  if (argNames.length > 0) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var action = {};
      argNames.forEach(function (arg, index) {
        action[argNames[index]] = args[index];
      });
      action.type = type;
      return action;
    };
  }

  return function (data) {
    var action = void 0;
    if (data) {
      action = Object.assign(data, { type: type });
    } else {
      action = { type: type };
    }
    return action;
  };
}

exports.default = createAction;