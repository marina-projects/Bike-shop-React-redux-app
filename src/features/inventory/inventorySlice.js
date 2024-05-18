import { allBikes } from "../../data/allBikes";
import { createSlice  } from "@reduxjs/toolkit";

const options = {
    name: 'inventory',
    initialState: {
        fullInventory: [],
        filteredInventory: []
    },
    reducers: {
        loadData: (state, action) => {
            return {
                ...state,
                fullInventory: allBikes,
                filteredInventory: allBikes
            }
        },
        bikesCategory: (state, action) => {
            const category = action.payload;
            if (category === 'All bikes') {
                return {
                    ...state,
                    filteredInventory: state.fullInventory
                };
            } else {
                return {
                    ...state,
                    filteredInventory: state.fullInventory.filter(item => item.category === action.payload)
                };
            }
        }
    }

}

export const inventorySlice = createSlice(options);

export const { loadData, bikesCategory } = inventorySlice.actions;
export default inventorySlice.reducer;



// export const loadData = (data) => {
//     return {
//         type: 'inventory/loadData',
//         payload: allBikes
//     }
// }

// export const bikesCategory = (category) => {
//     return {
//         type: 'inventory/bikesCategory',
//         payload: category
//     } 
// }

// const initialInventory = {
//     fullInventory: [],
//     filteredInventory: []
// }

// export const inventoryReducer = (inventory = initialInventory, action) => {
//     switch(action.type) {
//         case 'inventory/loadData': {
//             return {
//                 ...inventory,
//                 fullInventory: action.payload,
//                 filteredInventory: action.payload
//             }
//         }
//         case 'inventory/bikesCategory': {
//             const category = action.payload;
//             if (category === 'All bikes') {
//                 return {
//                     ...inventory,
//                     filteredInventory: inventory.fullInventory
//                 };
//             } else {
//                 return {
//                     ...inventory,
//                     filteredInventory: inventory.fullInventory.filter(item => item.category === action.payload)
//                 };
//             }
//         }
//         default: {
//             return inventory;
//         }
//     } 
// }