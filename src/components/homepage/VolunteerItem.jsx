import React from 'react';
import {
  faCheckCircle,
  faMapMarkerAlt,
  faCalendarAlt,
  faBuilding,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function VolunteerItem(props) {
  const { id, photo, name, headTitle, phone } = props;
  const placeholderImage = 'https://via.placeholder.com/150'; // Placeholder image URL

  return (
    <Link to={`/users/${id}`}>
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
        }}>
        <CardMedia
          component="img"
          loading="lazy"
          src={photo || placeholderImage}
          alt={name}
          sx={{ objectFit: 'cover', height: 200 }}
        />
        <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
            }}>
            {headTitle}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
              mb: 1,
              gap: 1,
            }}>
            <FontAwesomeIcon
              icon={faBuilding}
            />
            <Typography variant="body2" fontWeight="bold">{name}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'text.secondary',
              }}>
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: 'gray' }}
              />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {phone}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

VolunteerItem.propTypes = {
  id: PropTypes.string.isRequired,
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  headTitle: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

VolunteerItem.defaultProps = {
  photo: '',
};

export default VolunteerItem;
