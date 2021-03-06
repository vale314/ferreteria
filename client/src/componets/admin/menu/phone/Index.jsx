import React from 'react';

//material-ui
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

  //Avatar
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';


const Menu = ({handleTap,open,handleClick,adminLenguageBoolean}) => (
  <div style={{float:'left'}}>
      <i onMouseOver={handleTap} className="material-icons">home</i>
        <Drawer open={open} >
        <List>
            <ListItem
              disabled={true}
              leftAvatar={
                <Avatar src="https://pbs.twimg.com/profile_images/425000350202867713/omeMN2VM.jpeg" />
              }
            >
              Image Avatar
            </ListItem>
          </List>
            <MenuItem onClick={()=>handleClick('/')}>{adminLenguageBoolean ? 'Inicio': 'Home'}</MenuItem>
            <MenuItem onClick={()=>handleClick('/adm/cuentas')}>{adminLenguageBoolean ? 'Cuentas' : 'Accounts' }</MenuItem>
            <RaisedButton
            label={adminLenguageBoolean ? 'Cerrar': 'Close Drawer'}
            onTouchTap={handleTap}
            />
        </Drawer>
      </div>
)

export default Menu;
