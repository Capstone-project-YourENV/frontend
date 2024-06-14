import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import PostByCategory from './PostByCategory';

function ListPost({ title, posts }) {
  return (
    <Grid width="100%" container gap="15px">
      <Grid
        width="100%"
        flexDirection="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between">
        <Typography
          style={{
            fontSize: 20,
            fontWeight: '700',
            wordWrap: 'break-word',
          }}>
          {title}
        </Typography>
      </Grid>
      <Box width="100%" display="flex" gap={2} flexDirection="column">
        {posts?.map((post) => {
          return (
            <PostByCategory
              id={post?.id}
              title={post?.title}
              description={post?.description}
              owner={post?.owner}
              startDate={post?.startDate}
              endDate={post?.endDate}
              category={post?.category}
              postImage={post?.image}
              maxParticipants={post?.maxParticipants}
              participants={post?.participants}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

export default ListPost;
