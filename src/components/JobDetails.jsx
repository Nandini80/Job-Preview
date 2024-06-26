import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faDollarSign, faClock } from '@fortawesome/free-solid-svg-icons';

const JobDetails = () => {
  return (
    <div className="bg-white p-6 shadow-md ">
      <h1 className="text-3xl font-bold mb-2">Senior Product Designer</h1>
      <div className="flex items-center text-gray-500 mb-2">
        <span>posted 2 days ago</span>
        <span className="ml-2 bg-green-100 text-green-600 px-2 py-1 rounded">Open</span>
      </div>
      <div className="flex items-center text-gray-500 mb-4">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
        <span>Delaware, USA</span>
        <FontAwesomeIcon icon={faDollarSign} className="ml-4 mr-2" />
        <span>$300k-$400k</span>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <h2 className="font-bold text-gray-700">Skills Required</h2>
          <ul className="list-none">
            <li className="flex items-center mt-2">
              <span className="inline-block bg-pink-200 text-pink-600 px-2 py-1 rounded-full text-sm mr-2">Figma</span>
            </li>
            <li className="flex items-center mt-2">
              <span className="inline-block bg-blue-200 text-blue-600 px-2 py-1 rounded-full text-sm mr-2">Adobe Illustrator</span>
            </li>
            <li className="flex items-center mt-2">
              <span className="inline-block bg-red-200 text-red-600 px-2 py-1 rounded-full text-sm mr-2">Adobe XD</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-gray-700">Preferred Language</h2>
          <p className="mt-2">English</p>
        </div>
        <div>
          <h2 className="font-bold text-gray-700">Type</h2>
          <p className="mt-2">Full time</p>
        </div>
        <div>
          <h2 className="font-bold text-gray-700">Years of Experience</h2>
          <p className="mt-2">3+ Years of Experience</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-gray-700">About this Job</h2>
        <ul className="list-decimal list-inside mt-2">
          <li>Handle the UI/UX research design</li>
          <li>Work on researching and implementing UI/UX designs & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic-related works</li>
        </ul>
        <h2 className="font-bold text-gray-700 mt-4">Benefits</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <h2 className="font-bold text-gray-700 mt-4">Schedule</h2>
        <p className="mt-2">Day shift</p>
        <h2 className="font-bold text-gray-700 mt-4">Supplemental pay types</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <h2 className="font-bold text-gray-700 mt-4">Work Location</h2>
        <p className="mt-2">In person</p>
      </div>
    </div>
  );
};

export default JobDetails;
