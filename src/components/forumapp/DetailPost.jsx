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

      {/* <Typography variant="h4" color="textPrimary" mt={4}>
        Participant
      </Typography>
      <Box
        mt={4}
        display="flex"
        flexWrap={{ xs: 'wrap', md: 'nowrap' }}
        gap={4}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p={6}
          bgcolor="white"
          borderRadius={2}
          flex={1}>
          <Box display="flex" gap={4}>
            <Avatar
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/816a2cb06ba21a0029ef69499db78cafa1228517c974dd961b11fcffa651e6fc?apiKey=9c369d6348cd4976857d696a1bdb516d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/816a2cb06ba21a0029ef69499db78cafa1228517c974dd961b11fcffa651e6fc?apiKey=9c369d6348cd4976857d696a1bdb516d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/816a2cb06ba21a0029ef69499db78cafa1228517c974dd961b11fcffa651e6fc?apiKey=9c369d6348cd4976857d696a1bdb516d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/816a2cb06ba21a0029ef69499db78cafa1228517c974dd961b11fcffa651e6fc?apiKey=9c369d6348cd4976857d696a1bdb516d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/816a2cb06ba21a0029ef69499db78cafa1228517c974dd961b11fcffa651e6fc?apiKey=9c369d6348cd4976857d696a1bdb516d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/816a2cb06ba21a0029ef69499db78cafa1228517c974dd961b11fcffa651e6fc?apiKey=9c369d6348cd4976857d696a1bdb516d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/816a2cb06ba21a0029ef69499db78cafa1228517c974dd961b11fcffa651e6fc?apiKey=9c369d6348cd4976857d696a1bdb516d&width=2000 2000w"
              alt="Wade Warren"
              sx={{ width: 48, height: 48 }}
            />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="body1" fontWeight="bold" color="textPrimary">
                Wade Warren
              </Typography>
              <Typography variant="body2" color="textSecondary">
                iOS Developer
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p={6}
          bgcolor="white"
          borderRadius={2}
          flex={1}>
          <Box display="flex" gap={4}>
            <Avatar
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3162cfb9e5b51af2e6c09104e5b928ff4fe517b1e9bc61b72dc5c3be5998a4da?apiKey=9c369d6348cd4976857d696a1bdb516d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3162cfb9e5b51af2e6c09104e5b928ff4fe517b1e9bc61b72dc5c3be5998a4da?apiKey=9c369d6348cd4976857d696a1bdb516d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3162cfb9e5b51af2e6c09104e5b928ff4fe517b1e9bc61b72dc5c3be5998a4da?apiKey=9c369d6348cd4976857d696a1bdb516d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3162cfb9e5b51af2e6c09104e5b928ff4fe517b1e9bc61b72dc5c3be5998a4da?apiKey=9c369d6348cd4976857d696a1bdb516d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3162cfb9e5b51af2e6c09104e5b928ff4fe517b1e9bc61b72dc5c3be5998a4da?apiKey=9c369d6348cd4976857d696a1bdb516d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3162cfb9e5b51af2e6c09104e5b928ff4fe517b1e9bc61b72dc5c3be5998a4da?apiKey=9c369d6348cd4976857d696a1bdb516d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3162cfb9e5b51af2e6c09104e5b928ff4fe517b1e9bc61b72dc5c3be5998a4da?apiKey=9c369d6348cd4976857d696a1bdb516d&width=2000 2000w"
              alt="Wade Warren"
              sx={{ width: 48, height: 48 }}
            />
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Typography variant="body1" fontWeight="bold" color="textPrimary">
                Wade Warren
              </Typography>
              <Typography variant="body2" color="textSecondary">
                iOS Developer
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </Grid>
  );
}

export default DetailPost;
