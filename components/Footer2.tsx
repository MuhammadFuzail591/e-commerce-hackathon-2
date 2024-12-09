import React from 'react'
import { GoTrophy } from 'react-icons/go'
import { LuBadgeCheck } from 'react-icons/lu'
import { FaShippingFast } from 'react-icons/fa'
import { RiCustomerService2Fill } from 'react-icons/ri'

function Footer2 () {
  return (
    <section className='w-[98%] px-4 2xl:w-[1440px] mx-auto flex items-center justify-center 2xl:h-[270px]'>
      <div className='2xl:w-[1334px] grid grid-cols-2 md:grid-cols-4 gap-10'>
        <div className='flex items-center gap-4'>
          <GoTrophy className='w-[60px] h-[60px]' />
          <div>
            <h3 className='font-poppins font-bold text-[20px] lg:text-[25px] text-[#242424]'>
              High Quality
            </h3>
            <h6 className='font-poppins font-medium lg:text-[20px] text-[#898989]'>
              crafted from top materials
            </h6>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <LuBadgeCheck className='w-[60px] h-[60px]' />
          <div>
            <h3 className='font-poppins font-bold text-[20px] lg:text-[25px] text-[#242424]'>
              Warranty Protection
            </h3>
            <h6 className='font-poppins font-medium lg:text-[20px] text-[#898989]'>
              Over 2 years
            </h6>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <FaShippingFast className='w-[60px] h-[60px]' />
          <div>
            <h3 className='font-poppins font-bold text-[20px] lg:text-[25px] text-[#242424]'>
              Free Shipping
            </h3>
            <h6 className='font-poppins font-medium lg:text-[20px] text-[#898989]'>
              Order over 150 $
            </h6>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <RiCustomerService2Fill className='w-[60px] h-[60px]' />
          <div>
            <h3 className='font-poppins font-bold text-[20px] lg:text-[25px] text-[#242424]'>
              24 / 7 Support
            </h3>
            <h6 className='font-poppins font-medium lg:text-[20px] text-[#898989]'>
              Dedicated support
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer2
