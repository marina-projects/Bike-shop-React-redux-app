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
export const changeQuantity = (item, input) => {
    return {
        type: 'cart/changeQuantity',
        payload: {item, input}
    }
}

// INITIAL STATE

const initialCart = [];

// REDUCER

export const cartReducer = (cart = initialCart, action) => {
    
    switch (action.type) {
        case 'cart/addItem': {
            const itemTitle = action.payload.title
            const itemPrice = action.payload.price
            const itemId = action.payload.id
            const existingItem = cart.find(item => item.item.itemId === itemId);
            console.log(`Item: ${existingItem}`);

            if(existingItem) {
                const newQuantity = existingItem.quantity + 1;
                console.log(`Quantity: ${newQuantity}`)
                const filteredCart = cart.filter(item => item.item.itemId !== existingItem.item.itemId);
                console.log(`Filtered cart: ${filteredCart}`);

                const newItem = {
                    ...existingItem,
                    quantity: newQuantity
                }

                return [
                    ...filteredCart,
                    newItem
                ]
            } else {
                const newItem = {
                    item: {itemTitle, itemPrice, itemId},
                    quantity: 1
                }
    
                return [
                    ...cart,
                    newItem
                ];
            }
            
        }
        case 'cart/changeQuantity': {
            const itemId = action.payload.item.item.itemId;
            const newQuantity = action.payload.input;
            
            const updatedCart = cart.map(item => {
                if (item.item.itemId === itemId) {
                    return {
                        ...item,
                        quantity: newQuantity
                    };
                }
                return item;
            });
        
            return updatedCart;
        }


        case 'cart/removeItem': 
            return cart.filter(item => item.item.itemId !== action.payload.itemId);
        default: 
            return cart;
    }
}