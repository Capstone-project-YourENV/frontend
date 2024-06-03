import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarForum from '../layouts/SidebarForum';
import MainbarForum from '../layouts/MainbarForum';
import CardUser from '../components/forumapp/CardUser';
import RecentEvents from '../components/forumapp/RecentEvent';
import CreatePost from '../components/forumapp/CreatePost';
import CardPost from '../components/forumapp/CardPost';
import SidebarContent from '../components/forumapp/SidebarContent';

const authUser = {
  name: 'Ervalsa Dwi Nanda',
  avatar: 'https://i.pravatar.cc/300',
  headTitle: 'Software Engineer',
};

const events = [
  {
    id: '21ad3',
    title: 'COVID-19',
  },
  {
    id: '21ad3f',
    title: 'Comptabilité - Problème Baisse de Charges',
  },
];

const dummyData = Array.from({ length: 20 }, (_, index) => ({
  id: `${index + 1}`,
  title: `Title ${index + 1}`,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  owner: {
    name: `Owner ${index + 1}`,
    avatar: `https://i.pravatar.cc/300?u=${index}`,
    headTitle: `Software Engineer ${index + 1}`,
  },
  startDate: '12 Agustus 2023',
  endDate: '15 Agustus 2023',
  createdAt: '12 Agustus 2023',
  participant: '21 / 30',
}));

function ForumPage() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // fetch with API
  // const fetchData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await fetch(dummyData);
  //     const newData = await response.json();

  //     setData([...data, ...newData]);
  //     setHasMore(newData.length === 10);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   setIsLoading(false);
  // };

  // fetch with data dummy
  const fetchData = async () => {
    setIsLoading(true);

    try {
      // Simulasikan penundaan seperti dalam permintaan jaringan
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Ambil 10 data pertama dari dummyData
      const newData = dummyData.slice(0, 10);

      setData([...data, ...newData]);
      setHasMore(newData.length === 10);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchMoreData = () => {
    fetchData();
  };
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} events={events} />
      <MainbarForum>
        <CreatePost />
        <InfiniteScroll
          style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <CircularProgress
              sx={{ display: 'block', margin: 'auto', marginY: 2 }}
            />
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              {isLoading ? 'Loading...' : 'No more data'}
            </p>
          }>
          {data.map((post, index) => (
            <CardPost
              key={index}
              id={post.id}
              title={post.title}
              content={post.content}
              owner={post.owner}
              startDate={post.startDate}
              endDate={post.endDate}
              createdAt={post.createdAt}
              participant={post.participant}
            />
          ))}
        </InfiniteScroll>
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default ForumPage;
