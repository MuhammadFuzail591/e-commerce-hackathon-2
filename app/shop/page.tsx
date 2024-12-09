import Products from '@/components/Products'
import Hero2 from '@/components/Hero2'
import React from 'react'
import ShopHeader from '@/components/ShopHeader'
import ProductNext from '@/components/ProductNext'
import Footer2 from '@/components/Footer2'

function page () {
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
      productPrice: '1,500'
    },
    {
      productImg: '/images/PImage6.png',
      productName: 'Muggo',
      productDescription: 'Small mug',
      productPrice: '150',
      discount: 'New'
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
      productPrice: '500',
      discount: 'New'
    },
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
      productPrice: '1,500'
    },
    {
      productImg: '/images/PImage6.png',
      productName: 'Muggo',
      productDescription: 'Small mug',
      productPrice: '150',
      discount: 'New'
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
      productPrice: '500',
      discount: 'New'
    }
  ]
  return (
    <div className='flex w-[100%] overflow-hidden gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto'>
      <Hero2 mainHeading='Shop' subHeading='Home' smallHeading='Shop' />
      <ShopHeader/>
      <Products products={products} isHome={false} />
      <ProductNext/>
      <Footer2/>
    </div>
  )
}

export default page
