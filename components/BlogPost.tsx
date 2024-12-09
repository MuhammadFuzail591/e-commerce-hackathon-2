import Image from 'next/image'
import React from 'react'

interface BlogPostProps {
  BlogImg: string
  title: string
  description: string
}
function BlogPost ({ BlogImg, title, description }: BlogPostProps) {
  return (
    <section className='flex flex-col gap-4'>
      <Image src={BlogImg} alt='Blog Post' width={817} height={500}></Image>
      <div className='flex gap-3'>
        <div className='flex gap-1 items-center'>
          <Image
            src='/images/userIcon.png'
            width={20}
            height={20}
            alt='Image'
          ></Image>
          <p className='text-[16px] text-[#9F9F9F]'>Admin</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image
            src='/images/bagIcon.png'
            width={20}
            height={20}
            alt='Image'
          ></Image>
          <p className='text-[16px] text-[#9F9F9F]'>14th Dec 2022</p>
        </div>
        <div className='flex gap-1 items-center'>
          <Image
            src='/images/tagIcon.png'
            width={20}
            height={20}
            alt='Image'
          ></Image>
          <p className='text-[16px] text-[#9F9F9F]'>Wood</p>
        </div>
      </div>
      <h1 className='font-poppins text-[30px] font-bold text-black'>{title}</h1>
      <p className='font-poppins text-[15px] text-[#9F9F9F]'>{description}</p>
      <h2 className='text-[16px] pb-2 text-black border-b border-black'>
        Read More
      </h2>
    </section>
  )
}

export default BlogPost
