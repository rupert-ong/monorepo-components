import clsx from "clsx";
import React from "react";
import styles from "./styles.css";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}: ButtonProps) => {
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
