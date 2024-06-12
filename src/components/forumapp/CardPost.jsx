import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Grid,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { FaUserPlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileOwner from '../ProfileOwner';
import ownerShape from '../../types/Owner';
import { formatDate, postedAt } from '../../utils/date';

function Details({ description }) {
  return (
    <Box mt={2}>
      <Typography variant="body1" color="textSecondary">
        {`${description?.substring(0, 100)}...`}
      </Typography>
    </Box>
  );
}

function CardPost(props) {
  const {
    id,
    title,
    owner,
    category,
    description,
    image,
    startDate,
    endDate,
    createdAt,
    totalParticipants,
    maxParticipant,
  } = props;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmark = (event) => {
    event.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Link to={`/posts/${id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
        <CardContent>
          <Grid
            display="flex"
            flexDirection="row"
            gap="20px"
            justifyContent="space-between"
            alignItems="center">
            <Typography
              variant="h5"
              fontWeight="bold"
              color="textPrimary"
              alignSelf="start">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {postedAt(createdAt)}
            </Typography>
          </Grid>

          {startDate && endDate && (
            <Typography
              variant="body2"
              color="textSecondary"
              mt={1.5}
              alignSelf="start">
              {formatDate(startDate)} - {formatDate(endDate)}
            </Typography>
          )}
          <ProfileOwner
            name={owner?.profile?.name}
            headTitle={owner?.profile?.headTitle}
            avatar={owner?.profile?.photo}
          />

          <Details description={description} />
          {image && (
            <Box
              component="img"
              loading="lazy"
              src={image}
              alt={title}
              width="100%"
              height="350px"
              mt={2}
              sx={{ objectFit: 'cover' }}
            />
          )}
          <Box
            display="flex"
            gap={5}
            pr={{ xs: 5, md: 20 }}
            mt={2}
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            color="textSecondary">
            {category === 'Event' && (
              <Box display="flex" gap={2} alignItems="center">
                <FaUserPlus />
                <Typography variant="body2" alignSelf="center">
                  {totalParticipants} / {maxParticipant} Participant
                </Typography>
              </Box>
            )}
            <Box display="flex" gap={1.5}>
              <IconButton onClick={handleBookmark}>
                <BookmarkIcon
                  sx={{ color: isBookmarked ? '#252525' : 'inherit' }}
                />
              </IconButton>
              <Typography variant="body2" alignSelf="center">
                Bookmark
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

Details.propTypes = {
  description: PropTypes.string.isRequired,
};

CardPost.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

CardPost.defaultProps = {
  image: null,
};

export default CardPost;
