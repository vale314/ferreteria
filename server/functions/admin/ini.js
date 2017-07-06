const Admin = require('mongoose').model('Admins')

module.exports.init= () =>{
      const userData = {
        email: "admin@hotmail.com",
        password: "cisco",
        name: "Valentine"
      };

      Admin.remove({},(err)=>{
        if(err)
          console.log(err)
      }).then(()=>{
        const newUser = new Admin(userData);
        const promise = newUser.save()
        promise.then(()=>{
            console.log('Restaurado')
          }
        )
      })




      }
