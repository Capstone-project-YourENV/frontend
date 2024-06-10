import React, { useState } from 'react';
import { Typography, Box, Card } from '@mui/material';
import {
  Button,
  Group,
  NumberInput,
  SimpleGrid,
  Switch,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useToggle } from '@mantine/hooks';
import { randomId } from '@mantine/hooks';

function PostForm({ addPost }) {
  const [category, toggleCategory] = useToggle(['News', 'Event']);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      description: '',
      image: null,
      category: 'News',
      startDate: null,
      endDate: null,
      maxParticipant: null,
    },
    validate: {
      title: (value) =>
        value.length < 3 ? 'Title must be at least 3 letters' : null,
      description: (value) =>
        value.length > 2500
          ? 'Description must be at most 2500 characters'
          : null,
    },
  });

  const handleDrop = (files) => {
    const randomName = randomId();
    const fileExtension = files[0].name.split('.').pop();
    const newName = `${randomName}.${fileExtension}`;

    form.setFieldValue('image', {
      ...files[0],
      name: newName,
    });

    form.setFieldError('image', null); // Clear any existing errors on drop
  };

  const handleReject = (files) => {
    console.log('rejected files', files);
    form.setFieldError('image', 'File size exceeds 5MB or invalid file type');
  };

  const handleToggleCategory = () => {
    toggleCategory();
    const newCategory = category === 'News' ? 'Event' : 'News';
    form.setFieldValue('category', newCategory);
  };
  return (
    <Card sx={{ padding: 4 }}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
        onSubmit={form.onSubmit((values) => addPost(values))}>
        <Typography
          fontWeight="600"
          fontSize="26px"
          color="primary"
          component="h1"
          align="start">
          Make Your Post.
        </Typography>

        <TextInput
          label="Title"
          placeholder="Title..."
          key={form.key('title')}
          {...form.getInputProps('title')}
        />

        <Textarea
          placeholder="Description..."
          label="Description"
          autosize
          minRows={4}
          key={form.key('description')}
          {...form.getInputProps('description')}
        />

        <Switch
          color={category === 'Event' ? 'green' : 'gray'}
          label={category}
          onClick={handleToggleCategory}
          checked={category === 'Event'}
        />

        {category === 'Event' && (
          <>
            <SimpleGrid cols={2}>
              <DatePickerInput
                clearable
                defaultValue={new Date()}
                label="Start date"
                placeholder="Start Date"
                valueFormat="DD MMM YYYY"
                key={form.key('startDate')}
                {...form.getInputProps('startDate')}
              />
              <DatePickerInput
                clearable
                defaultValue={new Date()}
                label="End date"
                placeholder="End Date"
                valueFormat="DD MMM YYYY"
                key={form.key('endDate')}
                {...form.getInputProps('endDate')}
              />
            </SimpleGrid>

            <NumberInput
              label="Max Participant"
              placeholder="Participate"
              allowDecimal={false}
              allowNegative={false}
              key={form.key('maxParticipant')}
              {...form.getInputProps('maxParticipant')}
            />
          </>
        )}

        <Dropzone
          onDrop={handleDrop}
          onReject={handleReject}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          key={form.key('image')}
          {...form.getInputProps('image')}>
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: '52px',
                  height: '52px',
                  color: 'var(--mantine-color-blue-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: '52px',
                  height: '52px',
                  color: 'var(--mantine-color-red-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: '52px',
                  height: '52px',
                  color: 'var(--mantine-color-dimmed)',
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5MB
              </Text>
            </div>
          </Group>
        </Dropzone>

        <Button type="submit" fullWidth color="#75A47F">
          Submit
        </Button>
      </Box>
    </Card>
  );
}

export default PostForm;
