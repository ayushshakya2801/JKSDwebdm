import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faAd, faMousePointer, faDollarSign, faChartBar } from "@fortawesome/free-solid-svg-icons";

function GoogleAds() {
  return (
    <div className='flex flex-col md:flex-row h-auto bg-[#08528e] w-full pb-0 md:pb-10'>
      {/* Text Section */}
      <div className='w-full md:w-1/2 px-6 md:px-0 pt-8 md:pt-16 ml-0 md:ml-14'>
        <h1 className='text-2xl md:text-5xl text-[#ffa75c] font-philosopher font-black text-center md:text-left'>
          GOOGLE ADS
        </h1>

        <p className='text-lg sm:text-xl md:text-3xl mt-4 font-medium sm:mt-6 md:mt-10 text-center md:text-left text-white'>
        Maximize your online visibility with our <br /> <span className="text-orange-500">Google Ads Services</span>!
        </p>

        <p className='text-base md:text-lg mt-6 md:mt-10 text-white w-full md:w-[85%] text-center md:text-left'>
          Google Ads helps boost your business visibility by placing targeted ads at the top of search results. With pay-per-click (PPC) advertising, businesses can control their budget and get real-time results. Optimizing ad copies and leveraging precise targeting options, Google Ads ensures maximum reach for your marketing efforts.
        </p>

        {/* Icons Section */}
        <div className="mt-10 flex flex-col gap-6 font-bold">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex">
              <FontAwesomeIcon icon={faAd} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">Targeted Advertising</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon icon={faMousePointer} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">Pay-Per-Click (PPC)</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex">
              <FontAwesomeIcon icon={faDollarSign} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">Cost Control</p>
            </div>

            <div className="flex ml-0 md:ml-[73px]">
              <FontAwesomeIcon icon={faChartBar} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-white">Real-Time Analytics</p>
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
      <div className='w-full md:w-1/2 px-8 md:px-16 flex justify-center mt-8 md:mt-0 p-0 md:p-8'>
        <img className='object-contain' src="./images/Googleads.png" alt="Google Ads" />
      </div>
    </div>
  );
}

export default GoogleAds;
