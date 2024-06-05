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

function RegisterForm({ register, color }) {
  const [username, onUsernameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  return (
    <Box
      component="form"
      width="100%"
      noValidate
      onSubmit={(e) => register(e, { username, email, password })}
      sx={{ mt: 5 }}
      display="flex"
      flexDirection="column"
      gap="10px">
      <Typography
        component="h3"
        variant="h5"
        textAlign="left"
        color={color}
        fontSize="18px"
        fontWeight="semibold">
        Register Your Self.
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        InputProps={{
          sx: { borderRadius: 15, borderColor: '#F6F8FD', color: { color } },
          color: 'success',
        }}
        id="username"
        label="Username"
        name="username"
        color="success"
        placeholder="Enter your username"
        autoComplete="username"
        value={username}
        onChange={onUsernameChange}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        InputProps={{
          sx: { borderRadius: 15, borderColor: '#F6F8FD', color: { color } },
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
          sx: { borderRadius: 15, borderColor: '#F6F8FD', color: { color } },
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
        sx={{ color: { color } }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        style={{ borderRadius: 15, height: 56, backgroundColor: '#B99470' }}>
        Register
      </Button>
      <Grid container>
        <Grid item>
          <Link
            href="/login"
            variant="body2"
            sx={{ color: { color } }}
            fontWeight="600">
            Have an account? Login
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  color: PropTypes.string,
};

RegisterForm.defaultProps = {
  color: 'white',
};

export default RegisterForm;
