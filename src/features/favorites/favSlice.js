import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFav: (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
        },
        removeFromFav: (state, action) => {
            const { id } = action.payload
            console.log(action.payload)
            const filterProduct = state.filter(item => item.id !== id)
            console.log(filterProduct)
            state = [...filterProduct]
            return state
        }
    }
})

export default favSlice.reducer
export const { addToFav, removeFromFav } = favSlice.actions