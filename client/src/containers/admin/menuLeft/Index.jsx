//dev
import React from 'react';
import { connect } from "react-redux"

//componets
import MenuPc from '../../../componets/admin/menu/pc/Index.jsx'
import MenuPhone from '../../../componets/admin/menu/phone/Index.jsx'
//actions
import {HANDLE_TAP_HOME} from './actions/Open'
import {ROUTE} from './actions/Route'

//store
import store from '../../../redux/store'

//functions
import {AJAX} from './actions/Ajax'

@connect((store)=>{
  return{
    open:store.adminBase.open,
    device:store.device.isMobile,
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean
  }
})

class Base extends React.Component {
  constructor(props){
    super(props)
    this.handleTap = this.handleTap.bind(this);
    this.handleClick = this.handleClick.bind(this);
    


  }

  ajax(){
      this.props.dispatch(AJAX()).then((state)=>{})
}

  handleTap(){
    store.dispatch(HANDLE_TAP_HOME())
  }

  handleClick(route){
    store.dispatch(ROUTE(route,this.props))
    this.ajax()
  }

  componentWillMount(){
     this.ajax()
  }

  render() {
    let {device,adminLenguageBoolean} = this.props
    adminLenguageBoolean = Boolean(adminLenguageBoolean)
    console.log(device == 'true')
    if(device == 'true'){
      return(
      <MenuPhone
         handleTap={this.handleTap}
         open={this.props.open}
         handleClick={this.handleClick}
         adminLenguageBoolean={this.props.adminLenguageBoolean}   
          
      />)
    }else{
      return(
      <MenuPc
        handleTap={this.handleTap}
        open={this.props.open}
        handleClick={this.handleClick}
        adminLenguageBoolean={this.props.adminLenguageBoolean}   
          
      />)
    }
  }
  
}

export default Base;
