import Auth from '../../../../modules/Auth'

export function REMOVE_TOKEN(){

  return function(dispatch,getState){
          dispatch({type:'DESAUTHENTICATE'})
          dispatch({type:'HANDLE_TAP_HOME',open:false})
          localStorage.setItem('reduxState',JSON.stringify(getState()))

          Auth.desauthenticateUser()
          window.location.replace('/')
  }

 }
