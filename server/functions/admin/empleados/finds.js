const Empleados = require('mongoose').model('Empleados')

function finds (callback) {
    Empleados.find({}).then((user)=>{
        return callback(user)
    })
}

module.exports.finds = finds