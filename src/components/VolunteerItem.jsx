import React from 'react';
import {
  faCheckCircle,
  faMapMarkerAlt,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

function VolunteerItem(props) {
  const {
    image,
    title,
    organization,
    distance,
    time,
  } = props;
  return (
    <Card
      sx={{
        marginY: 1,
        boxShadow: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        src={image}
        alt={title}
        sx={{ objectFit: 'cover', height: 200 }}
      />
      <CardContent sx={{ p: 2, flexGrow: 1 }}>
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
            mb: 1,
          }}
        >
          <Typography variant="body2">{organization}</Typography>
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ color: 'blue', marginLeft: 4 }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
            }}
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'gray' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {distance}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
            }}
          >
            <FontAwesomeIcon icon={faCalendarAlt} style={{ color: 'gray' }} />
            <Typography variant="body2" sx={{ ml: 1 }}>
              {time}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

VolunteerItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default VolunteerItem;