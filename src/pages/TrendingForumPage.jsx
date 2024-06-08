import React, { useEffect } from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarContent from '../components/forumapp/SidebarContent';
import MainbarForum from '../layouts/MainbarForum';
import ListPost from '../components/ListPost';
import { useDispatch, useSelector } from 'react-redux';
import { asyncForumPostAndUsersByTrends } from '../states/shared/thunk';

const detailForum = [
  {
    category: 'volunteer',
    title: 'Comptabilité ahsahvb',
    name: 'Satria Testing',
    owner: {
      name: 'Ervalsa Dwi Nanda',
      avatar: 'https://i.pravatar.cc/300',
      headTitle: 'Software Engineer',
    },
    createdAt: '21 August 2023 - 21 September 2024',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   ',
    postImage: './src/assets/post.jpg',
    registered: 3,
    total: 50,
  },
];

function TrendingForumPage() {
  const authUser = useSelector((state) => state.authUser);
  const trendingPost = useSelector((state) => state.posts.data);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncForumPostAndUsersByTrends());
  }, [dispatch]);

  const trendList = trendingPost?.map((post) => ({
    ...post,
    owner: users.find((user) => user.id === post.ownerId),
  }));
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} />
      <MainbarForum>
        <ListPost title="Trending" events={trendList} />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default TrendingForumPage;
