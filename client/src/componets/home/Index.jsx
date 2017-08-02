import React from 'react';
import { Header, Segment} from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';




const CardExampleExpandable = ({handleClick,lenguageUser}) => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center'>
          {lenguageUser=='ES' ? 'Introduccion' : 'Introduction'}
            <div style={{float:'right'}}>

            <FlatButton label="ES" style={{padding:'0px'}}
             onTouchTap={()=>handleClick('ES')}
              disabled={lenguageUser =='ES' ? true: false }/>

            <FlatButton label="EN" style={{padding:'0px'}}
             onTouchTap={()=>handleClick('EN')}
              disabled={lenguageUser =='EN' ? true: false}/>
            </div>
        </Header>
      </Segment>
  </div>
);

export default CardExampleExpandable;
