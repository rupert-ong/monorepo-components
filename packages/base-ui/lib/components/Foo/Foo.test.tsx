import { render, screen } from '@testing-library/react';
import React from 'react';
import { Foo } from '.';

describe('<Foo />', () => {
  it('renders correctly', () => {
    render(<Foo id="test" data-testid="test-id" />);
    expect(screen.getByTestId('test-id')).toHaveTextContent(/foo/i);
  });
});
