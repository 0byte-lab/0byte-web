import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'

const Outro = () => {
  return (
    <div className='min-h-[40vh] xl:max-w-6xl flex backdrop-blur-lg rounded-2xl flex-col items-center justify-center max-w-7xl mx-4 xl:mx-auto my-10'>
        <Title text={"Trust by Design"} className={"my-8 max-w-4xl mx-auto"} />
        <Subtitle text={"0byte isn’t just another watermark. It’s a system of truth — built to verify what AI creates and protect those who create it."} className={" lg:max-w-2xl mx-auto text-center px-4 text-muted-foreground"} />
    </div>
  )
}

export default Outro