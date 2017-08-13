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
  module : {


    loaders:[
        {
        //lea todo lo que sea jsx
          test:/(\.js|.jsx)$/,
          //o busque dentro de client
          include: path.join(__dirname, '/client/src'),
          loader: 'babel-loader',
          //babel
          query:{
            //react a es2015
             presets: [['es2015',{"modules":false}], 'stage-2', 'react','es2017','stage-0','stage-3'],
             plugins: ['babel-plugin-transform-decorators-legacy',"transform-es2015-destructuring", ["transform-object-rest-spread",{"useBuiltIns":true}]],
          }
      },
      {
        test: /\.svg$/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015','react',"stage-2"]
            }
          },
          {
            loader: 'react-svg-loader',
            query: {
              jsx: true
            }
          },


       ]
     },
    ],
  },

  watch:true
};
