import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarContent from '../components/forumapp/SidebarContent';
import MainbarForum from '../layouts/MainbarForum';
import TableParticipant from '../components/forumapp/TableParticipant';

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

const data = [
  {
    id: 1,
    name: 'John Doe',
    email: 'NQpP1@example.com',
    createdAt: '2022-01-01',
    absent: 'https://random.imagecdn.app/500/150',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'NQpP1@example.com',
    address: '456 Main St',
    createdAt: '2022-01-01',
    absent: 'https://random.imagecdn.app/500/150',
  },
];

function JoinParticipantPage() {
  return (
    <LayoutForumApp>
      <SidebarContent user={authUser} events={events} />
      <MainbarForum>
        <TableParticipant
          title="Comptabilité - Problème Baisse de Charges"
          data={data}
        />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default JoinParticipantPage;
