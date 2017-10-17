'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configuration = require('./configuration');

exports.default = function (type) {
  return {
    module: {
      rules: (0, _configuration.rules)(type)
    },
    resolve: {
      extensions: (0, _configuration.extensions)(),
      modules: (0, _configuration.modules)()
    }
  };
}; // Configuration