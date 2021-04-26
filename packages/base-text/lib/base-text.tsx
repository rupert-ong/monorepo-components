import clsx from "clsx";
import React, { ReactNode } from "react";
import styles from "./styles.css";

export interface TextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  variant?: "Body" | "Hero" | "Heading";
}

const Text = ({
  children,
  className,
  as = "p",
  variant = "Body",
  ...rest
}: TextProps) => {
  const textVariant = styles[variant];
  console.log(textVariant);
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

export { Text };
