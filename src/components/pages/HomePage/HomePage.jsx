import { Header } from 'components/Header/Header';
import React from 'react';
import s from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={s.wrapperHomePage}>
      <Header />
    </div>
  );
};
