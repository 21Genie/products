import { Pagination as PaginationMu, Stack } from '@mui/material'
import styles from './Pagination.module.scss'
import { useState } from 'react'
import { useAppDispatch } from '../../../app/store/store'
import { fetchProducts } from '../../../pages/ProductsListPage/model/services/fetchProducts'

interface PaginationProps {
	className?: string
}

export const Pagination = ({ className }: PaginationProps) => {
	const [page, setPage] = useState(1)
	const dispatch = useAppDispatch()

	const handelChangePage = (_: any, numberPage: number) => {
		setPage(numberPage)
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		if (numberPage === 1) {
			dispatch(fetchProducts({ numberPage: 0 }))
			return
		}

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
