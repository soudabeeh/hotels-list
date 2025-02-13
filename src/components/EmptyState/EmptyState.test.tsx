import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import EmptyState from './EmptyState';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  MemoryRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('EmptyState Component', () => {
  it('should render the provided text', () => {
    render(
      <MemoryRouter>
        <EmptyState text='No data available' />
      </MemoryRouter>
    );
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('should render "Back to home" button if noAction is false', () => {
    render(
      <MemoryRouter>
        <EmptyState text='No data available' noAction={false} />
      </MemoryRouter>
    );
    expect(screen.getByText('Back to home')).toBeInTheDocument();
  });

  it('should not render "Back to home" button if noAction is true', () => {
    render(
      <MemoryRouter>
        <EmptyState text='No data available' noAction={true} />
      </MemoryRouter>
    );
    expect(screen.queryByText('Back to home')).not.toBeInTheDocument();
  });
});
