import React from 'react';
//semantic-ui-react
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'
import { Switch, Route, Miss} from 'react-router-dom'


  //dependencies
import Menu from '../menu/Index.jsx'

//routes
import HeaderRoutes from './routes/HeadersRoutes.jsx'
import BodyRoutes from './routes/BodyRoutes.jsx'

const CardExampleExpandable = ({handleTap,open,handleClick}) => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center'>
          <Menu handleTap={handleTap} open={open} handleClick={handleClick}/>
            <HeaderRoutes />
        </Header>
    </Segment>

  </div>
);

export default CardExampleExpandable;
