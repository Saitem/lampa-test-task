import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header  from './components/layout/Header'
import { AppStateType } from './redux/redux-store';
import ProductContainer from './components/Products/ProductContainer';
import CartContainer from './components/CartCompoenent/CartContainer'

import { 
  Route, 
  BrowserRouter as Router, 
} from 'react-router-dom'

type AppType = {
  cart: {id: String, price: Number}
}

const Main = () => {
  return (
    <main>
      <Route exact path='/' component={ProductContainer} /> 
      <Route exact path='/cart' component={CartContainer} /> 
      {/* <Route exact path='/' component={ProductContainer} />  */}
    </main>
  )
}

function App({cart}:AppType) {
  console.log(cart)
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Main/>
      </div>
    </Router>
  );
}

const mapStateToProps = (state: AppStateType) => ({
  cart: state.cartReducer
})

// const mapDispatchToProps = (dispatch: any) => ({
//   changeCartPriceFunc(newPrice: number) {
//     dispatch(changeCartPrice(newPrice))
//   }
// })

export default connect(mapStateToProps/*, mapDispatchToProps*/)(App);
