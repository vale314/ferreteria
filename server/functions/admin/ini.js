const Admin = require('mongoose').model('Admins')

module.exports.init= () =>{
      const userData = {
        email: "admin@hotmail.com",
        password: "classs",
        name: "Valentine"
      };
       const newUser = new Admin(userData);

      const promise = newUser.save()
      promise.then(
        console.log('restaurado')
      )


      }
