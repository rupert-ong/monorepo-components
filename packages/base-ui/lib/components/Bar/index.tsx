import React from "react";

export interface BarProps {
  id?: string;
}

const Bar = ({ id }: BarProps) => <div id={id}>Bar</div>;

export default Bar;
