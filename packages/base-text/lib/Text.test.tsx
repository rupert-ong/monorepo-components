import { render, screen } from '@testing-library/react';
import React from 'react';
import Text, { TextProps } from '.';

describe('@rupertong/base-button', () => {
  const renderComponent = (props: Partial<TextProps>) =>
    render(<Text {...props}>hello</Text>);

  it.each`
    as           | variant      | className      | message
    ${undefined} | ${undefined} | ${'undefined'} | ${'correctly when no props are passed'}
    ${undefined} | ${undefined} | ${'undefined'} | ${'correctly when a className is defined'}
    ${'h1'}      | ${undefined} | ${undefined}   | ${'correctly when as is a heading'}
    ${undefined} | ${'Hero'}    | ${undefined}   | ${'correctly variant is Hero'}
    ${undefined} | ${'Heading'} | ${undefined}   | ${'correctly variant is Heading'}
  `('renders $message', ({ as, variant, className }) => {
    const { container } = renderComponent({ className, as, variant });
    if (typeof as === 'string' && String(as).startsWith('h')) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(screen.getByRole('heading')).toBeInTheDocument();
    }
    expect(container.firstChild).toHaveTextContent(/hello/i);
    expect(container.firstChild).toHaveClass(
      `${variant || 'Body'} ${className || ''}`
    );
  });
});
