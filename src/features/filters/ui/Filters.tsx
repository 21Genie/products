import clsx from 'clsx'
import styles from './Filters.module.scss'
import { ProductFilter } from '../../../shared/const/consts'
import { useMemo } from 'react'
import { Select, type SelectOptions } from '../../../shared/Select/Select'

interface FilterProductProps {
	className?: string
	filter?: ProductFilter
	onChangeFilter: (newFilter: ProductFilter) => void
}

export const Filters = ({
	className,
	filter,
	onChangeFilter,
}: FilterProductProps) => {
	const productFilterOptions = useMemo<SelectOptions<ProductFilter>[]>(
		() => [
			{
				value: ProductFilter.ALL,
				content: 'All',
			},
			{
				value: ProductFilter.FAVORITE,
				content: 'Favorite',
			},
		],
		[]
	)

	return (
		<div className={clsx(styles.filterProduct, [className])}>
			<Select
				label={'Sort by'}
				options={productFilterOptions}
				value={filter}
				onChange={onChangeFilter}
				name='sort'
			/>
		</div>
	)
}
