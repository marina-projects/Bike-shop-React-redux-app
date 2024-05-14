import React from "react";
import './cartItemsList.css';
import { TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { removeItem } from "../../features/cart/cartSlice";
import { changeQuantity } from "../../features/cart/cartSlice";

const CartItemsList = ({cart, dispatch}) => {

    const handleRemoveItem = (bikeItem) => {
        dispatch(removeItem(bikeItem));
    } 

    const onInputChangeHandler = (item, input) => {
        console.log(`Input: ${input}`)
        // Dispatch an action to change the quantity of the given name and quantity.
        dispatch(changeQuantity(item, input));
    
      };

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
                    <CloseIcon onClick={() => handleRemoveItem(bikeItem.item)} className="close-icon-item" />
                    <div className="item-area div-column">
                        <p>{bikeItem.item.itemTitle}</p>
                    </div>
                    <div className="input-area">
                        <TextField
                            id="outlined-number"
                            type="number"
                            size="small"
                            width="20px"
                            value={bikeItem.quantity}
                            onChange={(e) => {
                                const inputValue = parseInt(e.target.value);
                                if (inputValue >= 0) {
                                    onInputChangeHandler(bikeItem, inputValue);
                                }
                            }}
                            inputProps={{ min: 1 }} 
                        />
                    </div>
                </div>
            ))}
        </>
        
    )
}
}

export default CartItemsList;