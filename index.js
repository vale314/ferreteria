const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const passport = require('passport');
const exphbs  = require('express-handlebars');
const path = require('path')



//config
const config = require('./config/index.json');



//initalize
require('./server/base/mongoDb').connect(config.dbUri);
require('./server/base/redis').connect();

require('./server/functions/admin/ini').init()


//engine setup views
app.engine('.hbs',exphbs({
  extname: '.hbs'
}))

//view engine
app.set('views', path.join(__dirname,'./server/dev/handlebars/views'))
app.set('view engine','hbs')


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('./server/dev/static/'));
app.use(express.static('./client/dist/'));


app.use(passport.initialize());

const localLoginStrategy = require('./server/passport/login/login')

passport.use('local-login',localLoginStrategy);

const authCheckMiddlewareAdmin = require('./server/middleware/admin-auth.js')
app.use('/admin',authCheckMiddlewareAdmin)

const phoneCheckMiddleware = require('./server/middleware/phone-Check.js')
app.use('*',phoneCheckMiddleware)


const admRoutes = require('./server/routes/login/login');
app.use('/auth', admRoutes);

const otherRoutes = require('./server/routes/other/home');
app.use('/', otherRoutes);





app.listen(3001 /*process.env.PORT || 3000  ,*/ ,'192.168.1.76', () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
