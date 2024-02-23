import React from 'react';
import s from './HomePageContent.module.css';

export const HomePageContent = () => {
  return (
    <div className={s.wrapperContent}>
      <h1 className={s.titleHomePage}>Hello Friend🙋!</h1>
      <p className={s.textContent}>Welcom to the club😉!</p>
    </div>
  );
};
