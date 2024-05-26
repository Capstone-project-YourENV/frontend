import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

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
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        image={image}
        alt={title}
        sx={{
          height: 200,
        }}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Grid>
          <Typography component="h4" fontWeight="200">
            {date}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
}

NewsItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
