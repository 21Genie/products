import type { StateSchema } from '../../../../app/store/stateSchema'

export const getProductsList = (state: StateSchema) =>
	state.product.products || []

export const getProductsListIsLoading = (state: StateSchema) =>
	state.product.isLoading || false

export const getProductsListError = (state: StateSchema) =>
	state.product.error || false

export const getProductsListFilter = (state: StateSchema) =>
	state.product.productFilter

export const getFavoriteProducts = (state: StateSchema) =>
	state.product.favoriteProducts || []
