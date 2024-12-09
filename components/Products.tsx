import React from 'react'
import ProductCard from './ProductCard'
import Button from './Button'

interface product {
  productImg: string
  productName: string
  productDescription: string
  productPrice: string
  discount?: string
}
interface productProps {
  products: product[]
  isHome: boolean
}

function products ({products, isHome}: productProps) {

  return (
    <section className='flex flex-col gap-4 items-center'>
      {isHome && <h1 className='font-poppins text-[40px] font-[900] text-secondary'>
        Our Products
      </h1>}
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
      {isHome && <Button
        text='Show More'
        borderClr='border-primary'
        bgColor='bg-transparent'
        textColor='text-primary'
        width='w-[245px]'
        height='h-[48px]'
      />}
    </section>
  )
}

export default products
