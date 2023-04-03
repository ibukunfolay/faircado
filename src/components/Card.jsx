import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Card = ({ name, price, image, link }) => {
  return (
    <a
      href={link}
      className="card cursor-pointer hover:bg-secondary ease-in-out duration-600 delay-120 flex flex-col rounded-md shadow-md pb-2 "
    >
      <div className="p-4">
        <img src={image} alt="" />
      </div>

      <div className="gap-y-4 px-2">
        <p className="font-poppins text-sm font-semibold">{name}</p>
        <span className="font-poppins text-sm font-bold">
          <b>Price:</b> &euro;{price}
        </span>
      </div>
      <div className="flex items-center justify-end gap-x-1 px-2 ">
        <a target="_blank" href={link}>
          View
        </a>
        <BsArrowRightShort size={18} />
      </div>
    </a>
  );
};

export default Card;
