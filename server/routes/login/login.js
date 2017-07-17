const express = require('express');
const router = new express.Router();
const passport = require('passport')

router.post('/login',(req,res, next)=>{
  passport.authenticate('local-login',(err,token,userData)=>{
    if(err){
      if (err.name === 'IncorrectCredentialsError') {

        if(err.email === 'Incorrect The Email'){
          return res.status(400).json({
            success:false,
            errors: err
          })

        }

        if(err.password === 'Incorrect The Password'){
          return res.status(400).json({
            success:false,
            errors: err
          })
        }

        return res.status(400).json({
          success: false,
        });
      }

    }
    return res.status(200).json({
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);

})


router.get('/hello',(req,res)=>{
  res.status(200).end()
})

module.exports = router;
