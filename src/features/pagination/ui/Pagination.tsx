import { Pagination as PaginationMu, Stack } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../../app/store/store'
import { productListActions } from '../../../pages/ProductsListPage'
import { getProductsListPage } from '../../../pages/ProductsListPage/model/selectors/productsListSelectors'
import { fetchProducts } from '../../../pages/ProductsListPage/model/services/fetchProducts'
import styles from './Pagination.module.scss'

export const Pagination = () => {
	const dispatch = useAppDispatch()
	const page = useAppSelector(getProductsListPage)

	const handelChangePage = (_: any, numberPage: number) => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		if (numberPage === 1) {
			dispatch(fetchProducts({ numberPage: 0 }))
			return
		}
		dispatch(productListActions.setPage(numberPage))
		dispatch(fetchProducts({ numberPage: numberPage * 10 }))
	}

	return (
		<Stack spacing={2}>
			<PaginationMu
				page={page}
				onChange={handelChangePage}
				className={styles.pagination}
				count={10}
				color='primary'
			/>
		</Stack>
	)
}
