const redis = require('redis')

//redis
module.exports.connect=()=>{
  const client = redis.createClient();

  client.on('connect',()=>{
    console.log('Reddis')
  })

  client.on('error',()=>{
    console.log('error')
  })

}
