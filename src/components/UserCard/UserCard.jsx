import React from 'react';
import s from './UserCard.module.css';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import { ContentImage } from 'components/ContentImage/ContentImage';

export const UserCard = ({ user }) => {
  return (
    <div className={s.wrapperUser}>
      <LogoComponent />
      <ContentImage />
      <span className={s.styleLine}></span>
      <span className={s.styleLineImageUser}>
        <img
          src={user.avatar}
          alt="avatar"
          width={80}
          height={80}
          className={s.styleAvatar}
        />
      </span>
      <p className={s.styleTextTw}>{user.tweets} TWEETS</p>
      <p className={s.styleTextFl}>{user.followers} FOLLOWERS</p>
      <button className={s.styleButton} type="button">
        FOLLOW
      </button>
    </div>
  );
};
