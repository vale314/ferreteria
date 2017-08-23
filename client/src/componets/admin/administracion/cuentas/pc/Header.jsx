import React from 'react';
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




const CardExampleExpandable = ({adminLenguageBoolean,lenguageM}) => (
  <div>
      <Header as='h2' textAlign='center'>
        {adminLenguageBoolean ? 'Cuentas' : 'Accounts'}
      </Header>
  </div>
);

export default CardExampleExpandable;
