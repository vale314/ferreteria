import React from 'react';

//material-ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Menu = () => (
  <div style={{float:'left'}}>
    <IconMenu
        iconButtonElement={<IconButton style={{textAlign:'left'}}><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Cuentas" />
      <MenuItem primaryText="Ventas" />
      <MenuItem primaryText="Contabilidad" />
      <MenuItem primaryText="Productos" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>
)

export default Menu;
