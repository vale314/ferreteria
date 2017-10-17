'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (type) {
  return type === 'server' ? _path2.default.resolve(__dirname, '../../src/server') : _path2.default.resolve(__dirname, '../../client/src');
}; // Dependencies