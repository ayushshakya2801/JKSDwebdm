import React from "react";
import AboutHome from "./AboutHome";

function AboutUs() {
  return (
    <>
    <div>
      <AboutHome />
    </div>
    
    <div className="">
      {/* first Section*/}
      <div className="bg-blue-50 md:flex justify-center items-center ">
        <div>
          <img
            src="./public/AboutUs img/aboutuspic (4).png"
            alt="professional image"
            className=" pt-5 m-10 w-[300px] md:w-[680px]    "
          />
        </div>

        <div className="  text-center px-3   md:pl-[30px] font-semibold md:flex-col md:w-1/2 lg:pt-1 pr-10 ">
          <h1 className=" pb-5 text-center  md:text-left md:text-4xl   ">
            Unlocking{" "}
            <span className="  bg-gradient-to-r from-[#FF5733] to-[#FFBD33] bg-clip-text text-transparent  ">
              Journey Of{" "}
            </span>{" "}
            <hr className="border-none pt-2  lg:pl-[150px]" />
            Knowledge and Skill Devlopment
          </h1>{" "}
          <br />
          <p className=" text-md text-center px-3 font-normal tracking-wider  md:text-xl  md:text-left md:tracking-wide  ">
            At JKSD Infotech, is one of the Best Training Institute in Noida. In the country, Our Company is the top rates online learning platform and Job-oriented IT Training institute in Delhi NCR. We offer  offline courses and skill development programs to UG engineering students, working professionals, and college pass-outs. The courses provided by us will help you empower your skills and help various students in career growth. .
          </p >
          <p className=" text-md  text-center px-3 font-normal tracking-wider  md:text-xl  md:text-left md:tracking-wide">
            We have a team of IT who work in several industries and gain enough world exposure for offering courses to students and working professionals as per the latest industry trends. Jksd Infotech Pvt Ltd, the best IT Training institute in Noida .</p>
          
        </div>
      </div>

      {/* Our Mission Section*/}
      <div  className=" overflow-hidden bg-white">
      
       
        <h1 className="  font-bold  py-[35px] font-philosopher  text-[#08528e] text-center text-4xl
         md:text-5xl  md:pl-[90px] lg:pl-[100px] lg:pb-10"> Our Mission</h1>
         
       
       <div>
        <img src="./public/AboutUs img/mission .png"
        alt ="mission pic for desktop "
        className="hidden  md:block  md:w-full"
        />
        <img src="./public/AboutUs img/mission vertical.png"
        alt ="mission vertical pic for  mobile user  "
        className="block md:hidden  md:w-full"
        />
       </div>

    </div>
     { /* Our vision Section*/ }

     <div  className="flex flex-col-reverse justify-center items-center md:flex-row bg-white ">
     <div className=" md:pr-[100px] ">
        <h1 className=" text-center  font-bold text-[#08528e] font-philosopher  text-4xl py-[20px] pt-10
         md:text-5xl md:pt-[100px]  "> Our Vision</h1>
         <ul
          className="text-gray-600 px-9 py-5 text-xl font-medium   pb-10 tracking-wide 
          list-disc text-center md:text-left lg:text-2xl  lg:text-left  "
        >
          <li className="py-2  list-item-bullet ">
          To widely democratize education in India.
          </li>
          <li className="py-2 list-item-bullet">
        
          Affordable, high-quality education for all.
          </li>
          <li className="py-2 list-item-bullet">
            To build a business sustainability.
          </li>
         
        </ul>

       </div>
       <div>
        <img src="./public\AboutUs img/vision (1).png"
        className="m-10 ml-[50px] w-[280px] md:w-[400px] md:mt-10   lg:w-[450px]  "
        />
       </div>
      

    </div>

    { /* Our founder Section*/ }


     <div className=" bg-white">
     <h1 className='text-4xl md:text-5xl text-[#08528e] text-center pt-10 py-10 font-philosopher font-black '>Our Founders</h1>
     <div  className="flex flex-col gap-6 px-14 pt-10 pb-10 md:flex-row md:h-[500px] md:flex  bg-[#0A528E]  md:py-[50px] md:px-[50px] md:gap-10 md:justify-evenly">
               
     { /* Jitesh Sir*/ }
     <div className="flex flex-col   md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src=".\FounderImage\jitesh_mathur.jpg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
          Jitesh Mathur
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
           Founder and CEO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/jitesh-mathur-92a063b4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src=".\Icons\linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5 md:h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>
              
        { /* Swapnil misra*/ }
        <div className="flex flex-col  md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src=".\FounderImage\swapnil mishra.jpg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
          Swapnil Misra
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
            Co Founder and CPO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/swapnil-misra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src=".\Icons\linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>

        
        { /* Devansh Raghav*/ }
        <div className="flex flex-col md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src=".\FounderImage\mr._devanshh.jpg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
          Devansh Raghav
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
            Co Founder and CTO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/devansh-raghav-08b147121/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src=".\Icons\linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>
        { /* Fariha khan*/ }
        
        <div className="flex flex-col md:w-80 h-96 items-center p-7  bg-slate-100 shadow-lg rounded-3xl">
          <div className="w-32 h-32 mb-4 items-center ">
            <img
              src=".\FounderImage\fariha_khan.jpg"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-black  font-semibold text-xl text-center pt-3">
            Fariha Khan
          </h2>
          <p className="text-gray-600 font-normal text-lg text-center  pt-1">
            {" "}
            Co Founder and COO
          </p>
          <p className="text-black font-medium text-base text-center  pt-3">
            "Where Visionaries Shape the Future of Technology."
          </p>
          <a
            href="https://www.linkedin.com/in/khajida-khan-002355145/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src=".\Icons\linkedin.png"
              alt="LinkedIn"
              className="w-8 mt-5  h-8 object-cover rounded-lg hover:opacity-80"
            />
          </a>
        </div>

      </div>
      </div>

   { /* Our Team*/ }
      
      <div className="bg-[#f2f2f2]  md:h-[910px] ">
      <h1 className='text-3xl md:text-5xl  text-[#08528e] text-center pt-10 py-10 font-philosopher font-black '>Our Team</h1>
      <div className=" ">
          <div>
            <div className="flex mt-6 mb-3 items-center justify-center bg-backgound ">
              <div className="flex flex-wrap gap-4 justify-center">
                {/* first line started */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
                <div className="group relative w-64 h-[350px] rounded-tl-[80px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105" src="./Teampic/abhii.png" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28  inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity  duration-300 group-hover:opacity-100"><b>Abhishek Kumar </b><br />(Web Developer)</p>

                    <a href="" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>
                  </div>
                </div>

                <div className="group relative w-64 h-[350px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72  ">
                    <img className="h-full w-full object-cover  transition-transform duration-500 group-hover:rotate-1 group-hover:scale-125" src="./Teampic/ayushf.jpeg" alt="Ayush shakya" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute  hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Ayush Shakya</b><br />(Web Developer)</p>

                    <a href="https://www.linkedin.com/in/ayush-shakya-632189258/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>

                <div className="group relative w-64 h-[350px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/chopf.jpeg" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Abhishek Sharma</b><br />(Web Developer)</p>
                    <a href="https://www.linkedin.com/in/abhishek-sharma-b3569b295/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>


                <div className="group relative w-64 h-[350px]  rounded-br-[80px] cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/mahimaa.jpeg" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Mahima </b><br />(Web Developer)</p>

                    <a href="https://www.linkedin.com/in/mahima-singh-46307a317/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>
                </div>
                {/* new line started */}
                <div className="flex flex-col md:flex md:flex-row justify-center gap-5  ">
                <div className="group relative w-64 h-[350px] rounded-tl-[80px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/shreju.png" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute  hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Shrejal Chauhan</b><br />(Web developer)</p>
                    <a href="https://www.linkedin.com/in/shrejal-chauhan-3a3686263/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>

                </div>

                <div className="group relative w-64 h-[350px]  cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/palak.jpeg" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Palak Bansal</b><br />(Web developer)</p>
                    <a href="https://www.linkedin.com/in/palak-bansal-084363284/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>

                <div className="group relative w-64 h-[350px]  rounded-br-[80px] cursor-pointer rounded-xl items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                  <div className="h-96 w-72">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./Teampic/sankalp.jpeg" alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute hover:pt-28 inset-0 flex translate-y-[60%]  flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Sankalp</b><br />(Human Resources)</p>

                    <a href="https://www.linkedin.com/in/sankalp-choudhary-a664332b6/" target="_blank" rel="noopener noreferrer">
                      <img className="sm:h-6 h-3" src="./Teampic/linkedin.png" alt="LinkedIn" />
                    </a>

                  </div>
                </div>

                </div>

              </div>

            </div>
      </div>
      </div>
      </div>


    </div>
    </>

  );
}

export default AboutUs;