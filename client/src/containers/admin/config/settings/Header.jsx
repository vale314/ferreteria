import React from 'react';
import SettingsCompo from '../../../../componets/admin/config/settings/Header.jsx'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguage:store.adminSettings.adminLenguage
  }
})


class SettingsHeader extends React.Component {
  constructor(props){
    super(props)
    
  }




  render() {
    return(
        <SettingsCompo
          adminLenguage={this.props.adminLenguage}
         />
          );
  }

}

export default SettingsHeader;
