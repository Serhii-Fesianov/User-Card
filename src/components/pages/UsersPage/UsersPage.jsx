import { UserList } from 'components/UserList/UserList';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './UsersPage.module.css';

export const UsersPage = () => {
  return (
    <div className={s.wrapperPage}>
      <Link className={s.goBackStyle} to="/">
        Back
      </Link>
      <UserList />
    </div>
  );
};
