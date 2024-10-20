import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faDesktop, faCode, faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function WebdevIntro() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row px-6 md:px-12">
      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-4 md:mt-12 md:ml-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#08528e] text-center md:text-left">
          Professional Web Development Services
        </h1>
        
        <p className="mt-4 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
          Our web development solutions cater to various business needs, from simple <strong>static websites</strong> 
          to interactive <strong>dynamic websites</strong> and robust <strong>e-commerce solutions</strong>.
          Whether you're aiming for an informational online presence or a flexible platform with user engagement 
          and real-time updates, we've got you covered. For businesses looking to sell online, our 
          <strong> e-commerce solutions</strong> provide seamless shopping experiences with secure payment gateways 
          and customized features. We prioritize performance, responsiveness, and user-friendly designs to help 
          your website drive growth and engagement.
        </p>

        {/* Service Points */}
        <div className="mt-8 flex flex-col gap-6 font-bold">
          {/* Icons Row 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDesktop} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Static Websites</p>
            </div>
            <div className="flex items-center ml-0 md:ml-[50px]">
              <FontAwesomeIcon icon={faCode} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Dynamic Websites</p>
            </div>
          </div>

          {/* Icons Row 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="text-[#ffa75c] text-2xl mr-3" />
              <p>E-commerce Solutions</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faDollarSign} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Affordable Price</p>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-10 flex justify-center md:justify-start">
          <Link to="/contact">
            <button className="flex items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
              Get Your Services <FontAwesomeIcon icon={faPhone} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center pt-6 md:pt-0">
        <img className="object-contain rounded-lg p-0 md:p-14" src="./webdev/webdev-home.png" alt="Web Development" />
      </div>
    </div>
  );
}

export default WebdevIntro;
