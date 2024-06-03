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
  rem,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';

function PostForm() {
  const [category, setCategory] = useState('News');
  const handleToggle = () => {
    setCategory(category === 'News' ? 'Event' : 'News');
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
      >
        <Typography
          fontWeight="600"
          fontSize="26px"
          color="primary"
          component="h1"
          align="start">
          Make Your Post.
        </Typography>

        <TextInput label="Title" placeholder="Title..." />

        <Textarea
          placeholder="Description..."
          label="Description"
          autosize
          minRows={4}
        />

        <Switch
          color={category === 'Event' ? 'green' : 'gray'}
          label={category}
          onChange={handleToggle}
        />

        {category === 'Event' && (
          <>
            <SimpleGrid cols={2}>
              <DatePickerInput
                clearable
                defaultValue={new Date()}
                label="Pick date"
                placeholder="Start Date"
                valueFormat="DD MMM YYYY"
              />
              <DatePickerInput
                clearable
                defaultValue={new Date()}
                label="Pick date"
                placeholder="End Date"
                valueFormat="DD MMM YYYY"
              />
            </SimpleGrid>

            <NumberInput
              label="Max Participant"
              placeholder="Participate"
              allowDecimal={false}
              allowNegative={false}
            />
          </>
        )}

        <Dropzone
          onDrop={(files) => console.log('accepted files', files)}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}>
          <Group
            justify="center"
            gap="xl"
            mih={220}
            style={{ pointerEvents: 'none' }}>
            <Dropzone.Accept>
              <IconUpload
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-blue-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-red-6)',
                }}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto
                style={{
                  width: rem(52),
                  height: rem(52),
                  color: 'var(--mantine-color-dimmed)',
                }}
                stroke={1.5}
              />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>

        <Button fullWidth color="#75A47F">
          Submit
        </Button>
      </Box>
    </Card>
  );
}

export default PostForm;
