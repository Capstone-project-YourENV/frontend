import React from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PropTypes from 'prop-types';

export default function AuthenticationHeader({ title, subtitle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box width="100%" textAlign={isMobile ? 'center' : 'right'}>
      <Typography component="h2" variant="h4" color="softwhite" fontWeight="bold">
        {title}
      </Typography>
      <Typography
        component="h3"
        variant="h5"
        color="softwhite"
        fontWeight="regular"
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

AuthenticationHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
