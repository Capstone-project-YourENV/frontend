import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const ChangePassword = () => {
  return (
    <div>
      <Typography variant="h6">Change Password</Typography>
      <TextField
        label="Current Password"
        fullWidth
        margin="normal"
        variant="outlined"
        type="password"
      />
      <TextField
        label="New Password"
        fullWidth
        margin="normal"
        variant="outlined"
        type="password"
      />
      <TextField
        label="Confirm Password"
        fullWidth
        margin="normal"
        variant="outlined"
        type="password"
      />
      <Button
          variant="contained"
          sx={{
            marginTop: 3,
            backgroundColor: '#75A47F',
            '&:hover': {
              backgroundColor: '#618b68',
            },
          }}
          fullWidth
        >
        Change Password
      </Button>
    </div>
  );
};

export default ChangePassword;
