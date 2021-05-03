import React, { ReactElement } from 'react';

export interface BarProps {
  /** id for Bar */
  id?: string;
}

const Bar = ({ id, ...rest }: BarProps): ReactElement => (
  <div id={id} {...rest}>
    Bar
  </div>
);

export default Bar;
