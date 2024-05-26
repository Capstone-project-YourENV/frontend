import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginForm({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <Box
      component="form"
      width="100%"
      noValidate
      onSubmit={() => login({ email, password })}
      sx={{ mt: 5 }}
      display="flex"
      flexDirection="column"
      gap="10px">
      <Typography
        component="h3"
        variant="h5"
        textAlign="right"
        color="softwhite"
        fontSize="18px"
        fontWeight="semibold">
        Login to Join Our Community.
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        InputProps={{
          sx: { borderRadius: 15, borderColor: '#F6F8FD', color: 'white' },
          color: 'success',
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
          sx: { borderRadius: 15, borderColor: '#F6F8FD', color: 'white' },
          color: 'success',
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
        control={<Checkbox value="remember" color="success" />}
        label="Remember Password"
        sx={{ color: 'softwhite' }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        style={{ borderRadius: 15, height: 56, backgroundColor: '#B99470' }}>
        Login
      </Button>
      <Grid container>
        <Grid item>
          <Link
            href="/register/user"
            variant="body2"
            color="softwhite"
            fontWeight="600">
            Doesn’t have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
