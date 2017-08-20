import React from 'react';
import BasePc from '../../../componets/admin/home/pc/Header.jsx'
import BasePhone from '../../../componets/admin/home/phone/Header.jsx'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean
  }
})

class Adm extends React.Component {
  constructor(props){
    super(props)    
  }




  render() {
      let {device,adminLenguageBoolean} = this.props
      adminLenguageBoolean = Boolean(adminLenguageBoolean)
      if(device == 'true'){
        return(
        <BasePc
            adminLenguageBoolean={this.props.adminLenguageBoolean}
            
        />)
      }else{
        return(
        <BasePhone
            adminLenguageBoolean={this.props.adminLenguageBoolean}
            
        />)
      }
    
  }
  
}

export default Adm;
