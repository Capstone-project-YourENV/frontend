import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import LayoutForumApp from '../layouts/LayoutForumApp';
import MainbarForum from '../layouts/MainbarForum';
import DetailPost from '../components/DetailPost';
import ListParticipant from '../components/ListParticipant';
import CreateComment from '../components/forumapp/CreateComment';
import ListComment from '../components/forumapp/ListComment';
import SidebarContent from '../components/forumapp/SidebarContent';
import { asyncReceivePostDetail } from '../states/postDetail/thunk';
import { asyncDeletePost, asyncEditPost } from '../states/posts/thunk';

function DetailForumPage() {
  const authUser = useSelector((state) => state.authUser);
  const postDetail = useSelector((state) => state.postDetail);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditPost = async (data) => {
    const { error } = await dispatch(asyncEditPost(data));
    if (!error) {
      dispatch(asyncReceivePostDetail(postId));
    }
  };

  const handleDeletePost = async (id) => {
    const { error } = await dispatch(asyncDeletePost(id));
    if (!error) {
      navigate('/');
    }
  };

  useEffect(() => {
    dispatch(asyncReceivePostDetail(postId));
  }, [postId, dispatch]);

  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} />
      <MainbarForum>
        <DetailPost
          authUser={authUser}
          id={postDetail?.id}
          title={postDetail?.title}
          image={postDetail?.image}
          description={postDetail?.description}
          maxParticipant={postDetail?.maxParticipant}
          participants={postDetail?.participants}
          owner={postDetail?.owner}
          createdAt={postDetail?.createdAt}
          startDate={postDetail?.startDate}
          endDate={postDetail?.endDate}
          category={postDetail?.category}
          editPost={handleEditPost}
          deletePost={handleDeletePost}
        />
        {authUser?.role !== 'company' &&
          postDetail?.owner?.id !== authUser?.id && (
            <MainbarForum>
              <ListParticipant participant={postDetail?.participants} />
              <CreateComment />
              <ListComment comments={postDetail?.comments} />
            </MainbarForum>
        )}
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default DetailForumPage;
