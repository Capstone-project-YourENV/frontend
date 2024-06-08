import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { FaUserPlus } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import useExpand from '../hooks/useExpand';
import { formatDate } from '../utils/date';

function PostByCategory({
  category,
  createdAt,
  description,
  startDate,
  endDate,
  owner,
  postImage,
  registered,
  total,
  title,
}) {
  const [isExpanded, handleExpand] = useExpand(false);
  console.log(owner);
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', mb: 4 }}>
      <CardMedia
        component="img"
        image={postImage}
        alt="Post Image"
        sx={{ width: '100%', height: '300px', borderRadius: '8px 8px 0 0' }}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography
              variant="h4"
              color="textPrimary"
              sx={{ fontFamily: 'Plus Jakarta Sans' }}>
              {title}
            </Typography>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <MdPerson style={{ color: '#ccc', fontSize: 18 }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  {owner?.username}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary">
              {formatDate(startDate)}
              -
              {formatDate(endDate)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              {isExpanded
                ? description
                : `${description?.substring(0, 100)}...`}
              <Button onClick={handleExpand} color="primary">
                {isExpanded ? 'Show less' : 'Show more'}
              </Button>
            </Typography>
            {category === 'Event' && (
              <Grid
                mt={2}
                container
                justifyContent="space-between"
                alignItems="center">
                <Box display="flex" alignItems="center" gap={2}>
                  <FaUserPlus />
                  <Typography>{`${registered} / ${total} Terdaftar`}</Typography>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

PostByCategory.propTypes = {
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
  registered: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostByCategory;
