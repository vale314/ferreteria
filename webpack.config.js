const webpack =require('webpack')
const path = require('path');

module.exports ={
  //entran los archivos como jsx
  entry:path.join(__dirname, 'client/src/app.jsx'),

  output:{
    //loa rchivos de salida donde se encontraran
    path: path.join(__dirname, 'client/dist/js'),
    // con que nombre
    filename:'app.js',
  },
  resolve:{
    modules:['node_modules','./client'],
    extensions:['.js','.json','.jsx'],
    descriptionFiles:['package.json'],
  },
  module : {
    rules:[
      {
          test:/(\.js|.jsx)$/,
          //o busque dentro de client
          include: path.join(__dirname, '/client/src'),
          loader: 'babel-loader',
          exclude:/(node_modules)/,      
            options:{
              presets: [['es2015',{"modules":false}], 'stage-2', 'react','es2017','stage-3'],
              plugins:[
                "transform-decorators-legacy",
                "transform-es2015-destructuring",
              ],
            },
          
  
      },
      {
          test: /\.svg$/,
          loader: 'react-svg-loader',
          query: {
              jsx: true
            }  
      }
    ],
  },
   plugins: 

        process.env.NODE_ENV ? [
          
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production'),
            },
          }),
          new webpack.optimize.OccurrenceOrderPlugin(),
          // > Minimize JS
          new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
          }),
        ]:[
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify(false),
            },
          }),
        ],
  cache:false,
       

  watch:true
};  

