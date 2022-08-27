import React from 'react';

import styles from './Footer.module.css';

import Logo from '../../Logo/Logo';

export const Footer: React.FC = (props) => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Logo type='footer' />
      <p className={styles.copyright}>© FoxPhoto, {year}. Все права защищены</p>
      <div className={styles.links}>
        <ul>
          <li>
            <a href='#'>Виды печати</a>
          </li>
          <li>
            <a href='#'>Наши работы</a>
          </li>
          <li>
            <a href='#'>Цены</a>
          </li>
          <li>
            <a href='#'>Контакты</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
