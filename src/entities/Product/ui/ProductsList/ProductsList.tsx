import type { Product } from '../../model/types/product'
import { ProductsListItem } from '../ProductsListItem/PokemonListItem'
import style from './ProductsList.module.scss'

interface ProductsListProps {
	products: Product[]
}

export const ProductsList = ({ products }: ProductsListProps) => {
	const renderProducts = (product: Product) => {
		return (
			<ProductsListItem
				key={product.id}
				title={product.title}
				price={product.price}
				images={product.images[0]}
			/>
		)
	}

	return <div className={style.pokemonList}>{products.map(renderProducts)}</div>
}
