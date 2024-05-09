// ACTION CREATORS

// add item
export const addItem = (itemToAdd) => {    
    return {
        type: 'cart/addItem',
        payload: itemToAdd,
    }
}

// remove item
export const removeItem = (itemToRemove) => {    
    return {
        type: 'cart/removeItem',
        payload: itemToRemove,
    }
}

// update quantity
export const changeItemQuantity = (name, newQuantity) => {
    return {
      type: 'cart/changeItemQuantity',
      payload: {name, newQuantity}
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
            return cart.filter(item => item.id !== action.payload.id)
        ;
        case 'cart/changeItemQuantity': {
            const { name, newQuantity } = action.payload;
            const itemToUpdate = cart[name];
            const updatedItem = {
              ...itemToUpdate,
              quantity: newQuantity
            }
            return {
              ...cart,
              [name]: updatedItem
            };
          }
        default: 
            return cart;
    }
}