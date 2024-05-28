import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export default function ParticipantItem(props) {
  const {
    name,
    headline,
    avatar,
    variant,
  } = props;
  const theme = useTheme();
  const backgroundColor = variant === 'secondary' ? theme.palette.primary.main : 'white';
  const textColor = variant === 'secondary' ? 'white' : theme.palette.primary.main;
  return (
    <Card sx={{ backgroundColor }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src={avatar} />
        <Grid marginX={2} display="flex" flexDirection="column">
          <Typography fontWeight="bold" color={textColor}>
            {name}
          </Typography>
          <Typography color={variant === 'secondary' ? theme.palette.primary.main : 'black'}>{headline}</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

ParticipantItem.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

ParticipantItem.defaultProps = {
  variant: 'primary',
};
