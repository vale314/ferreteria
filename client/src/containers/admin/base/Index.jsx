import React from 'react';
import { connect } from "react-redux"

//componets
import BaseCompo from '../../../componets/admin/base/Index.jsx'
import Auth from '../../../modules/Auth'


//actions
import {HANDLE_TAP_HOME} from './actions/Open'
import {ROUTE} from './actions/Route'
//store
import store from '../../../redux/store'


@connect((store)=>{
  return{
    open:store.homeHome.open
  }
})

class Base extends React.Component {
  constructor(props){
    super(props)

    this.handleTap = this.handleTap.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleTap(){
    store.dispatch(HANDLE_TAP_HOME())
  }

  handleClick(route){
    store.dispatch(ROUTE(route,this.props))
  }

  render() {
    return (<BaseCompo
            handleTap={this.handleTap}
            open={this.props.open}
            handleClick={this.handleClick}
             />);
  }

}

export default Base;
