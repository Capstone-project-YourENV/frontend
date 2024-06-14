import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutForumApp from '../layouts/LayoutForumApp';
import MainbarForum from '../layouts/MainbarForum';
import SidebarContent from '../components/forumapp/SidebarContent';
import ListPost from '../components/ListPost';
import { asyncForumPostsAndUsersByUpcoming } from '../states/shared/thunk';

function RecentEventsPage() {
  const authUser = useSelector((state) => state.authUser);
  const upcomingPosts = useSelector((state) => state.posts.data);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncForumPostsAndUsersByUpcoming());
  }, [dispatch]);

  const recentEventsList = upcomingPosts?.map((post) => ({
    ...post,
    owner: users.find((user) => user.id === post.ownerId),
  }));
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} />
      <MainbarForum>
        <ListPost title="Recent Events" posts={recentEventsList} />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default RecentEventsPage;
