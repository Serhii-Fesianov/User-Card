import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { HomePageContent } from './HomePageContent/HomePageContent';

export const App = () => {
  return (
    <div className={s.wrapperBox}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<HomePageContent />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </div>
  );
};
