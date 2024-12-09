import React from 'react'
import Button from './Button'
import ContactCard from './ContactCard'

function ContactForm () {
  const cards = [
    {
      logoImg: '/images/addressIcon.png',
      title: 'Address',
      description: '236 5th SE Avenue, New York NY10000, United States'
    },
    {
      logoImg: '/images/phoneIcon.png',
      title: 'Phone',
      description: 'Mobile: +(84) 546-6789 Hotline: +(84) 456-6789'
    },
    {
      logoImg: '/images/clockIcon.png',
      title: 'Email',
      description: 'Mon - Fri: 8:00am - 5:00pm'
    }
  ]
  return (
    <div className='flex flex-col w-[98%] 2xl:w-[1440px] items-center justify-center '>
      <div className='text-center flex flex-col gap-2'>
        <h1 className='font-poppins text-[36px] font-semibold text-black'>
          Get In Touch With Us
        </h1>
        <p className='font-poppins mx-auto w-[80%] text-[16px] text-offclr md:w-[644px]'>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className='flex flex-col md:flex-row md:w-[80%]  p-10 gap-10'>
        <div className='flex flex-col gap-6 md:w-[393px] md:h-[537px] p-4 lg:p-14 md:mt-16'>
          {cards.map((card, index) => (
            <ContactCard
              key={index}
              logoImg={card.logoImg}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <form
          action=''
          className='flex flex-col gap-[20px] md:w-[70%] lg:w-[635px]'
        >
          <div className='flex flex-col gap-[20px]'>
            <h3 className='font-poppins text-[16px] font-semibold text-black'>
              Your Name
            </h3>
            <input
              type='text'
              placeholder='Abc'
              className='w-[100%] h-[75px] border border-[#9F9F9F] rounded-md pl-4'
            ></input>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <h3 className='font-poppins text-[16px] font-semibold text-black'>
              Email Address
            </h3>
            <input
              type='text'
              placeholder='5sM7y@example.com'
              className='w-[100%] h-[75px] border border-[#9F9F9F] rounded-md pl-4'
            ></input>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <h3 className='font-poppins text-[16px] font-semibold text-black'>
              Subject
            </h3>
            <input
              type='text'
              placeholder='Subject'
              className='w-[100%] h-[75px] border border-[#9F9F9F] rounded-md pl-4'
            ></input>
          </div>
          <div className='flex flex-col gap-[20px]'>
            <h3 className='font-poppins text-[16px] font-semibold text-black'>
              Message
            </h3>
            <textarea
              placeholder='Hi! i’d like to ask about'
              className='w-[100%] h-[120px] py-4 border border-[#9F9F9F] rounded-md pl-4'
            ></textarea>
          </div>
          <Button
            text={'Submit'}
            bgColor={'bg-primary'}
            textColor={'text-white'}
            height='h-[55px]'
            width='w-[237px]'
            classes='mt-4 rounded-md'
          />
        </form>
      </div>
    </div>
  )
}

export default ContactForm
