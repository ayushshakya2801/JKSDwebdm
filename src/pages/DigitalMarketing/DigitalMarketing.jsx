import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThumbsUp, faEnvelope, faBullhorn, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Email from "./Email";
import Smm from "./Smm";
import GoogleAds from "./GoogleAds";
import Seo from "./Seo";

function DigitalMarketing() {
  return (
    <>
    <div className="w-full h-auto flex flex-col md:flex-row px-6 md:px-12">
      {/* Text Section */}
      <div className="w-full md:w-[80%] mt-4 md:mt-12 md:ml-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#08528e] text-center md:text-left">
          Elevate Your Business with Digital Marketing
        </h1>
        
        <p className="mt-4 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left">
          Our comprehensive digital marketing services are designed to boost your online presence, drive 
          targeted traffic, and enhance engagement. From <strong>SEO optimization</strong> to <strong>social media marketing</strong>, 
          our team creates strategies tailored to your business goals. Whether you need to improve 
          search rankings, increase brand visibility, or launch email campaigns, we ensure a strong 
          digital footprint across multiple channels.
        </p>

        {/* Service Points */}
        <div className="mt-8 flex flex-col gap-6 font-bold">
          {/* Icons Row 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faSearch} className="text-[#ffa75c] text-2xl mr-3" />
              <p>SEO Optimization</p>
            </div>
            <div className="flex items-center ml-0 md:ml-[50px]">
              <FontAwesomeIcon icon={faThumbsUp} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Social Media Marketing</p>
            </div>
          </div>

          {/* Icons Row 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Email Marketing</p>
            </div>
            <div className="flex items-center ml-0 md:ml-[57px]">
              <FontAwesomeIcon icon={faBullhorn} className="text-[#ffa75c] text-2xl mr-3" />
              <p>Online Advertising</p>
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
        <img className="object-contain rounded-lg p-0 md:p-14" src="./images/girl.png" alt="Digital Marketing" />
      </div>
    </div>
    <Email/>
    <Smm/>
    <GoogleAds/>
    <Seo/>
    </>
  );
}

export default DigitalMarketing;
