import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

function SidebarForum({ children }) {
  return (
    <Grid
      xs={12}
      sm={12}
      md={12}
      lg={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '25px',
      }}
      gap="15px"
    >
      {children}
    </Grid>
  );
}

SidebarForum.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarForum;
