import React, { useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ProfileDetails from '../components/Profile/ProfileDetails';
import ChangePassword from '../components/Profile/ChangePassword';

function ProfilePage() {
  const [activeComponent, setActiveComponent] = useState('profile');
  const [profile, setProfile] = useState({
    avatar: 'https://i.pravatar.cc/300',
    name: 'Ervalsa Dwi Nanda',
    title: 'Energie',
    email: 'yourname@gmail.com',
    phone: '+62 xxx xxxx xxx',
  });

  const handleUpdateProfile = (name, title, email, phone) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      name,
      title,
      email,
      phone,
    }));
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return (
          <ProfileDetails
            avatar={profile.avatar}
            name={profile.name}
            title={profile.title}
            email={profile.email}
            phone={profile.phone}
            onUpdate={handleUpdateProfile}
          />
        );
      case 'password':
        return <ChangePassword />;
      default:
        return (
          <ProfileDetails
            avatar={profile.avatar}
            name={profile.name}
            title={profile.title}
            email={profile.email}
            phone={profile.phone}
            onUpdate={handleUpdateProfile}
          />
        );
    }
  };

  return (
    <Container sx={{
      marginTop: 4,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
            <ProfileSidebar
              avatar={profile.avatar}
              name={profile.name}
              title={profile.title}
              setActiveComponent={setActiveComponent}
            />
          </Paper>
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
