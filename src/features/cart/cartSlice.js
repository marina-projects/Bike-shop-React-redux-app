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

// INITIAL STATE

const initialCart = [];

// REDUCER

export const cartReducer = (cart = initialCart, action) => {
    
    switch (action.type) {
        case 'cart/addItem':     
            return [
                ...cart,
                action.payload
            ];
        case 'cart/removeItem': 
            return cart.filter(item => item.id !== action.payload.id);
        default: 
            return cart;
    }
}