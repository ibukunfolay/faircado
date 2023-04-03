import React from 'react';

const Profile = () => {
  return (
    <div className="px-4 pt-[7em] pb-[2em]">
      <ul className="grid gap-y-4">
        <li className="font-poppins text-lg font-semibold shadow-md bg-white hover:bg-secondary hover:text-white rounded-md px-2 py-4">
          Visit our website
        </li>
        <li className="font-poppins text-lg font-semibold shadow-md bg-white hover:bg-secondary hover:text-white rounded-md px-2 py-4">
          Privacy policy
        </li>
        <li className="font-poppins text-lg font-semibold shadow-md bg-white hover:bg-secondary hover:text-white rounded-md px-2 py-4">
          Terms & conditions
        </li>
      </ul>
      <div className="absolute bottom-8 right-4">
        <button className="bg-red font-poppins text-lg font-semibold border-none shadow-md hover:shadow-xl rounded-md text-white px-8 py-4">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
