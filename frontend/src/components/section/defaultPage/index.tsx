import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import HeroSection from './HeroSection'

function LandingPage() {
  return (
    <div className='mx-10'>
        <Header/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default LandingPage