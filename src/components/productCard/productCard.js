import React from "react";
import './productCard.css';
import { addItem } from "../../features/cart/cartSlice";
import { openCart } from "../../features/cart/openCartSlice";
import { getCurrentPrice } from "../../utilities/utilities";
import { getCurrencySymbol } from "../../utilities/utilities";


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
