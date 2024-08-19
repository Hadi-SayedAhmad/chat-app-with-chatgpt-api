import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { API } from "./api";

export const store = configureStore({
    reducer: {
        [API.reducerPath]: API.reducer,
    },
    middleware: (getDefault) => getDefault().concat(API.middleware)
})
setupListeners(store.dispatch);