import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../features/counter/counterSlice'
import cartReducer from './../features/counter/cartSlice'
import { shopAPI } from '../services/shopService'
import { setupListeners } from '@reduxjs/toolkit/query'
import authReducer from '../features/user/userSlice'
import { authApi } from '../services/authService'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer,
        auth: authReducer,
        [shopAPI.reducerPath]: shopAPI.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(shopAPI.middleware)
            .concat(authApi.middleware)
})

setupListeners(store.dispatch)

export default store