import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Container, Divider, Header } from 'semantic-ui-react'


import Lenguage from './others/Lenguages.jsx'
import IconImage from './others/Icon.jsx'



const CardExampleExpandable = ({adminLenguage,handleClick,handleClickSaves, adminLenguageBoolean, handleClickRoutes}) => (
  <div>
      <IconImage adminLenguageBoolean={adminLenguageBoolean} handleClickRoutes={handleClickRoutes} />
      <Divider />
      <Lenguage 
        handleClick={handleClick}
        handleClickSaves={handleClickSaves}
        adminLenguage={adminLenguage}
        adminLenguageBoolean={adminLenguageBoolean}/>
   </div> 
);

export default CardExampleExpandable;
