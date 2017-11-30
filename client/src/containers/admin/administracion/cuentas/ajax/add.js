export function  adder  (formData, callback) {
    
    const xhr = new XMLHttpRequest();
        xhr.open('post', '/admin/cuentas');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status === 200) {

            return callback(true)
            } else {
           
            }
            return callback(false)
            }
        
    xhr.send(formData);
    
    console.log(formData)

    return callback(true)
}
