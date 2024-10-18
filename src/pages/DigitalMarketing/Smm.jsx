import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSearchDollar, faBullseye, faChartPie, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

function Smm() {
  return (
    <div className='w-full h-auto bg-[#FCFAF6] flex flex-col md:flex-row'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 flex justify-center md:pl-12 pt-6 md:pt-12 pb-6 md:pb-8'>
        <img className='object-contain h-[500px] sm:h-72 p-14 md:h-[600px] border-rou' src="./images/SMM.png" alt="Social Media Marketing" />
      </div>

      {/* Text Content Section */}
      <div className='w-full md:w-[60%] pt-2 md:pt-20 px-6 md:pl-6'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl text-[#08528e] font-philosopher font-black'>
          Social Media Marketing
        </h1>

        <p className='text-lg sm:text-xl md:text-3xl mt-4 font-medium sm:mt-6 md:mt-10'>
          Transform clicks into customers with <br /> <span color='orange' >JKSD</span> magic!
        </p>

        <p className='text-sm sm:text-base md:text-lg mt-4 sm:mt-6 md:mt-10'>
          Unlock your business potential with Jksd's expert social media marketing! We create tailored strategies that engage your audience and boost brand visibility. From eye-catching content to targeted ad campaigns, our team ensures your message resonates across platforms. Elevate your online presence, drive traffic, and convert leads into loyal customers. Partner with Jksd and watch your business thrive!
        </p>

        <div className="mt-10 flex flex-col gap-6 font-bold">

          {/* Google Ads Points */}
          <div className="flex gap-[50px] items-center ">
            <div className="flex">
              <FontAwesomeIcon
                icon={faSearchDollar}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Cost-Effective Advertising</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Targeted Ad Campaigns</p>
            </div>
          </div>

          <div className="flex gap-[90px] items-center ">
            <div className="flex">
              <FontAwesomeIcon
                icon={faChartPie}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Data-Driven Insights</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Increased ROI</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/contact">
            <button className="flex items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
              Contact Us <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Smm;
