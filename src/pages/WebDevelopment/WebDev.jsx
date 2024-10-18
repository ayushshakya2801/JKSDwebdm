import React from 'react'
import Static from './Static'
import Dynamic from './Dynamic'
import Ecommerce from './Ecommerce'
import WebdevIntro from './WebdevIntro'

function WebDev() {
  return (
    <div className='w-full overflow-hidden'>
      <WebdevIntro />
      <Static />
      <Dynamic />
      <Ecommerce />
    </div>
  )
}

export default WebDev
