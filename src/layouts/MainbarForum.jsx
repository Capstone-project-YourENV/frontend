import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function MainbarForum({ children }) {
  return (
    <Grid
      xs={12}
      sm={12}
      md={12}
      lg={9}
      display="flex"
      flexDirection="column"
      gap="15px"
      width="100%"
    >
      {children}
    </Grid>
  );
}

MainbarForum.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainbarForum;
