//dependecies
import React from 'react';
import { connect } from "react-redux"
import PropTypes from 'prop-types'

//componets
import LoginCompo from '../../../componets/admin/login/Index.jsx'
import Auth from '../../../modules/Auth'
import {postLogin} from  './actions'

//store
import store from '../../../redux/store'


@connect((store) => {
  return {
    errors:store.adminLogin.error
  };
})

class Login extends React.Component {
  static propTypes={
      history: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired
  }
  constructor(props){
    super(props)
    this.state={
      user:{
          email:'',
          password:''
        }
    }

    this.home = this.home.bind(this);
    this.onChange = this.onChange.bind(this);
    this.processForm = this.processForm.bind(this);
  }




  home(state){
    if(state == 200){
      // return this.props.history.replace('/')
       document.location.href = '/'
       document.body.className=''
    }
  }

  onChange(e){
    const user = this.state.user;
    const name = e.target.name;
    user[name] = e.target.value;

    this.setState({
      user
    })

  }


  processForm(event) {
    event.preventDefault();

      // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    store.dispatch(postLogin(formData))
    .then((state)=>{
      return this.home(state)
    })
}

  render() {
    return (<LoginCompo
              onSubmit={this.processForm}
              home={this.home}
              user={this.state.user}
              onChange={this.onChange}
              errors={this.props.errors}
             />);
  }

}


export default Login;
