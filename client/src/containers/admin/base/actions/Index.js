export function TOKEN_DROP(){

  return function(dispatch,getState){
      const token = getState().adminLogin.token
      if(token){
        return dispatch({type:"RELOAD",action:true})
      }
      if(!token){
        return dispatch({type:"RELOAD",action:false})
      }
  }

 }
