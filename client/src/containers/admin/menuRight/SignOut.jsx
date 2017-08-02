//dev
import React from 'react';

//componets
import SignOutCompo from '../../../componets/admin/menuRight/SignOut.jsx'

//actions
import {REMOVE_TOKEN} from './function'

//connect
import {connect} from 'react-redux'

//import connect direct
import store from '../../../redux/store'


@connect()

class Base extends React.Component {
  constructor(props){
    super(props)
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleHomeClick(e){
    if(e === '/adm/signout')
      return store.dispatch(REMOVE_TOKEN())
    this.props.history.replace(e)

  }

  render() {
    return (<SignOutCompo
              handleHomeClick={this.handleHomeClick}
             />);
  }

}

export default Base;
