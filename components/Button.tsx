import React from 'react'

interface buttonProps {
  text: string
  bgColor?: string
  textColor?: string
  height?: string
  width?: string
  classes?: string
  borderClr?: string
  font?: string
  onclick?: () => void
}
function Button ({
  text,
  bgColor = 'bg-primary',
  textColor = 'text-white',
  height = 'py-[25px]',
  width = 'px-[72px]',
  borderClr = 'border-none',
  font = 'font-bold',
  onclick,
  classes
}: buttonProps) {
  return (
    <button
      className={`${classes} border ${borderClr} font-poppins ${font}  text-[16px] ${textColor} ${bgColor} ${height} ${width}`}
      onClick={onclick}
    >
      {text}
    </button>
  )
}

export default Button
