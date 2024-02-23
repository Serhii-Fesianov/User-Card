import { UserCard } from 'components/UserCard/UserCard';
import { selectFilteredUsers } from 'components/redux/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import s from './UserList.module.css';

export const UserList = () => {
  const userList = useSelector(selectFilteredUsers);
  return (
    <>
      <ul className={s.styleList}>
        {userList.map(user => {
          return <UserCard key={user.id} user={user} />;
        })}
      </ul>
      <button className={s.styleLoadMore} type="button">
        Load More
      </button>
    </>
  );
};
