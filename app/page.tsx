import Hero from '@/components/Hero'
import Range from '@/components/Range'
import Products from '@/components/Products'
import Inspiration from '@/components/Inspiration'

export default function Home () {
  return (
    <div className='flex w-[100%] gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto'>
      <Hero />
      <Range />
      <Products />
      <Inspiration />
    </div>
  )
}
