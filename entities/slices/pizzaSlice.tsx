import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { pizza } from '../../models';
import axios, { AxiosResponse } from 'axios';
import { RootState } from '../store';

type pizzas = {
    pizzas: pizza[]
}

type Params = {
    category: string;
}

export const getPizzas = createAsyncThunk<pizza[], Params>('pizzas/getPizzaId', async (param: Params) => {
    const { category } = param;
    const res: AxiosResponse<pizza[]> = await axios.get(`https://6468f6b203bb12ac208307ac.mockapi.io/pizzas?&${category}`);
    return res.data;
})

const initialState: pizzas = {
    pizzas: []
}


const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},

    extraReducers: (builder): void => {
        builder.addCase(getPizzas.fulfilled, (state, action: PayloadAction<pizza[]>): void => {
            state.pizzas = action.payload;
        }),

            builder.addCase(getPizzas.pending, (state): void => {
                state.pizzas = []
            }),

            builder.addCase(getPizzas.rejected, (state): void => {
                state.pizzas = []
            })
    },
})

export const { } = pizzaSlice.actions;
export default pizzaSlice.reducer;
export const pizzaSelector = (state: RootState) => state.pizzaReducer.pizzas;