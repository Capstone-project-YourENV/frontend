import React from 'react';
import { Box } from '@mui/material';
import VolunteerDetail from '../components/Volunteer/VolunteerDetail';
import ParticipantList from '../components/Volunteer/ParticipantList';

const event = {
  title: 'In Conversation with Jeeya',
  dateRange: '18 August 2024 - 20 August 2024',
  author: {
    name: 'Ervalsa Dwi Nanda',
    role: 'Android Developer',
    image: 'https://i.pravatar.cc/300',
  },
  timeAgo: '2 hari yang lalu',
  content: {
    image: './src/assets/post.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel ex placerat, dictum quam nec, suscipit metus. Cras aliquet vulputate pretium. Morbi ultrices tempus enim nec aliquam. Nulla quis turpis tincidunt, sodales erat non, sagittis sem. Aliquam porttitor scelerisque ex a faucibus. Donec ac felis sed nulla elementum rutrum. Integer dictum elementum erat.Vivamus rutrum quis augue ac ultricies. Donec a lacus vulputate, tristique nisi id, malesuada erat. Maecenas leo ipsum, mollis id ante ac, iaculis consectetur mauris. Nullam ligula ex, bibendum eu bibendum blandit, cursus eget justo. Duis nec ante at lorem lacinia consequat a vel neque. Cras vel felis sed eros condimentum pretium. Ut egestas diam augue, a ultrices libero feugiat iaculis.',
  },
  registered: {
    current: 3,
    max: 20,
  },
};

// Buat data peserta langsung di dalam halaman VolunteerDetailPage
const participants = [
  {
    name: 'John Doe',
    role: 'Web Developer',
    image: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    image: 'https://i.pravatar.cc/300',
  },
  {
    name: 'Alice Johnson',
    role: 'Product Manager',
    image: 'https://i.pravatar.cc/300',
  },
];

const DetailPostPage = () => (
  <Box padding={3} sx={{ fontFamily: 'Plus Jakarta Sans' }}>
    <VolunteerDetail event={event} />
    <ParticipantList participants={participants} />
  </Box>
);

export default DetailPostPage;
