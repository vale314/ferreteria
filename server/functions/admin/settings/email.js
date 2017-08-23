const find = require('../find/email')
const Admin = require('mongoose').model('Admins')

function changeEmail(email,body){
    const password = body.password
    const newEmail = body.email 
    return new Promise((resolve,reject)=>{
        find.findEmail(email).then((user)=>{
            comparePassword(user,password).then((res)=>{
                if (!res){
                    return resolve(false)
                }
                change(user.id,newEmail).then((status)=>{
                    if(!status){
                        return resolve (false)
                    }
                    return resolve(true)
                })
            })
        })
    })
}

function comparePassword(user, password){
    return new Promise ((resolve,reject)=>{
    user.comparePassword(password,(err,res)=>{
                return resolve(res)
            })
        })
}

function change(id,email){
    return new Promise((resolve,reject)=>{
        Admin.update({_id:id},{$set:{email:email}},(err,user)=>{
            if(err){
                console.log(err)
                return resolve(false)
            }
    
            return resolve (true)
        })
    })
}

module.exports.changeEmail= changeEmail