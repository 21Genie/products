import { ProductsList } from '../../../entities/Product'
import { useGetProductsQuery } from '../../../entities/Product/model/api/usersApi'

export const ProductsListPage = () => {
	const { data } = useGetProductsQuery(10)

	return (
		<section>
			{data?.products && <ProductsList products={data?.products} />}
		</section>
	)
}
