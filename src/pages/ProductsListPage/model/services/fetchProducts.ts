import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Product } from '../../../../entities/Product/model/types/product'
import axios from 'axios'
import { getProductsListFilter } from '../selectors/productsListSelectors'
import type { StateSchema } from '../../../../app/store/stateSchema'

export const fetchProducts = createAsyncThunk<
	Product[],
	{ numberPage: number }
>('productList', async ({ numberPage }, { rejectWithValue, getState }) => {
	const filter = getProductsListFilter(getState() as StateSchema)
	console.log(filter)

	try {
		const response = await axios.get(
			`https://dummyjson.com/products?limit=10&sortBy=${filter}&skip=${numberPage}`
		)
		const data = response.data

		return data.products
	} catch {
		return rejectWithValue('error')
	}
})
