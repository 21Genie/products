import type { Product } from '../../../../entities/Product/model/types/product'
import { baseApi } from '../../../../shared/api/baseApi'

export const detailsProductApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getDetailsProduct: build.query<Product, { id: string }>({
			query: ({ id }) => `/products/${id}`,
		}),
	}),
})

export const { useGetDetailsProductQuery } = detailsProductApi
