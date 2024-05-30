import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarForum from '../layouts/SidebarForum';
import CardUser from '../components/forumapp/CardUser';
import RecentEvents from '../components/forumapp/RecentEvent';
import MainbarForum from '../layouts/MainbarForum';
import PostForm from '../components/forumapp/PostForm';

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
      <SidebarForum>
        <CardUser
          name="Ervalsa Dwi Nanda"
          image="https://i.pravatar.cc/300"
          headline="Software Engineer"
        />
        <RecentEvents events={events} />
      </SidebarForum>
      <MainbarForum>
        <PostForm />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default CreateForumPage;
