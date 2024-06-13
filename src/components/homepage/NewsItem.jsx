import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils/date';
import ownerShape from '../../types/Owner';
import { Link } from 'react-router-dom';

function NewsItem({ id, image, title, date, owner }) {

  const placeholderImage = 'https://via.placeholder.com/150'; // Placeholder image URL

  return (
    <Link to={`/posts/${id}`}>
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
          image={image || placeholderImage}
          alt={title}
          sx={{
            height: 200,
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Grid>
            <Typography variant="body2" fontWeight="200">
              {postedAt(date)}
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
            <Typography variant="body2">{owner?.username}</Typography>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}

NewsItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

NewsItem.defaultProps = {
  image: '',
};

export default NewsItem;
