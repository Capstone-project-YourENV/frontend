import React, { useState } from 'react';
import { Menu, Button, Modal, TextInput, Textarea, Group, Text } from '@mantine/core';
import { IconTrash, IconEdit, IconSettings2 } from '@tabler/icons-react';

function ButtonMenuCompany() {
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [deleteModalOpened, setDeleteModalOpened] = useState(false);

  const handleOpenEditModal = () => {
    setEditModalOpened(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpened(false);
  };

  const handleOpenDeleteModal = () => {
    setDeleteModalOpened(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpened(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleCloseEditModal();
  };

  const handleDelete = () => {
    // Handle delete logic here
    handleCloseDeleteModal();
  };

  return (
    <>
      <Menu shadow="md" width={150}>
        <Menu.Target>
          <Button color="#75A47F">
            <IconSettings2 style={{ paddingRight: '5px' }} />
            Properties
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Action</Menu.Label>
          <Menu.Item
            onClick={handleOpenEditModal}
            leftSection={<IconEdit style={{ width: '14px', height: '14px' }} />}
          >
            Edit Post
          </Menu.Item>
          <Menu.Item
            color="red"
            onClick={handleOpenDeleteModal}
            leftSection={<IconTrash style={{ width: '14px', height: '14px' }} />}
          >
            Delete Post
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Modal
        opened={editModalOpened}
        onClose={handleCloseEditModal}
        title="Edit Post"
        centered
      >
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Post Title"
            placeholder="Enter post title"
            required
          />
          <Textarea
            label="Post Description"
            placeholder="Enter post description"
            required
            mt="md"
          />
          <Group position="center" mt="md">
            <Button type="submit" style={{ width: '100%' }}>Save</Button>
          </Group>
        </form>
      </Modal>

      <Modal
        opened={deleteModalOpened}
        onClose={handleCloseDeleteModal}
        title="Confirm Deletion"
        centered
      >
        <Text>Are you sure you want to delete this post?</Text>
        <Group position="right" mt="md">
          <Button variant="outline" onClick={handleCloseDeleteModal}>Cancel</Button>
          <Button color="red" onClick={handleDelete}>Delete</Button>
        </Group>
      </Modal>
    </>
  );
}

export default ButtonMenuCompany;
