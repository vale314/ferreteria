const express = require('express');
const router = new express.Router();
const path = require('path');
const redis = require('redis');
const client = redis.createClient();
const Admin = require('mongoose').model('Admins')
const email = require('../../functions/admin/settings/email.js')

router.post('/settings/save', (req,res)=>{
  const body = req.body;
  client.hmset("homePage",body ,(err,resClient)=>{
    if(err)
      return res.status(400).end();
    return res.status(200).end();
  })
})

router.get('/',(req,res)=>{
   return res.render('../../../dev/handlebars/views/admin',{
            layout:false
          });
})

router.post('/settings/email',(req,res)=>{
  email.changeEmail(res.locals.email,req.body).then((res)=>{
     console.log(res)
  })
  res.status(200).end()
})


module.exports = router;
