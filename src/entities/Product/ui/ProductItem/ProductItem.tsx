import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTypedProductDetails } from '../../../../features/filters/model/api/detailsProduct'
import { Button } from '../../../../shared/ui/Button/Button'
import { Loader } from '../../../../shared/ui/Loader/Loader'
import styles from './DetailsProductItem.module.scss'

export const DetailsProductItem = () => {
	const { id } = useParams()
	const { data, isLoading, error } = useTypedProductDetails({ id: id || '' })

	const navigate = useNavigate()

	const backToProducts = useCallback(() => {
		navigate('/products')
	}, [navigate])

	if (isLoading) {
		return (
			<div className={styles.loadingWrapper}>
				<Loader />
			</div>
		)
	}

	if (error) {
		return (
			<div className={styles.detailsProductItem}>
				<Button onClick={backToProducts} className={styles.button}>
					Back
				</Button>
				<div className={styles.errorInfo}>
					<p className={styles.error}>{error.data.message}</p>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.detailsProductItem}>
			<div className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={data?.images[0]}
					alt={data?.title}
					width={400}
					height={400}
				/>
			</div>

			<div className={styles.infoWrapper}>
				<Button onClick={backToProducts} className={styles.button}>
					Back
				</Button>
				<h3 className={styles.title}>{data?.title}</h3>
				<div>
					<p className={styles.price}>{data?.price} $</p>
					<p className={styles.description}>{data?.description}</p>
				</div>
			</div>
		</div>
	)
}
