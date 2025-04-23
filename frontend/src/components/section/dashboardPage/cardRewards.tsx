import { YourRewardsProps } from '@/types/regular.types'
import Image from 'next/image'
import React from 'react'


function CardRewards({image,title, subTitle, direction, points}:YourRewardsProps) {
  return (
    <div className='shadow-lg rounded-3xl mb-20 h-auto border border-[#F2F2F4] p-5'>
        <Image src={image} alt="" width={200} height={200}/>

        <div className='space-y-5'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{direction}</p>
        </div>

        <div className='flex gap-3 items-center'>
            <h1 className='text-8xl'>{points}</h1>
            <p>points</p>
        </div>
    </div>
  )
}

export default CardRewards