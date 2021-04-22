import { Button } from "@rupertong/base-button";
import { Text } from "@rupertong/base-text";
import React from "react";
import styles from "./styles.css";

const CallToAction = ({ text, buttonText, ...rest }) => {
  return (
    <div className={styles.Root}>
      <Text>{text}</Text> <Button {...rest}>{buttonText}</Button>
    </div>
  );
};

export { CallToAction };
