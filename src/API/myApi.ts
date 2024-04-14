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
    getCountries: builder.query({
      queryFn: async () => {
        try {
          const response = await fetch(
            url + "v1/movie/possible-values-by-field?field=countries.name",
            {
              method: "GET",
              headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
            }
          );
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
    }),
    getSearchMovie: builder.query({
      queryFn: async (arg) => {
        try {
          const response = await fetch(
            url + "v1.4/movie/search?page=1&limit=100&query=" + arg,
            {
              method: "GET",
              headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
            }
          );
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
    }),
    getMovieInfo: builder.query({
      queryFn: async (id) => {
        try {
          const response = await fetch(
            url + "v1.4/movie/" + id,
            {
              method: "GET",
              headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
            }
          );
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
    }),
    getComments: builder.query({
      queryFn: async (arg) => {
        const {page, id} = arg
        try {
          const response = await fetch(
            url + `v1.4/review?page=${page}&limit=3&movieId=${id}`,
            {
              method: "GET",
              headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
            }
          );
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
    }),
    getPosters: builder.query({
      queryFn: async (id) => {
        try {
          const response = await fetch(
            url + `v1.4/image?page=1&type=still&limit=10&movieId=${id}`,
            {
              method: "GET",
              headers: { "X-API-KEY": `${process.env.REACT_APP_API_KEY}` },
            }
          );
          return { data: await response.json() };
        } catch (e: any) {
          return { error: e.message };
        }
      },
    }),
  }),
  
});

export const {
  useGetProductsQuery,
  useGetCountriesQuery,
  useGetSearchMovieQuery,
  useGetMovieInfoQuery,
  useGetCommentsQuery,
  useGetPostersQuery
} = api;
