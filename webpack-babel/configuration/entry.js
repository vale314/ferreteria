'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Environment
var isDevelopment = process.env.NODE_ENV !== 'production';

exports.default = function (type) {
  if (type === 'server') {
    return './serverRender.js';
  }

  var entry = {
    main: []
  };

  entry.main.push('./app.jsx');

  return entry;
};