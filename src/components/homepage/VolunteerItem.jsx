import React, { useState } from 'react';
import {
  faBuilding,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, CardMedia, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function VolunteerItem(props) {
  const {
    id,
    photo,
    name,
    headTitle,
    phone,
  } = props;

  return (
    <Link to={`/users/${id}`} style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          marginY: 1,
          boxShadow: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'grey.200',
          height: '340px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardMedia
          component="img"
          loading="lazy"
          src={photo}
          alt={name}
          sx={{ objectFit: 'cover', height: 200 }}
        />
        <CardContent
          sx={{
            p: 2,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: 1,
          }}
        >
          {headTitle && (
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
              {headTitle}
            </Typography>
          )}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'text.secondary',
              mb: 1,
              gap: 1,
            }}
          >
            <FontAwesomeIcon icon={faBuilding} />
            <Typography variant="body2" fontWeight="bold">
              {name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'text.secondary',
              }}
            >
              <FontAwesomeIcon icon={faPhone} style={{ color: 'gray' }} />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {phone || 'N/A'}
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
  headTitle: PropTypes.string,
  phone: PropTypes.string,
};

VolunteerItem.defaultProps = {
  photo: '',
  headTitle: '',
  phone: '',
};

export default VolunteerItem;
