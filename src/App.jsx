import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import RegisterCompany from './pages/RegisterCompany';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutPage';
import ForumPage from './pages/ForumPage';
import DetailForumPage from './pages/DetailForumPage';
import CreateForumPage from './pages/CreateForumPage';
import BookmarkPage from './pages/BookMarkPages';
import TrendingPage from './pages/TrendingPage';
import ComingSoonPage from './pages/ComingSoonPage';
import ProfilPage from './pages/ProfilPage';
import JoinParticipantPage from './pages/JoinParticipantPage';
import AbsentPage from './pages/AbsentPage';
import { asyncPreloadProcess } from './states/isPreload/thunk';
import Navbar from './components/Navbar';
import { asyncUnsetAuthUSer } from './states/authentication/thunk';

function App() {
  const authUser = useSelector((state) => state.authUser);
  const isPreload = useSelector((state) => state.isPreload);
  console.log(authUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUSer());
    navigate('/');
  };

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser == null) {
    return (
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/user" element={<RegisterUser />} />
          <Route path="/register/company" element={<RegisterCompany />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </div>
    );
  }
  return (
    <>
      <Navbar authUser={authUser} signOut={onSignOut} />
      <Routes>
        <Route path="/" element={<ForumPage />} />
        <Route path="/event/:eventId" element={<DetailForumPage />} />
        <Route
          path="/event/:id/participant"
          element={<JoinParticipantPage />}
        />
        <Route path="/event/:id/absent" element={<AbsentPage />} />
        <Route path="/create" element={<CreateForumPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/comingsoon" element={<ComingSoonPage />} />
        <Route path="/profile" element={<ProfilPage />} />
      </Routes>
    </>
  );
}

export default App;
