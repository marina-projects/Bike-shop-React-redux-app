import React from "react";
import './header.css';
import logo from '../../images/logo.png';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Menu from "../../features/menu/menu";
import CurrencyFilter from "../../features/currency/currecncyFilter";
import { openCart } from "../../features/cart/openCartSlice";
import { totalSum } from "../../utilities/utilities";
import { totalItems } from "../../utilities/utilities";
import { getCurrentPrice } from "../../utilities/utilities";
import { getCurrencySymbol } from "../../utilities/utilities";

const Header = ( {inventory, dispatch, cart, currency} ) => {

    const handleOpenCart = () => {
        dispatch(openCart());
    }

    const currentSum = totalSum(cart);
    const currentTotal = getCurrentPrice(currency, currentSum);
    const currentSymbol = getCurrencySymbol(currency);
    const currentTotalItems = totalItems(cart);

    return (
        <div className="div-column">
            <div className="top-menu div-row">
                <div className="features-area div-row">
                    <p>30-day return policy</p>
                    <p>1000 active customers</p>
                    <p>Free delivery</p>
                </div>
                <CurrencyFilter
                    inventory={inventory}
                    dispatch={dispatch}
                />
            </div>
            <div className="main-menu div-row">
                <div className="logo-area">
                    <img src={logo} alt='logo' />
                </div>
                <Menu 
                    inventory={inventory}
                    dispatch={dispatch}
                />
                <div className="cart-area">
                    <div className="cart-icon" onClick={() => handleOpenCart()}>
                        <ShoppingBagOutlinedIcon sx={{ fontSize: 36 }}/>
                        <p className="qauntity">{currentTotalItems}</p>
                        <p>{currentSymbol}{currentTotal} {currency}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;