import {TOKEN_DROP} from  '../../actions/TokenRemove'

function AUTHENTICATION_AJAX() {
  return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/admin');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
              return resolve(false)
          }else{
            if(xhr.status === 401){
              return resolve(true)

            }
          }
        });
        xhr.send();
    })
 }

export function AJAX(){
  return function(dispatch){
    return new Promise((resolve,reject)=>{
      AUTHENTICATION_AJAX().then((state)=>{
        if (state){
          return dispatch(TOKEN_DROP())
        }else if(!state){
          return resolve(200)
        }
      })
    })
  }
}
