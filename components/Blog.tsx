import React from 'react'
import BlogPost from './BlogPost'

function Blog () {
  const posts = [
    {
      BlogImg: '/images/blog1.png',
      title: 'The Best Way To Style Your Home',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      BlogImg: '/images/blog2.png',
      title: 'The Best Way To Style Your Home',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    },
    {
      BlogImg: '/images/blog3.png',
      title: 'The Best Way To Style Your Home',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
    }
  ]
  return (
    <section className='w-[100%] 2xl:w-[1440px] flex items-center justify-center'>
      <div className='w-[90%] flex flex-col gap-10'>
        {posts.map((post, index) => {
          return <BlogPost key={index} {...post} />
        })}
      </div>
      <div></div>
    </section>
  )
}

export default Blog
