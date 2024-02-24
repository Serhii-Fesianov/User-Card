import React, { useState } from 'react';
import s from './UserCard.module.css';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import { ContentImage } from 'components/ContentImage/ContentImage';

export const UserCard = ({ user }) => {
  const [_user, setUser] = useState(user);
  const [_isFollowing, setFollow] = useState(true);

  const handleFolow = () => {
    setUser(currentUser => {
      let changedUser = {
        isFollowing: _isFollowing,
        followers: _isFollowing
          ? currentUser.followers + 1
          : currentUser.followers - 1,
        avatar: currentUser.avatar,
        id: currentUser.id,
        user: currentUser.user,
        tweets: currentUser.tweets,
      };
      return changedUser;
    });
    setFollow(_isFollowing => (_isFollowing = !_isFollowing));
  };
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
      <p className={s.styleTextTw}>{_user.tweets} TWEETS</p>
      <p className={s.styleTextFl}>{_user.followers} FOLLOWERS</p>
      <button
        className={_user.isFollowing ? s.styleButtonFollowing : s.styleButton}
        type="button"
        onClick={() => handleFolow()}
      >
        {_user.isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </li>
  );
};
