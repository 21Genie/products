import { useEffect } from 'react'
import { useAppDispatch } from '../../../app/store/store'
import { ProductsList } from '../../../entities/Product'
import { fetchProducts } from '../model/services/fetchProducts'
import { useSelector } from 'react-redux'
import {
	getProductsList,
	getProductsListIsLoading,
} from '../model/selectors/productsListSelectors'

export const ProductsListPage = () => {
	const dispatch = useAppDispatch()
	const products = useSelector(getProductsList)
	const isLoading = useSelector(getProductsListIsLoading)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	return (
		<section>
			<ProductsList products={products} isLoading={isLoading} />
		</section>
	)
}
