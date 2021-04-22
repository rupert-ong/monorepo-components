import clsx from "clsx";
import React from "react";
import styles from "./styles.css";

const Button = ({ children, className, variant, ...rest }) => {
  const classes = clsx(
    styles.Button,
    {
      [styles.ButtonSecondary]: variant === "secondary",
    },
    className
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export { Button };
