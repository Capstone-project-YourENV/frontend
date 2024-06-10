import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import LayoutForumApp from '../layouts/LayoutForumApp';
import MainbarForum from '../layouts/MainbarForum';
import DetailPost from '../components/DetailPost';
import ListParticipant from '../components/ListParticipant';
import CreateComment from '../components/forumapp/CreateComment';
import ListComment from '../components/forumapp/ListComment';
import SidebarContent from '../components/forumapp/SidebarContent';
import { asyncReceivePostDetail } from '../states/postDetail/thunk';

function DetailForumPage() {
  const authUser = useSelector((state) => state.authUser);
  const postDetail = useSelector((state) => state.postDetail);
  const { postId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceivePostDetail(postId));
  }, [postId, dispatch]);

  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} />
      <MainbarForum>
        <DetailPost
          authUser={authUser}
          title={postDetail?.title}
          description={postDetail?.description}
          maxParticipant={postDetail?.maxParticipant}
          participants={postDetail?.participants}
          owner={postDetail?.owner}
          createdAt={postDetail?.createdAt}
          category={postDetail?.category}
        />
        {/* <ListParticipant participant={postDetail?.participant} /> */}
        <CreateComment />
        <ListComment comments={postDetail?.comments} />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default DetailForumPage;
