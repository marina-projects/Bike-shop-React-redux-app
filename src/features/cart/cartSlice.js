// ACTION CREATORS

// add item
export const addItem = (itemToAdd) => {    
    return {
        type: 'cart/addItem',
        payload: itemToAdd,
    }
}

// remove item
export const removeItem = (itemId) => {    
    return {
        type: 'cart/removeItem',
        payload: itemId,
    }
}

// change quantity
export const changeQuantity = (item, quantity) => {
    return {
        type: 'cart/changeQuantity',
        payload: {item, quantity}
    }
}

// INITIAL STATE

const initialCart = [
    // {
    //     item: {},
    //     quantity: 0
    // }
];

// REDUCER

export const cartReducer = (cart = initialCart, action) => {
    
    switch (action.type) {
        case 'cart/addItem': {

            const itemTitle = action.payload.title;
            const itemPrice = action.payload.price;
            const newItem = {itemTitle, itemPrice}

            return [
                ...cart,
               newItem
            ];
        }
        case 'cart/removeItem': 
            return cart.filter(item => item.id !== action.payload.id);
        default: 
            return cart;
    }
}