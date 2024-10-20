import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faSearch, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="mb-5">
      <div>
      <h1 className="mt-5 md:mt-0 text-4xl md:text-5xl text-[#08528e] font-bold  text-center font-philosopher ">
              Services We Provide
            </h1>
        {/* web development */}
        <div className=" flex flex-col-reverse  mt-5 md:mt-10 md:ml-[50px] md:flex-row items-center">
          {/* images */}
          <div className=" w-[300px] md:w-[400px]  md:ml-[100px]">
            <img className="rounded-lg " src="./images/webdev.png" alt="" />
          </div>
          {/* content */}
          <div className="w-[100%] md:w-[800px] text-center md:ml-[60px] md:mt-[40px] mb-7 ">
            
            <p className="text-2xl md:text-5xl font-semibold px-7 md:px-0 text-center md:text-start ">
              Most Affordable Web Development Services
            </p>
            <p className="mt-5 text-lg  text-center md:text-start px-9 md:px-0">
              We specialize in creating custom, responsive websites tailored to
              meet the unique needs of your business. Our services include
              everything from designing user-friendly interfaces to building
              scalable, secure web applications. With a focus on functionality
              and aesthetics, we ensure that your website not only looks great
              but also performs seamlessly across all devices. Whether you're
              launching a new site or revamping an existing one, our expert team
              delivers a digital experience that enhances your brand's presence
              and drives engagement.
            </p>
            <div className="mt-5 flex flex-col md:flex-row gap-6  md:gap-[100px] items-center md:ml-[100px] font-bold">
              {/* Specialized Web Design Icon and Text */}
              <div className="flex  ">
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  className="text-[#ffa75c] text-2xl mr-3 "
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
            {/* explore button */}
            <div className="mt-10">
              <Link to="/webdev">
                <button className="flex  mr-auto ml-auto md:mr-0 md:ml-0  items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
                  Explore More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* digital marketing */}
        <div>
          <div className="mt-5 md:ml-[100px] flex flex-col md:flex-row">
            {/* content */}
            <div className="w-[100%] md:w-[800px] text-center md:text-start md:ml-[50px] md:mt-[40px]">
              <p className=" mt-10 md:mt-1 text-xl md:text-3xl font-semibold px-5 md:px-0">
                Cost-Effective Digital Marketing Solutions
              </p>
              <p className="mt-5 px-9 md:px-0">
                Our digital marketing services are designed to help businesses
                thrive in the competitive online landscape. We offer a full
                suite of services including SEO, social media marketing,
                pay-per-click advertising (PPC), email marketing, and content
                marketing. Our expert team develops data-driven strategies to
                enhance brand visibility, drive traffic, and increase
                conversions. We leverage advanced analytics to continually
                optimize campaigns and maximize ROI. Whether you’re looking to
                build brand awareness, engage your audience, or drive sales, our
                digital marketing solutions are customized to meet your unique
                goals and deliver measurable results across digital platforms.
              </p>
              <div className="mt-7 md:mt-5 flex flex-col md:flex-row gap-6  md:gap-[100px] items-center md:ml-[100px] font-bold">
                {/* SEO Optimization Icon and Text */}
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-[#ffa75c] text-2xl mr-3"
                  />
                  <p className="text-black">SEO Optimization</p>
                </div>

                {/* Social Media Marketing Icon and Text */}
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="text-[#ffa75c] text-2xl mr-3"
                  />
                  <p className="text-black">Social Media Marketing</p>
                </div>
              </div>
              {/* explore button */}
              <div className=" mt-10">
                <Link to="/digitalmarketing">
                  <button className="flex items-center mr-auto ml-auto md:mr-0 md:ml-0 mb-10 md:mb-0 bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
                    Explore More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
            {/* images */}
            <div className="  md:ml-[50px]">
              <img
                className=" w-[300px] md:w-[400px] mr-auto ml-auto md:mr-0 md:ml-0 rounded-lg"
                src="./images/dig-marketing.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
