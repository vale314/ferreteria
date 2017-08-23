export const post = (formData)=>{
  return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
  xhr.open('post', '/admin/settings/email');
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
  xhr.onload = () => {
    if (xhr.status === 200) {

      return resolve(xhr.status)
    } else {

      return resolve(xhr.status)
    }
  };

  xhr.send(JSON.stringify(formData));
  })
}