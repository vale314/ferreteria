import React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Styles={
  float:'right',
}

const MenuRight = ({handleHomeClick}) =>(
  <div style={Styles}>
      <IconMenu
      iconButtonElement={<IconButton style={{padding:'0px',height:'0px'}}><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}

      >
      <MenuItem onTouchTap={()=>handleHomeClick('/adm/refresh')} primaryText="Refresh" />
      <MenuItem onTouchTap={()=>handleHomeClick('/adm/sendeedback')} primaryText="Send feedback" />
      <MenuItem onTouchTap={()=>handleHomeClick('/adm/settings')} primaryText="Settings" />
      <MenuItem onTouchTap={()=>handleHomeClick('/adm/help')} primaryText="Help" />
      <MenuItem onTouchTap={()=>handleHomeClick('/adm/signout')} primaryText="Sign out" />
      </IconMenu>
    </div>
)

export default MenuRight;
