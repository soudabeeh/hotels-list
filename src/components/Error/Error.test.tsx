import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Error from './Error';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  MemoryRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('Error Component', () => {
  it('should render error message', () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(screen.getByText('An error occured!')).toBeInTheDocument();
  });
});
