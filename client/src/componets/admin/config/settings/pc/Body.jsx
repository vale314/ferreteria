import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Container, Divider, Header } from 'semantic-ui-react'

import Lenguage from './others/Lenguages.jsx'


const CardExampleExpandable = ({adminLenguage,handleClick,handleClickSaves,adminLenguageBoolean}) => (
  <div>
        <Lenguage 
        handleClick={handleClick}
        handleClickSaves={handleClickSaves}
        adminLenguage={adminLenguage}
        adminLenguageBoolean={adminLenguageBoolean}/>
   </div> 
);

export default CardExampleExpandable;
