const express = require('express');
const router = new express.Router();





router.get('*', (req,res,next)=>{
  if(req.headers.referer != undefined){
     var referer = req.headers.referer
      referer = referer.includes('adm')
  }

  
 
   if (referer) {
        return res.render('../../../dev/handlebars/views/admin',{
            NODE_ENV:process.env.NODE_ENV,
            layout:false
          });
  }
        return res.render('../../../dev/handlebars/views/index',{
            NODE_ENV:process.env.NODE_ENV,
            layout:false
          });
 

      
})





module.exports = router;
