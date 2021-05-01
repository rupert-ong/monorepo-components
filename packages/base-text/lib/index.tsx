import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import styles from './styles.css';

export interface TextProps {
  /** Text label */
  children: ReactNode;
  /** Optional className to add to text */
  className?: string;
  /** HTML tag to use for component */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  /** Variant for type of text style to use */
  variant?: 'Body' | 'Hero' | 'Heading';
}

const Text = ({
  children,
  className,
  as = 'p',
  variant = 'Body',
  ...rest
}: TextProps): ReactElement => {
  const textVariant = styles[variant];
  const classes = clsx(
    styles.Text,
    {
      [textVariant]: variant,
    },
    className
  );
  return React.createElement(
    as,
    {
      ...rest,
      className: classes,
    },
    children
  );
};

export default Text;
