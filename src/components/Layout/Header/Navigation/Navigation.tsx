import cn from 'classnames';
import React from 'react';

import styles from './Navigation.module.css';

const Navigation: React.FC = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <div className={styles.wrap}>
            <a href='#'>
              <p>Виды печати</p>
            </a>
          </div>
        </li>
        <li>
          <div className={styles.wrap}>
            <a href='#'>
              <p>Наши работы</p>
            </a>
          </div>
        </li>
        <li>
          <div className={styles.wrap}>
            <a href='#'>
              <p>Контакты</p>
            </a>
          </div>
        </li>
      </ul>
      <div className={styles.wrapLast}>
        <div className={styles.last}>
          <a href='#'>
            <p>
              Конструктор<span> футболок</span>
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
