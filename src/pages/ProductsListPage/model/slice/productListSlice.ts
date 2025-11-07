import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProductListSchema } from '../types/productListSchema'
import { fetchProducts } from '../services/fetchProducts'
import type { Product } from '../../../../entities/Product/model/types/product'

const initialState: ProductListSchema = {
	error: undefined,
	isLoading: false,
	products: [],
}

export const productListSlice = createSlice({
	name: 'productList',
	initialState,
	reducers: {
		deleteProduct: (state, { payload }: PayloadAction<{ id: number }>) => {
			state.products = state.products.filter(
				product => product.id !== payload.id
			)
		},
	},
	extraReducers: build => {
		build
			.addCase(fetchProducts.pending, state => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.error = undefined
				state.isLoading = false

				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, state => {
				state.isLoading = false
				state.error = 'error'
			})
	},
})

export const { reducer: productListReducer } = productListSlice
export const { actions: productListActions } = productListSlice
