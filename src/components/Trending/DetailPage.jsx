import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { FaUserPlus } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}

function DetailPost({
  category,
  createdAt,
  content,
  postImage,
  registered,
  total,
  title,
  name,
}) {
  const truncatedContent = truncateText(content, 350);

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
              sx={{ fontFamily: 'Plus Jakarta Sans' }}
            >
              {title}
            </Typography>
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <MdPerson style={{ color: '#ccc', fontSize: 18 }} />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  {name}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="textSecondary">
              {createdAt}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              {truncatedContent}
            </Typography>
            {category === 'volunteer' && (
              <Grid
                mt={2}
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <FaUserPlus />
                  <Typography>{`${registered} / ${total} Terdaftar`}</Typography>
                  <Box display="flex" alignItems="center" gap={1}>
                    <BookmarkAddOutlinedIcon
                      style={{ color: 'Black', fontSize: 20 }}
                    />
                    <Typography variant="body2" color="black">
                      Bookmark
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

DetailPost.propTypes = {
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
  registered: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

function TrendingPost(props) {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ mb: 2, fontFamily: 'Plus Jakarta Sans', fontWeight: 'Bold' }}
      >
        Trending
      </Typography>
      <DetailPost {...props} />
    </Box>
  );
}

export default TrendingPost;