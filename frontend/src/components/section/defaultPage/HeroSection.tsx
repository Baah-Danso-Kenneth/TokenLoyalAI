import { Button } from '@/components/ui/button'
import React from 'react'

export default function HeroSection() {
  return (
    <div>
        <div className=' w-[55%]  py-10'>
            <h1 className='font-play_flaire text-8xl  uppercase'>revenue sharing token</h1>
        </div>


        <div className='flex '>
            <div className='flex-1'>
              <p className='w-[50%] text-[20px] mb-5'>Offering a weekly ROI in
                 tokens generated from multiple both
                 real-world and online business.
                 </p>
                 <div className='space-y-10'>
                    <Button className='text-[20px] bg-blue-400  p-6 rounded-full  font-dmMono capitalize'>
                        stake now</Button>
                    <div className='space-x-10'>
                        <Button className='text-[20px] p-6 rounded-full bg-blue-400  capitalize'>buy contend</Button>
                        <Button className='text-[20px] p-6 rounded-full bg-blue-400   capitalize'>off-exchange deal</Button>

                    </div>
                 </div>
            </div>

            <div className='flex-1'>
                img
            </div>
        </div>
    </div>
  )
}
