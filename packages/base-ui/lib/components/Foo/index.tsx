import React from "react";

export interface FooProps {
  /** id for Bar */

  id?: string;
}

const Foo = ({ id }: FooProps) => <div id={id}>Foo</div>;

export default Foo;
