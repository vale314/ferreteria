import React from 'react';
import LoginCompo from '../../componets/home/Index.jsx'
import Auth from '../../modules/Auth'

class Login extends React.Component {
  constructor(props){
    super(props)

  }

  componentWillMount(){
    document.body.className = 'background'
  }

  render() {
    return (<LoginCompo
             />);
  }

}

export default Login;
