import React, { useState } from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  },
});

const ProfileDetails = ({ name, title, email, phone, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPhone, setUpdatedPhone] = useState(phone);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    onUpdate(updatedName, updatedTitle, updatedEmail, updatedPhone);
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h5" gutterBottom sx={{fontWeight:"Bold"}}>Profile</Typography>
        <Divider sx={{ marginBottom: 2 }} />
        
        <div style={{ marginTop: 20 }}>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>Name: {name}</Typography>
          <Divider />
          <Typography variant="body1" sx={{ marginBottom: 2, marginTop: 2 }}>Head Title: {title}</Typography>
          <Divider />
          <Typography variant="body1" sx={{ marginBottom: 2, marginTop: 2 }}>Email Account: {email}</Typography>
          <Divider />
          <Typography variant="body1" sx={{ marginBottom: 2, marginTop: 2 }}>Mobile Phone: {phone}</Typography>
          <Divider />
        </div>

        <Button
          variant="contained"
          sx={{
            marginTop: 3,
            backgroundColor: '#75A47F',
            '&:hover': {
              backgroundColor: '#618b68',
            },
          }}
          onClick={handleClickOpen}
          fullWidth
        >
          Change Profile
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update your profile details below:
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              variant="outlined"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Head Title"
              fullWidth
              variant="outlined"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Email Account"
              fullWidth
              variant="outlined"
              value={updatedEmail}
              onChange={(e) => setUpdatedEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Mobile Phone"
              fullWidth
              variant="outlined"
              value={updatedPhone}
              onChange={(e) => setUpdatedPhone(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleUpdate} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default ProfileDetails;
