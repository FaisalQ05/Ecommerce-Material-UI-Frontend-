import React from 'react'
import { useSelector } from 'react-redux';

const useCart = () => {
    const cartItems = useSelector(state => state.cart)
    let TotalPrice = 0;
    let items = 0
    for (let { price, qty, off } of cartItems) {
        // console.log(off)
        if (off > 0) {
            console.log(off)
            let actualPrice;
            actualPrice = Number(price) - (off * price) / 100
            console.log(actualPrice)
            TotalPrice += actualPrice * qty
        }
        else {
            console.log("discount not ")
            TotalPrice += Number(price) * qty
        }
        items += 1
    }
    return [TotalPrice, items]
}

export default useCart