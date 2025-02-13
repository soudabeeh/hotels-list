import { useHotels } from '../services/api';
import { Loader, Error, Map } from '../components';

const Location = () => {
  const { data: hotels, isLoading, isError } = useHotels();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) return <Error />;

  return (
    <div className='w-full h-screen'>
      <Map hotels={hotels || []} />
    </div>
  );
};

export default Location;
