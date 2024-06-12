import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarContent from '../components/forumapp/SidebarContent';
import MainbarForum from '../layouts/MainbarForum';
import ListPost from '../components/ListPost';
import { asyncForumPostsAndUsersByTrends } from '../states/shared/thunk';

function TrendingForumPage() {
  const authUser = useSelector((state) => state.authUser);
  const trendingPost = useSelector((state) => state.posts.data);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncForumPostsAndUsersByTrends());
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
