import Button from '@rupertong/base-button';
import Text from '@rupertong/base-text';
import React, { ReactElement, ReactNode } from 'react';
import styles from './styles.css';

export interface CallToActionProps {
  /** Label for Text component  */
  text: ReactNode;
  /** Label for Button component  */
  buttonText: ReactNode;
}

/**
 * Primary UI component to display call to action banner
 */
export const CallToAction = ({
  text,
  buttonText,
  ...rest
}: CallToActionProps): ReactElement => {
  return (
    <div className={styles.Root}>
      <Text>{text}</Text> <Button {...rest}>{buttonText}</Button>
    </div>
  );
};

export default CallToAction;
