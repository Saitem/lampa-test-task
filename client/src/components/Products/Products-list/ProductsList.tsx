import React from 'react'
import { item } from '../../../types/types'
import { ProductCard } from '../Product/ProductCard'
import './productList.style.scss'

type ProductsListType = {
    items: item[],
    addToCart: (id: string) => void
}

const ProductsList:React.FC<ProductsListType> = ({items, addToCart}) => {
    return (
        <div className="container">
            {items.map(item => 
                <ProductCard
                    // className='product'
                    _id={item._id}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    img={item.img}
                    addToCart={addToCart}
                />
            )}
         </div>
    )
}

export default ProductsList
