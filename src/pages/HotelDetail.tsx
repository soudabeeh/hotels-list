import { useParams } from 'react-router-dom';
import { fetchAddress, useSingleHotel } from '../services/api';
import { formatAddress } from '../helper/createAdress';
import { useCallback, useMemo, useState } from 'react';
import { Error, EmptyState, Loader, Map, HotelCard } from '../components';

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [address, setAddress] = useState<string>('');

  const { data: hotel, isLoading, error } = useSingleHotel(id || '');

  const getHotelAddress = useCallback(async () => {
    if (hotel) {
      try {
        const addressData = await fetchAddress(
          hotel.location.lat,
          hotel.location.long
        );
        const formattedAddress = formatAddress(addressData);
        setAddress(formattedAddress);
      } catch (error) {
        console.error('Error fetching address:', error);
      }
    }
  }, [hotel]);

  useMemo(() => {
    if (hotel) {
      return getHotelAddress();
    }
    return null;
  }, [hotel, getHotelAddress]);

  if (isLoading) return <Loader />;
  if (!hotel) return <EmptyState text='No hotel Found' />;
  if (error) return <Error />;

  return (
    <>
      <div className='bg-gray-100 h-screen w-full'>
        <>
          <HotelCard hotel={hotel} isSingleHotel />
          <div className='text-black p-2 '>
            <div className='font-bold text-gray-600 text-left text-lg'>
              hotel location on map
            </div>
            <div className='rounded-lg w-full bg-white overflow-hidden mt-2'>
              <div className='w-full'>
                <Map
                  hotels={[hotel]}
                  zoom={15}
                  center={[hotel.location.lat, hotel.location.long]}
                  mapHeight={'h-60'}
                  withPopUp={false}
                />
              </div>
              <div className='mt-2 text-left p-2 text-gray-700'>{address}</div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default HotelDetail;
