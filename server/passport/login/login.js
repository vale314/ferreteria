const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const Admin = require('mongoose').model('Admins')
const jsw = require('jsonwebtoken')
const config = require('../../../config/index')

module.exports= new LocalStrategy({
  //exportamos un new PassportLocalStrategy
  usernameField: 'email',
  //le decimos que el campo username es igual al email
  passwordField: 'password',
  session: false,
  passReqToCallback: true
},(req, email, password, done)=>{

    Admin.findOne({ email: email }, function(err, admin) {
      if (err) { return done(err); }
      if (!admin) {
        const error = new Error()
        error.name = ('IncorrectCredentialsError')
        error.email = ('Incorrect The Email')
        return done(error);
      }

       return admin.comparePassword(password,(errPassword, isMatch)=>{
           if(errPassword){
             return done(errPassword)
           }
           if(!isMatch){
             const error = new Error()
             error.name = ('IncorrectCredentialsError')
             error.password =('Incorrect The Password')
             return done(error);
           }

           const token = jsw.sign(admin.id,config.jwtSecret)
           return done(null, token, admin.name);
       })


    });
  }
);
