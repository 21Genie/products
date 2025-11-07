import { ProductsList } from '../../../entities/Product'
import { useGetProductsQuery } from '../../../entities/Product/model/api/productsApi'

export const ProductsListPage = () => {
	const { data, isLoading } = useGetProductsQuery(10)

	return (
		<section>
			{data?.products && (
				<ProductsList products={data?.products} isLoading={isLoading} />
			)}
		</section>
	)
}
