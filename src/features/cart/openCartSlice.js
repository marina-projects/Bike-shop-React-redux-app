import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'openCart',
    initialState: false,
    reducers: {
        openCart: (state, action) => {
            return state = true;
        },
        closeCart: (state, action) => {
            return state = false;
        }
    }
}

export const openCartSlice = createSlice(options);

export const {openCart, closeCart} = openCartSlice.actions;
export default openCartSlice.reducer;





// const initialOpenlCart = false;

// export const openCart = () => {
//     return {
//         type: 'openCart/open',
//     }
// }

// export const closeCart = () => {
//     return {
//         type: 'openCart/close'
//     }
// }

// export const openCartReducer = (openCart = initialOpenlCart, action) => {
//     switch(action.type) {
//         case 'openCart/open': 
//             return openCart = true;
//         case 'openCart/close':
//             return openCart = false;
//         default:
//             return openCart;
//     }
// }