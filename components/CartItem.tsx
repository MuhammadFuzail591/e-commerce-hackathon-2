import Image from 'next/image'
import React from 'react'
import { RxCross2 } from "react-icons/rx";

interface ItemProps {
    itemImg: string
    itemTitle: string
    itemQuantity: number
    itemPrice: number
}
function CartItem({ itemImg, itemTitle, itemQuantity, itemPrice }: ItemProps) {
  return (
    <div className='flex items-center gap-4 justify-between'>
        <Image src={itemImg} alt="Image 1" width={100} height={100} className='w-[105px] h-[108px] rounded-md'></Image>
        <div className=''>
            <h3 className='font-poppins font-bold text-[16px] text-black'>{itemTitle}</h3>
            <div className='flex items-center gap-2'>
                <p className='font-poppins text-[16px] text-black'>Quantity: {itemQuantity}</p>
                X
                <p className='font-poppins font-bold text-[12px] text-primary'>Rs. {itemPrice}</p>
            </div>
        </div>
        <RxCross2 className='w-[20px] h-[20px] p-1 font-bold text-white bg-[#9F9F9F] rounded-full'/>
    </div>
  )
}

export default CartItem