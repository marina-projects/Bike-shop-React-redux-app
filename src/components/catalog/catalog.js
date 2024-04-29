import React from "react";
import ProductCard from "../productCard/productCard";
import allBikes from "../../data/allBikes";
import './catalog.css';

const Catalog = () => {
    return (
        <div className="div-column catalog">
            <div className="catalog-inner div-row">
                {allBikes.map((bikeItem) => (
                    <ProductCard 
                        title={bikeItem.title}
                        price={bikeItem.price}
                        image={bikeItem.image}         
                    />
                    ))
                }
            </div>
        </div>   
    )
}

export default Catalog;