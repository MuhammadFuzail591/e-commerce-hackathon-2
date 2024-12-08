import React from 'react'
import Button from './Button'

function Hero () {
  return (
    <section
      className='flex w-[100%] relative md:flex-row flex-col 2xl:w-[1440px] h-[716px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/heroBackground.png')" }}
    >
      <div className='w-1/2'>
        
      </div>
      <div className='flex mt-[100px] lg:mt-0 lg:absolute top-[22%] lg:right-[20%] 2xl:right-0 w-[643px] h-[443px] flex-col lg:bg-white items-center justify-center'>
        <div className='w-[561px] h-[344px]'>
          <h4 className='font-poppins text-[16px] font-semibold text-secondary'>
            New Arrival
          </h4>
          <h1 className='font-poppins text-[40px] sm:text-[52px] leading-[65px] font-extrabold text-primary'>
            Discover Our <br /> New Collection
          </h1>
          <p className='font-poppins w-[80%] sm:w-[90%] text-[18px] mb-10 font-medium text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button text='BUY NOW'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
