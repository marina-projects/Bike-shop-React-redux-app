import React from "react";
import './cart.css';
import CloseIcon from '@mui/icons-material/Close';
import CartItemsList from "../cartItemsList/cartItemsList";
import { closeCart } from "../../features/cart/openCartSlice";

const Cart = ( {openCart, cart, dispatch} ) => {

    const handleCloseCart = () => {
        dispatch(closeCart());
    }

    return (
        <div className={openCart ? "cart cart-opened" : "cart cart-closed"}>
            <div className="background-area" onClick={() => handleCloseCart()}>

            </div>
            <div className="cart-content-area div-column">
                <div className="icon-area div-row">
                    <CloseIcon onClick={() => handleCloseCart()} className="close-icon"/>
                </div>
                <div className="title-area">
                    <h3>Your cart</h3>
                </div>
                <div className="table-area div-column">
                    <CartItemsList cart={cart} dispatch={dispatch}/>
                </div>
                <div className="total-area">
                    <h4>Total:</h4>
                    <h4>28990 RSD</h4>
                </div>

            </div>
        </div>
    )
}

export default Cart;