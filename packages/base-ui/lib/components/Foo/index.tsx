import React from "react";

export interface FooProps {
  id?: string;
}

const Foo = ({ id }: FooProps) => <div id={id}>Foo</div>;

export default Foo;
