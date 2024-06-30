import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';

function LayoutForumApp({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Grid
      container
      width="100%"
      paddingX={5} // Mengatur padding untuk mobile, tablet, dan desktop
      paddingY={5} // Mengatur padding untuk mobile, tablet, dan desktop
      sx={{ backgroundColor: 'softwhite' }}>
      {children}
    </Grid>
  );
}

LayoutForumApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutForumApp;
