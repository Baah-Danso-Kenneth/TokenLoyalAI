import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { RecentTypes } from '@/types/regular.types';

function RecentTransaction({image, date, points, time, brand, state, wallet}:RecentTypes) {
  return (
    <div className='grid grid-cols-3 gap-10 py-2 border-b p-5'>
       <div className='flex gap-5'>
        <Image src={image} alt='' width={50} height={50}/>
        <div>
            <h1>{brand}</h1>
            <p>{date}</p>
        </div>
       </div>

       <div className='flex gap-5'>
        <Button>{state}</Button>

        <div className='flex'>
            <h1>{wallet?.slice(0,10)}</h1>
            <Copy/>
        </div>
       </div>


       <div className='place-self-end'>
        <h1>{time}</h1>
        <p>{points}</p>
       </div>

    </div>
  )
}

export default RecentTransaction