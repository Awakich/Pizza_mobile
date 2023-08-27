import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';

type category = {
    categoryItem: number,
}

const initialState: category = {
    categoryItem: 0
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<number>) => {
            state.categoryItem = action.payload;
        },
    }
})

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;

export const categorySelector = (state: RootState) => state.categoryReducer.categoryItem;