import React from 'react'
import { Link } from 'react-router-dom'

function Blogs() {
    return (
        <div className="blogs bg-[#FBFAF6] pb-4  ">
            <div className="relative">
                <img src="./images/bloggg.jpeg" alt="Image is not showing" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-white text-2xl md:text-6xl font-bold">
                        B l o g s
                    </h2>
                    <div className='text-white flex  pt-2 '>
                        <span className='text-2xl font-normal text-center '>
                            <a href="/" className="text-2xl font-normal  pr-3">Home </a>
                        </span>
                        <h1 className='text-2xl '>&gt;</h1>
                        <span className='text-2xl font-normal pl-3  '> Blogs</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap gap-12 h-[70%]  justify-center mx-24 py-4 '>
                {
                    data.map((d, index) => (
                        <div className="blogslist flex gap-7 flex-wrap justify-center pt-4 ">
                            <div className="c1   h-64 w-80  border-solid border-1 rounded-lg justify-between shadow-[0_0.1px_13px_0.1px_#9da39e]">
                                <img className='rounded-lg h-40 w-80' src={d.image} alt="" />

                                <h1 className='font-medium  text-center pt-2 ' >{d.title}</h1>
                                <p className='text-xs text-center mt-2 '>{d.description}</p>

                                <div className='flex justify-evenly   mt-2 ' >

                                    <Link to={`/${d.id}`}>
                                   

                                        <button
                                            class="  font-sans font-medium text-center uppercase  text-xs py-1.5 ml-2 px-2   rounded-lg hover:border-2  bg-white border-orange-500 text-black  flex items-center gap-2  "
                                            type="button">

                                            Read More
                                            <img className='h-4 w-4' src='./images/right-arrow.png' alt="" />

                                        </button>
                                    </Link>
                                  
                                </div>


                            </div>


                        </div>
                    ))
                }
            </div>


        </div>
    )



}
const data = [
    {
        id: 'topbenefits',
        title: 'Top Benefits of SEO Tools for Your Website.',
        // description: 'Thrive in digital brand growth',
        image: './images/seo.jpeg'

    },
    {
        id: 'socialmedia',
        title: 'What is Social Media Marketing?',
        image: './images/sociall.jpeg'
    },
    {
        id: 'top10',
        title: 'Top 10 Free Digital Marketing Tools 2024',
        image: './images/top10digital.jpeg'
    },
   
  

]


export default Blogs
