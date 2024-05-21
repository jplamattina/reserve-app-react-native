import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseURL } from "../databases/realTimeDatabase";

export const shopAPI = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    tagTypes: ['profileImageGet'],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `productCategories.json`
        }),
        getProducts: builder.query({
            query: () => `products.json`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed.sort((a, b) => a.title.localeCompare(b.title))
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
                if (responseTransformed.length) return responseTransformed[0]
                return null
            }
        }),
        postOrder: builder.mutation({
            query: ({...order}) => ({
                url: 'order.json',
                method: 'POST',
                body: order
            })
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']
        }),
        //We make a PUT request for not creating additional key, because de localId is already an unique key.
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet'] //Invalidates will trigger a refetch on profileImageGet
        }),
    })
})

export const {
    useGetCategoriesQuery, 
    useGetProductByIdQuery, 
    useGetProductsByCategoryQuery, 
    useGetProductsQuery, 
    usePostOrderMutation, 
    useGetProfileImageQuery, 
    usePostProfileImageMutation} = shopAPI