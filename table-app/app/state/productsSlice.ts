
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product, Products } from '~/interfaces/Product'
export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: []
    } as Products,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.items = action.payload
        })
            .addCase(fetchAddProduct.fulfilled, (state, action:PayloadAction<Product>) => {
                state.items.push(action.payload)
            })
            .addCase(fetchUpdateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
                let index = state.items.findIndex((item) => {
                    item.name === action.payload.name
                })
                state.items[index] = action.payload
            })
            .addCase(fetchDeleteProduct.fulfilled, (state, action: PayloadAction<Product>) => {
                state.items = state.items.filter((item) => {
                    item.name !== action.payload.name
                })
            })
    },
})

export const fetchDeleteProduct = createAsyncThunk(
    'products/fetchDeleteProducts',
    async (name: string) => {
        return fetch(`/delete-data/${name}`)
        .then((res)=>{
            return name
        })
        .catch((err)=>{
            console.log(err)
        })
    },
)

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts', async() => {

        return fetch("/all-data")
            .then((res) => res.json())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                console.log(err)
            })
    },
)
export const fetchAddProduct = createAsyncThunk(
    'products/fetchAddProduct',
    async (item: Product) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(item)
        }

        return fetch("/add-product", options)
            .then((res) => {
                return item
            })
            .catch((err) => {
                console.log(err)
            })
    },
)
export const fetchUpdateProduct = createAsyncThunk(
    'products/fetchUpdateProduct',
    async (item: Product) => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(item)
        }
               return fetch("/update-product", options)
            .then((res) => {
                return item
            })
            .catch((err) => {
                console.log(err)
            })

    },
)

export default productsSlice.reducer

