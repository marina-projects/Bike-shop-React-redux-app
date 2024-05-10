import React from "react";
import './cartItemsList.css';
import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { removeItem } from "../../features/cart/cartSlice";

const CartItemsList = ({cart, dispatch}) => {

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    } 

    if(cart.length === 0) {
        return (
            <>
                <p>Cart Empty</p>
            </>
        )
    } else {
    return (
        <>
            {cart.map((bikeItem) => (
                <div className="cart-item div-row">
                    <CloseIcon onClick={() => handleRemoveItem(bikeItem)} />
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
}

export default CartItemsList;