import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { getUser } from './userApi';
import { getCart } from './cartApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        [getUser.reducerPath]: getUser.reducer,
        [getCart.reducerPath]:getCart.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getUser.middleware, getCart.middleware)
})

setupListeners(store.dispatch)
export default store