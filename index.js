const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const config = require('./config/index.json');
const passport = require('passport');


require('./server/base/index').connect(config.dbUri);

require('./server/functions/admin/ini').init()



app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('./server/dev/static/'));
app.use(express.static('./client/dist/'));


app.use(passport.initialize());

const localLoginStrategy = require('./server/passport/login/login')



passport.use('local-login',localLoginStrategy);

const admRoutes = require('./server/routes/admin/admin');
app.use('/admin', admRoutes);

const otherRoutes = require('./server/routes/other/home');
app.use('/', otherRoutes);


app.listen(3001 /*process.env.PORT || 3000  ,*/ ,'192.168.1.76', () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
