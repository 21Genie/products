import type { Product } from '../../model/types/product'
import { ProductsListItem } from '../ProductsListItem/ProductsListItem'
import { ProductsListItemSkeleton } from '../ProductsListItem/ProductsListItemSkeleton'
import style from './ProductsList.module.scss'

interface ProductsListProps {
	products: Product[]
	isLoading?: boolean
}

export const ProductsList = ({ products, isLoading }: ProductsListProps) => {
	const getSkeleton = () =>
		new Array(10)
			.fill(0)
			.map((_, index) => <ProductsListItemSkeleton key={index} />)

	const renderProducts = (product: Product) => {
		return (
			<ProductsListItem
				id={product.id}
				key={product.id}
				title={product.title}
				price={product.price}
				images={product.images[0]}
			/>
		)
	}

	if (isLoading) {
		return <div className={style.productsList}>{getSkeleton()}</div>
	}

	return <ul className={style.productsList}>{products.map(renderProducts)}</ul>
}
