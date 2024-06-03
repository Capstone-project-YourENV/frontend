import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarForum from '../layouts/SidebarForum';
import CardUser from '../components/forumapp/CardUser';
import RecentEvents from '../components/forumapp/RecentEvent';
import MainbarForum from '../layouts/MainbarForum';
import PostForm from '../components/forumapp/PostForm';
import SidebarContent from '../components/forumapp/SidebarContent';

const authUser = {
  name: 'Ervalsa Dwi Nanda',
  avatar: 'https://i.pravatar.cc/300',
  headTitle: 'Software Engineer',
};

const events = [
  {
    id: '21ad3',
    title: 'COVID-19',
  },
  {
    id: '21ad3f',
    title: 'Comptabilité - Problème Baisse de Charges',
  },
];
function CreateForumPage() {
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} events={events} />
      <MainbarForum>
        <PostForm />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default CreateForumPage;
