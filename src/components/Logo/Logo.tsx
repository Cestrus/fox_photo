import cn from 'classnames';
import React from 'react';

import styles from './Logo.module.css';
import logo from './logo.png';
import { LogoProps } from './Logo.props';
import logoFooter from './logo_footer.png';

const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <img
      src={type === 'header' ? logo : logoFooter}
      alt='logo'
      className={cn({
        [styles.logo]: type === 'header',
        [styles['logo_footer']]: type === 'footer',
      })}
    />
  );
};

export default Logo;
