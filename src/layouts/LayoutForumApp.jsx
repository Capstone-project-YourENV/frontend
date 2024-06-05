import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

function LayoutForumApp({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      spacing={3}
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      gap={isMobile ? '10px' : '50px'}
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
