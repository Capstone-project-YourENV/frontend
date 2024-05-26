import * as React from 'react';
import { Typography, Card, CardContent, CardHeader, Box } from '@mui/material';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { useLocation, useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function EventItem({ title, url }) {
  const location = useLocation();
  const isActive = location.pathname.includes('/:eventId');
  return (
    <Link to={url}>
      <Box
        display="flex"
        gap={1}
        justifyContent="flex-start"
        mt={1.5}
        underline="none"
        color={isActive ? 'green' : 'inherit'}
        textAlign="center"
        whiteSpace="nowrap"
        sx={{
          '&:hover': {
            color: 'green',
          },
        }}>
        <Diversity2Icon />
        <Typography variant="body2" noWrap>
          {title}
        </Typography>
      </Box>
    </Link>
  );
}

function RecentEvents({ events }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        borderRadius: '12px',
      }}
      className="w-full lg:w-[256px]">
      <CardHeader
        title={
          <Typography component="header" fontWeight="bold">
            Recent Events
          </Typography>
        }
        sx={{ paddingBottom: 0 }}
      />

      <CardContent sx={{ paddingTop: 0 }}>
        {events.map((event, index) => (
          <EventItem
            key={index}
            url={() => navigate(`/event/${event.id}`)}
            title={event.title}
          />
        ))}
      </CardContent>
    </Card>
  );
}

const EventsItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

EventItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

RecentEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape(EventsItemShape)).isRequired,
};

export default RecentEvents;
