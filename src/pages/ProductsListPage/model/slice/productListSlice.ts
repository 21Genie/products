import { createSlice } from '@reduxjs/toolkit'
import type { ProductListSchema } from '../types/productListSchema'
import { fetchProducts } from '../services/fetchProducts'

const initialState: ProductListSchema = {
	error: undefined,
	isLoading: false,
	products: [],
}

export const productListSlice = createSlice({
	name: 'productList',
	initialState,
	reducers: {},
	extraReducers: build => {
		build
			.addCase(fetchProducts.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.error = undefined
				state.isLoading = false
				state.products = action.payload.products
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false
				state.error = 'error'
			})
	},
})

export const { reducer: productListReducer } = productListSlice
export const { actions: productListActions } = productListSlice
