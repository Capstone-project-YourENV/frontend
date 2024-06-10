import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import PostByCategory from './PostByCategory';

function ListPost({ title, events }) {
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
        {events?.map((event) => {
          return (
            <PostByCategory
              id={event?.id}
              title={event?.title}
              description={event?.description}
              owner={event?.owner}
              startDate={event?.startDate}
              endDate={event?.endDate}
              category={event?.category}
              postImage={event?.image}
              total={event?.maxParticipant}
              registered={event?.totalParticipants}
            />
          );
        })}
      </Box>
    </Grid>
  );
}

export default ListPost;
