import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/outline';
import { useState } from 'react/cjs/react.development';
import  Currency  from 'react-currency-formatter';
import { current } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';



const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, description, price, image, category }){  
   const [rating] = useState(
     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1 )) + MIN_RATING
   ); 
   const dispatch = useDispatch();
   const addItemToBasket = () => {
    const product = {
      id, title, rating, description, price, image, category,
    };
    // Sending the product as an action to the Redux store... the basket slice...
    dispatch(addToBasket(product))
   };
  return (
    <div className='product'>
        <p className='absolute top-2 right-2 text-xs italic first:text-gray-400'>{category}</p>
        <img 
        className='mx-auto'
        src={image} height={200} width={200} objectfit="contain"
        />
        <h3 className='my-3'>{title}</h3>
        <div className='flex '>
          {Array(rating).fill().map((_, i) => (

            <StarIcon className='h-5 fill-current text-yellow-500 '/>
            ))}
        </div>

        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div>
          <Currency quantity={price} currency='GBP' />
        </div>

       
        <button onClick={addItemToBasket} className='hover:transition-transform mt-auto button '>Add to Basket</button>
    </div>
  )
}

export default Product