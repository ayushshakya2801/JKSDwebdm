import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-10">
      {/* Image background */}
      <img
        src='./images/about-bg.png'
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay for blur and transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-semibold px-[400px]">
          A Place That Helps Growth of Your Business
        </h1>
        <p className="mt-5 text-white max-w-5xl px-5">
          A Place That Helps Growth of Your Business is where innovation meets
          strategy to drive your success. We provide tailored solutions that
          enhance your brand's presence, attract your target audience, and boost
          conversions. Through a combination of cutting-edge web development,
          effective digital marketing, and data-driven approaches, we empower
          businesses to expand their reach and achieve sustainable growth. Our
          team of experts is dedicated to delivering personalized services
          designed to maximize your business potential, ensuring you stay ahead in
          today’s competitive market. Let us help you grow and thrive in the
          digital landscape.
        </p>
        <div className="mt-10">
          <Link to="/about">
            <button className="flex items-center hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
              About Us
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
