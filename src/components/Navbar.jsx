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
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonAuthentication from './authentication/ButtonAuthentication';
import { useLocation } from 'react-router';

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

export default function Navbar({ authUser, signOut }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: 'Beranda', link: '/' },
    { text: 'Trend', link: '/trends' },
    authUser
      ? { text: 'Upcoming', link: '/comingsoon' }
      : { text: 'About', link: '/about' },
  ];

  return (
    <>
      <AppBar position="sticky" color="softwhite" style={{ zIndex: 200 }}>
        <Toolbar className="justify-between px-4 max-md:px-2">
          <Link href="/" underline="none">
            <Typography
              variant="h6"
              color="green"
              fontWeight="bold"
              className="text-2xl"
              paddingLeft={isMobile ? '0' : '56px'}>
              Comment
            </Typography>
          </Link>
          <div className="flex-1 hidden md:flex justify-center">
            <div className="flex gap-5 justify-center">
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  link={item.link}
                  text={item.text}
                  isActive={location.pathname === item.link}
                />
              ))}
            </div>
          </div>
          <Grid
            gap="8px"
            className="justify-end hidden md:flex"
            paddingRight={isTablet ? '0' : '56px'}>
            {authUser ? (
              <>
                <IconButton onClick={handleMenuOpen} color="inherit">
                  <Avatar alt={authUser.name} src={authUser.avatarUrl} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}>
                  <MenuItem
                    onClick={handleMenuClose}
                    component={Link}
                    href="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component={Link}
                    href="/bookmarks">
                    Bookmarks
                  </MenuItem>
                  <MenuItem onClick={signOut}>Sign Out</MenuItem>
                </Menu>
              </>
            ) : (
              <>
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
              </>
            )}
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
              className="text-2xl">
              Comment
            </ListItem>
            {navItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <List>
            {authUser ? (
              <ListItem button>
                <ListItemText primary="Sign Out" onClick={signOut} />
              </ListItem>
            ) : (
              <>
                <ListItem button>
                  <Link href="/register/user">
                    <ListItemText primary="Register" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link href="/login">
                    <ListItemText primary="Login" />
                  </Link>
                </ListItem>
              </>
            )}
          </List>
        </div>
      </Drawer>
    </>
  );
}
