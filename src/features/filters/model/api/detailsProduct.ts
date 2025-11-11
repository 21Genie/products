import type { Product } from '../../../../entities/Product/model/types/product'
import { baseApi } from '../../../../shared/api/baseApi'

interface ProductApiError {
	data: {
		message: string
	}
	status: number
}
export const detailsProductApi = baseApi.injectEndpoints({
	endpoints: build => ({
		getDetailsProduct: build.query<Product, { id: string }>({
			query: ({ id }) => `/products/${id}`,
		}),
	}),
})

export const useTypedProductDetails = (id: { id: string }) => {
	const result = detailsProductApi.useGetDetailsProductQuery(id)

	const error = result.error as ProductApiError | undefined

	return {
		...result,
		error,
		errorData: error?.data,
		errorMessage: error?.data?.message,
	}
}
