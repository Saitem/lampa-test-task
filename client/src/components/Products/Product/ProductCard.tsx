import React from 'react'
import { item } from '../../../types/types'
import './product.scss'
// import image from '../../../assets/coffe.jpg'

interface ProductCardTypes extends item {
    addToCart: (id: string) => void
}

export const ProductCard = ({_id, img, title, desc, price, addToCart}: ProductCardTypes) => {
    return (

        <div className="product" key={_id}>
            <div className="card-image">
                <img className='image' src={img} alt={title}/>
            </div>
        
            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{desc}</p>
                <p><b>Price: {price}$</b></p>
            </div>
            
            <div className="card-btn">
                    <button 
                        className='btn' 
                        onClick={() => addToCart(_id)}
                    >
                        Add to cart
                    </button>
            </div>
        </div>
    )
}

