import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { pizza } from '../../models'
import { RootState } from '../store';

type cart = {
    totalPrice: number;
    pizzas: pizza[]
}

const initialState: cart = {
    totalPrice: 0,
    pizzas: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<pizza>) => {
            const findPizza = state.pizzas.find((pizza) => pizza.id === action.payload.id)

            if (findPizza) {
                findPizza.count++;
            } else {
                state.pizzas.push({
                    ...action.payload,
                    count: 1,
                })
            }

            state.totalPrice = state.pizzas.reduce((sum, pizza) => (pizza.count * pizza.price) + sum, 0)
        },

        resetCart: (state) => {
            state.pizzas = [];
        }
    }
})

export const { addCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
export const cartSelector = (state: RootState) => state.cartReducer;