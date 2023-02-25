import React from 'react'
import { useSelector } from 'react-redux';

const useCart = () => {
    const cartItems = useSelector(state => state.cart)
    let TotalPrice = 0;
    let items = 0
    for (let { price, qty } of cartItems) {
        TotalPrice += Number(price) * qty
        items += 1
    }
    return [TotalPrice, items]
}

export default useCart