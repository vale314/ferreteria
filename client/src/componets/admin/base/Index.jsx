import React from 'react';
//semantic-ui-react
import { Header, Segment,Button, Checkbox, Modal, Image, Icon} from 'semantic-ui-react'
import { Switch, Route, Miss} from 'react-router-dom'

//material-ui
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

  //dependencies
import Menu from '../../../containers/admin/menuLeft/Index.jsx'
import MenuRight from '../../../containers/admin/menuRight/SignOut.jsx'
//routes
import HeaderRoutes from './routes/HeadersRoutes.jsx'
import BodyRoutes from './routes/BodyRoutes.jsx'

const views=(isReload)=>{
  if(isReload)
    return({display:'inline'})

  if(!isReload)
    return({display:'none'})


}
const CardExampleExpandable = ({isReload}) => (
  <div style={views(isReload)}>
    <Segment clearing>
        <Header as='h2' textAlign='center'>
          <Route path='/' render={(props) => (
            <Menu {...props}  />
          )}/>
          <Route path='/' render={(props) => (
            <MenuRight {...props} />
          )}/>
          <HeaderRoutes />
        </Header>
    </Segment>
      <BodyRoutes />
  </div>
);

export default CardExampleExpandable;
