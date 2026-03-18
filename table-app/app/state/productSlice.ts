import { createSlice } from '@reduxjs/toolkit'
import type { Products } from '~/interfaces/Product'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: []
    } as Products,
    reducers: {
        init: (state, action) =>{
            state.items = action.payload
        },
        addProduct: (state, action) => {
            state.items.push(action.payload)
        },
        updateProduct: (state, action)=>{
            let index = state.items.findIndex((item)=>{
                    item.name === action.payload.name
            })
            state.items[index] = action.payload

        },
        deleteProduct:(state, action) =>{
            state.items = state.items.filter((item)=>{
                item.name !== action.payload
        })
        }
    }

})


export const { init, addProduct,  updateProduct,  deleteProduct } = productSlice.actions

export default productSlice.reducer

