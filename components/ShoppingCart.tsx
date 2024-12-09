import React from 'react'
import CartItem from './CartItem'
import { TbShoppingCartOff } from 'react-icons/tb'
import Button from './Button'

interface ItemProps {
  onclick: () => void
}
function ShoppingCart ({onclick}: ItemProps) {
  const items = [
    {
      itemImg: '/images/IImg1.png',
      itemTitle: 'Bedroom',
      itemQuantity: 1,
      itemPrice: 1000
    },
    {
      itemImg: '/images/IImg2.png',
      itemTitle: 'Bedroom',
      itemQuantity: 1,
      itemPrice: 1000
    }
  ]
  return (
    <section className='w-full h-full bg-black fixed top-0 left-0 z-20 bg-opacity-25'>
      <div className='cart px-8 py-8 absolute top-0 right-0 w-[417px] h-[746px] bg-white opacity-100'>
        <div className='mb-8 flex items-center justify-between'>
          <h1 className='font-poppins text-[24px] font-bold text-black'>
            Shopping Cart
          </h1>
          <TbShoppingCartOff onClick={onclick} className='cursor-pointer w-[17px] h-[19px] text-[#9F9F9F]' />
        </div>
        <div className='flex flex-col gap-4'>
          {items.map((item, index) => (
            <CartItem
              key={index}
              itemImg={item.itemImg}
              itemTitle={item.itemTitle}
              itemQuantity={item.itemQuantity}
              itemPrice={item.itemPrice}
            />
          ))}
        </div>
        <div className='flex items-center gap-20 mt-[80%]'>
          <h4 className='text-[16px] text-black font-regular'>Subtotal</h4>
          <h3 className='text-[16px] text-primary font-bold'>Rs. 2000</h3>
        </div>
        <div className='flex items-center justify-between mt-[15%]'>
          <Button
            text='Cart'
            bgColor='bg-transparent'
            textColor='text-black'
            borderClr='border border-black'
            font='font-regular'
            height='h-[30px]'
            width='w-[87px]'
            classes='rounded-full text-[12px]'
          />
          <Button
            text='Checkout'
            bgColor='bg-transparent'
            textColor='text-black'
            borderClr='border border-black'
            height='h-[30px]'
            width='w-[118px]'
            font='font-regular'
            classes='rounded-full text-[12px]'
          />
          <Button
            text='Comparison'
            bgColor='bg-transparent'
            textColor='text-black'
            font='font-regular'
            borderClr='border border-black'
            height='h-[30px]'
            width='w-[135px]'
            classes='rounded-full text-[12px]'
          />
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
