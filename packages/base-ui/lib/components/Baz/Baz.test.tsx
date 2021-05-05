import { render, screen } from '@testing-library/react';
import React from 'react';
import { Baz } from '.';

describe('<Baz />', () => {
  it('renders correctly', () => {
    render(<Baz id="test" data-testid="test-id" />);
    expect(screen.getByText(/bazzy/i)).toBeInTheDocument();
  });
});
