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

    const { status, message, msg } = responseJson;

    if (msg || status !== 'success') {
      throw new Error(message || msg);
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

    const {
      data: { token },
    } = responseJson;
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
  return {
    register,
    login,
    putAcessToken,
    getAcessToken,
    _fetchWithAuth,
    getOwnProfile,
  };
})();

export default api;
