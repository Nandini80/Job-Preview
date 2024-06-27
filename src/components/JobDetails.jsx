import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { CiLocationOn } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";

const JobDetails = () => {
  return (
    <div className="bg-white p-8 shadow-md">
      <div className='flex flex-row'>
      <h1 className="text-4xl font-bold mb-2">Senior Product Designer</h1>
      <div className="flex items-center text-gray-500 mb-4 ms-5">
        <span>posted 2 days ago</span>
        <span className="ml-4 bg-green-100 text-green-600 px-1.5 py-1 text-sm rounded-full">Open</span>
      </div>
      </div>
     
      <div className="flex items-center mb-4">
      <CiLocationOn />
        <span className='ms-2'>Delaware, USA</span>
        <span className="mx-4">·</span>
        <GrMoney />
        <span className='ms-2'>$300k-$400k</span>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div>
          <h2 className="font-bold text-gray-700 mb-2">Skills Required</h2>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <span className="inline-block bg-pink-200 text-pink-600 px-2 py-1 rounded-full text-sm">Figma</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block bg-blue-200 text-blue-600 px-2 py-1 rounded-full text-sm">Adobe Illustrator</span>
            </li>
            <li className="flex items-center">
              <span className="inline-block bg-red-200 text-red-600 px-2 py-1 rounded-full text-sm">Adobe XD</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" text-gray-700 mb-2">Preferred Language</h2>
          <p>English</p>
        </div>
        <div>
          <h2 className=" text-gray-700 mb-2">Type</h2>
          <p>Full time</p>
        </div>
        <div>
          <h2 className=" text-gray-700 mb-2">Years of Experience</h2>
          <p>3+ Years of Experience</p>
        </div>
      </div>
      <div>
        <h2 className=" text-gray-700 mb-2">About the Job</h2>
        <ul className="list-decimal list-inside space-y-1">
          <li>Handle the UI/UX research design</li>
          <li>Work on researching on latest web applications designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic related works</li>
        </ul>
        <h2 className=" text-gray-700 mt-3 mb-2">Benefits:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <h2 className=" text-gray-700 mt-3 mb-2">Schedule:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Day shift</li>
        </ul>
        <h2 className=" text-gray-700 mt-3 mb-2">Supplemental pay types:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <p className=" text-gray-700 mt-3 mb-2">Work Location: In person</p>
      </div>
    </div>
  );
};

export default JobDetails;
