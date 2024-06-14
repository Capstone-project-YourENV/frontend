import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarContent from '../components/forumapp/SidebarContent';
import Header from '../components/Company/Header';
import ListPost from '../components/ListPost';
import MainbarForum from '../layouts/MainbarForum';
import { asyncReceiveUserDetail } from '../states/userDetail/thunk';

function UserForumPage() {
  const userDetail = useSelector((state) => state.userDetail);
  const authUser = useSelector((state) => state.authUser);
  const { userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveUserDetail(userId));
  }, [dispatch]);

  const currentEvent = userDetail?.recentEvents
    ?.sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 2);

  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} />
      <MainbarForum>
        <Header user={userDetail} />
        <ListPost title="Current Event" posts={currentEvent} />
        {userDetail?.role === 'company' && (
          <ListPost title="Past Event" posts={userDetail?.posts} />
        )}
        {userDetail?.role === 'user' && (
          <>
            <ListPost title="Past Event" posts={userDetail?.recentEvents} />
            <ListPost title="News" posts={userDetail?.posts} />
          </>
        )}
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default UserForumPage;
