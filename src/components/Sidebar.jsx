import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHandshake, faComment, faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-white p-6 shadow-md flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between mb-6">
          <button className="flex items-center space-x-1 text-red-500 border border-red-500 px-4 py-2 rounded-full">
            <FontAwesomeIcon icon={faTrash} />
            <span>Delete job</span>
          </button>
          <button className="flex items-center space-x-1 text-white bg-red-500 px-4 py-2 rounded-full">
            <FontAwesomeIcon icon={faPen} />
            <span>Edit job</span>
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-500">
              <FontAwesomeIcon icon={faUser} />
              <span>Applicants</span>
            </div>
            <span className="font-bold">400</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-500">
              <FontAwesomeIcon icon={faHandshake} />
              <span>Matches</span>
            </div>
            <span className="font-bold">100</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-500">
              <FontAwesomeIcon icon={faComment} />
              <span>Messages</span>
            </div>
            <span className="font-bold">147</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-500">
              <FontAwesomeIcon icon={faEye} />
              <span>Views</span>
            </div>
            <span className="font-bold">800</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
