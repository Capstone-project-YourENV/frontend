import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Container } from '@mui/material';
import Header from '../components/Company/Header';
import ListEvent from '../components/ListEvent';
import { asyncReceiveUserDetail } from '../states/userDetail/thunk';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function UserPage() {
  const userDetail = useSelector((state) => state.userDetail);
  const { userId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveUserDetail(userId));
  }, [dispatch]);

  const currentEvent = [...(userDetail?.posts || [])]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <Container sx={{ my: 5 }}>
        <Header user={userDetail} />
        <ListEvent title="Current Event" events={currentEvent} />
        <ListEvent title="Past Event" events={userDetail?.posts} />
      </Container>
      <Footer />
    </>
  );
}

export default UserPage;
