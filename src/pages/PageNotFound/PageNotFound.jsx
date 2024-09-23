import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b bg-[#EAE9E8]">
      <h1 className="text-4xl md:text-7xl font-bold text-orange-600 text-center mt-10">
        404 - Page Not Found
      </h1>
      <img 
        className="w-3/4 md:w-1/3 h-auto mt-8" 
        src="./images/pnf-crop.gif" 
        alt="Page not found" 
      />
      <Link to="/">
        <button className="mt-8 bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
}

export default PageNotFound;
