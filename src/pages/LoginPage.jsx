import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  useMediaQuery,
  Box,
  Grid,
  useTheme,
} from '@mui/material';
import Copyright from '../components/Copyright';
import LoginForm from '../components/LoginForm';
import AuthenticationHeader from '../components/AuthenticationHeader';

export default function LoginPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const handleSubmit = (event, data) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: '100vh' }}
      backgroundColor="softwhite"
    >
      {!isMobile && (
        <Grid item xs={false} sm={4} md={7} alignContent="center">
          <Box
            component="img"
            style={{ width: '512px', height: '512px', margin: 'auto' }}
            alt="Login picture."
            src="./src/assets/login-picture.png"
          />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        square
        backgroundColor="#75A47F"
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
          <AuthenticationHeader title="Comment" subtitle="Volunteer Initiatives for a Cleaner Earth." />
          <LoginForm login={handleSubmit} />
          <Copyright sx={{ mt: 5 }} color="softwhite" />
        </Box>
      </Grid>
    </Grid>
  );
}
