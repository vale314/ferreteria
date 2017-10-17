// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

export default type => {
  if (type === 'server') {
    return './serverRender.js';
  }

  const entry = {
    main: []
  };


  entry.main.push('./app.jsx');

  return entry;
};
