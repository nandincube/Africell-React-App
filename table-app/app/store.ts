
import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './state/productsSlice'
import eventReducer from './state/eventSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    event: eventReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch