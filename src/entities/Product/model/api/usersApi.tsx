import { baseApi } from '../../../../shared/api/baseApi'
import type { Pokemon } from '../types/product'

export const usersApi = baseApi.injectEndpoints({
	endpoints: create => ({
		getPokemon: create.query<{ results: Pokemon[] }, void>({
			query: () => '/pokemon',
		}),
	}),
})

export const { useGetPokemonQuery } = usersApi
