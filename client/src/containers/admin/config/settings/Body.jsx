import React from 'react';
import SettingsCompo from '../../../../componets/admin/config/settings/Body.jsx'
import {LENGUAGES} from '../actions/Lenguage'
import {SAVES} from '../actions/Saves'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    adminLenguage: store.adminSettings.adminLenguage
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
          return console.log(state)
    })
  }
  render() {
    return(
        <SettingsCompo
            handleClick={this.handleClick}
            adminLenguage={this.props.adminLenguage}
            handleClickSaves={this.handleClickSaves}
        />
          );
  }

}

export default SettingsBody;
