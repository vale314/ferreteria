import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Container, Divider, Header } from 'semantic-ui-react'




const CardExampleExpandable = ({adminLenguage,handleClick,handleClickSaves,adminLenguageBoolean}) => (
  <div>
    <Divider horizontal hidden></Divider> 
    <Container textAlign='left'>
      <Card  style={{height:'0px'}}>
              <Header as="h3">
                 {adminLenguageBoolean ? 'Lenguage' : "Language"}
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
              <Header as="h3">
                {adminLenguageBoolean ? 'Lenguage' : "Language"}
              </Header>               
        
      </Card>
    </Container>
    <Container textAlign='right'>
      <Card  style={{height:'0px'}}>
               <Header as="h3">
                  {adminLenguageBoolean ? 'Lenguage' : "Language"}
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
               <Header as="h3">
                  {adminLenguageBoolean ? 'Lenguage' : "Language"}
              </Header>             
        
      </Card>
    </Container>
   </div> 
);

export default CardExampleExpandable;
