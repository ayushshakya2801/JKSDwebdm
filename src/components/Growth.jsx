import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faSearch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Growth() {
  return (
    <div className="w-full mt-5 ml-[100px] flex">
      {/* content */}
      <div className="w-[600px] ml-[50px] mt-[40px]">
        <p className="text-5xl font-semibold mr-5">Grow Your Business Online</p>
        <p className="mt-5">
          Grow your business online with tailored digital strategies that
          enhance brand visibility, drive targeted traffic, and increase
          conversions. By leveraging tools like SEO, social media, and paid
          advertising, you can expand your reach, engage your audience, and
          build lasting customer relationships. Embrace the power of the
          internet to boost sales, improve customer experiences, and stay
          competitive in today's digital marketplace.
        </p>
        <div className="mt-10 flex flex-col gap-6 font-bold">
          {/* first 2 icons */}
          <div className="flex gap-[100px] items-center ml-[100px]">
            <div className="flex">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">SEO Optimization</p>
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Social Media Marketing</p>
            </div>
          </div>
          {/* last 2 icons */}
          <div className="flex gap-[50px] items-center ml-[100px]">
              <div className="flex">
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  className="text-[#ffa75c] text-2xl mr-3"
                />
                <p className="text-black">Specialized Web Design</p>
              </div>

              {/* Affordable Price Icon and Text */}
              <div className="flex">
                <FontAwesomeIcon
                  icon={faDollarSign}
                  className="text-[#ffa75c] text-2xl mr-3"
                />
                <p className="text-black">Affordable Price</p>
              </div>
            </div>
        </div>
        {/* explore button */}
        <div className="mt-16">
        <Link to="/contact">
          <button className="flex items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
            Contact Now
            <FontAwesomeIcon icon={faPhone} className="ml-2" />
          </button>
          </Link>
        </div>
      </div>
      {/* images */}
      <div className="w-[600px] ml-[50px]">
        <img className="rounded-lg" src="./gif/growth.gif" alt="" />
      </div>
    </div>
  );
}

export default Growth;
