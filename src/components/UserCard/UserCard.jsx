import React, { useState } from 'react';
import s from './UserCard.module.css';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import { ContentImage } from 'components/ContentImage/ContentImage';
import { updateUser } from 'services/services';

export const UserCard = ({ user }) => {
  const [_user, setUser] = useState(user);
  const handleFolow = item => {
    try {
      (async () => {
        const user = await updateUser(item);
        setUser(user);
      })();
    } catch (error) {
      return error;
    }
  };
  function getChangedFollowers(followers) {
    const numberString = followers.toString();
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    return numberString.replace(regex, '$1,');
  }
  return (
    <li className={s.wrapperUser}>
      <LogoComponent />
      <ContentImage />
      <span className={s.styleLine}></span>
      <span className={s.styleLineImageUser}>
        <img
          src={_user.avatar}
          alt="avatar"
          width={80}
          height={80}
          className={s.styleAvatar}
        />
      </span>
      <p className={s.styleTextTw}>
        {getChangedFollowers(_user.tweets)} TWEETS
      </p>
      <p className={s.styleTextFl}>
        {getChangedFollowers(_user.followers)} FOLLOWERS
      </p>
      <button
        className={_user.isFollowing ? s.styleButtonFollowing : s.styleButton}
        type="button"
        onClick={() => handleFolow(_user)}
      >
        {_user.isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </li>
  );
};
