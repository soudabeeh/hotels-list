type ButtonProps = {
  onClick: () => void;
  text: string;
};
const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <div
      className='bg-rose-700 w-1/2 p-2 rounded-md m-auto cursor-pointer text-white'
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
