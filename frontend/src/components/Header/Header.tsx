'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navLinks } from '@/lib/data'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'


function Header() {
  const pathname = usePathname();
  return (
    <div className='flex items-center justify-between'>

      <div className='flex space-x-3 items-start'>
      <Image src='/images/tokendy-img.png' alt="logo" className='w-36 object-contain place-self-start' width={100} height={100}/>
      <Image src='/images/blockchain.png' alt="logo" className='w-8 h-8 object-contain'  width={50} height={50}/>
    </div>

    <nav className='hidden  lg:flex flex-wrap justify-center space-x-10'>
          {navLinks.map(({ name, href }, index) => (
            <Link
              href={href}
              key={index}
              className={clsx('text-[18px]  capitalize',{'text-blue-400 font-bold':pathname === href})}
            >
              {name}
            </Link>
          ))}
        </nav>


{/*  
        <div className='hidden  lg:flex-shrink-0 lg:flex items-center gap-20  '>
          {isAuthenticated && (
            <div>
              <h1 className='font-bold font-poppins text-[20px]'>{walletAddress?.slice(0,6)}...{walletAddress?.slice(-4)}</h1>
            </div>
          )}
      
          {
            isAuthenticated ? (
              <Button  onClick={logout} className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
              logout
            </Button>
            ):(
              <Button  onClick={login} className='font-bold rounded-[5px] bg-btn-gradient capitalize text-[16px] border-white text-white hover:bg-white hover:text-brand-primary'>
              login
            </Button>
            )
          }

        </div> */}


    </div>
  )
}

export default Header