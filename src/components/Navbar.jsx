import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Link,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonAuthentication from './ButtonAuthentication';

const navItems = [
  { text: 'Beranda', isActive: true, link: '/' },
  { text: 'Trend', link: '/trend' },
  { text: 'Upcoming', link: '/upcoming' },
];

function NavItem({ text, isActive, link }) {
  return (
    <Link
      fontWeight="500"
      href={link}
      underline="none"
      color={isActive ? 'green' : 'inherit'}>
      {text}
    </Link>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" color="softwhite">
        <Toolbar className="justify-between px-4 max-md:px-2">
          <Typography
            variant="h6"
            color="green"
            fontWeight="bold"
            className="text-2xl"
            paddingLeft={isMobile ? '0' : '56px'}>
            Comment
          </Typography>
          <div className="flex-1 hidden md:flex justify-center">
            <div className="flex gap-5 justify-center">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  link={item.link}
                  text={item.text}
                  isActive={item.isActive}
                />
              ))}
            </div>
          </div>
          <Grid
            gap="8px"
            className="justify-end hidden md:flex"
            paddingRight={isTablet ? '0' : '56px'}>
            <Link href="/register/user">
              <ButtonAuthentication
                text="Register"
                styleType="primary"
                variant="outlined"
              />
            </Link>
            <Link href="/login">
              <ButtonAuthentication text="Login" styleType="primary" />
            </Link>
          </Grid>
          <div className="flex-1 flex md:hidden justify-end">
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleDrawer(true)}
              className="mr-2">
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div
          className="w-64"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem
              components={Typography}
              sx={{ color: 'green', fontWeight: 'bold' }}
              className="text-2xl"
            >
              Comment
            </ListItem>
            {navItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <List>
            <ListItem button>
              <ListItemText primary="Register" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}
