import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
const HotelCard = ({ hotel, isSingleHotel }) => {
    const navigate = useNavigate();
    return (_jsxs("div", { className: `shadow-md flex-col overflow-hidden mb-4 bg-white ${!isSingleHotel && 'rounded-lg cursor-pointer'}`, onClick: () => isSingleHotel ? undefined : navigate(`/hotels/${hotel.id}`), children: [_jsx("div", { className: 'w-full h-40', children: _jsx("img", { src: `/images/${hotel.image}`, className: 'h-full w-full object-cover' }) }), _jsxs("div", { className: 'p-2 text-black text-left mt-2 mb-1', children: [_jsxs("div", { className: 'flex items-center justify-between', children: [_jsx("div", { className: 'font-bold', children: hotel.name }), _jsxs("div", { children: [_jsx("span", { children: "\u2605" }), " ", hotel.stars] })] }), _jsx("div", { className: 'mt-2 text-gray-700', children: hotel.description }), _jsx("div", { className: ' mt-2 text-gray-700 flex', children: "Tehran,Iran" })] })] }));
};
export default HotelCard;
