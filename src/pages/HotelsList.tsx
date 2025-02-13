import { useHotels } from '../services/api';
import { Hotel } from '../models/hotel';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Loader, Error, HotelCard, EmptyState } from '../components';

const HotelsList = () => {
  const navigate = useNavigate();
  const { isLoading, error, data: hotels } = useHotels();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState(hotels);
  const isTypingRef = useRef(false);

  const filterHotels = (text: string) => {
    const lowerCaseQuery = text.toLowerCase();
    return hotels?.filter(
      (hotel: Hotel) =>
        hotel.name.toLowerCase().includes(lowerCaseQuery) ||
        hotel.description?.toLowerCase().includes(lowerCaseQuery)
    );
  };

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredHotels(hotels);
      isTypingRef.current = false;
      return;
    }

    isTypingRef.current = true;
    const timeout = setTimeout(() => {
      setFilteredHotels(filterHotels(searchQuery));
      isTypingRef.current = false;
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery, hotels]);

  if (isLoading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className='bg-gray-100 w-full h-screen'>
      <div className='bg-gray-100 p-4 shadow-md h-30 fixed w-full'>
        <div className='flex justify-center items-center p-2 bg-white rounded-full shadow-md'>
          <input
            className='h-10 text-black font-medium px-4 w-full outline-none text-center'
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='start your search'
          />
        </div>
      </div>
      {isTypingRef.current ? (
        <Loader />
      ) : (
        <>
          <div className='p-4 pt-36 '>
            {filteredHotels?.length ? (
              filteredHotels?.map((hotel: Hotel) => <HotelCard hotel={hotel} />)
            ) : (
              <EmptyState text={'No search result!'} noAction />
            )}
          </div>
          <div
            className='flex rounded-full fixed text-black bottom-10 left-1/2 transform -translate-x-1/2 bg-amber-400 p-2 shadow-md font-medium pr-5 pl-5 cursor-pointer'
            onClick={() => navigate('/hotels/map')}
          >
            view hotels on map
          </div>
        </>
      )}
    </div>
  );
};

export default HotelsList;
