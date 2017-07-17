import axios from "axios";

function post(formData,callback){
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/auth/login');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status === 200) {
      const object = {
        status:200,
        token:xhr.response.token
      }
      return callback(object)
    } else {
      const object = {
        status:400,
        errors:xhr.response.errors
      }
      return callback(object)
    }
  };
  xhr.send(formData);

}
export function postLogin(formData) {

   return function(dispatch,getState){
     post(formData,(callback)=>{
       console.log(callback)
       if(callback.status == 200){

            dispatch({type:'SAVE_STATE_ADMIN_LOGIN',state:200}),
            dispatch({type:'SAVE_TOKEN',token:callback.token}),
            dispatch({type:'ERROR_LOGIN',error:''}),

            localStorage.setItem('admin',callback.token),
            localStorage.setItem('reduxState',JSON.stringify(getState()))

        } else if(callback.status == 400) {

            dispatch({type:'ERROR_LOGIN',error:callback.errors}),
            dispatch({type:'SAVE_STATE_ADMIN_LOGIN',state:400}),

            localStorage.setItem('reduxState',JSON.stringify(getState()))
        }
     })




  }
}
