import React from 'react'

interface buttonProps {
  text: string,
}
function Button ({ text }: buttonProps) {
  return <button className={`font-poppins font-bold py-[25px] px-[72px] text-[16px] text-white bg-primary`}>{text}</button>
}

export default Button
