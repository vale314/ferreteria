import React from 'react';
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




const CardExampleExpandable = ({home, user, onChange, onSubmit, errors}) => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center' onClick={home}  >
            Admin
        </Header>
      </Segment>
      <form action="/" onSubmit={onSubmit}>


      <div className='Field' >
        <TextField
                  floatingLabelText="Email"
                  name="email"
                  hintText="Email"
                  id='Field'
                  onChange={onChange}
                  value={user.email}
                  required
                  type='email'
                  errorText={errors.email}
                />
      </div>

      <div className='Field' >
      <TextField
                floatingLabelText="Password"
                name="password"
                id='Field'
                type='password'
                onChange={onChange}
                value={user.password}
                errorText={errors.password}
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
