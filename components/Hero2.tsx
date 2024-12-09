import Image from 'next/image'
import React from 'react'

interface Hero2Props {
    mainHeading: string
    subHeading: string
    smallHeading: string
} 

function Hero2 ({ mainHeading, subHeading, smallHeading }: Hero2Props) {
   
  return (
    <div
      className='w-[98%] relative 2xl:w-[1440px] h-[316px] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat '
      style={{ backgroundImage: "url('/images/heroBackground.png')" }}
    >
    <div className="absolute inset-0 bg-gray-900 opacity-20 border-4 border-white"></div>
    <div className='z-10 relative flex flex-col items-center justify-center'>
      <h1 className='font-poppins text-[48px] font-extrabold text-black'>
        {mainHeading}
      </h1>
      <h3 className='font-poppins relative flex items-center text-[16px] gap-4 font-medium text-black'>
        <span className='text-black text-[16px] font-poppins font-bold'>{subHeading}</span>
        {
          <Image
            src='/images/greaterIcon.png'
            alt='Arrow Icon'
            width={8}
            height={14}
          ></Image>
        }
        <span className='text-black text-[16px] font-poppins  font-extralight'>{smallHeading}</span>
      </h3>
    </div>
    </div>
  )
}

export default Hero2
