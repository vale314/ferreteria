const express = require('express');
const router = new express.Router();


router.get('*', (req,res,next)=>{

  if(req.headers.referer != undefined){
     var referer = req.headers.referer
      referer = referer.includes('adm')
  }
 
   if (referer) {
        return res.render('../../../dev/handlebars/views/admin',{
            layout:false
          });
  }
        return res.render('../../../dev/handlebars/views/index',{
            layout:false
          });
 

      
})




module.exports = router;
