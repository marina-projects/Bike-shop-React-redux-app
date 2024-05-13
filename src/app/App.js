import React from 'react';
import '../App.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Catalog from '../features/inventory/inventory';
import Cart from '../components/cart/cart';

function App (props) {
  
  const {state, dispatch} = props;

  return (
    <div className='div-column'>
      <Header
        openCart={state.openCart}
        dispatch={dispatch}
        cart={state.cart}
        currency={state.currencyFilter}
      />
      <Catalog 
        inventory={state.inventory}
        dispatch={dispatch}
        currency={state.currencyFilter}
        openCart={state.openCart}
      />
      <Footer />
      <Cart
        openCart={state.openCart}
        cart={state.cart}
        dispatch={dispatch}
        currency={state.currencyFilter}
      />
    </div>
      );
}

export default App;
