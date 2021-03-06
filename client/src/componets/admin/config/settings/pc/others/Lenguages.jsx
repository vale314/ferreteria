import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Container, Divider, Header } from 'semantic-ui-react'


const CardExampleExpandable = ({adminLenguageBoolean,adminLenguage,handleClick,handleClickSaves}) => (
  <div>
    <Container textAlign='left'>
      <Card  style={{height:'0px'}}>
              <Header as="h3">
                  {adminLenguageBoolean ? 'Lenguage': 'Language' }
              </Header>
                      <FlatButton label="ES"
                      onTouchTap={()=>handleClick('ES')}
                        disabled={adminLenguage =='ES' ? true: false }/>

                      <FlatButton label="EN"
                      onTouchTap={()=>handleClick('EN')}
                        disabled={adminLenguage =='EN' ? true: false}/>
                      <FlatButton label="Save"
                      onTouchTap={()=>handleClickSaves()}
                              />              
        
      </Card>
    </Container>
   </div> 
);

export default CardExampleExpandable;
