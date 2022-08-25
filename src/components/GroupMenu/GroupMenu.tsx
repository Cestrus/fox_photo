import React from 'react';

import styles from './GroupMenu.module.css';
import { GroupMenuProps } from './GroupMenu.props';

const GroupMenu: React.FC<GroupMenuProps> = ({ fn }) => {
  return <div className={styles.group} onClick={fn}></div>;
};

export default GroupMenu;
