import React, { useContext } from 'react';

import styles from './Head.module.css';

import { FoxContext } from '../../../../context/context';

import GroupMenu from '../../../GroupMenu/GroupMenu';
import Logo from '../../../Logo/Logo';
import Social from '../../../Social/Social';

const Head: React.FC = () => {
  const { company } = useContext(FoxContext);
  const { address, contacts } = company;

  const socialHandler = (social: any): void => {
    console.log(social);
  };

  const grupMenuHandler = (): void => {
    console.log('menu');
  };

  return (
    <div className={styles.head}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Logo type='header' />
        </div>
        <div className={styles.contact}>
          <div className={styles.phone}>
            <span>{contacts.phone.short}</span>
          </div>
          <div className={styles.address}>
            <span>
              {address.city}, {address.street}, {address.build_number}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.social}>
          <Social type='vc' fn={socialHandler} />
          <Social type='insta' fn={socialHandler} />
        </div>
        <div className={styles.mobile}>
          <GroupMenu fn={grupMenuHandler} />
        </div>
      </div>
    </div>
  );
};

export default Head;
