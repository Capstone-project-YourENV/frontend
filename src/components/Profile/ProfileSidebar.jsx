import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, ListItemIcon } from '@mui/material';
import { AccountCircle, VpnKey, ExitToApp } from '@mui/icons-material';

const ProfileSidebar = ({ avatar = '', name, title, setActiveComponent = () => {} }) => (
  <div>
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatar} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={title} />
      </ListItem>
      <Divider />
      <ListItem button onClick={() => setActiveComponent('profile')}>
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="My Profile" />
      </ListItem>
      <ListItem button onClick={() => setActiveComponent('password')}>
        <ListItemIcon>
          <VpnKey />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </List>
  </div>
);

export default ProfileSidebar;
