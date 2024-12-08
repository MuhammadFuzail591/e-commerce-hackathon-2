import Image from 'next/image'
import React from 'react'

function Range () {
  return (
    <section className='w-[100%] md:w-[80%] mt-10 flex flex-col gap-14 items-center'>
      
      <div className='text-center'>
        <h1 className='font-poppins text-[32px] font-bold text-secondary'>Browse The Range</h1>
        <p className='font-poppins text-[20px] text-offclr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='main grid grid-cols-1 md:grid-cols-2 gap-1 lg:grid-cols-3 '>
        <div className='text-center flex flex-col gap-4'>
          <Image
            src='/images/RangeImg1.png'
            alt='Image'
            width={380}
            height={480}
          ></Image>
          <h2 className='font-poppins text-[24px] font-semibold text-secondary'>Dining</h2>
        </div>
        <div className='text-center flex flex-col gap-3'>
          <Image
            src='/images/RangeImg2.png'
            alt='Image'
            width={380}
            height={480}
          ></Image>
          <h2 className='font-poppins text-[24px] font-semibold text-secondary'>Living</h2>
        </div>
        <div className='text-center flex flex-col gap-3'>
          <Image
            src='/images/RangeImg3.png'
            alt='Image'
            width={380}
            height={480}
          ></Image>
          <h2 className='font-poppins text-[24px] font-semibold text-secondary'>Bedroom</h2>
        </div>
      </div>
    </section>
  )
}

export default Range
