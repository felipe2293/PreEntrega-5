import { createSlice } from "@reduxjs/toolkit";
import CATEGORIES from '../../constantes/data/categories.json'

const initialState = {
    data: CATEGORIES
}

const categoriesSlices = createSlice({
    name: "categories",
    initialState,
    reducers: {},
})

export default categoriesSlices.reducer;