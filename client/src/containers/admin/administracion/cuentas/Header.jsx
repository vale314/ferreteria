import React from 'react';
import CuentasCompoPc from '../../../../componets/admin/administracion/cuentas/common/Header.jsx'

import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean,
  }
})

class Cuentas extends React.Component {
  constructor(props){
    super(props)    
  }



  render() {

      return(
       <CuentasCompoPc
          adminLenguageBoolean={this.props.adminLenguageBoolean}
       />)
    
    
    
  }

}

export default Cuentas;
