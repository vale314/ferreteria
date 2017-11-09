
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const EmpleadosSchema = new mongoose.Schema({
  email:{
    type: String,
    index:true,
    unique: true
  },

  password:{type:String, default:''},
  name:{type:String, default: ''},
  date:{type:String, default:''},
  active:{type:Boolean, default:'true'}
});




EmpleadosSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

EmpleadosSchema.pre('save', function saveHook(next) {



  const empleados = this;



  if (!empleados.isModified('password')) return next();


  return bcrypt.genSalt(10,(saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(empleados.password, salt, (hashError, hash) => {

      if (hashError) { return next(hashError); }

      empleados.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('Empleados', EmpleadosSchema);
