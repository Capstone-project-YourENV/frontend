import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileDetails from '../components/Profile/ProfileDetails';
import ChangePassword from '../components/Profile/ChangePassword';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authentication/thunk';
import { useNavigate } from 'react-router';

function ProfilePage() {
  const [activeComponent, setActiveComponent] = useState('profile');
  // const [profile, setProfile] = useState({
  //   avatar: 'https://i.pravatar.cc/300',
  //   name: 'Ervalsa Dwi Nanda',
  //   title: 'Energie',
  //   email: 'yourname@gmail.com',
  //   phone: '+62 xxx xxxx xxx',
  // });
  const authUser = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateProfile = (name, title, email, phone) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name,
      title,
      email,
      phone,
    }));
  };

  const handleSignOut = () => {
    // handle sign out logic
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return (
          <ProfileDetails
            avatar={authUser?.photo}
            username={authUser?.username}
            name={authUser?.profile?.name}
            title={authUser?.profile?.headTitle}
            email={authUser?.email}
            phone={authUser?.profile?.phone}
            onUpdate={handleUpdateProfile}
          />
        );
      case 'password':
        return <ChangePassword />;
      default:
        return (
          <ProfileDetails
            avatar={authUser?.photo}
            username={authUser?.username}
            name={authUser?.profile?.name}
            title={authUser?.profile?.headTitle}
            email={authUser?.email}
            phone={authUser?.profile?.phone}
            onUpdate={handleUpdateProfile}
          />
        );
    }
  };

  return (
    <Container
      sx={{
        marginTop: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <ProfileSidebar
            avatar={authUser?.photo}
            username={authUser?.username}
            title={authUser?.profile?.headTitle}
            setActiveComponent={setActiveComponent}
            onSignOut={handleSignOut}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: 2, minHeight: '400px', width: '100%' }}>
            {renderComponent()}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProfilePage;
