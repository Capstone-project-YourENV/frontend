const api = (() => {
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
        Authorization: `${getAcessToken()}`,
      },
    });
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;
    return user;
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

    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    const {
      data: { token },
    } = responseJson;

    return token;
  }
  return {
    register,
    login,
    putAcessToken,
    getAcessToken,
    _fetchWithAuth,
  };
})();

export default api;
