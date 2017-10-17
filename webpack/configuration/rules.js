// Dependencies
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

export default type => {
  const rules = [
    {
      test: /(\.js|.jsx)$/,
      exclude: /node_modules/,
      use:{
              loader: 'babel-loader',
              options:{
                presets: ['es2015', 'stage-2', 'react','es2017','stage-3'],
                plugins:[
                  "transform-decorators-legacy",
                  "transform-es2015-destructuring"
                ]
              }

            }
    }
  ];

  if (!isDevelopment) {
    rules.push({
      test: /\.(css|scss)?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ],
        publicPath: '../../client/dist/js'
      })
    });
  } else {
    rules.push({
      test: /\.(css|scss)?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ],
        publicPath: '../../client/dist/js'
      })
      
    });
  }

  return rules;
};
