import { render, screen } from '@testing-library/react';
import React from 'react';
import { Bar } from '.';

describe('<Bar />', () => {
  it('renders correctly', () => {
    render(<Bar id="test" data-testid="test-id" />);
    expect(screen.getByText(/bar/i)).toBeInTheDocument();
  });
});
