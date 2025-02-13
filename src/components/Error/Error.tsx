import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className='text-black font-bold pt-20 b-4 flex flex-col gap-4'>
      An error occured!
      <Button onClick={() => navigate('/')} text='Back to home' />
    </div>
  );
};

export default Error;
