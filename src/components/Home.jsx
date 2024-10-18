import React from 'react'
import Services from './Services'
import Growth from './Growth'
import About from './About'
import ReviewSection from './ReviewSection'


function Home() {
  return (
    <div className='w-full overflow-hidden'>
      <Growth />
      <Services />
      <About />
      <ReviewSection />
    </div>
  )
}

export default Home
