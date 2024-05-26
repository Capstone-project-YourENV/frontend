import React from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';

function App() {
  // const authUser = null;
  const authUser = {
    id: 1,
    name: 'John Doe',
    email: 'VJk0G@example.com',
    profession: 'Software Engineer',
    avatar: 'https://i.pravatar.cc/300',
  };

  if (authUser == null) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/company" element={<RegisterCompany />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<ForumPage />} />
    </Routes>
  );
}

export default App;
