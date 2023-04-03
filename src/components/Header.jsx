import React, { useContext } from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import logo from '../assets/logo.png';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { isHome, setIsHome } = useContext(AuthContext);

  return (
    <div className="flex fixed justify-between w-full items-center bg-white px-2 py-4 shadow-md">
      <figure className="w-[200px] h-auto">
        <img className="w-full h-full" src={logo} alt="logo" />
      </figure>
      <div className="flex items-center gap-x-1">
        {isHome ? (
          <BsPersonFill size={24} onClick={() => setIsHome(false)} />
        ) : (
          <GrFormClose size={26} onClick={() => setIsHome(true)} />
        )}
      </div>
    </div>
  );
};

export default Header;
