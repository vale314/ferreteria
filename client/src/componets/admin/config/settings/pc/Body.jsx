import React from 'react';
import {Card, CardActions,CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Container, Divider, Header } from 'semantic-ui-react'


import BodyEs from './en/Language.jsx'
import BodyEn from './es/Lenguage.jsx'


const CardExampleExpandable = ({adminLenguage,handleClick,handleClickSaves,adminLenguageBoolean}) => (
  <div>
    {adminLenguageBoolean ? 'Cuentas' : 'Accounts'}
    {
      adminLenguageBoolean ? 
        <BodyEs handleClick={handleClick}
        handleClickSaves={handleClickSaves}
        adminLenguage={adminLenguage}/>
        :
        <BodyEn handleClick={handleClick}
        handleClickSaves={handleClickSaves}
        adminLenguage={adminLenguage}/>
    }
    
    

   </div> 
);

export default CardExampleExpandable;
