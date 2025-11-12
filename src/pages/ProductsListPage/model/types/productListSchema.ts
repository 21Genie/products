import type { Product } from '../../../../entities/Product/model/types/product'
import type { ProductFilter } from '../../../../shared/const/consts'

export interface ProductListSchema {
	isLoading?: boolean
	error?: string
	products: Product[]
	favoriteProducts: Product[]
	createProducts: Product[]
	saveProduct: Product[]
	productFilter: ProductFilter
	page: number
}
