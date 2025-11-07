import type { HTMLAttributes } from 'react'
import { Card } from '../../../../shared/ui/Card/Card'
import style from './ProductsListItem.module.scss'

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
		<div className={style.pokemonListItem}>
			<Card>
				<div className={style.imageWrapper}>
					<img
						src={images}
						className={style.img}
						alt={title}
						width={200}
						height={200}
					/>
				</div>

				<div className={style.infoWrapper}>
					<h3 className={style.title}>{title}</h3>
					<p>{price}$</p>
				</div>
			</Card>
		</div>
	)
}
