import Blog from '@/components/Blog'
import Hero2 from '@/components/Hero2'
import React from 'react'

function page () {
  return <div className='flex w-[100%] overflow-hidden gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto'>
    <Hero2 mainHeading={'Blog'} subHeading={'Home'} smallHeading={'Blog'} />
    <Blog />
  </div>
}

export default page
