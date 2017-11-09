import React from 'react'
import CuentasContainer from '../../../../componets/admin/administracion/cuentas/pc/Body.jsx'
import {connect} from 'react-redux'



@connect((store)=>{
  return{
    adminLenguageBoolean:store.adminSettings.adminLenguageBoolean
  } 

})



class Cuentas extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visible:false,
            user:{
                name:'',
                email:'',
                active:'',
                date:''
            }

        }
        this.handleClickView = this.handleClickView.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    handleClickView(){
        this.setState({
            visible:!this.state.visible
        })
        
    }

    onChange(e,name){

        
        const user = this.state.user
        const value = e.target.value        
        user[name] = value
        
        this.setState({
            user
        })
        
    }

    render(){
        return(<CuentasContainer 
                 visible={this.state.visible} 
                 handleClickView={this.handleClickView} 
                 adminLenguageBoolean={this.props.adminLenguageBoolean}
                 onChange={this.onChange}
                 user={this.state}
                 />)
    }
}

export default Cuentas