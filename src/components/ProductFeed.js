import Product from './Product'

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32'>
      {products.slice(0,4).map(({id, title, description, price, image, category}) => (
        <Product 
        key={id}
        id={id}
        title={title}
        description={description}
        category={category}
        image={image}
        price={price}
        />
      ))}
      <img className='md:col-span-full' src="images/ad banner.jpg" alt="" />
        <div className='md:col-span-2'>

      {products.slice(4,5).map(({id, title, description, price, image, category}) => (
        <Product 
        key={id}
        id={id}
        title={title}
        description={description}
        category={category}
        image={image}
        price={price}
        />
      ))}
        </div>
        {products.slice(5, products.length).map(({id, title, description, price, image, category}) => (
        <Product 
        key={id}
        id={id}
        title={title}
        description={description}
        category={category}
        image={image}
        price={price}
        />
      ))}


    </div>
  )
}

export default ProductFeed