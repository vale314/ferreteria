import React from 'react';
import CuentasCompo from '../../../../componets/admin/administracion/cuentas/Header.jsx'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguage:store.adminSettings.adminLenguage
  }
})

class Cuentas extends React.Component {
  constructor(props){
    super(props)    
  }



  render() {
    return (<CuentasCompo
              adminLenguage={this.props.adminLenguage}
             />);
  }

}

export default Cuentas;
