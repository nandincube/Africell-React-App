
import { createSlice } from '@reduxjs/toolkit'
import type { Products } from '~/interfaces/Product'


interface initialState {
    displayAlert: boolean,
    alertMessage: string,
    alertStatus: 'success' | 'error' | 'warning' | 'info',
    
}
export const eventSlice = createSlice({
    name: 'event',
    initialState: {
        displayAlert: false,
        alertMessage: "",
        alertStatus: 'success' 
    } as initialState,
    reducers: {
        showAlert: (state, action) => {
            state.alertMessage = action.payload.message;
            state.alertStatus = action.payload.status;
            state.displayAlert = true;
        },
        hideAlert: (state) => {
            state.displayAlert = false;
        }
    },
})
export const { showAlert, hideAlert } = eventSlice.actions

export default eventSlice.reducer

