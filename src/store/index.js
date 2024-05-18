import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../features/counter/counterSlice'
import { shopAPI } from '../services/shopService'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [shopAPI.reducerPath]: shopAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopAPI.middleware)
})

setupListeners(store.dispatch)

export default store