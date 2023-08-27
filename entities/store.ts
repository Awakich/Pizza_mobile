import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
import pizzaReducer from './slices/pizzaSlice';
import cartReducer from './slices/cartlice';

export const store = configureStore({
    reducer: {
        categoryReducer,
        pizzaReducer,
        cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;