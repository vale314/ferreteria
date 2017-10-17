//funciones
const isMobile = require('../dev/handlebars/mobile')

//exportamos el siguienete callback llamado
module.exports = (req, res, next) => {

    res.locals.isMobile = isMobile.isMobile(req.headers['user-agent'])

    return next();

};
