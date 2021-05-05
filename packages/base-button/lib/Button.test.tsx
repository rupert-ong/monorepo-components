import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ButtonProps } from '.';

describe('@rupertong/base-button', () => {
  const renderComponent = (props: Partial<ButtonProps>) => {
    render(<Button {...props}>hello</Button>);
  };
  it('renders correctly', () => {
    renderComponent({ className: 'foo' });
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/hello/i);
    expect(button).toHaveClass('foo Button');
  });
  it('renders the secondary variant correctly', () => {
    renderComponent({ variant: 'secondary' });
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/hello/i);
    expect(button).toHaveClass('Button ButtonSecondary');
  });
});
