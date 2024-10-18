import React from 'react'

function ContactHome() {
  return (
    <div className="relative">
    <img src="./Public/contactus img/contactushome.png" alt="Image is not showing" className="w-full h-[300px]" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-white text-2xl md:text-6xl font-bold pb-3">
            C o n t a c t   U s
       </h2>    
            <div className='text-white flex '>
            <span className='text-2xl font-normal text-center '>
                <a href="/" className="text-2xl font-normal pr-3 pb-10">Home </a>
            </span>
            <h1 className='text-2xl '>&gt;</h1>
            <span className='text-2xl font-normal pl-3'> Contact Us</span>
            </div>
    </div>
</div>
  )
}

export default ContactHome