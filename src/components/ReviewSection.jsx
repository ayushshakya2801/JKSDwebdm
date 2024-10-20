import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    name: "JKSD Infotech Pvt. Ltd.",
    image: "./clientLogo/jksd-logo.jpeg",
    review:
      "Working with JKSD Infotech was a fantastic experience. Their team delivered a stunning and user-friendly website that perfectly captures our brand and vision. Highly recommended!",
    website: "https://jksd.in/",
    preview: "./websiteThumbnails/example1.png",
  },
  {
    name: "Spring Almas",
    image: "./clientLogo/spring-cafe-logo.png",
    review:
      "From the first meeting, the JKSD team understood our needs and delivered a custom website that exceeded our expectations. Their attention to detail and expertise in web development resulted in a beautiful and functional site that our customers love.",
    website: "https://springcafe.in",
    preview: "./websiteThumbnails/example2.png",
  },
  {
    name: "JKSD Home Automation",
    image: "./clientLogo/jksd-logo.jpeg",
    review:
      "The JKSD team provided exceptional service, delivering a visually appealing website that has boosted our online presence. Their post-launch support and dedication to helping us optimize the site have been invaluable.",
    website: "https://jksd.in/",
    preview: "./websiteThumbnails/example3.png",
  },
  {
    name: "Spring Cafe",
    image: "./clientLogo/spring-cafe-logo.png",
    review:
      "JKSD Infotech was fantastic to work with, offering creative solutions and a deep understanding of our business needs. Their website development services are impressive, and they always went above and beyond to ensure our satisfaction.",
    website: "https://springcafe.in",
    preview: "./websiteThumbnails/example4.png",
  },
  {
    name: "JKSD Website Development",
    image: "./clientLogo/jksd-logo.jpeg",
    review:
      "Working with JKSD Infotech was a great experience. They built us a dynamic website that’s easy to navigate and fully responsive. The entire process was seamless, and their ongoing support ensures our site continues to perform well.",
    website: "https://jksd.in/",
    preview: "./websiteThumbnails/example5.png",
  },
];

function ReviewSection() {
  const [selectedReview, setSelectedReview] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  // Auto-cycle through reviews every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedReview]);

  return (
    <div className="  flex items-center py-10 bg-gray-50">
      <div className="flex">
        {/* Left Profile Image Section */}
        <div className=" hidden md:block flex-col space-y-2 items-start w-[800px] md:ml-[150px] px-[50px] py-[30px] bg-white shadow-lg rounded-lg">
          <h1 className="text-5xl font-bold text-gray-800 pb-1">
            What Our Clients Say About Us
          </h1>
          <p className="text-lg text-gray-600 pb-2">
            Hear what some of our satisfied clients have to say about our
            services.
          </p>
          {reviews.map((profile, index) => (
            <div onClick={() => setSelectedReview(index)} key={index} className={`flex items-center gap-1 w-[70%] cursor-pointer ${index !== 0 ? 'border-t border-gray-500 pt-2' : ''}`}>
              <img
                src={profile.image}
                alt={profile.name}
                className={`w-16 h-16 rounded-full border-4 p-1 ${
                  selectedReview === index
                    ? "border-[#ffa75c]"
                    : "border-gray-300"
                } transition-all duration-300`}
                
              />
              {/* Profile Name */}
              <p
                className={`font-semibold transition-all duration-300 ml-[10px] ${
                  selectedReview === index
                    ? "text-[#ffa75c] text-2xl"
                    : "text-gray-600 text-lg"
                }`}
              >
                {profile.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Review Display Section */}
        <div className="md:ml-10 h-[450px] md:h-auto md:w-96 bg-white shadow-lg rounded-lg flex flex-col relative">
          <h2 className="text-xl font-bold text-gray-800 mb-4 pl-8 pt-8">
            {reviews[selectedReview].name}
          </h2>
          <p className="text-gray-600 mb-6 px-8">{reviews[selectedReview].review}</p>

          {/* Profile Image and Visit Site Button at the Bottom */}
          <div className="absolute bottom-8 flex flex-col items-center w-full">
            {/* Profile Image Below Review */}
            <img
              src={reviews[selectedReview].image}
              alt={reviews[selectedReview].name}
              className=" w-[100px] md:w-[200px] h-auto mt-[140px]  md:mt-0 mb-[20px] md:mb-5"
            />
            {/* Visit Site Button */}
            <a
              href={reviews[selectedReview].website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:bg-[#ffa75c] text-[#ffa75c] hover:text-white py-2 px-4 rounded-sm border border-[#ffa75c]"
              onMouseEnter={() => setShowPreview(true)}
              onMouseLeave={() => setShowPreview(false)}
            >
              Visit Their Site
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            {/* Website Preview Iframe */}
            {showPreview && (
              <div className="absolute top-0 w-[330px] h-[200px] p-2 bg-white border border-gray-300 shadow-lg z-10 rounded-lg">
              <img
                src={reviews[selectedReview].preview}
                alt="Website Preview"
                className="w-full h-full object-cover"
              />
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
