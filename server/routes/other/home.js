const express = require('express');
const router = new express.Router();


router.get('*', (req,res,next)=>{
  router.get('/admin',(req,res)=>{
    console.log('/admin')
  })
  if(req.headers.referer != undefined){
     var referer = req.headers.referer
      referer = referer.substring(referer.length-6, referer.length)
  }
 
  
   if (referer == 'admins') {
       
        return res.render('../../../dev/handlebars/views/admin',{
            layout:false
          });
  }
        return res.render('../../../dev/handlebars/views/index',{
            layout:false
          });
 

      
})




module.exports = router;
