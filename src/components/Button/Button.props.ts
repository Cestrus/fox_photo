import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  MouseEventHandler,
  ReactNode,
} from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: 'l' | 'm' | 's' | 'xs';
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

// 300x60  -- l
// 290x60  -- m
// 290x40  -- s
// 170x40  -- xs
