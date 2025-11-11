import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { DetailsProductPage } from '../../pages/DetailsProductPage'
import { ProductsListPage } from '../../pages/ProductsListPage'
import { ROUTER_PATHS } from '../../shared/const/routes'
import { CreateProductPage } from '../../pages/CreateProductPage/ui/CreateProductPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: null,
		children: [
			{
				index: true,
				loader: () => redirect(`${ROUTER_PATHS.PRODUCTS_LIST}`),
			},
			{
				path: `${ROUTER_PATHS.PRODUCTS_LIST}`,
				element: <ProductsListPage />,
			},
			{
				path: `${ROUTER_PATHS.PRODUCT}`,
				element: <DetailsProductPage />,
			},
			{
				path: `${ROUTER_PATHS.CREATE_PRODUCT}`,
				element: <CreateProductPage />,
			},
		],
	},
])

export const AppRouter = () => {
	return <RouterProvider router={router} />
}
