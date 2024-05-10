const initialOpenlCart = false;

export const openCart = () => {
    return {
        type: 'openCart/open',
    }
}

export const closeCart = () => {
    return {
        type: 'openCart/close'
    }
}

export const openCartReducer = (openCart = initialOpenlCart, action) => {
    switch(action.type) {
        case 'openCart/open': 
            return openCart = true;
        case 'openCart/close':
            return openCart = false;
        default:
            return openCart;
    }
}