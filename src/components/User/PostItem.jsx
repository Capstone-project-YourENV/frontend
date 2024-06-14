import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function PostItem({ event }) {
  return (
    <Link to={`/posts/${event?.id}`}>
      <Card sx={{ mb: 2 }}>
        <CardMedia
          component="img"
          sx={{ height: '140px' }}
          image={event?.image}
          alt={event?.title}
        />
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="bold"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            {event?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event?.date}
          </Typography>
          <Typography
            variant="body2"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            {event?.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostItem;
