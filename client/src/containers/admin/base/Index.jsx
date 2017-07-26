//dev
import React from 'react';
import { connect } from "react-redux"

//componets
import BaseCompo from '../../../componets/admin/base/Index.jsx'




class Base extends React.Component {
  constructor(props){
    super(props)

  }



  render() {
    return (<BaseCompo
            />);
  }

}

export default Base;
