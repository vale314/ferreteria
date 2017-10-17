// Dependencies
import path from 'path';

export default type => {
  if (type === 'server') {
    return {
      filename: 'server.js',
      path: path.resolve(__dirname, '../../server/dist/js'),
      libraryTarget: 'commonjs2'
    };
  }

  return {
    filename: '[name].app.js',
    path: path.resolve(__dirname, '../../client/dist/js'),
    publicPath: '/js/'
  };
};
