import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const favSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFav: (state, action) => {
            state.push(action.payload)
        },
        removeFromFav: (state, action) => {
            const { id } = action.payload
            const filterProduct = state.filter(item => item.id !== id)
            state = [...filterProduct]
            return state
        }
    }
})

export default favSlice.reducer
export const { addToFav, removeFromFav } = favSlice.actions