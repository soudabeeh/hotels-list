import { Button } from '../components';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='text-black font-bold pt-20'>
      click here for see list of hotels
      <div className='mt-8'>
        <Button onClick={() => navigate('/hotels')} text='click here!' />
        <img
          width={'400px'}
          height={'400px'}
          src='/images/booking.jpg'
          alt='booking hotel'
          loading='lazy'
          className='m-auto mt-20'
        />
      </div>
    </div>
  );
};

export default Home;
