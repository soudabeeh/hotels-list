import React from 'react';
import { Hotel } from '../../models/hotel';
import { useNavigate } from 'react-router-dom';

type HoteCardProps = {
  hotel: Hotel;
  isSingleHotel?: boolean;
};

const HotelCard = React.memo(({ hotel, isSingleHotel }: HoteCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={`shadow-md flex-col overflow-hidden mb-4 bg-white ${!isSingleHotel && 'rounded-lg cursor-pointer'}`}
      onClick={() =>
        isSingleHotel ? undefined : navigate(`/hotels/${hotel.id}`)
      }
    >
      <div className='w-full h-40'>
        <img
          alt={`Image of ${hotel.name}`}
          src={`/images/${hotel.image}`}
          className='h-full w-full object-cover'
          loading='lazy'
        />
      </div>
      <div className='p-2 text-black text-left mt-2 mb-1'>
        <div className='flex items-center justify-between'>
          <div className='font-bold'>{hotel.name}</div>
          <div>
            <span>&#9733;</span> {hotel.stars}
          </div>
        </div>
        <div className='mt-2 text-gray-700'>{hotel.description}</div>
        <div className=' mt-2 text-gray-700 flex'>Tehran,Iran</div>
      </div>
    </div>
  );
});
export default HotelCard;
