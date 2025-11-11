import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProductListSchema } from '../types/productListSchema'
import { fetchProducts } from '../services/fetchProducts'
import { ProductFilter } from '../../../../shared/const/consts'
import type { Product } from '../../../../entities/Product/model/types/product'

const initialState: ProductListSchema = {
	error: undefined,
	isLoading: false,
	products: [],
	favoriteProducts: [],
	createProducts: [],
	saveProduct: [],
	productFilter: ProductFilter.ALL,
}

export const productListSlice = createSlice({
	name: 'productList',
	initialState,
	reducers: {
		createProduct: (state, { payload }: PayloadAction<Product>) => {
			state.createProducts.push(payload)
		},
		deleteProduct: (state, { payload }: PayloadAction<{ id: number }>) => {
			const product = state.products.find(item => item.id === payload.id)
			state.favoriteProducts = state.favoriteProducts.filter(
				item => item.id !== product?.id
			)

			state.products = state.products.filter(
				product => product.id !== payload.id
			)
		},
		toggleFavoriteProduct: (
			state,
			{ payload }: PayloadAction<{ id: number }>
		) => {
			const product = state.products.find(item => item.id === payload.id)

			if (product && !product.isFavorite) {
				product.isFavorite = true
				state.favoriteProducts.push(product)
			} else {
				if (product) product.isFavorite = false
				state.favoriteProducts = state.favoriteProducts.filter(
					item => item.id !== payload.id
				)
			}
		},
		setProductFilter: (state, { payload }: PayloadAction<ProductFilter>) => {
			if (payload === 'favorites') {
				state.saveProduct = state.products
				state.products = state.favoriteProducts
			}
			if (payload === 'all') {
				state.products = state.saveProduct
			}
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

				state.products = action.payload.map(product => ({
					...product,
					isFavorite: false,
				}))

				if (state.createProducts.length > 0) {
					state.createProducts.map(item => state.products.push(item))
				}
			})
			.addCase(fetchProducts.rejected, state => {
				state.isLoading = false
				state.error = 'error'
			})
	},
})

export const { reducer: productListReducer } = productListSlice
export const { actions: productListActions } = productListSlice
