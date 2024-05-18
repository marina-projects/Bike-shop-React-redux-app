import {createStore, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '../features/cart/cartSlice';
import inventoryReducer from '../features/inventory/inventorySlice';
import currencyFilterReducer from '../features/currency/currencyFilterSlice';
import openCartReducer from '../features/cart/openCartSlice';

// const reducers = {
//     cart: cartReducer,
//     inventory: inventoryReducer,
//     currencyFilter: currencyFilterReducer,
//     openCart: openCartReducer
// }

// export const store = createStore(combineReducers(reducers));

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        inventory: inventoryReducer,
        currencyFilter: currencyFilterReducer,
        openCart: openCartReducer
    }
})