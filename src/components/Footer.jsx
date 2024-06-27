import React from 'react';
import logo from '../assets/Atlassian-Logo.jpg';

const Footer = () => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <div className="flex items-center mb-6">
        <div className="p-2">
          <img src={logo} alt="Company Logo" className="w-10 h-8" />
        </div>
        <div className="ml-2 text-xl font-bold">Atlassian</div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="font-bold">Company size</p>
          <p>1k - 2k Employees</p>
          <p className="font-bold mt-4">Sector</p>
          <p>Information Technology, Infrastructure</p>
          <p className="font-bold mt-4">Founded In</p>
          <p>2019</p>
        </div>
        <div>
          <p className="font-bold">Type</p>
          <p>Private</p>
          <p className="font-bold mt-4">Funding</p>
          <p>Bootstrapped</p>
          <p className="font-bold mt-4">Founded By</p>
          <p>Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
