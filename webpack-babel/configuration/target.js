'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (type) {
  return type === 'server' ? 'node' : 'web';
};