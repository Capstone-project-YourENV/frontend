import React from 'react';
import {
  Grid,
  Typography,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';

function ListParticipant({ children }) {
  return (
    <Grid width="100%" container gap="15px">
      <Grid
        width="100%"
        flexDirection="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          style={{
            fontSize: 20,
            fontWeight: '700',
            wordWrap: 'break-word',
          }}
        >
          Participant
        </Typography>
      </Grid>
      <Box width="100%">{children}</Box>
    </Grid>
  );
}

ListParticipant.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListParticipant;
