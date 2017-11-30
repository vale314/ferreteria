const express = require('express');
const router = new express.Router();
const path = require('path');
const redis = require('redis');
const client = redis.createClient();
const Admin = require('mongoose').model('Admins')
const email = require('../../functions/admin/settings/email.js')
const {finds} = require('../../functions/admin/empleados/finds.js')

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
     
  })
  res.status(200).end()
})

router.post('/cuentas', (req,res) => {
  console.log (req.body)
  return res.status(200).end()
})


router.get('/cuentas', (req,res)=>{
  finds((user)=>{
    return res.json(user).end()
  })
})
module.exports = router;
