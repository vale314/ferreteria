import Auth from '../../../modules/Auth'

export function TOKEN_DROP(){

  return function(dispatch,getState){
          Auth.desauthenticateUser()
          window.location.replace('/')

          dispatch({type:'DESAUTHENTICATE'})
          dispatch({type:'HANDLE_TAP_HOME',open:false})
          localStorage.setItem('reduxState',JSON.stringify(getState()))

  }

 }
