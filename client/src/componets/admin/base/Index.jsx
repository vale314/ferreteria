import React from 'react';
//semantic-ui-react
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'
import { Switch, Route, Miss} from 'react-router-dom'

//material-ui
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

  //dependencies
import Menu from '../menu/Index.jsx'
import MenuRight from '../../../containers/admin/menuRight/SignOut.jsx'
//routes
import HeaderRoutes from './routes/HeadersRoutes.jsx'
import BodyRoutes from './routes/BodyRoutes.jsx'



const CardExampleExpandable = ({handleTap,open,handleClick}) => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center'>
          <Menu handleTap={handleTap} open={open} handleClick={handleClick}/>
          <MenuRight />
          <HeaderRoutes />
        </Header>
    </Segment>

  </div>
);

export default CardExampleExpandable;
