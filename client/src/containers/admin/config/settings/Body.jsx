import React from 'react';
import SettingsCompo from '../../../../componets/admin/config/settings/Body.jsx'
import {LENGUAGES} from '../actions/Lenguage'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguage: store.adminLenguage.adminLenguage
  }
})

class SettingsBody extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){

    this.props.dispatch(LENGUAGES(event))
  }

  render() {
    return(
        <SettingsCompo
            handleClick={this.handleClick}
            adminLenguage={this.props.adminLenguage}
        />
          );
  }

}

export default SettingsBody;
