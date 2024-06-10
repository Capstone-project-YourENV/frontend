import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import MainbarForum from '../layouts/MainbarForum';
import SidebarContent from '../components/forumapp/SidebarContent';
import ListPost from '../components/ListPost';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncForumPostAndUsersByUpcoming } from '../states/shared/thunk';

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

function BookmarkPage() {
  const authUser = useSelector((state) => state.authUser);
  const upcomingPosts = useSelector((state) => state.posts.data);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncForumPostAndUsersByUpcoming());
  }, [dispatch]);

  const upcomingList = upcomingPosts?.map((post) => ({
    ...post,
    owner: users.find((user) => user.id === post.ownerId),
  }));
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} />
      <MainbarForum>
        <ListPost title="Coming Soon" events={upcomingList} />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default BookmarkPage;
