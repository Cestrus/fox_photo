import React from 'react';

import styles from './Logo.module.css';
import logo from './logo.png';
import { LogoProps } from './Logo.props';
import logoFooter from './logo_footer.png';

const Logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <div className={styles.logo}>
      <img src={type === 'header' ? logo : logoFooter} alt='logo' />
    </div>
  );
};

export default Logo;
