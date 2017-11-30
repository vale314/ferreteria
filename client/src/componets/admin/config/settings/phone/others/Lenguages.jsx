import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Container, Divider, Header } from 'semantic-ui-react'


const CardExampleExpandable = ({adminLenguage,handleClick,handleClickSaves,adminLenguageBoolean}) => (
  <div>
    <Container textAlign='left'>
      <Card  style={{height:'0px'}}>
              <Header as="h3">
                  {adminLenguageBoolean ? 'Lenguage': 'Language' }
              </Header>
                      <RaisedButton label="ES"
                      onTouchTap={()=>handleClick('ES')}
                        disabled={adminLenguage =='ES' ? true: false }/>

                      <RaisedButton label="EN"
                      onTouchTap={()=>handleClick('EN')}
                        disabled={adminLenguage =='EN' ? true: false}/>
                      <Button label="Save"
                      onTouchTap={()=>handleClickSaves()}
                              />
              <Header as="h3">
                  {adminLenguageBoolean ? 'Lenguage': 'Language' }
              </Header>               
        
      </Card>
    </Container>
   </div> 
);

export default CardExampleExpandable;
