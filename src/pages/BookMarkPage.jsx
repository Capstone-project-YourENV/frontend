import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutForumApp from '../layouts/LayoutForumApp';
import MainbarForum from '../layouts/MainbarForum';
import SidebarContent from '../components/forumapp/SidebarContent';
import ListPost from '../components/ListPost';
import { asyncForumPostsAndUsersBookmark } from '../states/shared/thunk';

function BookmarkPage() {
  const postsBookmark = useSelector((state) => state.posts.data);
  const authUser = useSelector((state) => state.authUser);
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncForumPostsAndUsersBookmark(authUser.id));
  }, [dispatch]);

  const bookmarkList = postsBookmark?.map((post) => ({
    ...post,
    owner: users.find((user) => user.id === post.ownerId),
  }));
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} />
      <MainbarForum>
        <ListPost title="Bookmark" posts={bookmarkList} />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default BookmarkPage;
