import React, { useState } from "react";
import { currenciesData } from "../../data/allBikes";
import { setCurrency } from "./currencyFilterSlice";

const CurrencyFilter = ( {dispatch, currency} ) => {

    const [selected, setSelected] = useState('');

    const currencyHandler = (currencyItem) => {
        dispatch(setCurrency(currencyItem));
        setSelected(currencyItem)
    }


    return (
        <div className="currency-area div-row">
            <ul className="currency-switcher div-row">
                {
                    currenciesData.map((currencyItem) => (
                        <li onClick={() => currencyHandler(currencyItem)} className={currencyItem === selected ? 'selected' : ''} >{currencyItem}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CurrencyFilter;