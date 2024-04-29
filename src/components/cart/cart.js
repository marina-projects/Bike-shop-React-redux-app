import React from "react";
import './cart.css';
import CloseIcon from '@mui/icons-material/Close';
import CartItemsList from "../cartItemsList/cartItemsList";

const Cart = ( {openCart, openCloseCartHandler} ) => {

    return (
        <div className={openCart ? "cart cart-opened" : "cart cart-closed"}>
            <div className="background-area" onClick={openCloseCartHandler}>

            </div>
            <div className="cart-content-area div-column">
                <div className="icon-area div-row">
                    <CloseIcon onClick={openCloseCartHandler} className="close-icon"/>
                </div>
                <div className="title-area">
                    <h3>Your cart</h3>
                </div>
                <div className="table-area div-column">
                    <CartItemsList />
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