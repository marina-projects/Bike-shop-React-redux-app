import React from "react";
import { bikeCategories } from "../../data/allBikes";
import { bikesCategory } from "../inventory/inventorySlice";

const Menu = ( {dispatch} ) => {

    const handleCategory = (category) => {
        dispatch(bikesCategory(category))
    }

    return (
        <div className="menu-area">
            {
                bikeCategories.map((category) => (
                    <nav><li><button onClick={() => handleCategory(category)}>
                        {category}
                    </button></li></nav>
                ))
            }
        </div>
    )
}

export default Menu;
