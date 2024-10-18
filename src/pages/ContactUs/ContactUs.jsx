import React from "react";
import ContactHome from "./ContactHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Add Web3forms access key
    formData.append("access_key", "28e8729d-092f-49f8-b8f3-32ce751d8ce3");

    // Construct subject and body
    const subject = "Contact Form Enquiry";
    const body =
      "Name: " + name +
      "<br>Email: " + email +
      "<br>Phone no: " + phone +
      "<br>Message: " + message;

    formData.append("subject", subject);
    // formData.append("body", body);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult(
          <div className="text-orange font-bold text-lg text-center pt-2">
              Message Sent Successfully
          </div>
      );
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("There was an error submitting the form");
    }
  };

  return (
    <>
      <div>
        <div>
          <ContactHome />
        </div>
        <div>
        <body className="antialiased bg-white mb-10 ">
          <div className="flex w-full min-h-screen justify-center items-center">

          
  {/* form  */}
            <div className="flex flex-col lg:flex-row justify-between lg:space-x-6 my-10 space-y-6 lg:space-y-0 bg-sky bg-[#0A528E] w-full max-w-3xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
              <div className="flex flex-col space-y-8 justify-between lg:w-1/2">
                <div>
                  <h1 className="pt-10 font-bold text-4xl tracking-wide text-[#ffa75c]">
                    Get In Touch With Us
                  </h1>
                  <p className="pt-1 text-orange text-2xl">
                    Book a free counseling session
                  </p>
                </div>

                {/* Contact details with Font Awesome icons */}
                <div className="flex flex-col space-y-2">
                  <div className="inline-flex space-x-2 items-center pt-2">
                    <FontAwesomeIcon icon={faMobileAlt} className="h-6 w-6" />
                    <p className="text-lg">+91-9625040231</p>
                  </div>
                  <div className="inline-flex space-x-2 items-center pt-2">
                    <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
                    <p className="text-lg">Info@jksd.in</p>
                  </div>
                  <div className="inline-flex space-x-2 items-center pt-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="h-6 w-6" />
                    <p className="text-lg">
                      #103. 1st-floor H-61, Sector-63 Noida-201301
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-9 text-lg">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/jksdinfotech"
                    className="hover:text-orange"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="text-[#ffffff] text-2xl rounded-full hover:text-blue-500"  />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/jksdinfotech?igsh=YjA5ejRlc21senA1"
                    className="hover:text-orange"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="text-[#ffffff] text-2xl rounded-full hover:text-pink-500"  />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/jksdinfotechpvtltd/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="text-[#ffffff] text-2xl rounded-full hover:text-blue-700" />
                  </a>
                  <a
                    target="_blank"
                    href="https://youtube.com/@jksdinfotech01?si=5aCajzAiVoKc0Dm-"
                    className="hover:text-orange"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="text-[#ffffff] text-2xl rounded-full hover:text-red-500"  />
                  </a>
                </div>
              </div>

              <div className="relative lg:w-1/2">
                <div className="absolute z-0 w-40 h-40 bg-slate-400 rounded-full -right-20 -top-20"></div>
                <div className="absolute z-0 w-40 h-40 bg-slate-400 rounded-full -left-20 -bottom-16"></div>

                <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600">
                  <form onSubmit={onSubmit} className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm">
                        How Can We Help You?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Message...."
                        rows="4"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-orange"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="inline-block self-center bg-[#ffa75c] text-black font-bold rounded-2xl px-6 py-2 uppercase text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                  <p>{result}</p>
                </div>
              </div>
            </div>
          </div>
  
        </body>
        </div>
        {/* Setting Map */}
        <div className=" md:flex w-full justify-center items-center md:my-10  m-7 bg-gray-300  ">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.117954875751!2d77.374172774094!3d28.626226684369538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d4a8d2c129%3A0xc7e167387b2afd44!2sJKSD%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1725521303176!5m2!1sen!2sin"
    width="75%"
    height="450"
    style={{
      border: '12px solid white', // Adds red border
      borderRadius: '10px', // Rounds the corners
      margin: '10px',
      
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div>
    <img 
    className="hidden md:block w-[500px] h-[450px] m-5"
    src=".\contactus img\mapp.png" />
  </div>
</div>

      </div>
    </>
  );
}

export default ContactUs;
