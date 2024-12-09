import React from 'react'
import Button from './Button'

function ProductNext () {
  return (
    <div className='flex w-[392px] items-center justify-between'>
      <Button
        classes='rounded-md'
        text='1'
        height='h-[60px]'
        width='w-[60px]'
        bgColor='bg-primary'
        textColor='text-white'
      />
      <Button
        classes='rounded-md'
        text='2'
        height='h-[60px]'
        width='w-[60px]'
        bgColor='bg-transparent'
        textColor='text-black'
      />
      <Button
        classes='rounded-md'
        text='3'
        height='h-[60px]'
        width='w-[60px]'
        bgColor='bg-transparent'
        textColor='text-black'
      />
      <Button
        classes='rounded-md'
        text='Next'
        height='h-[98px]'
        width='w-[60px]'
        bgColor='bg-transparent'
        textColor='text-black'
      />
    </div>
  )
}

export default ProductNext
