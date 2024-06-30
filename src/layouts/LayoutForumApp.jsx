import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function LayoutForumApp({ children }) {
  return (
    <Grid
      container
      width="100%"
      paddingX={5} // Mengatur padding untuk mobile, tablet, dan desktop
      paddingY={5} // Mengatur padding untuk mobile, tablet, dan desktop
      sx={{ backgroundColor: 'softwhite' }}
    >
      {children}
    </Grid>
  );
}

LayoutForumApp.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutForumApp;
