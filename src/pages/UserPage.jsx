import React, { useEffect } from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarContent from '../components/forumapp/SidebarContent';
import Header from '../components/Company/Header';
import Event from '../components/Company/Event';
import { Container, Typography, Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import ListEvent from '../components/ListEvent';
import MainbarForum from '../layouts/MainbarForum';
import { asyncReceiveUserDetail } from '../states/userDetail/thunk';
import { useParams } from 'react-router';

function UserPage() {
  const authUser = useSelector((state) => state.authUser);
  const userDetail = useSelector((state) => state.userDetail);
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
        <ListEvent title="Current Event" events={currentEvent} />
        <ListEvent title="Past Event" events={userDetail?.recentEvents} />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default UserPage;
