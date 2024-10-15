import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl text-center font-semibold px-[420px]">
        A Place That Helps Growth of Your Business
      </h1>
      <p className="mt-5 w-[1400px] text-center px-[200px]">
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
          <button className="flex items-center bg-white hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]">
            About Us
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
