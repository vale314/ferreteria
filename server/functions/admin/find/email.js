const Admin = require('mongoose').model('Admins')

async function findEmail(email){
    return new Promise ((resolve,reject)=>{
        Admin.findOne({email:email}).then((user)=>{
            return resolve (user)
        })
    })
}

module.exports.findEmail = findEmail