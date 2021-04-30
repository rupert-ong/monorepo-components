import React, { ReactElement } from 'react';

export interface FooProps {
  /** id for Foo */

  id?: string;
}

const Foo = ({ id }: FooProps): ReactElement => <div id={id}>Foo</div>;

export default Foo;
