import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from '~/interfaces/Product'


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (build) => ({
        getProductByName: build.query<Product, string>({
            query: (name) => `product/${name}`,
        }),

    })

})

export const { useGetProductByNameQuery } = productApi