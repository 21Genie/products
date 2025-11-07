import type { HTMLAttributes } from 'react'
import Like from '../../../../shared/assets/icons/like.svg'
import Delete from '../../../../shared/assets/icons/delete2.svg'
import { Card } from '../../../../shared/ui/Card/Card'
import style from './ProductsListItem.module.scss'
import clsx from 'clsx'

interface ProductsListItemProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	id?: string
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
	return (
		<div className={style.productsListItem}>
			<Card>
				<div className={style.imageWrapper}>
					<img
						src={images}
						className={style.img}
						alt={title}
						width={200}
						height={200}
					/>
					<div className={clsx(style.like, { [style.active]: false })}>
						<Like />
					</div>

					<div className={style.delete}>
						<Delete />
					</div>
				</div>
				<div className={style.infoWrapper}>
					<h3 className={style.title}>{title}</h3>
					<p>{price}$</p>
				</div>
			</Card>
		</div>
	)
}
