'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Environment
var isDevelopment = process.env.NODE_ENV !== 'production'; // Dependencies

exports.default = function (type) {
  var rules = [{
    test: /(\.js|.jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'stage-2', 'react', 'es2017', 'stage-3'],
        plugins: ["transform-decorators-legacy", "transform-es2015-destructuring"]
      }

    }
  }];

  if (!isDevelopment) {
    rules.push({
      test: /\.(css|scss)?$/,
      use: _extractTextWebpackPlugin2.default.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
        publicPath: '../../client/dist/js'
      })
    });
  } else {
    rules.push({
      test: /\.(css|scss)?$/,
      use: _extractTextWebpackPlugin2.default.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
        publicPath: '../../client/dist/js'
      })

    });
  }

  return rules;
};