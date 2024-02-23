import { useDispatch } from 'react-redux';
import s from './App.module.css';
import { useEffect } from 'react';
import { fetchUsers } from './redux/operation';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { HomePageContent } from './HomePageContent/HomePageContent';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className={s.wrapperBox}>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/" element={<HomePageContent />} />
        </Route>
        <Route path="users" element={<UsersPage />} />
      </Routes>
    </div>
  );
};
