import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../features/cart/cartSlice'
import FavReducer from '../features/favorites/favSlice'

export const store = configureStore({
    reducer: {
        cart: CartReducer,
        fav: FavReducer
    }
})