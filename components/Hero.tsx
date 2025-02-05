import React from 'react'
import Button from './Button'
import Link from 'next/link'

function Hero () {
  return (
    <section
      className='flex w-[100%] overflow-hidden relative md:flex-row flex-col 2xl:w-[1440px] h-[716px] bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/heroBackground.png')" }}
    >
      <div className='w-1/2'></div>
      <div className='flex mt-[70px] md:mt-[135px] lg:mt-0 lg:absolute top-[22%] lg:right-[20%] 2xl:right-20 w-[643px] h-[443px] flex-col lg:bg-white items-center justify-center'>
        <div className='w-[561px] h-[344px]'>
          <h4 className='font-poppins text-[16px] font-semibold text-secondary'>
            New Arrival
          </h4>
          <h1 className='font-poppins text-[40px] sm:text-[52px] leading-[65px] font-extrabold text-[#B88E2F]'>
            Discover Our <br /> New Collection
          </h1>
          <p className='font-poppins w-[60%] sm:w-[90%] text-[14px] sm:text-[18px] mb-10 font-medium text-[#333333]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Link href="/shop">
            <Button text="BUY NOW" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
