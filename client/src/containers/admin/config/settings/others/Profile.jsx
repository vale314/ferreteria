import React from 'react'
import ProfileCompoPc from '../../../../../componets/admin/config/settings/pc/others/Profile.jsx'
import {connect} from 'react-redux'
import {routes}  from '../functions'


@connect((store)=>{
    return{
        device:store.device.isMobile,
        adminLenguageBoolean: store.adminSettings.adminLenguageBoolean
    }
})

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                firstName:'',
                middleName:'',
                lastName:'',
                company:'',
                direction:'',
                showDirection:false,
                descriptionCompany:'',
            },
            errors:{
                firstName:false,
                middleName:false,
                lastName:false,
                company:false,
                direction:false,
                descriptionCompany:false,
                alert:false
            },
            length:{
                firstName:15,
                middleName:30,
                lastName:30,
                company:50,
                direction:30,
                descriptionCompany:250,
            }
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleClickRoutes = this.handleClickRoutes.bind(this)
        this.onClickCheck = this.onClickCheck.bind(this)
        this.message = this.message.bind(this)
    }
    
    onChange(e){
        const name = e.target.name
        const user = this.state.user
        const length = e.target.id
        const lenghtState = this.state.length
        const errors = this.state.errors
        const value = e.target.value
        
        if(user[name].length > lenghtState[name]){
            errors['alert'] = true
             return this.setState({
                        errors
                    })
            
        }else{
            errors['alert'] = false
             this.setState({
                errors
            })
            
        }
        

            user[name] = e.target.value
            this.setState({
                user
             })
        
        
        return

    }



    message(e){
        const user = this.state.user
        const name = e.target.name
        
        return
    }
    
    onClickCheck(e,data){
        const user = this.state.user
        user[data.name] = !this.state.user.showDirection
        this.setState({
            user
        })
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state.user)
    }

    handleClickRoutes(e){
        e.preventDefault();
        routes(e.target.id,this.props.history.push,this.props.match.url)
    }

    render(){
        let {device,adminLenguageBoolean} = this.props
        adminLenguageBoolean = Boolean(adminLenguageBoolean)  
        if(device == 'true'){
            return(
                <ProfileCompoPc 
                    onChange={this.onChange}
                    user={this.state.user}
                    onSubmit={this.onSubmit}
                    adminLenguageBoolean={adminLenguageBoolean}
                    handleClickRoutes={this.handleClickRoutes}
                    onClickCheck={this.onClickCheck}
                />
            )
        }else{
            return(
                <ProfileCompoPc
                    onChange={this.onChange}
                    user={this.state.user}
                    onSubmit={this.onSubmit}
                    adminLenguageBoolean={adminLenguageBoolean}
                    handleClickRoutes={this.handleClickRoutes}
                    onClickCheck={this.onClickCheck}
                />
            )
        }
    }

}


export default Profile