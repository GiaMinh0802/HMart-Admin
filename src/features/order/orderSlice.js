import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderService from './orderService'

const initialState = {
    orders: [],
    products: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const getOrders = createAsyncThunk('order/get-orders', async (thunkAPI) => {
    try {
        return await orderService.getOrders()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getOrder = createAsyncThunk("order/get-order", async (id, thunkAPI) => {
    try {
        return await orderService.getOrder(id)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const orderSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrders.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.orders = action.payload
            })
            .addCase(getOrders.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.error
            })
            .addCase(getOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.isError = false
                state.isLoading = false
                state.isSuccess = true
                state.orders = action.payload
                state.products = action.payload.orderItems
                state.message = "success"
            })
            .addCase(getOrder.rejected, (state, action) => {
                state.isError = true
                state.isSuccess = false
                state.message = action.error
                state.isLoading = false
            })
    }
})

export default orderSlice.reducer