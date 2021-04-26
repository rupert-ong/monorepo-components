import { Button } from "@rupertong/base-button";
import { Text } from "@rupertong/base-text";
import React from "react";
import styles from "./styles.css";

export interface CallToActionProps {
  text: string;
  buttonText: string;
}

const CallToAction = ({ text, buttonText, ...rest }: CallToActionProps) => {
  return (
    <div className={styles.Root}>
      <Text>{text}</Text> <Button {...rest}>{buttonText}</Button>
    </div>
  );
};

export { CallToAction };
