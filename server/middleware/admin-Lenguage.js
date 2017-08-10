//funciones
const adminLenguage = require('../dev/handlebars/adminLenguage')
const redis = require('redis');
const client = redis.createClient();

//exportamos el siguienete callback llamado
module.exports = (req, res, next) => {
    client.hgetall('homePage',(err,homePage)=>{
      if(err)
         res.locals.adminLenguage = adminLenguage.adminLenguage('EN')
       res.locals.adminLenguage = adminLenguage.adminLenguage(homePage.adminLenguage)
    
    return next();
    })

};
