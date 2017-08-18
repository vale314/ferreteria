import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Container, Divider, Header } from 'semantic-ui-react'


import Language from './others/Language.jsx'


const CardExampleExpandable = ({adminLenguage,handleClick,handleClickSaves,adminLenguageBoolean}) => (
  <div>
    <Language 
      adminLenguage={adminLenguage}
      handleClick={handleClick}
      handleClickSaves={handleClickSaves}
      adminLenguageBoolean={adminLenguageBoolean}
    />
   </div> 
);

export default CardExampleExpandable;
