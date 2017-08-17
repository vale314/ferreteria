//dev
import React from 'react';

//componets
import SignOutCompoPc from '../../../componets/admin/menuRight/pc/SignOut.jsx'
import SignOutCompoPhone from '../../../componets/admin/menuRight/phone/SignOut.jsx'
//actions
import {REMOVE_TOKEN} from './function'

//connect
import {connect} from 'react-redux'

//import connect direct
import store from '../../../redux/store'


@connect((store)=>{
  return{
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean
  }
})

class Base extends React.Component {
  constructor(props){
    super(props)
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleHomeClick(e){
    if(e === '/adm/signout')
      return store.dispatch(REMOVE_TOKEN())
    this.props.history.replace(e)

  }

  render() {
    let {device,adminLenguageBoolean} = this.props
    adminLenguageBoolean = Boolean(adminLenguageBoolean)
    if(device == 'true'){
      return(
      <SignOutCompoPhone
        handleHomeClick={this.handleHomeClick}
        adminLenguageBoolean={this.props.adminLenguageBoolean}   
          
      />)
    }else{
      return(
      <SignOutCompoPc
        handleHomeClick={this.handleHomeClick}
        adminLenguageBoolean={this.props.adminLenguageBoolean}   
          
      />)
    }
  }
}

export default Base;
