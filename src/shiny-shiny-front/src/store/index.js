import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { productSlice } from "./productSlice";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    products: productSlice.reducer,
  },
});
