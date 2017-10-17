// Dependencies

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import CompressionPlugin from 'compression-webpack-plugin'
// Environment
const isProduction = process.env.NODE_ENV == `production `;
const isAnalyzer = process.env.ANALYZER  === 'true'

export default () => {
  const plugins = [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    })
  ];
  if(isProduction){
    plugins.push(
      new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        minChunks: m=> /node_modules/.test(m.context)
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize:true
      }),
      new OptimizeCssAssetsPlugin({
					assetNameRegExp: /\.optimize\.css$/g,
					cssProcessor: require('cssnano'),
					cssProcessorOptions: {
						discardComments: { removeAll: true },
					},
					canPrint: true,
      }),
      new ExtractTextPlugin({
        filename: 'style.css',
        disable: false,
        allChunks: true
      }),
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm:'gzip',
        test:/\.js$|\.css$|\.html$/,

      })
    )
  }


  return plugins;
};
