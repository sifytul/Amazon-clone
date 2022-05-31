import React from 'react'
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
    
function Header() {
  return (
    <header>
        <div className='bg-amazon_blue items-center p-1 flex flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image src='/images/amazon_logo.png'
                width={140}
                height={40}
                objectFit="contain"
                className='cursor-pointer'
                />
            </div>
            <div className='hidden sm:flex flex-grow items-center rounded-md  h-10 bg-yellow-400 hover:bg-yellow-500 '>
                <input type='text' className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4'/>
                <SearchIcon className='h-12 p-4' />
            </div>


            <div className='text-white items-center space-x-6 flex text-sm link ml-2'>
              <div>
                <p className='font-bold text-base'>Hello Sifytul,</p>
                <p>Accounts & Items</p>
              </div>
              <div>
                <p className='font-bold text-base '>Returns</p>
                <p>& Orders</p>
              </div>
              <div className='flex items-center link relative '>
                <span className='absolute right-0 top-0 sm:right-12 h-5 w-4 bg-yellow-400 text-center text-black font-bold rounded-full'>0</span>
                <ShoppingCartIcon className='h-10'/>
                <p className='hidden sm:inline font-bold text-base mt-2'>Basket</p>
              </div>
            </div>
        </div>

        {/* bottom nav  */}
        <div>
          <div className='bg-amazon_blue-light text-white flex items-center text-sm p-2 space-x-5 font-semibold'>
            <p className='flex items-center link'>
              <MenuIcon className='h-6 mr-1'/>
              All
              </p>
            <p>Today's Deals</p>
            <p>Customer Service</p>
            <p>Registry</p>
            <p>Gift Cards</p>
            <p>Sell</p>
          </div>
          
        </div>
    </header>
  )
};

export default Header