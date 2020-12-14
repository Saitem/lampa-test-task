import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ProductsList from './Products-list/ProductsList'
import { addToCart } from '../../redux/cart/cart.reducer'
import { item } from '../../types/types'
import './porductContainer.style.scss'
import { AppStateType } from '../../redux/redux-store'
import { getProductsThunk } from '../../redux/cart/cart.reducer'

type ProductContainer = {
  cartItems: item[]
  addToCart: (id: string ) => void,
  getProductsThunk: () => void
}

const ProductContainer = ({cartItems, getProductsThunk, addToCart}: ProductContainer) => {
  const [produsts, setProducts] = useState(cartItems)

  useEffect(() => {
      setProducts(cartItems)
  }, [cartItems])

  useEffect(() => {
      getProductsThunk()
    }, [getProductsThunk])
  
  return (
    <div className='generalProdComp'>
      <ProductsList items={produsts} addToCart={addToCart} />
    </div>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  cartItems: state.cartReducer.items
})

const mapDispatchToProps= (dispatch: any) => ({
  getProductsThunk() {
    dispatch(getProductsThunk())
  },
  addToCart: (id: string) => {dispatch(addToCart(id))}
})

export default connect (mapStateToProps, mapDispatchToProps)(ProductContainer)