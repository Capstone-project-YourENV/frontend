import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutPage';
import Footer from './components/Footer';
import ForumPage from './pages/ForumPage';
import DetailForumPage from './pages/DetailForumPage';
import CreateForumPage from './pages/CreateForumPage';
import BookmarkPage from './pages/BookMarkPages';
import TrendingPage from './pages/TrendingPage';
import ComingSoonPage from './pages/ComingSoonPage';
import ProfilPage from './pages/ProfilPage';
import JoinParticipantPage from './pages/JoinParticipantPage';
import AbsentPage from './pages/AbsentPage';

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
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/user" element={<RegisterUser />} />
          <Route path="/register/company" element={<RegisterCompany />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<ForumPage />} />
      <Route path="/event/:eventId" element={<DetailForumPage />} />
      <Route path="/event/:id/participant" element={<JoinParticipantPage />} />
      <Route path="/event/:id/absent" element={<AbsentPage />} />
      <Route path="/create" element={<CreateForumPage />} />
      <Route path="/bookmark" element={<BookmarkPage />} />
      <Route path="/trending" element={<TrendingPage />} />
      <Route path="/comingsoon" element={<ComingSoonPage />} />
      <Route path="/Profil" element={<ProfilPage />} />
    </Routes>
  );
}

export default App;
