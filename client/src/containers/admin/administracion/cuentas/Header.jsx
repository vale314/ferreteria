import React from 'react';
import CuentasCompoPc from '../../../../componets/admin/administracion/cuentas/pc/Header.jsx'
import CuentasCompoPhone from '../../../../componets/admin/administracion/cuentas/phone/Header.jsx'

import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean,
    device:store.device.isMobile
  }
})

class Cuentas extends React.Component {
  constructor(props){
    super(props)    
  }



  render() {
    let {device,adminLenguageBoolean} = this.props
    adminLenguageBoolean = Boolean(adminLenguageBoolean)
    if(device == 'true'){
      return(
       <CuentasCompoPhone
          adminLenguageBoolean={this.props.adminLenguageBoolean}
          lenguageM={'phone'}
       />)
    }else{
      return(
       <CuentasCompoPc
          adminLenguageBoolean={this.props.adminLenguageBoolean}
          lenguageM={'pc'}
       />)
    }
    
    
  }

}

export default Cuentas;
