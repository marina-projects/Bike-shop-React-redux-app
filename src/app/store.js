import {createStore, combineReducers} from 'redux';

import { cartReducer } from '../features/cart/cartSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { currencyFilterReducer } from '../features/currency/currencyFilterSlice';

const reducers = {
    cartSlice: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer
}

export const store = createStore(combineReducers(reducers));