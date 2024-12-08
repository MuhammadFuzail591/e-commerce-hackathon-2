import React from 'react'

interface buttonProps {
  text: string
  bgColor?: string
  textColor?: string
  height?: string
  width?: string
  classes?: string,
  borderClr?: string
}
function Button ({
  text,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  height = 'py-[25px]',
  width = 'px-[72px]',
  borderClr = 'border-none',
  classes
}: buttonProps) {
  return (
    <button
      className={`${classes} border ${borderClr} font-poppins font-bold  text-[16px] ${textColor} ${bgColor} ${height} ${width}`}
    >
      {text}
    </button>
  )
}

export default Button
