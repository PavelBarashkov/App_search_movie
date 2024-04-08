import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
const url = "https://api.kinopoisk.dev/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),




  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: async (arg) => {
        try {
          const response = await fetch(url + "v1.4/movie" + arg, {
            method: "GET",
            headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
          });
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
      extraOptions: { maxRetries: 1 },
    }),
  }),
});

export const { useGetProductsQuery } = api;

