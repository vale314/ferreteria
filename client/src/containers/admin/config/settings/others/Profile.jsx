import React from 'react'
import ProfileCompoPc from '../../../../../componets/admin/config/settings/pc/others/Profile.jsx'
import {connect} from 'react-redux'

@connect((store)=>{
    return{
        device:store.device.isMobile
    }
})

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                firstName:'',
                MiddleName:'',
                LastName:''
            }
        }
    this.onChange = this.onChange.bind(this)
        
    }
    
    onChange(e){
        console.log(e.target.value)
    }

    render(){
        const {device} = this.props
        if(device == 'true'){
            return(
                <ProfileCompoPc 
                    onChange={this.onChange}
                    user={this.state.user}
                />
            )
        }else{
            return(
                <ProfileCompoPc
                    onChange={this.onChange}
                    user={this.state.user}
                />
            )
        }
    }

}


export default Profile