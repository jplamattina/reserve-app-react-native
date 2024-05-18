import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../databases/realTimeDatabase";

export const shopAPI = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `productCategories.json`
        }),
        getProducts: builder.query({
            query: () => `products.json`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        }),
        getProductsByCategory: builder.query({
            query: (category) =>`products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        }),
        getProductById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed.length ? responseTransformed[0] : null
            }
        }),
    })
})

export const {useGetCategoriesQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery, useGetProductsQuery} = shopAPI