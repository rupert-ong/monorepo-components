import React, { ReactElement } from 'react';

export interface BarProps {
  /** id for Bar */
  id?: string;
}

const Bar = ({ id }: BarProps): ReactElement => <div id={id}>Bar</div>;

export default Bar;
