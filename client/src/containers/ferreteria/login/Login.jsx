import React from 'react';
import LoginCompo from '../../../componets/ferreteria/login/Login.jsx'

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      errors:{},
      user:{
          email:'',
          password:''
        }
    }
    this.home = this.home.bind(this);
    this.onChange = this.onChange.bind(this);
    this.processForm = this.processForm.bind(this);
  }

  home(){
    this.props.history.push('/admin')
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
    // quita
    event.preventDefault();

      // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // creamos una peticion
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // borra los estados de cualquier
        this.setState({
          errors: {}
        });

        // save the token
        localStorage.setItem('admin',xhr.response.token)


        console.log('The form is valid');
      } else {
        // failure

        // si ajax hubo un error lo guarad en const
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  componentWillMount(){
    document.body.className=''
  }

  render() {
    return (<LoginCompo
              onSubmit={this.processForm}
              home={this.home}
              user={this.state.user}
              onChange={this.onChange}
             />);
  }

}

export default Login;
