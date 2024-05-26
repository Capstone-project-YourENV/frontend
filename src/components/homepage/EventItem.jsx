import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function EventItem(props) {
  const {
    image,
    title,
    organization,
    target,
    percentage,
  } = props;
  return (
    <Card
      sx={{
        marginY: 1,
        boxShadow: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
        style={{ objectFit: 'cover', height: '100%', width: '100%' }}
      />
      <CardContent className="p-4">
        <Typography
          variant="h6"
          component="h3"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
            mb: 2,
          }}
        >
          <Typography variant="body2">{organization}</Typography>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ color: 'blue', marginLeft: 4 }}
          />
        </Box>
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div
            className="absolute top-0 left-0 h-full bg-green-500"
            style={{ width: percentage }}
          />
        </div>
        <Typography variant="body2" color="text.secondary" mb={1}>
          Target:
          {target}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={1}
          textAlign="right"
        >
          {percentage}
        </Typography>
      </CardContent>
    </Card>
  );
}

EventItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default EventItem;
