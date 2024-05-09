import React, {useState} from "react";
import { bikeCategories } from "../../data/allBikes";
import { bikesCategory } from "../inventory/inventorySlice";

const Menu = ( {dispatch} ) => {

    const [selected, setSelected] = useState('');

    const handleCategory = (category) => {
        dispatch(bikesCategory(category));
        setSelected(category)
    }

    return (
        <div className="menu-area">
            {
                bikeCategories.map((category) => (
                    <nav><li><button onClick={() => handleCategory(category)} className={category === selected ? 'selected' : ''}>
                        {category}
                    </button></li></nav>
                ))
            }
        </div>
    )
}

export default Menu;
