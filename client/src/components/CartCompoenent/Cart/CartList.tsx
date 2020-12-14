import React from 'react'
import { addedItem } from '../../../types/types'
import { Cart } from './Cart'

type CartListType = {
    total: number
    addedProducts: addedItem[]
    addMore: (id: string) => void
    removeOne: (id: string) => void
    removeItem: (id: string) => void
}

export const CartList = ({total, addedProducts, addMore, removeOne, removeItem}: CartListType) => {
    return (
        <div className='card-list'>
            {addedProducts.map((product) => 
                <Cart
                    _id={product._id}
                    title={product.title}
                    desc={product.desc}
                    price={product.price}
                    img={product.img}
                    qty={product.qty}
                    addMore={addMore}
                    removeOne={removeOne}
                    removeItem={removeItem}
                />
            )}
            <span>total: {total}</span>
        </div>
    )
}
