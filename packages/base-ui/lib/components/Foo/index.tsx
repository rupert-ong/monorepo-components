import React, { ReactElement } from 'react';

export interface FooProps {
  /** id for Foo */

  id?: string;
}

const Foo = ({ id, ...rest }: FooProps): ReactElement => (
  <div id={id} {...rest}>
    Foo
  </div>
);

export default Foo;
