import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Container, Divider, Header ,Button, Icon, Image } from 'semantic-ui-react'
import * as Semantic from 'semantic-ui-react' 
import Lenguage from './others/Lenguages.jsx'
import IconImage from './others/Icon.jsx'

const CardExampleExpandable = ({adminLenguage,handleClick,handleClickSaves,adminLenguageBoolean,handleClickRoutes}) => (
  <div>
        <IconImage adminLenguageBoolean={adminLenguageBoolean}/>
        <Lenguage 
        handleClick={handleClick}
        handleClickSaves={handleClickSaves}
        adminLenguage={adminLenguage}
        adminLenguageBoolean={adminLenguageBoolean}
        handleClickRoutes={handleClickRoutes}/>
        <Container textAlign='right'>
          <Card  style={{height:'0px'}}>
                  <Header as="h3">
                        {adminLenguageBoolean ? 'Lenguage': 'Language' }
                  </Header>

                  <Button id='EMAIL' onClick={handleClickRoutes} content={adminLenguageBoolean ? 'Cambiar Email': 'Change Email'} />               
            
          </Card>
        </Container>
   </div> 
);

export default CardExampleExpandable;
