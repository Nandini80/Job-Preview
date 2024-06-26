import React from 'react';
import Header from './Header';
import JobDetails from './JobDetails';
import Footer from './Footer';
import Sidebar from './Sidebar';

const JobPreview = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="flex flex-1">
          <div className="w-3/4">
            <JobDetails />
            <Footer />
          </div>
          <div className="w-1/4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreview;
