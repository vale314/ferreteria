import React from 'react'
import EmailCompo from '../../../../../componets/admin/config/settings/pc/others/Email.jsx'
import * as email  from '../ajax/Email.jsx'
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

    render(){
        return(
        <EmailCompo onChange={this.onChange} user={this.state.user} onSubmit={this.onSubmit}/>
        )
    }
}


export default EmailBodyChange;