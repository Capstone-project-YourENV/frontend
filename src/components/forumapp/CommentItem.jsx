import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import useExpand from '../../hooks/useExpand';
import ownerShape from '../../types/Owner';

function CommentItem({ owner, createdAt, content }) {
  const [isExpanded, handleExpand] = useExpand(false);
  return (
    <Card
      sx={{
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        borderRadius: '10px',
      }}
    >
      <Box className="flex gap-2.5 max-md:flex-wrap flex-col sm:flex-row items-center">
        <Avatar loading="lazy" src={owner.avatar} alt={owner.name} />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          paddingY={1}
          className="flex-1 max-md:max-w-full"
        >
          <Typography
            fontWeight="600"
            color="black"
            className="text-xl max-md:max-w-full"
          >
            {owner.name}
          </Typography>
          <div className="text-sm text-zinc-500 max-md:max-w-full">
            {owner.headline}
          </div>
        </Box>
        <Typography alignSelf="start" fontWeight="400" color="black">
          {createdAt}
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        {isExpanded ? content : `${content.substring(0, 100)}...`}
        <Button onClick={handleExpand} color="primary">
          {isExpanded ? 'Show less' : 'Show more'}
        </Button>
      </Typography>
    </Card>
  );
}

CommentItem.propTypes = {
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CommentItem;
