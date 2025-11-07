import type { StateSchema } from '../../../../app/store/stateSchema'

export const getProductsList = (state: StateSchema) =>
	state.product.products || []

export const getProductsListIsLoading = (state: StateSchema) =>
	state.product.isLoading || false
