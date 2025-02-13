import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

type EmptyStateProps = {
  text: string;
  noAction?: boolean;
};

const EmptyState = ({ text, noAction = false }: EmptyStateProps) => {
  const navigate = useNavigate();

  return (
    <div className='text-black font-bold pt-20 b-4 flex flex-col gap-4'>
      {text}
      {!noAction && (
        <Button onClick={() => navigate('/')} text='Back to home' />
      )}
    </div>
  );
};

export default EmptyState;
