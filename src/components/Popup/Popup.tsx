import { useNavigate } from 'react-router-dom';
import { Hotel } from '../../models/hotel';

type PopupProps = {
  hotel: Hotel;
};
const Popup = ({ hotel }: PopupProps) => {
  const navigate = useNavigate();

  return (
    <div
      role='button'
      className='rounded-xl bg-white absolute w-5/6 left-1/2 transform -translate-x-1/2 bottom-4 z-[1000] shadow-md overflow-hidden'
      onClick={() => navigate(`/hotels/${hotel.id}`)}
    >
      <div className='flex'>
        <div className='w-25 h-25 bg-gray-200'>
          <img
            alt={`Image of ${hotel.image}`}
            src={`/images/${hotel.image}`}
            className='h-full w-full object-cover'
            loading='lazy'
          />
        </div>
        <div className='flex flex-col justify-between  text-black p-2 text-[16px] text-left'>
          <div className='font-bold'>{hotel.name}</div>
          <div className='mt-1'>
            <span>&#9733;</span> {hotel.stars}
          </div>
          <div className=' mt-1 flex'>Tehran,Iran</div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
