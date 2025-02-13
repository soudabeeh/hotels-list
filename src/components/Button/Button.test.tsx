import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders button with text', () => {
    const buttonText = 'Click Me';
    render(<Button onClick={vi.fn()} text={buttonText} />);

    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} text='Click Me' />);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
