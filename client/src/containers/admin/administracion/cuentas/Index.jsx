import React from 'react'
import CuentasContainer from '../../../../componets/admin/administracion/cuentas/pc/Body.jsx'
import {connect} from 'react-redux'
import {adder} from './ajax/add.js'
import {pull} from './ajax/pull.js'

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
                active:false,
                date:''
            },
            users:[]

        }
        this.handleClickView = this.handleClickView.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleClickActive = this.handleClickActive.bind(this)
    }

    componentWillMount(){
        pull((callback)=>{
            if(callback){
                
                this.setState({
                    users:callback
                })
                
                return
            }
            return
        })
    }

    handleClickView(){
        this.setState((prevState)=>({
            visible:!prevState.visible
        }))
        
    }
    


    onChange(e,name){

        if(e == 'ACTIVE')
            return this.handleClickActive()
        
        const user = this.state.user
        const value = e.target.value        
        user[name] = value
        
        this.setState({
            user
        })
        
    }

    onSubmit(e){
        e.preventDefault()
        const formData = this.state.user

        adder(JSON.stringify( formData ), (callback)=>{
            if (callback){
                return
            } 

        })
    }


    handleClickActive(){
        const user = this.state.user
        const value = 'active'

        user[value] = !user.active
    }
    render(){
        return(<CuentasContainer 
                 visible={this.state.visible} 
                 handleClickView={this.handleClickView} 
                 adminLenguageBoolean={this.props.adminLenguageBoolean}
                 onChange={this.onChange}
                 user={this.state}
                 onSubmit={this.onSubmit}
                 users={this.state.users}
                 />)
    }
}

export default Cuentas