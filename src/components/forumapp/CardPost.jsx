import React from 'react';
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
import ProfileOwner from '../ProfileOwner';
import useExpand from '../../hooks/useExpand';
import ownerShape from '../../types/Owner';

function Details({ content }) {
  const [isExpanded, handleExpand] = useExpand(false);
  return (
    <Box mt={2}>
      <Typography variant="body1" color="textSecondary">
        {isExpanded ? content : `${content.substring(0, 100)}...`}
        <Button onClick={handleExpand} color="primary">
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      </Typography>
    </Box>
  );
}

function Info({ participant }) {
  return (
    <Box
      display="flex"
      gap={5}
      pr={{ xs: 5, md: 20 }}
      mt={2}
      flexWrap={{ xs: 'wrap', md: 'nowrap' }}
      color="textSecondary">
      {participant && (
        <Box display="flex" gap={2} alignItems="center">
          <FaUserPlus />
          <Typography variant="body2" alignSelf="center">
            {participant} Participant
          </Typography>
        </Box>
      )}
      <Box display="flex" gap={1.5}>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
        <Typography variant="body2" alignSelf="center">
          Bookmark
        </Typography>
      </Box>
    </Box>
  );
}

function CardPost(props) {
  const {
    title,
    owner,
    content,
    image,
    startDate,
    endDate,
    createdAt,
    participant,
  } = props;

  return (
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
            {createdAt}
          </Typography>
        </Grid>

        <Typography
          variant="body2"
          color="textSecondary"
          mt={1.5}
          alignSelf="start">
          {startDate}-{endDate}
        </Typography>
        <ProfileOwner
          name={owner.name}
          headTItle={owner.headTItle}
          avatar={owner.avatar}
        />

        <Details content={content} />
        {image && (
          <Box
            component="img"
            loading="lazy"
            src={image}
            alt={title}
            width="100%"
            mt={2}
            sx={{ aspectRatio: '2.78' }}
          />
        )}
        <Info participant={participant} />
      </CardContent>
    </Card>
  );
}

Details.propTypes = {
  content: PropTypes.string.isRequired,
};

Info.propTypes = {
  participant: PropTypes.string.isRequired,
};

CardPost.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  participant: PropTypes.string,
};

CardPost.defaultProps = {
  image: null,
  participant: null,
};

export default CardPost;
