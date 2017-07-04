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


    loaders:[{
      //lea todo lo que sea jsx
      test:/\.jsx?$/,
      //o busque dentro de client
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      //babel
      query:{
        //react a es2015
         presets: ['es2015', 'stage-2', 'react'],
         plugins: ['babel-plugin-transform-decorators-legacy'],
      }
    }],
  },

  watch:true
};
