import React from 'react';
import s from './ContentImage.module.css';

const imageSrc = require('../../images/content.png');

export const ContentImage = () => {
  return (
    <div>
      <img
        src={imageSrc}
        alt="content"
        width={308}
        height={168}
        className={s.styleContentImage}
      />
    </div>
  );
};
