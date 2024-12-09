import ContactForm from '@/components/ContactForm'
import Footer2 from '@/components/Footer2'
import Hero2 from '@/components/Hero2'
import React from 'react'

function page () {
  return (
    <div className='flex w-[100%] overflow-hidden gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto'>
      <Hero2
        mainHeading={'Contact'}
        subHeading={'Home'}
        smallHeading={'Contact'}
      />
      <ContactForm />
      <Footer2 />
    </div>
  )
}

export default page
