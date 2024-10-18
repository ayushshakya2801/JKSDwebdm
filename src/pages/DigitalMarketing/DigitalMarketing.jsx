import React from 'react'
import Seo from './Seo'
import Smm from './Smm'
import GoogleAds from './GoogleAds'
import Email from './Email'
function DigitalMarketing() {
  return (
    <div>
      {/* <h1 className='text-3xl text-amber-600'>Digital Marketing</h1> */}
      <div className=' w-full bg-black h-[529px] opacity-20 z-0 '>
        {<img className='h-[530px] w-full object-cont relative  bg-black opacity-35' src="./images/digital marketing front.avif" alt="dm" />}

      </div>
      <div className='flex justify-evenly absolute  inset-0 '>
        <div className='h-[550px] w-[400px]  mt-20 '>
          <img className='h-[521px] w-auto' src="./images/girl.png" alt="girl" />
        </div>
        <div className='h-[400px] w-[500px]  mt-44 flex flex-col items-end' >
          <h1 className='text-5xl font-bold text-right text-blue-950 '>Boost Your Brand <br />Digitally! </h1>
          <p className='mt-10 text-1xl font-semibold text-bl text-right'>
          Boost your online presence with our expert digital marketing services. From SEO and social media to PPC and content marketing, we help businesses increase visibility, drive traffic, and grow conversions for measurable success.
          </p>
          <div className='mt-10'>
          <a href="">
            <button className='h-10 w-36 bg-blue-700 rounded-3xl text-white text-lg font-semibold flex items-center justify-around pr-3 hover:bg-blue-950 '>
              <img className='h-8 object-contain' src="./images/phone.png " alt="" />
              Contact Us
            </button>
          </a>
          </div>
        </div>
      </div>
     <Seo/>
     
     <Email/>
     <Smm/>
     <GoogleAds/>
    </div>
  )
}

export default DigitalMarketing
