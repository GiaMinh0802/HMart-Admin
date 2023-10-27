import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customer/customerSlice'
import productReducer from '../features/product/productSlice'
import brandReducer from '../features/brand/brandSlice'
import categoryReducer from '../features/category/categorySlice'
import colorReducer from '../features/color/colorSlice'
import enquiryReducer from '../features/enquiry/enquirySlice'
import orderReducer from '../features/order/orderSlice'
import uploadReducer from '../features/upload/uploadSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        category: categoryReducer,
        color: colorReducer,
        enquiry: enquiryReducer,
        order: orderReducer,
        upload: uploadReducer
    },
})