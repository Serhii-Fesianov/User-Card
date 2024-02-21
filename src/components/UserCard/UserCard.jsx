import React from 'react';
import s from './UserCard.module.css';
import { LogoComponent } from 'components/LogoComponent/LogoComponent';
import { ContentImage } from 'components/ContentImage/ContentImage';

export const UserCard = () => {
  return (
    <div className={s.wrapperUser}>
      <LogoComponent />
      <ContentImage />
      <span className={s.styleLine}></span>
      <span className={s.styleLineImageUser}>
        <img src="" alt="" width={80} height={80} className={s.styleAvatar} />
      </span>
      <p className={s.styleTextTw}>TWEETS</p>
      <p className={s.styleTextFl}>FOLLOWERS</p>
      <button className={s.styleButton}>FOLLOW</button>
    </div>
  );
};
