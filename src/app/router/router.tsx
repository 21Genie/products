import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { ROUTER_PATHS } from '../../shared/const/routes'
import { ProductsListPage } from '../../pages/ProductsListPage'

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
		],
	},
])

export const AppRouter = () => {
	return <RouterProvider router={router} />
}
