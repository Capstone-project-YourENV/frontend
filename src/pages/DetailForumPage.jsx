import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LayoutForumApp from '../layouts/LayoutForumApp';
import SidebarForum from '../layouts/SidebarForum';
import CardUser from '../components/forumapp/CardUser';
import RecentEvents from '../components/forumapp/RecentEvent';
import MainbarForum from '../layouts/MainbarForum';
import DetailPost from '../components/DetailPost';
import ListParticipant from '../components/ListParticipant';
import ParticipantItem from '../components/ParticipantItem';
import CreateComment from '../components/forumapp/CreateComment';

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

const detailForum = {
  category: 'event',
  title: 'Comptabilité - Problème Baisse de Charges',
  owner: {
    name: 'Ervalsa Dwi Nanda',
    avatar: 'https://i.pravatar.cc/300',
    headline: 'Software Engineer',
  },
  createdAt: '21 August 2023',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const participant = Array.from({ length: 20 }, (_, index) => ({
  name: `Participant ${index + 1}`,
  avatar: `https://i.pravatar.cc/300?u=${index}`,
  headline: `Software Engineer ${index + 1}`,
}));

function DetailForumPage() {
  const groupParticipants = (participants, itemsPerGroup) => {
    const groups = [];
    for (let i = 0; i < participants.length; i += itemsPerGroup) {
      groups.push(participants.slice(i, i + itemsPerGroup));
    }
    return groups;
  };
  const groupedParticipants = groupParticipants(participant, 4);
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
        <DetailPost
          title={detailForum.title}
          content={detailForum.content}
          owner={detailForum.owner}
          createdAt={detailForum.createdAt}
          category={detailForum.category}
        />
        <ListParticipant>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="rounded-lg">
            {groupedParticipants.map((group, index) => (
              <SwiperSlide key={index}>
                <div
                  className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-1'>
                  {group.map((item, idx) => (
                    <ParticipantItem key={idx} {...item} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ListParticipant>
        <CreateComment />
      </MainbarForum>
    </LayoutForumApp>
  );
}

export default DetailForumPage;
