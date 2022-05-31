import React from 'react'
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
    
function Header() {
  return (
      <header>
        <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
            <div className='mt-2 items-center flex-grow sm:flex-grow-0 '>
                <Image 
                src ='/images/amazon_logo.png'
                width={140}
                height={40}
                objectFit="contain"
                className='cursor-pointer'
                />
            </div>

            <div className='hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500  '>
                <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type='text'/>
                <SearchIcon className='h-12 p-4'
                />
            </div>
            <div className='text-white flex items-center text-sm space-x-6 mx-6'>
                <div>
                    <p>Hello sifytul</p> 
                    <p>Account & Lists</p> 
                    
                </div>
                
                <div>
                    <p>Returns</p>
                    <p>& Orders</p>
                </div>
                <div>
                    <ShoppingCartIcon className='h-10'/>
                    <p>Basket</p>
                </div>

            </div>
        </div>

      </header>
  )
};

export default Header



export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
    );
    return {
      props: {
        products,
      },
    };
  }
  
  // Fetch >> https://fakestoreapi.com/products

import React from 'react'

function ProductFeed({ products }) {
  return (
    <div>
      <h3>Products Here...</h3>
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  )
}

export default ProductFeed