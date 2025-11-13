import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { ProductsList } from '../../../entities/Product'
import { fetchProducts } from '../model/services/fetchProducts'

import { Filters } from '../../../features/filters'
import type { ProductFilter } from '../../../shared/const/consts'
import {
	getProductsList,
	getProductsListIsLoading,
} from '../model/selectors/productsListSelectors'
import { productListActions } from '../model/slice/productListSlice'

import { ROUTER_PATHS } from '../../../shared/const/routes'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'
import { Button } from '../../../shared/ui/Button/Button'
import styles from './ProductsListPage.module.scss'
import { Pagination } from '../../../features/pagination/ui/Pagination'

const ProductsListPage = () => {
	const dispatch = useAppDispatch()
	const products = useAppSelector(getProductsList)
	const isLoading = useAppSelector(getProductsListIsLoading)

	const onChangeFilter = useCallback(
		(newFilter: ProductFilter) => {
			if (newFilter === 'favorites') {
				dispatch(productListActions.setProductFilter(newFilter))
				return
			}

			dispatch(productListActions.setProductFilter(newFilter))
			dispatch(productListActions.setPage(1))
			dispatch(fetchProducts({ numberPage: 1 }))
		},
		[dispatch]
	)

	useEffect(() => {
		dispatch(fetchProducts({ numberPage: 0 }))
	}, [dispatch])

	return (
		<section>
			<div className={styles.header}>
				<Filters onChangeFilter={onChangeFilter} />
				<p>Лучше использовать VPN</p>
				<AppLink to={ROUTER_PATHS.CREATE_PRODUCT}>
					<Button>Create product</Button>
				</AppLink>
			</div>
			<ProductsList products={products} isLoading={isLoading} />
			{products.length > 0 && (
				<div className={styles.paginationWrapper}>
					<Pagination />
				</div>
			)}
		</section>
	)
}

export default ProductsListPage
