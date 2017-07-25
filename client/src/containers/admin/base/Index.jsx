//dev
import React from 'react';
import { connect } from "react-redux"
import Rx  from '@reactivex/rxjs'

//componets
import BaseCompo from '../../../componets/admin/base/Index.jsx'
import Auth from '../../../modules/Auth'


//actions
import {HANDLE_TAP_HOME} from './actions/Open'
import {ROUTE} from './actions/Route'

//store
import store from '../../../redux/store'

//functions
import {authentication} from './functions/Ajax'

@connect((store)=>{
  return{
    open:store.adminBase.open,
    adminRoute:store.adminRoute.route
  }
})

class Base extends React.Component {
  constructor(props){
    super(props)

    this.handleTap = this.handleTap.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  ajax(){
      authentication(this.props)
  }

  handleTap(){
    store.dispatch(HANDLE_TAP_HOME())
  }

  handleClick(route){
    store.dispatch(ROUTE(route,this.props))
    // this.ajax()
  }

  componentWillMount(){
    // this.ajax()
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
