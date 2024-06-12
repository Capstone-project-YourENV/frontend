import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/Company/Header';
import ListEvent from '../components/ListEvent';
import { asyncReceiveUserDetail } from '../states/userDetail/thunk';
import LayoutHomepage from '../layouts/LayoutHomepage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function UserPage() {
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
    <>
      <Navbar />
      <LayoutHomepage>
        <Header user={userDetail} />
        <ListEvent title="Current Event" events={currentEvent} />
        <ListEvent title="Past Event" events={userDetail?.recentEvents} />
      </LayoutHomepage>
      <Footer />
    </>
  );
}

export default UserPage;
