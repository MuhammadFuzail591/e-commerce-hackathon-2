import Image from "next/image"

interface RangeCardProps {
    imageUrl: string;
    text: string;
}
const RangeCard = ({imageUrl, text}: RangeCardProps) => {
    return <div className='text-center flex flex-col gap-4 cursor-pointer'>
              <Image
                src={imageUrl}
                alt='Image'
                width={380}
                height={480}
              ></Image>
              <h2 className='font-poppins text-[24px] font-semibold text-secondary'>{text}</h2>
            </div>
}

export default RangeCard