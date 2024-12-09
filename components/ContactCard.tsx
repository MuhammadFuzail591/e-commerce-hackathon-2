import Image from 'next/image'
import React from 'react'

interface ContactCardProps {
  logoImg: string
  title: string
  description: string
}
function ContactCard ({ logoImg, title, description }: ContactCardProps) {
  return (
    <div className='flex items-center gap-4'>
      <Image src={logoImg} alt={title} width={30} height={30}></Image>
      <div className='flex flex-col'>
        <h2 className='font-poppins text-[24px] font-semibold text-secondary'>
          {title}
        </h2>
        <p className='font-poppins text-[16px] font-medium text-offclr'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ContactCard
