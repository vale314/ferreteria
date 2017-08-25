import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Button} from 'semantic-ui-react'
const Email=({onSubmit,onChange,errors,user,handleClickRoutes,adminLenguageBoolean})=>(
    <div>
      <form onSubmit={onSubmit}>
      <div className='Field'>
            <TextField
                style={{paddingTop:'3px'}}
                floatingLabelText="Email"
                name="email"
                onChange={onChange}
                className='Field'
                required
                type="email"
                value={user.email}
            />
        </div>
        <div className='Field'>
            <TextField
                style={{paddingTop:'3px'}}
                floatingLabelText="Password"
                name="password"
                onChange={onChange}
                className='Field'
                required
                value={user.password}
            />
        </div>
        <div className='Button'>
            <Button id='BACK' onClick={handleClickRoutes} content={adminLenguageBoolean ? 'Volver': 'Back'} />
            <RaisedButton type='submit' label={adminLenguageBoolean ? 'Cambiar': 'Change'} primary/>
        </div>    
      </form>  
    </div>  
)
 


export default Email;