import React from "react";
import './productCard.css';
import { addItem } from "../../features/cart/cartSlice";
import { openCart } from "../../features/cart/openCartSlice";


const ProductCard = ({title, price, image, currency, bikeItem, dispatch}) => {

    const currentPrice = getCurrentPrice(currency, price);
    const currentSymbol = getCurrencySymbol(currency);

    const handleAddItem = (bikeItem) => {
        dispatch(addItem(bikeItem));
        dispatch(openCart());
    }

    return (
        <div className="product-card div-column">
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{currentSymbol}{currentPrice} {currency}</p>
            <button onClick={() => handleAddItem(bikeItem)}>Add to cart</button>
        </div>
    )
}

export default ProductCard;

// HELPERS
const getCurrentPrice = (currency, price) => {
    switch(currency) {
        case 'RSD':
            return price * 1;
        case 'USD':
            return (price / 100).toFixed(2);
        case 'EUR':
            return (price / 110).toFixed(2);
        default:
            return price;
    }
}

const getCurrencySymbol = (currency) => {
    switch(currency) {
        case 'RSD':
            return '';
        case 'USD': 
            return '$';
        case 'EUR':
            return '€';
        default: 
            return '';
    }
}