'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var _extractTextWebpackPlugin2 = _interopRequireDefault(_extractTextWebpackPlugin);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

var _optimizeCssAssetsWebpackPlugin2 = _interopRequireDefault(_optimizeCssAssetsWebpackPlugin);

var _webpackBundleAnalyzer = require('webpack-bundle-analyzer');

var _compressionWebpackPlugin = require('compression-webpack-plugin');

var _compressionWebpackPlugin2 = _interopRequireDefault(_compressionWebpackPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Environment
var isProduction = process.env.NODE_ENV == 'production '; // Dependencies

var isAnalyzer = process.env.ANALYZER === 'true';

exports.default = function () {
  var plugins = [new _extractTextWebpackPlugin2.default({
    filename: 'style.css',
    disable: false,
    allChunks: true
  })];
  if (isProduction) {
    plugins.push(new _webpack2.default.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function minChunks(m) {
        return (/node_modules/.test(m.context)
        );
      }
    }), new _webpack2.default.optimize.UglifyJsPlugin({
      minimize: true
    }), new _optimizeCssAssetsWebpackPlugin2.default({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: { removeAll: true }
      },
      canPrint: true
    }), new _extractTextWebpackPlugin2.default({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }), new _webpack2.default.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }), new _webpack2.default.optimize.AggressiveMergingPlugin(), new _compressionWebpackPlugin2.default({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/

    }));
  }

  return plugins;
};