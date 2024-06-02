import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarForum from '../layouts/SidebarForum';
import CardUser from '../components/forumapp/CardUser';
import RecentEvents from '../components/forumapp/RecentEvent';
import MainbarForum from '../layouts/MainbarForum';
import DetailPost from '../components/Trending/DetailPage';
import SidebarContent from '../components/forumapp/SidebarContent';

const authUser = {
  name: 'Ervalsa Dwi Nanda',
  avatar: 'https://i.pravatar.cc/300',
  headTitle: 'Software Engineer',
};

const recentevents = [
  {
    id: '21ad3',
    title: 'COVID-19',
  },
  {
    id: '21ad3f',
    title: 'Comptabilité - Problème Baisse de Charges',
  },
];

const detailForum = {
  category: 'volunteer',
  title: 'Comptabilité ahsahvb',
  name: 'Satria Testing',
  owner: {
    name: 'Ervalsa Dwi Nanda',
    avatar: 'https://i.pravatar.cc/300',
    headTitle: 'Software Engineer',
  },
  createdAt: '21 August 2023 - 21 September 2024',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   ',
  postImage: './src/assets/post.jpg',
  registered: 3,
  total: 50,
};

function BookmarkPage() {
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} events={recentevents} />
      <MainbarForum>
        <DetailPost
          title={detailForum.title}
          content={detailForum.content}
          owner={detailForum.owner}
          createdAt={detailForum.createdAt}
          category={detailForum.category}
          postImage={detailForum.postImage}
          name={detailForum.name}
          total={detailForum.total}
          registered={detailForum.registered}
        />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default BookmarkPage;
