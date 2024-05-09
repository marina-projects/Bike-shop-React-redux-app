import React from "react";
import { currenciesData } from "../../data/allBikes";
import { setCurrency } from "./currencyFilterSlice";

const CurrencyFilter = ( {dispatch, currency} ) => {

    const currencyHandler = (currencyItem) => {
        dispatch(setCurrency(currencyItem));
    }


    return (
        <div className="currency-area div-row">
            <ul className="currency-switcher div-row">
                {
                    currenciesData.map((currencyItem) => (
                        <li onClick={() => currencyHandler(currencyItem)}>{currencyItem}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CurrencyFilter;