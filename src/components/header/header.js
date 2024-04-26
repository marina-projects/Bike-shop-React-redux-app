import React from "react";
import './header.css';
import logo from '../../images/logo.png';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const Header = () => {
    return (
        <div className="div-column">
            <div className="top-menu div-row">
                <div className="features-area div-row">
                    <p>30-day return policy</p>
                    <p>1000 active customers</p>
                    <p>Free delivery</p>
                </div>
                <div className="currency-area div-row">
                    <ul className="currency-switcher div-row">
                        <li>RSD</li>
                        <li>EUR</li>
                        <li>USD</li>
                    </ul>
                </div>
            </div>
            <div className="main-menu div-row">
                <div className="logo-area">
                    <img src={logo} alt='logo' />
                </div>
                <div className="menu-area">
                    <nav>
                        <li><a href="#">All bikes</a></li>
                        <li><a href='#'>City bikes</a></li>
                        <li><a href="#">Road bikes</a></li>
                    </nav>
                </div>
                <div className="cart-area">
                    <div className="cart">
                        <ShoppingBagOutlinedIcon sx={{ fontSize: 28 }}/>
                        <p>15000din</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;