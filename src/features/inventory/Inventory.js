import React, {useEffect} from "react";
import ProductCard from "../../components/productCard/productCard";
import './inventory.css';
import { loadData } from "./inventorySlice";

const Catalog = ( {inventory, dispatch, currency, openCloseCartHandler} ) => {

    const onMount = () => {
        dispatch(loadData());
      };
    useEffect(onMount, [dispatch]);  

    return (
        <div className="div-column catalog">
            <div className="catalog-inner div-row">
                {inventory.filteredInventory.map((bikeItem) => (
                    <ProductCard 
                        title={bikeItem.title}
                        price={bikeItem.price}
                        image={bikeItem.image}   
                        currency={currency}
                        bikeItem={bikeItem}
                        dispatch={dispatch}
                        openCloseCartHandler={openCloseCartHandler}
                    />
                    ))
                }
            </div>
        </div>   
    )
}

export default Catalog;