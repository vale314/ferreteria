import Auth from '../../../../modules/Auth'

export function authentication(props) {
      const xhr = new XMLHttpRequest();
      xhr.open('get', '/admin');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // set the authorization HTTP header
      xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            return
        }else{
          if(xhr.status === 401){
            Auth.desauthenticateUser()
            window.location.replace('/')
          }
        }
      });
      xhr.send();
 }
