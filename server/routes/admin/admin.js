const express = require('express');
const router = new express.Router();
const path = require('path');
const redis = require('redis');
const client = redis.createClient();

router.post('/settings/save', (req,res)=>{
  const body = req.body;
  client.hmset("homePage",body ,(err,resClient)=>{
    if(err)
      return res.status(400).end();
    return res.status(200).end();
  })
})


module.exports = router;
