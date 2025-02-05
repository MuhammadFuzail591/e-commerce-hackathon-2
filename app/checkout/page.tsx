import Hero2 from '@/components/Hero2'
import React from 'react'
import Form from './_components/Form'

function Checkout() {
  return (
    <div className="flex w-full overflow-hidden gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto">
        <Hero2 mainHeading='Checkout' subHeading='Cart' smallHeading='Checkout Form'/>
        <Form/>
    </div>
  )
}

export default Checkout