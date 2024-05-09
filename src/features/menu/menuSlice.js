export const menuItem = (newMenuItem) => {
    return {
        type: 'menu/setMenuItem',
        payload: newMenuItem
    }
}

const initialMenuItem = 'All bikes';

export const setMenuItemReducer = (menuItem = initialMenuItem, action) => {
    switch (action.type) {
        case 'menu/setMenuItem': {
            return action.payload;
        }
        default: 
            return menuItem;
    }
}