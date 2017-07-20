import React from 'react';
import LoginCompo from '../../../componets/admin/home/home.jsx'
import Auth from '../../../modules/Auth'

class Login extends React.Component {
  constructor(props){
    super(props)

  }

  // componentWillMount() {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('get', '/admin');
  //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //   // set the authorization HTTP header
  //   xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
  //   xhr.responseType = 'json';
  //   xhr.addEventListener('load', () => {
  //     if (xhr.status === 200) {
  //
  //     }else{
  //       if(xhr.status === 401){
  //         Auth.desauthenticateUser()
  //         location.reload()
  //       }
  //     }
  //   });
  //   xhr.send();
  // }

  render() {
    return (<LoginCompo
             />);
  }

}

export default Login;
