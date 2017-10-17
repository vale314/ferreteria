'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (type) {
  if (type === 'server') {
    return {
      filename: 'server.js',
      path: _path2.default.resolve(__dirname, '../../server/dist/js'),
      libraryTarget: 'commonjs2'
    };
  }

  return {
    filename: '[name].app.js',
    path: _path2.default.resolve(__dirname, '../../client/dist/js'),
    publicPath: '/js/'
  };
}; // Dependencies