import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';
import DetailPost from '../components/DetailPost';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { asyncReceivePostDetail } from '../states/postDetail/thunk';
import ListParticipant from '../components/ListParticipant';

function DetailPostPage() {
  const { postId } = useParams();
  const postDetail = useSelector((state) => state.postDetail);
  const dispatch = useDispatch();
  const fakeParticipants = [
    {
      id: '1',
      username: 'Ers',
      email: 'NQpP1@example.com',
      role: 'company',
      profile: {
        name: 'Ervalsa Dwi Nanda',
        photo: 'https://i.pravatar.cc/300',
        headTitle: 'Software Engineer',
        phone: '+62 xxx xxxx xxx',
      },
    },
  ];

  useEffect(() => {
    dispatch(asyncReceivePostDetail(postId));
  }, [postId, dispatch]);

  return (
    <>
      <Navbar />
      <Container
        sx={{ my: 5, display: 'flex', flexDirection: 'column', gap: 3 }}>
        <DetailPost
          id={postId}
          title={postDetail?.title}
          image={postDetail?.image}
          description={postDetail?.description}
          maxParticipant={postDetail?.maxParticipants}
          participants={postDetail?.participants}
          owner={postDetail?.owner}
          createdAt={postDetail?.createdAt}
          startDate={postDetail?.startDate}
          endDate={postDetail?.endDate}
          category={postDetail?.category}
        />
        {postDetail?.category === 'Event' && (
          <ListParticipant participant={fakeParticipants} variant="secondary" />
        )}
      </Container>
      <Footer />
    </>
  );
}

export default DetailPostPage;
