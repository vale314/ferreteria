//dev
import React from 'react';
import { connect } from "react-redux"

//componets
import BaseCompo from '../../../componets/admin/base/Index.jsx'

//actions
import {RELOAD} from './actions'

@connect((store)=>{
  return{
    isReload:store.adminLogin.token
  }
})


class Base extends React.Component {
  constructor(props){
    super(props)

  }




  render() {
      return (<BaseCompo
                  isReload={this.props.isReload}
              />);
    }



}

export default Base;
