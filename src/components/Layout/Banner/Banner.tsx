import React, { MouseEvent, MouseEventHandler } from 'react';

import styles from './Banner.module.css';

import Button from '../../Button/Button';

export const Banner: React.FC = (props) => {
  const contactHandler: MouseEventHandler<HTMLButtonElement> = (
    ev: MouseEvent
  ) => {
    console.log('contact us');
  };

  return (
    <section className={styles.banner}>
      <div className={styles.left}>
        <div className={styles.leftImg}></div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightWrap}>
          <h1>Печатаем картинки для подарков с душой</h1>
        </div>
        <Button
          size='l'
          clickHandler={contactHandler}
          className={styles.button_l}
        >
          Связаться с нами
        </Button>
        <Button
          size='s'
          clickHandler={contactHandler}
          className={styles.button_s}
        >
          Связаться с нами
        </Button>
        <div className={styles.bag}></div>
      </div>
    </section>
  );
};
