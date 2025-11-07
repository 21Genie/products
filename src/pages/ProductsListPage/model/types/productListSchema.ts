import type { Product } from '../../../../entities/Product/model/types/product'

export interface ProductListSchema {
	isLoading?: boolean
	error?: string
	products: Product[]
}
