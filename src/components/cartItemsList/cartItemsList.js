import React from "react";
import './cartItemsList.css';
import { TextField } from "@mui/material";
import allBikes from "../../data/allBikes";

const CartItemsList = () => {
    return (
        <>
            {allBikes.map((bikeItem) => (
                <div className="cart-item div-row">
                    <div className="item-area div-column">
                        <p>{bikeItem.title}</p>
                        <p>{bikeItem.price}</p>
                    </div>
                    <div className="input-area">
                        <TextField
                            id="outlined-number"
                            type="number"
                            size="small"
                            defaultValue="1"
                            width="20px"
                        />
                    </div>
                </div>
            ))}
        </>
        
    )
}

export default CartItemsList;