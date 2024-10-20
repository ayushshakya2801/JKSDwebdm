import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode, faShoppingCart, faShieldAlt, faCogs } from "@fortawesome/free-solid-svg-icons";

function Ecommerce() {
  return (
    <div className='w-full h-auto bg-[#FCFAF6] flex flex-col md:flex-row'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center md:pl-12 pt-0 md:pt-12 pb-0 md:pb-8'>
        <img className='object-contain p-10 md:p-14' src="./webdev/ecom-img.png" alt="E-Commerce Website Development" />
      </div>

      {/* Text Content Section */}
      <div className='w-full md:w-[60%] pt-2 md:pt-20 px-6 md:pl-6'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl text-[#08528e] font-philosopher font-black text-center md:text-left'>
          E-Commerce Website Development
        </h1>

        <p className='text-lg sm:text-xl md:text-3xl mt-4 font-medium sm:mt-6 md:mt-10 text-center md:text-left'>
          Build a robust online store with our <br /> <span className="text-orange-500">E-Commerce Development Services</span>!
        </p>

        <p className='text-sm sm:text-base md:text-lg mt-4 sm:mt-6 md:mt-10 text-center md:text-left'>
          Our E-Commerce Website Development Services are designed to help businesses create powerful online stores that enhance customer experience and drive sales. We focus on user-friendly designs, seamless navigation, and secure payment options to ensure your customers enjoy a smooth shopping experience. Whether you're starting from scratch or upgrading your existing site, we tailor our solutions to meet your unique business needs.
        </p>

        {/* E-Commerce Development Points */}
        <div className="mt-10 flex flex-col gap-6 font-bold">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="flex">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Custom Website Design</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Integrated Shopping Cart</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <div className="flex">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Secure Payment Gateway</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faCogs}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Flexible Inventory Management</p>
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

export default Ecommerce;
