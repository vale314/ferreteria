import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Button} from 'semantic-ui-react'
import EmailPc from '../../pc/others/Email.jsx'

const EmailPhone=({onSubmit,onChange,errors,user,handleClickRoutes,adminLenguageBoolean})=>(
    
    <div>
        <EmailPc 
            onSubmit={onSubmit}
            onChange={onChange}
            errors={errors}
            user={user}
            handleClickRoutes={handleClickRoutes}
            adminLenguageBoolean={adminLenguageBoolean}
        />
    </div>  
)
 


export default EmailPhone;