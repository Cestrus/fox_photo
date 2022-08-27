import cn from 'classnames';
import React from 'react';

import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

const Button: React.FC<ButtonProps> = ({
  size,
  children,
  className,
  clickHandler,
}) => {
  return (
    <button
      type='button'
      onClick={clickHandler}
      className={cn(styles.button, className, {
        [styles.l]: size === 'l',
        [styles.m]: size === 'm',
        [styles.s]: size === 's',
        [styles.xs]: size === 'xs',
      })}
    >
      {children}
    </button>
  );
};

export default Button;
