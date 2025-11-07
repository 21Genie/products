import type { HTMLAttributes } from 'react'
import Like from '../../../../shared/assets/icons/like.svg'
import Delete from '../../../../shared/assets/icons/delete2.svg'
import { Card } from '../../../../shared/ui/Card/Card'
import style from './ProductsListItem.module.scss'
import clsx from 'clsx'
import { useAppDispatch } from '../../../../app/store/store'
import { productListActions } from '../../../../pages/ProductsListPage/model/slice/productListSlice'

type HTMLAttributesProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'>

interface ProductsListItemProps extends HTMLAttributesProps {
	className?: string
	id?: number
	title?: string
	price?: number
	images?: string
}

export const ProductsListItem = ({
	className,
	id,
	title,
	price,
	images = '',
}: ProductsListItemProps) => {
	const dispatch = useAppDispatch()

	const handleDeleteProduct = () => {
		if (id) {
			dispatch(productListActions.deleteProduct({ id }))
		}
	}

	const handleSetFavoriteProduct = () => {
		dispatch(productListActions.setFavoriteProduct(true))
	}

	return (
		<li className={style.productsListItem}>
			<Card>
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
						className={clsx(style.like, { [style.active]: false })}
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
			</Card>
		</li>
	)
}
