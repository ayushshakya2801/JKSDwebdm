import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faDesktop, faCheckCircle, faClock, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function Static() {
  return (
    <div className='w-full h-auto bg-[#FCFAF6] flex flex-col md:flex-row'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center md:pl-12 pt-0 md:pt-12 pb-0 md:pb-8'>
        <img className='object-contain p-10 md:p-14' src="./webdev/static-img.png" alt="Static Website Service" />
      </div>

      {/* Text Content Section */}
      <div className='w-full md:w-[60%] pt-2 md:pt-20 px-6 md:pl-6'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl text-[#08528e] font-philosopher font-black text-center md:text-left'>
          Static Website Services
        </h1>

        <p className='text-lg sm:text-xl md:text-3xl mt-4 font-medium sm:mt-6 md:mt-10 text-center md:text-left'>
          Elevate your online presence with our <br /> <span className="text-orange-500">Static Website Services</span>!
        </p>

        <p className='text-sm sm:text-base md:text-lg mt-4 sm:mt-6 md:mt-10 text-center md:text-left'>
          Our static websites provide a sleek and informative online presence for your business. Perfect for showcasing your services, products, or portfolio, these websites are fast, secure, and easy to maintain. With visually appealing designs and responsive layouts, we ensure that your brand stands out in the digital landscape. Partner with us to create a static website that captures your audience's attention!
        </p>

        {/* Static Website Points */}
        <div className="mt-10 flex flex-col gap-6 font-bold">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="flex">
              <FontAwesomeIcon
                icon={faDesktop}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Responsive Design</p>
            </div>

            <div className="flex ml-0 md:ml-[13px]">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Easy Navigation</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="flex">
              <FontAwesomeIcon
                icon={faClock}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Quick Loading Speed</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Cost-Effective Solutions</p>
            </div>
          </div>
        </div>

        {/* Contact Button */}
        <div className="mt-10 mb-5 md:mb-0 flex justify-center md:justify-start">
          <Link to="/contact">
            <button className="flex items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
              Get Services <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Static;
