import React from 'react';

const NavigationBar = () => {
  return (
    <div className="bg-white p-4 shadow-md">
      <div className="flex space-x-10 ms-10">
        <a href="#" className="text-red-500 font-bold relative">
          Job preview
          <span className="block min-h-0.5 bg-orange-500 mt-4"></span>
        </a>
        <a href="#" className="text-gray-500">Applicants</a>
        <a href="#" className="text-gray-500">Match</a>
        <a href="#" className="text-gray-500">Messages</a>
      </div>
    </div>
  );
};

export default NavigationBar;
