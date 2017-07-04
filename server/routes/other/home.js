const express = require('express');
const router = new express.Router();
const path = require('path');




router.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, '../../../server/dev/static/', 'index.html'));
})


module.exports = router;
