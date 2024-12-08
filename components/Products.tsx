import React from 'react'
import ProductCard from './ProductCard'
import Button from './Button'

function products () {
  const products = [
    {
      productImg: '/images/PImage1.png',
      productName: 'Syltherine',
      productDescription: 'Stylish cafe chair',
      productPrice: '2,500',
      discount: '-30%'
    },
    {
      productImg: '/images/PImage2.png',
      productName: 'Leviosa',
      productDescription: 'Stylish cafe chair',
      productPrice: '2,500'
    },
    {
      productImg: '/images/PImage3.png',
      productName: 'Lolito',
      productDescription: 'Lusury Big Sofa',
      productPrice: '2,500',
      discount: '-50%'
    },
    {
      productImg: '/images/PImage4.png',
      productName: 'Respira',
      productDescription: 'Outdoor bar table and stool',
      productPrice: '500',
      discount: 'New'
    },
    {
      productImg: '/images/PImage5.png',
      productName: 'Grifo',
      productDescription: 'Night Lamp',
      productPrice: '1,500',
      discount: 'New'
    },
    {
      productImg: '/images/PImage6.png',
      productName: 'Muggo',
      productDescription: 'Small mug',
      productPrice: '150'
    },
    {
      productImg: '/images/PImage7.png',
      productName: 'Pingky',
      productDescription: 'Cute bed set',
      productPrice: '7,000',
      discount: '-50%'
    },
    {
      productImg: '/images/PImage8.png',
      productName: 'Potty',
      productDescription: 'Minimalist flower pot',
      productPrice: '500'
    }
  ]
  return (
    <section className='flex flex-col gap-4 items-center'>
      <h1 className='font-poppins text-[40px] font-[900] text-secondary'>
        Our Products
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4'>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productImg={product.productImg}
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
            discount={product.discount}
          />
        ))}
      </div>
      <Button
        text='Show More'
        borderClr='border-primary'
        bgColor='bg-transparent'
        textColor='text-primary'
        width='w-[245px]'
        height='h-[48px]'
      />
    </section>
  )
}

export default products
