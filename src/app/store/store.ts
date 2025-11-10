import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import type { StateSchema } from './stateSchema'
import { productListReducer } from '../../pages/ProductsListPage/model/slice/productListSlice'
import { baseApi } from '../../shared/api/baseApi'

export const store = configureStore<StateSchema>({
	reducer: {
		product: productListReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	// @ts-ignore
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
