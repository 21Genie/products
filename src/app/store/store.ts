import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import type { StateSchema } from './stateSchema'
import { productListReducer } from '../../pages/ProductsListPage/model/slice/productListSlice'

export const store = configureStore<StateSchema>({
	reducer: {
		product: productListReducer,
	},
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<AppState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
