function isMobile(detect){
  console.log(process.env.NODE_ENV)

  return (/mobile/i.test(detect))

}


module.exports={
  isMobile:isMobile
}
