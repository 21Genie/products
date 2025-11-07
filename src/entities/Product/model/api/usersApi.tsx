import { baseApi } from '../../../../shared/api/baseApi'
import type { Product } from '../types/product'

export const usersApi = baseApi.injectEndpoints({
	endpoints: create => ({
		getProducts: create.query<{ products: Product[] }, number>({
			query: (limit: number = 10) => `/products?limit=${limit}`,
		}),
	}),
})

export const { useGetProductsQuery } = usersApi
