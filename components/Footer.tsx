import Link from 'next/link'
import React from 'react'

function Footer () {
  return (
    <footer className='w-[100%] mx-auto flex gap-10 px-10 md:px-16 py-10 flex-col 2xl:w-[1440px] h-[505px]'>
      <div className='flex w-[100%] flex-col sm:flex-row gap-10'>
        <div className='w-12/12 sm:w-4/12 flex flex-wrap gap-10'>
          <h1 className='font-poppins text-[24px] font-bold text-black'>
            Furniro.
          </h1>
          <h3 className='font-poppins text-[16px] text-[#9F9F9F]'>
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
          <div className='md:w-2/12'>
            <ul className='flex flex-col gap-10'>
              <li className='text-[16px] text-[#9F9F9F] font-bold'>Links</li>
              <li className='text-[16px] text-black font-bold'>
                <Link href='/'>Home</Link>
              </li>
              <li className='text-[16px] text-black font-bold'>
                <Link href='/shop'>Shop</Link>
              </li>
              <li className='text-[16px] text-black font-bold'>
                <Link href='/blog'>Blog</Link>
              </li>
              <li className='text-[16px] text-black font-bold'>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='w-2/12'>
            <ul className='flex flex-col gap-10 justify-start'>
              <li className='text-[16px] text-[#9F9F9F] font-bold'>Help</li>
              <li className='text-[16px] text-black font-bold'>
                <Link href='/'>Payment Options</Link>
              </li>
              <li className='text-[16px] text-black font-bold'>
                <Link href='/'>Returns</Link>
              </li>
              <li className='text-[16px] text-black font-bold'>
                <Link href='/'>Provacy Policies</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='hidden w-4/12 sm:flex flex-col gap-10'>
          <h1 className='font-poppins text-[16px] font-bold text-[#9F9F9F]'>
            NewsLetter
          </h1>
          <div className='flex flex-col md:flex-row gap-2 items-center'>
            <input
              type='text'
              name='email'
              placeholder='Enter your email Address'
              className='font-poppins text-[14px] w-[185px] h-[21px] border-b border-black'
            />
            <button className='text-[14px] font-poppins border-b border-black text-black'>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className=''>
        <p className='font-poppins text-[16px] font-bold text-black'>
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  )
}

export default Footer
