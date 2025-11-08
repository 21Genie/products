import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { ProductsList } from '../../../entities/Product'
import { fetchProducts } from '../model/services/fetchProducts'

import { Filters } from '../../../features/filters'
import {
	getFavoriteProducts,
	getProductsList,
	getProductsListIsLoading,
} from '../model/selectors/productsListSelectors'
import type { ProductFilter } from '../../../shared/const/consts'
import { productListActions } from '../model/slice/productListSlice'

export const ProductsListPage = () => {
	const dispatch = useAppDispatch()
	const products = useAppSelector(getProductsList)
	const isLoading = useAppSelector(getProductsListIsLoading)

	const onChangeFilter = useCallback(
		(newFilter: ProductFilter) => {
			dispatch(productListActions.setProductFilter(newFilter))
		},
		[dispatch]
	)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<section>
			<Filters onChangeFilter={onChangeFilter} />
			<ProductsList products={products} isLoading={isLoading} />
		</section>
	)
}
