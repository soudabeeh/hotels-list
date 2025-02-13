import { useQuery } from '@tanstack/react-query';
import { Hotel } from '../models/hotel';

const BASE_URL = 'http://localhost:3001';

const fetchHotels = async () => {
  const response = await fetch(`${BASE_URL}/hotels`);
  if (!response.ok) {
    throw new Error('Error!');
  }
  return response.json();
};

const fetchHotelById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/hotels/${id}`);
  if (!response.ok) {
    throw new Error('Error fetching hotel');
  }
  return response.json();
};

export const useHotels = () => {
  return useQuery<Hotel[]>({
    queryKey: ['hotels'],
    queryFn: fetchHotels,
  });
};

export const useSingleHotel = (id: string) => {
  return useQuery<Hotel>({
    queryKey: ['single-hotel', id],
    queryFn: () => fetchHotelById(id),
    enabled: !!id,
  });
};

export const fetchAddress = async (lat: number, long: number) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`
  );
  if (response.ok) {
    const data = await response.json();
    return data?.address;
  }
  throw new Error('Failed to fetch address');
};
