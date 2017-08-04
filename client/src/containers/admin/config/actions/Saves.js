import Auth from '../../../../modules/Auth'

function post(formData,callback){
  const xhr = new XMLHttpRequest();
  xhr.open('post', '/admin/settings/save');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
  xhr.onload = () => {
    if (xhr.status === 200) {

      return callback(xhr.status)
    } else {

      return callback(xhr.status)
    }
  };

  xhr.send(JSON.stringify(formData));

}

export function SAVES() {

   return function(dispatch,getState){
     return new Promise((resolve,reject)=>{

         post(getState().adminSettings,(callback)=>{
           if(callback === 200)
              resolve(true)
            resolve(false)
         })

     })

   }
 }
