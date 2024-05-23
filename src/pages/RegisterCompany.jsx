import {
  Grid,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import AuthenticationHeader from '../components/AuthenticationHeader';
import Copyright from '../components/Copyright';
import RegisterForm from '../components/RegisterForm';
import LayoutAuthentication from '../layouts/LayoutAuthentication';

function RegisterCompany() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: '110vh' }}
      backgroundColor="softwhite"
    >
      <LayoutAuthentication>
        <AuthenticationHeader
          title="Comment"
          subtitle="Open your Journey and Start With us."
          textAlign={isMobile ? 'center' : 'left'}
          color="green"
        />
        <RegisterForm register={handleSubmit} color="green" />
        <Copyright sx={{ mt: 5 }} color="softwhite" />
      </LayoutAuthentication>
      {!isMobile && (
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          alignContent="center"
          sx={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/643401.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
    </Grid>
  );
}

export default RegisterCompany;
