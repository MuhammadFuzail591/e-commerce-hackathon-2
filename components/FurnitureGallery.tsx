/* eslint-disable @next/next/no-img-element */
import React from 'react'

function FurnitureGallery () {
  const images = [
    '/images/Image1.png',
    '/images/Image2.png',
    '/images/Image3.png',
    '/images/Image4.png',
    '/images/Image5.png',
    '/images/Image6.png',
    '/images/Image7.png',
    '/images/Image8.png',
    '/images/Image9.png',
    '/images/Image10.png'
  ]
  return (
    <section className='text-center'>
      <div>
        <p className='font-poppins text-[16px] md:text-[20px] font-semibold text-offclr'>
          Share your setup with
        </p>
        <h1 className='font-poppins text-[30px] md:text-[40px] font-bold text-secondary'>
          #FuniroFurniture
        </h1>
      </div>
      <section className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 p-6 bg-gray-100 xl:w-[1799px] xl:h-[780px] '>
        {images.map((src, index) => (
          <div key={index} className='mb-4'>
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className='w-full rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl'
            />
          </div>
        ))}
      </section>
    </section>
  )
}

export default FurnitureGallery
