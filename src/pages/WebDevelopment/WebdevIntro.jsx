import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faDesktop, faCode, faShoppingCart, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function WebdevIntro() {
  return (
    <div className="w-full mt-5 ml-[100px] flex">
      {/* content */}
      <div className="w-[600px] ml-[50px] mt-[40px]">
        <p className="text-5xl font-semibold mr-5">Professional Web Development Services</p>
        <p className="mt-5">
          Our web development solutions cater to various business needs, from simple <strong>static websites</strong> to more interactive <strong>dynamic websites</strong> and robust <strong>e-commerce solutions</strong>. 
          Static websites are ideal for businesses looking for a streamlined, informational online presence that remains consistent over time. For businesses requiring real-time updates and user interaction, 
          our dynamic websites offer a more flexible and engaging experience, allowing for features like content management and database integration. For those looking to sell products or services, our 
          <strong> e-commerce solutions</strong> deliver seamless online shopping experiences with secure payment gateways, product management, and customized shopping features, helping you reach a wider 
          audience and boost your sales. We prioritize performance, responsiveness, and user-friendly designs in all our web development projects to ensure your website drives growth and engagement.
        </p>
        <div className="mt-10 flex flex-col gap-6 font-bold">
          {/* first 2 icons */}
          <div className="flex gap-[100px] items-center ml-[100px]">
            <div className="flex">
              <FontAwesomeIcon
                icon={faDesktop}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Static Websites</p>
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faCode}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">Dynamic Websites</p>
            </div>
          </div>
          {/* last 2 icons */}
          <div className="flex gap-[50px] items-center ml-[100px]">
            <div className="flex">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-[#ffa75c] text-2xl mr-3"
              />
              <p className="text-black">E-commerce Solutions</p>
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
              Get Your Services
              <FontAwesomeIcon icon={faPhone} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      {/* images */}
      <div className="w-[600px] ml-[50px]">
        <img className="rounded-lg" src="./webdev/webdev-home.png" alt="" />
      </div>
    </div>
  );
}

export default WebdevIntro
