import React from 'react';
import SettingsCompoPc from '../../../../componets/admin/config/settings/pc/Header.jsx'
import SettingsCompoPhone from '../../../../componets/admin/config/settings/phone/Header.jsx'

import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean,
    device:store.device.isMobile
  }
})


class SettingsHeader extends React.Component {
  constructor(props){
    super(props)
    
  }




  render() {
    let {device,adminLenguageBoolean} = this.props
    adminLenguageBoolean = Boolean(adminLenguageBoolean)
    if(device == 'true'){
      return(
       <SettingsCompoPhone
          adminLenguageBoolean={this.props.adminLenguageBoolean}
       />)
    }else{
      return(
       <SettingsCompoPc
          adminLenguageBoolean={this.props.adminLenguageBoolean}
       />)
    }
    
    
  }

}

export default SettingsHeader;
