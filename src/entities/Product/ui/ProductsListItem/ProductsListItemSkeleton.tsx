import { Card } from '../../../../shared/ui/Card/Card'
import { Skeleton } from '../../../../shared/ui/Skeleton/Skeleton'
import style from './ProductsListItem.module.scss'

export const ProductsListItemSkeleton = () => {
	return (
		<div className={style.productsListItem}>
			<Card>
				<div className={style.imageWrapper}>
					<Skeleton className={style.img} width={200} height={200} />
				</div>

				<div className={style.infoWrapper}>
					<Skeleton width={160} height={24} />
					<Skeleton width={40} height={24} />
				</div>
			</Card>
		</div>
	)
}
