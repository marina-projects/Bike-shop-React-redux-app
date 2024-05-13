// Total cart calculation

export const totalSum = (cart) => {
    let summa = 0;
    for (let i = 0; i < cart.length; i++) {
        summa = summa + cart[i].itemPrice;
    }
    return summa;
}

// Different prices according to currency

export const getCurrentPrice = (currency, price) => {
    switch(currency) {
        case 'RSD':
            return price * 1;
        case 'USD':
            return (price / 100).toFixed(2);
        case 'EUR':
            return (price / 110).toFixed(2);
        default:
            return price;
    }
}


// Currensy symbol

export const getCurrencySymbol = (currency) => {
    switch(currency) {
        case 'RSD':
            return '';
        case 'USD': 
            return '$';
        case 'EUR':
            return '€';
        default: 
            return '';
    }
}