import React, { useRef } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

function LoginForm({ login }) {
  const [email, onEmailChange] = useInput(localStorage.getItem('comment-email') || '');
  const [password, onPasswordChange] = useInput(localStorage.getItem('comment-password') || '');
  const rememberCheck = useRef(null);

  function remember() {
    if (rememberCheck.current.checked) {
      localStorage.setItem('comment-email', email);
      localStorage.setItem('comment-password', password);
    } else {
      localStorage.removeItem('comment-email');
      localStorage.removeItem('comment-password');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    remember();
    login(e, { email, password });
  }

  const rememberControl = <Checkbox value="remember" color="success" inputRef={rememberCheck} />;

  return (
    <Box
      component="form"
      width="100%"
      noValidate
      onSubmit={(e) => handleSubmit(e)}
      sx={{ mt: 5 }}
      display="flex"
      flexDirection="column"
      gap="10px"
    >
      <Typography
        component="h3"
        variant="h5"
        textAlign="right"
        color="white"
        fontSize="18px"
        fontWeight="semibold"
      >
        Login to Join Our Community.
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        InputProps={{
          sx: {
            borderRadius: 2,
            backgroundColor: 'white',
            borderColor: '#F6F8FD',
            color: 'black',
            fontWeight: '600', // Menambahkan font weight 600 pada teks input
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#F6F8FD',
              },
              '&:hover fieldset': {
                borderColor: '#B99470',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#B99470',
              },
            },
          },
          inputProps: {
            style: { fontWeight: 600 }, // Menambahkan font weight 600 pada teks input
          },
        }}
        id="email"
        label="Email Address"
        name="email"
        color="success"
        placeholder="Enter your email"
        autoComplete="email"
        value={email}
        onChange={onEmailChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        InputProps={{
          sx: {
            borderRadius: 2,
            backgroundColor: 'white',
            borderColor: '#F6F8FD',
            color: 'black',
            fontWeight: '600', // Menambahkan font weight 600 pada teks input
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#F6F8FD',
              },
              '&:hover fieldset': {
                borderColor: '#B99470',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#B99470',
              },
            },
          },
          inputProps: {
            style: { fontWeight: 600 }, // Menambahkan font weight 600 pada teks input
          },
        }}
        name="password"
        placeholder="Enter your password"
        color="success"
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        autoComplete="current-password"
      />
      <FormControlLabel
        control={rememberControl}
        label="Remember Password"
        sx={{ color: 'white' }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        style={{ borderRadius: 15, height: 56, backgroundColor: '#B99470' }}
      >
        Login
      </Button>
      <Grid container justifyContent="center">
        <Grid item display="flex" flexDirection="row" gap="10px">
          <Typography
            component={Link}
            to="/"
            variant="body2"
            color="white"
            fontWeight="600"
          >
            Home
          </Typography>
          <Typography variant="body2" color="white" fontWeight="600">
            Or
          </Typography>
          <Typography
            component={Link}
            to="/register/user"
            variant="body2"
            color="white"
            fontWeight="600"
          >
            Sign Up
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
