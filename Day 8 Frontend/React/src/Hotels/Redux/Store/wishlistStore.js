import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "../Slicer/WishlistSlicer";

export const wishlistStore = configureStore({
  reducer: {
    wishlist: wishlistSlice.reducer,
  },
});