import * as React from 'react';
import { BookmarkBorder } from '@mui/icons-material';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { FaUser, FaUserPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date';
import Bookmark from './forumapp/Bookmark';

function AuthorDetails({ name }) {
  return (
    <div className="flex gap-1 mt-2 font-medium text-gray-500 max-md:flex-wrap">
      <FaUser />
      <span className="flex-1 max-md:max-w-full">{name}</span>
    </div>
  );
}

function Stats({ registeredCount, maxParticipants }) {
  return (
    <div className="flex gap-2 items-center">
      <FaUserPlus />
      <span className="text-sm">
        {registeredCount} / {maxParticipants} Participant
      </span>
    </div>
  );
}

function PostByCategory(props) {
  const {
    id,
    title,
    description,
    owner,
    startDate,
    endDate,
    category,
    postImage,
    maxParticipants,
    participants,
  } = props;
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const handleBookmark = (e) => {
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <Link to={`/posts/${id}`}>
      <Card className="flex flex-col self-stretch text-sm leading-5 bg-white rounded-lg max-w-[984px] text-zinc-800">
        <CardMedia
          component="img"
          loading="lazy"
          image={postImage}
          alt={title}
          className="w-full aspect-[8.33] max-md:max-w-full"
        />
        <CardContent className="flex flex-col p-6 w-full max-md:px-5 max-md:max-w-full gap-1">
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            className="text-2xl leading-8 max-md:max-w-full"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </Typography>
          <AuthorDetails name={owner?.profile?.name} />
          {category === 'Event' && (
            <Typography
              variant="body2"
              component="time"
              className="mt-2 font-semibold text-gray-500 max-md:max-w-full">
              {formatDate(startDate)} - {formatDate(endDate)}
            </Typography>
          )}
          <Typography
            variant="body2"
            component="p"
            className="mt-4 font-medium max-md:max-w-full"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            {description}
          </Typography>
          <div className="flex gap-5 pr-20 mt-4 text-base text-gray-700 max-md:flex-wrap max-md:pr-5">
            {category === 'Event' && (
              <Stats
                registeredCount={participants?.length}
                maxParticipants={maxParticipants}
              />
            )}
            <Bookmark onClick={handleBookmark} isBookmark={isBookmarked} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostByCategory;
