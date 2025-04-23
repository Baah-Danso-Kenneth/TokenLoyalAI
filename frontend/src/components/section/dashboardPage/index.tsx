import Header from '@/components/Header/Header'
import React from 'react'
import MainContent from './mainContent'
import YourTopRewards from './yourTopRewards'

function DashboardPage() {
  return (
    <div className='mx-10'>
        <Header />
        <MainContent/>
        <YourTopRewards/>
    </div>
  )
}

export default DashboardPage