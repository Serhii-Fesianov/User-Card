import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
  return (
    <>
      <section className={s.styleHeaderSection}>
        <nav>
          <ul className={s.styleListNavigation}>
            <li className={s.item}>
              <NavLink to="/" className={s.styleLink}>
                Home page
              </NavLink>
            </li>
            <li>
              <NavLink to="tweets" className={s.styleLink}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
      <Outlet />
    </>
  );
};
