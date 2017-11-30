export function pull (callback) {
    const xhr = new XMLHttpRequest();
        xhr.open('get', '/admin/cuentas');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.onload = () => {
            if (xhr.status === 200) {
                
            return callback(xhr.response)
            } else {
           
            }
            return callback(false)
            }
        
    xhr.send();
}