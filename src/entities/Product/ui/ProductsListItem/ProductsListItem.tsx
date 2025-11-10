import clsx from 'clsx'
import { useState, type HTMLAttributes } from 'react'
import { useAppDispatch } from '../../../../app/store/store'
import { productListActions } from '../../../../pages/ProductsListPage'
import Delete from '../../../../shared/assets/icons/delete2.svg'
import Like from '../../../../shared/assets/icons/like.svg'
import { Card } from '../../../../shared/ui/Card/Card'
import style from './ProductsListItem.module.scss'
import { AppLink } from '../../../../shared/ui/AppLink/AppLink'

type HTMLAttributesProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'>

interface ProductsListItemProps extends HTMLAttributesProps {
	id?: number
	title?: string
	price?: number
	images?: string
}

export const ProductsListItem = ({
	id,
	title,
	price,
	images = '',
}: ProductsListItemProps) => {
	const [isFavoriteProduct, setIsFavoriteProduct] = useState(false)

	const dispatch = useAppDispatch()

	const handleDeleteProduct = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.preventDefault()
		e.stopPropagation()
		if (id) {
			dispatch(productListActions.deleteProduct({ id }))
		}
	}

	const handleSetFavoriteProduct = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.preventDefault()
		e.stopPropagation()
		setIsFavoriteProduct(isFavoriteProduct => !isFavoriteProduct)

		if (id) {
			dispatch(productListActions.toggleFavoriteProduct({ id }))
		}
	}

	return (
		<li className={style.productsListItem}>
			<Card>
				<AppLink to={`/products/${id}`}>
					<div className={style.imageWrapper}>
						<img
							src={images}
							className={style.img}
							alt={title}
							width={200}
							height={200}
						/>
						<div
							onClick={handleSetFavoriteProduct}
							className={clsx(style.like, {
								[style.active]: isFavoriteProduct,
							})}
						>
							<Like />
						</div>

						<div className={style.delete} onClick={handleDeleteProduct}>
							<Delete />
						</div>
					</div>
					<div className={style.infoWrapper}>
						<h3 className={style.title}>{title}</h3>
						<p>{price}$</p>
					</div>
				</AppLink>
			</Card>
		</li>
	)
}
