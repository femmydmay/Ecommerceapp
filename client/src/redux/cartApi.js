import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getCart = createApi({
  reducerPath: "cart",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/cart" }),
  endpoints: (builder) => ({
    increment: builder.mutation({
      query: (payload) => ({
        url: "/add-cart",
        credentials: "include",
        body: payload,
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8", 
        },
      }),
    }),
    decrement: builder.mutation({
      query: (payload) => ({
        url: "/remove",
        body: payload,
        credentials: "include",
        method: "POST",
      }),
    }),
    getCart: builder.query({
      query: (title) => ({ url: `/item/${title}`, credentials: "include" }),
    }),
  }),
});

export const {useDecrementMutation, useIncrementMutation, useGetCartQuery } = getCart;
