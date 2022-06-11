import { useSession } from 'next-auth/react';
import Image from 'next/image';
import ReactCurrencyFormatter from 'react-currency-formatter';
import { useSelector } from 'react-redux';
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from '../slices/basketSlice';

function checkout() {
  const items = useSelector(selectItems);
  const total = items.reduce((total, item) => total + item.price, 0)
  const {data :session} = useSession();
  return (
    <div className='bg-gray-100'>
      <div>
        <Header />
        
      </div>
      
      <main className='max-w-screen-xl lg:flex mx-auto'>
            {/* Left part */}

        <div className=''>
            <div className='flex-grow  p-5 space-y-4  bg-white '>
              <Image 
              className='my-5'
              src='/images/Prime-day.jpg' height={200} width={500} objectFit='contain' />

              <div className='text-3xl border-b-2 pb-4 border-black '>
                {items.length === 0 ? "Your Basket is empty" : "Your Shopping Basket"}
              </div>
            </div>

        
            {items.map((item, i) => (
              <CheckoutProduct
                key ={i}
                id = {item.id}
                title = {item.title}
                image = {item.image}
                description = {item.description}
                price = {item.price}
                category = {item.category}
                rating={item.rating}
                />
            ))}        
        </div>



            {/* Right part */}

        <div className='mx-auto flex flex-col bg-white p-10 shadow-md md: '>
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">Subtotal ({items.length} items):  
                <span className='font-bold'>
                  <ReactCurrencyFormatter quantity={total} currency="GBP" /> 
                </span> 
              </h2>
              <button 
              disabled={!session}
              className={`button mt-2 ${!session && "bg-gradient-to-b from-gray-500 to-gray-300 border-gray-200 text-gray-200 cursor-not-allowed focus:from-gray-400"}`}> 
              
              
              {!session ? "Sign In to proceed" : "Proceed to checkout"}</button>
            </>
         )}
        </div>
      </main>
    </div>
  )
}

export default checkout