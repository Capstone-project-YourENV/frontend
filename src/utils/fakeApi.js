const authUser = {
  id: '1',
  username: 'Ers',
  email: 'NQpP1@example.com',
  role: 'user',
  profile: {
    name: 'Ervalsa Dwi Nanda',
    photo: 'https://i.pravatar.cc/300',
    headTitle: 'Software Engineer',
    phone: '+62 xxx xxxx xxx',
  },
  recentEvent: [
    {
      id: '1',
      title: 'Event 1',
    },
  ],
};

const posts =  Array.from({ length: 20 }, (_, index) => ({
    id: `12dad3-1412da-2134d-141w1-${index + 1}`,
    title: `Event ${index + 1}`,
    category: 'event',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    startDate: '2023-01-01',
    endDate: '2023-01-10',
    maxParticipant: 20,
    image: 'https://i.pravatar.cc/300',
    createdAt: '2023-01-01 00:00:00',
    ownerId: `${index + 1}`,
    bookmarks: [],
    totalParticipants: 1,
}));

const detailPost = {
  title: 'Event 1',
  category: 'event',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  startDate: '2023-01-01',
  endDate: '2023-01-10',
  maxParticipant: 20,
  image: 'https://i.pravatar.cc/300',
  createdAt: '2023-01-01 00:00:00',
  owner: {
    name: 'PT Pengembang Teknologi Indonesia',
    avatar: 'https://i.pravatar.cc/300',
    headTitle: 'Software Engineer',
  },
  participants: [],
  bookmarks: [],
  comments: [
    {
      id: 'comment-1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      createdAt: '2023-01-01 00:00:00',
      owner: {
        name: 'Ervalsa Dwi Nanda',
        avatar: 'https://i.pravatar.cc/300',
        headTitle: 'Software Engineer',
      },
    },
  ],
};

const users = Array.from({ length: 20 }, (_, index) => ({
  id: `${index + 1}`,
  username: `user${index + 1}`,
  email: `user${index + 1}@example.com`,
  role: 'user',
}));

const fakeApi = (() => {
  const getAuthUser = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = authUser;
        if (data) {
          const response = {
            status: 'success',
            msg: 'ok',
            data: { user: data },
          };
          const {
            data: { user },
          } = response;
          return resolve(user);
        } else {
          reject(new Error('Not found'));
        }
      }, 1000);
    });
  };

  const getPosts = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = posts;
        if (data) {
          const response = {
            status: 'success',
            msg: 'ok',
            data: { post: data },
          };
          const {
            data: { post },
          } = response;
          return resolve(post);
        } else {
          return reject(new Error('Not found'));
        }
      }, 1000);
    });
  };

  const getDetailPost = async (postId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = detailPost;
        if (data && data.id === postId) {
          const response = {
            status: 'success',
            msg: 'ok',
            data: { detailPost: data },
          };
          const {
            data: { detailPost },
          } = response;
          return resolve(response);
        } else {
          return reject(new Error('Not found'));
        }
      }, 1000);
    });
  };
  const getUsers = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = users;
        if (data) {
          const response = {
            status: 'success',
            msg: 'ok',
            data: { users: data },
          };
          const {
            data: { users },
          }
          return resolve(users);
        } else {
          return reject(new Error('Not found'));
        }
      }, 1000);
    });
  };

  return {
    getAuthUser,
    getPosts,
    getDetailPost,
    getUsers,
  };
})();

export default fakeApi;
