import {createStore, combineReducers} from 'redux';

import { cartReducer } from '../features/cart/cartSlice';
import { inventoryReducer } from '../features/inventory/inventorySlice';
import { setMenuItemReducer } from '../features/menu/menuSlice';

const reducers = {
    cartSlice: cartReducer,
    inventory: inventoryReducer,
    menuItem: setMenuItemReducer
}

export const store = createStore(combineReducers(reducers));