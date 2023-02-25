import { createSlice } from "@reduxjs/toolkit";


const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload
            console.log(action.payload)
            const filterProduct = state.filter(item => item.id !== id)
            state = [...filterProduct]
            return state
        },
        increaseItemQuantity: (state, action) => {
            console.log(action.payload)
            const { id } = action.payload
            state.filter(item => {
                if (item.id === id) {
                    item.qty = item.qty + 1
                }
                return true
            })
        },
        decreaseItemQuantity: (state, action) => {
            console.log(action.payload)
            const { id } = action.payload
            state.filter(item => {
                if (item.id === id) {
                    if(item.qty === 1) return
                    item.qty = item.qty - 1
                }
                return true
            })
        },
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, decreaseItemQuantity, increaseItemQuantity } = cartSlice.actions