import React from "react";
import './productCard.css';

const ProductCard = ({title, price, image}) => {
    return (
        <div className="product-card div-column">
            <img src={image} alt=""/>
            <h3>{title}</h3>
            <p>{price} RSD</p>
            <button>Add to cart</button>
        </div>
    )
}

export default ProductCard;