import React from 'react'
import Button from './Button'
import Image from 'next/image'

function Inspiration () {
  return (
    <section className='flex w-[90%] flex-col lg:flex-row gap-10 items-center justify-center 2xl:w-[1440px] '>
      <div className='text lg:w-5/12 flex flex-col gap-4'>
        <h1 className='font-poppins text-[32px] leading-[48px] xl:text-[40px] font-extrabold text-secondary'>
          50+ Beautiful rooms <br /> inpiration
        </h1>
        <Button text='Explore More' height='h-[48px]' width='w-[176px]' />
      </div>
      <div className='relative flex flex-col md:flex-row gap-4 2xl:w-[1196px]'>
        <div className='img relative'>
          <Image
            src='/images/IImg1.png'
            alt='inspirationImg'
            width={400}
            height={582}
          />
          <div className='absolute bottom-5 left-5 flex items-center justify-center flex-col gap-2 bg-white w-[217px] h-[130px]'>
            <h4 className='font-poppins text-[16px] font-medium text-insclr'>
              01 ---- Bed Room
            </h4>
            <h2 className='font-poppins text-[28px] font-semibold text-secondary'>
              Inner Peace
            </h2>
            <div className='flex absolute bottom-0 right-[-48px] items-center justify-center bg-primary w-[48px] h-[48px]'>
              <Image
                src='/images/arrowIcon.png'
                alt='Arrwo Png'
                width={18}
                height={12}
              />
            </div>
          </div>
        </div>
        <div className='img'>
          <Image
            src='/images/IImg2.png'
            alt='inspirationImg'
            width={372}
            height={486}
          />
        </div>
      </div>
    </section>
  )
}

export default Inspiration
