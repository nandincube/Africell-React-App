
import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product, Products } from '~/interfaces/Product'

const baseUrl: string = "http://localhost:3000"

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
            .addCase(fetchAddProduct.fulfilled, (state, action: PayloadAction<Product>) => {
                state.items.push(action.payload)
            })
            .addCase(fetchUpdateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
                let index = state.items.findIndex((item) => {
                    return item.id === action.payload.id
                })
                state.items[index] = action.payload
            })
            .addCase(fetchDeleteProduct.fulfilled, (state, action: PayloadAction<number>) => {
                state.items = state.items.filter((item) => {
                    return item.id !== action.payload
                })
            })
    },
})

export const fetchDeleteProduct = createAsyncThunk(
    'products/fetchDeleteProducts',
    async (id: number, thunkAPI) => {
        let options = {
            method: "DELETE"
        }
        return fetch(baseUrl + `/prodcts/${id}`, options)
            .then((res) => {
                return id
            })
            .catch((err) => {
                return thunkAPI.rejectWithValue("Failed")
            })
    },
)

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts', async (i, thunkAPI) => {

        return fetch(baseUrl + "/products")
            .then((res) => res.json())
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return thunkAPI.rejectWithValue("Failed")
            })
    },
)
export const fetchAddProduct = createAsyncThunk(
    'products/fetchAddProduct',
    async (item: Product, thunkAPI) => {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(item)
        }

        return fetch(baseUrl + "/products", options)
            .then((res) => {
                return item
            })
            .catch((err) => {
                return thunkAPI.rejectWithValue("Failed")
            })
    },
)
export const fetchUpdateProduct = createAsyncThunk(
    'products/fetchUpdateProduct',
    async (item: Product, thunkAPI) => {
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(item)
        }
        return fetch(baseUrl + "/products", options)
            .then((res) => {
                return item
            })
            .catch((err) => {
                return thunkAPI.rejectWithValue("Failed")
            })

    },
)

export default productsSlice.reducer

