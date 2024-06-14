import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <Link to={`/posts/${post?.id}`}>
      <Card sx={{ mb: 2 }}>
        <CardMedia
          component="img"
          sx={{ height: '140px' }}
          image={post?.image}
          alt={post?.title}
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
            {post?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post?.date}
          </Typography>
          <Typography
            variant="body2"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            {post?.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostItem;
