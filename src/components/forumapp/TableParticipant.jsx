import React, { useState } from 'react';
import 'mantine-react-table/styles.css';
import {
  MRT_GlobalFilterTextInput,
  useMantineReactTable,
  MantineReactTable,
} from 'mantine-react-table';
import { FaCheck, FaRegImage } from 'react-icons/fa6';
import { Box, Button, Flex, Image, Modal, Text } from '@mantine/core';
import PropTypes from 'prop-types';
import participantShape from '../../types/Participant';

const columns = [
  {
    accessorKey: 'name',
    header: 'Full Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];
function AbsentButton({ imageUrl, title }) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>
        <FaRegImage />
        {title}
      </Button>
      <Modal opened={opened} onClose={() => setOpened(false)} title={title}>
        <Image src={imageUrl} alt="Absent Image" />
      </Modal>
    </>
  );
}

function TableParticipant({ title, data }) {
  const table = useMantineReactTable({
    columns,
    data,
    enableFacetedValues: true,
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    mantinePaginationProps: {
      radius: 'xl',
      size: 'lg',
      rowsPerPageOptions: ['5', '10', '15'],
    },
    mantineSearchTextInputProps: {
      placeholder: 'Search Participant',
    },
    positionToolbarAlertBanner: 'bottom',
    paginationDisplayMode: 'pages',
    renderTopToolbar: ({ table }) => {
      const handleActivate = () => {
        table.getSelectedRowModel().flatRows.map((row) => {
          alert('activating ' + row.getValue('name'));
        });
      };

      return (
        <Flex p="md" justify="space-between">
          <Flex gap="xs">
            {/* import MRT sub-components */}
            <MRT_GlobalFilterTextInput table={table} />
            {/* <MRT_ToggleFiltersButton table={table} /> */}
          </Flex>
          <Flex style={{ gap: '8px' }}>
            <Button
              color="green"
              disabled={
                !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
              }
              onClick={handleActivate}
              variant="filled">
              <FaCheck />
              Approve
            </Button>
          </Flex>
        </Flex>
      );
    },
  });
  return (
    <Box style={{ gap: '15px', display: 'flex', flexDirection: 'column' }}>
      <Text size="lg" fw={700} style={{ color: '#75A47F' }}>
        List Participant
      </Text>
      <Text style={{ fontSize: '26px', fontWeight: 'bold' }}>{title}</Text>
      <MantineReactTable table={table} />
    </Box>
  );
}

TableParticipant.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape(participantShape).isRequired,
};

export default TableParticipant;
