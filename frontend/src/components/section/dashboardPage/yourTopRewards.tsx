import React from 'react'
import CardRewards from './cardRewards'
import { yourItems } from '@/lib/data'

function YourTopRewards() {
  return (
    <div className='pt-20'>
        <h1>YourTopRewards</h1>

        <div className='grid grid-cols-3 gap-10'>
            {yourItems.map(({image,title,subTitle,direction,points},index)=>(
                <CardRewards
                key={index}
                image={image}
                title={title}
                subTitle={subTitle} 
                direction={direction} 
                points={points}/>
            ))}
        </div>
    </div>
  )
}

export default YourTopRewards