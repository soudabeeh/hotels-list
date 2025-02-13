import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: 'text-black font-bold pt-20 b-4 flex flex-col gap-4', children: ["An error occured!", _jsx("div", { className: 'bg-sky-700 w-1/2 p-2 rounded-md m-auto cursor-pointer text-white', onClick: () => navigate('/'), children: "Back to home" })] }));
};
export default Error;
