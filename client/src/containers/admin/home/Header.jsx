import React from 'react';
import Base from '../../../componets/admin/home/Header.jsx'
class Adm extends React.Component {
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
  //         this.props.history.push('/')
  //       }
  //     }
  //   });
  //   xhr.send();
  // }

  render() {
    return(
        <Base />
          );
  }

}

export default Adm;
