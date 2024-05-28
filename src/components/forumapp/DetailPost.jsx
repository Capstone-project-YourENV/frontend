import React from 'react';
import { Box, Typography, Avatar, Button, Grid } from '@mui/material';
import { BookmarkAddOutlined, BookmarkOutlined, Diversity2 } from '@mui/icons-material';
import { FaUserPlus } from 'react-icons/fa6';
function DetailPost(props) {
  const { category, title, owner, createdAt, content } = props;
  return (
    <Grid p={2.5} gap={2} display="flex" flexDirection="column">
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
        <Button
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            display: 'flex',
            gap: 1,
            color: 'black',
          }}
        >
          <BookmarkAddOutlined />
          <Typography variant="body1">Bookmark</Typography>
        </Button>
      </Box>

      <Box display="flex" flexWrap={{ xs: 'wrap', md: 'nowrap' }} gap={2.5}>
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
            {owner.headline}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="textSecondary"
          alignSelf="flex-start">
          {createdAt}
        </Typography>
      </Box>

      <Box
        p={5}
        bgcolor="white"
        borderRadius={2}
        boxShadow={1}
        flexDirection="column">
        <Typography variant="body1" color="textSecondary">
          {content}
        </Typography>

        {category === 'volunteer' && (
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
            <Button variant="contained" color="primary">
              Join Event
            </Button>
          </Grid>
        )}
      </Box>
    </Grid>
  );
}

export default DetailPost;
