import React from 'react';
import { Link, Typography } from '@mui/material';

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="/">
        Comment
        {' '}
      </Link>
      2024
    </Typography>
  );
}
