import * as React from 'react';
import { BookmarkBorder } from '@mui/icons-material';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { FaUserPlus } from 'react-icons/fa6';
import useExpand from '../hooks/useExpand';
import { formatDate } from '../utils/date';
import { Link } from 'react-router-dom';

function AuthorDetails({ name }) {
  return (
    <div className="flex gap-1 mt-2 font-medium text-gray-500 max-md:flex-wrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/177c2bb64365aa4be382228fe5d51fdef2fd2507af3c469dca966b2a3df09ade?apiKey=9c369d6348cd4976857d696a1bdb516d&"
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <span className="flex-1 max-md:max-w-full">{name}</span>
    </div>
  );
}

function Stats({ registeredCount, totalCount }) {
  return (
    <div className="flex gap-2 items-center">
      <FaUserPlus />
      <span className="text-sm">
        {registeredCount} / {totalCount} Participant
      </span>
    </div>
  );
}

function Bookmark() {
  return (
    <Button className="flex gap-1.5 whitespace-nowrap focus:outline-none">
      <BookmarkBorder fontSize="small" className="shrink-0" />
      <span className="my-auto">Bookmark</span>
    </Button>
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
    total,
    registered,
  } = props;
  const [isExpanded, handleExpand] = useExpand(false);

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
        <CardContent className="flex flex-col p-6 w-full max-md:px-5 max-md:max-w-full">
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            className="text-2xl leading-8 max-md:max-w-full">
            {title}
          </Typography>
          <AuthorDetails name={owner?.username} />
          <Typography
            variant="body2"
            component="time"
            className="mt-2 font-semibold text-gray-500 max-md:max-w-full">
            {formatDate(startDate)} - {formatDate(endDate)}
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className="mt-4 font-medium max-md:max-w-full">
            {isExpanded ? description : `${description?.substring(0, 100)}...`}
            <Button onClick={handleExpand} color="primary">
              {isExpanded ? 'Show less' : 'Show more'}
            </Button>
          </Typography>
          <div className="flex gap-5 pr-20 mt-4 text-base text-gray-700 max-md:flex-wrap max-md:pr-5">
            <Stats registeredCount={registered} totalCount={total} />
            <Bookmark />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostByCategory;
