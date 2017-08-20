import React from 'react';
import SettingsEmailCompoPc from '../../../../../componets/admin/config/settings/pc/email/index.jsx'
import SettingsEmailCompoPhone from '../../../../../componets/admin/config/settings/phone/email/index.jsx'

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
       <SettingsEmailCompoPhone
          adminLenguageBoolean={this.props.adminLenguageBoolean}
       />)
    }else{
      return(
       <SettingsEmailCompoPc
          adminLenguageBoolean={this.props.adminLenguageBoolean}
       />)
    }
    
    
  }

}

export default SettingsHeader;
