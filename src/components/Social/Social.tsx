import cn from 'classnames';
import React from 'react';

import styles from './Social.module.css';
import { SocialProps } from './Social.props';

const Social: React.FC<SocialProps> = ({ type, fn }) => {
  return (
    <div
      className={cn(styles.social, {
        [styles.vc]: type === 'vc',
        [styles.insta]: type === 'insta',
      })}
      onClick={(): void => fn(type)}
    ></div>
  );
};

export default Social;
