import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getUser = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseurl: "http://localhost:5000/user" }),
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => ({ url: "/profile", credentials:"include" }),
    }),
  }),
});

export const { useGetUserProfileQuery } = getUser;
