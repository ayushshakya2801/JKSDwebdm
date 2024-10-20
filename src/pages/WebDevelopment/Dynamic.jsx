import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt, faCogs, faUserFriends, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

function Dynamic() {
  return (
    <div className='flex flex-col md:flex-row h-auto bg-[#08528e] w-full'>
      {/* Text Section */}
      <div className='w-full md:w-1/2 px-6 md:px-0 pt-8 md:pt-16 ml-0 md:ml-14'>
        <h1 className='text-2xl md:text-5xl text-[#ffa75c] font-philosopher font-black text-center md:text-left'>
          DYNAMIC WEB DEVELOPMENT
        </h1>

        <p className='text-lg sm:text-xl md:text-3xl mt-4 font-medium sm:mt-6 md:mt-10 text-center md:text-left text-white'>
        Enhance user engagement with our <br /> <span className="text-orange-500">Dynamic Website Services</span>!
        </p>

        <p className='text-base md:text-lg mt-6 md:mt-10 text-white w-full md:w-[85%] text-center md:text-left'>
          Our Dynamic Web Development services empower businesses to create interactive and engaging websites that adapt to user needs. Utilizing cutting-edge technologies, we develop custom solutions that enhance user experience, streamline operations, and provide real-time updates.
        </p>

        {/* Icons Section */}
        <div className="mt-10 flex flex-col gap-6 font-bold">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex">
              <FontAwesomeIcon icon={faSyncAlt} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">Real-Time Updates</p>
            </div>

            <div className="flex ml-0 md:ml-[10px]">
              <FontAwesomeIcon icon={faCogs} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">Custom Functionality</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex">
              <FontAwesomeIcon icon={faUserFriends} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">User-Centric Design</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon icon={faMobileAlt} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">Responsive Layouts</p>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-10 flex justify-center md:justify-start">
          <Link to="/contact">
            <button className="flex items-center hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
              Get Services <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className='w-full mb-5 md:mb-0 md:w-1/2 px-8 md:px-16 flex justify-center mt-8 md:mt-0 p-0 md:p-10'>
        <img className='object-contain' src="./webdev/dynamic-img.png" alt="Dynamic Web Development" />
      </div>
    </div>
  );
}

export default Dynamic;
