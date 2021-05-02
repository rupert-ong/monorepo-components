import { render, screen } from '@testing-library/react';
import React from 'react';
import CallToAction from '.';

describe('@rupertong/base-call-to-action', () => {
  it('renders correctly', () => {
    render(<CallToAction buttonText="click" text="read" />);
    expect(screen.getByText(/read/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent(/click/i);
  });
});
