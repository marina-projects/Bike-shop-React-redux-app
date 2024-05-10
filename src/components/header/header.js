import React from "react";
import './header.css';
import logo from '../../images/logo.png';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Menu from "../../features/menu/menu";
import CurrencyFilter from "../../features/currency/currecncyFilter";
import { openCart } from "../../features/cart/openCartSlice";

const Header = ( {inventory, dispatch} ) => {

    const handleOpenCart = () => {
        dispatch(openCart());
    }

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
                        <p className="qauntity">1</p>
                        <p>28990 RSD</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;