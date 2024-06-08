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
  recentEvents: [
    {
      id: '1',
      title: 'Event 1',
    },
  ],
};

const posts = Array.from({ length: 100 }, (_, index) => ({
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
        if (authUser) {
          resolve(authUser);
        } else {
          reject(new Error('Not found'));
        }
      }, 1000);
    });
  };

  // Fungsi untuk mendapatkan daftar postingan
  const getPosts = async (page = 1, limit = 10) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const start = (page - 1) * limit;
        const end = start + limit;
        const paginatedPosts = posts.slice(start, end);
        if (paginatedPosts.length > 0) {
          resolve({ posts: paginatedPosts, hasMore: end < posts.length });
        } else {
          reject(new Error('No more posts'));
        }
      }, 1000);
    });
  };

  // Fungsi untuk mendapatkan detail postingan berdasarkan ID
  const getDetailPost = async (postId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (detailPost) {
          resolve(detailPost);
        } else {
          reject(new Error('Not found'));
        }
      }, 1000);
    });
  };

  // Fungsi untuk mendapatkan daftar pengguna
  const getUsers = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (users.length > 0) {
          resolve(users);
        } else {
          reject(new Error('Not found'));
        }
      }, 1000);
    });
  };

  const createPost = async (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error('Not found'));
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
