import React from 'react';
import HomeCompo from '../../componets/home/Index.jsx'
import Auth from '../../modules/Auth'
import {LENGUAGES} from '../actions/Lenguages'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    lenguageUser:store.lenguageUser.lenguage
  }
})

class Home extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    document.body.className = 'background'
  }

  handleClick(event){
    this.props.dispatch(LENGUAGES(event))
  }
  render() {
    return (<HomeCompo
                handleClick={this.handleClick}
                lenguageUser={this.props.lenguageUser}
             />);
  }

}

export default Home;
