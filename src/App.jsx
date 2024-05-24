import React from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';
import HomePage from './pages/HomePage';

function App() {
  const authUser = null;

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
}

export default App;
