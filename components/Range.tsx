// import Image from 'next/image'
import React from 'react'
import RangeCard from './RangeCard'

const rangeProducts = [
  {
    image:"/images/RangeImg1.png",
    text: "Dining"
  },
  {
    image:"/images/RangeImg2.png",
    text: "Living"
  },
  {
    image:"/images/RangeImg3.png",
    text: "Bedroom"
  }
]
function Range () {
  return (
    <section className='w-[100%] md:w-[80%] mt-10 flex flex-col gap-14 items-center'>
      
      <div className='text-center'>
        <h1 className='font-poppins text-[32px] font-bold text-secondary'>Browse The Range</h1>
        <p className='font-poppins text-[20px] text-offclr'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className='main grid grid-cols-1 md:grid-cols-2 gap-1 lg:grid-cols-3 '>
        {
          rangeProducts.map((prod, index) => {
            return <RangeCard imageUrl={prod.image} text={prod.text} key={index}/>
          })
        }
      </div>
    </section>
  )
}

export default Range
