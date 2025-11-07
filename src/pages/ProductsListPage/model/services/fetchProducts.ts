import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Product } from '../../../../entities/Product/model/types/product'

export const fetchProducts = createAsyncThunk<Product[], void>(
	'productList',
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch('https://dummyjson.com/products?limit=10')
			const data = await response.json()

			return data.products
		} catch {
			rejectWithValue('error')
		}
	}
)
