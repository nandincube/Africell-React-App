import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product, Products } from '~/interfaces/Product'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (build) => ({
        getProduct: build.query<Product, string>({
            query: (name) => `products/${name}`,
        }),
        getAllProducts: build.query<Products, void>({
            query: () => `products`,
            transformResponse: (response: Array<Product>)=>{
                return {items: response} as Products
            }
        }),
        deleteProduct: build.mutation<void, string>({
            query: (name) => ({
                url: `products/${name}`,
                method: 'DELETE'
            }),
        }),
        updateProduct: build.mutation<void, Product>({
            query: (product) => ({
                url: `products/${product.name}`,
                method: 'PUT',
                body: product,
            }),
        }),
        addProduct: build.mutation<void, Product>({
            query: (product) => ({
                url: `products`,
                method: 'POST',
                body: product,
            }),
        }),

    })
})

export const { useGetProductQuery, useGetAllProductsQuery, useDeleteProductMutation, useUpdateProductMutation, useAddProductMutation } = productApi