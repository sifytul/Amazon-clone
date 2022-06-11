import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

    
function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header className=''>
        <div className='bg-amazon_blue items-center p-1 flex flex-grow py-2 w-full sticky top-0 z-50'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image 
                onClick={() => router.push("/")}
                src='/images/amazon_logo.png'
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


            <div className='text-white items-center space-x-6 flex text-sm ml-2'>
              <div onClick={!session ? signIn : signOut }>
                <p className='font-bold text-base link'>
                  {session ? `Hello, ${session.user.name}`: `Sign In`}
                </p>
                <p className='link'>Accounts & Items</p>
              </div>
              <div>
                <p className='font-bold text-base link'>Returns</p>
                <p className='link'>& Orders</p>
              </div>
              <div onClick={() => router.push("/checkout")} className='flex items-center link relative '>
                <span className='absolute right-0 top-0 sm:right-12 h-5 w-4 bg-yellow-300 hover:bg-yellow-400 text-center text-black font-bold rounded-full'>{items.length}</span>
                <ShoppingCartIcon className='h-10'/>
                <p className='hidden sm:inline font-bold text-base mt-2'>Basket</p>
              </div>
            </div>
        </div>

        {/* bottom nav  */}
        <div>
          <div className='bg-amazon_blue-light text-white flex items-center text-sm p-2 space-x-5 font-semibold cursor-pointer'>
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