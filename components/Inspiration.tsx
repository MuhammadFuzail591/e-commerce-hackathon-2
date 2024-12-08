import React from 'react'
import Button from './Button'
import Image from 'next/image'

function Inspiration() {
  return (
    <section className='flex overflow-hidden w-[90%] flex-col lg:flex-row gap-10 items-center justify-center 2xl:w-[1440px] '>
        <div className='text lg:w-5/12 flex flex-col gap-4'>
            <h1 className='font-poppins text-[32px] leading-[48px] xl:text-[40px] font-extrabold text-secondary'>
                50+ Beautiful rooms <br /> inpiration
            </h1>
            <Button text='Explore More' height='h-[48px]' width='w-[176px]'/>
        </div>
        <div className='flex gap-4 2xl:w-[1196px] h-[582px]'>
        <div className="img">
            <Image src="/images/IImg1.png" alt="inspirationImg" width={400} height={582} />
        </div>
        <div className="slider">
            <Image src="/images/IImg2.png" alt="inspirationImg" width={372} height={486} />
        </div>
        </div>
    </section>
  )
}

export default Inspiration