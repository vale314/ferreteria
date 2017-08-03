import React from 'react';
import { Header, Segment} from 'semantic-ui-react'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';




const CardExampleExpandable = ({handleClick,personLenguage}) => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center'>
          {personLenguage=='ES' ? 'Introduccion' : 'Introduction'}
            <div style={{float:'right'}}>

            <FlatButton label="ES" style={{padding:'0px'}}
             onTouchTap={()=>handleClick('ES')}
              disabled={personLenguage =='ES' ? true: false }/>

            <FlatButton label="EN" style={{padding:'0px'}}
             onTouchTap={()=>handleClick('EN')}
              disabled={personLenguage =='EN' ? true: false}/>
            </div>
        </Header>
      </Segment>
  </div>
);

export default CardExampleExpandable;
