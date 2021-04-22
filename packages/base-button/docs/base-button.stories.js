import React from "react";
import { Button } from "../lib/base-button";

export default { title: "Button" };

export const primary = () => <Button>Hello World</Button>;

export const secondary = () => (
  <div style={{ background: "#1652f0", padding: 12 }}>
    <Button variant="secondary">Hello Button</Button>
  </div>
);
