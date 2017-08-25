import React from 'react'
import {connect} from 'react-redux'

import EmailCompo from '../../../../../componets/admin/config/settings/pc/others/Email.jsx'
import * as email  from '../ajax/Email.jsx'
import {routes}  from '../functions'

@connect((store)=>{
    return{
        adminLenguageBoolean:store.adminSettings.adminLenguageBoolean

    }
})

class EmailBodyChange extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                
                email:'',
                password:''
            }
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClickRoutes = this.handleClickRoutes.bind(this)
    }

    onChange(e){
        const user = this.state.user;
        const name = e.target.name;
        user[name] = e.target.value;
        this.setState({
            user
        })
    }

    onSubmit(event){
        event.preventDefault();
        email.post(this.state.user).then((state)=>{
            console.log(state)
        })
    }

    componentWillMount(){
       
    }

    handleClickRoutes(e){
        e.preventDefault();
        routes(e.target.id,this.props.history.push,this.props.match.url)
    }

    render(){
        const {adminLenguageBoolean} = this.props
        return(
        <EmailCompo 
            onChange={this.onChange} 
            user={this.state.user} 
            onSubmit={this.onSubmit}
            handleClickRoutes={this.handleClickRoutes}
            adminLenguageBoolean={adminLenguageBoolean}
            />
            
        )
    }
}


export default EmailBodyChange;