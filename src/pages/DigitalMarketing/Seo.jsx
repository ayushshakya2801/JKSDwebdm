import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCode, faChartLine, faBolt, faUserShield } from "@fortawesome/free-solid-svg-icons";

function Seo() {
  return (
    <div className='flex flex-col md:flex-row h-auto bg-[#FBFAF6] w-full pb-0 md:pb-10'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 px-6 md:px-16 pt-5 md:pt-9 flex justify-center p-0 md:p-8'>
        <img className='object-contain' src="./images/SEO.png" alt="Search Engine Optimization" />
      </div>

      {/* Text Section */}
      <div className='w-full md:w-1/2 px-6 md:px-0 pt-8 md:pt-20'>
        <h1 className='text-2xl md:text-5xl text-[#08528e] font-philosopher font-black text-center md:text-left'>
          Search Engine Optimization
        </h1>
        <p className='text-lg sm:text-xl md:text-3xl mt-4 font-medium sm:mt-6 md:mt-10 text-center md:text-left'>
        Boost your search engine rankings with our <br /> <span className="text-orange-500">SEO Services</span>!
        </p>

        <p className='text-base md:text-lg mt-6 md:mt-10 text-center md:text-left w-full md:w-[85%]'>
          Search engine optimization (SEO) for the JKSD website focuses on enhancing its visibility in search engine results. By incorporating relevant keywords, optimizing meta tags, and improving site speed, we aim to attract more organic traffic. Quality content and strategic link building further enhance credibility, ensuring that JKSD reaches its target audience effectively while providing a user-friendly experience.
        </p>

        {/* SEO Points */}
        <div className="mt-10 flex flex-col gap-6 font-bold">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex">
              <FontAwesomeIcon icon={faChartLine} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-black">Improved Search Rankings</p>
            </div>

            <div className="flex">
              <FontAwesomeIcon icon={faCode} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-black">On-Page Optimization</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
            <div className="flex">
              <FontAwesomeIcon icon={faBolt} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-black">Fast Loading Times</p>
            </div>

            <div className="flex ml-0 md:ml-16 ">
              <FontAwesomeIcon icon={faUserShield} className="text-[#ffa75c] text-2xl mr-3" />
              <p className="text-black">Secure Website</p>
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

export default Seo;
