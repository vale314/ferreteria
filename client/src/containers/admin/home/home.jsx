import React from 'react';
import { connect } from "react-redux"

//componets
import Menu from '../../../componets/admin/home/home.jsx'
import Auth from '../../../modules/Auth'


//actions
import {HANDLE_TAP_HOME} from './actions'

//store
import store from '../../../redux/store'


@connect((store)=>{
  return{
    open:store.homeHome.open
  }
})

class Login extends React.Component {
  constructor(props){
    super(props)

    this.handleTap = this.handleTap.bind(this);
  }


  handleTap(){
    store.dispatch(HANDLE_TAP_HOME())
  }


  render() {
    return (<Menu
            handleTap={this.handleTap}
            open={this.props.open}
            children={this.props.children}
             />);
  }

}

export default Login;
