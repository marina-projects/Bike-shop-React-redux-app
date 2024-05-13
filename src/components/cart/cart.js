import React from "react";
import './cart.css';
import CloseIcon from '@mui/icons-material/Close';
import CartItemsList from "../cartItemsList/cartItemsList";
import { closeCart } from "../../features/cart/openCartSlice";
import { totalSum } from "../../utilities/utilities";
import { getCurrentPrice } from "../../utilities/utilities";
import { getCurrencySymbol } from "../../utilities/utilities";

const Cart = ( {openCart, cart, dispatch, currency} ) => {

    const handleCloseCart = () => {
        dispatch(closeCart());
    }

    const getTotal = totalSum(cart);
    const currentTotal = getCurrentPrice(currency, getTotal);
    const currentSymbol = getCurrencySymbol(currency);

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
                    <h4>{currentSymbol} {currentTotal} {currency}</h4>
                </div>

            </div>
        </div>
    )
}

export default Cart;