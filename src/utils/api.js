const api = (() => {
  // const BASE_URL = 'https://comment.yourcodeapp.com/api';
  const BASE_URL = 'http://localhost:5000/api';

  function putAcessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAcessToken() {
    return localStorage.getItem('accessToken');
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        token: `${getAcessToken()}`,
      },
    });
  }

  async function register({ username, email, password, role }) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        role: role || 'user',
      }),
    });
    const responseJson = await response.json();

    const { errors } = responseJson;
    if (errors) {
      const errorMessage = errors.map((error) => error.msg).join('\n');
      throw new Error(errorMessage);
    }

    const { data } = responseJson;
    return data;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const responseJson = await response.json();

    const { errors } = responseJson;
    if (errors) {
      const errorMessage = errors.map((error) => error.msg).join('\n');
      throw new Error(errorMessage);
    }
    const { token } = responseJson;
    return token;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/profile/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseJson = await response.json();
    const { status, msg, message } = responseJson;
    if (msg || status !== 'success') {
      throw new Error(msg || message);
    }
    const { data } = responseJson;
    return data;
  }

  async function getPosts(page) {
    const response = await _fetchWithAuth(`${BASE_URL}/events/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    const { data, error } = responseJson;
    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return data;
  }

  async function createPost(data) {
    const {
      title,
      description,
      image,
      startDate,
      endDate,
      maxParticipant,
      category,
    } = data;
    const response = await _fetchWithAuth(`${BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        image,
        startDate,
        endDate,
        maxParticipant,
        category,
      }),
    });
    const responseJson = await response.json();
    console.log(responseJson);
    const { error } = responseJson;
    if (error) {
      throw new Error(error.message);
    }
    return responseJson;
  }
  async function editPost(data) {
    const {
      id,
      title,
      description,
      image,
      startDate,
      endDate,
      maxParticipant,
      category,
    } = data;
    const response = await _fetchWithAuth(`${BASE_URL}/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        title,
        description,
        image,
        startDate,
        endDate,
        maxParticipant,
        category,
      },
    });
    const responseJson = await response.json();
    const { error } = responseJson;
    if (error) {
      throw new Error(error.message);
    }
    return responseJson;
  }
  async function deletePost(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    const { error } = responseJson;
    if (error) {
      throw new Error(error.message);
    }
    return responseJson;
  }

  return {
    register,
    login,
    putAcessToken,
    getAcessToken,
    _fetchWithAuth,
    getOwnProfile,
    getPosts,
    createPost,
    editPost,
    deletePost,
  };
})();

export default api;
