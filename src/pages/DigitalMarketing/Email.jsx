import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faSearchDollar, faBullseye, faChartPie, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

function Email() {
  return (
    <div className='flex flex-col md:flex-row h-auto bg-[#08528e] w-full'>
      <div className='w-full md:w-1/2 px-8 md:px-0 pt-8 md:pt-16 ml-14'>
        <h1 className='text-2xl md:text-5xl text-[#ffa75c] font-philosopher font-black'>
          EMAIL MARKETING
        </h1>

        <p className='text-base md:text-lg mt-6 md:mt-10 text-white w-full md:w-[85%]'>
          Our Google Ads services help you maximize your advertising potential by creating targeted campaigns that drive traffic and improve ROI. Whether you're looking for more visibility, precise targeting, or detailed performance insights, we can help you achieve measurable results.
        </p>

        <div className="mt-10 flex flex-col gap-6 font-bold">

          {/* Google Ads Points */}
          <div className="flex gap-[50px] items-center ">
            <div className="flex">
              <FontAwesomeIcon
                icon={faSearchDollar}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-white">Cost-Effective Ads</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-white">Precise Targeting</p>
            </div>
          </div>

          <div className="flex gap-[40px] items-center ">
            <div className="flex">
              <FontAwesomeIcon
                icon={faChartPie}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-white">Analytics & Insights</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-white">Maximized ROI</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/contact">
            <button className="flex items-center  hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
              Contact Us <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>

      <div className='w-full md:w-1/2 px-8 md:px-16 md:pt-0 flex justify-center h-[300px] md:h-[630px]'>
        <img className='object-contain' src="./images/email marketing.png" alt="Email Marketing" />
      </div>
    </div>
  );
}

export default Email;