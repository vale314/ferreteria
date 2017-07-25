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
import Menu from '../../../containers/admin/menuLeft/Index.jsx'
import MenuRight from '../../../containers/admin/menuRight/SignOut.jsx'
//routes
import HeaderRoutes from './routes/HeadersRoutes.jsx'
import BodyRoutes from './routes/BodyRoutes.jsx'



const CardExampleExpandable = () => (
  <div>
    <Segment clearing>
        <Header as='h2' textAlign='center'>
        <Route path='/' render={(props) => (
          <Menu {...props}  />
        )}/>
          <MenuRight />
          <HeaderRoutes />
        </Header>
    </Segment>

  </div>
);

export default CardExampleExpandable;
