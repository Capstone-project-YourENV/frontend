import React from 'react';
import 'mantine-react-table/styles.css';
import {
  flexRender,
  MRT_GlobalFilterTextInput,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  useMantineReactTable,
  MRT_TableBodyCellValue,
  MantineReactTable,
} from 'mantine-react-table';
import { FaCheck } from 'react-icons/fa6';
import {
  Button,
  Divider,
  Flex,
  Menu,
  Stack,
  Table,
  Title,
} from '@mantine/core';
import { IconSend, IconUserCircle } from '@tabler/icons-react';

const data = [
  {
    id: 1,
    email: 'NQpP1@example.com',
    name: 'John Doe',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  {
    id: 2,
    email: 'NQpP1@example.com',
    name: 'Jane Doe',
    address: '456 Main St',
    city: 'New York',
    state: 'NY',
  },
];

const columns = [
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'name',
    header: 'Last Name',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },
];

function TableParticipant() {
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
              disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
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
  return <MantineReactTable table={table} />;
}

export default TableParticipant;
