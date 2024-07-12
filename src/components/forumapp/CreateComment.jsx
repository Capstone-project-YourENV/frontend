import { Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from '@mantine/form';
import ReactQuill from 'react-quill';

function CreateComment({ addComment }) {
  const formComment = useForm({
    initialValues: {
      content: '',
    },
    validate: {
      content: (value) => (value ? null : 'Comment cannot be empty'),
    },
  });

  const handleComment = (e) => {
    e.preventDefault();
    const isValid = formComment.validate();
    if (isValid.hasErrors) return; // Don't add comment if there are validation errors

    addComment(formComment.values.content);
    formComment.reset();
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        value={formComment.getInputProps('content').value}
        onChange={formComment.getInputProps('content').onChange}
      />
      <Button variant="contained" color="primary" onClick={handleComment}>
        Submit
      </Button>
    </>
  );
}

export default CreateComment;
