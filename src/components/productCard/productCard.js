import React from "react";
import './productCard.css';

const ProductCard = ({title, price, image, currency}) => {

    const currentPrice = getCurrentPrice(currency, price);
    const currentSymbol = getCurrencySymbol(currency);

    return (
        <div className="product-card div-column">
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{currentSymbol}{currentPrice} {currency}</p>
            <button>Add to cart</button>
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