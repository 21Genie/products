import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Product } from '../../../../entities/Product/model/types/product'
import axios from 'axios'

export const fetchProducts = createAsyncThunk<
	Product[],
	{ numberPage: number }
>('productList', async ({ numberPage }, { rejectWithValue }) => {
	try {
		const response = await axios.get(
			`https://dummyjson.com/products?limit=10&skip=${numberPage}`
		)
		const data = response.data

		return data.products
	} catch {
		return rejectWithValue('error')
	}
})
