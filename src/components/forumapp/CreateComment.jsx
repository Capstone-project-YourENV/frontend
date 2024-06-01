import { Button, Grid, Typography } from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import React from 'react';

function CreateComment() {
  return (
    <Grid container gap="15px" display="flex" flexDirection="column">
      <Typography fontWeight="700" fontSize="20px">
        Create Comment
      </Typography>
      <TextareaAutosize
        aria-label="minimum height"
        className="w-full text-sm font-normal font-sans leading-normal p-3 rounded-xl rounded-br-none shadow-lg shadow-slate-100 focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 bg-white  text-slate-900 focus-visible:outline-0 box-border"
        minRows={3}
        placeholder="Write your comment here...."
      />
      <Button variant="contained" color="primary">Submit</Button>
    </Grid>
  );
}

export default CreateComment;
