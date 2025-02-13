import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import HotelCard from './HotelCard';
import { Hotel } from '../../models/hotel';
import { MemoryRouter, useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', () => ({
  useNavigate: vi.fn(),
  MemoryRouter: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('HotelCard', () => {
  it('should render hotel card with correct information', () => {
    const hotel: Hotel = {
      id: 1,
      name: 'Test Hotel',
      stars: 5,
      description: 'A nice hotel in Tehran.',
      image: 'hotel1.webp',
      location: {
        lat: 35.7929,
        long: 51.35633,
      },
    };

    render(
      <MemoryRouter>
        <HotelCard hotel={hotel} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Hotel')).toBeInTheDocument();
    expect(screen.getByText('A nice hotel in Tehran.')).toBeInTheDocument();
    expect(screen.getByText('Tehran,Iran')).toBeInTheDocument();
  });

  it('should navigate to the correct hotel details page when clicked', () => {
    const hotel: Hotel = {
      id: 1,
      name: 'Test Hotel',
      stars: 5,
      description: 'A nice hotel in Tehran.',
      image: 'hotel1.webp',
      location: {
        lat: 35.7929,
        long: 51.35633,
      },
    };

    const navigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <HotelCard hotel={hotel} />
      </MemoryRouter>
    );

    const card = screen.getByText('Test Hotel').closest('div');
    fireEvent.click(card!);

    expect(navigate).toHaveBeenCalledWith('/hotels/1');
  });

  it('should not navigate if isSingleHotel is true', () => {
    const hotel: Hotel = {
      id: 1,
      name: 'Test Hotel',
      stars: 5,
      description: 'A nice hotel in Tehran.',
      image: 'hotel1.webp',
      location: {
        lat: 35.7929,
        long: 51.35633,
      },
    };

    const navigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <HotelCard hotel={hotel} isSingleHotel={true} />
      </MemoryRouter>
    );

    const card = screen.getByText('Test Hotel').closest('div');
    fireEvent.click(card!);

    expect(navigate).not.toHaveBeenCalled();
  });
});
