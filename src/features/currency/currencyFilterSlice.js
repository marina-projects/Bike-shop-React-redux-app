import { createSlice } from "@reduxjs/toolkit";

export const options = {
    name: 'currency',
    initialState: 'RSD',
    reducers: {
        setCurrency: (state, action) => {
            return action.payload;
        }
    }
}

export const currencySlice = createSlice(options);

export const {setCurrency} = currencySlice.actions;
export default currencySlice.reducer;

// const initialCurrencyFilter = 'RSD';

// export const setCurrency = (currency) => {
//     return {
//         type: 'currencyFilter/setCurrency',
//         payload: currency
//     }
// }

// export const currencyFilterReducer = (currencyFilter = initialCurrencyFilter, action) => {
//     switch(action.type) {
//         case 'currencyFilter/setCurrency': 
//             return action.payload;
//         default:
//             return currencyFilter;       
//     }
// }