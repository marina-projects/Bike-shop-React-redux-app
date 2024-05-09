import { allBikes } from "../../data/allBikes";

export const loadData = (data) => {
    return {
        type: 'inventory/loadData',
        payload: allBikes
    }
}

export const bikesCategory = (category) => {
    return {
        type: 'inventory/bikesCategory',
        payload: category
    } 
}

const initialInventory = {
    fullInventory: [],
    filteredInventory: []
}

export const inventoryReducer = (inventory = initialInventory, action) => {
    switch(action.type) {
        case 'inventory/loadData': {
            return {
                ...inventory,
                fullInventory: action.payload,
                filteredInventory: action.payload
            }
        }
        case 'inventory/bikesCategory': {
            const category = action.payload;
            if (category === 'All bikes') {
                return {
                    ...inventory,
                    filteredInventory: inventory.fullInventory
                };
            } else {
                return {
                    ...inventory,
                    filteredInventory: inventory.fullInventory.filter(item => item.category === action.payload)
                };
            }
        }
        default: {
            return inventory;
        }
    } 
}