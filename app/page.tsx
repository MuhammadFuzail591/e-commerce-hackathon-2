import Hero from '@/components/Hero'
import Range from '@/components/Range'
import Products from '@/components/Products'
import Inspiration from '@/components/Inspiration'
import FurnitureGallery from '@/components/FurnitureGallery'

export default function Home () {
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
    }
  ]
  return (
    <div className='flex w-[100%] gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto'>
      {/* <h1>{process.env.SANITY_API_TOKEN}</h1> */}
      <Hero />
      <Range />
      <Products products={products} isHome={true} />
      <Inspiration />
      <FurnitureGallery />
    </div>
  )
}
