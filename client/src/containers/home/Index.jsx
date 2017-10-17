import React from 'react';
import HomeCompo from '../../componets/home/Index.jsx'
import Auth from '../../modules/Auth'
import {LENGUAGES} from '../actions/Lenguages'
import {connect} from 'react-redux'

@connect((store)=>{
  return{
    personLenguage:store.personLenguage.personLenguage
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
                personLenguage={this.props.personLenguage}
             />);
  }

}

export default Home;
