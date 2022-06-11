import { StarIcon } from '@heroicons/react/solid'
import React from 'react'
import ReactCurrencyFormatter from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({id, image, title, description, price, category,rating}) {
    const dispatch = useDispatch()
    const addAnotherToBasket = () => {
        const product = {
            id, image, title, description, price, category,rating
        }
        dispatch(addToBasket(product))
    }
    const removefromBasket = () => {
        dispatch(removeFromBasket( {id} ))
    }
  return (
    <div className='product grid grid-cols-5 space-y-3 bg-white'>
        <img src={image} height={200} width={200} alt="" />
        <div className='col-span-3 space-y-2 mx-3'>
            <p className='text-lg font-semibold'>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_, i)=> (
                    <StarIcon key={i} className='h-5 text-yellow-500'/>
                
                ))}
            </div>
            <div className='font-semibold'>
                <ReactCurrencyFormatter quantity={price} currency="GBP"/> 

            </div>
            <p className='text-sm line-clamp-3'>{description}</p>

            
        </div>
        <div className='space-y-2 my-auto justify--end flex flex-col text-sm md:text-base'>
            <button onClick={addAnotherToBasket} className='button'>Add another to Basket</button>
            <button onClick={removefromBasket} className='button'>Remove From Basket</button>
        </div>        
    </div>
  )
}

export default CheckoutProduct