import React from 'react';
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




const CardExampleExpandable = ({home, user, onChange, onSubmit, errors}) => (
    <div>
      <form action="/" onSubmit={onSubmit}>


      <div className='Field' >
        <TextField
                  floatingLabelText="Nuevo Email"
                  name="email"
                  hintText="Email"
                  id='Field'
                  onChange={onChange}
                  required
                  type='email'
                />
      </div>

      <div className='Field' >
      <TextField
                floatingLabelText="Password"
                name="password"
                id='Field'
                type='password'
                onChange={onChange}
                required
              />
      </div>
      <div className='Button' >
        <RaisedButton type="submit" label="Login" buttonStyle={{borderRadius: '15px'}} className="buttonHome" primary />
      </div>
    </form>
  </div>
);

export default CardExampleExpandable;
