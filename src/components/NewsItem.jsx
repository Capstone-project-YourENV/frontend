import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

function NewsItem({ image, title, date }) {
  return (
    <Card
      sx={{
        marginY: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 3,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'grey.200',
      }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 200,
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NewsItem;
