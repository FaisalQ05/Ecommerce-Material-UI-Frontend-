import { useSelector } from 'react-redux';

const useCart = () => {
    const cartItems = useSelector(state => state.cart)
    let TotalPrice = 0;
    let items = 0
    for (let { price, qty, off } of cartItems) {
        if (off > 0) {
            let actualPrice;
            actualPrice = Number(price) - (off * price) / 100
            TotalPrice += actualPrice * qty
        }
        else {
            TotalPrice += Number(price) * qty
        }
        items += 1
    }
    return [TotalPrice, items]
}

export default useCart