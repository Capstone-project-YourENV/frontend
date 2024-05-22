import {
  Box,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import AuthenticationHeader from '../components/AuthenticationHeader';
import Copyright from '../components/Copyright';
import RegisterForm from '../components/RegisterForm';

function RegisterCompany() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Grid container component="main" backgroundColor="softwhite">
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        square
        backgroundColor="softwhite"
        alignContent="center"
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AuthenticationHeader
            title="Comment"
            subtitle="Open your Journey and Start With us."
            textAlign={isMobile ? 'center' : 'left'}
            color="green"
          />
          <RegisterForm register={handleSubmit} color="green" />
          <Copyright sx={{ mt: 5 }} color="softwhite" />
        </Box>
      </Grid>
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
