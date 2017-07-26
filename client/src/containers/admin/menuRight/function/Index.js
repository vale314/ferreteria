import Auth from '../../../../modules/Auth'

export function REMOVE_TOKEN(){

      localStorage.removeItem('reduxState')
      Auth.desauthenticateUser()
      window.location.replace('/')
    
 }
