import React from 'react';

import styles from './Hello.module.css';

export const Hello: React.FC = (props) => {
  return (
    <section className={styles.hello}>
      <h2>Мы — студия печати Fox Photo</h2>
      <p>
        Мы FoxPhoto! Студия печати на одежде, посуде и аксессуарах в центре
        Перми. У нас честные цены на печать и доставка от 100р. А ещё вы можете
        заказать печать визиток и фото на документы.
      </p>
    </section>
  );
};
