import React from 'react'
import './cartContainer.style.scss'
import { CartList } from './Cart/CartList'
import { Order } from './Order/Order'
import { connect } from 'react-redux'
import { addToCart, removeOneFromItem, removeItem,removeAll } from '../../redux/cart/cart.reducer'
import { AppStateType } from '../../redux/redux-store'
import { addedItem } from '../../types/types'
import { createOrderApi } from '../../api/api'
// import { getProductsThunk } from '../../redux/cart/cart.reducer'
// import { getProduct } from '../../api/api'

type CartContainerType = {
    addedProducts: addedItem[]
    addToCart: (id: string) => void
    removeAll: () => void
    removeOneFromItem: (id: string) => void
    removeItem: (id: string) => void
    total: number
}


const CartContainer = ({addedProducts, addToCart, removeAll, removeOneFromItem, removeItem, total}: CartContainerType) => {
    const createOrder = (name: string, surname: string, address: string, phone: string) => {
        const order = {
            addedProducts: addedProducts,
            total,
            user: {
                name,
                surname,
                address,
                phone
            }
        }
        createOrderApi(order)
        removeAll()
    }

    return (
        <div className='containerCart'>
            <CartList 
                total={total}
                addedProducts={addedProducts} 
                addMore={addToCart}
                removeOne={removeOneFromItem}
                removeItem={removeItem}
            />
            {
                addedProducts.length > 0 ? <Order createOrder={createOrder} />  : ''
            }
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => ({
    total: state.cartReducer.total,
    addedProducts: state.cartReducer.addedItems
})

const mapDispatchToProps= (dispatch: any)=>({
    addToCart: (id: string) => dispatch(addToCart(id)),
    removeOneFromItem: (id: string) => dispatch(removeOneFromItem(id)),
    removeItem: (id: string) => dispatch(removeItem(id)),
    removeAll: () => dispatch(removeAll())
})
  

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)