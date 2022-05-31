import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/outline';
import { useState } from 'react/cjs/react.development';
import  Currency  from 'react-currency-formatter';
import { current } from '@reduxjs/toolkit';



const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, description, price, image, category }){  
   const [rating] = useState(
     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1 )) + MIN_RATING
   ); 

   
  return (
    <div className='product'>
        <p className='absolute top-2 right-2 text-xs italic first:text-gray-400'>{category}</p>
        <img 
        className='object-contain'
        src={image} height={200} width={200} 
        />
        <h3 className='my-3'>{title}</h3>
        <div className='flex '>
          {Array(rating).fill().map((_, i) => (

            <StarIcon className='h-5 fill-current text-yellow-500 '/>
            ))}
        </div>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div>
          <Currency quantity={price} />
        </div>

       
        <button className=' mt-auto button '>Add to Basket</button>
    </div>
  )
}

export default Product