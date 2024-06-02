import React from 'react';
import { Box, Typography, Avatar, Button, Grid, Card } from '@mui/material';
import { BookmarkAddOutlined } from '@mui/icons-material';
import { FaUserPlus } from 'react-icons/fa6';
import PropTypes from 'prop-types';
import useExpand from '../hooks/useExpand';
import ownerShape from '../types/Owner';

function DetailPost(props) {
  const { category, title, owner, createdAt, content } = props;
  const authUser = {
    id: '1',
  };
  const [isExpanded, handleExpand] = useExpand(false);
  return (
    <Grid gap={2} display="flex" flexDirection="column">
      <Typography
        fontWeight="bold"
        color="softbrown"
        textTransform="capitalize">
        {category}
      </Typography>

      <Box
        display="flex"
        flexWrap={{ xs: 'wrap', md: 'nowrap' }}
        gap={2}
        color="textPrimary">
        <Typography variant="h4" fontWeight="bold" flex={1}>
          {title}
        </Typography>
        {authUser && (
          <Button
            sx={{
              alignItems: 'center',
              textAlign: 'center',
              display: 'flex',
              gap: 1,
              color: 'black',
            }}>
            <BookmarkAddOutlined />
            <Typography variant="body1">Bookmark</Typography>
          </Button>
        )}
      </Box>

      <Box
        display="flex"
        flexWrap={{ xs: 'wrap', md: 'nowrap' }}
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={2.5}>
        <Avatar
          srcSet={owner.avatar}
          alt={owner.name}
          sx={{ width: 56, height: 56, borderRadius: '50%' }}
        />
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          justifyContent="center"
          py={1}>
          <Typography variant="h5" fontWeight="bold">
            {owner.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {owner.headTItle}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="textSecondary"
          alignSelf="flex-start">
          {createdAt}
        </Typography>
      </Box>

      <Card
        sx={{
          padding: 3,
          boxShadow: 1,
          flexDirection: 'column',
          borderRadius: '10px',
        }}>
        <Typography variant="body1" color="textSecondary">
          {isExpanded ? content : `${content.substring(0, 100)}...`}
          <Button onClick={handleExpand} color="primary">
            {isExpanded ? 'Show less' : 'Show more'}
          </Button>
        </Typography>

        {category === 'event' && (
          <Grid
            mt={2}
            display="flex"
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            justifyContent="space-between"
            gap={5}>
            <Box display="flex" alignItems="center" gap={2}>
              <FaUserPlus />
              <Typography>3 / 20 Terdaftar</Typography>
            </Box>
            {authUser && (
              <Button variant="contained" color="primary">
                Join Event
              </Button>
            )}
          </Grid>
        )}
      </Card>
    </Grid>
  );
}

DetailPost.propTypes = {
  category: PropTypes.oneOf(['event', 'news']).isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default DetailPost;
