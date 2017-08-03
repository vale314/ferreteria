const mongoose = require('mongoose');

//tenemos un modulo que exportamos recibe a uri que es donde esta la base de datos
module.exports.connect = (uri) => {
    mongoose.Promise = global.Promise;

    var mongoDB = mongoose.connect(uri, {
        useMongoClient: true
    });

    mongoDB
        .then(function (db) {
            console.log('mongodb has been connected');
        })
        .catch(function (err) {
            console.log('error while trying to connect with mongodb');
        });

module.exports = mongoDB;


  // load models
  require('./models/empleados')
  require('./models/admin')
};
