const Loader = () => {
  return (
    <div className='space-y-4 p-2'>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className='w-full h-50 bg-gray-100 rounded animate-wave'
        ></div>
      ))}
    </div>
  );
};

export default Loader;
