import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarContent from '../components/forumapp/SidebarContent';
import MainbarForum from '../layouts/MainbarForum';
import TableParticipant from '../components/forumapp/TableParticipant';

const authUser = {
  name: 'Ervalsa Dwi Nanda',
  avatar: 'https://i.pravatar.cc/300',
  headTItle: 'Software Engineer',
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

function JoinParticipantPage() {
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} events={events} />
      <MainbarForum>
        <TableParticipant />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default JoinParticipantPage;
