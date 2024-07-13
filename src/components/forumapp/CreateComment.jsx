import { Button, Typography } from '@mui/material';
import React from 'react';
import { useForm } from '@mantine/form';
import ReactQuill from 'react-quill';
import { Text } from '@mantine/core';

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
      <Text fw={700} size="lg">
        Comment
      </Text>
      <ReactQuill
        theme="bubble"
        value={formComment.getInputProps('content').value}
        onChange={formComment.getInputProps('content').onChange}
        className="bg-white custom-quill"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleComment}
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </>
  );
}

export default CreateComment;
