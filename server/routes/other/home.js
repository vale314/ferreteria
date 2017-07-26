const express = require('express');
const router = new express.Router();
const path = require('path');


router.get('*', (req,res)=>{
  res.render('../../../dev/handlebars/views/index',{
    layout:false
  });
})


module.exports = router;
