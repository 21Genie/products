import type { ProductListSchema } from '../../pages/ProductsListPage'
import type { baseApi } from '../../shared/api/baseApi'

export interface StateSchema {
	product: ProductListSchema
	[baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
}
