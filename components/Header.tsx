"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import ShoppingCart from './ShoppingCart';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className='flex justify-center items-center w-full h-[100px] mx-auto'>
      <header className='flex justify-between items-center w-full max-w-[1286px] h-[41px] px-4'>
        {/* Logo Section */}
        <div className="logo flex items-center gap-[5px]">
          <Image src="/images/Logo.png" alt="Furniro Logo" width={50} height={32} priority />
          <h1 className='font-montserrat font-bold text-[24px] sm:text-[34px] '>Furniro</h1>
        </div>

        {/* Navigation Section */}
        <nav className='hidden md:flex'>
          <ul className='flex font-poppins lg:w-[430px] h-[24px] w-[300px] items-center justify-between'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="icons cursor-pointer flex items-center justify-between gap-[10px] sm:gap-[35px]">
          <Image src="/images/accountIcon.png" alt="Account Icon" width={28} height={28} />
          <Image src="/images/searchIcon.png" alt="Search Icon" width={28} height={28} />
          <Image src="/images/heartIcon.png" alt="Heart Icon" width={28} height={28} />
          <Image src="/images/cartIcon.png" alt="Shopping Bag Icon" width={28} height={28} onClick={()=> setIsCartOpen(!isCartOpen)}/>
        </div>

        {/* Mobile Menu Button (Optional) */}
        <div className='md:hidden'>
          <IoMenu size={30} className='cusror-pointer' onClick={()=> setIsMenuOpen(!isMenuOpen)} />
        </div>
      </header>

      {isMenuOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50' onClick={() => setIsMenuOpen(false)}>
          {/* Mobile Menu Content */}
          <div className=' flex flex-col items-center justify-center h-full'>
            <ul className='flex flex-col items-center justify-center gap-6 text-2xl text-white font-bold'>
              <IoCloseSharp size={40} className='cursor-pointer absolute top-4 right-4' onClick={() => setIsMenuOpen(false)} />
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
      {
        isCartOpen && (
          <ShoppingCart onclick={()=> setIsCartOpen(!isCartOpen)}/>
        )
      }
    </div>
  )
}

export default Header;

