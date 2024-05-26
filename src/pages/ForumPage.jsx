import React from 'react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarForum from '../layouts/SidebarForum';
import MainbarForum from '../layouts/MainbarForum';
import CardUser from '../components/forumapp/CardUser';
import RecentEvents from '../components/forumapp/RecentEvent';
import CreatePost from '../components/forumapp/CreatePost';
import CardPost from '../components/forumapp/CardPost';

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

const owner = {
  name: 'Ervalsa Dwi Nanda',
  avatar: 'https://i.pravatar.cc/300',
  headline: 'Software Engineer',
};

const dummyData = Array.from({ length: 10 }, (_, index) => ({
  title: `Title ${index + 1}`,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  owner: {
    name: `Owner ${index + 1}`,
    avatar: `https://i.pravatar.cc/300?u=${index}`,
    headline: `Software Engineer ${index + 1}`,
  },
  startDate: `12 Agustus 2023`,
  endDate: `15 Agustus 20223`,
  createdAt: `12 Agustus 2023`,
  participant: `21 / 30`,
}));

function ForumPage() {
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
        <CreatePost />
        {dummyData.map((data, index) => (
          <CardPost
            key={index}
            title={data.title}
            content={data.content}
            owner={owner}
            startDate={data.startDate}
            endDate={data.endDate}
            createdAt={data.createdAt}
            participant={data.participant}
          />
        ))}
        {/* <CardPost
          title="Comptabilité - Problème Baisse de Charges"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          owner={owner}
          startDate="12 Agustus 2023"
          endDate="15 Agustus 20223"
          createdAt="12 Agustus 2023"
          participant="21 / 30"
        /> */}
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default ForumPage;
