import React, { ReactElement } from 'react';

export interface BazProps {
  /** id for Baz */

  id?: string;
}

/**
 * Baz component from base-ui
 */
export const Baz = ({ id, ...rest }: BazProps): ReactElement => (
  <div id={id} {...rest}>
    Bazzy
  </div>
);

export default Baz;
