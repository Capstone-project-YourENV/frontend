import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import PropTypes from 'prop-types';

export default function LayoutAuthentication({ children }) {
  return (
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
        {children}
      </Box>
    </Grid>
  );
}

LayoutAuthentication.propTypes = {
  children: PropTypes.node.isRequired,
};
