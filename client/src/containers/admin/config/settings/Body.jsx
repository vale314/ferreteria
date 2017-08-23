import React from 'react';
import SettingsCompoPc from '../../../../componets/admin/config/settings/pc/Body.jsx'
import SettingsCompoPhone from '../../../../componets/admin/config/settings/phone/Body.jsx'

import {LENGUAGES} from '../actions/Lenguage'
import {SAVES} from '../actions/Saves'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguage:store.adminSettings.adminLenguage,
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean,
    device:store.device.isMobile
  }
})

class SettingsBody extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickSaves = this.handleClickSaves.bind(this)
  }

  handleClick(event){

    this.props.dispatch(LENGUAGES(event))
  }

  handleClickSaves(){
    this.props.dispatch(SAVES()).then((state)=>{
        if(state)
            return window.location.reload();
        return(0)
    })
  }
  
  render() {
      let {device,adminLenguageBoolean} = this.props
      adminLenguageBoolean = Boolean(adminLenguageBoolean)
      if(device == 'true'){
        return(
        <SettingsCompoPhone
            handleClick={this.handleClick}
            adminLenguage={this.props.adminLenguage}
            handleClickSaves={this.handleClickSaves}
            adminLenguageBoolean={this.props.adminLenguageBoolean}
            device={device}
        />)
      }else{
        return(
        <SettingsCompoPc
            handleClick={this.handleClick}
            adminLenguage={this.props.adminLenguage}
            handleClickSaves={this.handleClickSaves}
            adminLenguageBoolean={this.props.adminLenguageBoolean}
            
        />)
      }
    }

}

export default SettingsBody;
