import React, {useState} from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Catalog from './components/catalog/catalog';
import Cart from './components/cart/cart';

function App() {

  const [openCart, setOpenCart] = useState(false);

  const openCloseCartHandler = () => {
    setOpenCart(!openCart);
  }

  return (
    <div className='div-column'>
      <Header openCloseCartHandler={openCloseCartHandler}/>
      <Catalog />
      <Footer />
      <Cart openCart={openCart} openCloseCartHandler={openCloseCartHandler}/>
    </div>
      );
}

export default App;
