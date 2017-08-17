
function adminLenguage(lenguage){
        return(lenguage)
}

function adminLenguageBoolean(lenguage){
  if(lenguage == 'ES'){
    return true
  }else{
    return ""
  }

}

module.exports={
  adminLenguage:adminLenguage,
  adminLenguageBoolean:adminLenguageBoolean
}
