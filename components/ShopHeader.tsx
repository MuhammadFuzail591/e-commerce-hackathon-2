import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { HiViewGrid } from 'react-icons/hi'
import { BsViewList } from 'react-icons/bs'
import { TfiLayoutLineSolid } from 'react-icons/tfi'

function ShopHeader () {
  return (
    <div className='w-[98%] gap-4 md:gap-0 flex-col md:flex-row px-4 2xl:w-[1440px] md:h-[100px] flex items-center justify-between'>
      <div className='md:w-1/2 flex gap-4 items-center'>
        <div className='filter flex gap-2 items-center'>
          <HiOutlineAdjustmentsHorizontal className='cursor-pointer w-[25px] h-[25px]' />
          <h3 className='cursor-pointer font-poppins text-[20px] text-black'>
            Filter
          </h3>
        </div>
        <HiViewGrid className='cursor-pointer min-w-[28px] h-[28px]' />
        <BsViewList className='cursor-pointer min-w-[24px] h-[24px]' />
        <TfiLayoutLineSolid className='cursor-pointer transform rotate-90 w-[24px] h-[37px] text-[#9F9F9F]' />
        <h3 className='font-poppins text-[16px] text-black'>
          Showing 1-16 of 32 results
        </h3>
      </div>
      <div className='md:w-1/2 flex items-center justify-center gap-6'>
        <div className='flex items-center gap-2'>
            <h3 className='font-poppins text-[20px] text-black'>Show</h3>
            <h4 className='font-poppins text-[20px] text-[#9F9F9F]'>16</h4>
        </div>
        <div className='flex items-center justify-between gap-4'>
            <h3 className='font-poppins text-[20px] text-black'>Sort by</h3>
            <h4 className='font-poppins text-[20px] text-[#9F9F9F]'>Default</h4>
        </div>
      </div>
    </div>
  )
}

export default ShopHeader
