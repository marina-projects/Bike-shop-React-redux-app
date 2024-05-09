import React, {useState} from 'react';
import '../App.css';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Catalog from '../features/inventory/inventory';
import Cart from '../components/cart/cart';

function App (props) {
  
  const {state, dispatch} = props;
  const [openCart, setOpenCart] = useState(false);

  const openCloseCartHandler = () => {
    setOpenCart(!openCart);
  }

  return (
    <div className='div-column'>
      <Header
        openCloseCartHandler={openCloseCartHandler}
        dispatch={dispatch}
      />
      <Catalog 
        inventory={state.inventory}
        dispatch={dispatch}
      />
      <Footer />
      <Cart openCart={openCart} openCloseCartHandler={openCloseCartHandler}/>
    </div>
      );
}

export default App;
