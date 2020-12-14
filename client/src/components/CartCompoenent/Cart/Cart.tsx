import React from 'react'
import { addedItem } from '../../../types/types'
import './cart.style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

interface CartType extends addedItem {
    addMore: (id: string) => void
    removeOne: (id: string) => void
    removeItem: (id: string) => void
} 

export const Cart = ({price, img, title, desc, qty, _id, addMore, removeOne, removeItem}: CartType) => {
    return (
        <div className="cart" key={_id}>
            <div className="cart-image">
                <img className='image' src={img} alt={title}/>
            </div>
        
            <div className="cart-content">
                <span className="cart-title">{title}</span>
                <p>{desc}</p>
                <p><b>Price: {price}$</b></p>
            </div>
            
            <div className="counter">
                 <div className="btn-cout">
                  <FontAwesomeIcon 
                        onClick={() => addMore(_id)} 
                        icon={faPlusSquare} 
                        className='fa-4x afont'
                    />
                </div>
                <h2 className='qty'>{qty}</h2>
                <div className="btn-cout">
                    <FontAwesomeIcon 
                        onClick={() => removeOne(_id)} 
                        icon={faMinusSquare} 
                        className='fa-4x afont'
                    />
            
                </div>
            </div>
            <div 
                className="close"
                onClick={() => removeItem(_id)}
            >x</div>
        </div>
                    
                
    )
}
