import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, ListItemIcon } from '@mui/material';
import { AccountCircle, VpnKey, ExitToApp } from '@mui/icons-material';
import SidebarForum from '../layouts/SidebarForum';

const ProfileSidebar = ({ setActiveComponent }) => {
  return (
    <SidebarForum>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="/profile.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Ervalsa Dwi Nanda" secondary="Energie" />
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
    </SidebarForum>
  );
};

export default ProfileSidebar;
