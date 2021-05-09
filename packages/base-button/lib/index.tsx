import clsx from 'clsx';
import React, { ReactElement } from 'react';
import styles from './styles.css';

export interface ButtonProps {
  /** Button label */
  children: React.ReactNode;
  /** Optional className to add to button */
  className?: string;
  /** Variant for type of button style to use */
  variant?: 'primary' | 'secondary';
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  children,
  className = '',
  variant = 'primary',
  ...rest
}: ButtonProps): ReactElement => {
  const classes = clsx(
    styles.Button,
    {
      [styles.ButtonSecondary]: variant === 'secondary',
    },
    className
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
