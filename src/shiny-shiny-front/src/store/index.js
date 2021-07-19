import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { productSlice } from "./productSlice";
import { currentUserSlice } from "./currentUserSlice";

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    products: productSlice.reducer,
    currentUser: currentUserSlice.reducer,
  },
});
