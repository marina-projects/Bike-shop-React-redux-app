import React from "react";
import './cartItemsList.css';
import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { removeItem } from "../../features/cart/cartSlice";

const CartItemsList = ({cart, dispatch}) => {

    const handleRemoveItem = (bikeItem) => {
        dispatch(removeItem(bikeItem));
    } 

    if(cart.length === 0) {
        return (
            <div className="div-column empty-cart-area">
                <p className="empty-cart-text">Cart Empty</p>
            </div>
        )
    } else {
    return (
        <>
            {cart.map((bikeItem) => (
                <div className="cart-item div-row">
                    <CloseIcon onClick={() => handleRemoveItem(bikeItem)} className="close-icon-item" />
                    <div className="item-area div-column">
                        <p>{bikeItem.itemTitle}</p>
                        <p>{bikeItem.itemPrice}</p>
                    </div>
                    <div className="input-area">
                        <TextField
                            id="outlined-number"
                            type="number"
                            size="small"
                            defaultValue="1"
                            width="20px"
                            // value={value}
                        />
                    </div>
                </div>
            ))}
        </>
        
    )
}
}

export default CartItemsList;