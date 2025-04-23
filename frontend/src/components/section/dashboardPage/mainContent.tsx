import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import Greetings from './greetings'
import { recentActivities } from '@/lib/data'
import RecentTransaction from './recentTransaction'

function MainContent() {
  return (
    <div>
    <Greetings/>
    <div className='flex  gap-20'>
        <div className='flex-1 border rounded-2xl border-black'>
          <div className='flex justify-between p-5'>
            <h1>Wallet Summary</h1>

            <div className='flex items-center gap-3'>
                <h1>more</h1>
                <ArrowRight/>
            </div>

          </div>

        </div>

        <div className='flex-1 border rounded-2xl border-black'>
          <div className='flex justify-between p-5'>
            <h1>Recent transcactions</h1>

            <div className='flex items-center gap-3'>
                <h1>more</h1>
                <ArrowRight/>
            </div>

          </div>

          <div>
            {recentActivities.map(({image,brand,date,points,state, time,wallet})=>(
                <RecentTransaction 
                image={image} date={date}
                points={points} time={time}
                brand={brand} state={state}
                wallet={wallet} />
            ))}
          </div>

        </div>
    </div>
    </div>
  )
}

export default MainContent