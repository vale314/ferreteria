import React from 'react';
import Base from '../../../componets/admin/home/Header.jsx'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguage:store.adminSettings.adminLenguage
  }
})

class Adm extends React.Component {
  constructor(props){
    super(props)    
  }




  render() {
    return(
        <Base
             adminLenguage={this.props.adminLenguage}
         />

          );
  }

}

export default Adm;
