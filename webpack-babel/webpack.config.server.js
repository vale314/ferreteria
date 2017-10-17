'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpackMerge = require('webpack-merge');

var _webpackMerge2 = _interopRequireDefault(_webpackMerge);

var _webpackConfig = require('./webpack.config.common');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _configuration = require('./configuration');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Type of Configuration


// Webpack Configuration
var type = 'server';

// Configuration
// Dependencies
exports.default = (0, _webpackMerge2.default)((0, _webpackConfig2.default)(type), {
  context: (0, _configuration.context)(type),
  entry: (0, _configuration.entry)(type),
  externals: (0, _configuration.externals)(type),
  name: (0, _configuration.name)(type),
  output: (0, _configuration.output)(type),
  plugins: (0, _configuration.plugins)(type),
  target: (0, _configuration.target)(type)
});