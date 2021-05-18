import React, { ReactElement } from 'react';

export interface FooProps {
  /** id for Foo */

  id?: string;
}

/**
 * Foo component from base-ui
 */
export const Foo = ({ id, ...rest }: FooProps): ReactElement => (
  <div id={id} {...rest}>
    Foo ey
  </div>
);

export default Foo;
