import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
const initialState = {
    value: [],
};

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWish(state, action) {
            let hotelExists = state.value.find((el) => el.id === action.payload.id);
            if (hotelExists) {
                toast.error("Hotel Already Added")
                return state;
            }
            else {
                state.value.push(action.payload)
            }
        },
 
        removeFromWish(state, action) {
            state.value = state.value.filter(
                (el) => el.id !== action.payload
            );
        },
    },
});

export const { addToWish, removeFromWish } = wishlistSlice.actions;

export default wishlistSlice.reducer;