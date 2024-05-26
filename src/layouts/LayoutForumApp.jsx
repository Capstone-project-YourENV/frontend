import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function LayoutForumApp({ children }) {
  return (
    <Grid
      container
      spacing={3}
      paddingY="60px"
      paddingX={5}
      sx={{ backgroundColor: 'softwhite' }}>
      {children}
    </Grid>
  );
}

LayoutForumApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutForumApp;
