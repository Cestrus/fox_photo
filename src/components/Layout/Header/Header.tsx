import React from 'react';

import Head from './Head/Head';
import styles from './Header.module.css';
import Navigation from './Navigation/Navigation';

export const Header: React.FC = (props) => {
  return (
    <header className={styles.header}>
      <Head />
      <Navigation />
    </header>
  );
};
