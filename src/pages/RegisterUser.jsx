import {
  Box,
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import AuthenticationHeader from '../components/AuthenticationHeader';
import Copyright from '../components/Copyright';
import RegisterForm from '../components/RegisterForm';
import LayoutAuthentication from '../layouts/LayoutAuthentication';

function RegisterUser() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      sx={{ height: '110vh' }}
      container
      component="main"
      backgroundColor="softwhite"
    >
      <LayoutAuthentication>
        <AuthenticationHeader
          title="Comment"
          subtitle="Start your Volunteer Journey With us."
          textAlign={isMobile ? 'center' : 'left'}
        />
        <RegisterForm register={handleSubmit} />
        <Copyright sx={{ mt: 5 }} color="softwhite" />
      </LayoutAuthentication>

      {!isMobile && (
        <Grid item xs={false} sm={4} md={7} alignContent="center">
          <Box
            component="img"
            style={{ width: '512px', height: '512px', margin: 'auto' }}
            alt="Login picture."
            src="/src/assets/register-picture.png"
          />
        </Grid>
      )}
    </Grid>
  );
}

export default RegisterUser;
