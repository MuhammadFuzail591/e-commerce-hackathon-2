import Image from 'next/image'
import React from 'react'
import Button from './Button'

interface ProductCardProps {
  productImg: string
  productName: string
  productDescription: string
  productPrice: string
  discount?: string
}
function ProductCard ({
  productImg,
  productName,
  productDescription,
  productPrice,
  discount
}: ProductCardProps) {
  return (
    <div className='border border-black shadow-2xl cursor-pointer rounded-lg'>
      <div className='flex flex-col md:flex gap-1 rounded-lg relative group'>
        <Image
          className='rounded-t-lg'
          src={productImg}
          alt={productName}
          width={285}
          height={301}
        ></Image>
        {discount && (
          <span className={`absolute top-4 right-4 font-poppins text-[16px] font-semibold text-white ${discount === "New" ? "bg-newBg" : "bg-discountBg"} w-[48px] h-[48px] rounded-full flex items-center justify-center`}>
            {discount}
          </span>
        )}
        <h2 className='ml-4 font-poppins text-[24px] font-semibold text-proheading'>
          {productName}
        </h2>
        <p className='ml-4 font-poppins text-[16px] font-medium text-prodesc'>
          {productDescription}
        </p>
        <p className='ml-4 mb-4 font-poppins text-[20px] font-semibold text-proheading'>
          PKR {productPrice}
        </p>

        <div className='invisible group-hover:visible absolute top-0 left-0 w-full h-full bg-proheading bg-opacity-70 z-10'>
          <div className='absolute w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5'>
            <Button
              text='Add To Cart'
              bgColor='bg-white'
              textColor='text-primary'
              height='w-[202px]'
              width='h-[48px]'
            />
            <div className='text-white flex gap-4'>
              <div className='flex items-center gap-1'>
                <Image
                  src='/images/shareIcon.png'
                  className='cursor-pointer'
                  width={16}
                  height={16}
                  alt='share'
                ></Image>
                <h4>Share</h4>
              </div>
              <div className='flex items-center gap-1'>
                <Image
                  src='/images/compareIcon.png'
                  className='cursor-pointer'
                  width={16}
                  height={16}
                  alt='Compare'
                ></Image>
                <h4>Compare</h4>
              </div>
              <div className='flex items-center gap-1'>
                <Image
                  src='/images/Vector.png'
                  className='cursor-pointer'
                  width={16}
                  height={16}
                  alt='Like'
                ></Image>
                <h4>Like</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
