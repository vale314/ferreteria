//dev
import React from 'react';
import { connect } from "react-redux"

//componets
import Menu from '../../../componets/admin/menu/Index.jsx'
import Reload from '../../../componets/admin/reload/Header.jsx'

//actions
import {HANDLE_TAP_HOME} from './actions/Open'
import {ROUTE} from './actions/Route'

//store
import store from '../../../redux/store'

//functions
import {AJAX} from './actions/Ajax'

@connect((store)=>{
  return{
    open:store.adminBase.open,
    device:store.device.isMobile
  }
})

class Base extends React.Component {
  constructor(props){
    super(props)
    this.handleTap = this.handleTap.bind(this);
    this.handleClick = this.handleClick.bind(this);



  }

  ajax(){
      this.props.dispatch(AJAX()).then((state)=>{})
}

  handleTap(){
    store.dispatch(HANDLE_TAP_HOME())
  }

  handleClick(route){
    store.dispatch(ROUTE(route,this.props))
    this.ajax()
  }

  componentWillMount(){
     this.ajax()
  }

  render() {

      return (<Menu
              handleTap={this.handleTap}
              open={this.props.open}
              handleClick={this.handleClick}
               />);

  }

}

export default Base;
